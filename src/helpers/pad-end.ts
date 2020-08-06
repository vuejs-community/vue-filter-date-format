export const padEnd = (input: string, targetLength: number = 0, padString = ' ') => {
  const padSubstring = new Array(targetLength).fill(padString).join('');

  return `${input}${padSubstring}`.slice(0, targetLength);
}
