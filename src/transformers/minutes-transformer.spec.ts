import { describe, expect, it } from 'vitest';

import { minutesTransformer } from './minutes-transformer.ts';

describe('minutesTransformer', () => {
  it('mm', () => {
    const date = new Date(2018, 8, 1, 10, 4, 23, 59);
    const dateString = minutesTransformer(date, 'mm');

    expect(dateString).toBe('04');
  });

  it('m', () => {
    const date = new Date(2018, 8, 1, 10, 4, 23, 59);
    const dateString = minutesTransformer(date, 'm');

    expect(dateString).toBe('4');
  });

  it('Invalid minutes format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => minutesTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid minutes format');
  });
});
