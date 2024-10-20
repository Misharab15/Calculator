// DOM
let btn0 = document.querySelector(".fivebtn1");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");



// button 0 number hover effect
btn0.addEventListener("mouseover", () => {
    btn0.style.backgroundColor = "#737373";
});
btn0.addEventListener("mouseout", () => {
    btn0.style.backgroundColor = "#333333";
});



// Changing the display of the input tag
 alterDisplay = (element) => {
    display.value += element;
    if(element === '%'){
        let arr = [];
        arr = display.value;
        let resultArr = arr.slice(0, -1);
        display.value = resultArr/100;
    }
 }



// Clearing all the screen => AC button is triggered
 clearAll = () => {
    display.value = "";
 }



// Removing digits
 remove = () => {
    let arr = [];
    arr = display.value;
    let result = arr.slice(0, -1);
    console.log(arr.slice(0, -1));
    display.value = result;
 }



// Calculating the result. '=' button is triggered
 calculate = () => {
    try{   
        display.value = eval(display.value); 
    } catch(error){
        display.value = "Error";
    }    
 }
