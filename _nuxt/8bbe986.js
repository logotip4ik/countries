(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("c5f2d8de",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";r(281)},287:function(t,e,r){var n=r(75)(!1);n.push([t.i,".wrapper[data-v-6b326a19]{max-width:1600px;margin:0 auto;padding:2rem}.wrapper--dark[data-v-6b326a19]{color:#fff!important}.wrapper--dark .toolbar button[data-v-6b326a19]{background:#2b3945}.wrapper--dark .toolbar button *[data-v-6b326a19]{color:#6b95b8}.wrapper--dark .toolbar button:hover *[data-v-6b326a19]{color:#fff}.wrapper--dark .border-countries--item[data-v-6b326a19]{background:#2b3945}.toolbar[data-v-6b326a19]{width:100%;justify-content:flex-start;margin-bottom:3rem}.toolbar[data-v-6b326a19],.toolbar button[data-v-6b326a19]{display:flex;align-items:center}.toolbar button[data-v-6b326a19]{border:none;border-radius:.25rem;background:#fff;box-shadow:0 5px 10px 0 rgba(0,0,0,.2);padding:.5rem 2.5rem;font:inherit;cursor:pointer}.toolbar button *[data-v-6b326a19]{color:rgba(0,0,0,.6);transition:color .2s ease-in}.toolbar button:hover *[data-v-6b326a19]{color:#000}.toolbar button svg[data-v-6b326a19]{margin-right:1.5rem;transform:translateY(-1px)}.toolbar button span[data-v-6b326a19]{font-size:1.1rem;font-weight:600}.row[data-v-6b326a19]{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;width:100%;padding:0 1rem}.row img[data-v-6b326a19]{display:block;width:100%;height:auto}.row .col[data-v-6b326a19]{width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.row .col--padding[data-v-6b326a19]{padding:1rem 2rem}.row .col--header[data-v-6b326a19]{margin-bottom:2.5rem;font-size:3rem}.row .col__info[data-v-6b326a19]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;width:100%;margin-bottom:2rem}.row .col__info--item[data-v-6b326a19]{margin-bottom:1rem;padding:0 .5rem;align-items:center}.row .col__info--item[data-v-6b326a19],.row .col__info--item>div[data-v-6b326a19]{display:flex;justify-content:space-between;flex-wrap:wrap}.row .col__info--item .thick[data-v-6b326a19]{font-weight:800;margin-right:.5rem}.row .border-countries[data-v-6b326a19]{width:100%;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.row .border-countries span[data-v-6b326a19]:first-child{font-weight:800;font-size:1.05rem}.row .border-countries div[data-v-6b326a19]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center}.row .border-countries--item[data-v-6b326a19]{padding:.25rem .75rem;margin:1rem .5rem;box-shadow:0 0 10px 0 rgba(0,0,0,.1);border-radius:.25rem;word-break:keep-all}@media screen and (min-width:750px){.col[data-v-6b326a19]{max-width:40%}.info[data-v-6b326a19]{max-height:200px}}",""]),t.exports=n},292:function(t,e,r){"use strict";r.r(e);var n=r(16),o=r(9),c=(r(62),r(34),r(35),r(77),r(11),r(25),r(33),r(24),r(32),r(45),r(46),r(26));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"CountryPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,l,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=n.name,d=c.replace(/-/g," "),e.next=5,r.$get("https://restcountries.com/v2/name/".concat(d,"?fullText=true"));case 5:return l=e.sent[0],m=[{name:"Native Name",key:"nativeName"},{name:"Popultaion",key:"population"},{name:"Region",key:"region"},{name:"Sub Region",key:"subregion"},{name:"Capital",key:"capital"},{name:"Top Level Domain",key:"topLevelDomain"},{name:"Currencies",key:"currencies"},{name:"Languages",key:"languages"}],f=[],l.borders&&l.borders.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$get("https://restcountries.eu/rest/v2/alpha/".concat(e.toLowerCase()));case 2:n=t.sent,f.push(n.name);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.abrupt("return",{country:l,keys:m,borderCountries:f});case 10:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["dark"])),methods:{getTextContent:function(t){var text="";return t.forEach((function(e,r){e.name?r!==t.length-1?text+="".concat(e.name,", "):text+=e.name:e.name||(r!==t.length-1?text+="".concat(e,", "):text+=e)})),text}},head:function(){return{title:"Country: ".concat(this.country.name)}}},m=l,f=(r(286),r(38)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{wrapper:!0,"wrapper--dark":t.dark}},[r("div",{staticClass:"toolbar"},[r("button",{on:{click:function(e){return t.$router.push("/")}}},[r("fontAwesomeIcon",{attrs:{icon:"arrow-left"}}),t._v(" "),r("span",[t._v("Back")])],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("img",{attrs:{src:t.country.flag,alt:"Flag for "+t.country.name}})]),t._v(" "),r("div",{staticClass:"col col--padding"},[r("h1",{staticClass:"col--header"},[t._v(t._s(t.country.name))]),t._v(" "),r("div",{staticClass:"col__info"},t._l(t.keys,(function(e,n){return r("div",{key:n,staticClass:"col__info--item"},[r("span",{staticClass:"thick"},[t._v(t._s(e.name)+":")]),t._v(" "),"object"!=typeof t.country[e.key]?r("span",[t._v("\n            "+t._s(t.country[e.key])+"\n          ")]):t._o(r("div",[t._v("\n            "+t._s(t.getTextContent(t.country[e.key]))+"\n          ")]),0,n)])})),0),t._v(" "),r("div",{staticClass:"border-countries"},[0!==t.borderCountries.length?r("span",[t._v("Border Countries: ")]):r("span",[t._v(t._s(t.country.name)+" doesn't have any Border Countries\n        ")]),t._v(" "),t._l(t.borderCountries,(function(e,n){return r("span",{key:n,staticClass:"border-countries--item"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2)])])])}),[],!1,null,"6b326a19",null);e.default=component.exports}}]);