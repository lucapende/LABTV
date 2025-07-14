document.addEventListener('DOMContentLoaded', () => {
    const movieCovers = document.querySelectorAll('main img');
    const body = document.body;

    const movieData = {
        'sandman': {
            title: 'The Sandman',
            synopsisBreve: 'Un dio del sogno intraprende un viaggio tra i mondi per recuperare ciò che gli è stato rubato e restaurare il suo regno. Basato sui fumetti di Neil Gaiman.',
            synopsisLunga: 'Nel 1916, Morfeo, uno dei sette Eterni, viene catturato durante un rituale occulto da Roderick Burgess, un mago che mirava a catturare Morte per riportare in vita suo figlio, caduto in battaglia. Morfeo rimane prigioniero per 105 anni. Una volta evaso, intraprende un viaggio attraverso mondi diversi per ristabilire l\'ordine nel suo regno e recuperare i suoi oggetti di potere: l\'elmo, il rubino e la sabbia. La trama esplora il rapporto tra il mondo reale e il mondo dei sogni, concentrandosi anche sulle persone comuni che si trovano coinvolte negli eventi sovrannaturali. La serie affronta temi come la famiglia, la responsabilità, il potere e le conseguenze delle proprie azioni, sia nel mondo dei vivi che in quello dei sogni. In sintesi, "The Sandman" è una storia epica che mescola elementi di fantasy, horror, mitologia e dramma, seguendo il percorso di Morfeo nella sua ricerca di redenzione e nel tentativo di ripristinare l\'equilibrio tra i regni. '
        },
        'squid_game': {
            title: 'Squid Game',
            synopsisBreve: 'Centinaia di persone con problemi economici accettano un invito a competere in giochi per bambini, ma con poste in gioco mortali.',
            synopsisLunga: 'La serie inizia con Seong Gi-hun, un uomo con molti debiti e una vita difficile, che riceve un biglietto da visita per partecipare a un gioco misterioso. Accetta e si ritrova insieme ad altri 455 giocatori, tutti in situazioni finanziarie disperate, in un luogo isolato. Lì, scoprono che i giochi a cui dovranno partecipare sono ispirati a giochi tradizionali per bambini, come "Un, due, tre, stella", "Tiro alla fune" e "Ruba il biscotto". Tuttavia, la posta in gioco è molto alta: chi perde viene eliminato, ovvero ucciso. Il gioco è organizzato da una figura misteriosa, il "Guardiano", e seguito da un gruppo di ricchi VIP che scommettono sui partecipanti, creando un\'atmosfera di tensione e crudeltà. Gi-hun, insieme ad altri personaggi come Cho Sang-woo (un amico d\'infanzia) e Kang Sae-byeok (una giovane nordcoreana), cerca di sopravvivere e di scoprire la verità dietro questo gioco mortale. La serie esplora la natura umana in situazioni estreme, mettendo in evidenza l\'avidità, la disperazione, la lealtà e la moralità dei personaggi. Gi-hun, inizialmente riluttante, diventa sempre più determinato a vincere e a smascherare il sistema che sta dietro al gioco. '
        },
        'stranger_things': {
            title: 'Stranger Things',
            synopsisBreve: 'Quando un ragazzino scompare, i suoi amici, la madre e il capo della polizia sono coinvolti in un terrificante mistero che coinvolge esperimenti governativi segreti, forze soprannaturali e una strana ragazzina.',
            synopsisLunga: 'La storia inizia nel 1983 a Hawkins, quando Will Byers scompare misteriosamente dopo una partita a Dungeons & Dragons con i suoi amici. Le indagini sulla sua scomparsa portano i suoi amici, Mike, Dustin e Lucas, a incontrare Undici, una ragazza con poteri telecinetici, che li aiuta nella ricerca. Nel frattempo, la madre di Will, Joyce, riceve messaggi dal figlio attraverso le luci di casa e scopre l\'esistenza del Sottosopra, una dimensione oscura e pericolosa popolata da creature mostruose, come il Demogorgone.  Le indagini sulla scomparsa di Will coinvolgono anche il capo della polizia, Jim Hopper, che scopre l\'esistenza di un laboratorio segreto a Hawkins, il Hawkins National Laboratory, dove vengono condotti esperimenti paranormali e dove Undici è stata tenuta prigioniera. La serie si sviluppa intrecciando le storie dei ragazzi, della famiglia Byers, del capo Hopper, e di altri personaggi, tutti coinvolti nella lotta contro le forze del Sottosopra.  La serie è ricca di colpi di scena e misteri, con protagonisti giovani eroi che devono affrontare le proprie paure e i pericoli del Sottosopra, mentre cercano di proteggere la loro città e i loro amici. Ogni stagione approfondisce ulteriormente il mondo del Sottosopra, introducendo nuovi personaggi, creature e minacce, e rivelando segreti sempre più oscuri sulla storia di Hawkins e dei suoi abitanti.  In sintesi, Stranger Things è una serie che unisce elementi di fantascienza, horror, mistero e dramma, con un\'ambientazione anni \'80 e personaggi ben caratterizzati, che affrontano sfide soprannaturali e personali. '
        },
        'tenebre_e_ossa': {
            title: 'Tenebre e Ossa',
            synopsisBreve: 'Una giovane cartografa orfana scopre di avere un potere straordinario che potrebbe liberare il suo paese da una minaccia oscura, ma dovrà affrontare forze pericolose.',
            synopsisLunga: '"Tenebre e ossa" è una serie fantasy ambientata in un mondo dilaniato dalla guerra, dove la giovane orfana Alina Starkov scopre di possedere un potere straordinario: è una Grisha, una persona in grado di manipolare elementi, e più precisamente un Evocaluce, capace di evocare la luce del sole. Questo potere potrebbe essere la chiave per distruggere la Faglia d\'Ombra, una regione oscura e pericolosa che divide il regno di Ravka. Alina viene quindi reclutata nell\'esercito dei Grisha e addestrata dal Generale Kirigan, noto anche come l\'Oscuro, che si rivela essere anche il creatore della Faglia. Tuttavia, Kirigan ha intenzioni sinistre: vuole usare il potere di Alina per accrescere il suo potere e governare Ravka. La storia segue Alina mentre cerca di controllare i suoi poteri, di scoprire i segreti di Kirigan e di trovare un modo per salvare il suo mondo, combattendo tradimenti e pericoli. La serie mescola elementi di avventura, amore, magia e intrighi politici, esplorando la crescita personale dei personaggi e le loro lotte per la sopravvivenza in un mondo diviso tra luce e oscurità. '
        },
        'you': {
            title: 'You',
            synopsisBreve: 'Un manager di librerie ossessivo e brillante usa Internet e i social media per entrare nella vita delle persone di cui si innamora.',
            synopsisLunga: 'Joe, un libraio a New York, trasforma questa ossessione in una serie di azioni violente e manipolative, arrivando anche a commettere omicidi per eliminare gli ostacoli percepiti nella sua relazione.La serie, narrata dalla prospettiva di Joe, esplora il fenomeno dello stalking e le giustificazioni che lui utilizza per i suoi comportamenti, spesso considerati disturbati. Nelle varie stagioni, Joe si trasferisce da New York a Los Angeles e poi in un\'altra città, sempre alla ricerca dell\'amore e sempre con lo stesso schema: ossessione, stalking, e, infine, violenza. Ogni stagione presenta un nuovo interesse amoroso e un nuovo scenario, ma il ciclo di comportamento ossessivo-compulsivo di Joe rimane costante. La serie analizza la psicologia di Joe, evidenziando la sua incapacità di vedere le donne come individui autonomi, considerandole invece come oggetti da possedere e controllare. Il finale della serie, con Joe in prigione, segna una svolta, con il protagonista che finalmente affronta le conseguenze delle sue azioni.'
        },
        'arrival': {
            title: 'Arrival',
            synopsisBreve: 'Una linguista viene reclutata dall\'esercito per comunicare con gli alieni che sono atterrati sulla Terra e scoprire le loro intenzioni.',
            synopsisLunga: 'Arrival racconta la storia di Louise Banks, una rinomata linguista, che viene reclutata dall\'esercito americano quando dodici misteriose navicelle aliene atterrano in diverse parti del mondo. Il suo compito è cercare di comunicare con gli alieni, noti come eptapodi, per capire le loro intenzioni e se rappresentano una minaccia per l\'umanità. Mentre lavora alla decifrazione del linguaggio alieno, Louise inizia ad avere strane visioni del futuro, che si rivelano essere legate alla sua interazione con gli eptapodi e alla loro lingua. '

        },
        'gran_torino': {
            title: 'Gran Torino',
            synopsisBreve: 'Un veterano della guerra di Corea razzista si ritrovato a confrontarsi con i suoi pregiudizi quando i suoi vicini di casa, una famiglia Hmong, lo spingono fuori dalla sua zona di comfort.',
            synopsisLunga: '"Gran Torino" è un film del 2008 diretto e interpretato da Clint Eastwood. Racconta la storia di Walt Kowalski, un veterano della guerra di Corea, burbero e razzista, che vive in un quartiere dominato da immigrati Hmong. Dopo la morte della moglie, Walt si ritrova solo e in conflitto con i suoi figli. Il suo unico vero amore è la sua Ford Gran Torino del 1972. Quando il giovane vicino Thao tenta di rubargliela, spinto da una gang locale, Walt si troverà a difendere lui e la sua famiglia, superando i propri pregiudizi e instaurando un inaspettato rapporto di amicizia e protezione. Il film esplora temi di redenzione, razzismo, famiglia e la ricerca di significato nella vecchiaia. '
        },
        'oppeneimer': {
            title: 'Oppenheimer',
            synopsisBreve: 'Il film racconta la storia di J. Robert Oppenheimer, il fisico teorico che fu a capo del Laboratorio di Los Alamos durante il Progetto Manhattan e viene accreditato come "padre della bomba atomica".',
            synopsisLunga: 'Oppenheimer è il dramma biografico di J. Robert Oppenheimer, il fisico che diresse il Progetto Manhattan per creare la bomba atomica. Il film esplora il suo complesso percorso, dalla brillante ascesa scientifica alle tormentate implicazioni morali della sua invenzione. La narrazione si sviluppa tra la frenesia della costruzione della bomba a Los Alamos e le successive battaglie legali e politiche post-belliche che minacciarono la sua reputazione. Il film mostra il profondo conflitto interiore di Oppenheimer, diviso tra il trionfo scientifico e l\'orrore della distruzione che ha scatenato. È un racconto intenso sulle scelte etiche della scienza, la responsabilità del genio e le conseguenze globali di un\'innovazione capace di cambiare per sempre il destino del mondo.'
        },
        'interstellar': {
            title: 'Interstellar',
            synopsisBreve: 'Un gruppo di esploratori si avventura attraverso un wormhole nel tentativo di garantire la sopravvivenza dell\'umanità.',
            synopsisLunga: 'Interstellar è un\'odissea fantascientifica ambientata in una Terra morente. Cooper, un ex pilota, intraprende un disperato viaggio attraverso un wormhole per trovare un nuovo pianeta abitabile, ultima speranza per l\'umanità.La missione lo porta ad affrontare la dilatazione del tempo e i pericoli dei buchi neri, mentre il legame con sua figlia Murph lo spinge a lottare contro le enormi distanze. Il film è una profonda riflessione sulla scienza, l\'amore e il sacrificio, esplorando la nostra posizione nell\'universo'
        },
        'split': {
            title: 'Split',
            synopsisBreve: 'Un uomo con 23 diverse personalità rapirà tre ragazze, che dovranno trovare un modo per scappare prima che appaia la sua 24ª personalità, "La Bestia".',
            synopsisLunga: 'Split è un thriller psicologico su Kevin, un uomo con 23 personalità che ne sviluppa una ventiquattresima e mostruosa, "La Bestia". Quando rapisce tre ragazze, tra cui l\'astuta Casey, le prigioniere devono confrontarsi con le sue molteplici identità per sopravvivere. Il film è un\'esplorazione inquietante del trauma e della resilienza umana.'
        },
        'after_life': {
            title: 'After Life',
            synopsisBreve: 'Un giornalista locale lotta per affrontare la morte improvvisa della moglie, decidendo di vivere la vita facendo esattamente ciò che vuole.',
            synopsisLunga: 'After Life è una serie comedy-drama che segue Tony, un giornalista distrutto dalla morte della moglie. Decide di vivere senza filtri, dicendo ciò che pensa, ma il suo cinismo viene gradualmente sfidato dalla gentilezza inaspettata di chi lo circonda. La serie è un\'agrodolce esplorazione del lutto, dell\'amicizia e della riscoperta del significato della vita.'
        },
        'breaking_bad': {
            title: 'Breaking Bad',
            synopsisBreve: 'Un professore di chimica del liceo con il cancro ai polmoni si trasforma in un produttore di metanfetamina per assicurare il futuro finanziario della sua famiglia.',
            synopsisLunga: 'Breaking Bad segue Walter White, un professore di chimica che, diagnosticato con un cancro, inizia a produrre metanfetamina con il suo ex studente Jesse Pinkman per assicurare il futuro della famiglia. La serie narra la sua discesa nel mondo criminale, trasformandolo da uomo mite nel temuto Heisenberg, esplorando il degrado morale e le conseguenze distruttive del potere.'
        },
        'dexter': {
            title: 'Dexter',
            synopsisBreve: 'Di giorno analista di schizzi di sangue per la polizia, di notte serial killer che prende di mira altri assassini.',
            synopsisLunga: 'Dexter Morgan è un analista forense di Miami con una doppia vita: è un serial killer che uccide solo altri assassini sfuggiti alla giustizia, seguendo il "Codice di Harry". La serie bilancia la sua facciata normale con la sua inarrestabile "Oscura Mamma", esplorando moralità, giustizia e la natura del male.'
        },
        'friends': {
            title: 'Friends',
            synopsisBreve: 'Sei amici che vivono a Manhattan affrontare le sfide della vita, del lavoro e dell\'amore, sempre supportandosi a vicenda.',
            synopsisLunga: 'Friends è una sit-com che segue le vite di sei amici a New York: Monica, Chandler, Phoebe, Rachel, Ross e Joey. La serie si concentra sulle loro avventure quotidiane, carriere, amori e le dinamiche complesse della loro amicizia, spesso riuniti nel caffè Central Perk. È una celebrazione dei legami che ci si sceglie e delle sfide della vita adulta.'
        },
        'lost': {
            title: 'Lost',
            synopsisBreve: 'I sopravvissuti a un disastro aereo si ritrovano bloccati su un\'isola misteriosa, piena di creature e segreti.',
            synopsisLunga: 'Lost inizia con lo schianto del volo 815 su un\'isola misteriosa. I sopravvissuti, guidati da Jack, Kate e Locke, scoprono che l\'isola è piena di segreti e pericoli inspiegabili. Tra flashback e misteri, la serie esplora temi come la sopravvivenza, il destino e le connessioni tra i personaggi, tenendo gli spettatori con il fiato sospeso.'
        }
    };

    const moviePopup = document.createElement('div');
    moviePopup.classList.add('movie-popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Bottone di chiusura (X)
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'X';
    
    // Elemento per il titolo del film
    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popup-title');

    const popupImg = document.createElement('img');
    popupImg.classList.add('popup-img');

    const popupSynopsis = document.createElement('p');
    popupSynopsis.classList.add('popup-synopsis');

    // Pulsante GUARDA ORA
    const watchNowButton = document.createElement('button');
    watchNowButton.classList.add('watch-now-button');
    watchNowButton.textContent = 'GUARDA ORA';
    

    // Ordine degli elementi nel popup
    popupContent.appendChild(closeButton);
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(popupImg);
    popupContent.appendChild(popupSynopsis);
    popupContent.appendChild(watchNowButton);
    moviePopup.appendChild(popupContent);

    body.appendChild(moviePopup);

    let hoverEnterTimeout; // Per gestire il ritardo nella comparsa all'hover
    let hoverLeaveTimeout; // Per gestire il ritardo nella chiusura all'hover/leave
    let isPopupDetailed = false; // Flag per indicare se il popup è in modalità dettagliata (cliccato)
    let currentActiveImg = null; // L'immagine associata al popup attualmente aperto (sia hover che click)


    // Funzione per mostrare il popup (gestisce sia hover che dettagliato)
    const showPopup = (imgElement, showDetailed = false) => {
        clearTimeout(hoverEnterTimeout); // Cancella timeout di apertura precedente
        clearTimeout(hoverLeaveTimeout); // Cancella timeout di chiusura precedente

        // Evita di riaprire un popup dettagliato già attivo per la stessa immagine
        if (isPopupDetailed && currentActiveImg === imgElement && showDetailed) {
            return; 
        }

        currentActiveImg = imgElement; // Imposta l'immagine attiva
        isPopupDetailed = showDetailed; // Aggiorna lo stato dettagliato

        const altText = imgElement.alt.replace(/ /g, '_').toLowerCase();
        const data = movieData[altText] || { title: 'Titolo non disponibile', synopsis: 'Sinossi non disponibile.' };

        popupImg.src = imgElement.src;
        popupImg.alt = imgElement.alt;

        // Se il popup è in modalità dettagliata, mostriamo tutti i dettagli.
        if (isPopupDetailed) {
            popupTitle.textContent = data.title;
            popupSynopsis.textContent = data.synopsisLunga; // La sinossi sarà sempre completa
            popupTitle.style.display = 'block'; 
            popupSynopsis.style.display = 'block'; 
            watchNowButton.style.display = 'block'; 
            closeButton.style.display = 'block'; 
            moviePopup.classList.add('is-detailed'); // Aggiungi classe per stili specifici del dettagliato
        } else {
            // Modalità hover (anteprima): solo immagine e sinossi
            popupTitle.style.display = 'none'; 
            popupSynopsis.textContent = data.synopsisBreve; // Mostra sinossi completa anche in hover
            popupSynopsis.style.display = 'block'; 
            watchNowButton.style.display = 'none'; 
            closeButton.style.display = 'none'; 
            moviePopup.classList.remove('is-detailed'); // Rimuovi la classe dettagliata
        }

        const imgRect = imgElement.getBoundingClientRect();

        // Applica le dimensioni e la posizione iniziali (dell'immagine)
        moviePopup.style.left = `${imgRect.left}px`;
        moviePopup.style.top = `${imgRect.top}px`;
        moviePopup.style.width = `${imgRect.width}px`;
        moviePopup.style.height = `${imgRect.height}px`;

        moviePopup.classList.add('is-visible');

        // Reset per l'animazione di entrata del contenuto
        popupContent.style.opacity = '0';
        popupContent.style.transform = 'scale(0.8)';

        // Breve timeout per permettere al browser di applicare gli stili iniziali
        setTimeout(() => {
            popupContent.style.opacity = '1';
            popupContent.style.transform = 'scale(1)';
        }, 50); // Ritardo breve per l'animazione di entrata
    };

    // Funzione per chiudere il popup
    const closePopup = () => {
        if (moviePopup.classList.contains('is-visible')) {
            clearTimeout(hoverEnterTimeout); // Assicurati di cancellare anche questo
            clearTimeout(hoverLeaveTimeout); // Cancella qualsiasi timeout di chiusura in sospeso

            // Avvia l'animazione di uscita del contenuto
            popupContent.style.opacity = '0';
            popupContent.style.transform = 'scale(0.8)';
            
            // Nascondi l'intero popup dopo la transizione del contenuto
            hoverLeaveTimeout = setTimeout(() => { // Usa hoverLeaveTimeout per la chiusura
                moviePopup.classList.remove('is-visible');
                moviePopup.classList.remove('is-detailed'); // Rimuovi anche la classe dettagliata
                currentActiveImg = null; // Resetta l'immagine attiva
                isPopupDetailed = false; // Resetta lo stato dettagliato
            }, 200); // Durata della transizione di uscita del popup-content
        }
    };

    // Listener per i bottoni all'interno del popup
    closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Impedisce la propagazione del click
        closePopup();
    });

    watchNowButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Impedisce la propagazione del click
        alert('Hai cliccato su GUARDA ORA!'); // Azione predefinita
        closePopup();
    });


    movieCovers.forEach(img => {
        // Evento mouseenter sull'immagine (per l'anteprima)
        img.addEventListener('mouseenter', () => {
            // Se il popup non è in modalità dettagliata per la stessa immagine,
            // o se non è affatto attivo, avvia il timeout per mostrare l'anteprima.
            if (!isPopupDetailed || currentActiveImg !== img) {
                hoverEnterTimeout = setTimeout(() => {
                    showPopup(img, false); // Mostra popup in modalità hover
                }, 300); // Ritardo per l'apertura hover
            }
        });

        // Evento mouseleave dall'immagine (per l'anteprima)
        img.addEventListener('mouseleave', () => {
            clearTimeout(hoverEnterTimeout); // Cancella l'eventuale timeout di apertura
            // Se non siamo in modalità dettagliata e il mouse non è sul popup, chiudi
            if (!isPopupDetailed && !moviePopup.matches(':hover')) {
                closePopup();
            }
        });

        // Evento click sull'immagine principale: APRE il popup in modalità HOVER/Anteprima
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            clearTimeout(hoverEnterTimeout);
            if (!moviePopup.classList.contains('is-visible') || currentActiveImg !== img) {
                 showPopup(img, false); // Apre il popup in modalità hover/anteprima al click
            }
        });
    });

    // NUOVO: Evento click sul popup stesso per passare alla modalità dettagliata
    moviePopup.addEventListener('click', (event) => {
        event.stopPropagation(); // Impedisce al click di propagarsi al document
        // Se il popup è visibile e non è già in modalità dettagliata, attivala
        if (moviePopup.classList.contains('is-visible') && !isPopupDetailed) {
            if (currentActiveImg) {
                showPopup(currentActiveImg, true); // Passa alla modalità dettagliata
            }
        }
    });

    // Evento mouseenter sul popup stesso (per mantenere aperto all'hover)
    moviePopup.addEventListener('mouseenter', () => {
        clearTimeout(hoverLeaveTimeout); // Annulla il timeout di chiusura se il mouse rientra nel popup
    });

    // Evento mouseleave dal popup (per chiudere se non in modalità dettagliata)
    moviePopup.addEventListener('mouseleave', () => {
        if (!isPopupDetailed) { // Chiudi solo se non è stato cliccato per i dettagli
            closePopup();
        }
    });

    // Evento click sul document per chiudere il popup se si clicca fuori
    document.addEventListener('click', (event) => {
        // Se il click non è sul popup, e non è su una delle immagini delle copertine
        // e il popup è visibile, allora chiudi.
        if (!moviePopup.contains(event.target) && !Array.from(movieCovers).includes(event.target) && moviePopup.classList.contains('is-visible')) {
            closePopup();
        }
    });

    // Funzione per aggiornare la posizione del popup se è visibile
    const updatePopupPosition = () => {
        if (moviePopup.classList.contains('is-visible') && currentActiveImg) {
            // Se il popup è in modalità dettagliata, il CSS si occuperà del suo posizionamento fisso.
            // Altrimenti, lo posizioniamo rispetto all'immagine.
            if (!isPopupDetailed) {
                const imgRect = currentActiveImg.getBoundingClientRect();
                moviePopup.style.left = `${imgRect.left}px`;
                moviePopup.style.top = `${imgRect.top}px`;
                moviePopup.style.width = `${imgRect.width}px`;
                moviePopup.style.height = `${imgRect.height}px`;
            }
        } else {
            // Se non c'è un'immagine attiva o il popup non è visibile, assicurati che sia chiuso
            closePopup(); 
        }
    };

    // Aggiungi listener per il ridimensionamento della finestra e lo scroll
    window.addEventListener('resize', updatePopupPosition);
    window.addEventListener('scroll', updatePopupPosition);
});