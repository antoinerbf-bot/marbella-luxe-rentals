import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Production target: Cloudflare Workers.
 * Keep the build target explicit so GitHub -> Cloudflare is deterministic.
 */
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
  },
});
