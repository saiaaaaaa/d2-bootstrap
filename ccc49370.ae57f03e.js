(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{68:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(73),m=t(79),c=t(72);var s=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{"aria-label":"Blog post page navigation",className:"my-5"},r.a.createElement("ul",{className:"pagination justify-content-between"},r.a.createElement("li",{className:"pagination__item"},t&&r.a.createElement(c.a,{className:"page-link",to:t.permalink},"\xab ",t.title)),r.a.createElement("li",{className:"pagination__item"},a&&r.a.createElement(c.a,{className:"page-link",to:a.permalink},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.title,l=a.description,c=a.frontMatter,i=a.metadata,o=i.nextItem,u=i.prevItem;return r.a.createElement(n.a,{title:t,description:l},r.a.createElement("div",{className:"container-fluid my-5"},r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-1"},r.a.createElement("div",{key:i.permalink,className:"col col-xl-4 offset-xl-4 col-xs-6 mb-5"},r.a.createElement(m.a,{frontMatter:c,metadata:i,isBlogPostPage:!0},r.a.createElement(a,null)),(o||u)&&r.a.createElement(s,{nextItem:o,prevItem:u})))))}},79:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(71),m=t(81),c=t(72),s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=function(e){return Math.ceil(e)};a.a=function(e){var a=e.children,t=e.frontMatter,l=e.metadata,o=e.truncated,u=e.isBlogPostPage,d=void 0!==u&&u,E=l.date,p=l.readingTime,g=l.tags,v=l.permalink,h=l.editUrl,N=t.author,f=t.title,b=t.author_url||t.authorURL,w=t.author_image_url||t.authorImageURL,y=E.substring(0,10).split("-"),x=y[0],k=s[parseInt(y[1],10)-1],I=parseInt(y[2],10);return r.a.createElement("article",{className:"card shadow"},r.a.createElement("div",{className:"row no-gutters rows-col-2 m-3"},r.a.createElement("div",{className:"col-xs mr-3"},w&&r.a.createElement("img",{style:{width:"50px"},src:w,alt:N})),r.a.createElement("div",{className:"col"},N&&r.a.createElement("h5",null,r.a.createElement("a",{href:b,alt:N},N)),r.a.createElement("time",{className:"card-subtitle mb-md-4 font-weight-light",dateTime:E},k," ",I,", ",x," ",d&&p&&r.a.createElement(r.a.Fragment,null," \xb7 ",i(p)," min read"))),r.a.createElement("div",{className:"col text-right"},d&&h&&r.a.createElement("span",null,r.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-primary mr-2"},f),r.a.createElement("section",null,r.a.createElement(n.a,{components:m.a},a))),r.a.createElement("footer",{className:"row no-gutters m-3 justify-content-between"},r.a.createElement("div",{className:"col col-xs"},g.length>0&&r.a.createElement(r.a.Fragment,null,g.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"m-1",to:t},r.a.createElement("span",{className:"badge badge-primary"},a))})))),r.a.createElement("div",{className:"col align-self-center text-right"},!d&&p&&r.a.createElement("small",{className:o?"mr-2":""},i(p)," min read"),o&&r.a.createElement(c.a,{to:v,"aria-label":"Read more about "+f},r.a.createElement("span",{className:"stretched-link"},"Read more")))))}}}]);