function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform your asynchronous operations here
    // For example, you can make an HTTP request using fetch:
    fetch('https://api.example.com/data')
      .then((response) => {
        if (response.ok) {
          // If the response is successful, resolve with the data
          response.json().then((data) => {
            resolve(data);
          });
        } else {
          // If there's an error, reject with an error message
          reject(new Error('API request failed'));
        }
      })
      .catch((error) => {
        // Handle any other errors that might occur during the request
        reject(error);
      });
  });
}

// Example usage:
getResponseFromAPI()
  .then((data) => {
    console.log('Received data from API:', data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
