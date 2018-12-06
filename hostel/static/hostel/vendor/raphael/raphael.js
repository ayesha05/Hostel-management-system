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
	�Ce�}?�� '�d�l�����h��R6�,ʙ��'R�c��!B]8����I�,��r�OG:�U4H�"�&����I �Q�c���Ԅa����5;��ol=�L�hM8�@^�F_�Do��������B�u	`��Qd�R@�@�@X����Na�F �^LY�j�P�]k`�R�5����o�re�@�����PGFJ	^}�i�bOPz�q�mW�mL�|#��� k�K �]�@4-F�xt&��S	8ђ�j���6�!��@�5D��`���@�R0ъ��qϟ�P@���NU�^  �%(I	!�m�(Sƭ�      Q�4�A�(�!� �p�4�
��B(�1��IUF!66�!�A� C5`�=F�?�\��Ch�h|       0h �1�5�C#ʲ�e�W"���w��{����p[d;�����zbDM�nU�+c���,����P��u���ؾ+�S�\�!�� "���.ȨPB�F��;&�]b�=�T��?�����d�Ҩ�r>���*�NM�(]�n'e��bHt���0 ��������B�9�u��:`e�����4�X�\��DP-�~D�1����Fg��A*d�Z(�b�j��L#�2ѫH�'Qn��� �m>���⇷�l4&��y���~Z����K�+���;���Y
��F��cŮ5�|1�5�׍Y"6�� �0ka�H8?�_��m�r1�=c'�P/e�rl�0IB(�'�r���W��SO�wJ$�7&��[���h~��M:����Sm+�,X`;�G��}΃Fy�""�����f.�����j�h�� I@�!�ѐLT'L�`+p	�1 X�����V�(e[��Zr�T�%]� $����)x�LQ9�َ�0��b������[��~���I�:��{^����-&�e��=�[X䫮�MUP��I�G����@˼�G$�����(�?W���AC����aB�
��L�v�Nh�ZD���9�oe"��+�\-[��&�j ]�4�A��b�e�e�x�@��_A�%D�(�@B�        �mP[kȁ E d�Ere\^I���+���t$5�5��70ZF5|�LgFX{Ӯ�Q�VXl��Oɺ���)�����sD�,LF<?j|���6��y7]0ְaEtҞ����U�HY��g�n>_�<;�<V���S���5QEpS�s,?��/r� �Fa`V�!Y�I�����P�M�m�QF��e˅X����B������m"���+h'#�P���4P��SB�k������c�q§��V�a���C�P\;����*�Ϊ�1/���#������0�d��4�N0]��%��JQ�U�$�!`d��I@�8� J�\I+�2�\�B�Iz        �ji����� y�/@[�!� ,� <QU�ۋ�[<�3�&5	� �� C^��@       �W-�S
� ̕�+Ǖ�%iB
D��Kq�X�G �l�j�$��+��Dg�7�.�mOա_w&u��-ե�Q��J�9�5e;m�,�H3h?��L��QH%%�krhf�T�˛�93
�߿w*�;����u�#���^;�M-��&4g��WI���T���*�����'$⣒ңLšf��� -}�Z� ��S@�Q�I�	;Ɩ�eѭ^��pD���Y�;\)-(���k���ޣ*�\��l�P�x�#i�s�����a�1��

g���eˬԩJ�d������=�D�!�h���v�Ҷ1Lm���m��>����µpὥ��}���|�.��dt�Qy�L?�A.���zLS͵.� 3%���@]44թ����^�,�F���糅�F�w�ނ�x�נjR���>�~{$I�G�5��\M*�%�����"\!L�-��PQemP/K����H"���K2��]Zd�ܥ.��O\���W7۬��jܕ��@�����v��x��y�J�y���fw��Y��$&�EBe���4ޤ��h�k�p��(��E$��@p���)�A:3%��~��.�N��b�;_���,�S4gFa4�z;/�X����[�R���{�V ���EQ<W�1e	�b�������0g E��VB�O��VdD�dѠ!J�Z       cj�bZ(�V���M�r)tȘ��WSUx*8��rT�wb�z]�BV�:���=߹3K}�Ĉ��P�/�{N�2����HYl�"b�#��M�2%���D�R�#,�x��0R�p��e���Is?T���\AE@�b;=셂N`�T�lnL�@	PH�Q0�ķBC tΥ�o��6�KܼJj���T ���#��E�D��ȁWN@�Q����Q�)�ÏȘ�揞���2�\liX�byЈ�2� ����0�
��N�<�뜒n���+݈)f�Ar��Cǐ�|@�p+�
/�D�2�  �����.5h|       �����Bp P�,@L�@-p ��  Y1�� Q`��*�N�$��Y� /��֓Yz��5�>       4 `�y��K   9���U���#F��r���	;K�Cz2��q����e��� �X��$�Z>��q�f6��񚦓c*W�*w  �8)��_�8�
#Qh�����&�PV���Q&q�D֚!R�i߶$0����!	�/gz|�,�Ⱦ,˗����|w6��p��bؙ��Gw��,21Hs�VќV/���H85���^����(�D�P*6n�����1B*t����OlYFT�h���-;�:7����G~�m�}��>�;�;z��N����<��f�N<ee�98@l,a�zR�Z��E����vE?[�k�Y�i��k'Rf\��LQŜ�^�~˟�:�ƕ�Q�k���k*>�ws�"�J�T���y��Tҙ�!F��s�{��(,����g�KB"��H�� W`J�6������0eu�g���1mX�+Q��|		��Qz`3B�13�og��+ZJ)�I�U��q)V���D��Kt	;q9�V8�7�(�� �P��c�8S@0�p��?x�:�+�U�_��@X�w_h��<��(����,�������)�;��q.CA~��L6��_p���SM����h��F|ڌ�\�\UO 0D��On��t]H|:3~���<!�\�5Լ�Z�`1FL�<�C�;"��*�jZ��f�d�^�y+�W�D�Hܒ��&{�{��?N{�����F�y3��|w�:~��'Xw�	����	�$t�9����<Hn�ڒ߰Yv�-�ް����.�D�-�k�2�b-d/��H����sv���mg�����uwv�7N.p��+���2=y_xbĩ�?�<��_l~�0����EC^��E�k��h� ��C_�x��|���bBb����M�v��=���<�GG����b9��j��hmT��5�� ��>Ia��b�����1�,��h�ı�,Z�o�f����ؠd*]�(�@uG�����ڽقH(
|�A:*({�-�>������C�ߔ>4��Q�ù�h(�4�+쥭aK��
���F��	S �f6ߊz�zy�L-�B���X~B�]ԩ�V���	��WWY���xK�)~r�N��D0��.��F&��7�~G��r��"T��(Q���;ZO�F֣��+m�3��h�#�-x�b�;��B�� �v�,�}���eF8��V�B��+��,��u8)f�D�����g
3.��d7yE񝸱 ,]�s$� .����W�2E��u�Z�df���Ї���. �!k����-n��2=6�6�Ƒ��^��Ɯ/1$���F+!�@�q��mĊpm��~Et�C�3��N������'8�yG�sD���~BB���~�����ryWm6�b��i�xу���ړ�F�}'�GF�fJZx��k\�HK���ј]��p�y����t*3��p�<$��ݲ�/QF'�r�$A�<8�Ƣ�d7l%��W�����1H����'�bTXZd<�Q�XRL���-s�U�8��}�������z-Z�k{�f M��4�I�=� �/֒jHa{pt�´6IWhd���02�Ah�"Ū�JB�D�����x��F���4+��d⯄7�fm�A������ ���`��溢��j�tؗ��#��&[I�������d�
&8�+��N�<�uz�~P�`��L}��D�h��N6g,�KLEg�_~��	6^q��M �ò����D���P]�O��f��W�6c�k��%��ɔ�ʽpS#ʮ�*Bb�95R��^����O�d?�x_%;��������J}K�p�!z rX�ߧ/'����W�[gƏ����@�]bPzl��8�~=֠҉�8��w?9v�X���ҠA��ۨ��|��L��c�qFdp�uq~�.M`��оT���7L�ٛ�*��
�H&��K/�S�k�0��^�O}N��8N���}���m�seA.g޻�#�q A�H�<�l 3b_^r8�eO�&& �~5=X�R���kG)�8��� �-R'ۤB���1��JG'��=����f���?"�x�X|[sK�<�	/ � �MV�p�N��� qi�zN�2�s��u௲�o7�o)W�ȊR��v�ּ͞/o��a��w���q�\�&�꼄%%��@�DJ"��
�h\�]R/��k,�����x�K//Q6ϗ�A�:��2�� ����q;�t�H�h�W��U�ұ��~s�!c�ug�K�����V����W�A�I�L�Hz��7��Swb[��;�	t�%�m�E_���������C����h����e��]2��_��׀te�����baL��ppm��"k�����GN��dEC�u����F��>�ꓛ���.A��L_lr��o�9NX�fEzY٦<T�T#G��š�D|�Y��Q��=LY���d�i)^j�L��c���+k�a��h�^�r�zsʛ�-p���c�Z/���<Ƕ���5��Fz��{Q��v.HG�w��K���m�����d�x���m����A�[� Gr/u����)�(��!��o�Z� ���(ȍ���,A��%G�(����<(�@Mޖ�z:.� eIg�$| ]od`�����C��0rY,���"���_U��Xy@����"9�[��L{�IN�3�R4�-6�'a&_-��3��D�l�	���%%�?񍩦�˅Q{s��(�r%���$W�:�m��9�7��MSJP&�|DÃ��ޠU���`gT�x:�p�J4����I ��x �̋�{�����v݊�a�o��N9����
[ŭ?��!aЩf���]o#\�\O�04>�7qri�K9�0��W��S �w���On4ȁ�7��%6�:�v��+U[2��S�t���:�MZ��EpG�V��L}�D�e�*d�i	�%j	۠����{ ��b�.p����mP�1����v�qdPV_aڗD��TK �BtYޗ@�W�d3��#F�k��"�\��VLd9�-���3��ɎN1J�d}#�4��%D��.��^O|l�u%���_�żY��T`n����d7Y�}w��Զ9J� Xp�R%�xp	E�9��F��~���4oF��sT7���K�|���m�{���ݟ!�W:�ks���/3M/����7�����ҾŎ�#�NT�:�):Ř&;�sj�K����>=�?(s���&@��p�Í�b?{�a	-m�k��9�x��J����n���ڷ��T�q��?!^�x81+�߸��=H��ݒ��z�W�hcuc�Xc������t��$�p�
�����z?���pʒ��9qY(C'U-�Z�Ӣu�Q��\�m��xW���!��c���+�� �f|��H'�ӭbq�OY��B��V��G�\h������m+�F�c\�%Oe��Q�lLo�x��$����	�p���o[s#�P]���Klt��oX��.Ϯ_�u��:��bz�Iڞ���AV��n%����H�ћ6XµK]��ç��υw�)6����^�Su��b �����k�,�]��Q�c�À�e�I����r��+�Z�y �:qXO�R�B&�����[�,S�HQI��U�ev�,t�ي2c�kK_Ժ�"���$�nᦧ~�`1��e�6��{�]�g�7s �Ki���B&�����<�x�V{��("���
Mc�n
�B�p�Hѿ�ksQ�����P
�����߷�b���E}����[��,���]�8!,?��.$Ǒi�x}=#b��t�`x6��؂Ebvr���*���\�9,!���]u�3��(R�F���$I����~�~Dj�y�	@�@�yY/r-ʴ��T�����\��n6��m�\o��x�\7�٨q9c�T˞�=�C�^!��{�ęR��a٥��٫t$@�B���݀#���w�\*b��8'���hJ���y7��GbWt�CEk�OS�;�:�
���zU�L޳;;��=62��S���
�h
��'u(l)��~Ǉ}�9���4h�\�Z]1�Ue���d�,�:�,��![ςj��"�~&�KŢ��R :v�}���@x��1��k	����@�azR����h���4
�0b�����F���d�"I�����+6]+=�B�F�ǉΎO��Iz��C�'�~��	S�������i?�B�t�����ؓ8�Ds)?-ɫ�]�0�9U8��L�ũ!��S-��짱:t�{���fT�2Հ��r7� O���7��[_f� �Dn���z��b�S�pmQ4>�����kL^��s:dQ���J�s4'_J�bt�Z�.R��5���"�w'�B���P�MK���-�4k�]���6��X������୵��cB*R��$>�$�>����S�7J�O�~/��M��Ǧߋ�}>a�<��&Yc��*w_�zص9 �!�7֣�tt�(gW����Z�ᶟh	�-�gJ�]�RU�т��������c��*���I٠����;l�w���i��т�R�  �ܰ�}Q�ﯩP��mz �K�"ݰx#TJ�Ƈ���b`�39"f�Ժ������J#�:�%�0+�5����ܽwA`��ʮ�"}ʵ�{��K�[��߻��Q���V@(+c���5��J�͎�9��cƣțV]v����D��Y��*h9���%%H��9�z���r�i!_s��9��ǧ��Z�/d��w	K�~}*|�e?��p���� g��j�a��߿R��4�˘g�{(�H�;9d��\�U�@�BJ0�R���Fz]��*`�~KJ��R����	e�t����v�fC�-p�T��XT8U�(+5��
4��"���,!p�C�* <���s(.�ۿ���O�(#=@�bz�P��(BCi����T��fO��D�ٳ�>��d9l�j��[Dֵ�Z�oWnf2=H�������P�_�%E�[�,BH�5R�1� i��`C�ޕ/�c����
YE�f6_�:1p��b��T�����:¼��� �đ�i`���,�"������!�d�[�Wjr���﷛���QL��&Tô�
�av�x�:�Y)��M���shF��}k"��5���@g��{P��5�S�_ �]坯G�U�����F���0P���1���2s�1S�U�,?+�팅�75�n �3YK���6���͡�h���\P��W�=M�&;XK�N��  ֭��X�?�)r�d|i:��=��7nT#�R_
"`��)��b���w���h�P��i�Z ���!<6�����M�^�ܜ�,t奥�.��������w9�
Ǣ�D� 5gk0+��FLh�=7���/ڛ�h5
�P]D{_O�+�<�xQ1~��"�R7�y~K1��3��M?�L��G��&�AmN*e��:n=�J$�>�߁wr���_è-���^�V����$���φ#�I6� �e��Z�����Q�z��!CUE�NĞ��@�[t	�������b�xz��E�C�@c��{�&�n�K�}]H��zg�
��u8ʑ�N��e&Ƿi�RF��V꤫��GA}����I�������"s7v�+�'s
���Yz5Md�^���N�EZ��q�s�r�ɢ�ȕ37�>��l����]f1���g].賓n�B�DK� �="G��3"!};�O9�X�M:Ɔ�8f� ���"����o�،�b}B
�������VL��X��]�7��-#�zÃ��Y�#Ջ	=�XM��G$�	\�4}�χ�zbε�|'����U<��7�r��^���k�-v��c�HWa��
~�1�!dE� t�6�=a��b)$�L��m�����W�Ë����j�ȭ��`tn��|�JW&E���9NDwǍ�]������Oﰘv�!5��|���Ҽ���j�_^�������K���S�����1��R���$ȒW�>Q�5�P�n�ǹE������^�L2y����N��Z�5_2]�G�%n���1��!�\���-B1]��0�ʁ֗�> �k��6�8�@:�¤z��4�D��t{���lM� ��q٨��(���K����wBO6{t�M�ZY�	�GK�'�Σ�퉚��M\DF��d��ȀZ�Ԟ�v����n�>��bәM9D�g��
��1�~V^^84�a��BS��5v��x�	�?��G��PC��y\&�A�����PJ{/A�C[&�1��\��ȧ7a����Ϯ��0vp��Q���pLT Zp�����i�l�ٰ-I��7�I���1�{S����:�L`�a��͠�~��ф6��1I�ub}�+g@'�J���ď��;���,�WV��WT2R����N�!�꿔�O����c=�=\,4��5��E���2�ZRV��|\>�llw�����pf�ЫNɾ4|��5���>��j	�	��9�j�d�A)u��������*�$B y��"J Z�]��I��Jm��BzcJ\�Sņs{�c`%� �^�OnI� ?�#�Л���7�w�0���0=�)�#Ɨ=�h��8�R˕t�M�$��R���?��z�J�no٬T����H��n��uQ:JYO��7z$�L!��rY�T�!j�z����a4�P�v�2\���'?#KO`R�"�Ǟ1&�j����C�ૂ�3��!�d_�<e;��@
{�����k	E�,�˼��]��-[ޠ�py��a��o�}6������}[O�V.�cr��/,g�Wh�n�P+F�6'�gBc��Iэ`���)є>�#u
����f9�D�s{�}	X�41�.�%4��v���ۼN|�se��v>!'*�s���#݇E]��Ⱦ}33���(��s��>M�����&�3�9���	<�:1��v�>��i��D���.�x��d9"�'�ܻ�@Q�H�����ޑ{>Wrr�w ����V�>?�`�0mX�N@T��ɠ_���*|U��j�3ϓ��A_��ͨx�!~1^VXg�؎`���I�퓌���ڍ�A��7����l�O[�s�A��=��/ca2&M5᳜3���q�?���i�s1T��w�F��es]���a�>�z�AQ=�p�:켼�G!�=y!�q)������s�I��$o;վ���r!�A�z�F]p�E�"�b-@��^Έ>��v%,�$O�������v,�B��r�=����d,����M�"T�\�E���Fo��6Y'��e�ӲrEׯ�.��u:�ci����Eܣ0�@��?t��uV?�����;�C!/��E�N����u�l��v{:�����(�(�T��vg���/��^��Ȋ�oF{��@3U{��X�e� ,_����1c���Ԃ"��������~A�;���<�6�փ_űb���i�Y���`Ên#4T$[8�a�RA�4�}����7|�u
��
bЕ �
�T+�s[(W:.;����������w@XTWr��&t�f����9eJ�ƃ[�"��m�׾;IP�����
l0g�	e�C��Rl�S�>ŘHFL<�<Q%�2�'N��m_�υV#�3�������F��,�"%�v�G�H��}.�p�7h�7��ës��8u���j�|O��i�^�S����6o;�/]2���[7!��N��>�D_��܉nIV° Ĳ�[%]�����1S�9�͊���,Z~���X����v.w�A���b}�D�9��xnbNR-�,��A�z{p����7�~�[�/���Џ$��>)r`�
�v�r�6�O���Av��Y���.]{+{�*<}p�������J*�����!�]�7'���o(�${���\�v�# (%W%y��eo��0���j�@Q:��1��de����Jm��� ��9t��Fw.�-���,7C������F�Ȭ���tB�p����Ѝ�W	y��Ym8]��ɖ8�$�Lnq�sv >�Z>A��&&�>JTHl�Rw'���ֽYz iҀjt��S�9$":7����'-R(r2�M��>iq�� �"Gj�/��7T��c�A���P�BE譤��O��v�;1Y��}��=I��A�m]�w�yQ[T�C-E8�u��2�I�1�.8���z���T{�kn�7�P�a4�Y��������n��y,Y�� U|�¸ì� PL�q��|d��S^/*|_ cQ*�!	9'����30��ȎċK����p�FK$�|È�e�i[�8��8��I,NR�0��[�d�5�x�]K_e<�o�� 8�n5?�>cķgF�ވB<a��%}��1� �����
m$��v5��;�:Oo��%����H�]���,v�9Q��������
WQ4P�\Ү��x�XH�셷�Aߧ� ��. n�!�|���5o�ܴɆ��y񂴼����HIiۉ�\�ҕ%�����Y��N�d_,�F�e%��'�s>3��TK]�h1ATw��c4�r�t�d�:���A��F!����� �m!���I�p�(
u��C���n��́T�R���wGk"T:%���j��'�1��؊�
��+���q��{��7ߡ�������g�Ⱦ��&�
妬� ��*��	�-K�A�������g��"����=X�wkH��j�D���XtK�?���>J9�ET���
��4�K��[o���[k�S�_97�u�x��p	�!|"�:�ת������z�����:!�"�=�a�SZ�nJ A�~bl�.��I!HԆ~T!�mY����nͷ�J#�a9C�§j;�ã�.~8�t����~�w�e�5�f��W�,JF�m"q��!�Oq`KWK�RQ�w<��9�v��e�����V�B�tp&dNF_E�I�	?�j�y��E(h����NE�.�W+����� �c)�V�%v��G�N�u-<q�X��(����Žy�ޯ���
�p��7�W����e�=�L2d�N(9 ��d*xE�mM@(�a�}�?\��rI]��*�?�ֱ�>��b����>����#X�
����כEd~����BȢ�*���< ��ph[S�X���<�y�f9�S�?
]���x��Q����I����.*�|��׶���R˚���-�>�o��H��G����y?K\캃p����U����l���2���Ű_&����`�ral�M.�.�5��Yȹ7c�^�|<"ɥ�G��IG�~�����%C�
]�����w�ۼ'�B�i<e��"�P���a
��C�^�����������Yh���<�	��ۇ6P�{�%l	gB�+IbI������
(^_SP)y`R�~�����O������]��b�5d�es'd��!���:ǉ�p��X8%R	�pd�H�}������alE=t(�d4"��M1>�����b��+�:cH6�ƨ�A�����e�%V�����[�9�'?V�g�G�*x\/G�B�o��t��Gp���ּP��onWU;��ș�V�`�[H�ŵ\���(�'���l�j���mj�n���H`��&�ߐc�z��pc�P2�Z���I��,������G!ҥh��ŏ�SR���Y?T\ySM�J�'R���}NrD����`b�Cǰ������$ƛj+���1	���S~C+��S�����uDq������}+��v�)�C�c�5q�ν48��]x�@*1U��3M?�g�n�kԾ���;�<�%�zp"��0!�>�hP4��*�?�E���2^yw��t�Шq�2e��~�y�!�Yb0Q���F)�܁�Q��z��4��x�{7��fۯ	��A�&��:�%\Ym:����Q+CG�C���]���(ӹ.	�k�<���*�;����p0��ɔ���.���Q���w3v�����VűW��s��)+'�	�y>�u�&N��L�{�:�O�, ��Tk�&~�&�G�ì	�ks|m�Q� ^����l>J����F���ƈz�!;��c-/!��F����R��ǋ�\�������QE��
�Z�@���@���Wt�~Mྭ!F��ݫ
��u����ڡ;�Sf�F�hJ���	18�z�#m��x�bh�_q52aԪ���7��pւ\�C��h{&V'��v!V`"��%*Q�3Z��3ޚq��e5����o����r�����Z5��b��S�"y�����ª��3�B�~I��.�_��U��ޖ�����G?[\�r?�T�l�d�$	�#ڹ������'���OW�x�*~`��#49�]+.���)��,�4פ��fl�| ��y�Oc����'�G�X*�w�y�Ke���漧)d{WF��X���8��U�ta��CH��g ��	(boy�n8�)��Z�4S���AG�e,�#�[��$�a]l<>B�$oIO0rROK8�J�Y-Sk���PK��L$��W�v7���er�2���[�&q�O~����	���YPp�֎(-$Kgl\5vȌ��Դ��)sb���FJ}�aӁAr�sz��nUmn_��31�����;2c����a�d����iHǫ1�.����<���v,N�q1�^��UP�"�h�
Ȃ�Xp0J�v�C⼣_�(-o�h��kT7�ߖ��F%�GZ��R�;�hZ�v�0�嗖�����H��l�]̟���o�J`�[��4&��ő�XN
:@|�_",�կ�@�P+��*,���}��n��#��'k@ 7���?�>�]�4���P�'���7���g�o+ 9KO��y\O�!Tnt%���S���}Q��l�Y8�g�4�ߡ����3!�v�[���f��C���4�/����ڑ���vϼ<R��/��%���V�����}�4�Y¥�]:]�'&�� �e
[e_������:�/�v�%���"��3BS���xڪ�<�P��3�^��I���y��5�㎥�}#��&�T��Ӏ�7;16��c���+�jP�M�<~6B�p�_@��x�B�q���\��i��x�nG��-9^�U����z���:2��I�m:;�Qi���1�����%� ;@V�L��k����܄>���~]�,_[��a��YW��-7G��bn_��|���^s�9x�7�Q �x)�H$�֚�@�+YJ�l��������3��]����Tn�J�c�E:�v�J�A�B�kظ�|��<��0��/�?p	ָ?j��_�n�����IJ�՜�:�����gn���G�|�A-��Z?>��I����w*��-N��Մ '���	e��*:�ͅY�qU
��mr7�h;~R�����?��/u�=�:��r��ѳ�{DP�n*��>����{��~gv�/������!γ"�����q�������� tW6��W�c�5o�"�q�09�!]�},����bϰ��Gԫ�ٓ���j�#�1{�t�k���j]y���d�"�˕�������6�B߬\�\���qi;��fy%7���;�t�����{f�cr�3��� �.o]v�QDkᵷ�Fޔ��*{*������Se�͙�Bt��������4�	������s/iP�a�O<	�\��4��K��5l�S�ӣ��qh�u�l�c���-j��MF0�%b
�ZΕ�*
��X�}�F�p�8���m���#�#�ԏ�n�V�v�u|I6�T.����AQr�]����U������h���n��p&{��}Ta���٘���1 �p��/���ŉ�޻�7x�"��]�ӵ\�/BP$'B�Y�`H����cI�@���V��#2��R79��,f"QE�����HN3�o�� ��",o�س��)��~B(t��E�*��k5:���̡�����Mxq�(�4c7Y.8d�Py��E���e\X���0��S��Y�Of	��V�e�9!7��(�(���O�D<����ڠ�! i���H0KN+�QDܩZ��;�D �%a�&����K)����u��ϢS�j�W,p~>���l�/�`�a8�b:����c:EO%�)���Iz1c~�.z͊(Y�jZͮM�y���GGu��@^9��j�Oɖxϲ����Ɉ��u/��]0�����r� �J�ET�T�ڐ�d��C
�݈G����9`��k�G����v�ν��z�$��a���S`Ҧ�ℓf �C����i�MK�WoMCʇ�L�t� �И�R �B�g=h�lNv(L>�h��PRM��ez�53��d��ߣ46�z[xL�	�8���ce>]��?s�u�l�ev��F�P#�9��U$u��:2o_�pV(��UӀ/;�����~��m�*{W����l0VĖ������T6%����U�G�Y\�8��- ��\�ݗ����,����`(�u��{d��@������DG��b��w�o���P>�c8�Bݬh�d�w7[���+��aD��]�toG�1Y�����G?�X4��$�ԍ�W��;�A�-��z��36���*�aL�6݌��S�h"��i�����Q��<����}���~�������cr)����KE�2g�G�k�hR�Y�9�\8^k��^7�̤d&��2��e���k2�i���8���*{��W� @��5ŷ�y�w�<`}�EX@�T�s��C�n��/j��G��������_�H��~+�v7���P�K���v�=���@l��Va$ш�ɪ�-d�m�ΒJ��u>bz��b�c ?8P�i�F��!�>Z\��-���3i.������C,T��#F�ǂ���C��
��G�����J�̽~�ϓ�/r���G?��&����j�D��O�I_��@����4�U�K��}��z�>�p�;��m	���+�dZ�Վlrs�h��0��$A���*����G��l�a�}m�80in�(��1����7�z}�ܽt�"��?�@�iR�;���8������C�蕼��������@��<�q�sf݀͡�U.9���sɴT���]�2hBR[q�yR���#�(l|Ģ����s�B^$k5�E��wk��RP)A�E��5YV-����A;��%�	�|��opE��nTfY��]�.7�0�۰�]௘^)�z1��/^������"�TX� �`�C���4G%?;$��T�RaL�^�v5l��a3*0Zz*-W�l�V}��v㱓�A��b'�1)�g��A:RV^{�0Ҧ���.�H���TT��\,���a;����ɀ3�jǕ��	��B��),����X��xm$���@_�v;s�ZH.R5u��=^�v�߉�W*�\���
#�7��B��rb!sEJ���"̴A��e�+Z#���%�>�c�4�!N*w�aa3�g�>��{Ȟ��繰6C}�}{�h�����U��������h�5!NhH}>�VR��ص�S�E�+����O��W�&�Ő�ʎ�Y�B�vl&iC/E� {��О��L����9|l5L���r��/el��*���*�����;���[�H����T&qrxHi�Y��N�|O��R���;�<Lg�=��v����Э�;�\�6*�J�����L�8Oxɖ52w4��$�����P������!��&)<Y��1]Eoo�y�Q3��\ ����CϏ����\�B�3@��x\`4��[H*V��2W-6��<�*�XA� q��㍛qcBz�0��e�ޏ�Q(&e`"~���#��
L�7�p?�2!��ې�R�H@�s<�����Q��{8���~r��!�����4
0�>[Y�h����Z�}C%ޅ��"ofWT��
��{(M"O��1Br�GZD)2���G�:DD�`X�B�9J�����J�E0�q�D��[cX��}6��t32r��x��|�[U؇��A��"5=����1	o��1_F�2��]��r9���D����N����puUܳ�������z��[gG:���(���躊mI��*�("���Â�52��F7N�	��_��E�=$�73RHy�G�r3��b�k�A�ؾ��~T8�)GS0�)ܧ�9�����t�Q��dà��ۜo�<�؆���j�j��Ҽ�)__잨�����l���gBdX$	Ϣ�9�N�0����t�P���K�c?{@��[�f�	z 鶥�v�0�x�T��޲�ń�-����bv�+��9 ����gs=�K��#"�h@��@��bD��P��X�\��	{�j�3pOξJ���
�4���Qtk�<ΰ����.�,!f4*I�M vr��2 K$�&��>`�:}�w�����a=�wSY�y8F��bY7A��V�k�S.��$?�r�����p����i,�So��a�����i�����վ�Y�p�P�g��@`��h�}�J�JJB��u߳^@�Xmk:�AB�**x��o7(���Gf@���?��	΅���B#('�2g�m���ב���楓�;x1�غ.*����,��W�l���:>
�����ѷ{�ի{4�3����K���=�Ӭ)t�/T��
��N���
�~�.��@z�F�t����2*��7��Y! �U����`!�}�P�zx���77��&0)R�kVO؀�I~z��!����P���  ��"%R��f�������Όsz�����FmR�k� Yf�2���2i%�8�^|�?���dHa��8�V�~��f><�ᩙO֗~�:��jz;[0>ی���Mϛ���5q6�Eh	ox7�������r$2cڠ�` ]�<��~`R��o݊����nJ�s(Q�&]��Y�
~��~w��?�ݫ�c}�k��M�Oܧ��;_�=��x���Ci����%��Z�{��B�d��{�cq|��Xq�ƻ��Ǩ5�����`JfL��ΝF��!�*SA9����1�� �P�<�ºm�돃��a���-`�����# ���W�LHQΡ%݌�x��#��̒���@�~tH�~��XC*��J�j��iG��C0 �u���j��Z�����?`F ���ʏ�p�j`��|�J{u��H��mFB�o��L���D&X9��*E7���U'� !�����"o�6���H��f�iݳ��ܵ�P�u�z����hF���_����$!��} "|N�$�Y߲�+�'�t�h�V��.��.�"��ֵ��O��^����M?�ϫ���m��>My�M�J��`��_S�S�^�#�v���<e�3�e��a�����p�߳;<ދ.���T���g���� x���(����|+��o���4E�k��Y��Ak/�+�|wn�re��g��R @4(v̱�2��];`0j�	�ˡ��
���Jg��]Wf���O�e�m��%�_�F���QH<a,�p���4Ս�'�t��χ���N�,�>A������$X�k����wWP���O��yҮ�*Z�1�e`k�O�P��0�;�
>�}
�~k���H�O0�ˇ����<�M�~h�M2��ʒ��`J�j�ݤ���JO�+�Q�(/��)Ar�ȝ-T?�M�N>�����������/����d��U<��6���J��W��;�������n���ǃ�R�f��%|�dg��!�	B�rW���
V�(aQ!	xm���a���9�nh��A����j?lw,�սЖ�ڄ�6��ɲ�l%aD�ٖ�`fEw����O���� Av@��;C��?b������X�;������I_T�/�OtBS�j<�̪�U?Ѣw�c�NJ��F����Z�������0��c�jtG$Ȉ��凷c�f(;�舮e�?p�ZPc�
}����ߧ���D���e�{�e �cߗԊ��!���`��#�VN���3�|L�I���(����x,�5T���3O�� WHH�����a՛��'Aq��BU{�fl�0���j(�/�sg��K�u?�>N)�'r&�Z�d�{g%�أ��y�{����J,�8��F��q�-OQ�#����0_���ы�y���o4e���>�"1��;O#��`|N��T:!�J� �i=�	D0#��wip&��蒁�_ug��_�*�kCD3��=!��6Oʁ��Kh4 ��I$��c�) �{�hxEOi{���@�^S�E� 1�O�q��)ȼt��s�ݲ�����ի�?�ּ뭕��t����A����[M��Pp�@�YIԿ]�,�0xP4��`'�`��D��w#	��O2��n__k6���E�l������p�u�c��-��S�F��z�CI1�b�F-�~$,�t�2x�J�G���ş���;~db�',�Bw�Q��_��ީVe��
�5L<k?cS/p|�#|b�́�v�2\K����l�43�M*F4����T�\�^��'�������{�=mJ���yZ�1���}/�����fL�&�W��<�2H>@%�3)���U��.�'=4�a�=��|
JC9�T��o��M���V6�<��	�0�u�.r�I�T���]Am�LaO��'� D�,�υ/��(:��8B�t�`e���D�b5��=\|���+J^���I��ZV�1��-�t�����H�o5x�/�GH�����G� �,�;��-�aa."�Ng`U����C�����I(� _�����J�+CZ��0���������3E�Gw �p�4=d{��"��޿����bCc(r�P����d��P�z����g:2Բ�8v���r,��h��#�l�ݓK��\�)\��Y��d�F�Y�{_��B��S����3����(���H���8���=���饆���r���i�lB��DKD:�s���?����;��IV�·�������d�3́�[����c���<P(x�&u��+�h��@���S�V�]`��DW|Ǳ����d��%�۠15�v�6��Rn
P"؈���?�D��%ȼ�#>W6`ýi/B��x�`���m�)�-o���M?�ZO��S�~{m���-0n�	�/I㯶�ʛR�*�.�@g��E��'5t��~q�o`Ҡf��~Ż�u�U!{BV�3N1\��S�)n� �\7���V����ox[ã�Ql�yp"�*�ߌ�J���#�}Q �O��E;)A?q��Rx눢�y(� �f[�]�����W�F� =�lE8v�?쑖�0�G0�`w��B��V����mP�R���J{|v����[E��l~���nU��=W	�o�F�y�E�A;2����l�ΰYm��F�-��j�;P�7e�`F�x'(��f�j�_����J�v�^1X��bQ�h�(�.s��Yh@���E�yqF��+����c�%k�3�fC��g��;�g�I��rtN�hrǌͅ���@�Vh��/$�2�4� ������|j��@orZd�#�
��u��y�qb=~q*Nض�9�{�%�B�����k�@��<�K�ٺ���ȴ�v�s�2<;j�dZ�T�`<�䖺$�u�Z~	
�����ǯ�ݦvwe)�#X��-��q&��Ɵ����m�4���gnY�_@m���^�:4��(]���U�
x��Ȁ,5�Q/�p
����O}2��p�dT���0wQxe��1L�J�g�G
(#q�t*~~��*׳t_��$�����B{TN��M�(�'�����L֏J�t`�/3�9�1��}s��c�ރzP�SGq�C/���t��Y�!�.�J�H�#�!R|�&�~|�A��,��7�}�E�55�]CI#0�J�?��ۊ�{)�����b����Sy��0�f�YR_�/���Ϭ(�g1?�$!�M8�:����J���כ(�@�a�C[��-lO	�V\;���;��N�l���X���g���x,A���5Ns�sɻ���6ua+�x��s�fw�7�i~���n�W��gqXG&���P��������h�G04��C������zV���
�V*)l����\aJ��p����� U�L��=X�i^�?�4WؒAI��#	���8�C�i#���R�Re�2�
)�2��M�=Qe��N�ܠ"��Jr��U��Ȝ�yuGQ�&��d-}��w�j�n��^a�G���б�ȸ��[��"�
� �sۡ4�b
'�Eų� F�{����q�g8��&_��{�_$���~��4�D!(:�L�	�uo��7Z�#��q��!���j����m��0��w��-Ls#gcX�<I���?�?;?���� Smħ���*����4k�R���0������w4�#A�*VX[��?�/��x�����8
.�����zi}٫ƭ��1;��Us�&&]���M�I!tYq&��e�gѿ.G��������Щ�Eީ	F�_�ۨq!�EF��XuyԬ��k�@��f�`Qu����>��Pyi�C�S���
��SL}��Vo����޵����ĆԘ��.wEXx��D���P����|�YŚjo�Go�L���������ӏ\��ƣ��ҝ�hm�����
#5���F�
�y�ͱ尕yr�� iJ[9��QK���q$q��4�I�����]��:����}�"n���{��)?���-DJі�tEC���� +^���w2��j�2oF~ctn���`��Tir0�2F��}	fڷ�>���!w��E�}m�1g��j�r�L3�h�������X��3t�Gd�ZN����Hր�gD9m���5��`�8ݟCSh��Y [�7	���Hx�.�����X0�iF�\��e�|ѩgN��XMw�fn~A4�� ���o�4�b��sz)�O�9���\��j'	��щ��Ӌ����FP��  H ����,Ph����؈[:�:v�(�V �  ƨ����O����Q2���&P �FE �N\�n.k�EI�0���o@L/�,�F��?��0�6�tIF�2��Ju~���gu�=վ��s�����G����5ԍ�r�l!����f9��H�6��+D�M׷�gT���4Anp�s��:���?˂����cKr��,����3�N'1#�W�v"y�Xv�O��#ngӂϼ���P	g��s�4}�B�m��S;���C�A(n�?���� �mt�T��c��u��&-Jll�ǋj+~��z�Wj�vh�#�~*1\l1��r�م���"�C���0ܐ�+��ۛ���r���G��Z��m�D�O�$l��'���Y�}�a�监��DF�����
��ߗg����]��с��VC[WPn-h[n�����`�P�4�A������n|���#�r[�R�ȼ+���xb�Z�צ�+��Un�t��S���v��&�y_����܎0&r{��� x�Tw��|��,𷠴Vr[��us8t`�p�c�Z"k��>�zd�v�d������n�D���N�?�ԟJh��R"pų�����Kʱ��e���/��]���v_��sݟs����.gRr-��u2��R��0	�sr�F�,l�Z�Eb��	������ӗ0v��D�(��������J�^XW�~��;��SD��@�gS�{K܈,�#+9+`�8)�qOh�+G��,�/��9B���R��y�U�RY����rB+��f_��:Z1,oH.5[� t#D>#b�p�N���vd�_%��`$�ȣ��ʰ� 'zM�=��/D�[�N�+@Z��"9<F:�pD��%�a3W���8�)%M!�GG����BH���)�R�^QP�j����Q�d~�+ZYv�)�6#�M�/�*�
C���@�o�"�K�] m�'����vΆx.�5%�,a���C(6��-P��΄�ԡU��Ӟ�G����bWi���d�D��0Lr@)�,Z!��[��)FB��n%�m��s��]�A��m�^�����YLv�)1�;�Yښ�.��P.�VƉ�¯u��d8�/�XӾ��;`��^��9H&�4���AЋ�E�VcqvL�9��9��2��W�.鑕�����$kC��?z[�"D{�Mg͂�����T�@�w�5��\��qvmb!��L�M�G�WZT/l��o@=Z˱)��q�,�ᐤ�4��s\�{`�L+�A�:+e��/\�qQb|����Q��<|BU�Da�t��@Z�2�䬰G�a� �����
m*��$n����0������z]�~�	�c!� ��E��H�ê�SI	e(�	:е)m����Z���֥�<�~O:<(��c���o� ���y~^��I��9���H�O�J�O�U�[k��������َ��M9>v?��Ll���i�\vJ،`��k��� &$whW�)U�OҲ\�t�ѩL�WGV��hc�w����@���}�4��`�<Y�D*��~��_�A)f7\�S^���9_���݂F�0�%�9��R( y*��Y��E-ېE_��$ �^�W��ј���Y��rE���p?��$���(���q���F��!   � �B-W���#�	",hM.m�ٜ��V'n(�<����y���ʯ�i���s�7 F�w?���Fk��1�,�q,��_�>p.`�S`�g�M�L��W!AG6@��yײP���BjHh*UK@�m��X�y� ox�^�v<��߰�+��p����<e����֞�/2��"ҳO�5yx��:Bx��w�Gwp�W�DđGW�333��+��dYՎ�)ѥ�����V�T؟��峁uI:��$�nU߭&r1]#"76m�1���O�U�ċ�Ԝ ��>:�r�q�
h���p ���$./Ą���!��pR���`���cK���d�1� ������y�����M�
�n�6M1��`x�ێ]n���Ug��Å+��O��˰z����������P5��O���Ƞi����י��3^G�`*���lа��鋔���3/ʘ� ̑g.8&q�^�E��_G:��-+Ilf6(�DR:������6T �Z�U��Ic����<�4���n��܅O&1��Y�O���ӱҟ,�qk� 	�Q���\�	:�F���$�4�����eZ����Ќ��ic)Yj_ f��0V#��^H
����GK$��2�N�%}Oun���\,޺��P?�*�`R^|�Z,9)���c\����\'�U����s���y�#8�IIL��!߫�ڇbr09=�3�O�%0Q����RHK����C�wą���<�ĝ��Q�(���D\����ǣn���.F����֘!pJ�>�ɷȿ+Ɂ`��W��y�Osi���+��E����~͓7�')����Ҡ�y�c��6��?�<����r~'�����ʮ ���B��q����,_�܆5F1�z��^QA@�u �4P7|��ϑ����y�I%a9�5���4��,���cb�v��Au��R��(J6D�]i�B��K�o� � �v�����F`Gu��߹�ܵi�HvI9u��6l�8��D���_������[�� ��S�Z��
�J�1��%�af�v<}��Sc�����1�q��Q	��#�;��2���������}�q��\�@3�Y��*oD��8̗�
`J�Bل��^Y�S����b6ݩ����tϞ^b)���JD���� �iLXe'�o���A�Fy��㠜��: $$��FaA_��.����΀�8�Iw�_�?}�+���F��s6W�����`L7^�6t�/�>�L|>�.v�-��g��SƊ��Ґ
ִ���k(�bj��<���b���)}�%�ll���h�Ne�Vg�����<���l ���@Oݷ��h'n�ŕY1d}9w��$�>б����Y �q�ӂ�g�P����9�C^Y5�zHu��ؕv�K�9�%<f�S��6�1����O��0u"�N��[����vCKj���?ދ�����j�I�1e%e��s��0��r�-��kb����W��y
�i��D(�)E�I6��3qQY
`k�AE�!�K���v��ּ��t����ŽP�jp�5?�a��xw'���#�O�'CT|�ū��i"v��6_��۠�����x.~�8���?Y��Б�1"�`@ߒC~�Rm�@�}�S�?��_��8n��N��O��㈴���}任w '�� 5�x���.)j$�rF��%w��!�{7A�a�8�rq��� Hށ   H��@��W��#F�_"�a1c�l/�ѝA����gI��r(u[QC޲ �V�ٍy&fXðeRd��[�NPƫ��!*V{�=���yYbE�6���t�ְ�{�L@�(c'H�͹�5�TT��!\"�˘7"R�>��_�G9�L³W���S�':y@��<F�rI�'-�睄G�r>�Q�>KD[�����\���+Uȅ|P��L���q�C\h�w �5C�kN��~rulI=����Z����_�)8o	�ޥ�� ���h$��[�W��
[ݫJ����7T�üC����p�v�2�8����j�� )��L#5iD�=KO c��^�/����XORkϮ�n\bK;�~+��U�!zr7̍�@b
�w) �9���
��e��t�(����F�OK'eml��h����Tcc*aMH���8�$yW��g-��B�c����������0τw7�m��3T��(���D�r����a�QzM�[!���Xσ���k�p���#oM���m�h�(�P�9�\��*�2[�3����jgE�Ya�<P�%A���L
90�~QYI�X2��Al��=�!_��`����³�t�Q���s�)�o�Ji=��xE�d��}��y�1�譛\!  S�I~7&_�&��A�5:u��K� IpV_VR��,�����[=F�0��5w�HB("�/�-c��cIY�ẁ;J®�ru�/�NNU��o����v�m�
Փ�C�A�p���A6/o>���K3�'�c�rFk�� �H��N#��i�N��9�쭈\�_J'����.�d�ZA���/�L �k�y�>�da�$cq$�ص#����ů�MǾ��O3�rso0�6�A8-Z����ɣ�=�ј@�	�Jf��Zk�k7����d��U�4��hÉ�|����tD(h}��+�7(9�A+�z£�ΧR���IcVg����Y�"��睿j�w�h����V2K��%�9��D;�v���2X���k{z�-I6�v�&V3��1�+��V����P�Ѯd��7��r�f�����ߧI^�o�����f�@�_���|Җ%ͧΩB���!)�gE��at4�
1��Rԃ,����{z�(���9<�_��S2��A|
ԣ��VY�XR�p;�kʷM�G�b��psG�X)�a������_�~���yB�)T�W1�,�r7ZG� �轒���)l�X�-�Q�L����$#\Y�T'���$�M3����ئ"k��6<̨nM��o�-��-��˪���X�|�cc/2/.�2���AA#��勽;�p�)~1�i$����!���9�͉
C�_E<��42� ���ۆq 2���<q�Ph��E�`͛�o��n�#}��X�'l�F��JtIc��ub" �n�&��2{�i0D� =oV`Ԁ@�g� �&��bT�d����D�wѭ}X��2
ކl����˶4"�(@�*JN�d����}wͤ!�� �1��^��D[�˖'>�z)ŕ ������1��*S��D	v�f���Ȯ�%S��Q�;��.y��~1&�]'�M��7|��;���v��۽�h��3Vzu8
�$ Lf@���}jcol���t� ^�0��{�F����9b)0,�`���������W|cB˟�r�t�a���h�XCf���Q�%6)4+�Þj��;��D���YǴ��ʮ�B��&ع����q�{+�P��2���1�(=D�$4B�(\ѣp(��ͤ�|pE�ҭ�R$L= �VS��v �Ă����/�	�MZ3��xr@�YH]L�̻�;/�'���tCc��������މ��Ȼ<���s��C�#�nQ���b,��B�Ip�O�wG_~��xG��uf4�qvE)]́y�&():	� *n�B�_�_�zA�4�9q� �F�����X���Xl�ܱ�%f	�O��M\0`�=�|��iG�O�3��mK�4�8�'�`�kû�̉�cz�,˨���f�����V)3`
��U�q\h�c���7���y�L���-�K��Sh	�nr�����6ubĻQ||f|��,��1pg\M7Q6Qͨs����e{>Tl쨋��`��p~ڎ�� kxw �CAy�aL��q(�N&<x7���&��F(���<�+�-@�����8�Cl�'����aE!+��0�5�ۛ	P`��0��<�pP�v9�'E��*ؒ��i]0&�����!]:M��T�Rf&an��4r��v@��.50 y��(�t5���G�C���,�[�iB�����Y�P*��f�����s��:MTO��h���I�y�?C��Y�]$��v)��X�C|W�SR�I�����˕_�5lC��w�������?���ȤMuYݰ/���C��\��+�CT�"]a<ugb~��G��ws �����ZQk���L���X��P3���|,���X��j!�/ѧׁ��l����qɑ\��哰��E� ���ܽCJM��US>6�/ ��=�z-��憳e;ޢ*���#����L�%!�m�G�B��f.q�诐_������ґ�i#�\�!����I����=G�l��2��7ø%�D��dm��0#�L���>󫺸��f�]�����2ͱ��R�T.�-չ��}E������v�m�)�<�:R*<��O,�R�t� ��y4��1��i�Qj�NC���<�Ѻ�Hl�Ө~t� i*g1I�@DR�	�-��jÀ�n݇Se�)v5�@Gӑ��=�aa��*J�a�RH<�#�eq��3��X�:J_��v
��H�zm�s�yk�i�ύ�	v��P^�dn�4���Z⋟��mf4	���w�f x
U��ٗ߈ة�;��;��HVRO�풸���0�c�?JwW�Gf|���݅ep�a�E%�g�(�J:q�RX �F��`w�\����z���g��f�)zZ��p�DP���O3i%NJM^�o�T��
��Sg.}�˞�ތ��F���#�*��-���6X�hfA�1hYz+�4��l	��#���+X�ǌm�r{OK)TP��Ý�?�Co�8���)Z'�L���Jw���XO�R67e��Z�t�q���X�J�u��7ZP�\��������y^O	���d�ވZ���!j�ؕ�Wg^��?����j��o�O
N�U]��Μ��l�%)� �Ccux��aʉ����e���a���<N+�Q�s�oy̢�;|�=��t�-�0��G��B`�>Հ(F�7�I���)To�\���cf0G7O�@}~��@����(��@
���>� h<�+J��$TVJN�;�W[��UX���FZ?�L3��p�Đϸ�����rg�Ҩ�����K@��I�r��61��,E+*��:�&�<��Ys��F�"��@`�\�c�v �R�2C
�*����a��P���e�+<DLW��o1�Z�݀�UB����;MV��	�m�W�'�� $�vkqM�M�69�9�AG7��g?����b���SS�q��u��1���kE������� �bMgSp��^';��f�=ף�<�涉�x/�!�CZT���~�b{�U	�i�
S�į�aH���]����5F���>���LN�[ES�z�E���1e����/v��w`�,�,-���}�J���o}:L��"�,�� M���wf}T�'��o~��Z������2����q\|j�Gw��P`�u}t>m����ex�]R|ҺduC�(I��
x*	���fب��A%�<@C�$g�k���L�iJ;�(� ԗ!��}˲g�p�RJ���C�T|q�*��$璶V�e!��be���&�I�h����F��hJw3�-%҈��R�6����!��r�^�Z���t��.���DY�k�<���p
$;��1���@�n:�y�|���U��l��{^�(@�jz.�:�.ζǔ�o=�$�$t\I��4ߊ/Ӑ�`I'K����*^��P�pW�l�م?�G�%G���f#�7\���f��X$�O>�:o1cMK+/�$()*��I6�W�8cg�}�����S�A�����i�x#{�X�UR� R� vQ���]6̲�����a�n�pu���X��G�#��zW0W���c���B�=e)����ƒܮ7H����
x3E�+��=-T�q6��r��b'6�'��P����KBd�Y�4 �^dӧ�]�]�Yc�����OlH+'�����
&5n���� ��%{KA��K_�,�X)�E�(JV���[0�Zu�*��%A�$Q������]����4=�	�,�N�a�
X��]Tugr���k/�;�$(0k�xv���~2�Fv�[pY�����(������L�檽�Uc�I Z�Yǟ]lp�+�kk�5V>�O��@xH7�{��E�^d� 0e��.Կ �S�T�4V���s֞	s��ᑂP�VB���*�.�L]�E��Ne;
�|0�~���wM�**�ި�S��W�M���iIu�a0Rզ�5B�.xm�9\�PԻ9%�!X~dם���]�]�s����ţS�3QP�ȉ��7�kP��wyx��������� ��T}{9A�r���H�k��e�q�&f��iÇp ����ob8���Ґ�jU_b=�����B�Š�/�}��Áal�"��W���P���_!���g��NV�,��#�sV_����{X�o!$����L��b~e%��^4L`,`.d�ͫ�w'���~���x��t����|� ���M*9c�`���z� e �M������b���h�W+��pE�)HP1Zo���tf��j��z�E��p9��÷|�D�� b㳟u�xc1���g�@d�ߟGy��; �iPJ���7/�G�A��%����'�a�x��M�!��� @OK���Gy��t洄�\���RY�S.�6��M,�]��s�V�K5 9aٖ��d`q�G-ꕙ�;�p�$An�Gc���c��i���\V��r]�.�zd�Nvv��x�F�ܯ	�Bz������
�̹ҺT<�Y��}�3�%��S?��U~	�|y5CQ��qo�-��F(0Y��w��+��ǲ��fh�:��9��4�Ʈ�(E�ć�/k��)�\���n��Za�F��햾��o�7���BI�b�I��ns>t�� T��Z�8@��P"�>��>NHܴb>���!8�I[�%N�2#��z���zӤ<,$��jJk�$�/��]�%�̷��Y�t� �1b�p��dl�]:B�Qt���2�a�r�����oڧ4gd�^��W�p�o�V�L��d:.	tn�҆����߰���R��'U�m�f.�nZsN���=�%b�ѫ@���~�x��k]����	��!���K���'�ُʹ$h�׷�b�>�:a9P�d:*�C��w�Ĵ	`T�Hjb����X�`�?����C������>�v��9�+�iQ���ڬ8���@��m)��,�Zg���.Y0��E�ȭ��մHe�K��(vQ���0�lē"�{'+:��������mP5sp�<��8f"�>5/��&2���W'�Y���zs+»h��^��
���_?�xX�ì�0\�K�#����M��tzaSx߃BӲ�c�-�����P�.��5ўlZ(q���h7��)��yb����/�31`�k���d�{�+�:�b���3��Ꭺ��mag��W�!8���͆W9��ز�V�:��JU�숍m�B?l=C�T����{���5W�&�+T�2ij�'p�
�U���t�>��R�&�V��.�י�Ҍ��Hf�Z2l{�?G?'�d��͎�	�s�/^�����-���lWX��A�v|��f:����Z�-�N?�YbB�ٳ�ջ/�"D��B	O|��K�Ȋ�$�[R��e�3ϪP9יf>I���:u�b'���x|�Ii7�R�&Yc��Y�l3~_�!d����& �GU�k�!� *�������G�����:540������(5^/�CpAg�4h���-������b�7����s�YU9���o�M�܅2<� ��\O�u�
]:��(x��������5˪d�	Y��!%�䤨�QMr�� �|0�M�;��Hù|��̵�C�R� �h��G���U�����NX�,N���D��j��~(�Yo�鼼8���w��)s=X��R�q�`��2�������%K�m�]�� k�<������r���e�Ą=�2�Za���{�ː,�	��P�9�����_W�F��M<;|��Tǋ�g��m�0���7|��wv~%�m�q�Q�!j�C)[��W��-�	����U�Z� ��F�#�䓅s	}�+z�M�g�8�<��#�]��~w��GZ��+�&���N�#��XTϛrmb�v��ܰ�Eľ�������HWT�����C0���sl���s����w0��B���]ʲ���(�A+o�H��8r)���Q=e�`r��]��|5+�&�8����E;�P)t�||�'��o]�¶d1�?Ʋ����D�Y��_!�@�R��gT��\y<o焗n�71� [�t�lj3��d�D��
v�twl>R=U`�g��$��T_���^��D�і5��EA �����.x��}���̎]��)�Mx=6��Z��Oٚb��*�c�����d	��Q���삲\Pճ�5t�@�S�n�m��M��F�.�?j��6zO��_2
�^�FJ �O����?H��U+��eMO俦N�`/#��#x��t����n�8Jy����@�oc:�"�z�2�#�K��+��f�ؖ��'BBka�K�0�Ƹ�J���/aCݎ°i�SdR�u�;����y-=�Bo{�>�zK�c:��ϊQz|gsP~���2K�t�����	sZ՗��{�j���37y�u��ix�׿�rQpξGo��^�g�)#ќ6���U�)����;�$�V��S�W�M��N��vt��WtGo̹�{���xc)���(R'����	Dy��kwD���4%�4{��=zP������*���3H�}���Q7�]9���i�y�K������\����ja��߆QS�S��L�(�݉�R��)��;�����uMi�V)��Hz_���� �٬��Wd��\���ɩ�#tϖ�O�&�M��+$!�(j���Mu>��.���J<��n{Gb;�v�G��I���d����¼�k&�9����1����c�:!|�N��GS���I|��ك������/������G�c_��ﷴ�t�X���3Kj�� ���A"?�LͰ�}�ݔI�����͡6s$��1l�.8rYJf&4�:�
�m��x���C�T��4:?���jڰ79���uh��Q7c�w��1T�x)^B5�c)�"H�����b��%k-��9ܣ:���������/`��9~�����i��v����/���o�6���O�z�H�,w��B�e!�j�D��s��˒5
c=��P���DVƿ���:�������E��e]EL��M�Dۥd�3
��У'�4+Z�N�Q��o}������)l�_XW'�%??wh�f�++���w@U E�_έ��>��&�޼p�{ZK���,,Wi��IOEawhfJʽN��z��]���#E̡qw�5팍�O|��D2:xQJ���<�I,�l�z�g6�ҩ듮[�þ 1����^#m6W-Z��y��� _m�C��N,�����<y��0*�y�h����޿�{�A2��?�i7[*Oh��
bJs}�`��Җ��oQY9��Dኈ��C����_x�w�����!+,����+���r���H~�١�5ܙ�<�u}?jIpSo�u�r���:2�O�&4�GFjK��et�%w�3?�Wm���*�����I=�h֊3a��`*�Хy�6	��ӑ�PA���@�
�|Ts��0���m����x4[O��O�FL+K-k|ص3e�!�kSp<l��sV�rV���G���ɬ(�7�?�{�ބ���˘��S<Ҏ��,������enq����Rrb�ui���H����t֟N�z�Tr�+�I��8�?�V�1JuړЇp��
4��<�l�[
i���}����`�v���~PG@��Y F��c�\2lQi�}�Heτ�.��HV��Կ���fW���Ʈ+=��F�ô�]���b��b꿬�r��Eh�)D�!9�eN��ڝ�n�O/GV'�w8�M�sңk��T�Q%ڣC$�v�|,�����D�9��g
�~zm�Q:��l���^ˮ�X�eS����_s����0�x6� 3��Pj'�l��$�oTu�@}����2���-��n��󁧰Ր����If�0E�v�����0|�1�r#N�
o4�RJ�n��8ظ� [ �#�i�<kJ��Nܖ��YLL�Lg����&u ��Uq���U��U;�+�l�1�-؏���YI��)��S��]���f����@m���� *ď��8y��C���� ͭ�(^����4 �7���k���$���
@�܀�\�Ա��q�o�N���x�������QBёI!կ��-�|.Ej�ʏ(�-��� �xg	�q7�/G���.������Ƃ-�VJ]C�g`g�}��ր�s���ԉ��+j����q�<A�2/y%^� B��ɯ/?�t;�.цW���B꼨�qnO�&����С,:��E緽Y�i�~��s�~��=86ȭ/�T	� 8졿�9z<�H�n�fM�O�R����4y��BP�V7���JuB�-��9�8`iVe�>������&���O��-{�=7ͨ�G"V����~r2�?�ńͫ-�=0[}
�ù/~�tNe,�`��1�0�~�h�U!_��h`ϝ�O&��{���<4F�#�%/i���"���"��^�ITi��kpd0UL�Q�;����E�@��q\k���*������סkI)P	"�?���c�l��=���n�I��Q������!:?T�KƜ��Yת]�n%H#*���}b�A�� A���}ڱq�KÆĩF���m�.�{��Z�v�˧��� ;�?�ߝ��t�5�7���̦���8�cڱtş�,_�q��ö7��|�=C�]6X:pt�J[aoq�&�3ՊH�թSiM��d|11P�cbnV�������D�W�I�b��z3�I%�&�F@��ss#f��U���l�hҺ{8��;�c�	�C��|ŕ���nsP'ߧTOSM t����\��N��.�]��5�+]� k��`c�e!��k�Gm,LsI%9�md?B��U�?��-";��P�V���L��%�e��(Gw����.n��2���=#A�q�����~����X�G���~�p0ؘ;L�3E'���I1�h���f��-j���E�C�qRī�U��MK�y3��`u��w��g���*��Ʌs�`��1{�����k)��dʐ�c!��b~N���G��p4۹q�u�gZv�M<^�&}f����~͋��N���Խ������u���L��$~c�<��t[�*M�Z��x_'�;Wb�Z9��Ib��/[�̅5C9ٕ\��瘛�Zs�S�ۘ�W^�\b0Bb�w�u��L�}g�ѥGXw�A�$�9�
�S�-E2����(I�i�������?Lܿ�9��S�s��� T�6��|�N�?~��#��ܐ��̺�]�S�-O	��yR7I���$�t�ػ�1^���nU�hʻ�q����i�˫�V�_���2���S�t�`lp^���8o�� Z���E��X@�	��k��,Yu�W�_I���0B�
BL�����`�$�p�+Q]�1���p��w���}��X��þfM�~����mR��c��A&ʘo��ыI����̮@,e '�ș���9w�H��9 ���=L���f*T�M��E��BT�=ֺ�����lN��$��b2��"���}W�cd<NSaoQ���f�S�@fB�5kWD�)���x���&;��Hg�O���ހC���(�k����8ӻ��
�r��1M�Br�t+��)#i���,9����}]�T}����o��~�q?o��O�o����y�G>n���r��2�r��� ���Z�/��-=v ��(Kh�'�Y�Hor�Mc��H��w�GE�O|�JZ�S��$tW4nlF!Q�+�W��ue�ֆH(db��FGi������wT�hibT��.g������*5i��q,���k�;X˚G�̋+#��9#:^D��z�@�nk2�~iW�%~�^u`ᇒ���ɸ�������f
�:��qe����Hm����h��:�i6�x�i8���7�:!v`O�Z�J�,�p�@'��T��-ƛE��0s�/@�L����\V�V����*X��7�����:	��JM,������֜�1�ǚ`��r��ۨ8�ش0m�uv}��2��#�6��-YX�|���Q�T�����~2Z�;�������n�_�6�r�A���7�/;ގ$����ѭ��$�B3��#,��q�1�D�8C)�o���պ"~�fe݌�+�嘐�(S��
�RmR/��������=����7�r4��~�|�t$h\ �R.�v�K�)4|�h�sW�M�'�3J��l���I��+[��W��X]N�b֎E�_�3����U��*��\Pb�u��z#д�S�غҭ�@��w��C���+����}��X �G�� �G�t����+nHW�W�r{)ğ2������;!s�
T4&������.� �6z�:�8���tf�J����;�F�&�;;�.�K�bP}3H��OP�bJT��җ>�;$�jK*��Z�KRr���w�[���;>�b�;N1#�]|�P��YH��,Xܿ�pp�A��uǊ�����`�'�VMۈJ����F[O��I���AtM��-��G�=_�>�p��Ys�m�� ��鞱�m[���R���݅(��}���K��DA�,@���^foaƄ�x��33������
�{(����h}�[O���;�	&X�ÌwV�9N����mW��XZ�
w��C�k�[���l��Ґ���sǕ��T��K4ص���~�xW��2�?����ո]�n�C�}�r'��Y��圫� �i�U.�$l�=����{�E|v��׸X�`���W!�8����y(V������n��Nc���	������&��}���!�h�i���_ވ�ʪCKֈ,n��G��`��'�F2��������Ym�Ra��0�0\���7)�N}����%n�X/I�}E��ؓA��������6?�̇/{������ƕ��sH&OS�F5"3VG:q�����tA��_ƢR�:в��n��Ae���������Q� �t�Y�:��5���I�A=NhA����nWɯ#�9�bn���96��@��պ��IFe$����W���1��G����D�ǾF$SM�j߬BQv�IG���MW�BL4I��z?Qw���-}��3¾���*L�Ŭ� 㼍���$�H���;���\��7$��=V1b)"�*	ڎ��P�Z��{�U|C{�8Y�U���ù�f�`�h�q��x�x=���d=��{�e��h��	�Q�KH���p;X�U� 0�X����A����ڵz�d���t��T��0΂��T���ޙ�>��#��W���o�4Ͱ4�G!*��O����v���u+�}9^�BJ�ň�o�u1�°��z�6�p)�۵�b��A�E�=�7��`���s� ��T��勠���^/5�0��b�_c'�aAi���]�W��a�7��3x=�Ѽ�fG�^�:�"��1������ �r���=L\��MC2�/�A�ڜ�MgXV�n���SVju�AuJ�Ei0D��}r�l���nwA��pW�x�PO��ɉ|h��˳%��h�s
��<���{ '�vU����Cg�������ra��(�e1���'6EU"���@	���+nޡ��!w
Y��R�HfuC��"�?>�ۗs| �g���:@z=J���@����dU s^��&�pA�Af1����Z����!b�z���X@��əRU�d�XM������b�#���_����6��OYmq�fˠ�$�mJ�t�mx;��md��d�#�q�D�f:�&⎤ �)4�W|s>l�B �mˉdB�b̕���׳��pT{�hB�����v� K�D�-�$׍i���>C�wŌJ ƽ�@�V��g7�{ϱ~>_������wB�ܻv�īl�y����4wl���g�? ����6p�O#зK��*�5`ɂh#��ү ��{d��L�n�]�7��V�
㊠��8&��(��;�"~a��7�,��|��v.pP4c�v� �/0�?�J�w���/3.Q�@�k�X�
��oY���h�0�a,+�����M��Og�����H3�%�_#9�Աpr���%��B�Bot�b�C̍�@�2��5k����/ja����s�7�i�?K{��g��gj)����R�wq��d�(L�v�#�d�W���6vUۖ2�np�v�$8�^�s*����g����x�?P3��tآ�@�Q��U�����CIS�c~w�ue�#�. 8?V����ц�ۘ릕�hu�TiD�q_tX�R��la�Ĥ��hӄ"���F���ڒ@̅9���¢-�w��a~�J��;�b�bv������9j�����?de�������ŁT���[���myK
�G^�%'�"=��7�w��8�
�ۘ̋���~��]��&�]�p_é?�������1����f1��(�̃R�B8�RE��<���.���t�?{��zmz�z]�|Ԇ:�ŞVo*R�HC��!�bt�.'���<��a�@�R1�@a��4G�?Zx�VV���k���[��Ѭ~�p9�Bv88Հ6gő��{C�������0Z);�'��c�V�
��s3�Gq��͋L�%�M���,?�=�))�]k��^Ua]�'~O�a��� ^�I��bxlB�]��-��_�u/n�[��[�c"�F�*�O.9>�h���z��L������N���h����\�!��{I�߲W�{q����b�#��� w�Js1��2WL��!���W�R���Kx����wa�8�'v��ӱb���ӈ`����X|���\b���{�*'�'����a�+OdI:/e�(�hڃ)}4PH��]DH�ֳh��o����|�!i8��"�zA%t��k�9�J'����6�9(�	������pH-�
Ca�ך�u!X2���2��c
t�?�y�����QZ�7#��^�J��;�X������.Ǔm�i��^j������=tta��J0��N��!�|����Y��灱�#Қ��D�wa�7������m��R�(t4�<W����u�A5���wy8��Xu����@J+�!����X�b���un#�~�!�Vhc�L�V��+�y(�0��\���Og���k9Wu�PB��λIs|T�ov?���դ2Eh��U�c�,v_��F�[��?r���2ՠ��/�_-@�f���L�&���\�|g(�[[P���)�t)<N�~�H���ݣJ�~x���cW��v�Q�]��Jդ���@�;
B]!�p�4�J�b�iT���ײtPB�	}��F�#�u�a^����_IQ�����:��#�ᘤ\�[��pU덜�53X�1 c]��P�w�(��΃��zL�\�	O�X�� lZu���z��������I�s���]ON��*��OO:)xX����N?�Ub����WmԛK`6@u�� ��@���ֈ��Zv	�J�l�8O�k�� �pbn��N����Z�� "}�_^�é�W[3>�����j��(�Ĵ�h�?¥��L|$ ���_Ǩj�q�/P()�5m�yzS>�l�9�F�!�m�Q��tP��!R`��Zg��/�'(�-�֟Zc}Ӵe,�w�v��D�����K�\�%��?�ƚzvT�2���PA��j���h�HY�1[��W���PVt6ɶ��,s�; �B�+�XXn�Bל=f;�gl�n��B~�;�3]s�tޜzCk��f��ݙ_PA"�X���W+�p,����1`J8A0�2�VL�4�����1Tɪ����K�)ciKs�$8���e>/+j�wj�.q�s�}@0��*U�Ɇ좲��\Я��);�����6%S�(4aKx�L�\&g3vz"N�ŤJ�hf��"Un���	�"�؎���0��TW�1 �֋��#,��9�������`�nS c>�m�R�2SF,�6��@ߖ�P� T!s���"J�+��{=����{#��!�fZf ��2*۷X\���t��J�Xt��W�{��3���l:dKk���e6e��5������:�o�7��R�ZZmq�&���=C�d��۶ UB�zx�c�:]�RԺ�%�i�pO�r����JČ�����°WT�b��������yB�6��l����PHSAם�y\
�caM�}+�����9�u6�uu���O�e�.B}��!��R=����j��.ep���0� 9�J�ԺN_�O��Y��NF'�%��xO�ܕ"2*D�GPW�{+�&;�6�@_ߓ�ac�I�zʅ�V�3��M��K��rv~(��8��[�A�;��q��5��S-���ky.˕�'O�ҦtС<������4ᕬ�!L����pSU�
!��q8��hA�Y)t���n�&��2g�޴�5��
'Gw�A�ЍlW&@,<7��S�a{��,�ج�<��Rc?��i��\��S��O�4-�_�X�铻R�4*��!_��׊~����`�`2==t��dE#�B���e����`���N� �p"�gѕ����"���A.V+grP@�D�4�._Gy�$��=�۠L��?-��g�uO=s&���O���H&��\-v�(�K~�$�_��09���O(_��aT?�n�ė�c<_�����d�C�/����ήRY縩T0Ω��p#����s�맖�L��UT"+T�U~a.�T�WyJ������V$�6Atd
��?%B����qH���`M�y3�ơVCxh��
�_�wM_C@�z`8|!�K�}g��Q��v8y��K����L=���N�G����E�1�#vSmJ�!yݣ���v����ݻ^?�%�c�47H�����;S�c�V�ht���] �&���=�Es:��6T�A��|g�J�>e0ɸ�RvЂ��������L�TA�Ƈ�E'��95Ma��.5�mk�e�w�O)��v���\��s4���e[7�(?�=��k�Bz�L1���r���f�d�un�=�(`F-},��dz]�Ql��]��g�3�f¼��U7n�㰳������O�oǞp�A˲�@���;��Wgnz��`���U ��U��G<>�P^�I�\DL���L��䰻 ?v��;��t��4"�|߯HET�c]�-�\���c�Kl 
��2J����:%�Z�L�4y�1=&�`P��#BiF��0Y��U�������:E�\zu���&\�x�P��r�g2�������d�IK×#
1�V:P_��۞���	��M�d��!��F��?�5����
P�)�#����͓�t"��W������8qC�˴@�c���~��Y��꯯[���NG�������q.�����������B;��}���j:Tp��!���`�̦��%%���}�i�8�J�cN,O�l����9���	����~D��ke>^uS��O`W�n��������������*(&4���W�-KU���$���f;h�B�x1߉q �tS�vd�''�W��dg�%�Z�:vL5���"?с�ƂvQ2�{	��yz�����E,ڣg3���ܸ�9@oo�<�1$��0������u
I6�#�͇R�s��`��
GK�Y�����!4�Fe=�|y��u<DEb���ON.��vL�G@���#���{(^��8oK��]��y(��g�d����`x`��?���� ߷�F����ӎ���ʗM�f�WE}�P�:ٕ�ד@{?99���^XĽ~`oFLK� ���ȬwPb�� '�������n�;�Bj5%TM�.�����\E�N�[�����9��(�wN�@d���@q|?�N��pO���֪�+�`���Ѥs{)��w�{�Z�dݚ�O��¨_!��f�_G<�(��Uyr�OB�£������@�?p�وXk�UY��?�ym�uۜk	g��DiC/���W��}t�k	&�8S8���?����u�8�[�1����*jϗ��Gȳ��3�(2B��0��u!�����9�D��ؙk��+L�ƍ��@��S`A�g��FcE�e"�F_��W4�����|������K���h�����"D 5�qp~�dCSWD �N��k����)�C�&��)�g��D���I���༝�Ll�06��|�{V~%v��)ZMa�N�%���5Z%��T�Ĉ����{K�E.���V�9"��b�z���x�c��u��"��R�y�^����L�3`��[���������CH��+�P	�;���(�{��y�b�{���B�V��c���)�$�3$�y ��� ��Ƿ���� �B8V�5�l���c�q5/��sw$%����i�uO�R?h��c����cW�n��@�c,s�@���*ep\���_�4K��Jl�Ğh@�� {���9���Sύ6'���۲t^��V�IR!����
���^g���=9
���u���.kt�����O��%̚�.ޞ�' �Uk8��2�щe.�C����s��:������3��ؠ��4�n��]��9KZx���" B"+
�U��>�� ۂ�h�PZ"a��^�ER-�1 H��X�f�ݷ�kr&M闪�3F�g="����+c^\Z(�T�1Fdʦ�ƍ1ֆM-�q�.e�<4�PF���<��i������h�;_��N}�a�f���Ɩf!4pK�2;�h%/�43ʙ��գ��e��σuԢ�+��g��� �P����p�^�K�J�[&�I�>�����9Q��m��@�!�sQ;��v����)/p�ˠ��d��#ت�(u��폾�+׵���.xJ`��a�������l׃[����������)�l��H��G=�.͒`x�׈�_�Q �8%�TT���X"��࢛�#�i�lC/J����&�I-�H���"2���jc�j�/�/Bu�F:�gѻ@n�nH�5�d����~e2l'�09Y>���#~}���[����qZ�f�/�_@���]�Ɵ�:��Eg��v	�!f��}t�*�lI�q�	�����h�|=�X̌Ro��^6f�J��ie`����ه��$�w����r+�Ղ~�`/�)���0NZt���t�ڑ����Y�d�~�g���g|	�6�\�MB'Ca��	)��*v{�	]�1��^��	q��W 7���2�f��=R%?Y��RaKoh27K�i�6�x{J6~5����Yt	,b��p������>*^$L�sC�U�܅!����Z�Fq�]�����F]�{��Ʌ{e6NS�D�c���Qf����b�)&C���rW�~.�}�Ǡ���!%В�@��Uз;4����c|z0#�yJm���1xG:Z������M������M��5M��P��ʍ���H����n41�{(�&�M�5��6̵�]����\8f���¿��mu���4x��/�	�>���(Dw˸��:�n���:��d/�4��������4i���!1Q4J�ܷ�ǫ	��&��#�^�n��	ʜY9�����T�� ���wFf�(񁬣�.;��pA�c\����Xaw�R��Z5��^)5�X�,��/"�#�|g�gb_��Ou�-�������F۷q^M�wc��1Nڪ�3#�qW_�X�N������l��J��d��L������"����5'��a)�e��Ӷ(�yU.�+�rfV��R�Zc*t�D0�k	��$��5�7c��C���x��E�� ��u�I����r�r̤A:����~���_�t�7O��ˋ������R�� [��� A'C��+�`���g7�ᒂɝHN�$�>TZR[�5�e`i�]����d�NkY|o��I⎉m Rbⰹ"�Mc{;=Y'����'���»H��>xiA�����L�Y�,�Q��H�D��ԟ����⵵,/�d��3"��Apm�?Būrb��,�Pz��  r��'RW�f�6%�@�@�s�<9����G��+OEg)Cx�W�-��($�`������(d�껿���b��΀
?�^������9��<pχp��U�}�n��ӛTU�~��E5MW3��V�͠�M�4�!�EN�D�%���"�~|I�����Q�s����Թ��SG�x�驧�V4Ѱ�M@(c6�?��}2y�|Zg6�ڿ�R�֚���Le�B��3.D�"!�ԂAC^�k�Z�\4�I�N�/1ٛ��>F2Lp���)|�!^�vp�Ö�ڪ�*����U���I
(�7�G�Y_G�=�.��5%xH5//��,�-�xS	J��a�3�� ޳{�����p��ڐ�� 8��(�sy�r3��$��&���Σ�_��Y V��U�ʛjܼ��\����ٕ\����m4o9��U��>�O.��<���bӽ;.I �Wߚ��\s��{(��A�����\�	�tP�l�--��&����y�LJ���4��k�Q@D7�T�[����[�b|�dAӜ�-�gq}�{C�(`�3���؉�ؤ�e�o�tL	@K���7�E1У�Ti��/�p��:od�dL���7Fqh�sF�wS��_��BC�o��.�o_�mI��Ypd�Mw�D�V1&�d�S2�M~(�[K�Q�[�T>��z�+��$�CS u����7���v��PSP���i�.�Wm~Fl�����'
Yp�|�J.>'xCvY��)��yh黽����ؚ��q�ٓ�͐�Yu[�i�I&k#z`3����,�JU��#��� �R�����]J�R�G?�~��'`¥4&w�P�\n=�"'�nM�azM?a�S*Kח���tD��Q1�J嬿E>�m�
Ak����1<jo�3�ښ+��� dz�}VBm/K��o۶����@�� @p�מs�D��P�x�����!��d�<�iS��X�Vx�EpC��;oX���"��jT���Q8�Xc;oCq��&yt��@���Nu�Pq�ن��!��q���Z�_�����z��a1��8�2���I!
,��\��k���K�:����T�P6C�;�}�`����b~�����w�tVfJ����Mz���`���ˉn|����h�;K�vN(ӎt�v��-�i��y���nIbRG���}�y���SA67@�y�)�cI����?�,�x+P�� ��X<�!�!���}�ٗ�	K�9�D���R�f�]f���w�`Yb?�G���F<[Pv�1�P�>|��ư���͔�� D�T.`��d�Ć#�F���KW
���U��b �3�-
S_�0\�������za��b"W��7�#���*�$���U���4�%�>C[�{��s�v�Qs�Q��8L��b���e���X�	䵉Y���d�����2�8qS�Y���?��-FO>��:`�/��Tg��Β�0 ��P�>o�Ś�{�l��t������4��5�0���X4�n��u��w���5�}���A��_�Թ�K��g@5��c���5B���*�"^g� ې��.Ι��r0��s%;.���ղNVӺ������<P�
�%7ZG���Rƞ`�x������i�c5b8v��;~�{c��'9����z�0�Rg����r
��˗T��� �T�"��O�E�1¦њ��t6���~���}	j�.ɀ#��ӒK�*��Z7!Tc�iF��jڣ�
�*!�2F��>K*�S>Bd��>���/$���s]S�p�ؘ��
��{Ҕ�L������L���\�+q������%\���U����`�"X���g��_��Xjc���6����)f#N8��3��UA���-�,	F]��É�#�|j�cԁIO\��*b���G���2u�Z �C�V�Q78 ����H� ��$�h��6�b�`�ō�9\+�6O��x�����#�^F\Q�Yu���W�u�>�6Ut8o�J��o��܀fW���2U���z�y@���jy�.�'Z���w�e�Z���݁��)h��{�sS������U�D��\ t��&#.6s�B�纪=Z�	"�<�XYb��~u�:��x���Ǝa�l�6�6Sz�v�qk+�V�g�c��:��I��j�R�䊛
(Z����0� *ߝ�O.�\H=:�2ס�I	�%���$�Q�?���� R��g~&rx�
���H�z�<�H��B�]$e8&K`�ǹ��J3�e�]wO�$��j��|F߱�C��&l�G��{��LE'Y�G���_�E9͖\ZVڶdn�|�eVF���N�Ǜ���7(H�~�S�m�f�/����EW �X2���5˟�
�7�0�@��ۡ���d���&ͣe�8�ol0eL<�"ƿ�6�F�-g����?������GC�#�]$lsك��E��S'~Q��6�e�3���[:�7�gQ�쓏����C4��l)k�<d`�ǒCfԇ���b۾U�O���.m�s��O}�c{n�[^�?�G�B�ܪ���X��$��^_�T����a��ܱ�����I�h�ض4�ʈ�u!�����gR����|���;.{k}Nݗ��ۃ�+cZ�T������6���.���KH�r����p`S;�8^���$I��<B	8VA���]�\���@e�_��]��*��B|�ԑawI���gL�e�oaT����T7�Χ��Z�����75�sI�Q�R
XS)���Q��ѩဳ9>)���T�<`��6��9b^���R{�|��_����5%�L�ԱU����O
C��� ���́�eSu!/���`�v���JRa�L��~(����LM���	R�b��(�,�3qf�f_C+���V=f�����\�X��$K�h�*QPs��W����	1�֢TQ[(��5_��T��u?�5��[��'Nɧ0���Sf0!#��G�A.�w��8fa�rP4`�e,��mYIե}q=i+c�Ќ�4o
`�M���6(C>�~�l����2(���UY:�<�(���C�J�xpw$^��o�� �d(=	?T���2u����m'0,��$/��8���&j��(l^�$8�ʟH���[6�R������J��hv��nC?%�W���W�R��FB�qkdJ�x%P�pr��5+W��Q�@����+����ʋ�r��A�1�ϡ��Dm{u>�Wz-�͋�"�Ok����]�vQ���I�,�Y�T��5@�bC�H�)��&a����cH:���rZ1n�ɲ�=�s�6��b��7��K����ya�,5�t�k�abڑ$�]��'H� 10Ǵ���w(�;]K0s��a�M����Wz�GV����n�\>'Q�y��m��фR{r ^_�<���J�=�'ū���i�M�.��8py���]u�>���˻=G��i�!5
��DJ� %��|jS���<Fg�г3�!`hj_�8�a�F<��A�?�lw�iѣE�tN���϶/E[����c=D�����H�y�0	A`�D�+���i�td��`�^!��V�4a�f��ڨд��@Lpz�K��k��m:_�k�%屃F�m�p��Ad���'\�'���!�%���έ!�C9��{��
�l�
�AE�I��VwB8�r-�
+	u���yX��Xīx�i0����i������]MeY)�n��	oI�����).��Fd��	.�����/�Q��߹����|h���=�����`�/���Я�r뾞�>�r��*I4����M�&�n!�p�#���C��q�mE3�}�52� ��dr�u6��8޵���C��G��z��7�g2�@��^�P��f@������y�U�r?�f�p��T,x�S06�������@BL/��g����Fclh�opXv���{=M���Z�������;0sϏF��-C���~�Vݾ����@|5����Jp���s�	�������E��� �y�R��ʌam糣@I|95���0�%e�N��ui���V����q�2�W�pc���7�o��a�E��Nde� 8.j�/2m��n^9n,N���r���Py�f��aN�|��T�[.��QW6��J��$?�Y�	.~��<�-�)��uK>Q�SO��oБ�+f�G&�t   ��U�$`0:P�ċ��� �VF�C���P�4b�|>r��l9+�1�1�Dz��{U/N���"��_�gkV����k�C0x�yYjh����~N���7P�C&#t�/fv�|��3q����.�ZP�U�WT(���F�ƽ�9A���-��[k�-�J|���npyT�a����s�L��tU�E�\���p�U�����*JvEWiE}MѹG��s:�Ub���B��'&�Κ��Qz���9l4h��$��-J������{);��RN޺`Y���9세�6�X*��\����rY
aO�����\�_�Z2ݑ�
�֘+�-_ӳ���kḰt<��(��mxj�.��vԯh.1lN	�/9��g�f�d��e� �6Y"���dS�KC����%��D'�8z��lk�vѬ'Bx������/�O�-Nc���&�jz~�Oy������3Cʻ�t*�q"���Pq��i9Ȧ���e�	ї�t1"Q���xP������<��t��tg��1�*�Si�iQ��O��!�h� �D>����:'�
��+@�.���Q�����'p0��\/��̼��@��\��l����z���m��/Ly�sc��~֎E=9��*q��sr�g�G+�\��!�l-��m�Y�u���Rc����z����/c?&�Ρq��+��v��s/A���Mbjd��d�({�kj��d1�\��D�:+�(a���$��b��F&,8������SG%V>���(g���X~47�$�Ht��H��� T�㬰���Wg���L�D�Qh�)��"�G]3!�e�&���+����;�D��ps`�9��M7p@^2�zCX�ڤ��w��G��u��ޒ���.:�������"�:Q���1�Ǝ
*���(����Ka<w�Y̠������I{_$[C��X �A����������#�: ��{�Gr��+��7�u^���̡
˗��k����8�O�:�L~ejuE����^���Y'�*��tN��n���������AnP�q��&$�;Da�˙\ �>B�vH86I�wO�&	 ��e�J�3���ج�1�H���Z/,�ri^%y�bGyݺ�Ђ���~��[~;�_�`Ա�ޚ�|s�It��jVπ�H�oU�i���ߋ¶A+2���oz'؀�&БBD�\��
j0f$�w�&�d�F˛=�i)�.q��I�Y��C@��u�6\ؕ��i���x��,^M���[���R�j�+��aS�Q����V�:�6h���\�z����L}}�&�e	G$�v���K��o�o�˨������Emb@� ��"�6�<����_H����
�0�z�#��T�l��u]����q��69eW��j��{���b$��o��S��n�l�h�T��8^��LZ�����e��"ߦX�Zܵ�ʘ(r��'|� ��"0F.��X�t�(��󝹄�\Y���,���n�S���&��G�-yؘ<��O��.�σL����N�~D�_t���8}K�VJ?��[p/�ceA�cP��9з���]2������e#�I�#@<߻�y�#a[CĔ���V�a���������˒-���6��<wc4m�%I�Mw�����b���%��*�+}�X{�X�/�~����􃐃La��E	?[s�8-��V���HY|٦B������m?�C�J�����8E[;�x��kDf�����V��z�澫ͳ�ֹ�,�Q��H���!hꜜ��M�?�y�<Rff�!�:��JḲG���   � ��u�$z)6�	�N���Y����f�q�+cX����BE�A�&w��@�|�� �<��QSKM�i�c�`;7��dIo`��F��UDC�(�J��Au�'ܿ�7ti�vT�pf���G3��<u����w�ZaX��'�
��&+��Q����.�N�TmLˏ��4�Ȼ�򉽁ׯz0�_~\��7� !78�M�$\i����\;�?��(~�Bc5Ɨ|4�y�C*���~D/�G� �C�-h|�Z��x�bZ��<��W'��L��q4B��=3�ͥf�����N��"�$����%���q�,����9s�5$��
WEu�Q�H�N��Q6r�V���YRt��3�5F^����z�-։��2����R���a����˩��ӛ6�%śB���8v�Tk��Boʀ����/|3�1~�zY��0
)>�3������zF��)�#��9>،JӝQ�����)�ښ�ۗΏ��PFLZ����/�w�~�`�K�3��:���m����.��VW�mb�P�Z�О���������0�M�R��"a��;��Bz��e��%����Q:�D��(��V&<r���&Fa��C	'�~䁟.GS���&U������9h�oU�C �b��
LK�{�)�V�������4z-������hu�L�2��Җcp����߾@xO�"K?<.�{E��g+?6���G�:A���E � �.��c%
;_Z���d�*l9�XR# �>S�����K���j������*��Tk��k/�Eu9�T�����0���P#��5�&�w�\�+e����t��̞ga��|&��"��e>(;_B�Ch�H�-}OjGV�S|�;�Qa>(b��T)�뢥�q9.�W�.�DK8%����ٗ��;�5��#l(�p?��ժ[�pAD�ګ"�2^�:xݿ�=yҠ�����e��lE=� ��� �A(���`N���w���s�(��.S�*�A����k�������o!ca��G���	1��),`���M;}�sλ����Z���,�X���Ѓv���D�VC�:^|yB�>i�?8|q04B�#	]��B&��H`e���E�M��0c--T�O�@w ,l��"����<9|t 1�ɚ�t����ۢ��?\ű��L��U���z<ˆ�4C�3�8�d�<�/����q@r�����?〳��5?���������{�&��R�~��|�k����a�<�B� ]�0�w'������2�����z�u���p�N�N4�����F��'�ϲ�-NBͷ~'���vP@Rɇ�R�rV{Ob)�ޭ'D<IS�p������]w}د��X���qO��D��'�	,�s�-A�{�%H%���-)�9�1SJ%J�v�Ӡ?�vA�r�@��Piz�)�x�T���y��� �����"&!�����/�d�����Yԛ�*�?T4U)�v�{�E�����Y��)XE��y��,�\8k�4�
-����E�9ڇ*�OD ��N�J�3p{�^����|Uxi{��o���^� T���%ܫ'�ADT��c;�E/x�A�A�ֵC̡[�h&p��L���e}�?���hb#W0��w��r�G0���\L�����/����Ɵ~�o$/	��]� 
�\�k�K�J�Vy���|74��?d�����u:�bi�	�,��Y�$$5��y����G$7�8T��mF��^Ϧ�)�����gk��u��Z�>��T� �)��������z�@�➣�k1�UM[�8_�ֵW|^pT��b��������m���iR�I�7���SE��ґ�e�eϵ�z���=�Df���,W�E�W��fjps�B�#�ut�-��:���=����BG���ESm���k;�CC��JbYlBy4��f�FӁ�   � ��-�����r:L����[���V�X����<{;�l�1&V�h�@�S�rȽHQ[7!��jEJ�h4E͹s���#T&��8dT!Zwi�f��)g�������PN��2�j���f"c�B�-���A=(z�;��Ay�H)^�-��C*��J��1�d����"�X��=x9BT���1o�2�0ήE�4��OŰ���2i����2��^�h�TE+��b�0ST�A2֚��\KY�S�lZ�y��Gx��D=��>�BZ8|.QC�S�ƔjY!<+���Qnx��R=F(z������g2����1o|����Y>�.��ҞDC��v�c_�|����Κ�avE���7_�n�Jny������%:��f�0j0�<G@M��>��y�j���ۀ;�#�P�~�˧.>r��Y��ı��o��f�}h*��t
/q�t$��� f��C�M[``�����A�0��>�w�4vXx�4Zv�=���!suӀ�M"N�X�?���8v�\\G���C������U�S�/��$S㪛��	��j=<��@��W-A`��:}=��kbf�]3mά�@�������bɡ]2נ@�}��B1�E��x�DU�B��H�j�~��w9ݻ4C����d����$��A,����5Ǳh-��R1���B��|�(�\�M�,�`����J�݀�-��x�/�:�V�{Ү�L���| s��� j��`#qQS���+*�Y��o�m�u�T��F�_����Zo����ڮ�,/a����1��C3UM~�J�O����T�3쟭��"<���ʒx�����}��˾Z�m���D�vF�q[/
�'�y��� >Îe?�	1����G�ejT�h#S^f����)v8?�e��-��_qhet������<ub�B �C��(�؎���o����F`-���`����ʙ&��0W�b�!m�I���P���2� %�A��h��y�|x����@�Ӯ���o���ޭ��'��/���e��=n��Ev��X�F�Y���"Rx�]G?tn��l9��h���c�J�Xw*W�����±���RC�W����@�˷�{7b�_"h�_�o�b��QArv��l��=k����˝ږ���b��*����;N�3n�g����z��:-E�]�J�A����{�l`�l�__P�=8��B��x�q��'�ô���s�R䦩v������z�Git��D�{{$�<�]ܓG� ?'}&�u�����]A%�����T��5I09���/� Px��q��_F�R������O8����K�@�f�NfsV�����=�e�r�_���;�±f�P'�׆�̒�/pl��m�����l�$�}&���@��YP�.h�c��0���;b�n�����D��,��pI9�}�m�Fݐ�lBw�C딎 �Q�}�;��}ʭ/4\1�~�#�]�P�)j�3�	"�˫��;\��&�B(7�j
�FW�^��^�����Dτ��vo�U�B�$N��@�.*{cP�1��ba9Wϭ�T�e�9țo�"�@��>�ḅF���j6��t�Q>��/��N"r������Z�{��.Y"���9�e��s���B�=�?<��$�0D�-�����J�I����RX��On#�2� c�j��
f@�d@�t�D�������
�ƌ6�Y�N!�����E�5.���yn��ڻ�1Y�泾;fW�h�v4��:v�X��8]�G~�q�0;2�\���?J`ƍU��]���v�����]y�uH�!8Q���wv�`v�^4[��rP����_�<�p  ��5��/_�j�aM���"T�,7:�*�V[�� ��/?eY�VZ�th��(^8o���S'��Z��V��3VN=y!�!q�}g�R]���zc���zɹ�U{�͎6�h'e���a���3WjSz] �̵�1dpwi��w�ὁ�\���;�2�T�ަ�v�4�8p�	D۞#0ً�q�v}��x\ �����@l� ��'A<u[D�)�T��\� ?��ցv%w�\:��X������vi>R�M,�$���;�q�~3vګL!,��A��Og�&8�op�"�4.�e� ?�,�Ōz]��z��T�j5�~D���̐9�*IR1C�5�LC�Q7���{�5���0�~6�0^�En����˄J�++A@]^��ŗ ��-Սn�3X�BT`�Q`�J�f�oGM(���*��[�p?y��%J��o��^�������{'���n
OI$ʔ�`㸄�Z�)2bSj�E̝�?��?/�ͤ%��X��!���BM`/���^T�:,�z��I8C�{�MI/h�Cnaj'm��VgP����=���j{�`�n%~�߄�jf��(˷�)�uS4���t4��� �R؅M�
��*H?34@_�J 8k��    �  #S���q0�43hFs-�<:�=��������@�1����J�-�n�E6*�O٩�����E�W胾7D֩�~���f(�}6D���2��N?���[x9_h�)M�1"�X��E�����9OLq����kM���*��"��
�&	� ��`�&/ R�\S��ݲ�䁨��%)I��p���:����f�'��#7�G2e*m��J5�}�y�=���U��M�
��T|��Y�s���]�7S��fI�L#D)|*�
XH���sLr��!��@P
ģH&d)�&�Q&B0D�	��H  3^��@       (ڙ� �pB�  PK x�@J� .a ���z���A( )�P.llLΰ�*���"�pנ!P        �� �����+��P�ċ2iv��fnl���5�`�N�k�>����C4LK��L4	������QF�1�ZW��֮V}��=��wوk��>D<��gk��%^�����KQ�)�&�oH�� F�_>�Y=W���W3�qR�]�x�i���0苶�T�O��~��8�:+�5X9d�Gc"ODpJ&�"�#B��&��|�0ɛ����L�^�\�U�[�<3��° H�5F�c�qYj9�cnd���m�����]S#���~ٶ��{� ������ 6�3��5*�h�j�k|E�262�y���M��"4�ħ��\�x�h}������B�ai�M4�Վ��;5��2��;[<��/���B��Y�f&{��Xj|�%2�$V�$w�/
��Xj�4l���O?�ˑ�e�b��p8���Xo�P�'[�JHP^Q?��3�K�Ȓ�4��� f����1	��`���+]塨�β%Fs�U��w�����b�,=�˦�
��V����[�Z/n�~�WZ���rx���W��'YÕ�SW���-����Ɏ��A�:t��@Hj]��n�2��W<'�w1�: ���\�خ��Y�3�o������o�T�b?��G��W@t��`��~�^[��ۉ�,'@�H� R�	��Zэ��8)@O`V��Z(�H��V�'Q [x��   *}�F��pڞ.j!��w������H(J/��/�6&�>RC���08��ޑ�\��o!Iv���ϩZ)�U��ة��;�9PYi��"��U��h�˞���KƠe8�G ��q!,=���VV�K�V��8]e�F��I�"�i����H �@4Ȁ@N#@ �@�cս�ba " b�c���Tt��S	�`Q�EH�t�U^]!�u���������K�z��s�����װ��C҃*��/G�5_c�!w�ed��b��!.���}�xܱ�El�A/hZ`�%D�TP��$��@��L�"  mZ       �je��E�!(  K�lb%a(9ڒ	�JIL �j$�b3AB�H�"��#��@�2J�H�JXS�F�H ՠ!�       �� �5�ut	�$G
�Dm˖m�Jw�P5s�����#֦"|��'�ߕ�؛To��BS���O�1G�T�p���jFnګ4��*B��?62�D9�zX�w�c�0ѢV����j�K`�{���&���&Xa4�a�6��Р�a��A"��SgDTV��(]�R�,�'����A��!%Jk��[�[s�v��+�5�3�sW0V�����k�8'�);�)�2SGL^�]5AH�UV�{Eiɞ��)jZzS߮4��� #i��� ��B���.��(���������;���z�'���7>���3�F�Ѽ�K�;j�j��5LZ�r�y�^.p*�QL�ĳDj��FL+�uO��ڪ��$�ʅ��^����Y���B�X+26#<7�-��7r���	E'�%JB�/A� ����X� ����@fKB���(�X(�$Vc�$���U<um�>D�7u9s������X���{ujJ��Lj�O`��"�W�|�mZ`��*�:�>�Ӎ�0�LQ�#j�o榇(ѥ�Y�w(�&ȝ���@7Z�nsYZ��w�uP[���C�!�4�ʡ�o�m�����-~-�윂��q�g%yi��j���zО�i�R[�3Qz��g��kX-(�q�j4�* DC��D����j��M��\���)Rmw��c�=���@V)�P( 6���`  �mN����3W�}TJ��k�������Re�3lA����5�%_
�����|��D���j������l��B���q�G����Nyw�ŵ��������r��-��I�sy~�i�\�ńPX�, ��@򐠨����@4�`-�@
�2) 5P � �{)F0 ��Ɯ�h����X
E�uV3~YX�a��X�V]aEN���XشR��g�2��s��sG��@J�u���
 Q�m�@�N�1�&#c+pWҨ�5�$L8T^#
�����	��@S5�Pi� g4�ID�D@" נ!P        J6��,B�!)� y�Ă��	����FC�<  Pܢ�@�)�\
�/u��5�T        0h �1�.5��XK	 �PBGN�G���%3�L���+(���uր 3�9? 0$qP<�`��{[��ѹ'�e��FEG���)J����3c�b#LHL���{�GIH*M�\�1.��1:TTg\����n��H@kU���U�����j�+#~�2Þr=p��6 �oQ0X�����)�Mt������;��
E�
JHX5���)>���;�Uw��ʰ��ݨ+�8e"�WbJ��P""e����Ic�3YP �m>;�  ��Ra�C*L�nk��s&��v�Q��U`XW5���\���I���~��=@����72i�9��"��ε+�+ۺB�]ȧܼr�����^=y���|��,��90���d���o��/Ĳ�]k�HqIrf�z���l�`mE,��_�{�ͥ�O=B�����9X�l�����(��ڧ	�E1 H,pk|�֠@�T�Zn VB1�g�1`H6
!@��G�V�f[�(�N�̪ o��G̟�ʃێ
�li�5�o}��oJuQ�dl9������ۨ�/����v��X4��^������^kV�	�<������j�RkHW0���k3^Β���Vv��z�;�U/�<h0�T�E���&!�b�]�Jh�J^�<*+Ik�V�|�XJ^#�u�u������AH�B�ld�	a/�FU"�*/��e�^/4 cjzbZ(Є�&v�f�R*����5UJE3��{N0�A�8j��HH��=U��96b}>w��
Z2�?�\��B�H��A6\��G�s����1��k���0̰����@��7���I˝�����lB]������ǟ�/m��Y�e�_�6���w�0U ��ŋ�&�	aM�- �l�TjP �V4Z�,?0�űR���Ѿ:m��l�Yt�aJ��@�mӌ���l�M���
jQ�O�f祂O@l����g�9'0(]�-J�U�i�(��mF&-��Tp;.�8BS9���_o�k�l���3E��^0*#�n�cST���7�R�}�(�ݻ $�IPN$� gVi�`d�M��k�� Z   %SM($�@�#�
E�pPO��ְ�[x")H1��0h�,(l~�6%�PN�/�r
	 �ՠ!�       �� � 5����Gp�L�
� �1��*��t�sT��h�PKS��&v=��.�'��q_��!�mKk�r�#Q߱&:��1w�Κ�6ڽ���(��>���kJ����!�҃H 0R߿��(")��q��e�	�R���Du y{����bk�LE�˟��������7�wYN[�Qi��e'I��;=Aap�*fg����N�'w��o�֐ H#pl����`���Z$��W�ju�}��Ϙz����.��˺���BX�a"�&-J�d��]�Z��k� v:p�k����*�K��O�Y�;����Z��D�iJ7ժNP���n?lx}�c��N�um��2(��:'}��N@�ba�`�=� <�֔���2��Z,|`i8��%���R�>��W��	�+���D��Z7m�昊�|(�]"+�[��Ԅ4�s*J�w(�9���E��P&	s*���"P����1Y]@��Y�B)�"���[B''q�3��M2fET����+#��Z7N��>;$��(���2��뽿�J~9�6��+�ԭ������d�HQb�V�cҡb>�\��=���S�辁�]^&Z\m��1��������he�oʿa��7Iy�H�ِ
�\& d���c���r 33�O���GwB���u  �H��U�Z��:��)`��?�S �\V�)cx��0o�;����  ڞ��z ��a`�X&b�����he(//s{�h6Y�Kjr�%�P�'IL0�ˏ��D��Y����[zf��Q�ߑ�N
	�ztafV���S��6P� ��T Ȩp��A�bY*�����芌�%I�!�qM�&�@fm9&�����w��+����]�(\�ITH���!w���-V��2���ޚ�������#�ȧ!�gq��T, J�Q���0["��!D�*���G+�YP�QJV�@��/oP��(pa>��!ȡ�~i�߃���yA�!2�I%YU���}�4M���<<fw C>�-� f����/���q�.>��첩)�P��+�/^N�8��z�{(��Eyx���d@>{P��,ܥ��|M�C�|Nn���c�":�"{K��Ց�P�E�@��6hT ܠ1�  ����� Q B�� 5��D� �$�R �&&�"A��
Wh5E%������{�!�YPQ�@B�       �@� 7.�SJH,&q���u�sl̤!)t�
(���]��椌b4"sq��j��7�B��-"���f�l�8�6}�0ߚk�u�oj/mɡ땘����[���)��������4�@�N�(�X����m����&�"���Ž����~7pP�����$$f.��-*RU7��Ʌ-R~��ͬ8 ���� pVz\-"A0Pl1�͊IdA6C	����U?�y����]��5�'�V�jpswk�,=W�p|��	�g6xQ��E[�����aF
�d�G����>�x*[�iGٰIp�HXWt^l�(�$��ĩ��$��D��:�TIX�N���߃o��/r��W�
����s�o+���tXrk�%M�����͍���z ����w��m�����L��Y�S��A����0�� ��>)�)����r�z�!��JTSz�l%[Ƥu�A`+me�K��A#����%=2��Y����x��{>�]�M-b��Ǳbʪ���SA�]pњ�!O�e�]e��mu>W-�.T��],k�_����"��!Y�QAAIY)W�_����}��Yp�����ZL�#�	��)�QW�w�����J%�Yx���H��:$~Rx�@� �� ��@8pڞ��V,���(
�&7��[��y��Ytɽ��a�p���}3���$�N�yYT@�ȴ-k9��Ȳ�K*lj�5?�>Ҳ������K�ؕ&���ԗ�q"L�Qʀ�rz��-�~C��F���$��ߡ����/B|J�tnS:�	zT�M\���0����r��:���1�8�9�D�T�j}�E+�)�Y��m��<~�܍�J�	X,�Z�`�*G�K�QpLK["�!Dꬺ�UIf(�bغ1L�����N� �k�]ν!��)�9- y�*C�!b�\n��m���o�p�  �taza�l���DQ��P�(�s]��@�=1�������j��4�TF�Lk�ٹ�*��?�v9��+7�Gvo/�#�E�QN�L�K7|��@� U0��b��*T �N��d�-��\@ �@[�� Q�5PAbX�!�@. ��\&� �X)� $�H����� ��*�=���X$2X�Fت����P+�       p� �� �5�jX�^�5�^n�`�^V�H�I+!�2��V�� ��O!�8=�':m�����c�KU�ۍ��h0�n��4�q��O��<��ʸ�>����꧲���ځz���B�T.s�D���b�'�O�������Q�7c�E�XE<q��1���н�Z����ە@�#pP�u,ϠE��pB6��������lH"cA0PB����ޥ
�-��x�
fḬ�"cO�I��\0�&�qԟ�(�b��f�s���������Vz��K�M^`�^�yig�ȍ)w*V�B�>�&�,N9WO��� ��q}�N�O(�ꯈ�S�A0X��j)~kR��u4���6������g����A�:i�53�i���0O����)ڗ��`���b��B◜�:Nd����n�0Z� �	[59�a�L�1@X���MTH��66j�����StcƸ�A}S2���;�E����,To��J�(�9�F9���Ce6�6k�eW������L��3�	���6�i�ƮY����3J�U->��kGm�@�4����)ZZ�hUN��eX��s�cMF+�&q����;�_�+x�<��	�U���(�����>m�,����D�'�@C�*Z �  �mO�xs�
e`���`I����&Q�R�&)Y��!�+/�]�ſ!��ͭ��'�p�m��}r�X���]l;Y����'�������N)JJ��-�r8��ab;�g&s��&t��w)aRj��m�cky֤1�k�=�i>��w>��pU�ç��ʊ�Iᱽ�;�KS�������HmI:�Ç����m��Ąk�:��IZP�	2�'@ Uh2�(&Ԗ��)��T�)�})t1�	J�7��^U���{̘AA��!�c��73>���5��dE�X�z��a58Bg�4Ye���w�<R���^ �>ʮ�4����ј��/i ��Ȧ����Qt����g�u0��0N����^s��x�A24��cr��<3B.�����b��J` ���$��X"�c5 �	��� K@ �  %SM&	�Bc� "���
�^��Q� �@i�  ���2*��	^`.�1; �
V���      �7*�dAHY�ױ2��*���ݪ���K[�z �$E�(m'���=,��O�ޭ9�����4�D�#�7!�WWH(��Œo� q�,�j�-��ü-�g`�Ʊ�sKl�SF���Ȝ��\��<��eP	�����%YϾ�������1}�k_�g�|O��kA)z�q��\��ٷL7Y�m{�x�-( )�[u��)ц{���J��8�|PV�34B\�����	F�_2�S��N�h��Y��سh[� ���Qc�T�Y�]��ELҤ�`��)�q����� �#����ZK�I�v���F��}��O���
Ub(�b�p��L��P�;>�F	>y?���v4T�UToUwv�Ƭg�حB<��p-fZ��p��s�u�F�P���HM��J��"�ݮ\�\a�]X���*���c��ʍ��K�̂���Fd�L��=�E�e �E�.H!��V"�Rg��TXM�T
2�h 	�*��LO�?5cf���U�&�V4��-�*� �t�K{+�n�kUT�L�W%�y��Y�N|�-����0��ģ��ir	1w���5T��_�,#���9o%�qt��7W�*��\HUk�4�]��Gcӓ���=� a�N���Q�O_�$��B w��)�(C#(<���ԕ�%4�8����!P٠!P j �   F6��d-�#20MJR����$Z�(^*��	��$liǕGH�I~)Ò0#`R@�Ȅ o����Ca^Eu��ԹD���cʲ%9����r9�l�T�<7��ߣb��8��R^@*��R�|:��tR�GݏX��z�6dc�}̴d��U�\8Q�Q[HwE�࿜����m�������m�l�O��RY��L�aqPM�3�\ �� *L���3!J#`�@-��ANŕBUU0�@I�����_bZf�,�X���\=����,7�ފGM����]�h	M����5Q� ���+%p w��J}�*dE���u�ۡB}_��y�t :A�A$�+�l�⽬��]DK�"B�����L\ié���^ eE*�!��BZ ,�EF�
� :�r� Q�2�BP0�!�]c�7��"�!N�;Xe5�`Q B�����$-�}Ŧ�rH����@B�       �@�� O��   O��h�����F�%�η�kSC���������5ĺ3p{Y��|7]��
6��=G���;mIt�?���k�%���W�U�ݥ�͓��l�h��ߕ7u/g��j���H�2ӓ�1(�8)YF���2T���y��ѩ�hH��m��Z�7#��v&��$X��N�41�s�X䉦��,W�1�݌��X�J~ԴkϜ2�r#��~���ޞvOG����C�l9�h��_(�:��Z��ˢfIZ2MsU'M0�E�ℛ��Ӡ&��r�S�;p
����Z�C_+�hpo�w[�O~�G�b ���!�R���厩�ϣ��#1�G�e>����~:Wk!�f����y���VƑ����)�q���{c��)K(0M�}��%�5��ݗͲ ����@k|7@��-����:�Oo}�L	L3lŢ�g��ɻ�"�w����GZ�܉�lD�[qd-"��Z̍�"���`�����_Z��Ǉ���hr��{E=�+����P�" e��'��c^�늸8��FD�l��pj#�lj��
!)$�1}
t�:�!���N���iO$�8�L�D�m�!CS�Me:��"��MrJsĬ��?3�
~Cp��7h2�)Gtm<sh����Sd5�	)��W�z?s��[��$�w�������Oڄo��$Ǆ�$(�	���CT�� �*.��v��nF(���+r���f;�O?��PMȸ�ŒZD΅x��><.x�����9���4&�$ lKb�s�����7���[�h�4@��v#p�+�/!�]�=Y���{X�,Q�F �P� �JZ���g�J��x����^<�ġ��Ϗ4N_�p����������4)��W����}ŨO��������W?6�ߏ?��u1Mi^oiI���A�%�j�&ν�U���%��݀{��u��'�������ࢺ��+����<,l��:O���]��<W��%z�[�ࠁJ �r�j��D5r�A4�E�?6yV:��-��4��(#(g
��	��S�r�X��z�G���G~�����R���*8��Ί���Iv�}K�� ���R$���u�m#�o�Տ�@j�xlQ�ߦK%���7����#�廻4ș=�mF 0�Lt':��l7��̓�{ߧY~G���䃹����<�����n�*�h�c&�='�?��Cw!��u��1��bG�!Q4?P�ed�8>�_�W���4���3��2�aH�@�[Fp��Y�����])����gOq��r7r��N��� "�[�H�>Ħ7���A��2�vJf�B�4��I��D��u=Xޗ�b�`j� o�C�1/��(5����/[�
uN��MȇJ����n�/���nt���j!1>L��%�fOM&F�R�GP[ͽ�7�<���N�?#;W���I��@~.��9��c��G	��!��̇�)MY:�������m����#ծw5"Il����ކ<·ǆ���zz2P�Mw0���]����-A�(H�����`^�f?���y��.j�2�Be�!w9��6:���aC`����kz2����ϕ$��-��|���`�de,�q������y�49D�S7]�ghe7}ת F?�����]��i]=&B�vHWN��f�s�c�0����k�!1�v�?/Q��+�k"G*,x��a���s�S?���/Q-7��3>�HJ�PrU$`t7�ryt�A[�F�L������h�WS`[
nG ;0��
�����Z�ܗ�`O"Z�1Do�[���_s�<���Q���^+6�D�AJ���d�L 9aڊ���ޑ�8#v��������4;�
uB;{4-f>�(��B��n1�;�i��q�Η%>�]��ɔj#2��ۏ ,��  f�b#�.���Q�������$�¼�uQd���7�?qiM�<�0��7]EǾIl#��D���cȦ�t�k0���������'��o��X �V5�~Wgӫ���@C�[�>���F"�^���.q��}�����Jwя:n�O�u,���3��pbi�*�O�g$����ro)8�F����L�A�Ohԩ1|���;�`�og��҆q�N�a��T����yK�Kʁ���4�j�ړ�?5a���f�d��-�kQ,)�U�]����Z���yMX?|��<�Q��OzS�ER�2O�J�U#����E��	s��7�P��Mc��x?���%�E�9�Y�3�yx�V# �����p؀����q�Ҳ4Cݤ>��I7�K֊����z�.��1�`p� R�/&����P��cz���Ag@K�"&���0��������5@�DАM�V�}��Os/���2������
a�.�X.Zv�ZW����D�9elir&<4k̂6*	�Eh��o�|����?؉�������Ķ		���,s�(� ��]�yB�FF�遾1R���Az��� ���w�N�����H+Y���w��'W{�:"��h≗�� �*P3��	,T[k�h'	\�|�c�x-�:��ʭ�����+���l��!Rw��6S�/�Vi��YF�����������.b��h����LF"��,$�8>��N��S�Y��'���$Ș�~J9�O.���W(吣��h6[Tug<�<�N�M�!�=�k)!�$��a�0���m�ţ���Z�j��P�c�㿍Ն���:�PƸ��y�>FdF��]�PJc·Ex
0Q����?�U�&�7����"�y>�r%�<���p�Yhv��%�������k��#�x���ҌrN�ϗ������ߓ���۴P�e¯\\Ol6�+�xZ������7MPS9�&\��'�&�D��hrI����k%����	���@8<K�3�&�#W K��(U�������([BG7}��ɍW�Y`9�b�?p����	e(��N�u{�Z��� ˔1�|�?����ޛG����������M �(���Gb���=-���܎��I�ovlߝ�PjV��q�@��U����<e����l�\E5wM��"l��C)��א=r����M��d�a&��*�w�W��V�)T�x:�������۲4��������#�R*�e.�	�'PZ����G��"�V��>��f|7	�u�' >�\��T�/�ڐf�C/O��ĵ3���
߅����D;%I(�#x<T.!�
~���r	BN�g\c&���|��hA0��E�݆ȳ|��0��q�WTɎ�Ȏ�lEoZ��k]��xۼ!_
����%~cCN�6�8���zP�M����X���уT�u�о���6�J,f�X�B#����!*I���12�cG'�f8al�#*,��V2�J�(:#nX��
�%��y�{���]Q+ɢy����6�Q����ONF�&?s35)��Q6vKЏ4�S�Sa��\��h�!����l~k��wOl=H
IS�������'=���e�.��"�V��32n;Z0� ��j�IX����m�nY��q��\ �,ԬS�D=������eBN�$�~!�F&��Z1/b����g]�R�˸<݋ʒ�ᓨt�_���If+���bS �u�S1#I
:-�<�ڏ�#Q����Z��B�D�5ʦ�~d��~�7�clD�<�����X�����^��\��8�вye��y�Wq������)�^���o+�FR�h�1�_�Bo"S�)Ǐ�P�@{�>%V��ZC���ꃟ��N���\i��Bv��cF��1S�Y�@���ֱ�#V�rH�=$��8�8J,�v$�����-o������6`Fk��xs�ݎ����U���U)��������E}�X���� ��:�c�s�����<������U�n�Eݠ[�gZ��={����޿/ք�3j7�㕼�9n���\n����/	����LDnb�1����@Ta����/+�~����/'�I���ũ�̊W&�Sf�B��51렟������#D�S$�KKN=�$�u��߀�Z<�`m��K��e9{�g��b�R̈WA]�Cq'�C�U�$r(`��.�J��U�6g/z� mϝ6�i�!N�h�7^M�U*����1�7����pb,�'�1��a¢s�����#�-����H��7�a��k�E(�W��у�	(bf��u!6v\��K������*��+m���7��ҫ 4��69dcx`<�m�\����U��v.\�7�]��IA��H��1�H%{��7�{�2d�%���,���{U屪��k �~Q�[�����:��M09�?x$c�Ql��w��~����+oj4+u�*��B��t�?���3�^�"�ʯU��*�cRBBY�{G���jCۘMUb�>p��N����5� ���ׇ�4���w,F��u,�=�֮&p�8Id��Ğj�[�Ͱ1�,G�.f<&0]��Р��)>���ޗ�� ���<m"����Li���Ni�C��X��@��!��l+/0��.�w�[�QaSVs@|+&3<�vr��Q7���1��l�]%����큔�kF������3@C�������H���H��C�m������ˊ���8Hlr)�<@	� eea1CcJƶV�&���0vl_a�8k|���C��Y�s��{n��q>�Ւ]�p�WR���,Lʑ��_��Q]E��-�>���\𓜾��J���)�PT����A��`^�l���.1]��I�A��;�`��hЍ?#��5�6ec
}��L�CR����������TD�֞�K§���O�F� �!���"�e��;f%��v��=�1�U)ͼ|(1���^��
��w��_���ۺ���Sn��#F6j�F
����7bɏgӨ*ɼ�ͫ��8��I�}8��[�pZ�Z�+�
���X�f��|�nMo��O�n�f�*ł�\հ@�gnP.u#�+�=h|�Q��g�D� ufm��)�l�R�&�����t�:61�g����!_���hm V�:�S2މ�{�Ϗ)��n�ج[��UХ��-�fЀ§���[?���R3�Wt�p� �y��9��h_`򎙾�0�1o57F�g��Ldl2< y.��{��c����r�)rć6P?�J��3���3�u��M��	0���vR �]x�\�Ѱ(�Hq�0�J���U��Pfkf����4�N+�Oo=�f�W��pGG<'�zaS���*�cizvá97��
7��m�;L�0t�{ǭ�@��Z���F�)�zg�Z��8.��v�4S�m܍�f�v�C�g+,�]�J܊��,�~|qbhQ.R�1e�b��Ɔ��.�����;&�9E���Dӭ�И�h�.�[����l��7�D�h�oqt+�r��H���#rx����ь�Nf��x"��~euv��ƟI�#��䛌���_��/���q�.�W5A9�[ۭ�E:q�bh����¾M�.d~D��) ���-�'�.��\{J�17��=�]Q���0�,2��o�Ƕ.�gX.`a��t���������x��Ꚁ,���T�R"k@�B�]l�%���U�8��2�̉��e/
�$Q3pY�N��"�[b��<s�A��Z���e�3���:B:���|���m�r�@M0�'�M*��f�|���]+� '˦c6�cT�ؓ]P6M��8�t�B�̈��3�����:�\���a�OKٔ�jE���bٌ�Tg����V)��t���8p
<)s����Hw=HY\����|2������7��9)!|7���zP������?PJ!!ܸ8��<�HT�=s��I2�.�%6p!P�@c|�ȫ*��E��t��mn���9�����v$�9�%=�0����8�����`(_�0�%ِw�z8^T� (@	�g�N����vL[���(+����8J��҅2<�h�g�&T�O�#�Lz~����Q�K�kη<���8O�74�4�A�U�e�����nk�Y�M�R�O/���i�:2��vX�F�d�	b �&n���a�K��5?��I����~8ɺ��!���ܕ�HGBp���^A	�Fۯ��P4#й��M�����Ĺ�k=� A�L
N�t`A�_����"&3A��xT�(�gv�����6����\�Y�|�ߞ��ƍ��H��;sc�I$K���?�!������+8��E,��~cD�\z�+&	�Pl\L��� ��u�8i� =y�Rg�?g�����ң�^=�Ac����~��X"P��+�	c���m�:�68���?�?��w)n��0��|���~��Tn�T��W�=��.�x��ܑ�F�F�����{�wq�-�Nfc	R��e����ڏBw�6�ͼ�л,ʺ�<�[�bM���*<.��FC�x.�ʄ�T
���p�H�HKsP_��dNޣ�Hx�XN5�h�PZv��PpRNbի�&���čŢ��m�$��zsl�����&��8�HXw:O�J�5H.�=��me�i���I{�:��,�64D�(��Uk��f��xwس�kq\-S+"Q�ڀ�砼��]�3������Ǿ�:���	 2ڔ�ܘOL���ʸ"gߐ\�	�����R�XN�9~��^��Ԏ��3�Ԕ�;�.ak��H�bQ5�@�2�*��@�ȓ
}�4̣��lCs�-��%L�@������s�k�3�	�(���m�@b\Jؑ����")8�~�L	x��aQrBv]��?=���cΪo��APT��P��7�U��БIު�C��ݿ9kS�x��1sgQ�h��t
zo5R#Ʈ=���NV��>D��v@�^|��e�9M=]�`bT�'�&��s_��8z'�T������T)&~ �-0�T��$��:����+oY�$Z)<k+�6
��bd|O�&�"d��ɍ]�3nsJJ|(k��~SI�� �Y]�ڢ^��..�֥�V�Ѐ��J�
�S�=yj�2�N&J؁�@5KJF���\}��7eJ��p��=�ѝ��貾I���2��b��B�h�2�Vg?�����S�O����� ��2��q�l��y|4;���!tx����Y�q�RM/w��`TX��>'�d��o,������+S��\|1��	�Z�kԄ��J�$�?�|�{���c ���l�y�5�E,�Ͻ���,�<\��v�JP���"�������{��[h�,���%D8�-�^�Q���T&��u�f��?��BK�R!���@����I¹��r�U}]��*f���s�7e����U���s�ZJ��U�Ζȵ��*�H�pϨ6ڝ������5�Q�R����	�Ȉ'Na#(|���U�1�g$��R��4K3Į�Q����bt��A�����(�T,dNs=�)�7�b1ܼ^*_<��=A�r��I&U���`���ȡ�x<��O�����q����p��_M����eu[wj���yk���#�;N���vbF\������,��b=�(\����m#���za-��/ʮ'"�&)$h`����`BYBN�����B`a�s�:�L厂!��#a8 [�)�o,��� �S��Pa�E���,A��O�) x����6[��>_��h.����(���!Wu �����V '#\�P)vURG]���5*qݵ����2P� 智b�K�N4c'��p�	@��n=�Ná_�ކ�m��:dۀ��P�LPW���rxl�ܘ�2�>^>8\#H.���ڻ<���>@�)�E�Z�	_��B���y�zۜ�&�*	��3��>��x�GA���`>l+�'�*�-�d��NU]BW�����C��	�D5���_��#F�48�������~��q�y�T(ۅ�6[C��/�����s��^��U7�}`�f���$e�V�"�)��w&��Y�1ѲB�� ����N�1a�R>A��&h&S�љ�{��F�4Jnn�&S��(��k���N�)�Q��8�ȵQ}F��? �A�� Zg��S���5 d�3Yh���?Y9�T@���T\[w����SB~��'Us??��ӓÕ*���^��vH�m�<�q'��.�w
SAB�nH�p��ޘ*G�AG� �͂���3�E8Z��k���C���ͺ�a�ǧ�^М-�~_�8� ��+�F��%��-e4�����x�j�ƔCR���^eq�}�_9���ƫ�\�sB�
�=|^x'�7�&T����b�P��s���_���q�X|*f	��_l���YG���
j?I��k�e���x���8��
ȡ����U����V.��/��;ʮ�B�C�ǙUgc��n�D8�g|� �ץI�pO=߬��_�a�8�2)�ß=��������R!`�[B��.�T��N����3���>���"���Ș�v2��q�A t�6�`-�=�O*� �[O�>20�����nJ��T��%/�Ŋ�U6���eg���̥��K4]�ʫ�5!~Ė��N��Z�@u�īR�U�M	���kP��l�h�MW�mB	�� ��
��\��_�8%N%@-u%�
�@��ddr���N�sA-:tP���`E���}�==�J����b�$��'��g��A�=5��`	5���l]�����Nv����E*ȯ��[�	�̂8gb�#f��dR��Hg�	$��z�,,��ӗ����&�)���.�Q.t�����J(@�ګ�3�d�+}�xo���XqQ����+E����ག�o��6�H��4S>=�� �rp��ٮ�-~흸��~:l�Q�?2��e�r���+����0P;F�2�����/�9_����	r��*�uHrQ.#g{��d���Usv��MsI�.����?��V�y9|�n���Um�K�Z��O���µ�F�[�Z�ۚ� V:�x��צ�����o�=vQ �4X�\���[8�ϏW�m؁ߨ~\��� p}.渔#�����z|ȡma�������q�Ոk�oX��u�fϟ<]}Oq����u�QmyP����%����b�Ĝ����<	�?wD�(�.���Nr.�Щ���@^d,���&XX�({!�ΔK��fؑ*�1��d�熋u��R� s@�֨Lh��[��˃M褸�� ,�����%�3Y!�S#/���&i��2VV����ĥ̹������ӄq@‽���;�X#��D���Qe���&������I�A��t=Ѹׅ̺}�Җw˷F!�`@w���-
�]�&�ĂD#P��	v������F���~�7�+0���T�q8� 
!��S*�4���%��O�f�܃\Ǔ� xv�1z.�U����A�&��ۆ	o7��	�:CIL�fy��:&|��.��7u���8E%�*�U�+Rd(��VUN�>{�,)Z�,!  �9;�&+#����E�r��4?%�Z�5�n�(�_��+.gC�6�~H�����W7����c�W�bGY	�������C�)`X�#̼Fk��l�l��FߞS�F7�=X��I婗tm�����.�(!�a�TҮ�K�������m�EDc
̍ʫ!]�L�OX;�P[�[02���<_�g�4�"�1|��F�U9�`����.��U�7�����5�Efk�;��Z��R����7�e-��䅡�B�M����mr�roޛ�LG�џ��\�@qE`�+L4'�8�ҙE����B��̠��5����v�2�(,��[�����f׸�	��uZ�pw��:.��;����7J�Wgp�_���5��*�Xܧl��Sڞ��0Z�S��������a҉_��n5���ڑ�H�S�E�(��V�!Ž��rz��H�.'ɾ�a�0b���(����x��>iK�5������~z|���X�߸�o�:}����J|�"�eK�t`j?�N���/e��kؐ6;�Q&�5����4�|mO��#R&�CE��w0tt�gl1��8�+oΠ,f��F �?�'����ƾa���a���4���ڿ�l���gVQ<��2�~�x)���5��$Q�����b���#y���d|��̜'�HҼ�w��!0�[%ᤵWU�?���J�������J��8��.�C>�F��ܺ� ,�O~mclN
K唎�ʻ�w�[��ϵX�A�㒇��a}��4*z2i�_v�`.�@Ʉ�%�܅U�3%ld6����tŕjZv������L�&�}/��^�!0�TJ�Yv���͏�q�ʡ]A������4M!-�p�bot����ٱ���������(�S*>��@�8^�Y^��;�ot�)ig��?��(�#4K�������+�oYAݴ���3�(Cw#�V�=B��� �x��?�لQYj y�g׿�@M�eMŹ�;��5�������{�B�P��[�Ug�����J���(mLN(�m-�������=�1���Y�^?�?��W	��Dl��X��^�� L������[%�QT��B�Vz����r�X<\SO^a�\RA��w��Q`x��
��n�c����zy�{{���q�-7'0�y$����(�f�h�#�5C
ñNef6B����u�aR�P��1��F���mB�&7�56�SL�A:β�X,�̷ׄ�:qԙ�xMCs�������xNլ{ddaFmK?x�1��C�ʤ�[D���G 
e�~WQ��?����Z�K�X��f��t����
����Z_U�2��e�� -[ӗ�:txY���2�?=VP���9٘m�RwW��o�p@A<��g��Qcet!(;A�������}�>�E?ٖ���Pkb9T}v��2���{�zH7��J����N+�k�o�:N���[^�T��D��fa�]TI��YDsDQ-�
x�5��dr��^��(��	�,
���9/g�f1��%�0��,>��O*<��M�뤹��]���Ǒo�Ѡ%�(Ɛ��t�eB����]�Y>�T��l"�ѧ`���~�M��W��[���ذ�8!@�O�Ͷ�EY�f��+)�e"���t��Zw�?��Q(�����d�z����͓�g��_�z��+��Z��c�u��_��4l�{0��r�B�����	>�IT �ˊ��r*��n�B]����|���5WO�X�-��W�Q~�G��H�6j��E�s캑ϫ��<�N+>t�
�Y=��v�)�������li���V��5GvhIO�ߜǽ�VF�>�4{�D�}��t�<DF��_�
��w:Kq�����j�GҴ�k=:��M��f��/U�c�[�V�;�N�:���F�Έ8��-q	��Z��?�%$���/9�k61s��5͂"��D��F��h��j(�Sн��_e�Q��t��n�.�+�Ɍ�ݵ���4��H"I�x�߫���9���gqQ&h��e&����zW�'O��d_R��> ��]�JV��U! Zz*{������zS
G-�]s_Mvɇ�$m�9�--C�v=�����kDJ����!z�1�v+�;��f��+/ģ��b���nϭa�Yd8D�^���r����5�-M7����R�۳+��m�&�����Q�3��^�H�ȣ���ߩA�f,?��ڿb�Z6������KF]k�Tg�a�GA�|}��+��˦9�?)侗4={��xY֢Ͱ4�#'�a�|�?N��R[�	M)���t�3���4 S���e����^�)0�ǋ�@a�]�O��AcBAj�)��g�X<,����3���m��?�	FN���.��L:�g�4����Xc�l���X2��q����Dן����)���@�%��B�m�YI�ر��4A��t�Hn/-�tM�>"5U����Ro'd�n	�?;B��RZ����*_�d�$(&�������ܛ8#}�G�Z	��:1�����~�nI����_�35��{:/5�ߑV�DB��1�+�mz���Mf��� C�P�[3�>h�i[���b�U~�o��b�jN"�^)����Ɇ�ި�<8O�[����-�j�^p �	I���i
j�*��<ږEi��+'I�b��(A��R��tfA%=r�	�.jpd{���Gܰ#H��O�ł�Kr��F���<9-�KNr'h껩	���z�vubB�����y�Ǿ��'���smyq�\9Q��Ȁ:ɑ:��U,�D��v�[��9�u3�g>�Tj��Ș.JK�qMU�5c���������$|�u ��as}hc�V]2�w��͘dHRms������U
��� &u�[�(�m�Y�&X��a���M�&�ٚj�o`$�Yd��R%sk��A���9�׼ `�-�ѧ?��Z�4D��f&E�mu��t���b{~6Sg�q�w�Ξ�nΩY*o@ �b�(�~����v��a�}fn_�_�)-r�Ћ".t��:�����<�ǖ�\���nRM�
�!�!+���<�
���/��
�Jڈ�1FZ;�4���[���l�/\�Zcq���o��5���L'Y�s$oj��Չ�p%��Z���`�d�Ԕ�H�U��t7�٩H��TJ����&z����)�)D���Ʋ����c4���f-$%/���EN�yGU����e9��˅t�o+���GE�-�sȑ���%��e�m$�R��&�����Dz����g:5ОKw|g���c�<�V�A�F/s^@�5��צ���v�1e>�/���#���`�,��T�W�!A*׶�z4ٴ7O�w��a��A^7EV���y�fk����,��0aV�~�D��T�]�C<�Xx�@����u`ߡ�i�PJ���R����c�L��*0F�@��ϼ��B������ť���<[.K�������G`�[])�26VB�����lߦ�R���R�v��2�W��?@�
�c�=�����ĉXbd̗d醌w��R��7�twS3�H�9�"Ln���9
^�~V�h
!=$�췶��6�o�'X�許�q��f߃6�8��8}�+�)��ʝI����x����R�%3cG���^��(?4�4uv|s>ڨ���ʲ���i8��K{�n"�x�(�tp~��HEu��ą6�S# �vV�5�( �ґ ����a��ɊGǳpX�&hH�}�r�������Q�MD!�JH�%�?Q"�X��Y�-vE�M�d�� ���).��D�j�`�k�����re�7/�겱��-�����+j�P���!/��&�p1�y�3'���+i��!�_����uI\?�6h��ʉ9����@~��U�X��/�L�b��X�0)TJP�qv0��-�?��A/89����W.�٬����"�%T�'��E��O��{�`�{ʝ�F:�-zH@�`I4X���!� !��f�
F��}���{(�=����(&��`xO�;�E��(�����ӳײ�sGbňZ��+���v1F��l�<Iɿ#��g(������A�ɔ,�f�!��cL�<䄫�t��,{Z�F���3s�W�,6h+�xR�1>�y?|���ȍ�߁|�����&����}���
�$ԙ�f�Չ!��g#�'���M�S_@��F��
5�'��f��#?U�Vm��d�ن�:���35����'bN-���CP�A&��*/�Y[Ku_8�á��
B�㏿LL��:zH�)`�ڐ�G���O�R^6 ��eE� ;D�O����5�Q��� �'B/�a	"P�w�&=-�+�Tӊ�7!Y����ˆe�r��D`u���l:2�Ф#JO��\�\Χ��Y���v������m3_��؇ٖ�8�~|=��Y��^��+T_ ��To��i��T0�gF�������C%D�)����E�R��ڃ,��d6����E��_��;�y@�� �D�m<^��q�b��[��Sm��݋d!2�28m�W�f�>i�)�����>�`��ol�h{~/���Yg�-Zn����:t+����&1$K*89�r�fs�@'\OSR�XF��z��J���1�p.f�B��`�Cv9��J�����T������e8~���1�����������?6�&+F>��Ê�j{s�e�V�qG�@��O`�~U!��f/@������d��#v
���)��z��ZS� O�$O�:�
�]��{�&b� 3@>��T�r.gQ�؍KS{R3�c�1����ה7�R
z��м6�/"�<���`�EzK	P�2�Co�D4N���<m�m,�6��M�ݳ" �	&J$��w٤�^��BT���鼅�b�5�y�юrB~�>�3~�9� ?����9�^�m?I��|�zZ��f�@5�A��:Xi�.��8�[΢+_�q���~���n���3R��;�+�j	G��@��;Kr�M��<��@6Q�f��$*��9����4���|��qy<,y�D� o��K��9��ؒ���,�S7U���$\�:��T2�m怖�f��u�k�� 
7�w���8��I�ǿ��e������&�8����.��ث�,��V]E���s��Y��Z�.��؟4@��3HlʫGU�"�{$�2���c�������@G7I��/*JL3��r&���qM����E����Ȇ�ǁ%a�����ӑ4��uC���R:�����6����.p'l�L�g�҃O=��?I��
znN�zh�p����#NkpIϷ��6!�`������������W�x"���i�N;9�E�r���Z>��D�}8��$�0z2��mWA��V ���ɻ����5n�ݗv�u2L?���nc�hd�O>�t�n�_����w6��6u���/M#́ZM�R�\6���?z�q>C�ͭ".����p�)�����,tTc��&d0���@Fu`Bϧ:z�����:�ñ��v*�;*�bS���~'�I��t�^�=-,s8tx���d�����g|5I�EdO�>��կ�SA���w��ć�.ĵ��G�T&=�~p?P���v��Q[�Y3�+zoE����U9����Ò��Z����l�_�1'#_w�)r˱U�/Qu�̃){ �~�O��v�&�*�w*���,u����eF=�ԗ��%�U{]ar��S4� �5:��[�	�zVl$�YM���Ź�9����(��ikt�brf-���K��N���R��e�s@�)��bߠ4��Y��z�~u��$���P��6�`kKQ>&s�j�����)La��VMQF/�ŗR��z� ;z2w/5�9�'q��ѣg	���9?Z�PN	2��	+3�~�$0q+�C�D*A`�!��Bv�HW��z��(i�'ДT�a0�	:,����VS�*�'rq�� d�H������P/�n����'a��k�&&������(��C�T@w�\F*������%���pVDr���6ej���H�?>�?!N���!�r��.�Q��W�2b�̠�۝S�`1����Њ��5�^{fB(��4IP �{�#+kr���t<�~/��{���r�,r�/�D�Q�.,X/ �k��^��0���B���b�oZj�����a��YO�yPp��t�Vq��4Ջ�d�F[��/�8�����fig?�߀�9��Un^	j�>��ؠ������R���񁰻`=!2����3k�0�,-Ea^��>9�&UU�fcìjH�W6<}�[S
���n|;w%��0�DNw[
�&��ִ_���ΡCK)F�_:�(;+��Ս����B�XzO��b0�:n�m��O:�3V���*NN�!>��8*_l����N ��XC��LC�F;M���(֫>׋�zB�,�!�o���X!E����-eO� �6x/�M��¡Y�֤���梌��Tm]DG(c�Xv�9ycn~y{�k����0w}h��e��}����5ߨi@z����{��+�=hPY���>�n?M_]��x�Tp�ʥ�A0�	��xL�n[��̑�"��If|�C�K�s�)�2ۘ�@��	��x�"TXڌ��oܛˤ0c�v�~��%Oj�˒K��2ݿ:>�zf2m�"b���5R�O^5NW!$T��o4��� '��s�q�b�K��O�o��N���b̊:�&G�v��lj��PN�_��|Dl��Ve�lr����4V2t֬���~T��Ѷ����9��+�"ǘE�\�Ag�����<�-J�Hdv�O)
`� VK6%���I�"n�7*{����x�L&d��� �-�Udޝ+���%iK��s����S@@\�񞧭3;�A��l�:,&XnJ{��]�{����S���:J�6[����S�bz����F��<H�K7�L7y�
Ĉ�O�����̷#*n.�\�,��Fw�hLϴ�����{1&��2�l4+��U͎���\�?�&z��P5`��� o�v�"���EUb��7"�潅ݰ�����c�b��D����܀�6��?
�J��i&�u���δh�t��9����j��zbq��wM17%Ҡ��DFA��mh�YE��'�����lB�5-�J��7C�S�l5 7f62���c94�u�p!�-۠�#�'� bp��;eY�}�D�xܣ+b#%fF���Xl����a����=��X6T�C̘ �zw�x'L�N�U��b]�"��ל�����u;��"X�]pU��|� ��w[n�t��"��m�?�I�V1�U�xNe�PsV�A� �eۣ��l�>0���\d�q�G��0����l��_��w7�����	[5��N��M�Vx��#���#B]�;�/�������W��1���M�=�2Z��G?w�ߋ˂f,ۘq��!�|[w� �+*fZU)��=��W@?pd>�BБ�u��;���>e֊w�go�_~wi��N���D��3W����R&�rӴR'��� +p�8e���Sr"L� � �ٶ�RC���7�*b+��ȅY=�YÍ�GB@^������/-�Yz���+���'�����o=��q8C��Ї3sn�V��W�N��'�Z�b���9�
�)�2�ɛ�s�.����s�P��9�ij}��FM�B=͞�9l���s���i��)��ܔ^Q�����J�-k��/�~�d����{��#�w�k�c�o�v�X�o��j��5�@��q[Z:�?mo�~�xy�A��P�6�t��>\QEC�k��k5�NX:����\�?��.~l���,�v��"�ĝ-d�����(�}7��m'b���rBn=n�Q��^��ݔ�[*��ʕ,�+���� ٱ1^ڌ�����8�&��%�Č+�d~��7��Ϧ@��#'^��[�LX�t���I�l&�,Zg��� ��|0!�E�L�e+��[jb�K��a�(<'	�V�����[�����n4�xaJ�&N
��!(9 ��`ϻ���/�g��Ui|�m��zb8�����w�;"��T�89�(�����\*I'�szڑ�$j+���ڪ��|�˰���E� x�������0�SY�;{Vԧ�h�s����S�K�}h�,��^��H���"��M�8�׉s�����}��t�JZ��7=6��:	3��Ƕ��O���Y�Ӄt�O)��9�V&�iC��O��q<�\����6N�/b/��Lyd�jݦ�Ѭ�n�&�v#�у+(X�D8�=��I���k��	��y�M�m�|���;j��X\�+��N�Ғb�z�ԭH��#��<Cy�fpY)W�ٙ�1h�6d�w.�(�#@,ڿ���X��J������׌�Qv��@�Eg��9��\�(��`,fv8�ū�Pל�2(�O�I�=���?�H�y|O8��0�/�9Md��͍�`/�z����vnШ[ҿB��_�$�Gr�����k�\}E�E�wA>l6p@O�0�m�̽fR���`�?hYq#�Z���o_*���`���k%NΙq��e__h<���p�^�;-g}��--�z���X�ox�yr�����ҫ�8�psθ�������bU�Q���86ƅ4's'��ޛ�>�2�)�㱗���v����=I�O�[���;��Z��w'��'���C�-D����<!�*�=~���_����\��0���'ޖ�֡�]!��t�[(�����o����c�7��<jWP?c���F8|�
t9���"�=�%j��Q\T���Q��XZ���q��-@�1�0�_D��_��ǃ��խ*;Qi
��2�Ύ���j�0Q1��r���o ��އ0��{{E�	�5�|LY92[}��}G{�3{�*�H+{����}p8$��}~הc`0�N�<RI,c������?�/�kY�-2��cM��R'�>�H���π6R3%��8�ǵ
ݬp� `����V�1���ܓU3�
�鵃�s���;BQ?+]7�
���r��!�֡a'�Yt4��|�Z��j���(e�9��Q��_\WCl��� q�y�
�E�����or\�&�Y|_.���7��%`��\��ZEiBH�V���8;�)HM��}�j�X�A��Ѱ�mX?�f�qhk�
l�tGw+������b��	oȨ�l�^e�%��*���pM�e�%^Ή�f�]+sy���P�D��`)b=/���6gU&�uc���xf'�;��l�����b��nSda�(]��-ʴ;C1!�>j9%���2���*Ckş�μg|�0���z=��h� ���5.Ay���+�څ����Z��M?@A ���q[�t��vK�����{�d\�<.J?XF%���?ept��W ��R���R���7��������l�%��Iz��H
!��G�����~�A��6�S_�n�n3��[�b������4q,�\ 4�.��_@��4 I5�]ȊT��Gr���M�,�iɓ���{>�g�u�'N'hl�Ӕ?2͖[(��(�{G�Te��5]����y��S�ٶ(GԷ�O������@��3���t����n�ŏR%���`�ۍ{��@��{�5�n�|4asY�/	@�x��?�0����=����ם�&e��UTi�>I�x;��JYZ��b�a�Ñ7����ѲҚD;AR`Ё�2��@�l�R���_ό�K����f+�ٲ,r��ضW6��_����<c���R�-�iEMO˥��zP����Z�dc��<'�M�D٘���_��AF2r��S7�/���glBZ�d <E����;�����;?�
�j?�,D|�3^#�*�ۿP��>�[T�[ �뺸���R���jT;��Ɠu]9��z�l��"/�ˋx���� eO_u�rm�ܶ��,uN���9�����J-��E���$���mq�y���-_������V��`7FHm[R����e��y��c�ܢ��p	��d;��k�<�~����Q$�2����
�[��,1���}?��^U���,�G��4����O���;͘%c�M�o���6.]y���j/¯��D	����� �I�ů�������<�~�V]�6#?�F�����e㼇����x��s�#>,E��^T.����*ix@ix@3�V��@zD�����i�(gG2Hk��� ��|T��*]����ϛI���&)d�_��#�H)�f�p�@wg_�M�p��نR��tkƖ���d����9ei��cKٍ�U[�Ϗ:h��W�{0m�'��`z�N$�@{�ӏE��S����,���is�5�#�����n(�cZ����k��J��J���=���F�T����@��u�R�Ud��}�J�*�=�ک-��6������5���E�\��ݟ���hi��VFcؐ�s��E˯l �u�K���x_Ɖ�Y�y-w��ƺ�;�G=�u�g�X���@����ҭ�(��F(OM��Hfp�_������c��bJ�����'#[�I�uҹ^Lp���kՍK�'l8�} ��<�Z�$�7�~UB,�F�aX~5׫�K��/������bJ�e�B4���VKg���W�v�Y*�?;1c`|��紜LA3a_����@��j'P������.�}TSQ*�3ӆ]��������S���0��8_��D��V�F]�n�k�_��-�I����]����Q� h�joP�
,'>�d�o�NaS�yP���ϱ�5�J<ir[��Z���  ��b'R��f�A)3ɶH;� �Z8��F#+.b"�SO��W@��y��е���;� ̼�d*K�v�=@~�ͧy��h���[p��M��A��I�w�]q:rdt`�C�K���F�җ� YS^;>�=4q��u���O>�Fu�l�~S�a��@�R���R~��=�ה�:���-�<�uJ����e}�Z8�ʆ�L���:x�m׌����oX�+�:��a6:�VUP>w��:63�U�Q�W�҄N�<����"<,�8�f
����K��/ýP�X/.�x.K�"�y����:t����������!�_������v��{���2��"���'�_t�\������׎ݰ�2�sTd�f��.v�;�I�҅�9=��7�X�׫d�3��cccp�����0�<B���XD^#Ճ���)wNo���?(�綱� 30[��Л���uOSE98i?�w��xF3��麀'B	�J�*uz�n���,~�1��ŮJ�����)��u	�[y�%쭲l�:��u%p�g��,�v>�*��ܗ��i��5X%�^��D��F�*�!����G@?���f�^�g�.Ԓ
��X�1�Tr��{�E��EG��څm�
 �wξ�)9Mވ��ڄebz��/Ŭ������ C�4�qސq �JyD����V��U�����$�
~�`N��t��nV�A@���%��D�jV����wt�%��Cۥa�p���s��d���!��$f�ʮ��*�I4JE^�gjw��jS��ۊ�B5��w��
���9�-}F����zϲ�h�7��pZc?	�Zx���$�d�Uu|�2k�krā�z�|�y��(G�B��9[c,�J�������	���sX!���2!u�S��CS���1�P�������d�\}��p��҄�]UA�q6�"�0��~}Zs^1D��sX�KᎫ1������������s�OP�]~�'V�P�q f���P<���ɀ5��58`v>cx�
P�tKj����1J��� >��?wx���~����q���،�Qm�'>�m�Y�L�V���*���^e��ФSl��V�4���P�*U
�2B��* ��N�(o|� ۽ou�\y��R
ǔ�k�!�CL�r'AQ�#(��6��_9b�C�P	�кs�~��9����NO��0|�(
���Ί��>m���G(sLnTqD{�C�%�N"���n�����Q[��X�P�A�F�ݏ]�9N53b��w� $�A���ӌm$e^���-f�n�*	Uu���ѿM������$�T��n�:�(���aj�:����"p��t��wb�T4���?w<�`2�H&���$ɺysr�+Oh"3��B���Ǝ?<��	? ~m�UaP8�@Bk*������U�5V�?NW���:.��\�$*�Y��P�^�w�
��� 8,����7Z#�$�	����O%Z<{8�R���&[��������囱X�Q�! #�f�%<`�	��gSXI����@$�.���t��I��BA��A,�@��<N�	R�-�7Q�[B�;L�����<��~�B���D8�o�F��P�e,����boFE*���2[�ܽ1"k��rzi./^�
�8���~�xM$�H��7"�Nb=%2�Fy:����:�)����Y	��n��.����FvW���;3�j
���j��ղ5���}��㏍ےD�������:_�8h#42�n�YVS!=�_[�pÂp�M:V��"g�����y��}� �P�G�kj!`���v��O�' E�T�i�h��V.���Ol��tҊ�]�{�֨]Ko��O6�z$n�xc�>�P�!�< �I�:^bO�q�$�x��!�Z	R�غӓ��4߷���]�V-�KX�U��e�rh�z7��i0U��o$mpB}��¡��\ڐߞ�fr����bڇqm,�wwSm��r%]��e�:o����ݱ���_F��4T"��Ʃ4X����A^yv :cL� DmZ�f�j0m]���� �Q�8m�`W�~@'�>L�w��1m<l9|B�F����x���ԡ{+�׆��T���mG=��C)L��ײPJ����U�+���� R��l�����F����$�`��>�<��cR����	:4|"ќ�N�T��?�/����Ë�������Kop� �u�1%g}y��ҙ�i� H�IFTLar`�[>��q��9���7���̆L�&�X��ђ��T�X�Z�+aj���"Pb@�E��?)�;��\<����>8�Qn��>� _S� ��.������ɮL[�^����qCg�`�N>]��k{�������{��o�!ʔ�����[aͯ�W�&��I�^�!!�^?�:��n�W?Q� ���j��r�3�(Mps���^ݴ"O��+�ʃ��<Rt$ $��5��1N�-b�3펾Ƅ��G�U��g���`�e�R�����}��>�p�cU|�ݍ�K>o%�q�W�f�DV���_u���9��+ra�u�9{Mj��m7�R�c���u0�א�
7���ﰔ�>G�^�c~P5�C �(���-g�Z�Aݿ���]��9�������܄�;?ԗ�)](���wD\=ۙq��Ûz����"�s���b� Y0��x�o�"��x�?�~X�j�P�b�M�T��`�&�6r�G��QO��Jf	L;�i�GUb�(%]/���l�����%!|����ۢ���B?_)����7�O�a-�hUJ�j'-D^c�,[�U�y�fe��f�
���A�������u]�G�ؼ��`�ʸn�e���}�|���"ep�I�
/�M�	�u�W�Ɉ2�5�P<7h-�].���cp�r�B�]�Y�����@�2��Ȝ�|�c�p����"�4�]��Dݓ�[����1�l+��l	�K����t��K-��7�bZj���Z.o?7.n^��*q��(��FʠR��H+<�s6���D�1�NTX|�Gn�F�;/M�����(��Q��R��Owf"Z�n(/
N�\�0B�3�Z���Y倔x]��::�2u�jnݤbt;�1�l�D�J��K{X7G]r2N�?�{��W�jE�����}���� ߪ��gؽ:��������!toӭ�dxB�is�:=C:;}=MŢ@���ѦҔ	5⛒r��  2{
>�W�֖h:fb1��\1Л�lg*�{Q�π<sd5�"D�*%Gu7�b�Y`/�y�c���T3�h�s߃���Av˃a"fe��FO��3����ff��y}�S�$*�u���P������f�s¾h�����C�@��N�F�^�l�̌4l7_B^�[!+t{n�/OWA%�OD=a�m8	|�,ǋ��,+}'�?�Ƽ�3�tw�T�$���h�٘�|v~�)}Jf�x��d_G��Xmt0 y ��3J���<�\�iS�����H�a�ۨ�R��҄��W���˭1Q�߼ �{)N_�0 �t2��1�)H����<m���}�AZ1�as�/�	��_��=�'{�����	2��X��~�)��g�Yh�M4':X��d�9��][�N�m�k;"P������KD�\f]~Հ~ Tjg���5d~��O�<�Z��EO{L��9U?��<H`�֊����bN�0<\;a�?2��Ĥd�}\�AB
��k!�5l醭yV|a���A�"ٳ��ӬT�������d�I���F�<xq�J�p��C$3���_�>�A��7]_g��=i�E@���6�����Z2-������A��`��b�,�xi)M:��J�mKH)�ú&A�$����*�8�L�������K[�d"��RXcN�j�o\���{Y��&
�Br�C�yU���_]��� �>�8���
���Y^��zl)]EN���1�:�А0�پ<pi^w�\���)F1�1�V%؎أ��w`hΛ~�#�(���g�-�$�ue�=OSE�Wֳ�\.��������$�y�Wݽ>���?��e�c'����L&nJ�)����.}����[�'�ӵ#��ΰp���ӌ��ۣ#� �(gϵ(O�PJ����H�J���M�1E%T�����p|��EH�o���众�NA\��z�j�i!|��X.�Xh�����/" @��ޥ��!VZ�u�F�5J[��Gާ�O�+�z۝X�7ǚ��a��s)��ōMzu�o���[����T	|����[�� 6������D{t/�Ўd���`���Z��"o)$"�s@BMY�������+<ߛ;�BSQ���nr:���̣�����Sh'�w1�P���u5:��?c�	lT*��)�D:v�ѐ�a����܋�du���r�)#G�ִ��X"�물��'0R���C-�C��m�lX*ζ��L��OK�����/'.
�+=f�q��7�_~)��t��U�?'�u���!����	���s�"-w����؅�]���Q1/RF�c�<(  #;V0Ʋ��9ݟk�^���- � _iF���a��[�<@W(�rqz�V��K`1R�/��Ǟ��!��@-[T�<�ϨxJ�e�PQ�#E����ZF��@��Si���ܗ���e�̾�8��Q�N#x���;�+ε�!��r����o"軼�]��w�mإ]�8q`e��~���A!DnEƜg���S�юYP��6��"���ヸ:���gz�yݰ��uN�/�����(���r0�����K��T'�fKXJ�c���'N�I�SLF/�r�In�JI�T�R?2��t����Z��(h2ζ�+�%]8Qr�t$�
\�P��b���m���l��D�q�)hUv"��}CRAJ��]^����_�򊮷4���'w��Jް�m�/K���m8�6Vw
&�\u #�*я�By���Mu���S
�%�tX���3L�ښ@�#0�&�~O�",o@QBφ�ke�
���Ζ��?�4К E�n7Hb���{����qX�v�Ob �/�6)�̹mn��_�.�0����A��>6�����V�Dڮ݇���/�S[f��l{�����k�h��{��}vwj&�z�~Ed;E�(l�	�Z0֢��+��|�CILU��ӰN�Ϧ�.��vģ ���ƿ�N�p����C~��ُ O$Oj�4����'���^�Q�o^��Dw������h��V�Г7��D�g�w�D.��37����'@i7�O!ٖ��S{Nq�lFOe *��|.��6����?�.�l�Z?d64X=��jPB4����LVK4��#����"_�����X'j����d��m0��=ɞ&��Pe�����(���h�j��X���6_o�!�8V���@|����#4����ܤ��	�C[���-�rs��=���u��!l��-<v�����T�X�}��$�/=�����*Ƅ�t����hЇ�:"�m+̞�),�X>Iׇ�!�!f*����6�u��MoO����:A�?;,���Y,���CŚ}�/��0�	�����`�3������Q8���믗�<0��u��!-K.`�>M%�:x�dc��v
Ծz�p%�~	��c����E�z�X��b�W�W^���� �e</���- ~C�N�*�V\%�^�h� ���Β{�`��3o��y��VM��~�cB-���_��3F�� 6�i�t>_�k%�C�Ϊ�=�Q_���m��z����aƄ�҃�/�A����Ř7"�!G\�d�^�|n��?�
�+�ӻ�@	����k����Gmz��jV٭J_v�4F�B3�t]9s�O�� y�tN���ٌ/�((,�~W����}���V?08���Q)(,��X�\m�����z3�fd�ly��T�Yl���i� �]�,�Yl;L��!�n�g�˔Zr������q�R�g�!U�,����3\lI�����=�J�jUmmi��ʏ�S��ʺ�49W;��t���E����9�|c����O�`�T����Հ�����/�wb�y��Z[��.����Y3h��+��7��}<����6&��2��ʉ �C��$CA SL �N�����h�����LZi8�n`E����h�_��E�d^)l�,����ð�m��>	+{Oj1LAKД�8��l�*� MܘcR��E#�)��0�:k���b]�i0��k�#GK�Łu�/h���_S�H�piB��tjЛ>`���{|5��\S@���b����ś|�m_�]Qdۃ�k+�r]�ڦ3\FB������R��u�,MW�����r��?px�KkB��)�r�E��~N�TP�|E7R�1���T�c��G�� �N���=}Ci��$�iR.�N9��/$t3�ע5.4�;Ԅ�k=L%�����0�N65��0!Al<t|�xu�C��=r}Lͷ]�X�Pg���i��]��d�*����@ԋ��|��4[�O]�<�����ėv@��1�����m���������%�G;�uD����}z-s9#��>1�K��%]�����ږ ^�S���$�ſ��@�l9/Q��~,b��\�ew~X��g:�ZIg��_֞�����,�/c�!�=_M���7K���e�b��-��]G�P���-SFW�B��tį�{�0�����!� �{=����V�5=K�;�&e�x�^�E���%ϦYG`4"뺑^����Ck����Vv1���e��J��E  
� �&�U�$xPCZ:��V�J7���W�Vk�l��šW�Ԕ�Z�pJSe�sT�� Di�/��M����%��x=�����*�R�!��4)>���4��r��kp��iQ!`�)�W�)��
���	̎9w����3,��Vu�צ�t�����dwG�_��P'\E4/Sll�F��r�	�D�'#ۛ����n�Z�F��������Z텉���zW���r�t|���$MJ�l��3������VJ�!mm�ӈ�&xWT.� ��,�<�$��ϕPS74|���O�z�j���"�r���Al��5���FTѳ�0�M����(w�f~z���9a���Gh^��?�����T���O���E�r]Cs�����ʤX']�]�J&��ͅ�n��~0�V��=��@��oU/p.`O�g���m�lG����=B̂���7��� ��&��;E���F�]*.9ʻNyG���6�R@dM(�>p����a�v8�ϴC����8'Hr�!�2OJ�+�G�_)��qyt��8��f5N�n�tޕ�79��c��.;�0T��3�(� 6���C��<C���]|�j�Jg0c!�c<��&��^�7c�ƙ-�}�i������鮮����ƋC��4��%�C������5�&F�hS���YWG�P=�a��\�J���3\1 ->Q��ԕ"P��%�.Κ[�Џ��į7M�	�4�@�Œ�A<�G8�LyFsݹ��(�cN���H%��[O>�M����/{��	ǲx_�U�Cj�eڢ`���~Sdf�|���B�R���̶o�FI�֔�S
�n�=�Pc����Ɉ����s�G�$Rgw��ב9[���p
�s����|�Z� 'e��D]�7��� �������~H$�x���~�VNST6]��o^;B�X}A�ߟ�|�� پ�K���C��e�S��@�(s����������H�"#.`1�o�=-�)��0�;iC����j��ӭ���)����^��A��D��"�%�0��(��y�@�C�$�j�*�ES��	)8�����L�mIu3T��K�}��V�:���`r��3Xg�k�<�Y��?��OQ�XQE�N՗��xIM��p��[du<�|k��#PL�� �v�[8�h�N��V.�9�����7����k��_�F��i��0o�G4�����+�8D�������b�<+lLUv6�?}:㙎��M�e�����`�B:|���
���!k/ul5(x��{Eg_�y�#ǥ:�
�O����zI���4��/�/�ؗ��q���Kǆ�V��Vf����	j��(_���څY�"E�wr/�6�/�����@sg���Ȝ��O�"��JR��=f�Z��x�i� �%�\n�P��a���Zȡ���lFI�}����VDmd��t1i�l}��S)��w�/i����a�ԡ^�As�*GS(ɤI����V�	W��r�C����|_X��R~?#�<9宍�U"V�v
�Y�
�[Y�@�������<�L��a
�t�}��b�.Y�H���!�%ꪐ|�� �ЎStr�]�i��j� �G$��bvKT�=MtX���Fx�R@������9 ��F!�D�8�m���w��1��V��+�D��Z�E�V��J�V�9��b�d��U��YO�̘G�����C�1?��I�"�_���ߩlx��Jf���d��#v�+��o��<᎘��}�;E�6%i|��hm�n����������u��Y�ŉ�s�R�LaNH��� ��e�pwh5�&*�y}uT�퍊��s�r���2rճ���;���6�����;}�]��A�zr�G�*�S��w?uA��J�܈8��^�[����6K��2�!��q������ʨt\ȋ��ޑ�o�m�g��>�f@��×B�1��X������+{���J�5�4	��LB�>�n�;Ei!,+�*�*K�e4�d`Ǹ���S�ߩR��C����~W�VR����/&��kD	`9�S�3Ȍ1�¶U�z�:��<�=��]�+o���!�}��ّ|�a���wd�>ŏE�|X���;��1�t���ji�i	��v�ā�?&�b����K�S�N��%Ig�:G.���li~���+�@a�\��r�xZ�`�
���%�F�K)O�f�R���'f�I�����,�;R�H�/�@jF��J�M�[ڙ,G�����"��
7,�V�;��_�'����5.�q{�)�ϐ�a�|.?�r�����e;�n�9�L�'�n�����JN BW� �Vy�����K*<Qpe@��1��18m���Rj���R� �`E/���``ao��G`����Z)�|�G�2�.񗼽$'ʳ8Rm��^�. M�X!E� ��a&�m5a;��K�H�N�n9sB�����9)!Wgo���3K�+ �棌o;}ku����>r��d��bl	{,'��D�`b���r>�HLn���FЍJ��iw���D�4}��V�W/��Ӯp�	���	�P��*!�z<�3X�3��&�΁`����B�v�~h(�@��Q$�k#2�P�\��Q"x��l��c���и�燱T."h���ʤ�K3���5`�+�=����߶���l��O�Ŕ� ��/�r��y
�Q�dl��L��o   � �F�u�(J�Q��ı;c��n�W�V�-�s�����M�+Q��:9Iᵒ�4�gl����c�����t�3��PY��\��|��7Hh�Y,��V?V�7�I�Gi���9���F eSp¬�䤩�Oi10�Ts�Zļ�;|�*�KӀ�-���k�\G�/����3^ynd+�����������`��`�A_A�`���ő���+ܒ4��⫇�X֙��_|, G�K�ɰ�F�ӫ���ܫi��w����3J엮�i����~_n�%v��c�'�(M�+�',�^�����lZ>����Df��$���?1��:���$�xNg ���kLJ'�9"n�MS1��֏���cx��yI�+}A�z�9�>.?Z���K���Z���F@Du��բוw�6a��s���t��	(ٺ��Z�F�E>	�j�*�ۨJ��R�yw���n�*�;��B�ؗA��b����-��u�5�*��1�?=���F �����`��`ym���-�n��Z7�ޖ�E���O�~?<�)�b�"�Sb�3b
k-`/�g}�7��&��H�$�-�@�*�H��}@�S�r�!5V�jԨ?q��hiDx>����
+�A�o��6����^�b�+��t�*�x�f�@�K�V�+��L4�����(|E�vtFV����1򦼵e�d$`�wSل�~J�EG��QX]`�=�E���w�.�-&�_$����-m�E?K.Q�r!G�4oӱ�%�4�*�Tt���v�¹�����B�RS�ά"���#�j�S4�g�!�,�]tǜ�PH�n��a��/"�{����[x�f���^* ��A�I^HwzIάbBmC�3
e{�G�W��ʑ��P$}$��}{=X6�l@˗�.d�* 9/�f���o��M��7�I(�i�z��n�������?N~G@�P���Z[��OĮ�OZ�b�'�ʂ �0BxkDI��#��_f��tK"��z��4L�r� �K}�,{ĿVJ�R�5���8.*"ez��\/ M���ლ�ݷpSL��,����95�����'	{�<m�!ŧ/�<����Ų|�L��$Y�v��K�*�r(N��Q�0�#��Z���?���~m���j��MH"懸}�
�Co!!���|�]�[���cԁ��9�.�4!��-�}�/��L�wբ��8_�����C+������67��YM��bc:d�QW�`�[O
 4�g�[�z*���4}x�Hd���H���ݘ�|��P���ߧ'[�������̽��B�8����=���%	�\đ�n��*�a�np��x��h�хӊ׿γ�����E����q�*���B��ʘ�Fb�S2u�Eh�99��E�"����ېb�8�'�0��Phy�4w��4ӷ�ۯY���!M+B=�肍���&+� �����觕G�y�t�e���w��Fr�^�,������T���\��R	�X��l��]K���[���@]��qk���(�e��&54��\���$q�
.�;A"�|/���)"���$�e�I�?��!h2F��ݺU�q��v¯�7^�Tg�Q�E��qcբ���=3Gӓ���ǰE�rt��Y\#5��Z��mQO���A6��%jĈ(ϭ�'�*�)m���ĒH)y}�"���НW�B�?#t�z_bq"޻�v!Q.r�~�^�����f�A�FT ����+	$�=Ԕ���s�D]TC���j�m4��q%ё�u���gO*d��2G���2|2����*���ƅ�����O-C��&%�p\�F�^�� �#
���NSpw�[�X[�f����g��tl��Z�`+E�~�E:x���w�A��Kz#f�M��fϠ{ \=��ƳQ(�Ȫ�"6/��L�4A�r�q�fI�G�;R�,zX�	ޅ�d-^�������iG��p�p�hf/8���v$P݀ksP���?���<J��_?UЖ�ܖ
ʧ	�f+�V`��D�Z��R�Ǯ��>1?���ʴP/i ͊(�(��`b>�T���s?��'}�G��0�J��#,�/�8�7!�K�z~��!D��K����v�*/ �Ci�������@O�?�t!S?Ĵ]�I��Ӛ���K�fJ�\��~����4�Q�e,;�E�@-����o�����L,�mO�f��_q���O�?�0�`��8# �";�;��ͼh������^f�e�8U�=Ĕ������v;U�7لm�p����ʶ_�qS�)��Sb���b��P�-8ͯ`�Uw &�9#��^�n#��)G )��O��$��?��i��޸��"!�?0Sr�a��L-/��Lq&��=��3�����Xٛ4X�k*]�5X��_�$뭮4I�x��#��P�:����������!@w��wY��3_T�6�u�/��ӺԊ���Bϼ��d;#��=$�6D����A���&�%��2�f{o�ҳ����{_��!MeR0;W���S�؂Q�N� d�>(��D�nQ�B��#��$�n� ��ᓥ�$�gNe��W�,/W��塈ǡ��J7��IH�q�=���7^KΉ���L1jF�t��@2>�ɦx�����V{P�Q��.�����|�{� �L=ii��6�����ƕ �!mc��o7%���H|�z�2mRv^*��`s�f�;�W����6_�%NBP �3��|JexV��36���';�="�#�N5nk�џ&\j��y70&Q�96�ě����L�`8��ǥ�An�����;O��b[��l�	����"��][ݓ��|�2u`R+�-���.��($vL/N�ۏi�������a߀�~�o�����Q{9�\���-��ߔΊ�=�P��^E�����>\R|��U�r�+�%��Pe{�u��{뮴�k�l�p��8���K�`�縔�z�`���F
�z�g˱��:M�I�&P�UX��	��`6��Y�w���e� �ؘ7�)����J�x�����'B���6�g�/M3��@H��t�u�� �~���A��"�#��r�t�XEi[��/�M���v����c�� ��qY�5��j,���P��Wp!�Q�)�f�{I*ʄL1��rj�t����r/��L���EPD���}��uQ�毲]��9rҫ��܄��X�����
�<��'��v��օ�Qx�6�!<	��MLF�}z�Q5�e&�)ee��P<�+����
�|ӄ'�uT_����~�5Qi��Hʁ�   � �-����#�Y������U�l��VLzo��'��TcEz�6H�����	$0wv��g�ܯ�]x���uz5�&�)3�Ԯ���@PP��K��/E \�������V�˼���?=�9F��N��?��7dM���E��=˒�ܩ9ͨ���|ЉñX�Z9��NX�]����F�i��>�M���Xo2cV�Ǐ`we��b<�h���^)�:�,|�z���q�)qR�ؠ��:s>�����Ռ�d�>���!�i�D�64���<J办��Lp%��/�f S	+��7mue��aQ�	���W�����c蓒WP�H��h���{��XC��:&9�y�y=���C4>Q4�c�qG����ȫ��TO�_�<��ՋX�0�����[E�.Q���R�.�$@=Z�!����ao��']���E��X#�����dY��2�o�mn��������V����0+��g��IW$�h*$f֑l��0%"�X�#[�$K�*�%&�z��YMm����%I׃8@�?�+�h�15ב�d�Gv}�VUx��_�eO��V=���㑞���^;���� � �
`������8u�h[F>�EV�:��v�W}�ZN��JFx�f3:Yo��#L⏳|�e�Ǡ��;B����i�%C��L66`x���A��eY^Ұ��������J���9�na;����Yaij��'�m6U��5��)D5mVV��ȷj��C������@s�T�!�bT6yA�[V�J���R|�]n<��x﷪�2��/�'���(1�J�B�0X����7�'�[�.P�lV��.EEh��2}�&B����G:+a*9k[�[�xJD�k��B�+S�L�2j��$}=��6���԰���ǣb������.KU�5�7��A����Z�DZ��D���)gY[�sN�LЖ�/)J�)�f�����<g�⪶�t�)8�_ȾC���@�AUg$��|	P}l&�3�>��g3���������tB�qUDfՀYl,FZˣ=1_��a�g��p^BN��(P{<qS�����ᭈ�a�Dɤ,(uc�������ܷ�s���J�a��h����\���? /����?�<z-����ѧ��+�K���y�ѐx����#�d
�x�K�cC|zt� �|~����n�� U3��AJ<����8�)	�]�Y�ڍ�}�m����-�ܲ𕟜�8o���O>E�!U_[�݃�7;���n�XG��x��\��#��9���F��hS���m1�3��a���J�R͗��n%pB�EP
7ZO<v񆰖�����y�����h��O���u�-O0����i�M�?b�w�h�ֳQx��"<���8Ap2:N։c?�i_^���j/ao��5�h!r/ �41��J[方���B����O,n�~�R�"�	I�!�(�v>���d��K�_��w";d�c��-�1%��Z�Yi!�������d�ɒLx�6��J��7��Ͷ��3�P��l���}N��^������h8��������]���篔~�;�p;_�y�>�W�^��>Z^���?�R��Z����@���3�l������E��O�Z7�s��t<��)�ѦC��!����&p���Z�@=��Ft��	��0��-Td8�N�C�Fޕ)�!�p�F�pws̫���V����z-��c�'���K'D-����Z�,�f���C@"�W��B�O��Jw8yx`u��=yTn/�¸V[��
�}%����*�����*�טl�&�Οu_��%�)-�L�nm�F}�� Kz�RҤ�WO�|v��	 ����]<-��w�g~is
�Lm���2�"~�΂�|sع����ES0t�_tU4�� PDg��Nk���� �茜��p�wc�1ȿA-������#��{���l����^�߱h�Wxq;ߣw�:�@���P�B��>�`&�u9�.錌ش�I��ox�4L��}�l:u~����X�9�2r�ߩ����S�7+�A�z�ش�a_�cM���A=ef�ת�f:g�!eg�G���s1��'w����H���EVjKHӗ�%
��[p6K����+qb�.a� �(W�w��X2��'�,e�����`@m�-+�0eļ��{,��"�M��y[Br�� N���   N�҈�U���Fq-�Bd<�ԥ���C4�7@���RbO�B���r�j���8� ��qA� ���}7�Ű���P�ɠx��X�N�J�n���$��E�4��l�!P�e�:X��j�-?%�|�v`�3��W�F+{V覉�<>�����@�R-3t��m>��n��b=3� EYS��B0NB>F��X�=�>w�Q���97���������C�C�%�� ���^Lk�s��OX���'	r��T���>��Kk��������W�]�NHs�����?�&�P[x����a}d���;b�(�y�SB��ͪ3e0쐔�X�*�i�LA�N��e�0n��|�y�K�9}{8f���,����>�O�z4�d1�9ua� (C��.`��8@��J��n��Ӑ��=�����*g����
|��3�����:0�9��卐����V���b"��+��3M!܋�}r�72s���z�f��ϒ��E*�ٶ�m�~����0���t[�����v&2�k�L=�dV.f$ ����;
yI��
Nk�G�e��\�p���NL`�fv�*����H��5�zk�����YW�Xھ\v$H�����mE�o�t��o����!������E,�����E㐫X>}f`w�3S3R�<��[� QI's<Qu�Vͽ�f�uc�-�^�l,�]��$�}�R�c�U�&�3A�l؛��y:B�ǉ?���k������Y&Q���_�0�z0ܥ4[��ښvשl��(��r��~��G�N�39[��`�b��p/֔����Y�<�s5SE3d
$�y<h�C����!kX����p����E�����hI�Jȃ۠XV	'�NbK� ��f}B�8	�|�� Ý+�ʻ
���R^�V��/��>}ڢ&ԓejsm��`S��i�Y+�mIa�ԇ�a� �i�1 �������u�Z�?Zp࿵��4����q�<�F��o|Gńa�2ҫ$�|h�ğ	��Q���!й�)���̆��H�a�/y.	Kz�^U2L�1r��|�+f�/�6�M	�(�f�j�X�ꚢ��K��C]�!�Z�y�$�d߸+��I�� H�v���� >����8�,w�<�6�X�c�06󨊀5� g�=�(:��=h�8
���D��q�S�7:��	�'��\�������xu��ܵҷDF�+)�X�����4��LM�U�|[�R� ���������`��g�����ɇc��+�W��xkP��өE���±����6$��ט�~��eQ����'D���� q;�B9���Ѥ�|�&F*�H2��eAs��!�~H��>un�~��b�٠a8
_x�<.�FK��bx���fB�7G촁�|��>��#�ۇ� %���|��e����N˕�I;�(������3$T ����1���9�1��d@���g�0���=������
��O�Z���߷�)�C�V�'[<�ɷB�r[P�M��xK�=�~��H�RT`���;ODb�#30��LtO����0�d٦<g�=`�4�#U���[�@DMw�����)���CKS!��$�|e�@T$3��c�`�O��E�T���{]2�omo���a�(Kc�MuT���7�-����,e�]��I�mM{�Y ��0���5B���5��<�1�W9KQ�S�w�}��L��?3��,���e��:�"P����*<̨�ok#�'��03m{E$��{y�?�ʹ�\�_��mA�.�tf܋� ~��]���L0���[y�k��R!�)#���=>8 �ݕ�cX@g�����s �n[����%�]�V�!E�^MO�"E��vVG���7Y�Y�����O�F�Sb�R�����0�S�����F��_^��ۛE��0��88î!Y^�ܡ3�9d���Ow��6��RfUt�i�����+�e�~�G�To��	�V7ߎ+���n/���]2��{�yTѾ{�k\˶�w�:�]4���")dֳ;�c���Z��������U�R[�	�.���=H6[�w�c�&��ʠ4�t~��p�wY���������XO�ѕb)w���G��j��~�6��:�%��L�a��z/�G��`��W�F�����qlIa��$�j�+��H��D^�o�p�,�2gtxc�z�F5�A�R�O�$���z�?��n0�N�0Y�_VDd(�<(d�,���F��^�&>�"�9��ƒA��N ��0%[HE���������>O���#Ԃ�rv����E�"8>���|ֺ�	m?M&d@�C�|M.H�����M����r��u��҇(2dL���`t�$S}��μ�X�FG���Ƚ�	��c!���ys �2��<Gh�����ݝ[w�-�g�!�{��R9nh��Bc ]�;3���C�g:-E�#8���XׄǼRf'L;�;c�ZL���WN0���2���{\�Ok��zi�	H�β�=�O-0�Ty�e]�B@5f���C�)O%A )+��+�f0����K�{Q��&<�6�eK�3����������Ġ�H��-�D��:�vu�D�����	-�P/���q8e)��L���xl�~jC���8�lHW.K������\�O��"���[L\%�z����vQ���A��X�� �`i�p�C����)�j߃G����Cx5���`�Q1v���t]���=�(��������)�2R�j��D1�"��n��D�?�<���ŏǹ�G��z�	�W��ܰ1�,urFY�z�FH��W��<yPV�+%QE�x%��q�g���j\�v�{�K��9gr��(���{��(n��p�J�����*n�k��$�wӼI��s6}����]<�I�.0��7u�4,�,�ysx��a�� ��C�B��%?��>�b���S�� �f��\W�Hm՝�Y|�;d�����}���ܼXe��� c��:S�@A������a�8��`ˊ�<� EԩNE���?�cutX�j�3=�n�B�{q9��y�F>��
r"�aec���OP�ܺi�z�R�D��W�4���g��G���� Z���1�]	�kBw�����g!��/,����!)[��搶�!��lȤ`�M����ga��T�Bl|����ɚ"�H��1�\j�P��L���:���h�~�y�lrځ0�G�W�-er?KYIhNW�sT�ف�I���ĩ���Z`��u�����Y☮��Ė�p}��5O�Vk#\0?A΅d�/��<O]�O�����QI�,�]k�B�gWܖ>j�)��q0j*0�Q�+DJZZH#���ȴ|rw�s:ժ[l�����D���\!..�Z�)5`�g�t1�Q�B%�U�r�,��T(~'�_�̬�����QU���M��A��*�.WM���L��&	}��u�g�R��ș�A��U�\��@?*I*���:��
���/������4�W5B�mw:~C�=�3G����Ϸ&��f�o\p���f8�6��v�e��C?���Q8��H���tD��XԪ��E����wHK㘰��%e���
���te�]nh�>��@��e�ə���r��nJ�<)54�5���t���� ;�/o�Ή ����CV��4v�H�kZ�p�	��%_�nF-���ݓf���`gx��G(b��	(+�K�f�5	�FOl��#J��A��ZT�&��M�*$���h�3��wq�ȷ�&�$�i�%u��k�3�MX��r)��Un�ߛ����5���W���ʹ�ɪ="�g��M\���0-��mq���i֙�"�Ts�.l�6�>��bM�2�WF���2b�!�d�܅���| -�M�<�̲�iG��
��1yW9�S��}��"�.xS�k�Wlr���7�bA��7�xx0��z�Zm�$j)O���@�{�,�U�;�I�q�q�	=�� x>6QOw"�Ta�0p [�_l�c���}`�K���ȧ�R�	����f<��3`4ey��<0n �Hf�5X��Q�'����84?�V�B�M�X��i��O��&�*���J.��5�ջ���ۀ������ެ�亷��NA�Hڊ���o���#���\<o-"�L�{|��7��@NJdΦ̾��s>�%��/�KC�r5��/�p���:T�9D��������(���]��N=q9B�eʪ��+�F�mD�!G��H~�����������M՗��
�(�ʿ9SO�Qi@���!6��GO͹B�ӥf�>WZR��`�O��7#�L����G��芡��0Z]�%PLy�N����)������4DW��#U�EQC�E��	_�n�n<����N�H]u�D��['J��c�/k�@|Q�*9�_��,F���M��aW�58U�jU�P��X�WyD{�c�V�I�x�V[��J�X��U$A}ҭ���]�s*�qS���2����Hs�zl�e^�d�	�����D�\�B�Fb'��mP�-��Y$���dG�*�FڔP�qq�I!�E��^U�˷;���n��(����L�<����?%���,~,�-������X:���� �Qa:�]���@͚b�,��\q!^s��?�_S��)���տKa[���G{���~G����p��z��t뼉<o�.'�j��ۅA�9��^?*�	�N�G��C�Ɇ��!��AxH��]��7��tW�Wj�@��Ef-y��ɥ$���R�	O���k�e�m�K��&��\02��G���J�]�7�*_q��`i\�,�����J�7f�L$Ul����ո�e�5yܭ��)���/{������-�onLr����@nY��U�r��S'K�o��r	
N�V�P�/���]�=�G�*3��	�[��?�s~om o�풏�>0�I?/FC����$^z���s�{𹔼]� !5\�^MYB�O�N�c����Pw��R'#�I�[�6�`�s���޼'�@���Ac�1I���T{)@�>ok��bv�aiط�#�WF�{T=Hj�֒�#����>
5X��)�$J>�?�-/�d��	_�xm�|�����p$1e�k� J�����5���\V����[�����&1'�M4㇒<�S�NY�@rˀ�Yd�`�7B��5�В��K�4AbC�C��
sK�ώ.�9���P�*��x����UK��z�&�-Hд����� �p�9��E�lj7aKHC�H MRe84���Bꮋ�O0�N9�C?A��8�>UG�]�\o��b`��=�d*������Xnz�&�Ȗ��{�.7&-3����	H��e^����~7��d�dD&�P�M6��z��sn��j��hT�sU�Ѯ��Cw�\����C|ɀO��]���j�����G�I���ͱf���0	~������W�ɽ�w=ɡ��9��zf%�՜���x��f�b�m]ǟ9�6TQAI!�}}i��5��Nrb�԰�Y�h8F~-R}�=6Z�����zI$�l��[G�S'��G��^�C��17�G TJ҄>��T��I[����qϥ���g'U�B��%N)0���!f��8���8<��FP������QJٻsb
%�1�?s��~]~�t	'n$U��\�Q*#T�hm�i�c�OR� c|�c��3�{f]����n�V{'5�c�bFJ�}x��,�P��P�����7���5��LXם�5AWz�}��J�_��ߟ�r�'�J`'v`����ޟ�2�l��M��	���ẻe�U�q�eK3�\��B� �֫O�y��ci!�e� ~(�C�n��?�Bt���2�AT��Z�u{<���DqNQ���I��ά�v��V�?�i�j�f0�Ocv2y ��8b
y �Z�G�ѕ�Р1xJ6�΂�j�^�ǭ9Bm}6�ћǐ��*�
5ID���s�B�=�.I	ө}lU�ǐx$�-X�+���cHƪH���"���d�]��aU '��c�f-��&.�6]�#�G��^�]ǖ��\$N`&���e��)�1te=�L�IV�`}���������8�h� dBnd?D0��@J�G	�]���^���������/�� c �r�����b�sqe}B�U���@aX.�:�:��dE؂���"�|����,og�[��F�i(~p^p��'��1�W���#��b,;�4�}�*���UU����{\"WEPG����;u���;��+q@�U^/'����~�"3�Y^�塜�I���>��	-�H
`�����Sڮ|CSZSs�h
f�|�����;篙:~t%��������`��/E���\�"GU�CZf�mms�+��B{}d2�ey�4��ͯ`�Sw�QrS1�=`	���pr�R{;����	�󤯼�O��IA1�PJ�o>�f��T�ӷ}AnB�i|��0���CMx5�(l�t4�BdTxc'����K_Էʹ�V��ͩ0�ѧo������nEQ�����v��k��k+-�W27�ӱ|u:�?�?6-�j{T:�!��Џk��("+�l䁫H�ACE^�r�D��m��:1��n�hn=���6ђ<�1T�
�O� ET%pj@����P��3h�i�|�ؾ����u�O6��H�K[��H�G�����Sas �ǢI��<qv��V�t@p��#���[��T$��
Z}%D�)��@�P���u#���p�����T	#骗��Hgr�D'�fS�U܄p/%�-S�(����]�c�T�H![ϵ���$� �/��4e�d�&�k���xH�HW�o~9��~\>���$]��+�8!�<;���B��`��|�'<�7��?����! t�y��#y޽޾8��US��O���/�U*$�ŭ6��R_6�n����|��/�� ;��(�%����8�g\���(�0�� -[����"��#%Z�$�d��N���h\��B%Gfo�,�U���тja�jR��[H�����9?�G�56J�Awi<$A��1�������ԫn�<�A�y��[C~K��<ލ4��y�門�]�NjӀ��Ѣ1��*�C���Y��j$�VK6:2d ��E7�<F�gF{�=��O�p��pG ��z�R�Y��"�c̐N�z]^�����ߢ�����$��{,}�e�w0������Fn;��g�l�k���JH4Q�������D�o����t!��Z�u��p�3�ջ����N�2t�n�r��ڂ�/L#�C�W�Jj~M�m���+����zB���露i	�����ߏ�
.�vnV�n5T��%�ޖ4����a q�+E	�p��an"�mH�"���I����9L�8��X/���L � �<��G7_�%@b�DJg�re�����}oI�8���~51~N�d����#�¸�ED�zi�&$�����Ş��xМ�f�;~�p/�7�)^ ��`����,w��m��`�	�8[x���w��Q�,��+Դ�"vnx���y�\�6�����)
 s������Jɏ7�횑Dm[Cy�ʕ��� �ǈ3�G�B:���NH\,d��RA�51��k����r�vuq�geL���4O~�S�VT�I>�+@ps����J^��g<�lmPP��[?DzY��·p�����NQj�s�D�%ب�vr�ׅ?�S1��H�H�H%b�'nL&��&��.�^��r�҈s�q|�[7�~ �,n�0�NJgx��U�jo#��Y�Bu[�}�AY�8�D/P�Q�0����gE+�_b�#/��[q�d�A��þ�Fy����lћ���3�����@��u�œ?�p��O:���c�Vm����RC�o$����9Pk*O�͓��u�!W�h0�0a@�z�Î6S2|�,g�!�����@XR-C���F
�r�#"G�ỒH�`l��%z�3����1�y�>�M�����.���NZ[�k@����@�.�4p��,��/Б���)�;�x�e�CpJ�(�ֈ��窎I�1�ȷ�|�{9���� &%x�q/��5u�GJ �M�����Wl���S�1�},(��}ceu����Q�j&*��4�I���fĕ59Ň�j�\�As�}kwb��uHlp����Vo5'�/妌����y�O�T9@���L8*�u5ߵ�"��� �F���JD�E5����d~l2wa��� ��і��7�h�����H.Ui��F���}�<5�ƚ	��2��vǴ�|Bw�pڍ�3c�H	�C��"�k|)��^���{��5�a��v���෯J�8���|���_��x�'v��^`��Ie������`�\����6�
�U޹`H~��P��#�TK�uO�`
�V�_\ �ϣ�{:�~�g�R�������Lk,,;���`%��B�5�ǣ�-�FX�VPA��Q���TU�k�7�z����<
��H�>�!��\\h���h�m��'c��J��'x������S;��&�j����H�{[-CTi&bp^n�v5$�:t��<e��eYx�ď�ڰա�8��n���-�¶d��8���13��h��y1B��A��*�+yR�KfM�J�|�y�G?�����(�۔~�*��aߚ+M�I�9�^\�-ߙ�߆>��?�c�	���<ھV���z�Z�p���|�L����8���I]��BT>��H]��ȣXm�_�/Y<��gT�l=�؅�#�hF�<��� a)�ey����j.P�ٟ����7��)���ئ��ئ<b��Y@8D+kU�fs ���M������`�7=ā^m��58TC��vL?4�W�{�u���\�y.�l[�o�������,�/�S�Q,;��.�b����;����<��F�&���`A��_����&�B^M���~�Tc]�)�m�:���eK9`���5.�R�X�����
��������|\w}�i*����� ���� 2�$kq�[�������RW3���O�� $֨��u���p]MⳄ�z%��6��>J����%�l�n:�s�u58/�=�	����R���ߎ��~U�.y��ĥq�!��Z���8���)5�L�y;����]r������%�f
8ِ���1ٝ�ƽ����^`�f[:1��LZT��O���~�ݝ����k0�H9�Xځ�15��K���%C|�zs��qm�g���&�+�pHA��?��K�tM���R�7���� ���;�������:�b�7�Įh�}����S��7�F��q�`t)�~c	;i��#��
yM�s��^�K�LE.�Z�7�MB�<�gZ�CǠS,��Q�a��Έ�zD_�~�)q��Do��1�� �+�)�q^+~�r��<V�v>3�LȈ>e�_��������k[s� �ü�X��Mu)r���������	���)gP���ٜ����/���ĭ-&���[y&�*�>�(�;�is/UF�S�u�2�ɮ�m�LDy�sx�"�,+�Ԕ�V�Ǳƴ��/��
=��0) NA��UZS����yH��2�Cs����y����{�C��`b��V��� q�2��)Ėsx ��U*/8��s���g�?o���~���o�O�BBx}K�E�$<�Lg��N{M,Z��;M�w��YJ�o]FIA�+"�}�XȤ��+A�.�ý]�Ե�tI�2v#��T�_)��a⭘Я�!mL���!�2�x5���c r�1w.��}�
������ {�޷]޼������vǙ1!M��6�E�/�*;�N.��K4t)�!���O���ع�M����*�'�,�/@C���'0%��������&��΄I�%b::
������Hӡ�|��B����I���R�Қ��!{���8�؛�'ۣ���R,�h��t�!!д�p|_`��ζ$T��d�QN��6|�+F~�f�D7���mسG�h�PLT.��BT�6���IY����6kF��G����7�����iW	=t7�u�v �^Q�@��:�N��s�)��R�V77Ñ���+e�y���҈���+iGj^�θ&6oP��#3.f����AW�ޜ>b"�.�ݖ�������-��bM�h(�W�(0޿\��Q�6�r�u �'�!Sի@ ��Vt,G�8<I�'���I�M�N��de���
L�S��a���a�J6���<��Pb��|���-+Q�����!�@�&�çJ��U�@���6,�&~j6�YF+�^n�PRkJ��5��!�L�����?c�
����A�����GI�;�^nx���BM��5��lz�\��)!�6Y���ߧc�Y!�0��c�N���.��)	_z�[	G��9��:���Uj��W�YR�R�T�$���g!5�ҙIz��5K^$���j9b���MK:��_�Ajk��B��Y�ia��D����o�+�=�R����!�X�4��IiPMs��.O�r�g?��x��{���3S���z!���斾�.䬾�j�v35S$ ��P�J�JD|�PFC�<�t<���2\T�9o^7�����=x(�c��>�xk7�q��38��G�P:4ݓ�J�=�I�b�X ��%�3?�ᑖ��X��Me �#���Z?�ɕ����]ދ�_�cvd���G��|��LKv��fX�p+	�&)�5>�&YTT���h�0���p�l����=& 7Pd���mdkJS���Lcr� ���Xi���'���-[tx����P��g�#9k��h�j���	�f��9y�3�i1���ߵ`��W #s8	`��� F2C�I�=Re!��<�)�`���Z����
�2�^e[@\��sa��	u�_uo�Ao+��:՘�Uyx\� |��v�z���p�����!�\��v��L$�̼�N��	aԆ�=�c��j|�<�s�BF�`��o ��3���N���ZFeDd�->V��?MR]ǈ{��y�Ab��e��Agpw�����4�q-.K��/�f6U����[�}7��R��~����n���璾u�J�)g=�?�=�oD�I��Zt���d1×�G��i!yZ�N a�H��А`U�����k�5��Z#;MTz�u�"����ơ�۫O\�oH��ȚW��H��8 �B>@��d�!@�/j�^�q��"������N�{c�������u���ch�Ti%
��0�I~������Mu���F
��+����f�o9��Ũۙ��F%lEr�{G	�Ft9껇�BD+���Af���ٯz:S�0=�\���5@G���c\Z�}(m�빊'�k�&omP}S�t�\����Y��������E1K
�{���Jz4��Rڽ5�`	�tj&�� P���n�"b��?�E���T fq�*`���]ܸ�X�3��)��R�[a�O��ܶ��,./ցge"1 }%���NJ'�qajI#�4#���vh�c��3�� �_k������t�0dҏ౧�Y`49�=�`�yrg��=�F���ō)����哷��62��Y)���[��'c��|}q�]<<�)�>�����Հc��|�+jv'��I��Q�2���ǆR�v�,!����y����Q�v"Tےa�,�-�f�I?�+o%^sZ:��[ �˃J��:��>�A��f�ّ6�֊���j� ���됏��n }�1�~~FI�x~����f�wI������|#]��;���PD^��pu	ʠXI��8ݓ�r9�?Hެ>0�ohUc:��@�8��m)Z��ֆ��r0�욏�@�����U�	�����=#���0R���2��9fFcb:�s`O���4���SɊ=��Sz��sV@	� �s���O�餗�s�AJ��{t��{f%�1ES� F�RҼ�_�Z��ֈT��i=a�����7-�ծS�(�v�[���Mޡ�Ƹ�NVN�%�ik���F�B�����4�q&ι]�?�"�b'���O�1��'8迩vW$:�Zhm��ј��I�O�,?1`�o�\P
,���-�g\��q���@�xFT���>yc0d���<}�ͮ��bJ;�=�O��R�����`}i/�uNgΓu}�oq埏'�>�
.�W�
\�xM�[��&����땅4~W_�h=�Ja�;�
O4�U��H���]Bl��Ibl�ӚG���H�z��&ӘrY��o�=��"/6���;�c��wyn��Fv�!��)� �N�]-K`�򨻂׍&��1o��ߋ�ZT��Rw��\G����jдv�m}ߨ��yuѽ@�^"e%�lj����2G�����v�m/̪�Lj�~`�/Ζ��N�����X	�奭"<�;���9*X�N�h�e�Q��P�߫�e4�TPlVbF�<d*N&��a+�l��d����bS7x�]]�aN9}��O���нgK��϶��Uvf�pw���L9N�{��� �4;ZN�j�C��5��7`l��K}*Z��<%p�3+�ma@�E��Ѓ�!�S{�8{��s�� �a�zV�<�J%S��%u�Jqx�i"U� �.�\����
� ��p��4h������������2�C^Z��x��c����j�N�q쒤Be&�4�ڪ�?*��w����Q��o�:kc׽/��Ǥ�����EI���)M�_ΦC�m^������P��"����_��U�bA���J�=���c�/Bb,�8��۸9��
ॽ��?|�w����T�뽖�A݇n��Vfx�A��eN�)�P34�*��&ĸ�+������4X�eG������9ۄ4��|��Z��}>D���v�]6˝T#�v8,�aXʬS̛IM	�8*�m��La����h������@b�%�k�e���EF����9Q(�"I�#n�i��r3�~�V�D��
� g2���ó�z¶���̈�XLT��c�4�d ���3_%�(>m=ښu�[�p�(���z�G~�AX�S�쉥���J%�usmnU+��İ.ǰ��N�"/=K7*�χ��p��ڕ�b�N����2p�����܊x�{�n��D=�o�,s�X�_�B*��i���t�:���7�1S���"'�5����,�!�5a2@=�	����I���j��i����W_ڶ
ؙ�cW��ųUt����R�A���
���12qN���T-u*ݞ���o+��Ӽ�X0#�+�RC2��D졻��l+5��R|{�(�б���;`m$f.*�/���g6m��W~����L����6��:}'��e,�X��U��"Q��w�uc�b�`8@�3�p�]H*.�	�<@�B�!+ȴ�I\$u�P�/������6T���_������t�'|�	�3%i�7I�Z�;��Ϳ?��3��������[M=y�	��x����Q)d�P��Z��O��*m㍪8�7�?��ԒgS��a8;P)����`"�E��NSΞ+�Na{bX�O�Ͳ�'�/�L\G��[E�hi��x<q	T,������d��0�)/�2�d�o#0������S��	&�0G_os+)�Эn��_�=ap5�'���GG��^�X6�
u��@�A�u�D��Q>v���3a�[w�;Nq�ej��~T�T����sd�j�#��S1���3c��W�v��t���K�>�oր¨�p|h�Fnt�G���\X��ʻ�\5�/i$�t#��Y&�20OB�j����J�	��_��O$����cz��:���N��M��:����t��*p���@?�M���-�N�����@m��J��Ώ4,}�^W#o ���DR�5��i?�&���Ms�yl~��#$���'��]*H7��Q�OҰ��D ���Z�扙�Z6~���G����<໮���ꑇfo�i��P��+�]�Hm8���F֢�-E\���欕|#[rF���7��%7��.�e��'��ޒl?�+{�\&E$y�i�oFx�ѓ+yc�]8�w|����
��zO�-��TP�cߚ�K���5q���� ��=�|k]�F���䉀hl��yZ�fHШ�)w�톌uX�јħB�LM^s�;���/c��';��-w��.=w��<>*�f�ra�wR�ɍ0��ދ�S��DW��e�C\�W�d+2���o�"�1@Mv��G7R��}c/8IU�3J�P����b�?@�q��S���i�e>���'�����E�(��>�R��L?���Z\!�S���pF�b��B���Z�ԃ_Ap������sb�����9~AZ4���e�d�j���ټ҇>�o�8���a-�|Բ�X��'U7�{��"`I��S�C7?�"x��I�uF�Ӌ� �:��:�ϻ�(�+\�C	i!�W��eg4�Ss|37�R]=1��D��K�dE`��=��;k�J�R�
�=�D�JJs��:.��2LP0�I����
HQ�N�6�J���aQ�fd���k;�y�,��e^��R!��,��drE]Qs�7�qY�1`<����s�����a�`�o�����v���d�f]���}P'��������u�I��O��/3"�g�TO�C�&��1�b]ބ$��������H[ ����|56��얶���&�S-�jV7)���/9���U�Ҷ��I)���}�+���d�5'q��=k
��jbȆ���0{��i�]�S�^`�P�|P��� ~��k��|\�#�;
�~С�7(KL�줳y���k����Дw��\�Z�L��Hm\�\Il���S��2y+Z�+��L�7��d2l<�����=�rJD]r��x���Z���9�˺d���'��i@4P<������,OPqK��=~���m��Ǩ�F�q,��FB�;�2A.�U���:�*(+_���RCO�����J��t����Ql�-��k��">	�)A���ÑH ������?+PS�-�w�W��4̂
�u~�r��d���A^#�W��wq|Q�&�p���juz�7.�"wX�X�l���襛�L�G#_�̾F�VhןW�G�Y�a����S���*EAe��:me�-u�d8Ob��� R��}�q
�{0�"`4˃�%�)������2Og�U���m%�ߺR�\�.|�ض#��|��H�Lc07�U��\�o��>4U�	*����4ed����o��N��a/Rg�/X�MR�6��q�CJ��˞�,�k8'�۞�+d��6 OUt|(J~$�,ފØ�����uMP�S$�FWJ�q���
�@NL|��/(k� ����&8e�#eh�����I6�́��42]�R�oD)� �vdM<P\�<�bG�4���}Q.3�9�O�	��=R�#e� 4/�?v�ơnG�I/������Ɂ]�C�$�k5b5O�ᅈ(�q��F��G�Z���Q�x��a���[\?$L���eN�K]�j��B��]����?Hi������۲��9ZL3,�Խ�پ�]�CUD0Qin{c����72�Mn�ї����.�c�������T������0�[�X��L�(~�W�Ve'˧¨')��S���%v0�5�7x��!�V%��K`��C���{gPD���HvC����f˰�+4��+sp1s��T�A��i�.;;�0�ҝ�:������5R2f��������a;E���	c}d��e�'M��:h8ID��F��*4.!BK6F�	��o���kD��|᳘��8wW�Y!d����������h��1���9�B�Co��0�G��r"j�L�g�FEL�54T�Q7��W⿐��H���Ӭmn���aO`��=�G\_h��+c��iR���J�dкJ)D�D?�Pʧ�	G����8�Z���Q}<����)q�[���~�Or~�x��UT2�B&�e��w o�<v�6�:�0����64����#R��:O1Uh�u�Q���1�?9W>��莄��z������z�/��X��Q�f"~(a�)�	�"�S��u䵳��J�=Vă�3�����5� ���Ά��vƆ�;��Z���{��������/0�K��o~��xyeF���Ef.^�	�͗�+����i��/�|�����>x��.G`l���r��baˏ�'bV[Ӗ�y`LTB8���M�h��Tz����Kv���U[�A2�Z� ��E�O�ka�4��S�
<�`z �J�l����%6#�4 �
����Zd���Z�����H�9&k=��6HG���榀�;�;!s�6ܳ�2�WN]N!x�[�/4��}�
�[�H���W�_8Ps���K����<�k_���>�qM�^.	��C���P9h�(��H#���*����F�y.p>����*N�:��Х��兂?0"�,��34�~��]*���~�v�b�Ճ�<��������fl)��
;骑��qCy�ν�w=G���,b���ʋ�k�ۋ�(�(8�s/�h�>x�(n�[��݊�MP?�By��0Ub6�;�,X�n�3���#�����z��]P�*�YM
S��- �����8�b�����Yo�GY��X��s!�ʺX�MS�b
x�/n?
'��(�&���E�Q�_���&�15�9=��4���%�z�0����<��,΋�.D�qI�U�����9�dƭ�ˇ
a�o��8�������:�5��;����	Tc&�n������FЋ������AJ���+��k�^��k�O��dX��/�5��[����g�M�1��P�?�9�������{X��vE]�L�m�.ӿB@��mNM�1�tƜ_��ҾO\c�91r��Uf���z�=Ƃ\)�.��x3�� x��,�CUa��c~W�a��:%�a�)�!i��h�K#�tAۋNQ`\�}��Uèk�?��,�[�����.��1�
?G*��I��Ɖ�Iv��{�Z�m�jA�G�u�����)U��i<�=��< ��Jx�^��[	Dj���h�B��]1=�R�����Tƽ.T޳�^)�*�lgę
rjڅ����c2��$Y��L$��ۅ�|���n���5� .4��U�z0ŵ����t~=���ݞn��Ⱥ��cR7���&H�t��[
T���g�ȶu�C*�D$��ih#�}�G-�GOz4EW ��+)��1]xTA��}f�����w`���b��~�J�5�N��D\Jw��;4��]��c|A
����յ1�T�3�f;�R�����g?�~=aʂ7?~� J!*u���c�����s~���n.B{���s�5�ݺ��Az��B.jW��΃�a������hY�
,�[��d%��(�^ڎ���A"UE� �0^A}�;�R��B���.�i{�Y>�|Jc}����n�:i��0��EG��{�<�>t�1_Q�<Qz7��@!�V�`)��� \5�O�������Y�7K���jt������1�̭�a���x��!T/	}�ƃ����w'�6���ϯ�j��Ƃ��c�L�4K'[��!�nI��FTaO�f+e8��3�	y�҃<���:��աߪ������A��*P�����'�}MJ���Aei�V���^�|�D>�Ϛ��g|s�[�e�G�Jj�ٸ�5���,Ae����t�
�4�`�s��2�[y_�o���w�1�fC|V^	�DՎ������7� �Tn\:���*q�-�7�ƧmJI1 @;�p�Ll ���}��f��Z�wE�V��TB�2#5G�RJ�ނ����6�zkI��E�`��3���h�b�������Ah(�?��kX��n�<u�j#�T��I��-�~=S�E�*Q�N�q�f�݊9�^{m�Z{S��I�ˣ�)��|ar���'���c� �p˗�
fb�V�U�B�������ѧ�?���f����0R5� J�<%�xsb�	��#�g�m��;��5���J.�{%�?�l����⮥^���
�˔�p�	�KnMq(�}7t�o���s��a���X�۔��@;�~�َy��d��R$�N��t�����#�#��H��׍@�뙋^� d]Т���Bvݰ9و��M_Z�6�=����44���M����+�EX����C��޵"�j��h�[���M�Db#m����K�_�g����;��m׳J�RKV��[/�{Hw� "{�=�1��fA5���	[`����A�A�_s���v�C��p��D��޺P/�&�v.*.�W�gK�o�N��o�b���F�~3�\7����;v fhb*���G<�U\�Ӯn1�4���8Z��0ʧ;N~�FG�f#���sF<�������K��I�L���FnR���4�Q��&��������<�&@�]V`gt�;D�Dn�����#͠��?F��ጵ[��צ'��8;r�ĎJ��!�
X�I�!+�U!��"�28�)�Ze��5��@'v
V�U��`��jȂ�������3�ޡp�~0\G8+�O������-�������)���҉���g��hY��Xv��θl��h܎��G��G�j��ޞ�X�yoq����Wµ���&nm��I�_*��< ��V��NWH��	�!E�?����x	ᾉ���m�i�,���+^�ù#8��S�E�鷣0{��Nq�L���;�u��~���Ҁ\rǕ�"C�
KZSu�)m[C'X��=
� ���J�Uh!�����I4�o:��8Lѕ'G�b4`�+��2{9�D����r��	�+J�"�����`��6�N�վz8��[��I*��|��\y4m%53�5��U���8t��$>��e�kpA?��]�{�$��=�t>�yEA�����a��=�z= w�c��=Aq�̀�b�\f�/�c�>��M��d����5峽;����E��;U�P���#�ǂE�y�X|`�XB�r#B����_��.�J��P�d�;}�VO窠�*ND��7�z�EfF09ps�0�Bd��,�u��7�����F�\�E��03�D��M�f�L,����.SI�.gt���h?ky'�B�V��B�2ꠇ@�d
� ->n�u���Us�>"����3���ȴ���3V�
m�(jl�y���?,29��Yz5_��	��+1#����97|5��N
k�=����ͣ>g��*�� ���~�}�������\h&���ǔ�j�zv��m$�G�����rd�����Y����ɜ�3�D����j�uՊ�L����GOU��+�*L���)i�5���3����0a&.>�.��э7�@�*�j�V�F�D�*S-�U˿n���!Ӗ�~��ic"�H����Tޯ42�O|�\B����$f��^Wj��Nk����?'����C7S�iÉy���I�e&꺡2B� Ӱo��9��*0�\^����*�&�g`���������Wqj��9<N|	�I,�F����O91���L{��(M"9������h�઱'��պ�q�?���[y�u���s|��S1���N�7�Ac�X�
܄)F׹By�<��7�%"��ƍw%�աm��jn�\�՞�VmE�����wIS&?E<S؆}� rx8�T-*	�����Ulq~��r���š(@�&,V��[��|�B՟�Gs���W^Wq6�a�.�d`D8��Xq�����/�')�-�+T�3����DϽ��?8�Q�>�Ċcu��+F���PD_ �VP�?  H��%R��f�(c
W4��]�(]q�7�F"�n)*�PhuZ��g�L�Q��ӂ���u�������d/ʻQ�����`���o�#Ի��&Kt�YTio��c{��S4��PAŇ{^�1��OjA���U2i�4A�Ie?�	z�/�&��g1Z.ӡ;.·��\�p��k�W���]�(3��]�u��v�Ľر�:N8폄r��Ͱ@t��w��r�9�R�p2k��8�"��7���H���,$�)i�#�f������k4�[gOPw�/��ƽ��)	�;��D9�2L2=�:�c��T����]�*N�=T�/���1v�"N+V��*$w3�v?w���W`ў/����z���r�z��s����v��Z��4���J��a�V�Zf�Kaa��G	V����g������(��8�2a�ZlDh��=�܏vS~�չ�����i#�P��q��S�Gz�؝K%�Uk0���X�������>�#�Y� Ho�<���B:vE���z�xE�
�~�
 }9>��s*�٤r}Y�Bv.����xO��d)���>�V��XW3[���{�������C�g���(	�[;N��`FX����)�*Ƙ�[Z��ck$􇫾����%?j�6M'!t/Jy0�-�L~F_�s�j��qle�K٨ti'�'$���Q�,��v���I�cY�a�!����+L���NF�L7T^-K�V�gF�{�w� ����ں#�^�X��'5�C;�I�?/�_.s�#�TP� �҅���)i����+�@�-�$�'xr�zc��dL�e oDUS�b�O?��7� �bX��\�6�q�e�µ���\�O6��l�q뢇)�S6[Jc��Y�B�S�j�D�es��6�ƥ�w˝��M��
�&���6_^����b��ӎ�}���) <��`�]?�� �5*Z�I��h3W&8PJ���'�MMuA EܴwgUi�
�e�MhX��U}IRj�+��%Y�Q7y6�ߌg*K���< 6��քě�iL?��
;K��ݰML8:���L=���1��x���WP�בY ��([<ŅE�gƶ���v�'�.:��z�%m{B�?�t�y��hq_����`�v,���˦M!g3D��}7�S��ߑ�$���ʬLoO=|�.�4)�zX�������4_6�����7���[�+ŏ��ښ}��"Ev5����׋t�z݁�8�sOZW��L����;Y�h�s(�w�	�1qV�8Z�S� �c��AJ�yسt���P�׈�8��Z�!h7��M�_�u�kQ���:b��ݐ|211�߽��Z�{��s��F=Ǥ �5#a�>/��x���egwlي��a	c ~��h"C��lq��%p�P5/`��>�^�*����n������1�@ ^}$��1�G�HQw�}R���x�$_EϢ���K�Z�Se!V9tჵ` -�E.b�tc[īҁ$>�h�.w]�n��?�+/1��Q���m����>�8�v�V)��� f��iA�Z\��wy.1�Z���D��	����c��'�Dt�/u���-�ox+9�05G�� \ t�7��t]A'�������4eK��p�[�8'�����J��Q/��豺T��UED
��|����9�k��Mա Ĉ2�<.�H4.W��`٭���gԷo���=�)O��5�{5j���tA��8�3�h�H�\��j7̙V��@��0c�,(��j#�� ����bXZ�7�|�HF��,����!C�T �a��f�6��/�T�(f1e�qW��7�5p�E�Ԏ�ܬN�Os��VS����E^�5{��Y�rз�+R̵A[��{�Hwye��U�0k}e,Sݯid<��t���xo+Z��Z(��܊茵Ӳм��PU������\*�],�$Hڼ���v���X��N��^�x�4����7 ����3�7iҁ�U��W�����Dp�V~�?;j��a'���=��g��{ ��<��S��34�����2��A&�o��A�$��W���y�ڝa�n��X������RJ�f��?��r�Qu��˞���gx���Zh�J//�5���X�Pl��I�ܙR�"Q_��J�#֦VE�'�N�hw^V��L��J�kͫv�"�iOk�XUc����7��5V�x=S��c,$v^�� �)~C�%��6ׂ]�x.+\��ȅXR{��\�܇�� z��N��-�u��(���sJe��nPO-�������6d*�C��J+�@�'f1y<��>���5��	,���uB �U�S܀�6�L���Xբ�����0�X�Y��kM�XZ�a�@��Z�=s���IS�my/+)錷��3�E���	sD�;c�o٧K�aO<	e3���2q9�&�<[�偞�O �����4�D`�d4[F|��}({ݔY�d3��(k`0�f)O��]�T�y����}o�G�Oeyg~v3O�W�ϫ���4�G��+��=l� �8�"�A���^�.]��o��B�z��!��Nm��6�[���5��h�/Ѧ�[IU���i��UI;oZ6���ֺT]qy�{8�>�&�G;r��H�[��ik(3n������c��ed���7�%�K��|~��G.�H%&[�M6�2Ycu^��(��qEY�eU��Z�8�ԂuM�J�RO�}�j����7��y'q�ʐ�[^���71�s6�7�h��I.`��1�5�L&�d�� �t���yA9P�b�<��3������C��2�1bj'v{d�ˑ����o�]d���dײ��H���#�Z�PB���Ep�u�}|�n֑���_?�yQ��|��sS	���@��H�_��!��[k��&��o��ƽx��1U$�'�`�<�!�ѥ�_��b�ڢ��!�~�?;�^c���Hͫ��J�ز�!�Y�,�.�4�Ev�x~��2f ��,5�گ���kK_#4�Dƹ�1���n�Is��G,��0^�n$�c � O��/2�|_�����ʭ,�@\��*��Ty�~f�;����6D[(@)^�<� �1G`�[$���M~��3r�������a�gNt\��D�,i��J���p�O�]9M>N���8L*�$�?K�^��+��a�h�׺��[�C�%���߃����T%��O�L�#[�o��y�Q`��-3K*,Yח� �>�A�x��9�!f��vG�p�C�_[��:�yE�_�p���;�%Z0pB9W̈�aL�0���@�=����a�z���Q�w�O96t7_�i�1zqp�*�YZ�0�a�l�Dζ�MT
x�4��&O�q�����f�1i�RX�����ɯs���Ov\k�V2JG��U���e:��P'�� ��g���$j�V���il␫���Ć��ղ�2t>G��j|+W�4!�x�*b{�i�0�3-Wзi�!�7K����f#�^�����D��_��|��궨NF�'�Ky�$�����Ù��V�K�T�&t�lx���e��~�аcH!�y2ǋ͠�u#8�[lA+��D8srnv�wD��M9c�h�����z��o�"��ï`B1F��u���!oL`�/��G�O�$�7���̯t�]D�V�P�$R���m��MI2�J����n���l�H�Y�cr ��c�B#�Cc�H����P�cRe��H���qb�X,
� ,1`/�麗3���WW�;��Cb[�J��s��G�|��z�OsS
�̏2���T���Ԅ|h�å�!EB.-����
�y����U�]`�nld�hG��^]�����f������

�$S�	����G
���Q{//5޺C�AA51��=	��7����<�W6�}�;q��eߖ��@�@a��o:=�7s!lZjM>�a��b��ɳ;<�=�	N�j>CoJ#P�v�����D�fV�"	���jt���4�2-�j�]K�ӕK�����N*�e��T����f�OD~�1y�:��ď4Sh0���;/BV�S���@���/?��m��]���$�UW��|��k9�j	[�t:r�ܢ|�"ۺi��i�{ˑ��ʣјUnnD*�I��v.�;��]+q����;�ڕ@��x�X���#A\T�����\�hP��g�
�b�AHq�k�=�NE���� ��V1&�-J+V���$��x��7�G,���O3��.ۮ����C~8�l7H�.�s�����������ݿ�Z�J��񹺛����&�8�>��ҫ����c�|ӧ�Nt�$���d;bl���'gT��[~�	i.y���U���I6� ����QUcIV�O���i}W�W72?�F5��2�R��O/i����>�'{VjT�@*r�5��{�8�Qs9���Tk�gx�P{��뙿�b�	P�
)N%�,���- H�n�Ѩ@NNP"@׫��3��B��(���G�Bs*i�h~�R息�~���S$��U�I(��������B�wH�꤯�1�W�-X&;��7�3��
Uĩ68��g⃞��Ts3BC};�F������v�i��7Hۃ�� U���tW�,棊|��~���i�/b�$�	f�%ѲzN�#��
9v��0���E�d�"��I�5$�9|�(�O����/�Q�YC�9�<8�O�Aa�SM�^ڮ����Ҩ��T�����-m�t�<O�id�W�M�9D����c�=�$����|��ɕn�i�!����g�fz�	�T\�Ϯ����w����}�<�Ƽ�Q�.I4i��9/�$\� ��s~�8_k��@�#T��L�w�_L�n� ���s��b �X0#��3h�+�C%����	�U�W{H���q�[��)��<.$u+�v.D�Y^2I7�Ď�s,���h�Z��Y]�%���SY$i��	'�~��{߆�vI*��m~���Q�i��}7��L�+��&�5"��'��R�>�$+���wB=g�6��bd������*+Hz&u�95ψ��L�j��3{��'��or8b�!ϩ,b]X�����~��̽ˤIa����	�^�e e����"tHOx�(Z�����<Զ�_�����HYjX��� T��W����|�jǓ7ʚB�;�'<%��a�Z�ծ�a�1����-������YB�`������Ӕk~����!=$��0�Փ硥f����R�v�`���+����ծtk�iݏ<2�+G`���m�Q���ܐ�^�m5��-7�_V2s����wIU��9����in��v�4pC�)� V��ma<�ɂ~'�E�d�����u�[R��$�����y^珬k��^��e��� �{�*JpQ�nI��8}[p*:z�x�_�����0��#�euG���1ż�Q���̀�S���_z y	�E�[��t#�2��f^/��N(�h��|���6�i�S��,o�h�J�~b���+HM+Bw<�bjƳN�J�L�����;��Pͯ�v�.�jdF�=����0 �8V�S��s�~��%�ȟ��jjcˢ�����K���yG�@��It��v�֞�>�u�=lZݿ���Tf�ΐ�e46�W�=��~��'��E���c��T�q�`�F�D�V���m�{Q��+P(3�'���j���6��h�-K��ޣ��(��;J@�G%�   �����,Th�(`��Z�+�d�t�f��W�U�|��G>��W�V��}D�O��be֘lH)��Y��rP0��U�@CZ!�r<Esk����|�^2�������Ȍ�z��%�h(���XU��uy��+��G��>"�j����U/В|	�'`_��%���ق�����a�}!:,�@�x����/3��}�8��~>:��-��8V5�g]�() ��%L/�""@.�߫AFX`�x��)8L|��,Kx��i�����/�/�������>V !���H�z�Ӏ��\�A�ŕ9�@y�{�J��i�
�_\;��\��Hz��u6����9�c0��g���% �G� p�TRLd?��E�����]MV:�̭�H�z�s1��Έ��r�n�H�`;X�O�p�7~Y�캵���q�m�b�x+�]�6"�Q�gCB5��ʟ�hԎ~����
;,6���IIMb%�bR�?��6�.��˒�E��<��2�M�[k4h%����P�3di�g���!n��@V�_��B��T�U� c��W:C���/�V>���������a�N��~-*�٤�$lzNNkM�-R&��`�ɳ��=�����n������{��5LE�Qp,RJ��m��rD�G�<��}�j�v�R◔�~ ���ѺPz���ץ&C:$u�&f
��*}$����C=f3]�@͹q��,�Q�Y�xW����Z�Z���?��̞���]9s���w'"�
t�:������Z¥�0;5���,U ��ĩ�k��
:��D.h#������8��Q�w f����%�	y�
��fƟ�'a5�參c'�������ŌFH����Et1�N�T�vu5��� ��T��$H��e<��ǟjk�|i#	�c@�E�O!��h=D�B���k���kF�3�v��Ò~� �hy�w��B���ys�:e�>	�H4y��ȱ�y�'z\��9���L��,oUȒ&�:���\n�㿪z4�R�ZW�����ֲs�]Λ(�ݍ�U��oX�V���"�Dr��2�-��E�'����CiE�?�^�����Y|	3Y�p��6~�Ժ	��d�|x1�g��f.~��l}r�~��]<Џ����~^���ܶ�x+W��j3t�ϑ��O��H"�<%�Mhz�~��5��"�\$���7�{yD��ܫ┼�Q�[�E��Y������5v�+�w#:��L����
E�X�U=�ނ����]�uT��k��P{�L7T��l3�_��%/�B���F�xP+����B���a���v�m�3�*�n��䭱�#��X�ؿ��T�����$��K��؉n荁m��:�!��K�om2Vn�g�u~���)�(=�\o'���Z������K�n�yCNT `J��0�����}������M&SwX��y~;��T�7�o�Ge�����b�X�6�HERr��!1n��v���2���*�3F�Z��lF���Ȇ�$Ӆ�����a��e.xr��KW�뛣��<<^م|�hZ�����HT�|k&�H\���?B�LGE��y�ٙi����YdMR�P�$� 7u����S���M�0gC��j$*�t|ۥdpϨ�����TZFnU"땎d����\�Տ�[���ߚg�׀������iB^gY���_99�~	4 !��Y`A��<�S�ۜ><����e�b�#�R�_�d�@ ��%FT�:���w4K���,b.��zU#�U�Հʶ��J��I�=�l���kށo�ȋ���-��	�!RV^J�M]pv��Ǳ{_HE{���+�5����I3�i   	+ �-W���"����2�ࣨ�\L��V$�ÅQ'�Υ��=i���W~�[c<V30At�[N-�J�~��� S���;��xf_� .�0E~�h!w��ڈ�l%� � ��H=ztm(�	�3Z�=��Y�A���R�{LY�c��OJ�]�Z�y�Ul��k_1���y��غ�Uw�������r%9�"�#~�%�C|�'dU�[�\j����.�u��D�U
!��z�[hi/�b�[��L'=���.��./�}X��,���ea��'N���=�!2G��,��~������*�	E������fDO�^B`�D���ȹ���M�R��W����-�
|ff/�������oT������S�[�u�ذ#}70�#�i2p�Lդ��(��]'r�iD_c/^��5pG`�)�-��ʆ�/�W����Ӻ.����<x}9�#m�����0E�dAa���G&�OuC� j6�����a;&5�8�'�z�7��Z���#������'f�h��J麝x+μ�>+�Y~�Q�p	vP)�t�Y�_iH��J�R�Oj�����}�u�;�VP㞧��h�?QaMGn.��p�`��������/���l=w	��4�}zP�}��^D/�cZ+�A��*�r��kn����P�)�P�r��&��ձ3P-���?�I���ɾ�q!8W�&ϾS�4{�n��=�Ɍ�^���Ĭދ�)]Vz��y|����VzU��ŔŚ:>���E��A;�٢�K�ˈ���Br�(\N����Ɨ���h�)MR1���X0 ��0��J�:6}��T��N8KJQ+�h�n���(�fw�G�������i��1�ٟ!C�	:�Z�^��,U$��{Å�"Gr�z�>�_��YY7��BA��!���V�K������!��5��%"���04��@!�� ��h��M���,�i�i�-p���+���Ϟ�ee�t���=���_�FWK-�I\��'4�>���	�ؒb���H�M�Y���{��}ø����G9H���+�}��:�`���h��ؓ��Y��0�#�Fy�R�;�"lT��7�_��A�Pyne4|�����c�a��@�Dێ۱M� l�����֮�ID���?O�ð�|��Q��W���q�m��?�cj >�Zn���VÒwV���,�5/w���aA:<P��G�Ϳ��������2����-���5%nz��m�յb��h���j;��y���Gy����(����=+��e܀�/k�Ԗ�U�P��K�?��R4�mN�E���PR �)1�[TOyE�*������Nf-Y#�E7G2����B��/�z���|!�dD��ˤOc�S����w�Hwb�oj��e
��������[��}!#�.�r�kdG[i�=R�E�P�fWb���Σ��'�ʖ9%����11�tc2e�0�<��*J
�&�#!���4�dbЈ_z�F+w��(T�6�(a���[�E���dt�:5�vXB�L��D]��������G�+Fd!��靔V倐0�~o5��g�%�2&!ΰ��ؑN���L_	��6O��=Հ�>l"�Z!^�B4�L2��/m�u�V�=5��H8:�>�[//>�㬾s��8]'����~a�Z���򪀨��ھA����4����}��dC:��g+8>O�a|��������	ˊ�Qю�lj �*S�d����Ca�u�6#����?QO3��u�cRv\�{��E�>3��\T1�S�@�u�������!�>����;DG�w."z{:�3�D!>m?�?�ڵAl(עi�#'0F��P{�(�9�~�Awl�jh�`6�؛�Ӕ*dC����p(Ŷ�� o�@�<���j����d|`�d�j\-N���>C(),��n&��o�a%���r��7�D#�����Ϭ:9�ضl#���4�G�'2NCd頱�`20�R�Q�֎��ToB��
��YMr��:���;��l%Kk$��_���Zt���M��љ���FM�$�`k..`�yh�4����r��;�Yn&
���*�{����N���_���d:	x��E�*cpD�R�mc_:R�)Mj&0���1��4rsM���ܵ�sH��C�qi9��A��snXW9��M�ѽ�Mn�j��`"�C��|��Q�?��J�y�m�䴭���^��;��u8�	�,��1�ش�hV��p��!||�w�E>~���"�Cc����!�n�V��Bܙ�ʹL]56�*�3��	v�iw[�-�]HXz���*�qL止Q��>���[�@<k�5K�e�H��P`�V��ʆD��45�tx;�A�D�o` ���\=�r�@� V���H潗��[;&�w���� �����l��益	���;��ɉ-%F��&!>�q�BbU�ϣ�/EsWnu ��YmUq�^l��Yj�-���'�����|��{�րv���ҿ�UmSk�ۆ8'9J��&Û��݋�D���z/����J��*z�=�qI��X*����V
���p��  BG,������)kbF�R(�:�� ���ϠP�-� B6�-`���Y��*�K��8
��'6`H�7��v"�O�y��㷦v�lݭ,/��;�� �VIϬW�S�k����<ӵ`�S;��יB2�-�G��� Qo�R8�t��+b��F��(A=3	��	��v��pە�;};�Oy�FH�ښp�/i�A�
��J-#JhC֫,�������-)B���'e�L�����J�I�0�d#Y���ǉ�:q��0J(c�ز�Tz��J�+1$��i8�--��.b7��N�8T+c嘂��sFm�K�j��f�\�''�L���oFx��u�q�o�2%V�䒎�Qhkt� X�V=��i���y�~�P$*�����0.�y\�аa�`
p(���8���D
P�3o�S5��(�aT�L�6s]��^�H�[��'�@B� �h   �mO�KD$CRX&	�s���7��uu����a��祹�6"�Lv����k,s�pHe���ߢ��hk��x-�fe�qm7�X/]��Ji8vG����A1��Y��>�ϣ�񄘼DOt�G���D$`~�`�:o�}o����Л�ڤ���XI����S[nZe����Ї�WS2��Z��X�TJ�(_F��� �OK�d��f��	Q��3B(�e��γa����.h��ԌF�b|��g"RV(�[r6*��*18�xᲽ��1�/��B���]�d� @��+��Dp�������r��h�V��ｼ$�� aMxGZ3�D���~I�ɺ��
'��C�0L
�Q)BE��,AP�� &Cdנ!P       J6��PZ��  y
T����.Z�8��AK,�2�B > �B��(�����'�`όIST$  &��       87-T���Aa�"@Y�<���T�|v��.k�*擺���  ENwU�5۪mg�v1�À��G���U�OE�(n�B&G�x��q����9@��X�J"���7	$�p6ʻ�*�	��@ Kv[E$��D�)��L�JΫW;3�`���[�n`�!�
O/!C:��z�y=dָܤ ������k/~�X�q�ZO_� ��C{���<��4��{���ht  X`�e�@����}������  ��Rd�P"�.͉�T*�B�	y��e,��\ι�X�/b�'�L�n�͟�����$�ӎ@�@Xf���"�Fbj�-�̹��,ֶ���h�o
���f��Xc�@� pq\Vf�L"]i?��t����}{y"�	@����շ�����4"��y��� KBW	�K<,x�����DR*����-�BB0�,XR��曦�77��!��[��+����B\�_��1�t���:$5|�F�Q<��V��Zt��#ai6ha&mM☸�����D���j)p��8�U�:HƎ�7?��>��y��0`�88|���R�mE�[%�[gA��Ņ�W�}�ǫ�e��T�O�ъ_��1�Z༅�/T�It:�BI`T@69��"!0� �����d	�l�7��Ʋ٠!P@ 7�   F6�%��ƀ��18J�<I<{[M�ҕ���JШ�+��r}ϰ�K�o\�P0%*i'�n���$P���hΕ��Mc���$#ɯa�v�s1v(A�*����5e�PO�"nf~���������LWO�˚˸; ��i�;Ս��*����P�;m{W*��.�BD!�����A,2e��E���( �B��c
�S�"���B(�R��09]������(�k�����ML�`[�y�^��^BD2L���ԕ����(>�_���@�ưo�Z��ܪ�Q||:h��k����S�&�鈘_��.{����^k��*䊴)\�w�� \*HX 5K ��P5h|      �������� ȸ�$G�!x��e, �-�;�F�4�Awe�
�,��o�@B�       �@�7,��EA0�,$��$� ���[�m�`p���:��F�������X;��Hm� 5��3!�q��D��I����rx��ܸ �Q�GK'�~�G�=�Bp\j8��Zh����ߢfH.Fy���3�?��Z���]*%vf�l	_l���ÅI�4�]r��H5��O�K����њ"�@Y���ݜ4K���@�w���y")fm.92�Ⰱc���������3��T_��� eu�Z?���������t�CY��%�) �BM��^!`��a"��l�}���	��Y�?{P�D��.��,)��{�h&�WIA�Hݚp�U�nw�d+02�1�y�!*��6',5X���!�2<�b ��2ܯk��n�k�����)�D}_�Q 6ns.���$!�@i�j8D�*	"Q ��	�HA:e{A�D�5a����Z� "�=��A���,T#L��V`&ִ�Y�Ԡ��G�O�e%�U	IQ�����K����Yg�u�Yp�Rp�4,����,.�5Y��b��V�y�D5 �:��4Q�qF���;�F-L�u$v=�� ��6�B_Dއ��H���eH�(C	(�Yd}�\dV.���h?�����9�@!��!��C�?A*��^��9�| ��w����^R�������/v�ucW~= 3�*CNn4�����%г�f_��@��ԵV��1}�hT@  /��@ ����IaДbT�~ߩr���\��8� �N2�����@YJ�)	u�|:$�7m�+Jc���\qOd�eK�Y-�Vh��Ƕ�'5~�Y�X�ά��zD_�;�Z7k�M$ۼ�-CTa��������;���ى��?W��E�r�L'��%��9^ ��Ӧ�؀����`lg� �Y@?��h*@(�� L\��J�R�f��檫=�p6��&�Q�/Ƥ ���R�:Z�"(zC�Z���_l8�����D��x�a�e@����7��_Q�c<�QBuڰhC�B��*sd`'/og���/���7�O�JN�\~w�]"Z���4��s2T}�����QBX@&�u �(�H&"5� 	"��
�       Q�5PB`(�"�@n��\88^2L�D�3�2�W������ �  �X�(R���hT\D���>       4 `� 5���-�Á��, >S�s�d�5�W���c=X�Bn�9c�d�� ��7����L��'��X�>iVʷ��W�[kxi���,2&��mk��p!���A�.�.�0$+��	%���8�Dǘxd�ۍb���\�� �W�θ��u�|u ��`��.NRPF��$r���h(�s�HDyk`�K{�/ !D ��kRg�Eز��-Ώ��v`w�ݙy�l�K������$�� @=�\xh�*�z�<� !DE�%Ab�֖�H�Y�a`2� `���7��(c�y1�M&����o���z^�f����Y�a���	뚙(Vj@��I�R�`4�v�A^7Y#5�"B\
\����@h:���N �nҞ��H�d��E��0A@A��BqF(Y���b�.f�!m�DU�Y	������	I�F7�;KI�^�����#g���,8!�a �&f�*�/��LVw��XƢ�$_��S J.��b�[�դ63�%J�@BRa5ӈ��-3'��򆮀NI�.OB��
����a�(lu�Yܪ
�Q��Z�VG��n��c$��ui)߆��q ��T�A!��U� 
�DAK�P�9MA{��� 0U1VH�k�\�+߮�G�.i�K�������,k/M�*�+262{�Kw^����os�j�r�o( ��M*۫����h��F�zP As� cj|���0%���6�d�[����K��*��i�n��o7����Y����+͎h|�iE�?��؉��0��nc�J�UY����j5 � ����ie:�2�����
2;��L����*�g���1�K!c���7%/fz��}�bdUk)��Q���3�X���D�J�$	�� #!2��j�BZH��J��:�	��-�jӌ�*��Ji�KR�hx,C�t!6���)V@��jL� +W\���[3����7�¸Q�dOz�7/28�M`�kn�p�P�9�b{��N��6-(�{��w�YPc����B��O�hB�f2��*���� ��`4$ Tx*vB�p�"�ՠ!�       J6��PN�� � t��0��Ī��@�}�A�
^T�,*�f*��,p*&5�T        0h �1�5���
�#`��"^ ގ�+�vYxE�����t?p(�����5�w��\^����5˕(��W�-�5��TxX�BmynJ�M ��W��m�`�4�Q]�9�"�ǉ�b��g��[�c�i*T�8��<nDja�2�*ohn"RMs��)��r��	F������^W���x����e�
(B�"wߖX1aj �p1��j6r�Ֆ��hy�9H �3O?H�3hnVd����$  ��$&��C�@!7!@�=�P� �#a-y���Z�Д&��0��ŵ%ɵ����E4wu���hl���?��i��"��%�=t|�Ы�K�bB;��5�oj#��G�Fr������u���SMV�M%U��V?[��X-0�+����z_c���DV���̎����m�cm)	�����.�+$
���o���Z��h�\� � �Z��Al� `�6
F�"��G�e&=]WB�H�X�^͆�ե99��_��`s~S���8���TD&�;޾7��:'�R�p]�%M��BÀb%2X�1����{`��qQ��Q�Ϗ�ꥑ8�Г���n��JV�5+*p���$�,	��gC���}�Db���<Y����>}m��,~�9�[���	�B@�n f"qY�D���>3�pF��� R�H�7ȮnpWP� �`4*�  �~  ���l��°	�s��*�ꠢ��j���"�o�N8�E�0G>Q�\}�:W�7�p��;�&p��v:E"�����_�ٓ�mi�5�>)]|;����UѺ@��Q�6T��sS �f�V\TN�by:���қ���繂f�U�b���>I��lPf�F)N�w��`Y"w+Xtk�AU	���5BB� M)�"⋀LD[%&r ��+�)J(� ��|\!�\1m{{��!��H8Ӈi��L�X���Q��_�R#S�ҳ�U��Ύ�Jq���We���|D�!)1�_�O��_��	$O���_G��V���1_��r�3�X��08=��N4���� ��I { 4hT( �L��
��"�0P�k�*        	F��A	�b�"� ����\���p Qp�( $�>�@梄���m+X�'�d�"����P$ ՠ!�       �� ǣ T��c   TyҰ��W��#Fx�!r\0�_�!G�~�*����KFx�mtg�B�%�-/_~V�!�SA3�PŇ�?��l�E43��$8-��!�}����Rd*�����Rf�r2=��'�/Ç����۪6���b��W���M-�B��nD�-u�8ϊ�f�P�7�U���1v�3�����f,�GIֽ��i�Q�����;��~o)
���� `��	�~s֋����d6V2�4G��ZQ�"ѡ+�Ry��Bŀ�>W�� p~TТ�^�K�E�فMl�=��/Y	�J_Z̴��+K�Y����+�Z���{���-o�ݧ��Sg�ZǙ݁M�N6kx�:��/s� ���K0�����\�5������LH6�y������?��6�[����Wt����iRI��ާ���'J\k�`������-�i�C\!�p[xP{�J&չ���_����3%���Lm<s�!\7��Kz�� Sb��^[׆A4�;h�u���0�a|@�E�2�v�4S>B�����h3I�ëh�ylY)
E�;���@�����n:Mv��h�mfd��@��Ԛ���$�X ���g�h�j�j��^�b' 6��w;y���ZI(K8�Dd����8����o9ȵ?�c�%a�
��R�Y��VoVVX+M����q��Y<�`dw`Y���� 	DJ�_�P_k��
�&��dt�#��%Q���<�<��s%�t�$��|���gy�sq���t�^��3*�2|�,�Cӻ�YQ��/��g�3Q�E����v�5wDB�bB�B�w8\��kj\	.�#���fX��5��Yp.�?���;�Q�B�i����a��r[�a0��	݁�[�%����	С$bbȅ	�\����"^��FI����b�-;�Fp�$��Yo�S�c�Ah7)�܄�>E�~;���S*_!�h�#˄����5��1n�F��ϣ�o
��Zt�u�1�c=j����B��'�ģU����`��,�J?7���=
�w�i~���d�F��ۯ)D��֘��RFKi}�0��&�<��{@SĴK�;��g� '��.�=���m�����0�e
3$Ts��D||�Zף�z���8�?��Ȟ�1y=J��x�ŷ�^<���z�[�x�.��efI�Kw��Y�{�H�P�ι'���R���hʐ$A�/���D��i̜���Mx郐��&�9�����V������&���o����qF�F( )�X~�oũ��ݏxr�������r�PA{�� �zk�{�V��}�Y�Ѕ��XwE[8��=����3hk��uYb�k�·�6��w<�H�}�N=m�W�]�y�W�>�\��(L���SI��셝��q��L�cl'vvx}��¤�%� W�cgö�ֶXu0�I����(4N�&�P$�چ,�N��Û��Ap���s��w�L�gvU;l�ۺ�hM�k��*��Ό�P��L%ʌ>I��j�W5�Y�TN���_{8�-����*����b�:�I��f��>S���:Y˧R,�c	C��QW�X�{�Z��~`�#�����ԝ�� }i��[�n�o�kW���|!���e�t���Ε���1�O��؞���a��9?2�m���ze*9��-��~f���\t��U�mv)="�*�}���&ˮk�Cѩ��!ϼe���Њ���-u=��O���� .�̺X>C/Ո�'�?$8m�jv�����A������q�Vy����F����s�/��P%�b�iC�厊�!��P��Uj����aq����?��$�aX�������]�'Ӣ��-�b+;���Xd0�H��N號 �b{ڲ+�U�SGhB�%�A�u�;�~�PcލG��X}C+ ����՟��@魬5�0|.ن[@)N���?��j8u;Ίg���1.+�Y�-����y�$>�5o�6ֳ-(aK�d�lXG�ӉCd��RVM�3߁TϏ�zIB�4�8��m\'��^?��:<�
��Ha�v�)��x�L�r-S���k/x��$�R�~;�H�:(��:���Z�#f	gn�n����ơm��L��\O9�AX)�ýl���D_�����{�"�E!��q�)������3��4��6�uv41��e��� �
�]��T��X;y-��-�x���R���c����)]VPu�I���XQ�Z�r?�=��<P)ԙ��Pp���@�?�-�N\ҍ*{ld,)f�V�֌�K�x�M�ϔtnU0uc���A��J�e��̽{��݀]����ا�#��}��Y���."��/�������Ғ���I��=BrBwkG����(��Z�	Mvj���?O���c�ˢ ����[�Č��[A���	l��s2	��ԅ��$�=4�L3c9g.nQ1�#��\�!�η5׌I!�����Ϧ㇉��Z���g��郹��v�s��Z��
A
vC�R�*�l#qk`N����U���~��ܶbV����Q�A��a�!������rtU91�ɣ!�Ƈ�n
2F�a�g.|�pl�9���' $���������P�A�<�#����:QAT� }/��{^��\�`"��W���f�5�ns��V���n�#	�m[Z���(�Q���tԽ8��	`�4�FU4�`!@ٻl��D�?x���HhX���AN�;6��V=�u����\�'>"�}d�4� �@����}{�.��r˄��*n|���-�.�����N5| ��Z������I���#�����=��-�]�_A�������
��?�F��ke+V���I��; �qSJ�93<r�ۘ%�ht&��z/�,t�A*��^�b�r晥�U�M8H��e�RdLz����s�mL`O�F�2G�p�l�_�7<�=��6&�g�Ԉ�Q���fI��"���)K��'�����m�j�O$�Wy|�
�C�淶.�$��o����I���\5&L��/�A�J]qq�^~3Qo�׷C���߇$��zl���3- +?<�i�5aHW��C�?V����W:sh5}�CX�x��X�sd�VR�=���
��]�w<w��l#��(��ի]�\ޘWH���Ҧ^�z56<μ-|���=�Gi?9���������(���Krɍ��'�
.�
��1�"i��2eʢ ��%�4߲����]�æT���2^�bZ�|�s����K�|���Z�_\�d�A0�n4}��2��⟇�a�Y���i��ͅ�\�2���z����C��(x�c��d��	!�EgFӢ3^ړ����-�4sRg������7�m ��bWC�[�y�aą%U,H���+Ҕ�m��i�U!���-���I�E�@b�s���O�Xѱ^\S�-��6�~'�#�|��"���&|�lcqx�lD�GA�o��9]\(���B:"W(H�T�ێ�� +�V�6]��3��¸�m&��r�1�7!�H��wEg���1����!bh"�������h%�'6�!T��\�u]I�Av��V�M��d����0	&�0Hgq*p�4�s�D�6������7�'�)�:ʬB��D#a��7������r�J��P�WgP<
Ci5(�Ȣ�e���~ЮV��9�|����̾#�=�N���yꖫv�vG V'N���Z�h�l����8ȉTgF��,�6}��l/�p�w<PZY��4)�7��B�*�h�QQH��ߦ���X�M�E��asŕ��@y���G j��f��k����hWonA�|ԤcY �t��,4G,QML]�6�����6�I��%s�^?�RS"7cB{�R�Ã��(�#����V�7�0̻q]�V�ʕa��������n>OKde���K-PN�ɡ���#�ѕ��� sY<�W��CX�Dj�K`C�~Y���@�_zNO�V6M^�����IV@����?c���1݊����-,B;�Nc��n�+����䪦�­��^՘�z���m̃_�?�\p��!��;���9���j�7�������PI�X���S3#ȕd�t��ٙ%i��7uh)�D�Niwp��l(�V��7{"��8P�o�[�j�ͫ`b�+���� �5$�<(�K�3�{��B�`��I*�hɀ"/,�V�m.̟H�� �`y�`�畕fX�]���n�P+U`r�����c��Խ��\O��^�Wy�vϣXN��׈:|�u���cc��5�()CO ��N`��a&X�$4KX�N����� w����]��]C��ly���S�Ҫx�28Fv�H�Μ}��H�Um'C=M�5|���P���ΑqDA O�����D�����Î��Q�7O=.�#�ɽ���6R��ڮc=R��#W���m˝de�%Lx���R!q��������s^3�P˥��((�i9&T�.a�>����v�O
l+�[$��tEz�d)ȅf��j�gz�' �L{G����N�i�������3��%i���G�
��Q��������-0x㟐��.��
��0�]Ĝ=Qz���G�/���:���ǰ0�}�$Gl�3.�}�Wr�oy�
O5��!'�*b��F��0v���`Fmr�N�v2�מ�sE?�C9�|�S��1�C%z�`���oe����`E�:}7��D��Ǘ�� p){U��0��a�{\9$����uz�lj,�<���y��R6�B������_oj=@м\|+��h�*H=�g�}C�)���鏡�}�`�K���*K]"�3@Ma1Ǆ� #�q�G@o$̱��і2R'�l��!��� �����H�=�^\{�Ea�ge�Ռ�8��� ���r0É�ք/V<�~R�be�M�����`	ߑ��:vr�Q����䓽t�V$B@���n�J����)�HN����6?>� I��t����_w�T��x"�0$���;��� ��>��?�:�*1jR~"��톄@[�^\�� �H�6K@�qp�}�|�����2#���X�7:|�I���
��C^d�=��� `�+�a�Qz�f���|�i��^�.�����1r̷ �&@F��)�7�ʑ��$����L+HDm�l����{�	�2�߆[	)R㈗���f
U��-�ݣ�z��~��߆Z�E2V�l��d��'�1
��'�B��l�EC�����Y�9JU~���?�V/��'���۪N��Oà�.�u�@����`���H@�,����L�L�B�?p���e9?l�=&�,�-�.�J���1W�(��J_4�q�������T݊�����^��R2��W��Ŋ���b��=$�I�S.���ܳ��NL�KTu���H��X�x��m��Q�d|�D3Q��$͆��i �ۨ�u\M)�֤;�F$9���GQ�Bܑ )�-�L �͘|/��q}� ~(f��o��sc� ��u�"��睹��h��y�.�E��HBo���X�]���鶦fS�����z$�ox���	�±�مb�")�2��̒�ER�L�x�?��M�dSA+T�bPzC@.����r�^D�.���5�{�����z�,�0�'@���o��9���I����HR.kg`[�ϥ�_x�4E��E��ݥ\I���&# qVe��-��V	������'к�]:���g�V�"�<z������|$`���@�s��N��#�4U����hO��8�?���bmm]p�uRD߷���k��5�Yk���s���#͵�xڪh��"9��lp��o>���?%� �U�8���+׭4�Á�ݬl~�ozP�PJ�E�����!�/Q�+�(���Z	���dH�[u��ׅ>�R�XuM����W;�/X����x[:�+�z6Tf�E-�lri��x⡎��� ���o�H��lZ#)+b��!� 2�B�+�@Rr�9.��Ƴ�Շ��Ԗ��X����r���}ET��:v�O��$7[�F�5���E{�� ���l��OC��BE�3���v�fE~�H��K��4?��>SY�:N��W^^�"���SJ }�g�?^|V�I�3J���\~qZS�O�x����0�f�
DQ;��tH�)Ξ}|�MF��I��]����כ��~b�BA�>\_\T�)9����t.�Zw;�����'�-��Y�~��G9y��L~�Vg�]�pj�F~P1�E'�0�|;���d�(;���Ѱe��Clй�\�b�{�3X�8���Y{Mo�8Uńmm���vk�s�W\��XYd�WǵT����;�(�a��tB�܂�"��C���>�H*�懃��K�'6�j�+�
T��S�,���v�N�)K�N�|�� �o~P����k;(�O}�w�����쵤�@'��O���6pn�!Mj���Gy��73�%�m����e:�CjW����1	�C��yw�S��=��i��Ӭ���0�A�9����ɓ��>�-U�o����BK%z�GL�;&^_Z���k4u��:�_��>�O��$�pS:�6��P��,2j�9@5�=�9��qwH�rF���O蕮�Ӑ��~��)���"Fg��o��������m�<peb�tz�V�3A��ݿE�,��ϊ2̈����H�t�k�wxA�� �a���4��gū���pǶ��k��f��Xb~Q�K�T�Q��WNm��埋w�D?|%���|f���(O����#C ��:��]��݆�MY�	Ĳ��p{�
�������>`�G� ͢��*�� � �(-<q}�j�I�-|��x�8��<�o`�0B�x��{څ����D���5�"�ű��mp�����~�k�-#�Aާ��UVE�i�M+5T��,Z��ˠ�S�TQF�oFCQ��w?L���.�%bܬ�3j��J*���R���R5��.���ݏg���2T�od?�Pm	�l���n0k��I���L�n�k�߉9{�1;����kJ�d������):ȦgR��\�����7�k�[����B0J���\��ߗx��k��L��A����Ցͩ�����=d�\��]"[�
�e�#q���%X9�T45w��.g�j��]o#9��=\�:��H����5 ��dG��z�t�X�p��c�_�5���R�`�Jr���aԽ;������}��r��D`{�B1: sM9��x!�:ȕ��a��z�ԓ��/�����.&�F<˂w������'���1���)
�w�=�8�Xbʙ0�������a��-iO�u� ~�J'">��J�ǔ�ň!x$7wF<KY�\�	�����m��uy9(<��8<�Zǘ�d������kv�Gf3�?���N��4��/O��j��y�Y�gǛ8w!�$�9c�oi'�/�a�	0`�^)`��V�ׇ������\���h��Cp�@��^a�ɕ[=^�/�1�y���p9�k$��U"b��i�|�Ʊ���Y�lx�%��P���c�lߡPR���T1(�5|���:\#R�<Wݏ����vx{p+$I�y��O�k�G��a�w����(��Z�"�aJ��P�]�B3�N��}Y�ċp]7#��-�ίa5E5�M�:L�"�_���+H���>K�OS����xg;Q3�V�X0�����,{0��ZP�f��3K�R��k� ��N�I���=ju-O��]T�����J�Kx5�i{ծ>�>W,�UR�p#:;��@�-�Q@���N+��!�6gT�j��2S���r�6x9G����V$7�2������Ng�����|3L@9&fg�5Y��U��?��)1C��u��/�Va�J�e�Q$�Kd�9��(Ψ�3��7�ꢥf_���0.9���]�ۘ�ҎP��)�e�s�~��B�lP�� ft-���#���k�A�T�_�.�a�L��h� ��R�{ݦZ~�$=j��u21��5_j�I��C�CÙ�N��۱y%�c���6�\��"���0�3�r!9�ݵi�y����2v��T��-�e,�A��5�F>֡��xSbcײ�S��Ot�g.��]�G[.��������+�o�$��������?����E��S��F��H^�oX~[M�j��D #��P�I[����YG'����m�FNW��D{���ۏ&�\��?��3M���r]|����z�gt��ll� �3"�g���՝U��YQ��e�Y�W�A�j�v0���A��Q,��7�))j�D$��Z��UD�p��DË�z}��v�:k.�3z�}�
�QƊ4X�`BΏ>|K=��֟`�|
��^Z�w��Ad��ͱ��~'�ۺ爓0,�[���޻�|��@��WN_Ϫr���C��X�|��N#J��a
\�ɨ ��A+b�Z���b�q��A��z^��kJ'�/ �c��sш��z�|>�A�}�]M�~����)XW��x����fʨ%W�蒿�r">A�jC�3'0�|y�*�ai"�|�?��8��ٜdL�����*͐�}Η>Ȗ�Vk����iD4^�S��?�	LQ*xy�O�O��Ծ������kӂc�Z^Ţ2v�ݢ}*\:�ڛ����9��.��˄fy �a����-�DS1����A&�H�c�V "n�(ױ"yk��iT�n��j5L
O���>�w�Յ�[v�q��[�<q�sϓ��?n��<3M`=�D��ޏ��|�|w���*�(;�S<;�V�n�s�!0�t���4[X�m�]n�p:�.*�^��y?`]t)�ă��R~3\�����>xˇ�7��.e"�$Ap�V���8�j@��_��0�[`ľG��2�N��zqu�	�F��j|w+h�p�(_a�vd��M��J��o��n��Z�^r��,�{(>��65�����^��7K�,�lRAO�6A�I午J�R+p��E=��&��0Lq�;�y��K3"�v<�a�v@<�a�S��˳��?	�7��S���G_+-LP������U�B*,���a����2<�p$�kgVd
�O�w�-�])ô��j����dx �ݚg�%/,q��}�=�.�8O������O#ĕ ���� ��!OۃU1��.�O��S�`��k���)��\z�(�tT�Y,d��+�櫜
�f�T���2?���R������̬}*��L���m��%{S8�d�������˦8-g��;�H�F�u�f&����ï�
>�ij0z5ngc�(��s��&H�;�,2;�����%Q���G�G��W�����_�K��=e1��:���}��Ћ��?�]p�8c?]�é��T��k���D X|�aL|վ���s�����݈�Z�[?�/V�=8O�m��.�r�́���I�a���sW/���t�t~>��I"�g f���b���&�k�	;���
�ˡ���a��Ɔ}���Ҍa��
��m���Ԁ��J|x��B覎]OU��^l�D�ْ�QfB��V%���vS}��k��q���!}��AG���%(�oq�b�/%D�֫$�]߉�G��������5�m��V��*�Br�wU� �{b3 ��fֲN�ǧ� .Sw�x}��z6���X�k��t�EX�� Ǫv��G�?��v��o������}zR9Ef%I��ћɍ�
��k~)$���kh�O'Z`���ޢ�`�o�B������T,����V��1��M�݌[O�.L����.�Θi���.�D���.>a�N��4P�B7�BG
�-R	���wO��<�V��+0Al�u�ֽ��	] w/�]�n�O�����N3�
�k��4&8�,t.Hۨ���p�A�Gy�h�����KLn�=��l���z��� \��U�����������}'��\�N(�PH���"p�Gd[ߺV����q�zKr�@��$����nS��)�-e�z�[d��K���7�)�1}�L�ɬ���Gc�����ez�H��=I��� ?�y���9��m�5F�^���@�g�E�a�ن��+GH0���"f,JE@�l�=-o���u_�K�J*ڙ�o�x��}^���R���Pji��Ѐ���e�k���q�OC�6�.�2<�����(��7�o\�>�l����B�Q9�Ij��!�!.B6~�R�����$�� (7 �pyk����R���_��n_TI��?�N�vN��*ke:Ͳ�B��)7~`خF?c����eU��v)�*M,>˥=1�����~e5�(�#�K7��7��^�7�v0��Y��4a�h�%s;�m��R��_)?�O,fbTj���~��Ub6�O<0������z����"�{:.�?i6d�C�)�af	�*�%/����I�C�?�U��=�_hi��ΣQe������$��]7}g፦���O-E��b���n[�$1h�����vZ��8�@��:L�����9{>4V��u�x�ԧ{�[�8�Kn�+�+O�K=�h�4 .���]�N��c8�GR� <J�\�|����b������$��38���;�D�t����Wl�.�Lo�Os�.{.�e�y4)TB0�U�N����M�[�����~��M�ۗ�Ð��4k�<���	��nq�?��,,?�O��x��. ?m�(w�����fE(���`B�tT:�㑮���񮴴*쟐`�1W�?n ��3t�n�B)
�����	G����jت��{��9�e��U3K�>����͚a�3�Wv�j]D�F��-qm�6�1�B��w���I!d,��K2<.Э9���.�zXq8�i�56�/��p��|B��9<iɰ�i5�$�v/�����FW�	��:j{���Rr.ݑ�������l6w�����Q8��s�K�׌��Z0�ˍ�� n�,5��-�k!a����9s��u���6�~���o�-=�Q!���Pɯx��!�\CL����.-4��޷o�o�p0��0h �wXOA�.�kh.q=���z�XoS��]�/bPދ�yt��^k��P?�1��A��bE�n~�,D.��J�fi[SK��B� �Lӝ�޽���+	qg����͘f�&��ܸ���AE/ZB�ð	!v7]=U���-h�f��J�v)�i�I˯C�ZlY.�&x���13lHx��%�Γ��](�)䤷�!��v�b�<��.���_���x�Nφ��*�<��l�a2�@�g�7�M=�:���M��;ț7_Ql��ۖ��F�Θ�������v�f����B�=��K\�����m,2����jDQ���e�����Ef�����<=@�죯���X3Cb �P��c�=)�W6��οdS_V{���>>p��ޱ*Q�{�jZ5��xh����Su/+0f|�T��y�㌏�r���¸��Q�]H���Z��P����s�nE?��0�7	W�/�8�1ZN+
Կj��|�=���U{�LkÊ���e%��x "/�O�F�
���5Z�?�*t��(�CENS	DF��0�[��<���Z�GN�����w��q��ɄˎM۹��Q�����4T�^U���V8t�N;%&���� ��]OC P�D� . VT���%�z�<0�ў�]�w��EW0�D14G�CF�
7�֎��*g�S�D��v�a~����!����6EF�*q�%C��e�$������n�	j�i�� ��%N+��I�=.`��ū�j�,X)7����|��Hp�J���֣[/8���~�w$�D��b���c��� ��U1�D��P/�<^�H�KK!8�o=���qLcZBA9ϻ��Q�����%1mt�~2��/�;������E�R߹��@�����=;�r>�|b� I�D��$�K�Ylp��&��I ��?��5j5	�2gk0R?3��_��z������Y�z�!V^���2;0�y�V�v%Qj/�s&�%��K�ZN�h¹���$CcY�ߟo&s�WU�3L��L������)K����{�P|2��Xk2��5�M�8���o�\�\HS��G�fE�Q�h$��18�vgN9��\[�y���W�O����I��A�w$�yx
f�
������+��o�+�x.:������$j����S�Ryʑ_��K���W���ŅY�XzG[N�f�"��n{t7������Gt���-S+k��y�O�S��	�L�z��W�S߁5�I��2>[�1Ξj�_�������`U�;_�]��8F���{z�e�^��ȒdUg���?'9w�n�L�Ew�%,���Y5�'|&�g��^����4�r���ǎ=V^:�	�.Y�dv��gf/�9��wD"�Q�.��7���qjV�@!�T<K�y�y����ܗЌG/����L`I-]�٦
���i\���f*����M���T��m����Z��
O�=��ʗ��ZĔ���i4	$y���>H��R�_gG����%�e��҉�4����Q��M]ũ����$&�bm�x|ol��&&q��x߸1N�Y�GUZ�n��'vh��>s8%�Rň��Wɸ��IL�����	 ��L*da n���o���ଲ�z3�>�"W���^N|�xH�H��I��	�88k�*kTL�Zᵏ��]����!�>M�m���Qg��#�fJ/��<��0}k�Q�55�K��)���������m��U����1�EUP��o�7X ���u��5𥪧�"����+ ;�&��3K&��Q�٭�5�'	Bj�D�Իx���G����0���J�6�o��s��fN�i�Q�n���~g��ǵ�C���ky�{B��o���a��F�Y���!&e�Q�&֌w�B�7�i\j1��>I�/������lCx���N)��Mo�������>�2�k��P�e���K)�BU5��x}�Z`�?8W��,E֦�s�P¨0�l�w�3�@ i&E��|�כR��3����#�X��k�1�?qo�/�aٟ�h�7	��'7Q��e��8ʇ|�Pu��E�n�m��[��������
�_Eޞ�����ez���s~�/�Dx�&*๓<��yr���Ώ 6;�|��f��P��/����R|_Wg9�-�w<�p�������>�7O�p'L��x�3�?B����Z�����q�n��b��VI@��z�Bt�Q&n�|Y�U���Y�ܛsF`Lz��J�mkdL�6%��R�$����E���ۘ��ylے��GdD�x��f����m�ى��o�<���"��q0Mi iOd�A
Ÿ�����vZ����m4 �^`+�����'k�����Tԅ�Ĩ��{���-��hP���x����^ӿ��h+u�� �R�6������mS�W��n�{/5�Uk��U�f�Uo2O�yK��u�%���t����Pǜ�nLN�r%��o*<ߥdI����i�A&Uu~Tw/�g�	}\�Gp���M��<OT"%L�Q���R1Ճ��Gӿ���L�	�����C�S��lF<t�.$O!}Pkj��0S�SZ2d��`�K�Sg��,G�Z���2�PS�*�O���Gᆥ���s�N�������ϙ�G���
�Q)�㓙�D�7���Nã[�[�F���lb]D���7}��@��u�ܵ���ev[A2-��o����p�q������S���z�2�;��c���A�(���lvEP�[n�������ć\�-*�Q�_j7X%�[�'��TO��j2,� Ɯ�t2V#�%��ټ��e��?ysNl��H�
n2?�`´�S.��PAXB�o$��͍��5䥕�c��.8�����M�g�<Y��.+X�w���s���:�aH��b	bk����O`^��D�2�	AJ�!����7�W3Q${�X(*��r�I���T����VV��=R�#q>+�m��^Cʻ������r���"�"w���坫�����u�^��V��}��X�Y�V[>T�]��5���o�*�{�BgaM��$=qVj�!����~:����/
�N�g��P�EO�A���J��=�-�v��� ��	�@1��^ r�#��W{�g6��{{-��3$8SL�ӧ1po�y|��Zq��jћC���8��N�I��=-���8pv�����ۡ�>�6)A�QCY:��`�=���ܤ�6�$��r7�f��~� �P�+�����]�~r�Jh=!��O���C�%@G�K6Ű٫�ҝ-��G��&�8���'����
q{9�;x�eb�*Kb>�.�:����\+2Q��|�r��{D��,_~2f��$�?�؀����ķ���5y��ᶾ,�!�n���D7���hr���gh&#�R��a�OF����yhi{�Uⶀ� �ĩ{|*�JW]	��亚���9(lH�?�$�-��ާ�&��$���+N$j��[�h�L��6l��KRo_��g�v�����e�z+N�����|4�{AU�W����giT��d�|��8f�wf#[�9,)�k�+��n#	����y�u���E�U �8��x��*IL�y���	� SMM��!H����n�Ix>���A��r����v�>-��˫�_ƍKZ���t>�ԫȔ��K�hE�)���kHުZI�9����Tz�~f���u���ЗW�n	���-RUUXO���v�!���Rե�e�Zj�c���X����A����k��'��Zpy�9	���WF�(�#[��N#�ܭ�§I���䡩D70�ߨ�+�?j0�(�:pB���gke%Ve�k{����)TBK��ϐp�K�j�?��V�9xM��8�A�B/����z�֪>~=��	7�%30Z�a&�bUc�'�'�^=c�û�bȆ	`La�����*z%W����%e��1q�̿ǘ�4�搔z�X�_�1�~˸M��c��G�w�P2O��U/���k��0�Sz�&������(L�-�{4��?Λ^g�#��u�6��ůIT���7���t.��9�f�/�5�敐zr?{��x�y�Ӏ�s��籇�ͻ;FN0]�%3�6�=?KKsL#����{��	D���v��j�QN���<�Y���ס8��#�M��Ƈ�Փ�e5��L`c�ҍ����k�̄��Gr�߯��S���G�u���I��ǞxQ+�����ar:������Yc�@ݕ��?�����Ȁ�ߝKk)i��v����d@F7H	�u��yY=Z�6���i)'FAU`�P��˖���2��8)��n:�/n��m6�c�dU*�!�F�a8��ĥ�(�84�p�ǣb@�������@�\�-)�ǿYDw@&��AuB�L{�L������\n�}���geܥvgD}!!/�g����h���qIj�x*d�5�8ۣ�3�Τ>B��ѝB�Rئ<$�2�/ ��P;aL$�8�
��pW����.�V������ҵ����K������@�a���,ا�d�(o�V`��0F�܆��T���&WiBbm@���=�M~���;b�ҁ܂�,��D9�-ɐ��F%d�H<9k=��#&nD�ܠ�6y ���Aȶ�]ƹ����?�#9��멂�
sN�7�}^�=@"|��n�����I�)�|�7Q�:s���xi���u0a4����ℊW��n�,���y2� �E�(S�4�3��h�8��D��+�E��T�:��r�l�P� �cXJ�P�1/bx��8�뽃iqli���o�o��t`�I�?���=&����_���`c�:*G���ɓ�!����0�r[����>&
Z�w-�Uùx��9�vr��/{a8G�K��}MNJ�	T$?v{J��U9'���G-�/�$����F��l� �0�{��$�hF i�|?c�p ɤ��x����l┕��	��z�g�Y���~��d���%��[ M������>��J�;���5��X'�2fk�@��+������q^MǤ�TC�L���Z���2�Q���R���Q��\�Q�������Y�8b,��A�޹�$�#>����]��a��ܸ̮y?���9�����͓Q
"�8�S����y��N�9Hn���x����9�$.�i�R 7e`�o+��ϊ���zf3ZDS`��(�h�H0��Ճ����XJmUm]�b&���	r2zR\_���D}��>ԗ(�#�bL��v�!Q�)��Y�PA��M�c��hrS���n�77o:��F� U$$z,UFbaͲ辬���2Y�V���1z�C�݀r="qPl51Tn���3\�-�����I����&@7��UT�JS�ZA��3�<���ѐ��-Ve�C��;���G�芌Xb�����{`R��k���������n�$��J�Љ���K#��䒢�z#��Cw�^�� Kow�KI(3u��G��3Y�] d>�(`<_���Lc�t��|?���ң�&|�F�-a}Q&Ԧ�f�O��z��ZUHq�~e��0�?��v��Bz,pJV(���=�ܬ)@��N�|_A�p��r4�֒���$?E]����)	X��XLݭa�HB�/J@. wg�!)�<Y:Ķm�H8����R�i� 9�2˅��M�Hp� w��e���3�W��(�Kh����<$�+����t�ok�p��������+��6$�{��o�g#֘�B���.-�Y�ߎ���N�:b����Yv����	��P�	�����X�Qo�Qn9L�*�%	_���W���1*i����R�1��v�U�y̶e@���͍� ӱ�1��4NtL�-��b�J�Hwn�C���xd{T����qYx2?��3M�S֝0�f�hD�j�
J���B�����F�Oqd��(�`5Fi'1���"�{�6��#���q(<�<8�C��Re��*N[i"��5�=�T8A���Ů��n��h
�1+?!ܣ�7��l]ٓ�
o�Ӂ+�1��FE�����<�]h	Ir'��ʙ�+`��~�N�j,�%On�S����o�8֞�0�����q��t��g:�������	�J��ES):���#��f^�/n��[]dK�N;���t��C  ���b}4M5}d~.:zC�jl�F�N���d�Ś��V<<��Ek�B"?��F��e��!�pJ�q
��0�mϯ�)�^t}�kqI#����1�!�n�F\�GzJs �\������\���1�욯����+$F�O�0_��d���-m���휅�n�;�y�����j_��0\k����P�[Q�*x� �ی+| 
��HW�5�DP�p%d���S�.�(�ӾR�W �G�mg�����;��d��ar����-�7� {���������S��ӓp���b H�;�}�O��!Vڼ�,�]E�Rc� G� ft�5!1B�`��?�6�c���h܉~�&Q�ꀰ��`��	��.9�'����e��d��ι�y�J�ԗʉ�5��)o��p����Yv��c��W<�w��x��9��X�fo\$��xC��.�y���cu���
l��(I�3r�2�~#pr���A�d��!,0O���gڧR���u���[E��r�����J�o�`�m<^䘁�^(dd��V��~�=�VR�'��]V�^E����{�����%�XxE����#
6���oD̏�$Ҏ��Q�?)C� ����h]����.<<��l�?�It�&ю�'��{G-'�����5HJ�fA83��9Ȧ|S�%75��bh�tV��N�!� ��y(~rՁ�B�����:�3R��eM"15����}�'���G��U^%]a�Q��.ԃQ@�a1*�(OQ`s��T�
�#����1�QP
k�6��L��a��� #����?g6qڌ�˅3v&(�w	L����D�c1�7�����@�M�٠�ȸ���:�ڗ::�� ��'q�孆��Z�����[���ԧ�q+H��.�f�G.��� u"�6D�z24�x��`PM�67Yu����N����z�m�6�CY���!+�����q�"�pV
�H�yV#�V�z��Hz����v�6	ʎ����q�B�7p5�"ض�~�x�_ZҲ�����7E��ϔ��{8�N��B�������A6�U�(�<C;�l�P��Av�4�A*�5��rZM��.���P�B|�p�`���ZsQ��������*��b>��(q?���滨��2~?Ū������'ڇq�L�{�������~�������vs���ƲRVD�}{1ũ�>1QY	���wQ��i������q�����sa��rt�v���0�Τ2���g���T�?�N]U'/)�h��,p�%�l5�ic%w�e*�����3i���R[ejn�3Eg�DɅI�l2q�7�m�6�˺?�RCt��u�f���1�	���bTr`|�Em \1I�>m�t2�^kY���֤)����"N��|1��7X���x���}R�.�'@hQ)%]nc�,K��w��mC�m���Lq6b܀n�1?��>�`�F�ޤ�$>�F֗�ռ�;���j��[�oу�XO�؝�&� =[��2��ƦU�w����C��#[��SsI�4if#R���P/�������*1k�Ӡmk��^t
*���Z}sB�Z&�����=�y9!���C�8�6Z�B#��ۋ(�L˛��`C�Ÿ|����Z�λ��A̺;�E�t��h��Lo��~�����"���01i<�a�c7O.�<w�}��mk��7y��c܃��]#?��H��"�e�y2�:�+��g�����5FoSx9̤���Mc����=k+�'��y�Q�*�Z���r�Oq~2qY!��<�[��e�\�eP�rZW�A�<O��n�_��g��p��'���4�۷����\�g�5fǍ�&�U�a�Q3���@�&�	ʍݶ`�ӄ\�>{��
�Z���g��֋l�� qD��}����tH4/���\h����{�$��g/>�����SH�߯�������b�60"�� ���N@�u��h�X&KGHW���Xα%y��t`��V��)��B�l�1zxʍۻT�k2�dQ ��]���(�}[��̮'\�V�p������e҂8:�5���#�D0g������,�TVM���JR�s2�ڵ����`1̳�Gݣ/�L����k�H:��_�YU��
�֌�\h� `�	��Qh e��,�qZ�4F�)mmc�\� � x�iJ��=Kpȵ~י�����8�����q\>S �<i�}楆3�_�`��z)ҙ=���Iy�ܡ�2�dϙ��#˵����D����;���,�o�[A��
!
�r�S7]���z!���R��p��8��t-mh�Wx�S��(m�%�(�2U�e@�����N}���l��K,��q�|)�I�v=���Ec%�U{M�}��gZ��6��:�"��u�~	�|H���k��Ҕ�p6��o%;R�ĕ�ܨ�XS5UQLWU���ru��R��bSk�'�3�:�M|^�W�-bv����e�N$�v�͗P-.�*T�&�����D������(a�8�uc��:�܀��Ѹq�����p��T�ݟ|�(�̠�ͷ!�싖~����~�vX3xc������P�j�)�0��^��vx�'G<O������+X4F�No���L���lN��#9�df���������+��k���ni��Gr��7[��j3"q��p�B$(��)���10B��6��e֠6M�R$�Fu�#G�t:YR/��!��`�������PF7��Mdj=�H�a̷���\�7G5�43�ȁP��Ib�ſ,�~���4��(����[i�[�a��t%g��.��l�>�A�4fɌ铇+�5������yZ���<2H��s`/���'K9N��A`A*��4d�ܴ}�3ڡ������oY�GtE�s��7��k�1A��l"P"U����V$��頰��b*�u̠)R���5�vW�r]eL���ز��a�=�ԥ2p�@[$��ݬRB�����AW��|0p�g7Z=��68�w��Lz�yt���a��_�9���,�4߶괰��ď$`���zk$���h|�g<d�:�����/L̤�D�{�ߑ���!mWB �~q�5��3aG~/�W��Ѝpd�&=�y�g)������bz�N񨄸5$�������6��q^�b�Q3��a5�a���N�����s�DP�
�*� &�(�p{O��Ꝗ��u���P[)	��YI�2�bYv�=wE��I� >n!��y;������8���2���S�16�v�<K��ܘ��Y�=o|���Ѵ���?�Q�Y]�����z��h�6�[�H�=k�����l�ot�z _��K*�������>���S����úb�Z�U��!k��n�v�q��v��w�J�=�i�ɡ��	O��g��(��ͳ&%�>�K��D}�$D��i��r�Ȥ	%7DYiѠ�/j�4�ͅ�����2e�Ғ�+1���-��"�%���at���9��H>�Gz���<CIS�qjR�qN�9C@V��F���&ӥr+�7�����ȰRT&lz����h@�5+���'��L-��]Y�%�'���Z�����/��{��J��H��x�q,���U���$���|N�0g=� Kq9��>#��G���f�w2b������g�$�z6ܧ�?�"�曼�}�f+M<�}����0 �1 �ڒ�um�e�q�;ﳂ�-��M�_^ȫ�9҈av��S�X�
b�._w�������;?�5=E�E��5�����HL��#��R��ad*�V"V��IG���#h~��z�÷MG;�����fr=#	�u�
u#�~�x����@��g��O� /	��C��D�>�<!�׋�Zyd�u Ί����FQ?N͋�b��+�_�� Ԅ�
����W)n8�M*���:L��9�.L�0��9c�Y�ʝ��G��	3Ъ�Hւ������+[S��D��(�0�h�W�Π6^�!4!8+v>R�l఑+�4���:�D�����b����F���c��b�P��{s!��m���Kld Hp�aZ�Ń��6�cU@Ij0^���<P�%ކ�yk�ý$4���nq�����%^ T�&�AA��=��^��usVs��8��8f�%���X�w<9��w�Ct��x�a�N�&T��s�u� ����O�8 �EwQk�2k�����p�T��(pY�Ƭ�ݠA
r�/�УSy�  q�'RW�f)"�ؼBT����i�Dd �řo�,�F��i��9�_\e)�j�Z�2�%���YOU
E��́Dnǋ+V���8�%,76z�i��vJG
����?:�Ol�)�(j�[�!4fc.0	c��q�8�ʹ0��?� �q��TΉNha�nS��5��c����s:����[�[�B�J�^2Q1���[	�q֝���RI[b�)ܩ!�.z'�	_����=��2>S�h9������A���C C��9��t�
	u`�����̻��8~��5�(PpH�}-u������WL��q��6�Kf�'Ga�Ԍ�[��@����/��#�0�3+�W��
��V��57�1{;z�#��Ȟ6�:iC�T��o�V��>�6�
/ĝ�h25��
[�,�x���gX<�0Ġ������[ ˳uZ\����}�&͹��_����nUګN����K\�o-���C��@�|e��[��:s6_�٭�E�׳�|M���EW���겟��Z	�
�å���9����#�N�s�r��U�$��I���p�����S�X7=��/�bj�^V��y�.(�6���� �Hԋ��s"dؖ���8"�l���v�^��˸��.8�A���vL�)ic��M<c@�N��q��
w��	j��r#bY�.�Q�����m������P�N�|��p�`G����㉻�]���
��x�3:=_�l(�aS���?�Iu5�����ҘzF[�(����х`3+��F�i��O��f*<������BIS�p�1�Ӧ�|�C�z g�eΡ ����]��9�E��;J���ߏv�[~j�97� J|�6N��҅.A�%�� �@6�/�c�ߢ1��N���=w���o�� �>C,�ъ dȷ_~;U�SjF�A�=a.�͓��m�G�lL�[Q����c$/`�ߤ�b$rc�]�?��݌�e�I%8^���[�K�'�u��+�&GM�Z����S��З��("���Iz�s08�g��������
lJ���
����7�0�T8��U������v
�7�!IحSd}s�ըv�a@�,�l��c���לC �b�ʧ��,K�' q�g�
qvl"���&���l��N�ܮc0�MEݚ�s���Z��nQ{&>��W���ݠ�����D$�
6Q�^M��,��M/=_�{�^��H<�R�ET��{8U�w�U=2[�T�Ԫ����V�:ȑ(�C��/�Z�b<Q��2����ca�>IgA&xf�f���_U�P���pF�hGdece&^�G��8�ر��\1���I?��jKs٫}�h���A�����y.X��:c�9.��A���D\�6��>!�6�3?;��
PL$����y���L�LVh3��|Ӕ�<�z�92�e�V���~�1ѹ��l�����3���Y�x������f����=cfAƢ���ց�	�h�|G���b�cTI0'�
�ٽ�������/'VQbVz�������`�_���9�3F����K)�1[��M��Tr|�)Td#k�9q��C����'��)���wݾ�:��g���Z�ٽ]�Q++����˸���T��ױJsԭ��u������k�HE�[&���4͡E��N���jE?��mP�͎q�A&�̵�٫3�g~u�/�)xj�����@��+	����+p_��o��
���\���FG�6S4��%���L�����#@)z�0�d�T�SH���E�2Z���0V��qpb\�l�ӡ��7�!4h�9�?S�WO[�����@���/��599������c'%翔���4�*���}���w�,���w˖N\숚�	2���$6��ܢ;\�Ȳ��L����Q660�
-��I;�I|��G���E��&p
{ײ��m�;���&Ii�?���vO*O@��V(캚P�C�����}�V�~�bǹ�0�Od�.9�N.V�����>�}x��H�T�2�����A����$�-k6��H2�0��@Z��Ո��*��x�~|�k�N[Qjs`E����6���g�Ϟ4;�PR��K��1���d�Rh��׶ 7��E�ם��ѿ�q[Lv4��O,J��#��� �dU�9~r �R�-���x���p��B�yNS��5�Q8�@v ��'�#� ��(����8��膤`����A�؁!�co�xTw��@6Αse�"	j|�\����d��~��s@�����ҟr|��aC��ʎ��,P"�^�ɏv��)ί���N�[XhTêW��m%��b��m\�RQ���Y�C�c:T��WȄ��n&�bq����2]���NZ7I*p����J�T�һUfd#O�=vx�*4q$���N���'�"�)�D�{2si�i#
G�d=��l���:�<��.��+����e4�F����BZ����p3��a���N�Q ��f�rk�k	{9`L�x^�!? P W_�N�>ʀ�ݟ��Ĳv�
$��Yt���H���R�8 +�C���n��nH�O%�է��Faځx$�2��%<�c�Tg���eq�����U�ӣ*������F~#��A�DF,>�����paf-��Ḷ��3�$#�I�cp�=�-w�$9Іi�iF䆭s9���C��R�O�C�����(å�`�qQ:����k�"���b,<Nw3��w$���q�+_ƞ������SsG��к��6�v���f)�ӱ��
s ����lf.37m�7'X�ŕ��b�;���k����(�ٻ-�i簙Q6%6!��s�N�� ��"5?؎�V��\]�K�>�pf� }�z��b���I���Rz�s!��P�Q.rv�֖ԥn`\Kȡ������P�׸:��]������T���Z6W���Tn��&3c�x�xH��CtC�*���= ��Ѥ�d��:��65��7xW��|�'�����u��C
�b��Q"� æ�'�R�ZD�!c}�3@�ܭ��v��䜦G���W���q��7�I3�ڷZ(�д̺%��d! ��H,yjz������10'W ��wG���c)��$�n��a�K"��a��TV��������-���a��Ơ�{Zŀ'�V��x���(�@�C� S�}QS��dD�,s{Q�y�'��~��"M'I?��M��?����U�������M��I�~jתT�ӕ���N�:��bDּ��;�����[H�m��F�1�>��&1��9��o�a���ı؋�kn����D�R�ΐ@+�EN�����Њ�,`��!	�V��L4ҶG�1?�9[򸜧���rshp�?n����[S�r�C	�gt;�����	�=$��D�Yj���#���#'�I�c��cp[��%H���'��+��qm.��=�i����N2�d�A-WL��]oU9�� ����o��b��Vw��p����j:%\�J*�p��1e�b��Q*�j+V!�jL�_ H���%��r�)��y��/7-�nW@��r�sz�@�r� 5@w�bM����V�Ȕ'�١�8ɰ#L��ˑ�zbY�
	�9�V�/<�Y������qM-S�%vu�הΒJ���T�*���#8&5���S�'�uQ���Wd��ױ�D+�ރmm���)�2!>ۇlv�o8q�_V�6�D����vъR��������l�X޴�]��)*��n'T/�3���r�F����'������;�ʹ�puy���ߌ3�j��`>�"F����WP\�n�TWhZ|��M��Ӕ�EO+!���}�����PgC��׎h1�7AȸM�W���f��F����?Zw����^��=o���R�0S�q�����k��2�d]�t�����(�����/�B�u2���$�=��%9�v#��언�*�0,���s`�FMK�����Y�Fj��p[R�^bNL��Ư���xȥ*+��w�`%��H�ʊ����VD�+��7"�Jqa��,�2��	��zУLضw�3��wa�k7�uV0�q0�4j���X�us	a~�@�a-����8��77g-�gu<��k�=k���{L%��w]=A�-�\=����C59����B��O8��w�rt�DI�	�O�h���P@��k)�}�uAnQ%��*w\��zd����2����+��7���ai��Õ�N��/%��&�X9-�o�\[]�{*a�8���+���p
�ͬ�����a]��4��tm���r�F�{2�a�l��~��d
\h���J�r����<�_�n��塛�tjlN=�L�Y�/�����g�ۭ��Ȕ��Ry��|��z�Z�,,����Aae�I� �����˥ڷ���Eo�Pf��<Us���!A�Ȇĥ�?p���#B/���bd<�  �ڠ9�(�m��y"wZ`'y@��k������h��ܒa�Ғ6�"�����.{�B��)y��ΊGhv��@Y�%8�[oG.�NL�_��Ec�ch׳�RCt���T�>���&R��{9�L��3�.��t?�Y���s��q܀	Xk�����ۣ���Muk���@I/����6��uZ�׷�pY΁��;��j	�`�u/��p���/�٥3���-�Kت�=�Ok&dP�X8@�vt9� �;&�@(5U�7i�1�PR|�[aط$ݴ{�laX��;�?@��^��} ˃���#D�WI��L>�i;7<5M�/!bXI�k�h��R�����Y�Ty2p��x�D��o:��>�v�k�)�Q�n����1�I?Z��L¶�д>qJ:�c��Y_E�PN���� �(ΐи�H�A*��-Φ_��k�Y�h���/@�JP@�K܁�  � �F�U�$B��ꗆ���V'd{?�I	�1����^�Npd���֖��@����pa������ZIw�nc��'�6��uP�G�g�Yx�g���(�`��!��⦜����J���섹����FBG�-�]����l��%W���x���K��bU���r�=)�s�A����mm��z]Ķb'/Nb�8t��:�b�ᚊ�� �8k��JhO,1�;�+$q�+�c"?�R����
���5�D{��-�V�||'��<F���1[Xg\�"MK��v�u�����s�&�7��WsN�Ss���B>�y��zU�-3q���L&y�4YQ2?�϶�P�{CR��&]��IT�)sF�P����3�%=�:�}9}�3+��w�IOX�t%{��v�����t�=�&B�Gh4Kf��O�/U� �Ҏ�b��k����V�Am�9Dd&LR��ZhF�]��u��ۤ:&���X�!��\PL��@qҿ�j� ���+�W���������^�P����7D���=U�kȚubǝBZ�u�$���|��X��;�P�Bb�"C ���	es�)A{�d&������d����q�AB�})e��� ���-e�P[�Ϯe�G򛘱)�(P�r�
r0�Ү��(�,�����Pg��9}Q�$e�����U�i����2!p]tfkk�G[��:���B$��!�p)#���ߑ\��d9e��vrF@������� ETvP�Q��p �e�AcK)��v�8��R����Ƅ�"ƨ�̀���hdNt ST�s9� \H���xD�fC����#C��MjW�~'=���U΀�k8.�bT�.��G��E�Jm�������NV|8D������V�[�� ��Y�ǂ`�ޯ_�E���C�����xӻ����x1�!}`PJ��>�1���Ө��u s���t�E�j���$L����/F�ߵ�m$���5�����'W-��A������1։~1�k��Φh�/2�
�%�G͡�?zx����[U���3�*L`��Va��q{k��3"<����/��D��Xx5��0ۡ�ǰ�����Ū"4W���\IO��m��v��?�x�ShK���RF���7�`��N��9��!�xy�4��ȸ��+�T���,c	�74�����O�`@?W�=�$�y�D��At<���9��@�� A�j��;B��Q��j��RS��a��D����k  ;Z
��/�xgt�G"#�YL���RW�h���D���ꄛ"�N�T�.<#1z̳/ ��B"k�݁4��PZ5�j �>�X�A�R���ґҠ���q��#��ϿkXu���� <�d��E'.�����3��#�X��Z��H�ivE�$l�Q��T0�0��N3��bK��q炤E�M*X]�2+D��n�%���ۍ���;w�o���	y�����*Q�Ns��;�<�W�!�Hт��<d�&���
F[�V	߹���Dp-˾<�gY8��bE:��^M�n1�k�B��;w�[������6h@���Z%>Z}*Mn�Qi<��- .@����ǹĬD�qW˚�Ԛ�֨7��O#u��%��)��I[��`����Ry^�e�+�u�{t�+������0��Wo@��1�b嫵�пñ�ZR���Sը+�8*��x���� Y
U��g��w�oaܣ�[�ȭ�]~�R��6v�����6�O���Y^�e���#����E�fL"򃈹O�3"�Fl��C���Ļ���o��H��w7�q��iE�i�`z{�P��m%Jp�~È�Z�u ���fX:9z�oNL��m����غ�� �MB>��*%&�3�1�@�:��#��$k9�q׭�I�� �8��J�B=Vk�n�u/��Pb�$�'p�\Uǧ~��W���3X.��AR�8@�M��z�Q�l���MjL�#L��+��(��7<�>����\߈�/�^Ϧ�"�@Ԧ��̱r�L>�f��V�|Q�^��Sy@��m$.��ޔж�cK�Q����(@"�x�.!�kA�Я�����m2�3BA%?����&|#.�ЀgpeW�"%�L3��5E�%�ޖ����y|c�֎H�h�爯���ڮ'nh&T�F��]:]rS�v#�(��:�%9!�
/�� (^�>c��2�n'�5���;��H���.��ӁxE,9트�#`86�x<#H	}P��7+���p�E���RntTCj	�g�uX��/�U�8�`G^b,[cb�6�R����a���$��	/9Լ�&�d�@������Q�}*��]\���[LT$�Nu~�TQKD̎�EI�lY�ga���2g7|v�-��!	�pڱ�nSy��k�ֲ��J��V�J�J���f��a�����+���gN��.�@�V�70�fD�}7b��Qr�c���E�oW�*HQĞ���1ѡ��ǋ'/��b �c��0_ADȥ�	��4'I2��H$��� gfO1>�\���{x� ���4h�4���f;���}H�6i�Vm��$�eK�"��=��ƾ��Zb�{iO�H��R�aЄ\5o�����`X3#��[�h毇5�`Q��O�t�*3�dLj
�XO����]hi�m��zV=���XS!BX� h��� ks���ɨRt�0�B�X���5�8��k�����G��<t
.w���2�Np�`'�@�l}b۹G�lUh1'(!�C���7Y+�V���@5���2������zHpv��^h8@�?0��[Q�͙%�:����N��c�m�=�2���k���զt��@w��
R��V��$s78$��bGo96����z)t�4�`���4G�#�s��W�Is<�m[��V�&.�D8Z��*����I�]=�c��ʴB�m&^�U��Np�6�W��i
)>H��⸫��V$��"Ȏ�W�#�PP{h_SO���q�e�e�����M@��   8 �f�u�(6�a�WQXG�vd�b��Y��� ���G�l���V�������b��L�0���5n�hպSKH�f`�kp��ʳ�}
JW�h��+<?+ ����&0��G���<�V�_�lvj��q�L|���KSN�:,��un�����5 ���VC-�g�u��U���&�逦c)hߧ�m�Ŋ���!r�1�g��������h���	y��V�����̜)�<������o�P1�i�_�7���kv���y��+�9wx�Ž�$�H�Z�qO
g
�i�Ѽ�����<����B�o`q��H�Y�dwF����)�|�!'c��d�2��h���G�'3��v�ם2���2�����So�Z�f����d3�᧳����CO�A�R�������{q�X��<�u��� ����i-��{S��]�87��IM�<:�m_�>Y�vdĥ�k�?��ԥ��Z�je��%�a�^S���sS�űRc���*@�妣a�ղ���Uz��:�e�S����vw���>�,�n~���a	��Ө��� �N�J;��G��_G"l?�pܱ����z ��~��ŒP��$&Q.�6,� �yь�,4������K��o|���B(��q?����@
&)8 DV��뀷��p�=	w�v=L�����h]*����6g[��*/y1هN���HW岌qW�D��l�4&�&l��t�::��>#�r/z�fp�),��C�c�Z�93�/�X�jIU��$t��e�2�Xn�(�����=��!���
��m������0�+/�b��;��L� ���cG��pOW���M �����Z܎��S�ޔ���r�џd	X�b뻻9�/U�jU���B����Ƽ��=&���˶ QUVU�v+�A�T�[��z>Bo���K��%pK]Z�P�_��֥�[��J%)'��xr�����ɝu�������E�q�0�b�0u^�c!���a7lN��QdgO�����q�Q,��\F�.�W.�J� "D	��蚫BgU=��/3���h�_�.�/��2CO����״�Ah���<�+0��!0ճ�E�S5,c�ñ�*�"��N�!�<,%��1�:4�;�A�C�� �h�r�i� ��'k9+	"cɗ��*<z����L�3�0��K�Q\,�����H�n.9��
2�=� U_�u���W
^�T_��f=��uN¥�����@�?=6��۳����2%r�sg�kX�Ѱ]�m�*�LL��+ �}��tu"�j��M��x�@��>�Cꛉz��T��ǜ,�r Ky&ȹ�iDmA@���x<[�z)��NТ����Q�dG�=�v����6u5�D���/4-.�;�hw�H��6�̝��V�p�}?r!R�M����$��r�������1�&3�~�)X慮������R��ziIS�_3G���W��x��/��o�	���BҬ2�ka/1�B�v�)���e�~;5_�=��zbsx&2H������1���QL�9	!�����s�TEY>�P�4����ې�8�����,�Sy�c�B���x0uo�UiR�Jm��<C���7���3U���[hg��Ғ� =���,����l��0#In�g���h۵3�"/��
�d^l>5��$�>Z�OU������C*��5l��<ʨ�%�k�{�B)��[|xh`W&J/�n=H�`��SOEt�ܗ�a���s�n�s�M��O�ޕ�k'k�i����kw!0�\���q�ݷ�,?��,m'�v�Zė���"�XJ
��e��	�i���Qő6;#ul��;b5�����7s�Z�=��������M7���du<%m�_h�(�Y�t"8����l�h��m�|˫Q�xB���/g��\d}!re�6���ǫ�p�T8&���]+g�*�������Ը��5J�(�sq��� 5\?�0�y�����Wq �2^��Ėӏdpؕ΍/�,[��N���e�9S�y�(���9x���EW�e�@R�Y���R�K�|9�ߍd����� B<��+�r�C�uO��X@���r�Ύ���	�Cl����j?9NJC�����ο��h|!~����0Ͳ�|y��Fdn�u����=%{U[��N��;W/#�9s}{��k������� ݾ�{�el��g0��%��d#�W!1 z �≋� a�3˽!���[��F�al�dM��� \(<�:*I[�?�a�J�_�e��(�	7Z
jj���� 阄W�n�Q��P(λX �)Hk��\�gO.�QqPv��ͯ|h��Jl`�b`����A�~ӽ����PW�8t௠g�B�0y #��?�6:ܳ���e@Z�D Cx���V�FAԚ������2[���{t�j)h�8b��
�D֯�[_��?������VFl���dz}Uc;y��N\0<�����D�:U�����z��������Uw'��P�~�U��*����E��K+|���ϧWn��6q���|J�0�F"� \��MI���@���p	 ����ew�JI��{�!�C���v�D�	p⌷5�sM�V����,Q��>���P�*�)0?Ȅ{b�(Zƙu`��u1��~ׄ�(���KwqCC�kh]�2�$,^�_�W3���3S@(⍧�8��o:t-.
�A
�����mþ`\H]�k�ܿ��9&K1Z�£+��U�y�LM�/���?���j����{N��@��,{�f1h�EkB~�Z@�8`��p2:�V�q�D���M�>��h�4�}��yܱ������VqgDp�nk��!����gݐ�\a%fUG	m
`���\c�1��9�[�;�q�|�4/ĬE����������f�;�Z�_0B�������,ajz�H�.,Z�:�8Lh����(���6�U4��X=��Vv�;#��	��v��2����kG��
5W���r��D�f��X7��$z�����[G3R�@2�qp0'���� C�n"(h���-��7����v�b܈����}�CF�%,^�8�}��G�`�ٵ�/$F��� 	�(�8����F��?��f�)ZE�0�(F\��P`�o&䈔�i㬟c� ^N��G�ɥ�U��L���
����G 3�8�H���#9k���ź+�~7�(ȡ���T�47�N�.��*/)����Dz��_��P���KY'y�;#�g	�����q���P�i5`M���Zy}��w-c�c�^;�c�ϐ�D܂����,������̱I���F��:   � �-����D�y�߲�Up�V\=@��%���TX%�A���������l���y����j�����P�'���!��N+�dQh= [?��r�ޫ(�5B~t\u)�?���cD#�:���7­�ͮ�\h�u�_�sGQ9��������N����q��Lx��}'�Y$؀�\��vL��JK<9UQ��H�~j���_t?�Z�`�Y��bT�G�b6O�w�u2��t,��I����",'h���z{>w�t}����#̧����m�ZT|j�,�L��f��5�g�5�k�:ďZNü��j�Ö�'�l��{RY̫˃���+��1S���ϢY��H �^+�g܈��;�������{Om�ޜ5�頤|�Dkz����������O�G���7�4���3��#��b8�������*L�P�޺�ص��P�����yè=�T�ۺ��h�����,�tQҖ�w����\M�a�=x��ϩ(Յ����?`}F�7[Jz-���
���?/�/O�i��5̒=�T��B��Ws`�h����g��Sl2�O��85S
{���J��rY�eĲC�������<�������m(]x�S��Z�CJm����6[����/��n���o	�#ӿ;��*��45''e��."ߨ�&3?�>l)�}w�1� �kˊ�c$b�u�ݙ�$�I��i��ߴ,�In޷^/��P)P��ް\Y��;���-�$�u@��h��ʨ���ew@q6�|�!��gh<Ύ93�&��g`aŊ�]��Q8{�C��D�c�#�ɏ'Z�7��5 r�[���Y#d�����a���H�i��j�P��{h�ه|��H�Xu%��=��E{[nχ��T�%5����M/l�B7{�4���M�[,����②�5���k{���8W�:/��^�>�p-V<J�*"��G8r��b�]@�zl��H�+7J7��l�Hz��M��������Cdt�HEn������PN�Y�|X�}iq���=�>}�b�ɞu�����3��p֬�#Ϛ��cc���l}F怰�2��rL�@�r��n���3W��R������#a��}��5#�/o&��/Tb�����*	�B|�-��پs������0OT9��Z8��&�P�lB��v:?�g��I�(g���8��� |���P ��Kz�(J�T�䣎Z�ź�PtQF2���%��@���pE��ȩ#�ƿD��g��}��VM�����T�G�Z�Sk�Ǹ@�S�B��d���p2�����O�X@߃Z��2��5�V[FIT�R� ���p]F�����.ϗG�Ig�:�-)Y` �����s�B����B��f��M&���|�P=�����(B�"ϞӜ<�j�O�Y'k �L�TOqJ�������ق��x&6��1B6/�.EU{V����7%Ei����]"�D?��50& ���zX�Vƅ��q�i�����-��w��BCXm�V��N&0Ɵ���0��s�_��##�h��h9����:hx��.gq%n�hu�y�%@3e�k_b�vГ�j��zX��T����n�\U���g� �)��X��ݕ�����eTy�B7�]���h��#��R<δlwr�Ѱس��I �it���������RZ�_��s�)�p��fE���ON�`�s�C�u3�
���ej� �D�ڶ���� 5���5�#`�@"$ި f6ss�j�/��a�y���P��ɒ/�c#-�M��BE����`��^Z3i>�V�zZd��J�	�k @l��f�
�&�K�(!^��' vAK�ϊq�F�b�ڨ��};Mj�֗Z���w��*?b�Z���MG\io�k����Y��Ǧ��v�}߷2�����x�!�$d���|sƤ�$�=G�	�={�?5):��~�X/B�^@��l���-L�I��>������q����  �Ib!� !t�iU K�^%����ƶ�~&z��y�cF�u�j^�`2��0����P���[)M��E=�F1Yؙ��4���f �����	1��(���+aHq`aC޺ww��Wo,r����W�5�W:<Z[vG>�"5�k$��Ŝ@�a�g���SӖn�ݟ&��Vb�����|HIQUTp#a� �F�����N3@̠ �kz��J�{�55I&�(5%�9�F1ѶCr&H�:��o�"���A �R��j%�7�A���̴��m���4 �<�a+�B�(4��{��78�5a�P�nH�:�����U �^7ҭ�=����(��_	'⿧�T��#F���MJˁr����XN�H�%NeL�*8�1zW��_>��`�*��'&�X��B�L�� c:�E� �>� ��� ���p��l448�r
ݸ�#"玆T�^�I��*��v4 ��A���X+ri��,�=x�@>�^²����5��IY����4����d�]�~�(P�^����약 q���"���Zo���C����[�4�9d2nq�CW4�R�� DG"T�E�Q��qn�
���O|O;�������Vb�ʫ�RB@�z��`��!�  �D#$Hԉ��G�Иf�	J#$e2
���]w�j�
B�q6��Q���k���a���x���N2�yp�+)��9Y,5F�"ػ�`I������t�������(��$�e�D��\2��S�1j9����8F�����n�9�ԣ�֗�ש�[���
`'�5-`	���P��4�XHLM�T��aP ���      Q�4�C" ��<����C��PY����X��*ޡ0
D�Fu�!`נ!P        �� �&5��%��!�P"2�Jo��[R�����"���o��$a/���o�|��&�&S8҈�U���L�
L�JK�y4�U�%�u���H��ε7p�LV���HR�Bi�v1`�N�YXq��KhR04���"^r�ѹgT�H���fSS�o�02�*#Y�|��=��#��b�� U�m��X"�+h���ߐ9�E;�y�g:%6ۍ_:�ve)��n?o��H�:vKG;�P�%�ԇ���}� �� �B�XQ �(!H^��´.���N7�kz�M�\E�Χ�6��6'�nz�J2�<�Q��c2v<u��s��xܛG�Ŗ��X�	�U޴%Ad*���+�k�:�,t�6[D�byse�F���QE�m<�ʉI-0nm�ْD���$�8G邮z{�2�6x��͜^@�8Y2>���e�/�T�x���` �*&2��|�ł6���q�T��-0�A0+n���0K"�k}U���]=��F��7t�޲� �G�L�s� 8�i��\�
4���&�������s�<������y��D�v]�1�Kx��e�zm	���p&f�좌;�PŁ�J8�H��=X+W���V;T����D�Mف,N ������5���)�Qt�H����9?�����,	���-O2�iG��ʐ6��  &k�c��� 	hQ�W��W*� �*�  	�;��  �������
�%a����ԕB�Nn���+�����a�V.��ȎXx��}no�&"�]��6
�\�E�՟��Ea�!.ƚ��LT�I6�l���s]�{�4��i��psǧy�HV�]����`(�4J!w���3چ�& `vv���s����z|e��k�bq4ĥ���vBռ��	�dI�PA[7� ��s��Ark �BcT�<[��8"�TP
��](9Զ�F0�'/O��4� ������KD\���tD,�I$u��&��E�®���~��w����V����-0Gm_x�+	��g6��wX���5svg���CEMb
.NHR�#�+H?��c}ڛ���:��DB�VT��|j�-X�[H�AB�Py�![ �D^��(�$U@X��
�       Q�4�B@�!�@nA�\J��D��H,� �P.a`���P8�! %4*e?�w����\ 5h|       0h �1�$5��%�	d��Ԕ�$l������-\q]R����G���/��n%@��q��1 J����m�0A�(�❏n':�(��?��P�Z*�zee�F�-gH�n��af���=�!���2�]'�@͠B�(C͹�*Z7Ӽڴ���S6js����|1_���c�2٫�{�"<T9�d������'�:��:A`�)f��q'(�D���,�S0B���$�Rh>����vBJ�  Eڡ�@t�q����F�� <;e&�Ea�M �� ���k|𻁆!�i��ݗθ�N����7˱�n��!������L<��L��N!u%���
����^S2\�W���q�|FU>h
��?%��,O6��,�,P4��y����0R�RR�K"���F�gB����8��uF{�G�w?��K�N�ϒ�ZeL�*P@�OW�����Α�T��I@0�qk)d,���d ��!n��h�h��	[..�G	|N*�[�U( (1��zg7����R]+���c�b��@�⑳[5��<S�B��F�t�%����A�h�?���UW�N��
`H�}�6��wT�pc��R�BM�"��-��%	����-dt=+�n��Y	
p@uy�?g�K8Ғ�/n��@dW��x��A`|��x��d� �4K�&)"U�x�+��R@��.�h,  ���.t��5�|@ ;�w@ ����NR��"@	��Aj�1iN�4@�s�^Z�{��0$ȓ:�s�y�^?=��&=��(��w�����H� ��-��`�2&.��-t�5�ʲ��z�h�y����gV��a,�����Y��^r�B�}C�e�%�P� H8Jb+�����D.���� �F���v{�I�z�Q@���TD/!  P���� 
���+ ��%V ���).�P�ws�(��gڐ�wY�b�$8�ƀU�D�ej���͘�vR.~���5v����>�6F�s�b9�]�m��M��6�iuX*j���C>�u����r��E�"K\,uG�O�{�=h���Z��"��/3:Ċ��,"F`0ވ�-@TB�Z�{ ��(�ՠ!�       J6��@ B	� AB��]�%� T ��&�2���qe.� �"gr�r���vk��        a�c�5�4T%��a �$�'%�c���+�h��\��p�w����� X��^6�G��yx��l��!8��Ϡ�.H9�|���IW��� {�ɷ��j�V,��@��T0��)��Q^��5� ����*=�'po��\�wg� �[� mv�w�|�0`l��њ�E ���y Ëό9��а�ɩ^�'2����T��@a��5k�u���:��L=.! րD ��f�Tk�h����xp�!O�X �$-ԫ
) ����U��A��z�L�l� 4:��uƠ��g�;�͑8�혳t̏�>½hc��n_�H��4��%h��}4#b'��%��̠A�C�	��Ú,�����_bs����8IJ�*���?��731*`Kc��a�KK/�>W1�;����i���l����h"r���]�.��E�^��Qx��& BĈ)\�t  "T��� R���N��I�n3��\T��U���MWz�ke ��cʪ����=��O0�V�'f*�P�|��1��ƒ*�Ȥa��B8,�����|�W�#�� @2J��J;��~/cPB	��V��2I�mA^ ���Ta=G�������^��x��?��|F����?�l�u1�r#wfQ�Q���111
`D� �;��u�g�V�3� �  $ b , `�� �~�WP  ���8 �mO�[L�FC
�,�!ݺ̹���PR׻�j�����a6�c��o�4��0>>�ۺ��F��pkϼa� ��ޟ�������1.�n�C:7(�BM�����%�A�Ɣ}�C��N4��Ҵ߷� =���F������N.���r[>��*<]�Uk�RL�1��;1�u����^�" �!H,���b"�=l)H� P%��j��F 1�t�0���P��DX<�3��m�ұ{��k���Ob�>J�,ȏ��}E�:�����4�DlN�B��,��8N��s���}�NL۶���<�(x�	S'~�G��!%��l7�J�z)׾����ú4�i��MA3\c��K&P�Dm��N��` 
�)tlL  fS^���\@      � Q�4XA��� �\�	��H&�H�u�B "� w ��[\����.��H��Q�~�W       ���@�"5��;(�� l.Z��#�� ݪ��ȩ,ѝc�P/ӂah���^������<��`Ƣ:�PF��R��[�D��o�������b6��?��E*�F���݉z�Q�,O#���c9�'tH����cn\��~_��R���7�58�� Ó��׋RH��f�C|�m�����,�`�H�'(g�\=��h�PRv�4K��W泭BR��M^������/3D=�N��� � ��a��55C6��30����n�Xhpd#N D�(Z��a��*�n��s,�"�.
G���o>i��cC�G\1L�X����n=�KL?�Q1;����_�ޭ��`yI���}u(O�r���\_.l�$�Ⱥ�93�f��^�G%%EՖ(��}m�t����S�Ŋ�y�&�@{N��'0�]죿��D@^��T8@J6- �4IN������t 
���j=��b�0�F(�% ��)�ڴ�Bqw~%�k4�ou� 4�i
0@�'��gQzm֞g]h��#�����d�etH֠���+���Y0(f���e�[�_A8�N�D~)�`�K	�rq�U�M6a�j��A���&�A �M��>��.<�Qݝ0H���8����E��/G��>K�Xe����
b#` �ߪ�$CQ���<�U�jS����ur/]�j��H֐Z�� �n��a�y��<�j�5�}U@ <��  ��l�ب�#x"P�'2d2^�(S���AC8VH�J������,i��mL7�s»-�q:&�����JԖ ��o�,4�<b�C'Q�ڼ��=��b�;�&5u��.dE��O�h�=�8ד{+"�g�G�ષn�{订�6\ߎ
��}.-��wo���h۟b�r &@���`�  �!Bh  ^Rـ�n�B�̿{ޯ�J�\Kʠ��� t�]�ׄJ���k`�#d[�{"�^��/jYJ����rt�k�Qǈ��{�R�&a=�
)K�����OJr�-�c~k�B�}��nߑ�����5Jæ��""o��@D�����$��/��ŷ���J"	* ��N��(�DZ`&�(  ��5h|       ������� �pD6�vL�)�& 5nL�TP��ߢcT�=Z        0p&5��K!���LT"�fV�\�ye�Q��;�Q	�F�6�1/v.�'��-XjPJD�b�r�FUh��8 �j���1�F����Z�ty��ί8�_tҭ�\�j�+�t�E��v�s����ou�s���u� �w��`�2W/���_^�q'���A��N���h)k�|����l�W#��  Ap�Ң_��b�#�w��(�`�R�D�i�b���#�j3��Z ;�Φ��_�K�x�����GA�PB`��I�г�jU�S}n��1�fd��r2�G�|���Oр�(�BUҮ�% ֢�����B��:�ۣ�N�B�(���5�8��Tb�o�N��I�Ю�vY���V�^�/	׻t�Y���L	 !�4��58#������`Ӥ�B�; O�R�ȑ��^��jH��� ��q��IB�0��Z��c�@H��8�l  a-l����X�q��{e�,�i[�/�ng��x� >R�ZUY���P�3$����D�Jm�Fԉ��d�G2��R��{醊i���V@����"�٣Y٠�'�ؔЦy�*^��'���������wW+��_K%�f�=rt���}#l�D2�����H0+_�+�~]c���Čy2���wK�=�On�rʕ� ���@a_G>YJ6��ڿ����2�!`���  �	.���7��@4*��  ��  ���ĵQ,�V�N [�9�)bL�Jy�����S�U�Ts�Y�r��������  �ݯi�-+���>Lo����a(^/��JCӹ $m	��ye�!	�XP�.�<��n�fѧ�輦����H�u{���P�a����!�#j�>]�d��X�� V!��PH݄j8�.�����S�Ӣ��B"��A �����B( �   %5����ѬpE��]U]�1�صgV��ϔlZ���w\���||��h��Y�h$)���(��"%�:����%R|���b�y@�I��k�FrI�N�Y��qLf���YQ�-+�&s���rt���AO��p*�K:ON�Bdo����Ƞ��x;B�+Ĩ��F2� -�R�$3� �	���@4��*        	F��A
	�B@c� �..�uy��� H�Հf9�� !<P�����!�I������*        4 `�&5��t��b ��98��c �a@�j��z�Z�^� ~۷Mz9�&���8�o�d&���*�i�V�y�y������塥g�ٰ)>R�Gcuɂ��!`@��>\�QU?���NL�Ӂ>D8  �x�"C��o�uR}^�v�3���낰�8�>/C;�a�������j���>��QA[�~㵞y�u3�|~�M���;{ü�ͯǝ %�Bڂ�Pytuz���&���CC}�;��@*-�Q��6��O8��~���q@� �
��Wj�Zl.�^\�B��T��
��79G�lע] ��՝�b���2�	&T��6ͥeC��Z��}\�� �
��u������P�iS����U�������|M
��G�B������a��$�(���q��˒Ρ\ϖ:󌰺�9�L*�ڭI�������"�*e ����oD@��� 
+�M`��p�
�`�-�aQ��"'�!7�d`:�j�s@�x��{� ���!뙙���g:@p�#��B_X2-u+!;58���E}�����Qi��̩�P�*#�_���L:����9�F-T����aZ �R9e
D9�=�+�j�.U���ҧ{���鹀�����!���"'9�RQ�_p�7.��!����>���w���Y�� J�,�f����ML;�H-�)�ŷ�.  w�*Yrݛ4:�  ���  ��
��є�p����;��*��U|<_\����eZ�XȕJ��K��+I������%����� ���p�!`dzq:>t���Q�?����I"�;Q�Q,R<zMh���>_�ڲ���=�+4E$�R�D�K� ��Z��;��C�w� �fB��s^�n�Ge�j����V�Z�h�� ���� L�DF+�.Xh@Z`�[�Dn ��N�lW"�����{Mf��O�����b�w�Y�!��6���#����x�C���XoMF��w�)��7��XCOy�iF��%��l����ﾃ�s�kC�oE���sP�	����6?wVA1��`9���o��w1%x�
�'UHE (D`� �@$ � Pj��       %S5�J�D 1B�  V	d
�( �T����� �!�@� �|D�l��@X �ՠ!�       �� �:5�q	b	�+�GA~4r��'� ]�4��N�}~�/�@b�0P�L�0Oh0�$3.W�������Ť{�ܒ@8���X�X@b��vM�È�Lq�m%�6@�Rj2+�p���Fk�@�&�(KVD��������vb�΄��W�g��R�HO�ǳ��o��M&*���lY���TH"  jW"�FTDN���LMsy�T@�.iF;��~Y2�(f',�Hp����A'?����i% �ӠU"~_��� B6���  D\�4
	�f �@N�m	��\�n�Jh 6_at�=�	���exm�g��Hh�T:'ؐ?�a2s2��d�D"���qe�R?�����%H_�G�+&��[A�ߝ�R�c)��2�_)�B����TE�L���=���0E���x������|��K]����뙡�肰�lx�]]����b �AǱ]�Z�Q�QX�����Ya�-��C�H6K�A0���U&5I̿uZ�wr��<RU�5����X�ބ�z�k��h�"q�y#�ާ����
Η��VAq���9t>�9�CNQ�v@R{����Ē_k:�P���RI|�J���l� �gF
J�k�]�[^) 	3&����a����������%��8)<�Oܡ��Z���0yne�3s\�L@� �"���eQU@T�O��PΙ��D�I�y>u3>3Ds�t%�4*�   ��` ��
B�A�b���L����o�+D�X��ε�،G�/ej<|1t'`|!�d�W'������0�{���B��k3W�⛥� ŖY�!��S8�U�W������-dw�ʊN^aq��S0l����[*��&�-��G�7<��~$�����il#�v$r�U0�fsQ#\����Q�0Խ�-�� X ��s�  )e�H�`W�%�!5�D`SU"�ؗmW��������+�� V��K��_�Z�*($��3#����1�M�@��Y>��78��΁�
�z���Y�rds��p��U[�-K��[R�1�� (�9O�C$Yф��MO�x��������D�K�}�ٵ��I��8
��
M0r�$ �� �
�       Q�4�B��@���y�n ~�Np����lj�AvA��0�Bc��05�듆�x� N

A3^��@       �� Q�� �   Q��ز����#F�A��лB��i�̶�Y����l��DTlk��Ҋ�؆?�c�jns{M�RB�/{�RjX��_�޸N?/�7`��7���)�2����w��V�z��Y�6�#�FJj'5c�zUQ��}�V��w)�)]�S@l��[e�����S�w�(C,���VOOG�/�y�[�+ėq�! w�|�WCT�e��9�F ���m.�V�#$��
<��IQ���(<�l�QÙ8��������?w8�d�
\�y��1��`��@T���#%�>���sy։Y_��ڦ)��HYj4��t�����<�wp�Y���B)�{V���Z���L��E���0$[���(3@���c?	��.�\�L��8~�RR�2[b�%�W}��`��\T��ڌ�B�E̪�j�g�?��fX����О��U$zaǨ�LU$y�0h����E��-���0,&-}TI�F���1�O����C�'UĚ�d1_��+gt'�o��9)KV��7�4�c�̳a��/Z���+�s�'�7�����l>1b�5)E��d|�	��S%�&v��k���,�+Ft� ���G�q9e����8Zpw�������:g�ߞ@�R��.:�J�tW�,�� mVY$��;i�~o����/��8�n�������U��3��+�_�_��_��8&�p�F!j��O�E]�S=9�p����fg�4�&��x �w�[jZW��B��	1���'��v��f�0�?����?�z-���NS�M��!�����-`F�(yNVp�	)m��{В��c����^��cJ����ՕI�爷u��賦:����
.���O?�0�y8����ez
�<�qMB�\�蓩\�-��e#N%Uuo-���ע��w	{���}�!�_L� �0#?ܤ�ZC�/<�~l�/W��L�&IƋ�Fc��s�r�{���U{`��<�btd�wa4�b�X�*^�����$�o�#v��q0ҹ��V����n�[P���6g��J��ϐBg�e\$�Ja���L�^�>�R������g�w{N��-�s�^ZƘ���h*jD8�=Y�������d��x�u��~,2��#�Y��D����E��h�˲f���X�;%G��������>xwl��X��}�&�v��_>��4c�!,Yl{���'����ɟ��n>����Cjnzx��EX�<W�7`6��E���J%��ՎS ��e1pm���rt��7�g���pɂ���`��{��j��Xaă��PLJ)�S4����&��i�G0 mk�z�w���k�P#�j���qp{#�2j��)v�'����S�PMw�j�4(��H�[@����3S$� �`�(ߦطj40�\`�o��a7V�ü��!�i�	A�k��63|��＆�r�� O��`��[�iL#���יӴ����v��i���9yE^�P$L\Y\fp��1E���|ӳ�°�+u;����`����jP��chB���r����f�Ŏ���ح���Mqz$��Tx�a�ώ��W�^���ɲ�U�|)�����1���܀7ϫau'���t ;�=f`!�S�ޘxj�v����Z{ʔ��<�R;_G����4Jmu�:����s�ߪ�]�)���񲥎��0y�;� I ^�m<|}�}6j�1��}�?�P��P��p�W�RL�{�4T�w�In�Ş4�tJu� �qbFO$�,�Qc�!�7��������-K'쉪�$ӳ���o�
غ�����}`?|\�?�����*��ǲ SBa��o�~e�|���Ө�$�Ϣ]#?y�O��nAQqu��U�_mp�`j�V��9��L�@&���o�'v������.l�w��)ao���M�#= A��#�n��g� �@$�V����M����jG�n�Q�=��bs��;���ґ�5��<2�ɛZ"�?���o��P���2p�@�2�W{{jcǂ�W��n��H���7��YnUh�q�BG�·Q�%���+�.�j�H"�\'� <�N ���I����Bi�ʤC� yK�`
��¹ ������naG!VgK�=�_C���R�~�*���P,����r�W@"#��H��n�_�n�?2(���`L� auI�&�����G�ߔHy3�g�����%� %�j �ۙ�FS5Je����n�?S5�`A�Oo�^b3�� 9�R�k۷=�^"�W��D|/���>D������Rޥ������\���w,p�@��xy���L�Ж]�eI��=��_��Z�r����{T	�V�_(ki�ܐ(߿�e���L�����#�W���*'P���3��L|�����Ҧt�M��������o��1:�������
jhX�O� d���kX,���׶Zģ����'����ʊ�@_�����p�41�V��Ȍ>��+ ��yK����� m6')�����㔹g� �f�5ٝϢ�˪qb̡91vf�`_���(��K8����8L�aW٫n�@$�c�D�4&�F���|>�gC3�� ��ݵ�g�wEk�����E��c���+@>�����.?	�qj����Е���ɠi�Y�f�<�f��bR�3Up��^ub��(k�wF�>�#8=�µ�-9P�y��VΥ�M�����V,ҎT4E�1�~�����eX�q�����{�y�f,z����F�K���w�5*ݽ�j4�:�|�����J���[�ֲ��ߋ�YRU�+�;!�wlG%ͬ.*��Ɔ���41���t-�0��dk�5!��� ¨�Hb��^"0~f>'��Ҩ>���ˏ��w���.��JJ�q&�`p6WTTtQ�ﱣ�|g��޳�6QvG:l���*�SLg��=pO=q@�Ճ�#��Z��T�uFez�Z%�/>�?/NJ�V��H��œ�;vN}.�i�����5�C+��\&�a�ہ�'\M/�~F6k���Oh6{q�����������FFP��(��K�AO��V�2{आ:��\6e2�� ^��n��f������v�ڱ�����;~�[�eY�d��o]���AS.�^��ZS���TZ�nNbӆT�
�Z�A�i��̶Ґ����Ӥy�V}T@2UHq(\��=���H�4�Wkc�_'�a��4�NXf^�ʂB�[g��M����UT|W�Nc��2:2��(�Q*C�o�� �Bt� c��t'YR�A�B�Ę�C˿��BV��2����]���-4�ҵH��:�6q�슰��3V��G��0K�;]���ta�d����}2W	[E�\D5Y9a�6r�뵷Ñ ������v�;����;*+3A�)�$h�z���xN��T�^L}]Xꉮ[M�i��q9P�u��ۣ^��I��� x�&e�c�vPf`��l��77pwv���.wC ˬԱ� �����;k��$]���ZYȏ�}B=a ,�z���zx����6�V�|��1!���;
��Y!�������LMt��G2�ãiO�\]����~C��]$8C���3�e�OO^;��eJx�����w�ilU{���(�e����c �oN�h�k#�����,Q�@�����n��l��u]N�5śZ�Sv�u$	#�M?��Ddo"�F�
L��v����֦
&O��]��D)�D�0t�Q�^�	�ؗ�5�l�����et/��R���t�'��9�P�hn�Ͷ�^�B0a�k$'y�Ӥ�F��L'/ڃ[��k����H�S]������C�n��A?9����A�5���.��Z����LgĻ��{�JO*�������x�/�R7T1$a�^���3[��g�!���!)S�~��.A�A�`�����>OA�]��Lޟ����2��C∿)31=�UO����i��-?R�6�鈙��� (_��H�YG��^�}��P�6��i§xO�k����bg/0֙z$�O�+XɈ�VE4!��L5�Ӕ��e9�M%�S�QA4M)�t�^V�RZ��,��X��i�s����E�A(�S�=]%���fH�|�.��L=����q8�����@!E���[����3iN<����d��j�����K$�mw�����n&W����L��AUn���ylފz�д&#<���Ǹ��Sgg��cq4!���,���ds7��j��D�+���0�Т�-��(���732� r!��Zw��lgW&%��[������m�+�lBZǍ��|	�.�4͸F��� ��(�n��O����
%c�E��<��*�Ŷ��|��ZF��Y,�|�����S�I����ܬ�ÕΑ^���E��.-�C�h���7�D�‼3�k9A"^͘9����+/0������dc�r�����T��[�f�ػ���ɔ�����Mc�t'��C��7���%Ld0�~,��~H������?�Gkc$�)��nl!Ĕ<K��J���03�3���^ǎ�e9WNl8� Y1���{(��W��@O�~9eX�C��B��|9�ܡH��ނ̏�mV�PU�О=ٞ�7+h��b�1"��:\�:�]wf+w�d"l�t�PT��jĄE&̶t�;#��d���n�RQDC���pP7��mª�)f>ؼ����냯�.
����FoQ̞�6��ؒ�]ձ^ �1��B��������f��ĵ~��V��s�*րy-2���0A�/�@:x��+K��"���0"��IL_R�"-�R[���=��g�gǗ���
H�I�~db��=����qe/���#e��c[�?��2fɘ�qo�ύ�Ώ���EI���Ǖn*��{�����x��:��?>C3�� G�k˒����9��M������LƐWvH�<�F��텷n]~W�7�$\�m������+�j�������4�o
Ր���Z	c��RG��ϥ�BL��(o�nFJl<3�O�@c(�F���i�W��eE���,Ko�aX�;�
���0�l=��QE��ÍP�or�[����.ف���f�:W�9��Z�_ƫT���'�Ә͂Ȍd�籺=d���,��6�� �Ml���	�qp�W���;��bYz!��3ջ2�E�&���I��ܽ���c�9��#�󨻍�[CC7�w���)��5l*?��ϕ�M�R��#�7Q��#aŴ�����x��ڋ�U��`��1��~���t�R4���	Ȕ�Q'�fH�}?������κWt+&��J�8O�jl���V_�����'�Y���v�h��tTS�&	��m7:�_�}XD���ճgƟS&&����ta�I��?�6���h1�j�<Z��턪#�=�+�܌
�,s�Q00J�0y{ӏ߀�EP������	�͉L`�R��=Я�ߊ�v�Ȩ3uM�����_�z/�1��+�Ӏ��է�߷X�A���a�ݚ@���8G�w��r�;}������fYG8z�Wi�w#S�r�W��+ʢ�罄��������b�n8��j�T~9ƣ�Txɉ�t���tqPMz�+�惱G��ch�?�h�na�
��)ؤ�1�zpV|�n|�t��_�j�0���A���j@���(�6��N�,��	u߬EC�]5�%��^�c�΃�"C��'w���D�2b�խ�o�{��`�F��9O��?�K7o�����CXO0��
�ɧ䔸��l����;�&�;�J�=�E"8�_��_�#���������k�k/�cw���~���S��*�Sk� B�1>`���.�t�Jѫ|�h�y�Y��"`o�a�����j�831��˳Amc&��Ib�|�ӱ-�p.h�i�&{��,Ox� ��_Q�T~���kV�H�^q�ꌅ!	���f�o��{����慘{�U��� �cY�>JU�+�7>�嬮NV�fy����mX�0��kՠ�#��1Z굽��QM�z�Y-N��b:��4���t)�]m��8��P'һ�eV-��lL?�+r(y��Ѝw�N�Y�y���j�L��ҳ0{���X���oZ".3�d�hb-F��{�3(2�y���{�\�IECV7%9`Vj`a��9��/���A�n�hc�-�+`%D��P�T�dy��l��:��G�	�����'�ո@��O�G��������mn�Pyp�����@	"�����Nd�B_���m���:*-�Ľ*���g����)~ꚿ�i1�2�K
*��&����S�uv�t�wƺ��r���š�z�k[�%��_Yx.Qn<��I��1C�;n�f��W�xû��a�}��8R��z'4��'��j��e�# ��_��L	��}�[�"�&�1nV�@5�Mgʋ�J��ʻ������E��}:tcA��r.���������B7b�1���v�}���u��Ĥr�͇�JIZ��k?'��*���8#�#	�;e����o$�AJ��!L��RT��}���׮�٢��wl$YXDq.���V��Q[s���\v:Ju.1�Z����c�|Ij���	1f�\��qj�ʇg���ғ����a��y^CY"3%�aF=��"l�6觀@�a��H�b����x�k�R�
@տ�Q%fͨ���K����t��}ΡV��=�Cd��s]����+[n���
9�<V��0)�2��!b���.�$��2_�
ܭE�ł�`�첖��ƅ��8�����<���$�WR�l-�l����EX�j�;Llӡ�E�0�6e�~��?���P������0�\j�t���'�/ƚ�+��W�,�y�D��O�<Ro�_�|3)���2�/f�A��Y���3uz�HnH��s��6�5u�("�9U����bQY�W_�k��w@_��0]ƥ�}w"��Qt课<���R~C�+{J�S���G1�ۥ�ކ��E䜍�o$�L������� ��mQ�o��>v�2~�/��tjR,�h�;5�}3&~̅�(':d"�wJ��|�v�^�ɣo����\�'�����rF�ӟ`6�o&��\G�W�2�o_,C�KTjF����#L��펋º݈w��<$f��ۤU�u�Bm�v}�o��#���������="e\�t'u��bU�@r��m�J����G������Z�?9nj�hz�h�h��d�t�f�}Y�\G{�X��_YL�ʩ?s�O����i�@�L�[>ǰ'���I�@Z)��YG�V�B��{3.�9��F��5V��5F���d�M�`�af��^?M�q���`��7z�Of��ó8�����D!*����O[�m;�����H�,йN=w�%T�����<!f�����cbq�\�)]�뱯�^�}�f�#��nM��ċ�|%��:(�}��e�!8���&��kFC�]�P�V%^^���!�"]�"mPǍQdðFtb����gF֨� �L�H���4����#�}�t*�":�m�CͩR��|opVq"glt5Ii:0��ZYQ�uX�	��E��oY	��F��C�U��׭;�d��ՃgpǺn���� ĳ�.Y��<3Qc�8��k�"�8@�qED�@4m{W�وW^I��L"ՠ�1�T�o���4|���pM�Wɡf �l��C0�	��f�X#�vC�{���tc���V*��&�Fa��թa�oT�>�+E�7_}8lw4�al)VƐ�G��84��CRs/|��@�U�Vq����E�;Lխ(PZ���渆���f�@�ǣ,���*gߟ�Y���򥪛y�����i/Z���	��+γ������/� Ҭ�<ۗ�:;\VS[�_j~hEE���
�9�(�5\�b/�Ljq=IoK��l������A���RF�G
�a����~l>�h��R:�y�1�+-�mzp���hT�c��1���}��D�����v����/�����b�;#�+��i ȩ��\����QW��n���>�o��hɡ8���G��V�v41%��@P�Վ}b\�	��x���U�d4�:?���,T6�\�Tq�o?՛@�j5��Q5'S�UM���ϢB���;eVj9�.'<U�yf�vE�X:�@a��H��0���)N>r�'ݒe��}Ȱn���#5�i�!l�
��X��$='�!~�|Z_�"��c��n�* �)�NK����uT�	H.�4_��欽1ZI'R�_��*a�M�I�<����%��n]ѧ�!��Ou�OPp4��N�J!cC�l����63��^�WV���Sd(z���#�<�'���Ax
g��\iY�ξ�iok�dI�F�������h�\ơӾQ��ͷ�~����p��Yt����&���w�m�¸��S2.29�`��n�
���xJOI���|U���;㶘����R�"S���:ͷ4�x%��-��J�D��:U	w�W���E+��*�8B�I(��L�ە��hِ��c�kOr��n��t&')ϭ�h�Y9���P�|f�|��3Hv7!�3�0�FR3���y��5!��Mz�n����(�Н8�D�*��>/���,��)Z�(�'_W���W�`Qd��/����Сk�C�;C{I}�޷L��޶����r�1;K�3+T�r�s�a�� թ��jA$%��:���[�=��2�!�\�(�nG�������WZ�7�*����t�vjM�qz+���2M�B�o�:T��y��8��9���t
��"����F��cxO��.��y���Պ7O�W��4r�Y~r�0��/�t=<��N����U3g����]��c��Bʔ2ݷq�1I|zŴ�#0�Ptο1~Z��H) ��e��7O�DA'1�H�a����tj��j�����Bw��Vk�ً��:��#��^�-6>ԜCԼ����Pva,q5�5�F3�����V�$��l20���ANd������TP�P@��p`��;q��;����lW�	�~ �!��{NHU����:(K��+��?��h���aW0���O��)�F�����c��y<WB0��dP�#���A�E")0e�l��	�J=�PsSDh���/k?���1�F��)��n+q��� ���gZ��:=L��-`������֔�����o=�G�0w���nG��oL���LxK���?tZ=�'d��nG�l���z8=?ӱ�'�dښ{��-|@H��W�H��ys\A5?�@愨��nI�D'p���Νϭ��r�2�R����?a�P��H�
g�{�J�K��Q�F�����Utc��5��,�+�
[�>�4/�݆��7�ΐ�$�?�ϑ�ȓX4����a�#6w�Pl�kɧ/��S wؽ���U�P��y,[&zPd���'.Q%�����z�<�r8-������f��ߍC�����6V6	���|���w1��愭{ӷ�烮o��NKmG��O�Q�)	���A$Yx0b�s�����
Ƈam,��]��i���/�Ձ��.)��=5����~
�,
��0��^V�d�A0��9���L��q��2b �����N����1�ELq61<Ս.��w8�U��g��9w��p�q�T��a�P�#�~�n%-9y��Iߡ�/�ѭ%��ӷx�x�3�)�0��l���B�V���Kݯ+j}x�}�@��twC�y�(S����m�� ��3o�������Е��S6��b	��̠j@��;��zhb�a��8���H�e�rgq��*�N��X�z�*"��UdX��S��X����a�����o��p��`�j{{ �nX��!���M�08�ުT1�<��8�ǁ�q4�Q+H%d����#/��1���!���>2>�^�Z�35�ӻ������Y ��F^.��"I�ٯ{f9#C�.������蚖-	�G�t� ���m.���%W{��1�ԦvY����k�Ē���0F��.�k
q�A���ܕ�����'�LisU�.G˦�D��пs�����`���CW���أ�nz  鰉C���#��߼E�0�n��t5�<��ܑ�¯���{�����㖗AFJ��G ͏��~XW�I��,��F�����%�Kׁ����|[��Wv�Z�8%4jE6���!��=@w9�5
����{k�����Wv+��|�Ÿ���I����� %�(#�a�~Z���2�S�́�Re��fj��E�u��\��K��@6$3m�ސ���"����1���8�E�y�A��C��I��օ14��b��$�냸�;|P��w<��{��:�I����8�*�/��"O7
���+�_	�E[�Pj��)��]�Af�E�*ȧlD�C�J�-4�>���Y�9����p�G���{R���Q�~Ӣ�s_4�~W�L��'�{��u:eA3~��UU[78�HP�ѥLd���rD�L{{��y\�A�<���5�V�"襻a_<dM{�ġ��.ө`;�U;A^{3�$���IG�0QX�5DK
E�Y���KLþ�a��*t�sf�L��ݥp	��蠫�b