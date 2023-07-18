import axios from "axios";

export function getShortUrl(url) {
  return axios
    .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((res) => res.data);
}