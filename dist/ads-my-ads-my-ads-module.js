(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ads-my-ads-my-ads-module"],{

/***/ "./src/app/layout/ads/my-ads/my-ads-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/ads/my-ads/my-ads-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MyAdsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsRoutingModule", function() { return MyAdsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_ads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-ads.component */ "./src/app/layout/ads/my-ads/my-ads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _my_ads_component__WEBPACK_IMPORTED_MODULE_2__["MyAdsComponent"]
    }
];
var MyAdsRoutingModule = /** @class */ (function () {
    function MyAdsRoutingModule() {
    }
    MyAdsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyAdsRoutingModule);
    return MyAdsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/ads/my-ads/my-ads.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/ads/my-ads/my-ads.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Ads - My Ads</h2>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a [routerLink]=\"['/ads']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">Marketplace</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a [routerLink]=\"['/my-ads']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">My Ads<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<div id=\"market-place-ads\">\r\n  <h3>Categories</h3>\r\n  <div>\r\n    <h4>Sports</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/ads/my-ads/my-ads.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/ads/my-ads/my-ads.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/ads/my-ads/my-ads.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/ads/my-ads/my-ads.component.ts ***!
  \*******************************************************/
/*! exports provided: MyAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsComponent", function() { return MyAdsComponent; });
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

var MyAdsComponent = /** @class */ (function () {
    function MyAdsComponent() {
    }
    MyAdsComponent.prototype.ngOnInit = function () { };
    MyAdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-ads',
            template: __webpack_require__(/*! ./my-ads.component.html */ "./src/app/layout/ads/my-ads/my-ads.component.html"),
            styles: [__webpack_require__(/*! ./my-ads.component.scss */ "./src/app/layout/ads/my-ads/my-ads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAdsComponent);
    return MyAdsComponent;
}());



/***/ }),

/***/ "./src/app/layout/ads/my-ads/my-ads.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/ads/my-ads/my-ads.module.ts ***!
  \****************************************************/
/*! exports provided: MyAdsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsModule", function() { return MyAdsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_ads_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-ads-routing.module */ "./src/app/layout/ads/my-ads/my-ads-routing.module.ts");
/* harmony import */ var _my_ads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-ads.component */ "./src/app/layout/ads/my-ads/my-ads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyAdsModule = /** @class */ (function () {
    function MyAdsModule() {
    }
    MyAdsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_ads_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyAdsRoutingModule"]],
            declarations: [_my_ads_component__WEBPACK_IMPORTED_MODULE_3__["MyAdsComponent"]]
        })
    ], MyAdsModule);
    return MyAdsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ads-my-ads-my-ads-module.js.map