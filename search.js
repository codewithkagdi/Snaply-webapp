document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');

    const UNSPLASH_API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; // Replace with your Unsplash API key
    const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

    // Function to search images from Unsplash
    function searchImages(query) {
        const url = `${UNSPLASH_API_URL}?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=10`;
        console.log(`Fetching images from: ${url}`);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("API Response:", data);  // Log the full API response to see if it's working
                displayResults(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                searchResultsContainer.innerHTML = `<p>Error fetching images. Please try again later.</p>`;
            });
    }

    // Function to display search results with images
    function displayResults(results) {
        searchResultsContainer.innerHTML = ''; // Clear previous results
        if (results && results.length > 0) {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('search-results');
                resultElement.innerHTML = `
                    <img src="${result.urls.small}" alt="${result.alt_description}">
                    <p>${result.alt_description}</p>
                `;
                searchResultsContainer.appendChild(resultElement);
            });
        } else {
            searchResultsContainer.innerHTML = '<p>No results found.</p>';
        }
    }

    // Event listener for the search button
    searchButton.addEventListener('click', function () {
        const query = searchBox.value.trim();
        if (query !== '') {
            searchImages(query);
        }
    });

    // Event listener for 'Enter' keypress in search box
    searchBox.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const query = searchBox.value.trim();
            if (query !== '') {
                searchImages(query);
            }
        }
    });
});
