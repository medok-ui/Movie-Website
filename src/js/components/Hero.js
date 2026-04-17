import { FetchApi } from "../api.js";

const fetch = new FetchApi();

export class Hero {
  dataFilm(ulElement) {
    const fetchData = fetch.fetchFilms();
    if (!fetchData) return;

    fetchData
      .then((data) => {
        const randomPage = Math.floor(Math.random() * data.length);
        const filmData = data[randomPage];
        const HTML = `
          <h1 class="hero-title">${filmData.names[0] ? filmData.names[0].name : "Неизвестно"}</h1>
          <div class="hero-info-wrapper">
            <div class="hero-tags">
              <div class="hero-tag-text">${filmData.genres[0] ? filmData.genres[0].name : "Неизвестно"}</div>
              <div class="hero-tag-text">${filmData.genres[1] ? filmData.genres[1].name : "Неизвестно"}</div>
              <div class="hero-tag-text">${filmData.genres[2] ? filmData.genres[2].name : "Неизвестно"}</div>
            </div>
            <div class="hero-info">
              <div class="hero-year">
                <img src="./assets/svg/calendar.svg" alt="calendar" />
                <span class="year">${filmData.year ? filmData.year : "0000"}</span>
              </div>
              <div class="hero-time">
                <img src="./assets/svg/time.svg" alt="time" />
                <span class="time">${filmData.movieLength ? filmData.movieLength + "min" : "Неизвестно"}</span>
              </div>
              <div class="hero-rating">
                <img src="./assets/svg/star.svg" alt="star" />
                <span class="rating">${filmData.rating ? filmData.rating.imdb : "0.0"}</span>
              </div>
            </div>
          </div>
          <p class="hero-description">${filmData.description ? filmData.description : "Неизвестно"}</p>
        `;
        ulElement.innerHTML = HTML;
      })
      .catch((error) => console.error(error));
  }
}
