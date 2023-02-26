const unitSelect = document.getElementById("unitselect");
const firstinp = document.getElementById('firstinp');
const secondinp = document.getElementById('secondinp');
const firsthead = document.getElementById('firsthead');
const secondhead = document.getElementById('secondhead');
const body = document.getElementsByTagName('body');



unitSelect.addEventListener("change", function () {

    const selectedIndex = unitSelect.selectedIndex;


    const options = unitSelect.options;

    const op = (options[selectedIndex].innerText).toLowerCase();;

    switch (op) {


        case "length":
            covertLength();
            break;
        case "distance":
            convertDistance();
            break;
        case "speed":
            convertSpeed();
            break;
        case "area":
            convertArea();
            break;
        case "energy":
            convertEnergy();
            break;
        case "storage":
            convertStorarge();
            break;
        default:
            convertTemperature();
            break;

    }


});


function convertTemperature() {
    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "Celsius";
    secondhead.innerText = "Fahrenheit";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = (inp * 1.8) + 32;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = conv.toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

    secondinp.addEventListener('input', () => {


        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = (inp - 32) / 1.8;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })





}

function convertArea() {
    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "Yard";
    secondhead.innerText = "Sq.m";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp * 0.836127;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = conv.toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

    secondinp.addEventListener('input', () => {


        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp / 0.836127;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })






}
function convertSpeed() {
    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "m / s";
    secondhead.innerText = "km / h";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp * 3.6;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = conv.toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

    secondinp.addEventListener('input', () => {


        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp / 3.6;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })


}
function convertDistance() {
    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "Kilometers";
    secondhead.innerText = "Miles";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp * 0.621371;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = conv.toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

    secondinp.addEventListener('input', () => {


        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp / 0.621371;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })





}






function convertEnergy() {
    secondinp.value = "";
    firstinp.value = "";

    firsthead.innerText = "Joules";
    secondhead.innerText = "Calories";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp / 4.184;

            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = (conv).toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

    secondinp.addEventListener('input', () => {
        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp * 4.184;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })

}










function covertLength() {

    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "Inches";
    secondhead.innerText = "Feets";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp / 12;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = (conv).toFixed(3);
            }
        }
        else {
            secondinp.value = "";
        }

    })

    secondinp.addEventListener('input', () => {
        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp * 12;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {
                firstinp.value = conv.toFixed(3);
            }

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }
    })

}



function convertStorarge() {
    secondinp.value = "";
    firstinp.value = "";
    firsthead.innerText = "Bytes";
    secondhead.innerText = "Kilo Bytes";

    firstinp.addEventListener('input', () => {
        if (firstinp.value) {
            let inp = parseInt(firstinp.value);
            let conv = inp / 1024;
            if (Number.isInteger(conv)) {
                secondinp.value = conv;
            }
            else {
                secondinp.value = (conv).toFixed(3);
            }

        }
        else {
            secondinp.value = "";
        }

    })

    secondinp.addEventListener('input', () => {
        if (secondinp.value) {
            let inp = parseFloat(secondinp.value);
            let conv = inp * 1024;
            if (Number.isInteger(conv)) {
                firstinp.value = (conv);
            }
            else {

            }
            firstinp.value = conv.toFixed(3);

        }
        else {
            secondinp.value = "";
            firstinp.value = "";
        }


    })


}