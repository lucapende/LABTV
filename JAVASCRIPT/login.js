const urlUsers = "http://localhost:3000/users";
const ul = document.querySelector('ul');
const buttonGestisci = document.querySelector("button");

let catalogoData = [];

fetch(urlUsers)
.then(response => response.json())
.then(data => { 
    console.log(data);
    
    catalogoData = data;
    
    data.forEach(user => {
        ul.innerHTML += `
            <li id="${user.id}"><img src="${user.logo}" alt="profilo${user.id}">${user.name}</li>`;
    });
    ul.innerHTML += `
        <li id="nuovo-profilo"><img src="../IMMAGINI/add.png" alt="aggiungi profilo">Aggiungi un profilo</li>`;
    
    const buttonProfiloNuovo = document.getElementById("nuovo-profilo");
    
    data.forEach(user => {
        const profilo = document.getElementById(user.id);
        console.log(profilo);
        const divAutenticazione = document.createElement("div");

        divAutenticazione.classList.add("autenticazione");
        divAutenticazione.innerHTML = `
            <h2>Accedi al profilo di ${user.name}</h2>
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
            <button id="accedi">Accedi</button>
            <button id="close">x</button>
        `;
        
        
        profilo.appendChild(divAutenticazione);
        
        const buttonAccedi = divAutenticazione.querySelector("#accedi");
        const inputs = divAutenticazione.querySelectorAll("input");
        const buttonClose = divAutenticazione.querySelector("#close");

        profilo.addEventListener("click", () => {
            divAutenticazione.style.visibility = "visible";
        });

        buttonAccedi.addEventListener("click", () => {
            let errore = false;
            
            inputs.forEach(input => {
                if(input.value === ""){
                    input.classList.add("error");
                    errore = true;
                }else{
                    input.classList.remove("error");
                }
            });
            
            if (!errore) {
                const email = inputs[0].value;
                const password = inputs[1].value;
                
                const userId = user.id;
                const currentUser = catalogoData.find(u => u.id === userId);
                console.log(currentUser);
                if (currentUser && currentUser.email === email && currentUser.password === password) {
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    window.location.href = "./HomePage.html";
                } else {
                    alert("Credenziali non valide. Riprova.");
                }
            }
        });

        buttonClose.addEventListener("click", (e) => {
            e.stopPropagation();
            divAutenticazione.style.visibility = "hidden";
            inputs.forEach(input => {
                input.value = "";
            });
        });
    });
    
    if(catalogoData.length >= 4){
        buttonProfiloNuovo.classList.add("disabled");
        buttonProfiloNuovo.addEventListener("click", () => {
            alert("Numero massimo di profili raggiunto");
        });
    }else {
        buttonProfiloNuovo.addEventListener("click", () => {
            window.location.href = "./registrazione.html";
        });
    }
})
.catch(error => {
    ul.innerHTML = error;
});


buttonGestisci.addEventListener("click", () => {
    
    ul.innerHTML = '';
    catalogoData.forEach(user => {
        ul.innerHTML += `
            <li id="${user.id}">
                <img src="${user.logo}" alt="profilo">
                <span>${user.name}</span>
                <button id="delete-btn" data-id="${user.id}">Elimina</button>
            </li>`;
    });
    ul.innerHTML += `
        <li id="nuovo-profilo"><img src="../IMMAGINI/add.png" alt="aggiungi profilo">Aggiungi un profilo</li>`;
    
    
    document.querySelectorAll('#delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const userId = button.getAttribute('data-id');
            
            fetch(`http://localhost:3000/users/${userId}`, {
                method: 'DELETE'
            })
            .then(() => {
                alert("Profilo eliminato con successo");
                window.location.reload();
            })
            .catch(error => {
                alert("Si è verificato un errore durante l'eliminazione del profilo: " + error);
            });
        });
    });
    
    buttonGestisci.addEventListener("click", ()=>{
        window.location.reload();
    });
    
    const buttonProfiloNuovo = document.getElementById("nuovo-profilo");
    buttonProfiloNuovo.addEventListener("click", () => {
        window.location.href = "./registrazione.html";
    });
});