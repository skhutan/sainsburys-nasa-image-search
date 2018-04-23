const url = 'https://images-api.nasa.gov';

const parseItems = (json) => {
  const {items} = json.collection;
  console.log(items);

  return items;
};


const search = (searchQuery, nasaId) => {
  let params = '?media_type=image';

  searchQuery ? params += `&q=${searchQuery}` : '';
  nasaId ? params += `&nasa_id=${nasaId}` : '';

  return fetch(`${url}/search${params}`)
    .then(response => response.json())
    .then(parseItems)
    .catch(err => console.error(err));
};

const getAsset = (assetID) => {
   return fetch(`${url}/asset/${assetID}`)
    .then(response => response.json())
    .then(parseItems)
    .catch(err => console.error(err));
};

module.exports = {search, getAsset};


