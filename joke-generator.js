const jokeContainer = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Function to fetch joke from JokeAPI
async function fetchJoke() {
    jokeContainer.innerText = 'Loading...'; // Show loading state
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        if (data.type === 'single') {
            jokeContainer.innerText = data.joke; // Handle single-line joke
        } else {
            jokeContainer.innerText = `${data.setup} - ${data.delivery}`; // Handle two-part joke
        }
    } catch (error) {
        jokeContainer.innerText = 'Failed to fetch joke. Please try again later.'; // Handle errors
    }
}

// Event listener for the button
jokeBtn.addEventListener('click', fetchJoke);

// Fetch a joke on page load
fetchJoke();
