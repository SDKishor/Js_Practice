const counter_change = document.getElementById("counter_change");
const decrease_btn = document.getElementById("decrease_btn");
const reset_btn = document.getElementById("reset_btn");
const increase_btn = document.getElementById("increase_btn");

let count = 0;
changeColor();


decrease_btn.addEventListener("click", () => {
    count--;
    counter_change.innerText = count;
    changeColor();
})

reset_btn.addEventListener("click", () => {
    count = 0;
    counter_change.innerText = count;
    changeColor();
})

increase_btn.addEventListener("click", () => {
    count++;
    counter_change.innerText = count;
    changeColor();
})

function changeColor(){
    if(count < 0) {
    counter_change.style.color = "red"
    } else if (count > 0) {
    counter_change.style.color = "green"
    } else{
    counter_change.style.color = "black"
    }
}

