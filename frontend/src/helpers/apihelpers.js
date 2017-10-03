const fetchAPI = () => {
  const url = "http://localhost:3001/api/directions/js/js";

  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log(json)
      return json
    })
    .catch(function(error) {
      console.log('error', error)
    })
};

export default fetchAPI;