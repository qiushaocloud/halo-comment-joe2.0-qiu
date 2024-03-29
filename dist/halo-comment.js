/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("5156")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__("0f7c");
var hasOwn = __webpack_require__("a0d3");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/g, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "00d8":
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "044b":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("c6b6");
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;
var arraySlice = __webpack_require__("4dae");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "063c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/utils/service.js


__webpack_require__("09bd").shim();

const service = axios_default.a.create({
  baseURL: '',
  timeout: 5000,
  withCredentials: true
});
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});
service.interceptors.response.use(response => {
  return response;
}, error => {
  if (axios_default.a.isCancel(error)) {
    // Vue.$log.debug("Cancelled uploading by user.");
    return Promise.reject(error);
  } // Vue.$log.error("Response failed", error);


  const response = error.response; // const status = response ? response.status : -1;
  // Vue.$log.error("Server response status", status);

  const data = response ? response.data : null;

  if (data) {
    // Business response
    // Vue.$log.error("Business response status", data.status);
    if (data.status === 400) {// TODO handle 400 status error
    } else if (data.status === 401) {// TODO Handle 401 status error
    } else if (data.status === 403) {// TODO handle 403 status error
    } else if (data.status === 404) {// TODO handle 404 status error
    } else if (data.status === 500) {// TODO handle 500 status error
    }
  } else {// TODO Server unavailable
  }

  return Promise.reject(error);
});
/* harmony default export */ var utils_service = (service);
let jsonSeq = 0;
const jsonpRequest = (url, params = {}, callbackKey = 'callback', onCallback, onFailure) => {
  const jsonpReqId = 'jsonpCallback_' + ++jsonSeq;
  let timer = setTimeout(() => {
    timer = undefined;
    window[jsonpReqId] = undefined;
    const scriptEle = document.getElementById(jsonpReqId);

    if (scriptEle && scriptEle.parentNode) {
      scriptEle.parentNode.removeChild(scriptEle);
    }

    onFailure && onFailure('jsonp request timeout');
    onCallback = undefined;
    onFailure = undefined;
  }, 60000);

  window[jsonpReqId] = response => {
    timer && clearTimeout(timer);
    timer = undefined;
    window[jsonpReqId] = undefined;
    const scriptEle = document.getElementById(jsonpReqId);

    if (scriptEle && scriptEle.parentNode) {
      scriptEle.parentNode.removeChild(scriptEle);
    }

    onCallback && onCallback(response);
    onCallback = undefined;
    onFailure = undefined;
  };

  params[callbackKey] = jsonpReqId;
  const paramKeys = Object.keys(params);
  const paramString = paramKeys.map(key => `${key}=${params[key]}`).join('&');
  const script = document.createElement('script');
  script.setAttribute('src', `${url}${url.indexOf('?') ? '&' : '?'}${paramString}`);
  script.id = jsonpReqId;
  document.body.appendChild(script);
};
const jsonpRequestPromise = (url, params = {}, callbackKey = 'callback') => {
  return new Promise((resolve, reject) => {
    jsonpRequest(url, params, callbackKey, response => {
      resolve(response);
    }, err => {
      reject(err);
    });
  });
};
// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__("ca00");

// CONCATENATED MODULE: ./src/api/comment.js




const baseUrl = '/api/content';
const adminUrl = '/api/admin';
const commentApi = {};
let cacheLocationResult;

const blogAuthorLogin = async (commentConfigs = {}) => {
  const throwErrJson = {
    response: {
      status: 400,
      data: {
        message: 'undefined error'
      }
    }
  };
  let adminAuthorization = '';
  let adminUserName = '';
  let adminUserPwd = '';
  const {
    haloApiHost = '',
    blogAdminUserName
  } = commentConfigs;

  if (blogAdminUserName) {
    adminUserName = blogAdminUserName;
  } else {
    adminUserName = prompt('「身份验证」您是博主，请输入用户名:', "");

    if (!adminUserName) {
      console.log('您取消了用户名的输入');
      throwErrJson.response.data.message = '您取消了用户名的输入';
      throw throwErrJson;
    }
  }

  adminUserPwd = prompt('「身份验证」您是博主，请输入密码:', "");

  if (!adminUserPwd) {
    console.log('您取消了密码的输入');
    throwErrJson.response.data.message = '您取消了密码的输入';
    throw throwErrJson;
  }

  try {
    const loginResult = await axios_default.a.post(`${haloApiHost + adminUrl}/login`, {
      // "authcode": "string",
      "password": adminUserPwd,
      "username": adminUserName
    });

    if (loginResult.status >= 400) {
      console.error('身份验证失败, 您的用户名/密码不正确, loginResult:', loginResult);
      throwErrJson.response.data.message = '身份验证失败, 您的用户名/密码不正确';
      throw throwErrJson;
    }

    adminAuthorization = loginResult.data.data.access_token;
    localStorage.setItem('halo__Access-Token', JSON.stringify({
      expire: Date.now(),
      value: loginResult.data.data
    }));
    return {
      adminUserName,
      adminUserPwd,
      adminAuthorization
    };
  } catch (err1) {
    console.error('身份验证失败, 您的用户名/密码不正确, err1:', err1, ' ,errResponse:', err1 && err1.response);
    throwErrJson.response.data.message = '身份验证失败, 您的用户名/密码不正确';
    throw throwErrJson;
  }
};

const getCacheAdminAuthorization = () => {
  let adminAuthorization = undefined;
  const cacheAdminAccessTokenStr = localStorage.getItem('halo__Access-Token');

  if (cacheAdminAccessTokenStr) {
    try {
      const {
        expire,
        value
      } = JSON.parse(cacheAdminAccessTokenStr);

      if (expire && value && typeof value === 'object') {
        const {
          access_token,
          expired_in // refresh_token

        } = value;
        if (expire + expired_in * 1000 > Date.now()) adminAuthorization = access_token;
      }
    } catch (err) {
      console.error('catch err:', err, ' ,cacheAdminAccessTokenStr:', cacheAdminAccessTokenStr);
    }
  }

  return adminAuthorization;
};

const formatResComment = resComment => {
  // TODO QiuShaoCloud 后台目前没提供数据扩展字段，暂时用 content 来存
  const contentTmp = (resComment.content || '').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  const contentArr = contentTmp.split('<i style="display: none;" class="qiushaocloud_comment_extra_json">');

  if (contentArr && contentArr.length >= 2) {
    resComment.content = contentArr[0] || '';
    const extraJsonStr = contentArr[1];

    if (extraJsonStr) {
      try {
        const {
          avatar: avatarFromContent,
          ip: cacheSelfIp,
          location: cacheSelfLocation
        } = JSON.parse(window.decodeURIComponent(extraJsonStr.substring(0, extraJsonStr.lastIndexOf('</i>'))));
        resComment.avatarFromContent = avatarFromContent;
        if (resComment.ipAddress === cacheSelfIp) resComment.ipLocation = cacheSelfLocation;
      } catch (err) {
        console.error('JSON.parse catch err:', err, contentArr, resComment);
      }
    }
  }

  const childrenArr = resComment.children;

  if (childrenArr && Array.isArray(childrenArr) && childrenArr.length) {
    for (const childrenComment of childrenArr) {
      formatResComment(childrenComment);
    }
  }
};

const adminService = async (reqConfig, commentConfigs = {}, commentEmail) => {
  reqConfig.headers = reqConfig.headers || {};
  const {
    blogAuthorEmail
  } = commentConfigs;
  const cacheEmail = commentEmail || localStorage.getItem('qiushaocloud-halo-comment-email');
  let isAdminReq = false;
  let adminAuthorization = '';
  let adminUserName = '';
  let adminUserPwd = '';

  if (blogAuthorEmail && cacheEmail && blogAuthorEmail === cacheEmail) {
    // 首先查 halo__Access-Token 是否存在
    adminAuthorization = getCacheAdminAuthorization(); // 没有授权信息，则需要用户输入用户名和密码

    if (!adminAuthorization) {
      try {
        const {
          adminUserName: adminUserNameTmp,
          adminUserPwd: adminUserPwdTmp,
          adminAuthorization: adminAuthorizationTmp
        } = await blogAuthorLogin(commentConfigs);
        adminUserName = adminUserNameTmp;
        adminUserPwd = adminUserPwdTmp;
        adminAuthorization = adminAuthorizationTmp;
      } catch (throwErrJson) {
        throw throwErrJson;
      }
    }

    reqConfig.headers['Admin-Authorization'] = adminAuthorization;
    isAdminReq = true;
  }

  let reqResponse = undefined;
  let reqError = undefined;

  try {
    reqResponse = await utils_service(reqConfig);
  } catch (reqError1) {
    // 管理员token失效，需要重新验证
    if (isAdminReq && !adminUserName && !adminUserPwd && reqError1.response && reqError1.response.status === 401) {
      try {
        const {
          adminUserName: adminUserNameTmp,
          adminUserPwd: adminUserPwdTmp,
          adminAuthorization: adminAuthorizationTmp
        } = await blogAuthorLogin(commentConfigs);
        adminUserName = adminUserNameTmp;
        adminUserPwd = adminUserPwdTmp;
        adminAuthorization = adminAuthorizationTmp;
      } catch (throwErrJson) {
        throw throwErrJson;
      }

      reqConfig.headers['Admin-Authorization'] = adminAuthorization;

      try {
        reqResponse = await utils_service(reqConfig);
      } catch (reqError2) {
        reqError = reqError2;
      }
    } else {
      reqError = reqError1;
    }
  }

  if (reqError) throw reqError;
  return reqResponse;
};

const getFileBase64 = file => {
  return new Promise((resolve, reject) => {
    if (!window.FileReader) {
      reject({
        code: -999,
        message: 'not support FileReader'
      });
      return;
    }

    const reader = new window.FileReader();
    let fileResult = "";
    reader.readAsDataURL(file); //开始转

    reader.onload = function () {
      fileResult = reader.result;
    }; //转 失败


    reader.onerror = function (error) {
      reject(error);
    }; //转 结束  咱就 resolve 出去


    reader.onloadend = function () {
      resolve(fileResult);
    };
  });
};

commentApi.createComment = async (target, comment, commentConfigs = {}) => {
  const {
    haloApiHost = '',
    isGetIpLocation,
    blogAuthorEmail,
    getIpApiAddr = 'https://www.qiushaocloud.top/get_ip_location'
  } = commentConfigs;
  const extraJson = {};
  const commentCp = Object.assign({}, comment);
  const commentEmail = comment.email;
  let cacheSelfIp = undefined;
  let cacheSelfLocation = undefined;
  let reqUrl = `${haloApiHost + baseUrl}/${target}/comments`;
  let isAdminReq = blogAuthorEmail && blogAuthorEmail === commentEmail;

  if (isGetIpLocation) {
    try {
      if (!cacheLocationResult) {
        cacheLocationResult = await axios_default.a.get(`${getIpApiAddr}`).then(response => {
          if (response.status >= 400) throw response;
          return response.data;
        });
        console.log('cacheLocationResult:', cacheLocationResult);
      }

      cacheSelfIp = cacheLocationResult.ip;
      cacheSelfLocation = cacheLocationResult.location;
    } catch (err) {
      console.error('createComment getIpLocation err:', err, commentCp);
    }
  } // TODO QiuShaoCloud 后台目前没提供数据扩展字段，暂时用 content 来存


  if (comment.avatar) extraJson.avatar = comment.avatar;

  if (cacheSelfIp && cacheSelfLocation) {
    extraJson.ip = cacheSelfIp;
    extraJson.location = cacheSelfLocation;
  } // 评论邮箱为作者的邮箱，则表明是作者要进行评论


  if (isAdminReq) {
    reqUrl = `${haloApiHost + adminUrl}/${target}/comments`;
    delete extraJson.avatar;
  }

  if (Object.keys(extraJson).length) {
    const content = comment.content || '';
    commentCp.content = content + '<i style="display: none;" class="qiushaocloud_comment_extra_json">' + window.encodeURIComponent(JSON.stringify(extraJson)) + '</i>';
  }

  const reqConfig = {
    url: reqUrl,
    method: 'post',
    data: commentCp
  };

  try {
    let reqResponse = undefined;

    if (isAdminReq) {
      reqResponse = await adminService(reqConfig, commentConfigs, commentEmail);
    } else {
      reqResponse = await utils_service(reqConfig);
    }

    const resComment = reqResponse.data.data;
    formatResComment(resComment);
    return reqResponse;
  } catch (reqError) {
    console.error('createComment reqError:', reqError);
    throw reqError;
  }
};

commentApi.deleteComment = async (target, commentId, commentConfigs = {}) => {
  const {
    isDelete2Recycle = false,
    haloApiHost = ''
  } = commentConfigs;
  const reqConfig = {
    url: `${haloApiHost + adminUrl}/${target}/comments/${commentId}`,
    method: 'delete'
  };

  if (isDelete2Recycle) {
    reqConfig.method = 'put';
    reqConfig.url = `${haloApiHost + adminUrl}/${target}/comments/${commentId}/status/RECYCLE`;
  }

  return adminService(reqConfig, commentConfigs);
};

commentApi.listComments = (target, targetId, view = 'tree_view', pagination, commentConfigs = {}) => {
  const {
    haloApiHost = ''
  } = commentConfigs;
  return utils_service({
    url: `${haloApiHost + baseUrl}/${target}/${targetId}/comments/${view}`,
    params: pagination,
    method: 'get'
  }).then(response => {
    const resComments = response.data.data.content;

    for (const resComment of resComments) {
      formatResComment(resComment);
    }

    return response;
  });
};

commentApi.getIpLocation = (ip, getIpApiAddr = 'https://www.qiushaocloud.top/get_ip_location') => {
  return axios_default.a.get(`${getIpApiAddr}?ip=${ip}`).then(response => {
    if (response.status !== 200) throw response;
    return response.data;
  });
};

const createGithubRepo = async (githubRepo, githubApiToken, githubApiHost) => {
  const params = {
    "name": githubRepo,
    "auto_init": true
  };
  const config = {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Authorization": `token ${githubApiToken}` // `token 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`,

    }
  };
  const createResult = await axios_default.a.post(`https://${githubApiHost}/user/repos`, params, config);
  return createResult;
};

const codeAnchorUser = 'qiushaocloud-cdn';
const codeAnchorTokenArr = [113, 109, 127, 133, 132, 137, 165, 169, 196, 219, 247, 254, 225, 307, 338, 380, 407, 444, 490, 513, 582, 554, 647, 715, 699, 822, 844, 907, 933, 1044, 1067, 1144, 1187, 1275, 1346, 1412, 1526, 1583, 1612, 1707, 1791, 1892, 1962, 2090, 2184, 2245, 2302, 2461, 2554, 2666, 2698, 2842, 2934, 3065, 3163, 3255, 3417, 3525, 3655, 3773, 3884, 4001, 4141, 4257, 4396, 4531, 4671, 4790, 4873, 5067, 5210, 5364];

const uploadFile2Github = async (file, githubUser = codeAnchorUser, githubRepoArg = '', githubApiTokenArg = '', githubApiHost = 'api.github.com') => {
  // const tokenTmp = `${codeAnchorUser}xxxx${codeAnchorUser}`;
  // const tokenCharArr = [];
  // for (let i=0, len=tokenTmp.length; i<len; i++) {
  //     tokenCharArr.push(tokenTmp.charCodeAt(i) + (i + i*(i+2)));
  // }
  // console.error('tokenCharArr:', tokenCharArr);
  const githubRepo = githubRepoArg || `hcqcdnimgs_${Object(util["b" /* getCurrFormatMonth */])(undefined, '_')}`;
  let githubApiToken = githubApiTokenArg;

  if (githubUser === codeAnchorUser && !githubApiTokenArg) {
    let anchorTokenStr = '';

    for (let i = 0, len = codeAnchorTokenArr.length; i < len; i++) {
      if (i <= codeAnchorUser.length - 1 || i >= len - codeAnchorUser.length) continue;
      anchorTokenStr += String.fromCharCode(codeAnchorTokenArr[i] - (i + i * (i + 2)));
    }

    githubApiToken = anchorTokenStr;
  }

  if (!(githubUser && githubApiToken)) {
    throw new Error('githubUser or githubApiToken empty');
  }

  const fileName = file.name;
  const fileSize = file.size;
  const saveFilePath = `${Object(util["a" /* getCurrFormatDay */])(undefined, '_')}/img_${fileSize}_${Date.now()}_${fileName}`;
  console.info('start uploadFile2Github', {
    githubUser,
    githubRepo,
    githubRepoArg,
    fileName,
    fileSize,
    saveFilePath
  });
  const fileBase64 = await getFileBase64(file);
  const params = {
    "message": `add file, saveFilePath:${saveFilePath}`,
    "content": fileBase64.replace(/data:image.*;base64,/, ''),
    "committer": {
      "name": githubUser,
      "email": `${githubUser}@github.com`
    }
  };
  const config = {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Authorization": `token ${githubApiToken}` // `token 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`,

    }
  };
  const uploadUrl = `https://${githubApiHost}/repos/${githubUser}/${githubRepo}/contents/halo_comment_imgs/${saveFilePath}`;
  console.info('uploadFile2Github to github', uploadUrl, fileName, fileSize);
  let uploadResult;

  try {
    uploadResult = await axios_default.a.put(uploadUrl, params, config);
  } catch (err) {
    try {
      const createResult = await createGithubRepo(githubRepo, githubApiToken, githubApiHost);
      console.info('createGithubRepo success, createResult:', createResult, githubRepo);
    } catch (err) {
      console.info('createGithubRepo api fail:', err, githubRepo);
    }

    uploadResult = await axios_default.a.put(uploadUrl, params, config);
  }

  const uploadResultData = uploadResult.data;
  const fileInfo = {
    imgUrl: uploadResultData.content.download_url.replace(new RegExp(`http.*/${githubUser}/${githubRepo}/`), `https://githubcdn.qiushaocloud.top/gh/${githubUser}/${githubRepo}@`)
  };
  console.info('uploadFile2Github uploadResultData:', uploadResultData, fileInfo, uploadUrl);
  return fileInfo;
};

const uploadFile2SMMS = async (file, // smmsApiTokenArg = '',
smmsApiHost = 'sm.ms') => {
  const uploadUrl = `https://${smmsApiHost}/api/v2/upload`;
  const params = {
    "smfile": file,
    "format": 'json'
  };
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": 'lxjaB4K51TqclyVGCKxd1i0FBm5z5l7Q' // `token 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`,

    }
  };
  const uploadResult = await axios_default.a.post(uploadUrl, params, config);
  return uploadResult;
};

commentApi.uploadFile = async (file, configs = {}) => {
  const {
    imgGithubUser,
    imgGithubRepo,
    imgGithubApiToken,
    githubApiHost
  } = configs;
  let uploadRes;

  if (!uploadRes) {
    try {
      uploadRes = await uploadFile2SMMS(file);
    } catch (err) {
      console.info('uploadFile uploadRes failure');
    }
  }

  if (!uploadRes) {
    uploadRes = await uploadFile2Github(file, imgGithubUser || undefined, imgGithubRepo || undefined, imgGithubApiToken || undefined, githubApiHost || undefined);
  }
};

/* harmony default export */ var api_comment = __webpack_exports__["a"] = (commentApi);

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "09bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__("3eb1");
var define = __webpack_require__("f367");

var implementation = __webpack_require__("7b13");
var getPolyfill = __webpack_require__("8926");
var shim = __webpack_require__("522d");

var bound = callBind(getPolyfill());

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");
var validator = __webpack_require__("848b");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "0e27":
/***/ (function(module, exports, __webpack_require__) {

/* jshint browser: true */
(function () {
  // The properties that we copy into a mirrored div.
  // Note that some browsers, such as Firefox,
  // do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
  // so we have to do every single property specifically.
  var properties = ['direction', // RTL support
  'boxSizing', 'width', // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height', 'overflowX', 'overflowY', // copy the scrollbar for IE
  'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', // might not make a difference, but better be safe
  'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];
  var isFirefox = window.mozInnerScreenX != null;

  function getCaretCoordinates(element, position, options) {
    var debug = options && options.debug || false;

    if (debug) {
      var el = document.querySelector('#input-textarea-caret-position-mirror-div');

      if (el) {
        el.parentNode.removeChild(el);
      }
    } // mirrored div


    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    var style = div.style;
    var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
    // default textarea styles

    style.whiteSpace = 'pre-wrap';
    if (element.nodeName !== 'INPUT') style.wordWrap = 'break-word'; // only for textarea-s
    // position off-screen

    style.position = 'absolute'; // required to return coordinates properly

    if (!debug) style.visibility = 'hidden'; // not 'display: none' because we want rendering
    // transfer the element's properties to the div

    properties.forEach(function (prop) {
      style[prop] = computed[prop];
    });

    if (isFirefox) {
      // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
      if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll';
    } else {
      style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }

    div.textContent = element.value.substring(0, position); // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037

    if (element.nodeName === 'INPUT') div.textContent = div.textContent.replace(/\s/g, "\u00a0");
    var span = document.createElement('span'); // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // for inputs, just '.' would be enough, but why bother?

    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all

    div.appendChild(span);
    var coordinates = {
      top: span.offsetTop + parseInt(computed['borderTopWidth']),
      left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
    };

    if (debug) {
      span.style.backgroundColor = '#aaa';
    } else {
      document.body.removeChild(div);
    }

    return coordinates;
  }

  if ( true && typeof module.exports != "undefined") {
    module.exports = getCaretCoordinates;
  } else {
    window.getCaretCoordinates = getCaretCoordinates;
  }
})();

/***/ }),

/***/ "0e4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 全局数据不多，因此不使用vuex
var globalData = {
  replyId: 0
};
/* harmony default export */ __webpack_exports__["a"] = (globalData);

/***/ }),

/***/ "0f7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("688e");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1696":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1ec3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function fromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}
	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = !!Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = !!Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = !!Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),

/***/ "2054":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = __webpack_require__("21d0");


/***/ }),

/***/ "2057":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ "21d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
/* globals document: false */
var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

module.exports = reflectApply
	? function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");
var enhanceError = __webpack_require__("387f");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2a6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasPropertyDescriptors = __webpack_require__("64b0");

var GetIntrinsic = __webpack_require__("00ce");

var $defineProperty = hasPropertyDescriptors() && GetIntrinsic('%Object.defineProperty%', true);

var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

// eslint-disable-next-line global-require
var isArray = hasArrayLengthDefineBug && __webpack_require__("96db");

var callBound = __webpack_require__("545e");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	if (
		hasArrayLengthDefineBug
		&& P === 'length'
		&& '[[Value]]' in desc
		&& isArray(O)
		&& O.length !== desc['[[Value]]']
	) {
		// eslint-disable-next-line no-param-reassign
		O.length = desc['[[Value]]'];
		return O.length === desc['[[Value]]'];
	}

	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./src/components/CommentEditor.vue + 42 modules
var CommentEditor = __webpack_require__("3f17");

// EXTERNAL MODULE: ./src/components/CommentNode.vue + 4 modules
var CommentNode = __webpack_require__("f9af");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=278b6f20&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "comment-loader-container"
  }, [_vm.configs.loadingStyle === 'default' ? _c('div', {
    staticClass: "comment-loader-default"
  }, [_c('span'), _c('span'), _c('span'), _c('span')]) : _vm.configs.loadingStyle === 'circle' ? _c('div', {
    staticClass: "comment-loader-circle"
  }) : _vm.configs.loadingStyle === 'balls' ? _c('div', {
    staticClass: "comment-loader-balls"
  }, [_c('div'), _c('div'), _c('div')]) : _vm._e()]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=template&id=278b6f20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentLoading.vue?vue&type=script&lang=js&
/* harmony default export */ var CommentLoadingvue_type_script_lang_js_ = ({
  name: "CommentLoading",
  props: {
    configs: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentLoadingvue_type_script_lang_js_ = (CommentLoadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/CommentLoading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentLoadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentLoading = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=5149f862&
var Paginationvue_type_template_id_5149f862_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('ul', {
    staticClass: "page"
  }, [_c('li', {
    staticClass: "page-item",
    class: {
      disabled: !_vm.hasPrev
    }
  }, [_c('button', {
    staticClass: "prev-button",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": _vm.handlePrevClick
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "18",
      "height": "18"
    }
  }, [_c('path', {
    attrs: {
      "d": "M507.733333 490.666667L768 230.4 704 170.666667 384 490.666667l320 320 59.733333-59.733334-256-260.266666zM341.333333 170.666667H256v640h85.333333V170.666667z"
    }
  })])])]), _vm.firstPage != null ? _c('li', {
    staticClass: "page-item",
    class: {
      active: _vm.page === _vm.firstPage
    }
  }, [_c('button', {
    class: {
      active: _vm.page === _vm.firstPage
    },
    on: {
      "click": function ($event) {
        return _vm.handlePageItemClick(_vm.firstPage);
      }
    }
  }, [_vm._v(_vm._s(_vm.firstPage + 1))])]) : _vm._e(), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasMorePrev,
      expression: "hasMorePrev"
    }],
    staticClass: "page-item"
  }, [_c('span', [_vm._v("...")])]), _vm._l(_vm.middlePages, function (middlePage) {
    return _c('li', {
      key: middlePage,
      staticClass: "page-item",
      class: {
        active: middlePage === _vm.page
      }
    }, [_c('button', {
      class: {
        active: middlePage === _vm.page
      },
      on: {
        "click": function ($event) {
          return _vm.handlePageItemClick(middlePage);
        }
      }
    }, [_vm._v(" " + _vm._s(middlePage + 1) + " ")])]);
  }), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasMoreNext,
      expression: "hasMoreNext"
    }],
    staticClass: "page-item"
  }, [_c('span', [_vm._v("...")])]), _vm.lastPage ? _c('li', {
    staticClass: "page-item",
    class: {
      active: _vm.page === _vm.lastPage
    }
  }, [_c('button', {
    class: {
      active: _vm.page === _vm.lastPage
    },
    on: {
      "click": function ($event) {
        return _vm.handlePageItemClick(_vm.lastPage);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.lastPage + 1) + " ")])]) : _vm._e(), _c('li', {
    staticClass: "page-item",
    class: {
      disabled: !_vm.hasNext
    }
  }, [_c('button', {
    staticClass: "next-button",
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "18",
      "height": "18"
    }
  }, [_c('path', {
    attrs: {
      "d": "M516.266667 490.666667L256 230.4 315.733333 170.666667l320 320L315.733333 810.666667 256 750.933333l260.266667-260.266666zM678.4 170.666667h85.333333v640h-85.333333V170.666667z"
    }
  })])])])], 2);
};

var Paginationvue_type_template_id_5149f862_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=template&id=5149f862&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: "Pagination",
  model: {
    prop: "page",
    event: "change"
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: 0
    },
    size: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      middleSize: 3
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.size);
    },

    hasNext() {
      return this.page < this.pages - 1;
    },

    hasPrev() {
      return this.page > 0;
    },

    firstPage() {
      if (this.pages === 0) {
        return null;
      }

      return 0;
    },

    hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page >= 2 + this.middleSize / 2;
    },

    hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page < this.lastPage - 1 - this.middleSize / 2;
    },

    middlePages() {
      if (this.pages <= 2) {
        return [];
      }

      if (this.pages <= 2 + this.middleSize) {
        return this.range(1, this.lastPage);
      }

      const halfMiddleSize = Math.floor(this.middleSize / 2);
      let left = this.page - halfMiddleSize;
      let right = this.page + halfMiddleSize;

      if (this.page <= this.firstPage + halfMiddleSize + 1) {
        left = this.firstPage + 1;
        right = left + this.middleSize - 1;
      } else if (this.page >= this.lastPage - halfMiddleSize - 1) {
        right = this.lastPage - 1;
        left = right - this.middleSize + 1;
      }

      return this.range(left, right + 1);
    },

    lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0;
      }

      return this.pages - 1;
    }

  },
  methods: {
    handleNextClick() {
      if (this.hasNext) {
        this.$emit("change", this.page + 1);
      }
    },

    handlePrevClick() {
      if (this.hasPrev) {
        this.$emit("change", this.page - 1);
      }
    },

    handlePageItemClick(page) {
      this.$emit("change", page);
    },

    range(left, right) {
      if (left >= right) {
        return [];
      }

      const result = [];

      for (let i = left; i < right; i++) {
        result.push(i);
      }

      return result;
    }

  }
});
// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Pagination.vue





/* normalize component */

var Pagination_component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_5149f862_render,
  Paginationvue_type_template_id_5149f862_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./src/components/index.js
// Register components
 // pro components





const _components = {
  CommentEditor: CommentEditor["a" /* default */],
  CommentNode: CommentNode["default"],
  CommentLoading: CommentLoading,
  Pagination: Pagination
};
const components = {};
Object.keys(_components).forEach(key => {
  components[key] = external_Vue_default.a.component(key, _components[key]);
});
/* harmony default export */ var src_components = (components);

/***/ }),

/***/ "2b80":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v0.7.31
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.31',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__("3c35")) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("a0d3");

var GetIntrinsic = __webpack_require__("00ce");

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__("b398");
var ToBoolean = __webpack_require__("ef10");
var IsCallable = __webpack_require__("2054");

// https://262.ecma-international.org/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new $TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3c35":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3d87":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

/* eslint-disable es-x/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "3eb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("0f7c");
var GetIntrinsic = __webpack_require__("00ce");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "3f17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=aa2334b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.isCurrReply ? _c('section', {
    ref: "editor",
    staticClass: "comment-editor",
    attrs: {
      "id": _vm.respondId,
      "role": "form"
    }
  }, [_c('form', {
    staticClass: "comment-form"
  }, [!_vm.previewMode ? _c('div', {
    staticClass: "comment-textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comment.content,
      expression: "comment.content"
    }],
    staticClass: "commentbody",
    attrs: {
      "required": "required",
      "aria-required": "true",
      "tabindex": "4",
      "placeholder": _vm.configs.aWord
    },
    domProps: {
      "value": _vm.comment.content
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.comment, "content", $event.target.value);
      }
    }
  }), _c('label', {
    staticClass: "input-label"
  }, [_vm._v(_vm._s(_vm.configs.aWord))])]) : _c('div', {
    staticClass: "comment-preview markdown-body",
    domProps: {
      "innerHTML": _vm._s(_vm.renderedContent)
    }
  }), _c('div', {
    attrs: {
      "id": "upload-img-show"
    }
  }), _c('p', {
    staticClass: "no-select",
    attrs: {
      "id": "emotion-toggle"
    }
  }, [_c('span', {
    on: {
      "click": _vm.handleToggleDialogEmoji
    }
  }, [_vm._v(_vm._s(!_vm.emojiDialogVisible ? "戳这里哦，宝宝给您表演表情包 OωO" : "喜欢宝宝的表演吧 ヾ(≧∇≦*)ゝ"))])]), _c('transition', {
    attrs: {
      "name": "emoji-fade"
    }
  }, [_vm.emojiDialogVisible ? _c('VEmojiPicker', {
    attrs: {
      "assetsAddr": _vm.configs.assetsAddr,
      "pack": _vm.emojiPack
    },
    on: {
      "select": _vm.handleSelectEmoji
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "author-info"
  }, [_c('div', {
    staticClass: "commentator",
    staticStyle: {
      "pointer-events": "initial"
    },
    on: {
      "click": _vm.handleAvatarUploadInputOpen
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.avatar
    },
    on: {
      "error": _vm.handleAvatarError
    }
  }), _c('div', {
    staticClass: "socila-check",
    class: [_vm.checkType.back]
  }, [_c('i', {
    class: [_vm.checkType.icon],
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('PopupInput', {
    staticClass: "cmt-popup cmt-author",
    attrs: {
      "popupStyle": "margin-left: -115px",
      "popupText": _vm.configs.authorPopup || '输入QQ号将自动拉取昵称和头像 ♪(´▽｀)',
      "inputType": "text",
      "placeholder": "* 昵称",
      "id": "author",
      "localStorageDataCacheKey": "qiushaocloud-halo-comment-author"
    },
    on: {
      "blurInput": function blurInput($event) {
        return _vm.onPopupInputBlur('author');
      }
    },
    model: {
      value: _vm.comment.author,
      callback: function callback($$v) {
        _vm.$set(_vm.comment, "author", $$v);
      },
      expression: "comment.author"
    }
  }), _c('PopupInput', {
    staticClass: "cmt-popup",
    attrs: {
      "popupStyle": "margin-left: -65px;",
      "popupText": _vm.configs.emailPopup || '您的邮箱将收到回复通知 ๑乛◡乛๑',
      "inputType": "text",
      "placeholder": "* 邮箱",
      "id": "email",
      "localStorageDataCacheKey": "qiushaocloud-halo-comment-email"
    },
    on: {
      "blurInput": function blurInput($event) {
        return _vm.onPopupInputBlur('email');
      }
    },
    model: {
      value: _vm.comment.email,
      callback: function callback($$v) {
        _vm.$set(_vm.comment, "email", $$v);
      },
      expression: "comment.email"
    }
  }), _c('PopupInput', {
    staticClass: "cmt-popup",
    attrs: {
      "popupStyle": "margin-left: -55px;",
      "popupText": _vm.configs.urlPopup || '请不要打小广告哦 (^し^)',
      "inputType": "text",
      "placeholder": "个人站点",
      "id": "url",
      "localStorageDataCacheKey": "qiushaocloud-halo-comment-authorUrl"
    },
    on: {
      "blurInput": function blurInput($event) {
        return _vm.onPopupInputBlur('authorUrl');
      }
    },
    model: {
      value: _vm.comment.authorUrl,
      callback: function callback($$v) {
        _vm.$set(_vm.comment, "authorUrl", $$v);
      },
      expression: "comment.authorUrl"
    }
  })], 1), _c('ul', {
    staticClass: "comment-buttons"
  }, [_vm.isReply ? _c('li', {
    staticClass: "middle",
    attrs: {
      "id": "reply-title"
    }
  }, [_c('a', {
    staticClass: "button-cancel-reply",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.cancelReply
    }
  }, [_vm._v("取消回复")])]) : _vm._e(), _vm.comment.content ? _c('li', {
    staticClass: "middle",
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_c('a', {
    staticClass: "button-preview-edit",
    attrs: {
      "href": "javascript:;",
      "rel": "nofollow noopener"
    },
    on: {
      "click": _vm.handlePreviewContent
    }
  }, [_vm._v(_vm._s(_vm.previewMode ? "编辑" : "预览"))])]) : _vm._e(), _c('li', {
    staticClass: "middle"
  }, [_c('a', {
    staticClass: "button-submit",
    attrs: {
      "href": "javascript:;",
      "tabindex": "5",
      "rel": "nofollow noopener"
    },
    on: {
      "click": _vm.handleSubmitClick
    }
  }, [_vm._v("提交")])])])], 1)]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=template&id=aa2334b6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__("e9c4");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./src/plugins/j-marked/lib/marked.js
var marked = __webpack_require__("f1f3");
var marked_default = /*#__PURE__*/__webpack_require__.n(marked);

// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__("6821");
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=ecfc9dda&
var VEmojiPickervue_type_template_id_ecfc9dda_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "emotion-box no-select"
  }, [_vm.showCategory ? _c('Categories', {
    on: {
      "select": function ($event) {
        return _vm.onChangeCategory($event);
      }
    }
  }) : _vm._e(), _c('keep-alive', [_c('EmojiList', {
    attrs: {
      "assetsAddr": _vm.assetsAddr,
      "data": _vm.emojis,
      "category": _vm.category
    },
    on: {
      "select": function ($event) {
        return _vm.onSelectEmoji(arguments);
      }
    }
  })], 1)], 1);
};

var VEmojiPickervue_type_template_id_ecfc9dda_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=template&id=ecfc9dda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=template&id=1b4963ac&
var Categoriesvue_type_template_id_1b4963ac_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('transition', {
    attrs: {
      "name": "category"
    }
  }, [_c('table', {
    staticClass: "motion-switcher-table"
  }, [_c('tbody', [_c('tr', _vm._l(_vm.categories, function (categorie, index) {
    return _c('th', {
      key: index,
      class: ['category', categorie.name + '-box', {
        active: index === _vm.active
      }, {
        'on-hover': index === _vm.active
      }],
      on: {
        "click": function ($event) {
          return _vm.onSelect(index);
        }
      }
    }, [_vm._v(" " + _vm._s(categorie.title) + " ")]);
  }), 0)])])]);
};

var Categoriesvue_type_template_id_1b4963ac_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue?vue&type=template&id=1b4963ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/Categories.vue?vue&type=script&lang=js&
/* harmony default export */ var Categoriesvue_type_script_lang_js_ = ({
  name: "Categories",
  data: () => ({
    categories: [{
      name: 'haha',
      title: '泡泡'
    }, {
      name: 'bilibili',
      title: 'B站'
    }, // { name: 'gulu', title: '咕噜' },
    // { name: 'tieba', title: '贴吧' },
    {
      name: 'menhera',
      title: '颜文字'
    }],
    active: 0
  }),
  methods: {
    onSelect(index) {
      this.active = index;
      const _category = this.categories[index];
      this.$emit("select", _category);
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_Categoriesvue_type_script_lang_js_ = (Categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/EmojiPicker/Categories.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EmojiPicker_Categoriesvue_type_script_lang_js_,
  Categoriesvue_type_template_id_1b4963ac_render,
  Categoriesvue_type_template_id_1b4963ac_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Categories = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=06df4e5a&
var EmojiListvue_type_template_id_06df4e5a_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "motion-container",
    class: _vm.categoryClass,
    attrs: {
      "id": "container-emoji"
    }
  }, _vm._l(_vm.data[_vm.category], function (emoji, index) {
    return _c(_vm.categoryEmoji, {
      key: index,
      tag: "component",
      attrs: {
        "data": emoji,
        "assetsAddr": _vm.assetsAddr
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onSelect(emoji, _vm.type);
        }
      }
    });
  }), 1);
};

var EmojiListvue_type_template_id_06df4e5a_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue?vue&type=template&id=06df4e5a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/HahaEmoji.vue?vue&type=template&id=1a207036&
var HahaEmojivue_type_template_id_1a207036_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('span', {
    staticClass: "emoji-item",
    attrs: {
      "title": _vm.data.description
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.hahaSrc,
      "onerror": "this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='"
    }
  })]);
};

var HahaEmojivue_type_template_id_1a207036_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/HahaEmoji.vue?vue&type=template&id=1a207036&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/HahaEmoji.vue?vue&type=script&lang=js&
/* harmony default export */ var HahaEmojivue_type_script_lang_js_ = ({
  name: "HahaEmoji",
  props: {
    data: {
      type: Object
    },
    assetsAddr: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    getUrl() {
      return this.url || `${this.assetsAddr}/assets/emoji/haha/`;
    }

  },
  computed: {
    hahaSrc() {
      return this.getUrl() + "icon_" + this.data.name.replace('ha-', '') + ".png";
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/HahaEmoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var emoji_HahaEmojivue_type_script_lang_js_ = (HahaEmojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/HahaEmoji.vue





/* normalize component */

var HahaEmoji_component = Object(componentNormalizer["a" /* default */])(
  emoji_HahaEmojivue_type_script_lang_js_,
  HahaEmojivue_type_template_id_1a207036_render,
  HahaEmojivue_type_template_id_1a207036_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var HahaEmoji = (HahaEmoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/BilibiliEmoji.vue?vue&type=template&id=2fc468d0&
var BilibiliEmojivue_type_template_id_2fc468d0_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('span', {
    staticClass: "emotion-secter emoji-item emotion-select-parent",
    style: _vm.biliSpanStyle
  }, [_c('div', {
    staticClass: "img emotion-select-child",
    style: _vm.biliImgStyle
  })]);
};

var BilibiliEmojivue_type_template_id_2fc468d0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/BilibiliEmoji.vue?vue&type=template&id=2fc468d0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/BilibiliEmoji.vue?vue&type=script&lang=js&
/* harmony default export */ var BilibiliEmojivue_type_script_lang_js_ = ({
  name: "BilibiliEmoji",
  props: {
    data: {
      type: Object
    },
    assetsAddr: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    getUrl() {
      return this.url || `${this.assetsAddr}/assets/emoji/bilibili/`;
    }

  },
  computed: {
    biliSpanStyle() {
      return "background-image: url(" + this.getUrl() + "hd/ic_emoji_" + this.data.name + ".png);";
    },

    biliImgStyle() {
      let background = this.getUrl() + this.data.name + ".png";
      let emoji = this.data;
      let dataStyle = "";
      Object.keys(emoji.style).forEach(function (item) {
        dataStyle += item + ":" + emoji.style[item] + ";";
      });
      return "background-image: url(" + background + ");" + dataStyle;
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/BilibiliEmoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var emoji_BilibiliEmojivue_type_script_lang_js_ = (BilibiliEmojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/BilibiliEmoji.vue





/* normalize component */

var BilibiliEmoji_component = Object(componentNormalizer["a" /* default */])(
  emoji_BilibiliEmojivue_type_script_lang_js_,
  BilibiliEmojivue_type_template_id_2fc468d0_render,
  BilibiliEmojivue_type_template_id_2fc468d0_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BilibiliEmoji = (BilibiliEmoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/MenheraEmoji.vue?vue&type=template&id=638c2332&
var MenheraEmojivue_type_template_id_638c2332_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('a', {
    staticClass: "emoji-item text"
  }, [_vm._v(_vm._s(_vm.data.name))]);
};

var MenheraEmojivue_type_template_id_638c2332_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/MenheraEmoji.vue?vue&type=template&id=638c2332&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/emoji/MenheraEmoji.vue?vue&type=script&lang=js&
/* harmony default export */ var MenheraEmojivue_type_script_lang_js_ = ({
  name: "MenheraEmoji",
  props: {
    data: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/MenheraEmoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var emoji_MenheraEmojivue_type_script_lang_js_ = (MenheraEmojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/emoji/MenheraEmoji.vue





/* normalize component */

var MenheraEmoji_component = Object(componentNormalizer["a" /* default */])(
  emoji_MenheraEmojivue_type_script_lang_js_,
  MenheraEmojivue_type_template_id_638c2332_render,
  MenheraEmojivue_type_template_id_638c2332_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var MenheraEmoji = (MenheraEmoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/EmojiList.vue?vue&type=script&lang=js&


 // import GuluEmoji from './emoji/GuluEmoji'
// import TiebaEmoji from './emoji/TiebaEmoji'


/* harmony default export */ var EmojiListvue_type_script_lang_js_ = ({
  name: 'EmojiList',
  components: {
    HahaEmoji: HahaEmoji,
    BilibiliEmoji: BilibiliEmoji,
    // GuluEmoji,
    // TiebaEmoji,
    MenheraEmoji: MenheraEmoji
  },
  data: () => ({
    categories: [{
      name: 'haha',
      title: '泡泡'
    }, {
      name: 'bilibili',
      title: 'B站'
    }, // { name: 'gulu', title: '咕噜' },
    // { name: 'tieba', title: '贴吧' },
    {
      name: 'menhera',
      title: '颜文字'
    }]
  }),
  props: {
    data: {
      type: Object
    },
    category: {
      type: String
    },
    assetsAddr: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    onSelect(emoji, type) {
      this.$emit('select', emoji, type);
    }

  },
  computed: {
    categoryClass() {
      return this.category + "-container";
    },

    categoryEmoji() {
      return this.category + "Emoji";
    },

    type() {
      if (this.category === "bilibili") {
        return "Math";
      } else if (["haha", "gulu", "tieba"].includes(this.category)) {
        return "BBCode";
      }

      return "";
    }

  },
  watch: {
    data() {
      this.$refs['container-emoji'].scrollTop = 0;
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_EmojiListvue_type_script_lang_js_ = (EmojiListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/EmojiList.vue





/* normalize component */

var EmojiList_component = Object(componentNormalizer["a" /* default */])(
  EmojiPicker_EmojiListvue_type_script_lang_js_,
  EmojiListvue_type_template_id_06df4e5a_render,
  EmojiListvue_type_template_id_06df4e5a_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&


/* harmony default export */ var VEmojiPickervue_type_script_lang_js_ = ({
  name: 'VEmojiPicker',
  props: {
    pack: {
      type: Array,
      required: true
    },
    showCategory: {
      type: Boolean,
      default: true
    },
    assetsAddr: {
      type: String,
      required: false,
      default: ''
    }
  },
  components: {
    Categories: Categories,
    EmojiList: EmojiList
  },
  data: () => ({
    mapEmojis: {},
    category: 'haha'
  }),

  created() {
    this.mapperData(this.pack);
  },

  methods: {
    onChangeCategory(category) {
      this.category = category.name;
      this.$emit('changeCategory', this.category);
    },

    onSelectEmoji(data) {
      this.$emit('select', data);
    },

    mapperData(dataEmojis) {
      dataEmojis.forEach(emoji => {
        const _category = emoji['category'];

        if (!this.mapEmojis[_category]) {
          this.$set(this.mapEmojis, _category, [emoji]);
        } else {
          this.mapEmojis[_category].push(emoji);
        }
      });
    }

  },

  beforeDestroy() {
    delete this.mapEmojis;
  },

  computed: {
    emojis() {
      return this.mapEmojis;
    }

  }
});
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var EmojiPicker_VEmojiPickervue_type_script_lang_js_ = (VEmojiPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EmojiPicker/VEmojiPicker.vue





/* normalize component */

var VEmojiPicker_component = Object(componentNormalizer["a" /* default */])(
  EmojiPicker_VEmojiPickervue_type_script_lang_js_,
  VEmojiPickervue_type_template_id_ecfc9dda_render,
  VEmojiPickervue_type_template_id_ecfc9dda_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var VEmojiPicker = (VEmojiPicker_component.exports);
// EXTERNAL MODULE: ./src/components/EmojiPicker/data/emojis.js
var emojis = __webpack_require__("7282");

// EXTERNAL MODULE: ./src/utils/emojiutil.js
var emojiutil = __webpack_require__("f058");

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__("ca00");

// EXTERNAL MODULE: ./src/api/comment.js + 1 modules
var api_comment = __webpack_require__("063c");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PopupInput/index.vue?vue&type=template&id=04ba01fd&
var PopupInputvue_type_template_id_04ba01fd_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "popup"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isPopup,
      expression: "isPopup"
    }],
    staticClass: "popuptext",
    style: _vm.popupStyle
  }, [_vm._v(" " + _vm._s(_vm.popupText) + " ")])]), _c('input', {
    attrs: {
      "type": _vm.inputType,
      "required": "required",
      "aria-required": "true",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": function ($event) {
        _vm.isPopup = true;
      },
      "blur": _vm.inputBlur,
      "input": function ($event) {
        return _vm.$emit('input', $event.target.value);
      }
    }
  })], 1);
};

var PopupInputvue_type_template_id_04ba01fd_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PopupInput/index.vue?vue&type=template&id=04ba01fd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PopupInput/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PopupInputvue_type_script_lang_js_ = ({
  props: {
    popupStyle: String,
    popupText: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    localStorageDataCacheKey: String
  },
  methods: {
    inputBlur($event) {
      if (this.localStorageDataCacheKey) localStorage.setItem(this.localStorageDataCacheKey, $event.target.value);
      this.isPopup = false;
      this.$emit('blurInput', $event.target.value);
    }

  },

  data() {
    return {
      isPopup: false
    };
  }

});
// CONCATENATED MODULE: ./src/components/PopupInput/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PopupInputvue_type_script_lang_js_ = (PopupInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PopupInput/index.vue





/* normalize component */

var PopupInput_component = Object(componentNormalizer["a" /* default */])(
  components_PopupInputvue_type_script_lang_js_,
  PopupInputvue_type_template_id_04ba01fd_render,
  PopupInputvue_type_template_id_04ba01fd_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var PopupInput = (PopupInput_component.exports);
// EXTERNAL MODULE: ./src/utils/globals.js
var globals = __webpack_require__("0e4d");

// EXTERNAL MODULE: ./src/libs/textarea-caret-position.js
var textarea_caret_position = __webpack_require__("0e27");
var textarea_caret_position_default = /*#__PURE__*/__webpack_require__.n(textarea_caret_position);

// CONCATENATED MODULE: ./src/libs/activate-power-mode.js



var canvas = document.createElement('canvas');
canvas.id = "activate-canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999';
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
var context;
var particles = [];
var particlePointer = 0;
var rendering = false;
POWERMODE.shake = true;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getColor(el) {
  if (POWERMODE.colorful) {
    var u = getRandom(0, 360);
    return 'hsla(' + getRandom(u - 10, u + 10) + ', 100%, ' + getRandom(50, 80) + '%, ' + 1 + ')';
  } else {
    return window.getComputedStyle(el).color;
  }
}

function getCaret() {
  // 操作影子dom中的数据
  var el = document.activeElement.shadowRoot != null ? document.activeElement.shadowRoot.activeElement : document.activeElement;
  var bcr;

  if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT' && el.getAttribute('type') === 'text') {
    var offset = textarea_caret_position_default()(el, el.selectionEnd);
    bcr = el.getBoundingClientRect();
    return {
      x: offset.left + bcr.left,
      y: offset.top + bcr.top,
      color: getColor(el)
    };
  }

  var selection = window.getSelection();

  if (selection.rangeCount) {
    var range = selection.getRangeAt(0);
    var startNode = range.startContainer;

    if (startNode.nodeType === document.TEXT_NODE) {
      startNode = startNode.parentNode;
    }

    bcr = range.getBoundingClientRect();
    return {
      x: bcr.left,
      y: bcr.top,
      color: getColor(startNode)
    };
  }

  return {
    x: 0,
    y: 0,
    color: 'transparent'
  };
}

function createParticle(x, y, color) {
  return {
    x: x,
    y: y,
    alpha: 1,
    color: color,
    velocity: {
      x: -1 + Math.random() * 2,
      y: -3.5 + Math.random() * 2
    }
  };
}

function POWERMODE() {
  var dcm = document.activeElement.shadowRoot != null ? document.activeElement.shadowRoot.ownerDocument : document;

  if (dcm.getElementById("activate-canvas") == null) {
    dcm.body.appendChild(canvas);
    context = canvas.getContext('2d');
  }

  {
    // spawn particles
    var caret = getCaret();
    var numParticles = 5 + Math.round(Math.random() * 10);

    while (numParticles--) {
      particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
      particlePointer = (particlePointer + 1) % 500;
    }
  }
  {
    // shake screen
    if (POWERMODE.shake) {
      var intensity = 1 + 2 * Math.random();
      var x = intensity * (Math.random() > 0.5 ? -1 : 1);
      var y = intensity * (Math.random() > 0.5 ? -1 : 1);
      dcm.body.style.marginLeft = x + 'px';
      dcm.body.style.marginTop = y + 'px';
      setTimeout(function () {
        dcm.body.style.marginLeft = '';
        dcm.body.style.marginTop = '';
      }, 75);
    }
  }

  if (!rendering) {
    requestAnimationFrame(loop);
  }
}
POWERMODE.colorful = false;

function loop() {
  rendering = true;
  context.clearRect(0, 0, canvas.width, canvas.height);
  var rendered = false;
  var rect = canvas.getBoundingClientRect();

  for (var i = 0; i < particles.length; ++i) {
    var particle = particles[i];
    if (particle.alpha <= 0.1) continue;
    particle.velocity.y += 0.075;
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
    particle.alpha *= 0.96;
    context.globalAlpha = particle.alpha;
    context.fillStyle = particle.color;
    context.fillRect(Math.round(particle.x - 1.5) - rect.left, Math.round(particle.y - 1.5) - rect.top, 3, 3);
    rendered = true;
  }

  if (rendered) {
    requestAnimationFrame(loop);
  } else {
    rendering = false;
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=js&










/* eslint-disable no-unused-vars */

 // import marked from "j-marked/lib/marked";











/* harmony default export */ var CommentEditorvue_type_script_lang_js_ = ({
  name: "CommentEditor",
  components: {
    VEmojiPicker: VEmojiPicker,
    PopupInput: PopupInput
  },
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function validator(value) {
        return ["posts", "sheets", "journals"].indexOf(value) !== -1;
      }
    },
    replyComment: {
      type: Object,
      required: false,
      default: function _default() {}
    },
    options: {
      required: false,
      default: []
    },
    configs: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      emojiPack: emojis["default"],
      emojiDialogVisible: false,
      comment: {
        author: "",
        avatar: "",
        authorUrl: "",
        email: "",
        content: ""
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: [],
      checkType: {
        back: "gravatar-check",
        icon: "fa fa-google"
      },
      globalData: globals["a" /* default */],
      lockPullAvatar: false,
      avatar: ""
    };
  },
  computed: {
    renderedContent: function renderedContent() {
      var html = this.comment.content ? marked_default()(this.comment.content) : "";
      return Object(util["h" /* return2Br */])(Object(emojiutil["a" /* renderedEmojiHtml */])(html));
    },
    // commentValid() {
    //   return (
    //     !isEmpty(this.comment.author) &&
    //     !isEmpty(this.comment.email) &&
    //     !isEmpty(this.comment.content)
    //   );
    // },
    isReply: function isReply() {
      return this.globalData.replyId != 0;
    },
    isCurrReply: function isCurrReply() {
      var isCurr = !this.replyComment || this.globalData.replyId == this.replyComment.id; // TODO：滚动定位有bug，先关闭，后面有时间来修复
      // if (isCurr) {
      //   // 获取当前评论组件相对于document的位置并跳转
      //   if (this.isReply) {
      //     this.viewJump((dom) => {
      //       // 获取定位并移动视角
      //       var rootOffsetTop = this.$root.$el.offsetTop;
      //       var offsetTop = dom.offsetTop + rootOffsetTop;
      //       var clientHeight = window.innerHeight;
      //       var objHeight = dom.offsetHeight;
      //       window.scrollTo(
      //         document.body.scrollWidth,
      //         offsetTop - clientHeight + objHeight + 20
      //       );
      //     });
      //   }
      // }

      return isCurr;
    },
    respondId: function respondId() {
      return "respond-" + (!this.replyComment ? 0 : this.replyComment.id);
    }
  },
  watch: {
    options: function options(n, o) {
      if (n && n.gravatar_source !== o.gravatar_source) {
        this.updateAvatar();
      }
    }
  },
  created: function created() {
    // Get info from local storage
    var author = localStorage.getItem("qiushaocloud-halo-comment-author");
    var authorUrl = localStorage.getItem("qiushaocloud-halo-comment-authorUrl");
    var email = localStorage.getItem("qiushaocloud-halo-comment-email");
    this.comment.author = author ? author : "";
    this.comment.authorUrl = authorUrl || "";
    this.comment.avatar = this.avatar;
    this.comment.email = email ? email : "";
    this.updateAvatar();
    this.$nextTick(function () {
      POWERMODE.colorful = true; // make power mode colorful

      POWERMODE.shake = false; // turn off shake

      document.body.addEventListener("input", POWERMODE);
    });
  },
  methods: {
    handleAvatarUploadInputOpen: function handleAvatarUploadInputOpen() {
      var _this = this;

      if (!this.configs.isAllowUploadAvatar) {
        return;
      }

      var inputEle = document.createElement('input');
      inputEle.setAttribute('type', 'file');
      inputEle.setAttribute('style', 'display: none;');
      inputEle.setAttribute('accept', 'image/*');

      inputEle.onchange = function (event) {
        inputEle.onclick = undefined;

        _this.handleAvatarUpload(event);
      };

      inputEle.click();
    },
    handleAvatarUpload: function handleAvatarUpload(event) {
      var _this2 = this;

      if (!this.configs.isAllowUploadAvatar) {
        return;
      }

      var file = event.target.files[0];
      if (!file) return;
      api_comment["a" /* default */].uploadFile(file, this.configs).then(function (response) {
        console.info('uploadAvatar success, response:', response);
        _this2.avatar = response.imgUrl;
        localStorage.setItem("qiushaocloud-halo-comment-avatar", _this2.avatar);
        localStorage.setItem("qiushaocloud-halo-comment-avatar-key", _this2.comment.author + '###' + _this2.comment.email);
      }).catch(function (error) {
        console.error('uploadAvatar error:', error);

        _this2.$tips("上传头像失败", 2500, _this2, 'danger');
      });
    },
    updateAvatar: function updateAvatar() {
      var avatar = localStorage.getItem("qiushaocloud-halo-comment-avatar");
      this.avatar = avatar ? avatar : this.pullGravatarInfo(true);
      localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
      localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author + '###' + this.comment.email);
    },
    handleSubmitClick: function handleSubmitClick() {
      var _this3 = this;

      if (Object(util["c" /* isEmpty */])(this.comment.author)) {
        this.$tips("昵称不能为空", 5000, this);
        return;
      }

      if (Object(util["c" /* isEmpty */])(this.comment.email)) {
        this.$tips("邮箱不能为空", 5000, this);
        return;
      }

      this.checkAndUpdateCommentData();

      if (Object(util["c" /* isEmpty */])(this.comment.content)) {
        this.$tips("评论内容不能为空", 5000, this);
        return;
      } // Submit the comment


      this.comment.avatar = this.avatar;
      this.comment.postId = this.targetId;

      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id;
      }

      localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
      localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author + '###' + this.comment.email);
      api_comment["a" /* default */].createComment(this.target, this.comment, this.configs).then(function (response) {
        // clear comment
        _this3.comment.content = "";
        _this3.previewMode = false;

        _this3.handleCommentCreated(response.data.data);
      }).catch(function (error) {
        _this3.previewMode = false;

        _this3.handleFailedToCreateComment(error.response);
      });
    },
    handlePreviewContent: function handlePreviewContent() {
      this.previewMode = !this.previewMode;
    },
    handleCommentCreated: function handleCommentCreated(createdComment) {
      if (createdComment.status === "PUBLISHED") {
        // 成功后直接新增新的评论node
        try {
          if (createdComment.parentId === 0) {
            this.$emit('createdNewRootCommentNode', createdComment);
          } else {
            this.createdNewNode(createdComment);
          }

          this.$tips("评论成功！", 3500, this, 'success');
          this.$parent.$emit("post-success", {
            target: this.target,
            targetId: this.targetId
          });
        } catch (_unused) {
          this.$tips("评论成功，刷新即可显示最新评论！", 5000, this, 'success');
        }
      } else {
        this.$tips("您的评论已经投递至博主，等待博主审核！", 5000, this, 'success');
      }
    },
    handleAvatarError: function handleAvatarError(e) {
      var img = e.target || e.srcElement;
      img.src = this.configs.avatarError;
      img.onerror = null;
    },
    createdNewNode: function createdNewNode(newComment) {
      var elDom = this.$root.$el;
      var pr = {
        targetId: this.targetId,
        target: this.target,
        options: this.options,
        configs: this.configs,
        comment: newComment
      };
      pr = newComment.parentId == 0 ? pr : _objectSpread2(_objectSpread2({}, pr), {
        isChild: true,
        parent: this.replyComment,
        depth: this.$parent.selfAddDepth
      });

      var CommentNode = function CommentNode() {
        return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "f9af"));
      }; // 创建一个组件


      var comment = new external_Vue_default.a({
        render: function render(h) {
          return h(CommentNode, {
            props: pr
          });
        }
      });
      var dom;

      if (newComment.parentId == 0) {
        if (elDom.getElementsByClassName("commentwrap").length > 0) {
          dom = elDom.getElementsByClassName("commentwrap")[0];
        } else {
          dom = document.createElement("ul");
          dom.setAttribute("class", "commentwrap");
          var emptyDom = elDom.getElementsByClassName("comment-empty")[0];
          emptyDom.parentNode.replaceChild(dom, emptyDom);
        }
      } else {
        // 获取li
        var parentDom = elDom.getElementsByClassName("comment-" + this.replyComment.id)[0]; // 获取li下的ul节点

        var replyDom = parentDom.getElementsByTagName("ul");

        if (replyDom.length > 0) {
          dom = replyDom[0];
        } else {
          dom = document.createElement("ul");
          dom.setAttribute("class", "children");
          parentDom.appendChild(dom);
        }
      }

      var nodeDom = document.createElement("div");

      if (dom.children[0]) {
        dom.insertBefore(nodeDom, dom.children[0]);
      } else {
        dom.appendChild(nodeDom);
      }

      comment.$mount(nodeDom);
    },
    handleFailedToCreateComment: function handleFailedToCreateComment(response) {
      var _this4 = this;

      if (response.status === 400 && response.data) {
        this.$tips(response.data.message, 5000, this, "danger");

        if (response.data.data) {
          var errorDetail = response.data.data;

          if (Object(util["e" /* isObject */])(errorDetail)) {
            Object.keys(errorDetail).forEach(function (key) {
              _this4.$tips(errorDetail[key], 5000, _this4, "danger");
            });
          }
        }
      }
    },
    handleToggleDialogEmoji: function handleToggleDialogEmoji() {
      this.emojiDialogVisible = !this.emojiDialogVisible;
    },
    handleSelectEmoji: function handleSelectEmoji(args) {
      var emoji, type;
      var emojiComment;
      if (args.length == 0) return;

      if (args.length > 0) {
        emoji = args[0];
      }

      if (args.length > 1) {
        type = args[1];
      }

      if (!type) {
        emojiComment = emoji.name;
      } else {
        if (type === "Math") {
          emojiComment = "f(x)=∫(" + emoji.name + ")sec²xdx";
        } else if (type === "BBCode") {
          // 区分扩展名，gif末尾加个感叹号
          emojiComment = ":".concat(emoji.name + (emoji.extension === "gif" ? "!" : ""), ":");
        }
      }

      this.comment.content += " " + emojiComment + " ";
    },
    cancelReply: function cancelReply(e) {
      e.stopPropagation(); // 当replyId为0时则为回复博主

      this.globalData.replyId = 0;
      this.globalData.isReplyData = false; // TODO：滚动定位有bug，先关闭，后面有时间来修复
      // 取消回复后，将跳转至回复前的地方
      // var targetDom = this.$el.previousSibling;
      // var offsetTop = targetDom.offsetTop + this.$root.$el.offsetTop;
      // window.scrollTo(document.body.scrollWidth, offsetTop);
    },
    checkAndUpdateCommentData: function checkAndUpdateCommentData() {
      var author = localStorage.getItem("qiushaocloud-halo-comment-author");
      var authorUrl = localStorage.getItem("qiushaocloud-halo-comment-authorUrl");
      var email = localStorage.getItem("qiushaocloud-halo-comment-email");

      if (this.configs.blogAuthorNickname && this.configs.blogAuthorNickname === author || this.configs.blogAuthorSite && this.configs.blogAuthorSite === authorUrl || this.configs.blogAuthorEmail && this.configs.blogAuthorEmail === email) {
        if (this.configs.blogAuthorNickname && this.configs.blogAuthorNickname !== author) {
          localStorage.setItem("qiushaocloud-halo-comment-author", this.configs.blogAuthorNickname);
        }

        if (this.configs.blogAuthorSite && this.configs.blogAuthorSite !== authorUrl) {
          localStorage.setItem("qiushaocloud-halo-comment-authorUrl", this.configs.blogAuthorSite);
        }

        if (this.configs.blogAuthorEmail && this.configs.blogAuthorEmail !== email) {
          localStorage.setItem("qiushaocloud-halo-comment-email", this.configs.blogAuthorEmail);
        }
      }

      author = localStorage.getItem("qiushaocloud-halo-comment-author");
      authorUrl = localStorage.getItem("qiushaocloud-halo-comment-authorUrl");
      email = localStorage.getItem("qiushaocloud-halo-comment-email");

      if (this.comment.author !== author) {
        this.comment.author = author || '';
      }

      if (this.comment.authorUrl !== authorUrl) {
        this.comment.authorUrl = authorUrl || '';
      }

      if (this.comment.email !== email) {
        this.comment.email = email || '';
      }

      this.$emit('checkIsAdmin');
    },
    onPopupInputBlur: function onPopupInputBlur(type) {
      var _this5 = this;

      if (type === 'author' && this.configs.blogAuthorNickname && this.configs.blogAuthorNickname === localStorage.getItem("qiushaocloud-halo-comment-author") || type === 'authorUrl' && this.configs.blogAuthorSite && this.configs.blogAuthorSite === localStorage.getItem("qiushaocloud-halo-comment-authorUrl") || type === 'email' && this.configs.blogAuthorEmail && this.configs.blogAuthorEmail === localStorage.getItem("qiushaocloud-halo-comment-email")) {
        this.checkAndUpdateCommentData();
      }

      this.$emit('checkIsAdmin');
      var author = this.comment.author;
      var authorQQ = author;
      var cacheQqStr = window.localStorage.getItem('qiushaocloud-halo-comment-qq');
      var cacheQq = cacheQqStr ? JSON.parse(cacheQqStr) : undefined;

      if (authorQQ && cacheQq) {
        if (this.comment.email === cacheQq.email && authorQQ === cacheQq.nickname) {
          authorQQ = cacheQq.qq;
        }
      }

      if (authorQQ && authorQQ.length != 0 && Object(util["f" /* isQQ */])(authorQQ)) {
        // 如果是QQ号，则拉取QQ头像
        this.pullQQInfo(function () {
          _this5.$tips("拉取QQ信息失败！尝试拉取Gravatar", 2000, _this5); // 如果QQ拉取失败，则尝试拉取Gravatar


          _this5.pullGravatarInfo();
        });
        return;
      } // 防止刚拉取完QQ头像就拉取Gravatar头像


      if (this.lockPullAvatar) {
        this.lockPullAvatar = false;
        return;
      } // 否则拉取Gravatar头像


      this.pullGravatarInfo();
    },
    pullQQInfo: function pullQQInfo(errorQQCallback) {
      var _self = this;

      var authorQQ = _self.comment.author;
      var cacheQqStr = window.localStorage.getItem('qiushaocloud-halo-comment-qq');
      var cacheQq = cacheQqStr ? JSON.parse(cacheQqStr) : undefined;

      if (authorQQ && cacheQq) {
        if (_self.comment.email === cacheQq.email && authorQQ === cacheQq.nickname) {
          if (Date.now() - cacheQq.saveTs < 60000) {
            return new Promise(function (resolve) {
              _self.comment.author = cacheQq.nickname;
              _self.comment.email = cacheQq.email;
              _self.avatar = cacheQq.avatar;
              resolve();
            });
          }

          authorQQ = cacheQq.qq;
        }
      } // 拉取QQ昵称，头像等


      axios_default.a.get("https://api.lixingyong.com/api/qq", {
        params: {
          id: authorQQ
        }
      }).then(function (res) {
        var data = res.data;

        if (!!data.code && data.code == 500) {
          errorQQCallback();
        }

        if (_self.comment.author === data.nickname && _self.comment.email === data.email && _self.avatar === data.avatar) {
          return;
        }

        _self.$tips("拉取QQ头像成功！", 2000, _self, "success");

        _self.comment.author = data.nickname;
        _self.comment.email = data.email;
        _self.avatar = data.avatar;
        _self.lockPullAvatar = true;
        _self.comment.avatar = _self.avatar;
        localStorage.setItem("qiushaocloud-halo-comment-author", _self.comment.author);
        localStorage.setItem("qiushaocloud-halo-comment-email", _self.comment.email);
        localStorage.setItem("qiushaocloud-halo-comment-authorUrl", _self.comment.authorUrl);
        localStorage.setItem("qiushaocloud-halo-comment-avatar", _self.avatar);
        localStorage.setItem("qiushaocloud-halo-comment-avatar-key", _self.comment.author + '###' + _self.comment.email);
        localStorage.setItem('qiushaocloud-halo-comment-qq', JSON.stringify({
          qq: data.qq,
          nickname: data.nickname,
          email: data.email,
          avatar: data.avatar,
          saveTs: Date.now()
        }));

        _self.$emit('checkIsAdmin');
      }).catch(function () {
        errorQQCallback();
      });
    },
    pullGravatarInfo: function pullGravatarInfo(isDefault) {
      // 由本地缓存的图片优先用本地缓存的
      var cacheAvatar = localStorage.getItem("qiushaocloud-halo-comment-avatar");
      var cacheAvatarKey = localStorage.getItem("qiushaocloud-halo-comment-avatar-key");

      if (cacheAvatarKey !== this.comment.author + '###' + this.comment.email) {
        cacheAvatar = undefined;
      }

      var gravatarMd5 = "/".concat(md5_default()(this.comment.email)); // !!优先从主题配置取，取不到才从后台配置取

      var gravatarSource = this.configs.gravatarSource || this.options.gravatar_source || this.configs.gravatarSourceDefault;
      var avatar = cacheAvatar || gravatarSource + "".concat(gravatarMd5, "?s=256&d=") + this.options.comment_gravatar_default || 'mm';

      if (!isDefault) {
        this.avatar = avatar;
        localStorage.setItem("qiushaocloud-halo-comment-avatar", this.avatar);
        localStorage.setItem("qiushaocloud-halo-comment-avatar-key", this.comment.author + '###' + this.comment.email);
      } else {
        return avatar;
      }
    },
    // 锚点跳转
    viewJump: function viewJump(callback, targetDom) {
      var _this6 = this;

      // dom为异步更新，因此务必放在nextTick内，否则无法获取到dom。
      this.$nextTick(function () {
        var dom = targetDom || _this6.$el; // 若当前dom不在可视范围内，则将视角移动至dom下

        if (!Object(util["d" /* isInVisibleArea */])(dom, _this6.$root.$el, "bottom")) {
          callback(dom);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentEditorvue_type_script_lang_js_ = (CommentEditorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CommentEditor.vue





/* normalize component */

var CommentEditor_component = Object(componentNormalizer["a" /* default */])(
  components_CommentEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CommentEditor = __webpack_exports__["a"] = (CommentEditor_component.exports);

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var defineProperty = __webpack_require__("9bf2").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4600":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("a0d3");

var assertRecord = __webpack_require__("c46d");

var Type = __webpack_require__("b398");

// https://ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4a0c":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4dae":
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4fdf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_55ff44e8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81df");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_55ff44e8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_55ff44e8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_55ff44e8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_55ff44e8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5018":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("e9ac");

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = __webpack_require__("ae57");
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://ecma-international.org/ecma-262/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__("1696");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "5183":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://262.ecma-international.org/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),

/***/ "522d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("be77");

var getPolyfill = __webpack_require__("8926");
var define = __webpack_require__("f367");

module.exports = function shimPromiseFinally() {
	requirePromise();

	var polyfill = getPolyfill();
	define(Promise.prototype, { 'finally': polyfill }, {
		'finally': function testFinally() {
			return Promise.prototype['finally'] !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "545e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var callBind = __webpack_require__("3eb1");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "57b9":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var getBuiltIn = __webpack_require__("d066");
var wellKnownSymbol = __webpack_require__("b622");
var defineBuiltIn = __webpack_require__("cb2d");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a47":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var toObject = __webpack_require__("7b0b");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=55ff44e8&shadow
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    class: ['halo-comment', {
      'halo-comment__small': _vm.mergedConfigs.size === 'small',
      'halo-comment__admin': _vm.isAdmin === true
    }],
    attrs: {
      "id": "halo-comment"
    }
  }, [_vm.isReply ? _c('comment-editor', {
    staticClass: "bottom-comment",
    attrs: {
      "targetId": _vm.id,
      "target": _vm.target,
      "options": _vm.mergedOptions,
      "configs": _vm.mergedConfigs
    },
    on: {
      "checkIsAdmin": _vm.checkIsAdmin,
      "createdNewRootCommentNode": _vm.createdNewRootCommentNode
    }
  }) : _vm._e(), !_vm.mergedConfigs.autoLoad && !_vm.loaded ? _c('div', {
    staticClass: "comment-load-button"
  }, [_c('a', {
    staticClass: "button-load",
    attrs: {
      "href": "javascript:;",
      "rel": "nofollow noopener"
    },
    on: {
      "click": _vm.loadComments
    }
  }, [_vm._v("加载评论")])]) : _vm._e(), _c('comment-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.commentLoading,
      expression: "commentLoading"
    }],
    attrs: {
      "configs": _vm.mergedConfigs
    }
  }), _vm.comments.length >= 1 ? _c('ul', {
    staticClass: "commentwrap"
  }, [_vm._l(_vm.comments, function (comment, index) {
    return [_c('CommentNode', {
      key: index,
      attrs: {
        "targetId": _vm.id,
        "target": _vm.target,
        "comment": comment,
        "options": _vm.mergedOptions,
        "configs": _vm.mergedConfigs,
        "depth": 1
      },
      on: {
        "deletedRootCommenNode": _vm.deletedRootCommenNode,
        "createdNewRootCommentNode": _vm.createdNewRootCommentNode
      }
    })];
  })], 2) : _vm._e(), _vm.loaded && !_vm.commentLoading && _vm.comments.length <= 0 ? _c('div', {
    staticClass: "comment-empty"
  }, [_vm._v(" " + _vm._s(_vm.mergedConfigs.notComment || "还没有评论哦，快来抢占沙发 ♪(´▽｀)") + " ")]) : _vm._e(), _vm.pagination.pages > 1 ? _c('div', {
    staticClass: "comment-page"
  }, [_c('pagination', {
    attrs: {
      "page": _vm.pagination.page,
      "size": _vm.pagination.size,
      "total": _vm.pagination.total
    },
    on: {
      "change": _vm.handlePaginationChange
    }
  })], 1) : _vm._e()], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=template&id=55ff44e8&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// EXTERNAL MODULE: ./src/components/index.js + 10 modules
var components = __webpack_require__("2af9");

// EXTERNAL MODULE: ./src/config/default_config.js
var default_config = __webpack_require__("a442");

// CONCATENATED MODULE: ./src/config/default_option.js
/* harmony default export */ var default_option = ({
  blog_logo: "",
  gravatar_source: "",
  comment_gravatar_default: "mm"
});
// EXTERNAL MODULE: ./src/api/comment.js + 1 modules
var comment = __webpack_require__("063c");

// EXTERNAL MODULE: ./src/utils/globals.js
var globals = __webpack_require__("0e4d");

// CONCATENATED MODULE: ./node_modules/vue-lazyload/vue-lazyload.esm.js
/*!
 * Vue-Lazyload.js v1.3.4
 * (c) 2021 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */

/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

// see http://jsperf.com/testing-value-is-primitive/7

var isPrimitive = function isPrimitive(value) {
  return value == null || typeof value !== 'function' && typeof value !== 'object';
};

var isPrimitive$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': isPrimitive,
  __moduleExports: isPrimitive
});

/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var assignSymbols = function (receiver, objects) {
  if (receiver === null || typeof receiver === 'undefined') {
    throw new TypeError('expected first argument to be an object.');
  }

  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
    return receiver;
  }

  if (typeof Object.getOwnPropertySymbols !== 'function') {
    return receiver;
  }

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var target = Object(receiver);
  var len = arguments.length,
      i = 0;

  while (++i < len) {
    var provider = Object(arguments[i]);
    var names = Object.getOwnPropertySymbols(provider);

    for (var j = 0; j < names.length; j++) {
      var key = names[j];

      if (isEnumerable.call(provider, key)) {
        target[key] = provider[key];
      }
    }
  }
  return target;
};

var assignSymbols$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': assignSymbols,
  __moduleExports: assignSymbols
});

var vue_lazyload_esm_toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

var kindOf = function kindOf(val) {
  var type = typeof val;

  // primitivies
  if (type === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (type === 'string' || val instanceof String) {
    return 'string';
  }
  if (type === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (type === 'function' || val instanceof Function) {
    if (typeof val.constructor.name !== 'undefined' && val.constructor.name.slice(0, 9) === 'Generator') {
      return 'generatorfunction';
    }
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  type = vue_lazyload_esm_toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }
  if (type === '[object Promise]') {
    return 'promise';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  if (type === '[object Map Iterator]') {
    return 'mapiterator';
  }
  if (type === '[object Set Iterator]') {
    return 'setiterator';
  }
  if (type === '[object String Iterator]') {
    return 'stringiterator';
  }
  if (type === '[object Array Iterator]') {
    return 'arrayiterator';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  return val.constructor && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

var kindOf$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': kindOf,
  __moduleExports: kindOf
});

var isPrimitive$2 = ( isPrimitive$1 && isPrimitive ) || isPrimitive$1;

var assignSymbols$2 = ( assignSymbols$1 && assignSymbols ) || assignSymbols$1;

var typeOf = ( kindOf$1 && kindOf ) || kindOf$1;

function vue_lazyload_esm_assign(target /*, objects*/) {
  target = target || {};
  var len = arguments.length,
      i = 0;
  if (len === 1) {
    return target;
  }
  while (++i < len) {
    var val = arguments[i];
    if (isPrimitive$2(target)) {
      target = val;
    }
    if (isObject(val)) {
      extend(target, val);
    }
  }
  return target;
}

/**
 * Shallow extend
 */

function extend(target, obj) {
  assignSymbols$2(target, obj);

  for (var key in obj) {
    if (isValidKey(key) && hasOwn(obj, key)) {
      var val = obj[key];
      if (isObject(val)) {
        if (typeOf(target[key]) === 'undefined' && typeOf(val) === 'function') {
          target[key] = val;
        }
        target[key] = vue_lazyload_esm_assign(target[key] || {}, val);
      } else {
        target[key] = val;
      }
    }
  }
  return target;
}

/**
 * Returns true if the object is a plain object or a function.
 */

function isObject(obj) {
  return typeOf(obj) === 'object' || typeOf(obj) === 'function';
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Returns true if the given `key` is a valid key that can be used for assigning properties.
 */

function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
}

/**
 * Expose `assign`
 */

var assignDeep = vue_lazyload_esm_assign;

const inBrowser = typeof window !== 'undefined' && window !== null;

const hasIntersectionObserver = checkIntersectionObserver();

function checkIntersectionObserver() {
  if (inBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
    return true;
  }
  return false;
}

const modeType = {
  event: 'event',
  observer: 'observer'

  // CustomEvent polyfill for IE
};const vue_lazyload_esm_CustomEvent = function () {
  if (!inBrowser) return;
  // not IE
  if (typeof window.CustomEvent === 'function') return window.CustomEvent;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  return CustomEvent;
}();

function remove(arr, item) {
  if (!arr.length) return;
  const index = arr.indexOf(item);
  if (index > -1) return arr.splice(index, 1);
}

function some(arr, fn) {
  let has = false;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      has = true;
      break;
    }
  }
  return has;
}

function getBestSelectionFromSrcset(el, scale) {
  if (el.tagName !== 'IMG' || !el.getAttribute('data-srcset')) return;

  let options = el.getAttribute('data-srcset');
  const result = [];
  const container = el.parentNode;
  const containerWidth = container.offsetWidth * scale;

  let spaceIndex;
  let tmpSrc;
  let tmpWidth;

  options = options.trim().split(',');

  options.map(item => {
    item = item.trim();
    spaceIndex = item.lastIndexOf(' ');
    if (spaceIndex === -1) {
      tmpSrc = item;
      tmpWidth = 999998;
    } else {
      tmpSrc = item.substr(0, spaceIndex);
      tmpWidth = parseInt(item.substr(spaceIndex + 1, item.length - spaceIndex - 2), 10);
    }
    result.push([tmpWidth, tmpSrc]);
  });

  result.sort(function (a, b) {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
        return 1;
      }
      if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
        return -1;
      }
    }
    return 0;
  });
  let bestSelectedSrc = '';
  let tmpOption;

  for (let i = 0; i < result.length; i++) {
    tmpOption = result[i];
    bestSelectedSrc = tmpOption[1];
    const next = result[i + 1];
    if (next && next[0] < containerWidth) {
      bestSelectedSrc = tmpOption[1];
      break;
    } else if (!next) {
      bestSelectedSrc = tmpOption[1];
      break;
    }
  }

  return bestSelectedSrc;
}

function find(arr, fn) {
  let item;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      item = arr[i];
      break;
    }
  }
  return item;
}

const getDPR = (scale = 1) => inBrowser ? window.devicePixelRatio || scale : scale;

function supportWebp() {
  if (!inBrowser) return false;

  let support = true;

  try {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  } catch (err) {
    support = false;
  }

  return support;
}

function throttle(action, delay) {
  let timeout = null;
  let movement = null;
  let lastRun = 0;
  let needRun = false;
  return function () {
    needRun = true;
    if (timeout) {
      return;
    }
    let elapsed = Date.now() - lastRun;
    let context = this;
    let args = arguments;
    let runCallback = function () {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
    if (needRun) {
      clearTimeout(movement);
      movement = setTimeout(runCallback, 2 * delay);
    }
  };
}

function testSupportsPassive() {
  if (!inBrowser) return;
  let support = false;
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get: function () {
        support = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
  return support;
}

const supportsPassive = testSupportsPassive();

const _ = {
  on(el, type, func, capture = false) {
    if (supportsPassive) {
      el.addEventListener(type, func, {
        capture: capture,
        passive: true
      });
    } else {
      el.addEventListener(type, func, capture);
    }
  },
  off(el, type, func, capture = false) {
    el.removeEventListener(type, func, capture);
  }
};

const loadImageAsync = (item, resolve, reject) => {
  let image = new Image();
  if (!item || !item.src) {
    const err = new Error('image src is required');
    return reject(err);
  }

  image.src = item.src;
  if (item.cors) {
    image.crossOrigin = item.cors;
  }

  image.onload = function () {
    resolve({
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      src: image.src
    });
  };

  image.onerror = function (e) {
    reject(e);
  };
};

const style = (el, prop) => {
  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(el, null).getPropertyValue(prop) : el.style[prop];
};

const overflow = el => {
  return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x');
};

const scrollParent = el => {
  if (!inBrowser) return;
  if (!(el instanceof HTMLElement)) {
    return window;
  }

  let parent = el;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

function isObject$1(obj) {
  return obj !== null && typeof obj === 'object';
}

function ObjectKeys(obj) {
  if (!(obj instanceof Object)) return [];
  if (Object.keys) {
    return Object.keys(obj);
  } else {
    let keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
}

function ArrayFrom(arrLike) {
  let len = arrLike.length;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push(arrLike[i]);
  }
  return list;
}

function noop() {}

class ImageCache {
  constructor({ max }) {
    this.options = {
      max: max || 100
    };
    this._caches = [];
  }

  has(key) {
    return this._caches.indexOf(key) > -1;
  }

  add(key) {
    if (this.has(key)) return;
    this._caches.push(key);
    if (this._caches.length > this.options.max) {
      this.free();
    }
  }

  free() {
    this._caches.shift();
  }
}

// el: {
//     state,
//     src,
//     error,
//     loading
// }

class ReactiveListener {
  constructor({ el, src, error, loading, bindType, $parent, options, cors, elRenderer, imageCache }) {
    this.el = el;
    this.src = src;
    this.error = error;
    this.loading = loading;
    this.bindType = bindType;
    this.attempt = 0;
    this.cors = cors;

    this.naturalHeight = 0;
    this.naturalWidth = 0;

    this.options = options;

    this.rect = null;

    this.$parent = $parent;
    this.elRenderer = elRenderer;
    this._imageCache = imageCache;
    this.performanceData = {
      init: Date.now(),
      loadStart: 0,
      loadEnd: 0
    };

    this.filter();
    this.initState();
    this.render('loading', false);
  }

  /*
   * init listener state
   * @return
   */
  initState() {
    if ('dataset' in this.el) {
      this.el.dataset.src = this.src;
    } else {
      this.el.setAttribute('data-src', this.src);
    }

    this.state = {
      loading: false,
      error: false,
      loaded: false,
      rendered: false
    };
  }

  /*
   * record performance
   * @return
   */
  record(event) {
    this.performanceData[event] = Date.now();
  }

  /*
   * update image listener data
   * @param  {String} image uri
   * @param  {String} loading image uri
   * @param  {String} error image uri
   * @return
   */
  update({ src, loading, error }) {
    const oldSrc = this.src;
    this.src = src;
    this.loading = loading;
    this.error = error;
    this.filter();
    if (oldSrc !== this.src) {
      this.attempt = 0;
      this.initState();
    }
  }

  /*
   * get el node rect
   * @return
   */
  getRect() {
    this.rect = this.el.getBoundingClientRect();
  }

  /*
   *  check el is in view
   * @return {Boolean} el is in view
   */
  checkInView() {
    this.getRect();
    return this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;
  }

  /*
   * listener filter
   */
  filter() {
    ObjectKeys(this.options.filter).map(key => {
      this.options.filter[key](this, this.options);
    });
  }

  /*
   * render loading first
   * @params cb:Function
   * @return
   */
  renderLoading(cb) {
    this.state.loading = true;
    loadImageAsync({
      src: this.loading,
      cors: this.cors
    }, data => {
      this.render('loading', false);
      this.state.loading = false;
      cb();
    }, () => {
      // handler `loading image` load failed
      cb();
      this.state.loading = false;
      if (!this.options.silent) console.warn(`VueLazyload log: load failed with loading image(${this.loading})`);
    });
  }

  /*
   * try load image and  render it
   * @return
   */
  load(onFinish = noop) {
    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      if (!this.options.silent) console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`);
      onFinish();
      return;
    }
    if (this.state.rendered && this.state.loaded) return;
    if (this._imageCache.has(this.src)) {
      this.state.loaded = true;
      this.render('loaded', true);
      this.state.rendered = true;
      return onFinish();
    }

    this.renderLoading(() => {
      this.attempt++;

      this.options.adapter['beforeLoad'] && this.options.adapter['beforeLoad'](this, this.options);
      this.record('loadStart');

      loadImageAsync({
        src: this.src,
        cors: this.cors
      }, data => {
        this.naturalHeight = data.naturalHeight;
        this.naturalWidth = data.naturalWidth;
        this.state.loaded = true;
        this.state.error = false;
        this.record('loadEnd');
        this.render('loaded', false);
        this.state.rendered = true;
        this._imageCache.add(this.src);
        onFinish();
      }, err => {
        !this.options.silent && console.error(err);
        this.state.error = true;
        this.state.loaded = false;
        this.render('error', false);
      });
    });
  }

  /*
   * render image
   * @param  {String} state to render // ['loading', 'src', 'error']
   * @param  {String} is form cache
   * @return
   */
  render(state, cache) {
    this.elRenderer(this, state, cache);
  }

  /*
   * output performance data
   * @return {Object} performance data
   */
  performance() {
    let state = 'loading';
    let time = 0;

    if (this.state.loaded) {
      state = 'loaded';
      time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000;
    }

    if (this.state.error) state = 'error';

    return {
      src: this.src,
      state,
      time
    };
  }

  /*
   * $destroy
   * @return
   */
  $destroy() {
    this.el = null;
    this.src = null;
    this.error = null;
    this.loading = null;
    this.bindType = null;
    this.attempt = 0;
  }
}

const DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];
const DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: '0px',
  threshold: 0
};

function Lazy(Vue) {
  return class Lazy {
    constructor({ preLoad, error, throttleWait, preLoadTop, dispatchEvent, loading, attempt, silent = true, scale, listenEvents, hasbind, filter, adapter, observer, observerOptions }) {
      this.version = '"1.3.4"';
      this.mode = modeType.event;
      this.ListenerQueue = [];
      this.TargetIndex = 0;
      this.TargetQueue = [];
      this.options = {
        silent: silent,
        dispatchEvent: !!dispatchEvent,
        throttleWait: throttleWait || 200,
        preLoad: preLoad || 1.3,
        preLoadTop: preLoadTop || 0,
        error: error || DEFAULT_URL,
        loading: loading || DEFAULT_URL,
        attempt: attempt || 3,
        scale: scale || getDPR(scale),
        ListenEvents: listenEvents || DEFAULT_EVENTS,
        hasbind: false,
        supportWebp: supportWebp(),
        filter: filter || {},
        adapter: adapter || {},
        observer: !!observer,
        observerOptions: observerOptions || DEFAULT_OBSERVER_OPTIONS
      };
      this._initEvent();
      this._imageCache = new ImageCache({ max: 200 });
      this.lazyLoadHandler = throttle(this._lazyLoadHandler.bind(this), this.options.throttleWait);

      this.setMode(this.options.observer ? modeType.observer : modeType.event);
    }

    /**
     * update config
     * @param  {Object} config params
     * @return
     */
    config(options = {}) {
      assignDeep(this.options, options);
    }

    /**
     * output listener's load performance
     * @return {Array}
     */
    performance() {
      let list = [];

      this.ListenerQueue.map(item => {
        list.push(item.performance());
      });

      return list;
    }

    /*
     * add lazy component to queue
     * @param  {Vue} vm lazy component instance
     * @return
     */
    addLazyBox(vm) {
      this.ListenerQueue.push(vm);
      if (inBrowser) {
        this._addListenerTarget(window);
        this._observer && this._observer.observe(vm.el);
        if (vm.$el && vm.$el.parentNode) {
          this._addListenerTarget(vm.$el.parentNode);
        }
      }
    }

    /*
     * add image listener to queue
     * @param  {DOM} el
     * @param  {object} binding vue directive binding
     * @param  {vnode} vnode vue directive vnode
     * @return
     */
    add(el, binding, vnode) {
      if (some(this.ListenerQueue, item => item.el === el)) {
        this.update(el, binding);
        return Vue.nextTick(this.lazyLoadHandler);
      }

      let { src, loading, error, cors } = this._valueFormatter(binding.value);

      Vue.nextTick(() => {
        src = getBestSelectionFromSrcset(el, this.options.scale) || src;
        this._observer && this._observer.observe(el);

        const container = Object.keys(binding.modifiers)[0];
        let $parent;

        if (container) {
          $parent = vnode.context.$refs[container];
          // if there is container passed in, try ref first, then fallback to getElementById to support the original usage
          $parent = $parent ? $parent.$el || $parent : document.getElementById(container);
        }

        if (!$parent) {
          $parent = scrollParent(el);
        }

        const newListener = new ReactiveListener({
          bindType: binding.arg,
          $parent,
          el,
          loading,
          error,
          src,
          cors,
          elRenderer: this._elRenderer.bind(this),
          options: this.options,
          imageCache: this._imageCache
        });

        this.ListenerQueue.push(newListener);

        if (inBrowser) {
          this._addListenerTarget(window);
          this._addListenerTarget($parent);
        }

        this.lazyLoadHandler();
        Vue.nextTick(() => this.lazyLoadHandler());
      });
    }

    /**
    * update image src
    * @param  {DOM} el
    * @param  {object} vue directive binding
    * @return
    */
    update(el, binding, vnode) {
      let { src, loading, error } = this._valueFormatter(binding.value);
      src = getBestSelectionFromSrcset(el, this.options.scale) || src;

      const exist = find(this.ListenerQueue, item => item.el === el);
      if (!exist) {
        this.add(el, binding, vnode);
      } else {
        exist.update({
          src,
          loading,
          error
        });
      }
      if (this._observer) {
        this._observer.unobserve(el);
        this._observer.observe(el);
      }
      this.lazyLoadHandler();
      Vue.nextTick(() => this.lazyLoadHandler());
    }

    /**
    * remove listener form list
    * @param  {DOM} el
    * @return
    */
    remove(el) {
      if (!el) return;
      this._observer && this._observer.unobserve(el);
      const existItem = find(this.ListenerQueue, item => item.el === el);
      if (existItem) {
        this._removeListenerTarget(existItem.$parent);
        this._removeListenerTarget(window);
        remove(this.ListenerQueue, existItem);
        existItem.$destroy();
      }
    }

    /*
     * remove lazy components form list
     * @param  {Vue} vm Vue instance
     * @return
     */
    removeComponent(vm) {
      if (!vm) return;
      remove(this.ListenerQueue, vm);
      this._observer && this._observer.unobserve(vm.el);
      if (vm.$parent && vm.$el.parentNode) {
        this._removeListenerTarget(vm.$el.parentNode);
      }
      this._removeListenerTarget(window);
    }

    setMode(mode) {
      if (!hasIntersectionObserver && mode === modeType.observer) {
        mode = modeType.event;
      }

      this.mode = mode; // event or observer

      if (mode === modeType.event) {
        if (this._observer) {
          this.ListenerQueue.forEach(listener => {
            this._observer.unobserve(listener.el);
          });
          this._observer = null;
        }

        this.TargetQueue.forEach(target => {
          this._initListen(target.el, true);
        });
      } else {
        this.TargetQueue.forEach(target => {
          this._initListen(target.el, false);
        });
        this._initIntersectionObserver();
      }
    }

    /*
    *** Private functions ***
    */

    /*
     * add listener target
     * @param  {DOM} el listener target
     * @return
     */
    _addListenerTarget(el) {
      if (!el) return;
      let target = find(this.TargetQueue, target => target.el === el);
      if (!target) {
        target = {
          el: el,
          id: ++this.TargetIndex,
          childrenCount: 1,
          listened: true
        };
        this.mode === modeType.event && this._initListen(target.el, true);
        this.TargetQueue.push(target);
      } else {
        target.childrenCount++;
      }
      return this.TargetIndex;
    }

    /*
     * remove listener target or reduce target childrenCount
     * @param  {DOM} el or window
     * @return
     */
    _removeListenerTarget(el) {
      this.TargetQueue.forEach((target, index) => {
        if (target.el === el) {
          target.childrenCount--;
          if (!target.childrenCount) {
            this._initListen(target.el, false);
            this.TargetQueue.splice(index, 1);
            target = null;
          }
        }
      });
    }

    /*
     * add or remove eventlistener
     * @param  {DOM} el DOM or Window
     * @param  {boolean} start flag
     * @return
     */
    _initListen(el, start) {
      this.options.ListenEvents.forEach(evt => _[start ? 'on' : 'off'](el, evt, this.lazyLoadHandler));
    }

    _initEvent() {
      this.Event = {
        listeners: {
          loading: [],
          loaded: [],
          error: []
        }
      };

      this.$on = (event, func) => {
        if (!this.Event.listeners[event]) this.Event.listeners[event] = [];
        this.Event.listeners[event].push(func);
      };

      this.$once = (event, func) => {
        const vm = this;
        function on() {
          vm.$off(event, on);
          func.apply(vm, arguments);
        }
        this.$on(event, on);
      };

      this.$off = (event, func) => {
        if (!func) {
          if (!this.Event.listeners[event]) return;
          this.Event.listeners[event].length = 0;
          return;
        }
        remove(this.Event.listeners[event], func);
      };

      this.$emit = (event, context, inCache) => {
        if (!this.Event.listeners[event]) return;
        this.Event.listeners[event].forEach(func => func(context, inCache));
      };
    }

    /**
     * find nodes which in viewport and trigger load
     * @return
     */
    _lazyLoadHandler() {
      const freeList = [];
      this.ListenerQueue.forEach((listener, index) => {
        if (!listener.el || !listener.el.parentNode) {
          freeList.push(listener);
        }
        const catIn = listener.checkInView();
        if (!catIn) return;
        listener.load();
      });
      freeList.forEach(item => {
        remove(this.ListenerQueue, item);
        item.$destroy();
      });
    }
    /**
    * init IntersectionObserver
    * set mode to observer
    * @return
    */
    _initIntersectionObserver() {
      if (!hasIntersectionObserver) return;
      this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions);
      if (this.ListenerQueue.length) {
        this.ListenerQueue.forEach(listener => {
          this._observer.observe(listener.el);
        });
      }
    }

    /**
    * init IntersectionObserver
    * @return
    */
    _observerHandler(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ListenerQueue.forEach(listener => {
            if (listener.el === entry.target) {
              if (listener.state.loaded) return this._observer.unobserve(listener.el);
              listener.load();
            }
          });
        }
      });
    }

    /**
    * set element attribute with image'url and state
    * @param  {object} lazyload listener object
    * @param  {string} state will be rendered
    * @param  {bool} inCache  is rendered from cache
    * @return
    */
    _elRenderer(listener, state, cache) {
      if (!listener.el) return;
      const { el, bindType } = listener;

      let src;
      switch (state) {
        case 'loading':
          src = listener.loading;
          break;
        case 'error':
          src = listener.error;
          break;
        default:
          src = listener.src;
          break;
      }

      if (bindType) {
        el.style[bindType] = 'url("' + src + '")';
      } else if (el.getAttribute('src') !== src) {
        el.setAttribute('src', src);
      }

      el.setAttribute('lazy', state);

      this.$emit(state, listener, cache);
      this.options.adapter[state] && this.options.adapter[state](listener, this.options);

      if (this.options.dispatchEvent) {
        const event = new vue_lazyload_esm_CustomEvent(state, {
          detail: listener
        });
        el.dispatchEvent(event);
      }
    }

    /**
    * generate loading loaded error image url
    * @param {string} image's src
    * @return {object} image's loading, loaded, error url
    */
    _valueFormatter(value) {
      let src = value;
      let loading = this.options.loading;
      let error = this.options.error;

      // value is object
      if (isObject$1(value)) {
        if (!value.src && !this.options.silent) console.error('Vue Lazyload warning: miss src with ' + value);
        src = value.src;
        loading = value.loading || this.options.loading;
        error = value.error || this.options.error;
      }
      return {
        src,
        loading,
        error
      };
    }
  };
}

Lazy.install = (Vue, options = {}) => {
  const LazyClass = Lazy(Vue);
  const lazy = new LazyClass(options);

  const isVue2 = Vue.version.split('.')[0] === '2';
  if (isVue2) {
    Vue.directive('lazy', {
      bind: lazy.add.bind(lazy),
      update: lazy.update.bind(lazy),
      componentUpdated: lazy.lazyLoadHandler.bind(lazy),
      unbind: lazy.remove.bind(lazy)
    });
  } else {
    Vue.directive('lazy', {
      bind: lazy.lazyLoadHandler.bind(lazy),
      update(newValue, oldValue) {
        assignDeep(this.vm.$refs, this.vm.$els);
        lazy.add(this.el, {
          modifiers: this.modifiers || {},
          arg: this.arg,
          value: newValue,
          oldValue: oldValue
        }, {
          context: this.vm
        });
      },
      unbind() {
        lazy.remove(this.el);
      }
    });
  }
};

const LazyComponent = lazy => {
  return {
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render(h) {
      return h(this.tag, null, this.show ? this.$slots.default : null);
    },
    data() {
      return {
        el: null,
        state: {
          loaded: false
        },
        rect: {},
        show: false
      };
    },
    mounted() {
      this.el = this.$el;
      lazy.addLazyBox(this);
      lazy.lazyLoadHandler();
    },
    beforeDestroy() {
      lazy.removeComponent(this);
    },
    methods: {
      getRect() {
        this.rect = this.$el.getBoundingClientRect();
      },
      checkInView() {
        this.getRect();
        return inBrowser && this.rect.top < window.innerHeight * lazy.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * lazy.options.preLoad && this.rect.right > 0;
      },
      load() {
        this.show = true;
        this.state.loaded = true;
        this.$emit('show', this);
      },
      destroy() {
        return this.$destroy;
      }
    }
  };
};

LazyComponent.install = function (Vue, options = {}) {
  const LazyClass = Lazy(Vue);
  const lazy = new LazyClass(options);
  Vue.component('lazy-component', LazyComponent(lazy));
};

class LazyContainerMananger {
  constructor({ lazy }) {
    this.lazy = lazy;
    lazy.lazyContainerMananger = this;
    this._queue = [];
  }

  bind(el, binding, vnode) {
    const container = new LazyContainer({ el, binding, vnode, lazy: this.lazy });
    this._queue.push(container);
  }

  update(el, binding, vnode) {
    const container = find(this._queue, item => item.el === el);
    if (!container) return;
    container.update({ el, binding, vnode });
  }

  unbind(el, binding, vnode) {
    const container = find(this._queue, item => item.el === el);
    if (!container) return;
    container.clear();
    remove(this._queue, container);
  }
}

const defaultOptions = {
  selector: 'img'
};

class LazyContainer {
  constructor({ el, binding, vnode, lazy }) {
    this.el = null;
    this.vnode = vnode;
    this.binding = binding;
    this.options = {};
    this.lazy = lazy;

    this._queue = [];
    this.update({ el, binding });
  }

  update({ el, binding }) {
    this.el = el;
    this.options = assignDeep({}, defaultOptions, binding.value);

    const imgs = this.getImgs();
    imgs.forEach(el => {
      this.lazy.add(el, assignDeep({}, this.binding, {
        value: {
          src: 'dataset' in el ? el.dataset.src : el.getAttribute('data-src'),
          error: ('dataset' in el ? el.dataset.error : el.getAttribute('data-error')) || this.options.error,
          loading: ('dataset' in el ? el.dataset.loading : el.getAttribute('data-loading')) || this.options.loading
        }
      }), this.vnode);
    });
  }

  getImgs() {
    return ArrayFrom(this.el.querySelectorAll(this.options.selector));
  }

  clear() {
    const imgs = this.getImgs();
    imgs.forEach(el => this.lazy.remove(el));

    this.vnode = null;
    this.binding = null;
    this.lazy = null;
  }
}

LazyContainer.install = (Vue, options = {}) => {
  const LazyClass = Lazy(Vue);
  const lazy = new LazyClass(options);
  const lazyContainer = new LazyContainer({ lazy });

  const isVue2 = Vue.version.split('.')[0] === '2';
  if (isVue2) {
    Vue.directive('lazy-container', {
      bind: lazyContainer.bind.bind(lazyContainer),
      componentUpdated: lazyContainer.update.bind(lazyContainer),
      unbind: lazyContainer.unbind.bind(lazyContainer)
    });
  } else {
    Vue.directive('lazy-container', {
      update(newValue, oldValue) {
        lazyContainer.update(this.el, {
          modifiers: this.modifiers || {},
          arg: this.arg,
          value: newValue,
          oldValue: oldValue
        }, {
          context: this.vm
        });
      },
      unbind() {
        lazyContainer.unbind(this.el);
      }
    });
  }
};

const LazyImage = lazyManager => {
  return {
    props: {
      src: [String, Object],
      tag: {
        type: String,
        default: 'img'
      }
    },
    render(h) {
      return h(this.tag, {
        attrs: {
          src: this.renderSrc
        }
      }, this.$slots.default);
    },
    data() {
      return {
        el: null,
        options: {
          src: '',
          error: '',
          loading: '',
          attempt: lazyManager.options.attempt
        },
        state: {
          loaded: false,
          error: false,
          attempt: 0
        },
        rect: {},
        renderSrc: ''
      };
    },
    watch: {
      src() {
        this.init();
        lazyManager.addLazyBox(this);
        lazyManager.lazyLoadHandler();
      }
    },
    created() {
      this.init();
      this.renderSrc = this.options.loading;
    },
    mounted() {
      this.el = this.$el;
      lazyManager.addLazyBox(this);
      lazyManager.lazyLoadHandler();
    },
    beforeDestroy() {
      lazyManager.removeComponent(this);
    },
    methods: {
      init() {
        const { src, loading, error } = lazyManager._valueFormatter(this.src);
        this.state.loaded = false;
        this.options.src = src;
        this.options.error = error;
        this.options.loading = loading;
        this.renderSrc = this.options.loading;
      },
      getRect() {
        this.rect = this.$el.getBoundingClientRect();
      },
      checkInView() {
        this.getRect();
        return inBrowser && this.rect.top < window.innerHeight * lazyManager.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * lazyManager.options.preLoad && this.rect.right > 0;
      },
      load(onFinish = noop) {
        if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
          if (!lazyManager.options.silent) console.log(`VueLazyload log: ${this.options.src} tried too more than ${this.options.attempt} times`);
          onFinish();
          return;
        }
        const src = this.options.src;
        loadImageAsync({ src }, ({ src }) => {
          this.renderSrc = src;
          this.state.loaded = true;
        }, e => {
          this.state.attempt++;
          this.renderSrc = this.options.error;
          this.state.error = true;
        });
      }
    }
  };
};

LazyImage.install = (Vue, options = {}) => {
  const LazyClass = Lazy(Vue);
  const lazy = new LazyClass(options);
  Vue.component('lazy-image', LazyImage(lazy));
};

var index = {
  /*
  * install function
  * @param  {Vue} Vue
  * @param  {object} options  lazyload options
  */
  install(Vue, options = {}) {
    const LazyClass = Lazy(Vue);
    const lazy = new LazyClass(options);
    const lazyContainer = new LazyContainerMananger({ lazy });

    const isVue2 = Vue.version.split('.')[0] === '2';

    Vue.prototype.$Lazyload = lazy;

    if (options.lazyComponent) {
      Vue.component('lazy-component', LazyComponent(lazy));
    }

    if (options.lazyImage) {
      Vue.component('lazy-image', LazyImage(lazy));
    }

    if (isVue2) {
      Vue.directive('lazy', {
        bind: lazy.add.bind(lazy),
        update: lazy.update.bind(lazy),
        componentUpdated: lazy.lazyLoadHandler.bind(lazy),
        unbind: lazy.remove.bind(lazy)
      });
      Vue.directive('lazy-container', {
        bind: lazyContainer.bind.bind(lazyContainer),
        componentUpdated: lazyContainer.update.bind(lazyContainer),
        unbind: lazyContainer.unbind.bind(lazyContainer)
      });
    } else {
      Vue.directive('lazy', {
        bind: lazy.lazyLoadHandler.bind(lazy),
        update(newValue, oldValue) {
          assignDeep(this.vm.$refs, this.vm.$els);
          lazy.add(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: newValue,
            oldValue: oldValue
          }, {
            context: this.vm
          });
        },
        unbind() {
          lazy.remove(this.el);
        }
      });

      Vue.directive('lazy-container', {
        update(newValue, oldValue) {
          lazyContainer.update(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: newValue,
            oldValue: oldValue
          }, {
            context: this.vm
          });
        },
        unbind() {
          lazyContainer.unbind(this.el);
        }
      });
    }
  }
};

/* harmony default export */ var vue_lazyload_esm = (index);


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugins/Tips/index.vue?vue&type=template&id=b3131560&
var Tipsvue_type_template_id_b3131560_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "butterBar butterBar-center"
  }, [_c('p', {
    class: ['butterBar-message', _vm.type],
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })]);
};

var Tipsvue_type_template_id_b3131560_staticRenderFns = [];

// CONCATENATED MODULE: ./src/plugins/Tips/index.vue?vue&type=template&id=b3131560&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/plugins/Tips/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Tipsvue_type_script_lang_js_ = ({
  name: "tips",
  props: {
    type: {
      type: String,
      default: "warning"
    },
    message: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      show: false
    };
  }

});
// CONCATENATED MODULE: ./src/plugins/Tips/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_Tipsvue_type_script_lang_js_ = (Tipsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/plugins/Tips/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_Tipsvue_type_script_lang_js_,
  Tipsvue_type_template_id_b3131560_render,
  Tipsvue_type_template_id_b3131560_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Tips = (component.exports);
// CONCATENATED MODULE: ./src/plugins/Tips/index.js


let tipTem = external_Vue_default.a.extend(Tips);
let instance;
let timer = null;

const tips = (message, time = 3500, _self, type = 'warning') => {
  if (!instance) {
    instance = new tipTem();
    instance.vm = instance.$mount();
    /**
     * 解决提示信息不存在的问题，使用此方式后，样式只能由配置参数传入
     * 如果想使用主题自定义的方式，可以采用 var rootDom = document.body; 这时将采用主题定义的样式（默认样式会失效）
     */

    var rootDom = _self.$root.$el;
    rootDom.appendChild(instance.vm.$el);
  }

  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = "";
  }

  instance.time = 3000;
  instance.type = type;

  if (typeof message === "string") {
    instance.message = message;
  } else {
    return;
  }

  if (typeof time === "number") {
    instance.time = time;
  }

  instance.show = true;
  timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
    timer = null;
    instance.message = "";
  }, instance.time);
};

const initInstance = _self => {
  if (!instance) {
    instance = new tipTem();
    instance.vm = instance.$mount();
    /**
     * 解决提示信息不存在的问题，使用此方式后，样式只能由配置参数传入
     * 如果想使用主题自定义的方式，可以采用 var rootDom = document.body; 这时将采用主题定义的样式（默认样式会失效）
     */

    var rootDom = _self.$root.$el;
    rootDom.appendChild(instance.vm.$el);
  }
};

tips.install = Vue => {
  Vue.prototype.$tips = tips;
  Vue.prototype.$tipsInitInstance = initInstance;
};

/* harmony default export */ var plugins_Tips = (tips);
// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__("ca00");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comment.vue?vue&type=script&lang=js&shadow


/* eslint-disable no-unused-vars */
 // import $ from "jquery";




 // import ImgPreviewer from "./ImgPreviewer";





external_Vue_default.a.use(plugins_Tips);
/* harmony default export */ var Commentvue_type_script_lang_js_shadow = ({
  name: "Comment",
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: "post",
      validator: function (value) {
        return ["post", "sheet", "journal", "links"].indexOf(value) !== -1;
      }
    },
    configs: {
      type: Object,
      required: false,
      default: () => default_config["a" /* default */]
    },
    options: {
      type: Object,
      required: false,
      default: () => default_option
    }
  },

  // components: { ImgPreviewer },
  data() {
    return {
      comments: [],
      pagination: {
        pages: 0,
        page: 0,
        sort: "",
        size: 5,
        total: 0
      },
      commentLoading: false,
      loaded: false,
      repliedSuccess: null,
      replyingComment: null,
      // options: {},
      globalData: globals["a" /* default */],
      showImgPreviewer: false,
      previewImgUrl: "",
      isAdmin: false
    };
  },

  computed: {
    target() {
      return `${this.type}s`;
    },

    mergedConfigs() {
      var jsonConfig; // 归一化配置数据

      if (typeof this.configs === "string") {
        const raws = JSON.parse(this.configs);
        const tmpObj = {}; // 把字符串布尔值转为真实布尔值

        for (const key in raws) {
          const cur = raws[key];
          tmpObj[key] = /^(true|false)$/.test(cur) ? JSON.parse(cur) : cur;
        }

        jsonConfig = tmpObj;
      } else if (typeof this.configs === "object") {
        jsonConfig = this.configs;
      } else {
        throw new TypeError("config参数类型错误");
      } // 移除值为空的


      Object(util["g" /* removeJsonEmpty */])(jsonConfig);

      if (jsonConfig.assetsAddr) {
        default_config["a" /* default */].avatarError = `${jsonConfig.assetsAddr}/assets/img/default_avatar.jpg`; // 头像加载错误时展示的图片

        default_config["a" /* default */].avatarLoading = `${jsonConfig.assetsAddr}/assets/svg/spinner-preloader.svg`; // 头像加载时展示的图片
      }

      return Object.assign(default_config["a" /* default */], jsonConfig);
    },

    mergedOptions() {
      var jsonOptions; // 归一化options数据

      if (typeof this.options === "string") {
        const raws = JSON.parse(this.options);
        const tmpObj = {}; // 把字符串布尔值转为真实布尔值

        for (const key in raws) {
          const cur = raws[key];
          tmpObj[key] = /^(true|false)$/.test(cur) ? JSON.parse(cur) : cur;
        }

        jsonOptions = tmpObj;
      } else if (typeof this.options === "object") {
        jsonOptions = this.options;
      } else {
        throw new TypeError("options参数类型错误");
      } // 移除值为空的


      Object(util["g" /* removeJsonEmpty */])(jsonOptions);
      return Object.assign(default_option, jsonOptions);
    },

    isReply() {
      return this.globalData.replyId == 0;
    }

  },

  beforeMount() {
    // await this.loadOptions();
    this.$nextTick(() => {
      external_Vue_default.a.use(vue_lazyload_esm, {
        error: this.mergedConfigs.avatarError,
        loading: this.mergedConfigs.avatarLoading,
        attempt: 1
      });
    });

    if (this.mergedConfigs.autoLoad) {
      this.loadComments();
    }

    this.checkIsAdmin();
  },

  // mounted() {
  //   $("[data-fancybox]").on("click", (e) => {
  //     this.previewImgUrl = e.target.src;
  //     this.showImgPreviewer = true;
  //   });
  // },
  methods: {
    loadComments() {
      this.comments = [];
      this.commentLoading = true;
      comment["a" /* default */].listComments(this.target, this.id, "tree_view", this.pagination, this.mergedConfigs).then(response => {
        this.comments = response.data.data.content;
        this.pagination.size = response.data.data.rpp;
        this.pagination.total = response.data.data.total;
        this.pagination.pages = response.data.data.pages;
      }).finally(() => {
        this.commentLoading = false;
        this.loaded = true;
      });
    },

    async handlePaginationChange(page) {
      this.pagination.page = page;
      await Object(util["i" /* sleep */])(300);
      this.loadComments();
    },

    // 检测是否是管理者
    checkIsAdmin() {
      if (!this.mergedConfigs.blogAuthorEmail) return;
      const oldIsAdmin = this.isAdmin;
      const cacheEmail = localStorage.getItem('qiushaocloud-halo-comment-email');
      const nowIsAdmin = this.mergedConfigs.blogAuthorEmail === cacheEmail;
      if (oldIsAdmin !== nowIsAdmin) this.isAdmin = nowIsAdmin;
    },

    deletedRootCommenNode(commentId) {
      console.log('deletedRootCommenNode commentId:', commentId);

      for (let i = this.comments.length - 1; i >= 0; i--) {
        const comment = this.comments[i];

        if (comment.id === commentId) {
          this.comments.splice(i, 1);
          break;
        }
      }
    },

    createdNewRootCommentNode(createdComment) {
      console.log('createdNewRootCommentNode createdComment:', createdComment);
      if (createdComment.parentId === 0) this.comments.unshift(createdComment);
    },

    _findCommentById(findCommentId) {
      for (const comment of this.comments) {
        const findCommentResult = this._findCommentByIdStep(comment, findCommentId);

        if (findCommentResult) return findCommentResult;
      }
    },

    _findCommentByIdStep(comment, findCommentId) {
      if (comment.id === findCommentId) return comment;
      if (!comment.children) return undefined;

      for (const childItem of comment.children) {
        const findCommentResult = this._findCommentByIdStep(childItem, findCommentId);

        if (findCommentResult) return findCommentResult;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Commentvue_type_script_lang_js_shadow = (Commentvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Comment.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("4fdf")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Commentshadow_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Commentshadow = (Commentshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('halo-comment', vue_wc_wrapper(external_Vue_default.a, Commentshadow))

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "64b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6559":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#24292e;line-height:1.5;font-size:14px;word-wrap:break-word}.markdown-body *{-webkit-box-sizing:border-box;box-sizing:border-box}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-bottom:10px;margin-top:10px;font-weight:600;color:var(--classF)}.markdown-body h1{margin:.67em 0;font-size:32px;font-size:2em}.markdown-body h2{font-size:24px;font-size:1.5em}.markdown-body h3{font-size:20px;font-size:1.25em}.markdown-body h4{font-size:16px;font-size:1em}.markdown-body h5{font-size:14px}.markdown-body h6{font-size:14px;color:#6a737d;font-size:.85em}.markdown-body h1,.markdown-body h2{font-weight:600;padding-bottom:.3em;line-height:1.25;border-bottom:1px solid var(--classE)}.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.2}.markdown-body p{margin-bottom:10px;margin-top:0;line-height:1.5;font-size:14px}.markdown-body p:last-child{margin-bottom:0}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px}.markdown-body .anchor:focus{outline:none}.markdown-body details{display:block}.markdown-body details summary{cursor:pointer}.markdown-body summary{display:list-item}.markdown-body a{background-color:transparent;text-decoration:none}.markdown-body a:hover{text-decoration:underline}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body strong{font-weight:inherit;font-weight:bolder;font-weight:600}.markdown-body img{border-style:none;max-width:100%}.markdown-body hr,.markdown-body img{-webkit-box-sizing:content-box;box-sizing:content-box}.markdown-body hr{overflow:visible;background:transparent;border-bottom:1px solid #dfe2e5;height:0;margin:15px 0;overflow:hidden;background-color:#e1e4e8;border:0;height:.25em;margin:24px 0;padding:0;border-bottom-color:#eee}.markdown-body hr:after,.markdown-body hr:before{content:\"\";display:table}.markdown-body hr:after{clear:both}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0;display:table;overflow:auto}.markdown-body table th{font-weight:600}.markdown-body table tr{background-color:#fff;border-top:1px solid #c6cbd1}.markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.markdown-body blockquote{margin:0;color:#6a737d;padding:0 1em;border-left:.25em solid #dfe2e5}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body dd{margin-left:0}.markdown-body .markdown-content pre{margin-top:0;word-wrap:normal;white-space:pre;word-break:break-word}.markdown-body .markdown-content pre>code{border:0;font-size:100%;margin:0;padding:0;white-space:inherit;word-break:break-word}.markdown-body .markdown-content pre code{display:inline;line-height:inherit;margin:0;overflow:visible;padding:0;border:0;color:var(--classF);word-wrap:normal;white-space:inherit;word-break:break-word;background-color:transparent}.markdown-body li{word-wrap:break-all}.markdown-body li>p{margin-top:12px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{font-size:1em;font-style:italic;font-weight:600;margin-top:16px;padding:0}.markdown-body dl dd{margin-bottom:16px;padding:0 16px}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body code{margin:0;padding:.2em .4em;font-size:85%;color:#666;color:var(--routine);background-color:#ebebeb;background-color:var(--classA);border-radius:3px}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body ol,.markdown-body ul{margin-bottom:0;margin-top:0;padding-left:0;padding-left:2em;list-style:auto;color:var(--routine)}.markdown-body .markdown-body td,.markdown-body .markdown-body th{padding:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-bottom:10px;margin-top:0}.markdown-body ul{list-style:disc}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-bottom:0;margin-top:0}.markdown-body table td,.markdown-body table th{border:1px solid #dfe2e5;padding:6px 12px}.markdown-body code,.markdown-body pre,.markdown-content code,.markdown-content pre{font-size:12px}.markdown-body .highlight pre,.markdown-body pre,.markdown-content .highlight pre,.markdown-content pre{font-size:85%;line-height:1.45;overflow:auto;padding:12px;background-color:#ebebeb;background-color:var(--classA);border-radius:3px}.halo-comment,html body{--theme:#fb6c28;--scroll-bar:#c0c4cc;--loading-bar:var(--theme);font-family:Joe Font,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,\"sans-serif\"}.halo-comment.dark,html[data-mode=dark] .halo-comment,html[data-mode=dark] body{--theme:#99f;--scroll-bar:#666;--loading-bar:var(--theme)}html.disable-scroll{height:100vh;overflow:hidden}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar,::-webkit-scrollbar-track{background-color:#eee}::-webkit-scrollbar-thumb{background-color:var(--theme)}div{-webkit-transition:top .8s ease;transition:top .8s ease}a[href=\"javascript:;\"]{cursor:default}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.halo-comment.halo-comment__admin .comment-admin-link{display:block!important}.halo-comment{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif}.halo-comment a{text-decoration:none;color:var(--theme)}.halo-comment input::-webkit-input-placeholder,.halo-comment textarea::-webkit-input-placeholder{color:#ccc}.halo-comment button,.halo-comment input,.halo-comment textarea{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-appearance:none;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.halo-comment button:focus,.halo-comment input:focus,.halo-comment textarea:focus{outline:none}.halo-comment ol,.halo-comment ul{list-style:none}.halo-comment{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;font-size:14px;font-weight:400;line-height:1.5;color:#313131;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-animation:main .6s;animation:main .6s}.halo-comment input[type=color],.halo-comment input[type=date],.halo-comment input[type=datetime-local],.halo-comment input[type=datetime],.halo-comment input[type=email],.halo-comment input[type=month],.halo-comment input[type=number],.halo-comment input[type=password],.halo-comment input[type=range],.halo-comment input[type=search],.halo-comment input[type=tel],.halo-comment input[type=text],.halo-comment input[type=time],.halo-comment input[type=url],.halo-comment input[type=week],.halo-comment textarea{color:#666;border:1px solid #ccc;border-radius:5px}.halo-comment .avatar{background-color:#f5f5f5}.halo-comment .comment-load-button{margin:30px 0;text-align:center}.halo-comment .comment-loader-container{-webkit-animation:top20 .5s;animation:top20 .5s;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:30px 0}.halo-comment .comment-loader-container .comment-loader-default{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:30px}.halo-comment .comment-loader-container .comment-loader-default span{width:4px;height:15px;background-color:#898c7b}.halo-comment .comment-loader-container .comment-loader-default span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.halo-comment .comment-loader-container .comment-loader-default span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.halo-comment .comment-loader-container .comment-loader-default span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.halo-comment .comment-loader-container .comment-loader-default span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.halo-comment .comment-loader-container .comment-loader-circle{border:3px solid #898c7b;border-top-color:#fff;border-radius:50%;width:2.5em;height:2.5em;-webkit-animation:spin .7s linear infinite;animation:spin .7s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.halo-comment .comment-loader-container .comment-loader-balls{width:3.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.halo-comment .comment-loader-container .comment-loader-balls div{width:.7em;height:.7em;border-radius:50%;background-color:#898c7b;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:wave .7s ease-in-out infinite alternate;animation:wave .7s ease-in-out infinite alternate}.halo-comment .comment-loader-container .comment-loader-balls div:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}.halo-comment .comment-loader-container .comment-loader-balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}.halo-comment .commentwrap{width:100%;margin:0 auto 10px;padding:0}.halo-comment .commentwrap .comment-wrp{padding:10px 0 16px 0;border-bottom:1px solid #ddd}.halo-comment .commentwrap .comment-wrp li{clear:both}.halo-comment .commentwrap .comment-wrp:first-child{padding-top:0}.halo-comment .commentwrap .comment-wrp:last-child{padding-bottom:0;border:none}.halo-comment .commentwrap .children{padding-left:40px;margin:0;clear:both}.halo-comment .commentwrap .children .comment-wrp:last-child{border:none}.halo-comment .commentwrap .children main{width:100%}.halo-comment .commentwrap .children .profile{float:left;margin-top:4px}.halo-comment .commentwrap .children .profile img{height:40px;width:40px}.halo-comment .commentwrap .children .children .children .children .children .children{margin:0;padding:0}@media screen and (max-width:500px){.halo-comment .commentwrap .children{padding-left:20px}}.halo-comment .comment{margin:0;padding:0;overflow:hidden;list-style:none}.halo-comment .comment .contents{width:100%;padding-top:10px;float:left}.halo-comment .comment .contents:hover .comment-admin-link,.halo-comment .comment .contents:hover .comment-reply-link{opacity:.9}.halo-comment .comment .main{float:right;width:100%;padding:0}.halo-comment .comment .main.shadow img.avatar{-webkit-transition:all 1s ease;transition:all 1s ease;-webkit-box-shadow:0 1px 10px -6px rgba(0,0,0,.5);box-shadow:0 1px 10px -6px rgba(0,0,0,.5)}.halo-comment .comment .main.shadow .profile:hover img.avatar{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.halo-comment .comment .profile{float:left;margin-right:10px;margin-top:6px}.halo-comment .comment .profile a.disabled{pointer-events:none}.halo-comment .comment .profile img{width:100%;max-width:40px;height:40px;border-radius:100%;-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.halo-comment .comment .profile img:hover{opacity:.8}@media (max-width:880px){.halo-comment .comment .profile{display:none}}.halo-comment .comment .commeta{font-size:16px;margin-bottom:5px;text-transform:uppercase;color:#9499a8;margin-left:50px}.halo-comment .comment .commeta .bb-comment{position:relative;top:-1px;display:inline-block;min-width:30px;text-align:center;font-size:12px;color:#fb7299;font-weight:400;-webkit-transform:scale(.9);transform:scale(.9);border:1px solid #fb7299;border-radius:4px}.halo-comment .comment .commeta .comment-time{display:inline-block;margin-top:6px;font-size:12px;color:#657786}.halo-comment .comment .commeta .info{margin-top:2px;font-size:12px;letter-spacing:0;text-transform:none;color:rgba(0,0,0,.35)}.halo-comment .comment .commeta .info .useragent-info img{vertical-align:sub;width:14px;height:14px;border:0}@media (max-width:480px){.halo-comment .comment .commeta .info .useragent-info{display:none}}.halo-comment .comment .commeta .info .useragent-info-m{margin-top:2px;font-size:12px;letter-spacing:0;text-transform:none;color:rgba(0,0,0,.35);display:none}.halo-comment .comment .commeta .info .useragent-info-m img{vertical-align:sub;width:14px;height:14px;border:0}@media (max-width:480px){.halo-comment .comment .commeta .info .useragent-info-m{display:inline}}@media (max-width:880px){.halo-comment .comment .commeta{margin-left:0}}.halo-comment .comment .author{font-size:24px;font-weight:400;margin:0;letter-spacing:0;text-transform:none;line-height:20px}.halo-comment .comment .author a{color:var(--theme);font-size:14px;font-weight:600}.halo-comment .comment .author a.disabled{pointer-events:none}.halo-comment .comment .author a:hover{color:var(--theme)}.halo-comment .comment .author img{display:none;border-radius:3px;margin-right:5px;vertical-align:-4px}@media (max-width:880px){.halo-comment .comment .author img{display:inline-block}}.halo-comment .comment .comment-admin-link,.halo-comment .comment .comment-reply-link{font-size:14px;display:block;margin-left:10px;float:right;text-transform:uppercase;color:#fff;background-color:var(--theme);line-height:20px;padding:2px 8px;border-radius:5px;opacity:0}.halo-comment .comment .comment-admin-link:hover,.halo-comment .comment .comment-reply-link:hover{opacity:1}.halo-comment .comment .comment-admin-link{display:none}@media (max-width:880px){.halo-comment .comment .comment-admin-link,.halo-comment .comment .comment-reply-link{opacity:1}}.halo-comment .comment .body{color:#63686d;position:relative}.halo-comment .comment .body>:last-child{margin-bottom:0}.halo-comment .comment .body p{font-size:14px;line-height:1.5;color:#63686d}.halo-comment .comment .body p a{position:relative;color:var(--theme)}.halo-comment .comment .body p a:after{content:\"\";position:absolute;width:100%;-webkit-transform:scaleX(0);transform:scaleX(0);height:2px;bottom:0;left:0;background-color:var(--theme);-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transition:-webkit-transform .25s ease-out;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}.halo-comment .comment .body p a:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:bottom left;transform-origin:bottom left}.halo-comment .comment .body p p{display:inline}@media (max-width:580px){.halo-comment .comment .body p{margin:0;font-size:13px;line-height:1.7}}.halo-comment .comment .body .comment-at{color:#99ce00;text-decoration:none}.halo-comment .comment .body .comment-at:after{bottom:-2px;background-color:#99ce00}.halo-comment .markdown-body{margin-bottom:15px;line-height:1;white-space:pre-line;word-break:break-all;font-size:14px!important}.halo-comment .markdown-body .markdown-content{padding:10px;white-space:pre-line;word-break:break-all;background:var(--sub-background);border-radius:0 8px 8px}.halo-comment .markdown-body .markdown-content.blink{-webkit-animation:blink .3s linear infinite alternate;animation:blink .3s linear infinite alternate}@-webkit-keyframes blink{0%{-webkit-filter:brightness(1);filter:brightness(1)}0%{-webkit-filter:brightness(.5);filter:brightness(.5)}}@keyframes blink{0%{-webkit-filter:brightness(1);filter:brightness(1)}0%{-webkit-filter:brightness(.5);filter:brightness(.5)}}.halo-comment .markdown-body img{max-width:100%}.halo-comment .markdown-body .emoji-item{display:inline-block;padding:0;overflow:hidden;color:#333;background-color:transparent}@media (max-width:860px){.halo-comment .markdown-body .emoji-item{-webkit-transform:scale(.8);transform:scale(.8)}}.halo-comment .markdown-body .emoji-item img{position:relative;top:-3px;display:block;max-width:100%;width:auto;height:26px;margin:2px auto 0;border:0}.halo-comment .markdown-body .emoji-item.text{width:auto;height:auto;padding:2px 6px;font-size:14px}.halo-comment .markdown-body .emoji-animate{position:relative;top:10px;width:32px;height:32px}.halo-comment .markdown-body .emoji-animate .img{width:32px;height:864px;max-width:32px;background:top/32px no-repeat;background-image:none;-webkit-animation:im-emotion-step 1.08s steps(27) infinite;animation:im-emotion-step 1.08s steps(27) infinite}.halo-comment .markdown-body .emoji-img{position:relative;top:4px;height:1.4em;max-height:1.4em}.halo-comment .markdown-body .comment_inline_img{cursor:pointer;display:inline-block;max-height:150px;margin-right:3px;padding:3px;background-color:#fff;border:1px solid var(--classC);border-radius:4px}@media screen and (max-width:880px){.halo-comment .markdown-body{padding-left:0}}.halo-comment .comment-editor{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;-webkit-animation:top20 .5s;animation:top20 .5s}.halo-comment .comment-editor input:active,.halo-comment .comment-editor input:focus,.halo-comment .comment-editor textarea:active,.halo-comment .comment-editor textarea:focus{outline:0}.halo-comment .comment-editor input::-webkit-input-placeholder,.halo-comment .comment-editor textarea::-webkit-input-placeholder{color:#999}.halo-comment .comment-editor input::-moz-placeholder,.halo-comment .comment-editor textarea::-moz-placeholder{opacity:1;color:#999}.halo-comment .comment-editor input::-ms-input-placeholder,.halo-comment .comment-editor textarea::-ms-input-placeholder{color:#999}.halo-comment .comment-editor .comment-form{outline:none}.halo-comment .comment-editor .comment-form input,.halo-comment .comment-editor .comment-form textarea{font-size:14px;width:31.3%;margin:0;padding:10px;color:#535a63;background-color:#f9f9f9;border:1px solid #ddd}.halo-comment .comment-editor .comment-form textarea{resize:vertical;display:block;float:none;width:100%;height:180px;min-height:100px;margin-bottom:10px;color:#535a63}.halo-comment .comment-editor .comment-form textarea:focus{border-color:var(--theme)}.halo-comment .comment-editor .comment-form input{width:100%}.halo-comment .comment-editor .comment-form input:last-of-type{margin-right:0}.halo-comment .comment-editor .comment-form input:focus{border-color:#ccc}.halo-comment .comment-editor .comment-form .comment-textarea{position:relative}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:focus{border-color:var(--theme);-webkit-transition:border-color .25s;transition:border-color .25s}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:placeholder-shown::-webkit-input-placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:placeholder-shown::-moz-placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:placeholder-shown:-ms-input-placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:placeholder-shown::-ms-input-placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:-moz-placeholder-shown::placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:-ms-input-placeholder::placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:placeholder-shown::placeholder{color:transparent}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:not(:-moz-placeholder-shown)~.input-label{color:#fff;background-color:var(--theme);transform:scale(.75) translate(-2px,-37px);border-radius:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120%}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:not(:-ms-input-placeholder)~.input-label{color:#fff;background-color:var(--theme);transform:scale(.75) translate(-2px,-37px);border-radius:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120%}.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:focus~.input-label,.halo-comment .comment-editor .comment-form .comment-textarea .commentbody:not(:placeholder-shown)~.input-label{color:#fff;background-color:var(--theme);-webkit-transform:scale(.75) translate(-2px,-37px);transform:scale(.75) translate(-2px,-37px);border-radius:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120%}.halo-comment .comment-editor .comment-form .comment-textarea .input-label{position:absolute;left:10px;top:10px;color:#666;padding:0 6px;-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;-webkit-transition:all .25s;transition:all .25s}.halo-comment .comment-editor .comment-form .comment-preview{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;float:none;width:100%;height:180px;margin:0 0 10px;padding:10px;white-space:pre-line;word-break:break-word;font-size:14px!important;line-height:1.5;overflow-y:auto;-webkit-box-shadow:none;box-shadow:none;color:#535a63;background:#f9f9f9;border:1px solid #ddd;border-radius:3px}.halo-comment .comment-editor .comment-form .comment-preview img{max-width:100%}.halo-comment .comment-editor .comment-form .author-info .commentator{position:absolute;display:inline-block;width:38px;height:38px;pointer-events:none;margin-top:10px}.halo-comment .comment-editor .comment-form .author-info .commentator img{width:100%;height:100%;border-radius:50%}.halo-comment .comment-editor .comment-form .author-info .commentator .socila-check{display:none;width:1.5em;height:1.5em;font-size:1em;line-height:1.5em;text-align:center;color:#fff;border-radius:50%;position:absolute;margin:-28px 0 0 42px}.halo-comment .comment-editor .comment-form .author-info .commentator .gravatar-check{background-color:#1e8cbe;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.halo-comment .comment-editor .comment-form .author-info .commentator .qq-check{background-color:#99ce00}@media (max-width:625px){.halo-comment .comment-editor .comment-form .author-info .commentator{display:none}.halo-comment .comment-editor .comment-form .author-info .commentator .socila-check{width:1.5em;height:1.5em;font-size:.5em;line-height:1.5em;margin:-40% 0 0 77%}}.halo-comment .comment-editor .comment-form .author-info .cmt-popup{margin:0 0 10px 1%;-webkit-box-flex:1;-ms-flex:1;flex:1;--widthB:calc(var(--widthA) - 71px);--widthC:calc(var(--widthB)/3);width:var(--widthC);margin-top:10px}.halo-comment .comment-editor .comment-form .author-info .cmt-popup.cmt-author{margin-left:54px}@media (max-width:625px){.halo-comment .comment-editor .comment-form .author-info .cmt-popup{margin:0;width:100%;margin-top:15px}.halo-comment .comment-editor .comment-form .author-info .cmt-popup.cmt-author{margin-right:8px;margin-left:0}}@media (min-width:625px){.halo-comment .comment-editor .comment-form .author-info{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}}.halo-comment .comment-editor .comment-form .comment-buttons{font-size:14px;text-align:right;margin-top:10px}.halo-comment .comment-editor .comment-form .comment-buttons .middle{display:inline-block;vertical-align:middle}.halo-comment .comment-editor .comment-form .comment-buttons .button-preview-edit,.halo-comment .comment-editor .comment-form .comment-buttons .button-submit{opacity:.9;display:inline-block;margin-left:5px;color:#fff;font-weight:500;padding:4px 12px;text-transform:uppercase;border:none;background:var(--theme);border:1px solid var(--theme);border-radius:4px;-webkit-animation:bottom20 .5s;animation:bottom20 .5s;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s}.halo-comment .comment-editor .comment-form .comment-buttons .button-preview-edit:hover,.halo-comment .comment-editor .comment-form .comment-buttons .button-submit:hover{opacity:1;font-weight:700;letter-spacing:3px;-webkit-box-shadow:0 5px 40px -10px rgba(0,0,0,.57);box-shadow:0 5px 40px -10px rgba(0,0,0,.57);-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s}.halo-comment .comment-editor .comment-form .comment-buttons .button-cancel-reply{opacity:.9;display:inline-block;color:var(--minor);font-weight:500;padding:4px 12px;text-transform:uppercase;background:transparent;border:1px solid var(--minor);border-radius:4px;-webkit-animation:bottom20 .5s;animation:bottom20 .5s;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s}.halo-comment .comment-editor .comment-form .comment-buttons .button-cancel-reply:hover{opacity:1;font-weight:700;letter-spacing:3px;-webkit-box-shadow:0 5px 40px -10px rgba(0,0,0,.57);box-shadow:0 5px 40px -10px rgba(0,0,0,.57);-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s}@media (max-width:1080px){.halo-comment .comment-editor input{width:100%;margin-bottom:14px}}.halo-comment .comment-empty{margin:30px 0;text-align:center;color:#999}.halo-comment .comment-page{padding-top:20px;text-align:center;border-top:3px solid var(--classD)}.halo-comment .comment-page .page{display:inline-block;padding:10px 0;margin:0}.halo-comment .comment-page .page li{display:inline;margin:0 3px;color:var(--main)}.halo-comment .comment-page .page button{position:relative;font-size:inherit;font-family:inherit;height:32px;padding:4px 10px;border-radius:4px;cursor:pointer;font-weight:400;color:var(--main);background-color:var(--sub-background);border:1px solid var(--classE)}.halo-comment .comment-page .page button svg{display:none;fill:var(--main)}.halo-comment .comment-page .page button:hover{color:var(--theme);border-color:var(--theme)}.halo-comment .comment-page .page button:hover svg{fill:var(--theme)}.halo-comment .comment-page .page button.prev-button:before{display:block;content:\"上一页\"}.halo-comment .comment-page .page button.next-button:before{display:block;content:\"下一页\"}.halo-comment .comment-page .page .active{color:var(--theme);border-color:var(--theme)}@media (max-width:500px){.halo-comment .comment-page .page button{height:32px;padding:4px 8px}.halo-comment .comment-page .page button.prev-button{position:relative;top:4px}.halo-comment .comment-page .page button.prev-button:before{display:none}.halo-comment .comment-page .page button.prev-button svg{display:block}.halo-comment .comment-page .page button.next-button{position:relative;top:4px}.halo-comment .comment-page .page button.next-button:before{display:none}.halo-comment .comment-page .page button.next-button svg{display:block}}.halo-comment.halo-comment__small .comment-wrp{padding:10px 0}.halo-comment.dark .avatar{background-color:#3e3e3e}.halo-comment.dark input::-webkit-input-placeholder,.halo-comment.dark textarea::-webkit-input-placeholder{color:#777}.halo-comment.dark input::-moz-placeholder,.halo-comment.dark textarea::-moz-placeholder{color:#777}.halo-comment.dark input::-ms-input-placeholder,.halo-comment.dark textarea::-ms-input-placeholder{color:#777}.halo-comment.dark .comment-editor .comment-textarea textarea{color:#b3b3b3;background:#2e2e2e;border-color:#555}.halo-comment.dark .comment-editor #emotion-toggle{color:#ccc}.halo-comment.dark .comment-editor .author-info input{color:#b3b3b3;background:#2e2e2e;border-color:#555}.halo-comment.dark .comment-wrp{border-color:#4e4e4e}.halo-comment.dark .comment-wrp .commeta .comment-time,.halo-comment.dark .comment-wrp .commeta .info{color:#848484}.halo-comment.dark .comment-editor .comment-form .comment-preview{color:#b3b3b3;background:#2e2e2e;border-color:#555}.halo-comment.dark .comment-empty{color:#666}.halo-comment.dark .comment .body p{color:#999}#emotion-toggle{cursor:pointer;text-align:center;margin-bottom:5px}#container-emoji{background:var(--sub-background)}.emoji-fade-enter-active,.emoji-fade-leave-active{-webkit-transition:all .8s ease;transition:all .8s ease}.emoji-fade-enter,.emoji-fade-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.emotion-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.emotion-box .category-enter,.emotion-box .category-leave-to{opacity:0}.emotion-box .category-enter-active,.emotion-box .category-leave-active{-webkit-transition:all .2s ease;transition:all .2s ease}.emotion-box .category-enter{-webkit-transform:translateX(10px);transform:translateX(10px)}.emotion-box .category-leave-to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.emotion-box .motion-switcher-table{border-collapse:collapse;width:100%;margin:0;table-layout:fixed}.emotion-box .motion-switcher-table tr{color:#e2e2e2;color:var(--classF)}.emotion-box .motion-switcher-table td,.emotion-box .motion-switcher-table th{cursor:pointer;padding:8px;text-align:center;border-radius:5px 5px 0 0}.emotion-box .motion-switcher-table th:hover{color:var(--theme)}.emotion-box .motion-switcher-table .on-hover{color:var(--theme);background-color:hsla(0,0%,96.1%,.5);background-color:var(--sub-background)}.emotion-box .motion-container{height:110px;overflow:auto;margin-bottom:5px;padding:6px 6px 0 16px;border-radius:0 0 5px 5px}.emotion-box .motion-container .emoji-item{cursor:pointer;display:inline-block;width:30px;height:30px;padding:3px;margin:3px;overflow:hidden;color:#333;color:var(--main);border-radius:4px}@media (max-width:860px){.emotion-box .motion-container .emoji-item{-webkit-transform:scale(.8);transform:scale(.8);margin-bottom:-10px}}.emotion-box .motion-container .emoji-item img{display:block;max-width:100%;width:auto;height:26px;margin:3px auto 0;border:0}.emotion-box .motion-container .emoji-item:hover{background-color:#e9e9e9;background-color:var(--classB)}.emotion-box .motion-container .emoji-item.text{width:auto;height:auto;padding:2px 6px;font-size:14px}.emotion-box .motion-container .emoji-animate,.emotion-box .motion-container .emotion-secter{width:32px;height:32px}.emotion-box .motion-container .emoji-animate .img,.emotion-box .motion-container .emotion-secter .img{width:32px;height:864px;max-width:32px;background:top/32px no-repeat;background-image:none;-webkit-animation:im-emotion-step 1.08s steps(27) infinite;animation:im-emotion-step 1.08s steps(27) infinite}@media (max-width:860px){.emotion-box .motion-container .emoji-animate,.emotion-box .motion-container .emotion-secter{-webkit-transform:scale(.8);transform:scale(.8);margin-bottom:-10px}}@media (max-width:860px){.emotion-box .motion-container.bilibili-container,.emotion-box .motion-container.haha-container,.emotion-box .motion-container.tieba-container{padding-left:0}}.emotion-box .motion-container.haha-container img{height:24px}.emotion-box .motion-container a{background-color:transparent;text-decoration:none;color:#e67474;outline:none;-webkit-transition:color .2s ease-out,border .2s ease-out,opacity .2s ease-out;transition:color .2s ease-out,border .2s ease-out,opacity .2s ease-out}.emotion-box .motion-container .emotion-select-parent{overflow:hidden;padding:1px 2px;background-size:32px auto;background-repeat:no-repeat;background-position:50%}.emotion-box .motion-container .emotion-select-parent:hover{background-image:none!important}.emotion-box .motion-container .emotion-select-parent:hover .emotion-select-child{display:block}.emotion-box .motion-container .emotion-select-child{display:none}.emotion-box .motion-container .emotion-secter{margin:12px 12px 0 0}@media (max-width:860px){.emotion-box .motion-container .emotion-secter{margin:0}.emotion-box .motion-container .emotion-secter .emotion-select-parent:hover{background-image:none!important;-webkit-transform:scale(.6);transform:scale(.6)}}.popup{position:relative;display:inline-block;cursor:pointer}.popup .popuptext{width:auto;padding:8px 10px;background-color:#555;color:#fff;text-align:center;border-radius:6px;position:absolute;z-index:1;bottom:110%;left:50%;margin-left:-80px}.popup .popuptext:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent}.popup .fade-enter-active,.popup .fade-enter-to{-webkit-transition:opacity 1s;transition:opacity 1s}.popup .fade-enter,.popup .fade-leave-to{opacity:0}.butterBar{position:absolute;text-align:center;top:10px;right:0;z-index:1000}.butterBar.butterBar-center{margin:auto}.butterBar .butterBar-message{display:inline-block;margin:0;padding:8px 20px;font-size:14px;color:#fff;background:#fe9600;border-radius:18px 0 0 18px;-webkit-box-shadow:-2px 4px 10px -5px #f74009;box-shadow:-2px 4px 10px -5px #f74009;-webkit-animation:dung .3s linear .1s 2;animation:dung .3s linear .1s 2}.butterBar .butterBar-message.success{background:#31c560;-webkit-box-shadow:-2px 4px 10px -5px #07600a;box-shadow:-2px 4px 10px -5px #07600a}.butterBar .butterBar-message.danger{background:#e74b32;-webkit-box-shadow:-2px 4px 10px -5px #e10000;box-shadow:-2px 4px 10px -5px #e10000}@-webkit-keyframes main{0%{opacity:0;-webkit-transform:translateY(50px);transform:translateY(50px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes main{0%{opacity:0;-webkit-transform:translateY(50px);transform:translateY(50px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes dung{0%{-webkit-transform:translateY(0);transform:translateY(0)}30%{-webkit-transform:translateY(-3px);transform:translateY(-3px)}60%{-webkit-transform:translateY(2px);transform:translateY(2px)}80%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}90%{-webkit-transform:translateY(1px);transform:translateY(1px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes dung{0%{-webkit-transform:translateY(0);transform:translateY(0)}30%{-webkit-transform:translateY(-3px);transform:translateY(-3px)}60%{-webkit-transform:translateY(2px);transform:translateY(2px)}80%{-webkit-transform:translateY(-1px);transform:translateY(-1px)}90%{-webkit-transform:translateY(1px);transform:translateY(1px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes bottom20{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bottom20{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes im-emotion-step{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes im-emotion-step{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6715":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("a0d3");

var assertRecord = __webpack_require__("c46d");

var Type = __webpack_require__("b398");

// https://ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__("00d8"),
      utf8 = __webpack_require__("9a63").utf8,
      isBuffer = __webpack_require__("044b"),
      bin = __webpack_require__("9a63").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "688e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "7049":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__("c46d");
var fromPropertyDescriptor = __webpack_require__("1ec3");

var Type = __webpack_require__("b398");

// https://ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc !== 'undefined') {
		assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
	}

	return fromPropertyDescriptor(Desc);
};


/***/ }),

/***/ "706f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7282":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);


class Emoji {
  constructor(name, description, category, style) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.style = style;
    this.extension = ["tieba"].includes(category) ? "gif" : "png";
  }

}

const hahaEmoji = [new Emoji("kuxiao", "哭笑", "haha"), new Emoji("heng", "哼", "haha"), new Emoji("guzhang", "鼓掌", "haha"), new Emoji("haha", "哈哈", "haha"), new Emoji("aini", "爱你", "haha"), new Emoji("bazhang", "巴掌", "haha"), new Emoji("beishang", "悲伤", "haha"), new Emoji("han", "汗", "haha"), new Emoji("deyi", "得意", "haha"), new Emoji("ok", "ok", "haha"), new Emoji("touxiao", "偷笑", "haha"), new Emoji("wabikong", "挖鼻孔", "haha"), new Emoji("weiqu", "委屈", "haha"), new Emoji("weixiao", "微笑", "haha"), new Emoji("huaixiao", "坏笑", "haha"), new Emoji("woshou", "握手", "haha"), new Emoji("wulian", "捂脸", "haha"), new Emoji("xiaku", "吓哭", "haha"), new Emoji("xiaoku", "笑哭", "haha"), new Emoji("xixi", "嘻嘻", "haha"), new Emoji("qinqin", "亲亲", "haha"), new Emoji("qiwang", "期望", "haha"), new Emoji("chanzui", "馋嘴", "haha"), new Emoji("huaxin", "花心", "haha"), new Emoji("hufen", "互粉", "haha"), new Emoji("keai", "可爱", "haha"), new Emoji("kelian", "可怜", "haha"), new Emoji("bishi", "鄙视", "haha"), new Emoji("bizui", "闭嘴", "haha"), new Emoji("yep", "耶", "haha"), new Emoji("zan", "赞", "haha"), new Emoji("yihuo", "疑惑", "haha"), new Emoji("yinxiao", "阴笑", "haha"), new Emoji("yiwen", "疑问", "haha"), new Emoji("bujiandan", "不简单", "haha"), new Emoji("bye", "拜拜", "haha"), new Emoji("chigua", "吃瓜", "haha"), new Emoji("chijing", "吃惊", "haha"), new Emoji("chuitou", "锤头", "haha"), new Emoji("dahaqian", "打哈欠", "haha"), new Emoji("fahuo", "发火", "haha"), new Emoji("bang", "棒", "haha"), new Emoji("gou", "狗", "haha"), new Emoji("guolai", "过来", "haha"), new Emoji("haixiu", "害羞", "haha"), new Emoji("hashiiqi", "哈士奇", "haha"), new Emoji("heixian", "黑线", "haha"), new Emoji("kouzhao", "口罩", "haha"), new Emoji("kulou", "骷髅", "haha"), new Emoji("kun", "困", "haha"), new Emoji("landelini", "懒得理你", "haha"), new Emoji("mao", "猫", "haha"), new Emoji("outu", "呕吐", "haha"), new Emoji("qian", "钱", "haha"), new Emoji("quantou", "拳头", "haha"), new Emoji("shaoerbuyi", "少儿不宜", "haha"), new Emoji("shayan", "傻眼", "haha"), new Emoji("shengbing", "生病", "haha"), new Emoji("tushetou", "吐舌头", "haha"), new Emoji("shuijiao", "睡觉", "haha"), new Emoji("sikao", "思考", "haha"), new Emoji("shiwang", "失望", "haha"), new Emoji("taikaixin", "太开心", "haha"), new Emoji("tear", "流泪", "haha"), new Emoji("tianping", "舔屏", "haha"), new Emoji("xu", "嘘", "haha"), new Emoji("youhengheng", "右哼哼", "haha"), new Emoji("yun", "晕", "haha"), new Emoji("zhouma", "咒骂", "haha"), new Emoji("zhuakuang", "抓狂", "haha"), new Emoji("zuohengheng", "左哼哼", "haha"), new Emoji("zuoyi", "作揖", "haha")];
const bilibiliEmoji = [new Emoji("baiyan", "白眼", "bilibili", {
  "animation-duration": "1800ms",
  "animation-timing-function": "steps(45)",
  transform: "translateY(-1408px)",
  height: "1440px"
}), new Emoji("fadai", "发呆", "bilibili", {
  "animation-duration": "1080ms",
  "animation-timing-function": "steps(27)",
  transform: "translateY(-832px)",
  height: "864px"
}), new Emoji("koubi", "抠鼻", "bilibili", {
  "animation-duration": "1200ms",
  "animation-timing-function": "steps(30)",
  transform: "translateY(-928px)",
  height: "960px"
}), new Emoji("qinqin", "亲亲", "bilibili", {
  "animation-duration": "280ms",
  "animation-timing-function": "steps(7)",
  transform: "translateY(-192px)",
  height: "224px"
}), new Emoji("weiqu", "委屈", "bilibili", {
  "animation-duration": "800ms",
  "animation-timing-function": "steps(20)",
  transform: "translateY(-608px)",
  height: "640px"
}), new Emoji("bishi", "鄙视", "bilibili", {
  "animation-duration": "360ms",
  "animation-timing-function": "steps(9)",
  transform: "translateY(-256px)",
  height: "288px"
}), new Emoji("fanu", "发怒", "bilibili", {
  "animation-duration": "1320ms",
  "animation-timing-function": "steps(33)",
  transform: "translateY(-1024px)",
  height: "1056px"
}), new Emoji("kun", "困", "bilibili", {
  "animation-duration": "1760ms",
  "animation-timing-function": "steps(44)",
  transform: "translateY(-1376px)",
  height: "1408px"
}), new Emoji("se", "色", "bilibili", {
  "animation-duration": "400ms",
  "animation-timing-function": "steps(10)",
  transform: "translateY(-288px)",
  height: "320px"
}), new Emoji("weixiao", "微笑", "bilibili", {
  "animation-duration": "800ms",
  "animation-timing-function": "steps(20)",
  transform: "translateY(-608px)",
  height: "640px"
}), new Emoji("bizui", "闭嘴", "bilibili", {
  "animation-duration": "1240ms",
  "animation-timing-function": "steps(31)",
  transform: "translateY(-960px)",
  height: "992px"
}), new Emoji("ganga", "尴尬", "bilibili", {
  "animation-duration": "1520ms",
  "animation-timing-function": "steps(38)",
  transform: "translateY(-1184px)",
  height: "1216px"
}), new Emoji("lengmo", "冷漠", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("shengbing", "生病", "bilibili", {
  "animation-duration": "1400ms",
  "animation-timing-function": "steps(35)",
  transform: "translateY(-1088px)",
  height: "1120px"
}), new Emoji("wunai", "无奈", "bilibili", {
  "animation-duration": "920ms",
  "animation-timing-function": "steps(23)",
  transform: "translateY(-704px)",
  height: "736px"
}), new Emoji("chan", "馋", "bilibili", {
  "animation-duration": "1600ms",
  "animation-timing-function": "steps(40)",
  transform: "translateY(-1248px)",
  height: "1280px"
}), new Emoji("guilian", "鬼脸", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("liubixue", "流鼻血", "bilibili", {
  "animation-duration": "1400ms",
  "animation-timing-function": "steps(35)",
  transform: "translateY(-1088px)",
  height: "1120px"
}), new Emoji("shengqi", "生气", "bilibili", {
  "animation-duration": "440ms",
  "animation-timing-function": "steps(11)",
  transform: "translateY(-320px)",
  height: "352px"
}), new Emoji("xiaoku", "笑哭", "bilibili", {
  "animation-duration": "600ms",
  "animation-timing-function": "steps(15)",
  transform: "translateY(-448px)",
  height: "480px"
}), new Emoji("daku", "大哭", "bilibili", {
  "animation-duration": "320ms",
  "animation-timing-function": "steps(8)",
  transform: "translateY(-224px)",
  height: "256px"
}), new Emoji("guzhang", "鼓掌", "bilibili", {
  "animation-duration": "680ms",
  "animation-timing-function": "steps(17)",
  transform: "translateY(-512px)",
  height: "544px"
}), new Emoji("liuhan", "流汗", "bilibili", {
  "animation-duration": "1080ms",
  "animation-timing-function": "steps(27)",
  transform: "translateY(-832px)",
  height: "864px"
}), new Emoji("shuizhao", "睡着", "bilibili", {
  "animation-duration": "960ms",
  "animation-timing-function": "steps(24)",
  transform: "translateY(-736px)",
  height: "768px"
}), new Emoji("xieyanxiao", "斜眼笑", "bilibili", {
  "animation-duration": "320ms",
  "animation-timing-function": "steps(8)",
  transform: "translateY(-224px)",
  height: "256px"
}), new Emoji("dalao", "大佬", "bilibili", {
  "animation-duration": "1320ms",
  "animation-timing-function": "steps(33)",
  transform: "translateY(-1024px)",
  height: "1056px"
}), new Emoji("haixiu", "害羞", "bilibili", {
  "animation-duration": "1240ms",
  "animation-timing-function": "steps(31)",
  transform: "translateY(-960px))",
  height: "992px"
}), new Emoji("liulei", "流泪", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("sikao", "思考", "bilibili", {
  "animation-duration": "1440ms",
  "animation-timing-function": "steps(36)",
  transform: "translateY(-1120px)",
  height: "1152px"
}), new Emoji("yiwen", "疑问", "bilibili", {
  "animation-duration": "840ms",
  "animation-timing-function": "steps(21)",
  transform: "translateY(-640px)",
  height: "672px"
}), new Emoji("dalian", "打脸", "bilibili", {
  "animation-duration": "1480ms",
  "animation-timing-function": "steps(37)",
  transform: "translateY(-1152px)",
  height: "1184px"
}), new Emoji("heirenwenhao", "黑人问号", "bilibili", {
  "animation-duration": "1040ms",
  "animation-timing-function": "steps(26)",
  transform: "translateY(-800px)",
  height: "832px"
}), new Emoji("miantian", "腼腆", "bilibili", {
  "animation-duration": "1120ms",
  "animation-timing-function": "steps(28)",
  transform: "translateY(-864px)",
  height: "896px"
}), new Emoji("tiaokan", "调侃", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("yun", "晕", "bilibili", {
  "animation-duration": "480ms",
  "animation-timing-function": "steps(12)",
  transform: "translateY(-352px)",
  height: "384px"
}), new Emoji("dianzan", "点赞", "bilibili", {
  "animation-duration": "800ms",
  "animation-timing-function": "steps(20)",
  transform: "translateY(-608px)",
  height: "640px"
}), new Emoji("huaixiao", "坏笑", "bilibili", {
  "animation-duration": "1240ms",
  "animation-timing-function": "steps(31)",
  transform: "translateY(-960px)",
  height: "992px"
}), new Emoji("mudengkoudai", "目瞪口呆", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("tiaopi", "调皮", "bilibili", {
  "animation-duration": "2000ms",
  "animation-timing-function": "steps(50)",
  transform: "translateY(-1568px)",
  height: "1600px"
}), new Emoji("zaijian", "再见", "bilibili", {
  "animation-duration": "960ms",
  "animation-timing-function": "steps(24)",
  transform: "translateY(-736px)",
  height: "768px"
}), new Emoji("doge", "狗头", "bilibili", {
  "animation-duration": "800ms",
  "animation-timing-function": "steps(20)",
  transform: "translateY(-608px)",
  height: "640px"
}), new Emoji("jingxia", "惊吓", "bilibili", {
  "animation-duration": "1280ms",
  "animation-timing-function": "steps(32)",
  transform: "translateY(-992px)",
  height: "1024px"
}), new Emoji("nanguo", "难过", "bilibili", {
  "animation-duration": "1120ms",
  "animation-timing-function": "steps(28)",
  transform: "translateY(-864px)",
  height: "896px"
}), new Emoji("touxiao", "偷笑", "bilibili", {
  "animation-duration": "240ms",
  "animation-timing-function": "steps(6)",
  transform: "translateY(-160px)",
  height: "192px"
}), new Emoji("zhoumei", "皱眉", "bilibili", {
  "animation-duration": "40ms",
  "animation-timing-function": "steps(1)",
  transform: "translateY(-0px)",
  height: "32px"
}), new Emoji("facai", "发财", "bilibili", {
  "animation-duration": "1200ms",
  "animation-timing-function": "steps(30)",
  transform: "translateY(-928px)",
  height: "960px"
}), new Emoji("keai", "可爱", "bilibili", {
  "animation-duration": "680ms",
  "animation-timing-function": "steps(17)",
  transform: "translateY(-512px)",
  height: "544px"
}), new Emoji("outu", "呕吐", "bilibili", {
  "animation-duration": "1680ms",
  "animation-timing-function": "steps(42)",
  transform: "translateY(-1312px)",
  height: "1344px"
}), new Emoji("tuxue", "吐血", "bilibili", {
  "animation-duration": "320ms",
  "animation-timing-function": "steps(8)",
  transform: "translateY(-224px)",
  height: "256px"
}), new Emoji("zhuakuang", "抓狂", "bilibili", {
  "animation-duration": "760ms",
  "animation-timing-function": "steps(19)",
  transform: "translateY(-576px)",
  height: "608px"
})];
const tiebaEmoji = [new Emoji("tongue", "吐舌", "tieba"), new Emoji("theblackline", "尴尬", "tieba"), new Emoji("tear", "大哭", "tieba"), new Emoji("surprised", "惊哭", "tieba"), new Emoji("surprised2", "惊讶", "tieba"), new Emoji("spray", "喷", "tieba"), new Emoji("spit", "呕吐", "tieba"), new Emoji("smilingeyes", "笑眼", "tieba"), new Emoji("shui", "睡觉", "tieba"), new Emoji("shame", "羞辱", "tieba"), new Emoji("se", "色", "tieba"), new Emoji("rmb", "钱", "tieba"), new Emoji("reluctantly", "勉强", "tieba"), new Emoji("rbq", "观望", "tieba"), new Emoji("niconiconi", "爱你", "tieba"), new Emoji("naive", "天真", "tieba"), new Emoji("ku", "酷", "tieba"), new Emoji("huaji", "滑稽", "tieba"), new Emoji("hu", "呼", "tieba"), new Emoji("han", "汗", "tieba"), new Emoji("haha", "哈哈", "tieba"), new Emoji("good", "棒", "tieba"), new Emoji("doubt", "疑惑", "tieba"), new Emoji("britan", "茶", "tieba"), new Emoji("bbd", "棒棒哒", "tieba"), new Emoji("awesome", "强", "tieba"), new Emoji("anger", "愤怒", "tieba"), new Emoji("aa", "啊啊", "tieba"), new Emoji("happy", "高兴", "tieba"), new Emoji("grievance", "郁闷", "tieba")];
const menheraEmoji = [new Emoji("(⌒▽⌒)", "(⌒▽⌒)", "menhera"), new Emoji("(￣▽￣)", "(￣▽￣)", "menhera"), new Emoji("(=・ω・=)", "(=・ω・=)", "menhera"), new Emoji("(｀・ω・´)", "(｀・ω・´)", "menhera"), new Emoji("(〜￣△￣)〜", "(〜￣△￣)〜", "menhera"), new Emoji("(･∀･)", "(･∀･)", "menhera"), new Emoji("(°∀°)ﾉ", "(°∀°)ﾉ", "menhera"), new Emoji("(￣3￣)", "(￣3￣)", "menhera"), new Emoji("╮(￣▽￣)╭", "╮(￣▽￣)╭", "menhera"), new Emoji("(´_ゝ｀)", "(´_ゝ｀)", "menhera"), new Emoji("←_←", "←_←", "menhera"), new Emoji("→_→", "→_→", "menhera"), new Emoji("(<_<)", "(<_<)", "menhera"), new Emoji("(>_>)", "(>_>)", "menhera"), new Emoji("(;¬_¬)", "(;¬_¬)", "menhera"), new Emoji("(▔□▔)/", "(▔□▔)/", "menhera"), new Emoji("(ﾟДﾟ≡ﾟдﾟ)!?", "(ﾟДﾟ≡ﾟдﾟ)!?", "menhera"), new Emoji("Σ(ﾟдﾟ;)", "Σ(ﾟдﾟ;)", "menhera"), new Emoji("Σ(￣□￣||)", "Σ(￣□￣||)", "menhera"), new Emoji("(’；ω；‘)", "(’；ω；‘)", "menhera"), new Emoji("（/TДT)/", "（/TДT)/", "menhera"), new Emoji("(^・ω・^ )", "(^・ω・^ )", "menhera"), new Emoji("(｡･ω･｡)", "(｡･ω･｡)", "menhera"), new Emoji("(●￣(ｴ)￣●)", "(●￣(ｴ)￣●)", "menhera"), new Emoji("ε=ε=(ノ≧∇≦)ノ", "ε=ε=(ノ≧∇≦)ノ", "menhera"), new Emoji("(’･_･‘)", "(’･_･‘)", "menhera"), new Emoji("(-_-#)", "(-_-#)", "menhera"), new Emoji("（￣へ￣）", "（￣へ￣）", "menhera"), new Emoji("(￣ε(#￣)Σ", "(￣ε(#￣)Σ", "menhera"), new Emoji("ヽ(‘Д’)ﾉ", "ヽ(‘Д’)ﾉ", "menhera"), new Emoji("（#-_-)┯━┯", "（#-_-)┯━┯", "menhera"), new Emoji("(╯°口°)╯(┴—┴", "(╯°口°)╯(┴—┴", "menhera"), new Emoji("←◡←", "←◡←", "menhera"), new Emoji("( ♥д♥)", "( ♥д♥)", "menhera"), new Emoji("_(:3」∠)_", "_(:3」∠)_", "menhera"), new Emoji("Σ>―(〃°ω°〃)♡→", "Σ>―(〃°ω°〃)♡→", "menhera"), new Emoji("⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "menhera"), new Emoji("(╬ﾟдﾟ)▄︻┻┳═一", "(╬ﾟдﾟ)▄︻┻┳═一", "menhera"), new Emoji("･*･:≡(　ε:)", "･*･:≡(　ε:)", "menhera"), new Emoji("(笑)", "(笑)", "menhera"), new Emoji("(汗)", "(汗)", "menhera"), new Emoji("(泣)", "(泣)", "menhera"), new Emoji("(苦笑)", "(苦笑)", "menhera")];
/* harmony default export */ __webpack_exports__["default"] = ([...hahaEmoji, ...bilibiliEmoji, ...tiebaEmoji, ...menheraEmoji]);

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var hasOwn = __webpack_require__("1a2d");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("be77");

requirePromise();

var IsCallable = __webpack_require__("2054");
var SpeciesConstructor = __webpack_require__("95a0");
var Type = __webpack_require__("b398");

var promiseResolve = function PromiseResolve(C, value) {
	return new C(function (resolve) {
		resolve(value);
	});
};

var OriginalPromise = Promise;

var createThenFinally = function CreateThenFinally(C, onFinally) {
	return function (value) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var valueThunk = function () {
			return value;
		};
		return promise.then(valueThunk);
	};
};

var createCatchFinally = function CreateCatchFinally(C, onFinally) {
	return function (reason) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var thrower = function () {
			throw reason;
		};
		return promise.then(thrower);
	};
};

var promiseFinally = function finally_(onFinally) {
	/* eslint no-invalid-this: 0 */

	var promise = this;

	if (Type(promise) !== 'Object') {
		throw new TypeError('receiver is not an Object');
	}

	var C = SpeciesConstructor(promise, OriginalPromise); // may throw

	var thenFinally = onFinally;
	var catchFinally = onFinally;
	if (IsCallable(onFinally)) {
		thenFinally = createThenFinally(C, onFinally);
		catchFinally = createCatchFinally(C, onFinally);
	}

	return promise.then(thenFinally, catchFinally);
};

if (Object.getOwnPropertyDescriptor) {
	var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
	if (descriptor && descriptor.configurable) {
		Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
	}
}

module.exports = promiseFinally;


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var definePropertiesModule = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "7d36":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__("2057");

// http://262.ecma-international.org/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81df":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6559");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("dbb6c02e", content, shadowRoot)
};

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "848b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__("4a0c");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8926":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__("be77");

var implementation = __webpack_require__("7b13");

module.exports = function getPolyfill() {
	requirePromise();
	return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "95a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = __webpack_require__("5018");
var Type = __webpack_require__("b398");

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};


/***/ }),

/***/ "96db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__("545e")('Object.prototype.toString');

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ "9a63":
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a0d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("0f7c");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "a442":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {const DEFAULT_ASSETS_ADDR = !(process && Object({"NODE_ENV":"production","BASE_URL":"/"}) && "production" === 'production') ? '' : 'https://githubcdn.qiushaocloud.top/gh/qiushaocloud/halo-comment-joe2.0-qiu@master';
/* harmony default export */ __webpack_exports__["a"] = ({
  size: "normal",
  // 组件尺寸，normal/small
  autoLoad: true,
  // 是否自动加载评论
  showUserAgent: true,
  // 是否显示用户UserAgent信息
  gravatarType: "mm",
  // gravatar头像类型（可在后台管理里设置）
  gravatarSource: "https://sdn.geekzu.org/avatar",
  // gravatar头像源
  gravatarSourceDefault: "https://cn.gravatar.com/avatar",
  // gravatar默认头像源
  avatarError: `${DEFAULT_ASSETS_ADDR}/assets/img/default_avatar.jpg`,
  // 头像加载错误时展示的图片
  avatarLoading: `${DEFAULT_ASSETS_ADDR}/assets/svg/spinner-preloader.svg`,
  // 头像加载时展示的图片
  loadingStyle: "default",
  // 评论加载时的loading样式
  aWord: "欢迎您，请点击此处，动动您的小手指，留下您的👣  ...",
  // 输入框聚焦时提示的一言
  authorPopup: "输入QQ号将自动拉取昵称和头像 ♪(´▽｀)",
  // 输入昵称时的提示文案
  emailPopup: "您的邮箱将收到回复通知 ๑乛◡乛๑",
  // 输入邮箱时的提示文案
  urlPopup: "请不要打小广告哦 (^し^)",
  // 输入网址时的提示文案
  notComment: "还没有评论哦，快来抢占沙发 ♪(´▽｀)",
  // 无数据时展示的文案
  isAllowUploadAvatar: true,
  // 是否允许上传头像【注：配合 imgGithubUser、imgGithubRepo、imgGithubRepo 使用】
  imgGithubUser: '',
  // 上传图片的 github 用户名, 为‘’ 则使用作者的 cdn github 用户：qiushaocloud-cdn，默认为''
  imgGithubRepo: '',
  // 上传图片的 github 仓库，为 ‘’ 则会自动生成仓库名：hcqcdnimgs_${year}_${month}，默认为''
  imgGithubApiToken: '',
  // 上传图片的 github 授权 token, 为‘’ 则使用作者的 cdn github 用户的授权token，默认为''【注：关于设置 token，请参考：https://www.qiushaocloud.top/2022/07/03/zhuan-zai-github-picgo.html】
  githubApiHost: 'api.github.com',
  // github API 请求域名，默认为: api.github.com 【注: 由于国内外墙的问题，您可以设置代理服务器，由代理服务器进行转发请求，例如：github-api-proxy.xxxx.top 或者 www.xxxx.top/github-api-proxy】
  isGetIpLocation: true,
  // 是否获取评论者的地理位置
  blogAuthorNickname: "",
  // 设置博主昵称，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorSite
  blogAuthorSite: "",
  // 设置博主站点，当输入博主昵称时则自动输入 blogAuthorEmail 和 blogAuthorNickname
  blogAuthorEmail: "",
  // 设置博主邮箱，则允许博主在博客中进行评论，如果没有授权，则需要进行登录授权，另外输入博主邮箱时则自动输入 blogAuthorSite 和 blogAuthorNickname
  blogAdminUserName: "",
  // 博客管理的用户名，配置后进行登录时免输入用户名
  getIpApiAddr: 'https://www.qiushaocloud.top/get_ip_location',
  // 获取 IP 的 API 地址，没有配置默认为： https://www.qiushaocloud.top/get_ip_location 【注意：必须使用作者提供的获取 IP 服务，或者自己实现的接口必须遵循作者现有的借口请求参数和返回结果】
  haloApiHost: '',
  // 指定 Halo 相关 API 的域名，为 ‘’ 表示使用当前域名，缺省为‘’,
  assetsAddr: DEFAULT_ASSETS_ADDR,
  // 评论组件所需的 assets 资源地址，没有配置则采用默认为: https://githubcdn.qiushaocloud.top/gh/qiushaocloud/halo-comment-joe2.0-qiu@master
  isDelete2Recycle: true // 博主点击删除评论，是否只将评论放入回收站，如果为 true 则放入回收站，为 false 则永久删除，默认为true

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("d9f5");
__webpack_require__("b4f8");
__webpack_require__("c513");
__webpack_require__("e9c4");
__webpack_require__("5a47");


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isForced = __webpack_require__("94ca");
var defineBuiltIn = __webpack_require__("cb2d");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isPrototypeOf = __webpack_require__("3a9b");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn(global, NUMBER, NumberWrapper, { constructor: true });
}


/***/ }),

/***/ "ab36":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "ae57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = __webpack_require__("fffd");
var DefineOwnProperty = __webpack_require__("2a6d");

var FromPropertyDescriptor = __webpack_require__("7049");
var IsAccessorDescriptor = __webpack_require__("6715");
var IsDataDescriptor = __webpack_require__("4600");
var IsPropertyKey = __webpack_require__("706f");
var SameValue = __webpack_require__("7d36");
var ToPropertyDescriptor = __webpack_require__("2c10");
var Type = __webpack_require__("b398");

// https://ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aeb0":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var uncurryThis = __webpack_require__("e330");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b189":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("d4ab"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "b398":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__("5183");

// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	if (typeof x === 'bigint') {
		return 'BigInt';
	}
	return ES5Type(x);
};


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b4f8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var toString = __webpack_require__("577e");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("3d87");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "b980":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "be77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
	}
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var defaults = __webpack_require__("2444");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c46d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__("a0d3");

var isMatchRecord = __webpack_require__("c906");

var predicates = {
	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Desc) {
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},
	// https://262.ecma-international.org/13.0/#sec-match-records
	'Match Record': isMatchRecord
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (Type(value) !== 'Object' || !predicate(value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ "c513":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var hasOwn = __webpack_require__("1a2d");
var isSymbol = __webpack_require__("d9b5");
var tryToString = __webpack_require__("0d51");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("3d87");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c770":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c906":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("a0d3");

// https://262.ecma-international.org/13.0/#sec-match-records

module.exports = function isMatchRecord(record) {
	return (
		has(record, '[[StartIndex]]')
        && has(record, '[[EndIndex]]')
        && record['[[StartIndex]]'] >= 0
        && record['[[EndIndex]]'] >= record['[[StartIndex]]']
        && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])
        && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])
	);
};


/***/ }),

/***/ "ca00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return timeAgo; });
/* unused harmony export isUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObject; });
/* unused harmony export validEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isQQ; });
/* unused harmony export queryStringify */
/* unused harmony export getUrlKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return return2Br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isInVisibleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeJsonEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrFormatMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrFormatDay; });
/* unused harmony export produceRandomNumId */
/* unused harmony export produceRandomId */
/**
 * time ago
 * @param {*} time
 */
function timeAgo(time) {
  var currentTime = new Date().getTime();
  var between = currentTime - time;
  var days = Math.floor(between / (24 * 3600 * 1000));

  if (days === 0) {
    var leave1 = between % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));

    if (hours === 0) {
      var leave2 = leave1 % (3600 * 1000);
      var minutes = Math.floor(leave2 / (60 * 1000));

      if (minutes === 0) {
        var leave3 = leave2 % (60 * 1000);
        var seconds = Math.round(leave3 / 1000);
        if (seconds < 1) return "刚刚";
        return seconds + " 秒前";
      }

      return minutes + " 分钟前";
    }

    return hours + " 小时前";
  }

  if (days < 0) return "刚刚";

  if (days < 1) {
    return days + " 天前";
  } else {
    return formatDate(time, "yyyy/MM/dd hh:mm");
  }
}

function formatDate(date, fmt) {
  date = new Date(date);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
} // From <https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php>


function isUrl(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
function isEmpty(content) {
  return !content;
}
function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}
function validEmail(email) {
  var re = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/;
  return re.test(email);
}
function isQQ(qq) {
  var re = /^[1-9][0-9]{4,9}$/gim;
  return re.test(qq);
}
const queryStringify = query => {
  const queryString = Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key] || "")}`).join("&");
  return queryString;
};
function getUrlKey(name) {
  return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || "")[1].replace(/\+/g, "%20")) || null;
}

function trimTailBr(str) {
  return str.replace(/((\s|&nbsp;)*\r?\n)+$/g, "");
}

function limitBr(str) {
  // return str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "\r\n\r\n");
  return str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "");
}

function trimHeadBr(str) {
  return str.replace(/^((\s|&nbsp;)*\r?\n)+/g, "");
}

function return2Br(str) {
  str = trimHeadBr(str);
  str = trimTailBr(str);
  str = limitBr(str); // return str.replace(/\r?\n/g, "<br />");

  return str;
} //判断一个元素是否在可视区域内

function isInVisibleArea(elem, root) {
  if (!elem || !elem.getBoundingClientRect) return false;
  var clientHeight = window.innerHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 这里需要加上根节点距顶端的距离

  var rootOffsetTop = root.offsetTop;
  var offsetTop = elem.offsetTop + rootOffsetTop;
  var objHeight = elem.offsetHeight;

  if (offsetTop + objHeight < scrollTop + clientHeight && offsetTop + objHeight > scrollTop) {
    return true;
  }

  return false;
}
/**
 * 移除 JSON 内值为空的数据
 * @param {*} obj json 对象
 */

function removeJsonEmpty(obj) {
  for (let k in obj) {
    let v = obj[k];

    if (v === "") {
      delete obj[k];
    } else if (v.constructor == Object) {
      removeJsonEmpty(v);
    }
  }
}
/**
 * 延迟函数
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getCurrFormatMonth(date, customJoinStr) {
  if (!date || typeof date === 'number') {
    if (typeof date === 'number') date = new Date(date);else date = new Date();
  }

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  if (customJoinStr) return year + customJoinStr + month;
  return year + '-' + month;
}
function getCurrFormatDay(date, customJoinStr) {
  if (!date || typeof date === 'number') {
    if (typeof date === 'number') date = new Date(date);else date = new Date();
  }

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  if (customJoinStr) return year + customJoinStr + month + customJoinStr + day;
  return year + '-' + month + '-' + day;
}
/** 生产随机数字 */

function produceRandomNumId() {
  return Math.floor(100000000000000000 + Math.random() * 900000000000000000);
}
/** 生产随机ID */

function produceRandomId() {
  return Math.floor(100000000000000000 + Math.random() * 900000000000000000) + '_' + Date.now();
}

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var fails = __webpack_require__("d039");
var addToUnscopables = __webpack_require__("44d2");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("e330");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var defineBuiltIn = __webpack_require__("cb2d");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "d6c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("d4ab");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("b189");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "d9e2":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var wrapErrorConstructorWithCause = __webpack_require__("e5cb");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "d9f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var isPrototypeOf = __webpack_require__("3a9b");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var definePropertiesModule = __webpack_require__("37e8");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var defineBuiltIn = __webpack_require__("cb2d");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var defineSymbolToPrimitive = __webpack_require__("57b9");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineProperty = __webpack_require__("9bf2").f;
var defineIterator = __webpack_require__("7dd0");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e391":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("577e");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e5cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var isPrototypeOf = __webpack_require__("3a9b");
var setPrototypeOf = __webpack_require__("d2bb");
var copyConstructorProperties = __webpack_require__("e893");
var proxyAccessor = __webpack_require__("aeb0");
var inheritIfRequired = __webpack_require__("7156");
var normalizeStringArgument = __webpack_require__("e391");
var installErrorCause = __webpack_require__("ab36");
var clearErrorStack = __webpack_require__("c770");
var ERROR_STACK_INSTALLABLE = __webpack_require__("b980");
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e9ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: remove, semver-major

module.exports = __webpack_require__("00ce");


/***/ }),

/***/ "e9c4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var arraySlice = __webpack_require__("f36a");
var NATIVE_SYMBOL = __webpack_require__("4930");

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "ef10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),

/***/ "f058":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderedEmojiHtml; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);


const emojiData = __webpack_require__("7282");

function renderedEmojiHtml(html) {
  const parser = new DOMParser();
  const doc = removeNotEmoji(parser.parseFromString(html, "text/html"));
  const emotions = doc.getElementsByClassName("emoji-animate");

  for (let i = 0; i < emotions.length; i++) {
    const emojiName = emotions[i].getAttribute("data-icon");

    for (let j = 0; j < emojiData["default"].length; j++) {
      const emoji = emojiData["default"][j];

      if (emoji.style && emoji.name === emojiName) {
        const img = emotions[i].getElementsByClassName("img")[0];
        let dataStyle = "";
        Object.keys(emoji.style).forEach(function (item) {
          dataStyle += item + ":" + emoji.style[item] + ";";
        });
        img.style.cssText = dataStyle;
        break;
      }
    }
  }

  return doc.body.innerHTML;
}
/**
 * 判断需要渲染的 HTML 是否属于表情包，如果不属于，则去除此 HTML，仅保留文字
 */

function removeNotEmoji(doc) {
  const smilies = doc.getElementsByClassName("emoji-img");
  let skip = true;

  for (let i = 0; i < smilies.length; i++) {
    const name = smilies[i].dataset.icon;

    if (!findEmoji(name)) {
      skip = false;
      break;
    }
  }

  if (skip) return doc;
  const firstNode = smilies[0];
  const name = firstNode.dataset.icon;
  !findEmoji(name) && removeNode(firstNode);
  return removeNotEmoji(doc);
}

function removeNode(node) {
  const alt = node.getAttribute("alt");
  const textNode = document.createTextNode(alt);
  node.parentNode.replaceChild(textNode, node);
}
/**
 * 根据条件查找表情
 * @param {*} type
 * @param {*} name
 * @returns 返回 true 则表示表情存在，返回 false 则表示不存在
 */


function findEmoji(name) {
  // const emojis = ["haha", "gulu", "tieba"];
  return emojiData["default"].filter(item => ["haha", "tieba"].includes(item.category) && item.name === name).length > 0;
}

/***/ }),

/***/ "f1f3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d9e2");

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
      var baseUrl = window.location.host === 'localhost:8080' ? '' : 'https://githubcdn.qiushaocloud.top/gh/qiushaocloud/halo-comment-joe2.0-qiu@master';
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false,
        hahaEmojiUrl: baseUrl + '/assets/emoji/haha/',
        bilibiliEmojiUrl: baseUrl + '/assets/emoji/bilibili/',
        // guluEmojiUrl: baseUrl+'/assets/emoji/gulu/',
        tiebaEmojiUrl: baseUrl + '/assets/emoji/smilies/'
      };
    }

    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }

    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });
  var defaults_1 = defaults.defaults;
  var defaults_2 = defaults.getDefaults;
  var defaults_3 = defaults.changeDefaults;
  /**
   * Helpers
   */

  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };

  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }

    return html;
  }

  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  var caret = /(^|[^\[])\^/g;

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }

  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;

      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;

    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }

      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }

      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }

  var noopTest = {
    exec: function noopTest() {}
  };

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') {
        escaped = !escaped;
      }

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/);
    var i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim(str, c, invert) {
    var l = str.length;

    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, l - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var l = str.length;
    var level = 0,
        i = 0;

    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }

  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  }

  var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation
  };
  var defaults$1 = defaults.defaults;
  var rtrim$1 = helpers.rtrim,
      splitCells$1 = helpers.splitCells,
      _escape = helpers.escape,
      findClosingBracket$1 = helpers.findClosingBracket;

  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');

    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }

  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

    if (matchIndentToCode === null) {
      return text;
    }

    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);

      if (matchIndentInNode === null) {
        return node;
      }

      var indentInNode = matchIndentInNode[0];

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */


  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$1;
    }

    var _proto = Tokenizer.prototype;

    _proto.bilibiliEmoji = function bilibiliEmoji(src) {
      var cap = this.rules.inline.bilibiliEmoji.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'bilibiliEmoji',
            raw: cap[0],
            text: cap[1]
          };
        }
      }
    };

    _proto.textEmoji = function textEmoji(src) {
      var cap = this.rules.inline.textEmoji.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'textEmoji',
            raw: cap[0],
            text: cap[1]
          };
        }
      }
    };

    _proto.codeEmoji = function codeEmoji(src) {
      var cap = this.rules.inline.codeEmoji.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'codeEmoji',
            raw: cap[0],
            text: cap[1]
          };
        }
      }
    };

    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    };

    _proto.code = function code(src, tokens) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && lastToken.type === 'paragraph') {
          return {
            raw: cap[0],
            text: cap[0].trimRight()
          };
        }

        var text = cap[0].replace(/^ {4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim$1(text, '\n') : text
        };
      }
    };

    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };

    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: cap[2]
        };
      }
    };

    _proto.nptable = function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };

        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i], item.header.length);
          }

          return item;
        }
      }
    };

    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };

    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var isparen = bull[bull.length - 1] === ')';
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
            item,
            space,
            b,
            addBack,
            loose,
            istask,
            ischecked;
        var l = itemMatch.length;

        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item; // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+[.)]) */, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

            if (isordered ? b.length === 1 || !isparen && b[b.length - 1] === ')' : b.length > 1 || this.options.smartLists && b !== bull) {
              addBack = itemMatch.slice(i + 1).join('\n');
              list.raw = list.raw.substring(0, list.raw.length - addBack.length);
              i = l - 1;
            }
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            list.loose = true;
          } // Check for task list items


          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;

          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }

        return list;
      }
    };

    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };

    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          return item;
        }
      }
    };

    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    };

    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    };

    _proto.text = function text(src, tokens) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1];

        if (lastToken && lastToken.type === 'text') {
          return {
            raw: cap[0],
            text: cap[0]
          };
        }

        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    };

    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };

    _proto.tag = function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }

        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };

    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var lastParenIndex = findClosingBracket$1(cap[2], '()');

        if (lastParenIndex > -1) {
          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
          var linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        var token = outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
        return token;
      }
    };

    _proto.reflink = function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        var token = outputLink(cap, link, cap[0]);
        return token;
      }
    };

    _proto.strong = function strong(src) {
      var cap = this.rules.inline.strong.exec(src);

      if (cap) {
        return {
          type: 'strong',
          raw: cap[0],
          text: cap[4] || cap[3] || cap[2] || cap[1]
        };
      }
    };

    _proto.em = function em(src) {
      var cap = this.rules.inline.em.exec(src);

      if (cap) {
        return {
          type: 'em',
          raw: cap[0],
          text: cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]
        };
      }
    };

    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = text.startsWith(' ') && text.endsWith(' ');

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };

    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };

    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[1]
        };
      }
    };

    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.url = function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };

    _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };

    return Tokenizer;
  }();

  var noopTest$1 = helpers.noopTest,
      edit$1 = helpers.edit,
      merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge$1({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' *([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' *\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

  });
  block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: noopTest$1,
    // fences not supported
    paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline = {
    bilibiliEmoji: /^f\(x\)=∫\(([^A-Z]\w+?)\)sec²xdx/,
    textEmoji: /^`([^a-zA-Z]+?)`/,
    codeEmoji: /^:([^A-Z]\w+!?):/,
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`:f*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
  }; // list of punctuation marks from common mark spec
  // without ` and ] to workaround Rule 17 (inline code blocks/links)
  // without , to work around example 393

  inline._punctuation = '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~';
  inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge$1({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge$1({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`:f*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block,
    inline: inline
  };
  var defaults$2 = defaults.defaults;
  var block$1 = rules.block,
      inline$1 = rules.inline;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */


  function mangle(text) {
    var out = '',
        i,
        ch;
    var l = text.length;

    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  }
  /**
   * Block Lexer
   */


  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$2;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block$1.normal,
        inline: inline$1.normal
      };

      if (this.options.pedantic) {
        rules.block = block$1.pedantic;
        rules.inline = inline$1.pedantic;
      } else if (this.options.gfm) {
        rules.block = block$1.gfm;

        if (this.options.breaks) {
          rules.inline = inline$1.breaks;
        } else {
          rules.inline = inline$1.gfm;
        }
      }

      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */

    /**
     * Static Lex Method
     */


    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Preprocessing
     */
    ;

    var _proto = Lexer.prototype;

    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */
    ;

    _proto.blockTokens = function blockTokens(src, tokens, top) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (top === void 0) {
        top = true;
      }

      src = src.replace(/^ +$/gm, '');
      var token, i, l, lastToken;

      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)


        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;

          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }

          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);

          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph


        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.text(src, tokens)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _proto.inline = function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }

          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells


              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];

                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }

              break;
            }

          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }

          case 'list':
            {
              l2 = token.items.length;

              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }

              break;
            }
        }
      }

      return tokens;
    }
    /**
     * Lexing/Compiling
     */
    ;

    _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
      if (tokens === void 0) {
        tokens = [];
      }

      if (inLink === void 0) {
        inLink = false;
      }

      if (inRawBlock === void 0) {
        inRawBlock = false;
      }

      var token;

      while (src) {
        // bilibili表情 f(x)=∫(weiqu)sec²xdx
        if (token = this.tokenizer.bilibiliEmoji(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // 文字表情


        if (token = this.tokenizer.textEmoji(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // 帖吧表情/BBcodeEmoji


        if (token = this.tokenizer.codeEmoji(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // escape


        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          tokens.push(token);
          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // strong


        if (token = this.tokenizer.strong(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // em


        if (token = this.tokenizer.em(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    };

    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block$1,
          inline: inline$1
        };
      }
    }]);

    return Lexer;
  }();

  var defaults$3 = defaults.defaults;
  var cleanUrl$1 = helpers.cleanUrl,
      escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$3;
    }

    var _proto = Renderer.prototype;

    _proto.bilibiliEmoji = function bilibiliEmoji(text) {
      var href = cleanUrl$1(this.options.sanitize, this.options.bilibiliEmojiUrl, text + '.png');
      return "<span class=\"emoji-item emoji-animate\" data-icon=\"" + text + "\"><img class=\"img\" src=\"" + href + "\" alt=\":" + text + ":\"></span>";
    };

    _proto.textEmoji = function textEmoji(text) {
      return text;
    };

    _proto.codeEmoji = function codeEmoji(text) {
      // 末尾有！为 gif
      var extension = "." + (/.+!$/.test(text) ? 'gif' : 'png');
      var name = text.replace(/!$/, '');
      var href = cleanUrl$1(this.options.sanitize, this.options[(extension === '.gif' ? 'tieba' : 'haha') + "EmojiUrl"], "icon_" + name + extension);
      return "<img class=\"emoji-item emoji-img\" data-icon=\"" + name + "\" src=\"" + href + "\" onerror=\"this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='\" alt=\":" + name + ":\">";
    };

    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };

    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    _proto.html = function html(_html) {
      return _html;
    };

    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };

    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };

    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;

    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };

    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };

    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };

    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };

    _proto.link = function link(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape$1(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    };

    _proto.image = function image(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    return Renderer;
  }();
  /**
   * TextRenderer
   * returns only the textual part of the token
   */


  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}

    var _proto = TextRenderer.prototype; // no need for block level renderers

    _proto.strong = function strong(text) {
      return text;
    };

    _proto.em = function em(text) {
      return text;
    };

    _proto.codespan = function codespan(text) {
      return text;
    };

    _proto.del = function del(text) {
      return text;
    };

    _proto.html = function html(text) {
      return text;
    };

    _proto.text = function text(_text) {
      return _text;
    };

    _proto.link = function link(href, title, text) {
      return '' + text;
    };

    _proto.image = function image(href, title, text) {
      return '' + text;
    };

    _proto.br = function br() {
      return '';
    };

    return TextRenderer;
  }();
  /**
   * Slugger generates header id
   */


  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }
    /**
     * Convert string to unique id
     */


    var _proto = Slugger.prototype;

    _proto.slug = function slug(value) {
      var slug = value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

      if (this.seen.hasOwnProperty(slug)) {
        var originalSlug = slug;

        do {
          this.seen[originalSlug]++;
          slug = originalSlug + '-' + this.seen[originalSlug];
        } while (this.seen.hasOwnProperty(slug));
      }

      this.seen[slug] = 0;
      return slug;
    };

    return Slugger;
  }();

  var defaults$4 = defaults.defaults;
  var unescape$1 = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$4;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer_1();
      this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */


    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Parse Loop
     */
    ;

    var _proto = Parser.prototype;

    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }

      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = '';
              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */
    ;

    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'bilibiliEmoji':
            {
              out += renderer.bilibiliEmoji ? renderer.bilibiliEmoji(token.text) : token.text;
              break;
            }

          case 'textEmoji':
            {
              out += renderer.textEmoji(token.text);
              break;
            }

          case 'codeEmoji':
            {
              out += renderer.codeEmoji ? renderer.codeEmoji(token.text) : token.text;
              break;
            }

          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    };

    return Parser;
  }();

  var merge$2 = helpers.merge,
      checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
      escape$2 = helpers.escape;
  var getDefaults = defaults.getDefaults,
      changeDefaults = defaults.changeDefaults,
      defaults$5 = defaults.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);

    if (callback) {
      var highlight = opt.highlight;
      var tokens;

      try {
        tokens = Lexer_1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      var done = function done(err) {
        var out;

        if (!err) {
          try {
            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    try {
      var _tokens = Lexer_1.lex(src, opt);

      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }

      return Parser_1.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge$2(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };

  marked.getDefaults = getDefaults;
  marked.defaults = defaults$5;
  /**
   * Use Extension
   */

  marked.use = function (extension) {
    var opts = merge$2({}, extension);

    if (extension.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer_1();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop];

          renderer[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var ret = extension.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (extension.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop];

          tokenizer[prop] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var ret = extension.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in extension.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    }

    if (extension.walkTokens) {
      var walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        extension.walkTokens(token);

        if (walkTokens) {
          walkTokens(token);
        }
      };
    }

    marked.setOptions(opts);
  };
  /**
   * Run callback for every token
   */


  marked.walkTokens = function (tokens, callback) {
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      callback(token);

      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell, callback);
            }

            for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;

              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell, callback);
              }
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    }
  };
  /**
   * Expose
   */


  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.Tokenizer = Tokenizer_1;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;
  return marked_1;
});

/***/ }),

/***/ "f367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("d6c7");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var hasPropertyDescriptors = __webpack_require__("64b0")();

var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value; // eslint-disable-line no-param-reassign
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "f36a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f9af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5d59134-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=025413ee&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "comment-wrp"
  }, [_c('li', {
    staticClass: "comment",
    class: _vm.commentClass,
    attrs: {
      "id": 'comment-' + _vm.comment.id,
      "itemtype": "http://schema.org/Comment",
      "itemprop": "comment"
    }
  }, [_c('div', {
    staticClass: "contents"
  }, [_c('div', {
    staticClass: "main shadow"
  }, [_c('div', {
    staticClass: "profile"
  }, [_c('a', {
    class: {
      disabled: _vm.invalidUrl(_vm.comment.authorUrl)
    },
    attrs: {
      "href": _vm.comment.authorUrl || 'javascript:;',
      "rel": "nofollow noopener noreferrer",
      "target": "_blank"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.comment.isAdmin ? _vm.options.blog_logo : _vm.avatar,
      expression: "comment.isAdmin ? options.blog_logo : avatar"
    }],
    staticClass: "avatar",
    attrs: {
      "height": "80",
      "width": "80",
      "alt": _vm.comment.author
    },
    on: {
      "error": _vm.handleAvatarError
    }
  })])]), _c('div', {
    staticClass: "commentinfo"
  }, [_c('section', {
    staticClass: "commeta"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h4', {
    staticClass: "author"
  }, [_c('a', {
    class: {
      disabled: _vm.invalidUrl(_vm.comment.authorUrl)
    },
    attrs: {
      "href": _vm.comment.authorUrl || 'javascript:;',
      "rel": "nofollow noopener noreferrer",
      "target": "_blank"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.comment.isAdmin ? _vm.options.blog_logo : _vm.avatar,
      expression: "comment.isAdmin ? options.blog_logo : avatar"
    }],
    staticClass: "avatar",
    attrs: {
      "alt": _vm.comment.author,
      "height": "24",
      "width": "24"
    },
    on: {
      "error": _vm.handleAvatarError
    }
  }), _vm.comment.isAdmin ? _c('span', {
    staticClass: "bb-comment isauthor",
    attrs: {
      "title": "博主"
    }
  }, [_vm._v("博主")]) : _vm._e(), _vm._v(" " + _vm._s(_vm.comment.author) + " ")])])]), _c('a', {
    staticClass: "comment-admin-link delete-btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.handleDeleteClick
    }
  }, [_vm._v("删除")]), _c('a', {
    staticClass: "comment-reply-link",
    style: _vm.editing ? 'display:block;' : '',
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.handleReplyClick
    }
  }, [_vm._v("回复")]), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "info"
  }, [_c('time', {
    staticClass: "comment-time",
    attrs: {
      "itemprop": "datePublished",
      "datetime": _vm.comment.createTime
    }
  }, [_vm._v("发布于 " + _vm._s(_vm.createTimeAgo) + " ")]), _vm.configs.showUserAgent ? _c('span', {
    staticClass: "useragent-info",
    domProps: {
      "innerHTML": _vm._s(_vm.compileUserAgent)
    }
  }) : _vm._e()])])])]), _c('div', {
    staticClass: "body markdown-body"
  }, [_c('div', {
    staticClass: "markdown-content",
    domProps: {
      "innerHTML": _vm._s(_vm.compileContent)
    }
  })])])]), _vm.comment.children ? _c('ul', {
    staticClass: "children"
  }, [_vm._l(_vm.comment.children, function (children, index) {
    return [_c('CommentNode', {
      key: index,
      attrs: {
        "isChild": true,
        "targetId": _vm.targetId,
        "target": _vm.target,
        "comment": children,
        "options": _vm.options,
        "configs": _vm.configs,
        "depth": _vm.selfAddDepth,
        "parent": _vm.comment
      }
    })];
  })], 2) : _vm._e()]), _c('CommentEditor', {
    attrs: {
      "targetId": _vm.targetId,
      "target": _vm.target,
      "replyComment": _vm.comment,
      "options": _vm.options,
      "configs": _vm.configs
    },
    on: {
      "checkIsAdmin": _vm.checkIsAdmin
    }
  })], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=template&id=025413ee&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./src/components/index.js + 10 modules
var components = __webpack_require__("2af9");

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__("ca00");

// EXTERNAL MODULE: ./node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__("2b80");
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);

// EXTERNAL MODULE: ./src/plugins/j-marked/lib/marked.js
var marked = __webpack_require__("f1f3");
var marked_default = /*#__PURE__*/__webpack_require__.n(marked);

// EXTERNAL MODULE: ./src/utils/emojiutil.js
var emojiutil = __webpack_require__("f058");

// EXTERNAL MODULE: ./src/components/CommentEditor.vue + 42 modules
var CommentEditor = __webpack_require__("3f17");

// EXTERNAL MODULE: ./src/utils/globals.js
var globals = __webpack_require__("0e4d");

// EXTERNAL MODULE: ./src/api/comment.js + 1 modules
var comment = __webpack_require__("063c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentNode.vue?vue&type=script&lang=js&


/* eslint-disable no-unused-vars */


 // import marked from "j-marked";






/* harmony default export */ var CommentNodevue_type_script_lang_js_ = ({
  name: "CommentNode",
  components: {
    CommentEditor: CommentEditor["a" /* default */]
  },
  props: {
    parent: {
      type: Object,
      required: false,
      default: undefined
    },
    depth: {
      type: Number,
      required: false,
      default: 1
    },
    isChild: {
      type: Boolean,
      required: false,
      default: false
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function (value) {
        return ["posts", "journals", "sheets"].includes(value);
      }
    },
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    configs: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      editing: false,
      globalData: globals["a" /* default */],
      error_img: `${this.configs.assetsAddr}/assets/svg/img_error.svg`,
      unknow_ua: `${this.configs.assetsAddr}/assets/ua/unknow.svg`,
      empty_img: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    };
  },

  created() {
    const renderer = {
      // eslint-disable-next-line no-unused-vars
      image(href, title) {
        return `<a data-fancybox target="_blank" rel="noopener noreferrer nofollow" href="${href}"><img src="${href}" class="lazyload comment_inline_img" onerror="this.src='${this.error_img}'"></a>`;
      },

      link(href, title, text) {
        return `<a href="${href}" title="${text}" target="_blank" rel="noopener noreferrer nofollow">${text}</a>`;
      }

    };
    marked_default.a.use({
      renderer
    });
  },

  computed: {
    avatar() {
      // if (this.comment.avatar) {
      //   return this.comment.avatar;
      // } else {
      if (this.comment.avatarFromContent) {
        return this.comment.avatarFromContent;
      } else {
        // !!优先从主题配置取，取不到才从后台配置取
        const gravatarSource = this.configs.gravatarSource || this.options.gravatar_source || this.configs.gravatarSourceDefault;
        return `${gravatarSource}/${this.comment.gravatarMd5}?s=256&d=${this.options.comment_gravatar_default || 'mm'}`;
      }
    },

    compileContent() {
      var at = "";

      if (this.parent != undefined) {
        at = '<a href="' + (this.parent.authorUrl || 'javascript:;') + '" class="comment-at" rel="noopener noreferrer nofollow"> @' + this.parent.author + " </a>"; // at =
        //   '<a href="javascript:;" class="comment-at"> @' +
        //   this.parent.author +
        //   " </a>";
      } // 获取转换后的marked


      const markedHtml = marked_default()(at + this.comment.content); // 处理其中的表情包

      const emoji = Object(emojiutil["a" /* renderedEmojiHtml */])(markedHtml); // 将回车转换为br

      return Object(util["h" /* return2Br */])(emoji);
    },

    createTimeAgo() {
      return Object(util["j" /* timeAgo */])(this.comment.createTime);
    },

    compileUserAgent() {
      if (!this.comment.userAgent) return "";
      var parser = new ua_parser_default.a();
      parser.setUA(this.comment.userAgent);
      var result = parser.getResult();
      if (!result.browser.name) return "";
      var browserImg = `${this.configs.assetsAddr}/assets/ua/${decodeURIComponent(result.browser.name.toLowerCase())}.svg`;
      var uaImg = "";

      switch (result.os.name) {
        case "Windows":
          switch (result.os.version) {
            case "7":
            case "8":
            case "10":
              uaImg = `${this.configs.assetsAddr}/assets/ua/windows_win${decodeURIComponent(result.os.version)}.svg`;
              break;

            case "":
              uaImg = `${this.configs.assetsAddr}/assets/ua/windows_${decodeURIComponent(result.os.version)}.svg`;
              break;

            default:
              uaImg = `${this.configs.assetsAddr}/assets/ua/windows.svg`;
              break;
          }

          break;

        default:
          uaImg = `${this.configs.assetsAddr}/assets/ua/${decodeURIComponent(result.os.name).replace(/\s+/g, "").toLowerCase()}.svg`;
          break;
      }

      let returnStr = `（<img src="${browserImg}" onerror="this.src='${this.unknow_ua}'" alt="ua-browser"/>  ${result.browser.name} ${result.browser.version} <img src="${uaImg}" onerror="this.src='${this.unknow_ua}'" alt="ua-os"/> ${result.os.name} ${result.os.version}）`;

      if (this.configs.isGetIpLocation && this.comment.ipLocation) {
        returnStr += `「${this.comment.ipLocation}」`;
      }

      return returnStr;
    },

    selfAddDepth() {
      return this.depth + 1;
    },

    commentClass() {
      return "depth-" + this.depth + " comment-" + this.comment.id;
    }

  },
  methods: {
    invalidUrl(url) {
      if (!url) return true;
      return !/^http(s)?:\/\//.test(url);
    },

    handleReplyClick(e) {
      e.stopPropagation(); // 设置状态为回复状态

      this.globalData.replyId = this.comment.id;
    },

    handleDeleteClick(e) {
      e.stopPropagation();
      const {
        id: commentId,
        parentId
      } = this.comment;
      comment["a" /* default */].deleteComment(this.target, commentId, this.configs).then(response => {
        console.log('deleteComment response:', response.data, ' ,commentId:', commentId);
        this.$tips(`删除评论成功`, 5000, this, 'success');
        const delDom = document.getElementById(`comment-${commentId}`);
        const childDom = delDom && delDom.querySelector('ul.children');
        if (delDom && childDom) delDom.removeChild(childDom);

        if (parentId === 0) {
          this.$emit('deletedRootCommenNode', commentId);
        } else {
          const delDomParentNode = delDom.parentNode;
          delDomParentNode.removeChild(delDom);
          if (delDomParentNode.className === 'comment-wrp') delDomParentNode.parentNode.removeChild(delDomParentNode);
        }
      }).catch(err => {
        console.error('deleteComment err:', err.response, ' ,commentId:', commentId);
        if (err.response && err.response.data && err.response.data.message) this.$tips(`删除评论失败, ${err.response.data.message}`, 5000, this, "danger");
      });
    },

    handleTopClick(e) {
      e.stopPropagation();
      console.error('置顶功能等待开发');
    },

    handleAvatarError(e) {
      const img = e.target || e.srcElement;
      img.src = this.configs.avatarError;
      img.onerror = null;
    },

    checkIsAdmin(...args) {
      this.$emit('checkIsAdmin', ...args);
    }

  }
});
// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentNodevue_type_script_lang_js_ = (CommentNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/CommentNode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentNodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentNode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fffd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("00ce");

var has = __webpack_require__("a0d3");
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ })

/******/ });
//# sourceMappingURL=halo-comment.js.map