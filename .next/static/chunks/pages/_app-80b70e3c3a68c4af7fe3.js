_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"1TCz":function(e,n,t){"use strict";t.r(n);var r=t("nKUr");function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t("zPlV");var i=t("cNlf"),s=t.n(i),a=t("YFqc"),c=t.n(a),u=t("20a2");var l=function(){var e=Object(u.useRouter)();return Object(r.jsxs)("header",{className:s.a.header,children:[Object(r.jsx)("div",{className:s.a.logo,onClick:function(){return e.push("/")},children:"React Meetups"}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/",children:"All Meetups"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/newmeetup",children:"Add New Meetup"})})]})})]})},f=t("sQMY"),p=t.n(f);var d=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)("main",{className:p.a.main,children:e.children})]})},m=t("lu5P"),g=t.n(m);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d,{children:[Object(r.jsx)(g.a,{color:"#29D ",options:{showSpinner:!1}}),Object(r.jsx)(n,b({},t))]})})}},"20a2":function(e,n,t){e.exports=t("nOHt")},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},Mj6V:function(e,n,t){var r,o;void 0===(o="function"===typeof(r=function(){var e={version:"0.2.0"},n=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function t(e,n,t){return e<n?n:e>t?t:e}function r(e){return 100*(-1+e)}function o(e,t,o){var i;return(i="translate3d"===n.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+t+"ms "+o,i}e.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(n[t]=r);return this},e.status=null,e.set=function(r){var a=e.isStarted();r=t(r,n.minimum,1),e.status=1===r?null:r;var c=e.render(!a),u=c.querySelector(n.barSelector),l=n.speed,f=n.easing;return c.offsetWidth,i((function(t){""===n.positionUsing&&(n.positionUsing=e.getPositioningCSS()),s(u,o(r,l,f)),1===r?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){s(c,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){e.remove(),t()}),l)}),l)):setTimeout(t,l)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var t=function(){setTimeout((function(){e.status&&(e.trickle(),t())}),n.trickleSpeed)};return n.trickle&&t(),this},e.done=function(n){return n||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(n){var r=e.status;return r?("number"!==typeof n&&(n=(1-r)*t(Math.random()*r,.1,.95)),r=t(r+n,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*n.trickleRate)},function(){var n=0,t=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&e.start(),n++,t++,r.always((function(){0===--t?(n=0,e.done()):e.set((n-t)/n)})),this):this}}(),e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=n.template;var i,a=o.querySelector(n.barSelector),u=t?"-100":r(e.status||0),l=document.querySelector(n.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),n.showSpinner||(i=o.querySelector(n.spinnerSelector))&&f(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(o),o},e.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function n(){var t=e.shift();t&&t(n)}return function(t){e.push(t),1==e.length&&n()}}(),s=function(){var e=["Webkit","O","Moz","ms"],n={};function t(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,n){return n.toUpperCase()}))}function r(n){var t=document.body.style;if(n in t)return n;for(var r,o=e.length,i=n.charAt(0).toUpperCase()+n.slice(1);o--;)if((r=e[o]+i)in t)return r;return n}function o(e){return e=t(e),n[e]||(n[e]=r(e))}function i(e,n,t){n=o(n),e.style[n]=t}return function(e,n){var t,r,o=arguments;if(2==o.length)for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&i(e,t,r);else i(e,o[1],o[2])}}();function a(e,n){return("string"==typeof e?e:l(e)).indexOf(" "+n+" ")>=0}function c(e,n){var t=l(e),r=t+n;a(t,n)||(e.className=r.substring(1))}function u(e,n){var t,r=l(e);a(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function l(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(n,t,n,e):r)||(e.exports=o)},YFqc:function(e,n,t){e.exports=t("cTJO")},cNlf:function(e,n,t){e.exports={header:"MainNavigation_header__t8YPG",logo:"MainNavigation_logo__Qwpy5",active:"MainNavigation_active__sxu85"}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),s=t("elyg"),a=t("nOHt"),c=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,s.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,s.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),p=f.href,d=f.as,m=e.children,g=e.replace,v=e.shallow,b=e.scroll,h=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=i.Children.only(m),O=y&&"object"===typeof y&&y.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),w=r(j,2),x=w[0],M=w[1],_=i.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,i.useEffect)((function(){var e=M&&n&&(0,s.isLocalURL)(p),r="undefined"!==typeof h?h:t&&t.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(t,p,d,{locale:r})}),[d,p,M,h,n,t]);var k={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,p,d,g,v,b,h)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var P="undefined"!==typeof h?h:t&&t.locale,S=(0,s.getDomainLocale)(d,P,t&&t.locales,t&&t.domainLocales);k.href=S||(0,s.addBasePath)((0,s.addLocale)(d,P,t&&t.defaultLocale))}return i.default.cloneElement(y,k)};n.default=f},lu5P:function(e,n,t){var r,o=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,l=e=>i(e,"__esModule",{value:!0}),f=(e,n)=>i(e,"name",{value:n,configurable:!0}),p=(e,n,t,r)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let o of a(n))!u.call(e,o)&&(t||"default"!==o)&&i(e,o,{get:()=>n[o],enumerable:!(r=s(n,o))||r.enumerable});return e},d=(e,n)=>p(l(i(null!=e?o(c(e)):{},"default",!n&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),m=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,n)=>r&&r.get(e)||(n=p(l({}),e,1),r&&r.set(e,n),n)),g={};((e,n)=>{for(var t in n)i(e,t,{get:n[t],enumerable:!0})})(g,{default:()=>O});var v=d(t("20a2")),b=d(t("Mj6V")),h=d(t("17x9")),y=d(t("q1tI"));function O({color:e="#29D",startPosition:n=.3,stopDelayMs:t=200,height:r=3,showOnShallow:o=!0,options:i,nonce:s}){let a=null;y.useEffect((()=>(i&&b.configure(i),v.default.events.on("routeChangeStart",c),v.default.events.on("routeChangeComplete",u),v.default.events.on("routeChangeError",u),()=>{v.default.events.off("routeChangeStart",c),v.default.events.off("routeChangeComplete",u),v.default.events.off("routeChangeError",u)})),[]);let c=f(((e,{shallow:t})=>{(!t||o)&&(b.set(n),b.start())}),"routeChangeStart"),u=f(((e,{shallow:n})=>{(!n||o)&&(a&&clearTimeout(a),a=setTimeout((()=>{b.done(!0)}),t))}),"routeChangeEnd");return y.createElement("style",{nonce:s},`\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ${e};\n        position: fixed;\n        z-index: 9999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ${r}px;\n      }\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};\n        opacity: 1;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n        -ms-transform: rotate(3deg) translate(0px, -4px);\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 1031;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ${e};\n        border-left-color: ${e};\n        border-radius: 50%;\n        -webkit-animation: nprogresss-spinner 400ms linear infinite;\n        animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @keyframes nprogress-spinner {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    `)}f(O,"NextNProgress"),O.propTypes={color:h.string,startPosition:h.number,stopDelayMs:h.number,height:h.number,showOnShallow:h.bool,options:h.object,nonce:h.string},e.exports=m(g)},sQMY:function(e,n,t){e.exports={main:"Layout_main__2Mwq5"}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,o=(0,i.useRef)(),u=(0,i.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){a||f||(0,s.default)((function(){return p(!0)}))}),[f]),[d,f]};var i=t("q1tI"),s=o(t("0G5g")),a="undefined"!==typeof IntersectionObserver;var c=new Map},zPlV:function(e,n,t){}},[[0,0,2,1]]]);