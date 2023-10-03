(function(){
    const titleQuestions = [...document.querySelectorAll('.questions-title')];
    console.log(titleQuestions)


    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
 
            addPadding.classList.toggle('questions-padding--add');
            question.children[0].classList.toggle('questions-arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });



})();



























































/* (function() {

    const sliders = [...document.querySelectorAll('.testimony-body')];
    const buttonNext = document.querySelector('#next')
    const buttonBefore = document.querySelector('#before')
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })
    
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony-body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony-body--show');
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('.testimony-body--show');

    };
})(); */