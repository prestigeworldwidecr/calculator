// app.js

const { parse } = require('pegjs/lib/parser');

/*

1. input content, no error checking for the time being -- init
2. place on stack -- parseUserInput
3. pop numbers, operators -- stackUserInput
4. calculate in switch/case block -- calculate

*/

init();


function init ()
{
    const prompt = require('prompt-sync')();
    let s = [];
    s = prompt('Provide expression for calculation$ ');
    parseUserInput(s.trim());
}

function parseUserInput(s)
{
    let tmp = '';
    let exp = [];
    
    while (s.length > 0)
    {
        tmp = s[i]

        if (tmp == '+' || tmp == '-' || tmp == '*' || tmp == '/' || tmp == '(' || tmp == ')')
        {
            exp.push(tmp);
        }

        else if (Number.isInteger (tmp))
        {
            tmp = parseInt(s);
            exp.push(tmp);
        }

        else
        {
            // ignore non-operators, numbers
        }
            
        s = s.substr(tmp.toString().length, s.length);
    }

    console.log(exp);

}

/*

--------------
CODE GRAVEYARD
--------------

    while (s.length > 0)
    {
        let tmp = s[0];
    
        switch(tmp)
        {
            case '+':
                
                break;
            case '-':
                
                break;
            case '/':
                
                break;
            case '*':
                   
                break;
            default:
                tmp = parseInt(s);
            
                if (Number.isInteger (tmp))
                {
                    
                }
                
                else
                {
                       
                }

                break;         
        }

        // console.log('!', tmp, s);
        exp.push(tmp);
        s = s.substr(tmp.toString().length, s.length);
    }

    console.log(exp.pop());

// for (let i = 0; i < s.length; i++)

// s = s.substr(i + tmp.toString().length, s.length);

                    // i = i + tmp1.toString().length;
                    // i = -1;
                    // console.log('!5', tmp, i, s, s[i]);        


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