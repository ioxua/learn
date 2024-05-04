import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// See https://kinde.com/docs/developer-tools/nextjs-sdk/#set-up-kinde-auth-route-handlers

export const GET = handleAuth();
