function checkAnswer(correctAnswer, nextPage) {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const normalizedUserAnswer = userAnswer.replace(/\s+/g, '');
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().replace(/\s+/g, '');

    let score = parseInt(localStorage.getItem('score')) || 0;

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        score++;
        alert('Correct Answer! Your score is now: ' + score);
    } else {
        alert('Incorrect Answer! Your score remains: ' + score);
    }

    localStorage.setItem('score', score);
    window.location.href = nextPage;
    return false;
}

// Call this function on the score page load
if (document.title === "Your Score") {
    displayScore();
}

function displayScore() {
    const score = localStorage.getItem('score') || 0;
    document.getElementById('score').innerText = score;
}

function endGame() {
    const score = localStorage.getItem('score') || 0;
    alert('Game Over! Your final score is: ' + score);
    window.location.href = 'last.html';
}
