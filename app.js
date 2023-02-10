// app.js

const { parse } = require('pegjs/lib/parser');

/*

1. input content, no error checking for the time being -- init
2. place in array -- parseUserInput
3. create Stack class
4. calculate in switch/case block -- calculate

*/

class Stack
{
    stack = [];
    
    Stack()
    {
        // stack = []
    }

    isEmpty()
    {
        if (this.stack.length == 0)
        {
            return true;
        }

        else
        {
            return false;
        }
    }

    push(tmp)
    {
        this.stack.push(tmp);
    }

    pop()
    {
        if (isEmpty())
        {
            return null;
        }

        else
        {
            return this.stack.pop();
        }
    }

    peek()
    {
        let tmp = this.stack.pop();
        this.push(tmp);
        return tmp;
    }

    print()
    {
        while(!this.isEmpty())
        {
            console.log(this.stack.pop());
        }
    }
}

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
        tmp = s[0]

        if (isOperator(tmp))
        {
            exp.push(tmp);
        }

        else if (isNumber(s))
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

    // console.log(exp[exp.length - 1]);
    tmp = exp[exp.length - 1];

    // last token must a number
    if (isNumber(tmp) || tmp == ')')
    {
        // return calculate(exp);
        console.log('!');
    }    

    else
    {
        console.log("Invalid expression");
        return init();
    }

}

function isNumber(tmp)
{
    if (Number.isInteger (parseInt(tmp)))
    {
        return true;
    }

    else
    {
        return false;
    }
}

function isOperator(tmp)
{
    if (tmp == '+' || tmp == '-' || tmp == '*' || tmp == '/' || tmp == '(' || tmp == ')')
    {
        return true;
    }

    else
    {
        return false;
    }
}

function calculate(exp)
{
    const nums = new Stack();
    const ops = new Stack();
    let v1 = null;
    let v2 = null;
    let op = '';
  
    for (let i = 0; i < exp.length; i++)
    {
        if (isOperator(exp[i]))
        {
            ops.push(exp[i]);
        }

        else if (isNumber(exp[i]))
        {
            nums.push(exp[i]);
        }

        else
        {
            return init();
        }
        
    }

    // nums.print();
    // ops.print();
}

init();

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