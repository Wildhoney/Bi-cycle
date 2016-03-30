import test from 'ava';
import { cycle, NEXT } from '../src/bicycle';

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
