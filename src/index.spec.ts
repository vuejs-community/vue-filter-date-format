import { describe, expect, it } from 'vitest';

import { dateFormat } from './index.ts';

describe('dateFormat', () => {
  it('DD.MM.YYYY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'DD.MM.YYYY');

    expect(dateString).toBe('01.09.2018');
  });

  it('DD.MM.YY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'DD.MM.YY');

    expect(dateString).toBe('01.09.18');
  });

  it('MM/DD/YYYY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'MM/DD/YYYY');

    expect(dateString).toBe('09/01/2018');
  });

  it('YYYY-MM-DD', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY-MM-DD');

    expect(dateString).toBe('2018-09-01');
  });

  it('YYYY.MM.DD', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY.MM.DD');

    expect(dateString).toBe('2018.09.01');
  });

  it('YY.M.D H.m.s.SSS (dddd)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YY.M.D H.m.s.SSS (dddd)');

    expect(dateString).toBe('18.9.1 10.37.23.590 (Saturday)');
  });

  it('YY.M.D H.m.s.S (dd)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YY.M.D H.m.s.S (dd)');

    expect(dateString).toBe('18.9.1 10.37.23.59 (Sa)');
  });

  it('YY.M.D H.m.s (d)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YY.M.D H.m.s (d)');

    expect(dateString).toBe('18.9.1 10.37.23 (6)');
  });

  it('DD MMM YYYY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'DD MMM YYYY');

    expect(dateString).toBe('01 Sep 2018');
  });

  it('DD MMMM YYYY', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'DD MMMM YYYY');

    expect(dateString).toBe('01 September 2018');
  });

  it('YYYY.MM.DD HH.mm.ss', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY.MM.DD HH.mm.ss');

    expect(dateString).toBe('2018.09.01 10.37.23');
  });

  it('YYYY.MM.DD hh.mm.ss A (AM)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY.MM.DD hh.mm.ss A');

    expect(dateString).toBe('2018.09.01 10.37.23 AM');
  });

  it('YYYY.MM.DD hh.mm.ss A (PM)', () => {
    const date = new Date(2018, 8, 1, 13, 37, 23);
    const dateString = dateFormat(date, 'YYYY.MM.DD hh.mm.ss A');

    expect(dateString).toBe('2018.09.01 01.37.23 PM');
  });

  it('YYYY.MM.DD hh.mm.ss a (AM)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY.MM.DD hh.mm.ss a');

    expect(dateString).toBe('2018.09.01 10.37.23 am');
  });

  it('YYYY.MM.DD hh.mm.ss a (PM)', () => {
    const date = new Date(2018, 8, 1, 13, 37, 23);
    const dateString = dateFormat(date, 'YYYY.MM.DD hh.mm.ss a');

    expect(dateString).toBe('2018.09.01 01.37.23 pm');
  });

  it('YYYY.MM.DD h.mm.ss a (AM)', () => {
    const date = new Date(2018, 8, 1, 10, 37, 23, 59);
    const dateString = dateFormat(date, 'YYYY.MM.DD h.mm.ss a');

    expect(dateString).toBe('2018.09.01 10.37.23 am');
  });

  it('YYYY.MM.DD h.mm.ss a (PM)', () => {
    const date = new Date(2018, 8, 1, 13, 37, 23);
    const dateString = dateFormat(date, 'YYYY.MM.DD h.mm.ss a');

    expect(dateString).toBe('2018.09.01 1.37.23 pm');
  });

  it('YYYY.MM.DD h.mm.ss a (PM) 2', () => {
    const date = new Date(2018, 8, 1, 12, 37, 23);
    const dateString = dateFormat(date, 'YYYY.MM.DD h.mm.ss a');

    expect(dateString).toBe('2018.09.01 12.37.23 pm');
  });

  it('YYYY.MM.DD h.mm.ss.SSS a (dddd) (With Timezone)', () => {
    const date = new Date(2018, 8, 1, 12, 37, 23);
    const dateString = dateFormat(date, 'YYYY.MM.DD h.mm.ss.SSS a (dddd)', {
      timezone: 120
    });

    expect(dateString).toBe('2018.09.01 10.37.23.000 am (Saturday)');
  });
});
