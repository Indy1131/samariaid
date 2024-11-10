//References

const titleBar = document.getElementById("titleBar");
const stepNum = document.getElementById("stepNum");
const emergency = document.getElementById("emergency");
const instructNum = document.getElementById("instructNum");
const buttons = document.getElementById("buttons");

var instructions = document.getElementById("instructions");
var double = document.getElementById("double");

var stepIndex = 1;
var buttonEnabled = true

const steps = [
    "Apply direct pressure to the bleeding site using a clean cloth, dressing, or your hand.",
    "Elevate the injured area above heart level, if possible, to reduce blood flow.",
    "Do not remove any impaled objects; stabilize them and continue applying pressure around them.",
    "Consider using pressure points as a last resort, with caution and preferably under medical guidance.",
    "First Aid instructions completed."
]

//Functions

function simulate() {
    console.log("PRESSED!");
    titleBar.style.top = "0";
    stepNum.style.top = "40%";
    emergency.style.top = "40px";
    buttons.style.top = "80%";
    instructions.style.marginTop = "0";
}

function prev() {
    if (buttonEnabled && stepIndex - 2 >= 0) {
        buttonEnabled = false
        console.log("Prev");
        stepIndex--;
        instructNum.innerHTML = "Step " + stepIndex;
    
        const clone = instructions.cloneNode(true);
        clone.style.marginLeft = "-100%"
        clone.firstElementChild.innerHTML = steps[stepIndex - 1];
        stepNum.appendChild(clone)

        instructions.style.zIndex = "50";
        instructions.style.boxShadow = "";
    
        // clone.style.backgroundColor = "green";
        // clone.animate({ 'margin-left': '50%'}, 300);

        instructions.style.position = "absolute";
        instructions.style.marginLeft = "110%"
        setTimeout(function() {
            clone.style.marginLeft = "0"
            setTimeout(function() {
                console.log("transitioned");
                instructions.remove()
                instructions = clone;
                buttonEnabled = true;
            }, 270)
        }, 30);
    }
}

function next() {
    if (buttonEnabled && stepIndex < steps.length) {
        buttonEnabled = false
        console.log("Next");
        stepIndex++;
        if (stepIndex > 4) {
            instructNum.innerHTML = "Instructions Complete";
        } else {
            instructNum.innerHTML = "Step " + stepIndex;
        }
    
        const clone = instructions.cloneNode(true);
        clone.style.marginLeft = "100%"
        clone.firstElementChild.innerHTML = steps[stepIndex - 1];
        stepNum.appendChild(clone)

        instructions.style.zIndex = "50";
        instructions.style.boxShadow = "";
    
        // clone.style.backgroundColor = "green";
        // clone.animate({ 'margin-left': '50%'}, 300);

        instructions.style.position = "absolute";
        instructions.style.marginLeft = "-110%"
        setTimeout(function() {
            clone.style.marginLeft = "0"
            setTimeout(function() {
                console.log("transitioned");
                instructions.remove()
                instructions = clone;
                buttonEnabled = true;
            }, 270)
        }, 30);
    }

    // instructions.lef
}