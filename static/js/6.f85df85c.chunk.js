(this["webpackJsonpurl-shortening-page"]=this["webpackJsonpurl-shortening-page"]||[]).push([[6],{44:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(0);var a=n(50),r=n.n(a),c=n(1),i=function(t){var e=t.className?t.className:"",n="".concat(r.a.card," ").concat(e).trim();return Object(c.jsx)("div",{className:n,children:t.children})}},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s.a})),n.d(e,"c",(function(){return o.a})),n.d(e,"d",(function(){return m}));n(0);var a=n(49),r=n.n(a),c=n(1),i=function(t){var e=t.type,n=t.className,a=t.variant,i=t.onClick,s=t.disabled,o=t.children,u="semi-rectangle"===e?"".concat(r.a["semi-rectangle"]):"",l=n||"",d=a?"".concat(r.a[a]):"",m="".concat("btn"," ").concat(d," ").concat(u," ").concat(l).trim();return Object(c.jsx)("button",{className:m,type:e,onClick:i,disabled:s,children:o})},s=n(13),o=n(44),u=n(17),l=n(51),d=n.n(l),m=function(t){var e=t.className,n=t.onChange,a=t.input,r=e||"",i="".concat(d.a.input," ").concat(r).trim();return Object(c.jsx)("input",Object(u.a)({onChange:n,className:i},a))}},49:function(t,e,n){t.exports={"semi-rectangle":"Button_semi-rectangle__1hAsE",secondary:"Button_secondary__NYFMG"}},50:function(t,e,n){t.exports={card:"Card_card__3AJ-o"}},51:function(t,e,n){t.exports={input:"Input_input__3uLFF"}},63:function(t,e,n){t.exports={"auth-form":"AuthForm_auth-form__tLEbk","auth-form__container":"AuthForm_auth-form__container__mHacr","auth-form__title":"AuthForm_auth-form__title__1ShyR","auth-form__input":"AuthForm_auth-form__input__1deXa"}},64:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(68),r=n(56),c=Object(a.a)({apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""}),i=Object(r.b)(c)},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(0),r=n(47),c=n(25),i=n(63),s=n.n(i),o=n(1),u=function(t){var e=t.title,n=t.btnText,i=t.submit,u=t.isLoading,l=Object(a.useRef)(),d=Object(a.useRef)(),m={ref:l,placeholder:"User",type:"text"},f={ref:d,placeholder:"Password",type:"password"},_=u?Object(o.jsx)(c.a,{}):n;return Object(o.jsxs)("div",{className:s.a["auth-form"],children:[Object(o.jsx)("h2",{className:s.a["auth-form__title"],children:e}),Object(o.jsxs)("div",{className:s.a["auth-form__container"],children:[Object(o.jsx)(r.d,{className:s.a["auth-form__input"],input:m}),Object(o.jsx)(r.d,{className:s.a["auth-form__input"],input:f}),Object(o.jsx)(r.a,{className:s.a["auth-form__btn"],type:"semi-rectangle",onClick:i.bind(null,l,d),children:_})]})]})}},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=n(45),r=n.n(a),c=n(46),i=n(5),s=n(0),o=n(2),u=n(7),l=n(56),d=n(65),m=n(83),f=n.n(m),_=n(64),h=n(10),p=n(1);function b(){var t=Object(o.g)(),e=Object(s.useState)(!1),n=Object(i.a)(e,2),a=n[0],m=n[1],b=Object(u.b)(),j=function(){var e=Object(c.a)(r.a.mark((function e(n,a){var c,i,s,o,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,Object(l.c)(_.a,n.current.value,a.current.value);case 4:c=e.sent,i=c.user,s=i.accessToken,o=i.email,u=i.emailVerified,d={authToken:s,email:o,emailVerified:u,isLoggedIn:!0},m(!1),b(h.a.setUser(d)),localStorage.setItem("user",JSON.stringify(d)),t("/admin"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),"auth/invalid-email"===e.t0.code&&alert("invalid email"),"auth/wrong-password"===e.t0.code&&alert("wrong password"),"auth/user-not-found"===e.t0.code&&alert("user not found");case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:f.a.login,children:Object(p.jsx)(d.a,{title:"Login",btnText:"Login",submit:j,isLoading:a})})}},83:function(t,e,n){t.exports={login:"Login_login__PjBUD"}}}]);
//# sourceMappingURL=6.f85df85c.chunk.js.map