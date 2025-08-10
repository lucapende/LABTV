const body = document.body;
const divContinua = document.querySelector('#divContinua');
const divFilms = document.querySelector('#divFilms');
const divSerieTV = document.querySelector('#divSerieTV');
let timeoutId;

const URL = "http://localhost:3000/catalogo";

fetch(URL)
.then(response => response.json())
.then(data => {
    const serieTV = data.serieTV;
    const films = data.films;
    
    const createMovieElements = (movieList, parentDiv) => {
        const itemsToDisplay = Array.isArray(movieList) ? movieList : Object.keys(movieList).slice(0, 5).map(key => movieList[key]);
        
        itemsToDisplay.forEach(movie => {
            const imgElement = document.createElement('img');
            imgElement.classList.add("position");
            imgElement.src = movie.immagine;
            imgElement.alt = movie.title;
            
            imgElement.addEventListener("mouseenter", () => {
                clearTimeout(timeoutId);
                createSinossiBreve(movie, imgElement);
            });
            
            imgElement.addEventListener("mouseleave", () => {
                timeoutId = setTimeout(() => {
                    const sinossiDiv = body.querySelector('.sinossi-container');
                    if (sinossiDiv) {
                        body.removeChild(sinossiDiv);
                    }
                }, 150);
            });
            
            parentDiv.appendChild(imgElement);
        });
    };
    
    createMovieElements(serieTV, divContinua);
    createMovieElements(films, divFilms);
    
    const serieTVSecondaParte = Object.keys(serieTV).slice(5, 10).map(key => serieTV[key]);
    createMovieElements(serieTVSecondaParte, divSerieTV);
})
.catch(error => console.error('Error fetching data:', error));





function createSinossiBreve(movie, immagineCliccata) {
    const existingSinossiDiv = body.querySelector('.sinossi-container');
    if (existingSinossiDiv) {
        body.removeChild(existingSinossiDiv);
    }
    
    const rect = immagineCliccata.getBoundingClientRect();
    const div = document.createElement("div");
    div.classList.add("sinossi-container");
    
    div.style.position = "fixed";
    div.style.left = `${rect.left}px`;
    div.style.top = `${rect.top}px`;
    div.style.width = `${rect.width}px`;
    div.style.height = `${rect.height}px`;
    
    div.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
    });
    
    div.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
            body.removeChild(div);
        }, 150);
    });
    
    div.innerHTML = `
        <div class="sinossiBreve">
            <img src="${movie.immagine}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.sinossiBreve}</p>
        </div>
    `;

    existingSinossiDiv.addEventListener("click", () => {
        createSinossiLunga(movie);
    });

    body.appendChild(div);
}

function createSinossiLunga(movie){
    const sinossiLungaDiv = document.createElement("div");
    sinossiLungaDiv.innerHTML = `
            <div class="sinossiLunga">
                <img src="${movie.immagine}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.sinossiLunga}</p>
            </div>
        `;
    body.appendChild(sinossiLungaDiv);
}