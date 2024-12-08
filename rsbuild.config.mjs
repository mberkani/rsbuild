/*
import { defineConfig } from '@rsbuild/core';

export default defineConfig({});
*/

import { defineConfig } from '@rsbuild/core';
import {rspack}  from "@rspack/core";
import HtmlRspackPlugin from '@rspack/plugin-html';
import { pluginSass } from '@rsbuild/plugin-sass';

import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("\n: __dirname ::")
console.log(__dirname)

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

// parametres de sorties:
const root_folder= path.resolve(__dirname, '../frobshop/frobshop/static/')
const defaultDistPath = {
    root: root_folder, //'pub-build',
    html: './',
    js: 'frobshop/',
    jsAsync: 'js/async',
    css: 'frobshop/',
    cssAsync: 'css/async',
    svg: 'svg',
    font: 'webfonts',
    wasm: 'wasm',
    image: 'image',
    media: 'media',
    assets: 'assets',
  };

// noms de fichiers:
// Development mode
const devDefaultFilename = {
    html: '[name].html',
    js: '[name].js',
    css: '[name].css',
    svg: '[name].[contenthash:8].svg',
    font: '[name].[contenthash:8][ext]',
    image: '[name].[contenthash:8][ext]',
    media: '[name].[contenthash:8][ext]',
    assets: '[name].[contenthash:8][ext]',
  };
  
  // Production mode
  const prodDefaultFilename = {
    html: '[name].html',
    js: '[name].js',
    css: '[name][contenthash:0].css',
    svg: '[name].[contenthash:1].svg',
    font: '[name].[contenthash:1][ext]',
    image: '[name].[contenthash:1][ext]',
    media: '[name].[contenthash:1][ext]',
    assets: '[name].[contenthash:1][ext]',
  };

export default defineConfig({
    mode: 'production', //'development',
	context: __dirname,

	entry: {
		main: "./src/index.js"
	},
	output: {
        distPath: defaultDistPath,
        filename: prodDefaultFilename,
		cleanDistPath: false,
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'webfonts/[name][ext]',
                },
            },
			{
				test: /\.js$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "ecmascript"
								}
							},
							env: { targets }
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ["postcss-loader"],
				type: "css",
			},
			{
				test: /\.scss$/,  // Cible les fichiers SCSS
				use: [
				  'style-loader',  // Injecte le CSS dans le DOM
				  'css-loader',    // Interprète @import et url() comme des require() dans le CSS
				  'sass-loader',   // Compile le SCSS en CSS
				],
			},
		],
	},
    plugins: [pluginSass()],
	tools: {
        rspack: {
          plugins: [
            new HtmlRspackPlugin({
                title:"rs-oscar",
                filename:"index-out.html",
                //publicPath: path.resolve(__dirname, 'public/static')                
            }),
            
          ],
        },
      },
      
	optimization: {
		minimize: false,
		//minimizer: [
		//	new rspack.SwcJsMinimizerRspackPlugin(),
			//new rspack.LightningCssMinimizerRspackPlugin({
			//	minimizerOptions: { targets }
			//})
		//]
	},
	experiments: {
		css: true
	}

});

