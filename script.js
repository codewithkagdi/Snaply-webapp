// // document.addEventListener('DOMContentLoaded', function() {
    

// //     let slideIndex = 0;
// //     let page = 1;  // Page number for infinite scroll
// //     const perPage = 8;  // Number of images to load per page
// //     let isLoading = false;  // To prevent multiple simultaneous requests

// //     function showSlides() {
// //         const slides = document.querySelectorAll('.slides img');
// //         const totalSlides = slides.length;

// //         if (slideIndex >= totalSlides) {
// //             slideIndex = 0;
// //         } else if (slideIndex < 0) {
// //             slideIndex = totalSlides - 1;
// //         }

// //         const offset = -slideIndex * 100;
// //         document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// //     }

// //     function fetchImages() {
// //         const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; // Replace with your actual Unsplash API key
// //         const API_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;
    
// //         fetch(API_URL)
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! Status: ${response.status}`);
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 const slidesContainer = document.querySelector('.slides');
// //                 slidesContainer.innerHTML = data.map(photo => `
// //                     <img src="${photo.urls.regular}" alt="${photo.alt_description}">
// //                 `).join('');
// //                 showSlides();
// //             })
// //             .catch(error => console.error('Error fetching images:', error));
// //     }
    
// //     function fetchRandomPhotos(page) {
// //         const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; // Replace with your actual Unsplash API key
// //         const API_URL = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${API_KEY}&page=${page}`;
    
// //         fetch(API_URL)
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! Status: ${response.status}`);
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 const gallery = document.getElementById('random-images');
// //                 gallery.innerHTML += data.map(photo => `
// //                     <img src="${photo.urls.small}" alt="${photo.alt_description}">
// //                 `).join('');
// //                 isLoading = false;
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching random photos:', error);
// //                 isLoading = false;
// //             });
// //     }
    

// //     function onScroll() {
// //         if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !isLoading) {
// //             isLoading = true;
// //             page++;
// //             fetchRandomPhotos(page);
// //         }
// //     }

// //     document.querySelector('.next').addEventListener('click', () => {
// //         slideIndex++;
// //         showSlides();
// //     });

// //     document.querySelector('.prev').addEventListener('click', () => {
// //         slideIndex--;
// //         showSlides();
// //     });

// //     fetchImages();
// //     fetchRandomPhotos(page);  // Load initial images
// //     setInterval(() => {
// //         slideIndex++;
// //         showSlides();
// //     }, 3000);


// //     // Toggle popup menu visibility
// //     const hamburger = document.querySelector('.hamburger');
// //     const popupMenu = document.getElementById('popup-menu');
// //     const closePopup = document.getElementById('close-popup');

// //     hamburger.addEventListener('click', () => {
// //         popupMenu.classList.toggle('menu-visible');
// //     });

// //     closePopup.addEventListener('click', () => {
// //         popupMenu.classList.remove('menu-visible');
// //     });

// //     // Close popup menu when clicking outside of it
// //     document.addEventListener('click', (event) => {
// //         if (!popupMenu.contains(event.target) && !hamburger.contains(event.target)) {
// //             popupMenu.classList.remove('menu-visible');
// //         }
// //     });


// //     // Attach scroll event listener
// //     window.addEventListener('scroll', onScroll);



// //     // Hide search container when clicking outside of it
// //     document.addEventListener('click', (event) => {
// //         if (!searchToggle.contains(event.target) && !searchContainer.contains(event.target)) {
// //             searchContainer.classList.remove('visible');
// //         }
// //     });

// //     // Handle search button click
// //     const searchButton = document.getElementById('search-button');
// //     searchButton.addEventListener('click', () => {
// //         const query = document.getElementById('search-input').value;
// //         if (query) {
// //             performSearch(query);
// //         }
// //     });

// //     function performSearch(query) {
// //         const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; // Replace with your Unsplash API key
// //         const API_URL = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`;

// //         fetch(API_URL)
// //             .then(response => response.json())
// //             .then(data => {
// //                 const resultsContainer = document.getElementById('search-results');
// //                 resultsContainer.innerHTML = data.results.map(photo => `
// //                     <img src="${photo.urls.small}" alt="${photo.alt_description}">
// //                 `).join('');
// //             })
// //             .catch(error => console.error('Error searching images:', error));
// //     }

// //     // Initialize the page
// //     document.addEventListener('DOMContentLoaded', function() {
// //         fetchImages();
// //         fetchRandomPhotos(page);  // Load initial images
// //     });
    

// //     init();
    

// // });


// // document.addEventListener('DOMContentLoaded', function() {
// //     let slideIndex = 0;  // For slider functionality
// //     const perPage = 8;   // Number of images to load per page
// //     let isLoading = false;  // To prevent multiple simultaneous requests

// //     // Function to fetch random images from Unsplash
// //     function fetchRandomPhotos(page) {
// //         const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI';  // Replace with your Unsplash API key
// //         const API_URL = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${API_KEY}&page=${page}`;

// //         fetch(API_URL)
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! Status: ${response.status}`);
// //                 }
// //                 return response.json();
// //             })
// //             .then(data => {
// //                 const gallery = document.getElementById('random-images');
// //                 gallery.innerHTML += data.map(photo => `
// //                     <img src="${photo.urls.small}" alt="${photo.alt_description}">
// //                 `).join('');
// //                 isLoading = false;  // Allow further requests
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching random photos:', error);
// //                 isLoading = false;  // Allow further requests even if an error occurs
// //             });
// //     }

// //     // Function to handle infinite scroll
// //     function onScroll() {
// //         if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !isLoading) {
// //             isLoading = true;
// //             fetchRandomPhotos(1);  // Load more images
// //         }
// //     }

// //     // Function to display the images in a slider
// //     function showSlides() {
// //         const slides = document.querySelectorAll('.slides img');
// //         const totalSlides = slides.length;

// //         if (slideIndex >= totalSlides) {
// //             slideIndex = 0;
// //         } else if (slideIndex < 0) {
// //             slideIndex = totalSlides - 1;
// //         }

// //         const offset = -slideIndex * 100;
// //         document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// //     }

// //     // Event listeners for slider controls
// //     document.querySelector('.next').addEventListener('click', () => {
// //         slideIndex++;
// //         showSlides();
// //     });

// //     document.querySelector('.prev').addEventListener('click', () => {
// //         slideIndex--;
// //         showSlides();
// //     });

// //     // Load random photos on page load
// //     fetchRandomPhotos(1);  // Initial load

// //     // Set up slider to change slides automatically
// //     setInterval(() => {
// //         slideIndex++;
// //         showSlides();
// //     }, 3000);

// //     // Attach scroll event listener
// //     window.addEventListener('scroll', onScroll);
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //     const hamburger = document.getElementById('hamburger');
// //     const popupMenu = document.getElementById('popup-menu');
// //     const closePopup = document.getElementById('close-popup');
// //     const searchButton = document.getElementById('search-button');

// //     hamburger.addEventListener('click', () => {
// //         popupMenu.style.display = 'flex';
// //     });

// //     closePopup.addEventListener('click', () => {
// //         popupMenu.style.display = 'none';
// //     });

// //     // Slider functionality
// //     const slides = document.querySelector('.slides');
// //     const prevButton = document.querySelector('.prev');
// //     const nextButton = document.querySelector('.next');
// //     let currentIndex = 0;

// //     function showSlide(index) {
// //         const totalSlides = slides.children.length;
// //         if (index >= totalSlides) {
// //             currentIndex = 0;
// //         } else if (index < 0) {
// //             currentIndex = totalSlides - 1;
// //         } else {
// //             currentIndex = index;
// //         }
// //         slides.style.transform = `translateX(${-currentIndex * 100}%)`;
// //     }

// //     prevButton.addEventListener('click', () => {
// //         showSlide(currentIndex - 1);
// //     });

// //     nextButton.addEventListener('click', () => {
// //         showSlide(currentIndex + 1);
// //     });

// //     showSlide(currentIndex);

// //     // Photo info display
// //     const photos = document.querySelectorAll('.slides img');
// //     photos.forEach(photo => {
// //         photo.addEventListener('click', () => {
// //             alert(photo.getAttribute('data-info'));
// //         });
// //     });

// //     // Search button click handler
// //     searchButton.addEventListener('click', () => {
// //         window.location.href = 'search.html'; // Redirect to search page
// //     });
// // });











document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const perPage = 8;
    let isLoading = false;

    function fetchImages() {
                const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI'; 
                const API_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${API_KEY}`;
            
                fetch(API_URL)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        const slidesContainer = document.querySelector('.slides');
                        slidesContainer.innerHTML = data.map(photo => `
                            <img src="${photo.urls.regular}" alt="${photo.alt_description}">
                        `).join('');
                        showSlides();
                    })
                    .catch(error => console.error('Error fetching images:', error));
            }

    function fetchRandomPhotos(page) {
        const API_KEY = 'rNRiy1ndCnI7Kph1haUQshigibSYB6yU-pknbcZCAmI';
        const API_URL = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${API_KEY}&page=${page}`;

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const gallery = document.getElementById('random-images');
                gallery.innerHTML += data.map(photo => `
                    <img src="${photo.urls.small}" alt="${photo.alt_description}">
                `).join('');
                isLoading = false;
            })
            .catch(error => {
                console.error('Error fetching random photos:', error);
                isLoading = false;
            });
    }

    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !isLoading) {
            isLoading = true;
            fetchRandomPhotos(1);
        }
    }

    function showSlides() {
        const slides = document.querySelectorAll('.slides img');
        const totalSlides = slides.length;

        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }

        const offset = -slideIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        showSlides();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        showSlides();
    });

    fetchRandomPhotos(1);

    setInterval(() => {
        slideIndex++;
        showSlides();
    }, 3000);

    window.addEventListener('scroll', onScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const popupMenu = document.getElementById('popup-menu');
    const closePopup = document.getElementById('close-popup');
    const searchButton = document.getElementById('search-button');

    hamburger.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });

    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.children.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);

    const photos = document.querySelectorAll('.slides img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            alert(photo.getAttribute('data-info'));
        });
    });

    searchButton.addEventListener('click', () => {
        window.location.href = 'search.html';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const popupMenu = document.getElementById('popup-menu');
    const closePopup = document.getElementById('close-popup');
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    hamburger.addEventListener('click', () => {
        popupMenu.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });

    searchToggle.addEventListener('click', () => {
        searchContainer.classList.toggle('hidden');
    });
});

// Add fade-out class before navigating
function transitionToPage(newPageUrl) {
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = newPageUrl;
    }, 500); // Match the transition duration
}

// Usage example:
document.querySelector('#search-button').addEventListener('click', () => {
    transitionToPage('search.html');
});
// Add fade-in class when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
});
