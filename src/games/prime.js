import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const isPrime = (num) => {
  let acc = 0;
  if (num <= 1) return false;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) acc += 1;
  }
  return acc > 2 ? false : true;
  // console.log(num + " " + acc);
};
const gamePair = () => {
  const randomNum = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return cons(`${randomNum}`, correctAnswer);
};
const gameTask = 'Is this number prime?';
const start = () => playGame(gameTask, gamePair);
export default start;
