const body = document.body;
const divContinua = document.querySelector('#divContinua');
const divFilms = document.querySelector('#divFilms');
const divSerieTV = document.querySelector('#divSerieTV');
let timeoutId;
const URL = "http://localhost:3000/catalogo";

// Declare a global variable to store the data
let catalogoData = [];
console.log(catalogoData);

fetch(URL)
.then(response => response.json())
.then(data => {
    // Store data in the global variable
    catalogoData.push(data);

    const serieTV = data.serieTV;
    const films = data.films;
    
    const createMovieElements = (movieList, parentDiv) => {
        const serieTV = Array.isArray(movieList) ? movieList : Object.keys(movieList).slice(0, 5).map(key => movieList[key]);
        
        serieTV.forEach(movie => {
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
    const larghezzaPopUp = 380;
    let leftPosition = rect.left;
    if (rect.left + larghezzaPopUp > window.innerWidth) {
        leftPosition = window.innerWidth - larghezzaPopUp - 20;
    }
    div.style.left = `${leftPosition}px`;
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
    
    div.addEventListener("click", () => {
        createSinossiLunga(movie);
    });
    
    body.appendChild(div);
}

function createSinossiLunga(movie){
    if(catalogoData[0].serieTV){
    const sinossiLungaDiv = document.createElement("div");
    sinossiLungaDiv.classList.add("sinossiLunga-container");
    
    const sinossiLunga = document.createElement('div');
    sinossiLunga.classList.add("sinossiLunga");
    const buttonClose = document.createElement("button");
    const buttonGuarda = document.createElement("button");
    
    buttonClose.addEventListener("click", () => {
        body.removeChild(sinossiLungaDiv);
    });
    
    buttonClose.textContent = "x";
    buttonClose.classList.add("close-button");
    
    buttonGuarda.textContent = "GUARDA ORA";
    buttonGuarda.classList.add("watch-button");


        sinossiLunga.innerHTML = `
            <video controls autoplay>
                <source src="${movie.trailer}" type="video/mp4">
            </video>
            <h2 style="padding: 0px 20px;">${movie.title}</h2>
            <p style="padding: 0px 20px; margin: 20px 0px">${movie.sinossiLunga}</p>
            <select style="margin-left: 20px; background-color: rgb(36, 36, 36); color: white; border-radius: 5px; padding: 10px;">
                ${movie.episodi.map(episodio => `<option>${episodio}</option>`).join('')}
            </select>
        `;
        const video = sinossiLunga.querySelector('video');
        video.volume = 0.5;
        
        sinossiLungaDiv.appendChild(sinossiLunga);
        sinossiLunga.appendChild(buttonClose);
        sinossiLunga.appendChild(buttonGuarda);
        body.appendChild(sinossiLungaDiv);
    }
}

function createSinossiLunga(movie){
    if(catalogoData[0].films){
    const sinossiLungaDiv = document.createElement("div");
    sinossiLungaDiv.classList.add("sinossiLunga-container");
    
    const sinossiLunga = document.createElement('div');
    sinossiLunga.classList.add("sinossiLunga");
    const buttonClose = document.createElement("button");
    const buttonGuarda = document.createElement("button");
    
    buttonClose.addEventListener("click", () => {
        body.removeChild(sinossiLungaDiv);
    });
    
    buttonClose.textContent = "x";
    buttonClose.classList.add("close-button");
    
    buttonGuarda.textContent = "GUARDA ORA";
    buttonGuarda.classList.add("watch-button");


        sinossiLunga.innerHTML = `
            <video controls autoplay>
                <source src="${movie.trailer}" type="video/mp4">
            </video>
            <h2 style="padding: 0px 20px;">${movie.title}</h2>
            <p style="padding: 0px 20px; margin: 20px 0px">${movie.sinossiLunga}</p>
        `;
        const video = sinossiLunga.querySelector('video');
        video.volume = 0.5;
        
        sinossiLungaDiv.appendChild(sinossiLunga);
        sinossiLunga.appendChild(buttonClose);
        sinossiLunga.appendChild(buttonGuarda);
        body.appendChild(sinossiLungaDiv);
    }
}