

function add(x, y ){
   return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    if (y !== 0){
        return x / y;
    }

    return 'ERROR';
}

let x;
let y;
let opt;

function operate(x, y, opt){
    switch(opt){
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x/y
    }
}

//console.log(operate(5, 6, '/'));
