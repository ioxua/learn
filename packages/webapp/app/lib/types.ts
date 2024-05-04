import { AvailableLanguageTag } from "~/i18n/paraglide/runtime";
import { defaultLang } from "./i18n.server";

export type UserSession = {
  accessToken: string;
  refreshToken: string;
  data: UserData;
};

export type UserData = {
  id: string;
  name: string;
  email: string | null;
  profilePictureUrl: string | null;
};

/// https://kinde.com/api/docs/#tocS_user_identity
export type KindeUserProfile = {
  id: string;
  preferred_email: string;
  provided_id: string | null;
  last_name: string;
  first_name: string;
  picture: string | null;
};

export type UserPreferences = {
  lang: AvailableLanguageTag;
};

export const defaultUserPreferences: UserPreferences = {
  lang: defaultLang,
}
