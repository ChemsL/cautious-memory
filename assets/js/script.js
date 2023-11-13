function cardDetails(movie) {
  window.location.href = `profile.html?index=${movie.id}`;
}
let searchMovie = document.getElementById("searchMovie");
let btnSearch = document.getElementById("searchBtn");

btnSearch.addEventListener("click", function () {
  let infos = document.querySelector("#infos");
  infos.innerHTML = "";
  document.querySelector('#topRated').innerHTML = "";
  topRated.innerHTML =""
  nowPlaying.innerHTML =""

  const recup = searchMovie.value;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${recup}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      for (const movie of data.results) {
        let movieElement = document.createElement("div");
        movieElement.classList.add("col-md-2", "mb-4");
        movieElement.innerHTML = `
                <div class="card movie-card" >
                    <img src="https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }" class="card-img-top myId" alt="Movie 1 Poster " id="${
          movie.id
        }" style="height:514px;">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">Release Date: ${
                          movie.release_date
                        }</p>
                        <p class="card-text">Rating: ${
                          movie.vote_average * 10
                        }%</p>
                    </div>
                </div>
            `;

        movieElement.addEventListener("click", function () {
          cardDetails(movie);
        });

        infos.appendChild(movieElement);
      }
    });
});

// const topRated = document.getElementById('topRated')
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E",
  },
};

let btnTop = document.getElementById("btnTop");
btnTop.addEventListener("click", function () {
  document.querySelector('#topRated').innerHTML = "";
  infos.innerHTML = "";
  topRated.innerHTML =""
  nowPlaying.innerHTML =""
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((datab) => {
      for (const topRank of datab.results) {
        let myDiv = document.createElement("div");
        myDiv.classList.add("col-md-2", "mb-4");

        myDiv.innerHTML = `<div class="card movie-card" >
    <img src="https://image.tmdb.org/t/p/original${
      topRank.poster_path
    }" class="card-img-top myId" alt="Movie 1 Poster " id="${
          topRank.id
        }" style="height:514px;">
    <div class="card-body">
        <h5 class="card-title">${topRank.title}</h5>
        <p class="card-text">Release Date: ${topRank.release_date}</p>
        <p class="card-text">Rating: ${topRank.vote_average * 10}%</p>
    </div>
  </div>
    
    `;
        topRated.appendChild(myDiv);
      }
    });
});

let btnMtn = document.getElementById("btnMtn")
btnMtn.addEventListener("click", function(){
document.querySelector('#nowPlaying').innerHTML = "";
infos.innerHTML =""
topRated.innerHTML =""
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then((datac) => 
    {
        for (const rightNow of datac.results) {
            let myDiv2 = document.createElement("div");
            myDiv2.classList.add("col-md-2", "mb-4");
            myDiv2.innerHTML = `<div class="card movie-card" >
            <img src="https://image.tmdb.org/t/p/original${
              rightNow.poster_path
            }" class="card-img-top myId" alt="Movie 1 Poster " id="${
                  rightNow.id
                }" style="height:514px;">
            <div class="card-body">
                <h5 class="card-title">${rightNow.title}</h5>
                <p class="card-text">Release Date: ${rightNow.release_date}</p>
                <p class="card-text">Rating: ${rightNow.vote_average * 10}%</p>
            </div>
          </div>
            
            `;
            nowPlaying.appendChild(myDiv2);
        
            
        }
    })
}




)