import { describe, expect, it } from 'vitest';

import { millisecondsTransformer } from './milliseconds-transformer.ts';

describe('millisecondsTransformer', () => {
  it('SSS', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = millisecondsTransformer(date, 'SSS');

    expect(dateString).toBe('590');
  });

  it('S', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = millisecondsTransformer(date, 'S');

    expect(dateString).toBe('59');
  });

  it('Invalid milliseconds format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => millisecondsTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid milliseconds format');
  });
});
