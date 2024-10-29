import { PrismaClient } from "@prisma/client";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { supabase } from "../supabase";
import jwt from "jsonwebtoken";

export class OAuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.configurePassport();
  }

  private configurePassport() {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_SECRET_ID as string,
          callbackURL: process.env.OAUTH_REDIRECT_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            // cari user berdasarkan google id
            let existingUser = await this.prisma.users.findUnique({
              where: { googleId: profile.id },
            });

            if (!existingUser) {
              //jika user tidak ditemukan, maka buat user baru
              existingUser = await this.prisma.users.create({
                data: {
                  email: profile.emails?.[0].value as string,
                  name: profile.displayName,
                  googleId: profile.id,
                  access_token: accessToken,
                  refresh_token: refreshToken,
                  password: "",
                  role: "user",
                },
              });
            } else {
              //jika user ditemukan, maka update
              await this.prisma.users.update({
                where: {
                  user_id: existingUser.user_id,
                },
                data: {
                  access_token: accessToken,
                  refresh_token: refreshToken,
                },
              });

              return done(null, { user: existingUser });
            }
          } catch (error) {
            return done(error, undefined);
          }
        }
      )
    );

    // serialize user untuk menyimpan user dalam session
    passport.serializeUser((user: any, done) => {
      done(null, user.user_id);
    });

    // deserialize user untuk mengambil user dari session
    passport.deserializeUser(async (id: number, done) => {
      try {
        const user = await this.prisma.users.findUnique({
          where: {
            user_id: id,
          },
        });
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    });
  }

  // handle auth dengan passport
  authenticateWithGoogle() {
    return passport.authenticate("google", {
      scope: ["profile", "email"],
    });
  }

  // handle callback setelah authentication
  handleGoogleCallback() {
    return passport.authenticate("google", {
      failureRedirect: "/auth/login",
      session: false,
    });
  }
}
