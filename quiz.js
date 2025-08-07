function checkAnswer() {
    // correct answer for the quiz question
    const correctAnswer = '4';

    // Retrieve the user's selected answer
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
    
    // Check if a choice was actually made 
    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    // Get the feedback element to display the result
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! Well done.';
    } else {
        feedbackElement.textContent =["That's incorrect. Try again!"]
    }
}


const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
