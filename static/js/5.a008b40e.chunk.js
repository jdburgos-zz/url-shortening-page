(this["webpackJsonpurl-shortening-page"]=this["webpackJsonpurl-shortening-page"]||[]).push([[5],{43:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(0);var r=n(49),i=n.n(r),o=n(1),a=function(t){var e=t.className?t.className:"",n="".concat(i.a.card," ").concat(e).trim();return Object(o.jsx)("div",{className:n,children:t.children})}},44:function(t,e,n){t.exports=n(57)},45:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return i}))},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s.a})),n.d(e,"c",(function(){return c.a})),n.d(e,"d",(function(){return f}));n(0);var r=n(48),i=n.n(r),o=n(1),a=function(t){var e=t.type,n=t.className,r=t.variant,a=t.onClick,s=t.disabled,c=t.children,u="semi-rectangle"===e?"".concat(i.a["semi-rectangle"]):"",l=n||"",h=r?"".concat(i.a[r]):"",f="".concat("btn"," ").concat(h," ").concat(u," ").concat(l).trim();return Object(o.jsx)("button",{className:f,type:e,onClick:a,disabled:s,children:c})},s=n(10),c=n(43),u=n(15),l=n(50),h=n.n(l),f=function(t){var e=t.className,n=t.onChange,r=t.input,i=e||"",a="".concat(h.a.input," ").concat(i).trim();return Object(o.jsx)("input",Object(u.a)({onChange:n,className:a},r))}},48:function(t,e,n){t.exports={"semi-rectangle":"Button_semi-rectangle__1hAsE",secondary:"Button_secondary__NYFMG"}},49:function(t,e,n){t.exports={card:"Card_card__3AJ-o"}},50:function(t,e,n){t.exports={input:"Input_input__3uLFF"}},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(17);var i=n(11);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},57:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===_){if("throw"===i)throw o;return F()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?_:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=_,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",_="completed",p={};function m(){}function g(){}function v(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,j=y&&y(y(E([])));j&&j!==n&&r.call(j,o)&&(b=j);var k=v.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function w(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,w(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=v,c(k,"constructor",v),c(v,"constructor",g),g.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},69:function(t,e,n){t.exports={"shorten-form":"ShortenForm_shorten-form__1EN7a","shorten-form__input":"ShortenForm_shorten-form__input__17AU-","shorten-form__input-error":"ShortenForm_shorten-form__input-error__3V14U","shorten-form__input-text":"ShortenForm_shorten-form__input-text__1ppX0"}},70:function(t,e,n){t.exports={"features-list":"FeaturesList_features-list__1cwEL","features-list__card":"FeaturesList_features-list__card__1gsk3","features-list__img":"FeaturesList_features-list__img__1wf7O","features-list__img-container":"FeaturesList_features-list__img-container__3WA1K","features-list__title":"FeaturesList_features-list__title__3z6NW","features-list__description":"FeaturesList_features-list__description__2Dcpd"}},71:function(t,e,n){t.exports={"shorten-link":"ShortenLink_shorten-link__bnMU9","shorten-link__header":"ShortenLink_shorten-link__header__13jCR","shorten-link__content":"ShortenLink_shorten-link__content__OSD-P","shorten-link__text":"ShortenLink_shorten-link__text__1KFD0","shorten-link__link":"ShortenLink_shorten-link__link__1te16","shorten-link__btn":"ShortenLink_shorten-link__btn__1KT3k"}},72:function(t,e,n){t.exports={"shorten-links":"ShortenLinks_shorten-links__2nd36"}},73:function(t,e,n){t.exports={home:"Home_home__1JXvv",home__image:"Home_home__image__2nx1h","get-started":"Home_get-started__1KcId","get-started__title":"Home_get-started__title__3zFva","get-started__description":"Home_get-started__description__mz3_V","get-started__btn":"Home_get-started__btn__2VUeR","secondary-content":"Home_secondary-content__3enB8","advanced-statistics":"Home_advanced-statistics__2Oklp","advanced-statistics__title":"Home_advanced-statistics__title__11xYM","advanced-statistics__description":"Home_advanced-statistics__description__Qm-K3"}},92:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var r=n(5),i=n(0),o=n(24),a=n(46),s=n(44),c=n.n(s),u=n(45),l=n(25),h=n(23),f=n(69),d=n.n(f),_=n(1),p=function(){var t=Object(i.useRef)(),e=Object(i.useState)(!1),n=Object(r.a)(e,2),s=n[0],f=n[1],p=Object(i.useState)(!1),m=Object(r.a)(p,2),g=m[0],v=m[1],b=Object(i.useState)(""),y=Object(r.a)(b,2),j=y[0],k=y[1],x=Object(o.b)(),O=function(){var t=Object(u.a)(c.a.mark((function t(e){var n,r,i,o,a,s,u,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,fetch("https://api.shrtco.de/v2/shorten?url=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,v(!1),i=r.result,o=i.original_link,a=i.full_short_link,s={url:o,shortenLink:a},(u=localStorage.getItem("shortenLinks"))?((l=JSON.parse(u)).push(s),localStorage.setItem("shortenLinks",JSON.stringify(l)),x(h.b.setLinks(l))):(localStorage.setItem("shortenLinks",JSON.stringify([s])),x(h.b.setLinks([s]))),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),f(!0),k("Please add a valid link");case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}(),w=function(){f(!t.current.value),t.current.value?O(t.current.value):k("Please add a link")},L=s?"".concat(d.a["shorten-form__input-error"]):"",N="".concat(d.a["shorten-form__input"]," ").concat(L).trim(),S=Object(_.jsx)("span",{className:d.a["shorten-form__input-text"],children:j}),E=g?Object(_.jsx)(l.a,{}):"Shorten It!",F={ref:t,placeholder:"Shorten a link here...",type:"url",onKeyUp:function(t){"Enter"===t.code&&w()}};return Object(_.jsxs)("div",{className:d.a["shorten-form"],style:{backgroundImage:"url(".concat("/url-shortening-page","/images/bg-shorten-mobile.svg)")},children:[Object(_.jsx)(a.d,{className:N,input:F}),s&&S,Object(_.jsx)(a.a,{type:"semi-rectangle",disabled:g,onClick:function(){w()},children:E})]})},m=n(43),g=n(70),v=n.n(g),b=[{title:"Brand Recognition",description:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",img:"".concat("/url-shortening-page","/images/icon-brand-recognition.svg")},{title:"Detailed Records",description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",img:"".concat("/url-shortening-page","/images/icon-detailed-records.svg")},{title:"Fully Customizable",description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",img:"".concat("/url-shortening-page","/images/icon-fully-customizable.svg")}].map((function(t,e){var n=t.title,r=t.description,i=t.img;return Object(_.jsxs)(m.a,{className:v.a["features-list__card"],children:[Object(_.jsx)("div",{className:v.a["features-list__img-container"],children:Object(_.jsx)("img",{className:v.a["features-list__img"],src:i,alt:n})}),Object(_.jsx)("h4",{className:v.a["features-list__title"],children:n}),Object(_.jsx)("p",{className:v.a["features-list__description"],children:r})]},e)})),y=function(){return Object(_.jsx)("div",{className:v.a["features-list"],children:b})},j=n(56),k=n(71),x=n.n(k),O=function(t){var e=t.link,n=Object(i.useState)("Copy"),o=Object(r.a)(n,2),s=o[0],c=o[1],u=Object(i.useState)("primary"),l=Object(r.a)(u,2),h=l[0],f=l[1],d=e.url,p=e.shortenLink;return Object(_.jsxs)(a.c,{className:x.a["shorten-link"],children:[Object(_.jsx)("div",{className:x.a["shorten-link__header"],children:Object(_.jsx)("span",{className:x.a["shorten-link__link"],children:d})}),Object(_.jsxs)("div",{className:x.a["shorten-link__content"],children:[Object(_.jsx)("span",{className:x.a["shorten-link__text"],children:Object(_.jsx)("span",{className:x.a["shorten-link__link"],children:p})}),Object(_.jsx)(a.a,{type:"semi-rectangle",variant:h,className:x.a["shorten-link__btn"],onClick:function(){navigator.clipboard.writeText(p),c("Copied!"),f("secondary")},children:s})]})]})},w=n(72),L=n.n(w),N=function(t){var e=t.links,n=Object(j.a)(e).reverse().map((function(t,e){return Object(_.jsx)(O,{link:t},e)}));return Object(_.jsx)("div",{className:L.a["shorten-links"],children:n})},S=n(73),E=n.n(S);function F(){var t=Object(o.b)(),e=Object(i.useState)(!1),n=Object(r.a)(e,2),s=n[0],c=n[1],u=Object(o.c)((function(t){return t.shortenLinks.links}));return Object(i.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("shortenLinks"));c(e&&!!e.length),t(h.b.setLinks(e))}()}),[t]),Object(_.jsxs)("div",{className:E.a.home,children:[Object(_.jsx)("img",{className:E.a.home__image,src:"".concat("/url-shortening-page","/images/illustration-working.svg"),alt:"working"}),Object(_.jsxs)("div",{className:E.a["get-started"],children:[Object(_.jsx)("h2",{className:E.a["get-started__title"],children:"More than just shorter links"}),Object(_.jsx)("p",{className:E.a["get-started__description"],children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(_.jsx)(a.b,{to:"/features",className:E.a["get-started__btn"],children:"Get Started"})]}),Object(_.jsx)(p,{}),Object(_.jsxs)("div",{className:E.a["secondary-content"],children:[s&&Object(_.jsx)(N,{links:u}),Object(_.jsxs)("div",{className:E.a["advanced-statistics"],children:[Object(_.jsx)("h3",{className:E.a["advanced-statistics__title"],children:"Advanced Statistics"}),Object(_.jsx)("p",{className:E.a["advanced-statistics__description"],children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(_.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=5.a008b40e.chunk.js.map