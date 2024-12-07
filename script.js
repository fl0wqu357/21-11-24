document.getElementById('fetchDataButton').addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('pokemonData', JSON.stringify(data.results));
            window.location.href = 'page2.html';
        })
        .catch(error => console.error('Error al traer los datos:', error));
});
