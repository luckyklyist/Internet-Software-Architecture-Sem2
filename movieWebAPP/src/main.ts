import './style.css';
import fetchMovie from './fetchMovieData';

const movieMainElement = document.querySelector('.movie_main');

const movie = async () => {
  const fetchData = await fetchMovie();
  
  fetchData.forEach((movie) => {
    const movieElem = document.createElement('div');
    movieElem.className = 'bg-gray-700 rounded-lg overflow-hidden';
    
    const imageElem = document.createElement('img');
    imageElem.src = movie.Poster;
    imageElem.alt = 'Movie Poster';
    imageElem.className = 'w-full h-64 object-cover';
    movieElem.appendChild(imageElem);
    
    const infoElem = document.createElement('div');
    infoElem.className = 'p-4';
    
    const titleElem = document.createElement('h2');
    titleElem.textContent = movie.Title;
    titleElem.className = 'text-xl font-bold mb-2';
    infoElem.appendChild(titleElem);
    
    const yearElem = document.createElement('p');
    yearElem.textContent = `Release Year: ${movie.Year}`;
    yearElem.className = 'text-gray-300';
    infoElem.appendChild(yearElem);
    
    movieElem.appendChild(infoElem);
    
    movieMainElement?.appendChild(movieElem);
  });
};


declare const searchMovie=()=>{
  const movieName=document.querySelector("#movieName").value;
  console.log(movieName)
}

// declare const searchButton = document.querySelector(".searchButton");
// searchButton.addEventListener("click", searchMovie);


movie();
