import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, json, useLoaderData } from "@remix-run/react";
import { tryGetSession } from "~/lib/kinde.server";
import { updateLangFromReq } from "~/lib/i18n.server";
import BaseNavbar from "~/ui/navbars/BaseNavbar";

export async function loader({ request }: LoaderFunctionArgs) {
  const { isLoggedIn } = await tryGetSession(request);
  const lang = updateLangFromReq(request);
  const basePath = `/${lang}`;

  const routes/*: NavbarOption[]*/ = [
    { label: "Landing", to: `${basePath}/` },
    { label: "About", to: `${basePath}/about` },
    { label: "Blog", to: `${basePath}/blog` },
    {
      label: "Dropdown",
      options: [
        { label: "About", to: `${basePath}/subpage-1` },
        {
          label: "Sub-menu",
          options: [
            { label: "About2", to: `${basePath}/subsubpage-1` },
            { label: "Downloads2", to: `${basePath}/subsubpage-2` },
          ],
        },
      ],
    },
  ];

  return json({
    routes,
    isLoggedIn,
  });
}

export default function Template() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <BaseNavbar options={data.routes} isLoggedIn={data.isLoggedIn} />
      <Outlet />
    </>
  );
}
