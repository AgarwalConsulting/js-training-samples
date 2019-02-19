#!/usr/bin/env node

const fs = require("fs");
const util = require('util');

const readFile = util.promisify(fs.readFile);
const filePath = "./hello.txt";

async function readHelloWorld() {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

// async function hello() {
//   const data = await readHelloWorld();
//   console.log("Hello, World!", data);
// }

// hello();

readHelloWorld();
console.log("Hello, World!");
