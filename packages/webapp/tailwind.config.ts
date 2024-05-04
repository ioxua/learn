import type { Config } from "tailwindcss";
import preline from "preline/plugin";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",

    // This line is duplicated since, inside NPM Workspaces, some
    // dependencies may be installed on the monorepo root -_-
    "./node_modules/preline/preline.js",
    "../../node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms, preline],
} satisfies Config
