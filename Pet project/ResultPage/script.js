document.addEventListener("DOMContentLoaded", () => {
  var stars = document.querySelectorAll(".star");
  var submitButton = document.querySelector(".submit-rating");
  var feedback = document.querySelector(".rating-feedback");
  var animeTitle = document.getElementById("animeTitle");
  var home = document.getElementById("home");

  home.onclick = function home() {
    window.location.href = "../index.html";
  };
  var selectedRating = 0;
  var animeData = [
    // Action, High School
    { name: "My Hero Academia", genre: "Action", theme: "High School", characterType: "Strong and Silent", imdbRating: 8.5 },
    { name: "One Punch Man", genre: "Action", theme: "High School", characterType: "Funny and Clumsy", imdbRating: 8.8 },
    { name: "Code Geass", genre: "Action", theme: "High School", characterType: "Strategic and Smart", imdbRating: 8.7 },

    // Action, Fantasy World
    { name: "Attack on Titan", genre: "Action", theme: "Fantasy World", characterType: "Strong and Silent", imdbRating: 8.8 },
    { name: "Fairy Tail", genre: "Action", theme: "Fantasy World", characterType: "Funny and Clumsy", imdbRating: 8.2 },
    { name: "Fullmetal Alchemist: Brotherhood", genre: "Action", theme: "Fantasy World", characterType: "Strategic and Smart", imdbRating: 9.1 },

    // Action, Historical
    { name: "Rurouni Kenshin", genre: "Action", theme: "Historical", characterType: "Strong and Silent", imdbRating: 8.5 },
    { name: "Vinland Saga", genre: "Action", theme: "Historical", characterType: "Funny and Clumsy", imdbRating: 8.8 },
    { name: "The Last Samurai", genre: "Action", theme: "Historical", characterType: "Strategic and Smart", imdbRating: 7.9 },

    // Comedy, High School
    { name: "Kaguya-sama: Love is War", genre: "Comedy", theme: "High School", characterType: "Strong and Silent", imdbRating: 8.4 },
    { name: "Gintama", genre: "Comedy", theme: "High School", characterType: "Funny and Clumsy", imdbRating: 8.9 },
    { name: "Ouran High School Host Club", genre: "Comedy", theme: "High School", characterType: "Strategic and Smart", imdbRating: 8.1 },

    // Comedy, Fantasy World
    { name: "Konosuba: God's Blessing on This Wonderful World!", genre: "Comedy", theme: "Fantasy World", characterType: "Strong and Silent", imdbRating: 8.2 },
    { name: "That Time I Got Reincarnated as a Slime", genre: "Comedy", theme: "Fantasy World", characterType: "Funny and Clumsy", imdbRating: 8.0 },
    { name: "The Rising of the Shield Hero", genre: "Comedy", theme: "Fantasy World", characterType: "Strategic and Smart", imdbRating: 8.0 },

    // Comedy, Historical
    { name: "Hoozuki no Reitetsu", genre: "Comedy", theme: "Historical", characterType: "Strong and Silent", imdbRating: 7.9 },
    { name: "KonoSuba: God's Blessing on This Wonderful World!", genre: "Comedy", theme: "Historical", characterType: "Funny and Clumsy", imdbRating: 8.2 },
    { name: "Samurai Champloo", genre: "Comedy", theme: "Historical", characterType: "Strategic and Smart", imdbRating: 8.7 },

    // Romance, High School
    { name: "Your Lie in April", genre: "Romance", theme: "High School", characterType: "Strong and Silent", imdbRating: 8.6 },
    { name: "Toradora!", genre: "Romance", theme: "High School", characterType: "Funny and Clumsy", imdbRating: 8.0 },
    { name: "Clannad", genre: "Romance", theme: "High School", characterType: "Strategic and Smart", imdbRating: 8.5 },

    // Romance, Fantasy World
    { name: "Fruits Basket", genre: "Romance", theme: "Fantasy World", characterType: "Strong and Silent", imdbRating: 8.6 },
    { name: "Spice and Wolf", genre: "Romance", theme: "Fantasy World", characterType: "Funny and Clumsy", imdbRating: 8.2 },
    { name: "Sword Art Online", genre: "Romance", theme: "Fantasy World", characterType: "Strategic and Smart", imdbRating: 7.6 },

    // Romance, Historical
    { name: "The Tale of the Princess Kaguya", genre: "Romance", theme: "Historical", characterType: "Strong and Silent", imdbRating: 8.0 },
    { name: "Howl's Moving Castle", genre: "Romance", theme: "Historical", characterType: "Funny and Clumsy", imdbRating: 8.2 },
    { name: "Grave of the Fireflies", genre: "Romance", theme: "Historical", characterType: "Strategic and Smart", imdbRating: 8.5 }
  ];
  var userCharacter = localStorage.getItem("character");
  var userGenre = localStorage.getItem("genre");
  var userTheme = localStorage.getItem("theme");
  console.log(userCharacter, userGenre, userTheme);;
  var userObj = {
    charachter: userCharacter,
    genre: userGenre,
    theme: userTheme
  };
  console.log(userObj)

  if (userObj) {
    // Find the best match
    var recommendation = animeData.find(
      anime =>
        anime.genre === userObj.genre &&
        anime.theme === userObj.theme &&
        anime.characterType === userObj.charachter
    );

    // Update the suggestion page
    if (recommendation) {
      var url = `https://kitsu.io/api/edge/anime?filter[text]=${recommendation.name}`;
      var xhr = new XMLHttpRequest();

      // Initializing the GET request to the API endpoint
      xhr.open('GET', url, true);

      // Specifying the response type as JSON
      xhr.responseType = "json";
      xhr.send(null);
      xhr.onreadystatechange = function () {
        // Checking if the request has completed (readyState 4) and if it was successful (status 200)
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // If the request was successful, parse the response and update the UI with the weather data
            var data = xhr.response;
            console.log(data);
            console.log(data.data);  // Check if `data.data` exists
            console.log(data.data[0].attributes.posterImage.large);
            document.getElementById("description").innerHTML = data.data[0].attributes.description;
            document.getElementById("animeImage").src = data.data[0].attributes.posterImage.large;
            console.log(recommendation.name);
            animeTitle.innerHTML = recommendation.name;
            document.getElementById("choices").innerHTML = recommendation.genre + ", " + recommendation.theme + ", " + recommendation.characterType;
            document.getElementById("rating").innerHTML = recommendation.imdbRating + "/10";
            console.log(animeData.length);
          } else {

            console.log("fetch error");
          }
        }

      }
    } else {
      document.querySelector(".anime-suggestion").innerHTML = "<p>No anime matches your preferences.</p>";
      console.log("fail");
    }
  }

  // Highlight stars on hover and click
  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      highlightStars(star.dataset.value);
    });

    star.addEventListener("mouseout", () => {
      highlightStars(selectedRating);
    });

    star.addEventListener("click", () => {
      selectedRating = star.dataset.value;
      highlightStars(selectedRating);
    });
  });

  // Submit the rating
  submitButton.onclick = function submitFunction() {
    if (selectedRating > 0) {
      feedback.textContent = `Thank you for rating ${selectedRating} star(s)!`;
      feedback.style.color = "green";

      // (Optional) Save the rating using an API or localStorage
      console.log(`User Rating: ${selectedRating}`);
    } else {
      feedback.textContent = "Please select a rating before submitting!";
      feedback.style.color = "red";
    }
  };

  // Function to highlight stars
  function highlightStars(rating) {
    stars.forEach((star) => {
      if (star.dataset.value <= rating) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }
});
