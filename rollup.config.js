import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

const data =  {
    input: "src/lib/index.ts",
    output: [
        // {
        //     file: packageJson.main,
        //     format: "cjs",
        //     sourcemap: false,
        //     exports:'named',
        // },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: false
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: false })
    ]
};
export default data;