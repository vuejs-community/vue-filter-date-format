export function padStart(input: number, targetLength: number = 0, padString = ' ') {
  const padSubstring = new Array(targetLength).fill(padString).join('');

  return `${padSubstring}${input}`.slice(-targetLength);
}

export function padEnd(input: number, targetLength: number = 0, padString = ' ') {
  const padSubstring = new Array(targetLength).fill(padString).join('');

  return `${input}${padSubstring}`.slice(0, targetLength);
}
