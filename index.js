#!/usr/bin/env node

const fetch = require('node-fetch');

const key = '17c5c4c6e845e73f4296fa83b502b87c';

const fetchMeta = {
  method: 'get',
  headers: { 'user-key': key, 'Accept': 'application/json', },
}

if (process.argv.length === 2) {
  console.log('Usage: zom <keyword>[@<location>]');
  return;
}

const [
  keyword = 'Big Yellow Door',
  location = 'New Delhi',   // need to get a better default
] = process.argv
    .splice(2)              // get rid of ['node', 'file.js']
    .join(' ')              // join them with space
    .split('@')             // split them at @
    .map(e => e.trim())     // trim
;

const extractLocationData = e => Promise.resolve(e.location_suggestions[0] || { entity_id: 1, entity_type: 'city' });

const extractRestaurants = e => Promise.resolve(e.restaurants.map(e => e.restaurant));

const printRestaurants = r => r.map(e => console.log(e));

const stars = rating => "⭐️ ".repeat(parseInt(rating));

const makeHumanReadable = restaurants => Promise.resolve(
    restaurants.map(e => (
    `${e.name} (${e.user_rating && (stars(e.user_rating.aggregate_rating) + " " + (e.user_rating.aggregate_rating) + " " + e.user_rating.rating_text)})
    🕸  ${e.url}
    🗺A ${e.location.address}
    🍕  ${e.cuisines}
    💸  ${e.currency} ${e.average_cost_for_two} for 2
    `))
);

const getLocationInfo = location => fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, fetchMeta);

const getRestaurantsInfo = ({ entity_id, entity_type }) => fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${keyword}`, fetchMeta);

getLocationInfo(location)
.then(e => e.json())
.then(extractLocationData)
.then(locationData => getRestaurantsInfo(locationData))
.then(e => e.json())
.then(extractRestaurants)
.then(makeHumanReadable)
.then(printRestaurants)
.catch(e => console.log(e));
