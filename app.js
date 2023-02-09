// app.js

/*

1. input content, no error checking for the time being -- main
.. don't need to, store the elements into an array XX 2. place on stack -- parseUserInput, can do w/linkedList || ArrayList
3. pop numbers, operators -- stackUserInput
4. calculate in switch/case block -- calculate

*/

init();

// 1. prompt user for input
function init ()
{
    const prompt = require('prompt-sync')();
    let s = [];
    s = prompt('Provide expression for calculation$ ');
    parseUserInput(s);
}

function parseUserInput(s)
{
    
}

/*

const prompt = require('prompt-sync')();

const s = prompt('How ya doing? ');

// console.log(`That's great, ${s}`);

let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);

// init();

// let exp = [];

    // console.log(parseInt(s));
    // console.log(parseInt(s));

    while (parseInt(s) != null)
    {
        parseInt(s);
        i++;
    }

    // console.log(i);

    let temp = '';
    let i = 0;

*/