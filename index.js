#!/usr/bin/env node

const gradient = require('gradient-string');
var colorSet = (process.argv[3]) ? (process.argv[3]) : ("00FFD1FF,00FF7FFF,44FF00FF,FFFB00FF,FF008BFF,4C00FFFF,1B00FFFF"); 
var yourGrad = colorSet.split(',');

for(var i=0;i<yourGrad.length;i++){
    yourGrad[i]="#"+yourGrad[i];
}

console.log(gradient(yourGrad)(process.argv[2]));



