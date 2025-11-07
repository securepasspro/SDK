import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/securepasspro.js",
  output: [
    // CommonJS build (Node)
    {
      file: "dist/securepasspro.js",
      format: "cjs",
      exports: "default",
      sourcemap: true,
      interop: "auto"
    },
    // Minified browser build (UMD)
    {
      file: "dist/securepasspro.min.js",
      format: "umd",
      name: "SecurePassSDK",
      plugins: [terser()],
      sourcemap: true,
    },
    // ESM build (for modern bundlers)
    {
      file: "dist/securepasspro.esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      browser: true, // ensures browser compatibility
    }),
    commonjs(),
  ],
  external: [], // you can add external dependencies here later
};
