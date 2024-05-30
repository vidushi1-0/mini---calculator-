alert("Welcome to mini-calculator!");
alert("This calculator can perform addition , subtraction , modulation , multiplication , division. Thank You!");
let main_button = document.querySelectorAll(".main-buttons");
let msg = document.querySelector(".enter-digit");
let acBtn = document.querySelector("#ac");
let del = document.querySelector(".del");
let equal = document.querySelector(".equalto");
let operator = document.querySelectorAll(".op");

let currentInput;

main_button.forEach((button) => {
    button.addEventListener("click" , () => {
        if(button === "=" || button === "AC" || button === "00" || button === "0") {
            msg.innerText = "";
        }
        else {
            msg.innerText += button.innerText;
            currentInput = msg.innerText;
            console.log(currentInput);
        }
    });
});

equal.addEventListener("click" , () => {
    try {
        let operator;
        let firstNum, secondNum;

        if (currentInput.includes("+")) {
            operator = "+";
        } else if (currentInput.includes("-")) {
            operator = "-";
        } else if (currentInput.includes("x")) {
            operator = "x";
        } else if (currentInput.includes("÷")) {
            operator = "÷";
        } else if (currentInput.includes("%")) {
            operator = "%";
        }

        let parts = currentInput.split(operator);
        firstNum = parseFloat(parts[0]);
        secondNum = parseFloat(parts[1]);

        let result;
        switch (operator) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "x":
                result = firstNum * secondNum;
                break;
            case "÷":
                result = firstNum / secondNum;
                break;
            case "%":
                if(secondNum === 0) {
                    result = firstNum / 100;
                }
                else {
                    result = ( firstNum / secondNum ) * 100;
                }
                break;
        }

        msg.innerText = result;
        currentInput = result.toString();
    } catch (e) {
        msg.innerText = "Error";
        currentInput = "";
    }

});

del.addEventListener("click", () => {
    msg.innerText = msg.innerText.slice(0, -1); 
    currentInput = msg.innerText; 
});

acBtn.addEventListener("click" , () => {
    msg.innerText = "";
});
