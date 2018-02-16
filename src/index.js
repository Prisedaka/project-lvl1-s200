import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

export const generator = f => arg => f(arg);
export const playGame = (task, exprCorAnswer) => {
  console.log(`Welcome to the Brain Games! \n ${task}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const pair = exprCorAnswer();
    const answer = readlineSync.question(`Question: ${car(pair)} \n Your answer: `);
    if (answer === cdr(pair)) console.log('Correct!');
    else return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(pair)}'. \n Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!\n`);
};
