const stickySections = document.querySelectorAll('.sticky');
const hands = document.querySelector('#hands')

const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const frame = document.querySelector(".frame-content");

window.addEventListener('scroll', (e) => {
    for (let section of stickySections) {
        transform(section);
    }
});

function transform(section) {
    const scroll = section.querySelector('.scroll');

    const offsetTop = section.parentElement.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = Math.max(0, Math.min(250, percentage));

    scroll.style.transform = `translateX(${-(percentage)}vw)`;
}

let max = frame.children.length;
frame.style.width = `calc(${max * 100}% + ${(max - 1) * 20}px)`

back.style.visibility = "hidden";

let slide = 0
forward.addEventListener("click", (e) => {
    slide++;
    console.log(frame.style.width);
    frame.style.transform = `translateX(calc(${-(slide * 100 / max)}% - ${slide * (20 / max)}px))`;
    if (slide == max - 1) {
        forward.style.visibility = "hidden";
    }
    back.style.visibility = "visible";
})

back.addEventListener("click", (e) => {
    slide--;
    console.log(slide);
    frame.style.transform = `translateX(calc(${-(slide * 100 / max)}% - ${slide * (20 / max)}px))`;
    if (slide == 0) {
        back.style.visibility = "hidden";
    }
    forward.style.visibility = "visible";
})
