import { describe, expect, it } from 'vitest';

import { periodTransformer } from './period-transformer.ts';

describe('periodTransformer', () => {
  it('A', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = periodTransformer(date, 'A');

    expect(dateString).toBe('AM');
  });

  it('a', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = periodTransformer(date, 'a');

    expect(dateString).toBe('am');
  });

  it('Invalid period format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => periodTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid period format');
  });
});
