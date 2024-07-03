import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "youssof-antar",
      project: "apple-website",
      release: {
        name: "apple-website",
      },
      telemetry: false,
    }),
  ],
  base: "/apple-clone-react/",
  build: {
    sourcemap: true,
    outDir: "build",
  },
});
