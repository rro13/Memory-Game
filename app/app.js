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

var centiSeconds= 0;
var seconds = 0;
var minutes = 0;

function cronometro () {
    var CentiSeconds = document.getElementById('centi-seconds');
    var Seconds = document.getElementById('seconds');
    var Minutes = document.getElementById('minutes');

    if (centiSeconds< 99) {
        centiSeconds++;
        if (centiSeconds< 10) { centiSeconds= "0"+centiSeconds}
        CentiSeconds.innerHTML = ":"+centiSeconds;
    }
    if (centiSeconds== 99) {
        centiSeconds= -1;
    }
    if (centiSeconds== 0) {
        seconds ++;
        if (seconds < 10) { seconds = "0"+seconds }
        Seconds.innerHTML = ":"+seconds;
    }
    if (seconds == 59) {
        seconds = -1;
    }
    if ( (centiSeconds== 0)&&(seconds == 0) ) {
        minutes++;
        if (minutes < 10) { minutes = "0"+minutes }
        Minutes.innerHTML = minutes;
    }
    if (minutes == 59) {
        minutes = -1;
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

    // setInterval(cronometro,10);
}

loadGame() 

