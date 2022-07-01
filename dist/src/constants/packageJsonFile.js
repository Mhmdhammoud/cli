"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
{
	"name": "@mhmdhammoud/testing-cli",
\t"version": "0.1.1",
\t"description": "",
\t"main": "dist/src/index.js",
\t"bin": "dist/src/index.js",
\t"repository": {
\t\t"type": "git",
\t\t"url": "https://github.com/Mhmdhammoud/cli.git"
\t},
\t"homepage": "https://github.com/Mhmdhammoud/cli",
\t"private": false,
\t"scripts": {
\t\t"test": "npm run test",
\t\t"build": "tsc",
\t\t"watch": "tsc --watch",
\t\t"dev": "nodemon dist/src/index.js",
\t\t"start": "node dist/src/index.js"
\t},
\t"keywords": [],
\t"author": "mhmdhammoud",
\t"license": "MIT",
\t"dependencies": {
\t\t"chalk": "^4.1.2",
\t\t"cli-table3": "^0.6.2",
\t\t"commander": "^9.1.0",
\t\t"inquirer": "^8.2.1",
\t\t"node-emoji": "^1.11.0",
\t\t"typescript": "^4.7.4"
\t},
\t"devDependencies": {
\t\t"@types/inquirer": "^8.2.1",
\t\t"@types/node": "^18.0.0"
\t}
}

`;
