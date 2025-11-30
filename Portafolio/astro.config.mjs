// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        devicon: [
          "php",
          "csharp",
          "python",
          "javascript",
          "mysql-wordmark",
          "postgresql-wordmark",
          "laravel-wordmark",
          "linux",
          "dotnetcore",
          "javascript",
        ],
        logos:[
          "aws",
          "jwt"
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
