// 2. First, declare and initialize 7 variables with 7 movie names.
var movie1 = "Batman";
var movie2 = "Hit man";
var movie3 = "Run";
var movie4 = "Jocker";
var movie5 = "Smile 2";
var movie6 = "Red one";
var movie7 = "Kung fu panda";
// 3. Next, create a JavaScript array to hold these variables and represent your top 7 movie list.
var movieArray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
// Stretch Goal:Use a loop to re-ask the user if they didn't input valid data.
var userInput=true;
while (userInput == true) {
    //The user is asked, "Which top 7 movie would you like?" with default text "Pick a number: 1-7".and convert it to integer
    var askedMovie = parseInt(prompt("Which top 7 movie would you like?", "Pick a number: 1-7"));
    // Validate the user input.
    if (askedMovie >= 1 && askedMovie <= 7) {
        // The user will then see a pop-up that says, "Number num on the list is " with num being the movie’s position on the top 7, followed by the movie title.
        alert("Number " + askedMovie + " on the list is " + movieArray[askedMovie - 1]);   
        //Output messages to the console with a loop that lists all of the movies with their number
        for (var i = 0; i < movieArray.length; ++i) {
            var num = i + 1;
            console.log("Movie " + num + ": " + movieArray[i]);
        }
        userInput=false;
    } else {
        // Users that enter invalid text will see a pop-up message that says "Please enter a number between 1 and 7!"
        alert("Please enter a number between 1 and 7!");
    }
}