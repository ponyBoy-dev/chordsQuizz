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
        name: 'Mi',
        pos: '022100',
        engName: 'E'
    },
    {
        name: 'Fa',
        pos: 'XX3211',
        engName: 'F'
    },
    {
        name: 'Sol',
        pos: '320003',
        engName: 'G'
    },
    {
        name: 'La',
        pos: 'X02220',
        engName: 'A'
    },
    {
        name: 'SI7',
        pos: 'X21202',
        engName: 'B7',
        'hello world': 3
    }
];




const selecteds = sample(chordsTable, 4)
const correct = pick(selecteds)
console.log({selecteds, correct});


document.querySelector('.accord').innerHTML = correct[pick(['name', 'engName'])]
selecteds.forEach((item, i) => {
    const btn = document.querySelector(`.btn[data-value="${i}"]`)
    btn.innerHTML = `<img src="images/${item.pos}.png" alt="${item.pos}">`// item.pos
})

document.querySelector('body').addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        const value = parseInt(e.target.getAttribute('data-value'), 10)
        const chosen = selecteds[value]
        console.log('button!', value, chosen);

        document.querySelector('.result').innerHTML = chosen.pos === correct.pos ? 'WIN!!' : 'LOOSE :('
        
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


