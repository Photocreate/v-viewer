(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueViewer"] = factory();
	else
		root["VueViewer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global = global || self, global.Viewer = factory());
})(this, function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  var DEFAULTS = {
    backdrop: true,

    button: true,

    navbar: true,

    title: true,

    toolbar: true,

    className: '',

    container: 'body',

    filter: null,

    fullscreen: true,

    initialViewIndex: 0,

    inline: false,

    interval: 5000,

    keyboard: true,

    loading: true,

    loop: true,

    minWidth: 200,

    minHeight: 100,

    movable: true,

    zoomable: true,

    rotatable: true,

    scalable: true,

    toggleOnDblclick: true,

    tooltip: true,

    transition: true,

    zIndex: 2015,

    zIndexInline: 0,

    zoomRatio: 0.1,

    minZoomRatio: 0.01,

    maxZoomRatio: 100,

    url: 'src',

    ready: null,
    show: null,
    shown: null,
    hide: null,
    hidden: null,
    view: null,
    viewed: null,
    zoom: null,
    zoomed: null
  };

  var TEMPLATE = '<div class="viewer-container" touch-action="none">' + '<div class="viewer-canvas"></div>' + '<div class="viewer-footer">' + '<div class="viewer-title"></div>' + '<div class="viewer-toolbar"></div>' + '<div class="viewer-navbar">' + '<ul class="viewer-list"></ul>' + '</div>' + '</div>' + '<div class="viewer-tooltip"></div>' + '<div role="button" class="viewer-button" data-viewer-action="mix"></div>' + '<div class="viewer-player"></div>' + '</div>';

  var IS_BROWSER = typeof window !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'viewer';

  var ACTION_MOVE = 'move';
  var ACTION_SWITCH = 'switch';
  var ACTION_ZOOM = 'zoom';

  var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
  var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
  var CLASS_FADE = "".concat(NAMESPACE, "-fade");
  var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
  var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
  var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
  var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
  var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
  var CLASS_IN = "".concat(NAMESPACE, "-in");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");
  var CLASS_OPEN = "".concat(NAMESPACE, "-open");
  var CLASS_SHOW = "".concat(NAMESPACE, "-show");
  var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");

  var EVENT_CLICK = 'click';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_DRAG_START = 'dragstart';
  var EVENT_HIDDEN = 'hidden';
  var EVENT_HIDE = 'hide';
  var EVENT_KEY_DOWN = 'keydown';
  var EVENT_LOAD = 'load';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_SHOW = 'show';
  var EVENT_SHOWN = 'shown';
  var EVENT_TRANSITION_END = 'transitionend';
  var EVENT_VIEW = 'view';
  var EVENT_VIEWED = 'viewed';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom';
  var EVENT_ZOOMED = 'zoomed';

  var DATA_ACTION = "".concat(NAMESPACE, "Action");

  var REGEXP_SPACES = /\s\s*/;

  var BUTTONS = ['zoom-in', 'zoom-out', 'one-to-one', 'reset', 'prev', 'play', 'next', 'rotate-left', 'rotate-right', 'flip-horizontal', 'flip-vertical'];

  function isString(value) {
    return typeof value === 'string';
  }


  var isNaN = Number.isNaN || WINDOW.isNaN;


  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }


  function isUndefined(value) {
    return typeof value === 'undefined';
  }


  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;


  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }


  function isFunction(value) {
    return typeof value === 'function';
  }


  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)) {
          var length = data.length;
          var i;

          for (i = 0; i < length; i += 1) {
            if (callback.call(data, data[i], i, data) === false) {
              break;
            }
          }
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }


  var assign = Object.assign || function assign(obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(obj) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            obj[key] = arg[key];
          });
        }
      });
    }

    return obj;
  };
  var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;


  function setStyle(element, styles) {
    if (!element) {
      return;
    }

    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value += 'px';
      }

      style[property] = value;
    });
  }


  function escapeHTMLEntities(value) {
    return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
  }


  function hasClass(element, value) {
    if (!element) {
      return false;
    }

    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }


  function addClass(element, value) {
    if (!element) {
      return;
    }

    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }


  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (!element) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }


  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;


  function hyphenate(value) {
    return value.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
  }


  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(hyphenate(name)));
  }


  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(hyphenate(name)), data);
    }
  }

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!element) {
      return;
    }

    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }


  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!element) {
      return;
    }

    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var listeners = element ? element.listeners : {};

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }


  function dispatchEvent(element, type, data) {
    var event;

    if (!element) {
      return false;
    }

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }


  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }


  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }

    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }


  function getImageNameFromURL(url) {
    return isString(url) ? decodeURIComponent(url.replace(/^.*\//, '').replace(/[?&#].*$/, '')) : '';
  }
  var IS_SAFARI = WINDOW.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(WINDOW.navigator.userAgent);


  function getImageNaturalSizes(image, callback) {
    var newImage = document.createElement('img');

    if (image.naturalWidth && !IS_SAFARI) {
      callback(image.naturalWidth, image.naturalHeight);
      return newImage;
    }

    var body = document.body || document.documentElement;

    newImage.onload = function () {
      callback(newImage.width, newImage.height);

      if (!IS_SAFARI) {
        body.removeChild(newImage);
      }
    };

    newImage.src = image.src;

    if (!IS_SAFARI) {
      newImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
      body.appendChild(newImage);
    }

    return newImage;
  }


  function getResponsiveClass(type) {
    switch (type) {
      case 2:
        return CLASS_HIDE_XS_DOWN;

      case 3:
        return CLASS_HIDE_SM_DOWN;

      case 4:
        return CLASS_HIDE_MD_DOWN;

      default:
        return '';
    }
  }


  function getMaxZoomRatio(pointers) {
    var pointers2 = assign({}, pointers);
    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }


  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : assign({
      timeStamp: Date.now(),
      startX: pageX,
      startY: pageY
    }, end);
  }


  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initViewer();
      this.initList();
      this.renderViewer();
    },
    initContainer: function initContainer() {
      this.containerData = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    initViewer: function initViewer() {
      var options = this.options,
          parent = this.parent;
      var viewerData;

      if (options.inline) {
        viewerData = {
          width: Math.max(parent.offsetWidth, options.minWidth),
          height: Math.max(parent.offsetHeight, options.minHeight)
        };
        this.parentData = viewerData;
      }

      if (this.fulled || !viewerData) {
        viewerData = this.containerData;
      }

      this.viewerData = assign({}, viewerData);
    },
    renderViewer: function renderViewer() {
      if (this.options.inline && !this.fulled) {
        setStyle(this.viewer, this.viewerData);
      }
    },
    initList: function initList() {
      var _this = this;

      var element = this.element,
          options = this.options,
          list = this.list;
      var items = [];

      list.innerHTML = '';
      forEach(this.images, function (image, index) {
        var src = image.src;
        var alt = image.alt || getImageNameFromURL(src);
        var url = options.url;

        if (isString(url)) {
          url = image.getAttribute(url);
        } else if (isFunction(url)) {
          url = url.call(_this, image);
        }

        if (src || url) {
          var item = document.createElement('li');
          var img = document.createElement('img');
          img.src = src || url;
          img.alt = alt;
          img.setAttribute('data-index', index);
          img.setAttribute('data-original-url', url || src);
          img.setAttribute('data-viewer-action', 'view');
          img.setAttribute('role', 'button');
          item.appendChild(img);
          list.appendChild(item);
          items.push(item);
        }
      });
      this.items = items;
      forEach(items, function (item) {
        var image = item.firstElementChild;
        setData(image, 'filled', true);

        if (options.loading) {
          addClass(item, CLASS_LOADING);
        }

        addListener(image, EVENT_LOAD, function (event) {
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }

          _this.loadImage(event);
        }, {
          once: true
        });
      });

      if (options.transition) {
        addListener(element, EVENT_VIEWED, function () {
          addClass(list, CLASS_TRANSITION);
        }, {
          once: true
        });
      }
    },
    renderList: function renderList(index) {
      var i = index || this.index;
      var width = this.items[i].offsetWidth || 30;
      var outerWidth = width + 1;

      setStyle(this.list, assign({
        width: outerWidth * this.length
      }, getTransforms({
        translateX: (this.viewerData.width - width) / 2 - outerWidth * i
      })));
    },
    resetList: function resetList() {
      var list = this.list;
      list.innerHTML = '';
      removeClass(list, CLASS_TRANSITION);
      setStyle(list, getTransforms({
        translateX: 0
      }));
    },
    initImage: function initImage(done) {
      var _this2 = this;

      var options = this.options,
          image = this.image,
          viewerData = this.viewerData;
      var footerHeight = this.footer.offsetHeight;
      var viewerWidth = viewerData.width;
      var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
      var oldImageData = this.imageData || {};
      var sizingImage;
      this.imageInitializing = {
        abort: function abort() {
          sizingImage.onload = null;
        }
      };
      sizingImage = getImageNaturalSizes(image, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = viewerWidth;
        var height = viewerHeight;
        _this2.imageInitializing = false;

        if (viewerHeight * aspectRatio > viewerWidth) {
          height = viewerWidth / aspectRatio;
        } else {
          width = viewerHeight * aspectRatio;
        }

        width = Math.min(width * 0.9, naturalWidth);
        height = Math.min(height * 0.9, naturalHeight);
        var imageData = {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: aspectRatio,
          ratio: width / naturalWidth,
          width: width,
          height: height,
          left: (viewerWidth - width) / 2,
          top: (viewerHeight - height) / 2
        };
        var initialImageData = assign({}, imageData);

        if (options.rotatable) {
          imageData.rotate = oldImageData.rotate || 0;
          initialImageData.rotate = 0;
        }

        if (options.scalable) {
          imageData.scaleX = oldImageData.scaleX || 1;
          imageData.scaleY = oldImageData.scaleY || 1;
          initialImageData.scaleX = 1;
          initialImageData.scaleY = 1;
        }

        _this2.imageData = imageData;
        _this2.initialImageData = initialImageData;

        if (done) {
          done();
        }
      });
    },
    renderImage: function renderImage(done) {
      var _this3 = this;

      var image = this.image,
          imageData = this.imageData;
      setStyle(image, assign({
        width: imageData.width,
        height: imageData.height,

        marginLeft: imageData.left,
        marginTop: imageData.top
      }, getTransforms(imageData)));

      if (done) {
        if ((this.viewing || this.zooming) && this.options.transition) {
          var onTransitionEnd = function onTransitionEnd() {
            _this3.imageRendering = false;
            done();
          };

          this.imageRendering = {
            abort: function abort() {
              removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
            }
          };
          addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
            once: true
          });
        } else {
          done();
        }
      }
    },
    resetImage: function resetImage() {
      if (this.viewing || this.viewed) {
        var image = this.image;

        if (!image) {
          return;
        }

        if (this.viewing) {
          this.viewing.abort();
        }

        image.parentNode.removeChild(image);
        this.image = null;
      }
    }
  };

  var events = {
    bind: function bind() {
      var options = this.options,
          viewer = this.viewer,
          canvas = this.canvas;
      var document = this.element.ownerDocument;
      addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
      addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
      addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
      addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
      addListener(document, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
      addListener(document, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
      addListener(document, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));

      if (options.toggleOnDblclick) {
        addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
    },
    unbind: function unbind() {
      var options = this.options,
          viewer = this.viewer,
          canvas = this.canvas;
      var document = this.element.ownerDocument;
      removeListener(viewer, EVENT_CLICK, this.onClick);
      removeListener(viewer, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
      removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
      removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
      removeListener(document, EVENT_POINTER_MOVE, this.onPointerMove);
      removeListener(document, EVENT_POINTER_UP, this.onPointerUp);
      removeListener(document, EVENT_KEY_DOWN, this.onKeyDown);
      removeListener(window, EVENT_RESIZE, this.onResize);

      if (options.toggleOnDblclick) {
        removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
      }
    }
  };

  var handlers = {
    click: function click(event) {
      var target = event.target;
      var options = this.options,
          imageData = this.imageData;
      var action = getData(target, DATA_ACTION);

      if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
        clearTimeout(this.clickCanvasTimeout);
      }

      switch (action) {
        case 'mix':
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            } else {
              this.full();
            }
          } else {
            this.hide();
          }

          break;

        case 'hide':
          this.hide();
          break;

        case 'view':
          this.view(getData(target, 'index'));
          break;

        case 'zoom-in':
          this.zoom(0.1, true);
          break;

        case 'zoom-out':
          this.zoom(-0.1, true);
          break;

        case 'one-to-one':
          this.toggle();
          break;

        case 'reset':
          this.reset();
          break;

        case 'prev':
          this.prev(options.loop);
          break;

        case 'play':
          this.play(options.fullscreen);
          break;

        case 'next':
          this.next(options.loop);
          break;

        case 'rotate-left':
          this.rotate(-90);
          break;

        case 'rotate-right':
          this.rotate(90);
          break;

        case 'flip-horizontal':
          this.scaleX(-imageData.scaleX || -1);
          break;

        case 'flip-vertical':
          this.scaleY(-imageData.scaleY || -1);
          break;

        default:
          if (this.played) {
            this.stop();
          }

      }
    },
    dblclick: function dblclick(event) {
      event.preventDefault();

      if (this.viewed && event.target === this.image) {
        if (IS_TOUCH_DEVICE && event.isTrusted) {
          clearTimeout(this.doubleClickImageTimeout);
        }

        this.toggle();
      }
    },
    load: function load() {
      var _this = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = false;
      }

      var element = this.element,
          options = this.options,
          image = this.image,
          index = this.index,
          viewerData = this.viewerData;
      removeClass(image, CLASS_INVISIBLE);

      if (options.loading) {
        removeClass(this.canvas, CLASS_LOADING);
      }

      image.style.cssText = 'height:0;' + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + 'max-width:none!important;' + 'position:absolute;' + 'width:0;';
      this.initImage(function () {
        toggleClass(image, CLASS_MOVE, options.movable);
        toggleClass(image, CLASS_TRANSITION, options.transition);

        _this.renderImage(function () {
          _this.viewed = true;
          _this.viewing = false;

          if (isFunction(options.viewed)) {
            addListener(element, EVENT_VIEWED, options.viewed, {
              once: true
            });
          }

          dispatchEvent(element, EVENT_VIEWED, {
            originalImage: _this.images[index],
            index: index,
            image: image
          });
        });
      });
    },
    loadImage: function loadImage(event) {
      var image = event.target;
      var parent = image.parentNode;
      var parentWidth = parent.offsetWidth || 30;
      var parentHeight = parent.offsetHeight || 50;
      var filled = !!getData(image, 'filled');
      getImageNaturalSizes(image, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = parentWidth;
        var height = parentHeight;

        if (parentHeight * aspectRatio > parentWidth) {
          if (filled) {
            width = parentHeight * aspectRatio;
          } else {
            height = parentWidth / aspectRatio;
          }
        } else if (filled) {
          height = parentWidth / aspectRatio;
        } else {
          width = parentHeight * aspectRatio;
        }

        setStyle(image, assign({
          width: width,
          height: height
        }, getTransforms({
          translateX: (parentWidth - width) / 2,
          translateY: (parentHeight - height) / 2
        })));
      });
    },
    keydown: function keydown(event) {
      var options = this.options;

      if (!this.fulled || !options.keyboard) {
        return;
      }

      switch (event.keyCode || event.which || event.charCode) {
        case 27:
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            }
          } else {
            this.hide();
          }

          break;


        case 32:
          if (this.played) {
            this.stop();
          }

          break;


        case 37:
          this.prev(options.loop);
          break;


        case 38:
          event.preventDefault();

          this.zoom(options.zoomRatio, true);
          break;


        case 39:
          this.next(options.loop);
          break;


        case 40:
          event.preventDefault();

          this.zoom(-options.zoomRatio, true);
          break;


        case 48:

        case 49:
          if (event.ctrlKey) {
            event.preventDefault();
            this.toggle();
          }

          break;

        default:
      }
    },
    dragstart: function dragstart(event) {
      if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault();
      }
    },
    pointerdown: function pointerdown(event) {
      var options = this.options,
          pointers = this.pointers;
      var buttons = event.buttons,
          button = event.button;

      if (!this.viewed || this.showing || this.viewing || this.hiding || isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey) {
        return;
      }

      event.preventDefault();

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        pointers[event.pointerId || 0] = getPointer(event);
      }

      var action = options.movable ? ACTION_MOVE : false;

      if (Object.keys(pointers).length > 1) {
        action = ACTION_ZOOM;
      } else if ((event.pointerType === 'touch' || event.type === 'touchstart') && this.isSwitchable()) {
        action = ACTION_SWITCH;
      }

      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        removeClass(this.image, CLASS_TRANSITION);
      }

      this.action = action;
    },
    pointermove: function pointermove(event) {
      var pointers = this.pointers,
          action = this.action;

      if (!this.viewed || !action) {
        return;
      }

      event.preventDefault();

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    pointerup: function pointerup(event) {
      var _this2 = this;

      var options = this.options,
          action = this.action,
          pointers = this.pointers;
      var pointer;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          pointer = pointers[touch.identifier];
          delete pointers[touch.identifier];
        });
      } else {
        pointer = pointers[event.pointerId || 0];
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        addClass(this.image, CLASS_TRANSITION);
      }

      this.action = false;

      if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
        clearTimeout(this.clickCanvasTimeout);
        clearTimeout(this.doubleClickImageTimeout);

        if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
          if (this.imageClicked) {
            this.imageClicked = false;

            this.doubleClickImageTimeout = setTimeout(function () {
              dispatchEvent(_this2.image, EVENT_DBLCLICK);
            }, 50);
          } else {
            this.imageClicked = true;

            this.doubleClickImageTimeout = setTimeout(function () {
              _this2.imageClicked = false;
            }, 500);
          }
        } else {
          this.imageClicked = false;

          if (options.backdrop && options.backdrop !== 'static' && event.target === this.canvas) {
            this.clickCanvasTimeout = setTimeout(function () {
              dispatchEvent(_this2.canvas, EVENT_CLICK);
            }, 50);
          }
        }
      }
    },
    resize: function resize() {
      var _this3 = this;

      if (!this.isShown || this.hiding) {
        return;
      }

      this.initContainer();
      this.initViewer();
      this.renderViewer();
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this3.renderImage();
        });
      }

      if (this.played) {
        if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
          this.stop();
          return;
        }

        forEach(this.player.getElementsByTagName('img'), function (image) {
          addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
            once: true
          });
          dispatchEvent(image, EVENT_LOAD);
        });
      }
    },
    wheel: function wheel(event) {
      var _this4 = this;

      if (!this.viewed) {
        return;
      }

      event.preventDefault();

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this4.wheeling = false;
      }, 50);
      var ratio = Number(this.options.zoomRatio) || 0.1;
      var delta = 1;

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, true, event);
    }
  };

  var methods = {
    show: function show() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
          options = this.options;

      if (options.inline || this.showing || this.isShown || this.showing) {
        return this;
      }

      if (!this.ready) {
        this.build();

        if (this.ready) {
          this.show(immediate);
        }

        return this;
      }

      if (isFunction(options.show)) {
        addListener(element, EVENT_SHOW, options.show, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
        return this;
      }

      if (this.hiding) {
        this.transitioning.abort();
      }

      this.showing = true;
      this.open();
      var viewer = this.viewer;
      removeClass(viewer, CLASS_HIDE);

      if (options.transition && !immediate) {
        var shown = this.shown.bind(this);
        this.transitioning = {
          abort: function abort() {
            removeListener(viewer, EVENT_TRANSITION_END, shown);
            removeClass(viewer, CLASS_IN);
          }
        };
        addClass(viewer, CLASS_TRANSITION);

        viewer.offsetWidth;
        addListener(viewer, EVENT_TRANSITION_END, shown, {
          once: true
        });
        addClass(viewer, CLASS_IN);
      } else {
        addClass(viewer, CLASS_IN);
        this.shown();
      }

      return this;
    },

    hide: function hide() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
          options = this.options;

      if (options.inline || this.hiding || !(this.isShown || this.showing)) {
        return this;
      }

      if (isFunction(options.hide)) {
        addListener(element, EVENT_HIDE, options.hide, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_HIDE) === false) {
        return this;
      }

      if (this.showing) {
        this.transitioning.abort();
      }

      this.hiding = true;

      if (this.played) {
        this.stop();
      } else if (this.viewing) {
        this.viewing.abort();
      }

      var viewer = this.viewer;

      if (options.transition && !immediate) {
        var hidden = this.hidden.bind(this);

        var hide = function hide() {
          setTimeout(function () {
            addListener(viewer, EVENT_TRANSITION_END, hidden, {
              once: true
            });
            removeClass(viewer, CLASS_IN);
          }, 0);
        };

        this.transitioning = {
          abort: function abort() {
            if (this.viewed) {
              removeListener(this.image, EVENT_TRANSITION_END, hide);
            } else {
              removeListener(viewer, EVENT_TRANSITION_END, hidden);
            }
          }
        };

        if (this.viewed && hasClass(this.image, CLASS_TRANSITION)) {
          addListener(this.image, EVENT_TRANSITION_END, hide, {
            once: true
          });
          this.zoomTo(0, false, false, true);
        } else {
          hide();
        }
      } else {
        removeClass(viewer, CLASS_IN);
        this.hidden();
      }

      return this;
    },

    view: function view() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.initialViewIndex;
      index = Number(index) || 0;

      if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
        return this;
      }

      if (!this.isShown) {
        this.index = index;
        return this.show();
      }

      if (this.viewing) {
        this.viewing.abort();
      }

      var element = this.element,
          options = this.options,
          title = this.title,
          canvas = this.canvas;
      var item = this.items[index];
      var img = item.querySelector('img');
      var url = getData(img, 'originalUrl');
      var alt = img.getAttribute('alt');
      var image = document.createElement('img');
      image.src = url;
      image.alt = alt;

      if (isFunction(options.view)) {
        addListener(element, EVENT_VIEW, options.view, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_VIEW, {
        originalImage: this.images[index],
        index: index,
        image: image
      }) === false || !this.isShown || this.hiding || this.played) {
        return this;
      }

      this.image = image;
      removeClass(this.items[this.index], CLASS_ACTIVE);
      addClass(item, CLASS_ACTIVE);
      this.viewed = false;
      this.index = index;
      this.imageData = {};
      addClass(image, CLASS_INVISIBLE);

      if (options.loading) {
        addClass(canvas, CLASS_LOADING);
      }

      canvas.innerHTML = '';
      canvas.appendChild(image);

      this.renderList();

      title.innerHTML = '';

      var onViewed = function onViewed() {
        var imageData = _this.imageData;
        var render = Array.isArray(options.title) ? options.title[1] : options.title;
        title.innerHTML = escapeHTMLEntities(isFunction(render) ? render.call(_this, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " \xD7 ").concat(imageData.naturalHeight, ")"));
      };

      var onLoad;
      addListener(element, EVENT_VIEWED, onViewed, {
        once: true
      });
      this.viewing = {
        abort: function abort() {
          removeListener(element, EVENT_VIEWED, onViewed);

          if (image.complete) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          } else {
            image.src = '';
            removeListener(image, EVENT_LOAD, onLoad);

            if (this.timeout) {
              clearTimeout(this.timeout);
            }
          }
        }
      };

      if (image.complete) {
        this.load();
      } else {
        addListener(image, EVENT_LOAD, onLoad = this.load.bind(this), {
          once: true
        });

        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(function () {
          removeClass(image, CLASS_INVISIBLE);
          _this.timeout = false;
        }, 1000);
      }

      return this;
    },

    prev: function prev() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var index = this.index - 1;

      if (index < 0) {
        index = loop ? this.length - 1 : 0;
      }

      this.view(index);
      return this;
    },

    next: function next() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var maxIndex = this.length - 1;
      var index = this.index + 1;

      if (index > maxIndex) {
        index = loop ? 0 : maxIndex;
      }

      this.view(index);
      return this;
    },

    move: function move(offsetX, offsetY) {
      var imageData = this.imageData;
      this.moveTo(isUndefined(offsetX) ? offsetX : imageData.left + Number(offsetX), isUndefined(offsetY) ? offsetY : imageData.top + Number(offsetY));
      return this;
    },

    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var imageData = this.imageData;
      x = Number(x);
      y = Number(y);

      if (this.viewed && !this.played && this.options.movable) {
        var changed = false;

        if (isNumber(x)) {
          imageData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          imageData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderImage();
        }
      }

      return this;
    },

    zoom: function zoom(ratio) {
      var hasTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _originalEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var imageData = this.imageData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      this.zoomTo(imageData.width * ratio / imageData.naturalWidth, hasTooltip, _originalEvent);
      return this;
    },

    zoomTo: function zoomTo(ratio) {
      var _this2 = this;

      var hasTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _originalEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var _zoomable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var element = this.element,
          options = this.options,
          pointers = this.pointers,
          imageData = this.imageData;
      var width = imageData.width,
          height = imageData.height,
          left = imageData.left,
          top = imageData.top,
          naturalWidth = imageData.naturalWidth,
          naturalHeight = imageData.naturalHeight;
      ratio = Math.max(0, ratio);

      if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
        if (!_zoomable) {
          var minZoomRatio = Math.max(0.01, options.minZoomRatio);
          var maxZoomRatio = Math.min(100, options.maxZoomRatio);
          ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
        }

        if (_originalEvent && ratio > 0.95 && ratio < 1.05) {
          ratio = 1;
        }

        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        var offsetWidth = newWidth - width;
        var offsetHeight = newHeight - height;
        var oldRatio = width / naturalWidth;

        if (isFunction(options.zoom)) {
          addListener(element, EVENT_ZOOM, options.zoom, {
            once: true
          });
        }

        if (dispatchEvent(element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: oldRatio,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        this.zooming = true;

        if (_originalEvent) {
          var offset = getOffset(this.viewer);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          imageData.left -= offsetWidth * ((center.pageX - offset.left - left) / width);
          imageData.top -= offsetHeight * ((center.pageY - offset.top - top) / height);
        } else {
          imageData.left -= offsetWidth / 2;
          imageData.top -= offsetHeight / 2;
        }

        imageData.width = newWidth;
        imageData.height = newHeight;
        imageData.ratio = ratio;
        this.renderImage(function () {
          _this2.zooming = false;

          if (isFunction(options.zoomed)) {
            addListener(element, EVENT_ZOOMED, options.zoomed, {
              once: true
            });
          }

          dispatchEvent(element, EVENT_ZOOMED, {
            ratio: ratio,
            oldRatio: oldRatio,
            originalEvent: _originalEvent
          });
        });

        if (hasTooltip) {
          this.tooltip();
        }
      }

      return this;
    },

    rotate: function rotate(degree) {
      this.rotateTo((this.imageData.rotate || 0) + Number(degree));
      return this;
    },

    rotateTo: function rotateTo(degree) {
      var imageData = this.imageData;
      degree = Number(degree);

      if (isNumber(degree) && this.viewed && !this.played && this.options.rotatable) {
        imageData.rotate = degree;
        this.renderImage();
      }

      return this;
    },

    scaleX: function scaleX(_scaleX) {
      this.scale(_scaleX, this.imageData.scaleY);
      return this;
    },

    scaleY: function scaleY(_scaleY) {
      this.scale(this.imageData.scaleX, _scaleY);
      return this;
    },

    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.viewed && !this.played && this.options.scalable) {
        var changed = false;

        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          changed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          changed = true;
        }

        if (changed) {
          this.renderImage();
        }
      }

      return this;
    },

    play: function play() {
      var _this3 = this;

      var fullscreen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.isShown || this.played) {
        return this;
      }

      var options = this.options,
          player = this.player;
      var onLoad = this.loadImage.bind(this);
      var list = [];
      var total = 0;
      var index = 0;
      this.played = true;
      this.onLoadWhenPlay = onLoad;

      if (fullscreen) {
        this.requestFullscreen();
      }

      addClass(player, CLASS_SHOW);
      forEach(this.items, function (item, i) {
        var img = item.querySelector('img');
        var image = document.createElement('img');
        image.src = getData(img, 'originalUrl');
        image.alt = img.getAttribute('alt');
        total += 1;
        addClass(image, CLASS_FADE);
        toggleClass(image, CLASS_TRANSITION, options.transition);

        if (hasClass(item, CLASS_ACTIVE)) {
          addClass(image, CLASS_IN);
          index = i;
        }

        list.push(image);
        addListener(image, EVENT_LOAD, onLoad, {
          once: true
        });
        player.appendChild(image);
      });

      if (isNumber(options.interval) && options.interval > 0) {
        var play = function play() {
          _this3.playing = setTimeout(function () {
            removeClass(list[index], CLASS_IN);
            index += 1;
            index = index < total ? index : 0;
            addClass(list[index], CLASS_IN);
            play();
          }, options.interval);
        };

        if (total > 1) {
          play();
        }
      }

      return this;
    },

    stop: function stop() {
      var _this4 = this;

      if (!this.played) {
        return this;
      }

      var player = this.player;
      this.played = false;
      clearTimeout(this.playing);
      forEach(player.getElementsByTagName('img'), function (image) {
        removeListener(image, EVENT_LOAD, _this4.onLoadWhenPlay);
      });
      removeClass(player, CLASS_SHOW);
      player.innerHTML = '';
      this.exitFullscreen();
      return this;
    },

    full: function full() {
      var _this5 = this;

      var options = this.options,
          viewer = this.viewer,
          image = this.image,
          list = this.list;

      if (!this.isShown || this.played || this.fulled || !options.inline) {
        return this;
      }

      this.fulled = true;
      this.open();
      addClass(this.button, CLASS_FULLSCREEN_EXIT);

      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);

        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }

      addClass(viewer, CLASS_FIXED);
      viewer.setAttribute('style', '');
      setStyle(viewer, {
        zIndex: options.zIndex
      });
      this.initContainer();
      this.viewerData = assign({}, this.containerData);
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this5.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }

      return this;
    },

    exit: function exit() {
      var _this6 = this;

      var options = this.options,
          viewer = this.viewer,
          image = this.image,
          list = this.list;

      if (!this.isShown || this.played || !this.fulled || !options.inline) {
        return this;
      }

      this.fulled = false;
      this.close();
      removeClass(this.button, CLASS_FULLSCREEN_EXIT);

      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);

        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }

      removeClass(viewer, CLASS_FIXED);
      setStyle(viewer, {
        zIndex: options.zIndexInline
      });
      this.viewerData = assign({}, this.parentData);
      this.renderViewer();
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this6.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }

      return this;
    },

    tooltip: function tooltip() {
      var _this7 = this;

      var options = this.options,
          tooltipBox = this.tooltipBox,
          imageData = this.imageData;

      if (!this.viewed || this.played || !options.tooltip) {
        return this;
      }

      tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");

      if (!this.tooltipping) {
        if (options.transition) {
          if (this.fading) {
            dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
          }

          addClass(tooltipBox, CLASS_SHOW);
          addClass(tooltipBox, CLASS_FADE);
          addClass(tooltipBox, CLASS_TRANSITION);

          tooltipBox.offsetWidth;
          addClass(tooltipBox, CLASS_IN);
        } else {
          addClass(tooltipBox, CLASS_SHOW);
        }
      } else {
        clearTimeout(this.tooltipping);
      }

      this.tooltipping = setTimeout(function () {
        if (options.transition) {
          addListener(tooltipBox, EVENT_TRANSITION_END, function () {
            removeClass(tooltipBox, CLASS_SHOW);
            removeClass(tooltipBox, CLASS_FADE);
            removeClass(tooltipBox, CLASS_TRANSITION);
            _this7.fading = false;
          }, {
            once: true
          });
          removeClass(tooltipBox, CLASS_IN);
          _this7.fading = true;
        } else {
          removeClass(tooltipBox, CLASS_SHOW);
        }

        _this7.tooltipping = false;
      }, 1000);
      return this;
    },

    toggle: function toggle() {
      if (this.imageData.ratio === 1) {
        this.zoomTo(this.initialImageData.ratio, true);
      } else {
        this.zoomTo(1, true);
      }

      return this;
    },

    reset: function reset() {
      if (this.viewed && !this.played) {
        this.imageData = assign({}, this.initialImageData);
        this.renderImage();
      }

      return this;
    },

    update: function update() {
      var element = this.element,
          options = this.options,
          isImg = this.isImg;

      if (isImg && !element.parentNode) {
        return this.destroy();
      }

      var images = [];
      forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
        if (options.filter) {
          if (options.filter(image)) {
            images.push(image);
          }
        } else {
          images.push(image);
        }
      });

      if (!images.length) {
        return this;
      }

      this.images = images;
      this.length = images.length;

      if (this.ready) {
        var indexes = [];
        forEach(this.items, function (item, i) {
          var img = item.querySelector('img');
          var image = images[i];

          if (image) {
            if (image.src !== img.src) {
              indexes.push(i);
            }
          } else {
            indexes.push(i);
          }
        });
        setStyle(this.list, {
          width: 'auto'
        });
        this.initList();

        if (this.isShown) {
          if (this.length) {
            if (this.viewed) {
              var index = indexes.indexOf(this.index);

              if (index >= 0) {
                this.viewed = false;
                this.view(Math.max(this.index - (index + 1), 0));
              } else {
                addClass(this.items[this.index], CLASS_ACTIVE);
              }
            }
          } else {
            this.image = null;
            this.viewed = false;
            this.index = 0;
            this.imageData = {};
            this.canvas.innerHTML = '';
            this.title.innerHTML = '';
          }
        }
      } else {
        this.build();
      }

      return this;
    },

    destroy: function destroy() {
      var element = this.element,
          options = this.options;

      if (!element[NAMESPACE]) {
        return this;
      }

      this.destroyed = true;

      if (this.ready) {
        if (this.played) {
          this.stop();
        }

        if (options.inline) {
          if (this.fulled) {
            this.exit();
          }

          this.unbind();
        } else if (this.isShown) {
          if (this.viewing) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          }

          if (this.hiding) {
            this.transitioning.abort();
          }

          this.hidden();
        } else if (this.showing) {
          this.transitioning.abort();
          this.hidden();
        }

        this.ready = false;
        this.viewer.parentNode.removeChild(this.viewer);
      } else if (options.inline) {
        if (this.delaying) {
          this.delaying.abort();
        } else if (this.initializing) {
          this.initializing.abort();
        }
      }

      if (!options.inline) {
        removeListener(element, EVENT_CLICK, this.onStart);
      }

      element[NAMESPACE] = undefined;
      return this;
    }
  };

  var others = {
    open: function open() {
      var body = this.body;
      addClass(body, CLASS_OPEN);
      body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyPaddingRight) || 0), "px");
    },
    close: function close() {
      var body = this.body;
      removeClass(body, CLASS_OPEN);
      body.style.paddingRight = this.initialBodyPaddingRight;
    },
    shown: function shown() {
      var element = this.element,
          options = this.options;
      this.fulled = true;
      this.isShown = true;
      this.render();
      this.bind();
      this.showing = false;

      if (isFunction(options.shown)) {
        addListener(element, EVENT_SHOWN, options.shown, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_SHOWN) === false) {
        return;
      }

      if (this.ready && this.isShown && !this.hiding) {
        this.view(this.index);
      }
    },
    hidden: function hidden() {
      var element = this.element,
          options = this.options;
      this.fulled = false;
      this.viewed = false;
      this.isShown = false;
      this.close();
      this.unbind();
      addClass(this.viewer, CLASS_HIDE);
      this.resetList();
      this.resetImage();
      this.hiding = false;

      if (!this.destroyed) {
        if (isFunction(options.hidden)) {
          addListener(element, EVENT_HIDDEN, options.hidden, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_HIDDEN);
      }
    },
    requestFullscreen: function requestFullscreen() {
      var document = this.element.ownerDocument;

      if (this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        var documentElement = document.documentElement;

        if (documentElement.requestFullscreen) {
          documentElement.requestFullscreen();
        } else if (documentElement.webkitRequestFullscreen) {
          documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (documentElement.mozRequestFullScreen) {
          documentElement.mozRequestFullScreen();
        } else if (documentElement.msRequestFullscreen) {
          documentElement.msRequestFullscreen();
        }
      }
    },
    exitFullscreen: function exitFullscreen() {
      var document = this.element.ownerDocument;

      if (this.fulled && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    change: function change(event) {
      var options = this.options,
          pointers = this.pointers;
      var pointer = pointers[Object.keys(pointers)[0]];
      var offsetX = pointer ? pointer.endX - pointer.startX : 0;
      var offsetY = pointer ? pointer.endY - pointer.startY : 0;

      switch (this.action) {
        case ACTION_MOVE:
          this.move(offsetX, offsetY);
          break;


        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), false, event);
          break;

        case ACTION_SWITCH:
          {
            this.action = 'switched';
            var absoluteOffsetX = Math.abs(offsetX);

            if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
              this.pointers = {};

              if (offsetX > 1) {
                this.prev(options.loop);
              } else if (offsetX < -1) {
                this.next(options.loop);
              }
            }

            break;
          }

        default:
      }

      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    },
    isSwitchable: function isSwitchable() {
      var imageData = this.imageData,
          viewerData = this.viewerData;
      return this.length > 1 && imageData.left >= 0 && imageData.top >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
    }
  };

  var AnotherViewer = WINDOW.Viewer;

  var Viewer = function () {
    function Viewer(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Viewer);

      if (!element || element.nodeType !== 1) {
        throw new Error('The first argument is required and must be an element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.action = false;
      this.fading = false;
      this.fulled = false;
      this.hiding = false;
      this.imageClicked = false;
      this.imageData = {};
      this.index = this.options.initialViewIndex;
      this.isImg = false;
      this.isShown = false;
      this.length = 0;
      this.played = false;
      this.playing = false;
      this.pointers = {};
      this.ready = false;
      this.showing = false;
      this.timeout = false;
      this.tooltipping = false;
      this.viewed = false;
      this.viewing = false;
      this.wheeling = false;
      this.zooming = false;
      this.init();
    }

    _createClass(Viewer, [{
      key: "init",
      value: function init() {
        var _this = this;

        var element = this.element,
            options = this.options;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;
        var isImg = element.tagName.toLowerCase() === 'img';
        var images = [];
        forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
          if (isFunction(options.filter)) {
            if (options.filter.call(_this, image)) {
              images.push(image);
            }
          } else {
            images.push(image);
          }
        });
        this.isImg = isImg;
        this.length = images.length;
        this.images = images;
        var ownerDocument = element.ownerDocument;
        var body = ownerDocument.body || ownerDocument.documentElement;
        this.body = body;
        this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
        this.initialBodyPaddingRight = window.getComputedStyle(body).paddingRight;

        if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
          options.transition = false;
        }

        if (options.inline) {
          var count = 0;

          var progress = function progress() {
            count += 1;

            if (count === _this.length) {
              var timeout;
              _this.initializing = false;
              _this.delaying = {
                abort: function abort() {
                  clearTimeout(timeout);
                }
              };

              timeout = setTimeout(function () {
                _this.delaying = false;

                _this.build();
              }, 0);
            }
          };

          this.initializing = {
            abort: function abort() {
              forEach(images, function (image) {
                if (!image.complete) {
                  removeListener(image, EVENT_LOAD, progress);
                }
              });
            }
          };
          forEach(images, function (image) {
            if (image.complete) {
              progress();
            } else {
              addListener(image, EVENT_LOAD, progress, {
                once: true
              });
            }
          });
        } else {
          addListener(element, EVENT_CLICK, this.onStart = function (_ref) {
            var target = _ref.target;

            if (target.tagName.toLowerCase() === 'img' && (!isFunction(options.filter) || options.filter.call(_this, target))) {
              _this.view(_this.images.indexOf(target));
            }
          });
        }
      }
    }, {
      key: "build",
      value: function build() {
        if (this.ready) {
          return;
        }

        var element = this.element,
            options = this.options;
        var parent = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var viewer = template.querySelector(".".concat(NAMESPACE, "-container"));
        var title = viewer.querySelector(".".concat(NAMESPACE, "-title"));
        var toolbar = viewer.querySelector(".".concat(NAMESPACE, "-toolbar"));
        var navbar = viewer.querySelector(".".concat(NAMESPACE, "-navbar"));
        var button = viewer.querySelector(".".concat(NAMESPACE, "-button"));
        var canvas = viewer.querySelector(".".concat(NAMESPACE, "-canvas"));
        this.parent = parent;
        this.viewer = viewer;
        this.title = title;
        this.toolbar = toolbar;
        this.navbar = navbar;
        this.button = button;
        this.canvas = canvas;
        this.footer = viewer.querySelector(".".concat(NAMESPACE, "-footer"));
        this.tooltipBox = viewer.querySelector(".".concat(NAMESPACE, "-tooltip"));
        this.player = viewer.querySelector(".".concat(NAMESPACE, "-player"));
        this.list = viewer.querySelector(".".concat(NAMESPACE, "-list"));
        addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
        addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
        toggleClass(button, CLASS_HIDE, !options.button);

        if (options.backdrop) {
          addClass(viewer, "".concat(NAMESPACE, "-backdrop"));

          if (!options.inline && options.backdrop !== 'static') {
            setData(canvas, DATA_ACTION, 'hide');
          }
        }

        if (isString(options.className) && options.className) {
          options.className.split(REGEXP_SPACES).forEach(function (className) {
            addClass(viewer, className);
          });
        }

        if (options.toolbar) {
          var list = document.createElement('ul');
          var custom = isPlainObject(options.toolbar);
          var zoomButtons = BUTTONS.slice(0, 3);
          var rotateButtons = BUTTONS.slice(7, 9);
          var scaleButtons = BUTTONS.slice(9);

          if (!custom) {
            addClass(toolbar, getResponsiveClass(options.toolbar));
          }

          forEach(custom ? options.toolbar : BUTTONS, function (value, index) {
            var deep = custom && isPlainObject(value);
            var name = custom ? hyphenate(index) : value;
            var show = deep && !isUndefined(value.show) ? value.show : value;

            if (!show || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
              return;
            }

            var size = deep && !isUndefined(value.size) ? value.size : value;
            var click = deep && !isUndefined(value.click) ? value.click : value;
            var item = document.createElement('li');
            item.setAttribute('role', 'button');
            addClass(item, "".concat(NAMESPACE, "-").concat(name));

            if (!isFunction(click)) {
              setData(item, DATA_ACTION, name);
            }

            if (isNumber(show)) {
              addClass(item, getResponsiveClass(show));
            }

            if (['small', 'large'].indexOf(size) !== -1) {
              addClass(item, "".concat(NAMESPACE, "-").concat(size));
            } else if (name === 'play') {
              addClass(item, "".concat(NAMESPACE, "-large"));
            }

            if (isFunction(click)) {
              addListener(item, EVENT_CLICK, click);
            }

            list.appendChild(item);
          });
          toolbar.appendChild(list);
        } else {
          addClass(toolbar, CLASS_HIDE);
        }

        if (!options.rotatable) {
          var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
          addClass(rotates, CLASS_INVISIBLE);
          forEach(rotates, function (rotate) {
            toolbar.appendChild(rotate);
          });
        }

        if (options.inline) {
          addClass(button, CLASS_FULLSCREEN);
          setStyle(viewer, {
            zIndex: options.zIndexInline
          });

          if (window.getComputedStyle(parent).position === 'static') {
            setStyle(parent, {
              position: 'relative'
            });
          }

          parent.insertBefore(viewer, element.nextSibling);
        } else {
          addClass(button, CLASS_CLOSE);
          addClass(viewer, CLASS_FIXED);
          addClass(viewer, CLASS_FADE);
          addClass(viewer, CLASS_HIDE);
          setStyle(viewer, {
            zIndex: options.zIndex
          });
          var container = options.container;

          if (isString(container)) {
            container = element.ownerDocument.querySelector(container);
          }

          if (!container) {
            container = this.body;
          }

          container.appendChild(viewer);
        }

        if (options.inline) {
          this.render();
          this.bind();
          this.isShown = true;
        }

        this.ready = true;

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        if (dispatchEvent(element, EVENT_READY) === false) {
          this.ready = false;
          return;
        }

        if (this.ready && options.inline) {
          this.view(this.index);
        }
      }
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Viewer = AnotherViewer;
        return Viewer;
      }
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Viewer;
  }();

  assign(Viewer.prototype, render, events, handlers, methods, others);

  return Viewer;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_throttle_debounce__ = __webpack_require__(5);



var install = function install(Vue, _ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? 'viewer' : _ref$name,
      _ref$debug = _ref.debug,
      debug = _ref$debug === undefined ? false : _ref$debug;

  function createViewer(el, options) {
    Vue.nextTick(function () {
      destroyViewer(el);
      el['$' + name] = new __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs___default.a(el, options);
      log('viewer created');
    });
  }

  function createObserver(el, options, debouncedCreateViewer) {
    destroyObserver(el);
    var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
    if (!MutationObserver) {
      log('observer not supported');
      return;
    }
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('viewer mutation:' + mutation.type);
        debouncedCreateViewer(el, options);
      });
    });
    var config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(el, config);
    el['$viewerMutationObserver'] = observer;
    log('observer created');
  }

  function createWatcher(el, _ref2, vnode, debouncedCreateViewer) {
    var expression = _ref2.expression;

    var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
    if (!expression || !simplePathRE.test(expression)) {
      log('only simple dot-delimited paths can create watcher');
      return;
    }
    el['$viewerUnwatch'] = vnode.context.$watch(expression, function (newVal, oldVal) {
      log('change detected by watcher: ', expression);
      debouncedCreateViewer(el, newVal);
    }, {
      deep: true
    });
    log('watcher created, expression: ', expression);
  }

  function destroyViewer(el) {
    if (!el['$' + name]) {
      return;
    }
    el['$' + name].destroy();
    delete el['$' + name];
    log('viewer destroyed');
  }

  function destroyObserver(el) {
    if (!el['$viewerMutationObserver']) {
      return;
    }
    el['$viewerMutationObserver'].disconnect();
    delete el['$viewerMutationObserver'];
    log('observer destroyed');
  }

  function destroyWatcher(el) {
    if (!el['$viewerUnwatch']) {
      return;
    }
    el['$viewerUnwatch']();
    delete el['$viewerUnwatch'];
    log('watcher destroyed');
  }

  function log() {
    var _console;

    debug && (_console = console).log.apply(_console, arguments);
  }

  Vue.directive('viewer', {
    bind: function bind(el, binding, vnode) {
      log('viewer bind');
      var debouncedCreateViewer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_throttle_debounce__["a" /* debounce */])(50, createViewer);
      debouncedCreateViewer(el, binding.value);

      createWatcher(el, binding, vnode, debouncedCreateViewer);

      if (!binding.modifiers.static) {
        createObserver(el, binding.value, debouncedCreateViewer);
      }
    },
    unbind: function unbind(el, binding) {
      log('viewer unbind');

      destroyObserver(el);

      destroyWatcher(el);

      destroyViewer(el);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  install: install
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;

function extend() {
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  }

  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/shin/dev/v-viewer/src/component.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3091014c", Component.options)
  } else {
    hotAPI.reload("data-v-3091014c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photocreate_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photocreate_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__photocreate_viewerjs__);





/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'viewer' : _ref$name,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        defaultOptions = _ref.defaultOptions;

    __WEBPACK_IMPORTED_MODULE_3__photocreate_viewerjs___default.a.setDefaults(defaultOptions);

    Vue.component(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__component_vue___default.a, { name: name }));
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directive__["a" /* default */], { name: name, debug: debug });
  },
  setDefaults: function setDefaults(defaultOptions) {
    __WEBPACK_IMPORTED_MODULE_3__photocreate_viewerjs___default.a.setDefaults(defaultOptions);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });

function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;

  var lastExec = 0;

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    }

    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel;

  return wrapper;
}

function debounce(delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs__);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: {
      type: Array
    },
    trigger: {},
    options: {
      type: Object
    }
  },

  data: function data() {
    return {};
  },


  computed: {},

  methods: {
    createViewer: function createViewer() {
      this.$viewer && this.$viewer.destroy();
      this.$viewer = new __WEBPACK_IMPORTED_MODULE_0__photocreate_viewerjs___default.a(this.$el, this.options);
      this.$emit('inited', this.$viewer);
    }
  },

  watch: {
    images: function images() {
      var _this = this;

      this.$nextTick(function () {
        _this.createViewer();
      });
    },

    trigger: {
      handler: function handler() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.createViewer();
        });
      },
      deep: true
    },
    options: {
      handler: function handler() {
        var _this3 = this;

        this.$nextTick(function () {
          _this3.createViewer();
        });
      },
      deep: true
    }
  },

  mounted: function mounted() {
    this.createViewer();
  },
  destroyed: function destroyed() {
    this.$viewer && this.$viewer.destroy();
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

g = function () {
	return this;
}();

try {
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

module.exports = g;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default", null, {
    "images": _vm.images,
    "options": _vm.options
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3091014c", module.exports)
  }
}

/***/ })
/******/ ]);
});