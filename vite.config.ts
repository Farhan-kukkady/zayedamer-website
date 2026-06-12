import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    react(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
  ],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
  },
});
