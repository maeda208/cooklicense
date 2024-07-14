
window.addEventListener('turbo:load', function(){
  const problems = document.querySelectorAll('.problem');

  problems.forEach(function(problem) {
    const selectButtons = problem.querySelectorAll('.select-button');
    const selectMessages = problem.querySelectorAll('.select-message');

    selectButtons.forEach(function(selectButton) {
      selectButton.addEventListener('click', (event) => {
        event.preventDefault();
        selectMessages.forEach(function(selectMessage) {
          selectMessage.style.display = 'block';
        });
      });
    });
  });
});