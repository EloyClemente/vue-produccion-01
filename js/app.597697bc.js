(function(t){function e(e){for(var o,u,a=e[0],l=e[1],s=e[2],c=0,p=[];c<a.length;c++)u=a[c],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&p.push(n[u][0]),n[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=i[0]))}return t}var o={},n={app:0},r=[];function u(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.m=t,u.c=o,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(i,o,function(e){return t[e]}.bind(null,o));return i},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var o=i("85ec"),n=i.n(o);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container",attrs:{id:"1234"},on:{click:function(e){t.mostrar("1234",e)}}},[i("h3",{staticClass:"titulo"},[t._v("Título 1")]),i("transition",{attrs:{name:"fade"}},["1234"==t.id?i("div",[i("Componente01")],1):t._e()])],1),i("div",{staticClass:"container",attrs:{id:"4567"},on:{click:function(e){t.mostrar("5678",e)}}},[i("h3",{staticClass:"titulo"},[t._v("Título 2")]),i("transition",{attrs:{name:"fade"}},["5678"==t.id?i("div",[i("Componente02")],1):t._e()])],1)])},r=[],u=(i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contenido"},[i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")])])}],l=i("2877"),s={},d=Object(l["a"])(s,u,a,!1,null,null,null),c=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contenido"},[i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")]),i("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui laudantium eligendi natus, doloribus, deserunt soluta voluptate quidem dolores maiores ipsa? Sapiente distinctio dolorum reiciendis voluptate optio voluptatum velit aperiam? ")])])}],v={},f=Object(l["a"])(v,p,m,!1,null,null,null),h=f.exports,b={name:"App",components:{Componente01:c,Componente02:h},data:function(){return{id:"vacio",id_borrar:null}},methods:{mostrar:function(t,e){var i=document.getElementsByClassName("container"),o=!0,n=!1,r=void 0;try{for(var u,a=i[Symbol.iterator]();!(o=(u=a.next()).done);o=!0){var l=u.value;l.style.height="30px",l.children[0].style.color="#333"}}catch(d){n=!0,r=d}finally{try{o||null==a.return||a.return()}finally{if(n)throw r}}var s=e.currentTarget;30==e.currentTarget.offsetHeight?(this.id=t,setTimeout((function(){s.style.height=s.children[1].children[0].offsetHeight+30+"px",s.children[0].style.color="royalblue"}),10)):s.style.height="30px"}}},g=b,_=(i("034f"),Object(l["a"])(g,n,r,!1,null,null,null)),y=_.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.597697bc.js.map