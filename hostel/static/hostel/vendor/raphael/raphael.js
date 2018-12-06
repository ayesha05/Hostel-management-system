// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.2.0 - JavaScript Vector Library                                                             │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com)                                       │ \\
// │ Copyright © 2008-2016 Sencha Labs (http://sencha.com)                                                 │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (https://github.com/DmitryBaranovskiy/raphael/blob/master/license.txt) license.│ \\
// └───────────────────────────────────────────────────────────────────────────────────────────────────────┘ \\

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Raphael"] = factory();
	else
		root["Raphael"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(R) {

	    return R;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(eve) {

	    /*\
	     * Raphael
	     [ method ]
	     **
	     * Creates a canvas object on which to draw.
	     * You must do this first, as all future calls to drawing methods
	     * from this instance will be bound to this canvas.
	     > Parameters
	     **
	     - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - x (number)
	     - y (number)
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
	     = (object) @Paper
	     > Usage
	     | // Each of the following examples create a canvas
	     | // that is 320px wide by 200px high.
	     | // Canvas is created at the viewport’s 10,50 coordinate.
	     | var paper = Raphael(10, 50, 320, 200);
	     | // Canvas is created at the top left corner of the #notepad element
	     | // (or its top right corner in dir="rtl" elements)
	     | var paper = Raphael(document.getElementById("notepad"), 320, 200);
	     | // Same as above
	     | var paper = Raphael("notepad", 320, 200);
	     | // Image dump
	     | var set = Raphael(["notepad", 320, 200, {
	     |     type: "rect",
	     |     x: 10,
	     |     y: 10,
	     |     width: 25,
	     |     height: 25,
	     |     stroke: "#f00"
	     | }, {
	     |     type: "text",
	     |     x: 30,
	     |     y: 40,
	     |     text: "Dump"
	     | }]);
	    \*/
	    function R(first) {
	        if (R.is(first, "function")) {
	            return loaded ? first() : eve.on("raphael.DOMload", first);
	        } else if (R.is(first, array)) {
	            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
	        } else {
	            var args = Array.prototype.slice.call(arguments, 0);
	            if (R.is(args[args.length - 1], "function")) {
	                var f = args.pop();
	                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
	                    f.call(R._engine.create[apply](R, args));
	                });
	            } else {
	                return R._engine.create[apply](R, arguments);
	            }
	        }
	    }
	    R.version = "2.2.0";
	    R.eve = eve;
	    var loaded,
	        separator = /[, ]+/,
	        elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
	        formatrg = /\{(\d+)\}/g,
	        proto = "prototype",
	        has = "hasOwnProperty",
	        g = {
	            doc: document,
	            win: window
	        },
	        oldRaphael = {
	            was: Object.prototype[has].call(g.win, "Raphael"),
	            is: g.win.Raphael
	        },
	        Paper = function () {
	            /*\
	             * Paper.ca
	             [ property (object) ]
	             **
	             * Shortcut for @Paper.customAttributes
	            \*/
	            /*\
	             * Paper.customAttributes
	             [ property (object) ]
	             **
	             * If you have a set of attributes that you would like to represent
	             * as a function of some number you can do it easily with custom attributes:
	             > Usage
	             | paper.customAttributes.hue = function (num) {
	             |     num = num % 1;
	             |     return {fill: "hsb(" + num + ", 0.75, 1)"};
	             | };
	             | // Custom attribute “hue” will change fill
	             | // to be given hue with fixed saturation and brightness.
	             | // Now you can use it like this:
	             | var c = paper.circle(10, 10, 10).attr({hue: .45});
	             | // or even like this:
	             | c.animate({hue: 1}, 1e3);
	             |
	             | // You could also create custom attribute
	             | // with multiple parameters:
	             | paper.customAttributes.hsb = function (h, s, b) {
	             |     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
	             | };
	             | c.attr({hsb: "0.5 .8 1"});
	             | c.animate({hsb: [1, 0, 0.5]}, 1e3);
	            \*/
	            this.ca = this.customAttributes = {};
	        },
	        paperproto,
	        appendChild = "appendChild",
	        apply = "apply",
	        concat = "concat",
	        supportsTouch = ('ontouchstart' in g.win) || g.win.DocumentTouch && g.doc instanceof DocumentTouch, //taken from Modernizr touch test
	        E = "",
	        S = " ",
	        Str = String,
	        split = "split",
	        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
	        touchMap = {
	            mousedown: "touchstart",
	            mousemove: "touchmove",
	            mouseup: "touchend"
	        },
	        lowerCase = Str.prototype.toLowerCase,
	        math = Math,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        pow = math.pow,
	        PI = math.PI,
	        nu = "number",
	        string = "string",
	        array = "array",
	        toString = "toString",
	        fillString = "fill",
	        objectToString = Object.prototype.toString,
	        paper = {},
	        push = "push",
	        ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
	        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
	        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
	        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	        round = math.round,
	        setAttribute = "setAttribute",
	        toFloat = parseFloat,
	        toInt = parseInt,
	        upperCase = Str.prototype.toUpperCase,
	        availableAttrs = R._availableAttrs = {
	            "arrow-end": "none",
	            "arrow-start": "none",
	            blur: 0,
	            "clip-rect": "0 0 1e9 1e9",
	            cursor: "default",
	            cx: 0,
	            cy: 0,
	            fill: "#fff",
	            "fill-opacity": 1,
	            font: '10px "Arial"',
	            "font-family": '"Arial"',
	            "font-size": "10",
	            "font-style": "normal",
	            "font-weight": 400,
	            gradient: 0,
	            height: 0,
	            href: "http://raphaeljs.com/",
	            "letter-spacing": 0,
	            opacity: 1,
	            path: "M0,0",
	            r: 0,
	            rx: 0,
	            ry: 0,
	            src: "",
	            stroke: "#000",
	            "stroke-dasharray": "",
	            "stroke-linecap": "butt",
	            "stroke-linejoin": "butt",
	            "stroke-miterlimit": 0,
	            "stroke-opacity": 1,
	            "stroke-width": 1,
	            target: "_blank",
	            "text-anchor": "middle",
	            title: "Raphael",
	            transform: "",
	            width: 0,
	            x: 0,
	            y: 0,
	            class: ""
	        },
	        availableAnimAttrs = R._availableAnimAttrs = {
	            blur: nu,
	            "clip-rect": "csv",
	            cx: nu,
	            cy: nu,
	            fill: "colour",
	            "fill-opacity": nu,
	            "font-size": nu,
	            height: nu,
	            opacity: nu,
	            path: "path",
	            r: nu,
	            rx: nu,
	            ry: nu,
	            stroke: "colour",
	            "stroke-opacity": nu,
	            "stroke-width": nu,
	            transform: "transform",
	            width: nu,
	            x: nu,
	            y: nu
	        },
	        whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
	        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
	        hsrg = {hs: 1, rg: 1},
	        p2s = /,?([achlmqrstvxz]),?/gi,
	        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
	        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
	        eldata = {},
	        sortByKey = function (a, b) {
	            return a.key - b.key;
	        },
	        sortByNumber = function (a, b) {
	            return toFloat(a) - toFloat(b);
	        },
	        fun = function () {},
	        pipe = function (x) {
	            return x;
	        },
	        rectPath = R._rectPath = function (x, y, w, h, r) {
	            if (r) {
	                return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
	            }
	            return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
	        },
	        ellipsePath = function (x, y, rx, ry) {
	            if (ry == null) {
	                ry = rx;
	            }
	            return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
	        },
	        getPath = R._getPath = {
	            path: function (el) {
	                return el.attr("path");
	            },
	            circle: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.r);
	            },
	            ellipse: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.rx, a.ry);
	            },
	            rect: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height, a.r);
	            },
	            image: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height);
	            },
	            text: function (el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            },
	            set : function(el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            }
	        },
	        /*\
	         * Raphael.mapPath
	         [ method ]
	         **
	         * Transform the path string with given matrix.
	         > Parameters
	         - path (string) path string
	         - matrix (object) see @Matrix
	         = (string) transformed path string
	        \*/
	        mapPath = R.mapPath = function (path, matrix) {
	            if (!matrix) {
	                return path;
	            }
	            var x, y, i, j, ii, jj, pathi;
	            path = path2curve(path);
	            for (i = 0, ii = path.length; i < ii; i++) {
	                pathi = path[i];
	                for (j = 1, jj = pathi.length; j < jj; j += 2) {
	                    x = matrix.x(pathi[j], pathi[j + 1]);
	                    y = matrix.y(pathi[j], pathi[j + 1]);
	                    pathi[j] = x;
	                    pathi[j + 1] = y;
	                }
	            }
	            return path;
	        };

	    R._g = g;
	    /*\
	     * Raphael.type
	     [ property (string) ]
	     **
	     * Can be “SVG”, “VML” or empty, depending on browser support.
	    \*/
	    R.type = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
	    if (R.type == "VML") {
	        var d = g.doc.createElement("div"),
	            b;
	        d.innerHTML = '<v:shape adj="1"/>';
	        b = d.firstChild;
	        b.style.behavior = "url(#default#VML)";
	        if (!(b && typeof b.adj == "object")) {
	            return (R.type = E);
	        }
	        d = null;
	    }
	    /*\
	     * Raphael.svg
	     [ property (boolean) ]
	     **
	     * `true` if browser supports SVG.
	    \*/
	    /*\
	     * Raphael.vml
	     [ property (boolean) ]
	     **
	     * `true` if browser supports VML.
	    \*/
	    R.svg = !(R.vml = R.type == "VML");
	    R._Paper = Paper;
	    /*\
	     * Raphael.fn
	     [ property (object) ]
	     **
	     * You can add your own method to the canvas. For example if you want to draw a pie chart,
	     * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
	     * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
	     * Raphaël instance is created, otherwise it will take no effect. Please note that the
	     * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
	     * ensure any namespacing ensures proper context.
	     > Usage
	     | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
	     |     return this.path( ... );
	     | };
	     | // or create namespace
	     | Raphael.fn.mystuff = {
	     |     arrow: function () {…},
	     |     star: function () {…},
	     |     // etc…
	     | };
	     | var paper = Raphael(10, 10, 630, 480);
	     | // then use it
	     | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
	     | paper.mystuff.arrow();
	     | paper.mystuff.star();
	    \*/
	    R.fn = paperproto = Paper.prototype = R.prototype;
	    R._id = 0;
	    R._oid = 0;
	    /*\
	     * Raphael.is
	     [ method ]
	     **
	     * Handful of replacements for `typeof` operator.
	     > Parameters
	     - o (…) any object or primitive
	     - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
	     = (boolean) is given value is of given type
	    \*/
	    R.is = function (o, type) {
	        type = lowerCase.call(type);
	        if (type == "finite") {
	            return !isnan[has](+o);
	        }
	        if (type == "array") {
	            return o instanceof Array;
	        }
	        return  (type == "null" && o === null) ||
	                (type == typeof o && o !== null) ||
	                (type == "object" && o === Object(o)) ||
	                (type == "array" && Array.isArray && Array.isArray(o)) ||
	                objectToString.call(o).slice(8, -1).toLowerCase() == type;
	    };

	    function clone(obj) {
	        if (typeof obj == "function" || Object(obj) !== obj) {
	            return obj;
	        }
	        var res = new obj.constructor;
	        for (var key in obj) if (obj[has](key)) {
	            res[key] = clone(obj[key]);
	        }
	        return res;
	    }

	    /*\
	     * Raphael.angle
	     [ method ]
	     **
	     * Returns angle between two or three points
	     > Parameters
	     - x1 (number) x coord of first point
	     - y1 (number) y coord of first point
	     - x2 (number) x coord of second point
	     - y2 (number) y coord of second point
	     - x3 (number) #optional x coord of third point
	     - y3 (number) #optional y coord of third point
	     = (number) angle in degrees.
	    \*/
	    R.angle = function (x1, y1, x2, y2, x3, y3) {
	        if (x3 == null) {
	            var x = x1 - x2,
	                y = y1 - y2;
	            if (!x && !y) {
	                return 0;
	            }
	            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
	        } else {
	            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
	        }
	    };
	    /*\
	     * Raphael.rad
	     [ method ]
	     **
	     * Transform angle to radians
	     > Parameters
	     - deg (number) angle in degrees
	     = (number) angle in radians.
	    \*/
	    R.rad = function (deg) {
	        return deg % 360 * PI / 180;
	    };
	    /*\
	     * Raphael.deg
	     [ method ]
	     **
	     * Transform angle to degrees
	     > Parameters
	     - rad (number) angle in radians
	     = (number) angle in degrees.
	    \*/
	    R.deg = function (rad) {
	        return Math.round ((rad * 180 / PI% 360)* 1000) / 1000;
	    };
	    /*\
	     * Raphael.snapTo
	     [ method ]
	     **
	     * Snaps given value to given grid.
	     > Parameters
	     - values (array|number) given array of values or step of the grid
	     - value (number) value to adjust
	     - tolerance (number) #optional tolerance for snapping. Default is `10`.
	     = (number) adjusted value.
	    \*/
	    R.snapTo = function (values, value, tolerance) {
	        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
	        if (R.is(values, array)) {
	            var i = values.length;
	            while (i--) if (abs(values[i] - value) <= tolerance) {
	                return values[i];
	            }
	        } else {
	            values = +values;
	            var rem = value % values;
	            if (rem < tolerance) {
	                return value - rem;
	            }
	            if (rem > values - tolerance) {
	                return value - rem + values;
	            }
	        }
	        return value;
	    };

	    /*\
	     * Raphael.createUUID
	     [ method ]
	     **
	     * Returns RFC4122, version 4 ID
	    \*/
	    var createUUID = R.createUUID = (function (uuidRegEx, uuidReplacer) {
	        return function () {
	            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
	        };
	    })(/[xy]/g, function (c) {
	        var r = math.random() * 16 | 0,
	            v = c == "x" ? r : (r & 3 | 8);
	        return v.toString(16);
	    });

	    /*\
	     * Raphael.setWindow
	     [ method ]
	     **
	     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
	     > Parameters
	     - newwin (window) new window object
	    \*/
	    R.setWindow = function (newwin) {
	        eve("raphael.setWindow", R, g.win, newwin);
	        g.win = newwin;
	        g.doc = g.win.document;
	        if (R._engine.initWin) {
	            R._engine.initWin(g.win);
	        }
	    };
	    var toHex = function (color) {
	        if (R.vml) {
	            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
	            var trim = /^\s+|\s+$/g;
	            var bod;
	            try {
	                var docum = new ActiveXObject("htmlfile");
	                docum.write("<body>");
	                docum.close();
	                bod = docum.body;
	            } catch(e) {
	                bod = createPopup().document.body;
	            }
	            var range = bod.createTextRange();
	            toHex = cacher(function (color) {
	                try {
	                    bod.style.color = Str(color).replace(trim, E);
	                    var value = range.queryCommandValue("ForeColor");
	                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
	                    return "#" + ("000000" + value.toString(16)).slice(-6);
	                } catch(e) {
	                    return "none";
	                }
	            });
	        } else {
	            var i = g.doc.createElement("i");
	            i.title = "Rapha\xebl Colour Picker";
	            i.style.display = "none";
	            g.doc.body.appendChild(i);
	            toHex = cacher(function (color) {
	                i.style.color = color;
	                return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	            });
	        }
	        return toHex(color);
	    },
	    hsbtoString = function () {
	        return "hsb(" + [this.h, this.s, this.b] + ")";
	    },
	    hsltoString = function () {
	        return "hsl(" + [this.h, this.s, this.l] + ")";
	    },
	    rgbtoString = function () {
	        return this.hex;
	    },
	    prepareRGB = function (r, g, b) {
	        if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
	            b = r.b;
	            g = r.g;
	            r = r.r;
	        }
	        if (g == null && R.is(r, string)) {
	            var clr = R.getRGB(r);
	            r = clr.r;
	            g = clr.g;
	            b = clr.b;
	        }
	        if (r > 1 || g > 1 || b > 1) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	        }

	        return [r, g, b];
	    },
	    packageRGB = function (r, g, b, o) {
	        r *= 255;
	        g *= 255;
	        b *= 255;
	        var rgb = {
	            r: r,
	            g: g,
	            b: b,
	            hex: R.rgb(r, g, b),
	            toString: rgbtoString
	        };
	        R.is(o, "finite") && (rgb.opacity = o);
	        return rgb;
	    };

	    /*\
	     * Raphael.color
	     [ method ]
	     **
	     * Parses the color string and returns object with all values for the given color.
	     > Parameters
	     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
	     = (object) Combined RGB & HSB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) `true` if string can’t be parsed,
	     o     h (number) hue,
	     o     s (number) saturation,
	     o     v (number) value (brightness),
	     o     l (number) lightness
	     o }
	    \*/
	    R.color = function (clr) {
	        var rgb;
	        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
	            rgb = R.hsb2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
	            rgb = R.hsl2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else {
	            if (R.is(clr, "string")) {
	                clr = R.getRGB(clr);
	            }
	            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
	                rgb = R.rgb2hsl(clr);
	                clr.h = rgb.h;
	                clr.s = rgb.s;
	                clr.l = rgb.l;
	                rgb = R.rgb2hsb(clr);
	                clr.v = rgb.b;
	            } else {
	                clr = {hex: "none"};
	                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
	            }
	        }
	        clr.toString = rgbtoString;
	        return clr;
	    };
	    /*\
	     * Raphael.hsb2rgb
	     [ method ]
	     **
	     * Converts HSB values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - v (number) value or brightness
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsb2rgb = function (h, s, v, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
	            v = h.b;
	            s = h.s;
	            o = h.o;
	            h = h.h;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = v * s;
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = v - C;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.hsl2rgb
	     [ method ]
	     **
	     * Converts HSL values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsl2rgb = function (h, s, l, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
	            l = h.l;
	            s = h.s;
	            h = h.h;
	        }
	        if (h > 1 || s > 1 || l > 1) {
	            h /= 360;
	            s /= 100;
	            l /= 100;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = 2 * s * (l < .5 ? l : 1 - l);
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = l - C / 2;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.rgb2hsb
	     [ method ]
	     **
	     * Converts RGB values to HSB object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSB object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     b (number) brightness
	     o }
	    \*/
	    R.rgb2hsb = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, V, C;
	        V = mmax(r, g, b);
	        C = V - mmin(r, g, b);
	        H = (C == 0 ? null :
	             V == r ? (g - b) / C :
	             V == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4
	            );
	        H = ((H + 360) % 6) * 60 / 360;
	        S = C == 0 ? 0 : C / V;
	        return {h: H, s: S, b: V, toString: hsbtoString};
	    };
	    /*\
	     * Raphael.rgb2hsl
	     [ method ]
	     **
	     * Converts RGB values to HSL object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSL object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     l (number) luminosity
	     o }
	    \*/
	    R.rgb2hsl = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, L, M, m, C;
	        M = mmax(r, g, b);
	        m = mmin(r, g, b);
	        C = M - m;
	        H = (C == 0 ? null :
	             M == r ? (g - b) / C :
	             M == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4);
	        H = ((H + 360) % 6) * 60 / 360;
	        L = (M + m) / 2;
	        S = (C == 0 ? 0 :
	             L < .5 ? C / (2 * L) :
	                      C / (2 - 2 * L));
	        return {h: H, s: S, l: L, toString: hsltoString};
	    };
	    R._path2string = function () {
	        return this.join(",").replace(p2s, "$1");
	    };
	    function repush(array, item) {
	        for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
	            return array.push(array.splice(i, 1)[0]);
	        }
	    }
	    function cacher(f, scope, postprocessor) {
	        function newf() {
	            var arg = Array.prototype.slice.call(arguments, 0),
	                args = arg.join("\u2400"),
	                cache = newf.cache = newf.cache || {},
	                count = newf.count = newf.count || [];
	            if (cache[has](args)) {
	                repush(count, args);
	                return postprocessor ? postprocessor(cache[args]) : cache[args];
	            }
	            count.length >= 1e3 && delete cache[count.shift()];
	            count.push(args);
	            cache[args] = f[apply](scope, arg);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        return newf;
	    }

	    var preload = R._preload = function (src, f) {
	        var img = g.doc.createElement("img");
	        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
	        img.onload = function () {
	            f.call(this);
	            this.onload = null;
	            g.doc.body.removeChild(this);
	        };
	        img.onerror = function () {
	            g.doc.body.removeChild(this);
	        };
	        g.doc.body.appendChild(img);
	        img.src = src;
	    };

	    function clrToString() {
	        return this.hex;
	    }

	    /*\
	     * Raphael.getRGB
	     [ method ]
	     **
	     * Parses colour string as RGB object
	     > Parameters
	     - colour (string) colour string in one of formats:
	     # <ul>
	     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
	     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
	     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
	     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
	     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
	     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
	     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsl(•••, •••, •••) — same as hsb</li>
	     #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
	     # </ul>
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) true if string can’t be parsed
	     o }
	    \*/
	    R.getRGB = cacher(function (colour) {
	        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	            return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	        }
	        if (colour == "none") {
	            return {r: -1, g: -1, b: -1, hex: "none", toString: clrToString};
	        }
	        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	        var res,
	            red,
	            green,
	            blue,
	            opacity,
	            t,
	            values,
	            rgb = colour.match(colourRegExp);
	        if (rgb) {
	            if (rgb[2]) {
	                blue = toInt(rgb[2].substring(5), 16);
	                green = toInt(rgb[2].substring(3, 5), 16);
	                red = toInt(rgb[2].substring(1, 3), 16);
	            }
	            if (rgb[3]) {
	                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	                green = toInt((t = rgb[3].charAt(2)) + t, 16);
	                red = toInt((t = rgb[3].charAt(1)) + t, 16);
	            }
	            if (rgb[4]) {
	                values = rgb[4][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            }
	            if (rgb[5]) {
	                values = rgb[5][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsb2rgb(red, green, blue, opacity);
	            }
	            if (rgb[6]) {
	                values = rgb[6][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsl2rgb(red, green, blue, opacity);
	            }
	            rgb = {r: red, g: green, b: blue, toString: clrToString};
	            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	            R.is(opacity, "finite") && (rgb.opacity = opacity);
	            return rgb;
	        }
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	    }, R);
	    /*\
	     * Raphael.hsb
	     [ method ]
	     **
	     * Converts HSB values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - b (number) value or brightness
	     = (string) hex representation of the colour.
	    \*/
	    R.hsb = cacher(function (h, s, b) {
	        return R.hsb2rgb(h, s, b).hex;
	    });
	    /*\
	     * Raphael.hsl
	     [ method ]
	     **
	     * Converts HSL values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (string) hex representation of the colour.
	    \*/
	    R.hsl = cacher(function (h, s, l) {
	        return R.hsl2rgb(h, s, l).hex;
	    });
	    /*\
	     * Raphael.rgb
	     [ method ]
	     **
	     * Converts RGB values to hex representation of the colour.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (string) hex representation of the colour.
	    \*/
	    R.rgb = cacher(function (r, g, b) {
	        function round(x) { return (x + 0.5) | 0; }
	        return "#" + (16777216 | round(b) | (round(g) << 8) | (round(r) << 16)).toString(16).slice(1);
	    });
	    /*\
	     * Raphael.getColor
	     [ method ]
	     **
	     * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
	     > Parameters
	     - value (number) #optional brightness, default is `0.75`
	     = (string) hex representation of the colour.
	    \*/
	    R.getColor = function (value) {
	        var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
	            rgb = this.hsb2rgb(start.h, start.s, start.b);
	        start.h += .075;
	        if (start.h > 1) {
	            start.h = 0;
	            start.s -= .2;
	            start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
	        }
	        return rgb.hex;
	    };
	    /*\
	     * Raphael.getColor.reset
	     [ method ]
	     **
	     * Resets spectrum position for @Raphael.getColor back to red.
	    \*/
	    R.getColor.reset = function () {
	        delete this.start;
	    };

	    // http://schepers.cc/getting-to-the-point
	    function catmullRom2bezier(crp, z) {
	        var d = [];
	        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
	            var p = [
	                        {x: +crp[i - 2], y: +crp[i - 1]},
	                        {x: +crp[i],     y: +crp[i + 1]},
	                        {x: +crp[i + 2], y: +crp[i + 3]},
	                        {x: +crp[i + 4], y: +crp[i + 5]}
	                    ];
	            if (z) {
	                if (!i) {
	                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
	                } else if (iLen - 4 == i) {
	                    p[3] = {x: +crp[0], y: +crp[1]};
	                } else if (iLen - 2 == i) {
	                    p[2] = {x: +crp[0], y: +crp[1]};
	                    p[3] = {x: +crp[2], y: +crp[3]};
	                }
	            } else {
	                if (iLen - 4 == i) {
	                    p[3] = p[2];
	                } else if (!i) {
	                    p[0] = {x: +crp[i], y: +crp[i + 1]};
	                }
	            }
	            d.push(["C",
	                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
	                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
	                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
	                  (p[1].y + 6*p[2].y - p[3].y) / 6,
	                  p[2].x,
	                  p[2].y
	            ]);
	        }

	        return d;
	    }
	    /*\
	     * Raphael.parsePathString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of arrays of path segments.
	     > Parameters
	     - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
	     = (array) array of segments.
	    \*/
	    R.parsePathString = function (pathString) {
	        if (!pathString) {
	            return null;
	        }
	        var pth = paths(pathString);
	        if (pth.arr) {
	            return pathClone(pth.arr);
	        }

	        var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0},
	            data = [];
	        if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
	            data = pathClone(pathString);
	        }
	        if (!data.length) {
	            Str(pathString).replace(pathCommand, function (a, b, c) {
	                var params = [],
	                    name = b.toLowerCase();
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                if (name == "m" && params.length > 2) {
	                    data.push([b][concat](params.splice(0, 2)));
	                    name = "l";
	                    b = b == "m" ? "l" : "L";
	                }
	                if (name == "r") {
	                    data.push([b][concat](params));
	                } else while (params.length >= paramCounts[name]) {
	                    data.push([b][concat](params.splice(0, paramCounts[name])));
	                    if (!paramCounts[name]) {
	                        break;
	                    }
	                }
	            });
	        }
	        data.toString = R._path2string;
	        pth.arr = pathClone(data);
	        return data;
	    };
	    /*\
	     * Raphael.parseTransformString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of transformations.
	     > Parameters
	     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
	     = (array) array of transformations.
	    \*/
	    R.parseTransformString = cacher(function (TString) {
	        if (!TString) {
	            return null;
	        }
	        var paramCounts = {r: 3, s: 4, t: 2, m: 6},
	            data = [];
	        if (R.is(TString, array) && R.is(TString[0], array)) { // rough assumption
	            data = pathClone(TString);
	        }
	        if (!data.length) {
	            Str(TString).replace(tCommand, function (a, b, c) {
	                var params = [],
	                    name = lowerCase.call(b);
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                data.push([b][concat](params));
	            });
	        }
	        data.toString = R._path2string;
	        return data;
	    });
	    // PATHS
	    var paths = function (ps) {
	        var p = paths.ps = paths.ps || {};
	        if (p[ps]) {
	            p[ps].sleep = 100;
	        } else {
	            p[ps] = {
	                sleep: 100
	            };
	        }
	        setTimeout(function () {
	            for (var key in p) if (p[has](key) && key != ps) {
	                p[key].sleep--;
	                !p[key].sleep && delete p[key];
	            }
	        });
	        return p[ps];
	    };
	    /*\
	     * Raphael.findDotsAtSegment
	     [ method ]
	     **
	     * Utility method
	     **
	     * Find dot coordinates on the given cubic bezier curve at the given t.
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     - t (number) position on the curve (0..1)
	     = (object) point information in format:
	     o {
	     o     x: (number) x coordinate of the point
	     o     y: (number) y coordinate of the point
	     o     m: {
	     o         x: (number) x coordinate of the left anchor
	     o         y: (number) y coordinate of the left anchor
	     o     }
	     o     n: {
	     o         x: (number) x coordinate of the right anchor
	     o         y: (number) y coordinate of the right anchor
	     o     }
	     o     start: {
	     o         x: (number) x coordinate of the start of the curve
	     o         y: (number) y coordinate of the start of the curve
	     o     }
	     o     end: {
	     o         x: (number) x coordinate of the end of the curve
	     o         y: (number) y coordinate of the end of the curve
	     o     }
	     o     alpha: (number) angle of the curve derivative at the point
	     o }
	    \*/
	    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            t13 = pow(t1, 3),
	            t12 = pow(t1, 2),
	            t2 = t * t,
	            t3 = t2 * t,
	            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
	            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
	            ax = t1 * p1x + t * c1x,
	            ay = t1 * p1y + t * c1y,
	            cx = t1 * c2x + t * p2x,
	            cy = t1 * c2y + t * p2y,
	            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
	        (mx > nx || my < ny) && (alpha += 180);
	        return {
	            x: x,
	            y: y,
	            m: {x: mx, y: my},
	            n: {x: nx, y: ny},
	            start: {x: ax, y: ay},
	            end: {x: cx, y: cy},
	            alpha: alpha
	        };
	    };
	    /*\
	     * Raphael.bezierBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given cubic bezier curve
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     * or
	     - bez (array) array of six points for bezier curve
	     = (object) point information in format:
	     o {
	     o     min: {
	     o         x: (number) x coordinate of the left point
	     o         y: (number) y coordinate of the top point
	     o     }
	     o     max: {
	     o         x: (number) x coordinate of the right point
	     o         y: (number) y coordinate of the bottom point
	     o     }
	     o }
	    \*/
	    R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	        if (!R.is(p1x, "array")) {
	            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
	        }
	        var bbox = curveDim.apply(null, p1x);
	        return {
	            x: bbox.min.x,
	            y: bbox.min.y,
	            x2: bbox.max.x,
	            y2: bbox.max.y,
	            width: bbox.max.x - bbox.min.x,
	            height: bbox.max.y - bbox.min.y
	        };
	    };
	    /*\
	     * Raphael.isPointInsideBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside bounding boxes.
	     > Parameters
	     - bbox (string) bounding box
	     - x (string) x coordinate of the point
	     - y (string) y coordinate of the point
	     = (boolean) `true` if point inside
	    \*/
	    R.isPointInsideBBox = function (bbox, x, y) {
	        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
	    };
	    /*\
	     * Raphael.isBBoxIntersect
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if two bounding boxes intersect
	     > Parameters
	     - bbox1 (string) first bounding box
	     - bbox2 (string) second bounding box
	     = (boolean) `true` if they intersect
	    \*/
	    R.isBBoxIntersect = function (bbox1, bbox2) {
	        var i = R.isPointInsideBBox;
	        return i(bbox2, bbox1.x, bbox1.y)
	            || i(bbox2, bbox1.x2, bbox1.y)
	            || i(bbox2, bbox1.x, bbox1.y2)
	            || i(bbox2, bbox1.x2, bbox1.y2)
	            || i(bbox1, bbox2.x, bbox2.y)
	            || i(bbox1, bbox2.x2, bbox2.y)
	            || i(bbox1, bbox2.x, bbox2.y2)
	            || i(bbox1, bbox2.x2, bbox2.y2)
	            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
	            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
	    };
	    function base3(t, p1, p2, p3, p4) {
	        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
	            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
	        return t * t2 - 3 * p1 + 3 * p2;
	    }
	    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
	        if (z == null) {
	            z = 1;
	        }
	        z = z > 1 ? 1 : z < 0 ? 0 : z;
	        var z2 = z / 2,
	            n = 12,
	            Tvalues = [-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],
	            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
	            sum = 0;
	        for (var i = 0; i < n; i++) {
	            var ct = z2 * Tvalues[i] + z2,
	                xbase = base3(ct, x1, x2, x3, x4),
	                ybase = base3(ct, y1, y2, y3, y4),
	                comb = xbase * xbase + ybase * ybase;
	            sum += Cvalues[i] * math.sqrt(comb);
	        }
	        return z2 * sum;
	    }
	    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
	        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
	            return;
	        }
	        var t = 1,
	            step = t / 2,
	            t2 = t - step,
	            l,
	            e = .01;
	        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        while (abs(l - ll) > e) {
	            step /= 2;
	            t2 += (l < ll ? 1 : -1) * step;
	            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        }
	        return t2;
	    }
	    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	        if (
	            mmax(x1, x2) < mmin(x3, x4) ||
	            mmin(x1, x2) > mmax(x3, x4) ||
	            mmax(y1, y2) < mmin(y3, y4) ||
	            mmin(y1, y2) > mmax(y3, y4)
	        ) {
	            return;
	        }
	        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
	            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
	            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	        if (!denominator) {
	            return;
	        }
	        var px = nx / denominator,
	            py = ny / denominator,
	            px2 = +px.toFixed(2),
	            py2 = +py.toFixed(2);
	        if (
	            px2 < +mmin(x1, x2).toFixed(2) ||
	            px2 > +mmax(x1, x2).toFixed(2) ||
	            px2 < +mmin(x3, x4).toFixed(2) ||
	            px2 > +mmax(x3, x4).toFixed(2) ||
	            py2 < +mmin(y1, y2).toFixed(2) ||
	            py2 > +mmax(y1, y2).toFixed(2) ||
	            py2 < +mmin(y3, y4).toFixed(2) ||
	            py2 > +mmax(y3, y4).toFixed(2)
	        ) {
	            return;
	        }
	        return {x: px, y: py};
	    }
	    function inter(bez1, bez2) {
	        return interHelper(bez1, bez2);
	    }
	    function interCount(bez1, bez2) {
	        return interHelper(bez1, bez2, 1);
	    }
	    function interHelper(bez1, bez2, justCount) {
	        var bbox1 = R.bezierBBox(bez1),
	            bbox2 = R.bezierBBox(bez2);
	        if (!R.isBBoxIntersect(bbox1, bbox2)) {
	            return justCount ? 0 : [];
	        }
	        var l1 = bezlen.apply(0, bez1),
	            l2 = bezlen.apply(0, bez2),
	            n1 = mmax(~~(l1 / 5), 1),
	            n2 = mmax(~~(l2 / 5), 1),
	            dots1 = [],
	            dots2 = [],
	            xy = {},
	            res = justCount ? 0 : [];
	        for (var i = 0; i < n1 + 1; i++) {
	            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
	            dots1.push({x: p.x, y: p.y, t: i / n1});
	        }
	        for (i = 0; i < n2 + 1; i++) {
	            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
	            dots2.push({x: p.x, y: p.y, t: i / n2});
	        }
	        for (i = 0; i < n1; i++) {
	            for (var j = 0; j < n2; j++) {
	                var di = dots1[i],
	                    di1 = dots1[i + 1],
	                    dj = dots2[j],
	                    dj1 = dots2[j + 1],
	                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
	                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
	                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
	                if (is) {
	                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
	                        continue;
	                    }
	                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
	                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
	                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
	                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
	                        if (justCount) {
	                            res++;
	                        } else {
	                            res.push({
	                                x: is.x,
	                                y: is.y,
	                                t1: mmin(t1, 1),
	                                t2: mmin(t2, 1)
	                            });
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.pathIntersection
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds intersections of two paths
	     > Parameters
	     - path1 (string) path string
	     - path2 (string) path string
	     = (array) dots of intersection
	     o [
	     o     {
	     o         x: (number) x coordinate of the point
	     o         y: (number) y coordinate of the point
	     o         t1: (number) t value for segment of path1
	     o         t2: (number) t value for segment of path2
	     o         segment1: (number) order number for segment of path1
	     o         segment2: (number) order number for segment of path2
	     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
	     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
	     o     }
	     o ]
	    \*/
	    R.pathIntersection = function (path1, path2) {
	        return interPathHelper(path1, path2);
	    };
	    R.pathIntersectionNumber = function (path1, path2) {
	        return interPathHelper(path1, path2, 1);
	    };
	    function interPathHelper(path1, path2, justCount) {
	        path1 = R._path2curve(path1);
	        path2 = R._path2curve(path2);
	        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
	            res = justCount ? 0 : [];
	        for (var i = 0, ii = path1.length; i < ii; i++) {
	            var pi = path1[i];
	            if (pi[0] == "M") {
	                x1 = x1m = pi[1];
	                y1 = y1m = pi[2];
	            } else {
	                if (pi[0] == "C") {
	                    bez1 = [x1, y1].concat(pi.slice(1));
	                    x1 = bez1[6];
	                    y1 = bez1[7];
	                } else {
	                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
	                    x1 = x1m;
	                    y1 = y1m;
	                }
	                for (var j = 0, jj = path2.length; j < jj; j++) {
	                    var pj = path2[j];
	                    if (pj[0] == "M") {
	                        x2 = x2m = pj[1];
	                        y2 = y2m = pj[2];
	                    } else {
	                        if (pj[0] == "C") {
	                            bez2 = [x2, y2].concat(pj.slice(1));
	                            x2 = bez2[6];
	                            y2 = bez2[7];
	                        } else {
	                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
	                            x2 = x2m;
	                            y2 = y2m;
	                        }
	                        var intr = interHelper(bez1, bez2, justCount);
	                        if (justCount) {
	                            res += intr;
	                        } else {
	                            for (var k = 0, kk = intr.length; k < kk; k++) {
	                                intr[k].segment1 = i;
	                                intr[k].segment2 = j;
	                                intr[k].bez1 = bez1;
	                                intr[k].bez2 = bez2;
	                            }
	                            res = res.concat(intr);
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.isPointInsidePath
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside a given closed path.
	     > Parameters
	     - path (string) path string
	     - x (number) x of the point
	     - y (number) y of the point
	     = (boolean) true, if point is inside the path
	    \*/
	    R.isPointInsidePath = function (path, x, y) {
	        var bbox = R.pathBBox(path);
	        return R.isPointInsideBBox(bbox, x, y) &&
	               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
	    };
	    R._removedFactory = function (methodname) {
	        return function () {
	            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object", methodname);
	        };
	    };
	    /*\
	     * Raphael.pathBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given path
	     > Parameters
	     - path (string) path string
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box
	     o     y: (number) y coordinate of the left top point of the box
	     o     x2: (number) x coordinate of the right bottom point of the box
	     o     y2: (number) y coordinate of the right bottom point of the box
	     o     width: (number) width of the box
	     o     height: (number) height of the box
	     o     cx: (number) x coordinate of the center of the box
	     o     cy: (number) y coordinate of the center of the box
	     o }
	    \*/
	    var pathDimensions = R.pathBBox = function (path) {
	        var pth = paths(path);
	        if (pth.bbox) {
	            return clone(pth.bbox);
	        }
	        if (!path) {
	            return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
	        }
	        path = path2curve(path);
	        var x = 0,
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X.push(x);
	                Y.push(y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X[concat](dim.min.x, dim.max.x);
	                Y = Y[concat](dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin[apply](0, X),
	            ymin = mmin[apply](0, Y),
	            xmax = mmax[apply](0, X),
	            ymax = mmax[apply](0, Y),
	            width = xmax - xmin,
	            height = ymax - ymin,
	                bb = {
	                x: xmin,
	                y: ymin,
	                x2: xmax,
	                y2: ymax,
	                width: width,
	                height: height,
	                cx: xmin + width / 2,
	                cy: ymin + height / 2
	            };
	        pth.bbox = clone(bb);
	        return bb;
	    },
	        pathClone = function (pathArray) {
	            var res = clone(pathArray);
	            res.toString = R._path2string;
	            return res;
	        },
	        pathToRelative = R._pathToRelative = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.rel) {
	                return pathClone(pth.rel);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = pathArray[0][1];
	                y = pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res.push(["M", x, y]);
	            }
	            for (var i = start, ii = pathArray.length; i < ii; i++) {
	                var r = res[i] = [],
	                    pa = pathArray[i];
	                if (pa[0] != lowerCase.call(pa[0])) {
	                    r[0] = lowerCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "a":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] - x).toFixed(3);
	                            r[7] = +(pa[7] - y).toFixed(3);
	                            break;
	                        case "v":
	                            r[1] = +(pa[1] - y).toFixed(3);
	                            break;
	                        case "m":
	                            mx = pa[1];
	                            my = pa[2];
	                        default:
	                            for (var j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                            }
	                    }
	                } else {
	                    r = res[i] = [];
	                    if (pa[0] == "m") {
	                        mx = pa[1] + x;
	                        my = pa[2] + y;
	                    }
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        res[i][k] = pa[k];
	                    }
	                }
	                var len = res[i].length;
	                switch (res[i][0]) {
	                    case "z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "h":
	                        x += +res[i][len - 1];
	                        break;
	                    case "v":
	                        y += +res[i][len - 1];
	                        break;
	                    default:
	                        x += +res[i][len - 2];
	                        y += +res[i][len - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.rel = pathClone(res);
	            return res;
	        },
	        pathToAbsolute = R._pathToAbsolute = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.abs) {
	                return pathClone(pth.abs);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            if (!pathArray || !pathArray.length) {
	                return [["M", 0, 0]];
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = +pathArray[0][1];
	                y = +pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res[0] = ["M", x, y];
	            }
	            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
	            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
	                res.push(r = []);
	                pa = pathArray[i];
	                if (pa[0] != upperCase.call(pa[0])) {
	                    r[0] = upperCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "A":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] + x);
	                            r[7] = +(pa[7] + y);
	                            break;
	                        case "V":
	                            r[1] = +pa[1] + y;
	                            break;
	                        case "H":
	                            r[1] = +pa[1] + x;
	                            break;
	                        case "R":
	                            var dots = [x, y][concat](pa.slice(1));
	                            for (var j = 2, jj = dots.length; j < jj; j++) {
	                                dots[j] = +dots[j] + x;
	                                dots[++j] = +dots[j] + y;
	                            }
	                            res.pop();
	                            res = res[concat](catmullRom2bezier(dots, crz));
	                            break;
	                        case "M":
	                            mx = +pa[1] + x;
	                            my = +pa[2] + y;
	                        default:
	                            for (j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +pa[j] + ((j % 2) ? x : y);
	                            }
	                    }
	                } else if (pa[0] == "R") {
	                    dots = [x, y][concat](pa.slice(1));
	                    res.pop();
	                    res = res[concat](catmullRom2bezier(dots, crz));
	                    r = ["R"][concat](pa.slice(-2));
	                } else {
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        r[k] = pa[k];
	                    }
	                }
	                switch (r[0]) {
	                    case "Z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = r[r.length - 2];
	                        my = r[r.length - 1];
	                    default:
	                        x = r[r.length - 2];
	                        y = r[r.length - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.abs = pathClone(res);
	            return res;
	        },
	        l2c = function (x1, y1, x2, y2) {
	            return [x1, y1, x2, y2, x2, y2];
	        },
	        q2c = function (x1, y1, ax, ay, x2, y2) {
	            var _13 = 1 / 3,
	                _23 = 2 / 3;
	            return [
	                    _13 * x1 + _23 * ax,
	                    _13 * y1 + _23 * ay,
	                    _13 * x2 + _23 * ax,
	                    _13 * y2 + _23 * ay,
	                    x2,
	                    y2
	                ];
	        },
	        a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	            // for more information of where this math came from visit:
	            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	            var _120 = PI * 120 / 180,
	                rad = PI / 180 * (+angle || 0),
	                res = [],
	                xy,
	                rotate = cacher(function (x, y, rad) {
	                    var X = x * math.cos(rad) - y * math.sin(rad),
	                        Y = x * math.sin(rad) + y * math.cos(rad);
	                    return {x: X, y: Y};
	                });
	            if (!recursive) {
	                xy = rotate(x1, y1, -rad);
	                x1 = xy.x;
	                y1 = xy.y;
	                xy = rotate(x2, y2, -rad);
	                x2 = xy.x;
	                y2 = xy.y;
	                var cos = math.cos(PI / 180 * angle),
	                    sin = math.sin(PI / 180 * angle),
	                    x = (x1 - x2) / 2,
	                    y = (y1 - y2) / 2;
	                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	                if (h > 1) {
	                    h = math.sqrt(h);
	                    rx = h * rx;
	                    ry = h * ry;
	                }
	                var rx2 = rx * rx,
	                    ry2 = ry * ry,
	                    k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                        math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                    cx = k * rx * y / ry + (x1 + x2) / 2,
	                    cy = k * -ry * x / rx + (y1 + y2) / 2,
	                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	                f1 = x1 < cx ? PI - f1 : f1;
	                f2 = x2 < cx ? PI - f2 : f2;
	                f1 < 0 && (f1 = PI * 2 + f1);
	                f2 < 0 && (f2 = PI * 2 + f2);
	                if (sweep_flag && f1 > f2) {
	                    f1 = f1 - PI * 2;
	                }
	                if (!sweep_flag && f2 > f1) {
	                    f2 = f2 - PI * 2;
	                }
	            } else {
	                f1 = recursive[0];
	                f2 = recursive[1];
	                cx = recursive[2];
	                cy = recursive[3];
	            }
	            var df = f2 - f1;
	            if (abs(df) > _120) {
	                var f2old = f2,
	                    x2old = x2,
	                    y2old = y2;
	                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	                x2 = cx + rx * math.cos(f2);
	                y2 = cy + ry * math.sin(f2);
	                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	            }
	            df = f2 - f1;
	            var c1 = math.cos(f1),
	                s1 = math.sin(f1),
	                c2 = math.cos(f2),
	                s2 = math.sin(f2),
	                t = math.tan(df / 4),
	                hx = 4 / 3 * rx * t,
	                hy = 4 / 3 * ry * t,
	                m1 = [x1, y1],
	                m2 = [x1 + hx * s1, y1 - hy * c1],
	                m3 = [x2 + hx * s2, y2 - hy * c2],
	                m4 = [x2, y2];
	            m2[0] = 2 * m1[0] - m2[0];
	            m2[1] = 2 * m1[1] - m2[1];
	            if (recursive) {
	                return [m2, m3, m4][concat](res);
	            } else {
	                res = [m2, m3, m4][concat](res).join()[split](",");
	                var newres = [];
	                for (var i = 0, ii = res.length; i < ii; i++) {
	                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	                }
	                return newres;
	            }
	        },
	        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	            var t1 = 1 - t;
	            return {
	                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	            };
	        },
	        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
	                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
	                c = p1x - c1x,
	                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                y = [p1y, p2y],
	                x = [p1x, p2x],
	                dot;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
	            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
	            c = p1y - c1y;
	            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            return {
	                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
	                max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
	            };
	        }),
	        path2curve = R._path2curve = cacher(function (path, path2) {
	            var pth = !path2 && paths(path);
	            if (!path2 && pth.curve) {
	                return pathClone(pth.curve);
	            }
	            var p = pathToAbsolute(path),
	                p2 = path2 && pathToAbsolute(path2),
	                attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                processPath = function (path, d, pcom) {
	                    var nx, ny, tq = {T:1, Q:1};
	                    if (!path) {
	                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                    }
	                    !(path[0] in tq) && (d.qx = d.qy = null);
	                    switch (path[0]) {
	                        case "M":
	                            d.X = path[1];
	                            d.Y = path[2];
	                            break;
	                        case "A":
	                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
	                            break;
	                        case "S":
	                            if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
	                                nx = d.x * 2 - d.bx;          // And reflect the previous
	                                ny = d.y * 2 - d.by;          // command's control point relative to the current point.
	                            }
	                            else {                            // or some else or nothing
	                                nx = d.x;
	                                ny = d.y;
	                            }
	                            path = ["C", nx, ny][concat](path.slice(1));
	                            break;
	                        case "T":
	                            if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
	                                d.qx = d.x * 2 - d.qx;        // And make a reflection similar
	                                d.qy = d.y * 2 - d.qy;        // to case "S".
	                            }
	                            else {                            // or something else or nothing
	                                d.qx = d.x;
	                                d.qy = d.y;
	                            }
	                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                            break;
	                        case "Q":
	                            d.qx = path[1];
	                            d.qy = path[2];
	                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                            break;
	                        case "L":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
	                            break;
	                        case "H":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
	                            break;
	                        case "V":
	                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
	                            break;
	                        case "Z":
	                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
	                            break;
	                    }
	                    return path;
	                },
	                fixArc = function (pp, i) {
	                    if (pp[i].length > 7) {
	                        pp[i].shift();
	                        var pi = pp[i];
	                        while (pi.length) {
	                            pcoms1[i]="A"; // if created multiple C:s, their original seg is saved
	                            p2 && (pcoms2[i]="A"); // the same as above
	                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
	                        }
	                        pp.splice(i, 1);
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                fixM = function (path1, path2, a1, a2, i) {
	                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                        path2.splice(i, 0, ["M", a2.x, a2.y]);
	                        a1.bx = 0;
	                        a1.by = 0;
	                        a1.x = path1[i][1];
	                        a1.y = path1[i][2];
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                pcoms1 = [], // path commands of original path p
	                pcoms2 = [], // path commands of original path p2
	                pfirst = "", // temporary holder for original path command
	                pcom = ""; // holder for previous path command of original path
	            for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
	                p[i] && (pfirst = p[i][0]); // save current path command

	                if (pfirst != "C") // C is not saved yet, because it may be result of conversion
	                {
	                    pcoms1[i] = pfirst; // Save current path command
	                    i && ( pcom = pcoms1[i-1]); // Get previous path command pcom
	                }
	                p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

	                if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
	                // which may produce multiple C:s
	                // so we have to make sure that C is also C in original path

	                fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

	                if (p2) { // the same procedures is done to p2
	                    p2[i] && (pfirst = p2[i][0]);
	                    if (pfirst != "C")
	                    {
	                        pcoms2[i] = pfirst;
	                        i && (pcom = pcoms2[i-1]);
	                    }
	                    p2[i] = processPath(p2[i], attrs2, pcom);

	                    if (pcoms2[i]!="A" && pfirst=="C") pcoms2[i]="C";

	                    fixArc(p2, i);
	                }
	                fixM(p, p2, attrs, attrs2, i);
	                fixM(p2, p, attrs2, attrs, i);
	                var seg = p[i],
	                    seg2 = p2 && p2[i],
	                    seglen = seg.length,
	                    seg2len = p2 && seg2.length;
	                attrs.x = seg[seglen - 2];
	                attrs.y = seg[seglen - 1];
	                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	                attrs2.x = p2 && seg2[seg2len - 2];
	                attrs2.y = p2 && seg2[seg2len - 1];
	            }
	            if (!p2) {
	                pth.curve = pathClone(p);
	            }
	            return p2 ? [p, p2] : p;
	        }, null, pathClone),
	        parseDots = R._parseDots = cacher(function (gradient) {
	            var dots = [];
	            for (var i = 0, ii = gradient.length; i < ii; i++) {
	                var dot = {},
	                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
	                dot.color = R.getRGB(par[1]);
	                if (dot.color.error) {
	                    return null;
	                }
	                dot.opacity = dot.color.opacity;
	                dot.color = dot.color.hex;
	                par[2] && (dot.offset = par[2] + "%");
	                dots.push(dot);
	            }
	            for (i = 1, ii = dots.length - 1; i < ii; i++) {
	                if (!dots[i].offset) {
	                    var start = toFloat(dots[i - 1].offset || 0),
	                        end = 0;
	                    for (var j = i + 1; j < ii; j++) {
	                        if (dots[j].offset) {
	                            end = dots[j].offset;
	                            break;
	                        }
	                    }
	                    if (!end) {
	                        end = 100;
	                        j = ii;
	                    }
	                    end = toFloat(end);
	                    var d = (end - start) / (j - i + 1);
	                    for (; i < j; i++) {
	                        start += d;
	                        dots[i].offset = start + "%";
	                    }
	                }
	            }
	            return dots;
	        }),
	        tear = R._tear = function (el, paper) {
	            el == paper.top && (paper.top = el.prev);
	            el == paper.bottom && (paper.bottom = el.next);
	            el.next && (el.next.prev = el.prev);
	            el.prev && (el.prev.next = el.next);
	        },
	        tofront = R._tofront = function (el, paper) {
	            if (paper.top === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = null;
	            el.prev = paper.top;
	            paper.top.next = el;
	            paper.top = el;
	        },
	        toback = R._toback = function (el, paper) {
	            if (paper.bottom === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = paper.bottom;
	            el.prev = null;
	            paper.bottom.prev = el;
	            paper.bottom = el;
	        },
	        insertafter = R._insertafter = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.top && (paper.top = el);
	            el2.next && (el2.next.prev = el);
	            el.next = el2.next;
	            el.prev = el2;
	            el2.next = el;
	        },
	        insertbefore = R._insertbefore = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.bottom && (paper.bottom = el);
	            el2.prev && (el2.prev.next = el);
	            el.prev = el2.prev;
	            el2.prev = el;
	            el.next = el2;
	        },
	        /*\
	         * Raphael.toMatrix
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns matrix of transformations applied to a given path
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (object) @Matrix
	        \*/
	        toMatrix = R.toMatrix = function (path, transform) {
	            var bb = pathDimensions(path),
	                el = {
	                    _: {
	                        transform: E
	                    },
	                    getBBox: function () {
	                        return bb;
	                    }
	                };
	            extractTransform(el, transform);
	            return el.matrix;
	        },
	        /*\
	         * Raphael.transformPath
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns path transformed by a given transformation
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (string) path
	        \*/
	        transformPath = R.transformPath = function (path, transform) {
	            return mapPath(path, toMatrix(path, transform));
	        },
	        extractTransform = R._extractTransform = function (el, tstr) {
	            if (tstr == null) {
	                return el._.transform;
	            }
	            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
	            var tdata = R.parseTransformString(tstr),
	                deg = 0,
	                dx = 0,
	                dy = 0,
	                sx = 1,
	                sy = 1,
	                _ = el._,
	                m = new Matrix;
	            _.transform = tdata || [];
	            if (tdata) {
	                for (var i = 0, ii = tdata.length; i < ii; i++) {
	                    var t = tdata[i],
	                        tlen = t.length,
	                        command = Str(t[0]).toLowerCase(),
	                        absolute = t[0] != command,
	                        inver = absolute ? m.invert() : 0,
	                        x1,
	                        y1,
	                        x2,
	                        y2,
	                        bb;
	                    if (command == "t" && tlen == 3) {
	                        if (absolute) {
	                            x1 = inver.x(0, 0);
	                            y1 = inver.y(0, 0);
	                            x2 = inver.x(t[1], t[2]);
	                            y2 = inver.y(t[1], t[2]);
	                            m.translate(x2 - x1, y2 - y1);
	                        } else {
	                            m.translate(t[1], t[2]);
	                        }
	                    } else if (command == "r") {
	                        if (tlen == 2) {
	                            bb = bb || el.getBBox(1);
	                            m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            deg += t[1];
	                        } else if (tlen == 4) {
	                            if (absolute) {
	                                x2 = inver.x(t[2], t[3]);
	                                y2 = inver.y(t[2], t[3]);
	                                m.rotate(t[1], x2, y2);
	                            } else {
	                                m.rotate(t[1], t[2], t[3]);
	                            }
	                            deg += t[1];
	                        }
	                    } else if (command == "s") {
	                        if (tlen == 2 || tlen == 3) {
	                            bb = bb || el.getBBox(1);
	                            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            sx *= t[1];
	                            sy *= t[tlen - 1];
	                        } else if (tlen == 5) {
	                            if (absolute) {
	                                x2 = inver.x(t[3], t[4]);
	                                y2 = inver.y(t[3], t[4]);
	                                m.scale(t[1], t[2], x2, y2);
	                            } else {
	                                m.scale(t[1], t[2], t[3], t[4]);
	                            }
	                            sx *= t[1];
	                            sy *= t[2];
	                        }
	                    } else if (command == "m" && tlen == 7) {
	                        m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
	                    }
	                    _.dirtyT = 1;
	                    el.matrix = m;
	                }
	            }

	            /*\
	             * Element.matrix
	             [ property (object) ]
	             **
	             * Keeps @Matrix object, which represents element transformation
	            \*/
	            el.matrix = m;

	            _.sx = sx;
	            _.sy = sy;
	            _.deg = deg;
	            _.dx = dx = m.e;
	            _.dy = dy = m.f;

	            if (sx == 1 && sy == 1 && !deg && _.bbox) {
	                _.bbox.x += +dx;
	                _.bbox.y += +dy;
	            } else {
	                _.dirtyT = 1;
	            }
	        },
	        getEmpty = function (item) {
	            var l = item[0];
	            switch (l.toLowerCase()) {
	                case "t": return [l, 0, 0];
	                case "m": return [l, 1, 0, 0, 1, 0, 0];
	                case "r": if (item.length == 4) {
	                    return [l, 0, item[2], item[3]];
	                } else {
	                    return [l, 0];
	                }
	                case "s": if (item.length == 5) {
	                    return [l, 1, 1, item[3], item[4]];
	                } else if (item.length == 3) {
	                    return [l, 1, 1];
	                } else {
	                    return [l, 1];
	                }
	            }
	        },
	        equaliseTransform = R._equaliseTransform = function (t1, t2) {
	            t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
	            t1 = R.parseTransformString(t1) || [];
	            t2 = R.parseTransformString(t2) || [];
	            var maxlength = mmax(t1.length, t2.length),
	                from = [],
	                to = [],
	                i = 0, j, jj,
	                tt1, tt2;
	            for (; i < maxlength; i++) {
	                tt1 = t1[i] || getEmpty(t2[i]);
	                tt2 = t2[i] || getEmpty(tt1);
	                if ((tt1[0] != tt2[0]) ||
	                    (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
	                    (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
	                    ) {
	                    return;
	                }
	                from[i] = [];
	                to[i] = [];
	                for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
	                    j in tt1 && (from[i][j] = tt1[j]);
	                    j in tt2 && (to[i][j] = tt2[j]);
	                }
	            }
	            return {
	                from: from,
	                to: to
	            };
	        };
	    R._getContainer = function (x, y, w, h) {
	        var container;
	        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
	        if (container == null) {
	            return;
	        }
	        if (container.tagName) {
	            if (y == null) {
	                return {
	                    container: container,
	                    width: container.style.pixelWidth || container.offsetWidth,
	                    height: container.style.pixelHeight || container.offsetHeight
	                };
	            } else {
	                return {
	                    container: container,
	                    width: y,
	                    height: w
	                };
	            }
	        }
	        return {
	            container: 1,
	            x: x,
	            y: y,
	            width: w,
	            height: h
	        };
	    };
	    /*\
	     * Raphael.pathToRelative
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to relative form
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.pathToRelative = pathToRelative;
	    R._engine = {};
	    /*\
	     * Raphael.path2curve
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to a new path where all segments are cubic bezier curves.
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.path2curve = path2curve;
	    /*\
	     * Raphael.matrix
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns matrix based on given parameters.
	     > Parameters
	     - a (number)
	     - b (number)
	     - c (number)
	     - d (number)
	     - e (number)
	     - f (number)
	     = (object) @Matrix
	    \*/
	    R.matrix = function (a, b, c, d, e, f) {
	        return new Matrix(a, b, c, d, e, f);
	    };
	    function Matrix(a, b, c, d, e, f) {
	        if (a != null) {
	            this.a = +a;
	            this.b = +b;
	            this.c = +c;
	            this.d = +d;
	            this.e = +e;
	            this.f = +f;
	        } else {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.e = 0;
	            this.f = 0;
	        }
	    }
	    (function (matrixproto) {
	        /*\
	         * Matrix.add
	         [ method ]
	         **
	         * Adds given matrix to existing one.
	         > Parameters
	         - a (number)
	         - b (number)
	         - c (number)
	         - d (number)
	         - e (number)
	         - f (number)
	         or
	         - matrix (object) @Matrix
	        \*/
	        matrixproto.add = function (a, b, c, d, e, f) {
	            var out = [[], [], []],
	                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
	                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
	                x, y, z, res;

	            if (a && a instanceof Matrix) {
	                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
	            }

	            for (x = 0; x < 3; x++) {
	                for (y = 0; y < 3; y++) {
	                    res = 0;
	                    for (z = 0; z < 3; z++) {
	                        res += m[x][z] * matrix[z][y];
	                    }
	                    out[x][y] = res;
	                }
	            }
	            this.a = out[0][0];
	            this.b = out[1][0];
	            this.c = out[0][1];
	            this.d = out[1][1];
	            this.e = out[0][2];
	            this.f = out[1][2];
	        };
	        /*\
	         * Matrix.invert
	         [ method ]
	         **
	         * Returns inverted version of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.invert = function () {
	            var me = this,
	                x = me.a * me.d - me.b * me.c;
	            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
	        };
	        /*\
	         * Matrix.clone
	         [ method ]
	         **
	         * Returns copy of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.clone = function () {
	            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
	        };
	        /*\
	         * Matrix.translate
	         [ method ]
	         **
	         * Translate the matrix
	         > Parameters
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.translate = function (x, y) {
	            this.add(1, 0, 0, 1, x, y);
	        };
	        /*\
	         * Matrix.scale
	         [ method ]
	         **
	         * Scales the matrix
	         > Parameters
	         - x (number)
	         - y (number) #optional
	         - cx (number) #optional
	         - cy (number) #optional
	        \*/
	        matrixproto.scale = function (x, y, cx, cy) {
	            y == null && (y = x);
	            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
	            this.add(x, 0, 0, y, 0, 0);
	            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
	        };
	        /*\
	         * Matrix.rotate
	         [ method ]
	         **
	         * Rotates the matrix
	         > Parameters
	         - a (number)
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.rotate = function (a, x, y) {
	            a = R.rad(a);
	            x = x || 0;
	            y = y || 0;
	            var cos = +math.cos(a).toFixed(9),
	                sin = +math.sin(a).toFixed(9);
	            this.add(cos, sin, -sin, cos, x, y);
	            this.add(1, 0, 0, 1, -x, -y);
	        };
	        /*\
	         * Matrix.x
	         [ method ]
	         **
	         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) x
	        \*/
	        matrixproto.x = function (x, y) {
	            return x * this.a + y * this.c + this.e;
	        };
	        /*\
	         * Matrix.y
	         [ method ]
	         **
	         * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) y
	        \*/
	        matrixproto.y = function (x, y) {
	            return x * this.b + y * this.d + this.f;
	        };
	        matrixproto.get = function (i) {
	            return +this[Str.fromCharCode(97 + i)].toFixed(4);
	        };
	        matrixproto.toString = function () {
	            return R.svg ?
	                "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" :
	                [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
	        };
	        matrixproto.toFilter = function () {
	            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) +
	                ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +
	                ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
	        };
	        matrixproto.offset = function () {
	            return [this.e.toFixed(4), this.f.toFixed(4)];
	        };
	        function norm(a) {
	            return a[0] * a[0] + a[1] * a[1];
	        }
	        function normalize(a) {
	            var mag = math.sqrt(norm(a));
	            a[0] && (a[0] /= mag);
	            a[1] && (a[1] /= mag);
	        }
	        /*\
	         * Matrix.split
	         [ method ]
	         **
	         * Splits matrix into primitive transformations
	         = (object) in format:
	         o dx (number) translation by x
	         o dy (number) translation by y
	         o scalex (number) scale by x
	         o scaley (number) scale by y
	         o shear (number) shear
	         o rotate (number) rotation in deg
	         o isSimple (boolean) could it be represented via simple transformations
	        \*/
	        matrixproto.split = function () {
	            var out = {};
	            // translation
	            out.dx = this.e;
	            out.dy = this.f;

	            // scale and shear
	            var row = [[this.a, this.c], [this.b, this.d]];
	            out.scalex = math.sqrt(norm(row[0]));
	            normalize(row[0]);

	            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
	            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

	            out.scaley = math.sqrt(norm(row[1]));
	            normalize(row[1]);
	            out.shear /= out.scaley;

	            // rotation
	            var sin = -row[0][1],
	                cos = row[1][1];
	            if (cos < 0) {
	                out.rotate = R.deg(math.acos(cos));
	                if (sin < 0) {
	                    out.rotate = 360 - out.rotate;
	                }
	            } else {
	                out.rotate = R.deg(math.asin(sin));
	            }

	            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
	            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
	            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
	            return out;
	        };
	        /*\
	         * Matrix.toTransformString
	         [ method ]
	         **
	         * Return transform string that represents given matrix
	         = (string) transform string
	        \*/
	        matrixproto.toTransformString = function (shorter) {
	            var s = shorter || this[split]();
	            if (s.isSimple) {
	                s.scalex = +s.scalex.toFixed(4);
	                s.scaley = +s.scaley.toFixed(4);
	                s.rotate = +s.rotate.toFixed(4);
	                return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) +
	                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
	                        (s.rotate ? "r" + [s.rotate, 0, 0] : E);
	            } else {
	                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
	            }
	        };
	    })(Matrix.prototype);

	    var preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    getEventPosition = function (e) {
	        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;

	        return {
	            x: e.clientX + scrollX,
	            y: e.clientY + scrollY
	        };
	    },
	    addEvent = (function () {
	        if (g.doc.addEventListener) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    var pos = getEventPosition(e);
	                    return fn.call(element, e, pos.x, pos.y);
	                };
	                obj.addEventListener(type, f, false);

	                if (supportsTouch && touchMap[type]) {
	                    var _f = function (e) {
	                        var pos = getEventPosition(e),
	                            olde = e;

	                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                            if (e.targetTouches[i].target == obj) {
	                                e = e.targetTouches[i];
	                                e.originalEvent = olde;
	                                e.preventDefault = preventTouch;
	                                e.stopPropagation = stopTouch;
	                                break;
	                            }
	                        }

	                        return fn.call(element, e, pos.x, pos.y);
	                    };
	                    obj.addEventListener(touchMap[type], _f, false);
	                }

	                return function () {
	                    obj.removeEventListener(type, f, false);

	                    if (supportsTouch && touchMap[type])
	                        obj.removeEventListener(touchMap[type], _f, false);

	                    return true;
	                };
	            };
	        } else if (g.doc.attachEvent) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    e = e || g.win.event;
	                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	                        x = e.clientX + scrollX,
	                        y = e.clientY + scrollY;
	                    e.preventDefault = e.preventDefault || preventDefault;
	                    e.stopPropagation = e.stopPropagation || stopPropagation;
	                    return fn.call(element, e, x, y);
	                };
	                obj.attachEvent("on" + type, f);
	                var detacher = function () {
	                    obj.detachEvent("on" + type, f);
	                    return true;
	                };
	                return detacher;
	            };
	        }
	    })(),
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            var node = dragi.el.node,
	                o,
	                next = node.nextSibling,
	                parent = node.parentNode,
	                display = node.style.display;
	            g.win.opera && parent.removeChild(node);
	            node.style.display = "none";
	            o = dragi.el.paper.getElementByPoint(x, y);
	            node.style.display = display;
	            g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
	            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
	            x += scrollX;
	            y += scrollY;
	            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        R.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	        }
	        drag = [];
	    },
	    /*\
	     * Raphael.el
	     [ property (object) ]
	     **
	     * You can add your own method to elements. This is useful when you want to hack default functionality or
	     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
	     * you can redefine element method at any time. Expending element methods wouldn’t affect set.
	     > Usage
	     | Raphael.el.red = function () {
	     |     this.attr({fill: "#f00"});
	     | };
	     | // then use it
	     | paper.circle(100, 100, 20).red();
	    \*/
	    elproto = R.el = {};
	    /*\
	     * Element.click
	     [ method ]
	     **
	     * Adds event handler for click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unclick
	     [ method ]
	     **
	     * Removes event handler for click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.dblclick
	     [ method ]
	     **
	     * Adds event handler for double click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.undblclick
	     [ method ]
	     **
	     * Removes event handler for double click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousedown
	     [ method ]
	     **
	     * Adds event handler for mousedown for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousedown
	     [ method ]
	     **
	     * Removes event handler for mousedown for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousemove
	     [ method ]
	     **
	     * Adds event handler for mousemove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousemove
	     [ method ]
	     **
	     * Removes event handler for mousemove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseout
	     [ method ]
	     **
	     * Adds event handler for mouseout for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseout
	     [ method ]
	     **
	     * Removes event handler for mouseout for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseover
	     [ method ]
	     **
	     * Adds event handler for mouseover for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseover
	     [ method ]
	     **
	     * Removes event handler for mouseover for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseup
	     [ method ]
	     **
	     * Adds event handler for mouseup for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseup
	     [ method ]
	     **
	     * Removes event handler for mouseup for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchstart
	     [ method ]
	     **
	     * Adds event handler for touchstart for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchstart
	     [ method ]
	     **
	     * Removes event handler for touchstart for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchmove
	     [ method ]
	     **
	     * Adds event handler for touchmove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchmove
	     [ method ]
	     **
	     * Removes event handler for touchmove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchend
	     [ method ]
	     **
	     * Adds event handler for touchend for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchend
	     [ method ]
	     **
	     * Removes event handler for touchend for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchcancel
	     [ method ]
	     **
	     * Adds event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchcancel
	     [ method ]
	     **
	     * Removes event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/
	    for (var i = events.length; i--;) {
	        (function (eventName) {
	            R[eventName] = elproto[eventName] = function (fn, scope) {
	                if (R.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)});
	                }
	                return this;
	            };
	            R["un" + eventName] = elproto["un" + eventName] = function (fn) {
	                var events = this.events || [],
	                    l = events.length;
	                while (l--){
	                    if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
	                        events[l].unbind();
	                        events.splice(l, 1);
	                        !events.length && delete this.events;
	                    }
	                }
	                return this;
	            };
	        })(events[i]);
	    }

	    /*\
	     * Element.data
	     [ method ]
	     **
	     * Adds or retrieves given value associated with given key.
	     **
	     * See also @Element.removeData
	     > Parameters
	     - key (string) key to store data
	     - value (any) #optional value to store
	     = (object) @Element
	     * or, if value is not specified:
	     = (any) value
	     * or, if key and value are not specified:
	     = (object) Key/value pairs for all the data associated with the element.
	     > Usage
	     | for (var i = 0, i < 5, i++) {
	     |     paper.circle(10 + 15 * i, 10, 10)
	     |          .attr({fill: "#000"})
	     |          .data("i", i)
	     |          .click(function () {
	     |             alert(this.data("i"));
	     |          });
	     | }
	    \*/
	    elproto.data = function (key, value) {
	        var data = eldata[this.id] = eldata[this.id] || {};
	        if (arguments.length == 0) {
	            return data;
	        }
	        if (arguments.length == 1) {
	            if (R.is(key, "object")) {
	                for (var i in key) if (key[has](i)) {
	                    this.data(i, key[i]);
	                }
	                return this;
	            }
	            eve("raphael.data.get." + this.id, this, data[key], key);
	            return data[key];
	        }
	        data[key] = value;
	        eve("raphael.data.set." + this.id, this, value, key);
	        return this;
	    };
	    /*\
	     * Element.removeData
	     [ method ]
	     **
	     * Removes value associated with an element by given key.
	     * If key is not provided, removes all the data of the element.
	     > Parameters
	     - key (string) #optional key
	     = (object) @Element
	    \*/
	    elproto.removeData = function (key) {
	        if (key == null) {
	            eldata[this.id] = {};
	        } else {
	            eldata[this.id] && delete eldata[this.id][key];
	        }
	        return this;
	    };
	     /*\
	     * Element.getData
	     [ method ]
	     **
	     * Retrieves the element data
	     = (object) data
	    \*/
	    elproto.getData = function () {
	        return clone(eldata[this.id] || {});
	    };
	    /*\
	     * Element.hover
	     [ method ]
	     **
	     * Adds event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     - icontext (object) #optional context for hover in handler
	     - ocontext (object) #optional context for hover out handler
	     = (object) @Element
	    \*/
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    /*\
	     * Element.unhover
	     [ method ]
	     **
	     * Removes event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     = (object) @Element
	    \*/
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    var draggable = [];
	    /*\
	     * Element.drag
	     [ method ]
	     **
	     * Adds event handlers for drag of the element.
	     > Parameters
	     - onmove (function) handler for moving
	     - onstart (function) handler for drag start
	     - onend (function) handler for drag end
	     - mcontext (object) #optional context for moving handler
	     - scontext (object) #optional context for drag start handler
	     - econtext (object) #optional context for drag end handler
	     * Additionally following `drag` events will be triggered: `drag.start.<id>` on start,
	     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
	     * `drag.over.<id>` will be fired as well.
	     *
	     * Start event and start handler will be called in specified context or in context of the element with following parameters:
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * Move event and move handler will be called in specified context or in context of the element with following parameters:
	     o dx (number) shift by x from the start point
	     o dy (number) shift by y from the start point
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * End event and end handler will be called in specified context or in context of the element with following parameters:
	     o event (object) DOM event object
	     = (object) @Element
	    \*/
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        function start(e) {
	            (e.originalEvent || e).preventDefault();
	            var x = e.clientX,
	                y = e.clientY,
	                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
	            this._drag.id = e.identifier;
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length, touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    this._drag.id = touch.identifier;
	                    if (touch.identifier == this._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        break;
	                    }
	�Ce�}?�� '�d�l�����h��R6�,ʙ��'R�c��!B]8����I�,��r�OG:�U4H�"�&����I �Q�c���Ԅa����5;��ol=�L�hM8�@^�F_�Do�
��B(�1��IUF!66�!�A� C5`�=F�?�\��Ch�h|       0h �1�5�C
��F��cŮ5�|1�5�׍Y"6�� �0ka�H8?�_��m�r1�=c'�P/e�rl�0IB(�'�r���W��SO�wJ$�7&��[���h~��M:����Sm+�,X`;�G��}΃Fy�""�����f.�����j�h�� I@�!�ѐLT'L�`+p	�1 X�����V�(e[��Zr�T�%]� $����)x
��L�v�Nh�ZD���9�oe"��+�\-[��&�j ]�4�A��b�e�e�x�@��_A�%D�(�@B�        �mP[kȁ E d�Ere\^I���+���t$5�5��70ZF5|�LgFX{Ӯ�Q�VXl��Oɺ���)�����sD�,LF<?j|���6��y7]0ְaEtҞ����U�HY��g�n>_�<;�<V���S���5QEpS�s,?��/r� �Fa`V�!Y�I�����P�M�m�QF��e˅X����B������m"���+h'#�P���4P��SB�k������c�q§��V�a���C�P\;����*�Ϊ�1/���#������0�d��4�N0
� ̕�+Ǖ�
D��Kq�X�G �l�j�$��+��Dg�7�.�mOա_w&u��-ե�Q��J�9�5e;m�,�H3h?��L��QH%%�krhf�T�˛�93
�߿w*�;����u�#���^;�M-��&4g��WI���T���*�����'$⣒ңLšf��� -}�Z� ��S@�Q�I�	;Ɩ�eѭ^��pD���Y�;\)-(���k���ޣ*�\��l�P�x�#i�s�����a�1��

g���eˬԩJ�d������=�D�!�h���v�Ҷ1Lm���m��>����µpὥ��}���|�.��dt�Qy�L?�A.���zLS͵.� 3%���@]44թ����^�,�F���糅�F�w�ނ�x�נjR���>
��N�<�뜒n���+݈)f�Ar��Cǐ�|@�p+�
/�D�2�  �����.5h|       �����Bp P�,@L�@-p ��  Y1�� Q`��*�N�$��Y� /��֓Yz��5�>       4 `�y��K   9���U���#F��r���	;K�Cz2��q����e��� �X��$�Z>��q�f6��񚦓c*W�*w  �8)��_�8�
#Qh�����&�PV���Q&q�D
|�A:*({�-�>������C�ߔ>4��Q�ù�h(�4
���F��	S �f6ߊz�zy�L-�B���X~B�]ԩ�V���	��WWY���xK�)~r�N��D0��.��F&��7�~G��r��"T��(Q���;ZO�F֣��+m�3��h�#�-x�b�;��B�� �v�,�}���eF8��V�B��+��,��u8)f�D�����g
3.��d7yE񝸱 ,]�s$� .����W�2E��u�Z�df���Ї���. �!k����-n��2=6�6�Ƒ��^��Ɯ/1$���F+!�@�q��mĊpm��~Et�C�3��N������'8�yG�sD���~BB���~�����ryWm6�b��i�xу���ړ�F�}'�GF�fJZx��k\�HK���ј]��p�y����t*3��p�<$��ݲ�/QF'�r�$A�<8�Ƣ�d7l%��W�����1H����'�bTXZd<�Q�X
&8�+��N�<�uz�~P�`��L}��D�h��N6g,�KLEg�_~��	6^q��M �ò����D���P]�O��f��W�6c�k��%��ɔ�
�H&��K/�S�k�0��^�O}N��8N��
�h\�]R/����k,�����x�K//Q6ϗ�A�:��2�� ����q;�t�H�h�W��U�ұ��~s�!c�ug�K�����V����W�A�I�L�Hz��7��Swb[��;�	t�%�m�E_���������C��
[ŭ?��!aЩf���]o#\�\O�04>�7qri�K9�0��W��S �w���On4ȁ�7��%6�:�v��+U[2��S�t���:�MZ��EpG�V��L}�D�e�*d�i	�%j	۠����{ ��b�.p����mP�1����v�qdPV_aڗD��TK �BtYޗ@�W�d3��#F�k��"�\��VLd9�-���3��ɎN1J�d}#�4��%D��.��^O|l�u%���_�żY��T`n����d7Y�}w��Զ9J� Xp�R%�xp	E�9��F��~���4oF��sT7���K�|���m�{���ݟ!�W:�ks���/3M/�����7�����ҾŎ�#�NT�:�):Ř&;�sj�K����>=�?(s���&@��p�Í�b?{�a	-m�k��9�x��J����n���ڷ��T�q��?!^�x81+�߸��=H��ݒ��z�W�hcuc�Xc������t��$�p�
�����z?���pʒ��9qY(C'U-�Z�Ӣu�Q��\�m��xW���!��c��
Mc�n
�B�p�Hѿ�ksQ�����P
�����߷�b���E}����[��,���]�8!,?��.$Ǒi�x}=#b��t�`x6��؂Ebvr���*���\�9,!���]u�3��(R�F���$I����~�~Dj�y�	@�@�yY/r-ʴ��T�����\��n6��m�\o��x�\7�٨q9c�T˞�=�C�^!��{�ęR��a٥��٫t$@�B���݀#���w�\*b��8'���hJ���y7��GbWt�CEk�OS�;�:�
���zU�L޳;;��=62��S���
�h

�0b�����F���d�"I���
4��"���,!p�C�* <���s(.�ۿ���O�(#=@�bz�P��(BCi����T��fO��D�ٳ
YE�f6
�av�x�:�Y)��M���shF��}k"��5���
"`��)��b���w���h�P��i�Z ���!<6�����M�^�ܜ�,t奥�.�������
Ǣ�D� 5gk0+��FLh�=7���/ڛ�h5
�P]D{_O�+�<�xQ1~��"�R7�y~K1��3��M?�L��G��&�AmN*e��:n=�J$�>�߁wr���_è-���^�V����$���φ#�I6� �e��Z�����Q�z��!CUE�NĞ��@�[t	�������b�xz��E�C�@c��{�&�n�K�}]H��zg�
��u8ʑ�N��e&Ƿi�RF��V꤫��GA}����I�������"s7v�+�'s
���Yz5Md�^���N�EZ��q�s�r�ɢ�ȕ37�>��l����]f1���g].賓n�B�DK� �="G��3"!};�O9�X�M:Ɔ�8f� ���"����o�،�b}B
�������VL��
~�1�!dE� t�6�=a��b)$�L��m�����W�Ë����j�ȭ��`tn��|�JW&E���9NDwǍ�]������Oﰘv�!5��|���Ҽ���j�_^�������K���S�����1��R���$ȒW�>Q�5�P�n�ǹE������^�L2y����N��Z�5_2]�G�%n���1��!�\���-B1]��0�ʁ֗�> �k��6�8�@:�¤z��4�D��t{���lM� ��q٨��(���K����wBO6{t�M�ZY�	�GK�'�Σ�퉚��M\DF��d��ȀZ�Ԟ�v����n�>��bәM9D�g��
��1�~V^^84�a��BS��5v��x�	�?��G��PC��y\&�A�����PJ{/A�C[&�1��\��ȧ7a����Ϯ�
{�����k	E�,�˼��]��-[ޠ�py��a��o�}6������}[O�V.�cr��/,g�Wh�n�P+F�6'�gBc��Iэ`���)є>�#u
����f9�D�s{�}	X�41�.�%4��v���ۼN|�se��v>!'*�s���#݇E]��Ⱦ}33���(��s��>M�����&�3�9���	<�:1��v�>��i��D���.�x��d9"�'�ܻ�@Q�H�����ޑ{>Wrr�w ����V�>?�`�0mX�N@T��ɠ_���*|U��j�3ϓ��A_��ͨx�!~1^VXg�؎`���I�퓌���ڍ�A��7����l�O[�s�A��=��/ca2&M5᳜3���q�?���i�s1T��w�F��es]���a�>�z�AQ=�p�:켼�G!�=y!�q)���
��
bЕ �
�T+�s[(W:.;����������w@XTWr��&t�f����9eJ�ƃ[�"��m�׾;IP�����
l0g�	e�C��Rl�S�>ŘHFL<�<Q
�v�r�6�O���Av��Y���.]{+{�*<}p�������J*�����!�]�7'���o(�${���\�v�# (%W%y��eo��0���j�@Q:��1��de����Jm��� ��9t��Fw.�-���,7C������F�Ȭ���tB�p����Ѝ�W	y��Ym8]��ɖ8�$�Lnq�sv >�Z>A��&&�>JTHl�Rw'���ֽYz iҀjt��S�9$":7����'-R(r2�M��>iq�� �"Gj�/��7T��c�A���P�BE譤��O��v�;1Y��}��=I��A�m]�w�yQ[T�C-E8�u��2�I�1�.8���z���T{�kn�7�P�a4�Y��������n��y,Y�� U|�¸ì� PL�q��|d��S^/*|_ cQ*�!	9'����30��ȎċK����p�FK$�|È�e�i[�8��8��I,NR�0��[�d�5�x�]K_e<�o�� 8�n5?�>cķgF�ވB<a��%}��1� �����
m$��v5��;�:Oo��%����H�]���,v�9Q��������
WQ4P�\Ү��x�XH�셷�Aߧ� ��. n�!�|���5o�ܴɆ��y񂴼����HIiۉ�\�ҕ%�����Y��N�d_,�F�e%��'�s>3��TK]�h1ATw��c4�r�t�d�:���A��F!����� �m!���I�p�(
u��C���n��́T�R���wGk"T:%���j��'�1��؊�
��+���q��{��7ߡ�������g�Ⱦ��&�
妬� ��*��	�-K�A�������g��"����=X�wkH��j�D���XtK�?���>J9�ET���
��4�K��[o���[k�S�_97�u�x��p	�!|"�:�ת������z�����:!�"�=�a�SZ�nJ A�~bl�.��I!HԆ~T!�mY����nͷ�J#�a9C�§j;�ã�.~8�t����~�w�e�5�f��W�,JF�m"q���!�Oq`KWK�RQ�w<��9�v��e�����V�B�tp&dNF_E�I�	?�j�y��E(h����NE�.�W+����� �c)�V�%v��G�N�u-<q�X��(����Žy�
�p��7�W����e�=�L2d�N(9 ��d*xE�mM@(�a�}�?\��rI]��*�?�ֱ�>��b����>����#X�
����כEd~����BȢ�*���< ��ph[S�X���<�y�f
]���x��Q����I�����.*�|��׶���R˚���-�>�o��H��G����y?K\캃p����U����l���2���Ű_&����`�ral�M.�.�5��Yȹ7c�^�|<"ɥ�G��IG�~�����%C�
]�����w�ۼ'�B�i<e��"�
��C�^�����������Yh���<�	��ۇ6P�{�%l	gB�+IbI�����
(^_SP)y`R�~�����O������]��b�5d�es'd��!���:ǉ�p��X8%R	�pd�H�}������alE=t(�d4"��M1>�����b��+�:cH6�ƨ�A�������e�%V�����[�9�'?V�g�G�*x\/G�B�o��t��Gp���ּP��onWU;��ș�V�`�[H�ŵ\���(�'���l�j���mj�n���H`����&�ߐc�z��pc�P2�Z���I��,������G!ҥh��ŏ�SR���Y?T\ySM�J�'R���}NrD����`b�Cǰ������$ƛj+���1	���S~C+��S�����uDq������}+��v�)�C�c�5q�ν48��]x�@*1U��3M?�g�n�kԾ�
�Z�@���@���Wt�~Mྭ!F��ݫ
��u����ڡ;�Sf�F�hJ���	18�z�#m��x�bh�_q52aԪ���7��pւ\�C��h{&V'��v!V`"��%*Q�3Z��3ޚq��e5����o����r�����Z5��b��S�"y�����ª��3�B�~I��.�_��U��ޖ�����G?[\�r?�T�l�d�$	�#ڹ������'���OW�x�*~`��#49�]+.���)��,�4פ��fl�| ��y�Oc����'�G�X*�w�y�Ke���漧)d{WF��X���8��U�ta��CH��g ��	(boy�n8�)��Z�4S���AG�e,�#�[��$�a]l<>B�$oIO0rROK8�J�Y-Sk���PK��L$��W�v7���er�2���[�&q�O~����	���YPp�֎(-$Kgl\5vȌ��Դ��)sb���FJ}�aӁAr�sz��nUmn_��31�����;2c����a�d����iHǫ1�.����<��
Ȃ�Xp0J�v�C⼣_�(-o�h��kT7�ߖ��F%�GZ��R�;�hZ�v�0�嗖�����H��l�]̟���o�J`�[��4&��ő�XN
:@|�_",�կ�@�P+��*,���}��n��#��'k@ 7���?�>�]�4���P�'���7���g�o+ 9KO��y\O�!Tnt%���
[e_������:�/�v�%���"��3BS���xڪ�<�P��3�^��I���y��5�㎥�}#��&�T��Ӏ�7;16��c���+�jP�M�<~6B�p�_@��x�B�q���\��i��x�nG��-9^
��mr7�h;~R�����?��/u�=�:��r��ѳ�{DP�n*��>����{��~gv�/������!γ"�����q�������� tW6��W�c�5o�"�q�09�!]�},����bϰ��Gԫ�ٓ���j�#�1{�t�k���j]y���d�"�˕�������6�B߬\�\���qi;��fy%7���;�t�����{f�cr�3��� �.o]v�QDkᵷ�Fޔ��*{*������Se�͙�Bt��������4�	������s/iP�a�O<	�\�
�ZΕ�*
��X�}�F�p�8���m���#�#�ԏ�n
�݈G����9`��k�G����v�ν��z�$��a���S`Ҧ�ℓf �C����i�MK�WoMCʇ�L�t� �И�R �B�g=h�lNv(L>�h��PRM��ez�53��d��ߣ46�z[xL�	�8���ce>]��?s�u�l�ev��F�P#�9��U$u��:2o_�pV(��UӀ/;�����~��m�*{W����l0VĖ������T6%����U�G�Y\�8��- ��\�ݗ����,����`(�u��{d��@������DG��b��w�o���P>�c8�Bݬh�d�w7[���+��aD��]�toG�1Y������G?�X4��$�ԍ�W��;�
��G�����J�̽~�ϓ�/r���G?��&����j�D��O�I_��@����4�U�K��}��z�>�p�;��m	���+�dZ�Վlrs�h��0��$A���*����G��l�a�}m�80in�(��1����7�z}�ܽt�"��?�@�iR�;���8������C�蕼��������@��<�q�sf݀͡�U.9���sɴT���]�2hBR[q�yR���#�(l|Ģ����s�B^$k5�E��wk��RP)A�E��5YV-����A;��%�	�|��opE��nTfY��]�.7�0�۰�]௘^)�z1��/^������"�TX� �`�C���4G%?;$��T�RaL�^�v5l��a3*0Zz*-W�l�V}��v㱓�A��b'�1)�g��A
#�7��B��rb!sEJ���"̴A��e�+Z#���%�>�c�4�!N*w�aa3�g�>��{Ȟ��繰6C}�}{�h�����U��������h�5!NhH}>�VR��ص�S�E�+����O��W�&�Ő�ʎ�Y�B�vl&iC/E� {��О��L����9|l5L���r��/el��*���*�����;���[�H����T&qrxHi�Y��N�|O��R���;�<Lg�=��v����Э�;�\�6*�J�����L�8Oxɖ52w4��$�����P������!��&)<Y��
L�7�p?�2!��ې�R�H@�s<�����Q��{8���~r��!�����4
0�>[Y�h����Z�}C%ޅ��"ofWT��
��{(M"O��1Br�GZD)2���G�:DD�`X�B�9J�����J�E0�q�D��[cX��}6��t32r��x��|�[U؇��A��"5=����1	o��1_F�2��]��r9���D�
�4���Qtk�<ΰ����.�,!
�����ѷ{�ի{4�3����K���=�Ӭ)t�/T��
��N���
�~�.��@z�F�t����2*��7��Y! �U����`!�}�P�zx���77��&0)R�kVO؀�I~z��!����P���  ��"%R��f�������Όsz�����FmR�k� Yf�2���2i%�8�^|�?���dHa��8�V�~��f><�ᩙO֗~��:��jz;[0>ی���Mϛ���5q6�Eh	ox7�������r$2cڠ�` ]�<��~`R��o݊����nJ�s(Q�&]��Y�
~��~w��?�ݫ�c}�k��M�Oܧ��;_�=��x���Ci����%��Z�{��B�d��{�cq|��Xq�ƻ��Ǩ5�����`JfL��ΝF��!�*SA9����1�� �P�<�ºm�돃��a���-`�����# ���W�LHQΡ%݌�x��#��̒���@�~tH�~��XC*��J�j��iG��C0 �u���j��Z�����?`F ���ʏ�p�j`��|�J{u��H��mFB�o��L�
���Jg��]Wf���O�e�m��%�_�F���QH<a,�p��
>�}
�~k���H�O0�ˇ����<�M�~h�M2��ʒ��`J�j�ݤ���JO�+�Q�(/��)Ar�ȝ-T?�M�N>�����������/����d��U<��6���J��W��;�������n���ǃ�R�f��%|�dg��!�	B�rW���
V�(aQ!	x
}����ߧ���D���e�{�e �cߗԊ��!���`��#�VN���3�|L�I���(����x,�5T���3O�� WHH�����a՛��'Aq��BU{�fl�0���j(�/�sg��K�u?�>N)�'r&�Z�d�{g%�أ��y�{����J,�8��F��q�-OQ�#����0_���ы�y���o4e���>�"1��;O#��`|N��T:!�J� �i=�	D0#��wip&��蒁�_ug��_�*�kCD3��=!��6Oʁ��Kh4 ��I$��c�) �{�hxEOi{���@�^S�E� 1�O�q��)ȼt��s�ݲ�����ի�?�ּ뭕��t����A����[M��Pp�@�YIԿ]�,�0xP4��`'�`��D
�5L<k?cS/p|�#|b�́�v�2\K����l�43�M*F4����T�\�^��'�������{�=mJ���yZ�1���}/�����fL�&�W��<�2H>@%�3)���U
JC9�T��o��M���V6�<��	�0�u�.r�I�T���]Am�LaO��'� D�,�υ/��(:��8B�t�`e���D�b5��=\|���+J^���I��ZV�1��-�t�����H�o5x�/�GH�����G� �,�;��-�aa."�Ng`U����C�����I(� _�����J�+CZ��0���������3E�Gw �p�4=d{��"��޿����bCc(r�P����d��P�z����g:2Բ�8v���r,��h��#�l�ݓK��\�)\��Y��d�F�Y�{_��B��S����3����(���H���8���=���饆���r���i�lB��DKD:�s���?����;��IV�·�������d�3́�[����c���<P(x�&u��+�h��@���S�V�]`��DW|Ǳ����d��%�۠15�v�6��Rn
P"؈���?�D��%ȼ�#>W6`ýi/B��x�`���m�)�-o���M?�Z
��u��y�qb=~q*Nض�9�{�%�B�����k�@��<�K�ٺ���ȴ�v�s�2<;j�dZ�T�`<�䖺$�u�Z~	
�����ǯ�ݦvwe)�#X��-��
x��Ȁ,5�Q/�p
����O}2��p�dT���0wQxe��1L�J�g�G
(#q�t*~~��*׳t_��$������B{TN��M�(�'�����L֏J�t`�/3�9�1��}s��c�ރzP�SGq�C/���t��Y�!�.�J�H�#�!R|�&�~|�A��,��7�}�E�55�]CI#0�J�?��ۊ�{)�����b����Sy��0�f�YR_�/���Ϭ(�g1?�$!�M8�:����J���כ(�@�a�C[��-lO	�V\;���;��N�l���X���g���x,A���5Ns�sɻ���6ua+�x��s�fw�7�i~���n�W��gqXG&���P��������h�G04��C������zV���
�V*)l����\aJ���p����� U�L��=X�i^�?�4WؒAI��#	���8�C�i#���R�Re�2�
)�2��M�=Qe��N�ܠ"��Jr��U��Ȝ�yuGQ�&��d-}��w�j�n��^a�G���б�ȸ��[��"�
� �sۡ4�b
'�Eų� F�{����q�g8��&_��{�_$���~��4�D!(:�L�	�uo��7Z�#��q��!���j����m��0��w��-Ls#gcX�<I���?�?;?���� Smħ���*����4k�R���0������w4�#A�*VX[��?�/��x�����8
.�����zi}٫ƭ��1;��Us�&&]���M�I!tYq&��e�gѿ.G��������Щ�Eީ	F�_�ۨq!�EF��XuyԬ��k�@��f�`Qu����>��Pyi�C�S���
��SL}��Vo����޵����ĆԘ��.wEXx��D���P����|�YŚjo�Go�L���������ӏ\��ƣ��ҝ�hm�����
#5���F�
�y�ͱ尕yr�� iJ[9��QK���q$q��4�I�����]��:����}�"n���{��)?���-DJі�tEC���� +^���w2��j�2oF~ctn���`��Tir0�2F��}	fڷ�>���!w��E�}m�1g��j�r�L3�h�������X��3t�Gd�ZN����Hր�gD9m���5�
��ߗg����]��с��VC[WPn-h[n�����`�P�4�A������n|���#�r[�
C���@�o�"�K�] m�'����vΆx.�5%�,a���C(6��-P��΄�ԡU��Ӟ�G����bWi���d�D��0Lr@)�,Z!��[��)FB��n%�m��s��]�A��m�^�����YLv�)1�;�Yښ�.��P.�VƉ�¯u��d8�/�XӾ��;`��^��9H&�4���AЋ�E�VcqvL�9��9��2��W�.鑕�����$kC��?z[�"D{�Mg͂�����T�@�w�5��\��qvmb!��L�M�G�WZT/l��o@=Z˱)��q�,�ᐤ
m*��$n����0������z]�~�	�c!� ��E��H�ê�SI	e(�	:е)m����Z���֥�<�~O:<(��c���o� ���y~
h���p ���$./Ą���!��pR���`���cK���d�1� ������y�����M�
�n�6M1��`x�ێ]n���Ug��Å+��O��˰z����������P5��O���Ƞi����י��3^G�`*���lа��鋔���3/ʘ� ̑g.8&q�^�E��_G:��-+Ilf6(�DR:������6T �Z�U��Ic����<�4���n��܅O&1��Y�O���ӱҟ,�qk� 	�Q���\�	:�F���$�4�����eZ�
����GK$��2�N�%}Oun���\,޺��P?�*�`R^|�Z,9)���c\����\'�U����s���y�#8�IIL��!߫�ڇbr09=�3�O�%0Q����RHK��
�J�1��%�af�v<}��Sc�����1�q��Q	��#�;��2���������}�q��\�@3�Y��*oD��8̗�
`J�Bل��^Y�S����b6ݩ����tϞ^b)
ִ���k(�bj��<���b���)}�%�ll���h�Ne�Vg�����<���l ���@Oݷ��h'n�ŕY1d
�i��D(�)E�I6��3qQY
`k�AE�!�K���v��ּ��t����ŽP�jp�5?�a��xw'���#�O�'CT|�ū��i"v��6_��۠�����x.~�8���?Y��Б�1"�`@ߒC~�Rm�@�}�S�?��_��8n��N��O��㈴���}任w '�� 5�x���.)j$�rF��%w��!�{7A�a�8�rq
[ݫJ����7T�üC����p�v�2�8����j�� )��L#5iD�=KO c��^�/����XORkϮ�n\bK;�~+��U�!zr7̍�@b
�w) �9���
��e��t�(����F�OK'eml��h����Tcc*aMH���8�$yW��g-��B�c����������0τw7�m��3T��(���D�r����a�QzM�[!���Xσ���k�p���#oM���m�h�(�P�9�\��*�2[�3����jgE�Ya�<P�%A���L
90�~QYI�X2��Al��=�!_��`����³�t�Q���s�)�o�Ji=��xE�d��}��y�1�譛\!  S�I~7&_�&��A�5:u��K� IpV_VR��,�����[=F�0��5w�HB("�/�-c��cIY�ẁ;J®�ru�/�NNU��o����v�m�
Փ�C�A�p���A6/o>���K3�'�c�rFk�� �H��N#��i�N��9�쭈\�_J'����.�d�ZA���/�L �k�y�>�da�$cq$�ص#���
1��Rԃ,����{z�(���9<�_��S2��A|
ԣ��VY�XR�p;�kʷM�G�b��psG�X)�a������_�~���yB�)T�W1�,�r7ZG� �轒���)l�X�-�Q�L����$#\Y�T'���$�M3����ئ"k��6<̨nM��o�-��-��
C�_E<��42� ���ۆq 2���<q�Ph��E�`͛�o��n�#}��X�'l�F��JtIc��ub" �n�&��2{�i0D� =oV`Ԁ@�g� �&��bT�d����D�wѭ}X��2
ކl����˶4"�(@�*JN�d����}wͤ!�� �1��^��D[�˖'>�z)ŕ ������1��*S��D	v�f���Ȯ�%S��Q�;��.y��~1&�]'�M��7|��;���v��۽�h��3Vzu8
�$ Lf@���}jcol���t� ^�0��{�F����9b)0,�`���������W|cB˟�r�t�a���h�XCf���Q�%6)4+�Þj��;��D���YǴ��ʮ�B��&ع����q�{+�P��2���1�(=D
��U�q\h�c���7���y�L���-�K��Sh
��H�zm�s�yk�i�ύ�	v��P^�dn�4���Z⋟��mf4	���w�f x
U��ٗ߈ة�;��;��HVRO�풸���0�c�?JwW�Gf|���݅ep�a�E%�g�(�J:q�RX �F��`w�\����z���g��f�)zZ��p�DP���O3i%NJM^�o�T��
��Sg.}�˞�ތ��F���#�*��-���6X�hfA�1hYz+�4��l	��#���+X�ǌm�r{OK)TP��Ý�?�Co�8���)Z'�L���Jw���XO�R67e��Z�t�q���X�J�u��7ZP�\��������y^O	���d�ވZ���!j�ؕ�Wg^��?����j��o�O
N�U]��Μ��l�%)� �Ccux��aʉ����e���a���<N+�Q�s�oy̢�;|�=��t�-�0��G��B`�>Հ(F�7�I���)To�\���cf0G7O�@}~��@����(��@
���>� h<�+J��$TVJN�;�W[��UX���FZ?�L3��p�Đϸ�����rg�Ҩ�����K@��I�r��61��,E+*��:�&�<��Ys��F�"��@`�\�c�v �R�2C
�*����a��P���e�+<DLW��o1�Z�݀�UB����;MV��	�m�W�'�� $�vkqM�M�69�9�AG7��g?����b���SS�q��u��1���kE������� �bMgSp��^';��f�=ף�<�涉�x/�!�CZT
S�į�aH���]����5F���>���LN�[ES�z�E���1e����/v��w`�,�,-���}�J���o}:L��"�,�� M���wf}T�'��o~��Z������2����q\|j�Gw��P`�u}t>m����ex�]R|ҺduC�(I��
x*	���fب��A%
$;��1���@�n:�y�|���U��l��{^�(@�jz.�:�.ζǔ�o=�$�$t\I��4ߊ/Ӑ�`I'K����*^��P�pW�l�م?�G�%G���f#�7\���f��X$�O>�:o1cMK+/�$()*��I6�W�8cg�}�����S�A�����i�x#{�X�UR� R� vQ���]6̲�����a�n�pu���X��G�#��zW0W���c�
x3E
&5n���� ��%{KA��K_�,�X
X��]Tugr���k/�;�$(0k�xv���~2�Fv�
�|0�~���wM�**�ި�S��W�M���iIu�a0Rզ�5B�.xm�9\�PԻ9%�!X~dם���]�]�s����ţS�3QP�ȉ��7
�̹ҺT<�Y��}�3�%��S?��U~	�|y5CQ��qo�-��F(0Y��w��+��ǲ��fh�:��9��4�Ʈ�(E�ć�/k��)�\���n��Za�F��햾��o�7���BI�b�I��ns>t�� T��Z�8@��P"�>��>NHܴb>���!8�I[�%N�2#��z���zӤ<,$��jJk�$�/��]�%�̷��Y�t� �1b�p��dl�]:B�Qt���2�a�r�����oڧ4gd�^��W�p�o�V�L��d:.	tn�҆����߰���R��'U�m�f.�nZsN���=�%b�ѫ@���~�x��k]����	��!���K���'�ُʹ$h�׷�b�
���_?�xX�ì�0\�K�#����M��tzaSx߃BӲ�c�-�����P�.��5ўlZ(q���h7��)��yb����/�31`�k���d�{�+�:�b���3��Ꭺ��mag��W�!8���͆W9��ز�V�:��JU�숍m�B?l=C�T����{���5W�&�+T�2ij�'p�
�U���t�>��R�&�V��.�י�Ҍ��Hf�Z2l{�?G?'�d��͎�	�s�/^����
]:��(x��������5˪d�	Y��!%�䤨�QMr�� �|0�M�;��Hù|��̵�C�R� �h��G���U�����NX�,N���D��j��~(�Yo�鼼8���w��)s=X��R�q�`��2�������%K�m�]�� k�<������r���e�Ą=�2�Za���{�ː,�	��P�9�����_W�F��M<;|��Tǋ�g��m�0���7|��wv~%�m�q�Q�!j�C)[��W��-�	����U�Z� ��F�#�䓅s	}�+z�M�g�8�<��#�]��~w��GZ��+�&���N�#��XTϛrmb�v��ܰ�Eľ�������HWT�����C0���sl���s����w0��B���]ʲ���(�A+o�H��8r)���Q=e�`r��]��|5+�&�8����E;�P)t�||�'��o]�¶d1�?Ʋ����D�Y��_!�@�R��gT��\y<o焗n�71� [�t�lj3��d�D��
v�twl>R=U`�g��$��T_���^��D�і5��EA �����.x��}���̎]��)�Mx=6
�^�FJ �O����?H��U+��eMO俦N�`/#��#x��t����n�8Jy����@�oc:�"�z�2�#�K��+��f�ؖ��'BBka�K�0�Ƹ�J���/aCݎ°i�S
�m��x���C�T��4:?���jڰ79���uh��Q7c�w��1T�x)^B5�c)�"H�����b��%k-��9ܣ:���������/`��9~�����
c=��P���DVƿ���:�������E��e]EL��M
��У'�4+Z�N�Q��o}������)l�_XW'�%??wh�f�++���w@U E�_έ��>��&�޼p�{ZK���,
bJs}�`��Җ��oQY9��Dኈ��C����_x�w�����!+,����+���r���H~�١�5ܙ�<�u}?jIpSo�u�r���:2�O�&4�GFjK��et�%w�3?�Wm���*�����I=�h֊3a��`*�Хy�6	��ӑ�PA���@�
�|Ts��0���m����x4[O��O�FL+K-k|ص3e�!�kSp<l��sV�rV���G���ɬ(�7�?�{�ބ���˘��S<Ҏ��,������enq�����Rrb�ui���H����t֟N�z�Tr�+�I���8�?�V�1JuړЇp��
4��<�l�[
i���}����`�v���~PG@��Y F��c�\2lQi�}�Heτ�.��HV��Կ���fW���Ʈ+=��F�ô�]���b��b꿬�r��Eh�)D�!9�eN��ڝ�n�O/GV'�w8�M�sңk��T�Q%ڣC$�v�|,�����D�9��g
�~zm�Q:��l���^ˮ�X�eS����_s����0�x6� 3��Pj'�l��$�oTu�@}����2���-��n��󁧰Ր����If�0E�v�
o4�RJ�n��8ظ� [ �#�i�<kJ��Nܖ��YLL�Lg����&u ��Uq���U��U;�+�l�1�-؏���YI��)��S��]���f����@m���� *ď��8y��C���� ͭ�(^����4 �7���k���$���
@�܀�\�Ա��q�o�N���x�������QBёI!կ��-�|.Ej�ʏ(�-��� �xg	�q7�/G���.������Ƃ-�VJ]C�g`g�}��ր�s���ԉ��+j����q�<A�2/y%^� B��ɯ/?�t;�.цW���B꼨�qnO�&����С,:��E緽Y�i�~��s�~��=86ȭ/�T	� 8졿�9z<�H�n�fM�O�R����4y��BP�V7���JuB�-��9�8`iVe�>������&���O��-{�=7ͨ�G"V����~r2�?�ńͫ-�=0[}
�ù/~�tNe,�`��1�0�~�h�U!_��h`ϝ�O&��{���<4F�#�%/i���"���"��^�ITi��kpd0UL�Q�;����E�@��q\k���*������סkI)P	"�?���c�l��=���n�I��Q������!:?T�KƜ��Yת]�n%H#*���}b�A�� A���}ڱq�KÆĩF���m�.�{��Z�v�˧��� ;�?�ߝ��t�5�7���̦���8�cڱtş�,_�q��ö7��|�=C�]
�S�-E2����(I�i�������?Lܿ�9��S�s��� T�6��|�N�?~��#��ܐ��̺�]�S�-O	��yR7I���$�t�ػ�1^���nU�hʻ�q����i�˫�V�_���2���S�t�`lp^���8o�� Z���E��X@�	��k��,Yu�W�_I���0B�
BL�����`�$�p�+Q]�1���p��w���}��X��þfM�~����mR��c��A&ʘo��ыI����̮@,e '�ș���9w�H��9 ���=L���f*T�M��E��BT�=ֺ�����lN��$��b2��"���}W�cd<NSaoQ���f�S�@fB�5kWD�)���x���&;��Hg�O���ހC���(�k����8ӻ��
�r��1M�Br�t+��)#i���,9����}]�T}����o��~�q?o��O�o����y�G>n���r��2�r��� ���Z�/��-=v ��(Kh�'�Y�Hor�Mc��H��w�GE�O|�JZ�S��$tW4nlF!Q
�:��qe����Hm����h��:�i6�x�i8���7�:!v`O�Z�J�,�p�@'��T��-ƛE��0s�/@�L����\V�V����*X��7�����:	��JM,������֜�1�ǚ`��r��ۨ8�ش0m�uv}��2��#�6��-YX�|���Q�T�����~2Z�;�������n�_�6�r�A���7�/;ގ$����ѭ��$�B3��#,��q�1�D�8C)�o���պ"~�fe݌�+�嘐�(S��
�RmR/��������=
T4&������.� �6z�:�8���tf�J����;�F�&�;;�.�K�bP}3H��OP�bJT��җ>�;$�jK*��Z�KRr���w�[���;>�b�;N1#�]|�P��YH��,Xܿ�pp�A��uǊ�����`�'�VMۈJ����F[O��I���AtM��-��G�=_�>�p��Ys�m�� ��鞱�m[���R���݅(��}���K��DA�,@���^foaƄ�x��33������
�{(����h}�[O���;�	&X�ÌwV�9N����mW��XZ�
w��C�k�[���l��Ґ���sǕ��T��K4ص���~�xW��2�?����ո]�n�C�}�r'��Y��圫� �i�U.�$l�=����{�E|v��׸X�`���W!�8����y(V������n��Nc���	������&��}���!�h�i���_ވ�ʪCKֈ,n��G��`��'�F2���
��<���{ '�vU����Cg�������ra��(�e1���'6EU"���@	���+nޡ��!w
Y��R�HfuC��"�?>�ۗs| �g���:@z=J���@����dU s^��&�pA�Af1����Z����!b�z���X@��əRU�d�XM������b�#���_����6��OYmq�fˠ�$�mJ�t�mx;��md��d�#�q�D�f:�&⎤ �)4�W|s>l�B �mˉdB�b̕���׳��pT{�hB�����v� K�D�-�$׍i���>C�wŌJ ƽ�@�V��g7�{ϱ~>_������wB�ܻv�īl�y����4wl���g�? ����6p�O#зK��*�5`ɂh#��ү ��{d��L�n�]�7��V�
㊠��8&��(��;�"~a��7�,��|��v.pP4c�v� �/0�?�J�w���/3.Q�@�k�X�
��oY���h�0�a,+�����M��Og�����H3�%�_#9
�G^�%'�
�ۘ̋���~��]��&�]�p_é?�������1����f1��(�̃R�B8�RE��<���.���t�?{��zmz�z]�|Ԇ:�ŞVo*R�HC��!�bt�.'���<��a�@�R1�@a��4G�?Zx�VV���k���[��Ѭ~�p9�Bv
��s3�Gq��͋L�%�M���,?�=�))�]k��^Ua]�'~O�a��� ^�I��bxlB�]��-��_�u/n�[��[�c"�F�*�O.9>�h���z��L�����
Ca�ך�u!X2���2��c
t�?�y�����QZ�7#��^�J��;�X������.Ǔm�i��^j������=tta��J0��N��!�|����Y��灱�#Қ��D�wa�7������m��R�(t4�<W����u�A5���wy8��Xu����@J+�!����X�b���un#�~�!�Vhc�L�V��+�y(�0��\���Og���k9Wu�PB��λIs|T�ov?���դ2Eh��U�c�,v_��F�[��?r���2ՠ��/�_-@�f���L�&���\�|g(�[[P���)�t)<N�~�H���ݣJ�~x���cW��v�Q�]��Jդ���@�;
B]!�p�4�J�b�iT���ײtPB�	}��F�#�u�a^����_IQ�����:��#�ᘤ\�[��pU덜�53X�1 c]��P�w�(��΃��zL�\�	O�X�� lZu���z��������I�s���
�caM�}+�����9�u6�uu���O�e�.B}�
!��q8��hA�Y)t���n�&��2g�޴�5��
'Gw�A�ЍlW&@,<7��S�a{��,�ج�<��Rc?��i��\��S��O�4-�_�X�铻R�
��?%B����qH���`M�y3�ơVCxh��
�_�wM_C@�z`8|!�K�}g��Q��v8y��K����L=���N�G����E�1�#vSmJ�!yݣ���v����ݻ^?�%�c�47H�����;S�c�V�ht���] �&���=�Es:��6T�A��|g�J�>e0ɸ�RvЂ��������L�TA�Ƈ�E'��95Ma��.5�mk�e�w�O)��v���\��s4���e[7�(?�=��k�Bz�L1���r���f�d�un�=�(`F-},��dz]�Ql��
��2J�����:%�Z�L�4y�1=&�`P��#BiF��0Y��U�������:E�\zu���&\�x�P��r�g2�������d�IK×#
1�V:P_��۞���	��M�d��!��F��?�5����
P�)�#����͓�t"��W������8qC�˴@�c���~��Y��꯯[���NG�������q.�����������B;��}���j:Tp��!���`�̦��%%���}�i�8�J�cN,O�l����9���	����~D��ke>^uS��O`W�n��������������*(&4���W�-KU���$���f;h�B�x1߉q �tS�vd�''�W��dg�%�Z�:vL5���"?с�ƂvQ2�{	��yz�����E,ڣg3���ܸ�9@oo�<�1$��0������u
I6�#�͇R�s��`��
GK�Y������!4�Fe=�|y��u<DEb���ON.��vL�G@���#���{(^��8oK��]��y(��g�d����`x`��?���� ߷�F����ӎ���ʗM�f�WE}�P�:ٕ�ד@{?99���^XĽ~`oFLK� ���ȬwPb�� '�������n�;�Bj5%TM�.�����\E�N�[�����9��(�wN�@d���@q|?�N��pO���֪�+�`���Ѥs{)��w�{�Z�dݚ�O��¨_!��f�_G<�(��Uyr�OB�£������@�?p�وXk�UY��?�ym�uۜk	g��DiC/���W��}t�
���^g���=9
���u���.kt�����O��%̚�.ޞ�' �Uk8��2�щe.�C����s��:������3��ؠ��4�n��]��9KZx���" B"+
�U��>�� ۂ�h�PZ"a��^�ER-�1 H��X�f�ݷ�kr&M闪�3F�g="����+c^\Z(�T�1Fdʦ�ƍ1ֆM-�q�.e�<4�PF���<��i������h�;_��N}�a�f���Ɩf!4pK�2;�h%/�43ʙ��գ��e��σuԢ�+��g��� �P����p�^�K�J�[&�I�>�����9Q��m��@�!�sQ;��v����)/p�ˠ��d��#ت�(u��폾�+׵���.xJ`��a�������l׃[����������)�l��H��G=�.͒`x�׈�_�Q �8%�TT���X"��࢛�#�i�lC/J����&�I-�H���"2���jc�j�/�/Bu�F:�gѻ@n�nH�5�d���
?�^������9��<pχp��U�}�n��ӛTU�~��E5MW3��V�͠�M�4�!�EN�D�%���"�~|
(�7�G�Y_G�=�.��5%xH5//��,�-�xS	J��a�3�� ޳{�����p��ڐ�� 8��(�sy�r3��$��&���Σ�_��Y V��U�ʛjܼ��\����ٕ\����m4o9��U��>�O.��<���bӽ;.I �Wߚ��\s��{(��A�����\�	�tP�l�--��&����y�LJ���4��k�Q@D7�T�[��
Yp�|�J.>'xCvY��)��yh黽����ؚ��q�ٓ�͐�Yu[�i�I&k#z`3����,�JU��#��� �R�����]J�R�G?�~��'`¥4&w�P�\n=�"'�nM�azM?a�S*Kח���tD��Q1�J嬿E>�m�
Ak����1<jo�3�ښ+��� dz�}VBm/K��o۶����@�� @p�מs�D��P�x�����!��d�<�iS��X�Vx�EpC��;oX���"��jT���Q8�Xc;oCq��&yt��@���Nu�Pq�ن��!��q���Z�_�����z��a1��8�2���I!
,��\��k���K�:����T�P6C�;�}�`����b~�����w�tVfJ����Mz���`���ˉn|����h�;K�vN(ӎt�v��-�i��y���nIbRG���}�y���SA67@�y�)�cI����?�,�x+P�� ��X<�!�!���}�ٗ�	K�9�D���R�f�]f���w�`Yb?�G���F<[Pv�1�P�>|��ư���͔�� D�T.`��d�Ć#�F���KW
���U��b �3�-
S_�0\�������za��b"W��7�#���*�$���U���4�%�>C[�{��s�v�Qs�Q��8L��b���e���X�	䵉Y���d�����2�8qS�Y���?��-FO>��:`�/��Tg��Β�0 ��P�>o�Ś�{�l��t������4��5�0���X4�n��u��w���5�}���A��_�Թ�K��g@5��c���5B���*�"^g� ې��.Ι��r0��s%;.���ղNVӺ������<P�
�%7ZG���Rƞ`�x������i�c5b8v��;~�{c��'9����z�0�Rg����r
��˗T��� �T�"��O�E�1¦њ��t6���~���}	j�.ɀ#��ӒK�*��Z7!T
�*!�2F��>K*�S>Bd��>���/$���s]S�p�ؘ��
��{Ҕ�L������L���\�+q������%\���U����`�"X���g��_��Xjc���6����)f#N8��3��UA���-�,	F]��É�#�|j�cԁIO\��*b���G���2u�Z �C�V�Q78 ����H� ��$�h��6�b�`�ō�9\+�6O��x�����#�^F\Q�Yu���W�u�>�6Ut8o�J��o��܀fW���2U���z�y@���jy�.�'Z���w�e�Z���݁��)h��{�sS������U�D��\ t��&#.6s�B�纪=Z�	"�<�XYb��~u�:��x���Ǝa�l�6�6Sz�v�qk+�V�g�c��:��I��j�R�䊛
(Z����0� *ߝ�O.�\H=:�2ס�I	�%���$�Q�?���� R��g~&rx�
���H�z�<�H��B�]$e8&K`�ǹ��J3�e�]wO�$��j��|F߱�C��&l�G��{��LE'Y�G���_�E9͖\ZVڶdn�|�eVF���N�Ǜ���7(H�~�S�m�f�/����EW �X2���5˟�
�7�0�@��ۡ���d���&ͣe�8�ol0eL<�"ƿ�6�F�-g����?������GC�#�]$lsك��E��S'~Q��6�e�3���[:�7�gQ�쓏����C4��l)k�<d`�ǒCfԇ���b۾U�O���.m�s��O}�c{n�[^�?�G�B�ܪ���X��$��^_�T����a��ܱ�����I�h�ض4�ʈ�u!�����gR����|���;.{k}Nݗ��ۃ�+cZ�T������6���.���KH�r����p`S;�8^���$I��<B	8VA���]�\���@e�_��]��*��B|�ԑawI���gL�e�oaT����T7�Χ��Z�����75�sI�Q�R
XS)���Q��ѩ
C��� ���́�eSu!/���`�v���JRa�L��~(����LM���	R�b��(�,�3qf�f_C+���V=f�����\�X��$K�h�*QPs��W����	1�֢TQ[(��5_��T��u?�5��[��'Nɧ0���Sf0!#��G�A.�w��8fa�rP4`�e,��mYIե}q=i+c�Ќ�4o
`�M
��DJ� %��|jS���<Fg�г3�!`hj_�8�a�F
�l�
�AE�I��VwB8�r-�
+	u���yX��Xīx�i0����i������]MeY)�n��	oI�����).��Fd��	.�����/�Q��߹����|h���=�����`�/���Я�r뾞�>�r��*I4����M�&�n!�p�#���C��q�mE3�}�52� ��dr�u6��8޵���C��G��z��7�g2�@��^�P��f@������y�U�r?�f�p��T,x�S06�������@BL/��g����Fclh�opXv���{=M���Z�������;0sϏF��-C���~�Vݾ����@|5����Jp���s�	�������E��� �y�R��ʌam糣@I|95���0�%e�N��ui���V����q�2�W�pc���7�o��a�E��Nde� 8.j�/2m��n^9n,N���r���Py�f��aN�|��T�[.��QW6��J��$?�Y�	.~��<�-�)��uK>Q�SO��oБ�+f�G&�t   ��U�$`0:P�ċ��� �VF�C���P�4b�|>r��l9+�1�1�Dz��{U/N���"��_�gkV����k�C0x�yYjh����~N���7P�C&#t�/fv�|��3q����.�ZP�U�WT(���F�ƽ�9A���-��[k�-�J|���npyT�a����s�L��tU�E�\���p�U�����*JvEWiE}MѹG��s:�Ub���B��'&�Κ��Qz�
aO�����\�_�Z2ݑ�
�֘+�-_ӳ���kḰt<��(��mxj�.��vԯh.1lN	�/9��g�f�d��e� �6Y"���dS�KC����%��D'�8z��lk�vѬ'Bx������/�O�-Nc���&�jz~�Oy������3Cʻ�t*�q"���Pq��i9Ȧ���e�	ї�t1"Q���xP������<��t��tg��1�*�Si�iQ��O��!�h� �D>����:'�
��+@�.���Q�����'p0��\/��̼��@��\��l����z���m��/Ly�sc��~֎E=9��*q��sr�g�G+�\��!�l-��m�Y�u���Rc����z����/c?&�Ρq��+��v��s/A���Mbjd��d�({�kj��d1�\��D�:+�(a���$��b��F&,8������SG%V>���(g���X~47�$�Ht��H��� T�㬰���Wg���L�D�Qh�)��"�G]3!�e�&���+����;�D��ps`�9��M7p@^2�zCX�ڤ��w��G��u��ޒ���.:�������"�:Q���1�Ǝ
*���(����Ka<w�Y̠������I{_$[C��X �A����
˗��k����8�O�:�L~ejuE����^���Y'�*��tN��n���������AnP�q��&$�;Da�˙\ �>B�vH86I�wO�&	 ��e�J�3���ج�1�H���Z/,�ri^%y�bGyݺ�Ђ���~��[~;�_�`Ա�ޚ�|s�It��jVπ�H�oU�i���ߋ¶A+2���oz'؀�&БBD�\��
j0f$�w�&�d�F˛=�i)�.q��I�Y��C@��u�6\ؕ��
�0�z�#��T�l�
��&+��Q����.�N�TmLˏ��4�Ȼ�򉽁ׯz0�_~\��7� !78�M�$\i����\;�?��(~�Bc5Ɨ|4�y�C*���~D/�G� �C�-h|�Z��x�bZ��<��W'��L��q4B��=3�ͥf�����N��"�$����%���q�,����9s�5$��
WEu�Q�H�N��Q6r�V���YRt��3�5F^����z�-։��2����R���a����˩��ӛ6�%śB���8v�Tk��Boʀ����/|3�1~�zY��0
)>�3������zF��)�#��9>،JӝQ�����)�ښ�ۗΏ��PFLZ����/�w�~�`�K�3��:���m����.��VW�mb�P�Z�О���������0�M�R��"a��;��Bz��e��%����Q:�D��(��V&<r���&Fa��C	'�~䁟.GS���&U������9h�oU�C �b��
LK�{�)�V�������4z-������hu�L�2��Җcp���
;_Z���d�*l9�XR# �>S�����K���j������*��Tk��k/�Eu9�T�����0���P#��5�&�w�\�+e����t��̞ga��|&��"��e>(;_B�Ch�H�-}OjGV�S|�;�Qa>(b��T)�뢥�q9.�W�.�DK8%����ٗ��;�5��#l(�p?�
-����E�9ڇ*�OD ��N�J�3p{�^����|Uxi{��o���^� T���%ܫ'�ADT��c;�E/x�A�A�ֵC̡[�h&p��L���e}�?���hb#W0��w��r�G0���\L�����/����Ɵ~�o$/	��]� 
�\�k�K�J�Vy���|74��?d�����u:�bi�	�,��Y�$$5��y����G$7�8T��mF��^Ϧ�)�����gk��u��Z�>��T� �)��������z�@�➣�k1�UM[�8_�ֵW|^pT��b��������m���iR�I�7���SE��ґ�e�eϵ�z���=�
/q�t$��� f��C�M[``�����A�0��>�w�4vXx�4Zv�=���!suӀ�M"N�X�?���8v�\\G���C������U�S�/��$S㪛��	��j=<��@��W-A`��:}=��kbf�]3mά�@�������bɡ]2נ@�}��B1�E��x�DU�B��H�j�~��w9ݻ4C����d����$��A,����5Ǳh-��R1���B��|�(�\�M�,�`����J�݀�-��x�/�
�'�y��� >Îe?�	1����G�ejT�h#S^f����)v8?�e��-
�FW�^��^
f@�d@�t�D�������
�ƌ6�Y�N!�����E�5.���yn��ڻ�1Y�泾;fW�h�v4��:v�X��8]�G~�q�0;2�\���?J`ƍU��]���v�����]y�uH�!8Q���wv�`v�^4[��rP����_�<�p  ��5��/_�j�aM���"T�,
OI$ʔ�`㸄�Z�)2bSj�E̝�?��?/�ͤ%��X��!�����BM`/���^T�:,�z��I8C�{�MI/h�Cnaj'm��VgP����=���j{�`�n%~�߄�jf��(˷�)�uS4���t4��� �R؅M�
��
�&	� ��`�&/ R�\S��ݲ�䁨��%)I
��T|��Y�s���]�7S��fI�L#D)|*�
XH���sLr��!��@P
ģH&d)�&�Q&B0D�	��H  3^��@       (ڙ� �pB�  PK x�@J� .a ���z���A( )�P.llLΰ�*���"�pנ!P        �� �����+��P�ċ2iv��fnl���5�`�N�k�>����C4LK��L4	������QF�1�ZW��֮V}��=��wوk��>D<��gk��%^�����KQ�)�&�oH�� F�_>�Y=W���W3�qR�]�x�i���0苶�T�O��~��8�:+�5X9d�Gc"ODpJ&�"�#B��&��|�0ɛ����L�^�\�U�[�<3��° H�5F�c�qYj9�cnd���m�����]S#���~ٶ��{� ������ 6�3��5*�h�j�k|E�262�y���M��"4�ħ��\�x�h}������B�ai�M4�Վ��;5��2��;[<�
��Xj�4l���O?�ˑ�e�b��p8���Xo�P�'[�JHP^Q?��3�K�Ȓ�4��� f����1	��`���+]塨�β%Fs�U��w�����b�,=�˦�
��V����[�Z/n�~�WZ���rx���W��'YÕ�SW���-����Ɏ��A�:t��@Hj]��n�2��W<'�w1�: ���\�خ��Y�3�o������o�T�b?��G��W@t��`��~�^[��ۉ�,'@�H� R�	��Zэ��8)@O`V��Z(�H��V�'Q [x��   *}�F��pڞ.j!��w������H(J/��/�6&�>RC���08��ޑ�\��o!Iv���ϩZ)�U��ة��;
�Dm˖m�Jw�P5s�����#֦"|��'�ߕ�؛To��BS���O�1G�T�p���jFnګ4��*B��?62�D9�zX�w�c�0ѢV����j�K`�{���&���&Xa4�a�6�
�����|��D���j������l��B���q�G����Nyw�ŵ��������r��-��I�sy~�i�\�ńPX�, ��@򐠨����@4�`-�@
�2) 5P � �{)F0 ��Ɯ�h����X
E�uV3~YX�a��X�V]aEN���XشR��g�2��s��sG��@J�u���
 Q�m�@�N�1�&#c+pWҨ�5�$L8T^#
�����	��@S5�Pi� g4�ID�D@" נ!P        J6��,B�!)� y�Ă��	����FC�<  Pܢ�@�)�\
�/u��5�T        0h �1�.5��XK	 �PBGN�G���%3�L���+(���uր 3�9? 0$qP<�`��{[��ѹ'�e��FEG���)J����3c�b#LHL���{�GIH*M�\�1.��1:TTg\����n��H@kU���U�����j�+#~�2Þr=p��6 �oQ0X�����)�Mt������;��
E�
JHX5���)>���;�Uw��ʰ��ݨ+�8e"�WbJ��P""e����Ic�3YP �m>;�  ��Ra�C*L�nk��s&��v�Q��U`XW5���\���I���~��=@����72i�9��"��ε+�+ۺB�]ȧܼr�����^=y���|��,��90���d���o��/Ĳ�]k�HqIrf�z���l�`mE,��_�{�ͥ�O=B�����9X�l�����(��ڧ	�E1 H,pk|�֠@�T�Zn VB1�g�1`H6
!@��G�V�f[�(�N�̪ o��G̟�ʃێ
�li�5�o}��oJuQ�dl9������ۨ�/����v��X4��^������^kV�	�<������j�RkHW0���k3^Β���Vv��z�;�U/�<h0�T�E���&!�b�]�Jh�J^�<*+I
Z2�?�\��B�H��A6\��G�s����1��k���0̰����@��7���I˝�����lB]���
jQ�O�f祂O@l����g�9'0(]�-J�U�i�(��mF&-��Tp;.�8BS9���_o�k�l���3E��^0*#�n�cST���7�R�}�(�ݻ $�IPN$� gVi�`d�M��k�� Z   %SM($�@�#�
E�pPO��ְ�[x")H1��0h�,(l~�6%�PN�/�r
	 �ՠ!�       �� � 5����Gp�L�
� �1��*��t�sT��h�PKS��&v=��.�'��q_��!�mKk�r�#Q߱&:��1w�Κ�6ڽ���(��>���kJ����!�҃H 0R߿��(")��q��e�	�R���Du y{����bk�LE�˟��������7�wYN[�Qi��e'I��;=Aap�*fg����N�'w��o�֐ H#pl����`���Z$��W�ju�}��Ϙz����.��˺���BX�a"�&-J�d��]�Z��k� v:p�k����*�K��
�\& d���c���r 33�O���GwB���u  �H��U�Z��:��)`��?�S �\V�)
	�ztafV���S��6P� ��T Ȩp��A�bY*�����芌�%I�!�qM�&�@fm9&�����w��+����]�(\�ITH���!w���-V��2���ޚ�������#�ȧ!�gq��T, J�Q���0[
Wh5E%������{�!�YPQ�@B�       �@� 7.�SJH,&q���u�sl̤!)t�
(�
�
����s�
�&7��[��y��Ytɽ��a�p���}3���$�N�yYT@�ȴ-k9��Ȳ�K*lj�5?�>Ҳ������K�ؕ&���ԗ�q"L�Qʀ�rz��-�~C��F���$��ߡ����/B|J�tnS:�	zT�M\���0����r��:���1�8�9�D�T�j}�E+�)�Y��m��<~�܍�J�	X,�Z�`�*G�K�QpLK["�!Dꬺ�UIf(�bغ1L�����N� �k�]ν!��)�9- y
�-��x�
fḬ�"cO�I��\0�&�qԟ�(�b��f�s���������Vz��K�M^`�^�yig�ȍ)w*V�B�>�&�,N9WO��� ��q}�N�O(�ꯈ�S�A0X��j)~kR��u4���6������g����A�:i�53�i���0O����)ڗ��`���b��B◜�:Nd����n�0Z� �	[59�a�L�1@X���MTH��66j�����
e`���`I����&Q�R�&)Y��!�+/�]�ſ!��ͭ��'�p�m��}r�X���]l;Y����'�������N)JJ��-�r8��ab;�g&s��&t��w)aRj��m�cky֤1�k�=�i>��w>��pU�ç��ʊ�Iᱽ�;�KS�������HmI:�Ç����m��Ąk�:��IZP�	2�'@ Uh2�(&Ԗ��)��T�)�})t1�	J�7��^U���{̘AA��!�c��73>���5��dE�X�z��a58Bg�4Ye���w�<R���^ �
�^��Q� �@i�  ���2*��	^`.�1; �
V���      �7*�dAHY�ױ2��*���ݪ���K[�z �$E�(m'���=,��O�ޭ9�����4�D�#�7!�WWH(��Œo� q�
Ub(�b�p��L��P�;>�F	>y?���v4T�UToUwv�Ƭg�حB<��p-fZ��p��s�u�F�P���HM��J��"�ݮ\�\a�]X���*���c��ʍ��K�̂���Fd�L��=�E�e �E�.H!��V"�Rg��TXM�T
2�h 	�*��LO�?5cf���U�&�V4��-�*� �t�K{+�n�kUT�L�W%�y��Y�N|�-����0��ģ��ir	1w���5T��_�,#���9o%�qt��7W�*��\HUk�4�]��Gcӓ���=� a�N���Q�O_�$��B w��)�(C#(<���ԕ�%4�8����!P٠!P j �   F6��d-�#20MJR����$Z�(^*��	��$liǕGH�I~)Ò0#`R@�Ȅ o����Ca^Eu��ԹD���cʲ%9�
� :�r� Q�2�BP0�!�]c�7��"�!N�;Xe5�`Q B���
6��=G���;mIt�?���k�%���W�U�ݥ�͓��l�h��ߕ7u/g��j���H�2ӓ�1(�8)YF���2T���y��ѩ�hH��m��Z�7#��v&��$X��N�41�s�X䉦��,W�1�݌��X�J~ԴkϜ2�r#��~���ޞvOG����C�l9�h��_(�:��Z��ˢfIZ2MsU'M0�E�ℛ��Ӡ&��r�S�;p
����Z�C_+�hpo�w[�O~�G�b ���!�R���厩�ϣ��#1�G�e>����~:Wk!�f����y���VƑ����)�q���{c��)K(0M�}��%�5��ݗͲ ����@k|7@��-����:�Oo}�L	L3lŢ�g��ɻ�"�w����GZ�܉�lD�[qd-"��Z
!)$�1}
t�:�!���N���iO$�8�L�D�m�!CS�Me:��"��MrJsĬ��?3�
~Cp��7h2�)Gtm<sh����Sd5�	)��W�z?s��[��$�w�������Oڄo��$Ǆ�$(�	���CT�� �*.��v��nF(���+r���f;�O?��PMȸ�ŒZD΅x��><.x�����9���4&�$ lKb�s�����7���[�h�4@��v#p�+�/!�]�=Y���{X�,Q�F �P� �JZ���g�J��x����^<�ġ��Ϗ4N_�p����������4)��W����}ŨO��������W?6�ߏ?��u1Mi^oiI���A�%�j�&ν�U���%��݀{��u��'�������ࢺ��+����<,l��:O���]��<W��%z�[�ࠁJ �r�j��D5r�A4�E�?6yV:��-��4��(#(g
��	��S�r�X��z�G���G~�����R���*8��Ί���Iv�}K�� ���R$���u�m#�o�Տ�@j�xlQ�ߦK%���7����#�廻4ș=�mF 0�Lt':��l7��̓�{ߧY~G���䃹����<�����n�*�h�c&�='�?��Cw!��u��1��bG�!Q4?P�ed�8>�_�W���4���3��2�aH�@�[Fp��Y�����])����gOq��r7r��N��� "�[�H�>Ħ7���A��2�vJf�B�4��I��D��u=Xޗ�b�`j� o�C�1/��(5����/[�
uN��MȇJ����
nG ;0��
�����Z�ܗ�`O"Z�1Do�[���_s�<���Q���^+6�D�AJ���d�L 9aڊ���ޑ�8#v��������4;�
uB;{4-f>�(��B��n1�;�i��q�Η%>�]��ɔj#2��ۏ ,��  f�b#�.���Q�������$�¼�uQd���7�?qiM�<�0��7]EǾIl#��D���cȦ�t�k0���������'��o��X �V5�~Wgӫ���@C�[�>���F"�^���.q��}�����Jwя:n�O�u,���3��pbi�*�O�g$����ro)8�F����L�A�Ohԩ1|���;�`�og��҆q�N�a��T����yK�Kʁ���4�j�ړ�?5a���f�d��-�kQ,)�U��]����Z���yMX?|��<�Q��OzS�ER�2O�J�U#����E��	s��7�P��Mc��x?���%�E�9�Y�3�yx�V# �����p؀����q�Ҳ4Cݤ>��I7�K֊����z�.��1�`p� R�/&����P��cz���Ag@K�"&���0��������5@�DАM�V�}��Os/���2������
a�.�X.Zv�ZW����D�9elir&<4k̂6*	�Eh��o�|����?؉�������Ķ		���,s�(� ��]�yB�FF�遾1R���Az��� ���w�N�����H+Y
0Q����?�U�&�7����"�y>�r%�<���p�Yhv��%�������k��#�x���ҌrN�ϗ������ߓ���۴P�e¯\\Ol6�+�xZ������7MPS9�&\��'�&�D��hrI����k%����	���@8<K�3�&�#W K��(U�������([BG7}��ɍW�Y`9�b�?p����	e(��N�u{�Z��� ˔1�|�?����ޛG����������M �(���Gb���=-���܎��I�ovlߝ�PjV��q�@��U����<e����l�\E5wM��"l��C)��א=r����M��d�a&��*�w�W��V�)T�x:�������۲4��������#�R*�e.�	�'PZ����G��"�V��>��f|7	�u�' >�\��T�/�ڐf�C/O��ĵ3���
߅����D;%I(�#x<T.!�
~���r	BN�g\c&���|��hA0��E�݆ȳ|��0��q�WTɎ�Ȏ�lEoZ��k]��xۼ!_
����%~cCN�6�8���zP�M����X���уT�u�о���6�J,f�X�B#����!*I���12�cG'�f8al�#*,��V2�J�(:#nX��
�%��y�{���]Q
ɢy����6�Q����ONF�&?s35)��Q6vKЏ4�S�Sa��\��h�!����l~k��wOl=H
IS�������'=���e�.��"�V��32n;Z0� ��j�IX����m�nY��q��\ �,ԬS�D
:-�<�ڏ�#Q����Z��B�D�5ʦ�~d��~�7�clD�<�����X�����^��\��8�вye��y�Wq������)�^���o+�FR�h�1�_�Bo"S�)Ǐ�P�@{�>%V��ZC���ꃟ��N���\i��Bv��cF��1S�Y�@���ֱ�#V�rH�=$��8�8J,�v$�����-o������6`Fk��xs�ݎ����U���U)��������E}�X���� ��:�c�s�����<������U�n�Eݠ[�gZ��={����޿/ք�3j7�㕼�9n���\n����/	����LDnb�1����@Ta����/+�~����/'�I���ũ�̊W&�Sf�B��51
}��L�CR����������TD�֞
��w��_���ۺ���Sn��#F6j�F
����7bɏgӨ*ɼ�ͫ��8��I�}8��[�pZ�Z�+�
���X�f��|�nMo��O�n�f�*ł�\հ@�gnP.u#�+�=h|�Q��g�D� ufm��)�l�R�&�����t�:61�g����!_���hm V�:�S2މ�{�Ϗ)��n�ج[��UХ��-�fЀ§���[?���R3�Wt�p� �y��9��h_`򎙾�0�1o57F�g��Ldl2< y.��{��c����r�)rć6P?�J��3���3�u��M��	0���vR �]x�\�Ѱ(�Hq�0�J���U��Pfkf����4�N+�Oo=�f�W��pGG<'�zaS���*�cizvá97��
7��m�;L�0t�{ǭ�@��Z���F�)�zg�Z��8.��v�4S�m܍�f�v�C�g+,�]�J܊��,�~|qbhQ.R�1e�b��Ɔ��.�����;&�9E���Dӭ�И�h�.�[����l��7�D�h�oqt+�r��H���#rx����ь�Nf��x"��~euv��ƟI�#��䛌���_��/���q�.�W5A9�[ۭ�E:q�bh����¾M�.d~D��) ���-�'�.��\{J�17��=�]Q���0�,2��o�Ƕ.�gX.`a��t���������x��Ꚁ,���T�R"k@�B�]l�%���U�8��2�̉��e/
�$Q3pY�N��"�[b��<s�A��Z���e�3���:B:���|���m�r�@M0�'�M*��f�|���]+� '˦c6�cT�ؓ]P6M��8�t�B�̈��3�����:�\���a�OKٔ�jE���bٌ�Tg����V)��t���8p
<)s����Hw=HY\����|2������7��9)!|7���zP������?PJ!!ܸ8��<�HT�=s��I2�.�%6p!P�@c|�ȫ*��E��t��mn���9�����v$�9�%=�0����8�����`(_�0�%ِw�z8^T� (@	�g�N����vL[���(+����8J��҅2<�h�g�&T�O�#�Lz~����Q�K�kη<���8O�74�4�A�U�e�����nk�Y�M�R�O/���i�:2��vX�F�d�	b �&n���a�K��5?��I����~8ɺ��!���ܕ�HGBp���^A	�Fۯ��P4#й��M�����Ĺ�k=� A�L
N�t`A�_����"&3A��xT�(�gv�����6����\�Y�|�ߞ��ƍ��H��;sc�I$K���?�!������+8��E,��~cD�\z�+&	�Pl\L��� ��u�8i� =y�Rg�?g�����ң�^=�Ac����~��X"P��+�	c���m�:�68��
���p�H�HKsP_��dNޣ�Hx�XN5�h�PZv��PpRNbի�&���čŢ��m�$��zsl�����&��8�HXw:O�J�5H.�=��me�i���I{�:��,�64D�(��Uk��f��xwس�kq\-S+"Q�ڀ�砼��]�3������Ǿ�:���	 2ڔ�ܘOL���ʸ"gߐ\�	�����R�XN�9~��^��Ԏ��3�Ԕ�;�.ak��H�bQ5�@�2�*
}�4̣��lCs�-��%L�@�
zo5R#Ʈ=���NV��>D��v@�^|��e
��bd|O�&�"d��ɍ]�3nsJJ|(k��~SI�� �Y]�ڢ^��..�֥�V�Ѐ��J�
�S�=yj�2�N&J؁�@5KJF���\}��7eJ��p��=�ѝ��貾I���2��b��B�h�2�Vg?�����S�O����� ��2��q�l��y|4;���!tx����Y�q�RM/w��`TX��>'�d��o,������+S��\|1��	�Z�kԄ��J�$��?�|�{���c ���l�y�5�E,�Ͻ�
SAB�nH�p��ޘ*G�AG� �͂���3�E8Z��k���C���ͺ�a�ǧ�^М-�~_�8� ��+�F��%��-e4�����x�j�ƔCR���^eq�}�_9���ƫ�\�s
�=|^x'�7�&T����b�P��s���_���q�X|*f	��_l���YG���
j?I��k�e���x���8��
ȡ����U����V.��/��;ʮ�B�C�ǙUgc��n�D8�g|� �ץI�pO=߬��_�a�8�2)�ß=��������R!`�[B��.�T��N����3���>���"���Ș�v2��q�A t�6�`-�=�O*
��\��_�8%N%@-u%�
�@��ddr���N�sA-:tP���`E���}�==�J����b�$��'��g��A�=5��`	5���l
�]�&�ĂD#P��	v������F���~�7�+0���T�q8� 
!��S*�4���%��O�f�܃\Ǔ� xv�1z.�U����A�&��ۆ	o7��	�:CIL�fy��:&|��.��7u���8E%�*�U�+Rd(��VUN�>{�,)Z�,!  �9;�&+#����E�r��4?%�Z�5�n�(�_��+.gC�6�~H�����W7����c�W�bGY	�������C�)`X�#̼Fk��l�l��FߞS�F7�=X���I婗tm�����.�(!�a�TҮ�K�������m�EDc
̍ʫ!]�L�OX;�P[�[02���<_�g�4�"�1|��F�U9�`����.��U�7�����5�Efk�;��Z��R����7�e-��䅡�B�M����mr�roޛ�LG�џ��\�@qE`�+L4'�8�ҙE����B��̠��5����v�2�(,��[�����f׸�	��uZ�pw��:.��;����7J�Wgp�_���5��*�Xܧl��Sڞ��0Z�S��������a҉_��n5���ڑ�H�S�E�(��V�!Ž��rz��H�.'ɾ�a�0b�
K唎�ʻ�w�[��ϵX�A�㒇��a}��4*z2i�_v�`.�@Ʉ�%�܅U�3%ld6����tŕjZ
��n�c����zy�{{���q�-7'0�y$����(�f�h�#�5C
ñNef
e�~WQ��?����Z�K�X��f��t����
����Z_U�2��e�� -[ӗ�:txY���2�?=VP���9٘m�RwW��o�p@A<��g��Qcet!(;A�������}�>�E?ٖ���Pkb9T}v��2���{�zH7��J����N+�k�o�:N���[^�T��D��fa�]TI��YDsDQ-�
x�5��dr��^��(��	�,
���9/g�f1��%�0��,>��O*<��M�뤹��]���Ǒo�Ѡ%�(Ɛ��t�eB����]�Y>�T��l"�ѧ`���~�M��W��[���ذ�8!@�O�Ͷ�EY�f��+)�e"���t��Zw�?��Q(�����d�z����͓�g��_�z��+��Z��c�u��_��4l�{0��r�B�����	>�IT �ˊ��r*��n�B]����|���5WO�X�-��W�Q~�G��H�6j��E�s캑ϫ��<�N+>t�
�Y=��v�)�������li���V��5GvhIO�ߜǽ�VF�>�4{�D�}��t�<DF��_�
��w:Kq�����j�GҴ�k=:��M��f��/U�c�[�V�;�N�:���F�Έ8��-q	��Z��?�%$���/9�k61s��5͂"��D��F��h��j(�Sн��_e�Q��t��n�.�+�Ɍ�ݵ���4��H"I�x�߫���9���gqQ&h��e&����zW�'O��d_R��> ��]�JV��U! Zz*{������zS
G-�]s_Mvɇ�$m�9�--C�v=�����kDJ����!z�1�v+�;��f��+/ģ��b���nϭa�Yd8D�^���r����5�-M7����R�۳+��m�&�����Q�3��^�H�ȣ���ߩA�f,?��ڿb�Z6������KF]k�Tg�a�GA�|}��+��˦9�?)侗4={��xY֢Ͱ4�#'
j�*��<ږEi��+'I�b��(A
��� &u�[�(�m�Y�&X��a���M�&�ٚj�o`$�Yd��R%sk��A���9�׼ `�-�ѧ?��Z�4D��f&E�mu��t���b{~6Sg�q�w�Ξ�nΩY*o@ �b�(�~����v��a�}fn_�_�)-r�Ћ".t��:�����<�ǖ�\���nRM�
�!�!+���<�
���/��
�Jڈ�1FZ
�c�=�����ĉXbd̗d醌w��R��7�twS3�H�9�"Ln���9
^�~V�h
!=$�췶�
F��}���{(�=����(&��`xO�;�E��(�����ӳײ�sGbňZ��+���v1F��l�<Iɿ#��g(������A�ɔ,�f�!��cL�<䄫�t��,{Z�F���3s�W�,6h+�xR�1>�y?|���ȍ�߁|�����&����}���
�$ԙ�f�Չ!��g#�'���M�S_@��F��
5�'��f��#?U�Vm��d�ن�:���35���
B�㏿LL��:zH�)`�ڐ�G���O�R^6 ��eE� ;D�O����5�Q��� �'B/�a	"P�w�&=-�+�Tӊ�7!Y����ˆe�r��D`u���l:2�Ф#JO��\�\Χ��Y���v������m3_��؇ٖ�8�~|=�
���)��z��ZS� O�$O�:�
�]��{�&b� 3@>��T�r.gQ�؍KS{R3�c�1����ה7�R
z��м6�/"�<���`�EzK	P�2�Co�D4N��
7�w���8��I�ǿ��e������&�8����.��ث�,��V]E���s��Y��Z�.��؟4@��3HlʫGU�"�{$�2���c�������@G7I��/*JL3��r&���qM����E����Ȇ�ǁ%a�����ӑ4��uC���R:�����6����.p'l�L�g�҃O=��?I��
znN�zh�p����#NkpIϷ��6!�`������������W�x"���i�N;9�E�r���Z>��D�}8��$�0z2��mWA��V ���ɻ����5n�ݗv�u2L?���nc�hd�O>�t�n�_����w6��6u���/M#́ZM�R�\6���?z�q>C�ͭ".����p�)�����,tTc��&d0���@Fu`Bϧ:z�����:�ñ��v*�;*�bS���~'�I��t�^�=-,s8tx���d�����g|5I�EdO�>��կ�SA���w��ć�.ĵ��G�T&=�~p?P���v��Q[�Y3�+zoE����U9����Ò��Z����l�_�1'#_w�)r˱U�/Qu�̃){ �~�O��v�&�*�w*���,u����eF=�ԗ��%�U{]ar��S4� �5:��[�	�zVl$�YM���Ź�9����(��ik
���n|;w%��0�DNw[
�&��ִ_���ΡCK)F�_:�(;+��Ս����B�XzO��b0�:n�m��O:�3V���*NN�!>��8*_l����N ��XC��LC�F;M���(֫>׋�zB�,�!�o���X!E����-eO� �6x/�M��¡Y�֤��
`� VK6%���I�"n�7*{����x�L&d��
Ĉ�O�����̷#*n.�\�,��Fw�hLϴ�����{1&
�J��i&�u
�)�2�ɛ�s�.����s�P��9�ij}��FM�B=͞�9l�
��!(9 ��`ϻ���/�g��Ui|�m��zb8�����w�;"��T�89�(�����\*I'�szڑ�$j+���ڪ��|�˰���E� x�������0�SY�;{Vԧ�h�s����S�K�}h�,��^��H���"��M�8�׉s�����}��t�JZ��7=6��:	3��Ƕ��O���Y�Ӄt�O)��9�V&�iC��O��q<�\�
t9���"�=�%j��Q\T���Q��XZ���q��-@�1�0�_D��_��ǃ��խ*;Qi
��2�Ύ���j�0Q1��r���o ��އ0��{{E�	�5�|LY92[}��}G{�3{�*�H+{����}p8$��}~הc`0�N�<RI,c������?�/�kY�-2��cM��R'�>�H���π6R3%��8�ǵ
ݬp� `���
�鵃�s���;BQ?+]7�
���r��!�֡a'�Yt4��|�Z��j���(e�9��Q��_\WCl��� q�y�
�E�����or\�&�Y|_.���7�
l�tGw+�����
!��G�����~�A��6�S_�n�
�j?�,D|�3^#�*�ۿP��>�[T�[ �뺸���R���jT;��Ɠu]9��z�l��"/�ˋx���� eO_u�rm�ܶ��,uN���9�����J-��E���$���mq�y���-_������V��`7FHm[R����e��y��c�ܢ��p	��d;��k�<�~����Q$�2����
�[��,1���}?��^U���,�G��4����O���;͘%c�M�o���6.]y���j/¯��D	����� �I�ů�������<�~�V]�6#?�F�����e㼇����x��s�#>,E��^T.����*ix@ix@3�V��@zD�����i�(gG2Hk��� ��|T��*]����
,'>�d�
����K��/ýP�X/.�x.K�"�y����:t����������!�_������v��{���2��"���'�_t�\������׎ݰ�2�sTd�f��.v�;�I�҅�9=��7�X
��X�1�Tr��{�E��EG��څm�
 �wξ
~�`N��t��nV�A@���%��D�jV����wt�%��Cۥa�p�
���9�-}F����zϲ�h�7��pZc?	�Zx���$�d�Uu|�2k�krā�z�|�y��(G�B��9[c,�J�������	���sX!���2!u�S��CS���1�P�������d�\}��p��҄�]UA�q6�"�0��~}Zs^1D��sX�KᎫ1������
P�tKj����1J��� >��?wx���~����q���،�Qm�'>�m�Y�L�V���*���^e��ФSl��V�4���P�*U
�2B��* ��N�(o|� ۽ou�\y��R
ǔ�k�!�CL�r'AQ�#(��6��_9b�C�P	�кs�~��9����NO��0|�(
���Ί��>m���G(sLnTqD{�C�%�N"���n�����Q[��X�P�A�F�ݏ]�9N53b��w� $�A���ӌm$e^���-f�n�*	Uu���ѿM������$�T��n�:�(���aj�:����"p��t��wb�T4���?w<�`2�H&���$ɺysr�+Oh"3��B���Ǝ?<��	? ~m�UaP8�@Bk*������U�5V�?NW���:.��\�$*�Y��P�^�w�
��� 8,����7Z#�$�	����O%Z<{8�R���&[��������囱X�Q�! #�f�%<`�	��gSXI����@$�.��
�8��
���j��ղ5���}��㏍ےD�������:_�8h#42�n�YVS!=�_[�pÂp�M:V��"g�����y��}� �P�G�kj!`���v��O�' E�T�i�h��V.���O
7���ﰔ�>G�^�c~P5�C �(���-g�Z�Aݿ���]��9�������܄�;?ԗ�)](���wD\=ۙq��Ûz����"�s���b� Y0��x�o�"��x�?�~X�j�P�b�M�T��`�&�6r�G��QO��Jf	L;�i�GUb�(%]/���l�����%!|����ۢ���B?_)����7�O�a-�hUJ�j'-D^c�,[�U�y�fe��f�
���A�������u]�G�ؼ��`�ʸn�e�
/�M�	�u�W�Ɉ2�5�P<7h-�].���cp�r�B�]�Y�����@�2��Ȝ�|�c�p����"�4�]��Dݓ�[
N�\�0B�3�Z���Y倔x]��::�2u�jnݤbt;�1�l�D�
>�W�֖h:fb1��\1Л�lg*�{Q�π<sd5�"D�*%Gu7�b�Y`/�y�c���T3�h�s߃���Av˃a"fe��FO��3����ff��y}�S�$*�u���P������f�
��k!�5l醭yV|a���A�"ٳ��ӬT�������d�I���F�<xq�J�p��C$3���_�>
�Br�C�
���Y^��zl)]EN���1�:�А0�پ<pi^w�\���)F1�1�V%؎أ��w`hΛ~�#�
�+=f�q��7�_~)��t��U�?'�u���!����	���s�"-w��
\�P��b���m���l��D�q�)hUv"��}CRAJ��]^����_�򊮷4���'w��Jް�m�/K��
&�\u #�*я�By���Mu���S
�%�tX���3L�ښ@�#0�&�~O�",o@QBφ�ke�
���Ζ��?�4К E�n7Hb���{����qX�v�Ob �/�6)�̹mn��_�.�0����A��>6�����V�Dڮ݇���/�S[f��l{�����k�h��{��}vwj&�z�~Ed;E�(l�	�Z0֢��+��|�CILU��ӰN�Ϧ�.��vģ ���ƿ�N�p����C~��ُ O$Oj�4����'���^�Q�o^��Dw��
Ծz�p%�~	��c����E�z�X��b�W�W^���� �e</���- ~C�N�*�V\%�^�h� ���Β{�`��3o��y��VM��~�cB-���_��3F�� 6�i�t>_�k%�C�Ϊ�=�Q_���m��z����aƄ�҃�/�A����Ř7"�!G\�d�^�|n��?�
�+�ӻ�@	����k����Gmz��jV٭J_v�4F�B3�t]9s�O�� y�tN���ٌ/�((,�~W����}���V?08���Q)(,��X�\m�����z3�fd�ly��T�Yl���i� �]�,�Yl;L��!�n�g�˔Zr������q�R�g�!U�,����3\lI�����=
� �&�U�$xPCZ:��V�J7���W�Vk�l��šW�Ԕ�Z�pJSe�sT�� Di�/��M����%��x=�����*�R�!��4)>���4��r��kp��i
���	̎9w����3,��Vu�
�n�=�Pc����Ɉ����s�G�$Rgw��ב9[���p
�s����|�Z� 'e��D]�7��� �������~H$�x���~�VNST6]��o^;B�X}A�ߟ�|�� پ�K���C��e�S��@�(s����������H�"#.`1�o�=-�)��0�;iC����j��ӭ���)����^��A��D��"�%�0��(��y�@�C�$�j�*�ES��	)8�����L�mIu3T��K�}��V�:���`r��3Xg�k�<�Y��?��OQ�XQE�N՗��xIM��p��[du<�|k��#PL�� �v�[8�h�N��V.�9�����7����k��_�F��i��0o�G4�����+�8D�������b�<+lLUv6�?}:㙎��M�e�����`�B:|���
���!k/ul5(x��{Eg_�y�#ǥ:�
�O����zI���4��/�/�ؗ��q���Kǆ�V��Vf����	j��(_���څY�"E�wr/�6�/�����@sg���Ȝ��O�"��JR��=f�Z��x�i� �%�\n�P��a���Zȡ���lFI�}����VDmd��t1i�l}��S)��w�/i����a�ԡ^�As�*GS(ɤI����V�	W��r�C����|_X��R~?#�<9宍�U"V�v
�Y�
�[Y�@�������<�L��a
�t�}��b�.Y�H���!�%ꪐ|�� �ЎStr�]�i��j� �G$��bvKT�=MtX���Fx�R@������9 ��F!�D�8�m���w��1��V��+�D��Z�E�V��J�V�9��b�d��U��YO�̘G�����C�1?��I�"�_���ߩlx��Jf���d��#v�+��o��<᎘��}�;E�6%i|��hm�n����������u��Y�ŉ�s�R�LaNH��� ��e�pwh5�&*�y}uT�퍊��s�r���2rճ���;���6�����;
���%�F�K)O�f�R���'f�I�����,�;R�H�/�@jF��J�M�[ڙ,G�����"��
7,�V�;��_�'����5.�q{�)�ϐ�a�|.?�r�����e;�n�9�L�'�n�����JN BW� �Vy�����K*<Qpe@��1��18m���Rj���R� �`E/���``ao��G`����Z)�|�G�2�.񗼽$'ʳ8Rm��^�. M�X!E� ��a&�m5a;��K�H�N�n9sB�������9)!Wgo���3K�+ 
�Q�dl��L��o   � �F�u�(J�Q��ı;c��n�W�V�-�s�����M�+Q��:9Iᵒ�4�gl����c�����t�3��PY��\��|��
k
+�A�o��6����^�b�+��t�*�x�f�@�K�V�+��L4�����(|E�vtFV����1򦼵e�d$`�wSل�~J�EG��QX]`�=�E���w�.�-&�_$����-m�E?K.Q�r!G�4oӱ�%�4�*�Tt���v�¹�����B�RS�ά"���#�j�S4�g�!�,�]tǜ�PH�n��a��/"�{����[x�f�
e{�G�W��ʑ��P$}$��}{=X6�l@˗�.d�* 9/�f���o��M��7�I(�i�z��n�������?
�Co!!���|�]�[���cԁ��9�.�4!��-�}�/��L�
 4�g�[�z*���4}x�
.�;A"�|/���)"���$�e�I�?��!h2F��ݺU�q��v¯�7^�Tg�Q�E��qcբ���=3Gӓ���ǰE�rt��Y\#5��Z��mQO���A6��%jĈ(ϭ�'�*�)m���ĒH)y}�"���НW�B�?#t�z_bq"޻�v!Q.r�~�^�����f�A�FT ����+	$�=Ԕ
���NSpw�[�X[�f����g��tl��Z�`+E�~�E:x���w�A��Kz#f�M��fϠ{ \=��ƳQ(�Ȫ�"6/��L�4A�r�q�fI�G�;R�,zX�	ޅ�d-^�������iG��p�p�hf/8���v$P݀ksP���?���<J��_?UЖ�ܖ
ʧ	�f+�V`��D�Z��R�Ǯ��>1?���ʴP/i ͊(�(��`b>�T���s?��'}�G��0�J��#,�/�8�7!�K�z~��!D��K����v�*/ �Ci�������@O�?�t!S?Ĵ]�I��Ӛ���K�fJ�\��~����4�Q�e,;�E�@-����o�����L,�mO�f��_q���O�?�0�`��8# �";�;��ͼh������^f�e�8U�=Ĕ������v;U�7لm�p����ʶ_�qS�)��Sb���b��P�-8ͯ`�Uw &�9#��^�n#��)G )��O��$��?��i��޸��"!�?0Sr�a��L-/��Lq&��=��3�����Xٛ4X�k*]�5X��_�$뭮4I�x��#��P�:����������!@w��wY��3_T�6�u�/��ӺԊ���Bϼ��d;#��=$�6D����A���&�%��2�f{o�ҳ��
�z�g˱��:M�I�&P�UX��	��`6��Y�w���e� �ؘ7�)����J�x�����'B���6�g�/M3��@H��t�u�� �~���A��"�#��r�t�XEi[��/�M���v����c�� ��qY�5��j,��
�<��'��v��օ�Qx�6�!<	��MLF�}z�Q5�e&�)ee��P<�+����
�|ӄ'�uT
`������8u�h[F>�EV�:��v�W}�ZN��JFx�f3:Yo��#L⏳|�e�Ǡ��;B����i�%C��L66`x���A��eY^Ұ��������J���9�na;����Yaij��'�m6U��5��)D5mVV��ȷj��C������@s�T�!�bT6yA�[V�J���R|�]n<��x﷪�2��/�'���(1�J�B�0X����7�'�[�.P�lV��.EEh��2}�&B����G:+a*9k[�[�xJD�k��B�+S�L�2j��$}=��6���԰���ǣb������.KU�5�7��A����Z�DZ��D���)gY[�sN�LЖ�/)J�)�f�����<g�⪶�t�)8�_ȾC���@�AUg$��|	P}l&�3�>��g3���������tB�qUDfՀYl,FZˣ=1_��a�g��p^BN��(P{<qS
�x�K�cC|zt� �|~����n�� U3��AJ<����8�)	�]�Y�ڍ�}�m����-�ܲ𕟜�8o���O>E�!U_[�݃�7;���n�XG��x��\��#��9���F��hS���m1�3��a����J�R͗��n%pB�EP
7ZO<v񆰖�����y�����h��O���u�-O0����i�M�?b�w�h�ֳQx��"<���8Ap2:N։c?�i_^���j/ao��5�h!r/ �41��J[方���B����O,n�~�R�"�	
�}%��
�Lm���2�"~�΂�|sع����ES0t�_tU4�� PDg��Nk���� �茜��p�wc�1ȿA-������#��{���l����^�߱h�Wxq;ߣw�:�@���P�B��>�`&�u9�.錌ش�I��ox�4L��}�l:u~����X�9�2r�ߩ�
��[p6K����+qb�.a� �(W�w��X2��'�,e�����`@m�-+�0eļ��{,��"�M��y[Br�� N���   N�҈�U���Fq-�Bd<�ԥ���C4�7@���RbO�B���r�j���8� ��qA� ���}7�Ű���P�ɠx��X�N�J�n���$��E�4��l�!P�e�:X��j�-?%�|�v`�3��W�F+{V覉�<>�����@�R-3t��m>��n��b=3� EYS��B0NB>F��X�=�>w�Q���97���������C�C�%�� ���^Lk�s��OX���'	r��T���>��Kk��������W�]�NHs�����?�&�P[x����a}d���;b�(�y�SB��ͪ3e0쐔�X�*�i�LA�N��e�0n��|�y�K�9}{8f���,����>�O�z4�d1�9ua� (C��.`��8@��J��n��Ӑ��=�����*g����
|��3�����:0�9��卐����V���b"��+��3M!܋�}r�72s���z�f��ϒ��E*�ٶ�m�~����0���t[����
yI��
Nk�G�e��\�p���NL`�fv�*����H���5�zk�����YW�Xھ\v$H
$�y<h
���R^�V��/��>}ڢ&ԓejsm��`S��i�Y+�mIa�ԇ�a� �i�1 �������u�Z�?Zp࿵�
���D��q�S�7:��	�'��\�������xu��ܵҷDF�
)�X�����4��LM�U�|[�R� �������
_x�<.�FK��bx���fB�7G촁�|��>��#�ۇ� %���|��e����N˕
��O�Z���߷�)�C�V�'[<�ɷB�r[P�M��xK�=�~��H�RT`���;ODb�#30��LtO����0�d٦<g�
r"�aec���OP�ܺi�z�R�D��W�4���g��G���� Z���1�]	�kBw�
���/������4�W5B�mw:~C�=�3G����Ϸ&��f�o\p���f8�6��v�e��C?���Q8��H���tD��XԪ��E����wHK㘰��%e���
���te�]nh�>��@��e�ə���r��nJ�<)54�5���t���� ;�/o
��1yW9�S��}��"�.xS�k�Wlr���7�bA��7�xx0��z�Zm�$j)O���@�{�,�U�;�I�q�q�	=�� x>6QOw"�Ta�0p [�_l�c���}`�K���ȧ�R�	����f<��3`4ey��<0n �Hf�5X��Q�'����84?�V�B�M�X��i��O��&�*���J.��5�ջ���ۀ������ެ�亷��NA�Hڊ���o���#���\<o-"�L�{|��7��@NJdΦ̾��s>�%��/�KC�r5��/�p���:T�9D��������(���]��N=q9B�eʪ��+�F�mD�!G��H~�����������M՗��
�(�ʿ9SO�Qi@���!6��GO͹B�ӥf�>WZR��`�O��7#�L����G��芡��0Z]�%PLy�N����)������4DW��#U�EQC�E��	_�n�n<����N�H]u�D��['J��c�/k�@|Q�*9�_��,F���M��aW�58U�jU�P��X�WyD{�c�V�I�x�V[��J�X��U$A}ҭ���]�s*�qS���2����Hs�zl�e^�d�	�����D�\�B�Fb'��mP�-��Y$���dG�*�FڔP�qq�I!�E��^U�˷;���n��(����L�<����?%���,~,�-������X:���� �Qa:�]���@͚b�,��\q!^s��?�_S��)���տKa[���G{���~G����p��z��t뼉<o�.'�j��ۅA�9��^?*�	�N�G��C�Ɇ��!��AxH��]��7��tW�Wj�@��Ef-y��ɥ$���R�	O���k�e�m�K��&��\02��G���J�]�7�*_q��`i\�,�����J�7f�L$Ul����ո�e�5yܭ��)���/{������-�onLr����@nY��U�r��S'K�o��r	
N�V�P�/���]�=�G�*3��	�[��?�s~om o�풏�>0�I?/FC���
5X��)�$J>�?�-/�d��	_�xm�|�����p$1e�k� J�����5���\V����[�����&1'�M4㇒<�S�NY�@rˀ�Yd�`�7B��5�В��K�4AbC�C��
sK�ώ.�
%�1�?s��~]~�t	'n$U��\�Q*#T�hm�i�c�OR� c|�c��3�{f]����n�V{'5�c�bFJ�}x��,�P��P�����7���5��LXם�5AWz�}��J�_��ߟ�r�'�J`'v`����ޟ�2�l��M��	���ẻe�U�q�eK3�\��B� �֫O�y��ci!�e� ~(�C�n��?�Bt���2�AT��Z�u{<���DqNQ���I��ά�v��V�?�i�j�f0�Ocv2y ��8b
y �Z�G�ѕ�Р1xJ6�΂�j�^�ǭ9Bm}6�ћǐ��*�
5ID���s�B�=�.I	ө}lU�ǐx$�-X�+���cHƪH���"���d�]��aU '��c�f-��&.�6]�#�G��^�]ǖ��\$N`&���e��)�1te=�L�IV�`}���������8�h� dBnd?D0��@J�G	�]���^���������/�� c �r�����
`�����Sڮ|CSZSs�h
f�|�����;篙:~t%��������`��/E���\�"GU�CZf�mms�+��B{}d2�ey�4��ͯ`�Sw�QrS1�=`	���pr�R{;����	�󤯼�O��IA1�PJ�o>�f
�O� ET%pj@����P��3h�i�|�ؾ����u�O6��H�K[��H�G�����Sas �ǢI��<qv��V�t@p��#���[��T$��
Z}%D�)��@�P���u#���p�����T	#骗��Hgr�D'�fS�U܄p/%�-S�(����]�c�
.�vnV�n5T��%�ޖ4����a q�+E	�p��an"�mH�"���I����9L�8��X/���L � �<��G7_�%@b�DJg�re�����}oI�8���~51~N�d����#�¸�ED�zi�&$������Ş��xМ�f�;~�p/�7�)^ ��`����,w��m��`�	�8[x���w��Q�,��+Դ�"vnx���y�\�6�����)
 s������Jɏ7�횑Dm[Cy�ʕ��� �ǈ3�G�B:���NH\,d��RA�51��k����r�vuq�geL���4O~�S�VT�I>�+@ps����J^��g<�lmPP��[?DzY��·p�����NQj�s�D�%ب�vr�ׅ?�S1��H�H�H%b�'nL&��&��.�^��r�҈s�q|�[7�~ �,n�0�NJgx��U�jo#��Y�Bu[�}�AY�8�D/P�Q�0����gE+�_b�#/��[q�d�A��þ�Fy����lћ���3�����@��u�œ?�p��O:���c�Vm����RC�o$����9Pk*O�͓��u�!W�h0�0a@�z�Î6S2|�,g�!�����@XR-C���F
�r�#"G�ỒH�`l��%z�3����1�y�>�M�����.���NZ[�k@����@�.�4p��,��/Б���)�;�x�e�CpJ�(�ֈ��窎I�1�ȷ�|�{9���� &%x�q/��5u�GJ �M�����Wl���S�1�},(��}ceu����Q�j&*��4�I���fĕ59Ň�j�\�As�}kwb��uHlp����Vo5'�/妌����y�O�T9@���L8*�
�U޹`H~��P��#�TK�uO�`
�V�_\ �ϣ�{:�~�g�R�������Lk,,;���`%��B�5�ǣ�-�FX�VPA��Q���TU�k�7�z����<
��H�>�!��\\h���h�m��'c��J��'x������S;��&�j����H�{[-CTi&bp^n�v5$�:t��<e��eYx�ď�ڰա�8��n���-�¶d��8���13��h��y1B��A��*�+yR�KfM�J�|�y�G?�����(�۔~�*��aߚ+M�I�9�^\�-ߙ�߆>��?�c�	���<ھV���z�Z�p���|�L����8���I]��BT>��H]��ȣXm�_�/Y<��gT�l=�؅�#�hF�<��� a)�ey����j.P
��������|\w}�i*����� ���� 2�$kq�[�������RW3
8ِ���1ٝ�ƽ����^`�f[:1��LZT��O���~�ݝ����k0�H9�Xځ�15��K���%C|�zs��qm�g���&�+�pHA��?��K�tM���R�7���� ���;�������:�b�7�Įh�}����S��7�F��q�`t)�~c	;i��#��
yM�s��^�K�LE.�Z�7�MB�<�gZ�CǠS,��Q�a��Έ�zD_�~�)q��Do��1�� �+�)�q
=��0) NA��UZS����yH��2�Cs����y����{�C��`b��V��� q�2��)Ėsx ��U*/8��s���g�?o���~���o�O�BBx}K�E�$<�Lg��N{M,Z��;M�w��YJ�o]FIA�+"�}�XȤ��+A�.�ý]�Ե�tI�2v#��T�_)��a⭘Я�!mL���!�2�x5���c r�1w.��}�
�
������Hӡ�|��B����I���R�Қ��!{���8�؛�'ۣ���R,�h��t�!!д�p|_`��ζ$T��d�QN��6|�+F~�f�D7���mسG�h�PLT.��BT�6���IY����6kF��G����7�����iW	=t7�u�v �^Q�@��:�N��s�)��R�V77Ñ���+e�y���҈���+iGj^�θ&6oP�
L�S��a���a�J6���<��Pb��|���-+Q�����!�@�&�çJ��U�@���6,�&~j6�YF+�^n�PRkJ��5��!�L�����?c�
����A�����GI�;�^nx���BM
�2�^e[@\��sa��	u�_uo�Ao+��:՘�Uyx\� |��v�z���p�����!�\��v��L$�̼�N��	aԆ�=�c��j|�<�s�BF�`��o ��3���N���ZFeDd�->V��?MR]ǈ{��y�Ab��e��Agpw�����4�q-.K��/�f6U����[�}7��R��~����n���璾u�J�)g=�?�=�oD�I��Zt���d1×�G��i!yZ�N a�H��А`U�����k�5��Z#;MTz�u�"����ơ�۫O\�oH��ȚW��H��8 �B>@��d�!@�/j�^�q��"������N�{c�������u���ch�Ti%
��0�I~������Mu���F
��+����f�o9��Ũۙ��F%lEr�{G	�Ft9껇�BD+���Af���ٯz:S�0=�\���5@G���c\Z�}(m�빊'�k�&omP}S�t�\����Y��������E1K
�{���Jz4��Rڽ5�`	�tj&�� P���
,���-�g\��q���@�xFT���>yc0d���<}�ͮ��bJ;�
.�W
\�xM�[��&����땅4~W_�h=�Ja�;�
O4�U��H���]Bl��Ibl�ӚG���H�z��&ӘrY��o�=��"/6���;�c��wyn��Fv�!��)� �N�]-K`�򨻂׍&��1o��ߋ�ZT��Rw��\G����jдv�m}ߨ��yuѽ@�^"e%�lj����2G�����v�m/̪�Lj�~`�/Ζ��N�����X	�奭"<�;���9*X�N
� ��p��4
ॽ��?|�w����T�뽖�A݇n��Vfx�A��eN�)�P34�*��&ĸ�+������4X�eG������9ۄ4��|��Z��}>D���v�]6˝T#�v8,�aXʬS̛IM	�8*�m��La����h
� g2���ó�z¶���̈�XLT��c�4�d ���3_%�(>m
ؙ�cW��ųUt����R�A���
���12qN���T-u*ݞ���o+��Ӽ�X0#�+�RC2��D졻��l+5��R|{�(�б���;`m$f.*�/���g6m��W~����L����6��:}'��e,�X��U��"Q��w�uc�b�`8@�3�p�]H*.�	�<@�B�!+ȴ�I\$u�P�/������6T���_������t�'|�	�3%i�7I�Z�;��Ϳ?��3��������[M=y�	��x����Q)d�P��Z��O��*m㍪8�7�?��ԒgS��a8;P)����`"�E��NSΞ+�Na{bX�O�Ͳ�'�/�L\G��[E�hi��x<q	T,������d��0�)/�2�d�o#0������S��	&�0G_os+)�Эn��_�=ap5�'���GG��^�X6�
u��@�A�u�D��Q>v���3a�[w�;Nq�ej��~T�T����sd�j�#��S1���3c��W�v��t���K�>�oր¨�p|h�Fnt�G���\X��ʻ�\5�/i$�t#��Y&�20OB�j����J�	��_��O$����cz��:���N��M��:����t��*p���@?�M���-�N�����@m��J��Ώ4,}�^W#o ���DR�5��i?�&���Ms�yl~��#$���'��]*H7��Q�OҰ��D ���Z�扙�Z6~���G����<໮��
��zO�-��TP�cߚ�K���5q���� ��=�|k]�F���䉀hl��yZ�fHШ�)w�톌uX�јħB�LM^s�;���/c��';��-w��.=w��<>*�f�ra�wR�ɍ0��ދ�S��DW��e�C\�W�d+2���o�"�1@Mv��G7R��}c/8IU�3J�P����b�?@�q��S���i�e>���'�����E�(��>�R��L?���Z\!�S���pF�b��B���Z�ԃ_Ap������sb�����9~AZ4���e�d�j���ټ҇>�o�8���a-�|Բ�X��'U7�{��"`I��S�C7?�"x��I�uF�Ӌ� �:��:�ϻ�(�+\�C	i!�W��eg4�Ss|37�R]=1��D��K�dE`��=��;k�J�R�
�=�D�JJs��:.��2LP0�I����
HQ�N�6�J���aQ�fd���k;�y�,��e^��R!��,��drE]Qs�7�qY�1`<����s�����a�`�o
��jbȆ���0{��i�]�S�^`�P�|P��� ~��k��|\�#�;
�~С�7(KL�줳y���k����Дw��\�Z�L��Hm\�\
�u~�r��d���A^#�W��wq|Q�&�p���juz�7.�"
�{0�"`4˃�%�)������2Og�U���m%�ߺR�\�.|�ض#��|��H�Lc07�U��\�o��>4U�	*����4ed����o��N��a/Rg�/X�MR�6�
�@NL|��/(k� ����&8e�#eh�����I6�́��42]�R�oD)� �vdM<P\�<�bG�4���}Q.3�9�O�	��
<�`z �J�l����%6#�4 �
����Zd���Z�����H�9&k=��6HG���榀�;�;!s�6ܳ�2�WN]N!x�[�/4��}�
�[�H���W�_8Ps���K����<�k_���>�qM�^.	��C���P9h�(��H#���*����F�y.p>����*N�:��Х��兂?0"�,
;骑��qCy�ν�w=G���,b���ʋ�k�ۋ�(�(8�s/�h
S��- �����8�b�
x�/n?
'��(�&���E�Q�_���&�15�9=��
a�o��8�������:�5��;����	Tc&�n������FЋ������AJ���+��k�^��k�O��dX��/�5��[����g�M�1��P�?�9�������{X��vE]�L�m�.ӿB@��mNM�1�tƜ_��ҾO\c�91r��Uf���z�=Ƃ\)�.��x3�� x��,�CUa��c~W�a��:%�a�)�!i��h�K#�tAۋNQ`\�}��Uèk�?��,�[�����.��1�
?G*��I��Ɖ�Iv��{�Z�m�jA�G�u�����)U��i<�=��< ��Jx�^��[	Dj���h�B��]1=�R�����Tƽ.T޳�^)�*�lgę
rjڅ����c2��
T���g�ȶu�C*�D$��ih#�}�G-�GOz4EW ��+)��1]xTA��}f�����w`���b��~�J�5�N�
����յ1�T�3�f;�R�����g?�~=aʂ7?~� J!*u���c�����s~���n.B{���s�5�ݺ��Az��B.jW��΃�a������hY�
,�[��d%��(�^ڎ���A"UE� 
�4�`�s��2�[y_�o���w�1�fC|V^	�DՎ������7� �Tn\:���*q�-�7�ƧmJI1 @;�p�Ll ���}��f��Z�wE�V��TB�2#5G�RJ�ނ����6�zkI��E�`��3���h�b�������Ah(�?��kX��n�<u�j#�T��I��-�~=S�E�*Q�N�q�f�݊9�^{m�Z{S��I�ˣ�)��|ar�
fb�V�U�B�������ѧ�?���f����0R5� J�<%�xsb�	��#�g�m��;��5���J.�{%�?�l����⮥^���
�˔�p�	�KnMq(�}7t�o���s��a���X�۔��@;�~�َy��d��R$�N��t�����#�#��H��׍@�뙋^� d]Т���Bvݰ9و��M_Z�6�=����44���M����+�EX����C��޵"�j��h�[���M�Db#m����K�_�g����;��m׳J�RKV��[/�{Hw� "{�=�1��fA5���	[`����A�A�_s���v�C��p��D��޺P/�&�v.*.�W�gK�o�N��o�b���F�~3�\7����;v fhb*���G<�U\�Ӯn1�4���8Z��0ʧ;N~�FG�f#���sF<�������K��I�L���FnR���4�Q��&��������<�&@�]V`gt�;D�Dn�����#͠��?F��ጵ[��צ'��8;r�ĎJ��!�
X�I�!+�U!��"�28�)�Ze��5��@'v
V�U��`��jȂ�������3�ޡp�~0\G8+�O������-�������)���҉���g��hY��Xv��θl��h܎��G��G�j��ޞ�X�yoq����Wµ���&nm��I�_*
KZSu�)m[C'X��=
� ���J�Uh!�����I4�o:��8Lѕ'G�b4`�+��2{9�D����r��	�+J�"�����`��6�N�վz8��[��I*��|��\y4m%53�5��U���8t��$>��e�kpA?��]�{�$��=�
� ->n�u���Us�>"����3���ȴ���3V
m�(jl�y���?,29��Yz5_��	��+1#����97|5��N
k�=����ͣ>g��*�� ���~�}�������\h&���ǔ�j�zv��m$�G�����rd�����Y����ɜ�3�D����j�uՊ�L����GOU��+�*L���)i�5���3����0a&.>�.��э7�@�*�j�V�F�D�*S-�U˿n���!Ӗ�~��ic"�H��
܄)F׹By�<��7�%"��ƍw%�աm��jn�\�՞�VmE�����wIS&?E<S؆}� rx8�T-*	�����Ulq~��r���š(@�&,V��[��|�B՟�Gs���W^Wq6�a�.�d`D8��Xq�����/�')�-�+T�3����DϽ��?8�Q�>�Ċcu��+F���PD_ �VP�?  H��%R��f�(c
W4��]�(]q�7�F"�n)*�PhuZ��g�L�Q��ӂ���u�������d/ʻQ�����`���o�#Ի��&Kt�YTio��c{��S4��PAŇ{^�1��OjA���U2i�4A�Ie?�	z�/�&��g1Z.ӡ;.·��\�p��k�W���]�(3��]�u��v�Ľر�:N8폄r��Ͱ@t
�~�
 }9>��s*�٤r}Y�Bv.����xO��d)���>�V��XW3[���{�������C�g���(	�[;N��`FX����)�*Ƙ�[Z��ck$􇫾����%?j�6M'!t/Jy0�-�L~F_�s�j��qle�K٨ti'�'$���Q�,��v���I�cY�a�!����+L���NF�L7T^-K�V�gF�{�w� ����ں#�^�X��'5�C;�I�?/�_.s�#�TP� �҅���)i���
�&���6_^����b��ӎ�}���) <��`�]?�� �5*Z�I��h3W&8PJ���'�MMuA EܴwgUi�
�e�MhX��U}IRj�+��%Y�Q7y6�ߌg*K���< 6
;K��ݰML8:���L=���1��x���WP�בY ��([
��|����9�k��Mա Ĉ2�<.�H4.W��`٭���gԷo���=�)O��5�{5j���tA��8�3�h�H�\��j7̙V��@��0c�,(��j#�� ����bXZ�7�|�HF��,����!C�T �a��f�6��/�T�(f1e�qW��7�5p�E�Ԏ�ܬN�Os��VS����E^�5{��Y�rз�+R̵A[��{�Hwye��U�0k}e,Sݯid<��t���xo+Z��Z(��܊茵Ӳм��PU������\*�],�$Hڼ���v���X��N��^�x�4����7 ����3�7iҁ�U��W�����Dp�V~�?;j��a'���=��g��{ ��<��S��34�����2��A&�o��A�$��W���y�ڝa�n��X������RJ�f��?��r�Qu��˞���gx���Zh�J//�5���X�Pl��I�ܙR�"Q_��J�#֦VE�'�N�hw^V��L��J�kͫv�"�iOk�XUc����7��5V�x=S��c,$v^�� �)~C�%��6ׂ]�x.+\��ȅXR{��\�܇�� z��N��-�u��(���sJe��nPO-�������6d*�C��J+�@�'f1y<��>���5��	,���uB �U�S܀�6�L���Xբ�����0�X�Y��kM�XZ�a�@��Z�=s���IS�my/+)錷��3�E���	sD�;c�o٧K�aO<	e3���2q9�&�<[�偞�O �����4�D`�d4[F|��}({ݔY�d3��(k`0�f)O��]�T�y����}o�G�Oeyg~v3O�W�ϫ��
x�4��&O�q�����f�1i�RX�����ɯs���Ov\k�V2JG��U���e:��P'�� ��g���$j�V���il␫���Ć��ղ�2
� ,1`/�麗3���WW�;��Cb[�J��s��G�|��z�OsS
�̏2���T���Ԅ|h�å�!EB.-����
�y����U�]`�nld�hG��^]�����f������

�$S�	����G
���Q{//5޺C�AA51��=	��7����<�W6�}�;q��eߖ��@�@a��o:=�7s!lZjM>�a��b��ɳ;<�=�	N�j>CoJ#P�v�����D�fV�"	���jt���4�2-�j�]K�ӕK�����N*�e��T����f�OD~�1y�:��ď4Sh0���;/BV�S���@���/?��m��]���$�UW��|��k9�j	[�t:r�ܢ|�"ۺi��i�{ˑ��ʣјUnnD*�I��v.�;��]+q����;�ڕ@��x�X���#A\T�����\�hP��g�
�b�AHq�k�=�NE���� ��V1&�-J+V���$��x��7�G,���O3��.ۮ����C~8�l7H�.�s�����������ݿ�Z�J��񹺛����&�8�>��ҫ����c�|ӧ�Nt�$���d;bl���'gT��[~�	i.y���U���I6� ����QUcIV�O���i}W�W72?�F5��2�R��O/i����>�'{VjT�@*r�5��{�8�Qs9���Tk�gx�P{��뙿�b�	P�
)N%�,���- H�n�Ѩ@NNP"@׫��3��B��(���G�Bs*i�h~�R息�~���S$��U�I(��������B�wH�꤯�1�W�-X&;��7�3��
Uĩ68��g⃞��Ts3BC};�F������v�i��7Hۃ�� U���tW�,棊|��~���i�/b�$�	f�%ѲzN��#��
9v��0���E�d�"��I�5$�9|�(�O����/�Q�YC�9�<8�O�Aa�SM�^ڮ����Ҩ��T�����-m�t�<O�id�W�M�9D����c�=�$����|��ɕn�i�!����g�fz�	�T\�Ϯ����w����}��<�Ƽ�Q�.I4i��9/�$\� ��s~�8_k��@�#T��L�w�_L�n� ���s��b �X0#��3h�+�C%����	�U�W{H���q�[��)��<.$u+�v.D�Y^2I7�Ď�s,���h�Z��Y]�%���SY$i��	'�~��{߆�vI*��m~���Q�i��}7��L�+��&�5"��'��R�>�$+���wB=g�6��bd������*+Hz&u�95ψ��L�j��3{��'��or8b�!ϩ,b]X�����~��̽ˤIa����	�^�e e����"tHOx�(Z�����<Զ�_�����HYjX��� T��W����|�jǓ7ʚB�;�'<%��a�Z�ծ�a�1����-������YB�`������Ӕk~����!=$��0�Փ硥f����R�v�`���+����ծtk�iݏ<2�+G`���m�Q���ܐ�^�m5��-7�_V2s�
�_\;��\��Hz��u6����9�c0��g���% �G� p�TRLd?��E�����]MV:�̭�H�z�s1��Έ��r�n�H�`;X�O�p�7~Y�캵���q�m�b�x+�]
;,6���IIMb%�bR�?��6�.��˒�E��<��2�M�[k4h%����P�3di�g���!n��@V�_��B��T�U� c��W:C���/�V>���������a�N��~-*�٤�$lzNNkM�-R&��`�ɳ��=�����n������{��5LE�Qp,RJ��m�
��*}$����C=f3]�@͹q��,�Q�Y�xW����Z�Z���?��̞���]9s���w'"�
t�:������Z¥�0;5���,U ��ĩ�k��
:��D.h#������8��Q�w f����%�	y�
��fƟ�'a5�參c'�������ŌFH����Et1�N�T�vu5��� ��T��$H��e<��ǟjk�|i#	�c@�E�O!��h=D�B���k���kF�3�v��Ò~� �hy�w��B���ys�:e�>	�H4y��ȱ�y�'z\��9���L��,oUȒ&�:
E�X�U=�ނ����]�uT��k��P{�L7T��l3�_��%/�B���F�xP+����B���a���v�m�3�*�n��䭱�#��X�ؿ��T�����$��K��؉n荁m��:�!��K�om2Vn�g�u~���)�(=�\o'���Z������K�n�yCNT `J��0�����}������M&SwX��y~;��T�7�o�Ge�����b�X�6�HERr��!1n��v���2���*�3F�Z��lF���Ȇ�$Ӆ�����a��e.xr��KW�뛣��<<^م|�hZ�����HT�|k&�H\���?B�LGE��y�ٙi����YdMR�P�$� 7u����S���M�0gC��j$*�t|ۥdpϨ�����TZFnU"땎d����\�Տ�[���ߚg�׀������iB^gY���_99�~	4 !��Y`A��<�S�ۜ><����e�b�#�R�_�d�@ ��%FT�:���w4K���,b.��zU#�U�Հʶ��J��I�=�l���kށo�ȋ���-��	�!RV^J�M]pv��Ǳ{_HE{���+�5����I3�i   	+ �-W���"����2�ࣨ�\L��V$�ÅQ'�Υ��=i���W~�[c<V30At�[N-�J�~��� S���;��xf_� .�0E~�h!w��ڈ�l%� � ��H=ztm(�	�3Z�=��Y�A���R�{LY�c��OJ�]�Z�y�Ul��k_1���y��غ�Uw�������r%9�"�#~�%�C|�'dU�[�\j����.�u��D�U
!��z�[hi/�b�[��L'=���.��./�}X��
|ff/����
��������[��}!#�.�r�kdG[i�=R�E�P�fWb���Σ��'�ʖ9%��
�&�#!���4�dbЈ_z�F+w��(T�6�(a���[�E���dt�:5�vXB�L��D]��������G�+Fd!��靔V倐0�~o5��g�%�2&!ΰ��ؑN���L_	��6O��=Հ�>l"�Z!^�B4�L2��/m�u�V�=5��H8:�>�[//>�㬾s��8]'����~a�Z���򪀨��ھA����4����}��dC:��g+8>O�a|��������	ˊ�Qю�lj �*S�d����Ca�u�6#����?QO3��u�cRv\�{��E�>3��\T1�S�@�u�������!�>����;DG�w."z{:�3�D!>m?�?�ڵAl(עi�#'0F��P{�(�9�~�Awl�jh�`6�؛�Ӕ*dC����p(Ŷ�� o�@�<���j����d|`�d�j\-N���>C(),��n&��o�a%���r��7�D#�����Ϭ:9�ضl#���4�G�'2NCd頱�`20�R�Q�֎��ToB��
��YMr��:���;��l%Kk$��_���Zt���M�
���*�{��
���p��  BG,������)kbF�R(�:�� ���ϠP�-� B6�-`���Y��*�K��8
��'6`H�7��v"�O�y��㷦v�lݭ,/��;�� �VIϬW�S�k����<ӵ`�
��J-#JhC֫,�������-)B���'e�L�����J�I�0�d#Y���ǉ�:q��0J(c�ز�Tz��J�+1$��i8�--��.b7��N�8T+c嘂��sFm�K�j��f�\�''�L���oFx��u�q�o�2%V�䒎�Qhkt� X�V=��i���y�~�P$*�����0.�y\�аa�`
p(���8���D
P�3o�S5��(�aT�L�6s]��^�H�[��'�@B� �h   �mO�KD$CRX&	�s���7��uu����a��祹�6"�
'��C�0L
�Q)BE��,AP�� &Cdנ!P       J6��PZ��  y
T����.Z�8��AK,�2�B > �B��(�����'�`όIST$  &��      
O/!C:��z�y=dָܤ ������k/~�X�q�ZO_� ��C{���<��4��{���ht  X`�e�@����}������  ��Rd�P"�.͉�T*�B�	y
���f��Xc�@� pq\Vf�L"]i?��t����}{y"�	@����շ�����4"��y��� KBW	�K<,x�����DR*����-�BB0�,XR��曦�77��!��[��+����B\�_��1�t���:$5|�F�Q<��V��Zt��#ai6ha&mM☸�����D���j)p��8�U�:HƎ
�S�"���B(�R��09]��
�,��o�@B�       �@�7,��EA0�,$��$� ���[�m�`p���:��F�������X
�       Q�5PB`(�"�@n��\88^2L�D�3�2�W������ �  �X�(R���hT\D���>       4 `� 5���-�Á��, >S�s�d�5�W���c=X�Bn�9c�d�� ��7����L��'��X�>iVʷ��W�[kxi���,2&��mk��p!���A�.�.�0$+��	%���8�Dǘxd�ۍb���\�� �W�θ��u�|u ��`��.NRPF��$r���h(�s�HDyk`�K{�/ !D ��kRg�Eز��-Ώ��v`w�ݙy�l�K������$�� @=�\xh�*�z�<� !DE�%Ab�֖�H�Y�a`2� `���7��(c�y1�M&����o���z^�f����Y�a���	뚙(Vj@��I�R�`4�v�A^7Y#5�"B\
\����@h:���N �nҞ��H�d��E��0A@A��BqF(Y���b�.f�!m�DU�Y	����
����a�(lu�Yܪ
�Q��Z�VG��n��c$��ui)߆��q ��T�A!��U� 
�DAK�P�9MA{��� 0U1VH�k�\�+߮�G�.i�K�������,k/M�*�+262{�Kw^����os�j�r�o( ��M*۫����h��F�
2;��L�
^T�,*�f*��,p*&5�T        0h �1�5���

(B�"wߖX1aj �p1��j6r�Ֆ��hy�9H �3O?H�3hnVd����$  ��$&��C�@!7!@�=�P� �#a-y���Z�Д&��0��ŵ%ɵ����E4wu���hl���?��i��"��%�=t|�Ы�K�bB;��5�oj#��G�Fr������u���SMV�M%U��V?[��X-0�+����z_c���DV���̎������m�cm)	�����.�+$
���o���Z��h�\� � �Z��Al� `�6
F�"��G�e&=]WB�H�X�^͆�ե99��_��`s~S���8���TD&�;޾7��:'�R�p]�%M��BÀb%2X�1����{`��qQ��Q�Ϗ�ꥑ8�Г���n��JV�5+*p���$�,	��gC���}�Db���<Y����>}m��,~�9�[���	�B@�n f"qY�D���>3�pF��� R�H�7ȮnpWP� �`4*�  �~  ���l��°	�s��*�ꠢ��j���"�o�N8�E�0G>Q�\}�:W�7�p��;�&p��v:E"�����_�ٓ�mi�5�>)]|;����UѺ@��Q�6T��sS �f�V\TN�by:���қ���繂f�U�b���>I��lPf�F)N�w��`Y"w+Xtk�AU	���5BB� M)�"⋀LD[%&r ��+�)J(� ��|\!�\1m{{��!��H8Ӈi��L�X���Q��_�R#S�ҳ�U��Ύ�Jq���We���|D�!)1�_�O��_��	$O���_G��V���1_��r�3�X��08=��N4���� ��I { 4hT( �L��
��"�0P�k�*        	F��A	�b�"� ����\���p Qp�( $�>�@梄���m+X�'�d�"����P$ ՠ!�       �� ǣ T��c   TyҰ��W��#Fx�!r\0�_�!G�~�*����KFx�mtg�B�%�-/_~V�!�SA3�PŇ�?��l�E43��$8-��!�}����Rd*�����Rf�r2=��'�/Ç����۪6���b��W���M-�B��
���� `��	�~s֋����d6V2�4G��ZQ�"ѡ+�Ry��Bŀ�>W�� p~TТ�^�K�E�فMl�=��/Y	�J_Z̴��+K�Y����+�Z���{���-o�ݧ��Sg
E�;���@�����n:Mv��h�mfd��@��Ԛ���$�X ���g�h�j�j��^�b' 6��w;y���ZI(K8�Dd����8����o9ȵ?�c�%a�
��R�Y��VoVVX+M����q��Y<�`dw`Y���� 	DJ�_�P_k��
�&��dt�#��%Q���<�<��s%�t�$��|��
��Zt�u�1�c=j����B��'�ģU����`��,�J?7���=
�w�i~���d�F��ۯ)D��֘��RFKi}�0��&�<��{@SĴK�;��g� '��.�=���m�����0�e
3$Ts��D||�Zף�z���8�?��Ȟ�1y=J��x�ŷ�^<���z�[�x�.��efI�Kw��Y�{�H�P�ι'���R���hʐ$A�/���D
��Ha�v�)��x�L�r-S���k/x��$�R�~;�H�:(��:���Z�#f	gn�n����ơm��L�
�]��T��X;y-��-�x���R���c����)]VPu�I���XQ�Z�r?�=��<P)ԙ��Pp���@�?�-�N\ҍ*{ld,)f�V�֌�K�x�M�ϔtnU0uc���A��J�e��̽{��݀]����ا�#��}��Y���."��/�������Ғ���I��=BrBwkG����(��Z�	Mvj���?O���c�ˢ ����[�Č��[A���	l��s2	��ԅ��$�=4�L3c9g.nQ1�#��\�!�η5׌I!�����Ϧ㇉��Z���g��郹��v�s��Z��
A
vC�R�*�l#qk`N����U���~��ܶbV����Q�A��a�!������rtU91�ɣ!�Ƈ�n
2F�a�g.|�pl�9���' $���������P�A�<�#����:QAT� }/��{^��\�`"��W���f�5�ns��V���n�#	�m[Z��
��?�F��ke+V���I��; �qSJ�93<r�ۘ%�ht&��z/�,t�A*��^�b�r晥�U�M8H��e�RdLz����s�mL`O�F�2G�p�l�_�7<�=��6&�g�Ԉ�Q���fI��"���)K��'�����m�j�O$�Wy|�
�C�淶.�$��o����I���\5&L��/�A�J]qq�^~3Qo�׷C���߇$��zl���3- +?<�i�5aHW��C�?V����W:sh5}�CX�x��X�sd�VR�=���
��]�w<w��l#��(��ի]�\ޘWH���Ҧ^�z56<μ-|���=�Gi?9���������(���Krɍ��'�
.�
��1�"i��2eʢ ��%�4߲����]�æT���2^�bZ�|�s
Ci5(�Ȣ�e���~ЮV��9�|����̾#�=�N���yꖫv�vG V'N���Z�h�l����8ȉTgF��,�6}��l/�p�w<PZY��4)�7��B�*�h�QQH
l+�[$��tEz�d)ȅf��j�gz�' �L{G����N�i�������3��%i���G�
��Q��������-0x㟐��.��
��0�]Ĝ=Qz���G�/���:���ǰ0�}�$Gl�3.�}�Wr�oy�
O5��!'�*b��F��0v���`Fmr�N�v2�מ�sE?�C9�|�S��1�C%z�`���oe����`E�:}7��D��Ǘ�� p){U��0��a�{\9$����uz�lj,�<���y��R6�B������_oj=@м\|+��h�
��C^d�=��� `�+�a�Qz�f���|�i��^�.�����1r̷ �&@F��)�7�ʑ��$����L+HDm�l����{�	�2�߆[	)R㈗���f
U��-�ݣ�z��~��߆Z�E2V�l��d��'�1
��'�B��l�EC�����Y�9JU~���?�V/��'���۪N��Oà�.�u�@����`���H@�,����L�L�B�?p���e9?l�=&�,�-�.�J���1W�(��J_4�q�������T݊�����^��R2��W��Ŋ���b��=$�I�S.���
DQ;��tH�)Ξ}|�MF��I��]����כ��~b�BA�>\_\T�)9����t.�Zw;�����'�-��Y�~��G9y��L~�Vg�]�pj�F~P1�E'�0�|;���d�(;���Ѱe��Clй�\�b�{�3X�8���Y{Mo�8Uńmm���vk�s�W\��XYd�WǵT����;�(�a��tB�܂�"��C���>�H*�懃��K�'6�j�+�
T��S�,���v�N�)K�N�|�� �o~P����k;(�O}�w�����쵤�@'��O���6pn�!Mj���Gy��73�%�m����e:�CjW����1	�C��yw�S��=��i��Ӭ���0�A�9����ɓ��>�-U�o����BK%z�GL�;&^_Z���k4u��:�_��>�O��$�pS:�6��P��,2j�9@5�=�9��qwH�rF���O蕮�Ӑ��~��)���"Fg��o��������m�<peb�tz�V�3A��ݿE�,��ϊ2̈����H�t�k�wxA�� �a���4��gū���pǶ��k��f��Xb~Q�K�T�Q��WNm��埋w�D?|%���|f���(O����#C ��:��]��݆�MY�	Ĳ��p{�
�������>`�G� ͢��
�e�#q���%X9�T45w��.g�j��]o#9��=\�:��H����5 ��dG��z�t�X�p��c�_�5���R�`�Jr���aԽ;������}��r��D`{�B1: sM9��x!�:ȕ��a��z�ԓ��/�����.&�F<˂w������'���1���)
�w�=�8�Xbʙ0�������a��-iO�u� ~�J'">��J�ǔ�ň!x$7wF<KY�\�	�����m��uy9(<��8<�Zǘ�d������kv�Gf3�?���N��4��/O��j��y�Y�gǛ8w!�$�9c�oi'�/�a�	0`�^)`��V�ׇ��������\���h��Cp�@��^a�ɕ[=^�/�1�y���p9�k$��U"b��i�|�Ʊ���Y�lx�%��P���c�lߡPR���T1(�5|���:\#R�<Wݏ����vx{p+$I�y��O�k�G��a�w����(��Z�"�aJ��P�]�B3�N��}Y�ċp]7#��-�ίa5E5�M�:L�"�_���+H���>K�OS����xg;Q3�V�X0�����,{0��ZP�f��3K�R��k� ��N�I���=ju-O��]T�����J�Kx5�i{ծ>�>W,�UR�p#:;��@�-�Q@���N+��!�6gT�j��2S���r�6x9G����V$7�2������Ng�����|3L@9&fg�5Y��U��?��)1C��u��/�Va�J�e�Q$�Kd�9��(Ψ�3��7�ꢥf_���0.9���]�ۘ�ҎP��)�e�s�~��B�lP�� ft-���#���k�A�T�_�.�a�L��h� ��R�{ݦZ~�$=j��u21��5_j�I
�QƊ4X�`BΏ>|K=���֟`�|
��^Z�w��Ad��ͱ��~'�ۺ爓0,�[���޻�|��@��WN_Ϫr���C��X�|��N#J��a
\�ɨ ��A+b�Z���b�q��A��z^��kJ'�/ �c��sш��z�|>�A�}�]M�~����)XW��x����fʨ%W�蒿�r">A�jC�3'0�|y�*�ai"�|�?��8��ٜdL�����*͐�}Η>Ȗ�Vk����iD4^�S��?�	LQ*xy�O�O��Ծ������kӂc�Z^Ţ2v�ݢ}*\:�ڛ����9��.��˄fy �a����-�DS1����A&�H�c�V "n�(ױ"yk��iT�n��j5L
O���>�w�Յ�[v�q��[�<q�sϓ��?n��<3M`=�D��ޏ��|�|w���*�(;�S<;�V�n�s�!0�t���4[X�m�]n�p:�.*�^��y?`]t)�ă��R~3\�����>xˇ�7��.e"�$Ap�V���8�j@��_��0�[`ľG��2�N��zqu�
�O�w�-�])ô��j����dx �ݚg�%/,q��}�=�.�8O������
�f�T���2?���R������̬}*
>�ij0z5ngc�(��s��&H�;�,2;�����%Q���G�G��W�����_�K��=e1��:���
�ˡ���a��Ɔ}���Ҍa��
��m���Ԁ��J|x��B覎]OU��^l�D�ْ�QfB��V%���vS}��k��q���!}��AG�
��k~)$���kh�O'Z`���ޢ�`�o�B������T,����V��1��M�݌[O�.L����.�Θi���.�D���.>a�N��4P�B7�BG
�-R	���wO��<�V��+0Al�u�ֽ��	] w/�]�n�O�����N3�
�k��4&8�,t.Hۨ���p�A�Gy�h�����KLn�=��l���z��� \��U�����������}'��\�N(�PH���"p�Gd[ߺV����q�zKr�@��$����nS��)�-e�z�[d��K���7�)�1}�L�ɬ���Gc�����ez�H��=I��� ?�y���9��m�5F�^���@�g�E�a�ن��+GH0���"f,JE@�l�=-o���u_�K�J*ڙ�o�x��}^���R���Pji��Ѐ���e�k���q�OC�6�.�2<�����(��7�o\�>�l����B�Q9�Ij��!�!.B6~�R�����$�� (7 �pyk����R���_��n_TI��?�N�vN��*ke:Ͳ�B��)7~`خF?c����eU��v)�*M,>˥=1�����~e5�(�#�K7��7��^�7�v0��Y��4a�h�%s;�m��R��_)?�O,fbTj���~��Ub6�O<0������z����"�{:.�?i6d�C�)�af	�*�%/����I�C�?�U��=�_hi��ΣQe������$��]7}g፦���O-E��b���n[�$1h�����vZ��8�@��:L�����9{>4V��u�x�ԧ{�[�8�Kn�+�+O�K=�h�4 .���]�N��c8�G
�����	G����jت�
Կj��|�=���U{�LkÊ���e%��x "/�O�F�
���5Z�?�*t��(�CENS	DF��0�[��<���Z�GN�����w��q��ɄˎM۹��Q�����4T�^U���V8t�N;%&���� ��]OC P�D� . VT���%�z�<0�ў�]�w��EW0�D14G�CF�
7�֎��*g�S�D��v�a~����!����6EF�*q�%C��e�$������n�	j�i�� ��%N+��I�=.`
f�
������+��o�+�x.:������$j����S�Ryʑ_��K���W���ŅY�XzG[N�f�"��n{t7������Gt���-S+k��y�O�S��	�L�z��W�S߁5�I��2>[�1Ξj�_�������`U�;_�]��8F���{z�e�^��ȒdUg���?'9w�n�L�Ew�%,���Y5�'|&�g��^����4�r���ǎ=V^:�	�
���i\���f*����M���T��m����Z��
O�=��ʗ��ZĔ���i4	$y����>H��R�_gG����%�e��҉�4����Q��M]ũ����$&�bm�x|ol��&
�_Eޞ�����ez���s~�/�Dx�&*๓<��yr���Ώ 6;�|��f��P��/����R|
Ÿ�����vZ����m4 �^`+�����'k�����Tԅ�Ĩ��{���-��hP���x����^ӿ��h+u�� �R�6������mS�W��n�{/5�Uk��U�f�Uo2O�yK��u�%���t���
�Q)�㓙�D�7���Nã[�[�F���lb]D���7}��@��u�ܵ���ev[
n2?�`´�S.��PAXB�o$��͍��5䥕�c��.8�����M�g�<Y��.+X�w���s���:�aH��b	bk����O`^��D�2�	AJ�!����7�W3Q${�X(*��r�I���T����VV��=R�#q>+�m��^Cʻ������r���"�"w���坫�����u�^��V��}��X�Y�V[>T�]��5���o�*�{�BgaM��$=qVj�!����~:����/
�N�g��P�EO�A���J��=�-�v��� ��	�@1��^ r�#��W{�g6��{{-��3$8SL�ӧ1po�y|��Zq��jћC���8��N�I��=-���8pv�����ۡ�>�6)A�QCY:��`�=���ܤ�6�$��r7�f��~� �P�+�����]�~r�Jh=!��O���C�%@G�K6Ű٫�ҝ-��G��&�8���'����
q{9�;x�eb�*Kb>�.�:����\+2Q��|�r��{D��,_~
�
sN�7�}^�=@"|��n�����I�)�|�7Q�:s���xi���u0a4�
Z�w-�Uùx��9�vr��/{a8G�K��}MNJ�	T$?v{J��U9'���G-�/�$����F��l� �0�{��$�hF i�|?c�p ɤ��x����l┕��	��z�g�Y���~��d���%��[ M������>��J�;���5��X'�2fk�@��+������q^MǤ�TC�L���Z���2�Q���R���Q��\�Q�������Y�8b,��A�޹�$�#>����]��a��ܸ̮y?���9�����͓Q
"�8�S����y��N�9Hn���x����9�$.�i�R 7e`�o+��ϊ���zf3ZDS`��(�h�H0��Ճ����XJmUm]�b&���	r2zR\_���D}��>ԗ(�#�bL��v�!Q�)��Y�PA��M�c��hrS���n�77o:��F� U$$z,UFbaͲ辬���2Y�V���1z�C�݀r="qPl51Tn���3\�-�����I����&@7��UT�JS�ZA��3�<���ѐ��-Ve�C��;���G�芌Xb�����{`R��k���������n�$��J�Љ���K#��䒢�z#��Cw�^�� Kow�KI(3u��G��3Y�] d>�(`<_���Lc�t��|?���ң�&|�F�-a}Q&Ԧ�f�O��z��ZUHq�~e��0�?��v��Bz,pJV(���=�ܬ)@��N�|_A�p��r4�֒���$?E]����)	X��XLݭa�HB�/J@. wg�!)�<Y:Ķm�H8����R�i� 9�2˅��M�Hp� w��e���3�W��(�Kh����<$�+����t�ok�p��������+��6$�{��o�g#֘�B���.-�Y�ߎ���N�:b����Yv����	��P�	�����X�Qo�Qn9L�*�%	_���W���1*i����R�1��v�U�y̶e@���͍� ӱ�1��4NtL�-��b�J�Hwn�C���xd{T����qYx2?��3M�S֝0�f�hD�j�
J���B�����F�Oqd��(�`5Fi'1���"�{�6��#���q(<�<8�C��Re��*N[i"��5�=�T8A���Ů��n��h
�1+?!ܣ�7��l]ٓ�
o�Ӂ+�1��FE�����<�]h	Ir'��ʙ�+`��~�N�j,�%On�S����o�8֞�0�����q��t��g:�������	�J��ES):���#��f^�/n��[]dK�N
��0�mϯ�)�^t}�kqI#����1�!�n�F\�GzJs
��HW�5�DP�p%d���S�.�(�ӾR�W �G�mg�����;��d��ar����-�7� {���������S��ӓp���b H�;�}�O��!Vڼ�,�]E�Rc� G� ft�5!1B�`��?�6�c���h܉~�&Q�ꀰ��`��	��.9�'����e��d��ι�y�J�ԗʉ�5��)o��p����Yv��c��W<�w��x��9��X�fo\$��xC��.�y���cu���
l��(I�3r�2�~#pr���A�d��!,0O���gڧR���u���[E��r�����J�o�`�m<^䘁�^(dd��V��~�=�VR�'��]V�^E����{�����%�XxE����#
6���oD̏�$Ҏ��Q�?)C� ����h]����.<<��l�?�It�&ю�'��{G-'���
�#����1�QP
k�6��L��a��� #����?g6qڌ�˅3v&(�w	L����D�c1�7�����@�M�٠�ȸ���:�ڗ::�� ��'q�孆��Z�����[���ԧ�q+H��.�f�G.��� u"�6D�z24�x��`PM�67Yu����N����z�m�6�CY���!+�����q�"�pV
�H�yV#�V�z��Hz����v�6	ʎ����q�B�7p5�"ض�~�x�_ZҲ�����
*���Z}sB�Z&�����=�y9!���C�
�Z���g��֋l�� 
�֌�\h� 
!
�r�S7]���z!���R��p��8��t-mh�Wx�S��(m�%�(�2U�e@�����N}���l��K,��q�|)�I�v=���Ec%�U{M�}��gZ��6��:�"��u�~	�|H���k��Ҕ�p6��o%;R�ĕ�ܨ�XS5UQLWU���ru��R��bSk�'�3�:�M|^�W�-bv����e�N$�v�͗P-.�*T�&�����D������(a�8�uc��:�܀��Ѹq�����p��T�ݟ|�(�̠�ͷ!�싖~����~�vX3xc�
�*� &�(�p{O��Ꝗ��u���P[)	��YI�2�bYv�=wE��I� >n!��y;������8���2���S�16�v�<K��ܘ��Y�=o|���Ѵ���?�Q�Y]�����z��h�6�[�H�=k
b�._w�������;?�5=E�E��5�����HL��#��R��ad*�V"V��IG���#h~��z�÷MG;�����fr=#	�u�
u#�~�x����@��g��O� /	��C��D�>�<!�׋�Zyd�u Ί����FQ?N͋�b��+�_�� Ԅ�
����W)n8�M*���:L��9�.L�0��9c�Y�ʝ��G��	3Ъ�Hւ������+[S��D��(�0�h�W�Π6^�!4!8+v>R�l఑+�4���:�D�����b����F���c��b�P��{s!��m���Kld Hp�aZ�Ń��6�cU@Ij0^���<P�%ކ�yk�ý$4���nq�����%^ T�&�AA��=��^��usVs��8��8f�%���X�w<9��w�Ct��x�a�N�&T��s�u� ����O�8 �EwQk�2k�����p�T��(pY�Ƭ�ݠA
r�/�УSy�  q�'RW�f
E��́Dnǋ+V���8�%,76z�i��vJG
����?:�Ol�)�(j�[�!4fc.0	c��q�8�ʹ0��?� �q��TΉNha�nS��5��c����s:����[�[�B�J�
	u`�����̻��8~��5�(PpH�}-u������WL��q��6�Kf�'Ga�Ԍ�[��@���
��V��57�1{;z�#��Ȟ6�:iC�T��o�V���>�6�
/ĝ�h25��
[�,�x���gX<�0Ġ������[ ˳uZ\����}�&͹��_����nUګN����K\�o-���C��@�|e��[��:s6_�٭�E�׳�|M���EW���겟��Z	�
�å���9����#�N�s�r��U�$��I���p�����S�X7=��/�
w��	j��r#bY�.�Q�����m������P�N�|��p�`G����㉻�]���
��x�3:=_�l(�aS���?�Iu5
lJ���
����7�0�T8��U������v
�7�!IحSd}s�ըv�a@�,�
qvl"���&���l��N�ܮc0�MEݚ�s���Z��nQ{&>��W���ݠ�����D$�
6Q�^M��,��M/=_�{�^��H<�R�ET��{8U�w�U=2[�T�Ԫ����V�:ȑ(�C��/�Z�b<Q��2����ca�>IgA&xf�f���_U�P���pF�hGdece&^�G��8�ر��\1���I?��jKs٫}�h���A�����y.X��:
PL$����y���L�LVh3��|Ӕ�<�z�92�e�V���~�1ѹ��l�����3���Y�x������f����=cfAƢ���ց�	�h�|G���b�cTI0'�
�ٽ�������/'VQbVz�������`�_���9�3F����K)�1[��M��Tr|�)Td#k�9q��C����'��)���wݾ�:��g���Z�ٽ]�Q++����˸���T��ױJsԭ��u������k�HE�[&���4͡E��N���jE?��mP�͎q�A&�̵�٫3�g~u�/�)xj�����@��+	����+p_�
���\���FG�6S4��%���L�����#@)z�0�d�T�SH���E�2Z���0V��qpb\�l�ӡ��7�!4h�9�?S�WO[�����@���/��599������c'%翔���4�*���}���w�,���w˖N\숚�	2���$6��ܢ;\�Ȳ��L����Q660�
-��I;�I|��G���E��&p
{ײ��m�;���&Ii�?���vO*O@��V(캚P�C�����}�V�~�bǹ�0�Od�.9�N.V�����>�}x��H�T�2�����A����$�-k6��H2�0��@Z��Ո��*��x�~|�k�N[Qjs`E����6���g�Ϟ4;�PR��K��1���d�Rh��׶ 7��E�ם��ѿ�q[Lv4��O,J��#��� �dU�9~r �R�-���x���p��B�yNS��5�Q8�@v ��'�#� ��(����8��膤`����A�؁!�co�x
G�d=��l���:�<��.��+����e4�F����BZ����p3��a���N�Q ��f�rk�k	{9`L�x^�!? P W_�N�>ʀ�ݟ��Ĳv�
$��Yt���H���R�8 +�C���n��nH�O%�է��Faځx$�2��%<�c�Tg���eq�����U�ӣ*������F~#��A�DF,>�����paf-��Ḷ��3�$#�I�cp�=�-w�$9Іi�iF䆭s9���C��R�O�C�����(å�`�qQ:����k�"���b,<Nw3��w$���q�+_ƞ������SsG��к��6�v���f)�ӱ��
s ����lf.37m�7'X�ŕ��
�b��Q"� æ�'�R�ZD�!c}�3@�ܭ��v��䜦G���W���q��7
	�9�V�/<�Y������qM-S�%vu�הΒJ���T�*���#8&5���S�'�uQ���Wd��ױ�D+�ރmm���)�2!>ۇlv�o8q�_V�6�D����vъR��������l�X޴�]��)*��n'T/�3���r�F����'������;�ʹ�puy���ߌ3�j��`>�"F����WP\�n�TWhZ|��M��Ӕ�EO+!���}�����PgC��
�ͬ��
\h���J�r����<�_�n��塛�tjlN=�L�Y�/�����g�ۭ��Ȕ��Ry��|��z�Z�,,����Aae�I� �����˥ڷ���Eo�Pf��<Us���!A�Ȇĥ�?p���#B/���bd<�  �ڠ9�(�m��y"wZ`'y@��k������h��ܒa�Ғ6�"�����.{�B��)y��ΊGhv��@Y�%8�[oG.�NL�_��Ec�ch׳�
���5�D{��-�V�||'��<F���1[Xg\�"MK��v�u�����s�&�7��WsN�Ss���B>�y��zU�-3q���L&y�4YQ2?�϶�P�{CR��&]��IT�)sF�P����3�%=�:�}9}�3+��w�IOX�t%{��v�����t�=�&B�Gh4Kf��O�/U� �Ҏ�b��k����V�Am�9Dd&LR��ZhF�]��u��ۤ:&���X�!��\PL��@qҿ�j� ���+�W���������^�P����7D���=
r0�Ү��(�,�����Pg��9}Q�$e�����U�i����2!p]tfkk�G[��:���B$��!�p)#���ߑ\��d9e��vrF@������� ETvP�Q��p �e�AcK)��v�8��R����Ƅ�"ƨ�̀���hdNt ST�s9� \H���xD�fC����#C��MjW�~'=���U΀�k8.�bT�.��G��E�Jm�������NV|8D������V�[�� ��Y�ǂ`�ޯ_�E�
�%�G͡�?zx����[U���3�*L`��Va��q{k��3"<����/��D��Xx5��0ۡ�ǰ�����Ū"4W���\IO��m��v��?�x�ShK���RF���7�`��N��9��!�xy�4
��/�xgt�G"#�YL���RW�h���D���ꄛ"�N�T�.<#1z̳/ ��B"k�݁4��PZ5�j �>�X�A�R���ґҠ���q��#��ϿkXu���� <�d��E'.�����3��#�X��Z��H�ivE�$l�Q��T0�0��N3��bK��q炤E�M*X]�2+D��n�%���ۍ���;w�o���	y�����*Q�Ns��;�<�W�!�Hт��<d�&���
F[�V	߹���Dp-˾<�gY8��bE:��^M�n1�k�B��;w�[������6h@���Z%>Z}*Mn�Qi<��- .@����ǹĬD�qW˚�
U��g��w�oaܣ�[�ȭ�]~�R��6v�����6�O���Y^�e���#����E�fL"򃈹O�3"�Fl��C���Ļ���o��H��w7�q��iE�i�`z{�P��m%Jp�~È�Z�u ���fX:9z�oNL��m����غ�� �MB>��*%&�3�1�@�:��#��$k9�q׭�I�� �8��J�B=Vk�n�u/��Pb�$�'p�\Uǧ~��W���3X.��AR�8@�M��z�Q�l���MjL�#L��+��(��7<�>����\߈�/�^Ϧ�"�@Ԧ��̱r�L>�f��V�|Q�^��Sy@��m$.��ޔж�cK�Q����(@"�x�.!�kA�Я�����m2�3BA%?����&|#.�ЀgpeW�"%�L3��5E�%�ޖ����y|c�֎H�h�爯��
/�� (^�>c��2�n'�5���;��H���.��ӁxE,9트�#`86�x<#H	}P��7+���p�E���RntTCj	�g�uX��/�U�8�`G^b,[cb�6�R����a���$��	/9Լ�&�d�@������Q�}*��]\���[LT$�Nu~�TQKD̎�EI�
�XO����]hi�m��zV=���XS!BX� h��� ks���ɨRt�0�B�X���5�8��k�����G��<t
.w���2�Np�`'�@�l}b۹G�lUh1'(!�C���7Y+�V���@5���2������zHpv��^h8@�?0��[Q�͙%�:����N��c�m
R��V��$s78$��bGo96����z)t�4�`���4G�#�s��W�Is<�m[��V�&.�D8Z��*����I�]=�c��ʴB�m&^�U��Np�6�W��i
)>H���⸫��V$��"Ȏ�W�#�PP{h_SO���q�e�e�����M@��   
JW�h��+<?+ ����&0��G���<�V�_�lvj��q�L|�
g
�i�Ѽ�����<����B�o`q��H�Y�dwF����)�|�!'c��d�2��h���G�'3��v�ם2���2�����So�Z�f����d3�᧳����CO�A�R�������{q�X��<�u��� ����i-��{S��]�87��IM�<:�m_�>Y�vdĥ�k�?��ԥ��Z�je��%�a�^S���sS�űRc���*@�妣a�ղ���Uz��:�e�S����vw���>�,�n~���a	��Ө��� �N�J;��G��_G"l?�pܱ����z ��~��ŒP��$&Q.�6,� �yь�,4������K��o|���B(��q?����
&)8 DV��뀷��p�=	w�v=L�����h]*����6g[��*/y1هN���HW岌qW�D��l�4&�&l��t�::��>#�r/z�fp�),��C�c�Z�93�/�X�jIU��$t��e�2�Xn�(�����=��!���
��m������0�+/�b��;��L� ���cG��pOW���M �����Z܎��S�ޔ���r�џd	X�b뻻9�/U�jU���B����Ƽ��=&���˶ QUVU�v+�A�T�[��z>Bo���K��%pK]Z�P�_��֥�[��J%)'��xr�����ɝu�������E�q�0�b�0u^�c
2�=� U_�u���W
^�T_��f=��uN¥�����@�?=6��۳����2%r�sg�kX�Ѱ]�m�*�LL��+ �}��tu"�j��M��x�@��>�Cꛉz��T��ǜ,�r Ky&ȹ�iDmA@���x<[�z)��NТ����Q�dG�=�v����6u5�D���/4-.�;�hw�H��6�̝��V�p�}?r!
�d^l>5��$�>Z�OU������C*��5l��<ʨ�%�k�{�B)��[|xh`W&J/�n=H�`��SOEt�ܗ�a���s�n�s�M��O�ޕ�k'k�i����kw!0�\���q�ݷ�,?��,m'�v�Zė���"�XJ
��e��	�i���Qő6;#ul��;b5�����7s�Z�=��������M7���du<%m�_h�(�Y�t"8����l�h��m�|˫Q�xB���/g��\d}!re�6���ǫ�p�T8&���]+g�*���������Ը��5J�(�sq��� 5\?�0�y�����Wq �2^��Ėӏdpؕ΍/�,[��N���e�9S�y�(���9x���EW�e�@R�Y���R�K�|9�ߍd����� B<��+�r�C�uO��X@���r�Ύ���	�Cl����j?9NJC�����ο��h|!~����0Ͳ�|y��Fdn�u����=%{U[��N��;W/#�9s}{��k������� ݾ�{�el��g0��%��d#�W!1 z �≋� a�3˽!���[��F�al�dM��� \(<�:*I[�?�a�J�_�e��(�	7Z
jj���� 阄W�n�Q��P(λX �)Hk��\�gO.�QqPv��ͯ|h��Jl`�b`����A�~ӽ����PW�8t௠g�B�0y #��?�6:ܳ���e@Z�D Cx���V�FAԚ������2[���{t�j)h�8b��
�D֯�[_��?������VFl���dz}Uc;y�
�A
�����mþ`\H]�k�ܿ��9&K1Z�£+��U�y�LM�/���?���j����{N��@��,{�f1h�EkB~�Z@�8`��p2:�V�q�D���M�>��h�4�}��yܱ������
`���\c�1��9�[�;�q�|�4/ĬE����������f�;�Z�_0B�������,ajz�H�.,Z�:�8Lh����(���6�U4��X=��Vv�;#��	��v��2����kG��
5W���r��D�f��X7��$z�����[G3R�@2�qp0'���� C�n"(h���-��7����v�b܈����}�CF�%,^�8�}��G�`�ٵ�/$F��� 	�(�8����F��?��f�)ZE�0�(F\��P`�o&䈔�i㬟c� ^N��G�ɥ�U��L��
����G 3�8�H���#9k���ź+�~7�(ȡ���T�47�N�.��*/)����Dz��_��P���KY'y�;#�g	�����q���P�i5`M���Zy}��w-c�c�^;�c�ϐ�D܂����,������̱I���F��:   � �-����D�y�߲�Up�V\=@��%�
���?/�/O�i��5̒=�T��B��Ws`�h����g��Sl2�O��85S
{���J��rY�eĲC�������<�������m(]x�S��Z�CJm����6[����/��n���o	�#ӿ;��*��45''e��."ߨ�&3?�>l)�}w�1� �
���ej� �D�ڶ���� 5���5�#`�@"$ި f6ss�j�/��a�y���P��ɒ/�c#-�M��BE����`��^Z3i>�V�zZd��J�	�k @l��f�
�&�K�(!^��' vAK�ϊq�F�b�ڨ��};Mj�֗Z���w��*?b�Z���MG\io�k����Y��Ǧ��v�}߷2�����x�!�$d���|sƤ�$�=G�	�={�?5):��~�X/B�^@��l���-L�I��>������q����  �Ib!� !t�iU K�^%����ƶ�~&z��y�cF�u�j^�`2��0����P���[)M��E=�F1Yؙ��4���f �����	1��(���+aHq`aC޺ww��Wo,r����W�5�W:<Z[vG>�"5�k$��Ŝ@�a�g���SӖn�ݟ&��Vb�����|HIQUTp#a� �F�����N3@̠ �kz��J�{�55I&�(
ݸ�#"玆T�^�I��*��v4 ��A���X+ri��,�=x�@>�^²����5��IY����4����d�]�~�(P�^����약 q���"���Zo���C����[�4�9d2nq�CW4�R�� DG"T�E�Q��qn�
���O|
���]w�j�
B�q6��Q���k���a���x���N2�yp�+)��9Y,5F�"ػ�`I������t�������(��$�e�D��\2��S�1j9����8F�����n�9�ԣ�֗�ש�[���
`'�5-`	���P��
D�Fu�!`נ!P        �� �&5��%��!�P"2�Jo��[R�����"���o��$a/���o�|��&�&S8҈�U���L�
L�JK�y4�U�%�u���H��ε7p�LV���HR�Bi�v1`�N�YXq��KhR04���"^r�ѹgT�H���fSS�o�02�*#Y�|��=��#��b�� U�m��X"�+h���ߐ9�E;�y�g:%6ۍ_:�ve)��n?o��H�:vKG;�P�%�ԇ���}� �� �B�XQ �(!H^��´.���N7�kz�M�\E�Χ�6��6'�nz�J2�<�Q��c2v<u��s��xܛG�Ŗ��X�	�U޴%Ad*���+�k�:�,t�6[D�byse�F���QE�m<�ʉI-0nm�ْD���$�8G邮z{�2�6x��͜^@�8Y2>���e�/�T�x���` �*&2��|�ł6
4���&�������s�<������y��D�v]�1�Kx��e�zm	���p&f�좌;�PŁ�J8�H��=X+W���V;T����D�Mف,N ������5���)�Qt�H����9?�����,	���-O2�iG��ʐ6��  &k�c��� 	hQ�W��W*� �*�  	�;��  �������
�%
�\�E�՟��Ea�!.ƚ��LT�I6�l���s]�{�4��i��psǧy�HV�]����`(�4J!w���3چ�& `vv���s����z|e��k�bq4ĥ���vBռ��	�dI�PA[7� ��s��Ark �BcT�<[��8"�TP
��](9Զ�F0�'/O��4� ������KD\���tD,�I$u��&��E�®���~��w����V
.NHR�#�+H?��c}ڛ���:��DB�VT��|j�-X�[H�AB�Py�![ �D^��(�$U@X��
�       Q�4�B@�!�@nA�\J��D��H,� �P.a`���P8�! %4*e?�w����\ 5h|       0h �1�$5��%�	d��Ԕ�$l������-\q]R����G���/��n%@��q��1 J����m�0A�(�❏n':�(��?��P�Z*�zee�F�-gH�n��af
����^S2\�W���q�|FU>h
��?%��,O6��,�,P4��y����0R�RR�K"���F�gB����8��uF{�G�w?��K�N�ϒ�ZeL�*P@�OW�����Α�T��I@0�qk)d,���d ��!n��h�h��	[..�G	|N*�[�U( (1��zg7����R]+���c�b��@�⑳[5��<S�B��F�t�%����A�h�?���UW�N��
`H�}�6��wT�pc��R�BM�"��-��%	����-dt=+�n��Y	
p@uy�?g�K8Ғ�/n��@dW��x��A`|��x��d� �4K�&)"U�x�+��R@��.�h,  ���.t��5�|@ ;�w@ ����NR��"@	��Aj�1iN�4@�s�^Z�{��0$ȓ:�s�y�^?=��&=��(��
���+ ��%V ���).�P�ws�(��gڐ�wY�b�$8�ƀU�D�ej���͘�vR.~���5v����>�6F�s�b9�]�m��M��6�iuX*j���C>�u����r��E�"K\,uG�O�{�=h���Z��"��/3:Ċ��,"F`0ވ�-@TB�Z�{ ��(�ՠ!�       J6��@ B	� AB��]�%� T ��&�2���qe.� �"gr�r���vk��        a�c�5�4T%��a �$�'%�c���+�h��\��p�w����� X��^6�G��yx��l��!8��Ϡ�.H9�|���IW��� {�ɷ��j�V,��@��T0��)��Q^��5� ����*=�'po��\�wg� �[� mv�w�|�0`l��њ�E ���y Ëό9��а�ɩ^�'2����T��@a��5k�u���:��L=.! րD �
) ����U��A��z�L�l� 4:��uƠ��g�;�͑8�혳t̏�>½hc��n_�H��4��%h��}4#b'��%��̠A�C�	��Ú,�����_bs����8IJ�*���?��731*`Kc��a�KK/�>W1�;����i���l����h"r���]�.��E�^��Qx��& BĈ)\�t  "T��� R���N��I�n3��\T��U���MWz�ke ��cʪ����=��O0�V�'
`D� �;��u�g�V�3� �  $ b , `�� �~�WP  ���8 �mO�[L�FC
�,�!ݺ̹���PR׻�j�����a6�c��o�4��0>>�ۺ��F��pkϼa� ��ޟ�������1.�n�C:7(�BM�����%�A�Ɣ}�C��N4��Ҵ߷� =���F������N.���r[>��*<]�Uk�RL�1��;1�u����^�" �!H,���b"�=l)H� P%��j��F 1�t�0���P��DX<�3��m�ұ{��k���Ob�>J�,ȏ��}E�:�����4�DlN�B��,��8N��s���}�NL۶���<�(x�	S'~�G��!%��l7�J�z)׾����ú4�i��MA3\c��K&P�Dm��N��` 
�)tlL  fS^���\@      � Q�4XA��� �\�	��H&�H�u�B "� w ��[\����.��H��Q�~�W       ���@�"5��;(�� l.Z��#�� ݪ��ȩ,ѝc�P/ӂah���^������<��`Ƣ:�PF��R��[�D��o�������b6��?��E*�F���݉z�Q�,O#���c9�'tH����cn\��~_��R���7�58�� Ó��׋RH��f�C|�m�����,�`�H�'(g�\=��h�PRv�4K��W泭BR��M^������/3D=�N��� � ��a��55C6��30����n�Xhpd#N D�(Z��a��*�n��s,�"�.
G���o>i��cC�G\1L�X����n=�KL?�Q1;����_�ޭ��`yI���}u(O�r���\_.l�$�Ⱥ�93�f��^�G%%EՖ(��}m�t����S�Ŋ�y�&�@{N��'0�]죿��D@^��T8@J6- �4IN������t 
���j=��b�0�F(�% ��)�ڴ�Bqw~%�k4�ou� 4�i
0@�'��gQzm֞g]h��#�����d�etH֠���+���Y0(f���e�[�_A8�N�D~)�`�K	�rq�U�M6a�j��A���&�A �M��>��.<�Qݝ0H���8����E��/G��>K�Xe����
b#
��
)K�����OJr�-�c~k�B�}�
	�B@c� �..�uy��� H�Հf9�� !<P�����!�I������*        4 `�&5��t
��Wj�Zl
��79G�lע] ��՝�b���2�	&T��6ͥeC��Z��}\�� �
��u������P�iS����U�������|M
��G�B������a��$�(���q��˒Ρ\ϖ:󌰺�9�L*�ڭI�������"�*e ����oD@��� 
+�M`��p�
�`�-�
D9�=�+�j�.U���ҧ{���鹀�����!���"'9�RQ�_p�7.��!����>���w����Y�� J�,�f����ML;�H-�)�ŷ�.  w�*Yrݛ4:�  ���  ��
��є�p����;��*��U|<_\����eZ�XȕJ��K��+I������%����� ���p�!`dzq:>t���Q�?����I"�;Q�Q,R<zMh���>_�ڲ���=�+4E$�R�D�K� ��Z��;��C�w� �fB��s^�n�Ge�j����V�Z�h�� ���� L�DF+�.Xh@Z`�[�Dn ��N�lW"�����{Mf��O�����b�w�Y�!��6���#����x�C���XoMF��w�)��7��XCOy�iF��%��l����ﾃ�s�kC�oE���sP�	����6?wVA1��`9���o��w1%x�
�'UHE (D`� �@$ � Pj��       %S5�J�D 1B�  V	d
�( �T����� �!�@� �|D�l��@X �ՠ!�       �� �:5�q	b	�+�GA~4r��'� ]�4��N�}~�/�@b�0P�L�0Oh0�$3.W�������Ť{
	�f �@N�m	��\�n�Jh 6_at�=�	���exm�g��Hh�T:'ؐ?�a2s2��d�D"���qe�R?�����%H_�G�+&��[A�ߝ�R�c)��2�_)�B����TE�L���=���0E���x������|��K]����뙡�肰�lx�]]����b �AǱ]�Z�Q�QX�����Ya�-��C�H6K
Η��VAq���9t>�9�CNQ�v@R{����Ē_k:�P���RI|�J���l� �gF
J�k�]�[^) 	3&����a����������%��8)<�Oܡ��Z���0yne�3s\�L@� �"���eQU@T�O��PΙ��D�I�y>u3>3Ds�t%�4*�   ��` ��
B�A�b���L����o�+D�X��ε�،G�/ej<|1t'`|!�d�W'������0�{���B��k3W�⛥� ŖY�!��S8�U�W������-dw�ʊN^aq��S0l����[*��&�-��G�7<��~$�����il#
�z���Y�rds��p��U[�-K��[R�1�� (�9O�C$Yф��MO�x��������D�K�}�ٵ��I��8
��
M0r�$ �� �
�       Q�4�B��@���y�n ~�Np����lj�AvA��0�Bc��05�듆�x� N

A3^��@       �� Q�� �   Q��ز����#F�A��лB��i�̶�Y����l��DTlk��Ҋ�؆?�c�jns{M�RB�/{�RjX��_�޸N?/�7`��7���)�2����w��V�z��Y�6�#�FJj'5c�zUQ��}�V��w)�)]�S@l��[e�����S�w�(C,���VOOG�/�y�[�+ėq�! w�|�WCT�e��9�F ���m.�V�#$��
<��IQ���(<�l�QÙ8��������?w8�d�

.���O?�0�y8����ez
�<�qMB�\�蓩\�-��e#N%Uuo-���ע��w	{���}�!�_L� �0#?ܤ�ZC�/<�~l�/W��L�&IƋ�Fc��s�r�{���U{`��<�btd�wa4�b�X�*^�����$�o�#v��q0ҹ��V����n�[P���6g��J��ϐBg�e\$�Ja���L�^�>�R������g�w{N��-�s�^ZƘ���h*jD8�=Y�������d��x�u��~,2��#�Y��D����E��h�˲f���X�;%G��������>xwl��X��}�&�v��_>��4c�!,Yl{���'����ɟ��n>����Cjnzx��EX�<W�7`6��E���J%��ՎS ��e1pm���rt��7�g���pɂ���`��{��j��Xaă��PL
غ�����}`?|\�?�����*��ǲ SBa��o�~e�|���Ө�$�Ϣ]#?y�O��nAQqu��U�_mp�`j�V��9��L�@&���o�'v������.l�w��)ao���M�#= A��#�n��g� �@$�V����M����jG�n�Q�=��bs��;���ґ�5��<2�ɛZ"�?���o��P���2p�@�2�W{{jcǂ�W��n��H���7��YnUh�q�BG�·Q�%���+�.�j�H"�\'� <�N ���I����Bi�ʤC� yK�`
��¹ ������naG!VgK�=�_C���R�~�*���P,����r�W@"#��H��n�_�n�?2(���`L� auI�&�����G�ߔHy3�g�����%� %�j �ۙ�FS5Je����n�?S5�`A�Oo�^b3�� 9�R�k۷=�^"�W��D|/���>D������Rޥ������\���w,p�@��xy���L�Ж]�eI��=��_��Z�r����{T	�V�_(ki�ܐ(߿�e���L�����#�W���*'P���3��L|�����Ҧt�M��������o��1:�������
jhX�O� d���kX,���׶Zģ����'����ʊ�@_�����p�41�V��Ȍ>��+ ��yK����� m6')�����㔹g� �f�5ٝϢ�˪qb̡91vf�`_���(��K8����8L�aW٫n�@$�c�D�4&�F���|>�gC3�� ��ݵ�g�wEk�����E��c���+@>�����.?	�qj����Е���ɠi�Y�f�<�f��bR�3Up��^ub��(k�wF�>�#8=�µ�-9P�y��VΥ�M�����V,ҎT4E�1�~�����eX�q�����{�y�f,z����F�K���w�5*ݽ�j4�:�|�����J
�Z�A�i��̶Ґ����Ӥy�V}T@2UHq(\��=���H�4�Wkc�_'�a��4�NXf^�ʂB�[g��M����UT|W�Nc��2:2��(�Q*C�o�� �Bt� c��t'YR�A�B�Ę�C˿��BV��2����]�
��Y!�������LMt��G2�ãiO�\]����~C��]$8C���3�e�OO^;��eJx�����w�ilU{���(�e����c �oN�h�k#�����,Q�@��
L��v����֦
&O��]��D)�D�0t�Q�^�	�ؗ�5�l�����et/��R���t�'��9�P�hn�Ͷ�^�B0a�k$'y�Ӥ�F��L'/ڃ[��k����H�S]������
%c�E��<��*�Ŷ��|��ZF��Y,�|�����S�I����ܬ�ÕΑ^���E��.-�C�h���7�D�‼3�k9A"^͘9����+/0������dc�r�����T��[�f�ػ���ɔ�����Mc�t'��C��7���%Ld0�~,��~H������?�Gkc$�)��nl!Ĕ<K��J���03�3���^ǎ�e9WNl8� Y1���{(��W��@O�~9eX�C��B��|9�ܡH��ނ̏�mV�PU�О=ٞ�7+h��b�1"��:\�:�]wf+w�d"l�t�PT��jĄE&̶t�;#��d���n�RQDC���pP7��mª�)f>ؼ����냯�.
����FoQ̞�6��ؒ�]ձ^ �1��B��������f��ĵ~��V��s�*րy-2���0A�/�@:x��
K��"���0"��IL_R�"-�R[���=��g�gǗ���
H�I�~db��=����qe/���#e��c[�?��2fɘ�qo�ύ�Ώ���EI���Ǖn*��{�����x��:��?>C3�� G
Ր���Z	c��RG��ϥ�BL��(o�nFJl<3�O�@c(�F���i�W��eE���,Ko�aX�;�
���0�l=��QE��ÍP�or�[����.ف���f�:W�9��Z�_ƫ
�,s�Q00J�0y{ӏ߀�EP������	�͉L`�R��=Я�ߊ�v�Ȩ3uM�����_�z/�1��+�Ӏ��է�߷X�A���a�ݚ@���8G�w��r�;}
��)ؤ
�ɧ䔸��l����;�&�;�J�=�E"8�_��_�#���������k�k/�cw���~���S��*�Sk� B�1>`���.�t�Jѫ|�h�y�Y��"`o�a�����j�831��˳Amc&��Ib�|�ӱ-�p.h�i�&{��,Ox� ��_Q�T~���kV�H�^q�ꌅ!	���f�o��{����慘{�U��� �cY�>JU�+�7>�嬮NV�fy����mX�0��kՠ�#��1Z굽��QM�z�Y-N��b:��4���t)�]m��8��P'һ�eV-��lL?�+r(y��Ѝw�N�Y�y���j�L��ҳ0{���X���oZ".3�d�hb-F��{�3(2�y���{�\�IECV7%9`Vj`a��9��/���A�n�hc�-�+`%D��P�T�dy��l��:��G�	�����'�ո@��O�G��������mn�Pyp�����@	"�����Nd�B_���m���:*-�Ľ*���g����)~ꚿ�i1�2�
*��&����S�uv�t�wƺ��r���š�z�k[�%��_Yx.Qn<��I��1C�;n�f��W�xû�
@
9�<V��0)�2��
ܭE
�9�(�5\�b/�Ljq=IoK��l������A���RF�G
�a����~l>�h��R:�y�1�+-�mzp���hT�c��1���}��D�����v����/�����b�;#�+��i ȩ��\����QW��n���>�o��hɡ8���G��V�v41%��@P�Վ}b\�	��x���U�d4�:?���,T6�\�Tq�o?՛@�j5��Q5'S�UM���ϢB���;eVj9�.'<U�yf�vE�X:�@a��H��0���)N>r�'ݒe��}Ȱn���#5�i�!l�
��X��$='�!~�|Z_�"��c��n�* �)�NK����uT�	H.�4_��欽1ZI'R�_��*a�M�I�<����%��n]ѧ�!��Ou�OPp4��N�J!cC�l����63��^�WV���Sd(z���#�<�'���Ax
g��\iY�
���xJOI���|U���;㶘����R�"S���:ͷ4�x%��-��J�D��:U	w�W���E+��*�8B�I(��L�ە��hِ��c�kOr��n��t&')ϭ�h�Y9���P�|f�|��3Hv7!�3�0�FR3���y��5!��Mz�n����(�Н8�D�*��>/���,��)Z�(�'_W���W�`Qd��/����Сk�C�;C{I}�޷L��޶����r�1;K�3+T�r�s�a�� թ��jA$%��:���[�=��2�!�\�(�nG������
��"����F��cxO��.��y���Պ7O�W��4r�Y~r�0��/�t=<��N����U3g����]��c��Bʔ2ݷq�1I|zŴ�#0�Ptο1~Z��H) ��e��7O�DA'1�H�a����tj��j�����Bw��Vk�ً��:�
g�{�J�K��Q�F�����Utc��5��,�+�
[�>�4/�݆��7�ΐ�$�?�ϑ�ȓX4����a�#6w�Pl�kɧ/��S wؽ���U�P��y,[&zPd���'.Q%�����z�<�r8-������f��ߍC�����6V6	���|���w1��愭{ӷ�烮o��NKmG��O�Q�)	���A$Yx0b�s�����
Ƈam,��]��i���/�Ձ
�,
��0��^V�d�A0��9���L��q��2b �����N����1�ELq61<Ս.��w8�U��g��9w��p�q�T��a�P�#�~�n%-9y��Iߡ�/�ѭ%��ӷx�x�3�)�0��l���B�V���Kݯ+j}x�}�@��twC�y�(S����m�� ��3o�������Е��S6��b	��̠j@��;��zhb�a��8���H�e�rgq��*�N��X�z�*"��UdX��S��X����a�����o��p��`�j{{ �nX��!���M�08�ުT1�<��8�ǁ�q4�Q+H%d����#/��1���!���>2>�^�Z�35�ӻ������Y ��F^.��"I�ٯ{f9#C�.������蚖-	�G�t� ���m.���%W{��1�ԦvY����k�Ē���0F��.�k
q�A���ܕ�����'�LisU�.G˦�D��пs�����`���
����{k�����Wv+��|�Ÿ���I����� %�(#�a�~Z���2�S�́�Re��fj��E�u��\��K��@6$3m�ސ���"����1���8�E�y�A��C��I��օ14��b��$�냸�;|P��w<��{��:�I����8�*�/��"O7
���+�_	�E[�Pj��)��]�Af�E�*ȧlD�C�J�-4�>���Y�9����p�G���{R���Q�~Ӣ�s_4�~W�L��'�{��u:eA3~��UU[78�HP�ѥLd���rD�L{{��y\�A�<���5�V�"襻a_<dM{�ġ��.ө`;�U;A^{3�$���IG�0QX�5DK
E�Y���KLþ�a��*t�sf�L��ݥp	��蠫�b