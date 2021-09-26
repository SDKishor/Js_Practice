const main_el = document.querySelector(".main");
const cta_btn = document.getElementById("cta_btn");
const span_el = document.getElementById("colorValue");
const simple_btn = document.getElementById("simple_btn");
const hex_btn = document.getElementById("hex_btn");

const simpleColors = ["red", "blue", "green", "aqua", "salmon", "lime", "yellow"];
const hexcolorvalue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let isSimpleActive = true;

simple_btn.addEventListener("click", () => {
    simple_btn.classList.remove("active");
    hex_btn.classList.remove("active");
    simple_btn.classList.add("active");
    isSimpleActive = true;
})

hex_btn.addEventListener("click", () => {
    simple_btn.classList.remove("active");
    hex_btn.classList.remove("active");
    hex_btn.classList.add("active");
    isSimpleActive = false;
})


// on call to action button press

cta_btn.addEventListener("click", () => {
    if (isSimpleActive == true){
        let temp = getRandomSimpleColor();
        main_el.style.backgroundColor = temp;
        span_el.innerText = temp;   
    }else{
        let temp = getRandomHexColor();
        main_el.style.backgroundColor = temp;
        span_el.innerText = temp;  
    }
    
})


function getRandomSimpleColor() {
    let randomNum = Math.floor(Math.random() * simpleColors.length);
    let randomColor = simpleColors[randomNum];
    return randomColor;
}

function getRandomHexColor() {
    let value = "";
    for (let i = 0; i < 6 ; i++) {
        let randomNum = Math.floor(Math.random() * hexcolorvalue.length);
        value += hexcolorvalue[randomNum];  
    }
    
    return "#" + value;
}



