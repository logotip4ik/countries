(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(o,e,t){var content=t(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(76).default)("3efed984",content,!0,{sourceMap:!1})},273:function(o,e,t){"use strict";t(269)},274:function(o,e,t){var r=t(75)(!1);r.push([o.i,".dropdown[data-v-26dfd572]{position:relative;margin:.5rem 1rem}.dropdown--dark .dropdown--header[data-v-26dfd572]{background:#2b3945}.dropdown--dark .dropdown--header:hover *[data-v-26dfd572]{color:#fff}.dropdown--dark .dropdown--header *[data-v-26dfd572]{color:#6b95b8}.dropdown--dark .dropdown__content[data-v-26dfd572]{background:#2b3945;color:#fff}.dropdown--dark .dropdown__content--item[data-v-26dfd572]:hover{background:#334657}.dropdown--dark.dropdown--active .dropdown--header *[data-v-26dfd572]{color:#fff}.dropdown--active .dropdown--header *[data-v-26dfd572]{color:#000}.dropdown--active .dropdown__content[data-v-26dfd572]{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.dropdown--header[data-v-26dfd572]{padding:.75rem 1rem;background:#fff;box-shadow:0 5px 10px 0 rgba(0,0,0,.2);border-radius:.25rem;cursor:pointer;display:flex;align-items:center}.dropdown--header *[data-v-26dfd572]{font-weight:400;color:rgba(0,0,0,.6);transition:color .2s ease-in}.dropdown--header:hover *[data-v-26dfd572]{color:#000}.dropdown--header svg[data-v-26dfd572]{margin-left:1.5rem}.dropdown__content[data-v-26dfd572]{position:absolute;border-radius:.25rem;top:120%;left:0;right:0;background:#fff;box-shadow:0 5px 10px 0 rgba(0,0,0,.2);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:hidden;-webkit-clip-path:polygon(0 0,100% 0,100% 0,0 0);clip-path:polygon(0 0,100% 0,100% 0,0 0);transition:-webkit-clip-path .2s ease-out;transition:clip-path .2s ease-out;transition:clip-path .2s ease-out,-webkit-clip-path .2s ease-out}.dropdown__content--item[data-v-26dfd572]{font-size:1.1rem;cursor:pointer;padding:.75rem 2rem}.dropdown__content--item[data-v-26dfd572]:hover{background:rgba(0,0,0,.2)}",""]),o.exports=r},284:function(o,e,t){"use strict";t.r(e);t(33),t(24),t(32),t(11),t(45),t(25),t(46);var r=t(16),d=(t(63),t(26));function n(object,o){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),e.push.apply(e,t)}return e}var c={name:"Dropdown",data:function(){return{regions:["None","Africa","Americas","Asia","Europe","Oceania"],timeout:null,isOpened:!1,currRegion:"None"}},computed:function(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(o,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(source,e))}))}return o}({},Object(d.c)(["dark"])),methods:{toggleDropdown:function(){var o=this;this.isOpened=!this.isOpened,clearTimeout(this.timeout),this.isOpened&&(this.timeout=setTimeout((function(){o.isOpened=!1}),7500))}}},f=c,l=(t(273),t(38)),component=Object(l.a)(f,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{class:{dropdown:!0,"dropdown--dark":o.dark,"dropdown--active":o.isOpened}},[t("div",{staticClass:"dropdown--header",on:{click:o.toggleDropdown}},[t("h3",[o._v("\n      "+o._s("None"===o.currRegion?"Filter by Region":o.currRegion)+"\n    ")]),o._v(" "),t("fontAwesomeIcon",{attrs:{icon:"chevron-down"}})],1),o._v(" "),t("div",{staticClass:"dropdown__content"},o._l(o.regions,(function(e,r){return t("div",{key:r,staticClass:"dropdown__content--item",on:{click:function(t){o.$emit("select-region",e.toLowerCase()),o.toggleDropdown(),o.currRegion=e}}},[t("span",[o._v(o._s(e))])])})),0)])}),[],!1,null,"26dfd572",null);e.default=component.exports}}]);