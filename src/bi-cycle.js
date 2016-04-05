/**
 * @constant defaults
 * @type {Object}
 */
const defaults = { start: 0, min: -Infinity, max: Infinity, infinite: true };

/**
 * @method cycle
 * @param {Number} [start = 0]
 * @param {Number} [min = -Infinity]
 * @param {Number} [max = Infinity]
 * @param {Number} [infinite = true]
 * @return {Object}
 */
export default function Bicycle({ start = defaults.start, min = defaults.min, max = defaults.max, infinite = defaults.infinite } = defaults) {

    const FIRST = Symbol('Bicycle/FIRST');
    const PREVIOUS = Symbol('Bicycle/PREVIOUS');
    const NEXT = Symbol('Bicycle/NEXT');
    const LAST = Symbol('Bicycle/LAST');
    const CURRENT = Symbol('Bicycle/CURRENT');

    /**
     * @constant options
     * @type {Object}
     */
    const options = { ...defaults, ...{ start, max, infinite } };

    /**
     * @method belowRange
     * @return {Number}
     */
    const belowRange = () => infinite ? max : min;

    /**
     * @method aboveRange
     * @return {Number}
     */
    const aboveRange = () => infinite ? min : max;

    /**
     * @method restrict
     * @param {Number} desiredIndex
     * @return {Number}
     */
    const restrict = desiredIndex => {
        return (desiredIndex < min) ? belowRange() : (desiredIndex > max ? aboveRange() : desiredIndex);
    };

    /**
     * @method counter
     * @param {Number} index
     * @param {Symbol|Number} [cycleStrategy = CURRENT]
     * @yield {Object}
     */
    function* counter(index, cycleStrategy = CURRENT) {

        const nextIndex = (function (index) {

            if (typeof cycleStrategy === 'number') {
                return restrict(cycleStrategy);
            }

            switch (cycleStrategy) {
                case FIRST: return min;
                case PREVIOUS: return restrict(index - 1);
                case NEXT: return restrict(index + 1);
                case LAST: return max;
                case CURRENT: return index;
                default: return index;
            }

        })(index);

        yield* counter(nextIndex, yield nextIndex);

    }

    const state = counter(options.start);
    state.next();

    return {
        first: () => state.next(FIRST).value,
        previous: () => state.next(PREVIOUS).value,
        next: () => state.next(NEXT).value,
        last: () => state.next(LAST).value,
        current: () => state.next(CURRENT).value,
        set: slideNumber => state.next(slideNumber).value
    };

}
