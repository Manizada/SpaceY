let card_botao = document.querySelector("a#card-button")
let sun = document.getElementById("Sol")
let mercury = document.getElementById("mercurio")
let venus = document.getElementById("venus")
let earth = document.getElementById("terra")
let mars = document.getElementById("marte")
let jupiter = document.getElementById("jupiter")
let saturn = document.getElementById("saturno")
let uranus = document.getElementById("urano")
let neptune = document.getElementById("netuno")
let pagesun = document.getElementById("sun")
let pagemer = document.getElementById("mercury")
let pageven = document.getElementById("venus")
let pageterra = document.getElementById("earth")
let pagemars = document.getElementById("mars")
let pagejupiter = document.getElementById("jupiter")
let pagesat = document.getElementById("saturn")
let pageur = document.getElementById("uranus")
let pagenep = document.getElementById("neptune")

sun.addEventListener("click", function() {
    if (pagesun.style.display == "none") {
        
    } else {
        pagesun.style.display = "none"
    }
})
mercury.addEventListener("click", pags())
venus.addEventListener("click", pags())
earth.addEventListener("click", pags())
mars.addEventListener("click", pags())
jupiter.addEventListener("click", pags())
saturn.addEventListener("click", pags())
uranus.addEventListener("click", pags())
neptune.addEventListener("click", pags())
