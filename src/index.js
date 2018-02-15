import readlineSync from 'readline-sync';

export const greeting = (task) => {
  console.log(`Welcome to the Brain Games! \n ${task}\n`);
};
export const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
export const askQuestion = (question) => {
  const answer = readlineSync.question(`Question: ${question} \n Your answer: `);
  return answer;
};
export const rule = (answer, corAnsw, isRight, gamer) => {
  let isNext = true;
  if (isRight) {
    console.log('Correct!');
  };
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnsw}'. \n Let's try again, ${gamer}!`);
    isNext = false;
  }
};
// Games
export const playEven = () => {
  console.log('Welcome to the Brain Games! \n Answer "yes" if number even otherwise answer "no".\n');
  const name = requestName();
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${randomNum} \n Your answer: `);
    if ((answer === 'yes' && randomNum % 2 === 0) || (answer === 'no' && randomNum % 2 !== 0)) console.log('Correct!');
    else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!\n`);
};

export const playCalc = () => {
  console.log('Welcome to the Brain Games! \n What is the result of the expression?\n');
  const name = requestName();
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
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const operator = Math.floor((Math.random() * 3) + 1);
    const correctAnswer = generateOperation(operator, randomNum1, randomNum2);
    const answer = readlineSync.question(`Question: ${randomNum1} ${getTypeOperator(operator)} ${randomNum2} \n Your answer: `);
    if (Number(answer) === correctAnswer) console.log('Correct!');
    else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!\n`);
};
