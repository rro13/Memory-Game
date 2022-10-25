const pokemonList = ['003','006','012','028','045','051','057','065','067','079','094','095','107','121','122']

// const pokemonList = ['003','006','012','028','045','051','057','065','067','079','094','095','107','121','122','123','125','130','141','151']

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className
    return element
}

const endGame = () => {
    let correctPairs = document.getElementsByClassName('correct-pair');
    if(correctPairs.length == 20) {
        alert("Você ganhou!!")
    }
}

const checkCards = () => {
    if(firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
        firstCard.firstChild.classList.add('correct-pair');
        secondCard.firstChild.classList.add('correct-pair');
        firstCard = '';
        secondCard = '';
        endGame()
    }else {
        window.setTimeout(function(){
            firstCard.classList.remove('revealed-card');
            secondCard.classList.remove('revealed-card');
            firstCard = '';
            secondCard = '';
        },800);
    }
}

let firstCard = '';
let secondCard = '';

const flipCard = (event) => {
    if(firstCard == '') {
        firstCard = event.target.parentNode;
        firstCard.classList.add('revealed-card')
    } else if(secondCard == '') {
        secondCard = event.target.parentNode;
        secondCard.classList.add('revealed-card')
        checkCards()
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

let minutes = 0;
let seconds = 0;
const timer = () => {
    const elementSeconds = document.getElementById('seconds');
    const elementMinutes = document.getElementById('minutes');
    const separator = document.getElementById('separator')

    if(+elementSeconds.textContent < 59) {
        seconds = +elementSeconds.textContent + 1;
        elementSeconds.textContent = String(seconds).padStart(2, '0')
    }else {
        minutes = minutes + 1;
        seconds = '00';
        elementSeconds.textContent = seconds
        separator.textContent = ":";
        elementMinutes.textContent = String(minutes).padStart(2,'0')
    }
}

const loadGame = () => {
    const cards = document.getElementById('cards');
    const duplicateList = [...pokemonList, ...pokemonList]
    const randomList = shuffleList(duplicateList);
    randomList.forEach((pokemon) => {
        const card = createCard(pokemon);
        cards.appendChild(card)
    });

    // setInterval(timer,1000)
}

loadGame() 

