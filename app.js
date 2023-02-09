// app.js

const { parse } = require('pegjs/lib/parser');

/*

1. input content, no error checking for the time being -- init
2. place on stack -- parseUserInput
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
    for (let i = 0; i < s.length; i++)
    {
        let tmp = s[i];
        console.log('!0', i, tmp, s);
    
        switch(tmp)
        {
            case '+':
                console.log('!1', tmp, i, s);
                break;
            case '-':
                console.log('!2', tmp, i, s);
                break;
            case '/':
                console.log('!3', tmp, i, s);
                break;
            case '*':
                console.log('!4', tmp, i, s);   
                break;
            default:
                tmp1 = parseInt(s);
            
                if (Number.isInteger (tmp1))
                {
                    s = s.substr(i + tmp1.toString().length, s.length);
                    // i = i + tmp1.toString().length;
                    i = 0;
                    console.log('!5', tmp1, i, s, s[i]);
                }
                
                else
                {
                    console.log('!6', tmp, i, s);   
                }

                break;         
        }
    }

    // 66+6
    // 0123
    /*

    /*
        
        let tmp = parseInt(s);
        
        if (Number.isInteger (tmp))
        {
            i = i + tmp.toString().length;
            let j = s.length;
            s = s.substr(i, j);
            console.log('! ', tmp, i, j, s);
        }

        else
        {
            console.log('* ', tmp);
        }

    // let exp = [];

    // console.log (Number.isInteger (parseInt(s)));

    let tmp = parseInt(s);
    
    switch(tmp)
    {
        case '+':
            console.log(tmp);
            break;
        case '-':
            console.log(tmp);
            break;
        case '/':
            console.log(tmp);
            break;
        case '*':
            console.log(tmp);   
            break;
        default:
            console.log(tmp);   
            break;         
    }

    */
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