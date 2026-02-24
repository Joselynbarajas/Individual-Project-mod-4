 let movies;
 let searchQuery = ""; 

 async function rendermovies(filter) {
   const movieWrapper = document.querySelector(".movies");
     movieWrapper.classList.add('movies__loading');

   if (!movies) {
     movies = await getmovies();
   }
  
   movieWrapper.classList.remove('movies__loading');


   if (filter === "LOW_TO_HIGH") {
     movies.sort(
       (a, b) =>
         (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
     );
   } else if (filter === "HIGH_TO_LOW") {
     movies.sort(
       (a, b) =>
         (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
     );
   } else if (filter === "RATING") {
     movies.sort((a, b) => b.rating - a.rating);
   }

   const moviesHtml = movies
     .map((movie) => {
       return `<div class="movie">
     <figure class="movie__img--wrapper">
       <img class="movie__img" src="${movie.url}" alt="${movie.title}">
     </figure>
     <div class="movie__title">
       ${movie.title}
     </div>
     <div class="movie__ratings">
       ${ratingsHTML(movie.rating)}  
     </div>
     <div class="movie__price">
       ${priceHTML(movie.originalPrice, movie.salePrice)}
     </div>
   </div>`;
     })
     .join("");

   movieWrapper.innerHTML = moviesHtml;
 }

 function priceHTML(originalPrice, salePrice) {
   if (!salePrice) {
     return `$${originalPrice.toFixed(2)}`;
   }
   return `<span class="movie__price--normal">$${originalPrice.toFixed(
     2)}</span>$${salePrice.toFixed(2)}`;
 }

 function ratingsHTML(rating) {
   let ratingHTML = "";
   for (let i = 0; i < Math.floor(rating); ++i) {
     ratingHTML += '<i class="fas fa-star"></i>';
   }
   if (!Number.isInteger(rating)) {
     ratingHTML += '<i class="fas fa-star-half-alt"></i>';
   }
   return ratingHTML;
 }

 function filterMovies(event) {
   rendermovies(event.target.value);
 }


  // *FAKE DATA*/

 function getmovies() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve([
 {  
           id: 1,
           title: "The Hunger Games",
           url: "Assets/F&F.jpg",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4.5,

         },
         {
           id: 2,
           title: "The Valet",
           url: "Assets/atomic habits.jpg",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 5,
         },
         {
           id: 3,
           title: "Uncut Gems",
           url: "Assets/deep work.jpeg",
           originalPrice: 10.99,
           salePrice:6.99,
           rating: 5,
         },
         {
           id: 4,
           title: "Beautiful Boy",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4.5,
         },
         {
           id: 5,
           title: "A Minecraft Movie",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 4,
         },
         {
           id: 6,
           title: "Final Destination",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 5,
         },
         {
           id: 7,
           title: "Crazy Rich Asians",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 4,
         },
         {
           id: 8,
           title: "Sinners",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 4.5,
         },
         {
           id: 9,
           title: "28 Years Later",
           url: "g",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 2,
         },
         {
           id: 10,
           title: "Flow",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 4,
         },
         {
           id: 11,
           title: "How To train Your Dragon",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 4.5,
        
         },
         {
           id: 12,
           title: "Lilo & Sticth",
           url: "",
           originalPrice: 12.99,
           salePrice: 8.99,
           rating: 5,
         },
         {
           id: 13,
           title: "The Godfather",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 5,
         },
         {
           id: 14,
           title: "Dark Knight",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4.5,
         },
         {
           id: 15,
           title: "Lion King",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4,
         },
         {
           id: 16,
           title: "Whiplash",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 5,
         },
         {
           id: 17,
           title: "Gladiator",
           url: "",
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4,
         },
         {
           id: 18,
           title: "Wall-E",
           
           originalPrice: 10.99,
           salePrice: 6.99,
           rating: 4.5,
         },
 ],
 );
     }, 1000);
   });
 }

