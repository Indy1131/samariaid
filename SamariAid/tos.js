// Vars
var scrollPos = window.scrollY;

const accept = document.getElementById("accept")
const filler = document.getElementById("filler")

//Scroll Detection
window.addEventListener("scroll", (event) => {
    let windowSize = window.innerHeight

    let newScroll = window.scrollY / windowSize;

    //If scrolling down...
    if (newScroll > scrollPos) {

        if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1) {
            accept.style.position = "fixed";
            accept.style.bottom = "0";
            filler.style.display = "block";
        }

    } 
    scrollPos = newScroll
});