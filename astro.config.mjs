// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  // output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  env: {
    schema: {
      STRAPI_HOST: envField.string({ context: "client", access: "public" }),
      STRAPI_TOKEN: envField.string({ context: "server", access: "secret" }),
      IP_API_ENDPOINT: envField.string({ context: "client", access: "public" }),
    },
  },
});
