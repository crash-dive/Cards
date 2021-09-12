const search = document.getElementById('game-search') as HTMLInputElement;
const games = document.querySelectorAll<HTMLLIElement>('#game-list li');

search.addEventListener('input', () => {
    const term = search.value.toLowerCase();

    games.forEach(game => {
        game.hidden = !game.dataset.name.includes(term);
    });
});
