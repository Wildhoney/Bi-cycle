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

const { next, previous } = Bicycle();

// ...

nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
```

You can destructure a handful of functions &mdash; `first`, `previous`, `next`, `last` &mdash; for traversing the generator &mdash; each invocation to `Bicycle` will yield a new generator and therefore you can quite easily have multiple instances. You can also use `current` to determine the current index, and `goto` which accepts a `number` parameter which navigates to a specific index.

With the `Bicycle` function you can pass `startIndex` and `maxItems` &mdash; by default `Infinity`. As Bi-cycle has infinite cycling specifying a `maxItems` will constrain the value to the range specified &mdash; `0` to `maxItems`.

## License

<sup><sub>
The MIT License (MIT)
</sub></sup>
<br /><br />
<sup><sub>
Copyright (c) 2016 Adam Timberlake
</sub></sup>
<br /><br />
<sup><sub>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
</sub></sup>
<br /><br />
<sup><sub>
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
</sub></sup>
<br /><br />
<sup><sub>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</sub></sup>
