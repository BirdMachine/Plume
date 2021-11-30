#!/usr/bin/env node

const gradient = require('gradient-string');
// var colorSet = (process.argv[3]) ? (process.argv[3]) : ("#00FFD1FF,#00FF7FFF,#44FF00FF,#FFFB00FF,#FF008BFF,#4C00FFFF,#1B00FFFF"); 
// var yourGrad = colorSet.split(',');
// var yourGradParsed = colorSet.split(',');
var minimist  = require('minimist');
var chalk  = require('chalk');
const cursor = require('ansi')(process.stdout);

var args = minimist(process.argv.slice(2), {
    alias: {
        v: 'version',
        h: 'help',
        c: 'colorset',
        d: 'dark'
    }
});
var colorSet = (args.c) ? (args.c.split(',')) :  ["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","#6495ED"]; 
let myGradient = gradient(colorSet);
var interp = (args.d) ? 'rgb' :  'hsv'; 
const whiteBG = chalk.bgWhite;


function help() {
    var jupiter =  gradient(["#138d75", "#c39bd3"]); 
    var goodNightJupiter = jupiter("Goodnight Jupiter",{interpolation: 'hsv'})
    var goodJupiter = jupiter("seagreen to purple",{interpolation: 'hsv'})

    var mars =  gradient(["#DFFF00","#FFBF00","#FF7F50"]); 
    var goodDayMars = mars("G'day Mars", {interpolation: 'hsv'})
    var goodMars = mars("G'day Mars in a Lemon Chiffon to Orange Red  to Salmon gradient", {interpolation: 'hsv'})

    var venus =  gradient(["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","#6495ED"]); 
    var goodVenus = venus("default rainbow",{interpolation: 'hsv'})

    var help = `
    Usage: plume [STRING] ...[COLORS]... [BRIGHTNESS]
        -c: String of Hex colors to gradient through 
        -b: Enables HSV interpolation (brighter colors)
        -v:   Print version and exit
        -h:   Show this message
    Examples:
    plume  "Goodnight Jupiter" -c "#138d75 ,#c39bd3" -d      Prints `+goodNightJupiter+` in a dark color gradient from `+goodJupiter+`
    plume  "G'day Mars" -c "#DFFF00 , #FFBF00", #FF7F50"      Prints `+goodDayMars+` in a `+goodMars+`
    cowsay "Good Evening Venus" | plume -c "##DFFF00","#FFBF00","#FF7F50"   Prints cowsay in a `+goodVenus+`.
    Checkout the github! <https://github.com/BirdMachine/Plume/>`;
    var lines = help.split('\n');
    var myGrad =  gradient(["#DFFF00","#FFBF00","#FF7F50"]); 
    for (let index = 0; index <= lines.length; index++) {
        if(index === (lines.length)-1){
            console.log(whiteBG(myGrad(lines[index], {interpolation: 'hsv'})));
            process.exit();
        }else{ 
            console.log(lines[index]);            
        }
    }
   
}


function version() {
    var myGrad =  gradient(["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","#6495ED","#CCCCFF"]); 
    var line = "Version: IDK yet I havent started counting"
    console.log(myGrad(line, {interpolation: 'hsv'})); 
    process.exit();
}



const fromPipe = function() {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(data) {
        console.log(myGradient(data, {interpolation: interp}));
    });
    return new Promise(resolve => process.stdin.on('end', resolve));
};



function init(args) {

    if (args.help) {
        help();
    }else if (args.version) {
        version();
    }else if (args._.length === 0) {
        fromPipe();
    } else {
        console.log(myGradient(args._, {interpolation: interp}));    
    }
}

init(args);