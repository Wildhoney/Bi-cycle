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
	var defaults = { startIndex: 0, maxItems: Infinity, isInfinite: true };

	/**
	 * @method cycle
	 * @param {Number} [startIndex = 0]
	 * @param {Number} [maxItems = Infinity]
	 * @param {Number} [isInfinite = true]
	 * @return {Object}
	 */
	function Bicycle() {
	  var _marked = [counter].map(regeneratorRuntime.mark);

	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? defaults : arguments[0];

	  var _ref$startIndex = _ref.startIndex;
	  var startIndex = _ref$startIndex === undefined ? defaults.startIndex : _ref$startIndex;
	  var _ref$maxItems = _ref.maxItems;
	  var maxItems = _ref$maxItems === undefined ? defaults.maxItems : _ref$maxItems;
	  var _ref$isInfinite = _ref.isInfinite;
	  var isInfinite = _ref$isInfinite === undefined ? defaults.isInfinite : _ref$isInfinite;


	  var FIRST = Symbol('Bicycle/FIRST');
	  var PREVIOUS = Symbol('Bicycle/PREVIOUS');
	  var NEXT = Symbol('Bicycle/NEXT');
	  var LAST = Symbol('Bicycle/LAST');
	  var CURRENT = Symbol('Bicycle/CURRENT');

	  /**
	   * @constant options
	   * @type {Object}
	   */
	  var options = _extends({}, defaults, { startIndex: startIndex, maxItems: maxItems, isInfinite: isInfinite });

	  /**
	   * @method belowRange
	   * @return {Number}
	   */
	  var belowRange = function belowRange() {
	    return isInfinite ? maxItems : 0;
	  };

	  /**
	   * @method aboveRange
	   * @return {Number}
	   */
	  var aboveRange = function aboveRange() {
	    return isInfinite ? 0 : maxItems;
	  };

	  /**
	   * @method restrict
	   * @param {Number} desiredIndex
	   * @return {Number}
	   */
	  var restrict = function restrict(desiredIndex) {
	    return desiredIndex < 0 ? belowRange() : desiredIndex > maxItems ? aboveRange() : desiredIndex;
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

	  var state = counter(options.startIndex);
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