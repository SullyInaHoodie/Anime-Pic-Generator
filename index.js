const btnEl = document.getElementById("btn")
const animeContainerEl = document.querySelector(".anime-Container")
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")

btnEl.addEventListener("click", async function() {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "spinner.svg";  // Ensure this file exists in your directory

        const response = await fetch("https://api.nekosapi.com/v3/images/random");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log data to see the structure

        animeContainerEl.style.display = "block";
        // animeImgEl.src = data.url || 'default-image.jpg'; // Use a default image if url is missing
        animeNameEl.innerText = data.artist || 'Unknown Artist'; // Use default text if artist is missing
    } catch (error) {
        console.error('Fetch error:', error);
        animeNameEl.innerText = "An error occurred, try again later";
    } finally {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
    }
});
