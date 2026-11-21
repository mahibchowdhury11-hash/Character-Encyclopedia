{
    const searchInput = document.getElementById("search");
    const games = document.querySelectorAll(".games2");

    if (searchInput && games.length > 0) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            games.forEach((game) => {
                const name = game.textContent.toLowerCase();
                game.style.display = name.includes(query) ? "" : "none";
            });
        });
    }
}

{
    const searchInput = document.getElementById("search");
    const characters = document.querySelectorAll(".wb-character");

    if (searchInput && characters.length > 0) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            characters.forEach((character) => {
                const text = character.textContent.toLowerCase();
                const matches = text.includes(query);

                character.style.display = matches ? "" : "none";
            });
        });
    }
}

{
    const searchInput = document.getElementById("search");
    const characters = document.querySelectorAll(".brawl-character");

    if (searchInput && characters.length > 0) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            characters.forEach((character) => {
                const text = character.textContent.toLowerCase();
                const matches = text.includes(query);

                character.style.display = matches ? "" : "none";
            });
        });
    }
}

{
    const searchInput = document.getElementById("search");
    const characters = document.querySelectorAll(".sor-character");

    if (searchInput && characters.length > 0) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            characters.forEach((character) => {
                const text = character.textContent.toLowerCase();
                const matches = text.includes(query);

                character.style.display = matches ? "" : "none";
            });
        });
    }
}