// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'commands/bundle/main.js',
  output: {
    file: 'commands/bundle/bundle.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    //resolve(),
    commonjs(),
    json()
  ]
};
