import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import { dts } from "rollup-plugin-dts";
import del from 'rollup-plugin-delete';
import { RollupOptions } from "rollup";

// To handle css files
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };
import tsConfigJson from "./tsconfig.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "rollup.config.ts",
          "src/**/*.mdx",
          "src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
          "src/stories/*"
        ],
        sourceMap: true
      }),
      postcss(),
      terser(),
      image()
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: tsConfigJson.compilerOptions.baseUrl,
          paths: tsConfigJson.compilerOptions.paths,
        },
      }),
    ],
    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
] as RollupOptions[];
