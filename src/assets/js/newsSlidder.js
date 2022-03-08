let prev =document.querySelector('#previous-btn');
let next =document.querySelector('#next-btn');
const cardsEvent = document.querySelectorAll('#event-card');
const nbCards = cardsEvent.length;
let count = 0;

function slideNext(){
    cardsEvent[count].classList.add('hidden');

    if(count < nbCards -1) {
        count++;
    } else {
        count = 0;
    }

    cardsEvent[count].classList.remove('hidden')
    console.log(count);
}

prev.addEventListener('click', slideNext);
next.addEventListener('click', slideNext);