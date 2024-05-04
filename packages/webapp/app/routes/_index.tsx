import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { userPreferences } from "~/lib/cookie.server";

// Simply redirect to the default lang
export async function loader({ request }: LoaderFunctionArgs) {
  const preferences = await userPreferences.getOrDefault(request);
  return redirect(`/${preferences.lang}`);
}
