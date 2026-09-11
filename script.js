const buttonArea = document.querySelector(".buttonsArea");
const displayArea = document.querySelector(".displayArea");

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
    console.log(firstOperand, "first operand");
    console.log(secondOperand, "second operand");
    console.log(operator , " operator");
    console.log(content , "content");
}


function calculations(operendFirst, operandSecond, operator) {
    let res = 0;

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
        if(Number(operandSecond) === 0) return "Can't Divide by 0"
        res = Number(operendFirst) / Number(operandSecond);
    }

    return String(res);
}
