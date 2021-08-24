import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteComponents, { AntDesignVueResolver } from "vite-plugin-components";
import path from "path";

function pathResolve(dir) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteComponents({
      globalComponentsDeclaration: pathResolve("./types/components.d.ts"),
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
});
