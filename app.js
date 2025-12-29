const moviesWrapper = document.querySelector(".movies"); 
const searchInput = document.querySelector(".header__movie--input");

let  currentMovies = [];
let currentSearchTerm = "";

function searchChange(event) {
    const value = event.target.value.trim();
    currentSearchTerm = value;

    if (value.length >= 3) {
        renderMovies(value);
    } else {
        moviesWrapper.innerHTML = "<p>No movies found.</p>";
    }
}


    renderMovies(event.target.value);
    searchName.innerHTML = event.target.value;



function openMenu() {
  console.log("Sort menu opened");
  
}


async function renderMovies(searchTerm) {
    try {
    const res = await fetch(
       `https://www.omdbapi.com/?s=${searchTerm}&apikey=275cb097`
    );
    const data = await res.json();

if (data.Response === "True" && Array.isArray(data.Search)) {
    currentMovies = data.Search;
    displayMovies(currentMovies);
} else {
    moviesWrapper.innerHTML = `<p> No results found for "${searchTerm}".</p>`;
}
}  catch (err) {
    console.error("Fetch error:", err);
    moviesWrapper.innerHTML = "<p>Something went wrong. Please try again </p>";
  }
}



function displayMovies(list) {
     moviesWrapper.innerHTML = list
    .slice(0, 6)
    .map(movie => `
        <div class="movie">
        <figure class="movie__img--wrapper">
        <img 
        class="movie__img"
        src="${movie.Poster !== "N/A" ? movie.Poster : "Assets/placeholder.png"}"
         alt="${movie.Title}" 
         />
         </figure>
         <div class="movie__title">${movie.Title}</div>
         <div class="movie__year">${movie.Year}</div>
         <button class="btn learn-more" onclick="learnMore('${movie.imdbID}')">Learn More </button>
        </div>
   `)
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






