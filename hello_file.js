#!/usr/bin/env node

const fs = require("fs");

const filePath = "./hello.txt";

function readHelloWorld() {
  fs.readFile(filePath, 'utf8', function read(err, data) {
    if (err) {
      console.error(err);
    }

    console.log(data);
  });
}

readHelloWorld();
console.log("Hello, World!");
