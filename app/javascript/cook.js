
window.addEventListener('turbo:load', function() {
  const problems = document.querySelectorAll('.problem');

  problems.forEach(function(problem) {
    const selectButtons = problem.querySelectorAll('.select-button');
    const selectMessages = problem.querySelectorAll('.select-message');

    // handleClick 関数の定義
    function handleClick(event) {
      event.preventDefault();
      selectMessages.forEach(function(selectMessage) {
        selectMessage.style.display = 'block';
      });
    }

    // 各ボタンに handleClick 関数をイベントリスナーとして登録
    selectButtons.forEach(function(selectButton) {
      selectButton.addEventListener('click', handleClick);
    });
  });
});
