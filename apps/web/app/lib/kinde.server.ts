
import { redirect } from "@remix-run/cloudflare";
import { getKindeSession } from "@kinde-oss/kinde-auth-remix-sdk";

// See https://github.com/kinde-oss/kinde-auth-remix-sdk/tree/master
// And https://kinde.notion.site/Remix-SDK-Docs-eeba8882b6254b7b9db20a62a927cc29

export const enforcePrivatePage = async (req: Request) => {
  const { user, accessTokenRaw } = await getKindeSession(req);

  if (user === null) {
    throw redirect(`/kinde-auth/login?returnTo=${'/TODO:getCurrentPath'}`);
  }

  return {
    user, accessToken: accessTokenRaw,
  }
}

export const tryGetSession = async (req: Request) => {
  const { user } = await getKindeSession(req);

  return {
    isLoggedIn: user !== null
  }
}
