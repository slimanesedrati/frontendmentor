
const features = document.querySelector(".features")
const ulFeatures = document.querySelector(".features ul")

const company = document.querySelector(".company")
const ulCompany = document.querySelector(".company ul")

const navbar = document.querySelector(".nav-bar")
const loginregister = document.querySelector(".login-register")



function openFeatures() {
    ulFeatures.classList.toggle("open")
    features.style.ad
    ulCompany.classList.remove("open")
}
features.addEventListener("click", openFeatures)

function openCompany() {
    ulCompany.classList.toggle("open")
    ulFeatures.classList.remove("open")
}

company.addEventListener("click", openCompany)

// togel-menu

const togelmenu = document.querySelector(".togel-menu")

function openslide() {
    togelmenu.classList.toggle("active")
    navbar.classList.toggle("show")
    loginregister.classList.toggle("show")
}

togelmenu.addEventListener("click", openslide)





