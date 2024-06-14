const searchWrapper = document.querySelector(".formsearch");
const inputBox = searchWrapper.querySelector("input");
const sugestBox = searchWrapper.querySelector(".list");
let linkTag = searchWrapper.querySelector("a")
let weblink;

let list = [
    "Sol",
    "Mercurio",
    "Venus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno"
]

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    
    if (e.key === 'Enter') {
        if (userData) {
            window.open(`https://manizada.github.io/SpaceY/${userData}.html`);
        }
    }
}


