import { cons, car, cdr, toString } from 'hexlet-pairs';
import playGame from '..';

const lenNum = 10;
// const generateProgression = (len, progress) => {

// };
const gamePair = () => {
  const randomProgress = Math.floor((Math.random() * 100) + 1);
  const randomPosition = Math.floor((Math.random() * lenNum) + 1);
  let progression = '';
  let startProgress = 0;
  let correctAnswer = 0;
  for (let i = 1; i <= lenNum; i += 1) {
    if (i === randomPosition) {
      progression += ' ..';
      correctAnswer = String(startProgress + randomProgress);
      startProgress += randomProgress;
    } else {
      startProgress += randomProgress;
      progression += ` ${startProgress}`;
    }
  }
  return cons(`${progression}`, correctAnswer);
};
const gameTask = 'What number is missing in this progression?';
const start = () => playGame(gameTask, gamePair);
export default start;
