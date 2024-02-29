// See .env.example

import { type IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }

  namespace NodeJS {
    interface ProcessEnv {
      KINDE_AUTH_DOMAIN: string;
      KINDE_CLIENT_ID: string;
      KINDE_CLIENT_SECRET: string;
      KINDE_LOGIN_REDIRECT: string;
      KINDE_LOGOUT_REDIRECT: string;


      AUTHN_AUTHORIZATION_URL: string;
      AUTHN_USER_PROFILE_URL: string;
      AUTHN_CALLBACK_URL: string;
      AUTHN_REFRESH_URL: string;
      AUTHN_TOKEN_URL: string;
      AUTHN_JWKS_URL: string;
      AUTHN_CLIENT_ID: string;
      AUTHN_CLIENT_SECRET: string;
      COOKIE_SECRETS: string;
    }
  }
}

export {};
