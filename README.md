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

const startIndex = 0;
const maxItems = 5;
const { next, previous } = Bicycle(startIndex, maxItems);

// ...

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
```

You can destructure a handful of functions &mdash; `first`, `previous`, `next`, `last` &mdash; for traversing the generator &mdash; each invocation to `Bicycle` will yield a new generator and therefore you can quite easily have multiple instances. You can also use `current` to determine the current index, and `goto` which accepts a `number` parameter which navigates to a specific index.

With the `Bicycle` function you can pass `startIndex` and `maxItems` &mdash; by default `Infinity`. As Bi-cycle has infinite cycling specifying a `maxItems` will constrain the value to the range specified &mdash; `0` to `maxItems`.

Released under the [MIT license](https://github.com/Wildhoney/Bi-cycle/blob/master/LICENSE.md).
