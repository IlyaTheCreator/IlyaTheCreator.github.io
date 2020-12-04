const menuOpenBtn = document.getElementById("menu-open-btn")
const menuCloseBtn = document.getElementById("menu-close-btn")
const navLinks = document.getElementById("nav-links")
const links = document.getElementById("links")
const workCols = document.querySelectorAll(".col")
const loginBtn = document.getElementById("login-btn")
const loginExitBtn = document.getElementById("login-exit-btn")
const loginForm = document.getElementById("login-form")
const registerBtn = document.getElementById("register-btn")
const registerExitBtn = document.getElementById("register-exit-btn")
const registerForm = document.getElementById("register-form")

menuOpenBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "hidden"
    navLinks.classList.add("show-navigation")

    setTimeout(() => {
        links.classList.add("show-navigation-ul")
    }, 1)
})

menuCloseBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "visible"
    links.classList.remove("show-navigation-ul")

    setTimeout(() => {
        navLinks.classList.remove("show-navigation")
    }, 200)
})

workCols.forEach(col => {
    col.addEventListener("mouseover", () => {
        const text = col.children[1]
        text.classList.add("show-text")
    })

    col.addEventListener("mouseout", () => {
        const text = col.children[1]
        text.classList.remove("show-text")
    })
})

loginBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "hidden"
    loginForm.classList.add("show-form")
})

loginExitBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "visible"
    loginForm.classList.remove("show-form")
})

registerBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "hidden"
    registerForm.classList.add("show-form")
})

registerExitBtn.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "visible"
    registerForm.classList.remove("show-form")
})