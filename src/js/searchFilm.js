function searchFilms() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const filmCards = document.querySelectorAll('.item');

    filmCards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = ""; // Show the card if it matches the search
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match the search
        }
    });
}
