(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(t,e,r){var content=r(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("08409535",content,!0,{sourceMap:!1})},237:function(t,e,r){"use strict";r(232)},238:function(t,e,r){(e=r(38)(!1)).push([t.i,".wrapper[data-v-6b4c5125]{max-width:1600px;margin:0 auto;padding:2rem}.wrapper--dark[data-v-6b4c5125]{color:#fff!important}.wrapper--dark .toolbar button[data-v-6b4c5125]{background:#2b3945}.wrapper--dark .toolbar button *[data-v-6b4c5125]{color:#6b95b8}.wrapper--dark .toolbar button:hover *[data-v-6b4c5125]{color:#fff}.wrapper--dark .border-countries--item[data-v-6b4c5125]{background:#2b3945}.toolbar[data-v-6b4c5125]{width:100%;justify-content:flex-start;margin-bottom:3rem}.toolbar[data-v-6b4c5125],.toolbar button[data-v-6b4c5125]{display:flex;align-items:center}.toolbar button[data-v-6b4c5125]{border:none;border-radius:.25rem;background:#fff;box-shadow:0 5px 10px 0 rgba(0,0,0,.2);padding:.5rem 2.5rem;font:inherit;cursor:pointer}.toolbar button *[data-v-6b4c5125]{color:rgba(0,0,0,.6);transition:color .2s ease-in}.toolbar button:hover *[data-v-6b4c5125]{color:#000}.toolbar button svg[data-v-6b4c5125]{margin-right:1.5rem;transform:translateY(-1px)}.toolbar button span[data-v-6b4c5125]{font-size:1.1rem;font-weight:600}.row[data-v-6b4c5125]{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;width:100%;padding:0 1rem}.row img[data-v-6b4c5125]{display:block;width:100%;height:auto}.row .col[data-v-6b4c5125]{width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.row .col--padding[data-v-6b4c5125]{padding:1rem 2rem}.row .col--header[data-v-6b4c5125]{margin-bottom:2.5rem;font-size:3rem}.row .col__info[data-v-6b4c5125]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;width:100%;margin-bottom:2rem}.row .col__info--item[data-v-6b4c5125]{margin-bottom:1rem;padding:0 .5rem;align-items:center}.row .col__info--item[data-v-6b4c5125],.row .col__info--item>div[data-v-6b4c5125]{display:flex;justify-content:space-between;flex-wrap:wrap}.row .col__info--item .thick[data-v-6b4c5125]{font-weight:800;margin-right:.5rem}.row .border-countries[data-v-6b4c5125]{width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.row .border-countries span[data-v-6b4c5125]:first-child{font-weight:800;font-size:1.05rem}.row .border-countries ul[data-v-6b4c5125]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;list-style:none}.row .border-countries--item[data-v-6b4c5125]{padding:.25rem .75rem;margin:1rem .5rem;box-shadow:0 0 10px 0 rgba(0,0,0,.1);border-radius:.25rem;word-break:keep-all;display:inline}@media screen and (min-width:750px){.col[data-v-6b4c5125]{max-width:40%}.col--padding[data-v-6b4c5125]{max-height:75vh}.info[data-v-6b4c5125]{max-height:200px}}",""]),t.exports=e},255:function(t,e,r){"use strict";r.r(e);r(57),r(55),r(32),r(56),r(60);var n=r(15),o=(r(40),r(6)),c=r(20);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"CountryPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=n.name,l=c.replace(/-/g," "),e.next=5,r.$get("https://restcountries.eu/rest/v2/name/".concat(l,"?fullText=true"));case 5:return d=e.sent[0],m=[{name:"Native Name",key:"nativeName"},{name:"Popultaion",key:"population"},{name:"Region",key:"region"},{name:"Sub Region",key:"subregion"},{name:"Capital",key:"capital"},{name:"Top Level Domain",key:"topLevelDomain"},{name:"Currencies",key:"currencies"},{name:"Languages",key:"languages"}],f=[],d.borders.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$get("https://restcountries.eu/rest/v2/alpha/".concat(e.toLowerCase()));case 2:n=t.sent,f.push(n.name);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.abrupt("return",{country:d,keys:m,borderCountries:f});case 10:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["dark"])),methods:{getTextContent:function(t){var text="";return t.forEach((function(e,r){e.name?r!==t.length-1?text+="".concat(e.name,", "):text+=e.name:e.name||(r!==t.length-1?text+="".concat(e,", "):text+=e)})),text}},head:function(){return{title:"Country: ".concat(this.country.name)}}},m=(r(237),r(26)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{wrapper:!0,"wrapper--dark":t.dark}},[r("div",{staticClass:"toolbar"},[r("button",{on:{click:function(e){return t.$router.push("/")}}},[r("fontAwesomeIcon",{attrs:{icon:"arrow-left"}}),t._v(" "),r("span",[t._v("Back")])],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("img",{attrs:{src:t.country.flag,alt:"Flag for "+t.country.name}})]),t._v(" "),r("div",{staticClass:"col col--padding"},[r("h1",{staticClass:"col--header"},[t._v(t._s(t.country.name))]),t._v(" "),r("div",{staticClass:"col__info"},t._l(t.keys,(function(e,n){return r("div",{key:n,staticClass:"col__info--item"},[r("span",{staticClass:"thick"},[t._v(t._s(e.name)+":")]),t._v(" "),"object"!=typeof t.country[e.key]?r("span",[t._v("\n            "+t._s(t.country[e.key])+"\n          ")]):t._o(r("div",[t._v("\n            "+t._s(t.getTextContent(t.country[e.key]))+"\n            ")]),0,n)])})),0),t._v(" "),r("div",{staticClass:"border-countries"},[0!==t.borderCountries.length?r("span",[t._v("Border Countries: ")]):r("span",[t._v(t._s(t.country.name)+" doesn't have any Border Countries\n        ")]),t._v(" "),r("ul",t._l(t.borderCountries,(function(e,n){return r("li",{key:n,staticClass:"border-countries--item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])])])])}),[],!1,null,"6b4c5125",null);e.default=component.exports}}]);