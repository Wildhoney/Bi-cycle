# Bi-cycle

> Bi-cycle assists in making infinite carousels and sliders by handling the index logic for you.

![Travis](http://img.shields.io/travis/Wildhoney/Bi-cycle.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/bi-cycle.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

**npm:** `npm i bi-cycle`

<img src="https://sketchedout.files.wordpress.com/2007/11/fishbike.jpg?w=480" width="300" />

**Source:** [SketchedOut](https://sketchedout.wordpress.com/tag/like-a-fish-needs-a-bicycle/)

## Getting Started

Bi-cycle uses [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) and provides an interface to modify the immutable index.

**Note:** `Bi-cycle` is more a proof of concept for not mutating values using generators, however you're more than welcome to use it in production.

```javascript
import Bicycle from 'bi-cycle';

// ...

const { next, previous } = Bicycle({ start: 0, max: 5, infinite: true });

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
```

There are handful of functions which can be destructured for modifying the state:

 * `next` Moves either to the next index, or to `min` if at `max`;
 * `previous` Moves either to the previous index, or to `max` if at `min`;
 * `first` Moves to `min`;
 * `last` Moves to `max` &ndash; by default `Infinity`;
 * `set(n)` Sets slide denoted by `n` otherwise `min` or `max` if out of range;
 
You may also pass in additional parameters to `Bicycle` in order to override the defaults:

 * `start` Determines the initial index value &ndash; default is `min`;
 * `min` Determines the first index &ndash; default is `-Infinity`;
 * `max` Determines the last index &ndash; default is `Infinity`;
 * `infinite` Determines the action of Bi-cycle when the index is our of range &ndash; default `true`;

## Unique ID

Another use for Bi-cycle is a slightly over-elaborate unique ID generator &ndash; each and every time you invoke `next` a unique number is returned.

```javascript
import Bicycle from 'bi-cycle';

const { next } = Bicycle();

const createModel = name => {
    return { id: next(), name };
};

createModel('Adam'); // { id: 1, name: 'Adam' }
createModel('Maria'); // { id: 2, name: 'Maria' }
createModel('Igba'); // { id: 3, name: 'Igba' }
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

Released under the [MIT license](https://github.com/Wildhoney/Bi-cycle/blob/master/LICENSE.md).
