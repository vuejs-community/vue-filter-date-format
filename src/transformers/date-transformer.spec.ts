import { describe, expect, it } from 'vitest';

import { dateTransformer } from './date-transformer.ts';

describe('dateTransformer', () => {
  it('DD', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateTransformer(date, 'DD');

    expect(dateString).toBe('01');
  });

  it('D', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateTransformer(date, 'D');

    expect(dateString).toBe('1');
  });

  it('Invalid date format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => dateTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid date format');
  });
});
