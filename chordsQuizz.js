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
        engName: 'B7'
    }

];
// prendre un accord au hasard
let randomChord

function pickAChord() {
    randomChord = chordsTable[Math.floor(Math.random() * 3)];
}
pickAChord();

//poser la question
console.log("Quelle est la position correcte pour " + randomChord.name + " ?");

//faire une liste de réponses, dont la bonne
const goodAnsw = Math.floor(Math.random() * 3 + 1);
console.log("la bonne réponse sera " + goodAnsw);

function questionList() {
    let q1;
    let q2;
    let q3;
    let q4;
    q1 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    while (q1 === randomChord) {
        q1 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    }
    q2 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    while (q2 === randomChord || q2 === q1) {
        q2 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    }
    q3 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    while (q3 === randomChord || q3 === q2 || q3 === q1) {
        q3 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    }
    q4 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    while (q4 === randomChord || q4 === q3 || q4 === q2 || q4 === q1) {
        q4 = chordsTable[Math.floor(Math.random() * chordsTable.length)]
    }

    console.log({ q1, q2, q3, q4 }) //DEBUG


    if (goodAnsw === 1) {
        console.log("1. " + randomChord.pos)
    } else {
        console.log("1. " + q1.pos)
    }
    if (goodAnsw === 2) {
        console.log("2. " + randomChord.pos)
    } else {
        console.log("2. " + q2.pos)
    }
    if (goodAnsw === 3) {
        console.log("3. " + randomChord.pos);
    } else {
        console.log("3. " + q3.pos)
    }
    if (goodAnsw === 4) {
        console.log("4. " + randomChord.pos);
    } else {
        console.log("4. " + q4.pos);
    }

}
questionList();

//les trucs pour obtenir un input

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

//checker si la réponse est la bonne
rl.on('line', function (line) {
    const number = parseInt(line, 10);

    if (number === goodAnsw) {
        console.log("Wiiiiii");
    } else {
        console.log("Non, en fait c'est " + randomChord.pos);
    }
}) 