const buttonArea = document.querySelector(".buttonsArea");

let buttonList = [["7" , "8" , "9" , "/"], ["4", "5", "6", "*"], ["1", "2", "3", "-"], ["0", ".", "=", "+"]];

for(let i = 0 ; i < 4 ; i++){
    const rows = document.createElement("div")
    rows.classList.add("lowerButtons")
    buttonArea.appendChild(rows);
    for(let j = 0 ; j < 4 ; j++){
        const newButton = document.createElement("button");
        newButton.classList.add("heyButton");
        newButton.textContent = buttonList[i][j];
        rows.appendChild(newButton);
        newButton.addEventListener("click", () => {
            displayy(newButton.textContent);
        });
    }
}

const displayArea = document.querySelector(".displayArea");
displayArea.textContent = "0";


function displayy(content){
    if (displayArea.textContent === "0") {
        displayArea.textContent = content;
    } 
    else {
        displayArea.textContent += content;
    }
}