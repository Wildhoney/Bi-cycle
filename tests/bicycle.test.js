import test from 'ava';
import { cycle, NEXT, PREVIOUS, LAST, FIRST } from '../src/bicycle';

test('able to increment and decrement with default parameters;', t => {
    const c = cycle();
    t.is(c.next(NEXT).value, 1);
    t.is(c.next(NEXT).value, 2);
    t.is(c.next(NEXT).value, 3);
});

test('able to return the current index when no arguments passed;', t => {
   const c = cycle();
    t.is(c.next(NEXT).value, 1);
    t.is(c.next().value, 1);
});

test('able to traverse the index using all instructions;', t => {
    const c = cycle();
    t.is(c.next(NEXT).value, 1);
    t.is(c.next(PREVIOUS).value, 0);
    t.is(c.next(NEXT).value, 1);
    t.is(c.next(NEXT).value, 2);
    t.is(c.next(LAST).value, Infinity);
    t.is(c.next(FIRST).value, 0);
    t.is(c.next(NEXT).value, 1);
    t.is(c.next(5).value, 5);
    t.is(c.next(NEXT).value, 6);
});

test('able to add a maximum limit on the index;', t => {
    const c = cycle(0, 5);
    t.is(c.next(NEXT).value, 1);
    t.is(c.next(5).value, 5);
    t.is(c.next(NEXT).value, 0);
    t.is(c.next(LAST).value, 5);
    t.is(c.next(PREVIOUS).value, 4);
    t.is(c.next(FIRST).value, 0);
});

test('able to specify the starting index;', t => {
    const c = cycle(4);
    t.is(c.next(NEXT).value, 5);
});
