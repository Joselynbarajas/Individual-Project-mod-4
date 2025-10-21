const moviesWrapper = document.querySelector(".movies");
const searchName = document.querySelector(".searchName");

let  currentMovies = [];

function searchChange(event) {
    renderMovies(event.target.value);
    searchName.innerHTML = event.target.value;
}


function openMenu() {
  console.log("Sort menu opened");
  
}


async function renderMovies(searchTerm) {
    const response = await fetch(
       ` https://www.omdbapi.com/s=${searchTerm}&apikey=275cb097`
       
    );
    const data = await response.json();
    currentMovies = data.Search;
    displayMovies(currentMovies);
}

if(data.Search) {
    currentMovies = data.Search;
    displayMovies(currentMovies);
}
else {
    moviesWrapper.innerHTML = "<p>No movies found.</p>";
    }


function displayMovies(movieList) {
     moviesWrapper.innerHTML = movieList
    .slice(0,6)
    .map((movie) => {
        return `
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button> Learn More </button>
        </div>
   `;
    })
    .join("");
}

function sortChange(event) {
    const sortOption = event.target.value;
    let sortedMovies = [...currentMovies];

    if (sortOption === "newest") {
sortedMovies.sort((a,b) => parseInt(b.Year) - parseInt(a.Year));
   } else if (sortOption === "oldest"){
sortedMovies.sort((a,b) => parseInt(a.Year) - parseInt(b.Year));
    }
    if (sortOption === "Lowest") {
sortedMovies.sort((a,b) => parseInt(b.Year) - parseInt(a.Price));
   } else if (sortOption === "Highest"){
sortedMovies.sort((a,b) => parseInt(a.Year) - parseInt(b.Price));
    }
    if (sortOption === "Rating Lowest") {
sortedMovies.sort((a,b) => parseInt(b.Year) - parseInt(a.Price));
   } else if (sortOption === "Rating Highest"){
sortedMovies.sort((a,b) => parseInt(a.Year) - parseInt(b.Price));
    }

    displayMovies(sortedMovies);
}






