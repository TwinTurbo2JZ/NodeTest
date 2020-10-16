const fileSytem = require("fs");
const supervillains = require("supervillains");
fileSytem.copyFileSync("file1.txt", "file2.txt");


const villain = require("supervillains");

var myVillain = villain.random();

console.log(myVillain);