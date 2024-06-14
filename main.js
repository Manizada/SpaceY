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
            window.open(`https://manizada.github.io/SpaceY/${userData}.html`, '_blank');
        }
    }

    if (userData) {
        emptyArray = list.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`
        })
        searchWrapper.classList.add('active');
        showList(emptyArray);
        let allList = sugestBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', 'select(this)');
        }
        if (e.key === 'Escape') {
            searchWrapper.classList.remove('active');
        } else {
            searchWrapper.classList.remove('active')
        }
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData; 
    searchWrapper.classList.remove('active');
}

function showList (list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userData}</li>`
    } else {
        listData = list.join('');
    }

    sugestBox.innerHTML = listData;
}
