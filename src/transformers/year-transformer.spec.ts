import { describe, expect, it } from 'vitest';

import { yearTransformer } from './year-transformer.ts';

describe('yearTransformer', () => {
  it('YYYY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = yearTransformer(date, 'YYYY');

    expect(dateString).toBe('2018');
  });

  it('YY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = yearTransformer(date, 'YY');

    expect(dateString).toBe('18');
  });

  it('Invalid year format', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const getDateString = () => yearTransformer(date, '-');

    expect(getDateString).toThrowError('Invalid year format');
  });
});
