let display = document.getElementById("display");
let sum = document.getElementById("sum");

function addtodisplay(input) {
    display.value = display.value+input;
}
function Clear() {
    display.value = "";
}
function calculate() {

      display.value = eval(display.value);
      sum.innerHTML = display.value;

}
function singleclear(){
  display.value = display.value.slice(0,-1)

}
