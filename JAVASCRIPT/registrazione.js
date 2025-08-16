const form = document.querySelector('form');
const inputs = Array.from(form.querySelectorAll('input')).slice(0, 4);
const button = document.querySelector('button');
const checkbox = document.getElementById('terms');
const label = document.querySelector('label');
let span = document.getElementById('pswDiversa');
let formatoPswErrato = document.getElementById('formatoPswErrato');


const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]{2,50}$/;
const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|food|travel|win|it|de|es|fr|gb|us|ro|pt|nl|eu)\b/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])(?=.{8,32}$).*/;

const arrayRegex = [regexNome, regexEmail, regexPassword, regexPassword];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let tuttiCampiCompilatiCorrettamente = true;
    
    inputs.forEach((input, index) => {
        const tuttoOk = checkInput(input, arrayRegex[index]);
        if(!tuttoOk){
            tuttiCampiCompilatiCorrettamente = false;
            if(!controlloCheckbox());
        }
        console.log(arrayRegex[index].test(input.value));
    });
    
    if(tuttiCampiCompilatiCorrettamente) {
        form.submit()
        window.location.href = "login.html";
        aggiuntaProfilo()
    }
    confrontoPsw();
});


function checkInput(input, regex){
    if(!regex.test(input.value)){
        input.classList.add('error');
        label.classList.add('error');
        if(input.value == ""){
            if(!input.dataset.originalPlaceholder) {
                input.dataset.originalPlaceholder = input.placeholder;
            }
            input.placeholder = `${input.dataset.originalPlaceholder} non può essere vuoto`;
            return
        }
        formatoPswErrato.style.display = "block";
        formatoPswErrato.innerHTML = `
        Formato password non valido: <br>
        🟢 Minimo 8 caratteri <br>
        🟢 Almeno una lettera Maiuscola (A-Z) <br>
        🟢 Un numero (0-9) <br>
        🟢 Un carattere speciale (! $ % ?).`;
        return false;
    }else{
        input.classList.remove('error');
        formatoPswErrato.style.display = "none";
        return true;
    }
}

function controlloCheckbox(){
    if(checkbox.checked == false){
        label.classList.add('error');
        return false;
    }else{
        label.classList.remove('error');
        return true;
    }
}

function confrontoPsw(){
    const password = document.getElementById('psw');
    const confermaPassword = document.getElementById('ripetiPsw');
    
    console.log("Valori password:", password.value, confermaPassword.value); // Debug
    
    if(password.value !== confermaPassword.value){
        confermaPassword.classList.add('error');
        span.style.display = "block";
        span.textContent = "Le password non corrispondono";
        return false;
    } else {
        confermaPassword.classList.remove('error');
        span.style.display = "none";
        return true;
    }
}

function aggiuntaProfilo() {
    const dataToSend = {
        id: data.length + 1,
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        password: document.getElementById('psw').value,
        logo: "../IMMAGINI/Avatar/avatar2.png"
    };

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error registering user:", error));
}