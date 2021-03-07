#!/usr/bin/env node

const gradient = require('gradient-string');
var colorSet = process.argv[3];
var yourGrad = colorSet.split(',');

for(var i=0;i<yourGrad.length;i++){
    yourGrad[i]="#"+yourGrad[i];
}

console.log(gradient(yourGrad)(process.argv[2]));

