(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(76),o=n(78),i=n(72);var l=function(e){var t=e.metadata,n=t.previous,a=t.next;return r.a.createElement("nav",{"aria-label":"Doc list page navigation",className:"my-5 p-0"},r.a.createElement("ul",{className:"pagination justify-content-between"},r.a.createElement("li",{className:"page-item mr-2"},n&&r.a.createElement(i.a,{className:"page-link",to:n.permalink},"\xab ",n.title)),r.a.createElement("li",{className:"page-item ml-2"},a&&r.a.createElement(i.a,{className:"page-link",to:a.permalink},a.title," \xbb"))))},s=n(75),m=n(74);t.default=function(e){var t=Object(s.a)().siteConfig,n=void 0===t?{}:t,a=n.url,i=n.title,u=e.content,p=u.metadata,f=p.description,d=p.title,b=p.permalink,v=u.frontMatter,g=v.image,E=v.keywords,w=d?d+" | "+i:i,O=a+Object(m.a)(g);return Object(c.a)(g)||(O=g),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,w),r.a.createElement("meta",{property:"og:title",content:w}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:O}),g&&r.a.createElement("meta",{property:"twitter:image",content:O}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+d}),b&&r.a.createElement("meta",{property:"og:url",content:a+b})),r.a.createElement("main",{className:"col col-md-8 p-0"},r.a.createElement(u,null),r.a.createElement(l,{metadata:p})))}},72:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(11),o=n(76),i=n(18),l=Object(a.createContext)({collectLink:function(){}}),s=n(74),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,p=e.isNavLink,f=e.to,d=e.href,b=e.activeClassName,v=e["data-noBrokenLinkCheck"],g=m(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),E=Object(s.b)().withBaseUrl,w=Object(a.useContext)(l),O=f||d,k=Object(o.a)(O),y=null==O?void 0:O.replace("pathname://",""),j=void 0!==y?function(e){return e.startsWith("/")}(n=y)?E(n):n:void 0,h=Object(a.useRef)(!1),N=p?c.c:c.b,C=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&k&&window.docusaurus.prefetch(j),function(){C&&u&&u.disconnect()}}),[j,C,k]);var L=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,x=!j||!k||L;return j&&k&&!L&&!v&&w.collectLink(j),x?r.a.createElement("a",Object.assign({href:j},!k&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(N,Object.assign({},g,{onMouseEnter:function(){h.current||(window.docusaurus.preload(j),h.current=!0)},innerRef:function(e){var t,n;C&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(j)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:j||""},p&&{activeClassName:b}))}}}]);