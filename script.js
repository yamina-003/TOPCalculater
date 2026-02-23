let x;
let y;
let opt;

function operate(x, y, opt){
    switch(opt){
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "*": result = x * y; break;
        case "/": result = x/y; break;
    }
    return result;
}

//console.log(operate(5, 6, '/'));

let display = document.querySelector('.display');
display.textContent = ""

let number = document.querySelectorAll(".digit");
number.forEach((button)=> {
    button.addEventListener("click" , () =>{
        display.textContent = appendNumber(button.textContent)
    
    })   
})
let operator = document.querySelectorAll(".operator");
operator.forEach((button)=> {
    button.addEventListener("click", ()=>{
        x = parseInt(display.textContent);
        display.textContent = ""
        opt = button.textContent.trim();
    })
});

function appendNumber(digit){
    return display.textContent += digit;
}

let result = document.querySelector(".result");
result.addEventListener("click",() =>{
    y = parseInt(display.textContent);

    let finalResult = operate(x, y, opt);
    display.textContent = finalResult;
    console.log("x:", x);
    console.log("y:", y);
    console.log("opt:", opt);
    
})

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", ()=>{
    display.textContent = "";
})