import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};
const gamePair = () => {
  const randomNum1 = Math.floor(Math.random() * 10);
  const randomNum2 = Math.floor(Math.random() * 10);
  const correctAnswer = String(gcd(randomNum1, randomNum2));
  return cons(`${randomNum1} ${randomNum2}`, correctAnswer);
};
const gameTask = 'Find the greatest common divisor of given numbers.';
const start = () => playGame(gameTask, gamePair);
export default start;
