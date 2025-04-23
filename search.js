// Sample array of items
const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Blueberry",
    "Mango"
];

// Function to search items
function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = items.filter(item => item.toLowerCase().includes(query));

    // Display results
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length > 0) {
        results.forEach(result => {
            const div = document.createElement('div');
            div.classList.add('result');
            div.textContent = result;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
}