export const getRandomBetweenRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getOneorZero = (): number => {
  return Math.round(Math.random());
};
