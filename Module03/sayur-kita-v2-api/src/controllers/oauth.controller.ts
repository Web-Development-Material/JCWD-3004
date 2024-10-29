import { Request, Response } from "express";
import { OAuthService } from "../services/oauth.service";

export class OAuthController {
  public oauthService: OAuthService;

  constructor() {
    this.oauthService = new OAuthService();
  }

  //   async loginWithGoogle(req: Request, res: Response): Promise<any> {
  //     const { code } = req.query;

  //     if (!code) {
  //       return res.status(400).send({
  //         message: "Authorization code is missing",
  //       });
  //     }

  //     const result = await this.oauthService.loginWithGoogle(String(code));
  //     if (result) {
  //       res.status(200).send({
  //         message: "Login successful",
  //         status: res.statusCode,
  //         token: result.token,
  //         user: result.user,
  //       });
  //     } else {
  //       res.status(404).send({
  //         message: "Failed to login. Please try again",
  //         status: res.statusCode,
  //       });
  //     }
  //   }
}
