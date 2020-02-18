import axios from "axios";

export const instance = axios.create({
  baseURL: "https://swapi.co/api/"
});

export const swApi = {
  getHero(id) {
    return instance.get(`people/${id}/`).then(response => {
      return response.data;
    });
  }
};
