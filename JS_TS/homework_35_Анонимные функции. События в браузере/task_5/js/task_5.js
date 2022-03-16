$(() => {
    const question = $('.question');
    const answer = $('.answer');

    answer.css({
        display: 'none'
    });

    function addButton() {
        let answerButton = $('<button></button>');
        answerButton.addClass('getAnswer');
        answerButton.text('Посмотреть ответ');
        
        answerButton.on('click', () => {
            answer.toggle();
        });

        question.append(answerButton);
    };

    addButton()
});