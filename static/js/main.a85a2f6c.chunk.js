(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(86),i=n.n(a),o=(n(119),n(120),n(11)),s=n(194),l=n(197),j=n(196),x=n(198),d=n(65),u=n(184),b=n(91),h=n.n(b),O=n(195),m=n(192),p=n(191),f=n(183),g=n(187),v=n(76),y=n.n(v),k=n(188),C=n(95),I=n.n(C),S=n(34),w=n(2),G=["Home"],z=["Profile","Logout"];var F=function(){var e=c.useState(null),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState(null),i=Object(o.a)(a,2),b=i[0],v=i[1],C=function(){r(null)},F=function(){v(null)},M=Object(S.c)((function(e){return e.cart.cartItems}));return Object(w.jsx)(s.a,{position:"static",children:Object(w.jsx)(O.a,{maxWidth:"xl",children:Object(w.jsxs)(j.a,{disableGutters:!0,children:[Object(w.jsx)(y.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),Object(w.jsx)(d.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),Object(w.jsxs)(l.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(w.jsx)(x.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(w.jsx)(h.a,{})}),Object(w.jsx)(u.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:C,sx:{display:{xs:"block",md:"none"}},children:G.map((function(e){return Object(w.jsx)(g.a,{onClick:C,children:Object(w.jsx)(d.a,{textAlign:"center",children:e})},e)}))})]}),Object(w.jsx)(y.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),Object(w.jsx)(d.a,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),Object(w.jsx)(l.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:G.map((function(e){return Object(w.jsx)(p.a,{onClick:C,sx:{my:2,color:"white",display:"block"},children:e},e)}))}),Object(w.jsx)(g.a,{children:Object(w.jsx)(x.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(w.jsx)(k.a,{badgeContent:M.length,color:"error",children:Object(w.jsx)(I.a,{})})})}),Object(w.jsxs)(l.a,{sx:{flexGrow:0},children:[Object(w.jsx)(f.a,{title:"Open settings",children:Object(w.jsx)(x.a,{onClick:function(e){v(e.currentTarget)},sx:{p:1},children:Object(w.jsx)(m.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),Object(w.jsx)(u.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(b),onClose:F,children:z.map((function(e){return Object(w.jsx)(g.a,{onClick:F,children:Object(w.jsx)(d.a,{textAlign:"center",children:e})},e)}))})]})]})})})},M=n(199),A=n(182),B=n(186),L=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),n=t[0],c=(t[1],r.a.useState(!1)),a=Object(o.a)(c,2),i=a[0],s=(a[1],Object(S.c)((function(e){return e.cart.cartItems})));return Object(w.jsx)(M.a,{dense:n,children:s.map((function(e,t){return Object(w.jsx)(B.a,{children:Object(w.jsx)(A.a,{primary:e,secondary:i?"Secondary text":null},t)})}))})},W=n(200),T=n(58),D=Object(T.b)({name:"cart",initialState:{cartItems:[]},reducers:{addItem:function(e,t){e.cartItems.push(t.payload)},removeItem:function(e){e.cartItems=[]}}}),E=D.actions,P=E.addItem,R=E.removeItem,J=D.reducer,H=function(){var e=Object(S.b)();return Object(w.jsxs)(W.a,{direction:"row",spacing:2,mt:2,ml:2,children:[Object(w.jsx)(p.a,{variant:"contained",onClick:function(){var t=Math.floor(4*Math.random());e(P(["Apple","Orange","Mango","Banana","Guava"][t]))},children:"Add"}),Object(w.jsx)(p.a,{variant:"contained",onClick:function(){e(R())},children:"Remove All"})]})},N=n(190),q=Object(T.a)({reducer:{cart:J}});var K=function(){return Object(w.jsxs)(S.a,{store:q,children:[Object(w.jsx)(F,{}),Object(w.jsx)("div",{className:"d-flex",children:Object(w.jsxs)(N.a,{container:!0,spacing:2,children:[Object(w.jsx)(N.a,{item:!0,xs:12,md:6,children:Object(w.jsx)(H,{})}),Object(w.jsxs)(N.a,{item:!0,xs:12,md:6,children:[" ",Object(w.jsx)(L,{})]})]})})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(K,{})})),Q()}},[[128,1,2]]]);
//# sourceMappingURL=main.a85a2f6c.chunk.js.map