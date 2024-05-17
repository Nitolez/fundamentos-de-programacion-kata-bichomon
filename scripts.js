// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = 'Generasión 1 Pokimon';
    }

    // Cambia el color de fondo de la primera generación de Pokimon
    const firstGenerationElement = document.querySelector('.infocard');
    if (firstGenerationElement) {
        firstGenerationElement.style.backgroundColor = '#FFD700'; // Color dorado, puedes cambiarlo a tu preferencia
    }

    // Imprime por consola la URL de la página
    console.log('URL de la página:', window.location.href);

    // Imprime por consola el dominio de la página
    console.log('Dominio de la página:', window.location.hostname);

    // Imprime todos los nodos de imagen
    const imageElements = document.querySelectorAll('img');
    console.log('Todos los nodos de imagen:', imageElements);

    // Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    imageElements.forEach(img => {
        img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
    });

    // Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
    const flyingPokemonElements = document.querySelectorAll('.infocard-lg-data.text-muted .itype.flying');
    flyingPokemonElements.forEach(flyingElement => {
        const infocardElement = flyingElement.closest('.infocard-lg-data.text-muted');
        if (infocardElement) {
            infocardElement.style.backgroundColor = '#ADD8E6'; // Color azul claro, puedes cambiarlo a tu preferencia
        }
    });

