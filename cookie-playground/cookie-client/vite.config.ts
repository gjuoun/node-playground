import { defineConfig } from "vite";
import esBuildReact from "@vitejs/plugin-react";
import swcReact from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [esBuildReact()],
  plugins: [swcReact()],
});
