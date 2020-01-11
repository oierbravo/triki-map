// rollup.config.js
import json from 'rollup-plugin-json';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";
import minify from 'rollup-plugin-babel-minify';

import pkg from './package.json';


export default [
  // browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'trikiMap',
			file: pkg.browser.replace('.min',''),
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json()
    ]
  },{
		input: 'src/index.js',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json(),
      minify(),
    ]
  },{
		input: 'src/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
    ],
    plugins: [
      json()
    ]
	}
];