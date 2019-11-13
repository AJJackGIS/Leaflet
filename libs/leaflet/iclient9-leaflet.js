/*!
 * 
 *     iclient9-leaflet.(http://iclient.supermapol.com)
 *     Copyright© 2000-2017 SuperMap Software Co. Ltd
 *     license: Apache-2.0
 *     version: v9.0.0
 * 
 */
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SuperMap = window.SuperMap = window.SuperMap || {};
module.exports = SuperMap;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;
var sign = __webpack_require__(16);

module.exports = function(x) {
  return (Math.abs(x) <= SPI) ? x : (x - (sign(x) * TWO_PI));
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Util = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Util = exports.Util = _SuperMap2["default"].Util = _SuperMap2["default"].Util || {};
/**
 * @name Util
 * @memberOf SuperMap
 * @namespace
 * @description common工具类。
 */

/**
 * @description 复制源对象的所有属性到目标对象上，源对象上的没有定义的属性在目标对象上也不会被设置。
 * @example
 * 要复制SuperMap.Size对象的所有属性到自定义对象上，使用方法如下:
 *     var size = new SuperMap.Size(100, 100);
 *     var obj = {}；
 *     SuperMap.Util.extend(obj, size);
 * @param destination - {Object} 目标对象。
 * @param source - {Object} 源对象，其属性将被设置到目标对象上。
 * @return {Object} 目标对象。
 */

_SuperMap2["default"].Util.extend = function (destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined) {
                destination[property] = value;
            }
        }

        /**
         * IE doesn't include the toString property when iterating over an object's
         * properties with the for(property in object) syntax.  Explicitly check if
         * the source has its own toString property.
         */

        /*
         * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
         * prototype object" when calling hawOwnProperty if the source object
         * is an instance of window.Event.
         */

        var sourceIsEvt = typeof window.Event === "function" && source instanceof window.Event;

        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty("toString")) {
            destination.toString = source.toString;
        }
    }
    return destination;
};
/**
 * @description 对象拷贝。
 * @param des - {Object} 目标对象。
 * @param soc - {Object} 源对象
 */
_SuperMap2["default"].Util.copy = function (des, soc) {
    des = des || {};
    var v;
    if (soc) {
        for (var p in des) {
            v = soc[p];
            if (typeof v !== 'undefined') {
                des[p] = v;
            }
        }
    }
};
/**
 * @description 销毁对象，将其属性置空
 * @param obj - {Object} 目标对象。
 */
_SuperMap2["default"].Util.reset = function (obj) {
    obj = obj || {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (_typeof(obj[p]) === "object" && obj[p] instanceof Array) {
                for (var i in obj[p]) {
                    if (obj[p][i].destroy) {
                        obj[p][i].destroy();
                    }
                }
                obj[p].length = 0;
            } else if (_typeof(obj[p]) === "object" && obj[p] instanceof Object) {
                if (obj[p].destroy) {
                    obj[p].destroy();
                }
            }
            obj[p] = null;
        }
    }
};

/**
 * @description 获取HTML元素数组。
 * @param argument - {String | HTMLElement | Window}
 * @return {Array<HTMLElement>} HTML元素数组。
 */
_SuperMap2["default"].Util.getElement = function () {
    var elements = [];

    for (var i = 0, len = arguments.length; i < len; i++) {
        var element = arguments[i];
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length === 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
};

/**
 * @description instance of的跨浏览器实现。
 * @param o - {Object} 对象。
 * @return {boolean}
 */
_SuperMap2["default"].Util.isElement = function (o) {
    return !!(o && o.nodeType === 1);
};

/**
 * @description 判断一个对象是否是数组。
 * @param a - {Object} 对象。
 * @return {boolean} 是否是数组。
 */
_SuperMap2["default"].Util.isArray = function (a) {
    return Object.prototype.toString.call(a) === '[object Array]';
};

/**
 * @description 从数组中删除某一项。
 * @param array - {Array} 数组。
 * @param item - {Object} 数组中要删除的一项。
 * @return {Array} 执行删除操作后的数组。
 */
_SuperMap2["default"].Util.removeItem = function (array, item) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
            //break;more than once??
        }
    }
    return array;
};

/**
 * @description 获取某对象再数组中的索引值。
 * @param array - {Array} 数组。
 * @param obj - {Object} 对象。
 * @return {number} 某对象再数组中的索引值。
 */
_SuperMap2["default"].Util.indexOf = function (array, obj) {
    if (array == null) {
        return -1;
    } else {
        // use the build-in function if available.
        if (typeof array.indexOf === "function") {
            return array.indexOf(obj);
        } else {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === obj) {
                    return i;
                }
            }
            return -1;
        }
    }
};

/**
 * @description 修改某DOM元素的许多属性。
 * @param element - {HTMLElement} 待修改的DOM元素。
 * @param id - {string} DOM元素的id。
 * @param px - {SuperMap.Pixel} 包含DOM元素的style属性的left和top属性。
 * @param sz - {SuperMap.Size} 包含DOM元素的width和height属性。
 * @param position - {string} DOM元素的position属性。
 * @param border - {string} DOM元素的style属性的border属性。
 * @param overflow - {string} DOM元素的style属性的overflow属性。
 * @param opacity - {number} 不透明度值。取值范围为 (0.0 - 1.0)。
 */
_SuperMap2["default"].Util.modifyDOMElement = function (element, id, px, sz, position, border, overflow, opacity) {

    if (id) {
        element.id = id;
    }
    if (px) {
        element.style.left = px.x + "px";
        element.style.top = px.y + "px";
    }
    if (sz) {
        element.style.width = sz.w + "px";
        element.style.height = sz.h + "px";
    }
    if (position) {
        element.style.position = position;
    }
    if (border) {
        element.style.border = border;
    }
    if (overflow) {
        element.style.overflow = overflow;
    }
    if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
        element.style.opacity = opacity;
    } else if (parseFloat(opacity) === 1.0) {
        element.style.filter = '';
        element.style.opacity = '';
    }
};

/**
 * @param params - {Object} 参数对象。
 * @return {string} HTTP的GEI请求中的参数字符串。
 * @description 将参数对象转换为HTTP的GEI请求中的参数字符串。例如："key1=value1&key2=value2&key3=value3"。
 */
_SuperMap2["default"].Util.getParameterString = function (params) {
    var paramsArray = [];

    for (var key in params) {
        var value = params[key];
        if (value != null && typeof value !== 'function') {
            var encodedValue;
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
                /* value is an array; encode items and separate with "," */
                var encodedItemArray = [];
                var item;
                for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                    item = value[itemIndex];
                    encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
                }
                encodedValue = encodedItemArray.join(",");
            } else {
                /* value is a string; simply encode */
                encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        }
    }

    return paramsArray.join("&");
};

/**
 * @description 给url追加参数。
 * @param url - {string} 待追加参数的url字符串。
 * @param paramStr - {string} 待追加的参数。
 * @return {string} The new url
 */
_SuperMap2["default"].Util.urlAppend = function (url, paramStr) {
    var newUrl = url;
    if (paramStr) {
        var parts = (url + " ").split(/[?&]/);
        newUrl += parts.pop() === " " ? paramStr : parts.length ? "&" + paramStr : "?" + paramStr;
    }
    return newUrl;
};

/**
 * @description 为了避免浮点精度错误而保留的有效位数。
 * @type {number}
 * @default 14
 */
_SuperMap2["default"].Util.DEFAULT_PRECISION = 14;

/**
 * @description 将字符串以接近的精度转换为数字。
 * @param number - {string} 字符串。
 * @param precision - {number} 精度。
 * @return {number} 数字。
 */
_SuperMap2["default"].Util.toFloat = function (number, precision) {
    if (precision == null) {
        precision = _SuperMap2["default"].Util.DEFAULT_PRECISION;
    }
    if (typeof number !== "number") {
        number = parseFloat(number);
    }
    return precision === 0 ? number : parseFloat(number.toPrecision(precision));
};

/**
 * @description 角度转弧度。
 * @param x - {number} 角度。
 * @return {number} 弧度。
 */
_SuperMap2["default"].Util.rad = function (x) {
    return x * Math.PI / 180;
};

/**
 * @description 从URL字符串中解析出参数对象。
 * @param url - {string} url。
 * @return {Object} 解析出的参数对象。
 */
_SuperMap2["default"].Util.getParameters = function (url) {
    // if no url specified, take it from the location bar
    url = url === null || url === undefined ? window.location.href : url;

    //parse out parameters portion of url string
    var paramsString = "";
    if (_SuperMap2["default"].String.contains(url, '?')) {
        var start = url.indexOf('?') + 1;
        var end = _SuperMap2["default"].String.contains(url, "#") ? url.indexOf('#') : url.length;
        paramsString = url.substring(start, end);
    }

    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for (var i = 0, len = pairs.length; i < len; ++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {

            var key = keyValue[0];
            try {
                key = decodeURIComponent(key);
            } catch (err) {
                key = unescape(key);
            }

            // being liberal by replacing "+" with " "
            var value = (keyValue[1] || '').replace(/\+/g, " ");

            try {
                value = decodeURIComponent(value);
            } catch (err) {
                value = unescape(value);
            }

            // follow OGC convention of comma delimited values
            value = value.split(",");

            //if there's only one value, do not return as array                    
            if (value.length == 1) {
                value = value[0];
            }

            parameters[key] = value;
        }
    }
    return parameters;
};

/**
 * @description 不断递增计数变量，用于生成唯一ID。
 * @type {number}
 * @default 0
 */
_SuperMap2["default"].Util.lastSeqID = 0;

/**
 * @description 创建唯一ID值。
 * @param prefix {string} 前缀。
 * @return {string} 唯一的ID值。
 */
_SuperMap2["default"].Util.createUniqueID = function (prefix) {
    if (prefix == null) {
        prefix = "id_";
    }
    _SuperMap2["default"].Util.lastSeqID += 1;
    return prefix + _SuperMap2["default"].Util.lastSeqID;
};

/**
 * @memberOf SuperMap
 * @description 每单位的英尺数。
 * @type {Object}
 * @constant
 */
_SuperMap2["default"].INCHES_PER_UNIT = {
    'inches': 1.0,
    'ft': 12.0,
    'mi': 63360.0,
    'm': 39.3701,
    'km': 39370.1,
    'dd': 4374754,
    'yd': 36
};
_SuperMap2["default"].INCHES_PER_UNIT["in"] = _SuperMap2["default"].INCHES_PER_UNIT.inches;
_SuperMap2["default"].INCHES_PER_UNIT["degrees"] = _SuperMap2["default"].INCHES_PER_UNIT.dd;
_SuperMap2["default"].INCHES_PER_UNIT["nmi"] = 1852 * _SuperMap2["default"].INCHES_PER_UNIT.m;

// Units from CS-Map
_SuperMap2["default"].METERS_PER_INCH = 0.02540005080010160020;
_SuperMap2["default"].Util.extend(_SuperMap2["default"].INCHES_PER_UNIT, {
    "Inch": _SuperMap2["default"].INCHES_PER_UNIT.inches,
    "Meter": 1.0 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9001
    "Foot": 0.30480060960121920243 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9003
    "IFoot": 0.30480000000000000000 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9002
    "ClarkeFoot": 0.3047972651151 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9005
    "SearsFoot": 0.30479947153867624624 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9041
    "GoldCoastFoot": 0.30479971018150881758 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9094
    "IInch": 0.02540000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "MicroInch": 0.00002540000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Mil": 0.00000002540000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Centimeter": 0.01000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Kilometer": 1000.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9036
    "Yard": 0.91440182880365760731 / _SuperMap2["default"].METERS_PER_INCH,
    "SearsYard": 0.914398414616029 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9040
    "IndianYard": 0.91439853074444079983 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9084
    "IndianYd37": 0.91439523 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9085
    "IndianYd62": 0.9143988 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9086
    "IndianYd75": 0.9143985 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9087
    "IndianFoot": 0.30479951 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9080
    "IndianFt37": 0.30479841 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9081
    "IndianFt62": 0.3047996 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9082
    "IndianFt75": 0.3047995 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9083
    "Mile": 1609.34721869443738887477 / _SuperMap2["default"].METERS_PER_INCH,
    "IYard": 0.91440000000000000000 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9096
    "IMile": 1609.34400000000000000000 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9093
    "NautM": 1852.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9030
    "Lat-66": 110943.316488932731 / _SuperMap2["default"].METERS_PER_INCH,
    "Lat-83": 110946.25736872234125 / _SuperMap2["default"].METERS_PER_INCH,
    "Decimeter": 0.10000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Millimeter": 0.00100000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Dekameter": 10.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Decameter": 10.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "Hectometer": 100.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "GermanMeter": 1.0000135965 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9031
    "CaGrid": 0.999738 / _SuperMap2["default"].METERS_PER_INCH,
    "ClarkeChain": 20.1166194976 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9038
    "GunterChain": 20.11684023368047 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9033
    "BenoitChain": 20.116782494375872 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9062
    "SearsChain": 20.11676512155 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9042
    "ClarkeLink": 0.201166194976 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9039
    "GunterLink": 0.2011684023368047 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9034
    "BenoitLink": 0.20116782494375872 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9063
    "SearsLink": 0.2011676512155 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9043
    "Rod": 5.02921005842012 / _SuperMap2["default"].METERS_PER_INCH,
    "IntnlChain": 20.1168 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9097
    "IntnlLink": 0.201168 / _SuperMap2["default"].METERS_PER_INCH, //EPSG:9098
    "Perch": 5.02921005842012 / _SuperMap2["default"].METERS_PER_INCH,
    "Pole": 5.02921005842012 / _SuperMap2["default"].METERS_PER_INCH,
    "Furlong": 201.1684023368046 / _SuperMap2["default"].METERS_PER_INCH,
    "Rood": 3.778266898 / _SuperMap2["default"].METERS_PER_INCH,
    "CapeFoot": 0.3047972615 / _SuperMap2["default"].METERS_PER_INCH,
    "Brealey": 375.00000000000000000000 / _SuperMap2["default"].METERS_PER_INCH,
    "ModAmFt": 0.304812252984505969011938 / _SuperMap2["default"].METERS_PER_INCH,
    "Fathom": 1.8288 / _SuperMap2["default"].METERS_PER_INCH,
    "NautM-UK": 1853.184 / _SuperMap2["default"].METERS_PER_INCH,
    "50kilometers": 50000.0 / _SuperMap2["default"].METERS_PER_INCH,
    "150kilometers": 150000.0 / _SuperMap2["default"].METERS_PER_INCH
});

//unit abbreviations supported by PROJ.4
_SuperMap2["default"].Util.extend(_SuperMap2["default"].INCHES_PER_UNIT, {
    "mm": _SuperMap2["default"].INCHES_PER_UNIT["Meter"] / 1000.0,
    "cm": _SuperMap2["default"].INCHES_PER_UNIT["Meter"] / 100.0,
    "dm": _SuperMap2["default"].INCHES_PER_UNIT["Meter"] * 100.0,
    "km": _SuperMap2["default"].INCHES_PER_UNIT["Meter"] * 1000.0,
    "kmi": _SuperMap2["default"].INCHES_PER_UNIT["nmi"], //International Nautical Mile
    "fath": _SuperMap2["default"].INCHES_PER_UNIT["Fathom"], //International Fathom
    "ch": _SuperMap2["default"].INCHES_PER_UNIT["IntnlChain"], //International Chain
    "link": _SuperMap2["default"].INCHES_PER_UNIT["IntnlLink"], //International Link
    "us-in": _SuperMap2["default"].INCHES_PER_UNIT["inches"], //U.S. Surveyor's Inch
    "us-ft": _SuperMap2["default"].INCHES_PER_UNIT["Foot"], //U.S. Surveyor's Foot
    "us-yd": _SuperMap2["default"].INCHES_PER_UNIT["Yard"], //U.S. Surveyor's Yard
    "us-ch": _SuperMap2["default"].INCHES_PER_UNIT["GunterChain"], //U.S. Surveyor's Chain
    "us-mi": _SuperMap2["default"].INCHES_PER_UNIT["Mile"], //U.S. Surveyor's Statute Mile
    "ind-yd": _SuperMap2["default"].INCHES_PER_UNIT["IndianYd37"], //Indian Yard
    "ind-ft": _SuperMap2["default"].INCHES_PER_UNIT["IndianFt37"], //Indian Foot
    "ind-ch": 20.11669506 / _SuperMap2["default"].METERS_PER_INCH //Indian Chain
});

/**
 * @memberOf SuperMap
 * @description 分辨率与比例尺之间转换的常量，默认值96。
 * @type {Object}
 * @default 96
 */
_SuperMap2["default"].DOTS_PER_INCH = 96;

/**
 * @param scale - {number}
 * @return {number}
 */
_SuperMap2["default"].Util.normalizeScale = function (scale) {
    var normScale = scale > 1.0 ? 1.0 / scale : scale;
    return normScale;
};

/**
 * @param scale - {number} 比例尺。
 * @param units - {string} 比例尺单位。
 * @return {number} 分辨率。
 */
_SuperMap2["default"].Util.getResolutionFromScale = function (scale, units) {
    var resolution;
    if (scale) {
        if (units == null) {
            units = "degrees";
        }
        var normScale = _SuperMap2["default"].Util.normalizeScale(scale);
        resolution = 1 / (normScale * _SuperMap2["default"].INCHES_PER_UNIT[units] * _SuperMap2["default"].DOTS_PER_INCH);
    }
    return resolution;
};

/**
 * @description 分辨率转比例尺。
 * @param resolution - {number} 分辨率。
 * @param units - {string} 分辨率单位。
 * @return {number} 比例尺。
 */
_SuperMap2["default"].Util.getScaleFromResolution = function (resolution, units) {

    if (units == null) {
        units = "degrees";
    }

    var scale = resolution * _SuperMap2["default"].INCHES_PER_UNIT[units] * _SuperMap2["default"].DOTS_PER_INCH;
    return scale;
};

/**
 * @memberOf SuperMap
 * @description 如果userAgent捕获到浏览器使用的是Gecko引擎则返回true。
 * @constant
 */
_SuperMap2["default"].IS_GECKO = function () {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("webkit") === -1 && ua.indexOf("gecko") !== -1;
}();

/**
 * @memberOf SuperMap
 * @description 浏览器名称，依赖于userAgent属性，BROWSER_NAME可以是空，或者以下浏览器：
 *     * "opera" -- Opera
 *     * "msie"  -- Internet Explorer
 *     * "safari" -- Safari
 *     * "firefox" -- Firefox
 *     * "mozilla" -- Mozilla
 * @constant
 */
_SuperMap2["default"].Browser = function () {
    var name = '',
        version = '',
        device = 'pc',
        uaMatch;
    //以下进行测试
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1 && ua.indexOf("rv") > -1) {
        name = 'msie';
        uaMatch = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)/);
    } else if (ua.indexOf("chrome") > -1) {
        name = 'chrome';
        uaMatch = ua.match(/chrome\/([\d.]+)/);
    } else if (ua.indexOf("firefox") > -1) {
        name = 'firefox';
        uaMatch = ua.match(/firefox\/([\d.]+)/);
    } else if (ua.indexOf("opera") > -1) {
        name = 'opera';
        uaMatch = ua.match(/version\/([\d.]+)/);
    } else if (ua.indexOf("safari") > -1) {
        name = 'safari';
        uaMatch = ua.match(/version\/([\d.]+)/);
    }
    version = uaMatch ? uaMatch[1] : '';

    if (ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1 || ua.indexOf("iphone") > -1) {
        device = 'apple';
    } else if (ua.indexOf("android") > -1) {
        uaMatch = ua.match(/version\/([\d.]+)/);
        version = uaMatch ? uaMatch[1] : '';
        device = 'android';
    }
    return { name: name, version: version, device: device };
}();

/**
 * @description 获取浏览器相关信息。支持的浏览器包括：Opera，Internet Explorer，Safari，Firefox。
 * @return {Object} 获取浏览器名称、版本、设备名称。对应的属性分别为 name, version, device。
 */
_SuperMap2["default"].Util.getBrowser = function () {
    return _SuperMap2["default"].Browser;
};

/**
 * @description 浏览器是否支持Canvas。
 * @return {boolean} 获取当前浏览器是否支持 HTML5 Canvas 。
 */
_SuperMap2["default"].Util.isSupportCanvas = function () {
    var checkRes = true,
        broz = _SuperMap2["default"].Util.getBrowser();
    if (document.createElement("canvas").getContext) {
        if (broz.name === 'firefox' && parseFloat(broz.version) < 5) {
            checkRes = false;
        }
        if (broz.name === 'safari' && parseFloat(broz.version) < 4) {
            checkRes = false;
        }
        if (broz.name === 'opera' && parseFloat(broz.version) < 10) {
            checkRes = false;
        }
        if (broz.name === 'msie' && parseFloat(broz.version) < 9) {
            checkRes = false;
        }
    } else {
        checkRes = false;
    }
    return checkRes;
}();

/**
 * @description 判断；浏览器是否支持Canvas。
 * @return {boolean} 获取当前浏览器是否支持 HTML5 Canvas 。
 */
_SuperMap2["default"].Util.supportCanvas = function () {
    return _SuperMap2["default"].Util.isSupportCanvas;
};

//将服务端的地图单位转成SuperMap的地图单位
_SuperMap2["default"].INCHES_PER_UNIT["degree"] = _SuperMap2["default"].INCHES_PER_UNIT.dd;
_SuperMap2["default"].INCHES_PER_UNIT["meter"] = _SuperMap2["default"].INCHES_PER_UNIT.m;
_SuperMap2["default"].INCHES_PER_UNIT["foot"] = _SuperMap2["default"].INCHES_PER_UNIT.ft;
_SuperMap2["default"].INCHES_PER_UNIT["inch"] = _SuperMap2["default"].INCHES_PER_UNIT.inches;
_SuperMap2["default"].INCHES_PER_UNIT["mile"] = _SuperMap2["default"].INCHES_PER_UNIT.mi;
_SuperMap2["default"].INCHES_PER_UNIT["kilometer"] = _SuperMap2["default"].INCHES_PER_UNIT.km;
_SuperMap2["default"].INCHES_PER_UNIT["yard"] = _SuperMap2["default"].INCHES_PER_UNIT.yd;

/**
 * @description 判断一个 URL 请求是否在当前域中。
 * @param url - {string}  URL 请求字符串。
 * @return {boolean} URL请求是否在当前域中。
 */
_SuperMap2["default"].Util.isInTheSameDomain = function (url) {
    if (!url) {
        return true;
    }
    var index = url.indexOf("//");
    var documentUrl = document.location.toString();
    var documentIndex = documentUrl.indexOf("//");
    if (index === -1) {
        return true;
    } else {
        var protocol;
        var substring = protocol = url.substring(0, index);
        var documentSubString = documentUrl.substring(documentIndex + 2);
        documentIndex = documentSubString.indexOf("/");
        var documentPortIndex = documentSubString.indexOf(":");
        var documentDomainWithPort = documentSubString.substring(0, documentIndex);
        var documentPort;

        var documentprotocol = document.location.protocol;
        if (documentPortIndex !== -1) {
            documentPort = +documentSubString.substring(documentPortIndex, documentIndex);
        } else {
            documentDomainWithPort += ':' + (documentprotocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        if (documentprotocol.toLowerCase() !== substring.toLowerCase()) {
            return false;
        }
        substring = url.substring(index + 2);
        var portIndex = substring.indexOf(":");
        index = substring.indexOf("/");
        var domainWithPort = substring.substring(0, index);
        var domain;
        if (portIndex !== -1) {
            domain = substring.substring(0, portIndex);
        } else {
            domain = substring.substring(0, index);
            domainWithPort += ':' + (protocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        var documentDomain = document.domain;
        if (domain === documentDomain && domainWithPort === documentDomainWithPort) {
            return true;
        }
    }
    return false;
};

/**
 * @description 计算iServer服务的REST图层的显示分辨率，需要从iServer的REST图层表述中获取viewBounds、viewer、scale、coordUnit、datumAxis 五个参数，来进行计算。
 * @param viewBounds - {SuperMap.Bounds} 地图的参照可视范围，即地图初始化时默认的地图显示范围。
 * @param viewer - {SuperMap.Size} 地图初始化时默认的地图图片的尺寸。
 * @param scale - {number} 地图初始化时默认的显示比例尺。
 * @param coordUnit - {string} 投影坐标系统的地图单位。
 * @param datumAxis - {number} 地理坐标系统椭球体长半轴。用户自定义地图的Options时，若未指定该参数的值，则系统默认为WGS84参考系的椭球体长半轴6378137。
 * @return {number} 返回图层显示分辨率。
 */
_SuperMap2["default"].Util.calculateDpi = function (viewBounds, viewer, scale, coordUnit, datumAxis) {
    //10000 是 0.1毫米与米的转换。DPI的计算公式：Viewer / DPI *  0.0254 * 10000 = ViewBounds * scale ，公式中的10000是为了提高计算结果的精度，以下出现的ratio皆为如此。
    if (!viewBounds || !viewer || !scale) {
        return;
    }
    var ratio = 10000,
        rvbWidth = viewBounds.getWidth(),
        rvbHeight = viewBounds.getHeight(),
        rvWidth = viewer.w,
        rvHeight = viewer.h;
    //用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "degrees";
    if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
        var num1 = rvbWidth / rvWidth,
            num2 = rvbHeight / rvHeight,
            resolution = num1 > num2 ? num1 : num2,
            dpi = 0.0254 * ratio / resolution / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
        return dpi;
    } else {
        var resolution = rvbWidth / rvWidth,
            dpi = 0.0254 * ratio / resolution / scale / ratio;
        return dpi;
    }
};

/**
 * @description 将对象转换成 JSON 字符串。
 * @param obj - {Object} 要转换成 JSON 的 Object 对象。
 * @return {string} 返回转换后的 JSON 对象。
 */
_SuperMap2["default"].Util.toJSON = function (obj) {
    var objInn = obj;
    if (objInn == null) {
        return null;
    }
    switch (objInn.constructor) {
        case String:
            //s = "'" + str.replace(/(["\\])/g, "\\$1") + "'";   string含有单引号出错
            objInn = '"' + objInn.replace(/(["\\])/g, '\\$1') + '"';
            objInn = objInn.replace(/\n/g, "\\n");
            objInn = objInn.replace(/\r/g, "\\r");
            objInn = objInn.replace("<", "&lt;");
            objInn = objInn.replace(">", "&gt;");
            objInn = objInn.replace(/%/g, "%25");
            objInn = objInn.replace(/&/g, "%26");
            return objInn;
        case Array:
            var arr = [];
            for (var i = 0, len = objInn.length; i < len; i++) {
                arr.push(_SuperMap2["default"].Util.toJSON(objInn[i]));
            }
            return "[" + arr.join(",") + "]";
        case Number:
            return isFinite(objInn) ? String(objInn) : null;
        case Boolean:
            return String(objInn);
        case Date:
            var dateStr = "{" + "'__type':\"System.DateTime\"," + "'Year':" + objInn.getFullYear() + "," + "'Month':" + (objInn.getMonth() + 1) + "," + "'Day':" + objInn.getDate() + "," + "'Hour':" + objInn.getHours() + "," + "'Minute':" + objInn.getMinutes() + "," + "'Second':" + objInn.getSeconds() + "," + "'Millisecond':" + objInn.getMilliseconds() + "," + "'TimezoneOffset':" + objInn.getTimezoneOffset() + "}";
            return dateStr;
        default:
            if (objInn["toJSON"] != null && typeof objInn["toJSON"] === "function") {
                return objInn.toJSON();
            }
            if ((typeof objInn === 'undefined' ? 'undefined' : _typeof(objInn)) === "object") {
                if (objInn.length) {
                    var arr = [];
                    for (var i = 0, len = objInn.length; i < len; i++) {
                        arr.push(_SuperMap2["default"].Util.toJSON(objInn[i]));
                    }return "[" + arr.join(",") + "]";
                }
                var arr = [];
                for (var attr in objInn) {
                    //为解决SuperMap.Geometry类型头json时堆栈溢出的问题，attr == "parent"时不进行json转换
                    if (typeof objInn[attr] !== "function" && attr !== "CLASS_NAME" && attr !== "parent") {
                        arr.push("'" + attr + "':" + _SuperMap2["default"].Util.toJSON(objInn[attr]));
                    }
                }

                if (arr.length > 0) {
                    return "{" + arr.join(",") + "}";
                } else {
                    return "{}";
                }
            }
            return objInn.toString();
    }
};

/**
 * @description 根据比例尺和dpi计算屏幕分辨率。
 * @param scale - {number} 比例尺。
 * @param dpi - {number} 图像分辨率，表示每英寸内的像素个数。
 * @param coordUnit - {string} 投影坐标系统的地图单位。
 * @param datumAxis - {number} 地理坐标系统椭球体长半轴。用户自定义地图的Options时，若未指定该参数的值，则DPI默认按照WGS84参考系的椭球体长半轴6378137来计算。
 * @return {number} 返回当前比例尺下的屏幕分辨率。
 */
_SuperMap2["default"].Util.getResolutionFromScaleDpi = function (scale, dpi, coordUnit, datumAxis) {
    var resolution = null,
        ratio = 10000;
    //用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "";
    if (scale > 0 && dpi > 0) {
        scale = _SuperMap2["default"].Util.normalizeScale(scale);
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
            //scale = SuperMap.Util.normalizeScale(scale);
            resolution = 0.0254 * ratio / dpi / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
            return resolution;
        } else {
            resolution = 0.0254 * ratio / dpi / scale / ratio;
            return resolution;
        }
    }
    return -1;
};

/**
 * @description 根据resolution、dpi、coordUnit和datumAxis计算比例尺。
 * @param resolution - {number} 用于计算比例尺的地图分辨率。
 * @param dpi - {number} 图像分辨率，表示每英寸内的像素个数。
 * @param coordUnit - {string} 投影坐标系统的地图单位。
 * @param datumAxis - {number} 地理坐标系统椭球体长半轴。用户自定义地图的Options时，若未指定该参数的值，则DPI默认按照WGS84参考系的椭球体长半轴6378137来计算。
 * @return {number} 返回当前屏幕分辨率下的比例尺。
 */
_SuperMap2["default"].Util.getScaleFromResolutionDpi = function (resolution, dpi, coordUnit, datumAxis) {
    var scale = null,
        ratio = 10000;
    //用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "";
    if (resolution > 0 && dpi > 0) {
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
            scale = 0.0254 * ratio / dpi / resolution / (Math.PI * 2 * datumAxis / 360) / ratio;
            return scale;
        } else {
            scale = 0.0254 * ratio / dpi / resolution / ratio;
            return scale;
        }
    }
    return -1;
};

/**
 * @description 转换查询结果。
 * @param result - {Object} 查询结果。
 * @return {Object} 转换后的查询结果。
 */
_SuperMap2["default"].Util.transformResult = function (result) {
    if (result.responseText && typeof result.responseText === "string") {
        //支持JSON对象的浏览器Firefox 3.1 + ，IE 8 RC1 +
        if (typeof JSON != 'undefined' && JSON.parse) {
            result = JSON.parse(result.responseText);
        } else {
            result = eval("(" + result.responseText + ")");
        }
    }
    return result;
};

/**
 * @description 属性拷贝，不拷贝方法类名(CLASS_NAME)等。
 * @param destination - {Object} 拷贝目标。
 * @param source - {Object} 源对象。
 *
 */
_SuperMap2["default"].Util.copyAttributes = function (destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
                destination[property] = value;
            }
        }
    }
    return destination;
};

/**
 * @description 将源对象上的属性拷贝到目标对象上。（不拷贝 CLASS_NAME 和方法）
 * @param destination - {Object} 目标对象。
 * @param source - {Object} 源对象。
 * @param clip - {Array<string>} 源对象中禁止拷贝到目标对象的属性，目的是防止目标对象上不可修改的属性被篡改。
 *
 */
_SuperMap2["default"].Util.copyAttributesWithClip = function (destination, source, clip) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            //去掉禁止拷贝的属性
            var isInClip = false;
            if (clip && clip.length) {
                for (var i = 0, len = clip.length; i < len; i++) {
                    if (property === clip[i]) {
                        isInClip = true;
                        break;
                    }
                }
            }
            if (isInClip === true) {
                continue;
            }

            var value = source[property];
            if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
                destination[property] = value;
            }
        }
    }
    return destination;
};

/**
 * @description 克隆一份Object对象
 * @param obj - {Object}  需要克隆的对象。
 * @return {Object} 返回对象的拷贝对象，注意是新的对象，不是指向。
 */
_SuperMap2["default"].Util.cloneObject = function (obj) {
    // Handle the 3 simple types, and null or undefined
    if (null === obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = obj.slice(0);
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = _SuperMap2["default"].Util.cloneObject(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

/**
 * @description 判断两条线段是不是有交点。
 * @param a1 - {SuperMap.Geometry.Point}  第一条线段的起始节点。
 * @param a2 - {SuperMap.Geometry.Point}  第一条线段的结束节点。
 * @param b1 - {SuperMap.Geometry.Point}  第二条线段的起始节点。
 * @param b2 - {SuperMap.Geometry.Point}  第二条线段的结束节点。
 * @return {Object} 如果相交返回交点，如果不相交返回两条线段的位置关系。
 */
_SuperMap2["default"].Util.lineIntersection = function (a1, a2, b1, b2) {
    var intersectValue = null;
    var k1;
    var k2;
    var b = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
    var a = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
    var ab = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    //ab==0代表两条线断的斜率一样
    if (ab != 0) {
        k1 = b / ab;
        k2 = a / ab;

        if (k1 >= 0 && k2 <= 1 && k1 <= 1 && k2 >= 0) {
            intersectValue = new _SuperMap2["default"].Geometry.Point(a1.x + k1 * (a2.x - a1.x), a1.y + k1 * (a2.y - a1.y));
        } else {
            intersectValue = "No Intersection";
        }
    } else {

        if (b == 0 && a == 0) {
            var maxy = Math.max(a1.y, a2.y);
            var miny = Math.min(a1.y, a2.y);
            var maxx = Math.max(a1.x, a2.x);
            var minx = Math.min(a1.x, a2.x);
            if ((b1.y >= miny && b1.y <= maxy || b2.y >= miny && b2.y <= maxy) && b1.x >= minx && b1.x <= maxx || b2.x >= minx && b2.x <= maxx) {
                intersectValue = "Coincident"; //重合
            } else {
                intersectValue = "Parallel"; //平行
            }
        } else {
            intersectValue = "Parallel"; //平行
        }
    }
    return intersectValue;
};

/**
 * @description 获取文本外接矩形宽度与高度。
 * @param style - {SuperMap.Style} 文本样式。
 * @param text - {string} 文本内容。
 * @param element - {Object} DOM元素。
 * @return {Object} 返回裁剪后的宽度，高度信息。
 */
_SuperMap2["default"].Util.getTextBounds = function (style, text, element) {
    document.body.appendChild(element);
    element.style.width = 'auto';
    element.style.height = 'auto';
    if (style.fontSize) element.style.fontSize = style.fontSize;
    if (style.fontFamily) element.style.fontFamily = style.fontFamily;
    if (style.fontWeight) element.style.fontWeight = style.fontWeight;
    element.style.position = 'relative';
    element.style.visibility = 'hidden';
    //fix 在某些情况下，element内的文本变成竖起排列，导致宽度计算不正确的bug
    element.style.display = 'inline-block';
    element.innerHTML = text;
    var textWidth = element.clientWidth;
    var textHeight = element.clientHeight;
    document.body.removeChild(element);
    return {
        textWidth: textWidth,
        textHeight: textHeight
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Geometry2 = __webpack_require__(31);

var _Geometry3 = _interopRequireDefault(_Geometry2);

var _Bounds = __webpack_require__(30);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.Point
 * @classdesc 点几何对象类。
 * @extends {SuperMap.Geometry}
 * @param  x - {float} x-坐标
 * @param y - {float} y-坐标
 * @param type - {string} 用来存储点的类型
 * @param tag -  {float} 用来存储额外的属性，比如差值分析中的Z值。
 * @example
 * var point = new SuperMap.Geometry.Point(-111.04, 45.68);
 */
var Point = function (_Geometry) {
    _inherits(Point, _Geometry);

    /**
     * @member SuperMap.Geometry.Point.prototype.tag - {string}
     * @description  用来存储额外的属性，比如差值分析中的Z值。
     */


    /**
     * @member SuperMap.Geometry.Point.prototype.x - {float}
     * @description 横坐标。
     */
    function Point(x, y, type, tag) {
        _classCallCheck(this, Point);

        var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, x, y, type, tag));

        _this.x = null;
        _this.y = null;
        _this.tag = null;
        _this.type = null;
        _this.CLASS_NAME = "SuperMap.Geometry.Point";


        _this.x = parseFloat(x);
        _this.y = parseFloat(y);
        if (tag || tag == 0) {
            _this.tag = parseFloat(tag);
        }
        _this.type = type || "NONE";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.Point.prototype.clone
     * @description 克隆点对象。
     * @returns {SuperMap.Geometry.Point} 克隆后的点对象。
     */


    /**
     * @member SuperMap.Geometry.Point.prototype.tag - {string}
     * @description  用来存储点的类型
     */


    /**
     * @member SuperMap.Geometry.Point.prototype.y - {float}
     * @description 纵坐标。
     */


    _createClass(Point, [{
        key: 'clone',
        value: function clone(obj) {
            if (obj == null) {
                obj = new Point(this.x, this.y);
            }

            // catch any randomly tagged-on properties
            _Util.Util.applyDefaults(obj, this);

            return obj;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.calculateBounds
         * @description 计算点对象的范围。
         */

    }, {
        key: 'calculateBounds',
        value: function calculateBounds() {
            this.bounds = new _Bounds2["default"](this.x, this.y, this.x, this.y);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.distanceTo
         * @description 计算两个点对象间的最小距离（x-y平面坐标系下）。
         * @param geometry - {SuperMap.Geometry} 目标点对象。
         * @param options - {Object} 计算距离时需要设置的可选属性。有效的选项取决于特定的几何类型。<br>
         *         details - {boolean} 返回距离计算的细节。默认为false。<br>
         *         edge - {boolean} 计算一个几何对象到目标几何对象边缘的最近距离。默认为true。 如果设为true，
         *                          一个几何对象完全包含在目标几何对象中时，调用distanceTo返回非零结果，如果
         *                          false，两个几何对象相交情况下调用distanceTo结果返回0，而且如果false，将不返距离。
         * @returns {number | Object} 返回一个几何对象到目标几何对象的距离。
         */

    }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
            var edge = !(options && options.edge === false);
            var details = edge && options && options.details;
            var distance, x0, y0, x1, y1, result;
            if (geometry instanceof Point) {
                x0 = this.x;
                y0 = this.y;
                x1 = geometry.x;
                y1 = geometry.y;
                distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
                result = !details ? distance : { x0: x0, y0: y0, x1: x1, y1: y1, distance: distance };
            } else {
                result = geometry.distanceTo(this, options);
                if (details) {
                    // switch coord order since this geom is target
                    result = {
                        x0: result.x1, y0: result.y1,
                        x1: result.x0, y1: result.y0,
                        distance: result.distance
                    };
                }
            }
            return result;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.equals
         * @description 判断两个点对象是否相等。如果两个点对象具有相同的坐标，则认为是相等的。
         * @example
         * var point= new SuperMap.Geometry.Point(00);
         * var point1={x:0y:0};
         * var result= point.equals(point1);
         * @param geom - {SuperMap.Geometry.Point} 需要判断的点对象。
         * @returns {boolean} 两个点对象是否相等（true为相等，false为不等）。
         */

    }, {
        key: 'equals',
        value: function equals(geom) {
            var equals = false;
            if (geom != null) {
                equals = this.x === geom.x && this.y === geom.y || isNaN(this.x) && isNaN(this.y) && isNaN(geom.x) && isNaN(geom.y);
            }
            return equals;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.toShortString
         * @returns {string} 字符串代表点对象。(ex. <i>"5 42"</i>)
         */

    }, {
        key: 'toShortString',
        value: function toShortString() {
            return this.x + ", " + this.y;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.move
         * @description 沿着x、y轴的正方向上按照给定的位移移动点对象，move 不仅改变了几何对象的位置并且清理了边界缓存。
         * @param x - {float} x轴正方向上的偏移量。
         * @param  y - {float} y轴正方向上偏移量。
         * @example
         * var point = new SuperMap.Geometry.Point(1020);
         * var dx = 10*Math.random();
         * var dy = 10*Math.random();
         * point.move(dxdy);
         */

    }, {
        key: 'move',
        value: function move(x, y) {
            this.x = this.x + x;
            this.y = this.y + y;
            this.clearBounds();
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.rotate
         * @description 围绕中心点旋转点对象。
         * @param angle - {float} 旋转角的度数（沿着x轴正方向的逆时针方向）。
         * @param origin - {SuperMap.Geometry.Point} 旋转的中心点 。
         * @example
         * var point = new SuperMap.Geometry.Point(1020);
         * var rotateOrigin = new SuperMap.Geometry.Point(510);
         * point.rotate(360rotateOrigin);
         */

    }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
            angle *= Math.PI / 180;
            var radius = this.distanceTo(origin);
            var theta = angle + Math.atan2(this.y - origin.y, this.x - origin.x);
            this.x = origin.x + radius * Math.cos(theta);
            this.y = origin.y + radius * Math.sin(theta);
            this.clearBounds();
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.getCentroid
         * @description 获取点对象的质心。
         * @returns {SuperMap.Geometry.Point} 点对象的质心。
         */

    }, {
        key: 'getCentroid',
        value: function getCentroid() {
            return new Point(this.x, this.y);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.resize
         * @description 调整几何对象相对于原点的大小。
         * @param scale - {float} resize之后到原点的距离与resize之前到原点的距离比。
         * @param origin - {SuperMap.Geometry.Point} 调整的起始点。
         * @param ratio - {float} 点对象自身x与y的比值：ratio=x/y，默认的比例为1，不推荐设置。
         * @returns {SuperMap.Geometry} - 当前几何对象。
         * @example
         * var point = new SuperMap.Geometry.Point(1010);
         * var origin = new SuperMap.Geometry.Point(00);
         * point.resize(2origin4);
         */

    }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
            ratio = ratio == undefined ? 1 : ratio;
            //所有的线和面最终都是控制点
            this.x = origin.x + scale * ratio * (this.x - origin.x);

            this.y = origin.y + scale * (this.y - origin.y);
            this.clearBounds();
            return this;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.intersects
         * @description 判断两个几何对象是否相交。
         * @param geometry - {SuperMap.Geometry} 任意类型的几何对象。
         * @returns {boolean} 传入的几何对象与当前几何对象相交。
         */

    }, {
        key: 'intersects',
        value: function intersects(geometry) {
            var intersect = false;
            if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
                intersect = this.equals(geometry);
            } else {
                intersect = geometry.intersects(this);
            }
            return intersect;
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.destroy
         * @description 释放点对象的资源
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.x = null;
            this.y = null;
            this.tag = null;
            _get(Point.prototype.__proto__ || Object.getPrototypeOf(Point.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Geometry.Point.prototype.getVertices
         * @description 返回点对象的所有顶点的列表。
         * @param nodes - {boolean} 对于点对象此参数不起作用，直接返回点。
         * @returns {Array} 几何图形的顶点列表。
         */

    }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
            return [this];
        }
    }]);

    return Point;
}(_Geometry3["default"]);

exports["default"] = Point;

_SuperMap2["default"].Geometry.Point = Point;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _Geometry2 = __webpack_require__(31);

var _Geometry3 = _interopRequireDefault(_Geometry2);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.Collection
 * @classdesc 几何对象集合类，存储在本地的 components 属性中（可作为参数传递给构造函数）。
 *            随着新的几何图形添加到集合中，将不能被克隆，当移动几何图形时，需要指定参照物。
 *            getArea和getLength函数只能通过遍历存储几何对象的 components 数组，总计所有几何图形的面积和长度。
 *
 * @extends SuperMap.Geometry
 * @param components - {Array<SuperMap.Geometry>} 几何对象数组。
 * @example
 * var point1 = new SuperMap.Geometry.Point(10,20);
 * var point2 = new SuperMap.Geometry.Point(30,40);
 * var col = new SuperMap.Geometry.Collection([point1,point2]);
 */
var Collection = function (_Geometry) {
    _inherits(Collection, _Geometry);

    /**
     * @description 存储几何对象的数组。
     * @member SuperMap.Geometry.Collection.prototype.components - {Array<SuperMap.Geometry>}
     */
    function Collection(components) {
        _classCallCheck(this, Collection);

        var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

        _this.components = null;
        _this.componentTypes = null;
        _this.CLASS_NAME = "SuperMap.Geometry.Collection";

        _this.components = [];
        if (components != null) {
            _this.addComponents(components);
        }
        return _this;
    }

    /**
     * @function SuperMap.Geometry.Collection.prototype.destroy
     * @description 销毁几何图形。
     */


    /**
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @member SuperMap.Geometry.Collection.prototype.componentTypes - {Array<string>}
     */


    _createClass(Collection, [{
        key: 'destroy',
        value: function destroy() {
            this.components.length = 0;
            this.components = null;
            _get(Collection.prototype.__proto__ || Object.getPrototypeOf(Collection.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.clone
         * @description 克隆当前几何对象。
         * @returns {SuperMap.Geometry.Collection} 克隆的几何对象集合。
         */

    }, {
        key: 'clone',
        value: function clone() {
            var geometry = eval("new " + this.CLASS_NAME + "()");
            for (var i = 0, len = this.components.length; i < len; i++) {
                geometry.addComponent(this.components[i].clone());
            }

            // catch any randomly tagged-on properties
            _Util.Util.applyDefaults(geometry, this);

            return geometry;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getComponentsString
         * @description 获取components字符串。
         * @returns {string} components字符串。
         */

    }, {
        key: 'getComponentsString',
        value: function getComponentsString() {
            var strings = [];
            for (var i = 0, len = this.components.length; i < len; i++) {
                strings.push(this.components[i].toShortString());
            }
            return strings.join(",");
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.calculateBounds
         * @description 通过遍历数组重新计算边界，在遍历每一子项中时调用 extend 方法。
         */

    }, {
        key: 'calculateBounds',
        value: function calculateBounds() {
            this.bounds = null;
            var bounds = new _SuperMap2["default"].Bounds();
            var components = this.components;
            if (components) {
                for (var i = 0, len = components.length; i < len; i++) {
                    bounds.extend(components[i].getBounds());
                }
            }
            // to preserve old behavior, we only set bounds if non-null
            // in the future, we could add bounds.isEmpty()
            if (bounds.left != null && bounds.bottom != null && bounds.right != null && bounds.top != null) {
                this.setBounds(bounds);
            }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.addComponents
         * @description 给几何图形对象添加元素。
         * @param components - {Array<SuperMap.Geometry>} 几何对象组件。
         * @example
         * var collection = new SuperMap.Geometry.Collection();
         * collection.addComponents(new SuerpMap.Geometry.Point(1010));
         */

    }, {
        key: 'addComponents',
        value: function addComponents(components) {
            if (!_Util.Util.isArray(components)) {
                components = [components];
            }
            for (var i = 0, len = components.length; i < len; i++) {
                this.addComponent(components[i]);
            }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.addComponent
         * @description 添加一个几何对象到集合中。如果设置了componentTypes类型，则添加的几何对象必须是componentTypes中的类型。
         * @param component - {SuperMap.Geometry} 待添加的几何对象。
         * @param index - {int} 几何对象插入的位置。
         * @returns {boolean} 是否添加成功。
         */

    }, {
        key: 'addComponent',
        value: function addComponent(component, index) {
            var added = false;
            if (component) {
                if (this.componentTypes == null || _Util.Util.indexOf(this.componentTypes, component.CLASS_NAME) > -1) {

                    if (index != null && index < this.components.length) {
                        var components1 = this.components.slice(0, index);
                        var components2 = this.components.slice(index, this.components.length);
                        components1.push(component);
                        this.components = components1.concat(components2);
                    } else {
                        this.components.push(component);
                    }
                    component.parent = this;
                    this.clearBounds();
                    added = true;
                }
            }
            return added;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.removeComponents
         * @description 清除几何对象。
         * @param components - {Array<SuperMap.Geometry>} 需要清除的几何对象。
         * @returns {boolean} 元素是否被删除。
         */

    }, {
        key: 'removeComponents',
        value: function removeComponents(components) {
            var removed = false;

            if (!_Util.Util.isArray(components)) {
                components = [components];
            }
            for (var i = components.length - 1; i >= 0; --i) {
                removed = this.removeComponent(components[i]) || removed;
            }
            return removed;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.removeComponent
         * @description 从集合中移除一个几何对象
         * @param component - {SuperMap.Geometry} 要移除的几何对象
         * @returns {boolean} 几何对象是否移除成功
         */

    }, {
        key: 'removeComponent',
        value: function removeComponent(component) {
            _Util.Util.removeItem(this.components, component);

            // clearBounds() so that it gets recalculated on the next call
            // to this.getBounds();
            this.clearBounds();
            return true;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getLength
         * @description 计算几何对象长度。
         * @returns {number} 几何对象长度（所有几何对象长度总和）。
         */

    }, {
        key: 'getLength',
        value: function getLength() {
            var length = 0.0;
            for (var i = 0, len = this.components.length; i < len; i++) {
                length += this.components[i].getLength();
            }
            return length;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getArea
         * @description 计算几何对象的面积。注意，这个方法在 <SuperMap.Geometry.Polygon> 类中需要重写。
         * @returns {number} 几何图形的面积，是几何对象中所有组成部分的面积之和。
         */

    }, {
        key: 'getArea',
        value: function getArea() {
            var area = 0.0;
            for (var i = 0, len = this.components.length; i < len; i++) {
                area += this.components[i].getArea();
            }
            return area;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getCentroid
         * @description 计算几何图形集合的质心。
         * @param weighted - {boolean} 执行getCentroid方法进行递归计算，返回此几何图形集合中的面积加权平均值。
         * @returns {SuperMap.Geometry.Point} 质心。
         */

    }, {
        key: 'getCentroid',
        value: function getCentroid(weighted) {
            if (!weighted) {
                return this.components.length && this.components[0].getCentroid();
            }
            var len = this.components.length;
            if (!len) {
                return false;
            }

            var areas = [];
            var centroids = [];
            var areaSum = 0;
            var minArea = Number.MAX_VALUE;
            var component;
            for (var i = 0; i < len; ++i) {
                component = this.components[i];
                var area = component.getArea();
                var centroid = component.getCentroid(true);
                if (isNaN(area) || isNaN(centroid.x) || isNaN(centroid.y)) {
                    continue;
                }
                areas.push(area);
                areaSum += area;
                minArea = area < minArea && area > 0 ? area : minArea;
                centroids.push(centroid);
            }
            len = areas.length;
            if (areaSum === 0) {
                // all the components in this collection have 0 area
                // probably a collection of points -- weight all the points the same
                for (var i = 0; i < len; ++i) {
                    areas[i] = 1;
                }
                areaSum = areas.length;
            } else {
                // normalize all the areas where the smallest area will get
                // a value of 1
                for (var i = 0; i < len; ++i) {
                    areas[i] /= minArea;
                }
                areaSum /= minArea;
            }

            var xSum = 0,
                ySum = 0,
                centroid,
                area;
            for (var i = 0; i < len; ++i) {
                centroid = centroids[i];
                area = areas[i];
                xSum += centroid.x * area;
                ySum += centroid.y * area;
            }

            return new _Point2["default"](xSum / areaSum, ySum / areaSum);
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.move
         * @description  沿着x、y轴的正方向上按照给定的位移移动几何图形，move 不仅改变了几何图形的位置并且清理了边界缓存。
         * @param x -{number} x轴正方向上移动的距离。
         * @param y - {number} y轴正方向上移动的距离。
         */

    }, {
        key: 'move',
        value: function move(x, y) {
            for (var i = 0, len = this.components.length; i < len; i++) {
                this.components[i].move(x, y);
            }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.rotate
         * @description 围绕中心点旋转几何图形。
         * @param angle -{number} 旋转角的度数（沿着x轴正方向逆时针测量）。
         * @param origin - {SuperMap.Geometry.Point} 旋转中心点。
         */

    }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
            for (var i = 0, len = this.components.length; i < len; ++i) {
                this.components[i].rotate(angle, origin);
            }
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.resize
         * @description  调整几何对象大小。
         * @param scale - {number} 几何图形缩放的比例系数，是几何图形维数的两倍。（如，对于线来说将以线2倍的长度拉长，对于多边形来说，将以面积的4倍变化）。
         * @param origin - {SuperMap.Geometry.Point} 调整大小选定的起始原点。
         * @param ratio - {number} 可选的xy的比例，默认的比例为1。
         * @returns {SuperMap.Geometry} 几何图形。
         */

    }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
            for (var i = 0; i < this.components.length; ++i) {
                this.components[i].resize(scale, origin, ratio);
            }
            return this;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.distanceTo
         * @description 计算两个几个图形间的最小距离（x-y平面坐标系下）。
         * @param geometry - {SuperMap.Geometry} 目标几何图形。
         * @param options - {Object} 距离计算需要设置的可选属性。有效的选项取决于特定的几何类型。<br>
         *        details - {boolean} 返回距离计算的细节。默认为false。<br>
         *        edge - {boolean} 计算一个几何图形到目标几何图形边缘的最近距离。默认为true。
         *                         如果设为true，一个几何图形完全包含在目标几何图形中时，调用distanceTo返回非零结果，
         *                         如果false，两个几何图形相交情况下调用distanceTo结果返回0，而且如果false，将不返距离值。
         * @returns {(number | Object)} 返回一个几何图形到目标几何图形的距离。
         */

    }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
            var edge = !(options && options.edge === false);
            var details = edge && options && options.details;
            var result, best, distance;
            var min = Number.POSITIVE_INFINITY;
            for (var i = 0, len = this.components.length; i < len; ++i) {
                result = this.components[i].distanceTo(geometry, options);
                distance = details ? result.distance : result;
                if (distance < min) {
                    min = distance;
                    best = result;
                    if (min == 0) {
                        break;
                    }
                }
            }
            return best;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.equals
         * @description 判断两个几何图形是否相等。如果所有的 components 具有相同的坐标，则认为是相等的。
         * @param geometry - {SuperMap.Geometry} 需要判断的几何图形。
         * @returns {boolean} 输入的几何图形与当前几何图形是否相等。
         */

    }, {
        key: 'equals',
        value: function equals(geometry) {
            var equivalent = true;
            if (!geometry || !geometry.CLASS_NAME || this.CLASS_NAME !== geometry.CLASS_NAME) {
                equivalent = false;
            } else if (!_Util.Util.isArray(geometry.components) || geometry.components.length !== this.components.length) {
                equivalent = false;
            } else {
                for (var i = 0, len = this.components.length; i < len; ++i) {
                    if (!this.components[i].equals(geometry.components[i])) {
                        equivalent = false;
                        break;
                    }
                }
            }
            return equivalent;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.intersects
         * @description 判断输入的几何对象是否与当前几何对象相交。
         * @param geometry - {SuperMap.Geometry} 任意的几何类型。
         * @returns {boolean} 输入几何对象与当前几何对象相交。
         */

    }, {
        key: 'intersects',
        value: function intersects(geometry) {
            var intersect = false;
            for (var i = 0, len = this.components.length; i < len; ++i) {
                intersect = geometry.intersects(this.components[i]);
                if (intersect) {
                    break;
                }
            }
            return intersect;
        }

        /**
         * @function SuperMap.Geometry.Collection.prototype.getVertices
         * @description 返回几何对象的所有结点的列表。
         * @param nodes - {boolean} 对于线来说，仅仅返回作为端点的顶点，如果设为false，则返回非端点的顶点如果没有设置此参数，则返回所有顶点。
         * @returns {Array} 几何对象的顶点列表。
         */

    }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
            var vertices = [];
            for (var i = 0, len = this.components.length; i < len; ++i) {
                Array.prototype.push.apply(vertices, this.components[i].getVertices(nodes));
            }
            return vertices;
        }
    }]);

    return Collection;
}(_Geometry3["default"]);

exports["default"] = Collection;

_SuperMap2["default"].Geometry.Collection = Collection;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = L;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryType = exports.StatisticAnalystMode = exports.AnalystSizeUnit = exports.AnalystAreaUnit = exports.ClipAnalystMode = exports.ChartType = exports.ClientType = exports.Exponent = exports.VariogramMode = exports.InterpolationAlgorithmType = exports.SearchMode = exports.PixelFormat = exports.StatisticMode = exports.UGCLayerType = exports.LayerType = exports.ColorSpaceType = exports.GridType = exports.TransferPreference = exports.TransferTactic = exports.EditType = exports.DataReturnMode = exports.SurfaceAnalystMethod = exports.SmoothMethod = exports.OverlayOperationType = exports.BufferEndType = exports.TurnType = exports.SupplyCenterType = exports.SideType = exports.DirectionType = exports.LabelOverLengthMode = exports.LabelBackShape = exports.AlongLineDirection = exports.FillGradientMode = exports.TextAlignment = exports.ColorGradientType = exports.ThemeType = exports.RangeMode = exports.GraduatedMode = exports.GraphAxesTextDisplayMode = exports.ThemeGraphType = exports.ThemeGraphTextFormat = exports.EngineType = exports.Unit = exports.MeasureMode = exports.SpatialRelationType = exports.SpatialQueryMode = exports.JoinType = exports.QueryOption = exports.GeometryType = exports.ServerType = exports.DataFormat = undefined;

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @name DataFormat
 * @memberOf SuperMap
 * @description 服务请求返回结果数据类型
 *
 * @property {string} GEOJSON  GEOJSON
 * @property {string} ISERVER  ISERVER
 */
var DataFormat = exports.DataFormat = _SuperMap2["default"].DataFormat = {
  GEOJSON: "GEOJSON",
  ISERVER: "ISERVER"
};

/**
 * @name ServerType
 * @memberOf SuperMap
 * @description 服务器类型
 *
 * @property {string} ISERVER  ISERVER
 * @property {string} IPORTAL  IPORTAL
 * @property {string} ONLINE  ONLINE
 */
var ServerType = exports.ServerType = _SuperMap2["default"].ServerType = {
  ISERVER: "ISERVER",
  IPORTAL: "IPORTAL",
  ONLINE: "ONLINE"
};

/**
 * @name GeometryType
 * @memberOf SuperMap
 * @description 几何对象枚举,定义了一系列几何对象类型。
 *
 * @property {string} LINE  LINE
 * @property {string} LINEM  LINEM
 * @property {string} POINT  POINT
 * @property {string} REGION  REGION
 * @property {string} ELLIPSE  ELLIPSE
 * @property {string} CIRCLE  CIRCLE
 * @property {string} TEXT  TEXT
 * @property {string} UNKNOWN  UNKNOWN
 */
var GeometryType = exports.GeometryType = _SuperMap2["default"].GeometryType = {
  LINE: "LINE",
  LINEM: "LINEM",
  POINT: "POINT",
  REGION: "REGION",
  ELLIPSE: "ELLIPSE",
  CIRCLE: "CIRCLE",
  TEXT: "TEXT",
  UNKNOWN: "UNKNOWN"
};

/**
 * @name QueryOption
 * @memberOf SuperMap
 * @description 查询结果类型枚举,描述查询结果返回类型，包括只返回属性、只返回几何实体以及返回属性和几何实体。
 *
 * @property {string} ATTRIBUTE  ATTRIBUTE
 * @property {string} ATTRIBUTEANDGEOMETRY  ATTRIBUTEANDGEOMETRY
 * @property {string} GEOMETRY  GEOMETRY
 */
var QueryOption = exports.QueryOption = _SuperMap2["default"].QueryOption = {
  ATTRIBUTE: "ATTRIBUTE",
  ATTRIBUTEANDGEOMETRY: "ATTRIBUTEANDGEOMETRY",
  GEOMETRY: "GEOMETRY"
};

/**
 * @name JoinType
 * @memberOf SuperMap
 * @description 关联查询时的关联类型常量。
 * 该类定义了两个表之间的连接类型常量，决定了对两个表之间进行连接查询时，查询结果中得到的记录的情况。
 *
 * @property {string} INNERJOIN  INNERJOIN
 * @property {string} LEFTJOIN  LEFTJOIN
 */
var JoinType = exports.JoinType = _SuperMap2["default"].JoinType = {
  INNERJOIN: "INNERJOIN",
  LEFTJOIN: "LEFTJOIN"
};

/**
 * @name SpatialQueryMode
 * @memberOf SuperMap
 * @description  空间查询模式枚举。该类定义了空间查询操作模式常量。
 *
 * @property {string} CONTAIN  CONTAIN
 * @property {string} CROSS  CROSS
 * @property {string} DISJOINT  DISJOINT
 * @property {string} IDENTITY  IDENTITY
 * @property {string} INTERSECT  INTERSECT
 * @property {string} NONE  NONE
 * @property {string} OVERLAP  OVERLAP
 * @property {string} TOUCH  TOUCH
 * @property {string} WITHIN  WITHIN
 */
var SpatialQueryMode = exports.SpatialQueryMode = _SuperMap2["default"].SpatialQueryMode = {
  CONTAIN: "CONTAIN",
  CROSS: "CROSS",
  DISJOINT: "DISJOINT",
  IDENTITY: "IDENTITY",
  INTERSECT: "INTERSECT",
  NONE: "NONE",
  OVERLAP: "OVERLAP",
  TOUCH: "TOUCH",
  WITHIN: "WITHIN"
};

/**
 * @name SpatialRelationType
 * @memberOf SuperMap
 * @description  数据集对象间的空间关系枚举。
 * 该类定义了数据集对象间的空间关系类型常量。
 *
 * @property {string} CONTAIN 包含关系 CONTAIN  CONTAIN
 * @property {string} INTERSECT 相交关系 INTERSECT  INTERSECT
 * @property {string} INTERSECT 被包含关系 WITHIN  WITHIN
 */
var SpatialRelationType = exports.SpatialRelationType = _SuperMap2["default"].SpatialRelationType = {
  CONTAIN: "CONTAIN",
  INTERSECT: "INTERSECT",
  WITHIN: "WITHIN"
};

/**
 * @name MeasureMode
 * @memberOf SuperMap
 * @property {string} DISTANCE DISTANCE
 * @property {string} AREA AREA
 * @description  量算模式枚举。
 * 该类定义了两种测量模式：距离测量和面积测量。
 */
var MeasureMode = exports.MeasureMode = _SuperMap2["default"].MeasureMode = {
  DISTANCE: "DISTANCE",
  AREA: "AREA"
};

/**
 * @name Unit
 * @memberOf SuperMap
 * @description  距离单位枚举。
 * 该类定义了一系列距离单位类型。
 *
 * @property {string} METER  METER
 * @property {string} KILOMETER  KILOMETER
 * @property {string} MILE  MILE
 * @property {string} YARD  YARD
 * @property {string} DEGREE  DEGREE
 * @property {string} MILLIMETER  MILLIMETER
 * @property {string} CENTIMETER  CENTIMETER
 * @property {string} INCH  INCH
 * @property {string} DECIMETER  DECIMETER
 * @property {string} FOOT  FOOT
 * @property {string} SECOND  SECOND
 * @property {string} MINUTE  MINUTE
 * @property {string} RADIAN  RADIAN
 */
var Unit = exports.Unit = _SuperMap2["default"].Unit = {
  METER: "METER",
  KILOMETER: "KILOMETER",
  MILE: "MILE",
  YARD: "YARD",
  DEGREE: "DEGREE",
  MILLIMETER: "MILLIMETER",
  CENTIMETER: "CENTIMETER",
  INCH: "INCH",
  DECIMETER: "DECIMETER",
  FOOT: "FOOT",
  SECOND: "SECOND",
  MINUTE: "MINUTE",
  RADIAN: "RADIAN"
};

/**
 * @name EngineType
 * @memberOf SuperMap
 * @description  数据源引擎类型枚举。
 *
 * @property {string} IMAGEPLUGINS  IMAGEPLUGINS
 * @property {string} OGC  OGC
 * @property {string} ORACLEPLUS  ORACLEPLUS
 * @property {string} SDBPLUS  SDBPLUS
 * @property {string} SQLPLUS  SQLPLUS
 * @property {string} UDB  UDB
 */
var EngineType = exports.EngineType = _SuperMap2["default"].EngineType = {
  IMAGEPLUGINS: "IMAGEPLUGINS",
  OGC: "OGC",
  ORACLEPLUS: "ORACLEPLUS",
  SDBPLUS: "SDBPLUS",
  SQLPLUS: "SQLPLUS",
  UDB: "UDB"
};

/**
 * @name ThemeGraphTextFormat
 * @memberOf SuperMap
 * @description  统计专题图文本显示格式枚举。
 *
 * @property {string} CAPTION  CAPTION
 * @property {string} CAPTION_PERCENT  CAPTION_PERCENT
 * @property {string} CAPTION_VALUE  CAPTION_VALUE
 * @property {string} PERCENT  PERCENT
 * @property {string} VALUE  VALUE
 */
var ThemeGraphTextFormat = exports.ThemeGraphTextFormat = _SuperMap2["default"].ThemeGraphTextFormat = {
  CAPTION: "CAPTION",
  CAPTION_PERCENT: "CAPTION_PERCENT",
  CAPTION_VALUE: "CAPTION_VALUE",
  PERCENT: "PERCENT",
  VALUE: "VALUE"
};

/**
 * @name ThemeGraphType
 * @memberOf SuperMap
 * @description  统计专题图类型枚举。
 *
 * @property {string} AREA  AREA
 * @property {string} BAR  BAR
 * @property {string} BAR3D  BAR3D
 * @property {string} LINE  LINE
 * @property {string} PIE  PIE
 * @property {string} PIE3D  PIE3D
 * @property {string} POINT  POINT
 * @property {string} RING  RING
 * @property {string} ROSE  ROSE
 * @property {string} ROSE3D  ROSE3D
 * @property {string} STACK_BAR  STACK_BAR
 * @property {string} STACK_BAR3D  STACK_BAR3D
 * @property {string} STEP  STEP
 */
var ThemeGraphType = exports.ThemeGraphType = _SuperMap2["default"].ThemeGraphType = {
  AREA: "AREA",
  BAR: "BAR",
  BAR3D: "BAR3D",
  LINE: "LINE",
  PIE: "PIE",
  PIE3D: "PIE3D",
  POINT: "POINT",
  RING: "RING",
  ROSE: "ROSE",
  ROSE3D: "ROSE3D",
  STACK_BAR: "STACK_BAR",
  STACK_BAR3D: "STACK_BAR3D",
  STEP: "STEP"
};

/**
 * @name GraphAxesTextDisplayMode
 * @memberOf SuperMap
 * @description  统计专题图坐标轴文本显示模式。
 *
 * @property {string} ALL  ALL, 显示全部文本
 * @property {string} NONE  NONE, 没有显示
 * @property {string} YAXES  YAXES. 显示Y轴的文本
 */
var GraphAxesTextDisplayMode = exports.GraphAxesTextDisplayMode = _SuperMap2["default"].GraphAxesTextDisplayMode = {
  ALL: "ALL",
  NONE: "NONE",
  YAXES: "YAXES"
};

/**
 * @name GraduatedMode
 * @memberOf SuperMap
 * @description  专题图分级模式枚举。
 *
 * @property {string} CONSTANT  CONSTANT
 * @property {string} LOGARITHM  LOGARITHM
 * @property {string} SQUAREROOT  SQUAREROOT
 */
var GraduatedMode = exports.GraduatedMode = _SuperMap2["default"].GraduatedMode = {
  CONSTANT: "CONSTANT",
  LOGARITHM: "LOGARITHM",
  SQUAREROOT: "SQUAREROOT"
};

/**
 * @name RangeMode
 * @memberOf SuperMap
 * @description  范围分段专题图分段方式枚举。
 *
 * @property {string} CUSTOMINTERVAL  CUSTOMINTERVAL
 * @property {string} EQUALINTERVAL  EQUALINTERVAL
 * @property {string} LOGARITHM  LOGARITHM
 * @property {string} QUANTILE  QUANTILE
 * @property {string} SQUAREROOT  SQUAREROOT
 * @property {string} STDDEVIATION  STDDEVIATION
 */
var RangeMode = exports.RangeMode = _SuperMap2["default"].RangeMode = {
  CUSTOMINTERVAL: "CUSTOMINTERVAL",
  EQUALINTERVAL: "EQUALINTERVAL",
  LOGARITHM: "LOGARITHM",
  QUANTILE: "QUANTILE",
  SQUAREROOT: "SQUAREROOT",
  STDDEVIATION: "STDDEVIATION"
};

/**
 * @name ThemeType
 * @memberOf SuperMap
 * @description  专题图类型枚举。
 *
 * @property {string} DOTDENSITY  DOTDENSITY
 * @property {string} GRADUATEDSYMBOL  GRADUATEDSYMBOL
 * @property {string} GRAPH  GRAPH
 * @property {string} LABEL  LABEL
 * @property {string} RANGE  RANGE
 * @property {string} UNIQUE  UNIQUE
 */
var ThemeType = exports.ThemeType = _SuperMap2["default"].ThemeType = {
  DOTDENSITY: "DOTDENSITY",
  GRADUATEDSYMBOL: "GRADUATEDSYMBOL",
  GRAPH: "GRAPH",
  LABEL: "LABEL",
  RANGE: "RANGE",
  UNIQUE: "UNIQUE"
};

/**
 * @name ColorGradientType
 * @memberOf SuperMap
 * @description  渐变颜色枚举。
 *
 * @property {string} BLACK_WHITE  BLACKWHITE
 * @property {string} BLUE_BLACK  BLUEBLACK
 * @property {string} BLUE_RED   BLUERED
 * @property {string} BLUE_WHITE  BLUEWHITE
 * @property {string} CYAN_BLACK  CYANBLACK
 * @property {string} CYAN_BLUE  CYANBLUE
 * @property {string} CYAN_GREEN  CYANGREEN
 * @property {string} CYAN_WHITE  CYANWHITE
 * @property {string} GREEN_BLACK  GREENBLACK
 * @property {string} GREEN_BLUE  GREENBLUE
 * @property {string} GREEN_ORANGE_VIOLET  GREENORANGEVIOLET
 * @property {string} GREEN_RED  GREENRED
 * @property {string} GREEN_WHITE  GREENWHITE
 * @property {string} PINK_BLACK  PINKBLACK
 * @property {string} PINK_BLUE  PINKBLUE
 * @property {string} PINK_RED  PINKRED
 * @property {string} PINK_WHITE  PINKWHITE
 * @property {string} RAIN_BOW  RAINBOW
 * @property {string} RED_BLACK  REDBLACK
 * @property {string} RED_WHITE  REDWHITE
 * @property {string} SPECTRUM  SPECTRUM
 * @property {string} TERRAIN  TERRAIN
 * @property {string} YELLOW_BLACK  YELLOWBLACK
 * @property {string} YELLOW_BLUE  YELLOWBLUE
 * @property {string} YELLOW_GREEN  YELLOWGREEN
 * @property {string} YELLOW_RED  YELLOWRED
 * @property {string} YELLOW_WHITE  YELLOWWHITE
 */
var ColorGradientType = exports.ColorGradientType = _SuperMap2["default"].ColorGradientType = {
  BLACK_WHITE: "BLACKWHITE",
  BLUE_BLACK: "BLUEBLACK",
  BLUE_RED: "BLUERED",
  BLUE_WHITE: "BLUEWHITE",
  CYAN_BLACK: "CYANBLACK",
  CYAN_BLUE: "CYANBLUE",
  CYAN_GREEN: "CYANGREEN",
  CYAN_WHITE: "CYANWHITE",
  GREEN_BLACK: "GREENBLACK",
  GREEN_BLUE: "GREENBLUE",
  GREEN_ORANGE_VIOLET: "GREENORANGEVIOLET",
  GREEN_RED: "GREENRED",
  GREEN_WHITE: "GREENWHITE",
  PINK_BLACK: "PINKBLACK",
  PINK_BLUE: "PINKBLUE",
  PINK_RED: "PINKRED",
  PINK_WHITE: "PINKWHITE",
  RAIN_BOW: "RAINBOW",
  RED_BLACK: "REDBLACK",
  RED_WHITE: "REDWHITE",
  SPECTRUM: "SPECTRUM",
  TERRAIN: "TERRAIN",
  YELLOW_BLACK: "YELLOWBLACK",
  YELLOW_BLUE: "YELLOWBLUE",
  YELLOW_GREEN: "YELLOWGREEN",
  YELLOW_RED: "YELLOWRED",
  YELLOW_WHITE: "YELLOWWHITE"
};

/**
 * @name TextAlignment
 * @memberOf SuperMap
 * @description  文本对齐枚举。
 *
 * @property {string} TOPLEFT  TOPLEFT
 * @property {string} TOPCENTER  TOPCENTER
 * @property {string} TOPRIGHT  TOPRIGHT
 * @property {string} BASELINELEFT  BASELINELEFT
 * @property {string} BASELINECENTER  BASELINECENTER
 * @property {string} BASELINERIGHT  BASELINERIGHT
 * @property {string} BOTTOMLEFT  BOTTOMLEFT
 * @property {string} BOTTOMCENTER  BOTTOMCENTER
 * @property {string} BOTTOMRIGHT  BOTTOMRIGHT
 * @property {string} MIDDLELEFT  MIDDLELEFT
 * @property {string} MIDDLECENTER  MIDDLECENTER
 * @property {string} MIDDLERIGHT  MIDDLERIGHT
 */
var TextAlignment = exports.TextAlignment = _SuperMap2["default"].TextAlignment = {
  TOPLEFT: "TOPLEFT",
  TOPCENTER: "TOPCENTER",
  TOPRIGHT: "TOPRIGHT",
  BASELINELEFT: "BASELINELEFT",
  BASELINECENTER: "BASELINECENTER",
  BASELINERIGHT: "BASELINERIGHT",
  BOTTOMLEFT: "BOTTOMLEFT",
  BOTTOMCENTER: "BOTTOMCENTER",
  BOTTOMRIGHT: "BOTTOMRIGHT",
  MIDDLELEFT: "MIDDLELEFT",
  MIDDLECENTER: "MIDDLECENTER",
  MIDDLERIGHT: "MIDDLERIGHT"
};

/**
 * @name FillGradientMode
 * @memberOf SuperMap
 * @description  渐变填充风格的渐变类型枚举。
 *
 * @property {string} NONE  NONE
 * @property {string} LINEAR  LINEAR
 * @property {string} RADIAL  RADIAL
 * @property {string} CONICAL  CONICAL
 * @property {string} SQUARE  SQUARE
 */
var FillGradientMode = exports.FillGradientMode = _SuperMap2["default"].FillGradientMode = {
  NONE: "NONE",
  LINEAR: "LINEAR",
  RADIAL: "RADIAL",
  CONICAL: "CONICAL",
  SQUARE: "SQUARE"
};

/**
 * @name AlongLineDirection
 * @memberOf SuperMap
 * @name AlongLineDirection
 * @memberOf SuperMap
 * @description  标签沿线标注方向枚举。
 *
 * @property {string} NORMAL  ALONG_LINE_NORMAL
 * @property {string} LB_TO_RT  LEFT_BOTTOM_TO_RIGHT_TOP
 * @property {string} LT_TO_RB  LEFT_TOP_TO_RIGHT_BOTTOM
 * @property {string} RB_TO_LT  RIGHT_BOTTOM_TO_LEFT_TOP
 * @property {string} RT_TO_LB  RIGHT_TOP_TO_LEFT_BOTTOM
 */
var AlongLineDirection = exports.AlongLineDirection = _SuperMap2["default"].AlongLineDirection = {
  NORMAL: "ALONG_LINE_NORMAL",
  LB_TO_RT: "LEFT_BOTTOM_TO_RIGHT_TOP",
  LT_TO_RB: "LEFT_TOP_TO_RIGHT_BOTTOM",
  RB_TO_LT: "RIGHT_BOTTOM_TO_LEFT_TOP",
  RT_TO_LB: "RIGHT_TOP_TO_LEFT_BOTTOM"
};

/**
 * @name LabelBackShape
 * @memberOf SuperMap
 * @description  标签专题图中标签背景的形状枚举。
 *
 * @property {string} DIAMOND  DIAMOND
 * @property {string} ELLIPSE  ELLIPSE
 * @property {string} MARKER  MARKER
 * @property {string} NONE  NONE
 * @property {string} RECT  RECT
 * @property {string} ROUNDRECT  ROUNDRECT
 * @property {string} TRIANGLE  TRIANGLE
 */
var LabelBackShape = exports.LabelBackShape = _SuperMap2["default"].LabelBackShape = {
  DIAMOND: "DIAMOND",
  ELLIPSE: "ELLIPSE",
  MARKER: "MARKER",
  NONE: "NONE",
  RECT: "RECT",
  ROUNDRECT: "ROUNDRECT",
  TRIANGLE: "TRIANGLE"
};

/**
 * @name LabelOverLengthMode
 * @memberOf SuperMap
 * @description  标签专题图中超长标签的处理模式枚举。
 *
 * @property {string} NEWLINE  NEWLINE
 * @property {string} NONE  NONE
 * @property {string} OMIT  OMIT
 */
var LabelOverLengthMode = exports.LabelOverLengthMode = _SuperMap2["default"].LabelOverLengthMode = {
  NEWLINE: "NEWLINE",
  NONE: "NONE",
  OMIT: "OMIT"
};

/**
 * @name DirectionType
 * @memberOf SuperMap
 * @description  网络分析中方向枚举。
 * 在行驶引导子项中使用。
 *
 * @property {string} EAST  EAST
 * @property {string} NONE  NONE
 * @property {string} NORTH  NORTH
 * @property {string} SOURTH  SOURTH
 * @property {string} WEST  WEST
 */
var DirectionType = exports.DirectionType = _SuperMap2["default"].DirectionType = {
  EAST: "EAST",
  NONE: "NONE",
  NORTH: "NORTH",
  SOURTH: "SOURTH",
  WEST: "WEST"
};

/**
 * @name SideType
 * @memberOf SuperMap
 * @description  行驶位置枚举。
 * 表示在行驶在路的左边、右边或者路上的枚举,该类用在行驶导引子项类中。
 *
 * @property {string} LEFT  LEFT
 * @property {string} MIDDLE  MIDDLE
 * @property {string} NONE  NONE
 * @property {string} RIGHT  RIGHT
 */
var SideType = exports.SideType = _SuperMap2["default"].SideType = {
  LEFT: "LEFT",
  MIDDLE: "MIDDLE",
  NONE: "NONE",
  RIGHT: "RIGHT"
};

/**
 * @name SupplyCenterType
 * @memberOf SuperMap
 * @description  资源供给中心类型枚举。
 * 该枚举定义了网络分析中资源中心点的类型，主要用于资源分配和选址分区。
 * 资源供给中心点的类型包括非中心，固定中心和可选中心。固定中心用于资源分配分析； 固定中心和可选中心用于选址分析；非中心在两种网络分析时都不予考虑。
 *
 * @property {string} FIXEDCENTER  FIXEDCENTER
 * @property {string} NULL  NULL
 * @property {string} OPTIONALCENTER  OPTIONALCENTER
 */
var SupplyCenterType = exports.SupplyCenterType = _SuperMap2["default"].SupplyCenterType = {
  FIXEDCENTER: "FIXEDCENTER",
  NULL: "NULL",
  OPTIONALCENTER: "OPTIONALCENTER"
};

/**
 * @name TurnType
 * @memberOf SuperMap
 * @description  转弯方向枚举。
 * 用在行驶引导子项类中，表示转弯的方向。
 *
 * @property {string} AHEAD  AHEAD
 * @property {string} BACK  BACK
 * @property {string} END  END
 * @property {string} LEFT  LEFT
 * @property {string} NONE  NONE
 * @property {string} RIGHT  RIGHT
 */
var TurnType = exports.TurnType = _SuperMap2["default"].TurnType = {
  AHEAD: "AHEAD",
  BACK: "BACK",
  END: "END",
  LEFT: "LEFT",
  NONE: "NONE",
  RIGHT: "RIGHT"
};

/**
 * @name BufferEndType
 * @memberOf SuperMap
 * @description  缓冲区分析BufferEnd类型。
 *
 * @property {string} FLAT  FLAT
 * @property {string} ROUND  ROUND
 */
var BufferEndType = exports.BufferEndType = _SuperMap2["default"].BufferEndType = {
  FLAT: "FLAT",
  ROUND: "ROUND"
};

/**
 * @name OverlayOperationType
 * @memberOf SuperMap
 * @description  叠加分析类型枚举。
 *
 * @property {string} CLIP  CLIP
 * @property {string} ERASE  ERASE
 * @property {string} IDENTITY  IDENTITY
 * @property {string} INTERSECT  INTERSECT
 * @property {string} UNION  UNION
 * @property {string} UPDATE  UPDATE
 * @property {string} XOR  XOR
 */
var OverlayOperationType = exports.OverlayOperationType = _SuperMap2["default"].OverlayOperationType = {
  CLIP: "CLIP",
  ERASE: "ERASE",
  IDENTITY: "IDENTITY",
  INTERSECT: "INTERSECT",
  UNION: "UNION",
  UPDATE: "UPDATE",
  XOR: "XOR"
};

/**
 * @name SmoothMethod
 * @memberOf SuperMap
 * @description  光滑方法枚举。
 * 用于从Grid 或DEM数据生成等值线或等值面时对等值线或者等值面的边界线进行平滑处理的方法。
 *
 * @property {string} BSPLINE  BSPLINE
 * @property {string} POLISH  POLISH
 */
var SmoothMethod = exports.SmoothMethod = _SuperMap2["default"].SmoothMethod = {
  BSPLINE: "BSPLINE",
  POLISH: "POLISH"
};

/**
 * @name SurfaceAnalystMethod
 * @memberOf SuperMap
 * @description  表面分析方法枚举。
 * 通过对数据进行表面分析，能够挖掘原始数据所包含的信息，使某些细节明显化，易于分析。
 *
 * @property {string} ISOLINE  ISOLINE
 * @property {string} ISOREGION  ISOREGION
 */
var SurfaceAnalystMethod = exports.SurfaceAnalystMethod = _SuperMap2["default"].SurfaceAnalystMethod = {
  ISOLINE: "ISOLINE",
  ISOREGION: "ISOREGION"
};
/**
 * @name DataReturnMode
 * @memberOf SuperMap
 * @description  数据返回模式枚举。
 * 该枚举用于指定空间分析返回结果模式,包含返回数据集标识和记录集、只返回数据集标识(数据集名称@数据源名称)及只返回记录集三种模式。
 *
 * @property {string} DATASET_AND_RECORDSET  DATASET_AND_RECORDSET
 * @property {string} DATASET_ONLY  DATASET_ONLY
 * @property {string} RECORDSET_ONLY  RECORDSET_ONLY
 */
var DataReturnMode = exports.DataReturnMode = _SuperMap2["default"].DataReturnMode = {
  DATASET_AND_RECORDSET: "DATASET_AND_RECORDSET",
  DATASET_ONLY: "DATASET_ONLY",
  RECORDSET_ONLY: "RECORDSET_ONLY"
};

/**
 * @name EditType
 * @memberOf SuperMap
 * @description  要素集更新模式枚举。
 * 该枚举用于指定数据服务中要素集更新模式,包含添加要素集、更新要素集和删除要素集。
 *
 * @property {string} ADD  add
 * @property {string} UPDATE  update
 * @property {string} DELETE  delete
 */
var EditType = exports.EditType = _SuperMap2["default"].EditType = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete"
};

/**
 * @name TransferTactic
 * @memberOf SuperMap
 * @description  公交换乘策略枚举。
 * 该枚举用于指定公交服务中要素集更新模式,包含添加要素集、更新要素集和删除要素集。
 *
 * @property {string} LESS_TIME  LESS_TIME
 * @property {string} LESS_TRANSFER  LESS_TRANSFER
 * @property {string} LESS_WALK  LESS_WALK
 * @property {string} MIN_DISTANCE  MIN_DISTANCE
 */
var TransferTactic = exports.TransferTactic = _SuperMap2["default"].TransferTactic = {
  LESS_TIME: "LESS_TIME",
  LESS_TRANSFER: "LESS_TRANSFER",
  LESS_WALK: "LESS_WALK",
  MIN_DISTANCE: "MIN_DISTANCE"
};

/**
 * @name TransferPreference
 * @memberOf SuperMap
 * @description  公交换乘策略枚举。
 * 该枚举用于指定交通换乘服务中设置地铁优先、公交优先、不乘地铁、无偏好等偏好设置。
 *
 * @property {string} BUS  BUS
 * @property {string} SUBWAY  SUBWAY
 * @property {string} NO_SUBWAY  NO_SUBWAY
 * @property {string} NONE  NONE
 */
var TransferPreference = exports.TransferPreference = _SuperMap2["default"].TransferPreference = {
  BUS: "BUS",
  SUBWAY: "SUBWAY",
  NO_SUBWAY: "NO_SUBWAY",
  NONE: "NONE"
};

/**
 * @name GridType
 * @memberOf SuperMap
 * @description  地图背景格网类型枚举。
 *
 * @property {string} CROSS  CROSS
 * @property {string} GRID  GRID
 * @property {string} POINT  POINT
 */
var GridType = exports.GridType = _SuperMap2["default"].GridType = {
  CROSS: "CROSS",
  GRID: "GRID",
  POINT: "POINT"
};

/**
 * @name ColorSpaceType
 * @memberOf SuperMap
 * @description  色彩空间枚举。
 * 由于成色原理的不同，决定了显示器、投影仪这类靠色光直接合成颜色的颜色设备和打印机、
 * 印刷机这类靠使用颜料的印刷设备在生成颜色方式上的区别。
 * 针对上述不同成色方式，SuperMap 提供两种色彩空间，
 * 分别为 RGB 和 CMYK。RGB 主要用于显示系统中，CMYK 主要用于印刷系统中。
 *
 * @property {string} CMYK  CMYK
 * @property {string} RGB  RGB
 */
var ColorSpaceType = exports.ColorSpaceType = _SuperMap2["default"].ColorSpaceType = {
  CMYK: "CMYK",
  RGB: "RGB"
};

/**
 * @name LayerType
 * @memberOf SuperMap
 * @description  图层类型。
 *
 * @property {string} UGC  UGC
 * @property {string} WMS  WMS
 * @property {string} WFS  WFS
 * @property {string} CUSTOM  CUSTOM
 */
var LayerType = exports.LayerType = _SuperMap2["default"].LayerType = {
  UGC: "UGC",
  WMS: "WMS",
  WFS: "WFS",
  CUSTOM: "CUSTOM"

};

/**
 * @name UGCLayerType
 * @memberOf SuperMap
 * @description  UGC图层类型。
 *
 * @property {string} THEME  THEME
 * @property {string} VECTOR  VECTOR
 * @property {string} GRID  GRID
 * @property {string} IMAGE  IMAGE
 */
var UGCLayerType = exports.UGCLayerType = _SuperMap2["default"].UGCLayerType = {
  THEME: "THEME",
  VECTOR: "VECTOR",
  GRID: "GRID",
  IMAGE: "IMAGE"

};

/**
 * @name StatisticMode
 * @memberOf SuperMap
 * @description  字段统计方法类型。
 *
 * @property {string} AVERAGE  AVERAGE, 统计所选字段的平均值
 * @property {string} MAX  MAX, 统计所选字段的最大值
 * @property {string} MIN  MIN, 统计所选字段的最小值
 * @property {string} STDDEVIATION  STDDEVIATION, 统计所选字段的标准差
 * @property {string} SUM  SUM, 统计所选字段的总和
 * @property {string} VARIANCE  VARIANCE, 统计所选字段的方差
 */
var StatisticMode = exports.StatisticMode = _SuperMap2["default"].StatisticMode = {
  AVERAGE: "AVERAGE",
  MAX: "MAX",
  MIN: "MIN",
  STDDEVIATION: "STDDEVIATION",
  SUM: "SUM",
  VARIANCE: "VARIANCE"
};

/**
 * @name PixelFormat
 * @memberOf SuperMap
 * @description  栅格与影像数据存储的像素格式枚举。
 *
 * @property {string} BIT16  BIT16, 每个像元用16个比特(即2个字节)表示
 * @property {string} BIT32  BIT32, 每个像元用32个比特(即4个字节)表示
 * @property {string} BIT64  BIT64, 每个像元用64个比特(即8个字节)表示，只提供给栅格数据集使用
 * @property {string} SINGLE  SINGLE, 每个像元用4个字节来表示，只提供给栅格数据集使用
 * @property {string} DOUBLE  DOUBLE, 每个像元用8个字节来表示，只提供给栅格数据集使用
 * @property {string} UBIT1  UBIT1, 每个像元用1个比特表示
 * @property {string} UBIT4  UBIT4, 每个像元用4个比特来表示
 * @property {string} UBIT8  UBIT8, 每个像元用8个比特(即1个字节)来表示
 * @property {string} UBIT24  UBIT24, 每个像元用24个比特(即3个字节)来表示
 * @property {string} UBIT32  UBIT32, 每个像元用32个比特(即4个字节)来表示
 */
var PixelFormat = exports.PixelFormat = _SuperMap2["default"].PixelFormat = {
  BIT16: "BIT16",
  BIT32: "BIT32",
  BIT64: "BIT64",
  SINGLE: "SINGLE",
  DOUBLE: "DOUBLE",
  UBIT1: "UBIT1",
  UBIT4: "UBIT4",
  UBIT8: "UBIT8",
  UBIT24: "UBIT24",
  UBIT32: "UBIT32"
};

/**
 * @name SearchMode
 * @memberOf SuperMap
 * @description  内插时使用的样本点的查找方式枚举
 *
 * @property {string} KDTREE_FIXED_COUNT  KDTREE_FIXED_COUNT, 使用 KDTREE 的固定点数方式查找参与内插分析的点
 * @property {string} KDTREE_FIXED_RADIUS  KDTREE_FIXED_RADIUS, 使用 KDTREE 的定长方式查找参与内插分析的点
 * @property {string} NONE  NONE, 不进行查找，使用所有的输入点进行内插分析
 * @property {string} QUADTREE  QUADTREE, 使用 QUADTREE 方式查找参与内插分析的点，仅对样条（RBF）插值和普通克吕金（Kriging）有用
 */
var SearchMode = exports.SearchMode = _SuperMap2["default"].SearchMode = {
  KDTREE_FIXED_COUNT: "KDTREE_FIXED_COUNT",
  KDTREE_FIXED_RADIUS: "KDTREE_FIXED_RADIUS",
  NONE: "NONE",
  QUADTREE: "QUADTREE"
};

/**
 * @name InterpolationAlgorithmType
 * @memberOf SuperMap
 * @description  插值分析的算法的类型
 *
 * @property {string} KRIGING  KRIGING, 普通克吕金插值法
 * @property {string} SimpleKriging  SimpleKriging, 简单克吕金插值法
 * @property {string} UniversalKriging  UniversalKriging, 泛克吕金插值法
 */
var InterpolationAlgorithmType = exports.InterpolationAlgorithmType = _SuperMap2["default"].InterpolationAlgorithmType = {
  KRIGING: "KRIGING",
  SimpleKriging: "SimpleKriging",
  UniversalKriging: "UniversalKriging"
};

/**
 * @name VariogramMode
 * @memberOf SuperMap
 * @description  克吕金（Kriging）插值时的半变函数类型枚举
 *
 * @property {string} EXPONENTIAL  EXPONENTIAL, 指数函数（Exponential Variogram Mode）
 * @property {string} GAUSSIAN  GAUSSIAN,  高斯函数（Gaussian Variogram Mode）
 * @property {string} SPHERICAL  SPHERICAL, 球型函数（Spherical Variogram Mode）
 */
var VariogramMode = exports.VariogramMode = _SuperMap2["default"].VariogramMode = {
  EXPONENTIAL: "EXPONENTIAL",
  GAUSSIAN: "GAUSSIAN",
  SPHERICAL: "SPHERICAL"
};

/**
 * @name Exponent
 * @memberOf SuperMap
 * @description  定义了泛克吕金（UniversalKriging）插值时样点数据中趋势面方程的阶数
 *
 * @property {string} EXP1  EXP1, 阶数为1
 * @property {string} EXP2  EXP2, 阶数为2
 */
var Exponent = exports.Exponent = _SuperMap2["default"].Exponent = {
  EXP1: "EXP1",
  EXP2: "EXP2"
};

/**
 * @name ClientType
 * @memberOf SuperMap
 * @description token申请的客户端标识类型
 *
 * @property {string} IP  IP
 * @property {string} REFERER  Referer
 * @property {string} REQUESTIP  RequestIP
 * @property {string} NONE  NONE
 * @property {string} SERVER  SERVER
 * @property {string} WEB  WEB
 */
var ClientType = exports.ClientType = _SuperMap2["default"].ClientType = {
  IP: "IP",
  REFERER: "Referer",
  REQUESTIP: "RequestIP",
  NONE: "NONE",
  SERVER: "SERVER",
  WEB: "WEB"
};

/**
 * @name ChartType
 * @memberOf SuperMap
 * @description 客户端专题图图表类型
 *
 * @property {string} BAR  Bar
 * @property {string} BAR3D  Bar3D
 * @property {string} CIRCLE  Circle
 * @property {string} PIE  Pie
 * @property {string} POINT  Point
 * @property {string} LINE  Line
 * @property {string} RING  Ring
 */
var ChartType = exports.ChartType = _SuperMap2["default"].ChartType = {
  BAR: "Bar",
  BAR3D: "Bar3D",
  CIRCLE: "Circle",
  PIE: "Pie",
  POINT: "Point",
  LINE: "Line",
  RING: "Ring"
};

/**
 * @name ClipAnalystMode
 * @memberOf SuperMap
 * @description  裁剪分析模式
 *
 * @property {string} CLIP  clip
 * @property {string} INTERSECT  intersect
 */
var ClipAnalystMode = exports.ClipAnalystMode = _SuperMap2["default"].ClipAnalystMode = {
  CLIP: "clip",
  INTERSECT: "intersect"
};
/**
 * @name AnalystAreaUnit
 * @memberOf SuperMap
 * @description 分布式分析面积单位
 *
 * @property {string} SQUAREMETER  SquareMeter
 * @property {string} SQUAREKILOMETER   SquareKiloMeter
 * @property {string} HECTARE  Hectare
 * @property {string} ARE   Are
 * @property {string} ACRE   Acre
 * @property {string} SQUAREFOOT   SquareFoot
 * @property {string} SQUAREYARD   SquareYard
 * @property {string} SQUAREMILE   SquareMile
 */
var AnalystAreaUnit = exports.AnalystAreaUnit = _SuperMap2["default"].AnalystAreaUnit = {
  "SQUAREMETER": "SquareMeter",
  "SQUAREKILOMETER": "SquareKiloMeter",
  "HECTARE": "Hectare",
  "ARE": "Are",
  "ACRE": "Acre",
  "SQUAREFOOT": "SquareFoot",
  "SQUAREYARD": "SquareYard",
  "SQUAREMILE": "SquareMile"
};
/**
 * @name AnalystSizeUnit
 * @memberOf SuperMap
 * @description 分布式分析单位
 *
 * @property {string} METER   Meter
 * @property {string} KILOMETER   Kilometer
 * @property {string} YARD   Yard
 * @property {string} FOOT   Foot
 * @property {string} MILE   Mile
 */
var AnalystSizeUnit = exports.AnalystSizeUnit = _SuperMap2["default"].AnalystSizeUnit = {
  "METER": "Meter",
  "KILOMETER": "Kilometer",
  "YARD": "Yard",
  "FOOT": "Foot",
  "MILE": "Mile"
};
/**
 * @name StatisticAnalystMode
 * @memberOf SuperMap
 * @description 分布式分析统计模式
 *
 * @property {string} MAX   max
 * @property {string} MIN   min
 * @property {string} AVERAGE   average
 * @property {string} SUM   sum
 * @property {string} VARIANCE   variance
 * @property {string} STDDEVIATION   stdDeviation
 */
var StatisticAnalystMode = exports.StatisticAnalystMode = _SuperMap2["default"].StatisticAnalystMode = {
  "MAX": "max",
  "MIN": "min",
  "AVERAGE": "average",
  "SUM": "sum",
  "VARIANCE": "variance",
  "STDDEVIATION": "stdDeviation"
};
/**
 * @name SummaryType
 * @memberOf SuperMap
 * @description 分布式分析聚合类型
 *
 * @property {string} SUMMARYMESH   SUMMARYMESH
 * @property {string} SUMMARYREGION SUMMARYREGION
 */
var SummaryType = exports.SummaryType = _SuperMap2["default"].SummaryType = {
  "SUMMARYMESH": "SUMMARYMESH",
  "SUMMARYREGION": "SUMMARYREGION"

};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(x) {
  if (Math.abs(x) > 1) {
    x = (x > 1) ? 1 : -1;
  }
  return Math.asin(x);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / (Math.sqrt(1 - con * con));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _Collection = __webpack_require__(4);

var _Collection2 = _interopRequireDefault(_Collection);

var _Curve2 = __webpack_require__(58);

var _Curve3 = _interopRequireDefault(_Curve2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.LineString
 * @classdesc 几何对象线串类。
 * @param points - {Array<SuperMap.Geometry.Point>} 用来生成线串的点数组。
 * @extends {SuperMap.Geometry.Curve}
 * @example
 * var points = [new SuperMap.Geometry.Point(4933.319287022352, -3337.3849141502124),
 *     new SuperMap.Geometry.Point(4960.9674060199022, -3349.3316322355736),
 *     new SuperMap.Geometry.Point(5006.0235999418364, -3358.8890067038628),
 *     new SuperMap.Geometry.Point(5075.3145648369318, -3378.0037556404409),
 *     new SuperMap.Geometry.Point(5305.19551436013, -3376.9669111768926)],
 * var roadLine = new SuperMap.Geometry.LineString(points)；
 */
var LineString = function (_Curve) {
    _inherits(LineString, _Curve);

    function LineString(points) {
        _classCallCheck(this, LineString);

        var _this = _possibleConstructorReturn(this, (LineString.__proto__ || Object.getPrototypeOf(LineString)).call(this, points));

        _this.CLASS_NAME = "SuperMap.Geometry.LineString";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.LineString.prototype.removeComponent
     * @description 只有在线串上有三个或更多的点的时候，才会允许移除点（否则结果将会是单一的点）。
     * @param point - {SuperMap.Geometry.Point} 将被删除的点。
     * @returns {boolean} 删除的点。
     */


    _createClass(LineString, [{
        key: 'removeComponent',
        value: function removeComponent(point) {
            var removed = this.components && this.components.length > 2;
            if (removed) {
                _Collection2["default"].prototype.removeComponent.apply(this, arguments);
            }
            return removed;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.intersects
         * @description 判断两个几何图形是否相交。
         * @param geometry - {SuperMap.Geometry} 任意的几何类型。
         * @returns {boolean} 输入几何图形与当前几何图形是否相交。
         */

    }, {
        key: 'intersects',
        value: function intersects(geometry) {
            var intersect = false;
            var type = geometry.CLASS_NAME;
            if (type === "SuperMap.Geometry.LineString" || type === "SuperMap.Geometry.LinearRing" || type === "SuperMap.Geometry.Point") {
                var segs1 = this.getSortedSegments();
                var segs2;
                if (type === "SuperMap.Geometry.Point") {
                    segs2 = [{
                        x1: geometry.x, y1: geometry.y,
                        x2: geometry.x, y2: geometry.y
                    }];
                } else {
                    segs2 = geometry.getSortedSegments();
                }
                var seg1, seg1x1, seg1x2, seg1y1, seg1y2, seg2, seg2y1, seg2y2;
                // sweep right
                outer: for (var i = 0, len = segs1.length; i < len; ++i) {
                    seg1 = segs1[i];
                    seg1x1 = seg1.x1;
                    seg1x2 = seg1.x2;
                    seg1y1 = seg1.y1;
                    seg1y2 = seg1.y2;
                    inner: for (var j = 0, jlen = segs2.length; j < jlen; ++j) {
                        seg2 = segs2[j];
                        if (seg2.x1 > seg1x2) {
                            // seg1 still left of seg2
                            break;
                        }
                        if (seg2.x2 < seg1x1) {
                            // seg2 still left of seg1
                            continue;
                        }
                        seg2y1 = seg2.y1;
                        seg2y2 = seg2.y2;
                        if (Math.min(seg2y1, seg2y2) > Math.max(seg1y1, seg1y2)) {
                            // seg2 above seg1
                            continue;
                        }
                        if (Math.max(seg2y1, seg2y2) < Math.min(seg1y1, seg1y2)) {
                            // seg2 below seg1
                            continue;
                        }
                        if (_SuperMap2["default"].Geometry.segmentsIntersect(seg1, seg2)) {
                            intersect = true;
                            break outer;
                        }
                    }
                }
            } else {
                intersect = geometry.intersects(this);
            }
            return intersect;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.getSortedSegments
         * @returns {Array} 分割对象的数组。分割对象有x1y1x2y2属性。起始点为x1y1，终点为x2y2。起始点与终点以增序排序。
         */

    }, {
        key: 'getSortedSegments',
        value: function getSortedSegments() {
            var numSeg = this.components.length - 1;
            var segments = new Array(numSeg),
                point1,
                point2;
            for (var i = 0; i < numSeg; ++i) {
                point1 = this.components[i];
                point2 = this.components[i + 1];
                if (point1.x < point2.x) {
                    segments[i] = {
                        x1: point1.x,
                        y1: point1.y,
                        x2: point2.x,
                        y2: point2.y
                    };
                } else {
                    segments[i] = {
                        x1: point2.x,
                        y1: point2.y,
                        x2: point1.x,
                        y2: point1.y
                    };
                }
            }

            // more efficient to define this somewhere static
            function byX1(seg1, seg2) {
                return seg1.x1 - seg2.x1;
            }

            return segments.sort(byX1);
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.splitWithSegment
         * @description 以给定的分割对象来分割几何对象。
         * @param seg - {Object} 分割对象。
         * @param options - {Object} 可选参数。<br>
         *         edge - {boolean} 当与边界相交的时候是否分割。默认为true。
         *         tolerance - {number} 容差。
         * @returns {Object} 一个带有lines和points属性的对象。
         */

    }, {
        key: 'splitWithSegment',
        value: function splitWithSegment(seg, options) {
            var edge = !(options && options.edge === false);
            var tolerance = options && options.tolerance;
            var lines = [];
            var verts = this.getVertices();
            var points = [];
            var intersections = [];
            var split = false;
            var vert1, vert2, point;
            var node, vertex, target;
            var interOptions = { point: true, tolerance: tolerance };
            var result = null;
            for (var i = 0, stop = verts.length - 2; i <= stop; ++i) {
                vert1 = verts[i];
                points.push(vert1.clone());
                vert2 = verts[i + 1];
                target = { x1: vert1.x, y1: vert1.y, x2: vert2.x, y2: vert2.y };
                point = _SuperMap2["default"].Geometry.segmentsIntersect(seg, target, interOptions);
                if (point instanceof _Point2["default"]) {
                    if (point.x === seg.x1 && point.y === seg.y1 || point.x === seg.x2 && point.y === seg.y2 || point.equals(vert1) || point.equals(vert2)) {
                        vertex = true;
                    } else {
                        vertex = false;
                    }
                    if (vertex || edge) {
                        // push intersections different than the previous
                        if (!point.equals(intersections[intersections.length - 1])) {
                            intersections.push(point.clone());
                        }
                        if (i === 0) {
                            if (point.equals(vert1)) {
                                continue;
                            }
                        }
                        if (point.equals(vert2)) {
                            continue;
                        }
                        split = true;
                        if (!point.equals(vert1)) {
                            points.push(point);
                        }
                        lines.push(new LineString(points));
                        points = [point.clone()];
                    }
                }
            }
            if (split) {
                points.push(vert2.clone());
                lines.push(new LineString(points));
            }
            if (intersections.length > 0) {
                // sort intersections along segment
                var xDir = seg.x1 < seg.x2 ? 1 : -1;
                var yDir = seg.y1 < seg.y2 ? 1 : -1;
                result = {
                    lines: lines,
                    points: intersections.sort(function (p1, p2) {
                        return xDir * p1.x - xDir * p2.x || yDir * p1.y - yDir * p2.y;
                    })
                };
            }
            return result;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.split
         * @description 用一个几何对象去分割另外一个几何对象。
         * @param target - {SuperMap.Geometry} 目标几何对象.
         * @param options - {Object} 可选参数。<br>
         *         mutual - {boolean} 分割源几何对象，除了目标对象。默认是false。
         *         edge - {boolean} 当与边界相交的时候才允许分割，默认是true。
         *         tolerance - {number} 容差。
         * @returns {Array} 几何对象列表。
         */

    }, {
        key: 'split',
        value: function split(target, options) {
            var results = null;
            var mutual = options && options.mutual;
            var sourceSplit, targetSplit, sourceParts, targetParts;
            if (target instanceof LineString) {
                var verts = this.getVertices();
                var vert1, vert2, seg, splits, lines, point;
                var points = [];
                sourceParts = [];
                for (var i = 0, stop = verts.length - 2; i <= stop; ++i) {
                    vert1 = verts[i];
                    vert2 = verts[i + 1];
                    seg = {
                        x1: vert1.x, y1: vert1.y,
                        x2: vert2.x, y2: vert2.y
                    };
                    targetParts = targetParts || [target];
                    if (mutual) {
                        points.push(vert1.clone());
                    }
                    for (var j = 0; j < targetParts.length; ++j) {
                        splits = targetParts[j].splitWithSegment(seg, options);
                        if (splits) {
                            // splice in new features
                            lines = splits.lines;
                            if (lines.length > 0) {
                                lines.unshift(j, 1);
                                Array.prototype.splice.apply(targetParts, lines);
                                j += lines.length - 2;
                            }
                            if (mutual) {
                                for (var k = 0, len = splits.points.length; k < len; ++k) {
                                    point = splits.points[k];
                                    if (!point.equals(vert1)) {
                                        points.push(point);
                                        sourceParts.push(new LineString(points));
                                        if (point.equals(vert2)) {
                                            points = [];
                                        } else {
                                            points = [point.clone()];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (mutual && sourceParts.length > 0 && points.length > 0) {
                    points.push(vert2.clone());
                    sourceParts.push(new LineString(points));
                }
            } else {
                results = target.splitWith(this, options);
            }
            if (targetParts && targetParts.length > 1) {
                targetSplit = true;
            } else {
                targetParts = [];
            }
            if (sourceParts && sourceParts.length > 1) {
                sourceSplit = true;
            } else {
                sourceParts = [];
            }
            if (targetSplit || sourceSplit) {
                if (mutual) {
                    results = [sourceParts, targetParts];
                } else {
                    results = targetParts;
                }
            }
            return results;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.splitWith
         * @description 用几何对象分割另一个几何对象。
         * @param geometry - {SuperMap.Geometry} A geometry used to split this geometry (the source).
         * @param options - {Object} 可选参数。<br>
         *         mutual - {boolean} 分割源几何对象，除了目标对象。默认是false。
         *         edge - {boolean} 当与边界相交的时候才允许分割，默认是true。
         *         tolerance - {number} 容差。
         * @returns {Array} 几何对象数组。
         */

    }, {
        key: 'splitWith',
        value: function splitWith(geometry, options) {
            return geometry.split(this, options);
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.getVertices
         * @description 返回几何图形的所有顶点的列表。
         * @param nodes - {boolean} 对于线来说，仅仅返回作为端点的顶点，如果设为false，则返回非端点的顶点
         * 如果没有设置此参数，则返回所有顶点。
         * @returns {Array} 几何图形的顶点列表。
         */

    }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
            var vertices;
            if (nodes === true) {
                vertices = [this.components[0], this.components[this.components.length - 1]];
            } else if (nodes === false) {
                vertices = this.components.slice(1, this.components.length - 1);
            } else {
                vertices = this.components.slice();
            }
            return vertices;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.distanceTo
         * @description 计算两个几个图形间的最小距离（x-y平面坐标系下）。
         * @param geometry {SuperMap.Geometry} 目标几何图形。
         * @param options {Object}距离计算需要设置的可选属性。有效的选项取决于特定的几何类型。
         *         details - {boolean} 返回距离计算的细节，默认为false。
         *         edge - {boolean} 计算一个几何图形到目标几何图形边缘的最近距离，默认为true。 如果设为true，
         *                          一个几何图形完全包含在目标几何图形中时，调用distanceTo返回非零结果，如果false，两个几何图形相交情况下
         *                          调用distanceTo结果返回0，而且如果false，将不返距离。
         * @returns {number | Object} 返回一个几何图形到目标几何图形的距离。
         */

    }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
            var edge = !(options && options.edge === false);
            var details = edge && options && options.details;
            var result,
                best = {};
            var min = Number.POSITIVE_INFINITY;
            if (geometry instanceof _Point2["default"]) {
                var segs = this.getSortedSegments();
                var x = geometry.x;
                var y = geometry.y;
                var seg;
                for (var i = 0, len = segs.length; i < len; ++i) {
                    seg = segs[i];
                    result = Supermap.Geometry.distanceToSegment(geometry, seg);
                    if (result.distance < min) {
                        min = result.distance;
                        best = result;
                        if (min === 0) {
                            break;
                        }
                    } else {
                        // if distance increases and we cross y0 to the right of x0, no need to keep looking.
                        if (seg.x2 > x && (y > seg.y1 && y < seg.y2 || y < seg.y1 && y > seg.y2)) {
                            break;
                        }
                    }
                }
                if (details) {
                    best = {
                        distance: best.distance,
                        x0: best.x, y0: best.y,
                        x1: x, y1: y
                    };
                } else {
                    best = best.distance;
                }
            } else if (geometry instanceof LineString) {
                var segs0 = this.getSortedSegments();
                var segs1 = geometry.getSortedSegments();
                var seg0, seg1, intersection, x0, y0;
                var len1 = segs1.length;
                var interOptions = { point: true };
                outer: for (var i = 0, len = segs0.length; i < len; ++i) {
                    seg0 = segs0[i];
                    x0 = seg0.x1;
                    y0 = seg0.y1;
                    for (var j = 0; j < len1; ++j) {
                        seg1 = segs1[j];
                        intersection = Supermap.Geometry.segmentsIntersect(seg0, seg1, interOptions);
                        if (intersection) {
                            min = 0;
                            best = {
                                distance: 0,
                                x0: intersection.x, y0: intersection.y,
                                x1: intersection.x, y1: intersection.y
                            };
                            break outer;
                        } else {
                            result = Supermap.Geometry.distanceToSegment({ x: x0, y: y0 }, seg1);
                            if (result.distance < min) {
                                min = result.distance;
                                best = {
                                    distance: min,
                                    x0: x0, y0: y0,
                                    x1: result.x, y1: result.y
                                };
                            }
                        }
                    }
                }
                if (!details) {
                    best = best.distance;
                }
                if (min !== 0) {
                    // check the final vertex in this line's sorted segments
                    if (seg0) {
                        result = geometry.distanceTo(new _Point2["default"](seg0.x2, seg0.y2), options);
                        var dist = details ? result.distance : result;
                        if (dist < min) {
                            if (details) {
                                best = {
                                    distance: min,
                                    x0: result.x1, y0: result.y1,
                                    x1: result.x0, y1: result.y0
                                };
                            } else {
                                best = dist;
                            }
                        }
                    }
                }
            } else {
                best = geometry.distanceTo(this, options);
                // swap since target comes from this line
                if (details) {
                    best = {
                        distance: best.distance,
                        x0: best.x1, y0: best.y1,
                        x1: best.x0, y1: best.y0
                    };
                }
            }
            return best;
        }

        /**
         * @function SuperMap.Geometry.LineString.prototype.simplify
         * @description 这个函数返回一个简化的线串，基于道格拉斯 - 普克简化算法进行简化。
         * @param tolerance {number} 地图单位上的简化的阈值。
         * @returns {SuperMap.Geometry.LineString} 被简化的线串。
         */

    }, {
        key: 'simplify',
        value: function simplify(tolerance) {
            if (this && this !== null) {
                var points = this.getVertices();
                if (points.length < 3) {
                    return this;
                }

                var compareNumbers;
                a, b;
                {
                    return a - b;
                }
                ;

                var firstPoint = 0;
                var lastPoint = points.length - 1;
                var pointIndexsToKeep = [];

                /**
                 * Private function calculating the perpendicular distance
                 * TODO: check whether SuperMap.Geometry.LineString::distanceTo() is faster or slower
                 */
                var perpendicularDistance;
                point1, point2, point;
                {
                    //Area = |(1/2)(x1y2 + x2y3 + x3y1 - x2y1 - x3y2 - x1y3)|   *Area of triangle
                    //Base = v((x1-x2)²+(x1-x2)²)                               *Base of Triangle*
                    //Area = .5*Base*H                                          *Solve for height
                    //Height = Area/.5/Base

                    var area = Math.abs(0.5 * (point1.x * point2.y + point2.x * point.y + point.x * point1.y - point2.x * point1.y - point.x * point2.y - point1.x * point.y));
                    var bottom = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
                    var height = area / bottom * 2;

                    return height;
                }
                ;

                /**
                 * Private function doing the Douglas-Peucker reduction
                 */
                var douglasPeuckerReduction;
                points, firstPoint, lastPoint, tolerance;
                {
                    var maxDistance = 0;
                    var indexFarthest = 0;

                    for (var index = firstPoint, distance; index < lastPoint; index++) {
                        distance = perpendicularDistance(points[firstPoint], points[lastPoint], points[index]);
                        if (distance > maxDistance) {
                            maxDistance = distance;
                            indexFarthest = index;
                        }
                    }

                    if (maxDistance > tolerance && indexFarthest !== firstPoint) {
                        //Add the largest point that exceeds the tolerance
                        pointIndexsToKeep.push(indexFarthest);
                        douglasPeuckerReduction(points, firstPoint, indexFarthest, tolerance);
                        douglasPeuckerReduction(points, indexFarthest, lastPoint, tolerance);
                    }
                }
                ;

                //Add the first and last index to the keepers
                pointIndexsToKeep.push(firstPoint);
                pointIndexsToKeep.push(lastPoint);

                //The first and the last point cannot be the same
                while (points[firstPoint].equals(points[lastPoint])) {
                    lastPoint--;
                    //Addition: the first point not equal to first point in the LineString is kept as well
                    pointIndexsToKeep.push(lastPoint);
                }

                douglasPeuckerReduction(points, firstPoint, lastPoint, tolerance);
                var returnPoints = [];
                pointIndexsToKeep.sort(compareNumbers);
                for (var index = 0; index < pointIndexsToKeep.length; index++) {
                    returnPoints.push(points[pointIndexsToKeep[index]]);
                }
                return new LineString(returnPoints);
            } else {
                return this;
            }
        }

        /**
         * @function SuperMap.Geometry.LineString.createCurve
         * @description 创建扇形对象。（备注：需要依赖Smooth.js）
         * @param points - {Array<SuperMap.Geometry.Point>} 曲线经过的点串。
         * @param method - {String} 曲线类型，目前支持的有："lanczos""cubic""linear"默认为"lanczos"。
         * @param filterSize - {number} 曲线平滑曲度，在2~10之间的数值，默认为10，不支持method为"linear"的类型。
         * @param lineLength - {number} 曲线拟合的线数目，默认是80。
         * @returns {SuperMap.Geometry.LineString} 几何线对象。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(11983722.73153942864.5449));
         * points.push(new SuperMap.Geometry.Point(11986722.7315 3946864.5449));
         * points.push(new SuperMap.Geometry.Point(11989722.7315 3949864.5449));
         * var curve = SuperMap.Geometry.LineString.createCurve(points);
         */

    }], [{
        key: 'createCurve',
        value: function createCurve(points, method, filterSize, lineLength) {
            var methodCurve = "lanczos";
            if (method != undefined) methodCurve = method;

            var filterSizeCurve = 10;
            if (filterSize != undefined) filterSizeCurve = filterSize;

            var smoothConfig = {
                method: methodCurve,
                clip: 'mirror',
                lanczosFilterSize: filterSizeCurve,
                cubicTension: 0
            };

            var pp = [];
            for (var i = 0; i < points.length; i++) {
                pp.push([points[i].x, points[i].y]);
            }

            var distance;
            a, b;
            {
                return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
            }

            var averageLineLengthCurve = 80;
            if (lineLength != undefined) averageLineLengthCurve = lineLength;

            var pointList = [];
            var averageLineLength, du, end, pieceCount, pieceLength, s, start, t, u, _ref, _ref2, _ref3;
            averageLineLength = distance(pp[0], pp[pp.length - 1]) / averageLineLengthCurve;
            pieceCount = 2;
            s = Smooth(pp, smoothConfig);
            for (t = 0, _ref = 1 / pieceCount; t < 1; t += _ref) {
                _ref2 = [s(i + t), s(i + t + 1 / pieceCount)], start = _ref2[0], end = _ref2[1];
                pieceLength = distance(start, end);
                du = averageLineLength / pieceLength;
                for (u = 0, _ref3 = 1 / pieceCount; 0 <= _ref3 ? u < _ref3 : u > _ref3; u += du) {
                    var p = s(i + t + u);
                    pointList.push(new _Point2["default"](p[0], p[1]));
                }
            }

            var p = s(i + 1);
            pointList.push(new _Point2["default"](p[0], p[1]));

            return new LineString(pointList);
        }
    }, {
        key: 'createBspline',


        /**
         * @function SuperMap.Geometry.LineString.createBspline
         * @description 创建B样条曲线。此曲线会穿过所有的点。
         * @param points - {Array<SuperMap.Geometry.Point>} 曲线经过的点串。
         * @param filterSize - {number} 曲线平滑曲度，默认为10。
         * @returns {SuperMap.Geometry.LineString} 几何线对象。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(116, 39.4));
         * points.push(new SuperMap.Geometry.Point(118, 39.8));
         * points.push(new SuperMap.Geometry.Point(119, 39));
         *
         * var curve = SuperMap.Geometry.LineString.createBspline(points,5);
         */
        value: function createBspline(points, filterSize) {
            //一个点无效，至少需要两个点
            if (points.length < 2) {
                return null;
            }
            //曲线内部的所有点数组
            var pointListDraw = [];
            //设置曲线平滑曲度
            var k = 10;
            if (filterSize != undefined) {
                k = filterSize;
            }
            var i, j, a0, a1, a2, dt, t1, t2;
            var t_x, t_y;
            dt = 1.0 / k;
            //计算起始点，
            var value = Math.sqrt((Math.pow(points[1].x - points[0].x, 2) + Math.pow(points[1].y - points[0].y, 2)) / 2); //取的点数组中前两个点粗略计算出的一个值
            //此为第一个控制点，此点以后可能会开放出来
            var pointFirst = new _Point2["default"](points[0].x - value, points[0].y - value);
            //初始化一个点数组，存放所有的控制点
            var pointListControl = [];
            //第一个控制点也就是起始点pointFirst
            pointListControl[0] = pointFirst;
            //循环用户传进的点数组
            for (i = 0; i < points.length - 1; i++) {
                //定义一个零时数组，只需要三个元素，后期用于调用贝茨曲线划线（由首尾两个挤出点和中间的控制点组成的）
                var pointList = [];
                //
                pointList[0] = points[i];
                //由前一个控制点和当前的点生成的后一个控制点
                var point = new _Point2["default"](points[i].x * 2 - pointListControl[i].x, points[i].y * 2 - pointListControl[i].y);
                pointList[1] = point;
                pointListControl[i + 1] = point;
                pointList[2] = points[i + 1];
                //将此控制点存起来
                pointListDraw.push(pointList[0]);
                //生成当前曲线中的所有点
                for (j = 0; j <= k; j++) {
                    t1 = j * dt;
                    t2 = t1 * t1;

                    a0 = (t2 - 2 * t1 + 1) / 2.0;
                    a1 = (2 * t1 - 2 * t2 + 1) / 2.0;
                    a2 = t2 / 2.0;

                    t_x = a0 * pointList[0].x + a1 * pointList[1].x + a2 * pointList[2].x;
                    t_y = a0 * pointList[0].y + a1 * pointList[1].y + a2 * pointList[2].y;
                    pointListDraw.push(new _Point2["default"](t_x, t_y));
                }
            }
            //将最后一个用户的点存进去才能达到曲线通过所有的点
            pointListDraw.push(points[points.length - 1]);
            return new LineString(pointListDraw);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier1
         * @description 创建1次贝塞尔曲线。
         * @param points -{Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @param precision - {number} 拆分精度，表示贝塞尔曲线上任意两点间横向或纵向的最大距离。
         *                     决定贝塞尔曲线的平滑程度。取值越小曲线越平滑。取值为大于1的整数。
         * @param part - {number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数。
         * @returns {SuperMap.Geometry.LineString} 几何线对象
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier1(points 20);
         */

    }, {
        key: 'createBezier1',
        value: function createBezier1(points, precision, part) {
            if (part) {
                return LineString.createBezier3(points, part);
            }
            //获取待拆分的点
            var bezierPts = [];
            for (var m = 0; m < points.length; m++) {
                bezierPts[m] = points[m];
            }
            //获取输入点的数量
            var i;
            var k;
            var j = 0;
            var bExit;
            var count = bezierPts.length;
            var ptBuffer = [];
            var ok = true;
            while (ok) {
                bExit = true;
                //贝塞尔分解是按4个点为一组进行的，所以小于4个点就再不进行分解
                for (i = 0; i < count - 3; i += 3) {
                    //对输入点数组进行分解
                    //判断bezierPts[i]到bezierPts[i+4]是否达到精度
                    if (GetBezierGap(bezierPts, i) > precision) {
                        bExit = false;
                        //对未达到精度的bezierPts[i]到bezierPts[i+4]进行计算，得到新的ptBuffer点数组
                        InciseBezier(bezierPts, i, ptBuffer);
                        //去除已使用过的2个控制点
                        bezierPts.splice(i + 1, 2);
                        //将本次计算得到的5个新的点插入到bezierPts[i]位置之后，得到新的bezierPts点数组
                        for (k = 0; k < 5; k++) {
                            bezierPts.splice(i + 1 + k, 0, ptBuffer[k + 1]);
                        }
                        //bezierPts[i]到bezierPts[i+4]没有达到精度，所以不能跳过，i需回归初始
                        i -= 3;
                        count = bezierPts.length;
                    }
                    if (bExit) break;
                }
                //对分解得出的新bezierPts点数组进行优化，除去相同的点
                while (j < count - 1) {
                    if (bezierPts[j] === bezierPts[j + 1]) {
                        bezierPts.splice(j + 1, 1);
                        count--;
                    }
                    j++;
                }
                ok = false;
            }

            return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZ2
         * @description 计算2次贝塞尔曲线的点。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串（必须为三个点）。
         * @param part - {number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数。
         * @returns {Array<SuperMap.Geometry.Point>} 2次贝塞尔曲线的所有点。
         */

    }, {
        key: 'calculatePointsFBZ2',
        value: function calculatePointsFBZ2(points, part) {
            if (!part) part = 20;

            //获取待拆分的点
            var bezierPts = [];
            var scale = 0.05;
            if (part > 0) {
                scale = 1 / part;
            }

            for (var i = 0; i < points.length - 2;) {
                //起始点
                var pointS = points[i];
                //控制点
                var pointC = points[i + 1];
                //结束点
                var pointE = points[i + 2];

                bezierPts.push(pointS);
                for (var t = 0; t < 1;) {
                    //二次贝塞尔曲线公式
                    var x = (1 - t) * (1 - t) * pointS.x + 2 * t * (1 - t) * pointC.x + t * t * pointE.x;
                    var y = (1 - t) * (1 - t) * pointS.y + 2 * t * (1 - t) * pointC.y + t * t * pointE.y;
                    var point = new _Point2["default"](x, y);
                    bezierPts.push(point);
                    t += scale;
                }

                i += 2;
                if (i >= points.length) {
                    bezierPts.push(pointS);
                }
            }

            //需要判定一下最后一个点是否存在
            var poRE = bezierPts[bezierPts.length - 1];
            var popE = points[points.length - 1];
            if (!poRE.equals(popE)) {
                bezierPts.push(popE.clone());
            }

            return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZ3
         * @description 计算3次贝塞尔曲线的点。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串(四个)。
         * @param part - {number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数。
         * @returns {Array<SuperMap.Geometry.Point>} 3次贝塞尔曲线的所有点
         */

    }, {
        key: 'calculatePointsFBZ3',
        value: function calculatePointsFBZ3(points, part) {
            if (!part) part = 20;
            //获取待拆分的点
            var bezierPts = [];
            var scale = 0.05;

            if (part > 0) {
                scale = 1 / part;
            }

            for (var i = 0; i < points.length - 3;) {
                //起始点
                var pointS = points[i];
                //第一个控制点
                var pointC1 = points[i + 1];
                //第二个控制点
                var pointC2 = points[i + 2];
                //结束点
                var pointE = points[i + 3];

                bezierPts.push(pointS);
                for (var t = 0; t < 1;) {
                    //三次贝塞尔曲线公式
                    var x = (1 - t) * (1 - t) * (1 - t) * pointS.x + 3 * t * (1 - t) * (1 - t) * pointC1.x + 3 * t * t * (1 - t) * pointC2.x + t * t * t * pointE.x;
                    var y = (1 - t) * (1 - t) * (1 - t) * pointS.y + 3 * t * (1 - t) * (1 - t) * pointC1.y + 3 * t * t * (1 - t) * pointC2.y + t * t * t * pointE.y;
                    var point = new _Point2["default"](x, y);
                    bezierPts.push(point);
                    t += scale;
                }

                i += 3;
                if (i >= points.length) {
                    bezierPts.push(pointS);
                }
            }

            //需要判定一下最后一个点是否存在
            var poRE = bezierPts[bezierPts.length - 1];
            var popE = points[points.length - 1];
            if (!poRE.equals(popE)) {
                bezierPts.push(popE.clone());
            }
            return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculatePointsFBZN
         * @description 计算N次贝塞尔曲线的插值点。计算N次贝塞尔曲线需要N+1个点也就是传入 points ，得到的是points.length-1次贝塞尔曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @param part - {number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数。
         * @returns {Array<SuperMap.Geometry.Point>} N次贝塞尔曲线的所有点。
         */

    }, {
        key: 'calculatePointsFBZN',
        value: function calculatePointsFBZN(points, part) {
            if (!part) part = points.length * 8;

            //获取待拆分的点
            var bezierPts = [];
            var scale = 0.05;
            if (part > 0) {
                scale = 1 / part;
            }
            for (var t = 0; t <= 1;) {
                var x = 0;
                var y = 0;
                var n = points.length;
                for (var i = 0; i < points.length; i++) {
                    var b = LineString.BEZ(n - 1, i, t);
                    x += points[i].x * b;
                    y += points[i].y * b;
                }
                var point = new _Point2["default"](x, y);
                bezierPts.push(point);
                t += scale;
            }
            //需要判定一下最后一个点是否存在
            var poRE = bezierPts[bezierPts.length - 1];
            var popE = points[points.length - 1];
            if (!poRE.equals(popE)) {
                bezierPts.push(popE.clone());
            }
            return bezierPts;
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier2
         * @description 创建2次贝塞尔曲线。
         * @param points -{Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串（必须为三个点）。
         * @param part -{number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数。
         * @returns {SuperMap.Geometry.LineString} 几何线对象
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier2(points 20);
         */

    }, {
        key: 'createBezier2',
        value: function createBezier2(points, part) {

            var bezierPts = LineString.calculatePointsFBZ2(points, part);
            return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier3
         * @description 创建3次贝塞尔曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。(必须为四个点)。
         * @param precision - {number} 拆分精度，表示贝塞尔曲线上任意两点间横向或纵向的最大距离。
         * @returns {SuperMap.Geometry.LineString} 几何线对象。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier3(points 20);
         */

    }, {
        key: 'createBezier3',
        value: function createBezier3(points, part) {

            var bezierPts = LineString.calculatePointsFBZ3(points, part);
            return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezier
         * @description 创建3次贝塞尔曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @param precision - {number} 拆分精度，表示贝塞尔曲线上任意两点间横向或纵向的最大距离。
         *                     决定贝塞尔曲线的平滑程度。取值越小曲线越平滑。取值为大于1的整数。
         * @returns {SuperMap.Geometry.LineString} 几何线对象。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezier(points1);
         */

    }, {
        key: 'createBezier',
        value: function createBezier(points, precision) {
            //获取待拆分的点
            var bezierPts = [];
            for (var m = 0; m < points.length; m++) {
                bezierPts[m] = points[m];
            }
            //获取输入点的数量
            var i,
                k,
                j = 0,
                bExit,
                count = bezierPts.length;
            var ptBuffer = [];
            while (true) {
                bExit = true;
                //贝塞尔分解是按4个点为一组进行的，所以小于4个点就再不进行分解
                for (i = 0; i < count - 3; i += 3) {
                    //对输入点数组进行分解
                    //判断bezierPts[i]到bezierPts[i+4]是否达到精度
                    if (GetBezierGap(bezierPts, i) > precision) {
                        bExit = false;
                        //对未达到精度的bezierPts[i]到bezierPts[i+4]进行计算，得到新的ptBuffer点数组
                        InciseBezier(bezierPts, i, ptBuffer);
                        //去除已使用过的2个控制点
                        bezierPts.splice(i + 1, 2);
                        //将本次计算得到的5个新的点插入到bezierPts[i]位置之后，得到新的bezierPts点数组
                        for (k = 0; k < 5; k++) {
                            bezierPts.splice(i + 1 + k, 0, ptBuffer[k + 1]);
                        }
                        //bezierPts[i]到bezierPts[i+4]没有达到精度，所以不能跳过，i需回归初始
                        i -= 3;
                        count = bezierPts.length;
                    }
                    if (bExit) break;
                }
                //对分解得出的新bezierPts点数组进行优化，除去相同的点
                while (j < count - 1) {
                    if (bezierPts[j] === bezierPts[j + 1]) {
                        bezierPts.splice(j + 1, 1);
                        count--;
                    }
                    j++;
                }
                //返回分解完成的新的bezierPts点数组
                return new LineString(bezierPts);
            }
        }

        /**
         * @function SuperMap.Geometry.LineString.createBezierN
         * @description 创建N次贝塞尔曲线。创建N次贝塞尔曲线需要N+1个点也就是传入 points ，得到的是points.length-1次贝塞尔曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @param part - {number} 平滑度。取值越大，曲线越平滑。取值为大于1的整数，默认为20。
         * @returns {SuperMap.Geometry.LineString} 几何线对象。
         * @example
         * //创建3次贝塞尔曲线
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezierN(points 20);
         * //创建4次贝塞尔曲线
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         * points.push(new SuperMap.Geometry.Point(5020));
         *
         * var bezier = SuperMap.Geometry.LineString.createBezierN(points 30);
         * ......
         */

    }, {
        key: 'createBezierN',
        value: function createBezierN(points, part) {
            var bezierPts = LineString.calculatePointsFBZN(points, part);
            return new LineString(bezierPts);
        }

        /**
         * @function SuperMap.Geometry.LineString.BEZ
         * @description 基函数。
         * @param n -{number}
         * @param k -{number}
         * @param t -{number} 0-1之间的一个数。
         * @returns {number} 基函数的值。
         *
         */

    }, {
        key: 'BEZ',
        value: function BEZ(n, k, t) {
            return LineString.combSort(n, k) * Math.pow(t, k) * Math.pow(1 - t, n - k);
        }

        /**
         * @function SuperMap.Geometry.LineString.combSort
         * @description 组合排序计算从1*2*...*n/(1*2*...*k*1*2*...*(n-k))的值。
         * @param n -{number} 贝塞尔曲线的次数n。
         * @param k -{number} 小于N的一个数k。
         * @returns {number} 组合排序的值。
         *
         */

    }, {
        key: 'combSort',
        value: function combSort(n, k) {
            var son = LineString.factorial(n);
            var mother = LineString.factorial(k) * LineString.factorial(n - k);
            return son / mother;
        }

        /**
         * @function SuperMap.Geometry.LineString.factorial
         * @description 阶乘计算从1*2*3*4*...*n的值。
         * @param n - {number}
         * @returns {number} 阶乘的值。
         *
         */

    }, {
        key: 'factorial',
        value: function factorial(n) {
            var result = 1;
            for (var i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculateCardinalPoints
         * @description 创建Cardinal控制点。
         * 利用输入的点数组计算出相应的Cardinal控制点，再使用贝塞尔曲线3创建经过所有Cardinal控制点的圆滑曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @returns {Array<SuperMap.Geometry.Point>} 计算出相应的Cardinal控制点。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var cardinal = SuperMap.Geometry.LineString.createCloseCardinal(points);
         */

    }, {
        key: 'calculateCardinalPoints',
        value: function calculateCardinalPoints(points) {
            if (points == null || points.length < 3) {
                return points;
            }
            //定义传入的点数组，将在点数组中央（每两个点）插入两个控制点
            var cPoints = points;
            //包含输入点和控制点的数组
            var cardinalPoints = [];

            //这些都是相关资料测出的经验数值
            //定义张力系数，取值在0<t<0.5
            var t = 0.4;
            //为端点张力系数因子，取值在0<b<1
            var b = 0.5;
            //误差控制，是一个大于等于0的数，用于三点非常趋近与一条直线时，减少计算量
            var e = 0.005;

            //传入的点数量，至少有三个，n至少为2
            var n = cPoints.length - 1;
            //从开始遍历到倒数第二个，其中倒数第二个用于计算起点（终点）的插值控制点

            for (var k = 0; k <= n + 1 - 3; k++) {
                //三个基础输入点
                var p0 = cPoints[k];
                var p1 = cPoints[k + 1];
                var p2 = cPoints[k + 2];
                //定义p1的左控制点和右控制点
                var p1l = new _Point2["default"]();
                var p1r = new _Point2["default"]();
                //通过p0、p1、p2计算p1点的做控制点p1l和又控制点p1r
                //计算向量p0_p1和p1_p2
                var p0_p1 = new _Point2["default"](p1.x - p0.x, p1.y - p0.y);
                var p1_p2 = new _Point2["default"](p2.x - p1.x, p2.y - p1.y);
                //并计算模
                var d01 = Math.sqrt(p0_p1.x * p0_p1.x + p0_p1.y * p0_p1.y);
                var d12 = Math.sqrt(p1_p2.x * p1_p2.x + p1_p2.y * p1_p2.y);
                //向量单位化
                var p0_p1_1 = new _Point2["default"](p0_p1.x / d01, p0_p1.y / d01);
                var p1_p2_1 = new _Point2["default"](p1_p2.x / d12, p1_p2.y / d12);
                //计算向量p0_p1和p1_p2的夹角平分线向量
                var p0_p1_p2 = new _Point2["default"](p0_p1_1.x + p1_p2_1.x, p0_p1_1.y + p1_p2_1.y);
                //计算向量 p0_p1_p2 的模
                var d012 = Math.sqrt(p0_p1_p2.x * p0_p1_p2.x + p0_p1_p2.y * p0_p1_p2.y);
                //单位化向量p0_p1_p2
                var p0_p1_p2_1 = new _Point2["default"](p0_p1_p2.x / d012, p0_p1_p2.y / d012);
                //判断p0、p1、p2是否共线，这里判定向量p0_p1和p1_p2的夹角的余弦和1的差值小于e就认为三点共线
                var cosE_p0p1p2 = (p0_p1_1.x * p1_p2_1.x + p0_p1_1.y * p1_p2_1.y) / 1;
                //共线
                if (Math.abs(1 - cosE_p0p1p2) < e) {
                    //计算p1l的坐标
                    p1l.x = p1.x - p1_p2_1.x * d01 * t;
                    p1l.y = p1.y - p1_p2_1.y * d01 * t;
                    //计算p1r的坐标
                    p1r.x = p1.x + p0_p1_1.x * d12 * t;
                    p1r.y = p1.y + p0_p1_1.y * d12 * t;
                }
                //非共线
                else {
                        //计算p1l的坐标
                        p1l.x = p1.x - p0_p1_p2_1.x * d01 * t;
                        p1l.y = p1.y - p0_p1_p2_1.y * d01 * t;
                        //计算p1r的坐标
                        p1r.x = p1.x + p0_p1_p2_1.x * d12 * t;
                        p1r.y = p1.y + p0_p1_p2_1.y * d12 * t;
                    }
                //记录下这三个控制点
                cardinalPoints[k * 3 + 2 + 0] = p1l;
                cardinalPoints[k * 3 + 2 + 1] = p1;
                cardinalPoints[k * 3 + 2 + 2] = p1r;

                //当为起始点时需要计算第一个点的右控制点
                if (k == 0) {
                    //定义p0的右控制点
                    var p0r = new _Point2["default"]();

                    //计算向量p0_p1l
                    var po_p1l = new _Point2["default"](p1l.x - p0.x, p1l.y - p0.y);
                    //计算模
                    var d01l = Math.sqrt(po_p1l.x * po_p1l.x + po_p1l.y * po_p1l.y);
                    //单位化
                    var po_p1l_1 = new _Point2["default"](po_p1l.x / d01l, po_p1l.y / d01l);
                    //计算p0r
                    p0r.x = p0.x + po_p1l_1.x * d01 * t * b;
                    p0r.y = p0.y + po_p1l_1.y * d01 * t * b;

                    cardinalPoints[k * 3 + 0] = p0;
                    cardinalPoints[k * 3 + 1] = p0r;
                }
                //当为倒数第三个点时需要计算最后点的左控制点
                if (k == n + 1 - 3) {
                    //定义 p2的做控制点p2l
                    var p2l = new _Point2["default"]();

                    //计算向量p2_p1r
                    var p2_p1r = new _Point2["default"](p1r.x - p2.x, p1r.y - p2.y);
                    //并取模
                    var d21r = Math.sqrt(p2_p1r.x * p2_p1r.x + p2_p1r.y * p2_p1r.y);
                    //单位化
                    var p2_p1r_1 = new _Point2["default"](p2_p1r.x / d21r, p2_p1r.y / d21r);
                    //计算p2l
                    p2l.x = p2.x + p2_p1r_1.x * d12 * t * b;
                    p2l.y = p2.y + p2_p1r_1.y * d12 * t * b;

                    cardinalPoints[k * 3 + 2 + 3] = p2l;
                    cardinalPoints[k * 3 + 2 + 4] = p2;
                }
            }
            return cardinalPoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.createCloseCardinal
         * @description 创建闭合Cardinal的控制点。利用输入的点数组计算出相应的Cardinal控制点，再使用贝塞尔曲线3创建经过所有Cardinal控制点的圆滑闭合曲线。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @returns {Array<SuperMap.Geometry.Point>} 计算出相应的Cardinal控制点。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var cardinal = SuperMap.Geometry.LineString.createCloseCardinal(points);
         */

    }, {
        key: 'createCloseCardinal',
        value: function createCloseCardinal(points) {
            if (points == null || points.length < 3) {
                return points;
            }
            //获取起点，作为终点，以闭合曲线。
            var lastP = points[0];
            points.push(lastP);

            //定义传入的点数组，将在点数组中央（每两个点）插入两个控制点
            var cPoints = points;
            //包含输入点和控制点的数组
            var cardinalPoints = [];

            //至少三个点以上
            //这些都是相关资料测出的经验数值
            //定义张力系数，取值在0<t<0.5
            var t = 0.4;
            //为端点张力系数因子，取值在0<b<1
            var b = 0.5;
            //误差控制，是一个大于等于0的数，用于三点非常趋近与一条直线时，减少计算量
            var e = 0.005;

            //传入的点数量，至少有三个，n至少为2
            var n = cPoints.length - 1;
            //从开始遍历到倒数第二个，其中倒数第二个用于计算起点（终点）的插值控制点
            for (var k = 0; k <= n - 1; k++) {
                //计算起点（终点）的左右控制点
                if (k == n - 1) {
                    //三个基础输入点
                    var p0 = cPoints[n - 1];
                    var p1 = cPoints[0];
                    var p2 = cPoints[1];
                } else {
                    var p0 = cPoints[k];
                    var p1 = cPoints[k + 1];
                    var p2 = cPoints[k + 2];
                }

                //定义p1的左控制点和右控制点
                var p1l = new _Point2["default"]();
                var p1r = new _Point2["default"]();
                //通过p0、p1、p2计算p1点的做控制点p1l和又控制点p1r
                //计算向量p0_p1和p1_p2
                var p0_p1 = new _Point2["default"](p1.x - p0.x, p1.y - p0.y);
                var p1_p2 = new _Point2["default"](p2.x - p1.x, p2.y - p1.y);
                //并计算模
                var d01 = Math.sqrt(p0_p1.x * p0_p1.x + p0_p1.y * p0_p1.y);
                var d12 = Math.sqrt(p1_p2.x * p1_p2.x + p1_p2.y * p1_p2.y);
                //向量单位化
                var p0_p1_1 = new _Point2["default"](p0_p1.x / d01, p0_p1.y / d01);
                var p1_p2_1 = new _Point2["default"](p1_p2.x / d12, p1_p2.y / d12);
                //计算向量p0_p1和p1_p2的夹角平分线向量
                var p0_p1_p2 = new _Point2["default"](p0_p1_1.x + p1_p2_1.x, p0_p1_1.y + p1_p2_1.y);
                //计算向量 p0_p1_p2 的模
                var d012 = Math.sqrt(p0_p1_p2.x * p0_p1_p2.x + p0_p1_p2.y * p0_p1_p2.y);
                //单位化向量p0_p1_p2
                var p0_p1_p2_1 = new _Point2["default"](p0_p1_p2.x / d012, p0_p1_p2.y / d012);
                //判断p0、p1、p2是否共线，这里判定向量p0_p1和p1_p2的夹角的余弦和1的差值小于e就认为三点共线
                var cosE_p0p1p2 = (p0_p1_1.x * p1_p2_1.x + p0_p1_1.y * p1_p2_1.y) / 1;
                //共线
                if (Math.abs(1 - cosE_p0p1p2) < e) {
                    //计算p1l的坐标
                    p1l.x = p1.x - p1_p2_1.x * d01 * t;
                    p1l.y = p1.y - p1_p2_1.y * d01 * t;
                    //计算p1r的坐标
                    p1r.x = p1.x + p0_p1_1.x * d12 * t;
                    p1r.y = p1.y + p0_p1_1.y * d12 * t;
                }
                //非共线
                else {
                        //计算p1l的坐标
                        p1l.x = p1.x - p0_p1_p2_1.x * d01 * t;
                        p1l.y = p1.y - p0_p1_p2_1.y * d01 * t;
                        //计算p1r的坐标
                        p1r.x = p1.x + p0_p1_p2_1.x * d12 * t;
                        p1r.y = p1.y + p0_p1_p2_1.y * d12 * t;
                    }

                //记录起点（终点）的左右插值控制点及倒数第二个控制点
                if (k == n - 1) {
                    cardinalPoints[0] = p1;
                    cardinalPoints[1] = p1r;
                    cardinalPoints[(n - 2) * 3 + 2 + 3] = p1l;
                    cardinalPoints[(n - 2) * 3 + 2 + 4] = cPoints[n];
                } else {
                    //记录下这三个控制点
                    cardinalPoints[k * 3 + 2 + 0] = p1l;
                    cardinalPoints[k * 3 + 2 + 1] = p1;
                    cardinalPoints[k * 3 + 2 + 2] = p1r;
                }
            }
            return cardinalPoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.calculateCircle
         * @description 三点画圆弧。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @returns {Array<SuperMap.Geometry.Point>} 计算出相应的圆弧控制点。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050));
         * points.push(new SuperMap.Geometry.Point(260));
         *
         * var circle = SuperMap.Geometry.LineString.calculateCircle(points);
         */

    }, {
        key: 'calculateCircle',
        value: function calculateCircle(points) {
            if (points.length < 3) {
                return points;
            }
            var len = points.length,
                centerPoint = {},
                p1 = points[0],
                p2 = points[1],
                p3 = points[2];
            var R = 0,
                dStep = 0,
                direc = true,
                dRotation = 0,
                dRotationBegin = 0,
                dRotationAngle = 0,
                nSegmentCount = 72,
                centerPoint = {},
                circlePoints = [];

            var KTan13 = (p3.y - p1.y) / (p3.x - p1.x);
            var B13 = p3.y - KTan13 * p3.x;
            if (p3.x != p1.x && p3.y != p1.y && p2.y == KTan13 * p2.x + B13 || p3.x == p1.x && p2.x == p1.x || p3.y == p1.y && p2.y == p1.y || p3.x == p1.x && p3.y == p1.y || p3.x == p2.x && p3.y == p2.y || p1.x == p2.x && p1.y == p2.y) {
                circlePoints.push(p1);
                circlePoints.push(p2);
                circlePoints.push(p3);
            } else {
                var D = (p2.x * p2.x + p2.y * p2.y - (p1.x * p1.x + p1.y * p1.y)) * (2 * (p3.y - p1.y)) - (p3.x * p3.x + p3.y * p3.y - (p1.x * p1.x + p1.y * p1.y)) * (2 * (p2.y - p1.y));
                var E = 2 * (p2.x - p1.x) * (p3.x * p3.x + p3.y * p3.y - (p1.x * p1.x + p1.y * p1.y)) - 2 * (p3.x - p1.x) * (p2.x * p2.x + p2.y * p2.y - (p1.x * p1.x + p1.y * p1.y));
                var F = 4 * ((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y));
                centerPoint.x = D / F;
                centerPoint.y = E / F;
                R = Math.sqrt((p1.x - centerPoint.x) * (p1.x - centerPoint.x) + (p1.y - centerPoint.y) * (p1.y - centerPoint.y));

                var dis = (p1.x - p3.x) * (p1.x - p3.x) + (p1.y - p3.y) * (p1.y - p3.y);
                var cons = (2 * R * R - dis) / (2 * R * R);
                cons = cons >= 1 ? 1 : cons;
                cons = cons <= -1 ? -1 : cons;
                dRotationAngle = Math.acos(cons) * 180 / Math.PI;

                if (p3.x == p1.x) {
                    dRotationAngle = centerPoint.x > p1.x && p2.x > p1.x || centerPoint.x < p1.x && p2.x < p1.x ? 360 - dRotationAngle : dRotationAngle;
                } else {
                    dRotationAngle = centerPoint.y > KTan13 * centerPoint.x + B13 && p2.y > KTan13 * p2.x + B13 || centerPoint.y < KTan13 * centerPoint.x + B13 && p2.y < KTan13 * p2.x + B13 ? 360 - dRotationAngle : dRotationAngle;
                }
                dStep = dRotationAngle / 72;

                if (p3.y != p1.y) {
                    if (p3.x == p1.x) {
                        if (p3.y > p1.y) {
                            if (p2.x < p1.x) {
                                direc = false;
                            }
                        } else {
                            if (p2.x > p1.x) {
                                direc = false;
                            }
                        }
                    } else if (p3.x < p1.x) {
                        if (p2.y < KTan13 * p2.x + B13) {
                            direc = false;
                        }
                    } else {
                        if (p2.y > KTan13 * p2.x + B13) {
                            direc = false;
                        }
                    }
                } else {
                    if (p3.x > p1.x) {
                        if (p2.y > p1.y) {
                            direc = false;
                        }
                    } else {
                        if (p2.y < p1.y) {
                            direc = false;
                        }
                    }
                }

                var K10 = (p1.y - centerPoint.y) / (p1.x - centerPoint.x);
                var atan10 = K10 >= 0 ? Math.atan(K10) * 180 / Math.PI : Math.abs(Math.atan(K10) * 180 / Math.PI) + 90;

                var CY = Math.abs(centerPoint.y);
                if (p1.y == CY && CY == p3.y) {
                    if (p1.x < p3.x) {
                        atan10 = atan10 + 180;
                    }
                }

                var newPY = p1.y - centerPoint.y;
                circlePoints.push(p1);
                for (var i = 1; i < nSegmentCount; i++) {
                    dRotation = dStep * i;
                    dRotationBegin = atan10;

                    if (direc) {
                        if (newPY >= 0) {
                            if (K10 >= 0) {
                                dRotationBegin = dRotationBegin + dRotation;
                            } else {
                                dRotationBegin = 180 - (dRotationBegin - 90) + dRotation;
                            }
                        } else {
                            if (K10 > 0) {
                                dRotationBegin = dRotationBegin - 180 + dRotation;
                            } else {
                                dRotationBegin = 90 - dRotationBegin + dRotation;
                            }
                        }
                    } else {
                        if (newPY >= 0) {
                            if (K10 >= 0) {
                                dRotationBegin = dRotationBegin - dRotation;
                            } else {
                                dRotationBegin = 180 - (dRotationBegin - 90) - dRotation;
                            }
                        } else {
                            if (K10 >= 0) {
                                dRotationBegin = dRotationBegin - 180 - dRotation;
                            } else {
                                dRotationBegin = 90 - dRotationBegin - dRotation;
                            }
                        }
                    }

                    dRotationBegin = dRotationBegin * Math.PI / 180;
                    var x = centerPoint.x + R * Math.cos(dRotationBegin);
                    var y = centerPoint.y + R * Math.sin(dRotationBegin);
                    circlePoints.push(new _Point2["default"](x, y));
                }
                circlePoints.push(p3);
            }
            return circlePoints;
        }

        /**
         * @function SuperMap.Geometry.LineString.createLineEPS
         * @description 根据点的类型画出不同类型的曲线。点的类型有三种 LTypeArc LTypeCurve NONE。
         * @param points - {Array<SuperMap.Geometry.Point>} 传入的待计算的初始点串。
         * @returns {Array<SuperMap.Geometry.Point>} 计算出相应的lineEPS控制点。
         * @example
         * var points = [];
         * points.push(new SuperMap.Geometry.Point(-5030));
         * points.push(new SuperMap.Geometry.Point(-3050"LTypeArc"));
         * points.push(new SuperMap.Geometry.Point(260));
         * points.push(new SuperMap.Geometry.Point(820));
         *
         * var lineEPS = SuperMap.Geometry.LineString.createLineEPS(points);
         */

    }, {
        key: 'createLineEPS',
        value: function createLineEPS(points) {
            var list = [],
                part = 0,
                len = points.length;
            if (points == null || len < 2) {
                return points;
            }
            for (var i = 0; i < len;) {
                var type = points[i].type;
                if (type == 'LTypeArc') {
                    var listObj = LineString.createLineArc(list, i, len, points);
                    list = listObj[0];
                    i = listObj[1];
                } else {
                    list.push(points[i]);
                    i++;
                }
            }
            return list;
        }
    }, {
        key: 'createLineArc',
        value: function createLineArc(list, i, len, points) {
            if (i == 0) {
                var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeArc');
                Array.prototype.push.apply(list, bezierPtsObj[0]);
                i = bezierPtsObj[1] + 1;
            } else if (i == len - 1) {
                var bezierP = [points[i - 1], points[i]],
                    bezierPts = LineString.calculateCircle(bezierP);
                Array.prototype.push.apply(list, bezierPts);
                i++;
            } else {
                var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeArc');
                list.pop();
                Array.prototype.push.apply(list, bezierPtsObj[0]);
                i = bezierPtsObj[1] + 1;
            }
            return [list, i];
        }
    }, {
        key: 'createLineCurve',
        value: function createLineCurve(list, i, len, points) {
            if (i == 0) {
                var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeCurve');
                Array.prototype.push.apply(list, bezierPtsObj[0]);
                i = bezierPtsObj[1] + 1;
            } else if (i == len - 1) {
                var bezierP = [points[i - 1], points[i]],
                    bezierPts = LineString.calculatePointsFBZN(bezierP);
                Array.prototype.push.apply(list, bezierPts);
                i++;
            } else {
                var bezierPtsObj = LineString.addPointEPS(points, i, len, 'LTypeCurve');
                list.pop();
                Array.prototype.push.apply(list, bezierPtsObj[0]);
                i = bezierPtsObj[1] + 1;
            }
            return [list, i];
        }
    }, {
        key: 'addPointEPS',
        value: function addPointEPS(points, i, len, type) {
            var bezierP = [],
                j = i + 1;
            if (i == 0) {
                Array.prototype.push.apply(bezierP, [points[i], points[i + 1]]);
            } else if (i == len - 1) {
                Array.prototype.push.apply(bezierP, [points[i - 1], points[i]]);
            } else {
                Array.prototype.push.apply(bezierP, [points[i - 1], points[i], points[i + 1]]);
            }
            if (type == 'LTypeCurve') {
                var bezierPts = LineString.calculatePointsFBZN(bezierP);
            } else if (type == 'LTypeArc') {
                var bezierPts = LineString.calculateCircle(bezierP);
            }
            return [bezierPts, j];
        }
    }]);

    return LineString;
}(_Curve3["default"]);

exports["default"] = LineString;


_SuperMap2["default"].Geometry.LineString = LineString;

/**
 * @private
 * @function InciseBezier
 * 拆分贝赛尔曲线单元
 *
 * pSrcPt -{Array<SuperMap.Geometry.Point>} 传入的待拆分点数组。
 * j - {number} 本次拆分的首点位置，从pSrcPt[j]（包括此点）点向后取4个点进行本次拆分。
 * pDstPt -{Array<SuperMap.Geometry.Point>} 将4个点拆分成7个点，pDstPt是包含此7个点的结果点数组。
 */
function InciseBezier(pSrcPt, j, pDstPt) {
    var buffer = [];
    buffer[0] = [];
    buffer[1] = [];
    buffer[2] = [];
    var i;
    for (i = 0; i < 3; i++) {
        buffer[0][i] = new _Point2["default"]();
        buffer[0][i].x = (pSrcPt[j + i].x + pSrcPt[j + i + 1].x) / 2;
        buffer[0][i].y = (pSrcPt[j + i].y + pSrcPt[j + i + 1].y) / 2;
    }
    for (i = 0; i < 2; i++) {
        buffer[1][i] = new _Point2["default"]();
        buffer[1][i].x = (buffer[0][i].x + buffer[0][i + 1].x) / 2;
        buffer[1][i].y = (buffer[0][i].y + buffer[0][i + 1].y) / 2;
    }

    buffer[2][0] = new _Point2["default"]();
    buffer[2][0].x = (buffer[1][0].x + buffer[1][1].x) / 2;
    buffer[2][0].y = (buffer[1][0].y + buffer[1][1].y) / 2;
    //将输入的四个点拆分成7个点
    pDstPt[0] = pSrcPt[j];
    pDstPt[1] = buffer[0][0];
    pDstPt[2] = buffer[1][0];
    pDstPt[3] = buffer[2][0];
    pDstPt[4] = buffer[1][1];
    pDstPt[5] = buffer[0][2];
    pDstPt[6] = pSrcPt[j + 3];
    return true;
}

/**
 * @private
 * @function SuperMap.Geometry.LineString.GetBezierGap
 * @description 计算贝赛尔曲线两个顶点的纵向和横向的最大距离，结果用来判断是否达到拆分精度。
 * @param pSrcPt {Array<SuperMap.Geometry.Point>} 传入的待拆分点数组。
 * @param j {number} 本次拆分的首点位置，从pSrcPt[j]（包括此点）点向后取4个点进行距离计算。
 */
function GetBezierGap(pSrcPt, j) {
    var gap = 0;
    for (var i = 1; i < 4; i++) {
        if (Math.abs(pSrcPt[j + i].x - pSrcPt[j + i - 1].x) > gap) gap = Math.abs(pSrcPt[j + i].x - pSrcPt[j + i - 1].x);
        if (Math.abs(pSrcPt[j + i].y - pSrcPt[j + i - 1].y) > gap) gap = Math.abs(pSrcPt[j + i].y - pSrcPt[j + i - 1].y);
    }
    return gap;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var sign = __webpack_require__(16);

module.exports = function(x) {
  return (Math.abs(x) < HALF_PI) ? x : (x - (sign(x) * Math.PI));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (0.05859375 * x * x * (1 + 0.75 * x));
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return (x * x * x * (35 / 3072));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(e0, e1, e2, e3, phi) {
  return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(x) {
  return x<0 ? -1 : 1;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Collection = __webpack_require__(4);

var _Collection2 = _interopRequireDefault(_Collection);

var _LineString2 = __webpack_require__(9);

var _LineString3 = _interopRequireDefault(_LineString2);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _BaseTypes = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class  SuperMap.Geometry.LinearRing
 * @classdesc 几何对象线环类，是一个特殊的封闭的线串，在每次addPoint/removePoint之后会通过添加一个点（此点是复制的第一个点得到的）
 *             作为最后的一个点来自动关闭线环。
 * @extends {SuperMap.Geometry.LineString}
 * @param points {Array<SuperMap.Geometry.Point>} 组成线性环的点。
 * @example
 * var points = [new SuperMap.Geometry.Point(4933.319287022352, -3337.3849141502124),
 *      new SuperMap.Geometry.Point(4960.9674060199022, -3349.3316322355736),
 *      new SuperMap.Geometry.Point(5006.0235999418364, -3358.8890067038628),
 *      new SuperMap.Geometry.Point(5075.3145648369318, -3378.0037556404409),
 *      new SuperMap.Geometry.Point(5305.19551436013, -3376.9669111768926)],
 * var linearRing = new SuperMap.Geometry.LinearRing(points);
 */
var LinearRing = function (_LineString) {
    _inherits(LinearRing, _LineString);

    function LinearRing(points) {
        _classCallCheck(this, LinearRing);

        var _this = _possibleConstructorReturn(this, (LinearRing.__proto__ || Object.getPrototypeOf(LinearRing)).call(this, points));

        _this.componentTypes = ["SuperMap.Geometry.Point"];
        _this.CLASS_NAME = "SuperMap.Geometry.LinearRing";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.LinearRing.prototype.addComponent
     * @description 添加一个点到几何图形数组中，如果这个点将要被添加到组件数组的末端，并且与数组中已经存在的最后一个点相同，
     *                重复的点是不能被添加的。这将影响未关闭环的关闭。这个方法可以通过将非空索引（组件数组的下标）作为第二个参数重写。
     * @param point {SuperMap.Geometry.Point} 点对象。
     * @param index {integer} 插入组件数组的下标。
     * @returns {boolean} 点对象是否添加成功。
     */


    /**
     * @member SuperMap.Geometry.LinearRing.prototype.componentTypes - {Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.Point}"]
     */


    _createClass(LinearRing, [{
        key: 'addComponent',
        value: function addComponent(point, index) {
            var added = false;

            //remove last point
            var lastPoint = this.components.pop();

            // given an index, add the point
            // without an index only add non-duplicate points
            if (index != null || !point.equals(lastPoint)) {
                added = _Collection2["default"].prototype.addComponent.apply(this, arguments);
            }

            //append copy of first point
            var firstPoint = this.components[0];
            _Collection2["default"].prototype.addComponent.apply(this, [firstPoint]);

            return added;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.removeComponent
         * @description 从几何组件中删除一个点。
         * @param point {SuperMap.Geometry.Point} 点对象。
         * @returns {boolean} 点对象是否删除。
         */

    }, {
        key: 'removeComponent',
        value: function removeComponent(point) {
            var removed = this.components && this.components.length > 3;
            if (removed) {
                //remove last point
                this.components.pop();

                //remove our point
                _Collection2["default"].prototype.removeComponent.apply(this, arguments);
                //append copy of first point
                var firstPoint = this.components[0];
                _Collection2["default"].prototype.addComponent.apply(this, [firstPoint]);
            }
            return removed;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.move
         * @description 沿着给定的x、y轴正方向按照给定的位移移动一个几何图形，move 不仅改变了几何图形的位置并且清理了边界缓存。
         * @param x {float} x轴正方向上的偏移量。
         * @param y {float} y轴正方向上的偏移量。
         */

    }, {
        key: 'move',
        value: function move(x, y) {
            for (var i = 0, len = this.components.length; i < len - 1; i++) {
                this.components[i].move(x, y);
            }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.rotate
         * @description 围绕中心点旋转几何图形。
         * @param angle {float} 旋转角的度数（沿着x轴正方向的逆时针方向）。
         * @param origin {SuperMap.Geometry.Point} 旋转中心点。
         */

    }, {
        key: 'rotate',
        value: function rotate(angle, origin) {
            for (var i = 0, len = this.components.length; i < len - 1; ++i) {
                this.components[i].rotate(angle, origin);
            }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.resize
         * @description 调整几何对象的大小。
         * @param scale - {float} 几何图形缩放的比例系数，是几何图形维数的两倍。（如：对于线来说将以线2倍的长度拉长，对于多边形来说，将以面积的4倍变化）。
         * @param origin {SuperMap.Geometry.Point} 调整大小选定的起始原点。
         * @param ratio {float} 可选的xy的比例，默认的比例为1。
         * @returns {SuperMap.Geometry} 当前的几何对象。
         */

    }, {
        key: 'resize',
        value: function resize(scale, origin, ratio) {
            for (var i = 0, len = this.components.length; i < len - 1; ++i) {
                this.components[i].resize(scale, origin, ratio);
            }
            return this;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getCentroid
         * @description 获取几何对象的质心。
         * @returns {SuperMap.Geometry.Point} 几何图形的质心。
         */

    }, {
        key: 'getCentroid',
        value: function getCentroid() {
            if (this.components) {
                var len = this.components.length;
                if (len > 0 && len <= 2) {
                    return this.components.clone();
                } else if (len > 2) {
                    var sumX = 0.0;
                    var sumY = 0.0;
                    var x0 = this.components[0].x;
                    var y0 = this.components[0].y;
                    var area = -1 * this.getArea();
                    if (area != 0) {
                        for (var i = 0; i < len - 1; i++) {
                            var b = this.components[i];
                            var c = this.components[i + 1];
                            sumX += (b.x + c.x - 2 * x0) * ((b.x - x0) * (c.y - y0) - (c.x - x0) * (b.y - y0));
                            sumY += (b.y + c.y - 2 * y0) * ((b.x - x0) * (c.y - y0) - (c.x - x0) * (b.y - y0));
                        }
                        var x = x0 + sumX / (6 * area);
                        var y = y0 + sumY / (6 * area);
                    } else {
                        for (var i = 0; i < len - 1; i++) {
                            sumX += this.components[i].x;
                            sumY += this.components[i].y;
                        }
                        var x = sumX / (len - 1);
                        var y = sumY / (len - 1);
                    }
                    return new _Point2["default"](x, y);
                } else {
                    return null;
                }
            }
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getArea
         * @description 获得当前几何对象区域大小，如果是沿顺时针方向的环则是正值，否则为负值。
         * @returns {float} 环的面积。
         */

    }, {
        key: 'getArea',
        value: function getArea() {
            var area = 0.0;
            if (this.components && this.components.length > 2) {
                var sum = 0.0;
                for (var i = 0, len = this.components.length; i < len - 1; i++) {
                    var b = this.components[i];
                    var c = this.components[i + 1];
                    sum += (b.x + c.x) * (c.y - b.y);
                }
                area = -sum / 2.0;
            }
            return area;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.containsPoint
         * @description 判断点是否在线环上，是返回1，不是返回0。
         * @param point {SuperMap.Geometry.Point}
         * @returns {boolean | number} 点是否在线环上。
         */

    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            var approx = _BaseTypes.NumberExt.limitSigDigs;
            var digs = 14;
            var px = approx(point.x, digs);
            var py = approx(point.y, digs);

            function getX(y, x1, y1, x2, y2) {
                return (y - y2) * ((x2 - x1) / (y2 - y1)) + x2;
            }

            var numSeg = this.components.length - 1;
            var start, end, x1, y1, x2, y2, cx, cy;
            var crosses = 0;
            for (var i = 0; i < numSeg; ++i) {
                start = this.components[i];
                x1 = approx(start.x, digs);
                y1 = approx(start.y, digs);
                end = this.components[i + 1];
                x2 = approx(end.x, digs);
                y2 = approx(end.y, digs);

                /**
                 * The following conditions enforce five edge-crossing rules:
                 *    1. points coincident with edges are considered contained;
                 *    2. an upward edge includes its starting endpoint, and
                 *    excludes its final endpoint;
                 *    3. a downward edge excludes its starting endpoint, and
                 *    includes its final endpoint;
                 *    4. horizontal edges are excluded; and
                 *    5. the edge-ray intersection point must be strictly right
                 *    of the point P.
                 */
                if (y1 === y2) {
                    // horizontal edge
                    if (py === y1) {
                        // point on horizontal line
                        if (x1 <= x2 && px >= x1 && px <= x2 || // right or vert
                        x1 >= x2 && px <= x1 && px >= x2) {
                            // left or vert
                            // point on edge
                            crosses = -1;
                            break;
                        }
                    }
                    // ignore other horizontal edges
                    continue;
                }
                cx = approx(getX(py, x1, y1, x2, y2), digs);
                if (cx === px) {
                    // point on line
                    if (y1 < y2 && py >= y1 && py <= y2 || // upward
                    y1 > y2 && py <= y1 && py >= y2) {
                        // downward
                        // point on edge
                        crosses = -1;
                        break;
                    }
                }
                if (cx <= px) {
                    // no crossing to the right
                    continue;
                }
                if (x1 !== x2 && (cx < Math.min(x1, x2) || cx > Math.max(x1, x2))) {
                    // no crossing
                    continue;
                }
                if (y1 < y2 && py >= y1 && py < y2 || // upward
                y1 > y2 && py < y1 && py >= y2) {
                    // downward
                    ++crosses;
                }
            }
            var contained = crosses === -1 ?
            // on edge
            1 :
            // even (out) or odd (in)
            !!(crosses & 1);

            return contained;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.intersects
         * @description 判断输入的几何图形是否与当前几何图形相交。
         * @param geometry {SuperMap.Geometry} 任意的几何对象。
         * @returns {boolean} 输入几何图形与当前的目标几何图形相交。
         */

    }, {
        key: 'intersects',
        value: function intersects(geometry) {
            var intersect = false;
            if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
                intersect = this.containsPoint(geometry);
            } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LineString") {
                intersect = geometry.intersects(this);
            } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LinearRing") {
                intersect = _LineString3["default"].prototype.intersects.apply(this, [geometry]);
            } else {
                // check for component intersections
                for (var i = 0, len = geometry.components.length; i < len; ++i) {
                    intersect = geometry.components[i].intersects(this);
                    if (intersect) {
                        break;
                    }
                }
            }
            return intersect;
        }

        /**
         * @function SuperMap.Geometry.LinearRing.prototype.getVertices
         * @description 返回几何图形的所有点的列表。
         * @param nodes {boolean} 对于线来说，仅仅返回作为端点的顶点，如果设为false，则返回非端点的顶点。如果没有设置此参数，则返回所有顶点。
         * @returns {Array} 几何对象所有点的列表。
         */

    }, {
        key: 'getVertices',
        value: function getVertices(nodes) {
            return nodes === true ? [] : this.components.slice(0, this.components.length - 1);
        }
    }]);

    return LinearRing;
}(_LineString3["default"]);

exports["default"] = LinearRing;

_SuperMap2["default"].Geometry.LinearRing = LinearRing;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;
module.exports = function(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = HALF_PI - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = HALF_PI - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;

module.exports = function(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow(((1 - con) / (1 + con)), com);
  return (Math.tan(0.5 * (HALF_PI - phi)) / con);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Collection2 = __webpack_require__(4);

var _Collection3 = _interopRequireDefault(_Collection2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.MultiPoint
 * @classdesc 几何对象多点类。
 * @extends {SuperMap.Geometry.Collection}
 * @param components - {Array<SuperMap.Geometry.Point>} 点对象数组。
 * @example
 * var point1 = new SuperMap.Geometry.Point(5,6);
 * var poine2 = new SuperMap.Geometry.Point(7,8);
 * var multiPoint = new SuperMap.Geometry.MultiPoint([point1,point2]);
 */
var MultiPoint = function (_Collection) {
    _inherits(MultiPoint, _Collection);

    function MultiPoint(components) {
        _classCallCheck(this, MultiPoint);

        var _this = _possibleConstructorReturn(this, (MultiPoint.__proto__ || Object.getPrototypeOf(MultiPoint)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.Point"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiPoint";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.MultiPoint.prototype.addPoint
     * @description 添加点，封装了 {@link SuperMap.Geometry.Collection|SuperMap.Geometry.Collection.addComponent}方法。
     * @param point - {SuperMap.Geometry.Point} 添加的点。
     * @param index - {integer} 可选的下标。
     */


    /**
     * @member SuperMap.Geometry.MultiPoint.prototype.componentTypes -{Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.Point}"]
     */


    _createClass(MultiPoint, [{
        key: 'addPoint',
        value: function addPoint(point, index) {
            this.addComponent(point, index);
        }

        /**
         * @function SuperMap.Geometry.MultiPoint.prototype.removePoint
         * @description 移除点封装了 {@link SuperMap.Geometry.Collection|SuperMap.Geometry.Collection.removeComponent} 方法。
         * @param point - {SuperMap.Geometry.Point} 移除的点对象。
         */

    }, {
        key: 'removePoint',
        value: function removePoint(point) {
            this.removeComponent(point);
        }
    }]);

    return MultiPoint;
}(_Collection3["default"]);

exports["default"] = MultiPoint;

_SuperMap2["default"].Geometry.MultiPoint = MultiPoint;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Collection2 = __webpack_require__(4);

var _Collection3 = _interopRequireDefault(_Collection2);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _LineString = __webpack_require__(9);

var _LineString2 = _interopRequireDefault(_LineString);

var _LinearRing = __webpack_require__(17);

var _LinearRing2 = _interopRequireDefault(_LinearRing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.Polygon
 * @classdesc  多边形几何对象类。
 * @extends {SuperMap.Geometry.Collection}
 * @param components - {Array<SuperMap.Geometry.LinearRing>} 用来生成多边形的线环数组。
 * @example
 * var points =[new SuperMap.Geometry.Point(0,4010338),
 *      new SuperMap.Geometry.Point(1063524,4010338),
 *      new SuperMap.Geometry.Point(1063524,3150322),
 *      new SuperMap.Geometry.Point(0,3150322)
 *  ],
 *  var linearRings = new SuperMap.Geometry.LinearRing(points),
 *  var  region = new SuperMap.Geometry.Polygon([linearRings]);
 */
var Polygon = function (_Collection) {
    _inherits(Polygon, _Collection);

    function Polygon(components) {
        _classCallCheck(this, Polygon);

        var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.LinearRing"];
        _this.CLASS_NAME = "SuperMap.Geometry.Polygon";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.Polygon.prototype.getArea
     * @description 获得区域面积，从区域的外部口径减去计此区域内部口径算所得的面积。
     * @returns {float} 几何对象的面积。
     */


    /**
     * @member SuperMap.Geometry.Polygon.prototype.componentTypes -{Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.LinearRing}"]
     */


    _createClass(Polygon, [{
        key: 'getArea',
        value: function getArea() {
            var area = 0.0;
            if (this.components && this.components.length > 0) {
                area += Math.abs(this.components[0].getArea());
                for (var i = 1, len = this.components.length; i < len; i++) {
                    area -= Math.abs(this.components[i].getArea());
                }
            }
            return area;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.getGeodesicArea
         * @description 计算投影到球面上的多边形近似面积。
         * @param projection - {SuperMap.Projection} 空间参考系统的几何坐标。如果没有设置，默认 WGS84。
         * @returns {float} 多边形近似测地面积。
         */

    }, {
        key: 'getGeodesicArea',
        value: function getGeodesicArea(projection) {
            var area = 0.0;
            if (this.components && this.components.length > 0) {
                area += Math.abs(this.components[0].getGeodesicArea(projection));
                for (var i = 1, len = this.components.length; i < len; i++) {
                    area -= Math.abs(this.components[i].getGeodesicArea(projection));
                }
            }
            return area;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.containsPoint
         * @description 判断点是否在多边形里。
         * @param point - {SuperMap.Geometry.Point} 点对象。
         * @returns {boolean | number} 是否在多边形里。
         */

    }, {
        key: 'containsPoint',
        value: function containsPoint(point) {
            var numRings = this.components.length;
            var contained = false;
            if (numRings > 0) {
                // check exterior ring - 1 means on edge, boolean otherwise
                contained = this.components[0].containsPoint(point);
                if (contained !== 1) {
                    if (contained && numRings > 1) {
                        // check interior rings
                        var hole;
                        for (var i = 1; i < numRings; ++i) {
                            hole = this.components[i].containsPoint(point);
                            if (hole) {
                                if (hole === 1) {
                                    // on edge
                                    contained = 1;
                                } else {
                                    // in hole
                                    contained = false;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            return contained;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.intersects
         * @description 判断两个几何对象是否相交。
         * @param geometry - {SuperMap.Geometry} 任何类型的几何对象。
         * @returns {boolean} 两个几何对象是否相交。
         */

    }, {
        key: 'intersects',
        value: function intersects(geometry) {
            var intersect = false;
            var i, len;
            if (geometry.CLASS_NAME === "SuperMap.Geometry.Point") {
                intersect = this.containsPoint(geometry);
            } else if (geometry.CLASS_NAME === "SuperMap.Geometry.LineString" || geometry.CLASS_NAME === "SuperMap.Geometry.LinearRing") {
                // check if rings/linestrings intersect
                for (i = 0, len = this.components.length; i < len; ++i) {
                    intersect = geometry.intersects(this.components[i]);
                    if (intersect) {
                        break;
                    }
                }
                if (!intersect) {
                    // check if this poly contains points of the ring/linestring
                    for (i = 0, len = geometry.components.length; i < len; ++i) {
                        intersect = this.containsPoint(geometry.components[i]);
                        if (intersect) {
                            break;
                        }
                    }
                }
            } else {
                for (i = 0, len = geometry.components.length; i < len; ++i) {
                    intersect = this.intersects(geometry.components[i]);
                    if (intersect) {
                        break;
                    }
                }
            }
            // check case where this poly is wholly contained by another
            if (!intersect && geometry.CLASS_NAME === "SuperMap.Geometry.Polygon") {
                // exterior ring points will be contained in the other geometry
                var ring = this.components[0];
                for (i = 0, len = ring.components.length; i < len; ++i) {
                    intersect = geometry.containsPoint(ring.components[i]);
                    if (intersect) {
                        break;
                    }
                }
            }
            return intersect;
        }

        /**
         * @function SuperMap.Geometry.Polygon.prototype.distanceTo
         * @description 计算两个几何对象间的最小距离（x-y平面坐标系下）。
         * @param geometry - {SuperMap.Geometry} 目标几何对象。
         * @param options - {Object}可选参数。<br>
         *         details - {boolean} 返回距离计算的细节。默认为false。<br>
         *         edge - {boolean} 计算一个几何对象到目标几何对象边缘的最近距离。默认为true。 如果设为true，
         *                          一个几何图形完全包含在目标几何对象中时，调用distanceTo返回非零结果，如果false，
         *                          两个几何对象相交情况下调用distanceTo结果返回0，而且如果false，将不返距离。
         * @returns {number | Object} 返回一个几何对象到目标几何对象的距离。
         */

    }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {
            var edge = !(options && options.edge === false);
            var result;
            // this is the case where we might not be looking for distance to edge
            if (!edge && this.intersects(geometry)) {
                result = 0;
            } else {
                result = _get(Polygon.prototype.__proto__ || Object.getPrototypeOf(Polygon.prototype), 'distanceTo', this).call(this, geometry, options);
            }
            return result;
        }

        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygon
         * @description 创建 RegularPolygon 对象。
         * @param origin - {SuperMap.Geometry.Point} 多边形的中心 。
         * @param radius - {float} 半径。
         * @param sides - {integer} 边数，20个近似一个圆。
         * @param rotation - {float} 旋转角度，单位为degrees。
         * @example
         * var sides = 50;
         * var origin = new SuperMap.Geometry.Point(50);
         * var polygon = SuperMap.Geometry.Polygon.createRegularPolygon(origin6sides270);
         */

    }], [{
        key: 'createRegularPolygon',
        value: function createRegularPolygon(origin, radius, sides, rotation) {
            var angle = Math.PI * (1 / sides - 1 / 2);
            if (rotation) {
                angle += rotation / 180 * Math.PI;
            }
            var rotatedAngle, x, y;
            var points = [];
            for (var i = 0; i < sides; ++i) {
                rotatedAngle = angle + i * 2 * Math.PI / sides;
                x = origin.x + radius * Math.cos(rotatedAngle);
                y = origin.y + radius * Math.sin(rotatedAngle);
                points.push(new _Point2["default"](x, y));
            }
            var ring = new _LinearRing2["default"](points);
            return new Polygon([ring]);
        }
    }, {
        key: 'createRegularPolygonCurve',


        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygonCurve
         * @description 创建扇形对象。
         * @param origin - {SuperMap.Geometry.Point} 多边形的中心 。
         * @param radius - {float} 半径。
         * @param sides - {integer} 边数，50个近似一个扇形。
         * @param r - {integer}
         * @param angel - {float} 旋转角度，单位为degrees。沿着x轴正方向的逆时针方向。
         * @param resolution - {float} 当前地图的分辨率.,固定大小下输入，其他情况不需要此参数
         * 备注：Geometry内部单位均为地理单位，默认用户输入的参数也为地理单位，如果传入resolution，则半径则为
         * 为像素单位，内部会根据像素值和分辨率获取地理大小后在进行构造Geometry，但最终的Geometry均为地理单位。
         * @returns {SuperMap.Geometry.Polygon} 几何面对象。
         * @example
         * var sides = 50;
         * var origin = new SuperMap.Geometry.Point(5,0);
         * var polygon = SuperMap.Geometry.Polygon.createRegularPolygonCurve(origin,6,sides,270);
         */
        value: function createRegularPolygonCurve(origin, radius, sides, r, angel, resolution) {
            if (resolution == undefined) resolution = 1;

            var rR = r * Math.PI / (180 * sides);

            var rotatedAngle, x, y;
            var points = [];
            for (var i = 0; i < sides; ++i) {
                rotatedAngle = rR * i;
                x = origin.x + radius * resolution * Math.cos(rotatedAngle);
                y = origin.y + radius * resolution * Math.sin(rotatedAngle);
                points.push(new _Point2["default"](x, y));
            }
            rotatedAngle = r * Math.PI / 180;
            x = origin.x + radius * resolution * Math.cos(rotatedAngle);
            y = origin.y + radius * resolution * Math.sin(rotatedAngle);
            points.push(new _Point2["default"](x, y));

            points.push(origin);

            var ring = new _LinearRing2["default"](points);
            ring.rotate(parseFloat(angel), origin);
            var geo = new Polygon([ring]);
            geo.origin = origin;
            geo.radius = radius;
            geo.r = r;
            geo.angel = angel;
            geo.sides = sides;
            geo.polygonType = "Curve";
            return geo;
        }
    }, {
        key: 'createRegularPolygonTriangle',


        /**
         * @function SuperMap.Geometry.Polygon.createRegularPolygonTriangle
         * @description 创建4G三角形,电信行业4G专业符号形容类似为：-▷。
         * @param origin - {SuperMap.Geometry.Point} 三角形的原点 。
         * @param height - {float} 外接矩形的高度。
         * @param width - {float} 外接矩形的宽度。
         * @param lineLength - {float} 线长度。
         * @param angel - {float} 旋转角度，单位为degrees,沿着x轴正方向的逆时针方向.。
         * @param resolution - {float} 当前地图的分辨率.,固定大小下输入，其他情况不需要此参数。备注：Geometry内部单位均为地理单位，
         *                              默认用户输入的参数也为地理单位，如果传入resolution，则height、width、lineLength则为像素单
         *                              位，内部会根据像素值和分辨率获取地理大小后在进行构造Geometry，但最终的Geometry均为地理单位。
         * @returns {SuperMap.Geometry.Collection} 几何对象集合，面对象&线对象。
         */
        value: function createRegularPolygonTriangle(origin, height, width, lineLength, angel, resolution) {
            if (resolution == undefined) resolution = 1;

            var lineList = [];
            lineList.push(origin);
            lineList.push(new _Point2["default"](origin.x + lineLength * resolution, origin.y));
            var geoline = new _LineString2["default"](lineList);
            geoline.rotate(parseFloat(angel), origin);

            var triangleList = [];
            triangleList.push(new _Point2["default"](origin.x + height * resolution, origin.y));
            triangleList.push(new _Point2["default"](origin.x + lineLength * resolution, origin.y + width * resolution / 2));
            triangleList.push(new _Point2["default"](origin.x + lineLength * resolution, origin.y - width * resolution / 2));
            var geoTriangle = new _LinearRing2["default"](triangleList);
            geoTriangle.rotate(parseFloat(angel), origin);
            var geo = new _Collection3["default"]([geoline, geoTriangle]);
            geo.origin = origin;
            geo.height = height;
            geo.width = width;
            geo.lineLength = lineLength;
            geo.angel = angel;
            geo.polygonType = "Triangle";
            return geo;
        }
    }, {
        key: 'createBsplinesurface',


        /**
         * @function SuperMap.Geometry.Polygon.createBsplinesurface
         * @description 创建3G B样条曲面，电信3G专业符号，由B样条曲线模拟生成。
         * @param origin - {SuperMap.Geometry.Point} 曲面的原点 。
         * @param height - {float} 外接矩形的高度。
         * @param width - {float} 外接矩形的宽度。
         * @param angel - {float} 旋转角度，单位为degrees，沿着x轴正方向的逆时针方向。
         * @param resolution - {float} 当前地图的分辨率，固定大小下输入，其他情况不需要此参数。备注：Geometry内部单位均为地理单位，
         *                              默认用户输入的参数也为地理单位，如果传入resolution，则height、width为像素单位，内部会根据
         *                              像素值和分辨率获取地理大小后在进行构造Geometry，但最终的Geometry均为地理单位。
         * @param k - {number} 递推次数，可以控制曲线的光滑度。
         * @returns {SuperMap.Geometry.Polygon} 几何面对象。
         */
        value: function createBsplinesurface(origin, height, width, angel, resolution, k) {
            if (resolution == undefined) resolution = 1;

            if (k == undefined) k = 10;

            var pointList = [];
            pointList.push(origin);
            pointList.push(origin);

            pointList.push(new _Point2["default"](origin.x + height * resolution * 2 / 3, origin.y + width * resolution / 2));
            pointList.push(new _Point2["default"](origin.x + height * resolution, origin.y + width * resolution / 2));
            pointList.push(new _Point2["default"](origin.x + height * resolution, origin.y - width * resolution / 2));
            pointList.push(new _Point2["default"](origin.x + height * resolution * 2 / 3, origin.y - width * resolution / 2));

            pointList.push(origin);
            pointList.push(origin);

            var pointList2 = [];
            var i, j, a0, a1, a2, dt, t1, t2;
            var t_x, t_y;
            var n = pointList.length;
            dt = 1.0 / k;

            pointList2.push(new _Point2["default"]((pointList[0].x + pointList[1].x) / 2, (pointList[0].y + pointList[1].y) / 2));

            for (i = 1; i < n - 1; i++) {
                for (j = 0; j <= k; j++) {
                    t1 = j * dt;
                    t2 = t1 * t1;

                    a0 = (t2 - 2 * t1 + 1) / 2.0;
                    a1 = (2 * t1 - 2 * t2 + 1) / 2.0;
                    a2 = t2 / 2.0;

                    t_x = a0 * pointList[i - 1].x + a1 * pointList[i].x + a2 * pointList[i + 1].x;
                    t_y = a0 * pointList[i - 1].y + a1 * pointList[i].y + a2 * pointList[i + 1].y;
                    pointList2.push(new _Point2["default"](t_x, t_y));
                }
            }

            var ring = new _LinearRing2["default"](pointList2);
            ring.rotate(parseFloat(angel), origin);
            var geo = new _Collection3["default"]([ring]);
            geo.origin = origin;
            geo.height = height;
            geo.width = width;
            geo.angel = angel;
            geo.polygonType = "Bspline";
            return geo;
        }
    }]);

    return Polygon;
}(_Collection3["default"]);

exports["default"] = Polygon;


_SuperMap2["default"].Geometry.Polygon = Polygon;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

__webpack_require__(73);

__webpack_require__(74);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_leaflet2["default"].supermap = _leaflet2["default"].supermap || {}; /**
                                                                *SuperMap Leaflet基类
                                                                * 定义命名空间
                                                                * 提供公共模块
                                                                */

_leaflet2["default"].supermap.control = _leaflet2["default"].supermap.control || {};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var parseCode = __webpack_require__(92);
var extend = __webpack_require__(27);
var projections = __webpack_require__(93);
var deriveConstants = __webpack_require__(88);

function Projection(srsCode,callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function(error){
    if(error){
      throw error;
    }
  };
  var json = parseCode(srsCode);
  if(typeof json !== 'object'){
    callback(srsCode);
    return;
  }
  var modifiedJSON = deriveConstants(json);
  var ourProj = Projection.projections.get(modifiedJSON.projName);
  if(ourProj){
    extend(this, modifiedJSON);
    extend(this, ourProj);
    this.init();
    callback(null, this);
  }else{
    callback(srsCode);
  }
}
Projection.projections = projections;
Projection.projections.start();
module.exports = Projection;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
  }
  else {
    return (2 * sinphi);
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z

/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
exports.forward = function (ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
exports.inverse = function (mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

exports.toPoint = function (mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return deg * (Math.PI / 180.0);
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return 180.0 * (rad / Math.PI);
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    } else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    } else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    } else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = eccSquared / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));

  var UTMEasting = k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0;

  var UTMNorthing = k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = eccSquared / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  } else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if (84 >= lat && lat >= 72) {
    LetterDesignator = 'X';
  } else if (72 > lat && lat >= 64) {
    LetterDesignator = 'W';
  } else if (64 > lat && lat >= 56) {
    LetterDesignator = 'V';
  } else if (56 > lat && lat >= 48) {
    LetterDesignator = 'U';
  } else if (48 > lat && lat >= 40) {
    LetterDesignator = 'T';
  } else if (40 > lat && lat >= 32) {
    LetterDesignator = 'S';
  } else if (32 > lat && lat >= 24) {
    LetterDesignator = 'R';
  } else if (24 > lat && lat >= 16) {
    LetterDesignator = 'Q';
  } else if (16 > lat && lat >= 8) {
    LetterDesignator = 'P';
  } else if (8 > lat && lat >= 0) {
    LetterDesignator = 'N';
  } else if (0 > lat && lat >= -8) {
    LetterDesignator = 'M';
  } else if (-8 > lat && lat >= -16) {
    LetterDesignator = 'L';
  } else if (-16 > lat && lat >= -24) {
    LetterDesignator = 'K';
  } else if (-24 > lat && lat >= -32) {
    LetterDesignator = 'J';
  } else if (-32 > lat && lat >= -40) {
    LetterDesignator = 'H';
  } else if (-40 > lat && lat >= -48) {
    LetterDesignator = 'G';
  } else if (-48 > lat && lat >= -56) {
    LetterDesignator = 'F';
  } else if (-56 > lat && lat >= -64) {
    LetterDesignator = 'E';
  } else if (-64 > lat && lat >= -72) {
    LetterDesignator = 'D';
  } else if (-72 > lat && lat >= -80) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
      snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) {
    colInt++;
  }

  if (colInt === O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  } else {
    rollover = false;
  }

  if (rowInt === I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) {
    rowInt++;
  }

  if (rowInt === O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw "MGRSPoint coverting from nothing";
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw "MGRSPoint bad conversion from: " + mgrsString;
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw "MGRSPoint bad conversion from: " + mgrsString;
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw "Bad character: " + e;
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw "MGRSPoint given invalid Northing " + n;
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) {
        // making sure that this loop ends
        throw "Bad character: " + n;
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
    case 'C':
      northing = 1100000.0;
      break;
    case 'D':
      northing = 2000000.0;
      break;
    case 'E':
      northing = 2800000.0;
      break;
    case 'F':
      northing = 3700000.0;
      break;
    case 'G':
      northing = 4600000.0;
      break;
    case 'H':
      northing = 5500000.0;
      break;
    case 'J':
      northing = 6400000.0;
      break;
    case 'K':
      northing = 7300000.0;
      break;
    case 'L':
      northing = 8200000.0;
      break;
    case 'M':
      northing = 9100000.0;
      break;
    case 'N':
      northing = 0.0;
      break;
    case 'P':
      northing = 800000.0;
      break;
    case 'Q':
      northing = 1700000.0;
      break;
    case 'R':
      northing = 2600000.0;
      break;
    case 'S':
      northing = 3500000.0;
      break;
    case 'T':
      northing = 4400000.0;
      break;
    case 'U':
      northing = 5300000.0;
      break;
    case 'V':
      northing = 6200000.0;
      break;
    case 'W':
      northing = 7000000.0;
      break;
    case 'X':
      northing = 7900000.0;
      break;
    default:
      northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  } else {
    throw "Invalid zone letter: " + zoneLetter;
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrayExt = exports.FunctionExt = exports.NumberExt = exports.StringExt = undefined;

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *@namespace SuperMap
 */

/**
 * @description In addition to the mandatory C and P parameters, an arbitrary number of
 * objects can be passed, which will extend C.
 * @memberOf SuperMap
 * @param C - {Object} the class that inherits
 * @param P - {Object} the superclass to inherit from
 */
_SuperMap2["default"].inherit = function (C, P) {
    var F = function F() {};
    F.prototype = P.prototype;
    C.prototype = new F();
    var i, l, o;
    for (i = 2, l = arguments.length; i < l; i++) {
        o = arguments[i];
        if (typeof o === "function") {
            o = o.prototype;
        }
        _SuperMap2["default"].Util.extend(C.prototype, o);
    }
};

/**
 * @description 实现多重继承
 * @memberOf SuperMap
 * @param ...mixins {Class|Object}继承的类
 */
_SuperMap2["default"].mixin = function () {
    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
    }

    var Mix = function Mix(options) {
        _classCallCheck(this, Mix);

        for (var index = 0; index < mixins.length; index++) {
            copyProperties(this, new mixins[index](options));
        }
    };

    for (var index = 0; index < mixins.length; index++) {
        var mixin = mixins[index];
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
        copyProperties(Mix.prototype, new mixin());
    }
    return Mix;

    function copyProperties(target, source) {
        var ownKeys = Object.getOwnPropertyNames(source);
        if (Object.getOwnPropertySymbols) {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source));
        }
        for (var index = 0; index < ownKeys.length; index++) {
            var key = ownKeys[index];
            if (key !== "constructor" && key !== "prototype" && key !== "name" && key !== "length") {
                var desc = Object.getOwnPropertyDescriptor(source, key);
                Object.defineProperty(target, key, desc);
            }
        }
    }
};

/**
 * @name String
 * @memberOf SuperMap
 * @namespace
 * @description 字符串操作的一系列常用扩展函数.
 */
var StringExt = exports.StringExt = _SuperMap2["default"].String = {

    /**
     * @description 判断目标字符串是否以指定的子字符串开头.
     * @param str - {string} 目标字符串.
     * @param sub - {string} 查找的子字符串.
     * @returns {Boolean} 目标字符串以指定的子字符串开头,则返回true;否则返回false.
     */
    startsWith: function startsWith(str, sub) {
        return str.indexOf(sub) == 0;
    },

    /**
     * @description 判断目标字符串是否包含指定的子字符串.
     * @param str - {string} 目标字符串.
     * @param sub - {string} 查找的子字符串.
     * @returns {Boolean} 目标字符串中包含指定的子字符串,则返回true;否则返回false.
     */
    contains: function contains(str, sub) {
        return str.indexOf(sub) != -1;
    },

    /**
     * @description 删除一个字符串的开头和结尾处的所有空白字符.
     * @param str - {string} (可能)存在空白字符填塞的字符串.
     * @returns {string} 删除开头和结尾处空白字符后的字符串.
     */
    trim: function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },

    /**
     * @description 骆驼式("-")连字符的字符串处理.
     * 例如: "chicken-head" becomes "chickenHead",
     *       "-chicken-head" becomes "ChickenHead".
     * @param str - {string} 要处理的字符串,原始内容不应被修改.
     * @returns {string}
     */
    camelize: function camelize(str) {
        var oStringList = str.split('-');
        var camelizedString = oStringList[0];
        for (var i = 1, len = oStringList.length; i < len; i++) {
            var s = oStringList[i];
            camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
        }
        return camelizedString;
    },

    /**
     * @description 提供带 ${token} 标记的字符串, 返回context对象属性中指定标记的属性值.
     * @example
     * 示例:
     * (code)
     * 1、template = "${value,getValue}";
     *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
     *         args = [2,23,12,36,21];
     *       返回值:36
     * (end)
     * 示例:
     * (code)
     * 2、template = "$${{value,getValue}}";
     *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
     *         args = [2,23,12,36,21];
     *       返回值:"${36}"
     * (end)
     * 示例:
     * (code)
     * 3、template = "${a,b}";
     *         context = {a: {b:"format"}};
     *         args = null;
     *       返回值:"format"
     * (end)
     * 示例:
     * (code)
     * 3、template = "${a,b}";
     *         context = null;
     *         args = null;
     *       返回值:"${a.b}"
     * (end)
     * @param template - {string} 带标记的字符串将要被替换.参数 template 格式为"${token}",此处的 token 标记会替换为 context["token"] 属性的值
     * @param context - {Object} 带有属性的可选对象的属性用于匹配格式化字符串中的标记.如果该参数为空,将使用 window 对象.
     * @param args - {Array} 可选参数传递给在context对象上找到的函数.
     * @returns {string} 从 context 对象属性中替换字符串标记位的字符串.
     */
    format: function format(template, context, args) {
        if (!context) {
            context = window;
        }

        // Example matching:
        // str   = ${foo.bar}
        // match = foo.bar
        var replacer = function replacer(str, match) {
            var replacement;

            // Loop through all subs. Example: ${a.b.c}
            // 0 -> replacement = context[a];
            // 1 -> replacement = context[a][b];
            // 2 -> replacement = context[a][b][c];
            var subs = match.split(/\.+/);
            for (var i = 0; i < subs.length; i++) {
                if (i == 0) {
                    replacement = context;
                }

                replacement = replacement[subs[i]];
            }

            if (typeof replacement === "function") {
                replacement = args ? replacement.apply(null, args) : replacement();
            }

            // If replacement is undefined, return the string 'undefined'.
            // This is a workaround for a bugs in browsers not properly
            // dealing with non-participating groups in regular expressions:
            // http://blog.stevenlevithan.com/archives/npcg-javascript
            if (typeof replacement == 'undefined') {
                return 'undefined';
            } else {
                return replacement;
            }
        };

        return template.replace(_SuperMap2["default"].String.tokenRegEx, replacer);
    },

    /**
     * @description Used to find tokens in a string.
     * @default  /\$\{([\w.]+?)\}/g
     * @example
     * Examples: ${a}, ${a.b.c}, ${a-b}, ${5}
     */
    tokenRegEx: /\$\{([\w.]+?)\}/g,

    /**
     * @description Used to test strings as numbers.
     * @default  /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/
     */
    numberRegEx: /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,

    /**
     * @description 判断一个字符串是否只包含一个数值.
     * @example
     * (code)
     * SuperMap.String.isNumeric("6.02e23") // true
     * SuperMap.String.isNumeric("12 dozen") // false
     * SuperMap.String.isNumeric("4") // true
     * SuperMap.String.isNumeric(" 4 ") // false
     * (end)
     * @returns {Boolean} 字符串包含唯一的数值,返回true;否则返回false.
     */
    isNumeric: function isNumeric(value) {
        return _SuperMap2["default"].String.numberRegEx.test(value);
    },

    /**
     * @description 把一个看似数值型的字符串转化为一个数值.
     *
     * @returns {number|string} 如果能转换为数值则返回数值,否则返回字符串本身.
     */
    numericIf: function numericIf(value) {
        return _SuperMap2["default"].String.isNumeric(value) ? parseFloat(value) : value;
    }

};

/**
 * @name Number
 * @memberOf SuperMap
 * @namespace
 * @description 数值操作的一系列常用扩展函数.
 */
var NumberExt = exports.NumberExt = _SuperMap2["default"].Number = {

    /**
     *  @description 格式化数字时默认的小数点分隔符.
     *  @constant
     *  @default "."
     */
    decimalSeparator: ".",

    /**
     *  @description 格式化数字时默认的千位分隔符.
     *  @constant
     *  @default ","
     */
    thousandsSeparator: ",",

    /**
     * @description 限制浮点数的有效数字位数.
     * @param num - {number}
     * @param sig - {integer}
     * @returns {number} 将数字四舍五入到指定数量的有效位数.
     */
    limitSigDigs: function limitSigDigs(num, sig) {
        var fig = 0;
        if (sig > 0) {
            fig = parseFloat(num.toPrecision(sig));
        }
        return fig;
    },

    /**
     * @description 数字格式化输出.
     * @param num  - {number}
     * @param dec  - {integer} 数字的小数部分四舍五入到指定的位数.默认为 0. 设置为null值时小数部分不变.
     * @param tsep - {string} 千位分隔符. 默认为",".
     * @param dsep - {string} 小数点分隔符. 默认为".".
     * @returns {string} 数字格式化后的字符串.
     */
    format: function format(num, dec, tsep, dsep) {
        dec = typeof dec != "undefined" ? dec : 0;
        tsep = typeof tsep != "undefined" ? tsep : _SuperMap2["default"].Number.thousandsSeparator;
        dsep = typeof dsep != "undefined" ? dsep : _SuperMap2["default"].Number.decimalSeparator;

        if (dec != null) {
            num = parseFloat(num.toFixed(dec));
        }

        var parts = num.toString().split(".");
        if (parts.length === 1 && dec == null) {
            // integer where we do not want to touch the decimals
            dec = 0;
        }

        var integer = parts[0];
        if (tsep) {
            var thousands = /(-?[0-9]+)([0-9]{3})/;
            while (thousands.test(integer)) {
                integer = integer.replace(thousands, "$1" + tsep + "$2");
            }
        }

        var str;
        if (dec == 0) {
            str = integer;
        } else {
            var rem = parts.length > 1 ? parts[1] : "0";
            if (dec != null) {
                rem = rem + new Array(dec - rem.length + 1).join("0");
            }
            str = integer + dsep + rem;
        }
        return str;
    }
};

if (!Number.prototype.limitSigDigs) {
    /**
     * APIMethod: Number.limitSigDigs
     * 限制浮点数的有效数字位数.
     * @param sig - {integer}
     * @returns {integer} 将数字四舍五入到指定数量的有效位数.
     *           如果传入值为 null、0、或者是负数, 返回值 0
     */
    Number.prototype.limitSigDigs = function (sig) {
        return NumberExt.limitSigDigs(this, sig);
    };
}

/**
 * @name Function
 * @memberOf SuperMap
 * @namespace
 * @description 函数操作的一系列常用扩展函数.
 */
var FunctionExt = exports.FunctionExt = _SuperMap2["default"].Function = {
    /**
     * @description 绑定函数到对象.方便创建this的作用域.
     * @param func - {function} 输入函数.
     * @param object - {Object} 对象绑定到输入函数(作为输入函数的this对象).
     * @returns {function} object参数作为func函数的this对象.
     */
    bind: function bind(func, object) {
        // create a reference to all arguments past the second one
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function () {
            // Push on any additional arguments from the actual function call.
            // These will come after those sent to the bind call.
            var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
            return func.apply(object, newArgs);
        };
    },

    /**
     * @description 绑定函数到对象,在调用该函数时配置并使用事件对象作为第一个参数.
     * @param func - {function} 用于监听事件的函数.
     * @param object - {Object} this 对象的引用.
     * @returns {function}
     */
    bindAsEventListener: function bindAsEventListener(func, object) {
        return function (event) {
            return func.call(object, event || window.event);
        };
    },

    /**
     * @description 该函数仅仅返回false.该函数主要是避免在IE8以下浏览中DOM事件句柄的匿名函数问题.
     * @example
     * document.onclick = SuperMap.Function.False;
     * @returns {Boolean}
     */
    False: function False() {
        return false;
    },

    /**
     * @description 该函数仅仅返回true.该函数主要是避免在IE8以下浏览中DOM事件句柄的匿名函数问题.
     * @example
     * document.onclick = SuperMap.Function.True;
     * @returns {Boolean}
     */
    True: function True() {
        return true;
    },

    /**
     * @description 可重用函数,仅仅返回"undefined".
     * @returns {undefined}
     */
    Void: function Void() {}

};

/**
 * @name Array
 * @memberOf SuperMap
 * @namespace
 * @description 数组操作的一系列常用扩展函数.
 */
var ArrayExt = exports.ArrayExt = _SuperMap2["default"].Array = {

    /**
     * @description 过滤数组.提供了ECMA-262标准中Array.prototype.filter函数的扩展.
     * @see {@link http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter}
     * @param array - {Array} 要过滤的数组..
     * @param callback - {function} 数组中的每一个元素调用该函数.<br>
     *     如果函数的返回值为true,该元素将包含在返回的数组中.该函数有三个参数: 数组中的元素,元素的索引,数组自身.<br>
     *     如果设置了可选参数caller,在调用callback时,使用可选参数caller设置为callback的参数.<br>
     * @param caller - {Object} 在调用callback时,使用可选参数caller设置为callback的参数.
     * @returns {Array} callback函数返回true时的元素将作为返回数组中的元素.
     */
    filter: function filter(array, callback, caller) {
        var selected = [];
        if (Array.prototype.filter) {
            selected = array.filter(callback, caller);
        } else {
            var len = array.length;
            if (typeof callback != "function") {
                throw new TypeError();
            }
            for (var i = 0; i < len; i++) {
                if (i in array) {
                    var val = array[i];
                    if (callback.call(caller, val, i, array)) {
                        selected.push(val);
                    }
                }
            }
        }
        return selected;
    }

};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Size = __webpack_require__(56);

var _Size2 = _interopRequireDefault(_Size);

var _Pixel = __webpack_require__(55);

var _Pixel2 = _interopRequireDefault(_Pixel);

var _LonLat = __webpack_require__(54);

var _LonLat2 = _interopRequireDefault(_LonLat);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _LinearRing = __webpack_require__(17);

var _LinearRing2 = _interopRequireDefault(_LinearRing);

var _Polygon = __webpack_require__(21);

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Bounds
 * @classdesc 表示边界类实例。使用bounds之前需要设置left,bottom, right, top四个属性，这些属性的初始值为null。
 * @param  left - {number} 左边界，注意考虑宽度，理论上小于right值。
 * @param  bottom - {number} 下边界。考虑高度，理论上小于top值。
 * @param  right - {number} 右边界。
 * @param  top - {number} 上边界。
 * @param  array - {Array<number>} [left, bottom, right, top]  如果同时传多个参数，则使用左下右上组成的数组。
 * @example
 * var bounds = new SuperMap.Bounds();
 * bounds.extend(new SuperMap.LonLat(4,5));
 * bounds.extend(new SuperMap.LonLat(5,6));
 * bounds.toBBOX(); // returns 4,5,5,6
 */
var Bounds = function () {

    /**
     * @member SuperMap.Bounds.prototype.top - {number}
     * @description 最大的垂直坐标系。
     */


    /**
     * @member SuperMap.Bounds.prototype.bottom - {number}
     * @description 最小的垂直坐标系。
     */
    function Bounds(left, bottom, right, top) {
        _classCallCheck(this, Bounds);

        this.left = null;
        this.bottom = null;
        this.right = null;
        this.top = null;
        this.centerLonLat = null;
        this.CLASS_NAME = "SuperMap.Bounds";

        if (_Util.Util.isArray(left)) {
            top = left[3];
            right = left[2];
            bottom = left[1];
            left = left[0];
        }
        this.left = left != null ? _Util.Util.toFloat(left) : this.left;
        this.bottom = bottom != null ? _Util.Util.toFloat(bottom) : this.bottom;
        this.right = right != null ? _Util.Util.toFloat(right) : this.right;
        this.top = top != null ? _Util.Util.toFloat(top) : this.top;
    }

    /**
     * @function SuperMap.Bounds.prototype.clone
     * @description 复制当前 bounds 对象。
     * @example
     * var bounds1 = new SuperMap.Bounds(-180,-90,180,90);
     * var bounds2 = bounds1.clone();
     * @returns {SuperMap.Bounds} 返回一个克隆的bounds。
     */


    /**
     * @member SuperMap.Bounds.prototype.centerLonLat - {SuperMap.LonLat}
     * @description bounds的地图空间的中心点。用 getCenterLonLat() 获得。
     */


    /**
     * @member SuperMap.Bounds.prototype.right - {number}
     * @description 最大的水平坐标系。
     */


    /**
     * @member SuperMap.Bounds.prototype.left - {number}
     * @description 最小的水平坐标系。
     */


    _createClass(Bounds, [{
        key: 'clone',
        value: function clone() {
            return new Bounds(this.left, this.bottom, this.right, this.top);
        }

        /**
         * @function SuperMap.Bounds.prototype.equals
         * @description 判断两个 bounds 对象是否相等。
         * @example
         * var bounds1 = new SuperMap.Bounds(-180-9018090);
         * var bounds2 = new SuperMap.Bounds(-180-9018090);
         * var isEquals = bounds1.equals(bounds2);
         * @param bounds - {SuperMap.Bounds} 需要进行计较的 bounds。
         * @returns {boolean} 如果 bounds 对象的边和传入的 bounds 一致则返回true不一致或传入的 bounds 参数为NULL则返回false。
         */

    }, {
        key: 'equals',
        value: function equals(bounds) {
            var equals = false;
            if (bounds != null) {
                equals = this.left === bounds.left && this.right === bounds.right && this.top === bounds.top && this.bottom === bounds.bottom;
            }
            return equals;
        }

        /**
         * @function SuperMap.Bounds.prototype.toString
         * @description 返回此对象的字符串形式
         * @example
         * var bounds = new SuperMap.Bounds(-180-9018090);
         * var str = bounds.toString();
         * @returns {string} 边界对象的字符串表示形式（leftbottomrighttop），例如: "-180-9018090"
         */

    }, {
        key: 'toString',
        value: function toString() {
            return [this.left, this.bottom, this.right, this.top].join(",");
        }

        /**
         * @function SuperMap.Bounds.prototype.toArray
         * @description 边界对象的数组表示形式 。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * //array1 = [-180,-90,100,80];
         * var array1 = bounds.toArray();
         * //array1 = [-90,-180,80,100];
         * var array2 = bounds.toArray(true);
         * @param reverseAxisOrder - {boolean} 是否反转轴顺序，
         * 如果设为true，则倒转顺序（bottomlefttopright）否则按正常轴顺序（leftbottomrighttop）。
         * @returns {Array} left bottom right top数组。
         */

    }, {
        key: 'toArray',
        value: function toArray(reverseAxisOrder) {
            if (reverseAxisOrder === true) {
                return [this.bottom, this.left, this.top, this.right];
            } else {
                return [this.left, this.bottom, this.right, this.top];
            }
        }

        /**
         * @function SuperMap.Bounds.prototype.toBBOX
         * @description 取小数点后decimal位数字进行四舍五入再转换为BBOX字符串。
         * @example
         * var bounds = new SuperMap.Bounds(-1.1234567-1.76543211.44444441.5555555);
         * //str1 = "-1.123457,-1.765432,1.444444,1.555556";
         * var str1 = bounds.toBBOX();
         * //str2 = "-1.1,-1.8,1.4,1.6";
         * var str2 = bounds.toBBOX(1);
         * //str2 = "-1.8,-1.1,1.6,1.4";
         * var str2 = bounds.toBBOX(1true);
         * @param decimal - {integer} 边界方位坐标的有效数字个数，默认为6。
         * @param  reverseAxisOrder - {boolean} 是否是反转轴顺序。
         * 如果设为true，则倒转顺序（bottomlefttopright）否则按正常轴顺序（leftbottomrighttop）。
         * @returns {string} 边界对象的字符串表示形式，如："5421045"。
         */

    }, {
        key: 'toBBOX',
        value: function toBBOX(decimal, reverseAxisOrder) {
            if (decimal == null) {
                decimal = 6;
            }
            var mult = Math.pow(10, decimal);
            var xmin = Math.round(this.left * mult) / mult;
            var ymin = Math.round(this.bottom * mult) / mult;
            var xmax = Math.round(this.right * mult) / mult;
            var ymax = Math.round(this.top * mult) / mult;
            if (reverseAxisOrder === true) {
                return ymin + "," + xmin + "," + ymax + "," + xmax;
            } else {
                return xmin + "," + ymin + "," + xmax + "," + ymax;
            }
        }

        /**
         * @function SuperMap.Bounds.prototype.toGeometry
         * @description 基于当前边界范围创建一个新的多边形对象。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * //SuperMap.Geometry.Polygon对象
         * var geo = bounds.toGeometry();
         * @returns {SuperMap.Geometry.Polygon} 基于当前bounds坐标创建的新的多边形。
         */

    }, {
        key: 'toGeometry',
        value: function toGeometry() {
            return new _Polygon2["default"]([new _LinearRing2["default"]([new _Point2["default"](this.left, this.bottom), new _Point2["default"](this.right, this.bottom), new _Point2["default"](this.right, this.top), new _Point2["default"](this.left, this.top)])]);
        }

        /**
         * @function SuperMap.Bounds.prototype.getWidth
         * @description 获取bounds的宽度。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * //width = 280;
         * var width = bounds.getWidth();
         * @returns {float} 获取当前bounds的宽度（right减去left）。
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.right - this.left;
        }

        /**
         * @function SuperMap.Bounds.prototype.getHeight
         * @description 获取bounds的高度。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * //height = 170;
         * var height = bounds.getHeight();
         * @returns {float} 返回边界高度（top减去bottom）。
         */

    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.top - this.bottom;
        }

        /**
         * @function SuperMap.Bounds.prototype.getSize
         * @description 获取边框大小。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var size = bounds.getSize();
         * @returns {SuperMap.Size} 返回边框大小。
         */

    }, {
        key: 'getSize',
        value: function getSize() {
            return new _Size2["default"](this.getWidth(), this.getHeight());
        }

        /**
         * @function SuperMap.Bounds.prototype.getCenterPixel
         * @description 获取像素格式的范围中心点。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var pixel = bounds.getCenterPixel();
         * @returns {SuperMap.Pixel} 返回像素格式的当前范围的中心点。
         */

    }, {
        key: 'getCenterPixel',
        value: function getCenterPixel() {
            return new _Pixel2["default"]((this.left + this.right) / 2, (this.bottom + this.top) / 2);
        }

        /**
         * @function SuperMap.Bounds.prototype.getCenterLonLat
         * @description 获取地理格式的范围中心点。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var lonlat = bounds.getCenterLonLat();
         * @returns {SuperMap.LonLat} 返回当前地理范围的中心点。
         */

    }, {
        key: 'getCenterLonLat',
        value: function getCenterLonLat() {
            if (!this.centerLonLat) {
                this.centerLonLat = new _LonLat2["default"]((this.left + this.right) / 2, (this.bottom + this.top) / 2);
            }
            return this.centerLonLat;
        }

        /**
         * @function SuperMap.Bounds.prototype.scale
         * @description 按照比例扩大/缩小出一个新的bounds。
         * @example
         * var bounds = new SuperMap.Bounds(-50-504040);
         * var bounds2 = bounds.scale(2);
         * @param ratio - {float} 需要扩大的比例，默认为1。
         * @param origin - {SuperMap.Pixel|SuperMap.LonLat} 扩大时的基准点，默认为当前bounds的中心点。
         * @returns {SuperMap.Bounds} 返回通过ratio、origin计算得到的新的边界范围。
         */

    }, {
        key: 'scale',
        value: function scale(ratio, origin) {
            ratio = ratio ? ratio : 1;
            if (origin == null) {
                origin = this.getCenterLonLat();
            }

            var origx, origy;

            // get origin coordinates
            if (origin.CLASS_NAME === "SuperMap.LonLat") {
                origx = origin.lon;
                origy = origin.lat;
            } else {
                origx = origin.x;
                origy = origin.y;
            }

            var left = (this.left - origx) * ratio + origx;
            var bottom = (this.bottom - origy) * ratio + origy;
            var right = (this.right - origx) * ratio + origx;
            var top = (this.top - origy) * ratio + origy;

            return new Bounds(left, bottom, right, top);
        }

        /**
         * @function SuperMap.Bounds.prototype.add
         * @description 在当前的dounds上按照传入的坐标点进行平移，返回新的范围。
         * @example
         * var bounds1 = new SuperMap.Bounds(-50-504040);
         * //bounds2 是新的 bounds
         * var bounds2 = bounds.add(2010);
         * @param x - {float} 传入坐标点的x坐标。
         * @param y - {float} 传入坐标点的y坐标。
         * @returns {SuperMap.Bounds} 返回一个新的bounds，此bounds的坐标是由传入的x，y参数与当前bounds坐标计算所得。
         */

    }, {
        key: 'add',
        value: function add(x, y) {
            if (x == null || y == null) {
                throw new TypeError('Bounds.add cannot receive null values');
            }
            return new Bounds(this.left + x, this.bottom + y, this.right + x, this.top + y);
        }

        /**
         * @function SuperMap.Bounds.prototype.extend
         * @description 在当前bounds上扩展bounds，支持point，lanlat和bounds。扩展后的bounds的范围是两者的结合。
         * @example
         * var bounds1 = new SuperMap.Bounds(-50-504040);
         * //bounds改变
         * bounds.extend(new SuperMap.LonLat(5060));
         * @param object - {SuperMap.Geometry.Point|SuperMap.LonLat | SuperMap.Bounds} 可以是point，lanlat和bounds。
         */

    }, {
        key: 'extend',
        value: function extend(object) {
            var bounds = null;
            if (object) {
                // clear cached center location
                switch (object.CLASS_NAME) {
                    case "SuperMap.LonLat":
                        bounds = new Bounds(object.lon, object.lat, object.lon, object.lat);
                        break;
                    case "SuperMap.Geometry.Point":
                        bounds = new Bounds(object.x, object.y, object.x, object.y);
                        break;

                    case "SuperMap.Bounds":
                        bounds = object;
                        break;
                }

                if (bounds) {
                    this.centerLonLat = null;
                    if (this.left == null || bounds.left < this.left) {
                        this.left = bounds.left;
                    }
                    if (this.bottom == null || bounds.bottom < this.bottom) {
                        this.bottom = bounds.bottom;
                    }
                    if (this.right == null || bounds.right > this.right) {
                        this.right = bounds.right;
                    }
                    if (this.top == null || bounds.top > this.top) {
                        this.top = bounds.top;
                    }
                }
            }
        }

        /**
         * @function SuperMap.Bounds.prototype.containsLonLat
         * @description 判断传入的坐标是否在范围内。
         * @example
         * var bounds1 = new SuperMap.Bounds(-50-504040);
         * //isContains1 = true
         * //这里的第二个参数可以直接为 boolean 类型，也就是inclusive
         * var isContains1 = bounds.containsLonLat(new SuperMap.LonLat(4040)true);
         *
         * //(40,40)在范围内，同样(40+360,40)也在范围内
         * var bounds2 = new SuperMap.Bounds(-50-504040);
         * //isContains2 = true;
         * var isContains2 = bounds2.containsLonLat(
         *      new SuperMap.LonLat(40040)
         *      {
         *           inclusive:true
         *           //全球的范围
         *           worldBounds: new SuperMap.Bounds(-180-9018090)
         *      }
         *      );
         * @param ll - {SuperMap.LonLat|Object}  <SuperMap.LonLat> 对象或者是一个
         *     包含 'lon' 与 'lat' 属性的对象。
         * @param options - {Object} 可选参数<br>
         *         inclusive - {boolean} 是否包含边界，默认为 true 。<br>
         *         worldBounds - {@link SuperMap.Bounds} 如果提供 worldBounds 参数 如果 ll 参数提供的坐标超出了世界边界（worldBounds）
         *         但是通过日界线的转化可以被包含 它将被认为是包含在该范围内的。
         * @returns {boolean} 传入坐标是否包含在范围内.
         */

    }, {
        key: 'containsLonLat',
        value: function containsLonLat(ll, options) {
            if (typeof options === "boolean") {
                options = { inclusive: options };
            }
            options = options || {};
            var contains = this.contains(ll.lon, ll.lat, options.inclusive),
                worldBounds = options.worldBounds;
            //日界线以外的也有可能算包含，
            if (worldBounds && !contains) {
                var worldWidth = worldBounds.getWidth();
                var worldCenterX = (worldBounds.left + worldBounds.right) / 2;
                //这一步很关键
                var worldsAway = Math.round((ll.lon - worldCenterX) / worldWidth);
                contains = this.containsLonLat({
                    lon: ll.lon - worldsAway * worldWidth,
                    lat: ll.lat
                }, { inclusive: options.inclusive });
            }
            return contains;
        }

        /**
         * @function SuperMap.Bounds.prototype.containsPixel
         * @description 判断传入的像素是否在范围内。直接匹配大小，不涉及像素和地理转换。
         * @example
         * var bounds = new SuperMap.Bounds(-50-504040);
         * //isContains = true
         * var isContains = bounds.containsPixel(new SuperMap.Pixel(4040)true);
         * @param px - {SuperMap.Pixel} 提供的像素参数。
         * @param inclusive - {boolean} 是否包含边界，默认为true。
         * @returns {boolean} 传入的pixel在当前边界范围之内。
         */

    }, {
        key: 'containsPixel',
        value: function containsPixel(px, inclusive) {
            return this.contains(px.x, px.y, inclusive);
        }

        /**
         * @function SuperMap.Bounds.prototype.contains
         * @description 判断传入的x，y坐标值是否在范围内。
         * @example
         * var bounds = new SuperMap.Bounds(-50-504040);
         * //isContains = true
         * var isContains = bounds.contains(4040true);
         * @param x - {float} 传入的x坐标值。
         * @param y - {float} 传入的y坐标值。
         * @param inclusive - {boolean} 是否包含边界，默认为true。
         * @returns {boolean} 传入的xy坐标在当前范围内。
         */

    }, {
        key: 'contains',
        value: function contains(x, y, inclusive) {
            //set default
            if (inclusive == null) {
                inclusive = true;
            }

            if (x == null || y == null) {
                return false;
            }

            x = _Util.Util.toFloat(x);
            y = _Util.Util.toFloat(y);

            var contains = false;
            if (inclusive) {
                contains = x >= this.left && x <= this.right && y >= this.bottom && y <= this.top;
            } else {
                contains = x > this.left && x < this.right && y > this.bottom && y < this.top;
            }
            return contains;
        }

        /**
         * @function SuperMap.Bounds.prototype.intersectsBounds
         * @description 判断目标边界范围是否与当前边界范围相交。如果两个边界范围中的任意
         *                边缘相交或者一个边界包含了另外一个就认为这两个边界相交。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var isIntersects = bounds.intersectsBounds(
         *      new SuperMap.Bounds(-170-9012080)
         *  );
         * @param bounds - {SuperMap.Bounds} 目标边界。
         * @param options - {Object} 可选参数。<br>
         *         inclusive - {boolean} 边缘重合也看成相交，默认为true。如果是false，
         *                               两个边界范围没有重叠部分仅仅是在边缘相接（重合），
         *                               这种情况被认为没有相交。<br>
         *         worldBounds - {@link SuperMap.Bounds} 提供了 worldBounds 参数 如果他们相交时
         *                               是在全球范围内 两个边界将被视为相交。这仅适用于交叉
         *                               或完全不在世界范围的边界。
         * @returns {boolean} 传入的bounds对象与当前bounds相交。
         */

    }, {
        key: 'intersectsBounds',
        value: function intersectsBounds(bounds, options) {
            if (typeof options === "boolean") {
                options = { inclusive: options };
            }
            options = options || {};
            if (options.worldBounds) {
                var self = this.wrapDateLine(options.worldBounds);
                bounds = bounds.wrapDateLine(options.worldBounds);
            } else {
                self = this;
            }
            if (options.inclusive == null) {
                options.inclusive = true;
            }
            var intersects = false;
            var mightTouch = self.left === bounds.right || self.right === bounds.left || self.top === bounds.bottom || self.bottom === bounds.top;

            // if the two bounds only touch at an edge, and inclusive is false,
            // then the bounds don't *really* intersect.
            if (options.inclusive || !mightTouch) {
                // otherwise, if one of the boundaries even partially contains another,
                // inclusive of the edges, then they do intersect.
                var inBottom = bounds.bottom >= self.bottom && bounds.bottom <= self.top || self.bottom >= bounds.bottom && self.bottom <= bounds.top;
                var inTop = bounds.top >= self.bottom && bounds.top <= self.top || self.top > bounds.bottom && self.top < bounds.top;
                var inLeft = bounds.left >= self.left && bounds.left <= self.right || self.left >= bounds.left && self.left <= bounds.right;
                var inRight = bounds.right >= self.left && bounds.right <= self.right || self.right >= bounds.left && self.right <= bounds.right;
                intersects = (inBottom || inTop) && (inLeft || inRight);
            }
            // document me
            if (options.worldBounds && !intersects) {
                var world = options.worldBounds;
                var width = world.getWidth();
                var selfCrosses = !world.containsBounds(self);
                var boundsCrosses = !world.containsBounds(bounds);
                if (selfCrosses && !boundsCrosses) {
                    bounds = bounds.add(-width, 0);
                    intersects = self.intersectsBounds(bounds, { inclusive: options.inclusive });
                } else if (boundsCrosses && !selfCrosses) {
                    self = self.add(-width, 0);
                    intersects = bounds.intersectsBounds(self, { inclusive: options.inclusive });
                }
            }
            return intersects;
        }

        /**
         * @function SuperMap.Bounds.prototype.containsBounds
         * @description 判断目标边界是否被当前边界包含在内。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var isContains = bounds.containsBounds(
         *      new SuperMap.Bounds(-170-9010080)truetrue
         *  );
         * @param bounds - {SuperMap.Bounds} 目标边界。
         * @param partial - {boolean} 目标边界的任意部分都包含在当前边界中则被认为是包含关系。默认为false，
         *                             如果设为false，整个目标边界全部被包含在当前边界范围内。
         * @param inclusive - {boolean} 边缘共享被视为包含。默认为true。
         * @returns {boolean} 传入的边界被当前边界包含。
         */

    }, {
        key: 'containsBounds',
        value: function containsBounds(bounds, partial, inclusive) {
            if (partial == null) {
                partial = false;
            }
            if (inclusive == null) {
                inclusive = true;
            }
            var bottomLeft = this.contains(bounds.left, bounds.bottom, inclusive);
            var bottomRight = this.contains(bounds.right, bounds.bottom, inclusive);
            var topLeft = this.contains(bounds.left, bounds.top, inclusive);
            var topRight = this.contains(bounds.right, bounds.top, inclusive);

            return partial ? bottomLeft || bottomRight || topLeft || topRight : bottomLeft && bottomRight && topLeft && topRight;
        }

        /**
         * @function SuperMap.Bounds.prototype.determineQuadrant
         * @description 判断传入坐标在bounds范围内的象限。以bounds中心点为坐标原点。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * //str = "tr";
         * var str = bounds.determineQuadrant(
         *      new SuperMap.LonLat(2020)
         *  );
         * @param lonlat - {SuperMap.LonLat} 传入的坐标对象。
         * @returns {string} 传入坐标所在的象限("br" "tr" "tl" "bl" 分别对应"右下"，"右上"，"左上" "左下")。
         */

    }, {
        key: 'determineQuadrant',
        value: function determineQuadrant(lonlat) {

            var quadrant = "";
            var center = this.getCenterLonLat();

            quadrant += lonlat.lat < center.lat ? "b" : "t";
            quadrant += lonlat.lon < center.lon ? "l" : "r";

            return quadrant;
        }

        /**
         * @function SuperMap.Bounds.prototype.wrapDateLine
         * @description 将当前bounds移动到最大边界范围内部（所谓的内部是相交或者内部）。
         * @example
         * var bounds = new SuperMap.Bounds(380-40400-20);
         * var maxExtent = new SuperMap.Bounds(-180-9010080);
         * //新的bounds
         * var newBounds = bounds.wrapDateLine(maxExtent);
         * @param maxExtent - {SuperMap.Bounds} 最大的边界范围（一般是全球范围）。
         * @param options - {Object} 可选选项参数。<br>
         *         leftTolerance - {float} left允许的误差。默认为0。<br>
         *         rightTolerance - {float} right允许的误差。默认为0。
         * @returns {SuperMap.Bounds} 克隆当前边界。如果当前边界完全在最大范围之外此函数则返回一个不同值的边界，
         *                             若落在最大边界的左边，则给当前的bounds值加上最大范围的宽度，即向右移动，
         *                             若落在右边，则向左移动，即给当前的bounds值加上负的最大范围的宽度。
         */

    }, {
        key: 'wrapDateLine',
        value: function wrapDateLine(maxExtent, options) {
            options = options || {};

            var leftTolerance = options.leftTolerance || 0;
            var rightTolerance = options.rightTolerance || 0;

            var newBounds = this.clone();

            if (maxExtent) {
                var width = maxExtent.getWidth();
                //如果 newBounds 在 maxExtent 的左边，那么一直向右移动，直到相交或者包含为止，每次移动width
                //shift right?
                while (newBounds.left < maxExtent.left && newBounds.right - rightTolerance <= maxExtent.left) {
                    newBounds = newBounds.add(width, 0);
                }
                //如果 newBounds 在 maxExtent 的右边，那么一直向左移动，直到相交或者包含为止，每次移动width
                //shift left?
                while (newBounds.left + leftTolerance >= maxExtent.right && newBounds.right > maxExtent.right) {
                    newBounds = newBounds.add(-width, 0);
                }
                //如果和右边相交，左边又在内部，那么再次向左边移动一次
                // crosses right only? force left
                var newLeft = newBounds.left + leftTolerance;
                if (newLeft < maxExtent.right && newLeft > maxExtent.left && newBounds.right - rightTolerance > maxExtent.right) {
                    newBounds = newBounds.add(-width, 0);
                }
            }

            return newBounds;
        }

        /**
         * @function SuperMap.Bounds.prototype.toServerJSONObject
         * @description 转换成对应的 JSON 格式对象。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * var obj = bounds.toServerJSONObject();
         * @returns {Object} 返回json 格式的Object对象。
         */

    }, {
        key: 'toServerJSONObject',
        value: function toServerJSONObject() {
            var jsonObject = {
                rightTop: { x: this.right, y: this.top },
                leftBottom: { x: this.left, y: this.bottom },
                left: this.left,
                right: this.right,
                top: this.top,
                bottom: this.bottom
            };
            return jsonObject;
        }

        /**
         *
         * @function SuperMap.Bounds.prototype.destroy
         * @description 销毁此对象。
         * 销毁后此对象的所有属性为null，而不是初始值。
         * @example
         * var bounds = new SuperMap.Bounds(-180-9010080);
         * bounds.destroy();
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.left = null;
            this.right = null;
            this.top = null;
            this.bottom = null;
            this.centerLonLat = null;
        }

        /**
         * @function SuperMap.Bounds.fromString
         * @description 通过字符串参数创建新的bounds的构造函数。
         * @example
         * var bounds = SuperMap.Bounds.fromString("-180-9010080");
         * @param str - {string} 边界字符串，用逗号隔开 (e.g. <i>"5421045"</i>)
         * @param reverseAxisOrder - {boolean} 是否反转轴顺序.
         * 如果设为true，则倒转顺序（bottomlefttopright）否则按正常轴顺序（leftbottomrighttop）。
         * @returns {SuperMap.Bounds} 返回给定的字符串创建的新的边界对象
         */

    }], [{
        key: 'fromString',
        value: function fromString(str, reverseAxisOrder) {
            var bounds = str.split(",");
            return Bounds.fromArray(bounds, reverseAxisOrder);
        }
    }, {
        key: 'fromArray',


        /**
         * @function SuperMap.Bounds.fromArray
         * @description 通过边界框数组创建Bounds。
         * @example
         * var bounds = SuperMap.Bounds.fromArray([-180,-90,100,80]);
         * @param bbox - {Array(float)} 边界值数组。 (e.g. <i>[5,42,10,45]</i>)
         * @param reverseAxisOrder - {boolean} 是否是反转轴顺序。如果设为true，则倒转顺序（bottom,left,top,right）,否则按正常轴顺序（left,bottom,right,top）。
         * @returns {SuperMap.Bounds} 返回根据传入的数组创建的新的边界对象。
         */
        value: function fromArray(bbox, reverseAxisOrder) {
            return reverseAxisOrder === true ? new Bounds(bbox[1], bbox[0], bbox[3], bbox[2]) : new Bounds(bbox[0], bbox[1], bbox[2], bbox[3]);
        }
    }, {
        key: 'fromSize',


        /**
         * @function SuperMap.Bounds.fromSize
         * @description 通过传入的边界大小来创建新的边界。
         * @example
         * var bounds = SuperMap.Bounds.fromSize(new SuperMap.Size(20,10));
         * @param size - {SuperMap.Size} 传入的边界大小。
         * @returns {SuperMap.Bounds} 返回根据传入的边界大小的创建新的边界。
         */
        value: function fromSize(size) {
            return new Bounds(0, size.h, size.w, 0);
        }
    }, {
        key: 'oppositeQuadrant',


        /**
         * @function SuperMap.Bounds.oppositeQuadrant
         * @description 反转象限。"t"和"b" 交换，"r"和"l"交换, 如："tl"变为"br"。
         * @param quadrant - {string} 代表象限的字符串，如："tl"。
         * @returns {string} 反转后的象限。
         */
        value: function oppositeQuadrant(quadrant) {
            var opp = "";

            opp += quadrant.charAt(0) === 't' ? 'b' : 't';
            opp += quadrant.charAt(1) === 'l' ? 'r' : 'l';

            return opp;
        }
    }]);

    return Bounds;
}();

exports["default"] = Bounds;

_SuperMap2["default"].Bounds = Bounds;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _WKT = __webpack_require__(61);

var _WKT2 = _interopRequireDefault(_WKT);

var _Vector = __webpack_require__(57);

var _Vector2 = _interopRequireDefault(_Vector);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Geometry
 * @classdesc 几何对象类，描述地理对象的几何图形。
 */
var Geometry = function () {

    /**
     * @member SuperMap.Geometry.prototype.bounds - {SuperMap.Bounds}
     * @description 几何对象的范围。
     */


    /**
     * @member SuperMap.Geometry.prototype.id - {string}
     * @description  此几何对象的唯一标示符。
     */
    function Geometry() {
        _classCallCheck(this, Geometry);

        this.id = null;
        this.parent = null;
        this.bounds = null;
        this.SRID = null;
        this.CLASS_NAME = "SuperMap.Geometry";

        this.id = _Util.Util.createUniqueID(this.CLASS_NAME + "_");
    }

    /**
     * @function SuperMap.Geometry.prototype.destroy
     * @description 解构Geometry类，释放资源。
     */


    /**
     * @member SuperMap.Geometry.prototype.SRID - {interger}
     * @description 投影坐标参数。通过该参数，服务器判断Geometry对象的坐标参考系是否与数据集相同，如果不同，则在数据入库前进行投影变换。
     * @example
     *   var geometry= new SuperMap.Geometry();
     *   geometry. SRID=4326;
     */


    /**
     * @member SuperMap.Geometry.prototype.parent - {SuperMap.Geometry}
     * @description 当几何对象添加到组件上的时候被设置。
     */


    _createClass(Geometry, [{
        key: 'destroy',
        value: function destroy() {
            this.id = null;
            this.bounds = null;
            this.SRID = null;
        }

        /**
         * @function SuperMap.Geometry.prototype.clone
         * @description 创建克隆的几何图形。克隆的几何图形不设置非标准的属性。
         * @returns {SuperMap.Geometry} 克隆的几何图形。
         */

    }, {
        key: 'clone',
        value: function clone() {
            return new Geometry();
        }

        /**
         * @function SuperMap.Geometry.prototype.setBounds
         * @description 设置此几何对象的bounds。
         * @param bounds - {SuperMap.Bounds}
         */

    }, {
        key: 'setBounds',
        value: function setBounds(bounds) {
            if (bounds) {
                this.bounds = bounds.clone();
            }
        }

        /**
         * @function SuperMap.Geometry.prototype.clearBounds
         * @description 清除几何对象的bounds。
         * 如果该对象有父类，也会清除父类几何对象的bounds。
         */

    }, {
        key: 'clearBounds',
        value: function clearBounds() {
            this.bounds = null;
            if (this.parent) {
                this.parent.clearBounds();
            }
        }

        /**
         * @function SuperMap.Geometry.prototype.extendBounds
         * @description 扩展新的Bounds。
         * @param newBounds - {SuperMap.Bounds}
         */

    }, {
        key: 'extendBounds',
        value: function extendBounds(newBounds) {
            var bounds = this.getBounds();
            if (!bounds) {
                this.setBounds(newBounds);
            } else {
                this.bounds.extend(newBounds);
            }
        }

        /**
         * @function SuperMap.Geometry.prototype.getBounds
         * @description 获得几何图形的边界。如果没有设置边界，可通过计算获得。
         * @returns {SuperMap.Bounds}返回的几何对象的边界。
         */

    }, {
        key: 'getBounds',
        value: function getBounds() {
            if (this.bounds == null) {
                this.calculateBounds();
            }
            return this.bounds;
        }

        /**
         * @function SuperMap.Geometry.prototype.calculateBounds
         * @description 重新计算几何图形的边界。（需要在子类中实现此方法）
         */

    }, {
        key: 'calculateBounds',
        value: function calculateBounds() {}
        //
        // This should be overridden by subclasses.
        //


        /**
         * @function SuperMap.Geometry.prototype.distanceTo
         * @description 计算两个几个图形间的最小距离（x-y平面坐标系下）。（需要在子类中实现此方法）
         * @param geometry - {SuperMap.Geometry} 目标几何图形.
         * @param options - {Object} 距离计算需要设计的可选属性。有效的选项取决于特定的几何类型。
         * @returns {number | Object} 两个几个图形间的距离。
         */

    }, {
        key: 'distanceTo',
        value: function distanceTo(geometry, options) {}

        /**
         * @function SuperMap.Geometry.prototype.getVertices
         * @description 返回几何图形的所有顶点的列表。（需要在子类中实现此方法）
         * @param nodes - {boolean} 如果是true，线则只返回线的末端点，如果false，仅仅返回顶点，如果没有设置，则返回顶点。
         * @returns {Array} 几何图形的顶点列表。
         */

    }, {
        key: 'getVertices',
        value: function getVertices(nodes) {}

        /**
         * @function SuperMap.Geometry.prototype.atPoint
         * @description 确定坐标是否在几何对象的范围内。
         * @param lonlat -{SuperMap.LonLat}
         * @param toleranceLon - {float} 可选参数，经度的偏移。
         * @param toleranceLat - {float}  可选参数，纬度的偏移。
         * @returns {boolean} 判断传入的坐标是否在指定的范围内 。
         *
         */

    }, {
        key: 'atPoint',
        value: function atPoint(lonlat, toleranceLon, toleranceLat) {
            var atPoint = false;
            var bounds = this.getBounds();
            if (bounds != null && lonlat != null) {

                var dX = toleranceLon != null ? toleranceLon : 0;
                var dY = toleranceLat != null ? toleranceLat : 0;

                var toleranceBounds = new _SuperMap2["default"].Bounds(this.bounds.left - dX, this.bounds.bottom - dY, this.bounds.right + dX, this.bounds.top + dY);

                atPoint = toleranceBounds.containsLonLat(lonlat);
            }
            return atPoint;
        }

        /**
         * @function SuperMap.Geometry.prototype.getLength
         * @description 计算几何对象的长度 ，此方法需要在子类中定义 。
         * @returns {float} 集合长度。
         */

    }, {
        key: 'getLength',
        value: function getLength() {
            //to be overridden by geometries that actually have a length
            //
            return 0.0;
        }

        /**
         * @function SuperMap.Geometry.prototype.getArea
         * @description 计算几何对象的面积 ，此方法需要在子类中定义  。
         * @returns {float} 集合表示的面积。
         */

    }, {
        key: 'getArea',
        value: function getArea() {
            //to be overridden by geometries that actually have an area
            //
            return 0.0;
        }

        /**
         * @function SuperMap.Geometry.prototype.getCentroid
         * @description 计算几何图形的质心。（需要在子类中实现此方法）
         * @returns {SuperMap.Geometry.Point} 采集的质心。
         */

    }, {
        key: 'getCentroid',
        value: function getCentroid() {
            return null;
        }

        /**
         * @function SuperMap.Geometry.prototype.toString
         * @description 返回geometry对象的字符串表述，需要引入{@link SuperMap.Format.WKT}。此方法只能在子类实现，在父类使用会报错。
         * @returns {string} geometry对象的字符串表述(Well-Known Text)。
         */

    }, {
        key: 'toString',
        value: function toString() {
            var string;
            if (_WKT2["default"]) {
                var wkt = new _WKT2["default"]();
                string = wkt.write(new _Vector2["default"](this));
            } else {
                string = Object.prototype.toString.call(this);
            }
            return string;
        }

        /**
         * @function SuperMap.Geometry.fromWKT
         * @description 从一个给定的字符串生成一个geometry对象，需要引入SuperMap.Format.WKT，该方法方可生效。
         * @example
         * var geometry= new SuperMap.Geometry.fromWKT("POINT(0 0)");
         * geometry.x=0;
         * @param wkt - {string} 描述geometry信息的字符串(A string representing the geometry in Well-Known Text.)
         * @returns {SuperMap.Geometry} 适当类型的geometry对象(A geometry of the appropriate class).
         */

    }], [{
        key: 'fromWKT',
        value: function fromWKT(wkt) {
            var geom;
            if (_WKT2["default"]) {
                var format = Geometry.fromWKT.format;
                if (!format) {
                    format = new _WKT2["default"]();
                    Geometry.fromWKT.format = format;
                }
                var result = format.read(wkt);
                if (result instanceof _Vector2["default"]) {
                    geom = result.geometry;
                } else if (_Util.Util.isArray(result)) {
                    var len = result.length;
                    var components = new Array(len);
                    for (var i = 0; i < len; ++i) {
                        components[i] = result[i].geometry;
                    }
                    geom = new Geometry.Collection(components);
                }
            }
            return geom;
        }

        /**
         * @function SuperMap.Geometry.prototype.SuperMap.Geometry.segmentsIntersect
         * @description 线段相交。该方法是判断两条线段是否相交。计算并返回相交的point。如果seg1.x2 >= seg2.x1 || seg2.x2 >= seg1.x1 ，该方法明显不会被调用。
         * @param seg1 - {Object} 该对象包含的属性是 x1 y1 x2和y2。起始点是 由x1 and y1构成，终点是有x2 and y2组成，必须满足的是x1 < x2。
         * @param seg2 - {Object} 该对象包含的属性是 x1 y1 x2和y2。起始点是 由x1 and y1构成，终点是有x2 and y2组成，必须满足的是x1 < x2。
         * @param options - {Object} Optional properties for calculating the intersection.该对象是判断是否计算相交的点。<br>
         *         point - {boolean} 返回相交点。如果设置为false，说明实际的相交点不需要计算出来。如果设置为true并且这两条线段相交，返回相交的点 。
         *                           如果设置为true，但是两条线段不相交，返回false。如果设置为true，但是两条线段平行，则返回true。<br>
         *         tolerance - {number} 如果设置该值不为空，两条线段在容线的范围内，则会被当作相交。此外，如果point这个属性为true，计算相交的容线距离终点端点将返回而不是计算相交。
         * @returns {boolean | SuperMap.Geometry.Point} 返回线之间是否相交，如果设置点属性为true的话，会返回相交的点坐标。如果点为true，线重合，将会返回true（相交的等于最短的线）。
         */

    }, {
        key: 'segmentsIntersect',
        value: function segmentsIntersect(seg1, seg2, options) {
            var point = options && options.point;
            var tolerance = options && options.tolerance;
            var intersection = false;
            var x11_21 = seg1.x1 - seg2.x1;
            var y11_21 = seg1.y1 - seg2.y1;
            var x12_11 = seg1.x2 - seg1.x1;
            var y12_11 = seg1.y2 - seg1.y1;
            var y22_21 = seg2.y2 - seg2.y1;
            var x22_21 = seg2.x2 - seg2.x1;
            var d = y22_21 * x12_11 - x22_21 * y12_11;
            var n1 = x22_21 * y11_21 - y22_21 * x11_21;
            var n2 = x12_11 * y11_21 - y12_11 * x11_21;
            if (d == 0) {
                // parallel
                if (n1 == 0 && n2 == 0) {
                    // coincident
                    intersection = true;
                }
            } else {
                var along1 = n1 / d;
                var along2 = n2 / d;
                if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
                    // intersect
                    if (!point) {
                        intersection = true;
                    } else {
                        // calculate the intersection point
                        var x = seg1.x1 + along1 * x12_11;
                        var y = seg1.y1 + along1 * y12_11;
                        intersection = new Geometry.Point(x, y);
                    }
                }
            }
            if (tolerance) {
                var dist;
                if (intersection) {
                    if (point) {
                        var segs = [seg1, seg2];
                        var seg, x, y;
                        // check segment endpoints for proximity to intersection
                        // set intersection to first endpoint within the tolerance
                        outer: for (var i = 0; i < 2; ++i) {
                            seg = segs[i];
                            for (var j = 1; j < 3; ++j) {
                                x = seg["x" + j];
                                y = seg["y" + j];
                                dist = Math.sqrt(Math.pow(x - intersection.x, 2) + Math.pow(y - intersection.y, 2));
                                if (dist < tolerance) {
                                    intersection.x = x;
                                    intersection.y = y;
                                    break outer;
                                }
                            }
                        }
                    }
                } else {
                    // no calculated intersection, but segments could be within
                    // the tolerance of one another
                    var segs = [seg1, seg2];
                    var source, target, x, y, p, result;
                    // check segment endpoints for proximity to intersection
                    // set intersection to first endpoint within the tolerance
                    outer: for (var i = 0; i < 2; ++i) {
                        source = segs[i];
                        target = segs[(i + 1) % 2];
                        for (var j = 1; j < 3; ++j) {
                            p = { x: source["x" + j], y: source["y" + j] };
                            result = Geometry.distanceToSegment(p, target);
                            if (result.distance < tolerance) {
                                if (point) {
                                    intersection = new Geometry.Point(p.x, p.y);
                                } else {
                                    intersection = true;
                                }
                                break outer;
                            }
                        }
                    }
                }
            }
            return intersection;
        }

        /**
         * @function SuperMap.Geometry.distanceToSegment
         * @description 计算点到直线的距离。
         * @param point - {Object} 一个点包含x和y坐标。
         * @param segment - {Object} 一个对象包含 x1 y1 x2 and y2坐标。
         * @example
         *        var point={
         *         x:0
         *          y:13
         *          } 
         *            seg1={
         *             x1:6
         *             y1:5
         *            x2:6
         *            y2:12
         *       } ;
         *       var geo=SuperMap.Geometry.distanceToSegment(pointseg1);
         * @returns {Object} 返回的是点到直线的最短距离，以及点与直线最短距离相交的点坐标（xy）。
         */

    }, {
        key: 'distanceToSegment',
        value: function distanceToSegment(point, segment) {
            var x0 = point.x;
            var y0 = point.y;
            var x1 = segment.x1;
            var y1 = segment.y1;
            var x2 = segment.x2;
            var y2 = segment.y2;
            var dx = x2 - x1;
            var dy = y2 - y1;
            var along = (dx * (x0 - x1) + dy * (y0 - y1)) / (Math.pow(dx, 2) + Math.pow(dy, 2));
            var x, y;
            if (along <= 0.0) {
                x = x1;
                y = y1;
            } else if (along >= 1.0) {
                x = x2;
                y = y2;
            } else {
                x = x1 + along * dx;
                y = y1 + along * dy;
            }
            return {
                distance: Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)),
                x: x, y: y
            };
        }
    }]);

    return Geometry;
}();

exports["default"] = Geometry;

_SuperMap2["default"].Geometry = Geometry;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Collection2 = __webpack_require__(4);

var _Collection3 = _interopRequireDefault(_Collection2);

var _LineString = __webpack_require__(9);

var _LineString2 = _interopRequireDefault(_LineString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.MultiLineString
 * @classdesc 几何对象多线类。
 * @extends {SuperMap.Geometry.Collection}
 * @param components - {Array<SuperMap.Geometry.LineString>} LineString数组。
 * @example
 * var multi = new SuperMap.Geometry.MultiLineString([
 *      new SuperMap.Geometry.LineString([
 *          new SuperMap.Geometry.Point(1, 0),
 *          new SuperMap.Geometry.Point(0, 1)
 *      ])
 *  ]);
 */
var MultiLineString = function (_Collection) {
    _inherits(MultiLineString, _Collection);

    function MultiLineString(components) {
        _classCallCheck(this, MultiLineString);

        var _this = _possibleConstructorReturn(this, (MultiLineString.__proto__ || Object.getPrototypeOf(MultiLineString)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.LineString"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiLineString";
        return _this;
    }

    /**
     * @function SuperMap.Geometry.MultiLineString.prototype.split
     * @description 用几何对象去分割另一个几何对象。
     * @param geometry - {SuperMap.Geometry} 目标几何对象。
     * @param options - {Object} 可选参数。<br>
     *         mutual - {boolean} Split the source geometry in addition to the target
     *                   geometry.  Default is false.<br>
     *         edge - {boolean} 是否只当与边界相交的时候才进行分割。默认是true。如果为false则在容差范围内相交被分割。
     *         tolerance - {number} 容差。
     * @returns {Array} 被分割的几何对象数组。
     */


    /**
     * @member SuperMap.Geometry.MultiLineString.prototype.componentTypes - {Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.LineString}"]
     */


    _createClass(MultiLineString, [{
        key: 'split',
        value: function split(geometry, options) {
            var results = null;
            var mutual = options && options.mutual;
            var splits, sourceLine, sourceLines, sourceSplit, targetSplit;
            var sourceParts = [];
            var targetParts = [geometry];
            for (var i = 0, len = this.components.length; i < len; ++i) {
                sourceLine = this.components[i];
                sourceSplit = false;
                for (var j = 0; j < targetParts.length; ++j) {
                    splits = sourceLine.split(targetParts[j], options);
                    if (splits) {
                        if (mutual) {
                            sourceLines = splits[0];
                            for (var k = 0, klen = sourceLines.length; k < klen; ++k) {
                                if (k === 0 && sourceParts.length) {
                                    sourceParts[sourceParts.length - 1].addComponent(sourceLines[k]);
                                } else {
                                    sourceParts.push(new MultiLineString([sourceLines[k]]));
                                }
                            }
                            sourceSplit = true;
                            splits = splits[1];
                        }
                        if (splits.length) {
                            // splice in new target parts
                            splits.unshift(j, 1);
                            Array.prototype.splice.apply(targetParts, splits);
                            break;
                        }
                    }
                }
                if (!sourceSplit) {
                    // source line was not hit
                    if (sourceParts.length) {
                        // add line to existing multi
                        sourceParts[sourceParts.length - 1].addComponent(sourceLine.clone());
                    } else {
                        // create a fresh multi
                        sourceParts = [new MultiLineString(sourceLine.clone())];
                    }
                }
            }
            if (sourceParts && sourceParts.length > 1) {
                sourceSplit = true;
            } else {
                sourceParts = [];
            }
            if (targetParts && targetParts.length > 1) {
                targetSplit = true;
            } else {
                targetParts = [];
            }
            if (sourceSplit || targetSplit) {
                if (mutual) {
                    results = [sourceParts, targetParts];
                } else {
                    results = targetParts;
                }
            }
            return results;
        }

        /**
         * @function SuperMap.Geometry.MultiLineString.prototype.splitWith
         * @description 用几何对象去分割另一个几何对象。
         * @param geometry - {SuperMap.Geometry} 目标几何对象。
         * @param options - {Object} 可选参数。<br>
         *         mutual - {boolean} Split the source geometry in addition to the target
         *                   geometry.  Default is false.<br>
         *         edge - {boolean} 是否只当与边界相交的时候才进行分割。默认是true。如果为false则在容差范围内相交被分割。
         *         tolerance - {number} 容差。
         * @returns {Array} 被分割的几何对象数组。
         */

    }, {
        key: 'splitWith',
        value: function splitWith(geometry, options) {
            var results = null;
            var mutual = options && options.mutual;
            var splits, targetLine, sourceLines, sourceSplit, targetSplit, sourceParts, targetParts;
            if (geometry instanceof _LineString2["default"]) {
                targetParts = [];
                sourceParts = [geometry];
                for (var i = 0, len = this.components.length; i < len; ++i) {
                    targetSplit = false;
                    targetLine = this.components[i];
                    for (var j = 0; j < sourceParts.length; ++j) {
                        splits = sourceParts[j].split(targetLine, options);
                        if (splits) {
                            if (mutual) {
                                sourceLines = splits[0];
                                if (sourceLines.length) {
                                    // splice in new source parts
                                    sourceLines.unshift(j, 1);
                                    Array.prototype.splice.apply(sourceParts, sourceLines);
                                    j += sourceLines.length - 2;
                                }
                                splits = splits[1];
                                if (splits.length === 0) {
                                    splits = [targetLine.clone()];
                                }
                            }
                            for (var k = 0, klen = splits.length; k < klen; ++k) {
                                if (k === 0 && targetParts.length) {
                                    targetParts[targetParts.length - 1].addComponent(splits[k]);
                                } else {
                                    targetParts.push(new MultiLineString([splits[k]]));
                                }
                            }
                            targetSplit = true;
                        }
                    }
                    if (!targetSplit) {
                        // target component was not hit
                        if (targetParts.length) {
                            // add it to any existing multi-line
                            targetParts[targetParts.length - 1].addComponent(targetLine.clone());
                        } else {
                            // or start with a fresh multi-line
                            targetParts = [new MultiLineString([targetLine.clone()])];
                        }
                    }
                }
            } else {
                results = geometry.split(this);
            }
            if (sourceParts && sourceParts.length > 1) {
                sourceSplit = true;
            } else {
                sourceParts = [];
            }
            if (targetParts && targetParts.length > 1) {
                targetSplit = true;
            } else {
                targetParts = [];
            }
            if (sourceSplit || targetSplit) {
                if (mutual) {
                    results = [sourceParts, targetParts];
                } else {
                    results = targetParts;
                }
            }
            return results;
        }
    }]);

    return MultiLineString;
}(_Collection3["default"]);

exports["default"] = MultiLineString;

_SuperMap2["default"].Geometry.MultiLineString = MultiLineString;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Collection2 = __webpack_require__(4);

var _Collection3 = _interopRequireDefault(_Collection2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.MultiPolygon
 * @classdesc 几何对象多多边形类。
 * @extends {SuperMap.Geometry.Collection}
 * @param  components - {Array<SuperMap.Geometry.Polygon>} 形成 MultiPolygon 的多边形数组。
 * @example
 * var points1 = [new SuperMap.Geometry.Point(10,10),new SuperMap.Geometry.Point(0,0)];
 * var points2 = [new SuperMap.Geometry.Point(10,10),new SuperMap.Geometry.Point(0,0),new SuperMap.Geometry.Point(3,3),new SuperMap.Geometry.Point(10,10)];
 *
 * var linearRing1 = new SuperMap.Geometry.LinearRing(points1);
 * var linearRing2 = new SuperMap.Geometry.LinearRing(points2);
 *
 * var polygon1 = new SuperMap.Geometry.Polygon([linearRing1]);
 * var polygon2 = new SuperMap.Geometry.Polygon([linearRing2]);
 *
 * var multiPolygon1 = new SuperMap.Geometry.MultiPolygon([polygon1,polygon2]);
 */
var MultiPolygon = function (_Collection) {
    _inherits(MultiPolygon, _Collection);

    function MultiPolygon(components) {
        _classCallCheck(this, MultiPolygon);

        var _this = _possibleConstructorReturn(this, (MultiPolygon.__proto__ || Object.getPrototypeOf(MultiPolygon)).call(this, components));

        _this.componentTypes = ["SuperMap.Geometry.Polygon"];
        _this.CLASS_NAME = "SuperMap.Geometry.MultiPolygon";
        return _this;
    }

    /**
     * @member SuperMap.Geometry.MultiPolygon.prototype.componentTypes -{Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.Polygon}"]
     */


    return MultiPolygon;
}(_Collection3["default"]);

exports["default"] = MultiPolygon;

_SuperMap2["default"].Geometry.MultiPolygon = MultiPolygon;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Format
 * @classdesc 读写各种格式的格式类基类。其子类应该包含并实现read和write方法。
 * @param options - {Object} 可选参数。<br>
 *        keepData - {boolean} 如果设置为true， data属性会指向被解析的对象（例如json或xml数据对象）。
 */
var Format = function () {

    /**
     * @member SuperMap.Format.prototype.data - {Object}
     * @description 当 <keepData> 属性设置为true，这是传递给<read>操作的要被解析的字符串。
     */
    function Format(options) {
        _classCallCheck(this, Format);

        this.options = null;
        this.data = null;
        this.keepData = false;
        this.CLASS_NAME = "SuperMap.Format";

        _SuperMap2["default"].Util.extend(this, options);
        this.options = options;
    }

    /**
     * @function SuperMap.Format.prototype.destroy
     * @description 销毁该格式类，释放相关资源。
     */


    /**
     * APIProperty: keepData
     * @member SuperMap.Format.prototype.keepData - {Object}
     * @description 保持最近读到的数据的引用（通过 <data> 属性）。默认值是false。
     */


    /**
     * @member SuperMap.Format.prototype.options - {Object}
     * @description 可选参数。
     */


    _createClass(Format, [{
        key: "destroy",
        value: function destroy() {}
        //用来销毁该格式类，释放相关资源


        /**
         * @function SuperMap.Format.prototype.read
         * @description 来从字符串中读取数据。
         * @param data - {string} 读取的数据。
         */

    }, {
        key: "read",
        value: function read(data) {}
        //用来从字符串中读取数据


        /**
         * @function SuperMap.Format.prototype.write
         * @description 将对象写成字符串。
         * @param object - {Object} 可序列化的对象。
         * @return {string} 对象被写成字符串。
         */

    }, {
        key: "write",
        value: function write(object) {
            //用来写字符串
        }
    }]);

    return Format;
}();

exports["default"] = Format;

_SuperMap2["default"].Format = Format;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Bounds = __webpack_require__(30);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _MultiPoint = __webpack_require__(20);

var _MultiPoint2 = _interopRequireDefault(_MultiPoint);

var _LinearRing = __webpack_require__(17);

var _LinearRing2 = _interopRequireDefault(_LinearRing);

var _LineString = __webpack_require__(9);

var _LineString2 = _interopRequireDefault(_LineString);

var _MultiLineString = __webpack_require__(32);

var _MultiLineString2 = _interopRequireDefault(_MultiLineString);

var _Polygon = __webpack_require__(21);

var _Polygon2 = _interopRequireDefault(_Polygon);

var _MultiPolygon = __webpack_require__(33);

var _MultiPolygon2 = _interopRequireDefault(_MultiPolygon);

var _ServerStyle = __webpack_require__(65);

var _ServerStyle2 = _interopRequireDefault(_ServerStyle);

var _Route = __webpack_require__(63);

var _Route2 = _interopRequireDefault(_Route);

var _Util = __webpack_require__(2);

var _REST = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** * @private * @class SuperMap.ServerGeometry * @description 服务端几何对象类。 * 该类描述几何对象（矢量）的特征数据（坐标点对、几何对象的类型等）。 * 基于服务端的空间分析、空间关系运算、查询等 GIS 服务功能使用服务端几何对象。 */
var ServerGeometry = function () {

  /*     * Constructor: SuperMap.ServerGeometry     * 服务端几何对象类构造函数。     *     * Parameters:     * options - {Object} 参数。     *     * Allowed options properties:     * id - {String} 服务端几何对象唯一标识符。     * style - {<SuperMap.ServerStyle>}  服务端几何对象的风格。     * parts - {Array(Number)} 服务端几何对象中各个子对象所包含的节点个数。     * points - {Array(<Point>)} 组成几何对象的节点的坐标对数组。     * type - {<SuperMap.GeometryType>} 几何对象的类型。     */

  /*     * APIProperty: type     * {<SuperMap.GeometryType>} 几何对象的类型(GeometryType)。     */

  /*     * APIProperty: parts     * {Array(Number)} 服务端几何对象中各个子对象所包含的节点个数。     * 1.几何对象从结构上可以分为简单几何对象和复杂几何对象。     * 简单几何对象与复杂几何对象的区别：简单的几何对象一般为单一对象，     * 而复杂的几何对象由多个简单对象组成或经过一定的空间运算之后产生，     * 如：矩形为简单的区域对象，而中空的矩形为复杂的区域对象。     * 2.通常情况，一个简单几何对象的子对象就是它本身，     * 因此对于简单对象来说的该字段为长度为1的整型数组，     * 该字段的值就是这个简单对象节点的个数。     * 如果一个几何对象是由几个简单对象组合而成的，     * 例如，一个岛状几何对象由3个简单的多边形组成而成，     * 那么这个岛状的几何对象的 Parts 字段值就是一个长度为3的整型数组，     * 数组中每个成员的值分别代表这三个多边形所包含的节点个数。     */


  /*     * APIProperty: id     * {String} 服务端几何对象唯一标识符。     */
  function ServerGeometry(options) {
    _classCallCheck(this, ServerGeometry);

    this.id = 0;
    this.style = null;
    this.parts = null;
    this.points = null;
    this.type = null;
    this.prjCoordSys = null;
    this.CLASS_NAME = "SuperMap.ServerGeometry";

    if (options) {
      _Util.Util.extend(this, options);
    }
  }

  /*     * APIMethod: destroy     * 释放资源，将引用资源的属性置空。     */

  /*     * APIProperty: prjCoordSys     * {Object}投影坐标参数,现仅在缓冲区分析中有效。     */

  /*     * APIProperty: points     * {Array(<Point>)} 组成几何对象的节点的坐标对数组。     * 1.所有几何对象（点、线、面）都是由一些简单的点坐标组成的，     * 该字段存放了组成几何对象的点坐标的数组。     * 对于简单的面对象，他的起点和终点的坐标点相同。     * 2.对于复杂的几何对象，根据 Parts 属性来确定每一个组成复杂几何对象的简单对象所对应的节点的个数，     * 从而确定 Points 字段中坐标对的分配归属问题。     */


  /*     * APIProperty: style     * {<SuperMap.ServerStyle>} 服务端几何对象的风格(ServerStyle)。     */


  _createClass(ServerGeometry, [{
    key: 'destroy',
    value: function destroy() {
      var me = this;
      me.id = null;
      me.style = null;
      me.parts = null;
      me.partTopo = null;
      me.points = null;
      me.type = null;
      me.prjCoordSys = null;
    }

    /*     * APIMethod: toGeometry     * 将服务端几何对象 ServerGeometry 转换为客户端几何对象 Geometry。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeometry',
    value: function toGeometry() {
      var me = this,
          geoType = me.type;
      switch (geoType) {
        case _REST.GeometryType.POINT:
          return me.toGeoPoint();
        case _REST.GeometryType.LINE:
          return me.toGeoLine();
        case _REST.GeometryType.LINEM:
          return me.toGeoLinem();
        case _REST.GeometryType.REGION:
          return me.toGeoRegion();
        case _REST.GeometryType.POINTEPS:
          return me.toGeoPoint();
        case _REST.GeometryType.LINEEPS:
          return me.toGeoLineEPS();
        case _REST.GeometryType.REGIONEPS:
          return me.toGeoRegionEPS();
      }
    }

    /*     * Method: toGeoPoint     * 将服务端的点几何对象转换为客户端几何对象。     * 包括 Point 、MultiPoint。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoPoint',
    value: function toGeoPoint() {
      var me = this,
          geoParts = me.parts || [],
          geoPoints = me.points || [],
          len = geoParts.length;
      if (len > 0) {
        if (len === 1) {
          return new _Point2["default"](geoPoints[0].x, geoPoints[0].y);
        } else {
          for (var i = 0, pointList = []; i < len; i++) {
            pointList.push(new _Point2["default"](geoPoints[i].x, geoPoints[i].y));
          }
          return new _MultiPoint2["default"](pointList);
        }
      } else {
        return null;
      }
    }

    /*     * Method: toGeoLine     * 将服务端的线几何对象转换为客户端几何对象。     * 包括LinearRing、LineString、MultiLineString。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoLine',
    value: function toGeoLine() {
      var me = this,
          geoParts = me.parts || [],
          geoPoints = me.points || [],
          len = geoParts.length;
      if (len > 0) {
        if (len === 1) {
          for (var i = 0, pointList = []; i < geoParts[0]; i++) {
            pointList.push(new _Point2["default"](geoPoints[i].x, geoPoints[i].y));
          }
          //判断线是否闭合，如果闭合，则返回LinearRing，否则返回LineString
          if (pointList[0].equals(pointList[geoParts[0] - 1])) {
            return new _LinearRing2["default"](pointList);
          } else {
            return new _LineString2["default"](pointList);
          }
        } else {
          for (var i = 0, lineList = []; i < len; i++) {
            for (var j = 0, pointList = []; j < geoParts[i]; j++) {
              pointList.push(new _Point2["default"](geoPoints[j].x, geoPoints[j].y));
            }
            lineList.push(new _LineString2["default"](pointList));
            geoPoints.splice(0, geoParts[i]);
          }
          return new _MultiLineString2["default"](lineList);
        }
      } else {
        return null;
      }
    }

    /*     * Method: toGeoLineEPS     * 将服务端的线几何对象转换为客户端几何对象。     * 包括LinearRing、LineString、MultiLineString。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoLineEPS',
    value: function toGeoLineEPS() {
      var me = this,
          geoParts = me.parts || [],
          geoPoints = me.points || [],
          i,
          j,
          pointList,
          lineList,
          lineEPS,
          len = geoParts.length;
      if (len > 0) {
        if (len === 1) {
          for (i = 0, pointList = []; i < geoParts[0]; i++) {
            pointList.push(new _Point2["default"](geoPoints[i].x, geoPoints[i].y, geoPoints[i].type));
          }
          //判断线是否闭合，如果闭合，则返回LinearRing，否则返回LineString
          if (pointList[0].equals(pointList[geoParts[0] - 1])) {
            lineEPS = _LineString2["default"].createLineEPS(pointList);
            return new _SuperMap2["default"].Geometry.LineRing(lineEPS);
          } else {
            lineEPS = _LineString2["default"].createLineEPS(pointList);
            return new _LineString2["default"](lineEPS);
          }
        } else {
          for (i = 0, lineList = []; i < len; i++) {
            for (j = 0, pointList = []; j < geoParts[i]; j++) {
              pointList.push(new _Point2["default"](geoPoints[j].x, geoPoints[j].y));
            }
            lineEPS = _LineString2["default"].createLineEPS(pointList);
            lineList.push(new _LineString2["default"](lineEPS));
            geoPoints.splice(0, geoParts[i]);
          }
          return new _MultiLineString2["default"](lineList);
        }
      } else {
        return null;
      }
    }

    /*     * Method: toGeoLine     * 将服务端的路由线几何对象转换为客户端几何对象。     * 包括LinearRing、LineString、MultiLineString。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoLinem',
    value: function toGeoLinem() {
      var me = this;
      return new _Route2["default"].fromJson(me);
    }

    /*     * Method: toGeoRegion     * 将服务端的面几何对象转换为客户端几何对象。     * 类型为Polygon。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoRegion',
    value: function toGeoRegion() {
      var me = this,
          geoParts = me.parts || [],
          geoTopo = me.partTopo || [],
          geoPoints = me.points || [],
          len = geoParts.length;
      if (len <= 0) {
        return null;
      }
      var polygonArray = [];
      var pointList = [];
      if (len == 1) {
        for (var i = 0; i < geoPoints.length; i++) {
          pointList.push(new _Point2["default"](geoPoints[i].x, geoPoints[i].y));
        }
        polygonArray.push(new _Polygon2["default"]([new _LinearRing2["default"](pointList)]));
        pointList = [];
        return new _MultiPolygon2["default"](polygonArray);
      }
      //处理复杂面
      var CCWArray = [];
      var areaArray = [];
      var polygonArrayTemp = [];
      //polyon岛洞标识数组，初始都是岛。
      var CCWIdent = [];
      for (var i = 0, pointIndex = 0; i < len; i++) {
        for (var j = 0; j < geoParts[i]; j++) {
          pointList.push(new _Point2["default"](geoPoints[pointIndex + j].x, geoPoints[pointIndex + j].y));
        }
        pointIndex += geoParts[i];
        var polygon = new _Polygon2["default"]([new _LinearRing2["default"](pointList)]);
        pointList = [];
        polygonArrayTemp.push(polygon);
        CCWIdent.push(1);
        areaArray.push(polygon.getArea());
      }
      //根据面积排序
      ServerGeometry.bubbleSort(areaArray, polygonArrayTemp, geoTopo);
      //iServer 9D新增字段
      if (geoTopo.length === 0) {
        //岛洞底层判断原则：将所有的子对象按照面积排序，面积最大的直接判定为岛（1），从面积次大的开始处理，
        // 如果发现该对象在某个面积大于它的对象之中（即被包含），则根据包含它的对象的标识（1 or -1），指定其标识（-1 or 1），
        // 依次处理完所有对象，就得到了一个标识数组，1表示岛，-1表示洞
        //目标polygon索引列表 -1标示没有被任何polygon包含，
        var targetArray = [];
        for (var i = 1; i < polygonArrayTemp.length; i++) {
          for (var j = i - 1; j >= 0; j--) {
            targetArray[i] = -1;
            if (polygonArrayTemp[j].getBounds().containsBounds(polygonArrayTemp[i].getBounds())) {
              CCWIdent[i] = CCWIdent[j] * -1;
              if (CCWIdent[i] < 0) {
                targetArray[i] = j;
              }
              break;
            }
          }
        }
        for (var i = 0; i < polygonArrayTemp.length; i++) {
          if (CCWIdent[i] > 0) {
            polygonArray.push(polygonArrayTemp[i]);
          } else {
            polygonArray[targetArray[i]].components = polygonArray[targetArray[i]].components.concat(polygonArrayTemp[i].components);
            //占位
            polygonArray.push('');
          }
        }
      } else {
        //根据面积排序
        //ServerGeometry.bubbleSort(areaArray, polygonArrayTemp,geoTopo);
        var polygonArray = new Array();
        for (var i = 0; i < polygonArrayTemp.length; i++) {
          if (geoTopo[i] && geoTopo[i] == -1) {
            CCWArray = CCWArray.concat(polygonArrayTemp[i].components);
          } else {
            if (CCWArray.length > 0 && polygonArray.length > 0) {
              polygonArray[polygonArray.length - 1].components = polygonArray[polygonArray.length - 1].components.concat(CCWArray);
              CCWArray = [];
            }
            polygonArray.push(polygonArrayTemp[i]);
          }
          if (i == len - 1) {
            var polyLength = polygonArray.length;
            if (!!polyLength) {
              polygonArray[polyLength - 1].components = polygonArray[polyLength - 1].components.concat(CCWArray);
            } else {
              for (var k = 0, length = CCWArray.length; k < length; k++) {
                polygonArray.push(new _Polygon2["default"](CCWArray));
              }
            }
          }
        }
      }
      return new _MultiPolygon2["default"](polygonArray);
    }

    /*     * Method: toGeoRegionEPS     * 将服务端的面几何对象转换为客户端几何对象。     * 类型为Polygon。     *     * Returns     * {<SuperMap.Geometry>} 转换后的客户端几何对象。     */

  }, {
    key: 'toGeoRegionEPS',
    value: function toGeoRegionEPS() {
      var me = this,
          geoParts = me.parts || [],
          geoTopo = me.partTopo || [],
          geoPoints = me.points || [],
          len = geoParts.length;

      if (len <= 0) {
        return null;
      }
      var polygonArray = [];
      var pointList = [];
      var lineEPS;
      if (len == 1) {
        for (var i = 0; i < geoPoints.length; i++) {
          pointList.push(new _Point2["default"](geoPoints[i].x, geoPoints[i].y));
        }

        lineEPS = _LineString2["default"].createLineEPS(pointList);
        polygonArray.push(new _Polygon2["default"]([new _LinearRing2["default"](lineEPS)]));
        pointList = [];
        return new _MultiPolygon2["default"](polygonArray);
      }
      //处理复杂面
      var CCWArray = [];
      var areaArray = [];
      var polygonArrayTemp = [];
      //polyon岛洞标识数组，初始都是岛。
      var CCWIdent = [];
      for (var i = 0, pointIndex = 0; i < len; i++) {
        for (var j = 0; j < geoParts[i]; j++) {
          pointList.push(new _Point2["default"](geoPoints[pointIndex + j].x, geoPoints[pointIndex + j].y));
        }
        pointIndex += geoParts[i];

        lineEPS = _LineString2["default"].createLineEPS(pointList);
        var polygon = new _Polygon2["default"]([new _LinearRing2["default"](lineEPS)]);
        pointList = [];
        polygonArrayTemp.push(polygon);
        CCWIdent.push(1);
        areaArray.push(polygon.getArea());
      }
      //根据面积排序
      ServerGeometry.bubbleSort(areaArray, polygonArrayTemp, geoTopo);
      //iServer 9D新增字段
      if (geoTopo.length === 0) {
        //岛洞底层判断原则：将所有的子对象按照面积排序，面积最大的直接判定为岛（1），从面积次大的开始处理，
        // 如果发现该对象在某个面积大于它的对象之中（即被包含），则根据包含它的对象的标识（1 or -1），指定其标识（-1 or 1），
        // 依次处理完所有对象，就得到了一个标识数组，1表示岛，-1表示洞
        //目标polygon索引列表 -1标示没有被任何polygon包含，
        var targetArray = [];
        for (var i = 1; i < polygonArrayTemp.length; i++) {
          for (var j = i - 1; j >= 0; j--) {
            targetArray[i] = -1;
            if (polygonArrayTemp[j].getBounds().containsBounds(polygonArrayTemp[i].getBounds())) {
              CCWIdent[i] = CCWIdent[j] * -1;
              if (CCWIdent[i] < 0) {
                targetArray[i] = j;
              }
              break;
            }
          }
        }
        for (var i = 0; i < polygonArrayTemp.length; i++) {
          if (CCWIdent[i] > 0) {
            polygonArray.push(polygonArrayTemp[i]);
          } else {
            polygonArray[targetArray[i]].components = polygonArray[targetArray[i]].components.concat(polygonArrayTemp[i].components);
            //占位
            polygonArray.push('');
          }
        }
      } else {
        //根据面积排序
        var polygonArray = new Array();
        for (var i = 0; i < polygonArrayTemp.length; i++) {
          if (geoTopo[i] && geoTopo[i] == -1) {
            CCWArray = CCWArray.concat(polygonArrayTemp[i].components);
          } else {
            if (CCWArray.length > 0 && polygonArray.length > 0) {
              polygonArray[polygonArray.length - 1].components = polygonArray[polygonArray.length - 1].components.concat(CCWArray);
              CCWArray = [];
            }
            polygonArray.push(polygonArrayTemp[i]);
          }
          if (i == len - 1) {
            var polyLength = polygonArray.length;
            if (!!polyLength) {
              polygonArray[polyLength - 1].components = polygonArray[polyLength - 1].components.concat(CCWArray);
            } else {
              for (var k = 0, length = CCWArray.length; k < length; k++) {
                polygonArray.push(new _Polygon2["default"](CCWArray));
              }
            }
          }
        }
      }
      return new _MultiPolygon2["default"](polygonArray);
    }

    /*     * Function: ServerGeometry.fromJson     * 将 JSON 对象表示服务端几何对象转换为 ServerGeometry。     *     * Parameters:     * jsonObject - {Object} 要转换的 JSON 对象。     *     * Returns:     * {<SuperMap.ServerGeometry>} 转化后的 ServerGeometry 对象。     */

  }], [{
    key: 'fromJson',
    value: function fromJson(jsonObject) {
      if (!jsonObject) {
        return;
      }
      return new ServerGeometry({
        id: jsonObject.id,
        style: _ServerStyle2["default"].fromJson(jsonObject.style),
        parts: jsonObject.parts,
        partTopo: jsonObject.partTopo,
        points: jsonObject.points,
        center: jsonObject.center,
        length: jsonObject.length,
        maxM: jsonObject.maxM,
        minM: jsonObject.minM,
        type: jsonObject.type
      });
    }
  }, {
    key: 'fromGeometry',


    /*     * Function: ServerGeometry.fromGeometry     * 将客户端Geometry转换成服务端ServerGeometry。     *     * Parameters:     * geometry - {<SuperMap.Geometry>} 要转换的客户端Geometry对象。     *     * Returns:     * {<SuperMap.ServerGeometry>} 转化后的 ServerGeometry 对象。     */
    value: function fromGeometry(geometry) {
      if (!geometry) {
        return;
      }
      var id = 0,
          parts = [],
          points = [],
          type = null,
          icomponents = geometry.components,
          className = geometry.CLASS_NAME,
          prjCoordSys = { "epsgCode": geometry.SRID };

      if (!isNaN(geometry.id)) {
        id = geometry.id;
      }
      //坑爹的改法，没法，为了支持态势标绘，有时间就得全改
      if (className != "SuperMap.Geometry.LinearRing" && className != "SuperMap.Geometry.LineString" && (geometry instanceof _MultiPoint2["default"] || geometry instanceof _MultiLineString2["default"])) {
        var ilen = icomponents.length;
        for (var i = 0; i < ilen; i++) {
          var partPointsCount = icomponents[i].getVertices().length;
          parts.push(partPointsCount);
          for (var j = 0; j < partPointsCount; j++) {
            points.push(new _Point2["default"](icomponents[i].getVertices()[j].x, icomponents[i].getVertices()[j].y));
          }
        }
        //这里className不是多点就全部是算线
        type = className == "SuperMap.Geometry.MultiPoint" ? _REST.GeometryType.POINT : _REST.GeometryType.LINE;
      } else if (geometry instanceof _MultiPolygon2["default"]) {
        var ilen = icomponents.length;
        for (var i = 0; i < ilen; i++) {
          var polygon = icomponents[i],
              linearRingOfPolygon = polygon.components,
              linearRingOfPolygonLen = linearRingOfPolygon.length;
          for (var j = 0; j < linearRingOfPolygonLen; j++) {
            var partPointsCount = linearRingOfPolygon[j].getVertices().length + 1;
            parts.push(partPointsCount);
            for (var k = 0; k < partPointsCount - 1; k++) {
              points.push(new _Point2["default"](linearRingOfPolygon[j].getVertices()[k].x, linearRingOfPolygon[j].getVertices()[k].y));
            }
            points.push(new _Point2["default"](linearRingOfPolygon[j].getVertices()[0].x, linearRingOfPolygon[j].getVertices()[0].y));
          }
        }
        type = _REST.GeometryType.REGION;
      } else if (geometry instanceof _Polygon2["default"]) {
        var ilen = icomponents.length;
        for (var i = 0; i < ilen; i++) {
          var partPointsCount = icomponents[i].getVertices().length + 1;
          parts.push(partPointsCount);
          for (var j = 0; j < partPointsCount - 1; j++) {
            points.push(new _Point2["default"](icomponents[i].getVertices()[j].x, icomponents[i].getVertices()[j].y));
          }
          points.push(new _Point2["default"](icomponents[i].getVertices()[0].x, icomponents[i].getVertices()[0].y));
        }
        type = _REST.GeometryType.REGION;
      } else {
        var geometryVerticesCount = geometry.getVertices().length;
        for (var j = 0; j < geometryVerticesCount; j++) {
          points.push(new _Point2["default"](geometry.getVertices()[j].x, geometry.getVertices()[j].y));
        }
        if (geometry instanceof _LinearRing2["default"]) {
          points.push(new _Point2["default"](geometry.getVertices()[0].x, geometry.getVertices()[0].y));
          geometryVerticesCount++;
        }
        parts.push(geometryVerticesCount);
        type = geometry instanceof _Point2["default"] ? _REST.GeometryType.POINT : _REST.GeometryType.LINE;
      }

      return new ServerGeometry({
        id: id,
        style: null,
        parts: parts,
        points: points,
        type: type,
        prjCoordSys: prjCoordSys
      });
    }
  }, {
    key: 'IsClockWise',


    /*     * Function: SuperMap.Geometry.IsClockWise     * 判断linearRing中的点的顺序，顺时针？逆时针     * 返回值大于0, 逆时针; 小于0, 顺时针     *     * Parameters:     * geometry - {<SuperMap.Geometry>} 要转换的客户端Geometry对象。     *     * Returns:     * {<Number>}。     */
    value: function IsClockWise(points) {
      var length = points.length;
      if (length < 3) {
        return 0.0;
      }
      var s = points[0].y * (points[length - 1].x - points[1].x);
      points.push(points[0]);
      for (var i = 1; i < length; i++) {
        s += points[i].y * (points[i - 1].x - points[i + 1].x);
      }
      return s * 0.5;
    }
  }, {
    key: 'bubbleSort',
    value: function bubbleSort(areaArray, pointList, geoTopo) {
      for (var i = 0; i < areaArray.length; i++) {
        for (var j = 0; j < areaArray.length; j++) {
          if (areaArray[i] > areaArray[j]) {
            var d = areaArray[j];
            areaArray[j] = areaArray[i];
            areaArray[i] = d;
            var b = pointList[j];
            pointList[j] = pointList[i];
            pointList[i] = b;
            if (geoTopo && geoTopo.length > 0) {
              var c = geoTopo[j];
              geoTopo[j] = geoTopo[i];
              geoTopo[i] = c;
            }
          }
        }
      }
    }
  }]);

  return ServerGeometry;
}();

exports["default"] = ServerGeometry;

_SuperMap2["default"].ServerGeometry = ServerGeometry;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NormalizeScale = exports.GetResolutionFromScaleDpi = exports.getMeterPerMapUnit = exports.scaleToResolution = exports.resolutionToScale = exports.toSuperMapGeometry = exports.toGeoJSON = exports.supermap_callbacks = undefined;

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

var _GeoJSON = __webpack_require__(59);

var _GeoJSON2 = _interopRequireDefault(_GeoJSON);

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var supermap_callbacks = exports.supermap_callbacks = {};
_leaflet2["default"].Util.supermap_callbacks = supermap_callbacks;
var toGeoJSON = exports.toGeoJSON = function toGeoJSON(feature) {
    if (!feature) {
        return feature;
    }
    return JSON.parse(new _GeoJSON2["default"]().write(feature));
};
var toSuperMapGeometry = exports.toSuperMapGeometry = function toSuperMapGeometry(geometry) {
    if (!geometry) {
        return geometry;
    }
    var result,
        format = new _GeoJSON2["default"]();
    if (["FeatureCollection", "Feature", "Geometry"].indexOf(geometry.type) != -1) {
        result = format.read(geometry, geometry.type);
    } else if (typeof geometry.toGeoJSON === "function") {
        var geojson = geometry.toGeoJSON();
        result = geojson ? format.read(geojson, geojson.type) : geometry;
    }

    var serverResult = result;
    if (_leaflet2["default"].Util.isArray(result)) {
        if (result.length === 1) {
            serverResult = result[0];
        } else if (result.length > 1) {
            serverResult = [];
            result.map(function (item) {
                serverResult.push(item.geometry);
            });
        }
    }

    return serverResult && serverResult.geometry ? serverResult.geometry : serverResult;
};
var resolutionToScale = exports.resolutionToScale = function resolutionToScale(resolution, dpi, mapUnit) {
    var inchPerMeter = 1 / 0.0254;
    // 地球半径。
    var meterPerMapUnit = getMeterPerMapUnit(mapUnit);
    var scale = resolution * dpi * inchPerMeter * meterPerMapUnit;
    scale = 1 / scale;
    return scale;
};
var scaleToResolution = exports.scaleToResolution = function scaleToResolution(scale, dpi, mapUnit) {
    var inchPerMeter = 1 / 0.0254;
    var meterPerMapUnitValue = getMeterPerMapUnit(mapUnit);
    var resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
    resolution = 1 / resolution;
    return resolution;
};
var getMeterPerMapUnit = exports.getMeterPerMapUnit = function getMeterPerMapUnit(mapUnit) {
    var earchRadiusInMeters = 6378137;
    var meterPerMapUnit;
    if (mapUnit === _SuperMap2["default"].Unit.METER) {
        meterPerMapUnit = 1;
    } else if (mapUnit === _SuperMap2["default"].Unit.DEGREE) {
        // 每度表示多少米。
        meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
    } else if (mapUnit === _SuperMap2["default"].Unit.KILOMETER) {
        meterPerMapUnit = 1.0E-3;
    } else if (mapUnit === _SuperMap2["default"].Unit.INCH) {
        meterPerMapUnit = 1 / 2.5399999918E-2;
    } else if (mapUnit === _SuperMap2["default"].Unit.FOOT) {
        meterPerMapUnit = 0.3048;
    } else {
        return meterPerMapUnit;
    }
    return meterPerMapUnit;
};
var GetResolutionFromScaleDpi = exports.GetResolutionFromScaleDpi = function GetResolutionFromScaleDpi(scale, dpi, coordUnit, datumAxis) {
    var resolution = null,
        ratio = 10000;
    //用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "";
    if (scale > 0 && dpi > 0) {
        scale = _leaflet2["default"].Util.NormalizeScale(scale);
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
            //scale = SuperMap.Util.normalizeScale(scale);
            resolution = 0.0254 * ratio / dpi / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
            return resolution;
        } else {
            resolution = 0.0254 * ratio / dpi / scale / ratio;
            return resolution;
        }
    }
    return -1;
};
var NormalizeScale = exports.NormalizeScale = function NormalizeScale(scale) {
    return scale > 1.0 ? 1.0 / scale : scale;
};
_leaflet2["default"].Util.toGeoJSON = toGeoJSON;
_leaflet2["default"].Util.toSuperMapGeometry = toSuperMapGeometry;
_leaflet2["default"].Util.resolutionToScale = resolutionToScale;
_leaflet2["default"].Util.scaleToResolution = scaleToResolution;
_leaflet2["default"].Util.getMeterPerMapUnit = getMeterPerMapUnit;
_leaflet2["default"].Util.GetResolutionFromScaleDpi = GetResolutionFromScaleDpi;
_leaflet2["default"].Util.NormalizeScale = NormalizeScale;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (array){
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length>2) {
    out.z = array[2];
  }
  if (array.length>3) {
    out.m = array[3];
  }
  return out;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var globals = __webpack_require__(89);
var parseProj = __webpack_require__(40);
var wkt = __webpack_require__(43);

function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = parseProj(arguments[1]);
      }
      else {
        defs[name] = wkt(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  }
  else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function(v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        }
        else {
          defs(v);
        }
      });
    }
    else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    }
    else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    }
    else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    }
    else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    }
    else {
      console.log(name);
    }
    return;
  }


}
globals(defs);
module.exports = defs;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var PrimeMeridian = __webpack_require__(83);
var units = __webpack_require__(84);

module.exports = function(defData) {
  var self = {};
  var paramObj = {};
  defData.split("+").map(function(v) {
    return v.trim();
  }).filter(function(a) {
    return a;
  }).forEach(function(a) {
    var split = a.split("=");
    split.push(true);
    paramObj[split[0].toLowerCase()] = split[1];
  });
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function(v) {
      self.lat0 = v * D2R;
    },
    lat_1: function(v) {
      self.lat1 = v * D2R;
    },
    lat_2: function(v) {
      self.lat2 = v * D2R;
    },
    lat_ts: function(v) {
      self.lat_ts = v * D2R;
    },
    lon_0: function(v) {
      self.long0 = v * D2R;
    },
    lon_1: function(v) {
      self.long1 = v * D2R;
    },
    lon_2: function(v) {
      self.long2 = v * D2R;
    },
    alpha: function(v) {
      self.alpha = parseFloat(v) * D2R;
    },
    lonc: function(v) {
      self.longc = v * D2R;
    },
    x_0: function(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function(v) {
      self.k0 = parseFloat(v);
    },
    k: function(v) {
      self.k0 = parseFloat(v);
    },
    a: function(v) {
      self.a = parseFloat(v);
    },
    b: function(v) {
      self.b = parseFloat(v);
    },
    r_a: function() {
      self.R_A = true;
    },
    zone: function(v) {
      self.zone = parseInt(v, 10);
    },
    south: function() {
      self.utmSouth = true;
    },
    towgs84: function(v) {
      self.datum_params = v.split(",").map(function(a) {
        return parseFloat(a);
      });
    },
    to_meter: function(v) {
      self.to_meter = parseFloat(v);
    },
    units: function(v) {
      self.units = v;
      if (units[v]) {
        self.to_meter = units[v].to_meter;
      }
    },
    from_greenwich: function(v) {
      self.from_greenwich = v * D2R;
    },
    pm: function(v) {
      self.from_greenwich = (PrimeMeridian[v] ? PrimeMeridian[v] : parseFloat(v)) * D2R;
    },
    nadgrids: function(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      }
      else {
        self.nadgrids = v;
      }
    },
    axis: function(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      }
      else {
        self[paramOutname] = paramVal;
      }
    }
    else {
      self[paramName] = paramVal;
    }
  }
  if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var e0fn = __webpack_require__(11);
var e1fn = __webpack_require__(12);
var e2fn = __webpack_require__(13);
var e3fn = __webpack_require__(14);
var mlfn = __webpack_require__(15);
var adjust_lon = __webpack_require__(1);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var sign = __webpack_require__(16);
var asinz = __webpack_require__(7);

exports.init = function() {
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);
  this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
};

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (this.sphere) {
    var b = cos_phi * Math.sin(delta_lon);
    if ((Math.abs(Math.abs(b) - 1)) < 0.0000000001) {
      return (93);
    }
    else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b));
      con = Math.acos(cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - b * b));
      if (lat < 0) {
        con = -con;
      }
      y = this.a * this.k0 * (con - this.lat0);
    }
  }
  else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var tq = Math.tan(lat);
    var t = Math.pow(tq, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    var n = this.a / Math.sqrt(con);
    var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat);

    x = this.k0 * n * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + Math.pow(t, 2) + 72 * c - 58 * this.ep2))) + this.x0;
    y = this.k0 * (ml - this.ml0 + n * tq * (als * (0.5 + als / 24 * (5 - t + 9 * c + 4 * Math.pow(c, 2) + als / 30 * (61 - 58 * t + Math.pow(t, 2) + 600 * c - 330 * this.ep2))))) + this.y0;

  }
  p.x = x;
  p.y = y;
  return p;
};

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
exports.inverse = function(p) {
  var con, phi;
  var delta_phi;
  var i;
  var max_iter = 6;
  var lat, lon;

  if (this.sphere) {
    var f = Math.exp(p.x / (this.a * this.k0));
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + p.y / (this.a * this.k0);
    var h = Math.cos(temp);
    con = Math.sqrt((1 - h * h) / (1 + g * g));
    lat = asinz(con);
    if (temp < 0) {
      lat = -lat;
    }
    if ((g === 0) && (h === 0)) {
      lon = this.long0;
    }
    else {
      lon = adjust_lon(Math.atan2(g, h) + this.long0);
    }
  }
  else { // ellipsoidal form
    var x = p.x - this.x0;
    var y = p.y - this.y0;

    con = (this.ml0 + y / this.k0) / this.a;
    phi = con;
    for (i = 0; true; i++) {
      delta_phi = ((con + this.e1 * Math.sin(2 * phi) - this.e2 * Math.sin(4 * phi) + this.e3 * Math.sin(6 * phi)) / this.e0) - phi;
      phi += delta_phi;
      if (Math.abs(delta_phi) <= EPSLN) {
        break;
      }
      if (i >= max_iter) {
        return (95);
      }
    } // for()
    if (Math.abs(phi) < HALF_PI) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.tan(phi);
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var n = this.a / Math.sqrt(con);
      var r = n * (1 - this.es) / con;
      var d = x / (n * this.k0);
      var ds = Math.pow(d, 2);
      lat = phi - (n * tan_phi * ds / r) * (0.5 - ds / 24 * (5 + 3 * t + 10 * c - 4 * cs - 9 * this.ep2 - ds / 30 * (61 + 90 * t + 298 * c + 45 * ts - 252 * this.ep2 - 3 * cs)));
      lon = adjust_lon(this.long0 + (d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 - 2 * c + 28 * t - 3 * cs + 8 * this.ep2 + 24 * ts))) / cos_phi));
    }
    else {
      lat = HALF_PI * sign(y);
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Transverse_Mercator", "Transverse Mercator", "tmerc"];


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var R2D = 57.29577951308232088;
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var datum_transform = __webpack_require__(87);
var adjust_axis = __webpack_require__(76);
var proj = __webpack_require__(23);
var toPoint = __webpack_require__(38);
module.exports = function transform(source, dest, point) {
  var wgs84;
  if (Array.isArray(point)) {
    point = toPoint(point);
  }
  function checkNotWGS(source, dest) {
    return ((source.datum.datum_type === PJD_3PARAM || source.datum.datum_type === PJD_7PARAM) && dest.datumCode !== "WGS84");
  }

  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && (checkNotWGS(source, dest) || checkNotWGS(dest, source))) {
    wgs84 = new proj('WGS84');
    transform(source, wgs84, point);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (source.axis !== "enu") {
    adjust_axis(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === "longlat") {
    point.x *= D2R; // convert degrees to radians
    point.y *= D2R;
  }
  else {
    if (source.to_meter) {
      point.x *= source.to_meter;
      point.y *= source.to_meter;
    }
    source.inverse(point); // Convert Cartesian to longlat
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = datum_transform(source.datum, dest.datum, point);

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point.x -= dest.from_greenwich;
  }

  if (dest.projName === "longlat") {
    // convert radians to decimal degrees
    point.x *= R2D;
    point.y *= R2D;
  }
  else { // else project
    dest.forward(point);
    if (dest.to_meter) {
      point.x /= dest.to_meter;
      point.y /= dest.to_meter;
    }
  }

  // DGR, 2010/11/12
  if (dest.axis !== "enu") {
    adjust_axis(dest, true, point);
  }

  return point;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var extend = __webpack_require__(27);

function mapit(obj, key, v) {
  obj[key] = v.map(function(aa) {
    var o = {};
    sExpr(aa, o);
    return o;
  }).reduce(function(a, b) {
    return extend(a, b);
  }, {});
}

function sExpr(v, obj) {
  var key;
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  }
  else {
    key = v.shift();
    if (key === 'PARAMETER') {
      key = v.shift();
    }
    if (v.length === 1) {
      if (Array.isArray(v[0])) {
        obj[key] = {};
        sExpr(v[0], obj[key]);
      }
      else {
        obj[key] = v[0];
      }
    }
    else if (!v.length) {
      obj[key] = true;
    }
    else if (key === 'TOWGS84') {
      obj[key] = v;
    }
    else {
      obj[key] = {};
      if (['UNIT', 'PRIMEM', 'VERT_DATUM'].indexOf(key) > -1) {
        obj[key] = {
          name: v[0].toLowerCase(),
          convert: v[1]
        };
        if (v.length === 3) {
          obj[key].auth = v[2];
        }
      }
      else if (key === 'SPHEROID') {
        obj[key] = {
          name: v[0],
          a: v[1],
          rf: v[2]
        };
        if (v.length === 4) {
          obj[key].auth = v[3];
        }
      }
      else if (['GEOGCS', 'GEOCCS', 'DATUM', 'VERT_CS', 'COMPD_CS', 'LOCAL_CS', 'FITTED_CS', 'LOCAL_DATUM'].indexOf(key) > -1) {
        v[0] = ['name', v[0]];
        mapit(obj, key, v);
      }
      else if (v.every(function(aa) {
        return Array.isArray(aa);
      })) {
        mapit(obj, key, v);
      }
      else {
        sExpr(v, obj[key]);
      }
    }
  }
}

function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && (inName in obj)) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  }
  else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  }
  else {
    if (typeof wkt.PROJECTION === "object") {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    }
    else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = parseFloat(wkt.UNIT.convert, 10)*wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = parseFloat(wkt.UNIT.convert, 10);
      }
    }
  }

  if (wkt.GEOGCS) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (wkt.GEOGCS.DATUM) {
      wkt.datumCode = wkt.GEOGCS.DATUM.name.toLowerCase();
    }
    else {
      wkt.datumCode = wkt.GEOGCS.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === "wgs_1984") {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, - 6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, - 8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = "rnb72";
    }
    if (wkt.GEOGCS.DATUM && wkt.GEOGCS.DATUM.SPHEROID) {
      wkt.ellps = wkt.GEOGCS.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === "international") {
        wkt.ellps = 'intl';
      }

      wkt.a = wkt.GEOGCS.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(wkt.GEOGCS.DATUM.SPHEROID.rf, 10);
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = "osgb36";
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return parseFloat(input, 10) * ratio;
  }
  var renamer = function(a) {
    return rename(wkt, a);
  };
  var list = [
    ['standard_parallel_1', 'Standard_Parallel_1'],
    ['standard_parallel_2', 'Standard_Parallel_2'],
    ['false_easting', 'False_Easting'],
    ['false_northing', 'False_Northing'],
    ['central_meridian', 'Central_Meridian'],
    ['latitude_of_origin', 'Latitude_Of_Origin'],
    ['latitude_of_origin', 'Central_Parallel'],
    ['scale_factor', 'Scale_Factor'],
    ['k0', 'scale_factor'],
    ['latitude_of_center', 'Latitude_of_center'],
    ['lat0', 'latitude_of_center', d2r],
    ['longitude_of_center', 'Longitude_Of_Center'],
    ['longc', 'longitude_of_center', d2r],
    ['x0', 'false_easting', toMeter],
    ['y0', 'false_northing', toMeter],
    ['long0', 'central_meridian', d2r],
    ['lat0', 'latitude_of_origin', d2r],
    ['lat0', 'standard_parallel_1', d2r],
    ['lat1', 'standard_parallel_1', d2r],
    ['lat2', 'standard_parallel_2', d2r],
    ['alpha', 'azimuth', d2r],
    ['srsCode', 'name']
  ];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === "Lambert_Azimuthal_Equal_Area")) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
module.exports = function(wkt, self) {
  var lisp = JSON.parse(("," + wkt).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g, ',"$1"]').replace(/,\["VERTCS".+/,''));
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  lisp.unshift('output');
  var obj = {};
  sExpr(lisp, obj);
  cleanWKT(obj.output);
  return extend(self, obj.output);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.imageMapLayer = exports.ImageMapLayer = undefined;

__webpack_require__(22);

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _ServerGeometry = __webpack_require__(35);

var _ServerGeometry2 = _interopRequireDefault(_ServerGeometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @class L.supermap.imageMapLayer
 * @classdesc SuperMap iServer 的 REST 地图服务的图层(SuperMap iServer Java 6R 及以上分块动态 REST 图层)。使用Image资源出图
 * @extends L.TileLayer{@linkdoc-leaflet/#tilelayer}
 * @example
 *      L.superMap.imageMapLayer(url).addTo(map);
 * @param url -{string} 影像图层地址
 * @param options -{Object} 影像图层可选参数。如：<br>
 *        layersID - {number}图层ID，如果有layersID，则是在使用专题图。<br>
 *        redirect - {boolean} 是否从定向，如果为 true，则将请求重定向到图片的真实地址；如果为 false，则响应体中是图片的字节流。<br>
 *        transparent - {number}设置透明度。<br>
 *        cacheEnabled - {boolean} 是否启用缓存。<br>
 *        clipRegionEnabled - {boolean} 是否启用地图裁剪。<br>
 *        prjCoordSys - {Object} 请求的地图的坐标参考系统。 如：prjCoordSys={"epsgCode":3857}。<br>
 *        overlapDisplayed - {boolean} 地图对象在同一范围内时，是否重叠显示。<br>
 *        overlapDisplayedOptions - {string} 避免地图对象压盖显示的过滤选项。<br>
 *        tileversion - {string} 切片版本名称，cacheEnabled 为 true 时有效。<br>
 *        crs - {{@link L.Proj.CRS}} 坐标系统类。<br>
 *        serverType - {{@link SuperMap.ServerType}} 服务来源 iServer|iPortal|online。<br>
 *        attribution - {string} 版权信息。
 */
var ImageMapLayer = exports.ImageMapLayer = _leaflet2["default"].TileLayer.extend({

    options: {
        //如果有layersID，则是在使用专题图
        layersID: null,
        //如果为 true，则将请求重定向到图片的真实地址；如果为 false，则响应体中是图片的字节流
        redirect: false,
        transparent: null,
        cacheEnabled: null,
        clipRegionEnabled: false,
        //请求的地图的坐标参考系统。 如：prjCoordSys= {"epsgCode":3857}。
        prjCoordSys: null,
        //地图对象在同一范围内时，是否重叠显示
        overlapDisplayed: true,
        //避免地图对象压盖显示的过滤选项
        overlapDisplayedOptions: null,
        //切片版本名称，cacheEnabled 为 true 时有效。
        tileversion: null,

        crs: null,
        serverType: _SuperMap2["default"].ServerType.ISERVER,

        attribution: "Map Data <span>© <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <span>© <a href='http://iclient.supermapol.com' target='_blank'>SuperMap iClient</a></span>"
    },

    initialize: function initialize(url, options) {
        this.url = this._url = url;
        _leaflet2["default"].TileLayer.prototype.initialize.apply(this, arguments);
        _leaflet2["default"].setOptions(this, options);
        _leaflet2["default"].stamp(this);
    },

    /**
     * @private
     * @function L.supermap.imageMapLayer.prototype.onAdd
     * @description 添加影像地图。
     * @param map - {L.map} 待添加的影像地图参数
     */
    onAdd: function onAdd(map) {
        this._crs = this.options.crs || map.options.crs;
        this._initLayerUrl();
        _leaflet2["default"].TileLayer.prototype.onAdd.call(this, map);
    },

    /**
     * @function L.supermap.imageMapLayer.prototype.getTileUrl
     * @description 根据行列号获取切片地址
     * @param coords - {Object} 行列号
     * @return {String} 切片地址
     */
    getTileUrl: function getTileUrl(coords) {
        //使用ViewBounds出图
        var tileBounds = this._tileCoordsToBounds(coords),
            nw = this._crs.project(tileBounds.getNorthWest()),
            se = this._crs.project(tileBounds.getSouthEast());
        var tileUrl = this._layerUrl + "&viewBounds=" + "{\"leftBottom\" : {\"x\":" + nw.x + ",\"y\":" + se.y + "},\"rightTop\" : {\"x\":" + se.x + ",\"y\":" + nw.y + "}}";
        return encodeURI(tileUrl);
    },

    _initLayerUrl: function _initLayerUrl() {
        var me = this;
        var layerUrl = me.url + "/image.png?";
        layerUrl += me._initAllRequestParams().join('&');
        layerUrl = this._appendCredential(layerUrl);
        this._layerUrl = layerUrl;
    },

    _initAllRequestParams: function _initAllRequestParams() {
        var me = this,
            options = me.options || {},
            params = [];

        var tileSize = this.options.tileSize;
        params.push("width=" + tileSize);
        params.push("height=" + tileSize);

        var redirect = options.redirect === true ? options.redirect : false;
        params.push("redirect=" + redirect);

        var transparent = options.transparent === true ? options.transparent : false;
        params.push("transparent=" + transparent);

        var cacheEnabled = options.cacheEnabled === false ? options.cacheEnabled : true;
        params.push("cacheEnabled=" + cacheEnabled);

        if (options.prjCoordSys) {
            params.push("prjCoordSys=" + JSON.stringify(options.prjCoordSys));
        }

        if (options.layersID) {
            params.push("layersID=" + options.layersID);
        }

        if (options.clipRegionEnabled && options.clipRegion instanceof _leaflet2["default"].Path) {
            options.clipRegion = _leaflet2["default"].Util.toSuperMapGeometry(options.clipRegion.toGeoJSON());
            options.clipRegion = _SuperMap2["default"].Util.toJSON(_ServerGeometry2["default"].fromGeometry(options.clipRegion));
            params.push("clipRegionEnabled=" + options.clipRegionEnabled);
            params.push("clipRegion=" + JSON.stringify(options.clipRegion));
        }

        if (options.overlapDisplayed === false) {
            params.push("overlapDisplayed=false");
            if (options.overlapDisplayedOptions) {
                params.push("overlapDisplayedOptions=" + me.overlapDisplayedOptions.toString());
            }
        } else {
            params.push("overlapDisplayed=true");
        }

        if (options.cacheEnabled === true && options.tileversion) {
            params.push("tileversion=" + options.tileversion);
        }

        return params;
    },

    //追加token或key
    _appendCredential: function _appendCredential(url) {
        var newUrl = url,
            credential,
            value;
        switch (this.options.serverType) {
            case _SuperMap2["default"].ServerType.ISERVER:
                value = _SuperMap2["default"].SecurityManager.getToken(url);
                credential = value ? new _SuperMap2["default"].Credential(value, "token") : null;
                break;
            case _SuperMap2["default"].ServerType.IPORTAL:
                value = _SuperMap2["default"].SecurityManager.getToken(url);
                credential = value ? new _SuperMap2["default"].Credential(value, "token") : null;
                if (!credential) {
                    value = _SuperMap2["default"].SecurityManager.getKey(url);
                    credential = value ? new _SuperMap2["default"].Credential(value, "key") : null;
                }
                break;
            case _SuperMap2["default"].ServerType.ONLINE:
                value = _SuperMap2["default"].SecurityManager.getKey(url);
                credential = value ? new _SuperMap2["default"].Credential(value, "key") : null;
                break;
            default:
                value = _SuperMap2["default"].SecurityManager.getToken(url);
                credential = value ? new _SuperMap2["default"].Credential(value, "token") : null;
                break;
        }
        if (credential) {
            newUrl += "&" + credential.getUrlParameters();
        }
        return newUrl;
    }
});

var imageMapLayer = exports.imageMapLayer = function imageMapLayer(url, options) {
    return new ImageMapLayer(url, options);
};

_leaflet2["default"].supermap.imageMapLayer = imageMapLayer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tiledMapLayer = exports.TiledMapLayer = undefined;

__webpack_require__(22);

__webpack_require__(67);

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

var _REST = __webpack_require__(6);

var _Util = __webpack_require__(36);

var Util = _interopRequireWildcard(_Util);

var _ServerGeometry = __webpack_require__(35);

var _ServerGeometry2 = _interopRequireDefault(_ServerGeometry);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @class L.supermap.tiledMapLayer
 * @classdesc SuperMap iServer 的 REST 地图服务的图层(SuperMap iServer Java 6R 及以上分块动态 REST 图层)。使用TileImage资源出图.
 * @extends L.TileLayer{@linkdoc-leaflet/#tilelayer}
 * @example
 *      L.superMap.tiledMapLayer(url).addTo(map);
 * @param url -{string} 影像图层地址
 * @param options -{Object} 影像图层参数。如：<br>
 *        layersID - {number}图层ID，如果有layersID，则是在使用专题图。<br>
 *        redirect - {boolean} 是否从定向，如果为 true，则将请求重定向到图片的真实地址；如果为 false，则响应体中是图片的字节流。<br>
 *        transparent - {number}设置透明度。<br>
 *        cacheEnabled - {string} 启用缓存。<br>
 *        clipRegionEnabled - {boolean} 是否启用地图裁剪。<br>
 *        prjCoordSys - {Object} 请求的地图的坐标参考系统。 如：prjCoordSys={"epsgCode":3857}。<br>
 *        overlapDisplayed - {boolean} 地图对象在同一范围内时，是否重叠显示。<br>
 *        overlapDisplayedOptions - {string} 避免地图对象压盖显示的过滤选项。<br>
 *        tileversion - {string} 切片版本名称，cacheEnabled 为 true 时有效。<br>
 *        crs - {{@link L.Proj.CRS}} 坐标系统类。<br>
 *        serverType - {{@link SuperMap.ServerType}} 服务来源 iServer|iPortal|online。<br>
 *        attribution - {string} 版权信息。<br>
 */
var TiledMapLayer = exports.TiledMapLayer = _leaflet2["default"].TileLayer.extend({

    options: {
        //如果有layersID，则是在使用专题图
        layersID: null,
        //如果为 true，则将请求重定向到图片的真实地址；如果为 false，则响应体中是图片的字节流
        redirect: false,
        transparent: null,
        cacheEnabled: null,
        clipRegionEnabled: false,
        //请求的地图的坐标参考系统。 如：prjCoordSys={"epsgCode":3857}
        prjCoordSys: null,
        //地图对象在同一范围内时，是否重叠显示
        overlapDisplayed: false,
        //避免地图对象压盖显示的过滤选项
        overlapDisplayedOptions: null,
        //切片版本名称，cacheEnabled 为 true 时有效。
        tileversion: null,

        crs: null,
        serverType: _REST.ServerType.ISERVER,

        attribution: "Map Data <span>© <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <span>© <a href='http://iclient.supermapol.com' target='_blank'>SuperMap iClient</a></span>"
    },

    initialize: function initialize(url, options) {
        this._url = url;
        _leaflet2["default"].TileLayer.prototype.initialize.apply(this, arguments);
        _leaflet2["default"].setOptions(this, options);
        _leaflet2["default"].stamp(this);

        //当前切片在切片集中的index
        this.tileSetsIndex = -1;
        this.tempIndex = -1;
    },

    /**
     * @private
     * @function L.supermap.tiledMapLayer.prototype.onAdd
     * @description 添加地图。
     * @param map - {L.map} 待添加的影像地图参数
     */
    onAdd: function onAdd(map) {
        this._crs = this.options.crs || map.options.crs;
        _leaflet2["default"].TileLayer.prototype.onAdd.call(this, map);
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.getTileUrl
     * @description 根据行列号获取瓦片地址
     * @param coords - {Object} 行列号
     * @return {string} 瓦片地址
     */
    getTileUrl: function getTileUrl(coords) {
        var scale = this.getScaleFromCoords(coords);
        var layerUrl = this._getLayerUrl();
        var tileUrl = layerUrl + "&scale=" + scale + "&x=" + coords.x + "&y=" + coords.y;
        return encodeURI(tileUrl);
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.getScale
     * @description 根据缩放级别获取比例尺
     * @param zoom - {number} 缩放级别
     * @return {number} 比例尺
     */
    getScale: function getScale(zoom) {
        var me = this;
        //返回当前比例尺
        var z = zoom || me._map.getZoom();
        return me.scales[z];
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.getScaleFromCoords
     * @description 通过行列号获取比例尺
     * @param coords - {Object} 行列号
     * @return {number} 比例尺
     */
    getScaleFromCoords: function getScaleFromCoords(coords) {
        var me = this,
            scale;
        if (me.scales && me.scales[coords.z]) {
            return me.scales[coords.z];
        }
        me.scales = me.scales || {};
        scale = me.getDefaultScale(coords);
        me.scales[coords.z] = scale;
        return scale;
    },

    /**
     * @private
     * @function L.supermap.tiledMapLayer.prototype.getDefaultScale
     * @description 获取默认比例尺信息
     * @param coords - {Object} 坐标对象参数
     */
    getDefaultScale: function getDefaultScale(coords) {
        var me = this,
            crs = me._crs;
        var resolution;
        if (crs.options && crs.options.resolutions) {
            resolution = crs.options.resolutions[coords.z];
        } else {
            var tileBounds = me._tileCoordsToBounds(coords);
            var ne = crs.project(tileBounds.getNorthEast());
            var sw = crs.project(tileBounds.getSouthWest());
            var tileSize = me.options.tileSize;
            resolution = Math.max(Math.abs(ne.x - sw.x) / tileSize, Math.abs(ne.y - sw.y) / tileSize);
        }

        var mapUnit = _REST.Unit.METER;
        if (crs.code) {
            var array = crs.code.split(':');
            if (array && array.length > 1) {
                var code = parseInt(array[1]);
                mapUnit = code && code >= 4000 && code <= 5000 ? _REST.Unit.DEGREE : _REST.Unit.METER;
            }
        }
        return Util.resolutionToScale(resolution, 96, mapUnit);
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.setTileSetsInfo
     * @description 设置瓦片集信息
     * @param tileSets - {Object} 瓦片对象集
     */
    setTileSetsInfo: function setTileSetsInfo(tileSets) {
        this.tileSets = tileSets;
        if (_leaflet2["default"].Util.isArray(this.tileSets)) {
            this.tileSets = this.tileSets[0];
        }
        if (!this.tileSets) {
            return;
        }
        this.fire('tilesetsinfoloaded', { tileVersions: this.tileSets.tileVersions });
        this.changeTilesVersion();
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.lastTilesVersion
     * @description 请求上一个版本切片，并重新绘制。
     */
    lastTilesVersion: function lastTilesVersion() {
        this.tempIndex = this.tileSetsIndex - 1;
        this.changeTilesVersion();
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.nextTilesVersion
     * @description 请求下一个版本切片，并重新绘制。
     */
    nextTilesVersion: function nextTilesVersion() {
        this.tempIndex = this.tileSetsIndex + 1;
        this.changeTilesVersion();
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.changeTilesVersion
     * @description 切换到某一版本的切片，并重绘。通过this.tempIndex保存需要切换的版本索引
     */
    changeTilesVersion: function changeTilesVersion() {
        var me = this;
        //切片版本集信息是否存在
        if (me.tileSets == null) {
            //版本信息为空，重新查询，查询成功继续跳转到相应的版本
            //me.getTileSetsInfo();
            return;
        }
        if (me.tempIndex === me.tileSetsIndex || this.tempIndex < 0) {
            return;
        }
        //检测index是否可用
        var tileVersions = me.tileSets.tileVersions;
        if (tileVersions && me.tempIndex < tileVersions.length && me.tempIndex >= 0) {
            var name = tileVersions[me.tempIndex].name;
            var result = me.mergeTileVersionParam(name);
            if (result) {
                me.tileSetsIndex = me.tempIndex;
                me.fire('tileversionschanged', { tileVersion: tileVersions[me.tempIndex] });
            }
        }
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.updateCurrentTileSetsIndex
     * @description 手动设置当前切片集索引,目前主要提供给控件使用
     * @param index - {number}索引值
     */
    updateCurrentTileSetsIndex: function updateCurrentTileSetsIndex(index) {
        this.tempIndex = index;
    },

    /**
     * @function L.supermap.tiledMapLayer.prototype.mergeTileVersionParam
     * @description 更改URL请求参数中的切片版本号,并重绘
     * @param version - {string} 切片版本号
     * @return {boolean} 是否成功
     */
    mergeTileVersionParam: function mergeTileVersionParam(version) {
        if (version) {
            this.requestParams["tileversion"] = version;
            this._paramsChanged = true;
            this.redraw();
            this._paramsChanged = false;
            return true;
        }
        return false;
    },

    _getLayerUrl: function _getLayerUrl() {
        if (this._paramsChanged) {
            this._layerUrl = this._createLayerUrl();
        }
        return this._layerUrl || this._createLayerUrl();
    },

    _createLayerUrl: function _createLayerUrl() {
        var me = this;
        var layerUrl = me._url + "/tileImage.png?";
        layerUrl += me._getRequestParamString();
        layerUrl = this._appendCredential(layerUrl);
        this._layerUrl = layerUrl;
        return layerUrl;
    },

    _getRequestParamString: function _getRequestParamString() {
        this.requestParams = this.requestParams || this._getAllRequestParams();
        var params = [];
        for (var key in this.requestParams) {
            params.push(key + "=" + this.requestParams[key]);
        }
        return params.join('&');
    },

    _getAllRequestParams: function _getAllRequestParams() {
        var me = this,
            options = me.options || {},
            params = {};

        var tileSize = this.options.tileSize;
        params["width"] = tileSize.toString();
        params["height"] = tileSize.toString();

        params["redirect"] = options.redirect === true;
        params["transparent"] = options.transparent === true;
        params["cacheEnabled"] = !(options.cacheEnabled === false);

        if (options.prjCoordSys) {
            params["prjCoordSys"] = JSON.stringify(options.prjCoordSys);
        }

        if (options.layersID) {
            params["layersID"] = options.layersID.toString();
        }

        if (options.clipRegionEnabled && options.clipRegion instanceof _leaflet2["default"].Path) {
            options.clipRegion = Util.toSuperMapGeometry(options.clipRegion.toGeoJSON());
            options.clipRegion = SuperMap.Util.toJSON(_ServerGeometry2["default"].fromGeometry(options.clipRegion));
            params["clipRegionEnabled"] = options.clipRegionEnabled;
            params["clipRegion"] = JSON.stringify(options.clipRegion);
        }

        //切片的起始参考点，默认为地图范围的左上角。
        var crs = me._crs;
        if (crs.projection && crs.projection.bounds) {
            var bounds = crs.projection.bounds;
            var tileOrigin = _leaflet2["default"].point(bounds.min.x, bounds.max.y);
            params["origin"] = JSON.stringify({ x: tileOrigin.x, y: tileOrigin.y });
        }

        if (options.overlapDisplayed === false) {
            params["overlapDisplayed"] = false;
            if (options.overlapDisplayedOptions) {
                params["overlapDisplayedOptions"] = me.overlapDisplayedOptions.toString();
            }
        } else {
            params["overlapDisplayed"] = true;
        }

        if (options.cacheEnabled === true && options.tileversion) {
            params["tileversion"] = options.tileversion.toString();
        }

        return params;
    },

    //追加token或key
    _appendCredential: function _appendCredential(url) {
        var newUrl = url,
            credential,
            value;
        switch (this.options.serverType) {
            case SuperMap.ServerType.ISERVER:
                value = SuperMap.SecurityManager.getToken(url);
                credential = value ? new SuperMap.Credential(value, "token") : null;
                break;
            case SuperMap.ServerType.IPORTAL:
                value = SuperMap.SecurityManager.getToken(url);
                credential = value ? new SuperMap.Credential(value, "token") : null;
                if (!credential) {
                    value = SuperMap.SecurityManager.getKey(url);
                    credential = value ? new SuperMap.Credential(value, "key") : null;
                }
                break;
            case SuperMap.ServerType.ONLINE:
                value = SuperMap.SecurityManager.getKey(url);
                credential = value ? new SuperMap.Credential(value, "key") : null;
                break;
            default:
                value = SuperMap.SecurityManager.getToken(url);
                credential = value ? new SuperMap.Credential(value, "token") : null;
                break;
        }
        if (credential) {
            newUrl += "&" + credential.getUrlParameters();
        }
        return newUrl;
    }
});

var tiledMapLayer = exports.tiledMapLayer = function tiledMapLayer(url, options) {
    return new TiledMapLayer(url, options);
};
_leaflet2["default"].supermap.tiledMapLayer = tiledMapLayer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.fetchJsonp = mod.exports;
  }
})(undefined, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
  // error if request timeout
  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    document.getElementsByTagName('head')[0].removeChild(script);
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
      }, timeout);
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(50);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47).setImmediate))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51), __webpack_require__(48)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whatwgFetch = function (self) {
  'use strict';

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var list = this.map[name];
    if (!list) {
      list = [];
      this.map[name] = list;
    }
    list.push(value);
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    var values = this.map[normalizeName(name)];
    return values ? values[0] : null;
  };

  Headers.prototype.getAll = function (name) {
    return this.map[normalizeName(name)] || [];
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)];
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function (name) {
      this.map[name].forEach(function (value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    return fileReaderReady(reader);
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    reader.readAsText(blob);
    return fileReaderReady(reader);
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (!body) {
        this._bodyText = '';
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        return this.blob().then(readBlobAsArrayBuffer);
      };

      this.text = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };
    } else {
      this.text = function () {
        var rejected = consumed(this);
        return rejected ? rejected : Promise.resolve(this._bodyText);
      };
    }

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = input;
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this);
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function headers(xhr) {
    var head = new Headers();
    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
    pairs.forEach(function (header) {
      var split = header.trim().split(':');
      var key = split.shift().trim();
      var value = split.join(':').trim();
      head.append(key, value);
    });
    return head;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText;
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  // self.Headers = Headers
  // self.Request = Request
  // self.Response = Response

  var fetch = function fetch(input, init) {
    // console.log('whatwgFetchWidthTimeout--->'+input, init);
    init = init || { timeout: 30000 };
    return new Promise(function (resolve, reject) {
      var request;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input;
      } else {
        request = new Request(input, init);
      }

      var xhr = new XMLHttpRequest();

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL;
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL');
        }

        return;
      }

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        };
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed due to timeout'));
      };

      xhr.open(request.method, request.url, true);
      xhr.timeout = init.timeout || 30000;

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  return fetch;
}(typeof self !== 'undefined' ? self : undefined);

module.exports = whatwgFetch;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Feature
 * @classdesc 要素类组合了地理和属性，Feature 类同时具有 marker 和 lonlat 属性。
 * @param layer - {SuperMap.Layer} 图层。
 * @param lonlat - {SuperMap.LonLat} 经纬度。
 * @param data - {Object} 数据对象。
 */
var Feature = function () {

    /**
     * @member SuperMap.Feature.prototype.lonlat - {SuperMap.LonLat}
     * @description 经纬度。
     *
     */


    /**
     * @deprecated
     * @member SuperMap.Feature.prototype.layer - {SuperMap.Layer}
     * @description 图层。
     */
    function Feature(layer, lonlat, data) {
        _classCallCheck(this, Feature);

        this.layer = null;
        this.id = null;
        this.lonlat = null;
        this.data = null;
        this.CLASS_NAME = "SuperMap.Feature";

        this.layer = layer;
        this.lonlat = lonlat;
        this.data = data != null ? data : {};
        this.id = _Util.Util.createUniqueID(this.CLASS_NAME + "_");
    }

    /**
     * @function SuperMap.Feature.prototype.destroy
     * @description 释放相关资源。
     */


    /**
     * @member SuperMap.Feature.prototype.data - {Object}
     * @description 数据对象。
     */


    /**
     * @member SuperMap.Feature.prototype.id - {string}
     * @description 要素id。
     */


    _createClass(Feature, [{
        key: 'destroy',
        value: function destroy() {
            this.id = null;
            this.lonlat = null;
            this.data = null;
        }
    }]);

    return Feature;
}();

exports["default"] = Feature;

_SuperMap2["default"].Feature = Feature;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.LonLat
 * @classdesc  这个类用来表示经度和纬度对。
 * @param lon - {number} 地图单位上的X轴坐标，如果地图是地理投影，则此值是经度，否则，此值是地图地理位置的x坐标。
 * @param lat - {number} 地图单位上的Y轴坐标，如果地图是地理投影，则此值是纬度，否则，此值是地图地理位置的y坐标。
 * @param location - {Array<float>} [lon, lat]  如果要同时设置，则使用传入横纵坐标组成的数组。
 * @example
 * var lonLat = new SuperMap.LonLat(30,45);
 */
var LonLat = function () {

    /**
     * @member SuperMap.LonLat.prototype.lon  -{float}
     * @description 地图的单位的X轴（横轴）坐标，默认为0.0。
     */
    function LonLat(lon, lat) {
        _classCallCheck(this, LonLat);

        this.lon = 0.0;
        this.lat = 0.0;
        this.CLASS_NAME = "SuperMap.LonLat";

        if (_Util.Util.isArray(lon)) {
            lat = lon[1];
            lon = lon[0];
        }
        this.lon = lon ? _Util.Util.toFloat(lon) : this.lon;
        this.lat = lat ? _Util.Util.toFloat(lat) : this.lat;
    }

    /**
     * @function SuperMap.LonLat.prototype.toString
     * @description 返回此对象的字符串形式
     * @example
     * var lonLat = new SuperMap.LonLat(100,50);
     * var str = lonLat.toString();
     * @returns {string} 例如: "lon=100,lat=50"
     */


    /**
     * @member SuperMap.LonLat.prototype.lat  -{float}
     * @description 地图的单位的Y轴（纵轴）坐标，默认为0.0。
     */


    _createClass(LonLat, [{
        key: 'toString',
        value: function toString() {
            return "lon=" + this.lon + ",lat=" + this.lat;
        }

        /**
         * @function SuperMap.LonLat.prototype.toShortString
         * @description 将经度纬度转换成简单字符串。
         * @example
         * var lonLat = new SuperMap.LonLat(10050);
         * var str = lonLat.toShortString();
         * @returns {string} 返回处理后的经纬度字符串。例如："10050"
         */

    }, {
        key: 'toShortString',
        value: function toShortString() {
            return this.lon + "," + this.lat;
        }

        /**
         * @function SuperMap.LonLat.prototype.clone
         * @description 复制坐标对象，并返回复制后的新对象。
         * @example
         * var lonLat1 = new SuperMap.LonLat(10050);
         * var lonLat2 = lonLat1.clone();
         * @returns {SuperMap.LonLat}  返回相同坐标值的新的坐标对象。
         */

    }, {
        key: 'clone',
        value: function clone() {
            return new LonLat(this.lon, this.lat);
        }

        /**
         * @function SuperMap.LonLat.prototype.add
         * @description 在已有坐标对象的经纬度基础上加上新的坐标经纬度，并返回新的坐标对象。
         * @example
         * var lonLat1 = new SuperMap.LonLat(10050);
         * //lonLat2 是新的对象
         * var lonLat2 = lonLat1.add(10050);
         *
         * @param lon - {float} 传入的精度参数。
         * @param lat - {float} 传入的纬度参数。
         * @returns {SuperMap.LonLat} 返回一个新的LonLat对象，此对象的经纬度是由传
         *      入的经纬度与当前的经纬度相加所得。
         */

    }, {
        key: 'add',
        value: function add(lon, lat) {
            if (lon == null || lat == null) {
                throw new TypeError('LonLat.add cannot receive null values');
            }
            return new LonLat(this.lon + _Util.Util.toFloat(lon), this.lat + _Util.Util.toFloat(lat));
        }

        /**
         * @function SuperMap.LonLat.prototype.equals
         * @description 判断两个坐标对象是否相等。
         * @example
         * var lonLat1 = new SuperMap.LonLat(10050);
         * var lonLat2 = new SuperMap.LonLat(10050);
         * var isEquals = lonLat1.equals(lonLat2);
         *
         * @param ll - {SuperMap.LonLat} 需要进行比较的坐标对象。
         * @returns {boolean} 如果LonLat对象的经纬度和传入的经纬度一致则返回true不一
         *      致或传入的ll参数为NULL则返回false。
         */

    }, {
        key: 'equals',
        value: function equals(ll) {
            var equals = false;
            if (ll != null) {
                equals = this.lon === ll.lon && this.lat === ll.lat || isNaN(this.lon) && isNaN(this.lat) && isNaN(ll.lon) && isNaN(ll.lat);
            }
            return equals;
        }

        /**
         * @function SuperMap.LonLat.prototype.wrapDateLine
         * @description 通过传入的范围对象对坐标对象转换到该范围内。
         * 如果经度小于给定范围最小精度，则在原经度基础上加上范围宽度，
         * 直到精度在范围内为止，如果经度大于给定范围则在原经度基础上减去范围宽度。
         * 换句话说就是将不在经度范围内的坐标转换到范围以内。
         *  （只会转换lon，不会转换lat，主要用于转移到日界线以内）
         * @example
         * var lonLat1 = new SuperMap.LonLat(42050);
         * var lonLat2 = lonLat1.wrapDateLine(
         *      new SuperMap.Bounds(-180-9018090)
         *  );
         *
         * @param maxExtent - {SuperMap.Bounds} 最大边界的范围。
         * @returns {SuperMap.LonLat} 将坐标转换到范围对象以内，并返回新的坐标。
         */

    }, {
        key: 'wrapDateLine',
        value: function wrapDateLine(maxExtent) {

            var newLonLat = this.clone();

            if (maxExtent) {
                //shift right?
                while (newLonLat.lon < maxExtent.left) {
                    newLonLat.lon += maxExtent.getWidth();
                }

                //shift left?
                while (newLonLat.lon > maxExtent.right) {
                    newLonLat.lon -= maxExtent.getWidth();
                }
            }

            return newLonLat;
        }

        /**
         *
         * @function SuperMap.LonLat.prototype.destroy
         * @description 销毁此对象。
         * 销毁后此对象的所有属性为null，而不是初始值。
         * @example
         * var lonLat = new SuperMap.LonLat(10050);
         * lonLat.destroy();
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.lon = null;
            this.lat = null;
        }

        /**
         * @function SuperMap.LonLat.fromString
         * @description 通过字符串生成一个<SuperMap.LonLat>对象
         * @example
         * var str = "10050";
         * var lonLat = SuperMap.LonLat.fromString(str);
         *
         * @param str - {string} 字符串的格式：Lon+""+Lat。如："10050"
         * @returns {SuperMap.LonLat} 返回一个 <SuperMap.LonLat> 对象
         */

    }], [{
        key: 'fromString',
        value: function fromString(str) {
            var pair = str.split(",");
            return new LonLat(pair[0], pair[1]);
        }

        /**
         * @function SuperMap.LonLat.fromArray
         * @description 通过数组生成一个<SuperMap.LonLat>对象
         * @param arr - {Array<float>} 数组的格式，长度只能为2：[LonLat]。如： [5-42]
         * @returns {SuperMap.LonLat} 返回一个 <SuperMap.LonLat> 对象
         */

    }, {
        key: 'fromArray',
        value: function fromArray(arr) {
            var gotArr = _Util.Util.isArray(arr),
                lon = gotArr && arr[0],
                lat = gotArr && arr[1];
            return new LonLat(lon, lat);
        }
    }]);

    return LonLat;
}();

exports["default"] = LonLat;

_SuperMap2["default"].LonLat = LonLat;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Pixel
 * @classdesc 此类用x,y坐标描绘屏幕坐标（像素点）。
 * @param x - {number} x坐标，默认为0.0
 * @param y - {number} y坐标，默认为0.0
 * @param mode - {string} 坐标模式，默认为{@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
 *
 * @example
 * //单独创建一个对象
 * var pixcel = new SuperMap.Pixel(100,50);
 *
 * //依据size创建
 *  var size = new SuperMap.Size(21,25);
 *  var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
 */
var Pixel = function () {

    /**
     * @member SuperMap.Pixel.prototype.y -{number}
     * @description y坐标，默认为0.0
     */
    function Pixel(x, y, mode) {
        _classCallCheck(this, Pixel);

        this.x = 0.0;
        this.y = 0.0;
        this.mode = null;
        this.CLASS_NAME = "SuperMap.Pixel";

        this.x = x ? parseFloat(x) : this.x;
        this.y = y ? parseFloat(y) : this.y;
        this.mode = mode;
    }

    /**
     * @function SuperMap.Pixel.prototype.toString
     * @description 返回此对象的字符串形式
     * @example
     *
     * var pixcel = new SuperMap.Pixel(100,50);
     * var str = pixcel.toString();
     *
     * @returns {string} 例如: "x=200.4,y=242.2"
     */


    /**
     * @member SuperMap.Pixel.prototype.mode -{SuperMap.Pixel.Mode}
     * @description 坐标模式，有左上、右上、右下、左下这几种模式，分别表示相对于左上角、右上角、右下角、左下角的坐标。<br>
     * 值有<br>
     * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
     * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightTop}
     * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightBottom}
     * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftBottom}
     *
     * 这四种 默认值为：{@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
     *
     * @default {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
     */


    /**
     * @member SuperMap.Pixel.prototype.x -{number}
     * @description x坐标，默认为0.0
     */


    _createClass(Pixel, [{
        key: "toString",
        value: function toString() {
            return "x=" + this.x + ",y=" + this.y;
        }

        /**
         * @function SuperMap.Pixel.prototype.clone
         * @description 克隆当前的 pixel 对象。
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * var pixcel2 = pixcel.clone();
         * @returns {SuperMap.Pixel} 返回一个新的与当前 pixel 对象有相同x、y坐标的 pixel 对象。
         */

    }, {
        key: "clone",
        value: function clone() {
            return new Pixel(this.x, this.y, this.mode);
        }

        /**
         * @function SuperMap.Pixel.prototype.equals
         * @description 比较两 pixel 是否相等
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * var pixcel2 = new SuperMap.Pixel(10050);
         * var isEquals = pixcel.equals(pixcel2);
         *
         * @param px - {SuperMap.Pixel} 用于比较相等的 pixel 对象。
         * @returns {Boolean} 如果传入的像素点和当前像素点相同返回true如果不同或传入参数为NULL则返回false
         */

    }, {
        key: "equals",
        value: function equals(px) {
            var equals = false;
            if (px != null) {
                equals = this.x == px.x && this.y == px.y || isNaN(this.x) && isNaN(this.y) && isNaN(px.x) && isNaN(px.y);
            }
            return equals;
        }

        /**
         * @function SuperMap.Pixel.prototype.distanceTo
         * @description 返回两个 pixel 的距离。
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * var pixcel2 = new SuperMap.Pixel(11030);
         * var distance = pixcel.distanceTo(pixcel2);
         *
         * @param px - {SuperMap.Pixel} 用于计算的一个 pixel
         * @returns {float} 作为参数传入的像素与当前像素点的距离。
         */

    }, {
        key: "distanceTo",
        value: function distanceTo(px) {
            return Math.sqrt(Math.pow(this.x - px.x, 2) + Math.pow(this.y - px.y, 2));
        }

        /**
         * @function SuperMap.Pixel.prototype.add
         * @description 在原来像素坐标基础上，x值加上传入的x参数，y值加上传入的y参数。
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * //pixcel2是新的对象
         * var pixcel2 = pixcel.add(2030);
         *
         * @param x - {number} 传入的x值。
         * @param y - {number} 传入的y值。
         * @returns {SuperMap.Pixel} 返回一个新的pixel对象，该pixel是由当前的pixel与传
         *      入的xy相加得到。
         */

    }, {
        key: "add",
        value: function add(x, y) {
            if (x == null || y == null) {
                throw new TypeError('Pixel.add cannot receive null values');
            }
            return new Pixel(this.x + x, this.y + y);
        }

        /**
         * @function SuperMap.Pixel.prototype.offset
         * @description 通过传入的 {@link SuperMap.Pixel} 参数对原屏幕坐标进行偏移。
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * var pixcel2 = new SuperMap.Pixel(13020);
         * //pixcel3 是新的对象
         * var pixcel3 = pixcel.offset(pixcel2);
         *
         * @param px - {SuperMap.Pixel}  传入的 <SuperMap.Pixel> 对象。
         * @returns {SuperMap.Pixel} 返回一个新的pixel，该pixel是由当前的pixel对象的x，y
         *      值与传入的Pixel对象的x，y值相加得到。
         */

    }, {
        key: "offset",
        value: function offset(px) {
            var newPx = this.clone();
            if (px) {
                newPx = this.add(px.x, px.y);
            }
            return newPx;
        }

        /**
         *
         * @function SuperMap.Pixel.prototype.destroy
         * @description 销毁此对象。
         * 销毁后此对象的所有属性为null，而不是初始值。
         * @example
         * var pixcel = new SuperMap.Pixel(10050);
         * pixcel.destroy();
         */

    }, {
        key: "destroy",
        value: function destroy() {
            this.x = null;
            this.y = null;
            this.mode = null;
        }

        /**
         * @member SuperMap.Pixel.Mode
         * @enum {string}
         * @readonly
         * @description 模式
         *
         * * SuperMap.Pixel.Mode.LeftTop 左上模式
         * * SuperMap.Pixel.Mode.RightTop 右上模式
         * * SuperMap.Pixel.Mode.RightBottom 右下模式
         * * SuperMap.Pixel.Mode.LeftBottom 左下模式
         */

    }]);

    return Pixel;
}();

Pixel.Mode = {
    LeftTop: "lefttop",
    RightTop: "righttop",
    RightBottom: "rightbottom",
    LeftBottom: "leftbottom"
};
exports["default"] = Pixel;

_SuperMap2["default"].Pixel = Pixel;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class  SuperMap.Size
 * @classdesc 此类描绘一对高宽值的实例。
 * @param  w -{number} 宽度，默认值为0.0
 * @param  h -{number} 高度 ，默认值为0.0
 *
 * @example
 * var size = new SuperMap.Size(31,46);
 */
var Size = function () {

    /**
     * @member SuperMap.Size.prototype.w -{number}
     * @description  宽，默认值为0.0
     */
    function Size(w, h) {
        _classCallCheck(this, Size);

        this.w = 0.0;
        this.h = 0.0;
        this.CLASS_NAME = "SuperMap.Size";

        this.w = w ? parseFloat(w) : this.w;
        this.h = w ? parseFloat(h) : this.h;
    }

    /**
     * @function SuperMap.Size.prototype.toString
     * @description 返回此对象的字符串形式
     * @example
     * var size = new SuperMap.Size(10,5);
     * var str = size.toString();
     * @returns {string} 例如："w=10,h=5"
     */


    /**
     * @member SuperMap.Size.prototype.h -{number}
     * @description 高，默认值为0.0
     */


    _createClass(Size, [{
        key: "toString",
        value: function toString() {
            return "w=" + this.w + ",h=" + this.h;
        }

        /**
         * @function SuperMap.Size.prototype.clone
         * @description 克隆当前size对象.
         * @example
         * var size = new SuperMap.Size(3146);
         * var size2 = size.clone();
         *
         * @returns {SuperMap.Size}  返回一个新的与当前size对象有相同宽、高的Size对象。
         */

    }, {
        key: "clone",
        value: function clone() {
            return new Size(this.w, this.h);
        }

        /**
         *
         * @function SuperMap.Size.prototype.equals
         * @description 比较两个size对象是否相等。
         * @example
         * var size = new SuperMap.Size(3146);
         * var size2 = new SuperMap.Size(3146);
         * var isEquals = size.equals(size2);
         *
         * @param sz -{SuperMap.Size} 用于比较相等的Size对象。
         * @returns {Boolean} 传入的size和当前size高宽相等，注意：如果传入的size为空则返回false
         *
         */

    }, {
        key: "equals",
        value: function equals(sz) {
            var equals = false;
            if (sz != null) {
                equals = this.w === sz.w && this.h === sz.h || isNaN(this.w) && isNaN(this.h) && isNaN(sz.w) && isNaN(sz.h);
            }
            return equals;
        }

        /**
         *
         * @function SuperMap.Size.prototype.destroy
         * @description 销毁此对象。销毁后此对象的所有属性为null，而不是初始值。
         * @example
         * var size = new SuperMap.Size(3146);
         * size.destroy();
         */

    }, {
        key: "destroy",
        value: function destroy() {
            this.w = null;
            this.h = null;
        }
    }]);

    return Size;
}();

exports["default"] = Size;

_SuperMap2["default"].Size = Size;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Feature2 = __webpack_require__(53);

var _Feature3 = _interopRequireDefault(_Feature2);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TRASH THIS
_SuperMap2["default"].State = {
    /** states */
    UNKNOWN: 'Unknown',
    INSERT: 'Insert',
    UPDATE: 'Update',
    DELETE: 'Delete'
};

/**
 * @class SuperMap.Feature.Vector
 * @classdesc 矢量要素类。该类具有 Geometry 属性存放几何信息，attributes 属性存放非几何信息，另外还包含了 style 属性，
 *             用来定义矢量要素的样式，其中，默认的样式在 <SuperMap.Feature.Vector.style> 类中定义，如果没有特别的指定将使用默认的样式。
 * @extends SuperMap.Feature
 * @param geometry - {SuperMap.Geometry} 代表要素的几何形状。
 * @param attributes - {Object} 描述要素的任意的可序列化属性，将要映射到 attributes 属性中的可选对象。
 * @param style - {Object} 一个可选的样式对象。
 * @example
 * var geometry = new SuperMap.Geometry.Point(-115,10);
 *  var style = {
     *      strokeColor:"#339933",
     *      strokeOpacity:1,
     *      strokeWidth:3,
     *      pointRadius:6
     *  }
 *  var pointFeature = new SuperMap.Feature.Vector(geometry,null,style);
 *  vectorLayer.addFeatures(pointFeature);
 */

var Vector = function (_Feature) {
    _inherits(Vector, _Feature);

    /**
     * @member SuperMap.Feature.Vector.prototype.renderIntent - {string}
     * @description Feature要素即被被渲染的样式状态，对应StyleMap中的状态定义的可选值。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.style - {Object}
     * @description 要素的样式属性，地图查询返回的feature的style，8C变为null。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.bounds - {SuperMap.Bounds}
     * @description 要素的Bounds范围。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.geometry - {SuperMap.Geometry}
     * @description 该属性用于存放几何信息。
     */
    function Vector(geometry, attributes, style) {
        _classCallCheck(this, Vector);

        var _this = _possibleConstructorReturn(this, (Vector.__proto__ || Object.getPrototypeOf(Vector)).call(this, null, null, attributes));

        _this.fid = null;
        _this.geometry = null;
        _this.attributes = null;
        _this.bounds = null;
        _this.state = null;
        _this.style = null;
        _this.url = null;
        _this.renderIntent = "default";
        _this.modified = null;
        _this.CLASS_NAME = "SuperMap.Feature.Vector";

        _this.lonlat = null;
        _this.geometry = geometry ? geometry : null;
        _this.state = null;
        _this.attributes = {};
        if (attributes) {
            _this.attributes = _Util.Util.extend(_this.attributes, attributes);
        }
        _this.style = style ? style : null;
        return _this;
    }

    /**
     * @function SuperMap.Feature.Vector.prototype.destroy
     * @description 释放相关资源。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.modified - {Object}
     * @description 一个具有可以被改变的原始几何形状和属性，被 <SuperMap.Control.ModifyFeature> 写入。
     * 应用程序可以在attributes中设置原始的能被修改的属性，需要注意的是，应用程序需要在使用某个对象及其属
     * 性前检测这个对象及其 attributes 属性是否创建，用 ModifyFeature改变之后，这个对象如下所示：
     * @example
     * {
     *     geometry: Object
     * }
     *
     * 当应用程序需要对要素的 attributes 进行修改，则需要如下设置 attributes：
     * @example
     * {
     *     attributes: {
     *         myAttribute: "original"
     *     }
     * }
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.url - {string}
     * @description 如果设置了这个属性，在更新或者删除要素时需要考虑 <SuperMap.HTTP> 。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.state - {string}
     * @description state
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.attributes - {Object}
     * @description 描述要素的任意的可序列化属性。
     */


    /**
     * @member SuperMap.Feature.Vector.prototype.fid - {string}
     * @description fid
     */


    _createClass(Vector, [{
        key: 'destroy',
        value: function destroy() {
            if (this.layer) {
                this.layer.removeFeatures(this);
                this.layer = null;
            }

            this.geometry = null;
            this.modified = null;
            _get(Vector.prototype.__proto__ || Object.getPrototypeOf(Vector.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.clone
         * @description 克隆对象。
         * @returns {SuperMap.Feature.Vector} 克隆的SuperMap.Feature.Vector对象。
         */

    }, {
        key: 'clone',
        value: function clone() {
            return new Vector(this.geometry ? this.geometry.clone() : null, this.attributes, this.style);
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.onScreen
         * @description 判断要素是否在地图视图范围内。
         * @param boundsOnly - {boolean} 要素的bounds范围是否与地图的视图范围相交。
         * @returns {boolean} 要素是否在地图视图范围内。
         */

    }, {
        key: 'onScreen',
        value: function onScreen(boundsOnly) {
            var onScreen = false;
            if (this.layer && this.layer.map) {
                var screenBounds = this.layer.map.getExtent();
                if (boundsOnly) {
                    var featureBounds = this.geometry.getBounds();
                    onScreen = screenBounds.intersectsBounds(featureBounds);
                } else {
                    var screenPoly = screenBounds.toGeometry();
                    onScreen = screenPoly.intersects(this.geometry);
                }
            }
            return onScreen;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.getVisibility
         * @description 判断要素是否可见。
         * @returns {boolean} 要素是否可见。
         */

    }, {
        key: 'getVisibility',
        value: function getVisibility() {
            return !(this.style && this.style.display === 'none' || !this.layer || this.layer && this.layer.styleMap && this.layer.styleMap.createSymbolizer(this, this.renderIntent).display === 'none' || this.layer && !this.layer.getVisibility());
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.createMarker
         * @description HACK - 需要判断是否所有的矢量要素能创建标记。
         * @returns {SuperMap.Marker} 当前返回null。
         */

    }, {
        key: 'createMarker',
        value: function createMarker() {
            return null;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.destroyMarker
         * @description HACK - 需要判断是否所有的矢量要素能销毁标记。当前不做任何操作。
         */

    }, {
        key: 'destroyMarker',
        value: function destroyMarker() {}
        // pass


        /**
         * @function SuperMap.Feature.Vector.prototype.createPopup
         * @description HACK - 需要判断是否所有的矢量要素能创建弹出窗口。
         * @returns {SuperMap.Popup} 当前返回null。
         */

    }, {
        key: 'createPopup',
        value: function createPopup() {
            return null;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.atPoint
         * @description 判断是否要素与制定的位置点相交。
         * @param lonlat - {SuperMap.LonLat}
         * @param toleranceLon - {float} 经度。
         * @param toleranceLat - {float} 维度。
         * @returns {boolean} 是否要素与制定的位置点相交。
         */

    }, {
        key: 'atPoint',
        value: function atPoint(lonlat, toleranceLon, toleranceLat) {
            var atPoint = false;
            if (this.geometry) {
                atPoint = this.geometry.atPoint(lonlat, toleranceLon, toleranceLat);
            }
            return atPoint;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.destroyPopup
         * @description HACK - 需要判断是否所有的矢量要素能销毁弹出窗口。
         */

    }, {
        key: 'destroyPopup',
        value: function destroyPopup() {}
        // pass


        /**
         * @function SuperMap.Feature.Vector.prototype.move
         * @description 移动要素并在新位置重绘要素。
         * @param location - {SuperMap.LonLat|SuperMap.Pixel} 移动到的新位置点。
         */

    }, {
        key: 'move',
        value: function move(location) {

            if (!this.layer || !this.geometry.move) {
                //do nothing if no layer or immoveable geometry
                return undefined;
            }

            var pixel;
            if (location.CLASS_NAME === "SuperMap.LonLat") {
                pixel = this.layer.getViewPortPxFromLonLat(location);
            } else {
                pixel = location;
            }

            var lastPixel = this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());
            var res = this.layer.map.getResolution();
            this.geometry.move(res * (pixel.x - lastPixel.x), res * (lastPixel.y - pixel.y));
            this.layer.drawFeature(this);
            return lastPixel;
        }

        /**
         * @function SuperMap.Feature.Vector.prototype.toState
         * @description 设置新状态。
         * @param state - {string} 状态。
         */

    }, {
        key: 'toState',
        value: function toState(state) {
            if (state === _SuperMap2["default"].State.UPDATE) {
                switch (this.state) {
                    case _SuperMap2["default"].State.UNKNOWN:
                    case _SuperMap2["default"].State.DELETE:
                        this.state = state;
                        break;
                    case _SuperMap2["default"].State.UPDATE:
                    case _SuperMap2["default"].State.INSERT:
                        break;
                }
            } else if (state === _SuperMap2["default"].State.INSERT) {
                switch (this.state) {
                    case _SuperMap2["default"].State.UNKNOWN:
                        break;
                    default:
                        this.state = state;
                        break;
                }
            } else if (state === _SuperMap2["default"].State.DELETE) {
                switch (this.state) {
                    case _SuperMap2["default"].State.INSERT:
                        // the feature should be destroyed
                        break;
                    case _SuperMap2["default"].State.DELETE:
                        break;
                    case _SuperMap2["default"].State.UNKNOWN:
                    case _SuperMap2["default"].State.UPDATE:
                        this.state = state;
                        break;
                }
            } else if (state === _SuperMap2["default"].State.UNKNOWN) {
                this.state = state;
            }
        }

        /**
         * @member SuperMap.Feature.Vector.style
         * @description SuperMap.features有大量的样式属性，如果没有特别的指定将使用默认的样式，大部分样式通过SVG标准定义属性。
         * - fill properties资料介绍: {@link http://www.w3.org/TR/SVG/painting.html#FillProperties}
         * - stroke properties资料介绍: {@link http://www.w3.org/TR/SVG/painting.html#StrokeProperties}
         *
         *  fill - {boolean} 不需要填充则设置为false。<br>
         *  fillColor - {string} 十六进制填充颜色，默认为"#ee9900"。<br>
         *  fillOpacity - {number} 填充不透明度。默认为0.4。<br>
         *  stroke - {boolean} 不需要描边则设为false。<br>
         *  strokeColor - {string} 十六进制描边颜色。<br>
         *  strokeOpacity - {number} 描边的不透明度(0-1)默认为0.4。<br>
         *  strokeWidth - {number} 像素描边宽度，默认为1。<br>
         *  strokeLinecap - {string} strokeLinecap有三种类型butt，round，square，默认为"round"。<br>
         *  strokeDashstyle - {string} 有dotdashdashotlongdashlongdashdotsolid几种样式，默认为"solid"。<br>
         *  graphic - {boolean} 不需要则设置为false。<br>
         *  pointRadius - {number} 像素点半径，默认为6。<br>
         *  pointerEvents - {string}  默认为"visiblePainted"。<br>
         *  cursor - {string} 默认为""。<br>
         *  allowRotate -{string} 是否允许图标随着运行方向旋转，默认为false。用于时空数据图层。<br>
         *  externalGraphic - {string} 连接到用来渲染点的外部的图形。<br>
         *  graphicWidth - {number} 外部图表的像素宽度。<br>
         *  graphicHeight - {number} 外部图表的高宽度。<br>
         *  graphicOpacity - {number} 外部图表的不透明度(0-1)。<br>
         *  graphicXOffset - {number} 外部图表沿着x方向的偏移量。<br>
         *  graphicYOffset - {number} 外部图表沿着y方向的偏移量Pixel。<br>
         *  rotation - {number} 一个图表沿着其中心点（或者偏移中心指定点）在顺时针方向旋转。<br>
         *  graphicZIndex - {number} 渲染时使用的索引值。The integer z-index value to use in rendering。<br>
         *  graphicName - {string} 渲染点时图标使用的名字。支持"circle"  "square" "star" "x" "cross" "triangle"。默认为"circle"。<br>
         *  graphicTitle - {string} 外部图表的提示框。<br>
         *  backgroundGraphic - {string} 外部图表的背景。<br>
         *  backgroundGraphicZIndex - {number} 背景图渲染时使用的索引值。<br>
         *  backgroundXOffset - {number} 背景图在x轴的偏移量。<br>
         *  backgroundYOffset - {number} 背景图在x轴的偏移量。<br>
         *  backgroundHeight - {number} 背景图的高度。如果没有设置，将用graphicHeight。<br>
         *  backgroundWidth - {number} 背景图的宽度。如果没有设置，将用graphicWidth。<br>
         *  isUnicode - {boolean} 这个属性要配合label属性来用，当为true时，label就可以使用unicode编码，比如"a"的unicode十六进制编码为61，则label属性可以为"&#x61;"其中"&#"为前缀，标志这个为unicode编码，
         *  "x"是指16进制这时页面显示的是"a"；当此值为false的时候，label的内容会被直接输出，比如，label为"&#x61;"，这时页面显示的也是"&#x61;"。默认为false。<br>
         *  label - {string} 可选的标签文本。<br>
         *  labelAlign - {string} 标签对齐，是由两个字符组成的字符串，如："lt" "cm" "rb"，其中第一个字符代表水平方向上的对齐，"l"=left "c"=center "r"=right；第二个字符代表垂直方向上的对齐，"t"=top "m"=middle "b"=bottom。<br>
         *  labelXOffset - {number} 标签在x轴方向的偏移量。<br>
         *  labelYOffset - {number} 标签在y轴方向的偏移量。<br>
         *  labelSelect - {boolean} 如果设为true，标签可以选用SelectFeature或者similar控件，默认为false。<br>
         *  fontColor - {string} 标签字体颜色。<br>
         *  fontOpacity - {number} 标签透明度 (0-1)。<br>
         *  fontFamily - {string} 标签的字体类型。<br>
         *  fontSize - {string} 标签的字体大小。<br>
         *  fontStyle - {string} 标签的字体样式。<br>
         *  fontWeight - {string} 标签的字体粗细。<br>
         *  display - {string} 如果display属性设置为"none"，符号将没有任何效果。
         * @example
         *  // label的用法如下：
         *  function addGeoTest(){
         *  var geometry = new SuperMap.Geometry.Point(105 35);
         *  var pointFeature = new SuperMap.Feature.Vector(geometry);
         *  var styleTest = {
         *        label:"supermap"
         *        fontColor:"#0000ff"
         *        fontOpacity:"0.5"
         *        fontFamily:"隶书"
         *        fontSize:"8em"
         *        fontWeight:"bold"
         *        fontStyle:"italic"
         *        labelSelect:"true"
         *     }
         *           pointFeature.style = styleTest;
         *          vectorLayer.addFeatures([pointFeature]);
         * }
         */

    }]);

    return Vector;
}(_Feature3["default"]);

Vector.style = {
    'default': {
        fillColor: "#ee9900",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "#ee9900",
        strokeOpacity: 1,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "inherit",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3
    },
    'select': {
        fillColor: "blue",
        fillOpacity: 0.4,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        cursor: "pointer",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3

    },
    'temporary': {
        fillColor: "#66cccc",
        fillOpacity: 0.2,
        hoverFillColor: "white",
        hoverFillOpacity: 0.8,
        strokeColor: "#66cccc",
        strokeOpacity: 1,
        strokeLinecap: "round",
        strokeWidth: 2,
        strokeDashstyle: "solid",
        hoverStrokeColor: "red",
        hoverStrokeOpacity: 1,
        hoverStrokeWidth: 0.2,
        pointRadius: 6,
        hoverPointRadius: 1,
        hoverPointUnit: "%",
        pointerEvents: "visiblePainted",
        //cursor:"inherit",
        cursor: "default",
        fontColor: "#000000",
        labelAlign: "cm",
        labelOutlineColor: "white",
        labelOutlineWidth: 3

    },
    'delete': {
        display: "none"
    }
};
exports["default"] = Vector;

_SuperMap2["default"].Feature.Vector = Vector;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _MultiPoint2 = __webpack_require__(20);

var _MultiPoint3 = _interopRequireDefault(_MultiPoint2);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Geometry.Curve
 * @classdesc 几何对象曲线类。
 * @extends SuperMap.Geometry.MultiPoint
 * @param components - {Array<SuperMap.Geometry.Point>} 几何对象数组。
 * @example
 * var point1 = new SuperMap.Geometry.Point(10,20);
 * var point2 = new SuperMap.Geometry.Point(30,40);
 * var curve = new SuperMap.Geometry.Curve([point1,point2]);
 */
var Curve = function (_MultiPoint) {
    _inherits(Curve, _MultiPoint);

    function Curve(points) {
        _classCallCheck(this, Curve);

        var _this = _possibleConstructorReturn(this, (Curve.__proto__ || Object.getPrototypeOf(Curve)).call(this, points));

        _this.componentTypes = ["SuperMap.Geometry.Point", "SuperMap.PointWithMeasure"];
        _this.CLASS_NAME = "SuperMap.Geometry.Curve";
        return _this;
    }

    /**
     * @member SuperMap.Geometry.Curve.prototype.componentTypes - {Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @readonly
     * @default ["{@link SuperMap.Geometry.Point}", "{@link SuperMap.PointWithMeasure}"]
     */


    return Curve;
}(_MultiPoint3["default"]);

exports["default"] = Curve;

_SuperMap2["default"].Geometry.Curve = Curve;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _JSON = __webpack_require__(60);

var _JSON2 = _interopRequireDefault(_JSON);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _MultiPoint = __webpack_require__(20);

var _MultiPoint2 = _interopRequireDefault(_MultiPoint);

var _LineString = __webpack_require__(9);

var _LineString2 = _interopRequireDefault(_LineString);

var _MultiLineString = __webpack_require__(32);

var _MultiLineString2 = _interopRequireDefault(_MultiLineString);

var _LinearRing = __webpack_require__(17);

var _LinearRing2 = _interopRequireDefault(_LinearRing);

var _Polygon = __webpack_require__(21);

var _Polygon2 = _interopRequireDefault(_Polygon);

var _MultiPolygon = __webpack_require__(33);

var _MultiPolygon2 = _interopRequireDefault(_MultiPolygon);

var _REST = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Format.GeoJSON
 * @classdesc  GeoJSON 的读和写。使用 <SuperMap.Format.GeoJSON> 构造器创建一个GeoJSON解析器。
 * @extends SuperMap.Format.JSON。
 */
var GeoJSON = function (_JSONFormat) {
    _inherits(GeoJSON, _JSONFormat);

    function GeoJSON() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GeoJSON);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GeoJSON.__proto__ || Object.getPrototypeOf(GeoJSON)).call.apply(_ref, [this].concat(args))), _this), _this.ignoreExtraDims = false, _this.parseCoords = {
            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.point
             * @description 将一组坐标成一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的一组坐标。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "point": function point(array) {
                if (this.ignoreExtraDims == false && array.length != 2) {
                    throw "Only 2D points are supported: " + array;
                }
                return new _Point2["default"](array[0], array[1]);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.multipoint
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的坐标组数组。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "multipoint": function multipoint(array) {
                var points = [];
                var p = null;
                for (var i = 0, len = array.length; i < len; ++i) {
                    try {
                        p = this.parseCoords["point"].apply(this, [array[i]]);
                    } catch (err) {
                        throw err;
                    }
                    points.push(p);
                }
                return new _MultiPoint2["default"](points);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.linestring
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的坐标组数组。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "linestring": function linestring(array) {
                var points = [];
                var p = null;
                for (var i = 0, len = array.length; i < len; ++i) {
                    try {
                        p = this.parseCoords["point"].apply(this, [array[i]]);
                    } catch (err) {
                        throw err;
                    }
                    points.push(p);
                }
                return new _LineString2["default"](points);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.multilinestring
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的坐标组数组。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "multilinestring": function multilinestring(array) {
                var lines = [];
                var l = null;
                for (var i = 0, len = array.length; i < len; ++i) {
                    try {
                        l = this.parseCoords["linestring"].apply(this, [array[i]]);
                    } catch (err) {
                        throw err;
                    }
                    lines.push(l);
                }
                return new _MultiLineString2["default"](lines);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.polygon
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "polygon": function polygon(array) {
                var rings = [];
                var r, l;
                for (var i = 0, len = array.length; i < len; ++i) {
                    try {
                        l = this.parseCoords["linestring"].apply(this, [array[i]]);
                    } catch (err) {
                        throw err;
                    }
                    r = new _LinearRing2["default"](l.components);
                    rings.push(r);
                }
                return new _Polygon2["default"](rings);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.multipolygon
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的坐标组数组。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "multipolygon": function multipolygon(array) {
                var polys = [];
                var p = null;
                for (var i = 0, len = array.length; i < len; ++i) {
                    try {
                        p = this.parseCoords["polygon"].apply(this, [array[i]]);
                    } catch (err) {
                        throw err;
                    }
                    polys.push(p);
                }
                return new _MultiPolygon2["default"](polys);
            },

            /**
             * @function SuperMap.Format.GeoJSON.parseCoords.box
             * @description 将坐标组数组转化成为一个<SuperMap.Geometry>对象。
             * @param array - {Object} GeoJSON片段中的坐标组数组。
             * @return {SuperMap.Geometry} 一个几何对象。
             */
            "box": function box(array) {
                if (array.length != 2) {
                    throw "GeoJSON box coordinates must have 2 elements";
                }
                return new _Polygon2["default"]([new _LinearRing2["default"]([new _Point2["default"](array[0][0], array[0][1]), new _Point2["default"](array[1][0], array[0][1]), new _Point2["default"](array[1][0], array[1][1]), new _Point2["default"](array[0][0], array[1][1]), new _Point2["default"](array[0][0], array[0][1])])]);
            }

        }, _this.extract = {
            /**
             * @function SuperMap.Format.GeoJSON.extract.feature
             * @description 返回一个表示单个要素对象的GeoJSON的一部分。
             * @param feature - iServer要素对象
             * @return {Object} 一个表示点的对象。
             */
            'feature': function feature(_feature) {
                var geom = this.extract.geometry.apply(this, [_feature.geometry]);
                var json = {
                    "type": "Feature",
                    "properties": this.createAttributes(_feature),
                    "geometry": geom
                };

                if (_feature.geometry && _feature.geometry.type === 'TEXT') {
                    json.properties.texts = _feature.geometry.texts;
                    json.properties.textStyle = _feature.geometry.textStyle;
                }
                if (_feature.fid !== null) {
                    json.id = _feature.fid;
                }
                if (_feature.ID !== null) {
                    json.id = _feature.ID;
                }
                return json;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.geometry
             * @description 返回一个表示单个几何对象的GeoJSON的一部分。
             * @param geometry -iServer 几何对象
             * @return {Object} 一个表示几何体的对象。
             */
            'geometry': function geometry(_geometry) {
                if (_geometry == null) {
                    return null;
                }
                var geo = this.toGeometry(_geometry);
                var geometryType = geo.type;
                var data = this.extract[geometryType.toLowerCase()].apply(this, [geo]);
                geometryType = geometryType === 'TEXT' ? 'Point' : geometryType;
                var json;
                if (geometryType === "Collection") {
                    json = {
                        "type": "GeometryCollection",
                        "geometries": data
                    };
                } else {
                    json = {
                        "type": geometryType,
                        "coordinates": data
                    };
                }
                return json;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.point
             * @description 从一个点对象中返回一个坐标组。
             * @param point - {SuperMap.Geometry.Point} 一个点对象。
             * @return {Array} 一个表示一个点的坐标组。
             */
            'point': function point(_point) {
                var p = [_point.x, _point.y];
                for (var name in _point) {
                    if (name !== "x" && name !== "y" && !isNaN(_point[name])) {
                        p.push(_point[name]);
                    }
                }
                return p;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.point
             * @description 从一个文本对象中返回一个坐标组。
             * @param geo 一个文本对象。
             * @return {Array} 一个表示一个点的坐标组。
             */
            'text': function text(geo) {
                return [geo.points[0].x, geo.points[0].y];
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.multipoint
             * @description 从一个多点对象中返一个坐标组数组。
             * @param multipoint - {SuperMap.Geometry.MultiPoint} 多点对象。
             * @return {Array} 一个表示多点的坐标组数组。
             */
            'multipoint': function multipoint(_multipoint) {
                var array = [];
                for (var i = 0, len = _multipoint.components.length; i < len; ++i) {
                    array.push(this.extract.point.apply(this, [_multipoint.components[i]]));
                }
                return array;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.linestring
             * @description 从一个线对象中返回一个坐标组数组。
             * @param linestring - {SuperMap.Geometry.Linestring} 线对象。
             * @return {Array} 一个表示线对象的坐标组数组。
             */
            'linestring': function linestring(_linestring) {
                var array = [];
                for (var i = 0, len = _linestring.components.length; i < len; ++i) {
                    array.push(this.extract.point.apply(this, [_linestring.components[i]]));
                }
                return array;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.multilinestring
             * @description 从一个多线对象中返回一个线数组。
             * @param multilinestring - {SuperMap.Geometry.MultiLinestring} 多线对象
             *
             * @return {Array} 一个表示多线的线数组。
             */
            'multilinestring': function multilinestring(_multilinestring) {
                var array = [];
                for (var i = 0, len = _multilinestring.components.length; i < len; ++i) {
                    array.push(this.extract.linestring.apply(this, [{ components: _multilinestring.components[i] }]));
                }
                return array;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.polygon
             * @description 从一个面对象中返回一组线环。
             * @polygon - {SuperMap.Geometry.Polygon} 面对象。
             * @return {Array} 一组表示面的线环。
             */
            'polygon': function polygon(_polygon) {
                var array = [];
                for (var i = 0, len = _polygon.components.length; i < len; ++i) {
                    array.push(this.extract.linestring.apply(this, [{ components: _polygon.components[i] }]));
                }
                return array;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.multipolygon
             * @description 从一个多面对象中返回一组面。
             * @param multipolygon - {SuperMap.Geometry.MultiPolygon} 多面对象。
             * @return {Array} 一组表示多面的面。
             */
            'multipolygon': function multipolygon(_multipolygon) {
                var array = [];
                for (var i = 0, len = _multipolygon.components.length; i < len; ++i) {
                    array.push(this.extract.polygon.apply(this, [{ components: _multipolygon.components[i] }]));
                }
                return array;
            },

            /**
             * @function SuperMap.Format.GeoJSON.extract.collection
             * @description 从一个几何要素集合中一组几何要素数组。
             * @param collection - {SuperMap.Geometry.Collection} 几何要素集合。
             * @return {Array} 一组表示几何要素集合的几何要素数组。
             */
            'collection': function collection(_collection) {
                var len = _collection.components.length;
                var array = new Array(len);
                for (var i = 0; i < len; ++i) {
                    array[i] = this.extract.geometry.apply(this, [{
                        type: "Collection",
                        components: _collection.components[i]
                    }]);
                }
                return array;
            }
        }, _this.CLASS_NAME = "SuperMap.Format.GeoJSON", _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @member SuperMap.Format.GeoJSON.prototype.ignoreExtraDims - {boolean}
     * @description 忽略维度超过2的几何要素。
     */


    _createClass(GeoJSON, [{
        key: 'read',


        /**
         * @function SuperMap.Format.GeoJSON.prototype.read
         * @description 反序列化一个 GeoJSON 字符串。
         * @param json - {string}  GeoJSON 字符串
         * @param type - {string} 可选的字符串，它决定了输出的格式。
         *     支持的值有："Geometry","Feature",和"FeatureCollection",
         *     如果此值为null，则会使用默认值"FeaureCollection"。
         * @param filter - {function} 对象中每个层次每个键值对都会调用此函数得出一个结果。
         *     每个值都会被filter函数的结果所替换掉。这个函数可被用来将某些对象转化成
         *     某个类相应的对象，或者将日期字符串转化成Date对象。
         *
         * @return {Object}
         *    返回值依赖于type参数的值。如果type等于"FeatureCollection"（默认值），
         *     返回值将会是 <SuperMap.Feature.Vector> 数组。如果type为"Geometry",
         *     输入的json对象必须表示一个唯一的几何体，然后返回值就会是 <SuperMap.Feature.Geometry>
         *     如果type为"Feature"，输入的json对象也必须表示的一个要素，这样返回值才会是<SuperMap.Feature.Vector> 。
         */
        value: function read(json, type, filter) {
            type = type ? type : "FeatureCollection";
            var results = null;
            var obj = null;
            if (typeof json == "string") {
                obj = _get(GeoJSON.prototype.__proto__ || Object.getPrototypeOf(GeoJSON.prototype), 'read', this).call(this, json, filter);
            } else {
                obj = json;
            }
            if (!obj) {
                //SuperMap.Console.error("Bad JSON: " + json);
            } else if (typeof obj.type != "string") {
                //SuperMap.Console.error("Bad GeoJSON - no type: " + json);
            } else if (this.isValidType(obj, type)) {
                switch (type) {
                    case "Geometry":
                        try {
                            results = this.parseGeometry(obj);
                        } catch (err) {
                            //SuperMap.Console.error(err);
                        }
                        break;
                    case "Feature":
                        try {
                            results = this.parseFeature(obj);
                            results.type = "Feature";
                        } catch (err) {
                            //SuperMap.Console.error(err);
                        }
                        break;
                    case "FeatureCollection":
                        // for type FeatureCollection, we allow input to be any type
                        results = [];
                        switch (obj.type) {
                            case "Feature":
                                try {
                                    results.push(this.parseFeature(obj));
                                } catch (err) {
                                    results = null;
                                    //SuperMap.Console.error(err);
                                }
                                break;
                            case "FeatureCollection":
                                for (var i = 0, len = obj.features.length; i < len; ++i) {
                                    try {
                                        results.push(this.parseFeature(obj.features[i]));
                                    } catch (err) {
                                        results = null;
                                        // SuperMap.Console.error(err);
                                    }
                                }
                                break;
                            default:
                                try {
                                    var geom = this.parseGeometry(obj);
                                    results.push(new _SuperMap2["default"].Feature.Vector(geom));
                                } catch (err) {
                                    results = null;
                                    //SuperMap.Console.error(err);
                                }
                        }
                        break;
                    default:
                        break;
                }
            }
            return results;
        }

        /**
         *  @function SuperMap.Format.GeoJSON.prototype.isValidType
         *  @description 检查一个GeoJSON对象是否和给定的类型相符的合法的对象。
         *  @return {boolean} GeoJSON是否是给定类型的合法对象。
         */

    }, {
        key: 'isValidType',
        value: function isValidType(obj, type) {
            var valid = false;
            switch (type) {
                case "Geometry":
                    if (_SuperMap2["default"].Util.indexOf(["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "Box", "GeometryCollection"], obj.type) == -1) {
                        // unsupported geometry type
                        //SuperMap.Console.error("Unsupported geometry type: " +
                        // obj.type);
                    } else {
                        valid = true;
                    }
                    break;
                case "FeatureCollection":
                    // allow for any type to be converted to a feature collection
                    valid = true;
                    break;
                default:
                    // for Feature types must match
                    if (obj.type == type) {
                        valid = true;
                    } else {
                        //SuperMap.Console.error("Cannot convert types from " +
                        //obj.type + " to " + type);
                    }
            }
            return valid;
        }

        /**
         * @function SuperMap.Format.GeoJSON.prototype.parseFeature
         * @description 将一个GeoJSON中的feature转化成<SuperMap.Feature.Vector>对象。
         * @param obj - {Object} 从GeoJSON对象中创建一个对象。
         * @return {SuperMap.Feature.Vector} 一个要素。
         */

    }, {
        key: 'parseFeature',
        value: function parseFeature(obj) {
            var feature, geometry, attributes, bbox;
            attributes = obj.properties ? obj.properties : {};
            bbox = obj.geometry && obj.geometry.bbox || obj.bbox;
            try {
                geometry = this.parseGeometry(obj.geometry);
            } catch (err) {
                // deal with bad geometries
                throw err;
            }
            feature = new _SuperMap2["default"].Feature.Vector(geometry, attributes);
            if (bbox) {
                feature.bounds = _SuperMap2["default"].Bounds.fromArray(bbox);
            }
            if (obj.id) {
                feature.fid = obj.id;
            }
            return feature;
        }

        /**
         * @function SuperMap.Format.GeoJSON.prototype.parseGeometry
         * @description 将一个GeoJSON中的几何要素转化成<SuperMap.Geometry>对象。
         * @param obj - {Object} 从GeoJSON对象中创建一个对象。
         * @return {SuperMap.Geometry} 一个几何要素。
         */

    }, {
        key: 'parseGeometry',
        value: function parseGeometry(obj) {
            if (obj == null) {
                return null;
            }
            var geometry,
                collection = false;
            if (obj.type == "GeometryCollection") {
                if (!_SuperMap2["default"].Util.isArray(obj.geometries)) {
                    throw "GeometryCollection must have geometries array: " + obj;
                }
                var numGeom = obj.geometries.length;
                var components = new Array(numGeom);
                for (var i = 0; i < numGeom; ++i) {
                    components[i] = this.parseGeometry.apply(this, [obj.geometries[i]]);
                }
                geometry = new _SuperMap2["default"].Geometry.Collection(components);
                collection = true;
            } else {
                if (!_SuperMap2["default"].Util.isArray(obj.coordinates)) {
                    throw "Geometry must have coordinates array: " + obj;
                }
                if (!this.parseCoords[obj.type.toLowerCase()]) {
                    throw "Unsupported geometry type: " + obj.type;
                }
                try {
                    geometry = this.parseCoords[obj.type.toLowerCase()].apply(this, [obj.coordinates]);
                } catch (err) {
                    // deal with bad coordinates
                    throw err;
                }
            }
            return geometry;
        }

        /**
         * @member SuperMap.Format.GeoJSON.prototype.parseCoords - {Object}
         * @description 一个属性名对应着GeoJSON对象的几何类型的对象。每个属性其实都是一个实际上做解析用的方法。
         */

    }, {
        key: 'write',


        /**
         * @function SuperMap.Format.GeoJSON.write
         * @description 序列化一个要素对象，几何对象，要素对象数组为一个GeoJSON字符串。
         * @param obj - {Object} 一个 <SuperMap.Feature.Vector> 对象，一个 <SuperMap.Geometry> 对象或者一个要素对象数组。
         * @param pretty - {boolean} 是否使用换行和缩进来控制输出。默认值为false。
         * @return {string} 一个GeoJSON字符串，它表示了输入的几何对象，要素对象，或者要素对象数组。
         */
        value: function write(obj, pretty) {
            var geojson = {
                "type": null
            };
            if (_SuperMap2["default"].Util.isArray(obj)) {
                geojson.type = "FeatureCollection";
                var numFeatures = obj.length;
                geojson.features = new Array(numFeatures);
                for (var i = 0; i < numFeatures; ++i) {
                    var element = obj[i];
                    if (isGeometry(element)) {
                        var feature = {};
                        feature.geometry = element;
                        geojson.features[i] = this.extract.feature.apply(this, [feature]);
                    } else {
                        geojson.features[i] = this.extract.feature.apply(this, [element]);
                    }
                }
            } else if (isGeometry(obj)) {
                var feature = {};
                feature.geometry = obj;
                geojson = this.extract.feature.apply(this, [feature]);
            }

            function isGeometry(input) {
                return input.hasOwnProperty("parts") && input.hasOwnProperty("points");
            }

            return _get(GeoJSON.prototype.__proto__ || Object.getPrototypeOf(GeoJSON.prototype), 'write', this).call(this, geojson, pretty);
        }

        /**
         * @function SuperMap.Format.GeoJSON.createCRSObject
         * @description 从一个要素对象中创建一个坐标参考系对象。
         * @param object - {SuperMap.Feature.Vector} 要素对象
         * @return {Object} 一个可作为GeoJSON对象的crs属性使用的对象。
         */

    }, {
        key: 'createCRSObject',
        value: function createCRSObject(object) {
            var proj = object.layer.projection.toString();
            var crs = {};
            if (proj.match(/epsg:/i)) {
                var code = parseInt(proj.substring(proj.indexOf(":") + 1));
                if (code == 4326) {
                    crs = {
                        "type": "name",
                        "properties": {
                            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                        }
                    };
                } else {
                    crs = {
                        "type": "name",
                        "properties": {
                            "name": "EPSG:" + code
                        }
                    };
                }
            }
            return crs;
        }

        /**
         * Property: extract
         * 一个属性名对应着GeoJSON类型的对象。其值为相应的实际的解析方法。
         */

    }, {
        key: 'createAttributes',
        value: function createAttributes(feature) {
            if (!feature) {
                return null;
            }
            var attr = {};
            processFieldsAttributes(feature, attr);
            var exceptKeys = ["fieldNames", "fieldValues", "geometry"];
            for (var key in feature) {
                if (exceptKeys.indexOf(key) > -1) {
                    continue;
                }
                attr[key] = feature[key];
            }

            function processFieldsAttributes(feature, attributes) {
                if (!(feature.hasOwnProperty("fieldNames") && feature.hasOwnProperty("fieldValues"))) {
                    return;
                }
                var names = feature.fieldNames,
                    values = feature.fieldValues;
                for (var i in names) {
                    attributes[names[i]] = values[i];
                }
            }

            return attr;
        }
    }, {
        key: 'toGeometry',
        value: function toGeometry(geometry) {
            var me = this,
                geoType = geometry.type;
            if (geoType === 'polygon') {
                geoType = _REST.GeometryType.REGION;
            }
            switch (geoType.toUpperCase()) {
                case _REST.GeometryType.POINT:
                    return me.toGeoPoint(geometry);
                case _REST.GeometryType.LINE:
                    return me.toGeoLine(geometry);
                case _REST.GeometryType.LINEM:
                    return me.toGeoLinem(geometry);
                case _REST.GeometryType.REGION:
                    return me.toGeoRegion(geometry);
                case _REST.GeometryType.POINTEPS:
                    return me.toGeoPoint(geometry);
                // case GeometryType.LINEEPS:
                //     return me.toGeoLineEPS();
                // case GeometryType.REGIONEPS:
                //     return me.toGeoRegionEPS();
                default:
                    return geometry;
            }
        }

        /**
         * @function SuperMap.Format.GeoJSON.toGeoPoint
         * @description 将服务端的点几何对象转换为几何对象
         */

    }, {
        key: 'toGeoPoint',
        value: function toGeoPoint(geometry) {
            var geoPoints = geometry.points || [],
                geoParts = geometry.parts || [geoPoints.length],
                len = geoParts.length;
            if (len < 1) {
                return null;
            }
            if (len === 1) {
                return { type: "Point", x: parseFloat(geoPoints[0].x), y: parseFloat(geoPoints[0].y) };
            } else {
                for (var i = 0, pointList = []; i < len; i++) {
                    pointList.push({ x: parseFloat(geoPoints[i].x), y: parseFloat(geoPoints[i].y) });
                }
                return { type: "MultiPoint", components: pointList };
            }
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoPoint
         * @description 将服务端的线几何对象转换为几何对象。
         */

    }, {
        key: 'toGeoLine',
        value: function toGeoLine(geometry) {
            var me = this,
                geoPoints = geometry.points || [],
                geoParts = geometry.parts || [geoPoints.length],
                len = geoParts.length;
            if (len < 1) {
                return null;
            }
            if (len === 1) {
                for (var i = 0, pointList = []; i < geoParts[0]; i++) {
                    pointList.push({ x: parseFloat(geoPoints[i].x), y: parseFloat(geoPoints[i].y) });
                }
                //判断线是否闭合，如果闭合，则返回LinearRing，否则返回LineString
                if (me.isPointsEquals(pointList[0], pointList[geoParts[0] - 1])) {
                    pointList.pop();
                    pointList.push(pointList[0]);
                }
                return { type: "LineString", components: pointList };
            } else {
                for (var k = 0, lineList = []; k < len; k++) {
                    for (var j = 0, pointArr = []; j < geoParts[k]; j++) {
                        pointArr.push({ x: parseFloat(geoPoints[j].x), y: parseFloat(geoPoints[j].y) });
                    }
                    lineList.push(pointArr);
                    geoPoints.splice(0, geoParts[k]);
                }
                return { type: "MultiLineString", components: lineList };
            }
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoLinem
         * @description 将服务端的路由线几何对象转换为几何对象。
         */

    }, {
        key: 'toGeoLinem',
        value: function toGeoLinem(geometry) {
            var me = this,
                geoPoints = geometry.points || [],
                geoParts = geometry.parts || [geoPoints.length],
                len = geoParts.length,
                lineList = [],
                type;
            if (len < 1) {
                return null;
            }
            for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
                for (var j = 0; j < geoParts[i]; j++) {
                    pointList.push({
                        x: parseFloat(geoPoints[pointIndex + j].x),
                        y: parseFloat(geoPoints[pointIndex + j].y),
                        measure: parseFloat(geoPoints[pointIndex + j].measure)
                    });
                }
                pointIndex += geoParts[i];
                //判断线是否闭合，如果闭合，则返回LinearRing，否则返回LineString
                if (me.isPointsEquals(pointList[0], pointList[geoParts[0] - 1])) {
                    pointList.pop();
                    pointList.push(pointList[0]);
                }
                lineList.push(pointList);
                pointList = [];
            }
            return { type: "MultiLineString", components: lineList };
        }

        /**
         *
         * @function SuperMap.Format.GeoJSON.toGeoRegion
         * @description 将服务端的面几何对象转换为几何对象。
         */

    }, {
        key: 'toGeoRegion',
        value: function toGeoRegion(geometry) {
            var CCWArray = [],
                geoPoints = geometry.points || [],
                geoParts = geometry.parts || [geoPoints.length],
                len = geoParts.length;
            if (len < 1) {
                return null;
            }
            var polygonArray = new Array();
            for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
                for (var j = 0; j < geoParts[i]; j++) {
                    pointList.push({
                        x: parseFloat(geoPoints[pointIndex + j].x),
                        y: parseFloat(geoPoints[pointIndex + j].y)
                    });
                }

                pointIndex += geoParts[i];
                var linearRing = pointList.concat();
                linearRing.pop();
                linearRing.push(linearRing[0]);

                if (this.isClockWise(linearRing) > 0) {
                    CCWArray.push(linearRing);
                } else {
                    polygonArray.push([linearRing]);
                }

                if (i === len - 1) {
                    var polyLength = polygonArray.length;
                    if (!!polyLength) {
                        polygonArray[polyLength - 1] = polygonArray[polyLength - 1].concat(CCWArray);
                    } else {
                        for (var k = 0, length = CCWArray.length; k < length; k++) {
                            polygonArray.push([CCWArray[k]].concat());
                        }
                    }
                }
                pointList = [];
            }
            return { type: "MultiPolygon", components: polygonArray };
        }
    }, {
        key: 'isClockWise',
        value: function isClockWise(points) {
            var length = points.length;
            if (length < 3) {
                return 0.0;
            }
            var s = points[0].y * (points[length - 1].x - points[1].x);
            points.push(points[0]);
            for (var i = 1; i < length; i++) {
                s += points[i].y * (points[i - 1].x - points[i + 1].x);
            }
            return s * 0.5;
        }
    }, {
        key: 'isPointsEquals',
        value: function isPointsEquals(point1, point2) {
            return point1.x === point2.x && point1.y === point2.y;
        }
    }]);

    return GeoJSON;
}(_JSON2["default"]);

exports["default"] = GeoJSON;

_SuperMap2["default"].Format.GeoJSON = GeoJSON;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Format2 = __webpack_require__(34);

var _Format3 = _interopRequireDefault(_Format2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Format.JSON
 * @classdesc 安全的读写JSON的解析类。使用<SuperMap.Format.JSON> 构造函数创建新实例。
 * @extends SuperMap.Format
 */
var JSONFormat = function (_Format) {
    _inherits(JSONFormat, _Format);

    function JSONFormat() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, JSONFormat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JSONFormat.__proto__ || Object.getPrototypeOf(JSONFormat)).call.apply(_ref, [this].concat(args))), _this), _this.indent = "    ", _this.space = " ", _this.newline = "\n", _this.level = 0, _this.pretty = false, _this.nativeJSON = function () {
            return !!(window.JSON && typeof JSON.parse === "function" && typeof JSON.stringify === "function");
        }(), _this.serialize = {
            /**
             * @function SuperMap.Format.JSON.serialize.object
             * @description 把对象转换为JSON字符串。
             * @param object - {Object} 可序列化的对象。
             * @return {string} JSON字符串。
             */
            'object': function object(_object) {
                // three special objects that we want to treat differently
                if (_object == null) {
                    return "null";
                }
                if (_object.constructor === Date) {
                    return this.serialize.date.apply(this, [_object]);
                }
                if (_object.constructor === Array) {
                    return this.serialize.array.apply(this, [_object]);
                }
                var pieces = ['{'];
                this.level += 1;
                var key, keyJSON, valueJSON;

                var addComma = false;
                for (key in _object) {
                    if (_object.hasOwnProperty(key)) {
                        // recursive calls need to allow for sub-classing
                        keyJSON = _SuperMap2["default"].Format.JSON.prototype.write.apply(this, [key, this.pretty]);
                        valueJSON = _SuperMap2["default"].Format.JSON.prototype.write.apply(this, [_object[key], this.pretty]);
                        if (keyJSON != null && valueJSON != null) {
                            if (addComma) {
                                pieces.push(',');
                            }
                            pieces.push(this.writeNewline(), this.writeIndent(), keyJSON, ':', this.writeSpace(), valueJSON);
                            addComma = true;
                        }
                    }
                }

                this.level -= 1;
                pieces.push(this.writeNewline(), this.writeIndent(), '}');
                return pieces.join('');
            },

            /**
             * @function SuperMap.Format.JSON.serialize.array
             * @description 把数组转换成JSON字符串。
             * @param array - {Array} 可序列化的数组。
             * @return {string} JSON字符串。
             */
            'array': function array(_array) {
                var json;
                var pieces = ['['];
                this.level += 1;

                for (var i = 0, len = _array.length; i < len; ++i) {
                    // recursive calls need to allow for sub-classing
                    json = _SuperMap2["default"].Format.JSON.prototype.write.apply(this, [_array[i], this.pretty]);
                    if (json != null) {
                        if (i > 0) {
                            pieces.push(',');
                        }
                        pieces.push(this.writeNewline(), this.writeIndent(), json);
                    }
                }

                this.level -= 1;
                pieces.push(this.writeNewline(), this.writeIndent(), ']');
                return pieces.join('');
            },

            /**
             * @function SuperMap.Format.JSON.serialize.string
             * @description 把字符串转换成JSON字符串。
             * @param string - {string} 可序列化的字符串。
             * @return {string} JSON字符串。
             */
            'string': function string(_string) {
                // If the string contains no control characters, no quote characters, and no
                // backslash characters, then we can simply slap some quotes around it.
                // Otherwise we must also replace the offending characters with safe
                // sequences.
                var m = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                };
                if (/["\\\x00-\x1f]/.test(_string)) {
                    return '"' + _string.replace(/([\x00-\x1f\\"])/g, function (a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    }) + '"';
                }
                return '"' + _string + '"';
            },

            /**
             * @function SuperMap.Format.JSON.serialize.number
             * @description 把数字转换成JSON字符串。
             * @param number - {number} 可序列化的数字。
             * @return {string} JSON字符串。
             */
            'number': function number(_number) {
                return isFinite(_number) ? String(_number) : "null";
            },

            /**
             * @function SuperMap.Format.JSON.serialize.boolean
             * @description Transform a boolean into a JSON string.
             * @param bool - {boolean} The boolean to be serialized.
             * @return {string} A JSON string representing the boolean.
             */
            'boolean': function boolean(bool) {
                return String(bool);
            },

            /**
             * @function SuperMap.Format.JSON.serialize.object
             * @description 将日期对象转换成JSON字符串。
             * @param date - {Date} 可序列化的日期对象。
             * @return {string} JSON字符串。
             */
            'date': function date(_date) {
                function format(number) {
                    // Format integers to have at least two digits.
                    return number < 10 ? '0' + number : number;
                }

                return '"' + _date.getFullYear() + '-' + format(_date.getMonth() + 1) + '-' + format(_date.getDate()) + 'T' + format(_date.getHours()) + ':' + format(_date.getMinutes()) + ':' + format(_date.getSeconds()) + '"';
            }
        }, _this.CLASS_NAME = "SuperMap.Format.JSON", _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @member SuperMap.Format.JSON.prototype.indent - {string}
     * @description 用于格式化输出，indent字符串会在每次缩进的时候使用一次。
     */


    /**
     * @member SuperMap.Format.JSON.prototype.space -{string}
     * @description 用于格式化输出，space字符串会在名值对的":"后边添加。
     */


    /**
     * @member SuperMap.Format.JSON.prototype.newline - {string}
     * @description 用于格式化输出, newline字符串会用在每一个名值对或数组项末尾。
     */


    /**
     * @member SuperMap.Format.JSON.prototype.level - {integer}
     * @description 用于格式化输出, 表示的是缩进级别。
     */


    /**
     * @member SuperMap.Format.JSON.prototype.pretty - {boolean}
     * @description 是否在序列化的时候使用额外的空格控制结构。在write方法中使用，默认值为false。
     */


    /**
     * @member SuperMap.Format.JSON.prototype.nativeJSON - {boolean}
     * @description 判断浏览器是否原生支持JSON格式数据。
     */


    _createClass(JSONFormat, [{
        key: 'read',


        /**
         * @function SuperMap.Format.JSON.prototype.read
         * @description 将一个符合json结构的字符串进行解析。
         * @param json - {string} 符合json结构的字符串。
         * @param filter - {function} 过滤方法，最终结果的每一个键值对都会调用该过滤方法，并在对应的值的位置替换成该方法返回的值。
         * @return {Object} 对象，数组，字符串或数字。
         */
        value: function read(json, filter) {
            var object;
            if (this.nativeJSON) {
                try {
                    object = JSON.parse(json, filter);
                } catch (e) {
                    // Fall through if the regexp test fails.
                }
            }

            if (this.keepData) {
                this.data = object;
            }

            return object;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.write
         * @description 序列化一个对象到一个符合JSON格式的字符串。
         * @param value - {object}|{string}|<Array>|{number}|{boolean} 需要被序列化的对象，数组，字符串，数字，布尔值。
         * @param pretty - {boolean}
         * @return {string} 符合JSON格式的字符串。
         *
         */

    }, {
        key: 'write',
        value: function write(value, pretty) {
            this.pretty = !!pretty;
            var json = null;
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            if (this.serialize[type]) {
                try {
                    json = !this.pretty && this.nativeJSON ? JSON.stringify(value) : this.serialize[type].apply(this, [value]);
                } catch (err) {
                    //SuperMap.Console.error("Trouble serializing: " + err);
                }
            }
            return json;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeIndent
         * @description 根据缩进级别输出一个缩进字符串。
         * @return {string} 一个适当的缩进字符串。
         */

    }, {
        key: 'writeIndent',
        value: function writeIndent() {
            var pieces = [];
            if (this.pretty) {
                for (var i = 0; i < this.level; ++i) {
                    pieces.push(this.indent);
                }
            }
            return pieces.join('');
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeNewline
         * @description 在格式化输出模式情况下输出代表新一行的字符串。
         * @return {string} 代表新的一行的字符串。
         */

    }, {
        key: 'writeNewline',
        value: function writeNewline() {
            return this.pretty ? this.newline : '';
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeSpace
         * @description 在格式化输出模式情况下输出一个代表空格的字符串。
         * @return {string} A space.
         */

    }, {
        key: 'writeSpace',
        value: function writeSpace() {
            return this.pretty ? this.space : '';
        }

        /**
         * @member SuperMap.Format.JSON.prototype.serialize
         * @description 提供一些类型对象转JSON字符串的方法。
         */

    }]);

    return JSONFormat;
}(_Format3["default"]);

exports["default"] = JSONFormat;


_SuperMap2["default"].Format.JSON = JSONFormat;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Format2 = __webpack_require__(34);

var _Format3 = _interopRequireDefault(_Format2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Format.WKT
 * @classdesc 用于读写常见文本的类。通过 <SuperMap.Format.WKT> 构造器来创建一个新
 *      的实例。
 * @extends SuperMap.Format
 * @param options - {Object} 可选的选项对象，其属性将被设置到实例。option具体配置项继承自{@link SuperMap.Format}
 */
var WKT = function (_Format) {
    _inherits(WKT, _Format);

    function WKT(options) {
        _classCallCheck(this, WKT);

        var _this = _possibleConstructorReturn(this, (WKT.__proto__ || Object.getPrototypeOf(WKT)).call(this, options));

        _this.extract = {
            /*
             * @description Return a space delimited string of point coordinates.
             * @param {SuperMap.Geometry.Point} point
             * @returns  {String} A string of coordinates representing the point
             */
            'point': function point(_point) {
                return _point.x + ' ' + _point.y;
            },

            /*
             * @description  Return a comma delimited string of point coordinates from a multipoint.
             * @param {SuperMap.Geometry.MultiPoint} multipoint
             * @returns  {String} A string of point coordinate strings representing
             *                  the multipoint
             */
            'multipoint': function multipoint(_multipoint) {
                var array = [];
                for (var i = 0, len = _multipoint.components.length; i < len; ++i) {
                    array.push('(' + this.extract.point.apply(this, [_multipoint.components[i]]) + ')');
                }
                return array.join(',');
            },


            /*
             * @description  Return a comma delimited string of point coordinates from a line.
             * @param {SuperMap.Geometry.LineString} linestring
             * @returns  {String} A string of point coordinate strings representing
             *                  the linestring
             */
            'linestring': function linestring(_linestring) {
                var array = [];
                for (var i = 0, len = _linestring.components.length; i < len; ++i) {
                    array.push(this.extract.point.apply(this, [_linestring.components[i]]));
                }
                return array.join(',');
            },


            /*
             * @description  Return a comma delimited string of linestring strings from a multilinestring.
             * @param {SuperMap.Geometry.MultiLineString} multilinestring
             * @returns  {String} A string of of linestring strings representing
             *                  the multilinestring
             */
            'multilinestring': function multilinestring(_multilinestring) {
                var array = [];
                for (var i = 0, len = _multilinestring.components.length; i < len; ++i) {
                    array.push('(' + this.extract.linestring.apply(this, [_multilinestring.components[i]]) + ')');
                }
                return array.join(',');
            },


            /*
             * @description  Return a comma delimited string of linear ring arrays from a polygon.
             * @param {SuperMap.Geometry.Polygon} polygon
             * @returns  {String} An array of linear ring arrays representing the polygon
             */
            'polygon': function polygon(_polygon) {
                var array = [];
                for (var i = 0, len = _polygon.components.length; i < len; ++i) {
                    array.push('(' + this.extract.linestring.apply(this, [_polygon.components[i]]) + ')');
                }
                return array.join(',');
            },


            /*
             * @description  Return an array of polygon arrays from a multipolygon.
             * @param {SuperMap.Geometry.MultiPolygon} multipolygon
             * @returns  {String} An array of polygon arrays representing
             *                  the multipolygon
             */
            'multipolygon': function multipolygon(_multipolygon) {
                var array = [];
                for (var i = 0, len = _multipolygon.components.length; i < len; ++i) {
                    array.push('(' + this.extract.polygon.apply(this, [_multipolygon.components[i]]) + ')');
                }
                return array.join(',');
            },


            /*
             * @description  Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an <SuperMap.Geometry.Collection>
             * @param {SuperMap.Geometry.Collection} collection
             * @returns  {String} internal WKT representation of the collection
             */
            'collection': function collection(_collection) {
                var array = [];
                for (var i = 0, len = _collection.components.length; i < len; ++i) {
                    array.push(this.extractGeometry.apply(this, [_collection.components[i]]));
                }
                return array.join(',');
            }
        };
        _this.parse = {
            /*
             * @private
             * @description  Return point feature given a point WKT fragment.
             * @param {String} str A WKT fragment representing the point
             * @returns  {SuperMap.Feature.Vector} A point feature
             *
             */
            'point': function point(str) {
                var coords = _SuperMap2["default"].String.trim(str).split(this.regExes.spaces);
                return new _SuperMap2["default"].Feature.Vector(new Supermap.Point(coords[0], coords[1]));
            },

            /*
             * @description  Return a multipoint feature given a multipoint WKT fragment.
             * @param {String} A WKT fragment representing the multipoint
             * @returns  {SuperMap.Feature.Vector} A multipoint feature
             * @private
             */
            'multipoint': function multipoint(str) {
                var point;
                var points = _SuperMap2["default"].String.trim(str).split(',');
                var components = [];
                for (var i = 0, len = points.length; i < len; ++i) {
                    point = points[i].replace(this.regExes.trimParens, '$1');
                    components.push(this.parse.point.apply(this, [point]).geometry);
                }
                return new _SuperMap2["default"].Feature.Vector(new Supermap.MultiPoint(components));
            },

            /*
             * @description  Return a linestring feature given a linestring WKT fragment.
             * @param {String} A WKT fragment representing the linestring
             * @returns  {SuperMap.Feature.Vector} A linestring feature
             * @private
             */
            'linestring': function linestring(str) {
                var points = _SuperMap2["default"].String.trim(str).split(',');
                var components = [];
                for (var i = 0, len = points.length; i < len; ++i) {
                    components.push(this.parse.point.apply(this, [points[i]]).geometry);
                }
                return new _SuperMap2["default"].Feature.Vector(new Supermap.LineString(components));
            },

            /*
             * @description  Return a multilinestring feature given a multilinestring WKT fragment.
             * @param {String} A WKT fragment representing the multilinestring
             * @returns  {SuperMap.Feature.Vector} A multilinestring feature
             * @private
             */
            'multilinestring': function multilinestring(str) {
                var line;
                var lines = _SuperMap2["default"].String.trim(str).split(this.regExes.parenComma);
                var components = [];
                for (var i = 0, len = lines.length; i < len; ++i) {
                    line = lines[i].replace(this.regExes.trimParens, '$1');
                    components.push(this.parse.linestring.apply(this, [line]).geometry);
                }
                return new _SuperMap2["default"].Feature.Vector(new Supermap.MultiLineString(components));
            },

            /*
             * @description  Return a polygon feature given a polygon WKT fragment.
             * @param {String} A WKT fragment representing the polygon
             * @returns  {SuperMap.Feature.Vector} A polygon feature
             * @private
             */
            'polygon': function polygon(str) {
                var ring, linestring, linearring;
                var rings = _SuperMap2["default"].String.trim(str).split(this.regExes.parenComma);
                var components = [];
                for (var i = 0, len = rings.length; i < len; ++i) {
                    ring = rings[i].replace(this.regExes.trimParens, '$1');
                    linestring = this.parse.linestring.apply(this, [ring]).geometry;
                    linearring = new Supermap.LinearRing(linestring.components);
                    components.push(linearring);
                }
                return new _SuperMap2["default"].Feature.Vector(new Supermap.Polygon(components));
            },

            /*
             * @private
             * @description  Return a multipolygon feature given a multipolygon WKT fragment.
             * @param {String} A WKT fragment representing the multipolygon
             * @returns  {SuperMap.Feature.Vector} A multipolygon feature
             *
             */
            'multipolygon': function multipolygon(str) {
                var polygon;
                var polygons = _SuperMap2["default"].String.trim(str).split(this.regExes.doubleParenComma);
                var components = [];
                for (var i = 0, len = polygons.length; i < len; ++i) {
                    polygon = polygons[i].replace(this.regExes.trimParens, '$1');
                    components.push(this.parse.polygon.apply(this, [polygon]).geometry);
                }
                return new _SuperMap2["default"].Feature.Vector(new Supermap.MultiPolygon(components));
            },

            /*
             * @description  Return an array of features given a geometrycollection WKT fragment.
             * @param {String} A WKT fragment representing the geometrycollection
             * @returns  {Array} An array of SuperMap.Feature.Vector
             * @private
             */
            'geometrycollection': function geometrycollection(str) {
                // separate components of the collection with |
                str = str.replace(/,\s*([A-Za-z])/g, '|$1');
                var wktArray = _SuperMap2["default"].String.trim(str).split('|');
                var components = [];
                for (var i = 0, len = wktArray.length; i < len; ++i) {
                    components.push(WKT.read(wktArray[i]));
                }
                return components;
            }

        };
        _this.CLASS_NAME = "SuperMap.Format.WKT";

        _this.regExes = {
            'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
            'spaces': /\s+/,
            'parenComma': /\)\s*,\s*\(/,
            'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/, // can't use {2} here
            'trimParens': /^\s*\(?(.*?)\)?\s*$/
        };
        return _this;
    }

    /**
     * @function SuperMap.Format.WKT.prototype.read
     * @description Deserialize a WKT string and return a vector feature or an
     * array of vector features.  Supports WKT for POINT, MULTIPOINT,
     * LINESTRING, MULTILINESTRING, POLYGON, MULTIPOLYGON, and
     * GEOMETRYCOLLECTION.
     * @param wkt - {string} A WKT string
     * @returns {SuperMap.Feature.Vector|Array} A feature or array of features for
     * GEOMETRYCOLLECTION WKT.
     */


    _createClass(WKT, [{
        key: 'read',
        value: function read(wkt) {
            var features, type, str;
            wkt = wkt.replace(/[\n\r]/g, " ");
            var matches = this.regExes.typeStr.exec(wkt);
            if (matches) {
                type = matches[1].toLowerCase();
                str = matches[2];
                if (this.parse[type]) {
                    features = this.parse[type].apply(this, [str]);
                }
            }
            return features;
        }

        /**
         * @function SuperMap.Format.WKT.prototype.write
         * @description Serialize a feature or array of features into a WKT string.
         * @param features - {SuperMap.Feature.Vector|Array} A feature or array of features
         * @returns {string} The WKT string representation of the input geometries
         */

    }, {
        key: 'write',
        value: function write(features) {
            var collection, geometry, type, data, isCollection;
            if (features.constructor === Array) {
                collection = features;
                isCollection = true;
            } else {
                collection = [features];
                isCollection = false;
            }
            var pieces = [];
            if (isCollection) {
                pieces.push('GEOMETRYCOLLECTION(');
            }
            for (var i = 0, len = collection.length; i < len; ++i) {
                if (isCollection && i > 0) {
                    pieces.push(',');
                }
                geometry = collection[i].geometry;
                pieces.push(this.extractGeometry(geometry));
            }
            if (isCollection) {
                pieces.push(')');
            }
            return pieces.join('');
        }

        /**
         * @function SuperMap.Format.WKT.prototype.extractGeometry
         * @description Entry point to construct the WKT for a single Geometry object.
         * @param geometry - {SuperMap.Geometry}
         * @returns {string} A WKT string of representing the geometry
         */

    }, {
        key: 'extractGeometry',
        value: function extractGeometry(geometry) {
            var type = geometry.CLASS_NAME.split('.')[2].toLowerCase();
            if (!this.extract[type]) {
                return null;
            }
            var wktType = type === 'collection' ? 'GEOMETRYCOLLECTION' : type.toUpperCase();
            var data = wktType + '(' + this.extract[type].apply(this, [geometry]) + ')';
            return data;
        }

        /**
         * @private
         * @description Object with properties corresponding to the geometry types.
         * Property values are functions that do the actual data extraction.
         */


        /*
         * @private
         * @description Object with properties corresponding to the geometry types.
         * Property values are functions that do the actual parsing.
         */

    }]);

    return WKT;
}(_Format3["default"]);

exports["default"] = WKT;

_SuperMap2["default"].Format.WKT = WKT;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _Point2 = __webpack_require__(3);

var _Point3 = _interopRequireDefault(_Point2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.PointWithMeasure
 * @classdesc 路由点类。路由点是指具有线性度量值(Measure)的二维地理坐标点。
 * @param options - {Object} 可选参数。如:</br>
 *        measure - {number}度量值，即路由对象属性值 M。</br>
 *        x - {number}获取当前点对象在地理坐标系下的 X 坐标值。</br>
 *        y - {number}获取当前点对象在地理坐标系下的 Y 坐标值。</br>
 * @extends SuperMap.Geometry.Point
 */
var PointWithMeasure = function (_Point) {
    _inherits(PointWithMeasure, _Point);

    function PointWithMeasure(options) {
        _classCallCheck(this, PointWithMeasure);

        var _this = _possibleConstructorReturn(this, (PointWithMeasure.__proto__ || Object.getPrototypeOf(PointWithMeasure)).call(this, options));

        _this.measure = null;
        _this.CLASS_NAME = "SuperMap.PointWithMeasure";

        if (options) {
            _SuperMap2["default"].Util.extend(_this, options);
        }
        return _this;
    }

    /**
     * @function SuperMap.PointWithMeasure.prototype.equals
     * @description 判断两个路由点对象是否相等。如果两个路由点对象具有相同的坐标以及度量值，则认为是相等的。
     * @param geom - {SuperMap.PointWithMeasure} 需要判断的路由点对象。
     * @return {boolean} 两个路由点对象是否相等（true为相等，false为不等）。
     */


    /**
     * @member SuperMap.PointWithMeasure.prototype.measure -{number}
     * @description 度量值，即路由对象属性值 M。
     */


    _createClass(PointWithMeasure, [{
        key: 'equals',
        value: function equals(geom) {
            var equals = false;
            if (geom != null) {
                var isValueEquals = this.x === geom.x && this.y === geom.y && this.measure === geom.measure;
                var isNaNValue = isNaN(this.x) && isNaN(this.y) && isNaN(this.measure);
                var isNaNGeometry = isNaN(geom.x) && isNaN(geom.y) && isNaN(geom.measure);
                equals = isValueEquals || isNaNValue && isNaNGeometry;
            }
            return equals;
        }

        /**
         * @function SuperMap.PointWithMeasure.prototype.toJson
         * @description 转换为json对象。
         toJson() {
            var result = "{";
            if (this.measure != null && this.measure != undefined) {
                result += "\"measure\":" + this.measure + "";
            }
            result += "\"x\":" + this.x + "";
            result += "\"y\":" + this.y;
            result += "}";
            return result;
        }
             /**
         * @function SuperMap.PointWithMeasure.prototype.destroy
         * @description 释放资源，将引用资源的属性置空。
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            var me = this;
            me.measure = null;
            me.x = null;
            me.y = null;
        }

        /**
         * @function SuperMap.PointWithMeasure.fromJson
         * @description 将 JSON 对象转换为{@link SuperMap.PointWithMeasure} 对象。
         * @param jsonObject - {Object} JSON 对象表示的路由点。
         * @return {SuperMap.PointWithMeasure} 转化后的 PointWithMeasure 对象。
         */

    }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
            if (!jsonObject) {
                return;
            }
            return new _SuperMap2["default"].PointWithMeasure({
                x: jsonObject.x,
                y: jsonObject.y,
                measure: jsonObject.measure
            });
        }
    }]);

    return PointWithMeasure;
}(_Point3["default"]);

exports["default"] = PointWithMeasure;


_SuperMap2["default"].PointWithMeasure = PointWithMeasure;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _PointWithMeasure = __webpack_require__(62);

var _PointWithMeasure2 = _interopRequireDefault(_PointWithMeasure);

var _Collection2 = __webpack_require__(4);

var _Collection3 = _interopRequireDefault(_Collection2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Route
 * @classdesc
 * 路由对象类。路由对象为一系列有序的带有属性值 M 的 x，y 坐标对，其中 M 值为该结点的距离属性（到已知点的距离）。
 * @param points - {{Array<SuperMap.Geometry>}} 形成路由对象的线数组。
 * @param  options - {Object} 可选参数。如:</br>
 *         id - {number}路由对象在数据库中的id。</br>
 *         length - {number}路由对象的长度。</br>
 *         maxM - {number}最大线性度量值，即所有结点到起始点的量算距离中最大值。</br>
 *         minM - {number}最小线性度量值，即所有结点到起始点的量算距离中最小值。</br>
 *         type - {string} 数据类型，如："LINEM"</br>
 * @extends SuperMap.Geometry.Collection
 */
var Route = function (_Collection) {
    _inherits(Route, _Collection);

    /**
     * @member SuperMap.Route.prototype.type -{string}
     * @description 服务端几何对象类型。
     */


    /**
     * @member SuperMap.Route.prototype.parts -{Array<number>}
     * @description 服务端几何对象中各个子对象所包含的节点个数。
     */


    /**
     *  @member SuperMap.Route.prototype.maxM -{number}
     *  @description 最大线性度量值，即所有结点到起始点的量算距离中最大值。
     */


    /**
     * @member SuperMap.Route.prototype.style -{string}
     * @description 路由对象的样式
     */


    /**
     * @member SuperMap.Route.prototype.id -{number}
     * @description 路由对象在数据库中的id。
     */
    function Route(points, options) {
        _classCallCheck(this, Route);

        var _this = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, points, options));

        _this.id = null;
        _this.center = null;
        _this.style = null;
        _this.length = null;
        _this.maxM = null;
        _this.minM = null;
        _this.parts = null;
        _this.points = null;
        _this.type = null;
        _this.componentTypes = ["SuperMap.Geometry.LinearRing", "SuperMap.Geometry.LineString"];
        _this.CLASS_NAME = "SuperMap.Route";

        if (options) {
            _SuperMap2["default"].Util.extend(_this, options);
        }
        return _this;
    }

    /**
     *
     * @function SuperMap.Route.prototype.toJson
     * @description 转换为json对象。
     * @return{Object} json对象
     */


    /**
     * @member SuperMap.Route.prototype.componentTypes -{Array<string>}
     * @description components存储的的几何对象所支持的几何类型数组,为空表示类型不受限制。
     * @default ["{@link SuperMap.Geometry.LinearRing}", "{@link SuperMap.Geometry.LineString}"];
     */


    /**
     * @member SuperMap.Route.prototype.points -{Array<Object>}
     * @description 路由对象的所有路由点。
     * @example
     * (start code)
     * [
     *  {
     *      "measure": 0,
     *      "y": -4377.027184298267,
     *      "x": 4020.0045221720466
     *  },
     *  {
     *      "measure": 37.33288381391519,
     *      "y": -4381.569363260499,
     *      "x": 4057.0600591960642
     *  }
     * ]
     * (end)
     */


    /**
     * @member SuperMap.Route.prototype.minM -{number}
     * @description 最小线性度量值，即所有结点到起始点的量算距离中最小值。
     */


    /**
     * @member SuperMap.Route.prototype.length -{number}
     * @description 路由对象的长度。单位与数据集的单位相同。
     */


    /**
     * @member SuperMap.Route.prototype.center -{number}
     * @description 路由对象的中心点
     */


    _createClass(Route, [{
        key: 'toJson',
        value: function toJson() {
            var result = "{";
            if (this.id != null && this.id != undefined) {
                result += "\"id\":" + this.id + ",";
            }
            if (this.center != null && this.center != undefined) {
                result += "\"center\":" + this.center + ",";
            }
            if (this.style != null && this.style != undefined) {
                result += "\"style\":" + this.style + ",";
            }
            if (this.length != null && this.length != undefined) {
                result += "\"length\":" + this.length + ",";
            }
            if (this.maxM != null && this.maxM != undefined) {
                result += "\"maxM\":" + this.maxM + ",";
            }
            if (this.minM != null && this.minM != undefined) {
                result += "\"minM\":" + this.minM + ",";
            }
            if (this.type != null && this.type != undefined) {
                result += "\"type\":\"" + this.type + "\",";
            }
            if (this.parts != null && this.parts != undefined) {
                result += "\"parts\":[" + this.parts[0];

                for (var i = 1; i < this.parts.length; i++) {
                    result += "," + this.parts[i];
                }
                result += "],";
            }
            if (this.components != null && this.components.length > 0) {
                result += "\"points\":[";
                for (var j = 0, len = this.components.length; j < len; j++) {
                    for (var k = 0, len2 = this.components[j].components.length; k < len2; k++) {
                        result += this.components[j].components[k].toJson() + ",";
                    }
                }
                result = result.replace(/,$/g, '');
                result += "]";
            }
            result = result.replace(/,$/g, '');
            result += "}";
            return result;
        }

        /**
         * @function SuperMap.Route.prototype.destroy
         * @override
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            var me = this;
            me.id = null;
            me.center = null;
            me.style = null;
            me.length = null;
            me.maxM = null;
            me.minM = null;
            me.type = null;
            me.parts = null;
            me.components.length = 0;
            me.components = null;
            me.componentTypes = null;
        }

        /**
         * @function SuperMap.Route.fromJson
         * @description  将 JSON 对象转换为 SuperMap.Route 对象。
         * @param jsonObject - {Object} JSON 对象表示的路由对象。
         * @return{SuperMap.Route} 转化后的 Route 对象。
         */

    }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
            if (!jsonObject) {
                return;
            }

            var geoParts = jsonObject.parts || [],
                geoPoints = jsonObject.points || [],
                len = geoParts.length,
                lineList = [];
            if (len > 0) {
                for (var i = 0, pointIndex = 0, pointList = []; i < len; i++) {
                    for (var j = 0; j < geoParts[i]; j++) {
                        pointList.push(_PointWithMeasure2["default"].fromJson(geoPoints[pointIndex + j]));
                    }
                    pointIndex += geoParts[i];
                    //判断线是否闭合，如果闭合，则返回LinearRing，否则返回LineString
                    if (pointList[0].equals(pointList[geoParts[i] - 1])) {
                        lineList.push(new _SuperMap2["default"].Geometry.LinearRing(pointList));
                    } else {
                        lineList.push(new _SuperMap2["default"].Geometry.LineString(pointList));
                    }
                    pointList = [];
                }
            } else {
                return null;
            }

            return new Route(lineList, {
                id: jsonObject.id,
                center: jsonObject.center,
                style: jsonObject.style,
                length: jsonObject.length,
                maxM: jsonObject.maxM,
                minM: jsonObject.minM,
                type: jsonObject.type,
                parts: jsonObject.parts
            });
        }
    }]);

    return Route;
}(_Collection3["default"]);

exports["default"] = Route;


_SuperMap2["default"].Route = Route;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.ServerColor
 * @classdesc 颜色类。该类使用三原色（ RGB ）来表达颜色。
 * @param options - {Object} 可选参数。如：<br>
 *        red - {number}获取或设置红色值,默认值为255。<br>
 *        green - {number}获取或设置绿色值,默认值为0。<br>
 *        blue - {number}获取或设置蓝色值,默认值为0。
 */
var ServerColor = function () {

    /**
     * @member SuperMap.ServerColor.prototype.green -{number}
     * @description 获取或设置绿色值,默认值为0。
     * @default 0
     */
    function ServerColor(red, green, blue) {
        _classCallCheck(this, ServerColor);

        this.red = 255;
        this.green = 0;
        this.blue = 0;
        this.CLASS_NAME = "SuperMap.ServerColor";

        if (!red && red != 0) {
            this.red = 255;
        } else {
            this.red = red;
        }

        if (!green && green != 0) {
            this.green = 0;
        } else {
            this.green = green;
        }

        if (!blue && blue != 0) {
            this.blue = 0;
        } else {
            this.blue = blue;
        }
    }

    /**
     * @function SuperMap.ServerColor.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */


    /**
     * @member SuperMap.ServerColor.prototype.blue -{number}
     * @description 获取或设置蓝色值,默认值为0。
     * @default 0
     */


    /**
     * @member SuperMap.ServerColor.prototype.red -{number}
     * @description 获取或设置红色值,默认值为255。
     * @default 255
     */


    _createClass(ServerColor, [{
        key: "destroy",
        value: function destroy() {
            var me = this;
            me.red = null;
            me.green = null;
            me.blue = null;
        }

        /**
         * @function SuperMap.ServerColor.formJson
         * @description 将JSON对象转化为ServerColor对象。
         * @param jsonObject - {Object} 要转换的JSON对象
         * @return{SuperMap.ServerColor} 转化后的ServerColor对象。
         */

    }], [{
        key: "fromJson",
        value: function fromJson(jsonObject) {
            if (!jsonObject) {
                return;
            }
            var color = new ServerColor();
            var red = 255;
            if (jsonObject.red !== null) {
                red = Number(jsonObject.red);
            }
            color.red = red;

            var green = 0;
            if (jsonObject.green !== null) {
                green = Number(jsonObject.green);
            }
            color.green = green;

            var blue = 0;
            if (jsonObject.blue !== null) {
                blue = Number(jsonObject.blue);
            }
            color.blue = blue;
            return color;
        }
    }]);

    return ServerColor;
}();

exports["default"] = ServerColor;


_SuperMap2["default"].ServerColor = ServerColor;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _ServerColor = __webpack_require__(64);

var _ServerColor2 = _interopRequireDefault(_ServerColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.ServerStyle
 * @classdesc 服务端矢量要素风格类。
 * @description 该类用于定义点状符号、线状符号、填充符号风格及其相关属性。
 * @param options - {Object} 可选参数。如：<br>
 *        fillBackColor - {{@link SuperMap.ServerColor}} 填充背景颜色。<br>
 *        fillBackOpaque - {boolean} 背景是否不透明。<br>
 *        fillForeColor - {{@link SuperMap.ServerColor}} 填充颜色。<br>
 *        fillGradientMode - {{@link SuperMap.FillGradientMode}} 渐变填充风格的渐变类型。<br>
 *        fillGradientAngle - {number}渐变填充的旋转角度。<br>
 *        fillGradientOffsetRatioX - {number}渐变填充中心点相对于填充区域范围中心点的水平偏移百分比。<br>
 *        fillGradientOffsetRatioY - {number}填充中心点相对于填充区域范围中心点的垂直偏移百分比。<br>
 *        fillOpaqueRate - {number}填充不透明度。<br>
 *        fillSymbolID - {integer} 填充符号的编码。<br>
 *        lineColor - {{@link SuperMap.ServerColor}} 矢量要素的边线颜色。<br>
 *        lineSymbolID - {integer} 线状符号的编码。<br>
 *        lineWidth - {number}边线的宽度。<br>
 *        markerAngle - {number}点状符号的旋转角度。<br>
 *        markerSize - {number}点状符号的大小。<br>
 *        markerSymbolID - {integer} 点状符号的编码。
 */
var ServerStyle = function () {

    /**
     * @member SuperMap.ServerStyle.prototype.markerSize -{number}
     * @description 点状符号的大小。单位为毫米，精度为0.1，默认值为1.0。当该属性设置为0时，采用符号默认大小1.0显示。
     *              当该属性设置为非法值时，交由服务器默认处理。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.lineWidth -{number}
     * @description 边线的宽度。单位为毫米，精度到0.1，默认值为1.0。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.lineColor -{SuperMap.ServerColor}
     * @description 矢量要素的边线颜色。默认为黑色。如果等级符号是点符号，点符号的颜色由lineColor控制
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillOpaqueRate -{number}
     * @description 填充不透明度。合法值为0--100的数值。其中为0表示完全透明；
     *              100表示完全不透明。赋值小于0时按照0处理，大于100时按照100处理。默认值为 100。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillGradientOffsetRatioX -{number}
     * @description 渐变填充中心点相对于填充区域范围中心点的水平偏移百分比。它们的关系如下：设填充区域范围中心点的坐标为（x0, y0），
     *              填充中心点的坐标为（x, y），填充区域范围的宽度为 a，水平偏移百分比为 dx，则 x=x0 + a*dx/100。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillGradientMode -{SuperMap.FillGradientMode}
     * @description 渐变填充风格的渐变类型。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillBackOpaque -{boolean}
     * @description 背景是否不透明。false 表示透明。默认值为 false。
     */
    function ServerStyle(options) {
        _classCallCheck(this, ServerStyle);

        this.fillBackColor = null;
        this.fillBackOpaque = false;
        this.fillForeColor = null;
        this.fillGradientMode = null;
        this.fillGradientAngle = 0;
        this.fillGradientOffsetRatioX = 0;
        this.fillGradientOffsetRatioY = 0;
        this.fillOpaqueRate = 100;
        this.fillSymbolID = 0;
        this.lineColor = null;
        this.lineSymbolID = 0;
        this.lineWidth = 1;
        this.markerAngle = 0;
        this.markerSize = 1;
        this.markerSymbolID = -1;
        this.CLASS_NAME = "SuperMap.ServerStyle";

        var me = this;
        me.fillBackColor = new _ServerColor2["default"](255, 255, 255);
        me.fillForeColor = new _ServerColor2["default"](255, 0, 0);
        me.lineColor = new _ServerColor2["default"](0, 0, 0);
        if (options) {
            _SuperMap2["default"].Util.extend(this, options);
        }
    }

    /**
     * @function SuperMap.ServerStyle.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.markerSymbolID -{integer}
     * @description 点状符号的编码。此编码用于唯一标识各点状符号。默认为 -1。
     *              关于线状符号的样式与对应的 ID 号请在 SuperMap 桌面软件中查找。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.markerAngle -{number}
     * @description 点状符号的旋转角度。以度为单位，精确到0.1度，逆时针方向为正方向，默认值为0。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.lineSymbolID -{integer}
     * @description 线状符号的编码。此编码用于唯一标识各普通填充风格的填充符号，默认值为0。
     *              关于线状符号的样式与对应的 ID 号请在 SuperMap 桌面软件中查找。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillSymbolID -{integer}
     * @description 填充符号的编码。此编码用于唯一标识各普通填充风格的填充符号。
     *              关于填充符号的样式与对应的 ID 号请在 SuperMap 桌面软件中查找。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillGradientOffsetRatioY -{number}
     * @description 填充中心点相对于填充区域范围中心点的垂直偏移百分比。它们的关系如下：<br>
     *           设填充区域范围中心点的坐标为（x0, y0），填充中心点的坐标为（x, y），填充区域范围的高度为 b，垂直偏移百分比为 dy，则 y=y0 + b*dx/100。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillGradientAngle -{number}
     * @description 渐变填充的旋转角度。单位为度，精确到0.1度，逆时针方向为正方向。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillForeColor -{SuperMap.ServerColor}
     * @description 填充颜色。当填充模式为渐变填充时，该颜色为填充起始颜色。默认为红色。
     */


    /**
     * @member SuperMap.ServerStyle.prototype.fillBackColor -{SuperMap.ServerColor}
     * @description 填充背景颜色。当填充模式为渐变填充时，该颜色为填充终止色。默认为白色。
     */


    _createClass(ServerStyle, [{
        key: 'destroy',
        value: function destroy() {
            var me = this;
            if (me.fillBackColor) {
                me.fillBackColor.destroy();
                me.fillBackColor = null;
            }
            me.fillBackOpaque = null;

            if (me.fillForeColor) {
                me.fillForeColor.destroy();
                me.fillForeColor = null;
            }
            me.fillGradientMode = null;
            me.fillGradientAngle = null;
            me.fillGradientOffsetRatioX = null;
            me.fillGradientOffsetRatioY = null;
            me.fillOpaqueRate = null;
            me.fillSymbolID = null;
            if (me.lineColor) {
                me.lineColor.destroy();
                me.lineColor = null;
            }
            me.lineSymbolID = null;
            me.lineWidth = null;
            me.markerAngle = null;
            me.markerSize = null;
            me.markerSymbolID = null;
        }

        /**
         * @function SuperMap.ServerStyle.prototype.toServerJSONObject
         * @description 转换成对应的 JSON 格式对象。
         * @return{Object } 对应的 JSON 格式对象
         */

    }, {
        key: 'toServerJSONObject',
        value: function toServerJSONObject() {
            var styleObj = {};
            styleObj = _SuperMap2["default"].Util.copyAttributes(styleObj, this);
            //暂时先忽略serverColor往Json的转换
            return styleObj;
        }

        /**
         * @function SuperMap.ServerStyle.fromJson
         * @description 将JSON对象转换为 SuperMap.ServerStyle 对象。
         * @param jsonObject - {Object} 要转换的 JSON 对象。
         * @return{SuperMap.ServerStyle} 转化后的 SuperMap.ServerStyle 对象。
         */

    }], [{
        key: 'fromJson',
        value: function fromJson(jsonObject) {
            if (!jsonObject) {
                return;
            }
            return new _SuperMap2["default"].ServerStyle({
                fillBackColor: _ServerColor2["default"].fromJson(jsonObject.fillBackColor),
                fillBackOpaque: jsonObject.fillBackOpaque,
                fillForeColor: _ServerColor2["default"].fromJson(jsonObject.fillForeColor),
                fillGradientMode: jsonObject.fillGradientMode,
                fillGradientAngle: jsonObject.fillGradientAngle,
                fillGradientOffsetRatioX: jsonObject.fillGradientOffsetRatioX,
                fillGradientOffsetRatioY: jsonObject.fillGradientOffsetRatioY,
                fillOpaqueRate: jsonObject.fillOpaqueRate,
                fillSymbolID: jsonObject.fillSymbolID,
                lineColor: _ServerColor2["default"].fromJson(jsonObject.lineColor),
                lineSymbolID: jsonObject.lineSymbolID,
                lineWidth: jsonObject.lineWidth,
                markerAngle: jsonObject.markerAngle,
                markerSize: jsonObject.markerSize,
                markerSymbolID: jsonObject.markerSymbolID
            });
        }
    }]);

    return ServerStyle;
}();

exports["default"] = ServerStyle;


_SuperMap2["default"].ServerStyle = ServerStyle;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _REST = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.KeyServiceParameter
 * @classdesc key申请参数
 * @param options - {Object} 参数。如：<br>
 *        name - {string} 申请服务名称。<br>
 *        serviceIds - {number}服务ID。<br>
 *        clientType - {{@link SuperMap.ClientType}} 服务端类型。<br>
 *        limitation - {number}有效期
 */
var KeyServiceParameter = function () {
    function KeyServiceParameter(options) {
        _classCallCheck(this, KeyServiceParameter);

        this.name = null;
        this.serviceIds = null;
        this.clientType = _REST.ClientType.SERVER;
        this.limitation = null;
        this.CLASS_NAME = "SuperMap.KeyServiceParameter";

        _SuperMap2["default"].Util.extend(this, options);
    }

    /**
     * @function SuperMap.KeyServiceParameter.prototype.toJSON
     * @description 转换成JSON对象
     * @return {Object} 参数的JSON对象
     */


    _createClass(KeyServiceParameter, [{
        key: 'toJSON',
        value: function toJSON() {
            return {
                name: this.name,
                serviceIds: this.serviceIds,
                clientType: this.clientType,
                limitation: this.limitation
            };
        }
    }]);

    return KeyServiceParameter;
}();

exports["default"] = KeyServiceParameter;


_SuperMap2["default"].KeyServiceParameter = KeyServiceParameter;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _ServerInfo = __webpack_require__(68);

var _ServerInfo2 = _interopRequireDefault(_ServerInfo);

var _TokenServiceParameter = __webpack_require__(69);

var _TokenServiceParameter2 = _interopRequireDefault(_TokenServiceParameter);

var _KeyServiceParameter = __webpack_require__(66);

var _KeyServiceParameter2 = _interopRequireDefault(_KeyServiceParameter);

var _FetchRequest = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @name SecurityManager
 * @memberOf SuperMap
 * @namespace
 * @description 安全管理中心，提供iServer,iPortal,Online统一权限认证管理
 *  > 使用说明：
 *  > 创建任何一个服务之前调用{@link SuperMap.SecurityManager.registerToken}或
 *  > {@link SuperMap.SecurityManager.registerKey}注册凭据。
 *  > 发送请求时根据url或者服务id获取相应的key或者token并自动添加到服务地址中
 */
_SuperMap2["default"].SecurityManager = {

    INNER_WINDOW_WIDTH: 600,
    INNER_WINDOW_HEIGHT: 600,
    /**
     * @description 从服务器获取一个token,在此之前要注册服务器信息
     * @param url {string}-服务器域名+端口，如：http://localhost:8092
     * @param tokenParam -{SuperMap.TokenServiceParameter} token申请参数
     * @return {Promise}
     */
    generateToken: function generateToken(url, tokenParam) {
        var serverInfo = this.servers[url];
        if (!serverInfo) {
            return;
        }
        return _FetchRequest.FetchRequest.post(serverInfo.tokenServiceUrl, JSON.stringify(tokenParam.toJSON())).then(function (response) {
            return response.text();
        });
    },

    /**
     * @description 注册安全服务器相关信息
     * @param serverInfos -{SuperMap.ServerInfo} 服务器信息
     */
    registerServers: function registerServers(serverInfos) {
        this.servers = this.servers || {};
        if (!_SuperMap2["default"].Util.isArray(serverInfos)) {
            serverInfos = [serverInfos];
        }
        for (var i = 0; i < serverInfos.length; i++) {
            var serverInfo = serverInfos[i];
            this.servers[serverInfo.server] = serverInfo;
        }
    },

    /**
     * @description 服务请求都会自动带上这个token
     * @param url {string} -服务器域名+端口：如http://localhost:8090
     * @param token -{string} token
     */
    registerToken: function registerToken(url, token) {
        this.tokens = this.tokens || {};
        if (!url || !token) {
            return;
        }
        var domain = this._getTokenStorageKey(url);
        this.tokens[domain] = token;
    },

    /**
     * @description 注册key,ids为数组(存在一个key对应多个服务)
     * @param ids -{Array} 可以是服务id数组或者url地址数组或者webAPI类型数组
     * @param key -{string} key
     */
    registerKey: function registerKey(ids, key) {
        this.keys = this.keys || {};
        if (!ids || ids.length < 1 || !key) {
            return;
        }

        ids = _SuperMap2["default"].Util.isArray(ids) ? ids : [ids];
        for (var i = 0; i < ids.length; i++) {
            var id = this._getUrlRestString(ids[0]) || ids[0];
            this.keys[id] = key;
        }
    },

    /**
     * @description 获取服务器信息
     * @param url {string}-服务器域名+端口，如：http://localhost:8092
     * @returns {SuperMap.ServerInfo} 服务器信息
     */
    getServerInfo: function getServerInfo(url) {
        this.servers = this.servers || {};
        return this.servers[url];
    },

    /**
     * @description 根据Url获取token
     * @param url -{string} 服务器域名+端口，如：http://localhost:8092
     * @returns {string} token
     */
    getToken: function getToken(url) {
        if (!url) {
            return;
        }
        this.tokens = this.tokens || {};
        var domain = this._getTokenStorageKey(url);
        return this.tokens[domain];
    },

    /**
     * @description 根据Url获取key
     * @param id -{string} id
     * @returns {string} key
     */
    getKey: function getKey(id) {
        this.keys = this.keys || {};
        var key = this._getUrlRestString(id) || id;
        return this.keys[key];
    },

    /**
     * @description Online登录验证
     * @param callbackLocation -{string} 跳转位置
     * @param newTab -{boolean}是否新窗口打开
     */
    loginOnline: function loginOnline(callbackLocation, newTab) {
        var loginUrl = _SuperMap2["default"].SecurityManager.SSO + "/login?service=" + callbackLocation;
        this._open(loginUrl, newTab);
    },

    /**
     * @description iPortal登录验证
     * @param url -{string} iportal首页地址
     * @param username -{string} 用户名
     * @param password -{string} 密码
     * @returns {Promise}
     */
    loginiPortal: function loginiPortal(url, username, password) {
        var end = url.substr(url.length - 1, 1);
        url += end === "/" ? "web/login.json" : "/web/login.json";
        var loginInfo = {
            username: username && username.toString(),
            password: password && password.toString()
        };
        loginInfo = JSON.stringify(loginInfo);
        var requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            withCredentials: true
        };
        return _FetchRequest.FetchRequest.post(url, loginInfo, requestOptions).then(function (response) {
            return response.json();
        });
    },

    /**
     * @description iPortal登录验证
     * @param url -{string} iportal首页地址
     * @returns {Promise}
     */
    logoutiPortal: function logoutiPortal(url) {
        var end = url.substr(url.length - 1, 1);
        url += end === "/" ? "services/security/logout" : "/services/security/logout";

        var requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            withCredentials: true,
            withoutFormatSuffix: true
        };
        return _FetchRequest.FetchRequest.get(url, "", requestOptions).then(function () {
            return true;
        })["catch"](function () {
            return false;
        });
    },

    /**
     * @description iManager登录验证
     * @param url -{string} iManager地址。<br>
     *                      地址参数为iManager首页地址，如： http://localhost:8390/imanager<br>
     * @param loginInfoParams -{Object} iManager 登录参数<br>
     *        userName -{string} 用户名<br>
     *        password-{string} 密码
     * @param options -{Object} <br>
     *        isNewTab -{boolean} 不同域时是否在新窗口打开登录页面
     * @return {Promise}
     */
    loginManager: function loginManager(url, loginInfoParams, options) {
        if (!_SuperMap2["default"].Util.isInTheSameDomain(url)) {
            var isNewTab = options ? options.isNewTab : true;
            this._open(url, isNewTab);
            return;
        }
        var end = url.substr(url.length - 1, 1);
        var requestUrl = end === "/" ? url + "icloud/security/tokens.json" : url + "/icloud/security/tokens.json";
        var params = loginInfoParams || {};
        var loginInfo = {
            username: params.userName && params.userName.toString(),
            password: params.password && params.password.toString()
        };
        loginInfo = JSON.stringify(loginInfo);
        var requestOptions = {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        };
        var me = this;
        return _FetchRequest.FetchRequest.post(requestUrl, loginInfo, requestOptions).then(function (response) {
            response.text().then(function (result) {
                me.imanagerToken = result;
                return result;
            });
        });
    },

    /**
     * @description 清空全部验证信息
     */
    destroyAllCredentials: function destroyAllCredentials() {
        this.keys = null;
        this.tokens = null;
        this.servers = null;
    },
    /**
     * @description 清空令牌信息
     */
    destroyToken: function destroyToken(url) {
        if (!url) {
            return;
        }
        var domain = this._getTokenStorageKey(url);
        this.tokens = this.tokens || {};
        if (this.tokens[domain]) {
            delete this.tokens[domain];
        }
    },
    /**
     * @description 清空服务授权码
     */
    destroyKey: function destroyKey(id) {
        if (!id) {
            return;
        }
        this.keys = this.keys || {};
        var key = this._getUrlRestString(id) || id;
        if (this.keys[key]) {
            delete this.keys[key];
        }
    },

    _open: function _open(url, newTab) {
        newTab = newTab != null ? newTab : true;
        var offsetX = window.screen.availWidth / 2 - this.INNER_WINDOW_WIDTH / 2;
        var offsetY = window.screen.availHeight / 2 - this.INNER_WINDOW_HEIGHT / 2;
        var options = "height=" + this.INNER_WINDOW_HEIGHT + ", width=" + this.INNER_WINDOW_WIDTH + ",top=" + offsetY + ", left=" + offsetX + ",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no";
        if (newTab) {
            window.open(url, 'login');
        } else {
            window.open(url, 'login', options);
        }
    },

    _getTokenStorageKey: function _getTokenStorageKey(url) {
        var patten = /(.*?):\/\/([^\/]+)/i;
        var result = url.match(patten);
        if (!result) {
            return url;
        }
        return result[0];
    },

    _getUrlRestString: function _getUrlRestString(url) {
        if (!url) {
            return url;
        }
        var patten = /http:\/\/(.*\/rest)/i;
        var result = url.match(patten);
        if (!result) {
            return url;
        }
        return result[0];
    }

};
_SuperMap2["default"].SecurityManager.SSO = "https://sso.supermap.com";
_SuperMap2["default"].SecurityManager.ONLINE = "http://www.supermapol.com";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _REST = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.ServerInfo
 * @classdesc 服务器信息(安全相关)，包含服务器类型，服务地址，token服务地址等
 * @param type - {string} 服务器类型
 * @param options - {Object} 服务器信息相关可选参数。如：<br>
 *        server - {string} 服务器地址,如：http://supermapiserver:8090/iserver<br>
 *        tokenServiceUrl - {string} 非必填，如：http://supermapiserver:8090/iserver/services/security/tokens.json<br>
 *        keyServiceUrl - {string} 非必填，如：http://supermapiserver:8092/web/mycontent/keys/register.json
 */
var ServerInfo =

/**
 * @member SuperMap.ServerInfo.prototype.tokenServiceUrl -{string}
 * @description 非必填，如：http://supermapiserver:8090/iserver/services/security/tokens.json
 */

/**
 * @member SuperMap.ServerInfo.prototype.type -{ServerType}
 * @description 服务器类型
 */
function ServerInfo(type, options) {
    _classCallCheck(this, ServerInfo);

    this.type = null;
    this.server = null;
    this.tokenServiceUrl = null;
    this.keyServiceUrl = null;
    this.CLASS_NAME = "SuperMap.ServerInfo";

    this.type = type || _REST.ServerType.ISERVER;
    _SuperMap2["default"].Util.extend(this, options);
    if (!this.server) {
        console.error('server url require is not  undefined');
    }
    // var patten = /http:\/\/([^\/]+)/i;
    //this.server = this.server.match(patten)[0];

    var tokenServiceSuffix = "/services/security/tokens.json";
    if (this.type === _REST.ServerType.ISERVER && this.server.indexOf("iserver") < 0) {
        tokenServiceSuffix = "/iserver" + tokenServiceSuffix;
    }

    if (!this.tokenServiceUrl) {
        this.tokenServiceUrl = this.server + tokenServiceSuffix;
    }

    if (!this.keyServiceUrl) {
        if (this.type === _REST.ServerType.IPORTAL) {
            this.keyServiceUrl = this.server + "/web/mycontent/keys/register.json";
        } else if (this.type === _REST.ServerType.ONLINE) {
            this.keyServiceUrl = this.server + "/web/mycontent/keys.json";
        }
    }
}

/**
 * @member SuperMap.ServerInfo.prototype.keyServiceUrl -{string}
 * @description 非必填。如：http://supermapiserver:8092/web/mycontent/keys/register.json
 */


/**
 * @member SuperMap.ServerInfo.prototype.server -{string}
 * @description 必填，服务器地址
 */
;

exports["default"] = ServerInfo;


_SuperMap2["default"].ServerInfo = ServerInfo;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

var _REST = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.TokenServiceParameter
 * @classdesc token申请参数
 * @param options - {Object} token申请参数。
 */
var TokenServiceParameter = function () {
    /**
     * @member SuperMap.TokenServiceParameter.prototype.referer -{string}
     * @description clientType=Referer 时，必选。如果按照指定 URL 的方式申请令牌，则传递相应的 URL。
     */


    /**
     * @member SuperMap.TokenServiceParameter.prototype.clientType -{string}
     * @description token申请的客户端标识类型。
     */

    /**
     * @member SuperMap.TokenServiceParameter.prototype.userName -{string}
     * @description 用户名。
     */
    function TokenServiceParameter(options) {
        _classCallCheck(this, TokenServiceParameter);

        this.userName = null;
        this.password = null;
        this.clientType = _REST.ClientType.NONE;
        this.ip = null;
        this.referer = null;
        this.expiration = 60;
        this.CLASS_NAME = "SuperMap.TokenServiceParameter";

        _SuperMap2["default"].Util.extend(this, options);
    }

    /**
     * @function SuperMap.TokenServiceParameter.prototype.toJSON
     * @description 将所有信息转成JSON字符串
     * @return {string} 参数的JSON字符串
     */


    /**
     * @member SuperMap.TokenServiceParameter.prototype.expiration -{number}
     * @description 申请令牌的有效期，从发布令牌的时间开始计算，单位为分钟。
     */


    /**
     * @member SuperMap.TokenServiceParameter.prototype.ip -{string}
     * @description clientType=Referer 时，必选。如果按照指定 URL 的方式申请令牌，则传递相应的 URL。
     */

    /**
     * @member SuperMap.TokenServiceParameter.prototype.password -{string}
     * @description 密码。
     */


    _createClass(TokenServiceParameter, [{
        key: 'toJSON',
        value: function toJSON() {
            return {
                userName: this.userName,
                password: this.password,
                clientType: this.clientType,
                ip: this.ip,
                referer: this.referer,
                expiration: this.expiration
            };
        }
    }]);

    return TokenServiceParameter;
}();

exports["default"] = TokenServiceParameter;


_SuperMap2["default"].TokenServiceParameter = TokenServiceParameter;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FetchRequest = exports.Support = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(71);

var _whatwgFetchImportable = __webpack_require__(52);

var _whatwgFetchImportable2 = _interopRequireDefault(_whatwgFetchImportable);

var _fetchJsonp2 = __webpack_require__(46);

var _fetchJsonp3 = _interopRequireDefault(_fetchJsonp2);

var _SuperMap = __webpack_require__(0);

var _SuperMap2 = _interopRequireDefault(_SuperMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Support = exports.Support = _SuperMap2["default"].Support = _SuperMap2["default"].Support || {
    cors: window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest()
};
var FetchRequest = exports.FetchRequest = _SuperMap2["default"].FetchRequest = {
    commit: function commit(method, url, params, options) {
        method = method ? method.toUpperCase() : method;
        switch (method) {
            case 'GET':
                return this.get(url, params, options);
            case 'POST':
                return this.post(url, params, options);
            case 'PUT':
                return this.put(url, params, options);
            case 'DELETE':
                return this["delete"](url, params, options);
            default:
                return this.get(url, params, options);
        }
    },

    get: function get(url, params, options) {
        options = options || {};
        var type = 'GET';
        url = this._processUrl(url, options);
        url = _SuperMap2["default"].Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url)) {
            if (_SuperMap2["default"].Util.isInTheSameDomain(url) || Support.cors || options.proxy) {
                return this._fetch(url, params, options, type);
            }
            if (!_SuperMap2["default"].Util.isInTheSameDomain(url)) {
                url = url.replace('.json', '.jsonp');
                return this._fetchJsonp(url, options);
            }
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
    },

    "delete": function _delete(url, params, options) {
        options = options || {};
        var type = 'DELETE';
        url = this._processUrl(url, options);
        url = _SuperMap2["default"].Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.urlIsLong(url) && Support.cors) {
            return this._fetch(url, params, options, type);
        }
        return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
    },

    post: function post(url, params, options) {
        options = options || {};
        return this._fetch(this._processUrl(url, options), params, options, 'POST');
    },

    put: function put(url, params, options) {
        options = options || {};
        return this._fetch(this._processUrl(url, options), params, options, 'PUT');
    },
    urlIsLong: function urlIsLong(url) {
        //当前url的字节长度。
        var totalLength = 0,
            charCode = null;
        for (var i = 0, len = url.length; i < len; i++) {
            //转化为Unicode编码
            charCode = url.charCodeAt(i);
            if (charCode < 0x007f) {
                totalLength++;
            } else if (0x0080 <= charCode && charCode <= 0x07ff) {
                totalLength += 2;
            } else if (0x0800 <= charCode && charCode <= 0xffff) {
                totalLength += 3;
            }
        }
        return totalLength < 2000 ? false : true;
    },
    _postSimulatie: function _postSimulatie(type, url, params, options) {
        var separator = url.indexOf("?") > -1 ? "&" : "?";
        url += separator + '_method= ' + type;
        return this.post(url, params, options);
    },

    _processUrl: function _processUrl(url, options) {
        if (this._isMVTRequest(url)) {
            return url;
        }

        if (url.indexOf('.json') === -1 && !options.withoutFormatSuffix) {
            if (url.indexOf("?") < 0) {
                url += '.json';
            } else {
                var urlArrays = url.split("?");
                if (urlArrays.length === 2) {
                    url = urlArrays[0] + ".json?" + urlArrays[1];
                }
            }
        }
        if (options && options.proxy) {
            if (typeof options.proxy === "function") {
                url = options.proxy(url);
            } else {
                url = decodeURIComponent(url);
                url = options.proxy + encodeURIComponent(url);
            }
        }
        return url;
    },

    _fetch: function _fetch(url, params, options, type) {
        options = options || {};
        options.headers = options.headers || {};
        if (!options.headers['Content-Type']) {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        if (options.timeout) {
            return this._timeout(options.timeout, (0, _whatwgFetchImportable2["default"])(url, {
                method: type,
                headers: options.headers,
                body: type === 'PUT' || type === 'POST' ? params : undefined,
                credentials: options.withCredentials ? 'include' : 'omit',
                mode: 'cors'
            }).then(function (response) {
                return response;
            }));
        }
        return (0, _whatwgFetchImportable2["default"])(url, {
            method: type,
            body: type === 'PUT' || type === 'POST' ? params : undefined,
            headers: options.headers,
            credentials: options.withCredentials ? 'include' : 'omit',
            mode: 'cors'
        }).then(function (response) {
            return response;
        })["catch"](function (e) {
            return e;
        });
    },

    _fetchJsonp: function _fetchJsonp(url, options) {
        options = options || {};
        return (0, _fetchJsonp3["default"])(url, { method: 'GET', timeout: options.timeout }).then(function (response) {
            return response;
        });
    },

    _timeout: function _timeout(seconds, promise) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error("timeout"));
            }, seconds);
            promise.then(resolve, reject);
        });
    },

    _getParameterString: function _getParameterString(params) {
        var paramsArray = [];
        for (var key in params) {
            var value = params[key];
            if (value != null && typeof value !== 'function') {
                var encodedValue;
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
                    var encodedItemArray = [];
                    var item;
                    for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                        item = value[itemIndex];
                        encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
                    }
                    encodedValue = '[' + encodedItemArray.join(",") + ']';
                } else {
                    encodedValue = encodeURIComponent(value);
                }
                paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
            }
        }
        return paramsArray.join("&");
    },

    _isMVTRequest: function _isMVTRequest(url) {
        return url.indexOf('.mvt') > -1 || url.indexOf('.pbf') > -1;
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promisePolyfill = __webpack_require__(49);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.Promise = _promisePolyfill2["default"];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TianDiTu_MercatorCRS = exports.TianDiTu_WGS84CRS = exports.BaiduCRS = undefined;

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @constant L.CRS.BaiduCRS
 * @description 百度的坐标对象
 */
var BaiduCRS = exports.BaiduCRS = _leaflet2["default"].CRS.Baidu = _leaflet2["default"].extend({}, _leaflet2["default"].CRS.EPSG3857, {
    code: 'Baidu',
    scale: function scale(zoom) {
        return 6378137 * Math.PI * 2 / Math.pow(2, 18 - zoom);
    },

    transformation: function () {
        var scale = 0.5 / (Math.PI * 6378137);
        return new _leaflet2["default"].Transformation(scale, 0, -scale, 0);
    }()
});

var tdt_WGS84_resolutions = [];

for (var i = 0; i < 20; i++) {
    tdt_WGS84_resolutions.push(0.703125 * 2 / Math.pow(2, i));
}

/**
 * @constant L.CRS.TianDiTu_WGS84CRS
 * @description 天地图WGS84坐标对象
 */
var TianDiTu_WGS84CRS = exports.TianDiTu_WGS84CRS = _leaflet2["default"].CRS.TianDiTu_WGS84 = _leaflet2["default"].Proj.CRS("EPSG:4326", {
    origin: [-180, 90],
    resolutions: tdt_WGS84_resolutions,
    bounds: _leaflet2["default"].bounds([-180, -90], [180, 90])
});

var tdt_Mercator_resolutions = [];
for (var i = 0; i < 20; i++) {
    tdt_Mercator_resolutions.push(78271.5169640203125 * 2 / Math.pow(2, i));
}

/**
 * @constant L.CRS.TianDiTu_MercatorCRS
 * @description 天地图墨卡托坐标对象
 */
var TianDiTu_MercatorCRS = exports.TianDiTu_MercatorCRS = _leaflet2["default"].CRS.TianDiTu_Mercator = _leaflet2["default"].Proj.CRS("EPSG:3857", {
    origin: [-20037508.3427892, 20037508.3427892],
    resolutions: tdt_Mercator_resolutions,
    bounds: _leaflet2["default"].bounds([-20037508.3427892, -20037508.3427892], [20037508.3427892, 20037508.3427892])
});
_leaflet2["default"].CRS.BaiduCRS = BaiduCRS;
_leaflet2["default"].CRS.TianDiTu_WGS84CRS = TianDiTu_WGS84CRS;
_leaflet2["default"].CRS.TianDiTu_MercatorCRS = TianDiTu_MercatorCRS;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nonEarthCRS = exports.NonEarthCRS = exports.nonProjection = exports.NonProjection = undefined;

__webpack_require__(22);

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_leaflet2["default"].Projection = {};

/**
 * @private
 * @class L.Projection.NonProjection
 * @classdesc 平面无投影对象
 * @extends L.Class{@linkdoc-leaflet/#class}
 * @param bounds - {L.bounds} 坐标范围
 */
var NonProjection = exports.NonProjection = _leaflet2["default"].Class.extend({

    initialize: function initialize(bounds) {
        this.bounds = bounds;
    },

    project: function project(latlng) {
        return new _leaflet2["default"].Point(latlng.lng, latlng.lat);
    },

    unproject: function unproject(point) {
        return new _leaflet2["default"].LatLng(point.y, point.x);
    }
});

var nonProjection = exports.nonProjection = function nonProjection(bounds) {
    return new NonProjection(bounds);
};

/**
 * @class L.CRS.NonEarthCRS
 * @classdesc 平面无投影坐标类
 * @extends L.Class{@linkdoc-leaflet/#class}
 * @param options - {Object} 构建平面无投影坐标对象参数<br>
 *        origin - {Object} 原点<br>
 *        bounds - {[L.bounds]{@linkdoc-leaflet/#bounds}|Array<number>} 范围<br>
 *        resolutions - {Array<number>} 分辨率
 */
var NonEarthCRS = exports.NonEarthCRS = _leaflet2["default"].Class.extend({

    /*
     * @member L.CRS.NonEarthCRS.prototype.includes -{Object}
     * @description 包含的坐标对象，默认为：L.CRS。
     */
    includes: _leaflet2["default"].CRS,

    initialize: function initialize(options) {
        if (options.origin) {
            this.transformation = new _leaflet2["default"].Transformation(1, -options.origin.x, -1, options.origin.y);
        }
        this.projection = _leaflet2["default"].Projection.NonProjection(options.bounds);
        this.bounds = options.bounds;
        this.origin = options.origin;
        this.resolutions = options.resolutions;
    },

    /**
     * @function L.CRS.NonEarthCRS.prototype.scale
     * @description 通过缩放级别计算比例尺
     * @param zoom - {number}缩放级别
     * @return {number} 得到的比例尺
     */
    scale: function scale(zoom) {
        if (!this.resolutions || this.resolutions.length === 0) {
            var width = Math.max(this.bounds.getSize().x, this.bounds.getSize().y);
            var defaultScale = 1 / (width / 256);
            return defaultScale * Math.pow(2, zoom);
        }
        return 1 / this.resolutions[zoom];
    },

    /**
     * @function L.CRS.NonEarthCRS.prototype.zoom
     * @description 通过比例尺计算范围
     * @param scale - {number}比例尺
     * @return {number} 返回空间范围值
     */
    zoom: function zoom(scale) {
        if (!this.resolutions || this.resolutions.length === 0) {
            var width = Math.max(this.bounds.getSize().x, this.bounds.getSize().y);
            var defaultScale = 1 / (width / 256);
            return scale / defaultScale;
        }
        for (var i = 0; i < this.resolutions.length; i++) {
            if (1 / this.resolutions == scale) {
                return i;
            }
        }
        return -1;
    },

    /**
     * @function L.CRS.NonEarthCRS.prototype.distance
     * @description 通过两个坐标点计算之间的距离
     * @param latlng1 - {L.latLng} 坐标点1
     * @param latlng2 - {L.latLng} 坐标点2
     * @return {number} 返回距离长度
     */
    distance: function distance(latlng1, latlng2) {
        var dx = latlng2.lng - latlng1.lng,
            dy = latlng2.lat - latlng1.lat;

        return Math.sqrt(dx * dx + dy * dy);
    },

    infinite: true
});
var nonEarthCRS = exports.nonEarthCRS = function nonEarthCRS(options) {
    return new NonEarthCRS(options);
};
_leaflet2["default"].Projection.NonProjection = nonProjection;

_leaflet2["default"].CRS.NonEarthCRS = nonEarthCRS;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crs = exports.CRS = undefined;

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

var _proj = __webpack_require__(91);

var _proj2 = _interopRequireDefault(_proj);

var _Util = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.Proj4js = _proj2["default"]; /**
                                  * Inspired by https://github.com/kartena/Proj4Leaflet
                                  */

_leaflet2["default"].Proj = {};

_leaflet2["default"].Proj._isProj4Obj = function (a) {
    return typeof a.inverse !== 'undefined' && typeof a.forward !== 'undefined';
};

/**
 * @class L.Proj.Projection
 * @private
 * @classdesc Proj投影定义类
 * @extends L.Class{@linkdoc-leaflet/#class}
 * @param code - {number}地理编码
 * @param def - {string} 定位
 * @param bounds - {L.bounds} 投影范围参数
 */
_leaflet2["default"].Proj.Projection = _leaflet2["default"].Class.extend({

    initialize: function initialize(code, def, bounds) {
        var isP4 = _leaflet2["default"].Proj._isProj4Obj(code);
        this._proj = isP4 ? code : this._projFromCodeDef(code, def);
        var boundsOption = bounds;
        if (_leaflet2["default"].Util.isArray(bounds)) {
            boundsOption = _leaflet2["default"].bounds(bounds);
        }
        this.bounds = isP4 ? def : boundsOption;
    },

    /**
     * @function L.Proj.Projection.prototype.project
     * @description 通过地理坐标得到投影坐标
     * @param latlng - {L.laylng} 经纬度坐标
     * @return {Point} 返回投影坐标点
     */
    project: function project(latlng) {
        var point = this._proj.forward([latlng.lng, latlng.lat]);
        return new _leaflet2["default"].Point(point[0], point[1]);
    },

    /**
     * @function L.Proj.Projection.prototype.unproject
     * @description 通过投影坐标得到地理坐标
     * @param point {L.Point} 地理坐标点
     * @param unbounded - {string} 坐标点高程不限
     * @return {LatLng} 返回经纬度坐标
     */
    unproject: function unproject(point, unbounded) {
        var point2 = this._proj.inverse([point.x, point.y]);
        return new _leaflet2["default"].LatLng(point2[1], point2[0], unbounded);
    },

    _projFromCodeDef: function _projFromCodeDef(code, def) {
        if (def) {
            _proj2["default"].defs(code, def);
        } else if (_proj2["default"].defs[code] === undefined) {
            var urn = code.split(':');
            if (urn.length > 3) {
                code = urn[urn.length - 3] + ':' + urn[urn.length - 1];
            }
            if (_proj2["default"].defs[code] === undefined) {
                throw 'No projection definition for code ' + code;
            }
        }

        return (0, _proj2["default"])(code);
    },
    getUnits: function getUnits() {
        return this._proj.oProj.units;
    }
});

/**
 * @class L.Proj.CRS
 * @classdesc Proj坐标系统定义类
 * @extends L.Class{@linkdoc-leaflet/#class}
 * @param srsCode -{string} proj srsCode。
 * @param options -{Object} options。可选参数：<br>
 *                     def -{string} 投影的proj4定义。<br>
 *                     origin -{Array|L.Point} 原点。必填<br>
 *                     scales -{Array} 比例尺数组 <br>
 *                     scaleDenominators -{Array} 比例尺分母数组 <br>
 *                     resolutions -{Array} 分辨率数组 <br>
 *                     bounds -{Array|L.Bounds} 范围
 * @example
 * 用法：
 *    var crs =L.Proj.CRS("EPSG:4326", '', {
 *          origin: [-180,90],
 *          scaleDenominators: [2000,1000,500,200,100,50,20,10],
 *    });
 *    var map=L.map('map', {
 *       crs: crs
 *      ...
 *    })
 */
var CRS = exports.CRS = _leaflet2["default"].Class.extend({
    includes: _leaflet2["default"].CRS,

    options: {
        transformation: new _leaflet2["default"].Transformation(1, 0, -1, 0)
    },

    initialize: function initialize(srsCode, options) {
        var code, proj, def;

        if (_leaflet2["default"].Proj._isProj4Obj(srsCode)) {
            proj = srsCode;
            code = proj.srsCode;
            options = options || {};

            this.projection = new _leaflet2["default"].Proj.Projection(proj, options.bounds);
        } else {
            code = srsCode;
            options = options || {};
            def = options.def || '';
            this.projection = new _leaflet2["default"].Proj.Projection(code, def, options.bounds);
        }

        _leaflet2["default"].Util.setOptions(this, options);
        this.code = code;
        this.transformation = this.options.transformation;
        if (this.options.bounds) {}
        if (this.options.bounds) {
            this.options.bounds = _leaflet2["default"].bounds(this.options.bounds);
        }
        if (!this.options.origin && this.options.bounds) {
            this.options.origin = [this.options.bounds.min.x, this.options.bounds.max.y];
        }
        if (this.options.origin) {
            if (this.options.origin instanceof _leaflet2["default"].Point) {
                this.options.origin = [this.options.origin.x, this.options.origin.y];
            }
            this.transformation = new _leaflet2["default"].Transformation(1, -this.options.origin[0], -1, this.options.origin[1]);
        }

        if (this.options.scales && this.options.scales.length > 0) {
            this._scales = this._toProj4Scales(this.options.scales);
        } else if (this.options.scaleDenominators && this.options.scaleDenominators.length > 0) {
            var scales = [];
            for (var i = 0; i < this.options.scaleDenominators.length; i++) {
                scales[i] = 1 / this.options.scaleDenominators[i];
            }
            this._scales = this._toProj4Scales(scales);
        } else if (this.options.resolutions && this.options.resolutions.length > 0) {
            this._scales = [];
            for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
                if (this.options.resolutions[i]) {
                    this._scales[i] = 1 / this.options.resolutions[i];
                }
            }
        } else if (this.options.bounds) {
            this._scales = this._getDefaultProj4ScalesByBounds(this.options.bounds);
        }

        this.infinite = !this.options.bounds;
    },

    /**
     * @function L.Proj.CRS.prototype.scale
     * @description 通过缩放级别获取比例尺值
     * @param zoom - {number}缩放级别
     * @return 比例尺值
     */
    scale: function scale(zoom) {
        var iZoom = Math.floor(zoom),
            baseScale,
            nextScale,
            scaleDiff,
            zDiff;
        if (zoom === iZoom) {
            return this._scales[zoom];
        } else {
            // Non-integer zoom, interpolate
            baseScale = this._scales[iZoom];
            nextScale = this._scales[iZoom + 1];
            scaleDiff = nextScale - baseScale;
            zDiff = zoom - iZoom;
            return baseScale + scaleDiff * zDiff;
        }
    },

    /**
     * @function L.Proj.CRS.prototype.zoom
     * @description 根据比例尺返回缩放级别
     * @param scale - {number}比例尺
     * @return {number} 缩放级别
     */
    zoom: function zoom(scale) {
        // Find closest number in this._scales, down
        var downScale = this._closestElement(this._scales, scale),
            downZoom = this._scales.indexOf(downScale),
            nextScale,
            nextZoom,
            scaleDiff;
        // Check if scale is downScale => return array index
        if (scale === downScale) {
            return downZoom;
        }
        // Interpolate
        nextZoom = downZoom + 1;
        nextScale = this._scales[nextZoom];
        if (nextScale === undefined) {
            return Infinity;
        }
        scaleDiff = nextScale - downScale;
        return (scale - downScale) / scaleDiff + downZoom;
    },

    distance: _leaflet2["default"].CRS.Earth.distance,

    R: _leaflet2["default"].CRS.Earth.R,

    /* Get the closest lowest element in an array */
    _closestElement: function _closestElement(array, element) {
        var low;
        for (var i = array.length; i--;) {
            if (array[i] <= element && (low === undefined || low < array[i])) {
                low = array[i];
            }
        }
        return low;
    },

    _toProj4Scales: function _toProj4Scales(scales) {
        var proj4Scales = [];
        if (!scales) {
            return proj4Scales;
        }
        for (var i = 0; i < scales.length; i++) {
            var a = this.projection ? this._getMeterPerMapUnit(this.projection.getUnits()) : 1;
            proj4Scales[i] = 1 / (0.0254 / (96 * scales[i]) / a);
        }
        return proj4Scales;
    },
    _getMeterPerMapUnit: function _getMeterPerMapUnit(mapUnit) {
        var earchRadiusInMeters = 6378137;
        var meterPerMapUnit = 1;
        if (mapUnit === "meter") {
            meterPerMapUnit = 1;
        } else if (mapUnit === "degrees") {
            // 每度表示多少米。
            meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
        } else if (mapUnit === "kilometer") {
            meterPerMapUnit = 1.0E-3;
        } else if (mapUnit === "inch") {
            meterPerMapUnit = 1 / 2.5399999918E-2;
        } else if (mapUnit === "feet") {
            meterPerMapUnit = 0.3048;
        }
        return meterPerMapUnit;
    },
    _getDefaultProj4ScalesByBounds: function _getDefaultProj4ScalesByBounds(bounds) {
        if (!bounds) {
            return [];
        }
        var boundsSize = bounds.getSize();
        var extendsSize = Math.max(boundsSize.x, boundsSize.y);
        var resolution = extendsSize / 256;
        var scales = [];
        var maxZoom = 23;
        for (var i = 0; i < maxZoom; i++) {
            scales[i] = Math.pow(2, i) / resolution;
        }
        return scales;
    }
});
var crs = exports.crs = function crs(srsCode, options) {
    return new CRS(srsCode, options);
};
_leaflet2["default"].Proj.CRS = crs;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var mgrs = __webpack_require__(28);

function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if(typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function(mgrsStr) {
  return new Point(mgrs.toPoint(mgrsStr));
};
Point.prototype.toMGRS = function(accuracy) {
  return mgrs.forward([this.x, this.y], accuracy);
};
module.exports = Point;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(crs, denorm, point) {
  var xin = point.x,
    yin = point.y,
    zin = point.z || 0.0;
  var v, t, i;
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      t = 'x';
    }
    else if (i === 1) {
      v = yin;
      t = 'y';
    }
    else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
    case 'e':
      point[t] = v;
      break;
    case 'w':
      point[t] = -v;
      break;
    case 'n':
      point[t] = v;
      break;
    case 's':
      point[t] = -v;
      break;
    case 'u':
      if (point[t] !== undefined) {
        point.z = v;
      }
      break;
    case 'd':
      if (point[t] !== undefined) {
        point.z = -v;
      }
      break;
    default:
      //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
      return null;
    }
  }
  return point;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;

module.exports = function(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return (-1 * HALF_PI);
    }
    else {
      return HALF_PI;
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

module.exports = function(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var pj_mlfn = __webpack_require__(37);
var EPSLN = 1.0e-10;
var MAX_ITER = 20;
module.exports = function(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER; i; --i) { /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < EPSLN) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function(esinp, exp) {
  return (Math.pow((1 - esinp) / (1 + esinp), exp));
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

exports.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
exports.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
exports.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
exports.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
exports.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
exports.potsdam = {
  towgs84: "606.0,23.0,413.0",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
exports.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
exports.hermannskogel = {
  towgs84: "653.0,-212.0,449.0",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
exports.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
exports.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
exports.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
exports.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
exports.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};
exports.beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};
exports.gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};
exports.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

exports.MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
exports.SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
exports.GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
exports.IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
exports.airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};
exports.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
exports.NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
exports.mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};
exports.andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
exports.aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
exports.GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};
exports.bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
exports.bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
exports.clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};
exports.clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
exports.clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
exports.CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
exports.delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
exports.engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
exports.evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
exports.evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
exports.evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
exports.evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
exports.evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
exports.fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
exports.fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
exports.fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
exports.helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
exports.hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};
exports.intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};
exports.kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
exports.lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
exports.mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};
exports.new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};
exports.plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};
exports.krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
exports.SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};
exports.walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};
exports.WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};
exports.WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};
exports.WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};
exports.WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
exports.sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

exports.greenwich = 0.0; //"0dE",
exports.lisbon = -9.131906111111; //"9d07'54.862\"W",
exports.paris = 2.337229166667; //"2d20'14.025\"E",
exports.bogota = -74.080916666667; //"74d04'51.3\"W",
exports.madrid = -3.687938888889; //"3d41'16.58\"W",
exports.rome = 12.452333333333; //"12d27'8.4\"E",
exports.bern = 7.439583333333; //"7d26'22.5\"E",
exports.jakarta = 106.807719444444; //"106d48'27.79\"E",
exports.ferro = -17.666666666667; //"17d40'W",
exports.brussels = 4.367975; //"4d22'4.71\"E",
exports.stockholm = 18.058277777778; //"18d3'29.8\"E",
exports.athens = 23.7163375; //"23d42'58.815\"E",
exports.oslo = 10.722916666667; //"10d43'22.5\"E"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

exports.ft = {to_meter: 0.3048};
exports['us-ft'] = {to_meter: 1200 / 3937};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var proj = __webpack_require__(23);
var transform = __webpack_require__(42);
var wgs84 = proj('WGS84');

function transformer(from, to, coords) {
  var transformedArray;
  if (Array.isArray(coords)) {
    transformedArray = transform(from, to, coords);
    if (coords.length === 3) {
      return [transformedArray.x, transformedArray.y, transformedArray.z];
    }
    else {
      return [transformedArray.x, transformedArray.y];
    }
  }
  else {
    return transform(from, to, coords);
  }
}

function checkProj(item) {
  if (item instanceof proj) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return proj(item);
}
function proj4(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  }
  else {
    obj = {
      forward: function(coords) {
        return transformer(fromProj, toProj, coords);
      },
      inverse: function(coords) {
        return transformer(toProj, fromProj, coords);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
module.exports = proj4;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

var HALF_PI = Math.PI/2;
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_GRIDSHIFT = 3;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
var AD_C = 1.0026000;
var COS_67P5 = 0.38268343236508977;
var datum = function(proj) {
  if (!(this instanceof datum)) {
    return new datum(proj);
  }
  this.datum_type = PJD_WGS84; //default setting
  if (!proj) {
    return;
  }
  if (proj.datumCode && proj.datumCode === 'none') {
    this.datum_type = PJD_NODATUM;
  }

  if (proj.datum_params) {
    this.datum_params = proj.datum_params.map(parseFloat);
    if (this.datum_params[0] !== 0 || this.datum_params[1] !== 0 || this.datum_params[2] !== 0) {
      this.datum_type = PJD_3PARAM;
    }
    if (this.datum_params.length > 3) {
      if (this.datum_params[3] !== 0 || this.datum_params[4] !== 0 || this.datum_params[5] !== 0 || this.datum_params[6] !== 0) {
        this.datum_type = PJD_7PARAM;
        this.datum_params[3] *= SEC_TO_RAD;
        this.datum_params[4] *= SEC_TO_RAD;
        this.datum_params[5] *= SEC_TO_RAD;
        this.datum_params[6] = (this.datum_params[6] / 1000000.0) + 1.0;
      }
    }
  }

  // DGR 2011-03-21 : nadgrids support
  this.datum_type = proj.grids ? PJD_GRIDSHIFT : this.datum_type;

  this.a = proj.a; //datum object also uses these values
  this.b = proj.b;
  this.es = proj.es;
  this.ep2 = proj.ep2;
  if (this.datum_type === PJD_GRIDSHIFT) {
    this.grids = proj.grids;
  }
};
datum.prototype = {


  /****************************************************************/
  // cs_compare_datums()
  //   Returns TRUE if the two datums match, otherwise FALSE.
  compare_datums: function(dest) {
    if (this.datum_type !== dest.datum_type) {
      return false; // false, datums are not equal
    }
    else if (this.a !== dest.a || Math.abs(this.es - dest.es) > 0.000000000050) {
      // the tolerence for es is to ensure that GRS80 and WGS84
      // are considered identical
      return false;
    }
    else if (this.datum_type === PJD_3PARAM) {
      return (this.datum_params[0] === dest.datum_params[0] && this.datum_params[1] === dest.datum_params[1] && this.datum_params[2] === dest.datum_params[2]);
    }
    else if (this.datum_type === PJD_7PARAM) {
      return (this.datum_params[0] === dest.datum_params[0] && this.datum_params[1] === dest.datum_params[1] && this.datum_params[2] === dest.datum_params[2] && this.datum_params[3] === dest.datum_params[3] && this.datum_params[4] === dest.datum_params[4] && this.datum_params[5] === dest.datum_params[5] && this.datum_params[6] === dest.datum_params[6]);
    }
    else if (this.datum_type === PJD_GRIDSHIFT || dest.datum_type === PJD_GRIDSHIFT) {
      //alert("ERROR: Grid shift transformations are not implemented.");
      //return false
      //DGR 2012-07-29 lazy ...
      return this.nadgrids === dest.nadgrids;
    }
    else {
      return true; // datums are equal
    }
  }, // cs_compare_datums()

  /*
   * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
   * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
   * according to the current ellipsoid parameters.
   *
   *    Latitude  : Geodetic latitude in radians                     (input)
   *    Longitude : Geodetic longitude in radians                    (input)
   *    Height    : Geodetic height, in meters                       (input)
   *    X         : Calculated Geocentric X coordinate, in meters    (output)
   *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
   *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
   *
   */
  geodetic_to_geocentric: function(p) {
    var Longitude = p.x;
    var Latitude = p.y;
    var Height = p.z ? p.z : 0; //Z value not always supplied
    var X; // output
    var Y;
    var Z;

    var Error_Code = 0; //  GEOCENT_NO_ERROR;
    var Rn; /*  Earth radius at location  */
    var Sin_Lat; /*  Math.sin(Latitude)  */
    var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
    var Cos_Lat; /*  Math.cos(Latitude)  */

    /*
     ** Don't blow up if Latitude is just a little out of the value
     ** range as it may just be a rounding issue.  Also removed longitude
     ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
     */
    if (Latitude < -HALF_PI && Latitude > -1.001 * HALF_PI) {
      Latitude = -HALF_PI;
    }
    else if (Latitude > HALF_PI && Latitude < 1.001 * HALF_PI) {
      Latitude = HALF_PI;
    }
    else if ((Latitude < -HALF_PI) || (Latitude > HALF_PI)) {
      /* Latitude out of range */
      //..reportError('geocent:lat out of range:' + Latitude);
      return null;
    }

    if (Longitude > Math.PI) {
      Longitude -= (2 * Math.PI);
    }
    Sin_Lat = Math.sin(Latitude);
    Cos_Lat = Math.cos(Latitude);
    Sin2_Lat = Sin_Lat * Sin_Lat;
    Rn = this.a / (Math.sqrt(1.0e0 - this.es * Sin2_Lat));
    X = (Rn + Height) * Cos_Lat * Math.cos(Longitude);
    Y = (Rn + Height) * Cos_Lat * Math.sin(Longitude);
    Z = ((Rn * (1 - this.es)) + Height) * Sin_Lat;

    p.x = X;
    p.y = Y;
    p.z = Z;
    return Error_Code;
  }, // cs_geodetic_to_geocentric()


  geocentric_to_geodetic: function(p) {
    /* local defintions and variables */
    /* end-criterium of loop, accuracy of sin(Latitude) */
    var genau = 1e-12;
    var genau2 = (genau * genau);
    var maxiter = 30;

    var P; /* distance between semi-minor axis and location */
    var RR; /* distance between center and location */
    var CT; /* sin of geocentric latitude */
    var ST; /* cos of geocentric latitude */
    var RX;
    var RK;
    var RN; /* Earth radius at location */
    var CPHI0; /* cos of start or old geodetic latitude in iterations */
    var SPHI0; /* sin of start or old geodetic latitude in iterations */
    var CPHI; /* cos of searched geodetic latitude */
    var SPHI; /* sin of searched geodetic latitude */
    var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
    var At_Pole; /* indicates location is in polar region */
    var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

    var X = p.x;
    var Y = p.y;
    var Z = p.z ? p.z : 0.0; //Z value not always supplied
    var Longitude;
    var Latitude;
    var Height;

    At_Pole = false;
    P = Math.sqrt(X * X + Y * Y);
    RR = Math.sqrt(X * X + Y * Y + Z * Z);

    /*      special cases for latitude and longitude */
    if (P / this.a < genau) {

      /*  special case, if P=0. (X=0., Y=0.) */
      At_Pole = true;
      Longitude = 0.0;

      /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
       *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
      if (RR / this.a < genau) {
        Latitude = HALF_PI;
        Height = -this.b;
        return;
      }
    }
    else {
      /*  ellipsoidal (geodetic) longitude
       *  interval: -PI < Longitude <= +PI */
      Longitude = Math.atan2(Y, X);
    }

    /* --------------------------------------------------------------
     * Following iterative algorithm was developped by
     * "Institut for Erdmessung", University of Hannover, July 1988.
     * Internet: www.ife.uni-hannover.de
     * Iterative computation of CPHI,SPHI and Height.
     * Iteration of CPHI and SPHI to 10**-12 radian resp.
     * 2*10**-7 arcsec.
     * --------------------------------------------------------------
     */
    CT = Z / RR;
    ST = P / RR;
    RX = 1.0 / Math.sqrt(1.0 - this.es * (2.0 - this.es) * ST * ST);
    CPHI0 = ST * (1.0 - this.es) * RX;
    SPHI0 = CT * RX;
    iter = 0;

    /* loop to find sin(Latitude) resp. Latitude
     * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
    do {
      iter++;
      RN = this.a / Math.sqrt(1.0 - this.es * SPHI0 * SPHI0);

      /*  ellipsoidal (geodetic) height */
      Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - this.es * SPHI0 * SPHI0);

      RK = this.es * RN / (RN + Height);
      RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
      CPHI = ST * (1.0 - RK) * RX;
      SPHI = CT * RX;
      SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
      CPHI0 = CPHI;
      SPHI0 = SPHI;
    }
    while (SDPHI * SDPHI > genau2 && iter < maxiter);

    /*      ellipsoidal (geodetic) latitude */
    Latitude = Math.atan(SPHI / Math.abs(CPHI));

    p.x = Longitude;
    p.y = Latitude;
    p.z = Height;
    return p;
  }, // cs_geocentric_to_geodetic()

  /** Convert_Geocentric_To_Geodetic
   * The method used here is derived from 'An Improved Algorithm for
   * Geocentric to Geodetic Coordinate Conversion', by Ralph Toms, Feb 1996
   */
  geocentric_to_geodetic_noniter: function(p) {
    var X = p.x;
    var Y = p.y;
    var Z = p.z ? p.z : 0; //Z value not always supplied
    var Longitude;
    var Latitude;
    var Height;

    var W; /* distance from Z axis */
    var W2; /* square of distance from Z axis */
    var T0; /* initial estimate of vertical component */
    var T1; /* corrected estimate of vertical component */
    var S0; /* initial estimate of horizontal component */
    var S1; /* corrected estimate of horizontal component */
    var Sin_B0; /* Math.sin(B0), B0 is estimate of Bowring aux variable */
    var Sin3_B0; /* cube of Math.sin(B0) */
    var Cos_B0; /* Math.cos(B0) */
    var Sin_p1; /* Math.sin(phi1), phi1 is estimated latitude */
    var Cos_p1; /* Math.cos(phi1) */
    var Rn; /* Earth radius at location */
    var Sum; /* numerator of Math.cos(phi1) */
    var At_Pole; /* indicates location is in polar region */

    X = parseFloat(X); // cast from string to float
    Y = parseFloat(Y);
    Z = parseFloat(Z);

    At_Pole = false;
    if (X !== 0.0) {
      Longitude = Math.atan2(Y, X);
    }
    else {
      if (Y > 0) {
        Longitude = HALF_PI;
      }
      else if (Y < 0) {
        Longitude = -HALF_PI;
      }
      else {
        At_Pole = true;
        Longitude = 0.0;
        if (Z > 0.0) { /* north pole */
          Latitude = HALF_PI;
        }
        else if (Z < 0.0) { /* south pole */
          Latitude = -HALF_PI;
        }
        else { /* center of earth */
          Latitude = HALF_PI;
          Height = -this.b;
          return;
        }
      }
    }
    W2 = X * X + Y * Y;
    W = Math.sqrt(W2);
    T0 = Z * AD_C;
    S0 = Math.sqrt(T0 * T0 + W2);
    Sin_B0 = T0 / S0;
    Cos_B0 = W / S0;
    Sin3_B0 = Sin_B0 * Sin_B0 * Sin_B0;
    T1 = Z + this.b * this.ep2 * Sin3_B0;
    Sum = W - this.a * this.es * Cos_B0 * Cos_B0 * Cos_B0;
    S1 = Math.sqrt(T1 * T1 + Sum * Sum);
    Sin_p1 = T1 / S1;
    Cos_p1 = Sum / S1;
    Rn = this.a / Math.sqrt(1.0 - this.es * Sin_p1 * Sin_p1);
    if (Cos_p1 >= COS_67P5) {
      Height = W / Cos_p1 - Rn;
    }
    else if (Cos_p1 <= -COS_67P5) {
      Height = W / -Cos_p1 - Rn;
    }
    else {
      Height = Z / Sin_p1 + Rn * (this.es - 1.0);
    }
    if (At_Pole === false) {
      Latitude = Math.atan(Sin_p1 / Cos_p1);
    }

    p.x = Longitude;
    p.y = Latitude;
    p.z = Height;
    return p;
  }, // geocentric_to_geodetic_noniter()

  /****************************************************************/
  // pj_geocentic_to_wgs84( p )
  //  p = point to transform in geocentric coordinates (x,y,z)
  geocentric_to_wgs84: function(p) {

    if (this.datum_type === PJD_3PARAM) {
      // if( x[io] === HUGE_VAL )
      //    continue;
      p.x += this.datum_params[0];
      p.y += this.datum_params[1];
      p.z += this.datum_params[2];

    }
    else if (this.datum_type === PJD_7PARAM) {
      var Dx_BF = this.datum_params[0];
      var Dy_BF = this.datum_params[1];
      var Dz_BF = this.datum_params[2];
      var Rx_BF = this.datum_params[3];
      var Ry_BF = this.datum_params[4];
      var Rz_BF = this.datum_params[5];
      var M_BF = this.datum_params[6];
      // if( x[io] === HUGE_VAL )
      //    continue;
      var x_out = M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF;
      var y_out = M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF;
      var z_out = M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF;
      p.x = x_out;
      p.y = y_out;
      p.z = z_out;
    }
  }, // cs_geocentric_to_wgs84

  /****************************************************************/
  // pj_geocentic_from_wgs84()
  //  coordinate system definition,
  //  point to transform in geocentric coordinates (x,y,z)
  geocentric_from_wgs84: function(p) {

    if (this.datum_type === PJD_3PARAM) {
      //if( x[io] === HUGE_VAL )
      //    continue;
      p.x -= this.datum_params[0];
      p.y -= this.datum_params[1];
      p.z -= this.datum_params[2];

    }
    else if (this.datum_type === PJD_7PARAM) {
      var Dx_BF = this.datum_params[0];
      var Dy_BF = this.datum_params[1];
      var Dz_BF = this.datum_params[2];
      var Rx_BF = this.datum_params[3];
      var Ry_BF = this.datum_params[4];
      var Rz_BF = this.datum_params[5];
      var M_BF = this.datum_params[6];
      var x_tmp = (p.x - Dx_BF) / M_BF;
      var y_tmp = (p.y - Dy_BF) / M_BF;
      var z_tmp = (p.z - Dz_BF) / M_BF;
      //if( x[io] === HUGE_VAL )
      //    continue;

      p.x = x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp;
      p.y = -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp;
      p.z = Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp;
    } //cs_geocentric_from_wgs84()
  }
};

/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
module.exports = datum;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_GRIDSHIFT = 3;
var PJD_NODATUM = 5; // WGS84 or equivalent
var SRS_WGS84_SEMIMAJOR = 6378137; // only used in grid shift transforms
var SRS_WGS84_ESQUARED = 0.006694379990141316; //DGR: 2012-07-29
module.exports = function(source, dest, point) {
  var wp, i, l;

  function checkParams(fallback) {
    return (fallback === PJD_3PARAM || fallback === PJD_7PARAM);
  }
  // Short cut if the datums are identical.
  if (source.compare_datums(dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === PJD_NODATUM || dest.datum_type === PJD_NODATUM) {
    return point;
  }

  //DGR: 2012-07-29 : add nadgrids support (begin)
  var src_a = source.a;
  var src_es = source.es;

  var dst_a = dest.a;
  var dst_es = dest.es;

  var fallback = source.datum_type;
  // If this datum requires grid shifts, then apply it to geodetic coordinates.
  if (fallback === PJD_GRIDSHIFT) {
    if (this.apply_gridshift(source, 0, point) === 0) {
      source.a = SRS_WGS84_SEMIMAJOR;
      source.es = SRS_WGS84_ESQUARED;
    }
    else {
      // try 3 or 7 params transformation or nothing ?
      if (!source.datum_params) {
        source.a = src_a;
        source.es = source.es;
        return point;
      }
      wp = 1;
      for (i = 0, l = source.datum_params.length; i < l; i++) {
        wp *= source.datum_params[i];
      }
      if (wp === 0) {
        source.a = src_a;
        source.es = source.es;
        return point;
      }
      if (source.datum_params.length > 3) {
        fallback = PJD_7PARAM;
      }
      else {
        fallback = PJD_3PARAM;
      }
    }
  }
  if (dest.datum_type === PJD_GRIDSHIFT) {
    dest.a = SRS_WGS84_SEMIMAJOR;
    dest.es = SRS_WGS84_ESQUARED;
  }
  // Do we need to go through geocentric coordinates?
  if (source.es !== dest.es || source.a !== dest.a || checkParams(fallback) || checkParams(dest.datum_type)) {
    //DGR: 2012-07-29 : add nadgrids support (end)
    // Convert to geocentric coordinates.
    source.geodetic_to_geocentric(point);
    // CHECK_RETURN;
    // Convert between datums
    if (checkParams(source.datum_type)) {
      source.geocentric_to_wgs84(point);
      // CHECK_RETURN;
    }
    if (checkParams(dest.datum_type)) {
      dest.geocentric_from_wgs84(point);
      // CHECK_RETURN;
    }
    // Convert back to geodetic coordinates
    dest.geocentric_to_geodetic(point);
    // CHECK_RETURN;
  }
  // Apply grid shift to destination if required
  if (dest.datum_type === PJD_GRIDSHIFT) {
    this.apply_gridshift(dest, 1, point);
    // CHECK_RETURN;
  }

  source.a = src_a;
  source.es = src_es;
  dest.a = dst_a;
  dest.es = dst_es;

  return point;
};



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Datum = __webpack_require__(81);
var Ellipsoid = __webpack_require__(82);
var extend = __webpack_require__(27);
var datum = __webpack_require__(86);
var EPSLN = 1.0e-10;
// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
module.exports = function(json) {
  // DGR 2011-03-20 : nagrids -> nadgrids
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Datum[json.datumCode];
    if (datumDef) {
      json.datum_params = datumDef.towgs84 ? datumDef.towgs84.split(',') : null;
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  if (!json.a) { // do we have an ellipsoid?
    var ellipse = Ellipsoid[json.ellps] ? Ellipsoid[json.ellps] : Ellipsoid.WGS84;
    extend(json, ellipse);
  }
  if (json.rf && !json.b) {
    json.b = (1.0 - 1.0 / json.rf) * json.a;
  }
  if (json.rf === 0 || Math.abs(json.a - json.b) < EPSLN) {
    json.sphere = true;
    json.b = json.a;
  }
  json.a2 = json.a * json.a; // used in geocentric
  json.b2 = json.b * json.b; // used in geocentric
  json.es = (json.a2 - json.b2) / json.a2; // e ^ 2
  json.e = Math.sqrt(json.es); // eccentricity
  if (json.R_A) {
    json.a *= 1 - json.es * (SIXTH + json.es * (RA4 + json.es * RA6));
    json.a2 = json.a * json.a;
    json.b2 = json.b * json.b;
    json.es = 0;
  }
  json.ep2 = (json.a2 - json.b2) / json.b2; // used in geocentric
  if (!json.k0) {
    json.k0 = 1.0; //default value
  }
  //DGR 2010-11-12: axis
  if (!json.axis) {
    json.axis = "enu";
  }

  if (!json.datum) {
    json.datum = datum(json);
  }
  return json;
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var projs = [
  __webpack_require__(41),
  __webpack_require__(116),
  __webpack_require__(115),
  __webpack_require__(114),
  __webpack_require__(113),
  __webpack_require__(110),
  __webpack_require__(104),
  __webpack_require__(102),
  __webpack_require__(96),
  __webpack_require__(103),
  __webpack_require__(94),
  __webpack_require__(101),
  __webpack_require__(97),
  __webpack_require__(98),
  __webpack_require__(111),
  __webpack_require__(109),
  __webpack_require__(107),
  __webpack_require__(112),
  __webpack_require__(108),
  __webpack_require__(99),
  __webpack_require__(117),
  __webpack_require__(95)
];
module.exports = function(proj4){
  projs.forEach(function(proj){
    proj4.Proj.projections.add(proj);
  });
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var proj4 = __webpack_require__(85);
proj4.defaultDatum = 'WGS84'; //default datum
proj4.Proj = __webpack_require__(23);
proj4.WGS84 = new proj4.Proj('WGS84');
proj4.Point = __webpack_require__(75);
proj4.toPoint = __webpack_require__(38);
proj4.defs = __webpack_require__(39);
proj4.transform = __webpack_require__(42);
proj4.mgrs = __webpack_require__(28);
proj4.version = __webpack_require__(118).version;
__webpack_require__(90)(proj4);
module.exports = proj4;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var defs = __webpack_require__(39);
var wkt = __webpack_require__(43);
var projStr = __webpack_require__(40);
function testObj(code){
  return typeof code === 'string';
}
function testDef(code){
  return code in defs;
}
function testWKT(code){
  var codeWords = ['GEOGCS','GEOCCS','PROJCS','LOCAL_CS'];
  return codeWords.reduce(function(a,b){
    return a+1+code.indexOf(b);
  },0);
}
function testProj(code){
  return code[0] === '+';
}
function parse(code){
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return defs[code];
    }
    else if (testWKT(code)) {
      return wkt(code);
    }
    else if (testProj(code)) {
      return projStr(code);
    }
  }else{
    return code;
  }
}

module.exports = parse;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var projs = [
  __webpack_require__(106),
  __webpack_require__(105)
];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function(n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}

exports.add = add;

exports.get = function(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
};
exports.start = function() {
  projs.forEach(add);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var EPSLN = 1.0e-10;
var msfnz = __webpack_require__(8);
var qsfnz = __webpack_require__(26);
var adjust_lon = __webpack_require__(1);
var asinz = __webpack_require__(7);
exports.init = function() {

  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs1 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs2 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = qsfnz(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  }
  else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
};

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = qsfnz(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * adjust_lon(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};


exports.inverse = function(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  }
  else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = adjust_lon(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
};

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
exports.phi1z = function(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = asinz(0.5 * qs);
  if (eccent < EPSLN) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
};
exports.names = ["Albers_Conic_Equal_Area", "Albers", "aea"];


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var mlfn = __webpack_require__(15);
var e0fn = __webpack_require__(11);
var e1fn = __webpack_require__(12);
var e2fn = __webpack_require__(13);
var e3fn = __webpack_require__(14);
var gN = __webpack_require__(24);
var asinz = __webpack_require__(7);
var imlfn = __webpack_require__(25);
exports.init = function() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
};

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = adjust_lon(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North Pole case
      p.x = this.x0 + this.a * (HALF_PI - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (HALF_PI - lat) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South Pole case
      p.x = this.x0 + this.a * (HALF_PI + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (HALF_PI + lat) * Math.cos(dlon);
      return p;
    }
    else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c / Math.sin(c);
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  }
  else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    }
    else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = gN(this.a, this.e, this.sin_p12);
      Nl = gN(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else if (Math.abs(Math.abs(Az) - Math.PI) <= EPSLN) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }


};

exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > (2 * HALF_PI * this.a)) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= EPSLN) {
      lat = this.lat0;
    }
    else {
      lat = asinz(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
      con = Math.abs(this.lat0) - HALF_PI;
      if (Math.abs(con) <= EPSLN) {
        if (this.lat0 >= 0) {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
        }
      }
      else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
      //North pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
      //South pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = gN(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = adjust_lon(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      lat = Math.atan((1 - this.es * F * this.sin_p12 / Math.sin(psi)) * Math.tan(psi) / (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }

};
exports.names = ["Azimuthal_Equidistant", "aeqd"];


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var mlfn = __webpack_require__(15);
var e0fn = __webpack_require__(11);
var e1fn = __webpack_require__(12);
var e2fn = __webpack_require__(13);
var e3fn = __webpack_require__(14);
var gN = __webpack_require__(24);
var adjust_lon = __webpack_require__(1);
var adjust_lat = __webpack_require__(10);
var imlfn = __webpack_require__(25);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
exports.init = function() {
  if (!this.sphere) {
    this.e0 = e0fn(this.es);
    this.e1 = e1fn(this.es);
    this.e2 = e2fn(this.es);
    this.e3 = e3fn(this.es);
    this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
};



/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  }
  else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = gN(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  }
  else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = imlfn(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - HALF_PI) <= EPSLN) {
      p.x = this.long0;
      p.y = HALF_PI;
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = gN(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

  }

  p.x = adjust_lon(lam + this.long0);
  p.y = adjust_lat(phi);
  return p;

};
exports.names = ["Cassini", "Cassini_Soldner", "cass"];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var qsfnz = __webpack_require__(26);
var msfnz = __webpack_require__(8);
var iqsfnz = __webpack_require__(77);
/*
  reference:  
    "Cartographic Projection Procedures for the UNIX Environment-
    A User's Manual" by Gerald I. Evenden,
    USGS Open File Report 90-284and Release 4 Interim Reports (2003)
*/
exports.init = function() {
  //no-op
  if (!this.sphere) {
    this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
};


/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  }
  else {
    var qs = qsfnz(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
};

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = adjust_lon(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
    lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
  }
  else {
    lat = iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
    lon = adjust_lon(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["cea"];


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var adjust_lat = __webpack_require__(10);
exports.init = function() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
};


// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = adjust_lon(lon - this.long0);
  var dlat = adjust_lat(lat - this.lat0);
  p.x = this.x0 + (this.a * dlon * this.rc);
  p.y = this.y0 + (this.a * dlat);
  return p;
};

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
exports.inverse = function(p) {

  var x = p.x;
  var y = p.y;

  p.x = adjust_lon(this.long0 + ((x - this.x0) / (this.a * this.rc)));
  p.y = adjust_lat(this.lat0 + ((y - this.y0) / (this.a)));
  return p;
};
exports.names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var e0fn = __webpack_require__(11);
var e1fn = __webpack_require__(12);
var e2fn = __webpack_require__(13);
var e3fn = __webpack_require__(14);
var msfnz = __webpack_require__(8);
var mlfn = __webpack_require__(15);
var adjust_lon = __webpack_require__(1);
var adjust_lat = __webpack_require__(10);
var imlfn = __webpack_require__(25);
var EPSLN = 1.0e-10;
exports.init = function() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = msfnz(this.e, this.sinphi, this.cosphi);
  this.ml1 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < EPSLN) {
    this.ns = this.sinphi;
  }
  else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = msfnz(this.e, this.sinphi, this.cosphi);
    this.ml2 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
};


/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  }
  else {
    var ml = mlfn(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = adjust_lon(this.long0 + theta / this.ns);
    lat = adjust_lat(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    var ml = this.g - rh1 / this.a;
    lat = imlfn(ml, this.e0, this.e1, this.e2, this.e3);
    lon = adjust_lon(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }

};
exports.names = ["Equidistant_Conic", "eqdc"];


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var FORTPI = Math.PI/4;
var srat = __webpack_require__(80);
var HALF_PI = Math.PI/2;
var MAX_ITER = 20;
exports.init = function() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + FORTPI), this.C) * srat(this.e * sphi, this.ratexp));
};

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + FORTPI), this.C) * srat(this.e * Math.sin(lat), this.ratexp)) - HALF_PI;
  p.x = this.C * lon;
  return p;
};

exports.inverse = function(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + FORTPI) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * srat(this.e * Math.sin(p.y), - 0.5 * this.e)) - HALF_PI;
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["gauss"];


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(7);

/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
exports.init = function() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
};


/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
exports.forward = function(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = adjust_lon(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= EPSLN)) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  }
  else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project 
    // to infinity, on a bearing 
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that 
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

  }
  p.x = x;
  p.y = y;
  return p;
};


exports.inverse = function(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = asinz(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = adjust_lon(this.long0 + lon);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["gnom"];


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
exports.init = function() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
};

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
exports.forward = function(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = adjust_lon(lon - this.long0);
  /* Transformation */
  gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return (p);
};

/* calculate lat/lon from xy */
exports.inverse = function(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return (p);
};
exports.names = ["Krovak", "krovak"];


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var FORTPI = Math.PI/4;
var EPSLN = 1.0e-10;
var qsfnz = __webpack_require__(26);
var adjust_lon = __webpack_require__(1);
/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

exports.S_POLE = 1;
exports.N_POLE = 2;
exports.EQUIT = 3;
exports.OBLIQ = 4;


/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
exports.init = function() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - HALF_PI) < EPSLN) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  }
  else if (Math.abs(t) < EPSLN) {
    this.mode = this.EQUIT;
  }
  else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = qsfnz(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = this.authset(this.es);
    switch (this.mode) {
    case this.N_POLE:
      this.dd = 1;
      break;
    case this.S_POLE:
      this.dd = 1;
      break;
    case this.EQUIT:
      this.rq = Math.sqrt(0.5 * this.qp);
      this.dd = 1 / this.rq;
      this.xmf = 1;
      this.ymf = 0.5 * this.qp;
      break;
    case this.OBLIQ:
      this.rq = Math.sqrt(0.5 * this.qp);
      sinphi = Math.sin(this.lat0);
      this.sinb1 = qsfnz(this.e, sinphi) / this.qp;
      this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
      this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
      this.ymf = (this.xmf = this.rq) / this.dd;
      this.xmf *= this.dd;
      break;
    }
  }
  else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
};

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= EPSLN) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.phi0) < EPSLN) {
        return null;
      }
      y = FORTPI - phi * 0.5;
      y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  }
  else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = qsfnz(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
    case this.OBLIQ:
      b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
      break;
    case this.EQUIT:
      b = 1 + cosb * coslam;
      break;
    case this.N_POLE:
      b = HALF_PI + phi;
      q = this.qp - q;
      break;
    case this.S_POLE:
      b = phi - HALF_PI;
      q = this.qp + q;
      break;
    }
    if (Math.abs(b) < EPSLN) {
      return null;
    }
    switch (this.mode) {
    case this.OBLIQ:
    case this.EQUIT:
      b = Math.sqrt(2 / b);
      if (this.mode === this.OBLIQ) {
        y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
      }
      else {
        y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
      }
      x = this.xmf * b * cosb * sinlam;
      break;
    case this.N_POLE:
    case this.S_POLE:
      if (q >= 0) {
        x = (b = Math.sqrt(q)) * sinlam;
        y = coslam * ((this.mode === this.S_POLE) ? b : -b);
      }
      else {
        x = y = 0;
      }
      break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;

  if (this.sphere) {
    var cosz = 0,
      rh, sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
    case this.EQUIT:
      phi = (Math.abs(rh) <= EPSLN) ? 0 : Math.asin(y * sinz / rh);
      x *= sinz;
      y = cosz * rh;
      break;
    case this.OBLIQ:
      phi = (Math.abs(rh) <= EPSLN) ? this.phi0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
      x *= sinz * this.cosph0;
      y = (cosz - Math.sin(phi) * this.sinph0) * rh;
      break;
    case this.N_POLE:
      y = -y;
      phi = HALF_PI - phi;
      break;
    case this.S_POLE:
      phi -= HALF_PI;
      break;
    }
    lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
  }
  else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < EPSLN) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= (sCe = Math.sin(sCe));
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      }
      else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = (x * x + y * y);
      if (!q) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = this.authlat(Math.asin(ab), this.apa);
  }


  p.x = adjust_lon(this.long0 + lam);
  p.y = phi;
  return p;
};

/* determine latitude from authalic latitude */
exports.P00 = 0.33333333333333333333;
exports.P01 = 0.17222222222222222222;
exports.P02 = 0.10257936507936507936;
exports.P10 = 0.06388888888888888888;
exports.P11 = 0.06640211640211640211;
exports.P20 = 0.01641501294219154443;

exports.authset = function(es) {
  var t;
  var APA = [];
  APA[0] = es * this.P00;
  t = es * es;
  APA[0] += t * this.P01;
  APA[1] = t * this.P10;
  t *= es;
  APA[0] += t * this.P02;
  APA[1] += t * this.P11;
  APA[2] = t * this.P20;
  return APA;
};

exports.authlat = function(beta, APA) {
  var t = beta + beta;
  return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
};
exports.names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var EPSLN = 1.0e-10;
var msfnz = __webpack_require__(8);
var tsfnz = __webpack_require__(19);
var HALF_PI = Math.PI/2;
var sign = __webpack_require__(16);
var adjust_lon = __webpack_require__(1);
var phi2z = __webpack_require__(18);
exports.init = function() {

  // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
  //double c_lat;                   /* center latitude                      */
  //double c_lon;                   /* center longitude                     */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = msfnz(this.e, sin1, cos1);
  var ts1 = tsfnz(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = msfnz(this.e, sin2, cos2);
  var ts2 = tsfnz(this.e, this.lat2, sin2);

  var ts0 = tsfnz(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  }
  else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
};


// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= EPSLN) {
    lat = sign(lat) * (HALF_PI - 2 * EPSLN);
  }

  var con = Math.abs(Math.abs(lat) - HALF_PI);
  var ts, rh1;
  if (con > EPSLN) {
    ts = tsfnz(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  }
  else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
};

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
exports.inverse = function(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = (this.rh - (p.y - this.y0) / this.k0);
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2((con * x), (con * y));
  }
  if ((rh1 !== 0) || (this.ns > 0)) {
    con = 1 / this.ns;
    ts = Math.pow((rh1 / (this.a * this.f0)), con);
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  else {
    lat = -HALF_PI;
  }
  lon = adjust_lon(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
};

exports.names = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"];


/***/ }),
/* 105 */
/***/ (function(module, exports) {

exports.init = function() {
  //no-op for longlat
};

function identity(pt) {
  return pt;
}
exports.forward = identity;
exports.inverse = identity;
exports.names = ["longlat", "identity"];


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var msfnz = __webpack_require__(8);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var R2D = 57.29577951308232088;
var adjust_lon = __webpack_require__(1);
var FORTPI = Math.PI/4;
var tsfnz = __webpack_require__(19);
var phi2z = __webpack_require__(18);
exports.init = function() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if(!('x0' in this)){
    this.x0 = 0;
  }
  if(!('y0' in this)){
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    }
    else {
      this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      }
      else {
        this.k0 = 1;
      }
    }
  }
};

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * R2D > 90 && lat * R2D < -90 && lon * R2D > 180 && lon * R2D < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
    return null;
  }
  else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + 0.5 * lat));
    }
    else {
      var sinphi = Math.sin(lat);
      var ts = tsfnz(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
};


/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
exports.inverse = function(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  }
  else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = adjust_lon(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
};

exports.names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */


/* Initialize the Miller Cylindrical projection
  -------------------------------------------*/
exports.init = function() {
  //no-op
};


/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

  p.x = x;
  p.y = y;
  return p;
};

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = adjust_lon(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Miller_Cylindrical", "mill"];


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var EPSLN = 1.0e-10;
exports.init = function() {};

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
exports.forward = function(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  for (var i = 0; true; i++) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < EPSLN) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < EPSLN) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};

exports.inverse = function(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = adjust_lon(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
  if (lon < (-Math.PI)) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Mollweide", "moll"];


/***/ }),
/* 109 */
/***/ (function(module, exports) {

var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
exports.iterations = 1;

exports.init = function() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
};

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
exports.forward = function(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / SEC_TO_RAD * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = (z_im * this.a) + this.x0;
  p.y = (z_re * this.a) + this.y0;

  return p;
};


/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
exports.inverse = function(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + (d_phi * SEC_TO_RAD * 1E5);
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
};
exports.names = ["New_Zealand_Map_Grid", "nzmg"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var tsfnz = __webpack_require__(19);
var adjust_lon = __webpack_require__(1);
var phi2z = __webpack_require__(18);
var HALF_PI = Math.PI/2;
var FORTPI = Math.PI/4;
var EPSLN = 1.0e-10;

/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
exports.init = function() {
  this.no_off = this.no_off || false;
  this.no_rot = this.no_rot || false;

  if (isNaN(this.k0)) {
    this.k0 = 1;
  }
  var sinlat = Math.sin(this.lat0);
  var coslat = Math.cos(this.lat0);
  var con = this.e * sinlat;

  this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(coslat, 4));
  this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - con * con);
  var t0 = tsfnz(this.e, this.lat0, sinlat);
  var dl = this.bl / coslat * Math.sqrt((1 - this.es) / (1 - con * con));
  if (dl * dl < 1) {
    dl = 1;
  }
  var fl;
  var gl;
  if (!isNaN(this.longc)) {
    //Central point and azimuth method

    if (this.lat0 >= 0) {
      fl = dl + Math.sqrt(dl * dl - 1);
    }
    else {
      fl = dl - Math.sqrt(dl * dl - 1);
    }
    this.el = fl * Math.pow(t0, this.bl);
    gl = 0.5 * (fl - 1 / fl);
    this.gamma0 = Math.asin(Math.sin(this.alpha) / dl);
    this.long0 = this.longc - Math.asin(gl * Math.tan(this.gamma0)) / this.bl;

  }
  else {
    //2 points method
    var t1 = tsfnz(this.e, this.lat1, Math.sin(this.lat1));
    var t2 = tsfnz(this.e, this.lat2, Math.sin(this.lat2));
    if (this.lat0 >= 0) {
      this.el = (dl + Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    else {
      this.el = (dl - Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    var hl = Math.pow(t1, this.bl);
    var ll = Math.pow(t2, this.bl);
    fl = this.el / hl;
    gl = 0.5 * (fl - 1 / fl);
    var jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
    var pl = (ll - hl) / (ll + hl);
    var dlon12 = adjust_lon(this.long1 - this.long2);
    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(jl * Math.tan(0.5 * this.bl * (dlon12)) / pl) / this.bl;
    this.long0 = adjust_lon(this.long0);
    var dlon10 = adjust_lon(this.long1 - this.long0);
    this.gamma0 = Math.atan(Math.sin(this.bl * (dlon10)) / gl);
    this.alpha = Math.asin(dl * Math.sin(this.gamma0));
  }

  if (this.no_off) {
    this.uc = 0;
  }
  else {
    if (this.lat0 >= 0) {
      this.uc = this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
    else {
      this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
  }

};


/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var dlon = adjust_lon(lon - this.long0);
  var us, vs;
  var con;
  if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
    if (lat > 0) {
      con = -1;
    }
    else {
      con = 1;
    }
    vs = this.al / this.bl * Math.log(Math.tan(FORTPI + con * this.gamma0 * 0.5));
    us = -1 * con * HALF_PI * this.al / this.bl;
  }
  else {
    var t = tsfnz(this.e, lat, Math.sin(lat));
    var ql = this.el / Math.pow(t, this.bl);
    var sl = 0.5 * (ql - 1 / ql);
    var tl = 0.5 * (ql + 1 / ql);
    var vl = Math.sin(this.bl * (dlon));
    var ul = (sl * Math.sin(this.gamma0) - vl * Math.cos(this.gamma0)) / tl;
    if (Math.abs(Math.abs(ul) - 1) <= EPSLN) {
      vs = Number.POSITIVE_INFINITY;
    }
    else {
      vs = 0.5 * this.al * Math.log((1 - ul) / (1 + ul)) / this.bl;
    }
    if (Math.abs(Math.cos(this.bl * (dlon))) <= EPSLN) {
      us = this.al * this.bl * (dlon);
    }
    else {
      us = this.al * Math.atan2(sl * Math.cos(this.gamma0) + vl * Math.sin(this.gamma0), Math.cos(this.bl * dlon)) / this.bl;
    }
  }

  if (this.no_rot) {
    p.x = this.x0 + us;
    p.y = this.y0 + vs;
  }
  else {

    us -= this.uc;
    p.x = this.x0 + vs * Math.cos(this.alpha) + us * Math.sin(this.alpha);
    p.y = this.y0 + us * Math.cos(this.alpha) - vs * Math.sin(this.alpha);
  }
  return p;
};

exports.inverse = function(p) {
  var us, vs;
  if (this.no_rot) {
    vs = p.y - this.y0;
    us = p.x - this.x0;
  }
  else {
    vs = (p.x - this.x0) * Math.cos(this.alpha) - (p.y - this.y0) * Math.sin(this.alpha);
    us = (p.y - this.y0) * Math.cos(this.alpha) + (p.x - this.x0) * Math.sin(this.alpha);
    us += this.uc;
  }
  var qp = Math.exp(-1 * this.bl * vs / this.al);
  var sp = 0.5 * (qp - 1 / qp);
  var tp = 0.5 * (qp + 1 / qp);
  var vp = Math.sin(this.bl * us / this.al);
  var up = (vp * Math.cos(this.gamma0) + sp * Math.sin(this.gamma0)) / tp;
  var ts = Math.pow(this.el / Math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
  if (Math.abs(up - 1) < EPSLN) {
    p.x = this.long0;
    p.y = HALF_PI;
  }
  else if (Math.abs(up + 1) < EPSLN) {
    p.x = this.long0;
    p.y = -1 * HALF_PI;
  }
  else {
    p.y = phi2z(this.e, ts);
    p.x = adjust_lon(this.long0 - Math.atan2(sp * Math.cos(this.gamma0) - vp * Math.sin(this.gamma0), Math.cos(this.bl * us / this.al)) / this.bl);
  }
  return p;
};

exports.names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var e0fn = __webpack_require__(11);
var e1fn = __webpack_require__(12);
var e2fn = __webpack_require__(13);
var e3fn = __webpack_require__(14);
var adjust_lon = __webpack_require__(1);
var adjust_lat = __webpack_require__(10);
var mlfn = __webpack_require__(15);
var EPSLN = 1.0e-10;
var gN = __webpack_require__(24);
var MAX_ITER = 20;
exports.init = function() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);
  this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
};


/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = adjust_lon(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= EPSLN) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    }
    else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (adjust_lat(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  }
  else {
    if (Math.abs(lat) <= EPSLN) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    }
    else {
      var nl = gN(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }

  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};


/* Inverse equations
  -----------------*/
exports.inverse = function(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= EPSLN) {
      lon = adjust_lon(x / this.a + this.long0);
      lat = 0;
    }
    else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= EPSLN) {
          lat = phi;
          break;
        }
      }
      lon = adjust_lon(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
    }
  }
  else {
    if (Math.abs(y + this.ml0) <= EPSLN) {
      lat = 0;
      lon = adjust_lon(this.long0 + x / this.a);
    }
    else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= EPSLN) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = adjust_lon(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Polyconic", "poly"];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var adjust_lat = __webpack_require__(10);
var pj_enfn = __webpack_require__(78);
var MAX_ITER = 20;
var pj_mlfn = __webpack_require__(37);
var pj_inv_mlfn = __webpack_require__(79);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(7);
exports.init = function() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/


  if (!this.sphere) {
    this.en = pj_enfn(this.es);
  }
  else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }

};

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
exports.forward = function(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = adjust_lon(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    }
    else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < EPSLN) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;

  }
  else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * pj_mlfn(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
};

exports.inverse = function(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = asinz((this.m * lat + Math.sin(lat)) / this.n);
    }
    else if (this.n !== 1) {
      lat = asinz(Math.sin(lat) / this.n);
    }
    lon = adjust_lon(lon + this.long0);
    lat = adjust_lat(lat);
  }
  else {
    lat = pj_inv_mlfn(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < HALF_PI) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = adjust_lon(temp);
    }
    else if ((s - EPSLN) < HALF_PI) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Sinusoidal", "sinu"];

/***/ }),
/* 113 */
/***/ (function(module, exports) {

/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */
exports.init = function() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
};


exports.forward = function(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
};

exports.inverse = function(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
};

exports.names = ["somerc"];


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var sign = __webpack_require__(16);
var msfnz = __webpack_require__(8);
var tsfnz = __webpack_require__(19);
var phi2z = __webpack_require__(18);
var adjust_lon = __webpack_require__(1);
exports.ssfn_ = function(phit, sinphi, eccen) {
  sinphi *= eccen;
  return (Math.tan(0.5 * (HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
};

exports.init = function() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
      this.k0 = 0.5 * (1 + sign(this.lat0) * Math.sin(this.lat_ts));
    }
  }
  else {
    if (Math.abs(this.coslat0) <= EPSLN) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      }
      else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
      this.k0 = 0.5 * this.cons * msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = msfnz(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI;
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
};

// Stereographic forward equations--mapping lat,long to x,y
exports.forward = function(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = adjust_lon(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= EPSLN && Math.abs(lat + this.lat0) <= EPSLN) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  }
  else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - HALF_PI;
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= EPSLN) {
      ts = tsfnz(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    }
    else if (Math.abs(this.sinlat0) < EPSLN) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    }
    else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
};


//* Stereographic inverse equations--mapping x,y to lat/long
exports.inverse = function(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (0.5 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= EPSLN) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < EPSLN) {
      if (this.lat0 > 0) {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
      }
      else {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      }
    }
    else {
      lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    if (Math.abs(this.coslat0) <= EPSLN) {
      if (rh <= EPSLN) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * phi2z(this.e, ts);
      lon = this.con * adjust_lon(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
    }
    else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= EPSLN) {
        Chi = this.X0;
      }
      else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * phi2z(this.e, Math.tan(0.5 * (HALF_PI + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;

};
exports.names = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var gauss = __webpack_require__(100);
var adjust_lon = __webpack_require__(1);
exports.init = function() {
  gauss.init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
};

exports.forward = function(p) {
  var sinc, cosc, cosl, k;
  p.x = adjust_lon(p.x - this.long0);
  gauss.forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
};

exports.inverse = function(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  gauss.inverse.apply(this, [p]);
  p.x = adjust_lon(p.x + this.long0);
  return p;
};

exports.names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative"];


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var D2R = 0.01745329251994329577;
var tmerc = __webpack_require__(41);
exports.dependsOn = 'tmerc';
exports.init = function() {
  if (!this.zone) {
    return;
  }
  this.lat0 = 0;
  this.long0 = ((6 * Math.abs(this.zone)) - 183) * D2R;
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  tmerc.init.apply(this);
  this.forward = tmerc.forward;
  this.inverse = tmerc.inverse;
};
exports.names = ["Universal Transverse Mercator System", "utm"];


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var adjust_lon = __webpack_require__(1);
var HALF_PI = Math.PI/2;
var EPSLN = 1.0e-10;
var asinz = __webpack_require__(7);
/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
exports.init = function() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
};

exports.forward = function(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= EPSLN) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = asinz(2 * Math.abs(lat / Math.PI));
  if ((Math.abs(dlon) <= EPSLN) || (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN)) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    }
    else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  }
  else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
};

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
exports.inverse = function(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = ((3 * d) / a1) / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    }
    else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }
  else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < EPSLN) {
    lon = this.long0;
  }
  else {
    lon = adjust_lon(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
};
exports.names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"proj4@2.3.15","scope":null,"escapedName":"proj4","name":"proj4","rawSpec":"2.3.15","spec":"2.3.15","type":"version"},"E:\\git\\iClient9"]],"_from":"proj4@2.3.15","_id":"proj4@2.3.15","_inCache":true,"_location":"/proj4","_nodeVersion":"6.1.0","_npmOperationalInternal":{"host":"packages-12-west.internal.npmjs.com","tmp":"tmp/proj4-2.3.15.tgz_1471808262546_0.6752060337457806"},"_npmUser":{"name":"ahocevar","email":"andreas.hocevar@gmail.com"},"_npmVersion":"3.8.6","_phantomChildren":{},"_requested":{"raw":"proj4@2.3.15","scope":null,"escapedName":"proj4","name":"proj4","rawSpec":"2.3.15","spec":"2.3.15","type":"version"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/proj4/-/proj4-2.3.15.tgz","_shasum":"5ad06e8bca30be0ffa389a49e4565f51f06d089e","_shrinkwrap":null,"_spec":"proj4@2.3.15","_where":"E:\\git\\iClient9","author":"","bugs":{"url":"https://github.com/proj4js/proj4js/issues"},"contributors":[{"name":"Mike Adair","email":"madair@dmsolutions.ca"},{"name":"Richard Greenwood","email":"rich@greenwoodmap.com"},{"name":"Calvin Metcalf","email":"calvin.metcalf@gmail.com"},{"name":"Richard Marsden","url":"http://www.winwaed.com"},{"name":"T. Mittan"},{"name":"D. Steinwand"},{"name":"S. Nelson"}],"dependencies":{"mgrs":"~0.0.2"},"description":"Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.","devDependencies":{"browserify":"~12.0.1","chai":"~1.8.1","curl":"git://github.com/cujojs/curl.git","grunt":"~0.4.2","grunt-browserify":"~4.0.1","grunt-cli":"~0.1.13","grunt-contrib-connect":"~0.6.0","grunt-contrib-jshint":"~0.8.0","grunt-contrib-uglify":"~0.11.1","grunt-mocha-phantomjs":"~0.4.0","istanbul":"~0.2.4","mocha":"~1.17.1","tin":"~0.4.0"},"directories":{"test":"test","doc":"docs"},"dist":{"shasum":"5ad06e8bca30be0ffa389a49e4565f51f06d089e","tarball":"https://registry.npmjs.org/proj4/-/proj4-2.3.15.tgz"},"gitHead":"9fa5249c1f4183d5ddee3c4793dfd7b9f29f1886","homepage":"https://github.com/proj4js/proj4js#readme","jam":{"main":"dist/proj4.js","include":["dist/proj4.js","README.md","AUTHORS","LICENSE.md"]},"license":"MIT","main":"lib/index.js","maintainers":[{"name":"cwmma","email":"calvin.metcalf@gmail.com"},{"name":"ahocevar","email":"andreas.hocevar@gmail.com"}],"name":"proj4","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git://github.com/proj4js/proj4js.git"},"scripts":{"test":"./node_modules/istanbul/lib/cli.js test ./node_modules/mocha/bin/_mocha test/test.js"},"version":"2.3.15"}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
module.exports = __webpack_require__(44);


/***/ })
/******/ ]);