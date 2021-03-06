import config from './config'

const {apiKey} = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=chile&api_key=${apiKey}&format=json`;

export default function getArtist() {
  return fetch(URL)
  .then(res => res.json())//cuando termine esta promesa
  .then(json => json.topartists.artist)
}
