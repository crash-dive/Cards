(() => {
  // <stdin>
  var search = document.getElementById("game-search");
  var games = document.querySelectorAll("#game-list li");
  search.addEventListener("input", () => {
    const term = search.value.toLowerCase();
    games.forEach((game) => {
      game.hidden = !game.dataset.name.includes(term);
    });
  });
})();
