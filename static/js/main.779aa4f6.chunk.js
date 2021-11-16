(this["webpackJsonpbingo-card-generator"]=this["webpackJsonpbingo-card-generator"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(10),i=n.n(s),l=(n(17),n(2)),a=n(0),o=function(){return Object(a.jsx)("div",{className:"flex justify-between px-4",children:"BINGO".split("").map((function(e,t){return Object(a.jsx)("span",{className:"w-12 ".concat(t>0&&"ml-3"," font-bold text-center"),children:e},t)}))})},u=function(e){var t=e.i,n=e.number,c=e.isOpen,r=e.open;return Object(a.jsx)("div",{className:"w-12 h-12 mt-3 bg-white cursor-pointer group ".concat(Number(t)%5!==0&&"ml-3"),children:Object(a.jsx)("button",{className:"flex items-center justify-center w-full h-full perspective-500",onClick:function(){r(t)},children:Object(a.jsx)("span",{className:"inline-block bg-gray-300 rounded-t-xl",children:Object(a.jsx)("span",{className:"flex items-center justify-center w-8 h-8 bg-white rounded-t-xl transform-gpu translate-y-px origin-bottom transition-all ease-out duration-150 ".concat(c?"rotate-x-60":"group-hover:opacity-50"," ").concat(0===n&&"text-sm"),children:0===n?"Free":n})})})})},b=r.a.memo(u),j=function(e){var t=e.numbers,n=e.open;return Object(a.jsxs)("div",{className:"mt-4 py-4 bg-green-300 rounded",children:[Object(a.jsx)(o,{}),Object(a.jsx)("div",{className:"flex flex-wrap px-4",children:t.map((function(e,t){return Object(a.jsx)(b,{number:e.number,isOpen:e.open,i:t,open:n},t)}))})]})},m=function(e){var t=Object(c.useState)(0),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useRef)(!1),a=Object(c.useRef)(0),o=Object(c.useCallback)((function(){i.current&&(a.current=requestAnimationFrame(o)),s((function(e){return++e}))}),[]);return Object(c.useEffect)((function(){return i.current=e,o(),function(){cancelAnimationFrame(a.current)}}),[e]),{count:r}},f=function(e){var t=e.isShffling,n=e.numbers,r=e.count,s=m(t).count,i=Object(c.useMemo)((function(){return n.length}),[]);return 0===r?Object(a.jsx)("span",{className:"text-9xl font-bold",children:"??"}):r>i?Object(a.jsx)("span",{className:"text-5xl font-bold",children:"Completed"}):Object(a.jsx)("span",{className:"text-9xl font-bold",children:t?n[s%i]:n[r-1]})},d=r.a.memo(f),x=function(e){var t=e.children,n=e.title;return Object(a.jsxs)("div",{className:"flex flex-col justify-between mt-6 md:mt-0 md:w-1/2",children:[Object(a.jsx)("h2",{className:"text-xl font-bold text-center",children:n}),t]})},h=n(9),O=n(12),p=n(11),g=function(e){for(var t=Object(p.a)(e).slice(0),n=t.length-1;n>=0;n--){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t},N=function(){var e,t=Array.from({length:75},(function(e,t){return t+1})),n=[g(t.slice(0,15)).slice(0,5),g(t.slice(15,30)).slice(0,5),g(t.slice(30,45)).slice(0,5),g(t.slice(45,60)).slice(0,5),g(t.slice(60,75)).slice(0,5)];return(e=n,e[0].map((function(t,n){return e.map((function(e){return e[n]}))}))).flat().map((function(e,t){return 12===t?{number:0,open:!1}:{number:e,open:!1}}))},v=function(){var e=Object(c.useState)(N()),t=Object(l.a)(e,2),n=t[0],r=t[1];return{numbers:n,getNewNumbers:Object(c.useCallback)((function(){r(N())}),[]),open:Object(c.useCallback)((function(e){r((function(t){return Object(O.a)(t).map((function(t,n){return n===e?Object(h.a)(Object(h.a)({},t),{},{open:!0}):t}))}))}),[])}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(l.a)(t,2),r=n[0],s=n[1];return{toggle:r,setToggle:s}},y=g(Array.from({length:75},(function(e,t){return++t}))),C=function(){var e=w(!1),t=e.toggle,n=e.setToggle,r=v(),s=r.numbers,i=r.getNewNumbers,o=r.open,u=Object(c.useState)(0),b=Object(l.a)(u,2),m=b[0],f=b[1];return Object(a.jsxs)("div",{className:"w-full min-h-full p-5 bg-blue-200",children:[Object(a.jsx)("h1",{className:"text-xl font-bold text-center",children:"Bingo Card Generator"}),Object(a.jsxs)("div",{className:"md:flex mt-10 mx-auto container",children:[Object(a.jsxs)(x,{title:"Number",children:[Object(a.jsx)("div",{className:"flex justify-center items-center w-80 h-80 mt-4 mx-auto bg-gray-200 rounded-full",children:Object(a.jsx)(d,{numbers:y,isShffling:t,count:m})}),Object(a.jsxs)("div",{className:"text-center mt-4",children:[Object(a.jsx)("button",{className:"p-2 bg-blue-500 rounded text-white",onClick:function(){n(!0),f((function(e){return++e}))},children:"START"}),Object(a.jsx)("button",{className:"ml-4 p-2 bg-blue-500 rounded text-white",onClick:function(){n(!1)},children:"STOP"})]})]}),Object(a.jsxs)(x,{title:"Bingo Card",children:[Object(a.jsx)("div",{className:"mx-auto w-80 container",children:Object(a.jsx)(j,{numbers:s,open:o})}),Object(a.jsx)("div",{className:"text-center mt-4",children:Object(a.jsx)("button",{className:"p-2 bg-blue-500 rounded text-white",onClick:i,children:"\u30ab\u30fc\u30c9\u3092\u66f4\u65b0\u3059\u308b"})})]})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.779aa4f6.chunk.js.map