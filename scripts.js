
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))

const botao = document.querySelector(".btn_top")

window.addEventListener("scroll", function(event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove("visible")
    } else {
        botao.classList.add("visible")
    }
})