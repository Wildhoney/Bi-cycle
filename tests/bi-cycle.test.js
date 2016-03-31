import test from 'ava';
import Bicycle from '../src/bi-cycle';

test('able to increment and decrement with default parameters;', t => {
    const { next } = Bicycle();
    t.is(next(), 1);
    t.is(next(), 2);
    t.is(next(), 3);
});

test('able to return the current index when no arguments passed;', t => {
   const { next, current } = Bicycle();
    t.is(next(), 1);
    t.is(current(), 1);
});

test('able to traverse the index using all instructions;', t => {
    const { first, previous, next, last, current, goto } = Bicycle();
    t.is(next(), 1);
    t.is(previous(), 0);
    t.is(next(), 1);
    t.is(next(), 2);
    t.is(last(), Infinity);
    t.is(first(), 0);
    t.is(next(), 1);
    t.is(goto(5), 5);
    t.is(current(), 5);
    t.is(next(), 6);
});

test('able to add a maximum limit on the index;', t => {
    const { first, previous, next, last, goto } = Bicycle({ startIndex: 0, maxItems: 5 });
    t.is(next(), 1);
    t.is(goto(5), 5);
    t.is(next(), 0);
    t.is(last(), 5);
    t.is(previous(), 4);
    t.is(first(), 0);
});

test('able to specify the starting index;', t => {
    const { next } = Bicycle({ startIndex: 4 });
    t.is(next(), 5);
});

test('able to specify partial options;', t => {
    const { next } = Bicycle({ maxItems: 5 });
    t.is(next(), 1);
});
