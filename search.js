// // Sample array of items
// const items = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Grapes",
//     "Pineapple",
//     "Watermelon",
//     "Strawberry",
//     "Blueberry",
//     "Mango"
// ];

// // Function to search items
// function searchItems() {
//     const query = document.getElementById('searchInput').value.toLowerCase();
//     const results = items.filter(item => item.toLowerCase().includes(query));

//     // Display results
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     if (results.length > 0) {
//         results.forEach(result => {
//             const div = document.createElement('div');
//             div.classList.add('result');
//             div.textContent = result;
//             resultsContainer.appendChild(div);
//         });
//     } else {
//         resultsContainer.textContent = 'No results found';
//     }
// }

// path/to/custom-scripts.js
$(document).ready(function() {
    $('.input-group button').on('click', function() {
        let query = $('#searchInput').val();
        
        console.log("Search Query:", query);

        // Placeholder search logic
        if (query.trim() === '') {
            alert('Please enter a valid search term');
            return;
        }

        // Simulate an AJAX request to fetch search results
        $.ajax({
            url: 'path/to/search-endpoint',
            type: 'GET',
            data: { q: query },
            success: function(response) {
                console.log("Search Results:", response);
                
                // Placeholder for displaying search results
                let resultsDiv = $('#searchResults');
                resultsDiv.empty();
                if (response.length > 0) {
                    response.forEach(item => {
                        resultsDiv.append(`
                            <div>
                                ${item.name} - ${item.description}
                            </div>
                        `);
                    });
                } else {
                    resultsDiv.text('No results found.');
                }
            },
            error: function(xhr, status, error) {
                console.error("Search Error:", error);
                alert('An error occurred while searching. Please try again later.');
            }
        });
    });
});