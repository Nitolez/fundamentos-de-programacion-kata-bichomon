// Cambia el título 
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.textContent = 'Generasión 1 Pokimon';
    }

    // Cambia el color de fondo de la primera generación
    const primGen = document.querySelector('.infocard');
    if (primGen) {
        primGen.style.backgroundColor = 'yellow'
    }

    //URL de la página
    console.log('URL de la página:', window.location.href);

    //Dominio de la página
    console.log('Dominio de la página:', window.location.hostname);

    // Nodos de imagen
    const imagenes = document.querySelectorAll('img');
    console.log(imagenes);

    // Sustituye el atributo "src" 
    imagenes.forEach(img => {
        img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
    });

    // Cambia el fondo de los Pokemon voladores
    const voladores = document.querySelectorAll('.infocard-lg-data.text-muted .itype.flying');
    voladores.forEach(vol => {
        const infocard = vol.closest('.infocard-lg-data.text-muted');
        if (infocard) {
            infocard.style.backgroundColor = 'blue'
        }
    });
