(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alfon\Documents\APIS\ProyectoCOVID-Mapa\src\main.ts */"zUnb");


/***/ }),

/***/ "3U2y":
/*!****************************************************!*\
  !*** ./src/app/sessionbar/sessionbar.component.ts ***!
  \****************************************************/
/*! exports provided: SessionbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionbarComponent", function() { return SessionbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SessionbarComponent {
    constructor() {
        this.token = localStorage.getItem("token");
        this.usuario = localStorage.getItem("usuario");
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        location.href = window.location.href;
        ;
    }
}
SessionbarComponent.ɵfac = function SessionbarComponent_Factory(t) { return new (t || SessionbarComponent)(); };
SessionbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionbarComponent, selectors: [["app-sessionbar"]], decls: 13, vars: 2, consts: [[1, "token"], [1, "usuario"], [1, "boton_personalizado", 3, "click"]], template: function SessionbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nToken RESTAPI:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nUsuario logeado Graphql:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionbarComponent_Template_a_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario);
    } }, styles: ["@import url('https://fonts.googleapis.com/css?family=Raleway:300,700');\r\n\r\n  .boton_personalizado[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-decoration: none;\r\n    padding: 8px;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    background-color: #1883ba;\r\n    border-radius: 5px;\r\n    border: 1px solid #0016b0;\r\n  }\r\n\r\n  .boton_personalizado[_ngcontent-%COMP%]:hover{\r\n    color: #1883ba;\r\n    background-color: #ffffff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbmJhci9zZXNzaW9uYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFOztFQUVwRTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb25iYXIvc2Vzc2lvbmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw3MDAnKTtcclxuXHJcbiAgLmJvdG9uX3BlcnNvbmFsaXphZG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4M2JhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMTZiMDtcclxuICB9XHJcblxyXG4gIC5ib3Rvbl9wZXJzb25hbGl6YWRvOmhvdmVye1xyXG4gICAgY29sb3I6ICMxODgzYmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sessionbar',
                templateUrl: './sessionbar.component.html',
                styleUrls: ['./sessionbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "45aq":
/*!********************************************!*\
  !*** ./src/app/_services/shape.service.ts ***!
  \********************************************/
/*! exports provided: ShapeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeService", function() { return ShapeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ShapeService {
    constructor(http) {
        this.http = http;
    }
    getStateShapes() {
        return this.http.get('/assets/data/mexico.geojson');
    }
}
ShapeService.ɵfac = function ShapeService_Factory(t) { return new (t || ShapeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShapeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShapeService, factory: ShapeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4lys":
/*!************************************!*\
  !*** ./src/app/graphql.service.ts ***!
  \************************************/
/*! exports provided: GraphqlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlService", function() { return GraphqlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "K/JX");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var src_models_visitaModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/visitaModel */ "ZDSS");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular-link-http */ "Ijki");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "61FP");
/* harmony import */ var src_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/users.service */ "HPfj");










class GraphqlService {
    constructor(apollo, httpLink, storageService, usersService) {
        this.apollo = apollo;
        this.storageService = storageService;
        this.usersService = usersService;
        this.cadena = "";
        this.getToken = (username1, password1) => {
            localStorage.removeItem("usuario");
            this.apollo.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `mutation ($username: String!, $password: String!){
          tokenAuth(username: $username, password: $password){
            token
          }
        }`,
                variables: { username: username1, password: password1 }
            }).subscribe(result => {
                let token = result.data;
                const userStr = JSON.stringify(token);
                console.log(userStr);
                console.log(userStr.slice(23, -37));
                this.token = userStr.slice(23, -37).toString();
                console.log(this.token);
                //localStorage.setItem("Usuario",this.getDecodedAccessToken(this.token));
                //console.log(localStorage.getItem("Usuario"))
                console.log(this.getDecodedAccessToken(this.token));
                this.user = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(this.token);
                console.log(this.user.username);
                localStorage.setItem("usuario", this.user.username);
                let visita = new src_models_visitaModel__WEBPACK_IMPORTED_MODULE_4__["VisitaModel"];
                visita.id = 1;
                visita.visitas = parseInt(sessionStorage.getItem("visitas")) + 1;
                this.usersService.registrarVisitas(visita).subscribe((data) => {
                    this.storageService.setSession("visitas", data.visitas);
                    this.cadena = window.location.href;
                    location.href = this.cadena.slice(0, -11);
                });
            });
        };
        this.newUser = (username1, email1, password1) => {
            this.apollo.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `mutation($username: String!, $email: String!, $password: String!){
        createUser(
          username: $username,
          email: $email,
          password:$password
        ){
          user
          {
            id,
            username,
            email
          }
        }
      }`,
                variables: { username: username1, email: email1, password: password1 }
            }).subscribe(result => {
                let resp = result.data;
                this.cadena = window.location.href;
                location.href = this.cadena.slice(0, -12);
            });
        };
        apollo.create({
            link: httpLink.create({ uri: 'http://34.68.87.191:5012/graphql/' }),
            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
        });
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
}
GraphqlService.ɵfac = function GraphqlService_Factory(t) { return new (t || GraphqlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLink"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"])); };
GraphqlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GraphqlService, factory: GraphqlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphqlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"] }, { type: apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLink"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }, { type: src_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "5BXz":
/*!*******************************!*\
  !*** ./src/models/userapi.ts ***!
  \*******************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
class UserApi {
}


/***/ }),

/***/ "61FP":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
class StorageService {
    constructor() { }
    getApiUrl() {
        return 'http://34.97.225.164:5013';
    }
    setSession(key, obj) {
        sessionStorage.setItem(key, JSON.stringify(obj));
    }
    getSession(key) {
        const obj = sessionStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    }
    sessionDeleteAll() {
        sessionStorage.clear();
    }
    sessionDeleteByKey(key) {
        sessionStorage.removeItem(key);
    }
    setLocal(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    getLocal(key) {
        const obj = localStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    }
    localDeleteAll() {
        localStorage.clear();
    }
    localDeleteByKey(key) {
        localStorage.removeItem(key);
    }
}


/***/ }),

/***/ "AXwu":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sessionbar_sessionbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sessionbar/sessionbar.component */ "3U2y");



const _c0 = "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n\r\n\r\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tline-height: 1;\r\n}\r\n\r\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] { text-align: center; font:300 20px/1.7; font-family: sans-serif}\r\n\r\n.header[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; font-family: sans-serif}\r\n\r\n.navbar[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; background: #abcdef; font-family: sans-serif}\r\n\r\n.tarifas[_ngcontent-%COMP%] { text-align: left; }\r\n\r\n.list-services[_ngcontent-%COMP%] {display: flex; align-items: center; justify-content: center;}\r\n\r\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; flex-flow: column;}\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%] { height: 450px; background: url('dummy-header.jpg') no-repeat center top; background-size: cover;}\r\n\r\n.navbar[_ngcontent-%COMP%] { height: 63px; background: #041f3a; border-bottom: 1px dashed #3498db;}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { padding: 0 20px; color: #fff; text-decoration: none; text-transform: uppercase; font-family: sans-serif}\r\n\r\n.title[_ngcontent-%COMP%] {margin-bottom: 40px; font: 60px 'sans-serif'; text-transform: uppercase;}\r\n\r\np[_ngcontent-%COMP%] {margin-bottom: 40px;}\r\n\r\n.btn[_ngcontent-%COMP%] { border: 2px solid rgb(0, 0, 0); padding: 10px 40px; display: inline-block; text-decoration: none; color: rgb(0, 0, 0);}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%] { padding: 80px 0;}\r\n\r\n.who[_ngcontent-%COMP%] {background: #2c3e50; color: #fff;}\r\n\r\n.who[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 1055px; margin: 0 auto;}\r\n\r\n.services[_ngcontent-%COMP%] {background: #34495e;color: #fff;}\r\n\r\n.tarifas[_ngcontent-%COMP%] {background: url('Nuevas-medidas-fase-3.jpg') no-repeat center top; background-size: cover; color: rgb(0, 0, 0);}\r\n\r\n.contain[_ngcontent-%COMP%] {max-width: 1055px; margin: 0 auto;}\r\n\r\n.tarifas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {max-width: 450px;}\r\n\r\n.localization[_ngcontent-%COMP%] {color: #34495e; padding-bottom: 0;}\r\n\r\n.localization[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%; width: 100%;}\r\n\r\n\r\n\r\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { position: relative; width: 150px; height: 190px;}\r\n\r\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:after {content: \"\"; position: absolute; top: 0; left: 0; border-radius: 50%; z-index: 0; background: #fff; width: 150px; height: 150px;}\r\n\r\n.list-services[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {position: relative; z-index: 1;}\r\n\r\n.list-services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { padding: 0 30px; }\r\n\r\n.list-services[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] { position: relative; left: 0; right: 0; bottom: -40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZ3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7O0FBRUQsWUFBWTs7QUFDWjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxZQUFZO0NBQ1osVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFDQSxnREFBZ0Q7O0FBQ2hEOztDQUVDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxhQUFhOztBQUNYLE9BQU8sa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCOztBQUVyRSxVQUFVLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUI7O0FBRTlGLFVBQVUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHVCQUF1Qjs7QUFFbkgsV0FBVyxnQkFBZ0IsRUFBRTs7QUFFN0IsZ0JBQWdCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQzs7QUFDNUUsd0JBQXdCLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDekcsb0JBQW9COztBQUVsQixVQUFVLGFBQWEsRUFBRSx3REFBK0QsRUFBRSxzQkFBc0IsQ0FBQzs7QUFDakgsVUFBVSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsaUNBQWlDLENBQUM7O0FBQzdFLFlBQVksZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUI7O0FBQ3JILFFBQVEsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLENBQUM7O0FBQ2hGLEdBQUcsbUJBQW1CLENBQUM7O0FBRXZCLE9BQU8sOEJBQThCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7O0FBRS9ILG1CQUFtQjs7QUFDakIsV0FBVyxlQUFlLENBQUM7O0FBRXpCLE1BQU0sbUJBQW1CLEVBQUUsV0FBVyxDQUFDOztBQUNyQyxTQUFTLGlCQUFpQixFQUFFLGNBQWMsQ0FBQzs7QUFDN0MsV0FBVyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7O0FBRTNDLFVBQVUsaUVBQXdFLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUM7O0FBQzlILFVBQVUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDOztBQUM1QyxZQUFZLGdCQUFnQixDQUFDOztBQUUvQixlQUFlLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDL0Msd0JBQXdCLGVBQWUsRUFBRSxXQUFXLENBQUM7O0FBRTNELFlBQVk7O0FBRVYsd0JBQXdCLGtCQUFrQixFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7O0FBQ3hFLDZCQUE2QixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzs7QUFDM0osb0JBQW9CLGtCQUFrQixFQUFFLFVBQVUsQ0FBQzs7QUFDckQsb0JBQW9CLGVBQWUsRUFBRTs7QUFDckMsNEJBQTRCLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDOztBQUVuRixpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICBTVFlMRVMgR1VJREU6XHJcbiAgMC4gUkVTRVRcclxuICAxLiBMQVlPVVRcclxuICAyLiBHRU5FUklDIElURU1TXHJcbiAgMy4gUEFSVFMgT0YgV0VCXHJcbiAgNC4gTElTVFxyXG4gIDUuIEZPUk1cclxuICA1LiBBTklNQVRJT05TXHJcbiAgLS0tLS0tLS0tLVxyXG4gIENPTE9SUzpcclxuICAgIGNvbG9yMSA9PiAjMmMzZTUwO1xyXG4gICAgY29sb3IyID0+ICMzNDQ5NWU7XHJcbiAgICBjb2xvcjMgPT4gIzM0OThkYjtcclxuICAgIGNvbG9yNCA9PiAjZmZmO1xyXG4qL1xyXG5cclxuLyogMCBSRVNFVCAqL1xyXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMTBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiAxIExBWU9VVCAqL1xyXG4gIGJvZHkgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQ6MzAwIDIwcHgvMS43OyBmb250LWZhbWlseTogc2Fucy1zZXJpZn1cclxuXHJcbiAgLmhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LWZhbWlseTogc2Fucy1zZXJpZn1cclxuXHJcbiAgLm5hdmJhciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kOiAjYWJjZGVmOyBmb250LWZhbWlseTogc2Fucy1zZXJpZn1cclxuXHJcbiAgLnRhcmlmYXMgeyB0ZXh0LWFsaWduOiBsZWZ0OyB9XHJcblxyXG4gIC5saXN0LXNlcnZpY2VzIHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcbiAgLmxpc3Qtc2VydmljZXMgZmlndXJlIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtZmxvdzogY29sdW1uO31cclxuLyogMiBHRU5FUklDIElURU1TICovXHJcblxyXG4gIC5oZWFkZXIgeyBoZWlnaHQ6IDQ1MHB4OyBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VuZXMvZHVtbXktaGVhZGVyLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7fVxyXG4gIC5uYXZiYXIgeyBoZWlnaHQ6IDYzcHg7IGJhY2tncm91bmQ6ICMwNDFmM2E7IGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzM0OThkYjt9XHJcbiAgICAubmF2YmFyIGEgeyBwYWRkaW5nOiAwIDIwcHg7IGNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmfVxyXG4gIC50aXRsZSB7bWFyZ2luLWJvdHRvbTogNDBweDsgZm9udDogNjBweCAnc2Fucy1zZXJpZic7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxyXG4gIHAge21hcmdpbi1ib3R0b206IDQwcHg7fVxyXG5cclxuICAuYnRuIHsgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApOyBwYWRkaW5nOiAxMHB4IDQwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogcmdiKDAsIDAsIDApO31cclxuXHJcbi8qIDMgUEFSVFMgT0YgV0VCICovXHJcbiAgLmNvbnRlbnQgeyBwYWRkaW5nOiA4MHB4IDA7fVxyXG5cclxuICAgIC53aG8ge2JhY2tncm91bmQ6ICMyYzNlNTA7IGNvbG9yOiAjZmZmO31cclxuICAgICAgLndobyBwIHsgbWF4LXdpZHRoOiAxMDU1cHg7IG1hcmdpbjogMCBhdXRvO31cclxuICAgIC5zZXJ2aWNlcyB7YmFja2dyb3VuZDogIzM0NDk1ZTtjb2xvcjogI2ZmZjt9XHJcblxyXG4gICAgLnRhcmlmYXMge2JhY2tncm91bmQ6IHVybChpbWFnZW5lcy9OdWV2YXMtbWVkaWRhcy1mYXNlLTMuanBnKSBuby1yZXBlYXQgY2VudGVyIHRvcDsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgY29sb3I6IHJnYigwLCAwLCAwKTt9XHJcbiAgICAgIC5jb250YWluIHttYXgtd2lkdGg6IDEwNTVweDsgbWFyZ2luOiAwIGF1dG87fVxyXG4gICAgICAudGFyaWZhcyBwIHttYXgtd2lkdGg6IDQ1MHB4O31cclxuXHJcbiAgICAubG9jYWxpemF0aW9uIHtjb2xvcjogIzM0NDk1ZTsgcGFkZGluZy1ib3R0b206IDA7fVxyXG4gICAgICAubG9jYWxpemF0aW9uIC5tYXAgaW1nIHttYXgtd2lkdGg6IDEwMCU7IHdpZHRoOiAxMDAlO31cclxuXHJcbi8qIDMgTElTVCAgKi9cclxuXHJcbiAgLmxpc3Qtc2VydmljZXMgZmlndXJlIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTUwcHg7IGhlaWdodDogMTkwcHg7fVxyXG4gIC5saXN0LXNlcnZpY2VzIGZpZ3VyZTphZnRlciB7Y29udGVudDogXCJcIjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgei1pbmRleDogMDsgYmFja2dyb3VuZDogI2ZmZjsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4O31cclxuICAgIC5saXN0LXNlcnZpY2VzIGltZyB7cG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxO31cclxuICAubGlzdC1zZXJ2aWNlcyBsaSB7IHBhZGRpbmc6IDAgMzBweDsgfVxyXG4gIC5saXN0LXNlcnZpY2VzIGZpZ2NhcHRpb24geyBwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IC00MHB4O31cclxuXHJcbi8qIDMgQU5JTUFUSU9OUyAqLyJdfQ== */";
class LandingpageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) { return new (t || LandingpageComponent)(); };
LandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingpageComponent, selectors: [["app-landingpage"]], decls: 39, vars: 0, consts: [["lang", "es"], ["charset", "utf-8"], [1, "header"], ["src", "../../assets/img-landing/uv1.png", "alt", "uv Logo"], [1, "content", "who"], [1, "title"], [1, "content", "services"], [1, "list-services"], ["src", "../../assets/img-landing/ico1.png", "alt", "Angular logo"], ["src", "../../assets/img-landing/ico3.png", "alt", "Vue logo"], [1, "content", "tarifas"], [1, "contain"], ["href", "", 1, "btn"]], template: function LandingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sessionbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Proyecto parcial 1 | Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "COVID-19 Estad\u00EDsticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " El #coronavirus o COVID-19 fue notificado por primera vez en Wuhan (China) el 31 de diciembre de 2019 y r\u00E1pidamente se propag\u00F3 por todo el mundo. Hoy vivimos un escenario que jam\u00E1s imaginamos: tener que abandonar nuestras actividades e incluso mantenernos lejos de quienes m\u00E1s queremos. El rumbo que debemos tomar como sociedad ha cambiado. Es momento de unirnos m\u00E1s que nunca, solidarizarnos y tendernos la mano los unos a los otros. Ante la aparici\u00F3n del virus, han surgido preguntas como \u00BFqu\u00E9 es?, \u00BFc\u00F3mo se contagia?, \u00BFc\u00F3mo se puede prevenir?, \u00BFqu\u00E9 debemos hacer si presentamos s\u00EDntomas? Entre muchos m\u00E1s cuestionamientos a los que trataremos de dar respuesta. As\u00ED que te invitamos a conocer m\u00E1s sobre el COVID-19 y las medidas que debemos tomar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Herramientas de desarrollo para esta pagina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Somos un equipo de 6 estudiantes de la honorobale Universidad Veracruzana. Para el desarrollo de nuestro proyecto utilizamos las siguientes herramientas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00BFQu\u00E9 debo hacer para evitar el contagio?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Puedes tomar varias medidas para evitar el contagio: L\u00E1vate las manos a fondo y con frecuencia, usando un desinfectante a base de alcohol o con agua y jab\u00F3n. Mant\u00E9n una distancia m\u00EDnima de 1 metro entre t\u00FA y cualquier persona que tosa o estornude. Evita tocarte los ojos, la nariz y la boca, ya que las manos tocan muchas superficies y pueden recoger virus. Debes asegurarse de mantener una buena higiene de las v\u00EDas respiratorias, es decir, cubrirse la boca y la nariz con el codo doblado o con un pa\u00F1uelo de papel al toser o estornudar. Evita salir a menos que sea de suma importancia, si no, permanece en casa para evitar cualquier contagio. Si presentas s\u00EDntomas como fiebre, tos y dificultad para respirar, busca atenci\u00F3n m\u00E9dica y llama al n\u00FAmero establecido por las autoridades para que te den el debido seguimiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "M\u00E1s informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sessionbar_sessionbar_component__WEBPACK_IMPORTED_MODULE_1__["SessionbarComponent"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landingpage',
                templateUrl: './landingpage.component.html',
                styleUrls: ['./landingpage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "HPfj":
/*!***************************************!*\
  !*** ./src/services/users.service.ts ***!
  \***************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UsersService {
    constructor(http) {
        this.http = http;
        // Define API
        this.apiURL = 'http://34.97.225.164:5013';
        this.redisURL = 'http://34.97.225.164:5018';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API post() method => Create employee
    loginUser(userApi) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(JSON.stringify(userApi));
        return this.http.post(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.MessageError));
    }
    signupUser(newUserApi) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(JSON.stringify(newUserApi));
        return this.http.post(this.apiURL + '/api/auth/signup', JSON.stringify(newUserApi), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
    }
    registrarVisitas(visita) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(JSON.stringify(visita));
        return this.http.post(this.redisURL + '/rest/visitas/update', JSON.stringify(visita), this.httpOptions);
    }
    consultarVisitas() {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(this.redisURL + '/rest/visitas/1', this.httpOptions);
    }
    contar() {
        if (localStorage.getItem("token") != null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': 'Bearer ' + localStorage.getItem("token").toString().slice(1, -1)
                })
            };
            console.log('Authorization' + ':' + 'Bearer ' + localStorage.getItem("token").toString().slice(1, -1));
            return this.http.get(this.apiURL + '/cuenta', this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.MessageError2));
        }
        else {
            alert("Inicia sesión antes para ver los datos");
            return null;
        }
    }
    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    MessageError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            alert('USUARIO Y CONTRASEÑA INCORRECTOS');
        }
        //window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    MessageError2(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            alert('Inicia sesion primero');
        }
        //window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "J/g5":
/*!**********************************!*\
  !*** ./src/models/newuserapi.ts ***!
  \**********************************/
/*! exports provided: NewUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserApi", function() { return NewUserApi; });
class NewUserApi {
}


/***/ }),

/***/ "JA3s":
/*!********************************************************!*\
  !*** ./src/app/signup-graph/signup-graph.component.ts ***!
  \********************************************************/
/*! exports provided: SignupGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupGraphComponent", function() { return SignupGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _graphql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql.service */ "4lys");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SignupGraphComponent {
    constructor(service) {
        this.service = service;
        this.cadena = "";
        this.result = '';
        this.username = '';
        this.password = '';
        this.email = '';
    }
    ngOnInit() {
    }
    newuser() {
        if (this.username == "" || this.password == "" || this.email == "") {
            alert("Falta rellenar campos");
        }
        else if (this.password.length <= 5) {
            alert('Contraseña de 6 caracteres mínimo');
        }
        else {
            this.service.newUser(this.username, this.email, this.password);
        }
    }
    redireccion() {
        this.cadena = window.location.href;
        location.href = this.cadena.slice(0, -12) + '/login-graph';
    }
}
SignupGraphComponent.ɵfac = function SignupGraphComponent_Factory(t) { return new (t || SignupGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphql_service__WEBPACK_IMPORTED_MODULE_1__["GraphqlService"])); };
SignupGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupGraphComponent, selectors: [["app-signup-graph"]], decls: 26, vars: 3, consts: [["charset", "utf-8"], [1, "login-box"], ["src", "../../assets/img-login/usericon.png", "alt", "Avatar Image", 1, "avatar"], ["for", "Usuario"], ["id", "username", "type", "text", "name", "operator2", "placeholder", "Usuario de acceso", 3, "ngModel", "ngModelChange"], ["for", "Contrase\u00F1a"], ["id", "password", "type", "password", "name", "operator3", "placeholder", "Contrase\u00F1a", 3, "ngModel", "ngModelChange"], ["for", "Email"], ["id", "email", "type", "text", "name", "operator4", "placeholder", "ejemplo@mail.com", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Registar", 3, "click"], [3, "click"]], template: function SignupGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Form Design One | Fazt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registrate aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupGraphComponent_Template_input_ngModelChange_13_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contrasena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupGraphComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupGraphComponent_Template_input_ngModelChange_19_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupGraphComponent_Template_input_click_20_listener() { return ctx.newuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupGraphComponent_Template_a_click_23_listener() { return ctx.redireccion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00BFYa estas registrado? Entra aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    padding: 0;\r\n    background: url('login.png') no-repeat center top;\r\n    background-size: cover;\r\n    font-family: sans-serif;\r\n    height: 93.5vh;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    height: 600px;\r\n    background: #000;\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    box-sizing: border-box;\r\n    padding: 70px 30px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n    display: block;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 1px solid #0016b0;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #1883ba;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    color: #000;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: darkgrey;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWdyYXBoL3NpZ251cC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpREFBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwLWdyYXBoL3NpZ251cC1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1nL2xvZ2luLnBuZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDkzLjV2aDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3gge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNzBweCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAubG9naW4tYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDE2YjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE4ODNiYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgfSJdfQ== */", "<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Login Form Design One | Fazt</title>\n    <link rel=\"stylesheet\" href=\"./signup-graph.component.html\">\n  </head>\n  <body>\n\n    <div class=\"login-box\">\n      <img src=\"../../assets/img-login/usericon.png\" class=\"avatar\" alt=\"Avatar Image\">\n      <h1>Registrate aqui</h1>\n      <form>\n\n        <label for=\"Usuario\">Usuario</label>\n        <input id=\"username\" [(ngModel)]=\"username\" type=\"text\" name=\"operator2\" placeholder=\"Usuario de acceso\">\n\n        <label for=\"Contrase\u00F1a\">Contrasena</label>\n        <input id=\"password\" [(ngModel)]=\"password\" type=\"password\" name=\"operator3\" placeholder=\"Contrase\u00F1a\">\n\n        <label for=\"Email\">Email</label>\n        <input id=\"email\" [(ngModel)]=\"email\" type=\"text\" name=\"operator4\" placeholder=\"ejemplo@mail.com\">\n\n        <input type=\"submit\" value=\"Registar\" (click)=\"newuser()\">\n        <br>\n        <br>\n        <a (click)=\"redireccion()\">\u00BFYa estas registrado? Entra aqui</a><br>\n      </form>\n    </div>\n  </body>\n</html>"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-graph',
                templateUrl: './signup-graph.component.html',
                styleUrls: ['./signup-graph.component.css']
            }]
    }], function () { return [{ type: _graphql_service__WEBPACK_IMPORTED_MODULE_1__["GraphqlService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/users.service */ "HPfj");
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/storage.service */ "61FP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(usersService, storageService) {
        this.usersService = usersService;
        this.storageService = storageService;
        this.title = 'ProyectoCOVID-Mapa';
        this.storageService.setSession("url", window.location.href);
        this.usersService.consultarVisitas().subscribe((data) => {
            this.storageService.setSession("visitas", data.visitas);
        });
    }
    ngOnInit() {
        this.visitas = sessionStorage.getItem("visitas");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 1, consts: [["routerLink", "", 1, "boton_personalizado"], ["routerLink", "template", 1, "boton_personalizado"], ["routerLink", "login", 1, "boton_personalizado"], ["routerLink", "signup", 1, "boton_personalizado"], ["routerLink", "login-graph", 1, "boton_personalizado"], ["routerLink", "signup-graph", 1, "boton_personalizado"], [1, "visitas"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagina Principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mapa de contagios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Signup-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\nVisitas de usuarios de hoy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.visitas);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Raleway:300,700');\r\n\r\n  .boton_personalizado[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-decoration: none;\r\n    padding: 8px;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    background-color: #1883ba;\r\n    border-radius: 5px;\r\n    border: 1px solid #0016b0;\r\n  }\r\n\r\n  .boton_personalizado[_ngcontent-%COMP%]:hover{\r\n    color: #1883ba;\r\n    background-color: #ffffff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFOztFQUVwRTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw3MDAnKTtcclxuXHJcbiAgLmJvdG9uX3BlcnNvbmFsaXphZG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4M2JhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMTZiMDtcclxuICB9XHJcblxyXG4gIC5ib3Rvbl9wZXJzb25hbGl6YWRvOmhvdmVye1xyXG4gICAgY29sb3I6ICMxODgzYmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: src_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "AXwu");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/storage.service */ "61FP");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _sessionbar_sessionbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sessionbar/sessionbar.component */ "3U2y");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-angular-link-http */ "Ijki");
/* harmony import */ var _login_graph_login_graph_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-graph/login-graph.component */ "c1Tg");
/* harmony import */ var _signup_graph_signup_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup-graph/signup-graph.component */ "JA3s");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_12__["ApolloModule"],
            apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_13__["HttpLinkModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_7__["LandingpageComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        _sessionbar_sessionbar_component__WEBPACK_IMPORTED_MODULE_11__["SessionbarComponent"],
        _login_graph_login_graph_component__WEBPACK_IMPORTED_MODULE_14__["LoginGraphComponent"],
        _signup_graph_signup_graph_component__WEBPACK_IMPORTED_MODULE_15__["SignupGraphComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        apollo_angular__WEBPACK_IMPORTED_MODULE_12__["ApolloModule"],
        apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_13__["HttpLinkModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_7__["LandingpageComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                    _sessionbar_sessionbar_component__WEBPACK_IMPORTED_MODULE_11__["SessionbarComponent"],
                    _login_graph_login_graph_component__WEBPACK_IMPORTED_MODULE_14__["LoginGraphComponent"],
                    _signup_graph_signup_graph_component__WEBPACK_IMPORTED_MODULE_15__["SignupGraphComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    apollo_angular__WEBPACK_IMPORTED_MODULE_12__["ApolloModule"],
                    apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_13__["HttpLinkModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZDSS":
/*!***********************************!*\
  !*** ./src/models/visitaModel.ts ***!
  \***********************************/
/*! exports provided: VisitaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaModel", function() { return VisitaModel; });
class VisitaModel {
}


/***/ }),

/***/ "c1Tg":
/*!******************************************************!*\
  !*** ./src/app/login-graph/login-graph.component.ts ***!
  \******************************************************/
/*! exports provided: LoginGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGraphComponent", function() { return LoginGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _graphql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql.service */ "4lys");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class LoginGraphComponent {
    constructor(service) {
        this.service = service;
        this.cadena = "";
        this.result = '';
        this.username = '';
        this.password = '';
    }
    ngOnInit() {
    }
    logeo() {
        if (this.username == "" || this.password == "") {
            alert('USUARIO Y CONTRASEÑA REQUERIDOS');
        }
        else {
            //this.cadena = window.location.href;
            this.service.getToken(this.username, this.password);
            //location.href = this.cadena.slice(0,-11);  
        }
    }
}
LoginGraphComponent.ɵfac = function LoginGraphComponent_Factory(t) { return new (t || LoginGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphql_service__WEBPACK_IMPORTED_MODULE_1__["GraphqlService"])); };
LoginGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginGraphComponent, selectors: [["app-login-graph"]], decls: 23, vars: 2, consts: [["charset", "utf-8"], [1, "login-box"], ["src", "../../assets/img-login/usericon.png", "alt", "Avatar Image", 1, "avatar"], ["for", "Usuario"], ["id", "username", "type", "text", "name", "operator1", "placeholder", "username", 3, "ngModel", "ngModelChange"], ["for", "Contrase\u00F1a"], ["id", "password", "type", "password", "name", "operator2", "placeholder", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Entrar", 3, "click"], ["href", "#"]], template: function LoginGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Form Design One | Fazt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingresa tus datos aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginGraphComponent_Template_input_ngModelChange_13_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contrasena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginGraphComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginGraphComponent_Template_input_click_17_listener() { return ctx.logeo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00BFOlvidaste tu usuario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    padding: 0;\r\n    background: url('login.png') no-repeat center top;\r\n    background-size: cover;\r\n    font-family: sans-serif;\r\n    height: 93.5vh;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    height: 420px;\r\n    background: #000;\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    box-sizing: border-box;\r\n    padding: 70px 30px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n    display: block;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 1px solid #0016b0;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #1883ba;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    color: #000;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: darkgrey;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZ3JhcGgvbG9naW4tZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWdyYXBoL2xvZ2luLWdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvbG9naW4ucG5nKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogOTMuNXZoO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInRleHRcIl0sIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMTZiMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTg4M2JhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICB9Il19 */", "<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Login Form Design One | Fazt</title>\n    <link rel=\"stylesheet\" href=\"./login-graph.component.html\">\n  </head>\n  <body>\n\n    <div class=\"login-box\">\n      <img src=\"../../assets/img-login/usericon.png\" class=\"avatar\" alt=\"Avatar Image\">\n      <h1>Ingresa tus datos aqui</h1>\n      <form>\n        <!-- USERNAME INPUT -->\n        <label for=\"Usuario\">Usuario</label>\n        <input id=\"username\" [(ngModel)]=\"username\" type=\"text\" name=\"operator1\" placeholder=\"username\">\n        <!-- PASSWORD INPUT -->\n        <label for=\"Contrase\u00F1a\">Contrasena</label>\n        <input id=\"password\" [(ngModel)]=\"password\" type=\"password\" name=\"operator2\" placeholder=\"password\">\n        <input type=\"submit\" value=\"Entrar\" (click)=\"logeo()\">\n        <a href=\"#\">\u00BFOlvidaste tu contrase\u00F1a?</a><br>\n        <a href=\"#\">\u00BFOlvidaste tu usuario?</a>\n      </form>\n    </div>\n  </body>\n</html>"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-graph',
                templateUrl: './login-graph.component.html',
                styleUrls: ['./login-graph.component.css']
            }]
    }], function () { return [{ type: _graphql_service__WEBPACK_IMPORTED_MODULE_1__["GraphqlService"] }]; }, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/marker.service */ "q++V");
/* harmony import */ var _services_shape_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/shape.service */ "45aq");
/* harmony import */ var src_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/users.service */ "HPfj");






const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"].prototype.options.icon = iconDefault;
class MapComponent {
    constructor(markerService, shapeService, usersService) {
        this.markerService = markerService;
        this.shapeService = shapeService;
        this.usersService = usersService;
    }
    ngAfterViewInit() {
        this.initMap();
        //this.markerService.makeCapitalMarkers(this.map);
        //this.markerService.makeCapitalCircleMarkers(this.map);
        this.shapeService.getStateShapes().subscribe(states => {
            this.states = states;
            this.initStatesLayer();
        });
        this.usersService.contar()
            .subscribe((data) => {
            this.casosT = data;
            console.log(this.casosT);
        });
        //  this.casosT = this.usersService.contar();
        //  console.log(this.casosT)
    }
    initStatesLayer() {
        const stateLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](this.states, {
            style: (feature) => ({
                weight: 3,
                opacity: 0.5,
                color: '#008f68',
                fillOpacity: 0.8,
                fillColor: '#6DB65B'
            }),
            onEachFeature: (feature, layer) => (layer.on({
                mouseover: (e) => (this.highlightFeature(e)),
                mouseout: (e) => (this.resetFeature(e)),
            }))
        });
        this.map.addLayer(stateLayer);
        this.markerService.makeCapitalCircleMarkers(this.map);
    }
    highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 10,
            opacity: 1.0,
            color: '#DFA612',
            fillOpacity: 1.0,
            fillColor: '#FAE042',
        });
    }
    resetFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 3,
            opacity: 0.5,
            color: '#008f68',
            fillOpacity: 0.8,
            fillColor: '#6DB65B'
        });
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [19.4978, -99.1269],
            zoom: 5
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 7,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_marker_service__WEBPACK_IMPORTED_MODULE_2__["MarkerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shape_service__WEBPACK_IMPORTED_MODULE_3__["ShapeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 7, vars: 1, consts: [[1, "map-container"], [1, "casosT"], [1, "map-frame"], ["id", "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Casos Totales:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.casosT);
    } }, styles: [".map-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 50px;\r\n  } \r\n  \r\n  .map-frame[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    height: 100%; \r\n  } \r\n  \r\n  #map[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    height: 420px;\r\n    background: #000;\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    box-sizing: border-box;\r\n    padding: 70px 30px;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n  } \r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    font    : .9em/1.5em \"handwriting\", sans-serif;\r\n\r\n    border: 3px solid black;\r\n    padding : 0 10px;\r\n    margin  : 0;\r\n    width   : 240px;\r\n  \r\n    background: white;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #b80f22;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: #ffc107;\r\n    color: #000;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: darkgrey;\r\n  } \r\n  \r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsOENBQThDOztJQUU5Qyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlOztJQUVmLGlCQUFpQjtFQUNuQjs7RUFHQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gIH0gXHJcbiAgXHJcbiAgLm1hcC1mcmFtZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgfVxyXG4gIFxyXG4gICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuIFxyXG4gIC5sb2dpbi1ib3gge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNzBweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBmb250ICAgIDogLjllbS8xLjVlbSBcImhhbmR3cml0aW5nXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nIDogMCAxMHB4O1xyXG4gICAgbWFyZ2luICA6IDA7XHJcbiAgICB3aWR0aCAgIDogMjQwcHg7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAubG9naW4tYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNiODBmMjI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _services_marker_service__WEBPACK_IMPORTED_MODULE_2__["MarkerService"] }, { type: _services_shape_service__WEBPACK_IMPORTED_MODULE_3__["ShapeService"] }, { type: src_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "q++V":
/*!*********************************************!*\
  !*** ./src/app/_services/marker.service.ts ***!
  \*********************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pop_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up.service */ "v+AT");





class MarkerService {
    constructor(http, popupService) {
        this.http = http;
        this.popupService = popupService;
        this.capitals = '/assets/data/custom.geojson';
    }
    static ScaledRadius(val, maxVal) {
        return 20 * (val / maxVal);
    }
    makeCapitalCircleMarkers(map) {
        this.http.get(this.capitals).subscribe((res) => {
            for (const c of res) {
                const lat = c.latitud;
                const lon = c.longitud;
                const circle = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([lon, lat]).addTo(map);
                circle.bindPopup(this.popupService.makeCapitalPopup(c));
            }
        });
    }
}
MarkerService.ɵfac = function MarkerService_Factory(t) { return new (t || MarkerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pop_up_service__WEBPACK_IMPORTED_MODULE_3__["PopUpService"])); };
MarkerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarkerService, factory: MarkerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _pop_up_service__WEBPACK_IMPORTED_MODULE_3__["PopUpService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_models_newuserapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/newuserapi */ "J/g5");
/* harmony import */ var src_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/users.service */ "HPfj");
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/storage.service */ "61FP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class SignupComponent {
    constructor(usersService, storageService) {
        this.usersService = usersService;
        this.storageService = storageService;
        this.cadena = "";
        this.result = '';
        this.username = '';
        this.password = '';
        this.name = '';
        this.email = '';
    }
    ngOnInit() {
    }
    newuser() {
        let myresult = 'token here !!!';
        //myresult = addition(this.operator1, this.operator2);
        var mydata = new src_models_newuserapi__WEBPACK_IMPORTED_MODULE_1__["NewUserApi"];
        if (this.username == "" || this.password == "" || this.email == "" || this.name == "") {
            alert('CAMPOS REQUERIDOS');
        }
        else if (this.password.length <= 5) {
            alert('Contraseña de 6 caracteres mínimo');
        }
        else {
            mydata.username = this.username;
            mydata.password = this.password;
            mydata.name = this.name;
            mydata.email = this.email;
            mydata.role = [];
            mydata.role.push("user");
            //alert(JSON.stringify(mydata));
            this.usersService.signupUser(mydata)
                .subscribe((data) => {
            });
            this.cadena = window.location.href;
            location.href = this.cadena.slice(0, -6);
        }
    }
    redireccion() {
        this.cadena = window.location.href;
        location.href = this.cadena.slice(0, -6) + '/login';
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 29, vars: 4, consts: [["charset", "utf-8"], [1, "login-box"], ["src", "../../assets/img-login/usericon.png", "alt", "Avatar Image", 1, "avatar"], ["for", "Nombre"], ["id", "name", "type", "text", "name", "operator1", "placeholder", "Nombre", 3, "ngModel", "ngModelChange"], ["for", "Usuario"], ["id", "username", "type", "text", "name", "operator2", "placeholder", "Usuario de acceso", 3, "ngModel", "ngModelChange"], ["for", "Contrase\u00F1a"], ["id", "password", "type", "password", "name", "operator3", "placeholder", "Contrase\u00F1a", 3, "ngModel", "ngModelChange"], ["for", "Email"], ["id", "email", "type", "text", "name", "operator4", "placeholder", "ejemplo@mail.com", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Registar", 3, "click"], [3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Form Design One | Fazt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registrate aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contrasena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_23_listener() { return ctx.newuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_26_listener() { return ctx.redireccion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00BFYa estas registrado? Entra aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    padding: 0;\r\n    background: url('bg.jpeg') no-repeat center top;\r\n    background-size: cover;\r\n    font-family: sans-serif;\r\n    height: 93.5vh;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    height: 600px;\r\n    background: #000;\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    box-sizing: border-box;\r\n    padding: 70px 30px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n    display: block;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 1px solid #0016b0;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #1883ba;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    color: #000;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: darkgrey;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViwrQ0FBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1nL2JnLmpwZWcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA5My41dmg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDcwcHggMzBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAxNmIwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxODgzYmE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG4gIH0iXX0= */", "<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Login Form Design One | Fazt</title>\r\n    <link rel=\"stylesheet\" href=\"./signup.component.html\">\r\n  </head>\r\n  <body>\r\n\r\n    <div class=\"login-box\">\r\n      <img src=\"../../assets/img-login/usericon.png\" class=\"avatar\" alt=\"Avatar Image\">\r\n      <h1>Registrate aqui</h1>\r\n      <form>\r\n\r\n        <label for=\"Nombre\">Nombre</label>\r\n        <input id=\"name\" [(ngModel)]=\"name\" type=\"text\" name=\"operator1\" placeholder=\"Nombre\">\r\n\r\n        <label for=\"Usuario\">Usuario</label>\r\n        <input id=\"username\" [(ngModel)]=\"username\" type=\"text\" name=\"operator2\" placeholder=\"Usuario de acceso\">\r\n\r\n        <label for=\"Contrase\u00F1a\">Contrasena</label>\r\n        <input id=\"password\" [(ngModel)]=\"password\" type=\"password\" name=\"operator3\" placeholder=\"Contrase\u00F1a\">\r\n\r\n        <label for=\"Email\">Email</label>\r\n        <input id=\"email\" [(ngModel)]=\"email\" type=\"text\" name=\"operator4\" placeholder=\"ejemplo@mail.com\">\r\n\r\n        <input type=\"submit\" value=\"Registar\" (click)=\"newuser()\">\r\n        <br>\r\n        <br>\r\n        <a (click)=\"redireccion()\">\u00BFYa estas registrado? Entra aqui</a><br>\r\n      </form>\r\n    </div>\r\n  </body>\r\n</html>"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: src_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "v+AT":
/*!*********************************************!*\
  !*** ./src/app/_services/pop-up.service.ts ***!
  \*********************************************/
/*! exports provided: PopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpService", function() { return PopUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PopUpService {
    constructor() { }
    makeCapitalPopup(data) {
        return `` +
            `<div>Estado: ${data.capital}</div>` +
            `<div>Casos: ${data.state}</div>` +
            `<div>Muertes: ${data.population}</div>`;
    }
}
PopUpService.ɵfac = function PopUpService_Factory(t) { return new (t || PopUpService)(); };
PopUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopUpService, factory: PopUpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "AXwu");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _login_graph_login_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-graph/login-graph.component */ "c1Tg");
/* harmony import */ var _signup_graph_signup_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-graph/signup-graph.component */ "JA3s");










const routes = [
    {
        path: '',
        component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"]
    },
    {
        path: 'template',
        component: _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'login-graph',
        component: _login_graph_login_graph_component__WEBPACK_IMPORTED_MODULE_6__["LoginGraphComponent"]
    },
    {
        path: 'signup-graph',
        component: _signup_graph_signup_graph_component__WEBPACK_IMPORTED_MODULE_7__["SignupGraphComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_userapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/userapi */ "5BXz");
/* harmony import */ var src_models_visitaModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/visitaModel */ "ZDSS");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "HPfj");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(usersService, storageService) {
        this.usersService = usersService;
        this.storageService = storageService;
        this.cadena = "";
        this.result = '';
        this.username = '';
        this.password = '';
    }
    ngOnInit() {
    }
    addition() {
        let myresult = 'token here !!!';
        //myresult = addition(this.operator1, this.operator2);
        var mydata = new _models_userapi__WEBPACK_IMPORTED_MODULE_1__["UserApi"];
        if (this.username == "" || this.password == "") {
            alert('USUARIO Y CONTRASEÑA REQUERIDOS');
        }
        else {
            mydata.username = this.username;
            mydata.password = this.password;
            return this.usersService.loginUser(mydata)
                .subscribe((data) => {
                this.storageService.setLocal("token", data.accessToken);
                this.result = data.accessToken;
                //alert(data.accessToken);
                let visita = new src_models_visitaModel__WEBPACK_IMPORTED_MODULE_2__["VisitaModel"];
                visita.id = 1;
                visita.visitas = parseInt(sessionStorage.getItem("visitas")) + 1;
                this.usersService.registrarVisitas(visita).subscribe((data) => {
                    this.storageService.setSession("visitas", data.visitas);
                    this.cadena = window.location.href;
                    //alert(this.cadena.slice(0,-5))
                    location.href = this.cadena.slice(0, -5);
                });
            });
        }
        this.result = myresult;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 2, consts: [["charset", "utf-8"], [1, "login-box"], ["src", "../../assets/img-login/usericon.png", "alt", "Avatar Image", 1, "avatar"], ["for", "Usuario"], ["id", "username", "type", "text", "name", "operator1", "placeholder", "username", 3, "ngModel", "ngModelChange"], ["for", "Contrase\u00F1a"], ["id", "password", "type", "password", "name", "operator2", "placeholder", "password", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Entrar", 3, "click"], ["href", "#"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Form Design One | Fazt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingresa tus datos aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contrasena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_17_listener() { return ctx.addition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00BFOlvidaste tu usuario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    padding: 0;\r\n    background: url('bg.jpeg') no-repeat center top;\r\n    background-size: cover;\r\n    font-family: sans-serif;\r\n    height: 93.5vh;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    height: 420px;\r\n    background: #000;\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    box-sizing: border-box;\r\n    padding: 70px 30px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n    display: block;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 1px solid #0016b0;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #1883ba;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    color: #000;\r\n  }\r\n\r\n  .login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: darkgrey;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsK0NBQW1EO0lBQ25ELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvYmcuanBlZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDkzLjV2aDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3gge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNzBweCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAubG9naW4tYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDE2YjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE4ODNiYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYm94IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgfSJdfQ== */", "<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Login Form Design One | Fazt</title>\r\n    <link rel=\"stylesheet\" href=\"./login.component.html\">\r\n  </head>\r\n  <body>\r\n\r\n    <div class=\"login-box\">\r\n      <img src=\"../../assets/img-login/usericon.png\" class=\"avatar\" alt=\"Avatar Image\">\r\n      <h1>Ingresa tus datos aqui</h1>\r\n      <form>\r\n        <!-- USERNAME INPUT -->\r\n        <label for=\"Usuario\">Usuario</label>\r\n        <input id=\"username\" [(ngModel)]=\"username\" type=\"text\" name=\"operator1\" placeholder=\"username\">\r\n        <!-- PASSWORD INPUT -->\r\n        <label for=\"Contrase\u00F1a\">Contrasena</label>\r\n        <input id=\"password\" [(ngModel)]=\"password\" type=\"password\" name=\"operator2\" placeholder=\"password\">\r\n        <input type=\"submit\" value=\"Entrar\" (click)=\"addition()\">\r\n        <a href=\"#\">\u00BFOlvidaste tu contrase\u00F1a?</a><br>\r\n        <a href=\"#\">\u00BFOlvidaste tu usuario?</a>\r\n      </form>\r\n    </div>\r\n  </body>\r\n</html>"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map