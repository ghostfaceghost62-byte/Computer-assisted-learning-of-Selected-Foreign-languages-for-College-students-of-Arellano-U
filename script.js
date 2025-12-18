document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Map lessons and next pages
const nextLessonMap = {
    "quiz-spanish.html": "lesson-japanese.html",
    "quiz-japanese.html": "lesson-korean.html",
    "quiz-korean.html": "lesson-mandarin.html",
    "quiz-mandarin.html": "lesson-french.html",
    "quiz-french.html": "index.html" // End of sequence
};

function checkAnswer() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("result");

    if (!answer) {
        result.textContent = "Please select an answer.";
        result.style.color = "orange";
        return;
    }

    // Check correct answer
    const correctAnswers = {
        "quiz-spanish.html": "hola",
        "quiz-japanese.html": "konnichiwa",
        "quiz-korean.html": "annyeong",
        "quiz-mandarin.html": "nihao",
        "quiz-french.html": "bonjour"
    };

    const currentPage = window.location.pathname.split("/").pop();

    if (answer.value === correctAnswers[currentPage]) {
        result.textContent = "Correct! Loading next lesson...";
        result.style.color = "green";
        setTimeout(() => {
            window.location.href = nextLessonMap[currentPage];
        }, 1500); // 1.5 seconds delay before next lesson
    } else {
        result.textContent = "Incorrect. Try again.";
        result.style.color = "red";
    }
}
