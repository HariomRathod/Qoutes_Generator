let button = document.querySelector("button")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")

button.addEventListener("click" , getQoute)

async function getQoute(){
    const res = await fetch('https://api.quotable.io/random')
    const data = await res.json()
    const {content , author} = data
    h1.innerText = content
    p.innerText = author
}