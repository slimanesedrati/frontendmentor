const adviceId = document.getElementById("advice-id")
const adviceText = document.querySelector(".advice-text")
const dice = document.getElementById("dice")

window.onload = getQuote;

dice.addEventListener("click", getQuote)


function getQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceId.innerText = data.id;
        adviceText.innerHTML = `“${data.advice}”`;
    })
    .catch((error) => {
        alert(`Error ${error}`)
    })
}