import * as engine from '..';

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
const playGame = () => {
  // constant
  const taskGame = 'What is the result of the expression?';
  // game
  engine.greeting(taskGame);
  const name = engine.requestName();
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const operator = Math.floor((Math.random() * 3) + 1);
    const correctAnswer = generateOperation(operator, randomNum1, randomNum2);
    const gameExpression = `${randomNum1} ${getTypeOperator(operator)} ${randomNum2}`;
    const gamerAnswer = engine.askQuestion(gameExpression);
    const isGamerRight = Number(gamerAnswer) === correctAnswer;
    engine.rule(gamerAnswer, correctAnswer, isGamerRight, name);
  }
  return console.log(`Congratulations, ${name}!\n`);
};
export default playGame;
