module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Bicycle;
	/**
	 * @method cycle
	 * @param {Number} startIndex
	 * @param {Number} maxItems
	 * @return {Object}
	 */
	function Bicycle() {
	    var startIndex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	    var _marked = [counter].map(regeneratorRuntime.mark);

	    var maxItems = arguments.length <= 1 || arguments[1] === undefined ? Infinity : arguments[1];


	    var FIRST = Symbol('Bicycle/FIRST');
	    var PREVIOUS = Symbol('Bicycle/PREVIOUS');
	    var NEXT = Symbol('Bicycle/NEXT');
	    var LAST = Symbol('Bicycle/LAST');
	    var CURRENT = Symbol('Bicycle/CURRENT');

	    /**
	     * @method restrict
	     * @param {Number} desiredIndex
	     * @return {Number}
	     */
	    var restrict = function restrict(desiredIndex) {
	        return desiredIndex < 0 ? maxItems : desiredIndex > maxItems ? 0 : desiredIndex;
	    };

	    /**
	     * @method counter
	     * @param {Number} index
	     * @param {Symbol|Number} cycleStrategy
	     * @yield {Object}
	     */
	    function counter(index, cycleStrategy) {
	        var nextIndex;
	        return regeneratorRuntime.wrap(function counter$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        nextIndex = function (index) {

	                            if (typeof cycleStrategy === 'number') {
	                                return restrict(cycleStrategy);
	                            }

	                            switch (cycleStrategy) {
	                                case FIRST:
	                                    return 0;
	                                case PREVIOUS:
	                                    return restrict(index - 1);
	                                case NEXT:
	                                    return restrict(index + 1);
	                                case LAST:
	                                    return maxItems;
	                                case CURRENT:
	                                    return index;
	                                default:
	                                    return index;
	                            }
	                        }(index);

	                        _context.t0 = nextIndex;
	                        _context.next = 4;
	                        return nextIndex;

	                    case 4:
	                        _context.t1 = _context.sent;
	                        return _context.delegateYield(counter(_context.t0, _context.t1), 't2', 6);

	                    case 6:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _marked[0], this);
	    }

	    var state = counter(startIndex);
	    state.next();

	    return {
	        first: function first() {
	            return state.next(FIRST).value;
	        },
	        previous: function previous() {
	            return state.next(PREVIOUS).value;
	        },
	        next: function next() {
	            return state.next(NEXT).value;
	        },
	        last: function last() {
	            return state.next(LAST).value;
	        },
	        current: function current() {
	            return state.next(CURRENT).value;
	        },
	        goto: function goto(slideNumber) {
	            return state.next(slideNumber).value;
	        }
	    };
	}

/***/ }
/******/ ]);