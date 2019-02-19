#!/usr/bin/env node

const fs = require("fs");
const util = require('util');

const readFile = util.promisify(fs.readFile);
const filePath = "./hello.txt";

function readHelloWorld() {
  return readFile(filePath, 'utf8').then((data) => {
    console.log(data)
    return data;
  }).catch((err) => {
    console.error(err)
  });
}

// readHelloWorld().then((data) => {
//   console.log("Hello, World!", data);
// })

readHelloWorld();
console.log("Hello, World!");
