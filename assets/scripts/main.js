const btnAdvice =  document.getElementById("btnAdvice");
let adviceNumber = document.getElementById("adviceNumber");
let adviceText = document.getElementById('advice')

const url = "https://api.adviceslip.com/advice"


function showAdvice(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const {id, advice} = data.slip;

        adviceNumber.textContent = id;
        adviceText.textContent = advice;
    })
    .catch(() => alert('Falha na requisição'));
}

window.addEventListener('load', showAdvice);

btnAdvice.addEventListener('click', showAdvice)