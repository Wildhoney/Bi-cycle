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
    const { first, previous, next, last, current, set } = Bicycle();
    t.is(next(), 1);
    t.is(previous(), 0);
    t.is(next(), 1);
    t.is(next(), 2);
    t.is(last(), Infinity);
    t.is(first(), -Infinity);
    t.is(set(0), 0);
    t.is(next(), 1);
    t.is(set(5), 5);
    t.is(current(), 5);
    t.is(next(), 6);
});

test('able to add a maximum limit on the index;', t => {
    const { first, previous, next, last, set } = Bicycle({ start: 0, max: 5 });
    t.is(next(), 1);
    t.is(set(5), 5);
    t.is(next(), -Infinity);
    t.is(last(), 5);
    t.is(previous(), 4);
    t.is(first(), -Infinity);
});

test('able to specify the starting index;', t => {
    const { next } = Bicycle({ start: 4 });
    t.is(next(), 5);
});

test('able to specify partial options;', t => {
    const { next } = Bicycle({ max: 5 });
    t.is(next(), 1);
});

test('able to set the min and max properties;', t => {
    const { next, previous } = Bicycle({ min: -2, max: 3 });
    t.is(next(), 1);
    t.is(next(), 2);
    t.is(next(), 3);
    t.is(next(), -2);
    t.is(next(), -1);
    t.is(next(), 0);
    t.is(next(), 1);
    t.is(previous(), 0);
    t.is(previous(), -1);
    t.is(previous(), -2);
    t.is(previous(), 3);
    t.is(previous(), 2);
});

test('able to change to a finite list so index does not reset;', t => {
    const { previous, next, set } = Bicycle({ min: 0, max: 5, infinite: false });
    t.is(next(), 1);
    t.is(next(), 2);
    t.is(set(0), 0);
    t.is(previous(), 0);
    t.is(set(100), 5);
    t.is(set(-100), 0);
});
