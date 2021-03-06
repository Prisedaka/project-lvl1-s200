import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const gamePair = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return cons(`${randomNum}`, correctAnswer);
};
const gameTask = 'Answer "yes" if number even otherwise answer "no".';
const start = () => playGame(gameTask, gamePair);
export default start;
