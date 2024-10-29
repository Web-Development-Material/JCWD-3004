import { Router, Request, Response } from "express";
import environment from "dotenv";
// import { OAuthController } from "../controllers/oauth.controller";
import { OAuthService } from "../services/oauth.service";

environment.config();

const router = Router();
const oauthService = new OAuthService();
// const oauthController = new OAuthController();
// const SUPABASE_URL = process.env.SUPABASE_URL as string;
// const OAUTH_REDIRECT_URL = process.env.OAUTH_REDIRECT_URL as string;

// // redirect user ke google oauth
// router.get("/google", async(req: Request, res: Response) => {
//   const redirectUrl = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${OAUTH_REDIRECT_URL}`;
//   res.redirect(redirectUrl);
// });

// // handle callback setelah redirect ke google oauth untuk mendapatkan informasi user
// router.get("/callback", oauthController.loginWithGoogle.bind(oauthController));

router.get("/google", oauthService.authenticateWithGoogle.bind(oauthService));
router.get(
  "/google/callback",
  oauthService.handleGoogleCallback.bind(oauthService),
  (req: Request, res: Response) => {
    res.status(200).send({
      token: (req as any).user.token,
      user: (req as any).user.user,
    });
  }
);

export default router;
