// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1/num2;
// }

// function subtraction(num1, num2) {
//     return num1 - num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// function HouseKeeper (yearsOfExperience, name, skills) {
//     this.yearsOfExperience = yearsOfExperience,
//     this.name = name,
//     this.skills = skills,
//     this.clean = function() {
//         alert("Cleaning in progress...");
//     }
// }

let allButtons = document.querySelectorAll("button");

allButtons.forEach(function(button) {
    button.addEventListener("click", function handleClick() {
        // this.style.color = "white";
        let buttonInnerHTML = this.innerText;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
})

document.addEventListener("keydown", function() {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case 'w': 
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a': 
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's': 
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd': 
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            case 'j': 
        let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            case 'k': 
        let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
            case 'l': 
        let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
    }
}

function buttonAnimation (currentkey) {
    let active = document.querySelector("." + currentkey);
    active.classList.add("pressed");

    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
};