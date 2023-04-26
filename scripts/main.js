const cards = document.querySelectorAll(".card");

const flipCard = (event) => {
    event.currentTarget.classList.toggle('flip');
}

cards.forEach((card) => {
    console.log(card);
    card.addEventListener('click', flipCard);    
});


