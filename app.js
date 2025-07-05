const moviesWrapper = document.querySelector(".movies");
const searchName = document.querySelector('.searchName');

let  currentMovies = []

function searchChange(event) {
    renderMovies(event.target.value)
    searchName.innerHTML = event.target.value
}



async function renderMovies(searchTerm) {
    const response = await fetch(
        `https://omdbapi.com/?s=${searchTerm}&apikey=275cb097&s`
    );
    const data = await response.json();
    currentMovies = data.Search
    displayMovies(currentMovies)
}

function displayMovies(movieList) {
     moviesWrapper.innerHTML = movieList
    .slice(0,6)
    .map((movie) => {
        return `
        <div class="movie">
        <img src=${movie.Poster} alt"" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
   `;
    })
    .join("");
}

function sortChange(event) {
    const sortOption = event.target.value


let sortedMovies = [...currentMovies];


    if (sortOption === "newest") {
sortedMovies.sort((a,b) => b.Year - a.Year);
   } else if (sortOption === "oldest"){
sortedMovies.sort((a,b) => a.Year - b.Year);
    }

    displayMovies(sortedMovies)
}






