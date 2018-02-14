import readlineSync from 'readline-sync';

export const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const playEven = () => {
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

