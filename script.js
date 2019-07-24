const chordsTable = [
    {
        name: 'Do',
        pos: 'X32010',
        engName: 'C'
    },
    {
        name: 'Ré',
        pos: 'XX0232',
        engName: 'D'
    },
    {
        name: 'Rém',
        pos: 'XX0231',
        engName: 'Dm'
    },
    {
        name: 'Mi',
        pos: '022100',
        engName: 'E'
    },
    {
        name: 'Mim',
        pos: '022000',
        engName: 'Em'
    },
    {
        name: 'Fa',
        pos: 'XX3211',
        engName: 'F'
    },
    {
        name: 'Fam',
        pos: 'XX3111',
        engName: 'Fm'
    },
    {
        name: 'Sol',
        pos: '320003',
        engName: 'G'
    },
    {
        name: 'Sol7',
        pos: '320001',
        engName: 'G7'
    },
    {
        name: 'La',
        pos: 'X02220',
        engName: 'A'
    },
    {
        name: 'Lam',
        pos: 'X02210',
        engName: 'Am'
    },
    {
        name: 'SI7',
        pos: 'X21202',
        engName: 'B7',
    }
];




let selecteds = sample(chordsTable, 4)
let correct = pick(selecteds)
console.log({selecteds, correct});
let goodAnswersCounter = 0 //pour le score
let triesCounter = 0 //pour le score
var buttonClickable = true

function makeChords(pos) {

    
    const chords = [
        mainDroite(pos),
        '<u>E A D g b e</u>',
    ]

    const fretNums = pos.split('')
        .map(c => parseInt(c, 10))
        .filter(c => !isNaN(c))
    const maxFret = (Math.max(...fretNums) > 2 ? Math.max(...fretNums) : 3)

    for (let i = 1; i <= maxFret; i++) {
        chords.push(frette(pos, i))
        chords.push('|-|-|-|-|-|')
    }

    console.log(chords.join('\n'));
    return chords.join('\n')
}


function mainDroite(pos) {
    return pos.split('')
        .map(c => c === 'X' || c === '0' ? c : ' ')
        .join(' ')
}
function frette(pos, i) { 
    return pos.split('')
        .map(c => parseInt(c, 10) === i ? '<b>@</b>' : '|')
        .join(' ')
}
function encoreUneFois(){
    buttonClickable = true
    document.querySelector('.accord').innerHTML = correct[pick(['name', 'engName'])]
    selecteds.forEach((item, i) => {
        const btn = document.querySelector(`.btn[data-value="${i}"]`)
        btn.innerHTML = "<pre>" + makeChords(item.pos) + "</pre>"
        //`<img src="images/${item.pos}.png" alt="${item.pos}">`// item.pos
    })
    document.querySelector('.btn-container').style.display = 'block'
    document.querySelector('.result-container').style.display = 'none'
}

function winning(){
    goodAnswersCounter ++
    triesCounter ++
    document.querySelector('.goodAnswers').innerHTML = goodAnswersCounter
    document.querySelector('.tries').innerHTML = triesCounter
    document.querySelector('.btn-container').style.display = 'none'
    document.querySelector('.result-container').style.display = 'block'
    document.querySelector('.result-container').innerHTML = "<img src='victory.jpg' alt='VICTORY!'>"
    
}

function losing(){
    triesCounter ++
    document.querySelector('.goodAnswers').innerHTML = goodAnswersCounter
    document.querySelector('.tries').innerHTML = triesCounter
    document.querySelector('.btn-container').style.display = 'none'
    document.querySelector('.result-container').style.display = 'block'
    document.querySelector('.result-container').innerHTML = '<table><tr><td><img height="250px" src="answer.jpg" alt="Here is the answer:"></td><td class="goodAnswerContainer"><pre>' + makeChords(correct.pos) + '</pre></td></tr></table>'
}

encoreUneFois()


document.querySelector('body').addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        if(!buttonClickable){
            return
        }
        const value = parseInt(e.target.getAttribute('data-value'), 10)
        const chosen = selecteds[value]
        console.log('button!', value, chosen);
        buttonClickable = false;
        //document.querySelector('.result').innerHTML = chosen.pos === correct.pos ? 'WIN!!' : 'LOOSE :('
        chosen.pos === correct.pos ? winning() : losing();
    }else if(e.target.classList.contains('go')){
        console.log('OH YEAYYY');
        selecteds = sample(chordsTable, 4)
        correct = pick(selecteds)
        //document.querySelector('.result').innerHTML = ""
        encoreUneFois();
    }
})


function sample(arr, n){
    return shuffle(arr).slice(0, n)
}

function shuffle(original) {
    var array = original.slice(0)
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function pick(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}


