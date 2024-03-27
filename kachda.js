document.getElementById('fetchDataBtn').addEventListener('click', function() {
    const url = 'https://api.indianetailer.in/general/stats';
    
    // Choose either Fetch or Axios, not both. This example uses Fetch.
    fetch(url, {
      method: 'GET', // If you need to set the HTTP method
      headers: {
        'x-api-key': 'serverkasystemkaisahai',
        'Content-Type': 'application/json'
        // Add more headers as needed
      }
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the data structure is something like { "HTML & CSS": 0.85, "JavaScript": 0.70, "loda": 0.60 }
  
      // Update each progress bar with the fetched values
      $(".circle .bar").circleProgress({
        value: data["HTML & CSS"]
      });
      $(".js .bar").circleProgress({
        value: data["JavaScript"]
      });
      $(".loda .bar").circleProgress({
        value: data["loda"]
      });
  
      // Update the text inside the progress bars
      $(".circle .box span").text(data["HTML & CSS"] * 100 + "%");
      $(".js .box span").text(data["JavaScript"] * 100 + "%");
      $(".loda .box span").text(data["loda"] * 100 + "%");
    })
    .catch(error => console.error('Error fetching data:', error));
  });









old down






        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyAVvZc25WS65r6HTQ9Nq0YL7FCOg59q8OY",
            authDomain: "newpbar.firebaseapp.com",
            projectId: "newpbar",
            storageBucket: "newpbar.appspot.com",
            messagingSenderId: "299749259016",
            appId: "1:299749259016:web:9934b89e48f475c602debd"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    
          var db = firebase.firestore();
    
    
    
    
          document.getElementById('fetchDataBtn').addEventListener('click', function() {
            fetch('https://api.indianetailer.in/general/stats',)
              .then(response => response.json())
              .then(data => {
                method : ''
                // Assuming the data structure is something like { "HTML & CSS": 0.85, "stringggggg": 0.70, "loda": 0.60 }
    
                // Update each progress bar with the fetched values
                $(".circle .bar").circleProgress({
                  value: data["HTML & CSS"]
                });
                $(".js .bar").circleProgress({
                  value: data["JavaScript"]
                });
                $(".loda .bar").circleProgress({
                  value: data["loda"]
                });
    
                // Update the text inside the progress bars
                $(".circle .box span").text(data["HTML & CSS"] * 400 + "%");
    
                $(".js .box span").text(data["JavaScript"] * 100 + "%");
                $(".loda .box span").text(data["loda"] * 100 + "%");
              })
              .catch(error => console.error('Error fetching data:', error));
          });
    
    
          // axios = require('axios');
    
          // Define the URL you want to send the GET request to
    
          document.getElementById('fetchDataBtn').addEventListener('click', function () {
    
            const url = 'https://api.indianetailer.in/general/stats';
            // Set up your custom headers here
            const customHeaders = {
              'x-api-key': 'serverkasystemkaisahai',
              'Content-Type': 'application/json'
              // Add more headers as needed
            };
    
            // Use Axios to make a GET request with the custom headers
            axios.get(url, {
              headers: customHeaders
            })
              .then(function (response) {
                // This function is called when the request succeeds
                // 'response' contains the response data, status, and headers
                console.log('Response data:', response.data);
                console.log('Response status:', response.status);
                const ApiData = response.data;
                console.log(ApiData);
    
    
              })
              .catch(function (error) {
                // This function is called when the request fails
                console.log('Error:', error);
              });
    
    
          });
    
    
    
    
    
    
    
    
          $(document).ready(function () {
    
    
            // Fetch data from Firebase
            $.getJSON('https://newpbar-default-rtdb.firebaseio.com/test.json', function (data) {
              // Assuming your data structure matches the example
              let htmlCssValue = data.HTML_CSS;
              let jsValue = data.JavaScript;
              let lodaValue = data.loda;
    
    
              let options = {
    
                startAngle: -1.55,
                size: 150,
                fill: { gradient: ['#a445b2', '#fa4299'] }
              }
    
              // Initialize HTML & CSS progress bar with fetched value
              $(".circle .bar").circleProgress({ ...options, value: htmlCssValue }).on('circle-animation-progress',
                function (event, progress, stepValue) {
                  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
                });
    
              // Initialize JavaScript progress bar with fetched value
              $(".js .bar").circleProgress({ ...options, value: jsValue });
    
              // Initialize React JS progress bar with fetched value
              $(".loda .bar").circleProgress({ ...options, value: lodaValue });
            });
          });
    
    
    
    
    
    
    