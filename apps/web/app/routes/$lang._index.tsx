import type {
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { updateLangFromReq } from "~/lib/i18n.server";

export async function loader({ request }: LoaderFunctionArgs) {
  updateLangFromReq(request);
  return null
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to Remix</h1>
        <a href="/kinde-auth/login">Login por link</a>
        <a href="/kinde-auth/register">Cadastro</a>
        <a href="/kinde-auth/logout">Logout por link</a>
      </div>
    </>
  );
}

