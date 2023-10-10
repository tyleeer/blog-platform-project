import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blog-platform-project/",
  plugins: [react()],
  server: { port: 3000 },
});
