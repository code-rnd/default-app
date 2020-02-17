import axios from "axios";

export const instance = axios.create({
  baseURL: "https://swapi.co/api/"
});

export const swApi = {
  getPeople(peopleId) {
    return instance.get(`people/${peopleId}/`).then(response => {
      return response.data;
    });
  },
  getPlanets(planetId) {
    return instance.get(`planets/${planetId}/`).then(response => {
      return response.data;
    });
  },
  getStarships(starshipId) {
    return instance.get(`starships/${starshipId}/`).then(response => {
      return response.data;
    });
  }
};
