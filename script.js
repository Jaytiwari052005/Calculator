const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerText;

        if (buttonValue === "AC") {
            expression = "";
            inputBox.value = "";
        } else if (buttonValue === "DEL") {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        } else if (buttonValue === "=") {
            try {
                expression = eval(expression).toString();
                inputBox.value = expression;
            } catch (err) {
                inputBox.value = "Error";
                expression = "";
            }
        } else {
            expression += buttonValue;
            inputBox.value = expression;
        }
    });
});
