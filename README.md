# Bi-cycle

> Bi-cycle assists in making infinite carousels and sliders by handling the index logic for you.

<img src="https://sketchedout.files.wordpress.com/2007/11/fishbike.jpg?w=480" width="300" />

**Source:** [SketchedOut](https://sketchedout.wordpress.com/tag/like-a-fish-needs-a-bicycle/)

## Getting Started

Bi-cycle uses [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) and provides an interface to modify the immutable index.

```javascript
import Bicycle from 'bi-cycle';
const { next } = Bicycle();

// ...

nextButton.addEventListener('click', next);
```

You can destructure a handful of functions &mdash; `first`, `previous`, `next`, `last` &mdash; for traversing the generator &mdash; each invocation to `Bicycle` will yield a new generator and therefore you can quite easily have multiple instances. You can also use `current` to determine the current index, and `goto` which accepts one `number` parameter which jumps to a specific index.

With the `Bicycle` function you can pass `startIndex` and `maxItems` &mdash; by default `Infinity`. As Bi-cycle is an infinite cycling, by specifying a `maxItems` it will constrain the value to the range specified &mdash; `0` to `maxItems`.
