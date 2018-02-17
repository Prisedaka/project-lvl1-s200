import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const generateOperation = (oper, num1, num2) => {
  let result = 0;
  switch (oper) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    default: break;
  }
  return result;
};
const getTypeOperator = (oper) => {
  let result = '';
  switch (oper) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    default: break;
  }
  return result;
};
const gamePair = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const operator = Math.floor((Math.random() * 3) + 1);
  const correctAnswer = String(generateOperation(operator, randomNum1, randomNum2));
  return cons(`${randomNum1} ${getTypeOperator(operator)} ${randomNum2}`, correctAnswer);
};
const gameTask = 'What is the result of the expression?';
const start = () => playGame(gameTask, gamePair);
export default start;
