import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const maxPair = (num) => {
  const str = String(num);
  let i = 1;
  let pair = cons(Number(str[0]), 0);
  while (i < str.length) {
    if (Number(str[i]) > Number(str[i - 1])) pair = cons(Number(str[i]), i);
    i += 1;
  }
  return pair;
};
const minPair = (num) => {
  const str = String(num);
  let i = 1;
  let pair = cons(Number(str[0]), 0);
  while (i < str.length) {
    if (Number(str[i]) < Number(str[i - 1])) pair = cons(Number(str[i]), i);
    i += 1;
  }
  return pair;
};
const replace = (str, index, replacement) => `${str.substr(0, index)}${replacement}${str.substr(index + 1)}`;
const balance = (balanceNum) => {
  const diff = car(maxPair(balanceNum)) - car(minPair(balanceNum));
  if (diff === 1 || diff === 0) return String(balanceNum);
  const maxNum = car(maxPair(balanceNum));
  const maxIndex = cdr(maxPair(balanceNum));
  const minNum = car(minPair(balanceNum));
  const minIndex = cdr(minPair(balanceNum));
  const replaceMax = replace(String(balanceNum), maxIndex, maxNum - (diff - 1));
  const replaceMin = replace(replaceMax, minIndex, minNum + (diff - 1));
  return balance(replaceMin);
};
const sort = (str) => {
  const arr = str.split('');
  const sortArr = arr.sort();
  const newStr = sortArr.join('');
  return newStr;
};
const gamePair = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const correctAnswer = sort(balance(randomNum));
  return cons(`${randomNum}`, correctAnswer);
};
const gameTask = 'Balance the given number.';
const start = () => playGame(gameTask, gamePair);
export default start;
