import ava, { TestInterface } from 'ava';
import { dateFormat } from './dateFormat';

const test = ava as TestInterface<{ date?: Date }>;

const macro = (t, input: Date, format: string, expected: string) => {
  t.is(dateFormat(input, format), expected);
};

const dateAm = new Date(2018, 11, 1, 10, 37, 23);

const datePm = new Date(2018, 11, 1, 13, 37, 23);

test('DD.MM.YYYY', macro, dateAm, 'DD.MM.YYYY', '01.12.2018');

test('YYYY.MM.DD', macro, dateAm, 'YYYY.MM.DD', '2018.12.01');

test('YYYY.MM.DD HH.mm.ss', macro, dateAm, 'YYYY.MM.DD HH.mm.ss', '2018.12.01 10.37.23');

test('YYYY.MM.DD hh.mm.ss A (AM)', macro, dateAm, 'YYYY.MM.DD hh.mm.ss A', '2018.12.01 10.37.23 AM');

test('YYYY.MM.DD hh.mm.ss A (PM)', macro, datePm, 'YYYY.MM.DD hh.mm.ss A', '2018.12.01 01.37.23 PM');

test('YYYY.MM.DD hh.mm.ss a (AM)', macro, dateAm, 'YYYY.MM.DD hh.mm.ss a', '2018.12.01 10.37.23 am');

test('YYYY.MM.DD hh.mm.ss a (PM)', macro, datePm, 'YYYY.MM.DD hh.mm.ss a', '2018.12.01 01.37.23 pm');

test('MM/DD/YYYY', macro, dateAm, 'MM/DD/YYYY', '12/01/2018');

test('YYYY-MM-DD', macro, dateAm, 'YYYY-MM-DD', '2018-12-01');
