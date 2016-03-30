/**
 * @method cycle
 * @param {Number} startIndex
 * @param {Number} maxItems
 * @return {Object}
 */
export function cycle(startIndex = 0, maxItems = Infinity) {

    /**
     * @method type
     * @type {Object}
     */
    const type = {
        FIRST: Symbol('first'),
        PREVIOUS: Symbol('previous'),
        NEXT: Symbol('next'),
        LAST: Symbol('last'),
        CURRENT: Symbol('current')
    };

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
                case type.FIRST: return 0;
                case type.PREVIOUS: return restrict(index - 1);
                case type.NEXT: return restrict(index + 1);
                case type.LAST: return maxItems;
                case type.CURRENT: return index;
                default: return index;
            }

        })(index);

        yield* counter(nextIndex, yield nextIndex);

    }

    const state = counter(startIndex);
    state.next();

    return {
        first: () => state.next(type.FIRST).value,
        previous: () => state.next(type.PREVIOUS).value,
        next: () => state.next(type.NEXT).value,
        last: () => state.next(type.LAST).value,
        current: () => state.next(type.CURRENT).value,
        goto: slideNumber => state.next(slideNumber).value
    };

}
