function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _templateObject9() {
  var data = _taggedTemplateLiteral([":\u241F972cb0cf3e442f7b1c00d7dab168ac08d6bdf20c\u241F3574833283807905682:Updated: ", ":ICU:\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([":\u241F7151c2e67748b726f0864fc443861d45df21d706\u241F706522873846283432:{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {{INTERPOLATION} minutes ago by {VAR_SELECT, select, male {male} female {female} other {other}}}}"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([":\u241Ff99f34ac9bd4606345071bd813858dec29f3b7d1\u241F8511147241295446916:The author is ", ":ICU:"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([":\u241Feff74b75ab7364b6fa888f1cbfae901aaaf02295\u241F7842238767399919809:{VAR_SELECT, select, male {male} female {female} other {other}}"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([":\u241Fd69f6b42305f49332026fef24b40227f02e34594\u241F3813479775021432189:Updated ", ":ICU:"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([":\u241F5a134dee893586d02bffc9611056b9cadf9abfad\u241F6137860789874441254:{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {{INTERPOLATION} minutes ago}}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([":\u241F701174153757adf13e7c24a248c8a873ac9f5193\u241F392942015236586892:Angular logo"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([":\u241Fba0cc104d3d69bf669f97b8d96a4c5d8d9559aa3\u241F5206857922697139278:I don't output any element"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([":User welcome|An introduction header for this sample@@introductionHeader\u241F7daaa24134d49af1696effa4669bae5f24025b72\u241F272111633704838090: Hello i18n!\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var I18N_0;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @desc An introduction header for this sample
       * @meaning User welcome
       */
      var MSG_EXTERNAL_introductionHeader$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg(" Hello i18n!\n");
      I18N_0 = MSG_EXTERNAL_introductionHeader$$SRC_APP_APP_COMPONENT_TS_1;
    } else {
      I18N_0 = "\n    \u4F60\u597D Angular i18n\uFF01\n";
    }

    var I18N_2;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_5206857922697139278$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg("I don't output any element");
      I18N_2 = MSG_EXTERNAL_5206857922697139278$$SRC_APP_APP_COMPONENT_TS_3;
    } else {
      I18N_2 = "Je n'affiche aucun \xE9l\xE9ment";
    }

    var I18N_4;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_392942015236586892$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg("Angular logo");
      I18N_4 = MSG_EXTERNAL_392942015236586892$$SRC_APP_APP_COMPONENT_TS_5;
    } else {
      I18N_4 = "Logo d'Angular";
    }

    var _c6 = ["title", I18N_4];
    var I18N_8;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_6137860789874441254$$SRC_APP_APP_COMPONENT_TS_9 = goog.getMsg("{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {{INTERPOLATION} minutes ago}}");
      I18N_8 = MSG_EXTERNAL_6137860789874441254$$SRC_APP_APP_COMPONENT_TS_9;
    } else {
      I18N_8 = "{VAR_PLURAL, plural, =0 {\u73B0\u5728} =1 {\u4E00\u5206\u949F\u524D} other {{INTERPOLATION} \u5206\u949F\u524D}}";
    }

    I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8, {
      "VAR_PLURAL": "\uFFFD0\uFFFD",
      "INTERPOLATION": "\uFFFD1\uFFFD"
    });
    var I18N_7;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_3813479775021432189$$SRC_APP_APP_COMPONENT_TS_10 = goog.getMsg("Updated {$icu}", {
        "icu": I18N_8
      });
      I18N_7 = MSG_EXTERNAL_3813479775021432189$$SRC_APP_APP_COMPONENT_TS_10;
    } else {
      I18N_7 = "\u66F4\u65B0 " + I18N_8 + "";
    }

    var I18N_12;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_7842238767399919809$$SRC_APP_APP_COMPONENT_TS_13 = goog.getMsg("{VAR_SELECT, select, male {male} female {female} other {other}}");
      I18N_12 = MSG_EXTERNAL_7842238767399919809$$SRC_APP_APP_COMPONENT_TS_13;
    } else {
      I18N_12 = "{VAR_SELECT, select, male {\u7537} female {\u5973} other {\u5176\u4ED6}}";
    }

    I18N_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_12, {
      "VAR_SELECT": "\uFFFD0\uFFFD"
    });
    var I18N_11;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_8511147241295446916$$SRC_APP_APP_COMPONENT_TS_14 = goog.getMsg("The author is {$icu}", {
        "icu": I18N_12
      });
      I18N_11 = MSG_EXTERNAL_8511147241295446916$$SRC_APP_APP_COMPONENT_TS_14;
    } else {
      I18N_11 = "L'auteur est " + I18N_12 + "";
    }

    var I18N_16;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_706522873846283432$$SRC_APP_APP_COMPONENT_TS_17 = goog.getMsg("{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {{INTERPOLATION} minutes ago by {VAR_SELECT, select, male {male} female {female} other {other}}}}");
      I18N_16 = MSG_EXTERNAL_706522873846283432$$SRC_APP_APP_COMPONENT_TS_17;
    } else {
      I18N_16 = "{VAR_PLURAL, plural, =0 {\xE0 l'instant} =1 {il y a une minute} other {il y a {INTERPOLATION} minutes par {VAR_SELECT, select, male {un homme} female {une femme} other {autre}}}}";
    }

    I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16, {
      "VAR_SELECT": "\uFFFD0\uFFFD",
      "VAR_PLURAL": "\uFFFD1\uFFFD",
      "INTERPOLATION": "\uFFFD2\uFFFD"
    });
    var I18N_15;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_3574833283807905682$$SRC_APP_APP_COMPONENT_TS_18 = goog.getMsg("Updated: {$icu}\n", {
        "icu": I18N_16
      });
      I18N_15 = MSG_EXTERNAL_3574833283807905682$$SRC_APP_APP_COMPONENT_TS_18;
    } else {
      I18N_15 = "Mis \xE0 jour: " + I18N_16 + "\n";
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.minutes = 0;
        this.gender = 'female';
        this.fly = true;
        this.logo = 'https://angular.io/assets/images/logos/angular/angular.png';
      }

      _createClass(AppComponent, [{
        key: "inc",
        value: function inc(i) {
          this.minutes = Math.min(5, Math.max(0, this.minutes + i));
        }
      }, {
        key: "male",
        value: function male() {
          this.gender = 'male';
        }
      }, {
        key: "female",
        value: function female() {
          this.gender = 'female';
        }
      }, {
        key: "other",
        value: function other() {
          this.gender = 'other';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 29,
      vars: 8,
      consts: [[3, "src", 6, "title"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() {
            return ctx.inc(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
            return ctx.inc(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, I18N_7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() {
            return ctx.male();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2642");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
            return ctx.female();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u2640");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() {
            return ctx.other();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u26A7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, I18N_11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](28, I18N_15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.minutes)(ctx.minutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n(", ctx.minutes, ")\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.gender)(ctx.minutes)(ctx.minutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](28);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/r1701/Downloads/i18n/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map