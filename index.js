#!/usr/bin/env node

const gradient = require('gradient-string');
var stdin = require("easy-stdin")

if(process.stdin.isTTY) {
    sing(process.argv[2], (process.argv[3]));
} else {
    stdin(function(err, data) {
        if(err) {
            sing("Oh noes!", colorSet)
            console.error(err)
        } else {
            sing(data)
        }
    });
    
}
function sing(yourMessage, colorSet){

    if(!colorSet){colorSet = ("00FFD1FF,00FF7FFF,44FF00FF,FFFB00FF,FF008BFF,4C00FFFF,1B00FFFF"); }
    var yourGrad = colorSet.split(',');
    for(var i=0;i<yourGrad.length;i++){yourGrad[i]="#"+yourGrad[i];}
    
    console.log(gradient(yourGrad)(yourMessage));

}



