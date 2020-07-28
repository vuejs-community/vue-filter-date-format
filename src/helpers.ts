export function padZeros(input: number, maxLength: number = 0): string {
  return `0000${input}`.slice(-maxLength);
}
