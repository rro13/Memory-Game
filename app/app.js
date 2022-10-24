const pokemonList = ['003','006','012','028','045','051','057','065','067','079','094','095','107','121','122','123','125','130','141','151']

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className
    return element
}

const checkCards = (firstCard,secondCard) => {
    // let firstCard = document.getElementsByClassName('revealed-card')[0];
    // let secondCard = document.getElementsByClassName('revealed-card')[1];

    if(firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
        firstCard.firstChild.classList.add('correct-pair');
        secondCard.firstChild.classList.add('correct-pair');
    }else {
        window.setTimeout(function(){
            firstCard.classList.remove('revealed-card');
            secondCard.classList.remove('revealed-card');
        },500)
    }
}


const flipCard = (event) => {
    const clickedElement = event.target.parentNode;
    clickedElement.classList.add('revealed-card');

    let revealedCards = document.getElementsByClassName('revealed-card');
    let firstCard = revealedCards[0];
    let secondCard = revealedCards[1];
    
    if(revealedCards.length == 2) {
        checkCards(firstCard,secondCard)
    }
}

const createCard = (pokemon) => {
    const card = createElement('div','card');
    const front = createElement('div','face front');
    front.style.backgroundImage = `url('/imagens/${pokemon}.png')`;
    const back = createElement('div','face back');

    card.appendChild(front);
    card.appendChild(back);
    card.setAttribute('data-id', pokemon);

    card.addEventListener('click', flipCard);
    // card.addEventListener('click', checkCards)

    return card
}

function shuffleList(list) {
    // Loop em todos os elementos
for (let index = list.length - 1; index > 0; index--) {
        // Escolhendo elemento aleatório
    const randomIndex = Math.floor(Math.random() * (index + 1));
    // Reposicionando elemento
    [list[index], list[randomIndex]] = [list[randomIndex], list[index]];
}
// Retornando lista com aleatoriedade
return list;
}

const loadGame = () => {
    const cards = document.getElementById('cards');
    const duplicateList = [...pokemonList, ...pokemonList]
    const randomList = shuffleList(duplicateList);
    randomList.forEach((pokemon) => {
        const card = createCard(pokemon);
        cards.appendChild(card)
    });
}

loadGame() 



