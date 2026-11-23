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
    const buttons = document.querySelectorAll("button");

    if (searchInput && characters.length > 0) {
        let selectedAlignment = "all";

        function filterBrawlhalla() {
            const query = searchInput.value.trim().toLowerCase();

            characters.forEach((character) => {
                const text = character.textContent.toLowerCase();
                const alignment = (character.dataset.alignment || "other").toLowerCase();

                const matchesSearch = text.includes(query);
                const matchesAlignment =
                    selectedAlignment === "all" || alignment === selectedAlignment;

                character.style.display = matchesSearch && matchesAlignment ? "" : "none";
            });
        }

        searchInput.addEventListener("input", filterBrawlhalla);

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                selectedAlignment = button.textContent.trim().toLowerCase();
                filterBrawlhalla();
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