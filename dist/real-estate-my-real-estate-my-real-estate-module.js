(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-my-real-estate-my-real-estate-module"],{

/***/ "./src/app/layout/real-estate/my-real-estate/my-real-estate-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/real-estate/my-real-estate/my-real-estate-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: MyRealEstateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRealEstateRoutingModule", function() { return MyRealEstateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_real_estate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-real-estate.component */ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _my_real_estate_component__WEBPACK_IMPORTED_MODULE_2__["MyRealEstateComponent"]
    }
];
var MyRealEstateRoutingModule = /** @class */ (function () {
    function MyRealEstateRoutingModule() {
    }
    MyRealEstateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyRealEstateRoutingModule);
    return MyRealEstateRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/real-estate/my-real-estate/my-real-estate.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Real Estate - My Real Estate</h2>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a [routerLink]=\"['/real-estate']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">Marketplace</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a [routerLink]=\"['/my-real-estate']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">My Real Estate<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<div id=\"market-place-ads\">\r\n  <h3>Categories</h3>\r\n  <div>\r\n    <h4>Sports</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/real-estate/my-real-estate/my-real-estate.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/real-estate/my-real-estate/my-real-estate.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MyRealEstateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRealEstateComponent", function() { return MyRealEstateComponent; });
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

var MyRealEstateComponent = /** @class */ (function () {
    function MyRealEstateComponent() {
    }
    MyRealEstateComponent.prototype.ngOnInit = function () { };
    MyRealEstateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-real-estate',
            template: __webpack_require__(/*! ./my-real-estate.component.html */ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.html"),
            styles: [__webpack_require__(/*! ./my-real-estate.component.scss */ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyRealEstateComponent);
    return MyRealEstateComponent;
}());



/***/ }),

/***/ "./src/app/layout/real-estate/my-real-estate/my-real-estate.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/real-estate/my-real-estate/my-real-estate.module.ts ***!
  \****************************************************************************/
/*! exports provided: MyRealEstateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRealEstateModule", function() { return MyRealEstateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-real-estate-routing.module */ "./src/app/layout/real-estate/my-real-estate/my-real-estate-routing.module.ts");
/* harmony import */ var _my_real_estate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-real-estate.component */ "./src/app/layout/real-estate/my-real-estate/my-real-estate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyRealEstateModule = /** @class */ (function () {
    function MyRealEstateModule() {
    }
    MyRealEstateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyRealEstateRoutingModule"]],
            declarations: [_my_real_estate_component__WEBPACK_IMPORTED_MODULE_3__["MyRealEstateComponent"]]
        })
    ], MyRealEstateModule);
    return MyRealEstateModule;
}());



/***/ })

}]);
//# sourceMappingURL=real-estate-my-real-estate-my-real-estate-module.js.map