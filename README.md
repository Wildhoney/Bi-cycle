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

```javascript
import Bicycle from 'bi-cycle';

// ...

const { next, previous } = Bicycle({ startIndex: 0, maxItems: 5, isInfinite: true });

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
```

There are handful of functions which can be destructured for modifying the state:

 * `next` Moves either to the next index, or to `0` if at `maxItems`;
 * `previous` Moves either to the previous index, or to `maxItems` if at `0`;
 * `first` Moves to `0`;
 * `last` Moves to `maxItems` &ndash; by default `Infinity`;
 * `goto(n)` Moves to slide denoted by `n` otherwise `0` or `maxItems` if out of range;
 
You may also pass in additional parameters to `Bicycle` in order to override the defaults:

 * `startIndex` Determines the initial index value &ndash; default is `0`;
 * `maxItems` Determines the `0` to `maxItems` range for the index &ndash default is `Infinity`;
 * `isInfinite` Determines the action of Bi-cycle when the index is our of range &ndash; default `true`;

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

Released under the [MIT license](https://github.com/Wildhoney/Bi-cycle/blob/master/LICENSE.md).
