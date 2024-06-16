const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyarray = [];

    if(e.key === "Enter") {
        if(userData) {
            window.open(userData.toLowerCase() + ".html");
        }
    }

}