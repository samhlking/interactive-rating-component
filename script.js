const form = document.getElementById("rating-form");
const formStart = document.querySelector(".start");
const formFinish = document.querySelector(".finish");
const submitBtn = document.getElementById("btn-submit");
const selectedMessage = document.querySelector(".selected");

function getInput () {
    const radios = document.querySelector('input[name="rating-group"]:checked').value;
    if (radios !== null) {
        formStart.style.display = "none";
        formFinish.style.display = "block";
        selectedMessage.innerText = `You selected ${radios} out of 5`
    }
}

submitBtn.addEventListener("click", getInput);