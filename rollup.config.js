import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [{
  input: 'src/png.ts',
  output: {
    file: "lib/png.js",
    format: 'esm',
    name: 'pngQrCode',
    sourcemap: false
  },
  plugins: [typescript(), nodeResolve(), commonjs()]
}];