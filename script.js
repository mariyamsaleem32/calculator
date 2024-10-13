const buttons = document.querySelectorAll(".buttons input");
const display = document.querySelector(".display [name='display'");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.value
        if (value === "AC") {
            display.value = "" 
        } else if (value === "DE") {
            display.value = display.value.slice(0,-1) 
        }
        else if (value === "=") { 
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = Error; 
            }
            }else{
            display.value += value
            }
    }) 
});
