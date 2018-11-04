export const padStart = (input: string, targetLength: number = 0, padString = ' ') => {
  const padSubstring = new Array(targetLength).fill(padString).join('');

  return `${padSubstring}${input}`.slice(-targetLength);
};
