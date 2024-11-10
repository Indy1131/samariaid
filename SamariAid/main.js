// Vars

const hands = document.getElementById("hands")

const background = document.getElementById("background")

const footer = document.getElementById("footer")

const installButton = document.getElementById("installButton");

var scrollPos = window.scrollY;

var footerVisible = false;

const maxHeight = document.documentElement.scrollHeight

//Scroll Detection
window.addEventListener("scroll", (event) => {
    let windowSize = window.innerHeight

    let newScroll = window.scrollY / windowSize;

    let docHeight = (document.body.clientHeight - window.innerHeight);

    //If scrolling down...
    if (newScroll > scrollPos) {
        if (newScroll >= 1) {
            if (newScroll <= 2) {
                background.style.setProperty("--portrait-opacity", newScroll - 1);
                background.style.setProperty("--portrait-blur", 8 - ((newScroll - 1) * 8) + "px");
            } else {
                background.style.setProperty("--portrait-opacity", 1);
                background.style.setProperty("--portrait-blur", "0px");

                if (newScroll <= 3) {
                    background.style.setProperty("--portrait-blur", ((newScroll - 2.5) * 8) + "px");
                } else {
                    background.style.setProperty("--portrait-blur", "8px"); 
                    hands.style.top = "300%";
                    hands.style.position = "absolute";
                }
            }
        }

        if (!footerVisible && window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1) {
            footerVisible = true;
            footer.style.position = "absolute";
            footer.style.bottom = "auto";
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

    } else { //If scrolling up...   
        if (newScroll <= 3) {
            hands.style.top = "0";
            hands.style.position = "fixed";
            if (newScroll >= 2) {
                background.style.setProperty("--portrait-blur", ((newScroll - 2.5) * 8) + "px");   
            } else {
                background.style.setProperty("--portrait-blur", "0px");
                if (newScroll >= 1) {
                    background.style.setProperty("--portrait-opacity", newScroll - 1);
                    background.style.setProperty("--portrait-blur", 8 - ((newScroll - 1) * 8) + "px");   
                } else {
                    background.style.setProperty("--portrait-opacity", 0);
                    background.style.setProperty("--portrait-blur", "8px");
                }
            }

            background.style.setProperty("--portrait-blur", ((newScroll - 2.5) * 8) + "px");
            if (newScroll <= 2 && newScroll >= 1) {
                background.style.setProperty("--portrait-opacity", newScroll - 1);
                background.style.setProperty("--portrait-blur", 8 - ((newScroll - 1) * 8) + "px");
            }
        }

        if (footerVisible && window.scrollY <= document.documentElement.scrollHeight - window.innerHeight - 1 - 300) {
            footerVisible = false;
            // window.scrollTo({ top: document.body.scrollHeight - 300, behavior: 'smooth' });
            footer.style.position = "fixed";
            footer.style.bottom = "-300px";
        }
    }

    scrollPos = newScroll
});

//Web App

// let deferredPrompt;
// window.addEventListener('beforeinstallprompt', (e) => {
//     // e.preventDefault();
//     deferredPrompt = e;
// })

// installButton.addEventListener('click', (e) => {
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome == 'accepted') {
//             console.log("User accepted the A@HS prompt");
//         }
//         deferredPrompt = null;
//     })
// })
