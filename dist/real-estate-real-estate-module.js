(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-real-estate-module"],{

/***/ "./src/app/layout/real-estate/real-estate-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/real-estate/real-estate-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: RealEstateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateRoutingModule", function() { return RealEstateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _real_estate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./real-estate.component */ "./src/app/layout/real-estate/real-estate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _real_estate_component__WEBPACK_IMPORTED_MODULE_2__["RealEstateComponent"]
    }
];
var RealEstateRoutingModule = /** @class */ (function () {
    function RealEstateRoutingModule() {
    }
    RealEstateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RealEstateRoutingModule);
    return RealEstateRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/real-estate/real-estate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/real-estate/real-estate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Real Estate - Marketplace</h2>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a [routerLink]=\"['/real-estate']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">Marketplace <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/my-real-estate']\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">My Real Estate</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>\n<div id=\"market-place-ads\">\n  <h3>Categories</h3>\n  <div>\n    <h4>Sports</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/real-estate/real-estate.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/real-estate/real-estate.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/real-estate/real-estate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/real-estate/real-estate.component.ts ***!
  \*************************************************************/
/*! exports provided: RealEstateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateComponent", function() { return RealEstateComponent; });
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

var RealEstateComponent = /** @class */ (function () {
    function RealEstateComponent() {
    }
    RealEstateComponent.prototype.ngOnInit = function () {
    };
    RealEstateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-estate',
            template: __webpack_require__(/*! ./real-estate.component.html */ "./src/app/layout/real-estate/real-estate.component.html"),
            styles: [__webpack_require__(/*! ./real-estate.component.scss */ "./src/app/layout/real-estate/real-estate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RealEstateComponent);
    return RealEstateComponent;
}());



/***/ }),

/***/ "./src/app/layout/real-estate/real-estate.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/real-estate/real-estate.module.ts ***!
  \**********************************************************/
/*! exports provided: RealEstateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateModule", function() { return RealEstateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./real-estate-routing.module */ "./src/app/layout/real-estate/real-estate-routing.module.ts");
/* harmony import */ var _real_estate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-estate.component */ "./src/app/layout/real-estate/real-estate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RealEstateModule = /** @class */ (function () {
    function RealEstateModule() {
    }
    RealEstateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__["RealEstateRoutingModule"]
            ],
            declarations: [_real_estate_component__WEBPACK_IMPORTED_MODULE_3__["RealEstateComponent"]]
        })
    ], RealEstateModule);
    return RealEstateModule;
}());



/***/ })

}]);
//# sourceMappingURL=real-estate-real-estate-module.js.map