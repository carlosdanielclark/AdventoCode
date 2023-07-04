const fs = require('fs');
path = require('path'),    
data = path.join(__dirname, 'data.txt');

function getFinalScore(input) {
  const data = fs.readFileSync(input, 'utf-8');
  const rounds = data.split('\n');
  let maxScore = 0;
  // Ciclo para obtener el total de puntuacion
  for (let i = 0; i < rounds.length; i++) {
    maxScore += getScore(rounds[i]);
  }
  // Maxima puntuacion
  return maxScore;
}

function getRealFinalScore(input) {
  const data = fs.readFileSync(input, 'utf-8');
  const rounds = data.split('\n');
  let maxScore = 0;

  for (let i = 0; i < rounds.length; i++) {
    maxScore += getRealScore(rounds[i]);
  }
  
  return maxScore;
}

// Funcion para calcular mis puntuaciones
function getScore(round) {
  const plays = round.split(' ');
  const myPlay = new Play(plays[1]);

  if (plays[0] === myPlay.winTo) {
    return 6 + myPlay.score;
  } else if (plays[0] === myPlay.loseTo) {
    return myPlay.score;
  } else {
    return 3 + myPlay.score;
  }
}

// Funcion para calcular las puntuaciones del oponente
function getRealScore(round) {
  const plays = round.split(' ');
  const yourPlay = new Play(plays[0]);

  switch (plays[1]) {
    case 'X':
      return Play.getPlayScore(yourPlay.winTo);
    case 'Y':
      return 3 + yourPlay.score;
    case 'Z':
      return 6 + Play.getPlayScore(yourPlay.loseTo);
    default:
      throw new Error('invalid action');
  }
}

// Definir tipo de juego
class Play {
  constructor(playType) {
    switch (playType) {
      case 'A':
      case 'X':
        this.winTo = 'C';
        this.loseTo = 'B';
        this.score = 1;
        break;
      case 'B':
      case 'Y':
        this.winTo = 'A';
        this.loseTo = 'C';
        this.score = 2;
        break;
      case 'C':
      case 'Z':
        this.winTo = 'B';
        this.loseTo = 'A';
        this.score = 3;
        break;
      default:
        throw new Error('invalid play');
    }
  }

  // Puntuación del torneo
  static getPlayScore(play) {
    switch (play) {
      case 'A':
        return 1;
      case 'B':
        return 2;
      case 'C':
        return 3;
      default:
        throw new Error('invalid play');
    }
  }
}

// Obtener el puntaje total 
const solution1 = getFinalScore(data);
console.log('solution1: ',solution1); //13924

const solution2 = getRealFinalScore(data);
console.log('solution2: ',solution2); //13448


