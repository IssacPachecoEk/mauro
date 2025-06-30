import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'serve' ? [
      runtimeErrorOverlay(),
      ...(process.env.REPL_ID !== undefined ? [
        await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer())
      ] : [])
    ] : [])
  ],
  base: command === 'build' ? "https://issacpachecoek.github.io/mauro/" : undefined,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: command === 'serve' ? path.resolve(__dirname, "client") : "client",
  build: {
    outDir: command === 'serve' ? path.resolve(__dirname, "dist/public") : "../dist",
    emptyOutDir: true,
  },
  ...(command === 'serve' ? {
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  } : {})
}));
