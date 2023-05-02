import { describe, expect, it } from 'vitest';

import { hoursTransformer } from './hours-transformer.ts';

describe('hoursTransformer', () => {
  it('HH', () => {
    const date = new Date(2018, 8, 1, 9, 37, 23, 59);
    const dateString = hoursTransformer(date, 'HH');

    expect(dateString).toBe('09');
  });

  it('H', () => {
    const date = new Date(2018, 8, 1, 9, 37, 23, 59);
    const dateString = hoursTransformer(date, 'H');

    expect(dateString).toBe('9');
  });

  it('hh', () => {
    const date = new Date(2018, 8, 1, 13, 37, 23, 59);
    const dateString = hoursTransformer(date, 'hh');

    expect(dateString).toBe('01');
  });

  it('h', () => {
    const date = new Date(2018, 8, 1, 13, 37, 23, 59);
    const dateString = hoursTransformer(date, 'h');

    expect(dateString).toBe('1');
  });

  it('Invalid hours format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => hoursTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid hours format');
  });
});
