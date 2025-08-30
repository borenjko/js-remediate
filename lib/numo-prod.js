"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.reflect.set.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else _defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getFirstFocusableElement() {
  var focusableElements = document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length > 0) {
    return focusableElements[0];
  } else {
    return null; // No focusable elements found
  }
}
function getNonAriaHiddenTextOfElement(element) {
  if (element.nodeType == 3) {
    return element.textContent;
  }
  if (!element.childNodes) return '';
  var returnText = '';
  var _iterator = _createForOfIteratorHelper(element.childNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elCurrent = _step.value;
      if (elCurrent.nodeType == 1 && elCurrent.getAttribute('aria-hidden') !== 'true') {
        returnText += getNonAriaHiddenTextOfElement(elCurrent);
      } else if (elCurrent.nodeType == 3) {
        returnText += elCurrent.textContent;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnText;
}
var _node = /*#__PURE__*/new WeakMap();
var BugFix = /*#__PURE__*/function () {
  function BugFix(DOMNode) {
    _classCallCheck(this, BugFix);
    _classPrivateFieldInitSpec(this, _node, void 0);
    _classPrivateFieldSet(_node, this, DOMNode);
  }
  return _createClass(BugFix, [{
    key: "DOMNode",
    get: function get() {
      return _classPrivateFieldGet(_node, this);
    }
  }, {
    key: "testIfExists",
    value: function testIfExists() {}
  }, {
    key: "fix",
    value: function fix() {
      if (this.node) {
        this.fixCore();
      }
    }
  }]);
}();
var BugFixScrolltoTopFocusing = /*#__PURE__*/function (_BugFix2) {
  function BugFixScrolltoTopFocusing() {
    _classCallCheck(this, BugFixScrolltoTopFocusing);
    return _callSuper(this, BugFixScrolltoTopFocusing, arguments);
  }
  _inherits(BugFixScrolltoTopFocusing, _BugFix2);
  return _createClass(BugFixScrolltoTopFocusing, [{
    key: "fixCore",
    value: function fixCore() {
      _superPropGet(BugFixScrolltoTopFocusing, "DOMNode", this, 1).addEventListener('click', function () {
        getFirstFocusableElement().focus();
      });
    }
  }]);
}(BugFix);
var BugIncorrectSkipLinkOnNumo = /*#__PURE__*/function (_BugFix3) {
  function BugIncorrectSkipLinkOnNumo() {
    _classCallCheck(this, BugIncorrectSkipLinkOnNumo);
    return _callSuper(this, BugIncorrectSkipLinkOnNumo, arguments);
  }
  _inherits(BugIncorrectSkipLinkOnNumo, _BugFix3);
  return _createClass(BugIncorrectSkipLinkOnNumo, [{
    key: "fixCore",
    value: function fixCore() {
      _superPropGet(BugIncorrectSkipLinkOnNumo, "DOMNode", this, 1).classList.add('skip-to-content-link');
      _superPropGet(BugIncorrectSkipLinkOnNumo, "DOMNode", this, 1).style.removeProperty('visibility');
      _superPropGet(BugIncorrectSkipLinkOnNumo, "DOMNode", this, 1).style.backgroundColor = 'white';
      _superPropGet(BugIncorrectSkipLinkOnNumo, "DOMNode", this, 1).style.padding = '10px';
      _superPropGet(BugIncorrectSkipLinkOnNumo, "DOMNode", this, 1).tabIndex = '0';
    }
  }]);
}(BugFix);
var _nodes = /*#__PURE__*/new WeakMap();
var BugFixMultiple = /*#__PURE__*/function () {
  function BugFixMultiple() {
    var cssSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    _classCallCheck(this, BugFixMultiple);
    _classPrivateFieldInitSpec(this, _nodes, []);
    if (cssSelector) {
      _classPrivateFieldSet(_nodes, this, document.querySelectorAll(cssSelector));
    } else {
      this.findAll();
    }
  }
  return _createClass(BugFixMultiple, [{
    key: "DOMNodes",
    get: function get() {
      return _classPrivateFieldGet(_nodes, this);
    },
    set: function set(value) {
      _classPrivateFieldSet(_nodes, this, value);
    }
  }, {
    key: "fix",
    value: function fix() {
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(_nodes, this)),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var elem = _step2.value;
          if (elem.nodeType == 1) this.fixSingle(elem);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}();
var BugBlocksInA = /*#__PURE__*/function (_BugFixMultiple2) {
  function BugBlocksInA() {
    _classCallCheck(this, BugBlocksInA);
    return _callSuper(this, BugBlocksInA, arguments);
  }
  _inherits(BugBlocksInA, _BugFixMultiple2);
  return _createClass(BugBlocksInA, [{
    key: "findAll",
    value: function findAll() {
      _superPropSet(BugBlocksInA, "DOMNodes", document.querySelectorAll('a:has(span), a:has(div), a:has(h1), a:has(h2), a:has(h3), a:has(h4), a:has(h5), a:has(h6), a:has(p)'), this, 1, 1);
    }
  }, {
    key: "fixSingle",
    value: function fixSingle(node) {
      node.setAttribute('aria-label', getNonAriaHiddenTextOfElement(node));
    }
  }]);
}(BugFixMultiple);
var BugBlocksInH1 = /*#__PURE__*/function (_BugFixMultiple3) {
  function BugBlocksInH1() {
    _classCallCheck(this, BugBlocksInH1);
    return _callSuper(this, BugBlocksInH1, arguments);
  }
  _inherits(BugBlocksInH1, _BugFixMultiple3);
  return _createClass(BugBlocksInH1, [{
    key: "findAll",
    value: function findAll() {
      _superPropSet(BugBlocksInH1, "DOMNodes", document.querySelectorAll('h1:has(span), h1:has(div)'), this, 1, 1);
    }
  }, {
    key: "fixSingle",
    value: function fixSingle(node) {
      node.setAttribute('aria-label', getNonAriaHiddenTextOfElement(node));
    }
  }]);
}(BugFixMultiple);
var _lvl = /*#__PURE__*/new WeakMap();
var BugFixAssignHeadingWithLvl = /*#__PURE__*/function (_BugFix4) {
  function BugFixAssignHeadingWithLvl() {
    var _this;
    _classCallCheck(this, BugFixAssignHeadingWithLvl);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, BugFixAssignHeadingWithLvl, [].concat(args));
    _classPrivateFieldInitSpec(_this, _lvl, 2);
    return _this;
  }
  _inherits(BugFixAssignHeadingWithLvl, _BugFix4);
  return _createClass(BugFixAssignHeadingWithLvl, [{
    key: "hLevel",
    set: function set() {
      var lvl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      _classPrivateFieldSet(_lvl, this, lvl);
    }
  }, {
    key: "fixCore",
    value: function fixCore() {
      _superPropGet(BugFixAssignHeadingWithLvl, "DOMNode", this, 1).role = 'heading';
      _superPropGet(BugFixAssignHeadingWithLvl, "DOMNode", this, 1).setAttribute('aria-level', _classPrivateFieldGet(_lvl, this));
    }
  }]);
}(BugFix);
var BugFixAddToAnyKitFixOpenInNewTab = /*#__PURE__*/function (_BugFixMultiple4) {
  function BugFixAddToAnyKitFixOpenInNewTab() {
    _classCallCheck(this, BugFixAddToAnyKitFixOpenInNewTab);
    return _callSuper(this, BugFixAddToAnyKitFixOpenInNewTab, arguments);
  }
  _inherits(BugFixAddToAnyKitFixOpenInNewTab, _BugFixMultiple4);
  return _createClass(BugFixAddToAnyKitFixOpenInNewTab, [{
    key: "findAll",
    value: function findAll() {
      _superPropSet(BugFixAddToAnyKitFixOpenInNewTab, "DOMNodes", document.querySelectorAll('.a2a_kit'), this, 1, 1);
    }
  }, {
    key: "fixSingle",
    value: function fixSingle(node) {
      var linksHere = node.querySelectorAll('a');
      var _iterator3 = _createForOfIteratorHelper(linksHere),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var link = _step3.value;
          link.removeAttribute('aria-label');
          var inNewTab = document.createElement('span');
          inNewTab.classList.add('sr-only');
          inNewTab.classList.add('visually-hidden');
          inNewTab.innerText = '(відкривається в новій вкладці)';
          link.querySelector('span.a2a_label');
          link.appendChild(inNewTab);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
}(BugFixMultiple);
var BugFixNumoSkillsSetCollapsedPseudoSectionsRND = /*#__PURE__*/function (_BugFixMultiple5) {
  function BugFixNumoSkillsSetCollapsedPseudoSectionsRND() {
    _classCallCheck(this, BugFixNumoSkillsSetCollapsedPseudoSectionsRND);
    return _callSuper(this, BugFixNumoSkillsSetCollapsedPseudoSectionsRND, arguments);
  }
  _inherits(BugFixNumoSkillsSetCollapsedPseudoSectionsRND, _BugFixMultiple5);
  return _createClass(BugFixNumoSkillsSetCollapsedPseudoSectionsRND, [{
    key: "findAll",
    value: function findAll() {
      var main = document.getElementById("main");
      if (main.className == "skill-page") {
        _superPropSet(BugFixNumoSkillsSetCollapsedPseudoSectionsRND, "DOMNodes", main.querySelectorAll('.background-blured .container section'), this, 1, 1);
      }
    }
  }, {
    key: "fixSingle",
    value: function fixSingle(node) {
      node.role = 'group';
      var becomesButton = node.querySelector('.collapse-panel-caret');
      if (becomesButton) {
        nodeCollapsion = node.querySelector('div.collapse');
        becomesButton.role = 'button';
        becomesButton.setAttribute('aria-controls', nodeCollapsion.id);
        becomesButton.setAttribute('aria-expanded', 'false');
      }
    }
  }]);
}(BugFixMultiple);
var BugFixLatinInUk = /*#__PURE__*/function (_BugFixMultiple6) {
  function BugFixLatinInUk() {
    _classCallCheck(this, BugFixLatinInUk);
    return _callSuper(this, BugFixLatinInUk, arguments);
  }
  _inherits(BugFixLatinInUk, _BugFixMultiple6);
  return _createClass(BugFixLatinInUk, [{
    key: "findAll",
    value: function findAll() {
      var htmlLang = document.documentElement.lang;
      if (htmlLang == 'uk') {
        //document.createTreeWalker(document.body, 0x1, getUk)
        // !!!stodo
      }
    }
  }]);
}(BugFixMultiple);
var BugFixAriaCurrents = /*#__PURE__*/function (_BugFixMultiple7) {
  function BugFixAriaCurrents() {
    _classCallCheck(this, BugFixAriaCurrents);
    return _callSuper(this, BugFixAriaCurrents, arguments);
  }
  _inherits(BugFixAriaCurrents, _BugFixMultiple7);
  return _createClass(BugFixAriaCurrents, [{
    key: "findAll",
    value: function findAll() {
      _superPropSet(BugFixAriaCurrents, "DOMNodes", document.querySelectorAll('a[href="' + location.pathname + '"'), this, 1, 1);
    }
  }, {
    key: "fixSingle",
    value: function fixSingle(node) {
      node.setAttribute('aria-current', 'page');
    }
  }]);
}(BugFixMultiple);
var _nodeButton = /*#__PURE__*/new WeakMap();
var _nodeBecomesModal = /*#__PURE__*/new WeakMap();
var _newIdForButton = /*#__PURE__*/new WeakMap();
var BugFixButtonNotConnectedToRealModal = /*#__PURE__*/function (_BugFix5) {
  function BugFixButtonNotConnectedToRealModal(DOMNodeButton, DOMNodeBecomesModal) {
    var _this2;
    var newIdForbutton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    _classCallCheck(this, BugFixButtonNotConnectedToRealModal);
    _this2 = _callSuper(this, BugFixButtonNotConnectedToRealModal, [DOMNodeButton]);
    _classPrivateFieldInitSpec(_this2, _nodeButton, void 0);
    _classPrivateFieldInitSpec(_this2, _nodeBecomesModal, void 0);
    _classPrivateFieldInitSpec(_this2, _newIdForButton, void 0);
    _classPrivateFieldSet(_nodeButton, _this2, DOMNodeButton);
    _classPrivateFieldSet(_nodeBecomesModal, _this2, DOMNodeBecomesModal);
    _classPrivateFieldSet(_newIdForButton, _this2, newIdForbutton);
    return _this2;
  }
  _inherits(BugFixButtonNotConnectedToRealModal, _BugFix5);
  return _createClass(BugFixButtonNotConnectedToRealModal, [{
    key: "fixCore",
    value: function fixCore() {
      _classPrivateFieldGet(_nodeBecomesModal, this).setAttribute('role', 'dialog');
      _classPrivateFieldGet(_nodeBecomesModal, this).setAttribute('aria-modal', 'true');
      if (!_classPrivateFieldGet(_nodeButton, this).id) {
        if (!_classPrivateFieldGet(_newIdForButton, this)) {
          _classPrivateFieldSet(_newIdForButton, this, 'btn' + Math.random());
        }
        _classPrivateFieldGet(_nodeButton, this).id = _classPrivateFieldGet(_newIdForButton, this);
      }
      _classPrivateFieldGet(_nodeBecomesModal, this).setAttribute('aria-labelledby', _classPrivateFieldGet(_nodeButton, this).id);
    }
  }]);
}(BugFix);
var BugFixNumoBotFixLinkForScreenReader = /*#__PURE__*/function (_BugFix6) {
  function BugFixNumoBotFixLinkForScreenReader() {
    _classCallCheck(this, BugFixNumoBotFixLinkForScreenReader);
    return _callSuper(this, BugFixNumoBotFixLinkForScreenReader, arguments);
  }
  _inherits(BugFixNumoBotFixLinkForScreenReader, _BugFix6);
  return _createClass(BugFixNumoBotFixLinkForScreenReader, [{
    key: "fixCore",
    value: function fixCore() {
      _superPropGet(BugFixNumoBotFixLinkForScreenReader, "DOMNode", this, 1).removeAttribute('aria-label');
      _superPropGet(BugFixNumoBotFixLinkForScreenReader, "DOMNode", this, 1).firstElementChild.alt = 'Нумо-бот. Помічник для батьків дошкільняти. Каталог порад. Опитування. Корисні поради (відкривається в новій вкладці).';
    }
  }]);
}(BugFix); //var fixingScrollToBtnFocusing = new BuxFixScrolltoTopFocusing(document.getElementById('scrollToTopBtn'));
//fixingScrollToBtnFocusing.fix();
document.addEventListener('DOMContentLoaded', function () {
  var fixingSkipLink = new BugIncorrectSkipLinkOnNumo(document.querySelector('.skip-link'));
  fixingSkipLink.fix();
  var fixingBlockLinks = new BugBlocksInA();
  fixingBlockLinks.fix();
  var fixingH1Complicated = new BugBlocksInH1();
  fixingH1Complicated.fix();
  var fixingBugSetHLvl = new BugFixAssignHeadingWithLvl(document.querySelector('main .background-blured .styled-title .line'));
  fixingBugSetHLvl.fix();
  var fixingA2A = new BugFixAddToAnyKitFixOpenInNewTab();
  fixingA2A.fix();
  var fixingRNDskilklsExpanding = new BugFixNumoSkillsSetCollapsedPseudoSectionsRND();
  fixingRNDskilklsExpanding.fix();
  var fixingQuizModal = new BugFixButtonNotConnectedToRealModal(document.querySelector('button[data-target="3"]'), document.querySelector('div[data-test="3"]'), 'quiz');
  fixingQuizModal.fix();
  var fixingNumoBotImg = new BugFixNumoBotFixLinkForScreenReader(document.querySelector('a[href="https://linktr.ee/numo_bot"]'));
  fixingNumoBotImg.fix();
  var fixingAriaCurrents = new BugFixAriaCurrents();
  fixingAriaCurrents.fix();
});