export const fetchAPI = () => {
  const url = "http://localhost:3001/api/directions/js/js";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
};

