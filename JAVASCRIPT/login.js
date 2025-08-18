const urlUsers = "http://localhost:3000/users";
const ul = document.querySelector('ul');

let catalogoData = [];

fetch(urlUsers)
.then(response => response.json())
.then(data => {
    console.log(data);

    catalogoData = data;

    data.forEach(user => {
        ul.innerHTML += `
            <li id="${user.id}"><img src="${user.logo}" alt="profilo1">${user.name}</li>`;
    });
    ul.innerHTML += `
        <li id="nuovo-profilo"><img src="../IMMAGINI/add.png" alt="aggiungi profilo">Aggiungi un profilo</li>`;

    const profiloNuovo = document.getElementById("nuovo-profilo");

    data.forEach(user => {
        const profilo = document.getElementById(user.id);
        profilo.addEventListener("click", () => {
            window.location.href = "./HomePage.html";
        });
    });

    if(catalogoData.length >= 4){
        profiloNuovo.classList.add("disabled");
        profiloNuovo.addEventListener("click", () => {
            alert("Numero massimo di profili raggiunto");
        });
    }else {
        profiloNuovo.addEventListener("click", () => {
            window.location.href = "./registrazione.html";
        });
    }
})
.catch(error => {
    ul.innerHTML = error;
});


