const buttonArea = document.querySelector(".buttonsArea");
const displayArea = document.querySelector(".displayArea");
const clearButton = document.querySelector(".heyClear");
const backSpace = document.querySelector(".heyBackSpace");


let buttonList = [["7" , "8" , "9" , "/"], ["4", "5", "6", "*"], ["1", "2", "3", "-"], ["0", ".", "=", "+"]];
let operatorsList = ["+" , "-", "*", "/"];

//creating the rows in which buttons will be placed
for(let i = 0 ; i < 4 ; i++){
    const rows = document.createElement("div")
    rows.classList.add("lowerButtons")
    buttonArea.appendChild(rows);

    //creating and adding the buttons in the created rows 
    for(let j = 0 ; j < 4 ; j++){
        const newButton = document.createElement("button");
        newButton.classList.add("heyButton");
        newButton.textContent = buttonList[i][j];
        rows.appendChild(newButton);

        //event listener for each button created
        newButton.addEventListener("click", () => {
            displayyOperations(newButton.textContent);
        });
    }
}

//Event for the clear button 
clearButton.addEventListener("click", () => {
    firstOperand = "";
    operator = "";
    secondOperand = "";
    displayArea.textContent = "0";

});

//Event for backSpace button
backSpace.addEventListener("click", () => {

    if(displayArea.textContent === "" && firstOperand !== ""){
        displayArea.textContent = firstOperand;
        operator = "";
    }
    // else if(secondOperand !== ""){
    //     displayArea.textContent = secondOperand;
    //     firstOperand = 
    //     operator = "";
        
    // }
    else{
        let str = displayArea.textContent;
        str = str.slice(0, -1);
        displayArea.textContent = str;
    }
});

//functional areaa 
//showing default 0 value in the display area 
displayArea.textContent = "0";

let firstOperand = "";
let secondOperand = "";
let operator = ""


function displayyOperations(content){

    if(content === "="){
        secondOperand = displayArea.textContent;
        firstOperand = calculations(firstOperand, secondOperand, operator);
        displayArea.textContent = firstOperand;
        if(firstOperand === "Error"){
            firstOperand = "";
            secondOperand = "";
            operator = ""
            return
        }
        secondOperand = "";
        operator = "";
    } 

    else if(operatorsList.includes(content)){
        if(firstOperand === "" && operator === ""){
            firstOperand = displayArea.textContent;
            operator = content;
            displayArea.textContent = "";
        }
        else if(firstOperand !== "" && operator !== ""){
            secondOperand = displayArea.textContent;
            firstOperand = calculations(firstOperand, secondOperand, operator);
            operator = content;
            displayArea.textContent = "";
        }
        else if(firstOperand !== "" && operator === ""){
            firstOperand = displayArea.textContent;
            operator = content;
            displayArea.textContent = "";
            
        }

    } 
    
    else {
        if (displayArea.textContent === "0") displayArea.textContent = content;
        else displayArea.textContent += content;
    }
}


function calculations(operendFirst, operandSecond, operator) {
    let res = 0;

    if (isNaN(Number(operendFirst)) || isNaN(Number(operandSecond))) {
        return "Error";
    }

    if (operator === "+") {
        res = Number(operendFirst) + Number(operandSecond);
    }
    else if (operator === "-") {
        res = Number(operendFirst) - Number(operandSecond);
    }
    else if (operator === "*") {
        res = Number(operendFirst) * Number(operandSecond);
    }
    else if (operator === "/") {
        if(Number(operandSecond) === 0) return "Error";  //Error message if divison by 0

        res = Number(operendFirst) / Number(operandSecond);
    }

    return String(res);
}
