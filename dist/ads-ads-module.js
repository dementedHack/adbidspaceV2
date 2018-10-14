(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ads-ads-module"],{

/***/ "./src/app/layout/ads/ads-routing-module.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/ads/ads-routing-module.module.ts ***!
  \*********************************************************/
/*! exports provided: AdsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsRoutingModule", function() { return AdsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ads.component */ "./src/app/layout/ads/ads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"]
    }
];
var AdsRoutingModule = /** @class */ (function () {
    function AdsRoutingModule() {
    }
    AdsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdsRoutingModule);
    return AdsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/ads/ads.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/ads/ads.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Ads - Marketplace</h2>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a [routerLink]=\"['/ads']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">Marketplace <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/my-ads']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">My Ads</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>\n<div id=\"market-place-ads\">\n  <h3>Categories</h3>\n  <div>\n    <h4>Sports</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/ads/ads.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/ads/ads.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/ads/ads.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/ads/ads.component.ts ***!
  \*********************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsComponent = /** @class */ (function () {
    function AdsComponent() {
    }
    AdsComponent.prototype.ngOnInit = function () {
    };
    AdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.component.html */ "./src/app/layout/ads/ads.component.html"),
            styles: [__webpack_require__(/*! ./ads.component.scss */ "./src/app/layout/ads/ads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdsComponent);
    return AdsComponent;
}());



/***/ }),

/***/ "./src/app/layout/ads/ads.module.ts":
/*!******************************************!*\
  !*** ./src/app/layout/ads/ads.module.ts ***!
  \******************************************/
/*! exports provided: AdsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsModule", function() { return AdsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ads_routing_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ads-routing-module.module */ "./src/app/layout/ads/ads-routing-module.module.ts");
/* harmony import */ var _ads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ads.component */ "./src/app/layout/ads/ads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdsModule = /** @class */ (function () {
    function AdsModule() {
    }
    AdsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ads_routing_module_module__WEBPACK_IMPORTED_MODULE_2__["AdsRoutingModule"]
            ],
            declarations: [_ads_component__WEBPACK_IMPORTED_MODULE_3__["AdsComponent"]]
        })
    ], AdsModule);
    return AdsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ads-ads-module.js.map