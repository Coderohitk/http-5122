window.onload = pageReady;
function pageReady() {
    var ctaButton = document.querySelector(".cta-button"); // The "CLICK HERE" button
    var genreModal = document.getElementById("genreModal"); // Modal for quiz
    var nextButtons = document.querySelectorAll(".next-btn"); // All Next buttons
    var submitQuizButton = document.getElementById("submitQuiz"); // Submit button for the quiz
    var currentQuestion = 1;
    // Function to show the modal
    var showModal = () => {
        genreModal.style.display = "flex"; // Show modal
        setTimeout(() => {
            genreModal.style.opacity = 1; // Fade-in effect
        }, 10);
    };

    // Function to hide the modal
    var hideModal = () => {
        genreModal.style.opacity = 0; // Fade-out effect
        setTimeout(() => {
            genreModal.style.display = "none"; // Hide the modal after fade-out
        }, 500);

    };

    // Function to handle showing the correct question
    var showQuestion = (questionNumber) => {
        var allQuestions = document.querySelectorAll(".modal-content");
        allQuestions.forEach((question) => {
            question.style.display = "none"; // Hide all questions
        });

        // Show the selected question
        var questionToShow = document.getElementById("question" + questionNumber);
        if (questionToShow) {
            questionToShow.style.display = "block"; // Display selected question
        }
    };

    // Initially show the first question
    showQuestion(currentQuestion);

    // Show modal when CTA button is clicked
    if (ctaButton) {
        ctaButton.addEventListener("click", showModal);
    } else {
        console.error("CTA Button not found in HTML");
    }

    // Handle "Next" button click to move through questions
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentQuestion++;
            showQuestion(currentQuestion);
        });
    });

    // Handle quiz submission
    if (submitQuizButton) {
        submitQuizButton.addEventListener("click", () => {
            var genre1 = document.getElementById("genreSelect1").value;
            var genre2 = document.getElementById("genreSelect2").value;
            var characterType = document.getElementById("characterType").value;
            localStorage.setItem("genre", genre1);
            localStorage.setItem("theme", genre2);
            localStorage.setItem("character", characterType);
            window.location.href = "ResultPage/suggestion.html";
            hideModal(); // Close the modal after quiz submission
        });
    } else {
        console.error("Submit Quiz Button not found in HTML");
    }

    // Close modal if the user clicks outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === genreModal) {
            hideModal();
        }
    });
}
