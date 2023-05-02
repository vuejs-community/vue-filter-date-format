import { describe, expect, it } from 'vitest';

import { weekdayTransformer } from './weekday-transformer.ts';

describe('weekdayTransformer', () => {
  it('dddd', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = weekdayTransformer(date, 'dddd');

    expect(dateString).toBe('Saturday');
  });

  it('dd', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = weekdayTransformer(date, 'dd');

    expect(dateString).toBe('Sa');
  });

  it('d', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = weekdayTransformer(date, 'd');

    expect(dateString).toBe('6');
  });

  it('Invalid weekday format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => weekdayTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid weekday format');
  });
});
