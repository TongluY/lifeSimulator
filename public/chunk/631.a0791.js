"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[631],{4631:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Achievement)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1058);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2165);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3948);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Achievement = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Achievement, _ui$view$DefaultTheme);\n\n  var _super = _createSuper(Achievement);\n\n  function Achievement() {\n    var _this;\n\n    _classCallCheck(this, Achievement);\n\n    _this = _super.call(this);\n\n    _this.btnBack.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      return $ui.switchView(UI.pages.MAIN);\n    });\n\n    _this.listAchievements.renderHandler = new Laya.Handler(_assertThisInitialized(_this), _this.onRenderAchievement);\n    _this.listAchievements.scrollBar.elasticDistance = 150;\n    return _this;\n  }\n\n  _createClass(Achievement, [{\n    key: "init",\n    value: function init() {\n      var _core = core,\n          statistics = _core.statistics,\n          achievements = _core.achievements,\n          pt = _core.PropertyTypes;\n      this.listAchievements.array = achievements;\n      this.labRemakeTimes.text = $_.format($lang.F_RemakeTimes, statistics[pt.TMS].value);\n      this.labRemakeTimesJudge.text = statistics[pt.TMS].judge;\n      $_.deepMapSet(this.boxRemakeTimes, $ui.common.achievement[statistics[pt.TMS].grade]);\n      this.labAchievementCount.text = $_.format($lang.F_AchievementCount, statistics[pt.CACHV].value);\n      this.labAchievementCountJudge.text = statistics[pt.CACHV].judge;\n      $_.deepMapSet(this.boxAchievementCount, $ui.common.achievement[statistics[pt.CACHV].grade]);\n      this.labEventRate.text = parseInt(statistics[pt.REVT].value * 100) + \'%\';\n      this.prgEventRate.scaleX = statistics[pt.REVT].value;\n      $_.deepMapSet(this.boxEventRate, $ui.common.achievement[statistics[pt.REVT].grade]);\n      this.labTalentRate.text = parseInt(statistics[pt.RTLT].value * 100) + \'%\';\n      this.prgTalentRate.scaleX = statistics[pt.RTLT].value;\n      $_.deepMapSet(this.boxTalentRate, $ui.common.achievement[statistics[pt.RTLT].grade]);\n    }\n  }, {\n    key: "onRenderAchievement",\n    value: function onRenderAchievement(box) {\n      var dataSource = box.dataSource;\n      var name = box.getChildByName(\'name\');\n      var description = box.getChildByName(\'description\');\n      var boxMask = box.getChildByName(\'boxMask\');\n      $_.deepMapSet(box, $ui.common.achievement[dataSource.grade]);\n      name.color = description.color = $ui.common.defaultFontColor;\n\n      if (dataSource.isAchieved) {\n        name.text = dataSource.name;\n        description.text = dataSource.description;\n        boxMask.visible = false;\n      } else {\n        name.text = dataSource.hide ? \'???\' : dataSource.name;\n        description.text = dataSource.hide ? \'???\' : dataSource.description;\n        boxMask.visible = true;\n      }\n    }\n  }]);\n\n  return Achievement;\n}(ui.view.DefaultTheme.AchievementUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYzMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBOztBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBSkE7QUFLQTs7OztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWxEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvZGVmYXVsdC9hY2hpZXZlbWVudC5qcz80Mzg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjaGlldmVtZW50IGV4dGVuZHMgdWkudmlldy5EZWZhdWx0VGhlbWUuQWNoaWV2ZW1lbnRVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjay5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKSA9PiAkdWkuc3dpdGNoVmlldyhVSS5wYWdlcy5NQUlOKSk7XHJcbiAgICAgICAgdGhpcy5saXN0QWNoaWV2ZW1lbnRzLnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25SZW5kZXJBY2hpZXZlbWVudCk7XHJcbiAgICAgICAgdGhpcy5saXN0QWNoaWV2ZW1lbnRzLnNjcm9sbEJhci5lbGFzdGljRGlzdGFuY2UgPSAxNTA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge3N0YXRpc3RpY3MsIGFjaGlldmVtZW50cywgUHJvcGVydHlUeXBlczogcHR9ID0gY29yZTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0QWNoaWV2ZW1lbnRzLmFycmF5ID0gYWNoaWV2ZW1lbnRzO1xyXG5cclxuICAgICAgICB0aGlzLmxhYlJlbWFrZVRpbWVzLnRleHQgPSAkXy5mb3JtYXQoJGxhbmcuRl9SZW1ha2VUaW1lcywgc3RhdGlzdGljc1twdC5UTVNdLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmxhYlJlbWFrZVRpbWVzSnVkZ2UudGV4dCA9IHN0YXRpc3RpY3NbcHQuVE1TXS5qdWRnZTtcclxuICAgICAgICAkXy5kZWVwTWFwU2V0KHRoaXMuYm94UmVtYWtlVGltZXMsICR1aS5jb21tb24uYWNoaWV2ZW1lbnRbc3RhdGlzdGljc1twdC5UTVNdLmdyYWRlXSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFiQWNoaWV2ZW1lbnRDb3VudC50ZXh0ID0gJF8uZm9ybWF0KCRsYW5nLkZfQWNoaWV2ZW1lbnRDb3VudCwgc3RhdGlzdGljc1twdC5DQUNIVl0udmFsdWUpO1xyXG4gICAgICAgIHRoaXMubGFiQWNoaWV2ZW1lbnRDb3VudEp1ZGdlLnRleHQgPSBzdGF0aXN0aWNzW3B0LkNBQ0hWXS5qdWRnZTtcclxuICAgICAgICAkXy5kZWVwTWFwU2V0KHRoaXMuYm94QWNoaWV2ZW1lbnRDb3VudCwgJHVpLmNvbW1vbi5hY2hpZXZlbWVudFtzdGF0aXN0aWNzW3B0LkNBQ0hWXS5ncmFkZV0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYkV2ZW50UmF0ZS50ZXh0ID0gcGFyc2VJbnQoc3RhdGlzdGljc1twdC5SRVZUXS52YWx1ZSoxMDApKyclJztcclxuICAgICAgICB0aGlzLnByZ0V2ZW50UmF0ZS5zY2FsZVggPSBzdGF0aXN0aWNzW3B0LlJFVlRdLnZhbHVlO1xyXG4gICAgICAgICRfLmRlZXBNYXBTZXQodGhpcy5ib3hFdmVudFJhdGUsICR1aS5jb21tb24uYWNoaWV2ZW1lbnRbc3RhdGlzdGljc1twdC5SRVZUXS5ncmFkZV0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhYlRhbGVudFJhdGUudGV4dCA9IHBhcnNlSW50KHN0YXRpc3RpY3NbcHQuUlRMVF0udmFsdWUqMTAwKSsnJSc7XHJcbiAgICAgICAgdGhpcy5wcmdUYWxlbnRSYXRlLnNjYWxlWCA9IHN0YXRpc3RpY3NbcHQuUlRMVF0udmFsdWU7XHJcbiAgICAgICAgJF8uZGVlcE1hcFNldCh0aGlzLmJveFRhbGVudFJhdGUsICR1aS5jb21tb24uYWNoaWV2ZW1lbnRbc3RhdGlzdGljc1twdC5SVExUXS5ncmFkZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVuZGVyQWNoaWV2ZW1lbnQoYm94KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGJveC5kYXRhU291cmNlO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gYm94LmdldENoaWxkQnlOYW1lKCduYW1lJyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgYm94TWFzayA9IGJveC5nZXRDaGlsZEJ5TmFtZSgnYm94TWFzaycpO1xyXG5cclxuICAgICAgICAkXy5kZWVwTWFwU2V0KGJveCwgJHVpLmNvbW1vbi5hY2hpZXZlbWVudFtkYXRhU291cmNlLmdyYWRlXSk7XHJcbiAgICAgICAgbmFtZS5jb2xvciA9IGRlc2NyaXB0aW9uLmNvbG9yID0gJHVpLmNvbW1vbi5kZWZhdWx0Rm9udENvbG9yO1xyXG5cclxuICAgICAgICBpZihkYXRhU291cmNlLmlzQWNoaWV2ZWQpIHtcclxuICAgICAgICAgICAgbmFtZS50ZXh0ID0gZGF0YVNvdXJjZS5uYW1lO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0ID0gZGF0YVNvdXJjZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgYm94TWFzay52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmFtZS50ZXh0ID0gZGF0YVNvdXJjZS5oaWRlPyAnPz8/JzogZGF0YVNvdXJjZS5uYW1lO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0ID0gZGF0YVNvdXJjZS5oaWRlPyAnPz8/JzogZGF0YVNvdXJjZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgYm94TWFzay52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4631\n')}}]);