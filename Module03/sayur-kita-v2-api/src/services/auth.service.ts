import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Auth } from "../models/models";
import { PrismaClient } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET as string;

export class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async register(data: Auth) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
      },
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password)) || "") {
      throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign(
      { id: user.user_id, role: user.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    ); // masa berlaku token selama 1 jam

    const refreshToken = jwt.sign(
      { id: user.user_id, role: user.role },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    ); // masa berlaku refresh token lebih panjang, yaitu 7 hari

    // simpan refresh token di db
    await this.prisma.users.update({
      where: {
        email: email,
      },
      data: {
        refresh_token: refreshToken,
      },
    });

    return { accessToken, refreshToken, user };
  }

  async refreshToken(token: string) {
    try {
      const decoded: any = jwt.verify(token, JWT_SECRET);
      const user = await this.prisma.users.findUnique({
        where: {
          user_id: decoded.id,
        },
      });
      if (!user) {
        throw new Error("Invalid refresh token");
      }

      // buat token baru
      const accessToken = jwt.sign(
        { id: user.user_id, role: user.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      return accessToken;
    } catch (error) {
      throw new Error("Invalid refresh token");
    }
  }
}
