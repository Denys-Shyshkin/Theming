import { WORDS_PER_CUP } from './constants';

export const cupsOfCoffee = (text: string) => {
  const numberOfWords = text.split(' ').length;

  return Math.ceil(numberOfWords / WORDS_PER_CUP);
};
