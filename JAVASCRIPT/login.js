const urlUsers = "http://localhost:3000/users";
const ul = document.querySelector('ul');

fetch(urlUsers)
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user => {
        ul.innerHTML += `
            <li id="${user.id}"><img src="${user.logo}" alt="profilo1">${user.name}</li>`;
    });
    ul.innerHTML += `
        <li id="nuovo-profilo"><img src="../IMMAGINI/add.png" alt="aggiungi profilo">Aggiungi un profilo</li>`;

    const profiloNuovo = document.getElementById("nuovo-profilo");
    const profilo1 = document.getElementById("1");

    if (profilo1) {
        profilo1.addEventListener("click", () => {
            window.location.href = "./HomePage.html";
        });
    }

    if (profiloNuovo) {
        profiloNuovo.addEventListener("click", () => {
            window.location.href = "./nuovoProfilo.html";
        });
    }
})
.catch(error => {
    console.error("Error fetching users:", error);
});
