(this["webpackJsonpurl-shortening-page"]=this["webpackJsonpurl-shortening-page"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",home__image:"Home_home__image__2nx1h","get-started":"Home_get-started__1KcId","get-started__title":"Home_get-started__title__3zFva","get-started__description":"Home_get-started__description__mz3_V","get-started__btn":"Home_get-started__btn__2VUeR","secondary-content":"Home_secondary-content__3enB8","advanced-statistics":"Home_advanced-statistics__2Oklp","advanced-statistics__title":"Home_advanced-statistics__title__11xYM","advanced-statistics__description":"Home_advanced-statistics__description__Qm-K3"}},function(e,t,n){e.exports={"main-menu__btn":"MainMenu_main-menu__btn__R6dCS","main-menu__container":"MainMenu_main-menu__container__2rJ6e","main-menu__item":"MainMenu_main-menu__item__zVKJN"}},function(e,t,n){e.exports={"footer__first-section":"Footer_footer__first-section__ZFQw2","footer__first-section-title":"Footer_footer__first-section-title__12qhL","footer__first-section-btn":"Footer_footer__first-section-btn__3YREh","footer__second-section":"Footer_footer__second-section__3epex","footer__second-section-logo":"Footer_footer__second-section-logo__1g2gp"}},function(e,t,n){e.exports={"features-list":"FeaturesList_features-list__1cwEL","features-list__card":"FeaturesList_features-list__card__1gsk3","features-list__img":"FeaturesList_features-list__img__1wf7O","features-list__img-container":"FeaturesList_features-list__img-container__3WA1K","features-list__title":"FeaturesList_features-list__title__3z6NW","features-list__description":"FeaturesList_features-list__description__2Dcpd"}},function(e,t,n){e.exports={"links-list":"LinksList_links-list__3bPqd","links-list__title":"LinksList_links-list__title__3PwmK","links-list__items":"LinksList_links-list__items__2VDdO","links-list__link":"LinksList_links-list__link__2MRhs"}},,,,,,function(e,t,n){e.exports={"auth-menu__container":"AuthMenu_auth-menu__container__1oYxF","auth-menu__item":"AuthMenu_auth-menu__item__1KYW1","auth-menu__btn":"AuthMenu_auth-menu__btn__1PDD6"}},function(e,t,n){e.exports={header:"Header_header__1xxN3",header__logo:"Header_header__logo__-aCir"}},function(e,t,n){e.exports={"social-links":"SocialLinks_social-links__6DPcR","social-link":"SocialLinks_social-link__rqoyh"}},function(e,t,n){e.exports={"shorten-form":"ShortenForm_shorten-form__1EN7a","shorten-form__input":"ShortenForm_shorten-form__input__17AU-"}},,,,function(e,t,n){e.exports={"footer-links":"FooterLinks_footer-links__3XNVZ"}},function(e,t,n){e.exports={"main-container":"MainContainer_main-container__3OiOk"}},function(e,t,n){e.exports={input:"Input_input__3uLFF"}},function(e,t,n){e.exports={"semi-rectangle":"Button_semi-rectangle__1hAsE"}},function(e,t,n){e.exports={card:"Card_card__3AJ-o"}},function(e,t,n){e.exports={features:"Features_features__38VPO"}},function(e,t,n){e.exports={pricing:"Pricing_pricing__1pgwv"}},function(e,t,n){e.exports={resources:"Resources_resources__3ADrr"}},function(e,t,n){e.exports={admin:"Admin_admin__1_QJd"}},function(e,t,n){e.exports={"not-found":"NotFound_not-found__EyT33"}},function(e,t,n){e.exports={login:"Login_login__PjBUD"}},function(e,t,n){e.exports={"sign-up":"SignUp_sign-up__2G7dD"}},,,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(20),a=n.n(c),r=n(3),o=n(2),l=(n(41),n(35)),_=n(0),u=function(e){var t=e.className?e.className:"",n="btn ".concat(t).trim();return Object(_.jsx)(r.b,{className:n,to:e.to,onClick:e.onClick,children:e.children})},d=n(16),m=n.n(d),j=function(e){return Object(_.jsxs)("div",{className:m.a["auth-menu__container"],children:[Object(_.jsx)(r.b,{to:"/auth/login",className:m.a["auth-menu__item"],onClick:e.onClick,children:"Login"}),Object(_.jsx)(u,{to:"/auth/signup",onClick:e.onClick,children:"Sign Up"})]})},h=n(7),b=n.n(h),g=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i((function(e){return!e}))},a=Object(_.jsxs)("div",{className:b.a["main-menu__container"],children:[Object(_.jsx)(r.b,{to:"/features",className:b.a["main-menu__item"],onClick:c,children:"Features"}),Object(_.jsx)(r.b,{to:"/pricing",className:b.a["main-menu__item"],onClick:c,children:"Pricing"}),Object(_.jsx)(r.b,{to:"/resources",className:b.a["main-menu__item"],onClick:c,children:"Resources"}),Object(_.jsx)(j,{onClick:c})]});return Object(_.jsxs)("div",{className:b.a["main-menu"],children:[Object(_.jsx)("div",{className:b.a["main-menu__btn"],onClick:c,children:Object(_.jsx)("i",{className:"fas fa-bars"})}),n&&a]})},f=n(17),p=n.n(f),x=function(){return Object(_.jsxs)("header",{className:p.a.header,children:[Object(_.jsx)(r.b,{to:"/",className:p.a.header__logo,children:Object(_.jsx)("img",{src:"".concat("/url-shortening-page","/images/logo.svg"),alt:"Shortly"})}),Object(_.jsx)(g,{})]})},O=n(10),k=n.n(O),N=function(e){var t=e.list.links.map((function(e,t){return Object(_.jsx)("li",{className:k.a["links-list__item"],children:Object(_.jsx)(r.b,{to:e.url,className:k.a["links-list__link"],children:e.title})},t)}));return Object(_.jsxs)("div",{className:k.a["links-list"],children:[Object(_.jsx)("h4",{className:k.a["links-list__title"],children:e.list.title}),Object(_.jsx)("ul",{className:k.a["links-list__items"],children:t})]})},v=n(23),w=n.n(v),y=[{title:"Features",links:[{title:"Link Shortening",url:"/features/link-shortening"},{title:"Branded Links",url:"/features/branded-links"},{title:"Analytics",url:"/features/analytics"}]},{title:"Resources",links:[{title:"Blog",url:"/resources/blog"},{title:"Developers",url:"/resources/developers"},{title:"Support",url:"/resources/support"}]},{title:"Company",links:[{title:"About",url:"/company/about"},{title:"Our Team",url:"/company/our-team"},{title:"Careers",url:"/company/careers"},{title:"Contact",url:"/company/contact"}]}].map((function(e,t){return Object(_.jsx)(N,{list:e},t)})),F=function(){return Object(_.jsx)("div",{className:w.a["footer-links"],children:y})},L=n(18),C=n.n(L),S=[{name:"Facebook",img:"facebook.svg",url:"https://www.facebook.com"},{name:"Twitter",img:"twitter.svg",url:"https://www.twitter.com"},{name:"Pinterest",img:"pinterest.svg",url:"https://www.pinterest.com"},{name:"Instagram",img:"instagram.svg",url:"https://www.instagram.com"}].map((function(e,t){return Object(_.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:C.a["social-link"],children:Object(_.jsx)("img",{src:"".concat("/url-shortening-page","/images/").concat(e.img),alt:e.name,title:e.name})},t)})),M=function(){return Object(_.jsx)("div",{className:C.a["social-links"],children:S})},A=n(8),B=n.n(A),H=function(){return Object(_.jsxs)("div",{className:B.a.footer,children:[Object(_.jsxs)("div",{className:B.a["footer__first-section"],style:{backgroundImage:"url(".concat("/url-shortening-page","/images/bg-boost-mobile.svg)")},children:[Object(_.jsx)("h3",{className:B.a["footer__first-section-title"],children:"Boost your links today"}),Object(_.jsx)(u,{to:"/features",className:B.a["footer__first-section-btn"],children:"Get Started"})]}),Object(_.jsxs)("div",{className:B.a["footer__second-section"],children:[Object(_.jsx)(r.b,{to:"/",className:B.a["footer__second-section-logo"],children:Object(_.jsx)("img",{src:"".concat("/url-shortening-page","/images/logo-white.svg"),alt:"Shortly"})}),Object(_.jsx)(F,{}),Object(_.jsx)(M,{})]})]})},P=n(24),R=n.n(P),D=function(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(x,{}),Object(_.jsx)("main",{className:R.a["main-container"],children:e.children}),Object(_.jsx)(H,{})]})},I=n(36),z=n(25),J=n.n(z),K=function(e){var t=e.className?e.className:"",n="".concat(J.a.input," ").concat(t).trim();return Object(_.jsx)("input",Object(I.a)({onChange:e.onChange,className:n},e.input))},E=n(26),T=n.n(E),U=function(e){var t=e.type?"".concat(T.a["semi-rectangle"]):"",n=e.className?e.className:"",s="".concat("btn"," ").concat(t," ").concat(n).trim();return Object(_.jsx)("button",{className:s,type:e.type,children:e.children})},V=n(19),G=n.n(V),Y=function(){return Object(_.jsxs)("div",{className:G.a["shorten-form"],style:{backgroundImage:"url(".concat("/url-shortening-page","/images/bg-shorten-mobile.svg)")},children:[Object(_.jsx)(K,{className:G.a["shorten-form__input"],input:{placeholder:"Shorten a link here..."}}),Object(_.jsx)(U,{type:"semiRectangle",children:"Shorten It!"})]})},q=n(27),Q=n.n(q),W=function(e){var t=e.className?e.className:"",n="".concat(Q.a.card," ").concat(t).trim();return Object(_.jsx)("div",{className:n,children:e.children})},X=n(9),Z=n.n(X),$=[{title:"Brand Recognition",description:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.",img:"".concat("/url-shortening-page","/images/icon-brand-recognition.svg")},{title:"Detailed Records",description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",img:"".concat("/url-shortening-page","/images/icon-detailed-records.svg")},{title:"Fully Customizable",description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",img:"".concat("/url-shortening-page","/images/icon-fully-customizable.svg")}].map((function(e,t){var n=e.title,s=e.description,i=e.img;return Object(_.jsxs)(W,{className:Z.a["features-list__card"],children:[Object(_.jsx)("div",{className:Z.a["features-list__img-container"],children:Object(_.jsx)("img",{className:Z.a["features-list__img"],src:i,alt:n})}),Object(_.jsx)("h4",{className:Z.a["features-list__title"],children:n}),Object(_.jsx)("p",{className:Z.a["features-list__description"],children:s})]},t)})),ee=function(){return Object(_.jsx)("div",{className:Z.a["features-list"],children:$})},te=n(6),ne=n.n(te),se=function(){return Object(_.jsxs)("div",{className:ne.a.home,children:[Object(_.jsx)("img",{className:ne.a.home__image,src:"".concat("/url-shortening-page","/images/illustration-working.svg"),alt:"working"}),Object(_.jsxs)("div",{className:ne.a["get-started"],children:[Object(_.jsx)("h2",{className:ne.a["get-started__title"],children:"More than just shorter links"}),Object(_.jsx)("p",{className:ne.a["get-started__description"],children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(_.jsx)(u,{to:"/features",className:ne.a["get-started__btn"],children:"Get Started"})]}),Object(_.jsx)(Y,{}),Object(_.jsxs)("div",{className:ne.a["secondary-content"],children:[Object(_.jsxs)("div",{className:ne.a["advanced-statistics"],children:[Object(_.jsx)("h3",{className:ne.a["advanced-statistics__title"],children:"Advanced Statistics"}),Object(_.jsx)("p",{className:ne.a["advanced-statistics__description"],children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(_.jsx)(ee,{})]})]})},ie=n(28),ce=n.n(ie),ae=function(){return Object(_.jsx)("div",{className:ce.a.features,children:"Features"})},re=n(29),oe=n.n(re),le=function(){return Object(_.jsx)("div",{className:oe.a.pricing,children:"Pricing"})},_e=n(30),ue=n.n(_e),de=function(){return Object(_.jsx)("div",{className:ue.a.resources,children:"Resources"})},me=n(31),je=n.n(me),he=function(){return Object(_.jsx)("div",{className:je.a.admin,children:"Admin"})},be=n(32),ge=n.n(be),fe=function(){return Object(_.jsx)("div",{className:ge.a["not-found"],children:"NotFound"})},pe=n(33),xe=n.n(pe),Oe=function(){return Object(_.jsx)("div",{className:xe.a.login,children:"Login"})},ke=n(34),Ne=n.n(ke),ve=function(){return Object(_.jsx)("div",{className:Ne.a["sign-up"],children:"SignUp"})},we=function(){var e=Object(o.g)();return Object(_.jsx)(s.Fragment,{children:Object(_.jsxs)(o.d,{children:[Object(_.jsx)(o.b,{path:e.path,exact:!0,children:Object(_.jsx)(o.a,{to:"".concat(e.path,"/login")})}),Object(_.jsx)(o.b,{path:"".concat(e.path,"/login"),children:Object(_.jsx)(Oe,{})}),Object(_.jsx)(o.b,{path:"".concat(e.path,"/signup"),children:Object(_.jsx)(ve,{})}),Object(_.jsx)(o.b,{path:"*",children:Object(_.jsx)(fe,{})})]})})},ye=function(){return Object(_.jsx)(D,{children:Object(_.jsxs)(o.d,{children:[Object(_.jsx)(o.b,{path:"/url-shortening-page",exact:!0,children:Object(_.jsx)(se,{})}),Object(_.jsx)(o.b,{path:"/",exact:!0,children:Object(_.jsx)(o.a,{to:"/url-shortening-page"})}),Object(_.jsx)(o.b,{path:"/features",children:Object(_.jsx)(ae,{})}),Object(_.jsx)(o.b,{path:"/pricing",children:Object(_.jsx)(le,{})}),Object(_.jsx)(o.b,{path:"/resources",children:Object(_.jsx)(de,{})}),Object(_.jsx)(o.b,{path:"/auth",children:Object(_.jsx)(we,{})}),Object(_.jsx)(o.b,{path:"/admin",children:Object(_.jsx)(he,{})}),Object(_.jsx)(o.b,{path:"*",children:Object(_.jsx)(fe,{})})]})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),c(e),a(e)}))};a.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(r.a,{children:Object(_.jsx)(ye,{})})}),document.getElementById("root")),Fe()}],[[51,1,2]]]);
//# sourceMappingURL=main.1bb68faf.chunk.js.map