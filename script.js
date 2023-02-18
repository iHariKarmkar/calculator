const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "ac") {
      display.value = "";
    } else if (btn.id === "de") {
      display.value = display.value.slice(0, -1);
    } else if (btn.id === "=") {
      display.value = eval(display.value);
    } else {
      if (btn.className === "operator") {
        display.value = display.value.concat(btn.id);
      } else {
        display.value += btn.id;
      }
    }
  });
});

// document.addEventListener('keypress', (e) => {
//     let key = e.key;
//     console.log(key)
//     if(key === 'Backspace'){
//         display.value = display.value.slice(0, -1);
//     }
//     else if(key === '=' || key === 'Enter'){
//         display.value = eval(display.value);
//     }
//     else
//     {
//         display.value += key;
//     }
// })
