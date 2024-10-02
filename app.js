const form = document.querySelector('form');
const answers = ['A', 'A', 'A', 'A'];
const scoreBoard = document.querySelector('#scoreBoard');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0

    const userAnswers = [form.answer1.value, form.answer2.value, form.answer3.value, form.answer4.value];

    answers.forEach((answer, index) => {
        if(answer === userAnswers[index]){
            score += 25
        }
    })

    scroll(0, 0);

    let scoreDisplay = scoreBoard.querySelector('span');
    scoreBoard.classList.remove('d-none');
    
    let output = 0
    const  scoreAnimation = setInterval(() => {
        output++
        if(output === score){
            clearInterval(scoreAnimation);
        }
        
        scoreDisplay.textContent = `${output}%`;

    }, 10)
    


})