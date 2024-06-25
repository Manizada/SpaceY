const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;

    if(e.key === "Enter") {
        if(userData) {
            window.open(userData.toLocaleLowerCase() + ".html");
        }
    }

}