const mainTitle = document.querySelector("#title");
let curValue = 0;

const btnDecreament = document.querySelector("#decreament");
const btnResett = document.querySelector("#reset");
const btnIncreament = document.querySelector("#increament");



btnIncreament.addEventListener("click", () => {
    
    curValue = curValue + 1;
    mainTitle.textContent = curValue;
});



btnDecreament.addEventListener("click", () => {
    curValue = curValue - 1;   
    mainTitle.textContent = curValue
});


btnResett.addEventListener("click", () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});





