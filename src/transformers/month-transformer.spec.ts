import { describe, expect, it } from 'vitest';

import { monthTransformer } from './month-transformer.ts';

describe('monthTransformer', () => {
  it('MMMM', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = monthTransformer(date, 'MMMM');

    expect(dateString).toBe('September');
  });

  it('MMM', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = monthTransformer(date, 'MMM');

    expect(dateString).toBe('Sep');
  });

  it('MM', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = monthTransformer(date, 'MM');

    expect(dateString).toBe('09');
  });

  it('M', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = monthTransformer(date, 'M');

    expect(dateString).toBe('9');
  });

  it('Invalid month format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => monthTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid month format');
  });
});
