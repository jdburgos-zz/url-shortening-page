(this["webpackJsonpurl-shortening-page"]=this["webpackJsonpurl-shortening-page"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",home__image:"Home_home__image__2nx1h","get-started":"Home_get-started__1KcId","get-started__title":"Home_get-started__title__3zFva","get-started__description":"Home_get-started__description__mz3_V","get-started__btn":"Home_get-started__btn__2VUeR","secondary-content":"Home_secondary-content__3enB8","advanced-statistics":"Home_advanced-statistics__2Oklp","advanced-statistics__title":"Home_advanced-statistics__title__11xYM","advanced-statistics__description":"Home_advanced-statistics__description__Qm-K3"}},function(e,t,n){e.exports={"shorten-link":"ShortenLink_shorten-link__bnMU9","shorten-link__header":"ShortenLink_shorten-link__header__13jCR","shorten-link__content":"ShortenLink_shorten-link__content__OSD-P","shorten-link__text":"ShortenLink_shorten-link__text__1KFD0","shorten-link__link":"ShortenLink_shorten-link__link__1te16","shorten-link__btn":"ShortenLink_shorten-link__btn__1KT3k"}},,function(e,t,n){e.exports={"main-menu__btn":"MainMenu_main-menu__btn__R6dCS","main-menu__container":"MainMenu_main-menu__container__2rJ6e","main-menu__item":"MainMenu_main-menu__item__zVKJN"}},function(e,t,n){e.exports={"footer__first-section":"Footer_footer__first-section__ZFQw2","footer__first-section-title":"Footer_footer__first-section-title__12qhL","footer__first-section-btn":"Footer_footer__first-section-btn__3YREh","footer__second-section":"Footer_footer__second-section__3epex","footer__second-section-logo":"Footer_footer__second-section-logo__1g2gp"}},function(e,t,n){e.exports={"features-list":"FeaturesList_features-list__1cwEL","features-list__card":"FeaturesList_features-list__card__1gsk3","features-list__img":"FeaturesList_features-list__img__1wf7O","features-list__img-container":"FeaturesList_features-list__img-container__3WA1K","features-list__title":"FeaturesList_features-list__title__3z6NW","features-list__description":"FeaturesList_features-list__description__2Dcpd"}},function(e,t,n){e.exports={"auth-form":"AuthForm_auth-form__tLEbk","auth-form__container":"AuthForm_auth-form__container__mHacr","auth-form__title":"AuthForm_auth-form__title__1ShyR","auth-form__input":"AuthForm_auth-form__input__1deXa"}},,function(e,t,n){e.exports={"links-list":"LinksList_links-list__3bPqd","links-list__title":"LinksList_links-list__title__3PwmK","links-list__items":"LinksList_links-list__items__2VDdO","links-list__link":"LinksList_links-list__link__2MRhs"}},,,,function(e,t,n){e.exports={"shorten-form":"ShortenForm_shorten-form__1EN7a","shorten-form__input":"ShortenForm_shorten-form__input__17AU-","shorten-form__input-error":"ShortenForm_shorten-form__input-error__3V14U","shorten-form__input-text":"ShortenForm_shorten-form__input-text__1ppX0"}},function(e,t,n){e.exports={features:"Features_features__38VPO",features__title:"Features_features__title__1Dof9",features__description:"Features_features__description__1QvUe"}},function(e,t,n){e.exports={pricing:"Pricing_pricing__1pgwv",pricing__title:"Pricing_pricing__title__6T99R",pricing__description:"Pricing_pricing__description__hkFh7"}},function(e,t,n){e.exports={resources:"Resources_resources__3ADrr",resources__title:"Resources_resources__title__3zQmD",resources__description:"Resources_resources__description__2DPRY"}},,,,function(e,t,n){e.exports={"auth-menu__container":"AuthMenu_auth-menu__container__1oYxF","auth-menu__item":"AuthMenu_auth-menu__item__1KYW1","auth-menu__btn":"AuthMenu_auth-menu__btn__1PDD6"}},,,,,function(e,t,n){e.exports={header:"Header_header__1xxN3",header__logo:"Header_header__logo__-aCir"}},function(e,t,n){e.exports={"social-links":"SocialLinks_social-links__6DPcR","social-link":"SocialLinks_social-link__rqoyh"}},function(e,t,n){e.exports={"semi-rectangle":"Button_semi-rectangle__1hAsE",secondary:"Button_secondary__NYFMG"}},,,,function(e,t,n){e.exports={"footer-links":"FooterLinks_footer-links__3XNVZ"}},function(e,t,n){e.exports={"main-container":"MainContainer_main-container__3OiOk"}},function(e,t,n){e.exports={card:"Card_card__3AJ-o"}},function(e,t,n){e.exports={input:"Input_input__3uLFF"}},,function(e,t,n){e.exports={loader:"Loader_loader__2hZcM","sk-scaleout":"Loader_sk-scaleout__2WpPF"}},function(e,t,n){e.exports={"shorten-links":"ShortenLinks_shorten-links__2nd36"}},function(e,t,n){e.exports={admin:"Admin_admin__1_QJd"}},function(e,t,n){e.exports={"not-found":"NotFound_not-found__EyT33"}},function(e,t,n){e.exports={login:"Login_login__PjBUD"}},function(e,t,n){e.exports={"sign-up":"SignUp_sign-up__2G7dD"}},,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(23),a=n.n(r),c=n(9),o=n(3),l=n(25),_=Object(l.b)({name:"shortenLinks",initialState:{links:[]},reducers:{setLinks:function(e,t){e.links=t.payload}}}),u=_.actions,d=_.reducer,h=Object(l.a)({reducer:{shortenLinks:d}}),m=n(2),j=(n(58),n(6)),b=n(0),g=function(e){var t=e.className?e.className:"",n="btn ".concat(t).trim();return Object(b.jsx)(o.b,{className:n,to:e.to,onClick:e.onClick,children:e.children})},p=n(26),f=n.n(p),x=function(e){return Object(b.jsxs)("div",{className:f.a["auth-menu__container"],children:[Object(b.jsx)(o.b,{to:"/auth/login",className:f.a["auth-menu__item"],onClick:e.onClick,children:"Login"}),Object(b.jsx)(g,{to:"/auth/signup",className:f.a["auth-menu__btn"],onClick:e.onClick,children:"Sign Up"})]})},O=n(10),k=n.n(O),N=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],r=function(){i((function(e){return!e}))},a=Object(b.jsxs)("div",{className:k.a["main-menu__container"],children:[Object(b.jsx)(o.b,{to:"/features",className:k.a["main-menu__item"],onClick:r,children:"Features"}),Object(b.jsx)(o.b,{to:"/pricing",className:k.a["main-menu__item"],onClick:r,children:"Pricing"}),Object(b.jsx)(o.b,{to:"/resources",className:k.a["main-menu__item"],onClick:r,children:"Resources"}),Object(b.jsx)(x,{onClick:r})]});return Object(b.jsxs)("div",{className:k.a["main-menu"],children:[Object(b.jsx)("div",{className:k.a["main-menu__btn"],onClick:r,children:Object(b.jsx)("i",{className:"fas fa-bars"})}),n&&a]})},v=n(31),y=n.n(v),L=function(){return Object(b.jsxs)("header",{className:y.a.header,children:[Object(b.jsx)(o.b,{to:"/",className:y.a.header__logo,children:Object(b.jsx)("img",{src:"".concat("/url-shortening-page","/images/logo.svg"),alt:"Shortly"})}),Object(b.jsx)(N,{})]})},w=n(15),S=n.n(w),F=function(e){var t=e.list.links.map((function(e,t){return Object(b.jsx)("li",{className:S.a["links-list__item"],children:Object(b.jsx)(o.b,{to:e.url,className:S.a["links-list__link"],children:e.title})},t)}));return Object(b.jsxs)("div",{className:S.a["links-list"],children:[Object(b.jsx)("h4",{className:S.a["links-list__title"],children:e.list.title}),Object(b.jsx)("ul",{className:S.a["links-list__items"],children:t})]})},C=n(37),P=n.n(C),R=[{title:"Features",links:[{title:"Link Shortening",url:"/features/link-shortening"},{title:"Branded Links",url:"/features/branded-links"},{title:"Analytics",url:"/features/analytics"}]},{title:"Resources",links:[{title:"Blog",url:"/resources/blog"},{title:"Developers",url:"/resources/developers"},{title:"Support",url:"/resources/support"}]},{title:"Company",links:[{title:"About",url:"/company/about"},{title:"Our Team",url:"/company/our-team"},{title:"Careers",url:"/company/careers"},{title:"Contact",url:"/company/contact"}]}].map((function(e,t){return Object(b.jsx)(F,{list:e},t)})),A=function(){return Object(b.jsx)("div",{className:P.a["footer-links"],children:R})},M=n(32),B=n.n(M),D=[{name:"Facebook",img:"facebook.svg",url:"https://www.facebook.com"},{name:"Twitter",img:"twitter.svg",url:"https://www.twitter.com"},{name:"Pinterest",img:"pinterest.svg",url:"https://www.pinterest.com"},{name:"Instagram",img:"instagram.svg",url:"https://www.instagram.com"}].map((function(e,t){return Object(b.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:B.a["social-link"],children:Object(b.jsx)("img",{src:"".concat("/url-shortening-page","/images/").concat(e.img),alt:e.name,title:e.name})},t)})),H=function(){return Object(b.jsx)("div",{className:B.a["social-links"],children:D})},I=n(11),T=n.n(I),J=function(){return Object(b.jsxs)("div",{className:T.a.footer,children:[Object(b.jsxs)("div",{className:T.a["footer__first-section"],style:{backgroundImage:"url(".concat("/url-shortening-page","/images/bg-boost-mobile.svg)")},children:[Object(b.jsx)("h3",{className:T.a["footer__first-section-title"],children:"Boost your links today"}),Object(b.jsx)(g,{to:"/features",className:T.a["footer__first-section-btn"],children:"Get Started"})]}),Object(b.jsxs)("div",{className:T.a["footer__second-section"],children:[Object(b.jsx)(o.b,{to:"/",className:T.a["footer__second-section-logo"],children:Object(b.jsx)("img",{src:"".concat("/url-shortening-page","/images/logo-white.svg"),alt:"Shortly"})}),Object(b.jsx)(A,{}),Object(b.jsx)(H,{})]})]})},K=n(38),U=n.n(K),E=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(L,{}),Object(b.jsx)("main",{className:U.a["main-container"],children:e.children}),Object(b.jsx)(J,{})]})},z=n(33),V=n.n(z),G=function(e){var t=e.type,n=e.className,s=e.variant,i=e.onClick,r=e.disabled,a=e.children,c="semi-rectangle"===t?"".concat(V.a["semi-rectangle"]):"",o=n||"",l=s?"".concat(V.a[s]):"",_="".concat("btn"," ").concat(l," ").concat(c," ").concat(o).trim();return Object(b.jsx)("button",{className:_,type:t,onClick:i,disabled:r,children:a})},Y=n(39),Q=n.n(Y),W=function(e){var t=e.className?e.className:"",n="".concat(Q.a.card," ").concat(t).trim();return Object(b.jsx)("div",{className:n,children:e.children})},X=n(18),q=n(40),Z=n.n(q),$=function(e){var t=e.className,n=e.onChange,s=e.input,i=t||"",r="".concat(Z.a.input," ").concat(i).trim();return Object(b.jsx)("input",Object(X.a)({onChange:n,className:r},s))},ee=n(34),te=n.n(ee),ne=n(41),se=n(42),ie=n.n(se),re=function(){return Object(b.jsx)("div",{className:ie.a.loader})},ae=n(19),ce=n.n(ae),oe=function(){var e=Object(s.useRef)(),t=Object(s.useState)(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(s.useState)(!1),o=Object(j.a)(a,2),l=o[0],_=o[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),m=h[0],g=h[1],p=Object(c.b)(),f=function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,s,i,a,c,o,l,d;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,fetch("https://api.shrtco.de/v2/shorten?url=".concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,_(!1),i=s.result,a=i.original_link,c=i.full_short_link,o={url:a,shortenLink:c},(l=localStorage.getItem("shortenLinks"))?((d=JSON.parse(l)).push(o),localStorage.setItem("shortenLinks",JSON.stringify(d)),p(u.setLinks(d))):(localStorage.setItem("shortenLinks",JSON.stringify([o])),p(u.setLinks([o]))),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),r(!0),g("Please add a valid link");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){r(!e.current.value),e.current.value?f(e.current.value):g("Please add a link")},O=i?"".concat(ce.a["shorten-form__input-error"]):"",k="".concat(ce.a["shorten-form__input"]," ").concat(O).trim(),N=Object(b.jsx)("span",{className:ce.a["shorten-form__input-text"],children:m}),v=l?Object(b.jsx)(re,{}):"Shorten It!",y={ref:e,placeholder:"Shorten a link here...",type:"url",onKeyUp:function(e){"Enter"===e.code&&x()}};return Object(b.jsxs)("div",{className:ce.a["shorten-form"],style:{backgroundImage:"url(".concat("/url-shortening-page","/images/bg-shorten-mobile.svg)")},children:[Object(b.jsx)($,{className:k,input:y}),i&&N,Object(b.jsx)(G,{type:"semi-rectangle",disabled:l,onClick:function(){x()},children:v})]})},le=n(12),_e=n.n(le),ue=[{title:"Brand Recognition",description:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",img:"".concat("/url-shortening-page","/images/icon-brand-recognition.svg")},{title:"Detailed Records",description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",img:"".concat("/url-shortening-page","/images/icon-detailed-records.svg")},{title:"Fully Customizable",description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",img:"".concat("/url-shortening-page","/images/icon-fully-customizable.svg")}].map((function(e,t){var n=e.title,s=e.description,i=e.img;return Object(b.jsxs)(W,{className:_e.a["features-list__card"],children:[Object(b.jsx)("div",{className:_e.a["features-list__img-container"],children:Object(b.jsx)("img",{className:_e.a["features-list__img"],src:i,alt:n})}),Object(b.jsx)("h4",{className:_e.a["features-list__title"],children:n}),Object(b.jsx)("p",{className:_e.a["features-list__description"],children:s})]},t)})),de=function(){return Object(b.jsx)("div",{className:_e.a["features-list"],children:ue})},he=n(48),me=n(8),je=n.n(me),be=function(e){var t=e.link,n=Object(s.useState)("Copy"),i=Object(j.a)(n,2),r=i[0],a=i[1],c=Object(s.useState)("primary"),o=Object(j.a)(c,2),l=o[0],_=o[1],u=t.url,d=t.shortenLink;return Object(b.jsxs)(W,{className:je.a["shorten-link"],children:[Object(b.jsx)("div",{className:je.a["shorten-link__header"],children:Object(b.jsx)("span",{className:je.a["shorten-link__link"],children:u})}),Object(b.jsxs)("div",{className:je.a["shorten-link__content"],children:[Object(b.jsx)("span",{className:je.a["shorten-link__text"],children:Object(b.jsx)("span",{className:je.a["shorten-link__link"],children:d})}),Object(b.jsx)(G,{type:"semi-rectangle",variant:l,className:je.a["shorten-link__btn"],onClick:function(){navigator.clipboard.writeText(d),a("Copied!"),_("secondary")},children:r})]})]})},ge=n(43),pe=n.n(ge),fe=function(e){var t=e.links,n=Object(he.a)(t).reverse().map((function(e,t){return Object(b.jsx)(be,{link:e},t)}));return Object(b.jsx)("div",{className:pe.a["shorten-links"],children:n})},xe=n(7),Oe=n.n(xe),ke=function(){var e=Object(c.b)(),t=Object(s.useState)(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],a=Object(c.c)((function(e){return e.shortenLinks.links}));return Object(s.useEffect)((function(){!function(){var t=JSON.parse(localStorage.getItem("shortenLinks"));r(t&&!!t.length),e(u.setLinks(t))}()}),[e]),Object(b.jsxs)("div",{className:Oe.a.home,children:[Object(b.jsx)("img",{className:Oe.a.home__image,src:"".concat("/url-shortening-page","/images/illustration-working.svg"),alt:"working"}),Object(b.jsxs)("div",{className:Oe.a["get-started"],children:[Object(b.jsx)("h2",{className:Oe.a["get-started__title"],children:"More than just shorter links"}),Object(b.jsx)("p",{className:Oe.a["get-started__description"],children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(b.jsx)(g,{to:"/features",className:Oe.a["get-started__btn"],children:"Get Started"})]}),Object(b.jsx)(oe,{}),Object(b.jsxs)("div",{className:Oe.a["secondary-content"],children:[i&&Object(b.jsx)(fe,{links:a}),Object(b.jsxs)("div",{className:Oe.a["advanced-statistics"],children:[Object(b.jsx)("h3",{className:Oe.a["advanced-statistics__title"],children:"Advanced Statistics"}),Object(b.jsx)("p",{className:Oe.a["advanced-statistics__description"],children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(b.jsx)(de,{})]})]})},Ne=n(20),ve=n.n(Ne),ye=function(){return Object(b.jsxs)("div",{className:ve.a.features,children:[Object(b.jsx)("img",{className:ve.a.home__image,src:"".concat("/url-shortening-page","/images/6685.jpg"),alt:"working"}),Object(b.jsx)("h2",{className:ve.a.features__title,children:"Features"}),Object(b.jsx)("p",{className:ve.a.features__description,children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."})]})},Le=n(21),we=n.n(Le),Se=function(){return Object(b.jsxs)("div",{className:we.a.pricing,children:[Object(b.jsx)("img",{className:we.a.home__image,src:"".concat("/url-shortening-page","/images/business.jpg"),alt:"working"}),Object(b.jsx)("h2",{className:we.a.pricing__title,children:"Pricing"}),Object(b.jsx)("p",{className:we.a.pricing__description,children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."})]})},Fe=n(22),Ce=n.n(Fe),Pe=function(){return Object(b.jsxs)("div",{className:Ce.a.resources,children:[Object(b.jsx)("img",{className:Ce.a.home__image,src:"".concat("/url-shortening-page","/images/april.jpg"),alt:"working"}),Object(b.jsx)("h2",{className:Ce.a.resources__title,children:"Resources"}),Object(b.jsx)("p",{className:Ce.a.resources__description,children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."})]})},Re=n(44),Ae=n.n(Re),Me=function(){return Object(b.jsx)("div",{className:Ae.a.admin,children:"Admin"})},Be=n(45),De=n.n(Be),He=function(){return Object(b.jsx)("div",{className:De.a["not-found"],children:"NotFound"})},Ie=n(13),Te=n.n(Ie),Je=function(e){var t=e.title,n=e.btnText,i={ref:Object(s.useRef)(),placeholder:"User",type:"text"},r={ref:Object(s.useRef)(),placeholder:"Password",type:"password"};return Object(b.jsxs)("div",{className:Te.a["auth-form"],children:[Object(b.jsx)("h2",{className:Te.a["auth-form__title"],children:t}),Object(b.jsxs)("div",{className:Te.a["auth-form__container"],children:[Object(b.jsx)($,{className:Te.a["auth-form__input"],input:i}),Object(b.jsx)($,{className:Te.a["auth-form__input"],input:r}),Object(b.jsx)(G,{className:Te.a["auth-form__btn"],type:"semi-rectangle",onClick:function(){},children:n})]})]})},Ke=n(46),Ue=n.n(Ke),Ee=function(){return Object(b.jsx)("div",{className:Ue.a.login,children:Object(b.jsx)(Je,{title:"Login",btnText:"Login"})})},ze=n(47),Ve=n.n(ze),Ge=function(){return Object(b.jsx)("div",{className:Ve.a["sign-up"],children:Object(b.jsx)(Je,{title:"Signup",btnText:"Signup"})})},Ye=function(){var e=Object(m.g)();return Object(b.jsx)(s.Fragment,{children:Object(b.jsxs)(m.d,{children:[Object(b.jsx)(m.b,{path:e.path,exact:!0,children:Object(b.jsx)(m.a,{to:"".concat(e.path,"/login")})}),Object(b.jsx)(m.b,{path:"".concat(e.path,"/login"),children:Object(b.jsx)(Ee,{})}),Object(b.jsx)(m.b,{path:"".concat(e.path,"/signup"),children:Object(b.jsx)(Ge,{})}),Object(b.jsx)(m.b,{path:"*",children:Object(b.jsx)(He,{})})]})})},Qe=function(){return Object(b.jsx)(E,{children:Object(b.jsxs)(m.d,{children:[Object(b.jsx)(m.b,{path:"/",exact:!0,children:Object(b.jsx)(ke,{})}),Object(b.jsx)(m.b,{path:"/features",children:Object(b.jsx)(ye,{})}),Object(b.jsx)(m.b,{path:"/pricing",children:Object(b.jsx)(Se,{})}),Object(b.jsx)(m.b,{path:"/resources",children:Object(b.jsx)(Pe,{})}),Object(b.jsx)(m.b,{path:"/auth",children:Object(b.jsx)(Ye,{})}),Object(b.jsx)(m.b,{path:"/admin",children:Object(b.jsx)(Me,{})}),Object(b.jsx)(m.b,{path:"*",children:Object(b.jsx)(He,{})})]})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(c.a,{store:h,children:Object(b.jsx)(o.a,{basename:"/url-shortening-page",children:Object(b.jsx)(Qe,{})})})}),document.getElementById("root")),We()}],[[65,1,2]]]);
//# sourceMappingURL=main.23bc7069.chunk.js.map