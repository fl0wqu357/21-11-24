document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pokemonContainer');
    const pokemonData = JSON.parse(localStorage.getItem('pokemonData')) || [];

    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <a href="${pokemon.url}" target="_blank">${pokemon.url}</a>
        `;

        container.appendChild(card);
    });
});
