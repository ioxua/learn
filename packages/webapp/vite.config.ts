import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// See https://remix.run/docs/en/main/future/vite#augmenting-load-context

export default defineConfig({
  server: {
    port: 42069,
  },
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()],
});
