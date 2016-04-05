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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = Bicycle;
	/**
	 * @constant defaults
	 * @type {Object}
	 */
	var defaults = { start: 0, min: -Infinity, max: Infinity, infinite: true };

	/**
	 * @method cycle
	 * @param {Number} [start = 0]
	 * @param {Number} [min = -Infinity]
	 * @param {Number} [max = Infinity]
	 * @param {Number} [infinite = true]
	 * @return {Object}
	 */
	function Bicycle() {
	  var _marked = [counter].map(regeneratorRuntime.mark);

	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? defaults : arguments[0];

	  var _ref$start = _ref.start;
	  var start = _ref$start === undefined ? defaults.start : _ref$start;
	  var _ref$min = _ref.min;
	  var min = _ref$min === undefined ? defaults.min : _ref$min;
	  var _ref$max = _ref.max;
	  var max = _ref$max === undefined ? defaults.max : _ref$max;
	  var _ref$infinite = _ref.infinite;
	  var infinite = _ref$infinite === undefined ? defaults.infinite : _ref$infinite;


	  var FIRST = Symbol('Bicycle/FIRST');
	  var PREVIOUS = Symbol('Bicycle/PREVIOUS');
	  var NEXT = Symbol('Bicycle/NEXT');
	  var LAST = Symbol('Bicycle/LAST');
	  var CURRENT = Symbol('Bicycle/CURRENT');

	  /**
	   * @constant options
	   * @type {Object}
	   */
	  var options = _extends({}, defaults, { start: start, max: max, infinite: infinite });

	  /**
	   * @method belowRange
	   * @return {Number}
	   */
	  var belowRange = function belowRange() {
	    return infinite ? max : min;
	  };

	  /**
	   * @method aboveRange
	   * @return {Number}
	   */
	  var aboveRange = function aboveRange() {
	    return infinite ? min : max;
	  };

	  /**
	   * @method restrict
	   * @param {Number} desiredIndex
	   * @return {Number}
	   */
	  var restrict = function restrict(desiredIndex) {
	    return desiredIndex < min ? belowRange() : desiredIndex > max ? aboveRange() : desiredIndex;
	  };

	  /**
	   * @method counter
	   * @param {Number} index
	   * @param {Symbol|Number} [cycleStrategy = CURRENT]
	   * @yield {Object}
	   */
	  function counter(index) {
	    var cycleStrategy = arguments.length <= 1 || arguments[1] === undefined ? CURRENT : arguments[1];
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
	                  return min;
	                case PREVIOUS:
	                  return restrict(index - 1);
	                case NEXT:
	                  return restrict(index + 1);
	                case LAST:
	                  return max;
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

	  var state = counter(options.start);
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
	    set: function set(slideNumber) {
	      return state.next(slideNumber).value;
	    }
	  };
	}

/***/ }
/******/ ]);