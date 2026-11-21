let search = document.getElementById("search");

let games = document.querySelectorAll(".games2");

search.addEventListener("input", function() {

    let text = search.value.toLowerCase();

    games.forEach(function(game) {

        let name = game.textContent.toLowerCase();

        if (name.includes(text)) {
            game.style.display = "";
        } 
        else {
            game.style.display = "none";
        }

    });

});

const searchInput = document.getElementById("search");
const characters = document.querySelectorAll(".wb-character");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    characters.forEach((character) => {
        const text = character.textContent.toLowerCase();
        const matches = text.includes(query);

        character.style.display = matches ? "" : "none";
    });
});

