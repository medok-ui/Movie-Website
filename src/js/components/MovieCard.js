import { FetchApi } from "../api.js";

const fetch = new FetchApi();

export class MovieCard {
  recentlyUpdated(ulElement) {
    const fetchFilmsUpdated = fetch.fetchFilmsUpdated();
    if (!fetchFilmsUpdated) return;

    fetchFilmsUpdated
      .then((data) => {
        const HTML = data
          .map(
            (item) => `
      <li class="recently-item">
          <img
          class="recently-item-image"
          src="${item.poster ? item.poster.previewUrl : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}"
          alt="${item.name ? item.name : "Неизвестно"}"
          />
        <div class="recently-item-info">
          <h3 class="recently-item-name">${item.name ? item.name : "Неизвестно"}</h3>
          <span class="recently-item-tag">${item.type ? item.type : "Неизвестно"}</span>
          <span class="recently-item-data">${item.year ? item.year : "Неизвестно"}</span>
        </div>
      </li>`,
          )
          .join("");
        ulElement.innerHTML = HTML;
      })
      .catch((error) => console.error(error));
  }

  trending(ulElement, quantityTrendingList) {
    const fetchFilmsTrending = fetch.fetchFilmsTrending(quantityTrendingList);
    if (!fetchFilmsTrending) return;

    fetchFilmsTrending
      .then((data) => {
        const HTML = data
          .map(
            (item) => `
        <li class="trending-item">
            <div style="background-image: url('${item.poster ? item.poster.url : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}')" class="trending-cover">
                <div class="trending-item-head">
                  <span class="trending-item-time"><img src="./assets/svg/time.svg" alt="time" />${item.movieLength ? item.movieLength + "min" : "0:00min"}</span>
                  <span class="trending-item-rating"><img src="./assets/svg/star.svg" alt="star" />${item.rating ? item.rating.imdb : "0.0"}</span>
                </div>
                <button class="trending-play-btn">
                   <img src="./assets/svg/play.svg" alt="play" />
                </button>
            </div>
            <div class="trending-info">
                <span class="trending-name">${item.name ? item.name : "Неизвестно"}</span>
              <ul class="trending-tags">
                <li class="trending-tag">${item.genres[0] ? item.genres[0].name : "Неизвестно"}</li>
                <li class="trending-tag">${item.genres[1] ? item.genres[1].name : "Неизвестно"}</li>
              </ul>
            </div>  
       </li>`,
          )
          .join("");
        ulElement.innerHTML = HTML;
      })
      .catch((error) => console.error(error));
  }

  release(ulElement, quantityReleaseList) {
    const fetchFilmsRelease = fetch.fetchFilmsRelease(quantityReleaseList);
    if (!fetchFilmsRelease) return;
    fetchFilmsRelease
      .then((data) => {
        const HTML = data
          .map(
            (item) => `
          <li class="release-item">
            <img src="${item.poster ? item.poster.url : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}" alt="${item.name ? item.name : "Неизвестно"}" class="release-item-cover"></img>
            <div class="release-item-content">
              <span class="release-item-name">${item.name ? item.name : "Неизвестно"}</span>
              <ul class="release-item-info">
                <li class="release-info-isHD">
                  HD
                </li>
                <li class="release-info-time">
                  <img src="./assets/svg/time.svg" alt="time">
                  ${item.movieLength ? item.movieLength + "min" : "0:00min"}
                </li>
              </ul>
            </div>
          </li>
      `,
          )
          .join("");
        ulElement.innerHTML = HTML;
      })
      .catch((error) => console.error(error));
  }

  recommended(ulElement, category) {
    const fetchFilmsRelease = fetch.fetchFilmsRecommended(category);
    if (!fetchFilmsRelease) return;
    fetchFilmsRelease
      .then((data) => {
        const HTML = data
          .map(
            (item) => `
         <li class="recommended-item">
            <img src="${item.poster ? item.poster.url : "https://www.freeiconspng.com/uploads/no-image-icon-10.png"}" alt="${item.name ? item.name : "Неизвестно"}" class="recommended-item-cover"></img>
            <div class="recommended-item-content">
              <span class="recommended-item-name">${item.name ? item.name : "Неизвестно"}</span>
              <ul class="recommended-item-info">
                <li class="recommended-info-isHD">
                  HD
                </li>
                <li class="recommended-info-time">
                  <img src="./assets/svg/time.svg" alt="time">
                  ${item.movieLength ? item.movieLength + "min" : "0:00min"}
                </li>
              </ul>
          </li>

      `,
          )
          .join("");
        ulElement.innerHTML = HTML;
      })
      .catch((error) => console.error(error));
  }
}
