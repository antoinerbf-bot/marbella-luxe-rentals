import { defineConfig as defineViteConfig } from "vite";
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

/**
 * Vercel production target.
 * The Lovable wrapper normally configures Cloudflare for its own environment;
 * disable its Nitro invocation here and explicitly build a Vercel Nitro output.
 */
export default defineViteConfig(async (env) => {
  const config = await defineLovableConfig({
    tanstackStart: {
      server: { entry: "server" },
    },
    // @ts-expect-error The wrapper accepts this at runtime, but its published type may lag.
    nitro: false,
  })(env);

  if (env.command === "build") {
    config.plugins = [
      ...(config.plugins ?? []),
      nitro({
        preset: "vercel",
        output: {
          dir: ".vercel/output",
          serverDir: ".vercel/output/functions/__server.func",
          publicDir: ".vercel/output/static",
        },
      }),
    ];
  }

  return config;
});
