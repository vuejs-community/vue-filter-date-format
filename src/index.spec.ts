import ava, { TestInterface } from 'ava';

import { dateFormat } from './index';

const test = ava as TestInterface<{ date?: Date }>;

const macro = (t, input: Date, format: string, expected: string) => {
  t.is(dateFormat(input, format), expected);
};

const dateAm = new Date(2018, 8, 1, 10, 37, 23, 59);

const datePm = new Date(2018, 8, 1, 13, 37, 23);

const datePm0 = new Date(2018, 8, 1, 12, 37, 23);

test('YYYY', macro, dateAm, 'YYYY', '2018');

test('YY', macro, dateAm, 'YY', '18');

test('MMMM', macro, dateAm, 'MMMM', 'September');

test('MMM', macro, dateAm, 'MMM', 'Sep');

test('MM', macro, dateAm, 'MM', '09');

test('M', macro, dateAm, 'M', '9');

test('DD', macro, dateAm, 'DD', '01');

test('D', macro, dateAm, 'D', '1');

test('dddd', macro, dateAm, 'dddd', 'Saturday');

test('dd', macro, dateAm, 'dd', 'Sa');

test('d', macro, dateAm, 'd', '6');

test('S', macro, dateAm, 'S', '59');

test('SSS', macro, dateAm, 'SSS', '590');

test('DD.MM.YYYY', macro, dateAm, 'DD.MM.YYYY', '01.09.2018');

test('YYYY.MM.DD', macro, dateAm, 'YYYY.MM.DD', '2018.09.01');

test('YYYY.MM.DD HH.mm.ss', macro, dateAm, 'YYYY.MM.DD HH.mm.ss', '2018.09.01 10.37.23');

test('YYYY.MM.DD hh.mm.ss A (AM)', macro, dateAm, 'YYYY.MM.DD hh.mm.ss A', '2018.09.01 10.37.23 AM');

test('YYYY.MM.DD hh.mm.ss A (PM)', macro, datePm, 'YYYY.MM.DD hh.mm.ss A', '2018.09.01 01.37.23 PM');

test('YYYY.MM.DD hh.mm.ss a (AM)', macro, dateAm, 'YYYY.MM.DD hh.mm.ss a', '2018.09.01 10.37.23 am');

test('YYYY.MM.DD hh.mm.ss a (PM)', macro, datePm, 'YYYY.MM.DD hh.mm.ss a', '2018.09.01 01.37.23 pm');

test('YYYY.MM.DD h.mm.ss a (AM)', macro, dateAm, 'YYYY.MM.DD h.mm.ss a', '2018.09.01 10.37.23 am');

test('YYYY.MM.DD h.mm.ss a (PM)', macro, datePm, 'YYYY.MM.DD h.mm.ss a', '2018.09.01 1.37.23 pm');

test('YYYY.MM.DD h.mm.ss a (PM) 2', macro, datePm0, 'YYYY.MM.DD h.mm.ss a', '2018.09.01 12.37.23 pm');

test('MM/DD/YYYY', macro, dateAm, 'MM/DD/YYYY', '09/01/2018');

test('YYYY-MM-DD', macro, dateAm, 'YYYY-MM-DD', '2018-09-01');
