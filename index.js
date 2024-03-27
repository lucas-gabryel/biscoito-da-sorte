let link = document.querySelector("#link")
let btn = document.querySelector("#btn")
let screenOne = document.querySelector(".screenOne")
let screenTwo = document.querySelector(".screenTwo")

link.addEventListener("click", function() {
    screenOne.classList.add("delete")
    screenTwo.classList.remove("delete")
})

btn.addEventListener("click", function() {
    screenOne.classList.remove("delete")
    screenTwo.classList.add("delete")
})