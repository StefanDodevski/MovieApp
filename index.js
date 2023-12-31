const movies = [
  {
    vote_average: 6.6,
    title: "Venom",
    popularity: 401.758,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQljtar3JIUgmZX6gzjfhKJaGSAQi0Bq9Jp1kepxlq4x1YzcgHA",
    release_date: "2018-10-03",
  },
  {
    vote_average: 7.5,
    title: "A Star Is Born",
    popularity: 196.325,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPoyklGnexoPkxkYPk2vI09VuOJdc5V0vzLrsht8YN6-vobPW9",
    release_date: "2018-10-03",
  },
  {
    vote_average: 6.8,
    title: "The Darkest Minds",
    popularity: 83.035,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4NtyJMLuBEL1LNQMTbXOxRLexkCUaybr9gU_t8WQPUPxN-NmW",
    release_date: "2018-08-02",
  },
  {
    vote_average: 5.3,
    title: "The Predator",
    popularity: 167.001,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhxy4Efhm7BKiJ_1JgzZi3c9Xk2BaURt9WpyVLd26TXCuZM04v",
    release_date: "2018-09-13",
  },
  {
    vote_average: 8.3,
    title: "Avengers: Infinity War",
    popularity: 145.885,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnbWki0iHFRV3UfJi8W2IxXY_LLRfqUf4Y4d5gEBT0IwLiXsz9",
    release_date: "2018-04-25",
  },
  {
    vote_average: 6.6,
    title: "Halloween",
    popularity: 131.422,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxixKYtMdKqHzLAu-77p9Y48-47WaMj5KpGRz3A_VFQqtQjmxM",
    release_date: "2018-10-18",
  },
  {
    vote_average: 7,
    title: "Ant-Man and the Wasp",
    popularity: 124.999,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSE49PXCuZjDJm6kpGXfyX9SNn9muOCXxS5mxEUmClDAt8Of8gU",
    release_date: "2018-07-04",
  },
  {
    vote_average: 7.3,
    title: "First Man",
    popularity: 123.269,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10kmBogghMSpXrVilphEP4uUKALBXf3v0_f-i9KUL-W9lfafG",
    release_date: "2018-10-11",
  },
  {
    vote_average: 5.8,
    title: "The Nun",
    popularity: 108.868,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRk3MBwojo9tH6ri6znDbTkdc9e9r4Wuc9AHoBG5VP5kkgB6pdB",
    release_date: "2018-09-05",
  },
  {
    vote_average: 6.5,
    title: "The Spy Who Dumped Me",
    popularity: 104.198,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs4pY8RJpaaw8neJP37tP4w24yJMfBmf6qRoiI1SXExsFS2c2v",
    release_date: "2018-08-02",
  },
];

let moviesWrapper = document.querySelector(".movies-wrapper");

console.log(moviesWrapper);

movies.forEach((movie) => {
  const movieCard = document.createElement("div");
  movieCard.classList = "movie-card";

  movieCard.innerHTML = `
  <div class="movie-logo" style="background-image: url(${movie.image});"></div>

  <div class="movie-content">
    <h4>${movie.title}</h4>
    <p><span>Release:</span> ${movie.release_date.slice(0, 4)}</p>
    <p>
      <span>Popularity:</span> ${movie.popularity}
    </p>
    <p><span>Rating:</span> ${movie.vote_average} stars</p>
    <p class="cta"><span>Price:</span> 100$</p>
    <button class="cta-btn">Buy</button>
  </div>`;

  let logo = document.querySelector(".movie-logo");
  console.log(logo);

  moviesWrapper.append(movieCard);
});
