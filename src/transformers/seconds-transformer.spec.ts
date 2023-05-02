import { describe, expect, it } from 'vitest';

import { secondsTransformer } from './seconds-transformer.ts';

describe('secondsTransformer', () => {
  it('ss', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = secondsTransformer(date, 'ss');

    expect(dateString).toBe('05');
  });

  it('s', () => {
    const date = new Date(2018, 8, 1, 10, 37, 5, 59);
    const dateString = secondsTransformer(date, 's');

    expect(dateString).toBe('5');
  });

  it('Invalid seconds format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => secondsTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid seconds format');
  });
});
