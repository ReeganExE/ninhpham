(self.webpackChunkninh_js=self.webpackChunkninh_js||[]).push([[691],{4852:function(e){"use strict";e.exports=Object.assign},4668:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var i,r,s,o,a=n(7294),c=n(4160),l=n(5697),h=n.n(l),d=n(3524),p=n.n(d),u=n(6909),m=n.n(u),f=n(4852),g=n.n(f),b="bodyAttributes",x="htmlAttributes",j="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),k="cssText",w="href",E="http-equiv",N="innerHTML",T="itemprop",C="name",A="property",S="rel",O="src",R="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",D="onChangeClientState",G="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[y.NOSCRIPT,y.SCRIPT,y.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},U=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,y.TITLE),n=$(e,G);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var i=$(e,L);return t||i||void 0},Y=function(e){return $(e,D)||function(){}},z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var i=Object.keys(n),r=0;r<i.length;r++){var s=i[r].toLowerCase();if(-1!==e.indexOf(s)&&n[s])return t.concat(n)}return t}),[])},Q=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,s=Object.keys(e),o=0;o<s.length;o++){var a=s[o],c=a.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(a)||a!==N&&a!==k&&a!==T||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var s=Object.keys(r),o=0;o<s.length;o++){var a=s[o],c=g()({},i[a],r[a]);i[a]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var i=e[n];if(i.hasOwnProperty(t))return i[t]}return null},Z=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){Z(e)}),0)}),X=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,re=function(e,t){var n=e.baseTag,i=e.bodyAttributes,r=e.htmlAttributes,s=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,h=e.styleTags,d=e.title,p=e.titleAttributes;ae(y.BODY,i),ae(y.HTML,r),oe(d,p);var u={baseTag:ce(y.BASE,n),linkTags:ce(y.LINK,s),metaTags:ce(y.META,o),noscriptTags:ce(y.NOSCRIPT,a),scriptTags:ce(y.SCRIPT,l),styleTags:ce(y.STYLE,h)},m={},f={};Object.keys(u).forEach((function(e){var t=u[e],n=t.newTags,i=t.oldTags;n.length&&(m[e]=n),i.length&&(f[e]=u[e].oldTags)})),t&&t(),c(e,m,f)},se=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),ae(y.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var i=n.getAttribute(H),r=i?i.split(","):[],s=[].concat(r),o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===r.indexOf(c)&&r.push(c);var h=s.indexOf(c);-1!==h&&s.splice(h,1)}for(var d=s.length-1;d>=0;d--)n.removeAttribute(s[d]);r.length===s.length?n.removeAttribute(H):n.getAttribute(H)!==o.join(",")&&n.setAttribute(H,o.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(y.HEAD),i=n.querySelectorAll(e+"["+H+"]"),r=Array.prototype.slice.call(i),s=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)if(t.hasOwnProperty(i))if(i===N)n.innerHTML=t.innerHTML;else if(i===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[i]?"":t[i];n.setAttribute(i,a)}n.setAttribute(H,"true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):s.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:s}},le=function(e){return Object.keys(e).reduce((function(t,n){var i=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+i:i}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(i={key:e})[H]=!0,r=he(n,i),[a.createElement(y.TITLE,r,e)];var e,n,i,r},toString:function(){return function(e,t,n,i){var r=le(n),s=se(t);return r?"<"+e+" "+H+'="true" '+r+">"+V(s,i)+"</"+e+">":"<"+e+" "+H+'="true">'+V(s,i)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case x:return{toComponent:function(){return he(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var i,r=((i={key:n})[H]=!0,i);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===N||n===k){var i=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:i}}else r[n]=t[e]})),a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,i){var r=Object.keys(i).filter((function(e){return!(e===N||e===k)})).reduce((function(e,t){var r=void 0===i[t]?t:t+'="'+V(i[t],n)+'"';return e?e+" "+r:r}),""),s=i.innerHTML||i.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+" "+H+'="true" '+r+(o?"/>":">"+s+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,i=e.encode,r=e.htmlAttributes,s=e.linkTags,o=e.metaTags,a=e.noscriptTags,c=e.scriptTags,l=e.styleTags,h=e.title,d=void 0===h?"":h,p=e.titleAttributes;return{base:de(y.BASE,t,i),bodyAttributes:de(b,n,i),htmlAttributes:de(x,r,i),link:de(y.LINK,s,i),meta:de(y.META,o,i),noscript:de(y.NOSCRIPT,a,i),script:de(y.SCRIPT,c,i),style:de(y.STYLE,l,i),title:de(y.TITLE,{title:d,titleAttributes:p},i)}},ue=p()((function(e){return{baseTag:K([w,R],e),bodyAttributes:z(b,e),defer:$(e,I),encode:$(e,M),htmlAttributes:z(x,e),linkTags:Q(y.LINK,[S,w],e),metaTags:Q(y.META,[C,v,E,A,T],e),noscriptTags:Q(y.NOSCRIPT,[N],e),onChangeClientState:Y(e),scriptTags:Q(y.SCRIPT,[O,N],e),styleTags:Q(y.STYLE,[k],e),title:W(e),titleAttributes:z(j,e)}}),(function(e){ie&&te(ie),e.defer?ie=ee((function(){re(e,(function(){ie=null}))})):(re(e),ie=null)}),pe)((function(){return null})),me=(r=ue,o=s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,r=e.newChildProps,s=e.nestedChildren;return J({},i,((t={})[n.type]=[].concat(i[n.type]||[],[J({},r,this.mapNestedChildrenToProps(n,s))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,r=e.newProps,s=e.newChildProps,o=e.nestedChildren;switch(i.type){case y.TITLE:return J({},r,((t={})[i.type]=o,t.titleAttributes=J({},s),t));case y.BODY:return J({},r,{bodyAttributes:J({},s)});case y.HTML:return J({},r,{htmlAttributes:J({},s)})}return J({},r,((n={})[i.type]=J({},s),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var i;n=J({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,i={};return a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,s=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(U(r,["children"]));switch(n.warnOnInvalidChildren(e,s),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:i=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:o,nestedChildren:s});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:s})}}})),t=this.mapArrayTypeChildrenToProps(i,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),i=J({},n);return t&&(i=this.mapChildrenToProps(t,i)),a.createElement(r,i)},F(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(a.Component),s.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=r.peek,s.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind;var fe=me,ge=n(5893);var be=e=>{var t;let{description:n,lang:i="en",meta:r=[],title:s}=e;const{site:o}=(0,c.useStaticQuery)("63159454"),a=n||o.siteMetadata.description,l=null===(t=o.siteMetadata)||void 0===t?void 0:t.title,h=[{name:"description",content:a},{name:"keywords",content:"Ninh Pham - Resume - ReeganExE"},{property:"og:title",content:o.siteMetadata.title},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:o.siteMetadata.title},{name:"twitter:description",content:a},{name:"twitter:image",content:"img/IMG_7351-4-01.jpg"}].concat(r);return(0,ge.jsxs)(fe,{htmlAttributes:{lang:i},title:l,children:[h&&h.map((e=>"name"in e?(0,ge.jsx)("meta",{name:e.name,content:e.content},e.name):(0,ge.jsx)("meta",{property:e.property,content:e.content},e.property))),(0,ge.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,ge.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap",rel:"stylesheet"}),(0,ge.jsx)("link",{rel:"stylesheet",href:"css/style.min.css?202081",title:"red"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Lato:400,100,200,300,500,600,700,800,900"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Arizonia"})]})};const xe=[],je=[];[{company:"National Australia Bank",position:"SENIOR/TECH LEAD FULLSTACK DEVELOPER",from:"2019 - 2021",techs:"Terraform, AWS, Kong, Docker, Jenkins, TypeScript, Kafka, React"},{company:"Commonwealth Bank of Australia Solutions",position:"SENIOR FULLSTACK DEVELOPER",from:"Oct 2017 - 2019",techs:"Spring Cloud, Docker, Rancher, Microservice, Go, React, RxJS, Teamcity"},{company:"Global Cybersoft VN",position:"SENIOR DEVELOPER",from:"2015 - 2017",techs:"Node.js, AngularJS, Sencha ExtJS, Gitlab (CI/CD), Gulp.js, Karma Test, Mongoose, WebdriverIO (Selenium 2.0 bindings for Node.js)"},{company:"Global Cybersoft VN",position:"FULLSTACK DEVELOPER",from:"2012 - 2014",techs:"J2EE, Spring, Hibernate, Maven, JUnit, PowerMock, Apache Common, Linux, jQuery, Bootstrap"}].forEach(((e,t)=>t%2==0?je.push(e):xe.push(e)));const ye=e=>{let{info:t}=e;return(0,ge.jsx)("div",{className:"timeline-post",children:(0,ge.jsxs)("div",{className:"timeline-post-content-holder",children:[(0,ge.jsx)("div",{className:"timeline-post-icon"}),(0,ge.jsx)("div",{className:"timeline-post-title",children:(0,ge.jsx)("h4",{children:t.position})}),(0,ge.jsx)("div",{className:"timeline-post-subtitle",children:(0,ge.jsxs)("p",{children:[(0,ge.jsxs)("span",{children:[t.company," "]}),(0,ge.jsx)("span",{className:"timeline-duration",children:t.from})]})}),(0,ge.jsx)("div",{className:"timeline-post-content",children:(0,ge.jsx)("p",{children:t.techs})})]})})};var ve=()=>(0,ge.jsx)("section",{id:"history",className:"section",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("h2",{children:"History"}),(0,ge.jsx)("span",{className:"border"})]}),(0,ge.jsx)("div",{className:"row",children:(0,ge.jsx)("div",{className:"col-md-12",children:(0,ge.jsxs)("div",{className:"timeline",children:[(0,ge.jsxs)("div",{className:"timeline-category exp-category",children:[(0,ge.jsx)("a",{className:"large bt-timeline",children:"Experiences"}),(0,ge.jsx)("div",{className:"timeline-category-icon",children:(0,ge.jsx)("div",{className:"iconspace",children:(0,ge.jsx)("i",{className:"fa-folder-open"})})})]}),(0,ge.jsx)("div",{className:"col-md-6 timeline-post-left",children:xe.map((e=>(0,ge.jsx)(ye,{info:e},e.from)))}),(0,ge.jsx)("div",{className:"col-md-6 timeline-post-right",children:je.map((e=>(0,ge.jsx)(ye,{info:e},e.from)))}),(0,ge.jsxs)("div",{className:"timeline-category edu-cagegory",children:[(0,ge.jsx)("a",{className:"large bt-timeline",children:"Education"}),(0,ge.jsx)("div",{className:"timeline-category-icon",children:(0,ge.jsx)("div",{className:"iconspace",children:(0,ge.jsx)("i",{className:"fa-book"})})})]}),(0,ge.jsx)("div",{className:"col-md-6 timeline-post-left",children:(0,ge.jsx)("div",{className:"timeline-post first-post",children:(0,ge.jsxs)("div",{className:"timeline-post-content-holder",children:[(0,ge.jsx)("div",{className:"timeline-post-icon"}),(0,ge.jsx)("div",{className:"timeline-post-title",children:(0,ge.jsx)("h4",{children:"University"})}),(0,ge.jsx)("div",{className:"timeline-post-subtitle",children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("span",{children:"University of Science, HCMC "}),(0,ge.jsx)("span",{className:"timeline-duration",children:"2008 - 2012"})]})}),(0,ge.jsx)("div",{className:"timeline-post-content",children:(0,ge.jsx)("p",{children:"C/C++, .NET, Java, Web, Mobile, Network, Game Development, Software Development"})})]})})}),(0,ge.jsx)("div",{className:"col-md-6 timeline-post-right"}),(0,ge.jsx)("div",{className:"timeline-end-icon",children:(0,ge.jsxs)("span",{children:[" ",(0,ge.jsx)("i",{className:"fa-bookmark"})]})})]})})})]})});var ke=[{link:"https://ninh.js.org",icon:"img/logo.png",techs:"Gatsby, Gitlab CI/CD",name:"This website",description:(0,ge.jsxs)(ge.Fragment,{children:["A static website built by ",(0,ge.jsx)("b",{children:"Gatsby"})]})},{link:"https://chrome.google.com/webstore/detail/open-cookiestxt/gdocmgbfkjnnpapoeobnolbbkoibbcif",icon:"img/open-cookies-txt.png",name:"Open Cookies.txt",description:"Least privilege Cookies.txt Extension",techs:"React, TypeScript, Github Actions"},{link:"https://twitter.com/UnicryptLock",icon:"img/eth-lock.jpg",name:"Ethereum Liquidity Lock",description:"Notify when new liquidity pools locked",techs:"ETH, Blockchain, Telegram Bot"},{link:"https://www.npmjs.com/package/quick-res",icon:"img/npm.png",name:"Quick Response",description:(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("code",{children:"q.json()"}),", ",(0,ge.jsx)("code",{children:"q.text()"}),", ",(0,ge.jsx)("code",{children:"q.html()"})," for Workers"]}),techs:"Workers, Edge Tech"},{link:"https://github.com/ReeganExE/github-action-job-id",icon:"img/github.png",name:"github-action-job-id",description:"Expose job details as environment variables",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/github-action-telegram-notify",icon:"img/telegram.jpg",name:"gh-action-telegram-notify",description:"Post the current build URL to a group, channel or chat when a job started",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/simcrypt-cli",icon:"img/simcrypt-cli.jpg",name:"simcrypt-cli",description:"Encrypt/decrypt data/message using 256-bit AES-GCM encryption",techs:"Go, Github Actions"},{link:"https://github.com/ReeganExE/quickpic",icon:"img/jester-hat.svg",name:"Quick Picture Upload",description:"A Chrome Extension that just Ctrl/Cmd + V and upload",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/qrcode-extension",icon:"img/qr-code.svg",name:"Quick QR Code",description:"An OPEN Chrome Extension that displays QR code of current page",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/cproxy-cli",icon:"img/cproxy.jpg",name:"cproxy-cli",description:"A simple, single binary forward proxy",techs:"Golang, Proxy"},{link:"https://github.com/ReeganExE/tiktok-telegrambot",icon:"img/tiktok.png",name:"TikTok Telegram Bot",description:"A bot that downloads videos without watermark",techs:"Golang, Telegram Bot"},{link:"https://github.com/ReeganExE/bcrypt-cli#bcrypt",icon:"img/bcrypt.jpg",name:"bcrypt password generator",description:"A CLI that generates bcrypt password",techs:"Go"},{link:"https://github.com/ReeganExE/youtube-screenshot",icon:"img/youtube.svg",name:"YouTube Screenshot",description:"A Bookmarklet that captures YouTube screenshot",techs:"Pure JS"},{link:"https://github.com/ReeganExE/record_youtube.sh",icon:"img/record_youtube.jpg",name:"record_youtube.sh",description:"Download a part of YouTube video",techs:"Shell, ffmpeg, youtube-dl"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-playlist/eflhegkkifpfnaoacehpjigmpopijaah",icon:"img/chrome-web-store.png",name:"Chiasenhac Playlist",description:"Player for chiasenhac.vn",techs:"React, Redux, Gitlab CI/CD"},{link:"https://github.com/ReeganExE/jmeter-distributed-consul",icon:"img/jmeter.jpg",name:"JMeter Cluster",description:"Apache JMeter Distributed Testing with Docker",techs:"JMeter, Docker, Consul"},{link:"https://github.com/ReeganExE/news12",icon:"img/react-hook.jpg",name:"News12",description:"A Super Lightweight News Reader",techs:"New React Hooks API (Since 2018)"},{link:"https://github.com/ReeganExE/rancher-everyday",icon:"img/rancher-logo-square.png",techs:"React over Ember",name:"Rancher Everyday",description:"Navigate between services in Rancher (k8s like) easily"},{link:"https://ninh.js.org/cat",icon:"img/bad-cat.jpg",techs:"React, Redux",name:"Funny Cats Gif",description:"A lightweight funny cats Gif viewer"},{link:"https://github.com/ReeganExE/codespace",icon:"img/bitbucket.png",techs:"React, Webpack, Browser Extension",name:"Code Space",description:(0,ge.jsxs)(ge.Fragment,{children:["Navigate between repositories easily. Useful for ",(0,ge.jsx)("b",{children:"Microservices"})]})},{link:"https://github.com/ReeganExE/bit-chrome",icon:"img/BC_Logo_.png",techs:"React, Webpack, Chrome APIs",name:"Bit Chrome",description:"Display Cryptocurrency Prices on your Chrome"},{link:"https://github.com/ReeganExE/redis-query",icon:"img/golang.png",techs:"Go",name:"Redis Query",description:"Simple RESTful API for extracting value from Reids by a pattern"},{link:"https://github.com/ReeganExE/dr-vault",icon:"img/vault.svg",techs:"Go",name:"Dr. Vault",description:"Automatic sync local YAML files to Vault"},{link:"https://github.com/ReeganExE/native-player",icon:"img/golang.gif",techs:"Go, Native Messaging, Chrome APIs",name:"Native Player",description:"Open native player from browser"},{link:"https://github.com/ReeganExE/gojack",icon:"img/gojack.png",techs:"Go",name:"GoJack",description:"Chiasenhac.vn API for Go"},{link:"https://github.com/ReeganExE/react-hooks-boilerplate",icon:"img/rehook.png",techs:"React, Webpack, Hot Loader (Since 2018)",name:"React Hooks Boilerplate",description:"React Hooks boilerplate with Hot Reload enabled"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-downloader-2/iioflhiclipmefbnlfphcjidamknmckc",icon:"img/chrome-web-store.png",techs:"AngularJS, jQuery, Webpack",name:"Chiasenhac Downloader",description:"Preview audio spectrum & Download tracks from chiasenhac.vn"},{link:"https://github.com/ReeganExE/confd-base",icon:"img/confd-rancher.jpg",techs:"Dockerfile",name:"Confd Base",description:"Base Docker image for Dynamically Reconfigure Service"},{link:"https://github.com/ReeganExE/voz-infinite-scroll",icon:"img/script.png",techs:"Pure JS, TypeScript",name:"VOZ Infinite Scroll",description:"Tampermonkey Script: Just scroll & troll"},{link:"https://github.com/ReeganExE/voz-multiacc",icon:"img/github.png",techs:"Pure ES6, Webpack",name:"Voz Multi Accounts",description:"Add ability to log in multiple accounts"},{link:"https://github.com/OpenLabConnect/OpenLabConnect/tree/parsers",icon:"img/github.png",techs:"MEAN stack (Since 2016)",name:"Open Lab Connect",description:"The open source is to interface with analyzer machine"},{link:"https://github.com/ReeganExE/wave-animation",icon:"img/github.png",techs:"Pure JS",name:"Button Animation",description:"An implementation of Google Chrome logo effect using pure JS"},{link:"https://github.com/ReeganExE/chrome-script-execution",icon:"img/github.png",techs:"Pure JS",name:"Chrome Script Executor",description:"Evaluate multiple scripts in Chrome Extension"},{link:"https://rugourl.com",icon:"img/rugourl.com.png",techs:"Node.js 8x, Express, React, Redux",name:"RugoURL.com",description:(0,ge.jsxs)(ge.Fragment,{children:["A funny URL shortener with customizable thumbnail image ",(0,ge.jsx)("i",{children:"(temporary down)"})]})},{link:"",icon:"img/much-more.jpg",techs:"Go/TS/JS",name:"And much more ...",description:"A lot more private tools, blockchain, crawlers, ..."}];const we=e=>{let{repo:t}=e;return(0,ge.jsxs)("div",{className:"e f",children:[(0,ge.jsx)("div",{className:"chart","data-percent":"75",children:(0,ge.jsx)("a",{title:"Click to view",href:t.link,target:"_blank",rel:"noreferrer",children:(0,ge.jsx)("img",{src:t.icon,alt:t.name})})}),(0,ge.jsxs)("div",{className:"repo-content",children:[(0,ge.jsx)("div",{className:"small",children:t.techs}),t.link?(0,ge.jsx)("a",{className:"repo-link g",title:"Click to view",href:t.link,target:"_blank",rel:"noreferrer",children:(0,ge.jsxs)("h3",{children:[t.name,(0,ge.jsx)("i",{className:"fa fa-external-link","aria-hidden":"true"})]})}):(0,ge.jsx)("h3",{className:"h",children:t.name}),(0,ge.jsx)("p",{children:t.description})]})]})};var Ee=()=>(0,ge.jsx)("section",{id:"repo",className:"section",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("h2",{children:"Public repo"}),(0,ge.jsx)("span",{className:"border"})]}),(0,ge.jsx)("div",{className:"a b c d",children:ke.map((e=>(0,ge.jsx)(we,{repo:e},e.link)))})]})});var Ne=()=>((0,a.useEffect)((()=>{window.jQuery(document).trigger("ahihi")}),[]),(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)(be,{}),(0,ge.jsx)("section",{id:"home",className:"home-parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,ge.jsx)("div",{className:"home-overlay-v2",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsxs)("div",{className:"col-md-12",children:[(0,ge.jsx)("div",{className:"logo",children:(0,ge.jsx)("img",{src:"img/logo.png",className:"img-responsive",alt:"logo"})}),(0,ge.jsxs)("div",{className:"info",children:[(0,ge.jsx)("h2",{children:"Ninh Hoang Pham"}),(0,ge.jsx)("h3",{children:"Fullstack Developer (Tech Lead/Senior) / DevOps Engineer"})]}),(0,ge.jsxs)("ul",{className:"social",children:[(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"github",href:"https://github.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"stackoverflow",href:"https://stackoverflow.com/users/1099314/ninh-pham",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"twitter",href:"https://twitter.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"youtube",href:"https://www.youtube.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"facebook",href:"https://www.facebook.com/ReeganExE",rel:"noreferrer"})})]})]})})})}),(0,ge.jsx)("div",{className:"main-menu-continer",id:"main-menu-continer",children:(0,ge.jsx)("nav",{id:"main-menu",className:"navbar navbar-default",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"navbar-header",children:[(0,ge.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[(0,ge.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,ge.jsx)("i",{className:"fa fa-navicon"})]}),(0,ge.jsx)("a",{href:"#",className:"header-logo",children:(0,ge.jsx)("img",{src:"img/logo-2.png",alt:"Logo"})})]}),(0,ge.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:(0,ge.jsxs)("ul",{className:"nav navbar-nav",id:"navs",children:[(0,ge.jsx)("li",{className:"active",children:(0,ge.jsx)("a",{href:"#home",className:"colapse-menu1",children:"Home"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#about",className:"colapse-menu1",children:"About"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#history",className:"colapse-menu1",children:"History"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#repo",className:"colapse-menu1",children:"Repo"})})]})})]})})}),(0,ge.jsx)("section",{id:"about",className:"section about-style2",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("div",{className:"row",children:(0,ge.jsx)("div",{className:"col-md-12 col-sm4",children:(0,ge.jsx)("img",{src:"img/ninh-stack.jpg?202104",className:"img-responsive",alt:"Ninh Stack"})})}),(0,ge.jsx)("h2",{children:"About me"}),(0,ge.jsx)("span",{className:"border"}),(0,ge.jsxs)("p",{children:["I'm a variety developer that dabbles in multiple fields such as Web, CLI, Browser Extension, backend development and DevOps (kind of"," ",(0,ge.jsx)("a",{target:"_blank",href:"https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249",title:"full cycle developer",rel:"noreferrer",children:(0,ge.jsx)("b",{children:"full cycle developer"})})," ","👨‍💻 ). I am particularly interested in building automation as it helps avoid repetitive tasks."]}),(0,ge.jsx)("p",{children:"I have experience in the fintech industry, having previously worked as a software engineer at two of Australia's leading banks - Commonwealth Bank and National Australia Bank. Additionally, I have worked in healthcare, retail, eCommerce, and blockchain domains."}),(0,ge.jsxs)("p",{children:["My experience includes software development processes, microservice architecture, Java Spring Cloud, Node.js, Go, and single-page application development. I am also certified in Agile methodology, specifically LeSS. I have over 6000 reputation points on"," ",(0,ge.jsx)("a",{href:"https://stackoverflow.com/users/1099314/ninh-pham",target:"_blank",rel:"noreferrer",children:"StackOverflow"}),", which has helped around 3.9 million people worldwide."]}),(0,ge.jsx)("p",{children:"I believe that I can bring numerous benefits to your team."})]}),(0,ge.jsxs)("div",{className:"row",children:[(0,ge.jsx)("div",{className:"col-md-2",children:(0,ge.jsx)("img",{id:"photo",src:"img/IMG_7351-4-01.jpg?0210",alt:"avater",className:"img-responsive"})}),(0,ge.jsx)("div",{className:"col-md-5",children:(0,ge.jsxs)("div",{className:"about-info",children:[(0,ge.jsxs)("div",{className:"info-title",children:[(0,ge.jsx)("p",{children:"Birthdate"}),(0,ge.jsx)("p",{children:"Phone"}),(0,ge.jsx)("p",{children:"Email"}),(0,ge.jsx)("p",{children:"Website"}),(0,ge.jsx)("p",{children:"Address"}),(0,ge.jsx)("p",{children:"Full CV"})]}),(0,ge.jsxs)("div",{className:"info-details",children:[(0,ge.jsx)("p",{children:": Oct-1990"}),(0,ge.jsx)("p",{children:": 0974 --- 886"}),(0,ge.jsx)("p",{children:": ninhpham.khtn@gmail.com"}),(0,ge.jsxs)("p",{children:[": ",(0,ge.jsx)("a",{href:"https://ninh.js.org",children:"https://ninh.js.org"})]}),(0,ge.jsx)("p",{children:": HCMC, Vietnam"}),(0,ge.jsxs)("p",{children:[": ",(0,ge.jsx)("i",{children:"<drop me an email>"})]})]}),(0,ge.jsx)("p",{className:"about-signature",children:"Ninh Pham"})]})}),(0,ge.jsx)("div",{className:"col-md-4",children:(0,ge.jsxs)("div",{className:"about-extra",children:[(0,ge.jsx)("h4",{children:"HOBBIES & INTERESTS"}),(0,ge.jsx)("div",{className:"about-extra-icon-style2",children:(0,ge.jsxs)("ul",{children:[(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-headphones"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Music"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-terminal"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"JS"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-apple2"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"macOS"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-video-camera"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Cinema"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-coffee"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Coffee"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-money"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Money"})]})})]})})]})})]})]})}),(0,ge.jsx)(ve,{}),(0,ge.jsx)(Ee,{}),(0,ge.jsx)("div",{id:"qoutes",className:"parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,ge.jsx)("div",{className:"parallax-overlay-2",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsxs)("div",{className:"col-md-12",children:[(0,ge.jsx)("h1",{children:'"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."'}),(0,ge.jsx)("i",{children:"- Linus Torvalds"})]})})})}),(0,ge.jsx)("footer",{children:(0,ge.jsx)("div",{className:"footer-bottom",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsx)("div",{className:"row",children:(0,ge.jsx)("div",{className:"col-md-12 col-xs-12 text-center",children:(0,ge.jsx)("p",{className:"small",children:(0,ge.jsx)("a",{href:"https://www.google.com/search?q=ReeganExE",target:"_blank",rel:"noreferrer",children:"#ReeganExE"})})})})})})}),(0,ge.jsx)("a",{className:"scroll-top",href:"#",title:"Scroll to top",children:(0,ge.jsx)("i",{className:"fa-chevron-up"})})]}))},6909:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,i="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function s(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var a,c,l,h;if(Array.isArray(e)){if((a=e.length)!=o.length)return!1;for(c=a;0!=c--;)if(!s(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!o.has(c.value[0]))return!1;for(h=e.entries();!(c=h.next()).done;)if(!s(c.value[1],o.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((a=e.length)!=o.length)return!1;for(c=a;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((a=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!s(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return s(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var i,r=n(7294),s=(i=r)&&"object"==typeof i&&"default"in i?i.default:i;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function h(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),h()},o.componentDidUpdate=function(){h()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),h()},o.render=function(){return s.createElement(i,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(i)+")"),o(d,"canUseDOM",a),d}}}}]);