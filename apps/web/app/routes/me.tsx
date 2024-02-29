import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { enforcePrivatePage } from "~/lib/kinde.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { user, accessToken } = await enforcePrivatePage(request)
  return json({
    user,
    session: accessToken,
  })
}

export default function Me() {
  const loaderData = useLoaderData<typeof loader>()
  return <>
    <h1>me</h1>
    <p>JWT: {JSON.stringify(loaderData.user)}</p>
    <p>Session: {JSON.stringify(loaderData.session)}</p>
    <Outlet />
  </>
}
