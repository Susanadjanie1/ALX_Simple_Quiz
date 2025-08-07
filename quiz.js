document.addEventListener('DOMContentLoaded', () => {
    // Get references to the key elements we need to interact with
    const submitButton = document.getElementById('submit-answer');
    const feedbackElement = document.getElementById('feedback');
    const quizChoices = document.querySelectorAll('input[name="quiz"]'); // 

    // Define the correct answer for the quiz question
    const correctAnswer = '4';

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', () => {
        // Find the user's selected answer
        const selectedChoice = document.querySelector('input[name="quiz"]:checked');

        if (selectedChoice) {
            // Compare the value of the selected button with the correct answer
            if (selectedChoice.value === correctAnswer) {
                // If the answer is correct
                feedbackElement.textContent = 'Correct!';
                feedbackElement.style.color = '#28a745'; 
            } else {
                // If the answer is incorrect
                feedbackElement.textContent = 'Incorrect. Try again.';
                feedbackElement.style.color = '#dc3545'; 
            }
        } else {
            // If no answer has been selected
            feedbackElement.textContent = 'Please select an answer before submitting.';
            feedbackElement.style.color = '#dc3545'; 
        }
    });
});
