import { Cookie, createCookie } from "@remix-run/node"; // or cloudflare/deno
import { defaultUserPreferences } from "./types";

const createCookieWrapper = <T>(cookie: Cookie, defaultValue: T) => {
  return {
    async get(request: Request): Promise<T | null> {
      const value: T | null = await cookie.parse(request.headers.get('Cookie'))
      return value
    },
    async getOrDefault(request: Request): Promise<T> {
      const value: T | null = await cookie.parse(request.headers.get('Cookie'))
      return value ?? defaultValue
    },
    async set(value: T) {
      return await cookie.serialize(value)
    }
  }
}

const userPrefCookie = createCookie("user-prefs", {
  maxAge: 604_800, // one week
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  secrets: process.env.COOKIE_SECRETS.split(','),
  secure: process.env.NODE_ENV === "production",
});

export const userPreferences = createCookieWrapper(userPrefCookie, defaultUserPreferences)
