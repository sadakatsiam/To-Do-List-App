import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
build: {
rollupOptions: {
input: {
I
script: resolve(_dirname, "script.js")

},
},
},
});