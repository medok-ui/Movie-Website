import { CONFIG } from "./config.js";

// Fetch запросы
export class FetchApi {
  #API_KEY = CONFIG.API_KEY;
  baseUrlApi = "https://api.poiskkino.dev/";

  async fetchFilms() {
    try {
      const response = await fetch(`${this.baseUrlApi}v1.5/movie?limit=20`, {
        headers: {
          "X-API-KEY": this.#API_KEY,
        },
      });

      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmsUpdated() {
    try {
      const response = await fetch(
        `${this.baseUrlApi}v1.5/movie?year=2024-2026&limit=5`,
        {
          headers: {
            "X-API-KEY": this.#API_KEY,
          },
        },
      );

      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmsTrending(quantityTrendingList) {
    try {
      const response = await fetch(
        `${this.baseUrlApi}v1.5/movie?rating.kp=7-10&rating.imdb=7-10&rating.tmdb=7-10&lists=top250&limit=${quantityTrendingList}`,
        {
          headers: {
            "X-API-KEY": this.#API_KEY,
          },
        },
      );

      const data = await response.json();
      console.log(data.docs);

      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmsRelease(quantityReleaseList) {
    try {
      const response = await fetch(
        `${this.baseUrlApi}v1.5/movie?type=movie&limit=${quantityReleaseList}`,
        {
          headers: {
            "X-API-KEY": this.#API_KEY,
          },
        },
      );

      const data = await response.json();

      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmsRecommended(category) {
    try {
      const response = await fetch(
        `${this.baseUrlApi}v1.5/movie?type=${category}&limit=8`,
        {
          headers: {
            "X-API-KEY": this.#API_KEY,
          },
        },
      );

      const data = await response.json();

      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmsSearch(name) {
    try {
      const response = await fetch(
        `${this.baseUrlApi}v1.4/movie/search?page=1&limit=1&query=${name}`,
        {
          headers: {
            "X-API-KEY": this.#API_KEY,
          },
        },
      );

      const data = await response.json();
      console.log(data.docs);

      return data.docs;
    } catch (error) {
      console.error(error);
    }
  }
}
