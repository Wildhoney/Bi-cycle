/**
 * @constant defaults
 * @type {Object}
 */
const defaults = { startIndex: 0, maxItems: Infinity, isInfinite: true };

/**
 * @method cycle
 * @param {Number} [startIndex = 0]
 * @param {Number} [maxItems = Infinity]
 * @param {Number} [isInfinite = true]
 * @return {Object}
 */
export default function Bicycle({ startIndex = defaults.startIndex, maxItems = defaults.maxItems, isInfinite = defaults.isInfinite } = defaults) {

    const FIRST = Symbol('Bicycle/FIRST');
    const PREVIOUS = Symbol('Bicycle/PREVIOUS');
    const NEXT = Symbol('Bicycle/NEXT');
    const LAST = Symbol('Bicycle/LAST');
    const CURRENT = Symbol('Bicycle/CURRENT');

    /**
     * @constant options
     * @type {Object}
     */
    const options = { ...defaults, ...{ startIndex, maxItems, isInfinite } };

    /**
     * @method restrict
     * @param {Number} desiredIndex
     * @return {Number}
     */
    const restrict = desiredIndex => {
        return (desiredIndex < 0) ? maxItems : (desiredIndex > maxItems ? 0 : desiredIndex);
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
                case FIRST: return 0;
                case PREVIOUS: return restrict(index - 1);
                case NEXT: return restrict(index + 1);
                case LAST: return maxItems;
                case CURRENT: return index;
                default: return index;
            }

        })(index);

        yield* counter(nextIndex, yield nextIndex);

    }

    const state = counter(options.startIndex);
    state.next();

    return {
        first: () => state.next(FIRST).value,
        previous: () => state.next(PREVIOUS).value,
        next: () => state.next(NEXT).value,
        last: () => state.next(LAST).value,
        current: () => state.next(CURRENT).value,
        goto: slideNumber => state.next(slideNumber).value
    };

}
