document.addEventListener('DOMContentLoaded', () => {
    const joinButtons = document.querySelectorAll('.join-button');
    const submitButtons = document.querySelectorAll('.submit-button');

    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Joining Lecture...');
        });
    });

    submitButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Submitting Assignment...');
        });
    });
});

