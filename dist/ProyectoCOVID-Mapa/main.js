(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/radagast/Documentos/ProyectoCOVID-Mapa/src/main.ts */"zUnb");


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


const _c0 = "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n\tmargin: 10px;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\nbody[_ngcontent-%COMP%] {\n\tline-height: 1;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n\tlist-style: none;\n}\n\nblockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n\tquotes: none;\n}\n\nblockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable[_ngcontent-%COMP%] {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n\nbody[_ngcontent-%COMP%] { text-align: center; font:300 20px/1.7; font-family: sans-serif}\n\n.header[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; font-family: sans-serif}\n\n.navbar[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; background: #abcdef; font-family: sans-serif}\n\n.tarifas[_ngcontent-%COMP%] { text-align: left; }\n\n.list-services[_ngcontent-%COMP%] {display: flex; align-items: center; justify-content: center;}\n\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { display: flex; justify-content: center; align-items: center; flex-flow: column;}\n\n\n\n.header[_ngcontent-%COMP%] { height: 450px; background: url('dummy-header.jpg') no-repeat center top; background-size: cover;}\n\n.navbar[_ngcontent-%COMP%] { height: 63px; background: #041f3a; border-bottom: 1px dashed #3498db;}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { padding: 0 20px; color: #fff; text-decoration: none; text-transform: uppercase; font-family: sans-serif}\n\n.title[_ngcontent-%COMP%] {margin-bottom: 40px; font: 60px 'sans-serif'; text-transform: uppercase;}\n\np[_ngcontent-%COMP%] {margin-bottom: 40px;}\n\n.btn[_ngcontent-%COMP%] { border: 2px solid rgb(0, 0, 0); padding: 10px 40px; display: inline-block; text-decoration: none; color: rgb(0, 0, 0);}\n\n\n\n.content[_ngcontent-%COMP%] { padding: 80px 0;}\n\n.who[_ngcontent-%COMP%] {background: #2c3e50; color: #fff;}\n\n.who[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 1055px; margin: 0 auto;}\n\n.services[_ngcontent-%COMP%] {background: #34495e;color: #fff;}\n\n.tarifas[_ngcontent-%COMP%] {background: url('Nuevas-medidas-fase-3.jpg') no-repeat center top; background-size: cover; color: rgb(0, 0, 0);}\n\n.contain[_ngcontent-%COMP%] {max-width: 1055px; margin: 0 auto;}\n\n.tarifas[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {max-width: 450px;}\n\n.localization[_ngcontent-%COMP%] {color: #34495e; padding-bottom: 0;}\n\n.localization[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%; width: 100%;}\n\n\n\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { position: relative; width: 150px; height: 190px;}\n\n.list-services[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:after {content: \"\"; position: absolute; top: 0; left: 0; border-radius: 50%; z-index: 0; background: #fff; width: 150px; height: 150px;}\n\n.list-services[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {position: relative; z-index: 1;}\n\n.list-services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { padding: 0 30px; }\n\n.list-services[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] { position: relative; left: 0; right: 0; bottom: -40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZ3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7O0FBRUQsWUFBWTs7QUFDWjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxZQUFZO0NBQ1osVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFDQSxnREFBZ0Q7O0FBQ2hEOztDQUVDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxhQUFhOztBQUNYLE9BQU8sa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCOztBQUVyRSxVQUFVLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUI7O0FBRTlGLFVBQVUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHVCQUF1Qjs7QUFFbkgsV0FBVyxnQkFBZ0IsRUFBRTs7QUFFN0IsZ0JBQWdCLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQzs7QUFDNUUsd0JBQXdCLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDekcsb0JBQW9COztBQUVsQixVQUFVLGFBQWEsRUFBRSx3REFBK0QsRUFBRSxzQkFBc0IsQ0FBQzs7QUFDakgsVUFBVSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsaUNBQWlDLENBQUM7O0FBQzdFLFlBQVksZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUI7O0FBQ3JILFFBQVEsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLENBQUM7O0FBQ2hGLEdBQUcsbUJBQW1CLENBQUM7O0FBRXZCLE9BQU8sOEJBQThCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7O0FBRS9ILG1CQUFtQjs7QUFDakIsV0FBVyxlQUFlLENBQUM7O0FBRXpCLE1BQU0sbUJBQW1CLEVBQUUsV0FBVyxDQUFDOztBQUNyQyxTQUFTLGlCQUFpQixFQUFFLGNBQWMsQ0FBQzs7QUFDN0MsV0FBVyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7O0FBRTNDLFVBQVUsaUVBQXdFLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUM7O0FBQzlILFVBQVUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDOztBQUM1QyxZQUFZLGdCQUFnQixDQUFDOztBQUUvQixlQUFlLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzs7QUFDL0Msd0JBQXdCLGVBQWUsRUFBRSxXQUFXLENBQUM7O0FBRTNELFlBQVk7O0FBRVYsd0JBQXdCLGtCQUFrQixFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7O0FBQ3hFLDZCQUE2QixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzs7QUFDM0osb0JBQW9CLGtCQUFrQixFQUFFLFVBQVUsQ0FBQzs7QUFDckQsb0JBQW9CLGVBQWUsRUFBRTs7QUFDckMsNEJBQTRCLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDOztBQUVuRixpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgU1RZTEVTIEdVSURFOlxuICAwLiBSRVNFVFxuICAxLiBMQVlPVVRcbiAgMi4gR0VORVJJQyBJVEVNU1xuICAzLiBQQVJUUyBPRiBXRUJcbiAgNC4gTElTVFxuICA1LiBGT1JNXG4gIDUuIEFOSU1BVElPTlNcbiAgLS0tLS0tLS0tLVxuICBDT0xPUlM6XG4gICAgY29sb3IxID0+ICMyYzNlNTA7XG4gICAgY29sb3IyID0+ICMzNDQ5NWU7XG4gICAgY29sb3IzID0+ICMzNDk4ZGI7XG4gICAgY29sb3I0ID0+ICNmZmY7XG4qL1xuXG4vKiAwIFJFU0VUICovXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMTBweDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogMSBMQVlPVVQgKi9cbiAgYm9keSB7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udDozMDAgMjBweC8xLjc7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmfVxuXG4gIC5oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZ9XG5cbiAgLm5hdmJhciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kOiAjYWJjZGVmOyBmb250LWZhbWlseTogc2Fucy1zZXJpZn1cblxuICAudGFyaWZhcyB7IHRleHQtYWxpZ246IGxlZnQ7IH1cblxuICAubGlzdC1zZXJ2aWNlcyB7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7fVxuICAubGlzdC1zZXJ2aWNlcyBmaWd1cmUgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC1mbG93OiBjb2x1bW47fVxuLyogMiBHRU5FUklDIElURU1TICovXG5cbiAgLmhlYWRlciB7IGhlaWdodDogNDUwcHg7IGJhY2tncm91bmQ6IHVybChpbWFnZW5lcy9kdW1teS1oZWFkZXIuanBnKSBuby1yZXBlYXQgY2VudGVyIHRvcDsgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjt9XG4gIC5uYXZiYXIgeyBoZWlnaHQ6IDYzcHg7IGJhY2tncm91bmQ6ICMwNDFmM2E7IGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzM0OThkYjt9XG4gICAgLm5hdmJhciBhIHsgcGFkZGluZzogMCAyMHB4OyBjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LWZhbWlseTogc2Fucy1zZXJpZn1cbiAgLnRpdGxlIHttYXJnaW4tYm90dG9tOiA0MHB4OyBmb250OiA2MHB4ICdzYW5zLXNlcmlmJzsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG4gIHAge21hcmdpbi1ib3R0b206IDQwcHg7fVxuXG4gIC5idG4geyBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7IHBhZGRpbmc6IDEwcHggNDBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiByZ2IoMCwgMCwgMCk7fVxuXG4vKiAzIFBBUlRTIE9GIFdFQiAqL1xuICAuY29udGVudCB7IHBhZGRpbmc6IDgwcHggMDt9XG5cbiAgICAud2hvIHtiYWNrZ3JvdW5kOiAjMmMzZTUwOyBjb2xvcjogI2ZmZjt9XG4gICAgICAud2hvIHAgeyBtYXgtd2lkdGg6IDEwNTVweDsgbWFyZ2luOiAwIGF1dG87fVxuICAgIC5zZXJ2aWNlcyB7YmFja2dyb3VuZDogIzM0NDk1ZTtjb2xvcjogI2ZmZjt9XG5cbiAgICAudGFyaWZhcyB7YmFja2dyb3VuZDogdXJsKGltYWdlbmVzL051ZXZhcy1tZWRpZGFzLWZhc2UtMy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBjb2xvcjogcmdiKDAsIDAsIDApO31cbiAgICAgIC5jb250YWluIHttYXgtd2lkdGg6IDEwNTVweDsgbWFyZ2luOiAwIGF1dG87fVxuICAgICAgLnRhcmlmYXMgcCB7bWF4LXdpZHRoOiA0NTBweDt9XG5cbiAgICAubG9jYWxpemF0aW9uIHtjb2xvcjogIzM0NDk1ZTsgcGFkZGluZy1ib3R0b206IDA7fVxuICAgICAgLmxvY2FsaXphdGlvbiAubWFwIGltZyB7bWF4LXdpZHRoOiAxMDAlOyB3aWR0aDogMTAwJTt9XG5cbi8qIDMgTElTVCAgKi9cblxuICAubGlzdC1zZXJ2aWNlcyBmaWd1cmUgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxOTBweDt9XG4gIC5saXN0LXNlcnZpY2VzIGZpZ3VyZTphZnRlciB7Y29udGVudDogXCJcIjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgei1pbmRleDogMDsgYmFja2dyb3VuZDogI2ZmZjsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4O31cbiAgICAubGlzdC1zZXJ2aWNlcyBpbWcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTt9XG4gIC5saXN0LXNlcnZpY2VzIGxpIHsgcGFkZGluZzogMCAzMHB4OyB9XG4gIC5saXN0LXNlcnZpY2VzIGZpZ2NhcHRpb24geyBwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IC00MHB4O31cblxuLyogMyBBTklNQVRJT05TICovIl19 */";
class LandingpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) { return new (t || LandingpageComponent)(); };
LandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingpageComponent, selectors: [["app-landingpage"]], decls: 49, vars: 0, consts: [["lang", "es"], ["charset", "utf-8"], [1, "header"], ["src", "imagenes/uv1.png", "alt", "uv Logo"], [1, "content", "who"], [1, "title"], [1, "content", "services"], [1, "list-services"], ["src", "imagenes/ico1.png", "alt", "Angular logo"], ["src", "imagenes/ico3.png", "alt", "Vue logo"], [1, "content", "tarifas"], [1, "contain"], ["href", "", 1, "btn"], [1, "content", "localization"], [1, "map"], ["src", "images/yZKgB.png", "alt", ""]], template: function LandingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyecto parcial 1 | Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "COVID-19 Estad\u00EDsticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim eligendi similique, necessitatibus quos atque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Herramientas de desarrollo para esta pagina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Somos un equipo de 6 estudiantes de la honorobale Universidad Veracruzana. Para el desarrollo de nuestro proyecto utilizamos las siguientes herramientas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Vue.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00BFPor qu\u00E9 es importante cuidar tu salud?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, odit. Beatae nostrum delectus, perspiciatis illum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "M\u00E1s informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Casos por estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quas molestias quibusdam cum corrupti deserunt, explicabo ipsam id, itaque iste!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c0, _c0] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ProyectoCOVID-Mapa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["routerLink", "", 1, "boton_personalizado"], ["routerLink", "map", 1, "boton_personalizado"], ["routerLink", "login", 1, "boton_personalizado"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagina Principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mapa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Raleway:300,700');\n\n  .boton_personalizado[_ngcontent-%COMP%]{\n    position: relative;\n    text-decoration: none;\n    padding: 8px;\n    font-weight: 600;\n    font-size: 20px;\n    color: #ffffff;\n    background-color: #1883ba;\n    border-radius: 5px;\n    border: 1px solid #0016b0;\n  }\n\n  .boton_personalizado[_ngcontent-%COMP%]:hover{\n    color: #1883ba;\n    background-color: #ffffff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFOztFQUVwRTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw3MDAnKTtcblxuICAuYm90b25fcGVyc29uYWxpemFkb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4M2JhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAxNmIwO1xuICB9XG5cbiAgLmJvdG9uX3BlcnNvbmFsaXphZG86aG92ZXJ7XG4gICAgY29sb3I6ICMxODgzYmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "AXwu");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_5__["LandingpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_5__["LandingpageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "AXwu");





const routes = [
    {
        path: '',
        component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_2__["LandingpageComponent"]
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