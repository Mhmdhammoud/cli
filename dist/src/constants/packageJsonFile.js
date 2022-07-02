"use strict";
Object.defineProperty(exports, '__esModule', {value: true})
exports.default = (applicationName, authorName, serviceClass, type, serviceFile) => {
	return `
{
 "name": "${applicationName}",
 "version": "0.0.1",
 "description": "",
 "main": "dist/index.js",
 "repository": {
  "type": "git",
  "url": "https://github.com/Mhmdhammoud/cli.git"
 },
 "homepage": "https://github.com/Mhmdhammoud/cli",
 "private": false,
 "scripts": {
   "dev-ts": "ts-node-dev --respawn --transpile-only src/index.ts",
   "dev": "nodemon ./dist/index.js",
   "watch": "tsc --watch",
   "build": "tsc",
   "types": "tsc --noemit",
   "prepare": "husky install",
   "lint": "eslint src --fix"
 },
 "keywords": [],
 "author": "${authorName}",
 "license": "MIT",
 "dependencies": {
  "@typegoose/typegoose": "^9.2.0",
  "@types/cors": "^2.8.12",
  "apollo-server": "^3.5.0",
  "apollo-server-errors": "^3.3.1",
  "aws-sdk": "^2.1053.0",
  "axios": "^0.27.2",
  "bcryptjs": "^2.4.3",
  "class-validator": "^0.13.2",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^10.0.0",
  "graphql": "15.x",
  "graphql-upload": "^13.0.0",
  "jsonwebtoken": "^8.5.1",
  "moment": "^2.29.3",
  "mongoose": "~6.3.0",
  "nanoid": "^3.2.0",
  "nodemailer": "^6.7.3",
  "reflect-metadata": "^0.1.13",
  "request": "^2.88.2",
  "tinify": "^1.6.1",
  "type-graphql": "^1.1.1",
  "winston": "^3.3.3"
  
 },
 "devDependencies": {
  "@types/axios": "^0.14.0",
  "@types/bcrypt": "^5.0.0",
  "@types/bcryptjs": "^2.4.2",
  "@types/config": "^0.0.40",
  "@types/cookie-parser": "^1.4.2",
  "@types/graphql-upload": "^8.0.10",
  "@types/jsonwebtoken": "^8.5.6",
  "@types/nodemailer": "^6.4.4",
  "@types/redis": "^4.0.11",
  "@typescript-eslint/eslint-plugin": "^5.17.0",
  "@typescript-eslint/parser": "^5.17.0",
  "eslint": "^8.12.0",
  "eslint-plugin-tsdoc": "^0.2.14",
  "husky": "^7.0.0",
  "ts-node-dev": "^1.1.8",
  "typescript": "^4.6.3"
 }
}`
}
