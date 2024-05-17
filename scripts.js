// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.textContent = 'Generasión 1 Pokimon';
    }

    // Cambia el color de fondo de la primera generación de Pokimon
    const primGen = document.querySelector('.infocard');
    if (primGen) {
        primGen.style.backgroundColor = 'yellow'
    }

    // Imprime por consola la URL de la página
    console.log('URL de la página:', window.location.href);

    // Imprime por consola el dominio de la página
    console.log('Dominio de la página:', window.location.hostname);

    // Imprime todos los nodos de imagen
    const imagenes = document.querySelectorAll('img');
    console.log(imagenes);

    // Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    imagenes.forEach(img => {
        img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
    });

    // Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
    const voladores = document.querySelectorAll('.infocard-lg-data.text-muted .itype.flying');
    voladores.forEach(vol => {
        const infocard = vol.closest('.infocard-lg-data.text-muted');
        if (infocard) {
            infocard.style.backgroundColor = 'blue'
        }
    });

