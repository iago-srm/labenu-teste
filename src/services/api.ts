import axios from "axios";

const pokemonHost = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export const pokemonApi = pokemonHost.get;
