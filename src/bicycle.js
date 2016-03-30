export const FIRST = Symbol('Bicycle.FIRST');
export const PREVIOUS = Symbol('Bicycle.PREVIOUS');
export const NEXT = Symbol('Bicycle.NEXT');
export const LAST = Symbol('Bicycle.LAST');

/**
 * @method cycle
 * @param {Number} startIndex
 * @param {Number} maxItems
 * @param {Symbol|Number} cycleStrategy
 */
export function* cycle(startIndex = 0, maxItems = Infinity, cycleStrategy = NEXT) {

    /**
     * @method restrict
     * @param {Number} desiredIndex
     * @return {Number}
     */
    const restrict = desiredIndex => {
        return (desiredIndex < 0) ? maxItems : (desiredIndex > maxItems ? 0 : desiredIndex);
    };

    function* counter(index, cycleStrategy) {

        const nextIndex = (function (index) {

            if (typeof cycleStrategy === 'number') {
                return restrict(cycleStrategy);
            }

            switch (cycleStrategy) {
                case FIRST: return 0;
                case PREVIOUS: return restrict(index - 1);
                case NEXT: return restrict(index + 1);
                case LAST: return maxItems;
                default: return index;
            }

        })(index);

        yield* counter(nextIndex, yield nextIndex);

    }

    yield* counter(startIndex, cycleStrategy);

}
