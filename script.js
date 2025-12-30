

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

let display = document.querySelector('.display');
display.textContent = ""

let number = document.querySelectorAll(".digit");
number.forEach((button)=> {
    button.addEventListener("click" , () =>{
        display.textContent = appendNumber(button.textContent)
    
})   
});

let operator = document.querySelectorAll(".operator");
operator.forEach((button)=> {
    button.addEventListener("click", ()=>{
        display.textContent = button.textContent;
    })
});

function appendNumber(digit){
    return display.textContent += digit;
}
