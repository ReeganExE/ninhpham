(self.webpackChunkninh_js=self.webpackChunkninh_js||[]).push([[691],{4852:function(e){"use strict";e.exports=Object.assign},4668:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Te}});var r,i,o,a,s=n(7294),c=n(4160),l=n(5697),h=n.n(l),p=n(3524),u=n.n(p),d=n(6909),m=n.n(d),f=n(4852),g=n.n(f),b="bodyAttributes",y="htmlAttributes",x="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(j).map((function(e){return j[e]})),"charset"),k="cssText",w="href",E="http-equiv",T="innerHTML",N="itemprop",C="name",A="property",S="rel",R="src",O="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",G=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[j.NOSCRIPT,j.SCRIPT,j.STYLE],q="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=$(e,j.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},Y=function(e){return $(e,D)||function(){}},z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==T&&s!==k&&s!==N||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=g()({},r[s],i[s]);r[s]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),X=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,h=e.styleTags,p=e.title,u=e.titleAttributes;se(j.BODY,r),se(j.HTML,i),ae(p,u);var d={baseTag:ce(j.BASE,n),linkTags:ce(j.LINK,o),metaTags:ce(j.META,a),noscriptTags:ce(j.NOSCRIPT,s),scriptTags:ce(j.SCRIPT,l),styleTags:ce(j.STYLE,h)},m={},f={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(f[e]=d[e].oldTags)})),t&&t(),c(e,m,f)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(j.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var h=o.indexOf(c);-1!==h&&o.splice(h,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(j.HEAD),r=n.querySelectorAll(e+"["+q+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,i=he(n,r),[s.createElement(j.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=oe(t);return i?"<"+e+" "+q+'="true" '+i+">"+V(o,r)+"</"+e+">":"<"+e+" "+q+'="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return he(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===T||n===k){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===T||e===k)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+" "+q+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,h=e.title,p=void 0===h?"":h,u=e.titleAttributes;return{base:pe(j.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(y,i,r),link:pe(j.LINK,o,r),meta:pe(j.META,a,r),noscript:pe(j.NOSCRIPT,s,r),script:pe(j.SCRIPT,c,r),style:pe(j.STYLE,l,r),title:pe(j.TITLE,{title:p,titleAttributes:u},r)}},de=u()((function(e){return{baseTag:K([w,O],e),bodyAttributes:z(b,e),defer:$(e,I),encode:$(e,M),htmlAttributes:z(y,e),linkTags:Q(j.LINK,[S,w],e),metaTags:Q(j.META,[C,v,E,A,N],e),noscriptTags:Q(j.NOSCRIPT,[T],e),onChangeClientState:Y(e),scriptTags:Q(j.SCRIPT,[R,T],e),styleTags:Q(j.STYLE,[k],e),title:W(e),titleAttributes:z(x,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),ue)((function(){return null})),me=(i=de,a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case j.TITLE:return U({},i,((t={})[r.type]=a,t.titleAttributes=U({},o),t));case j.BODY:return U({},i,{bodyAttributes:U({},o)});case j.HTML:return U({},i,{htmlAttributes:U({},o)})}return U({},i,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(J(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var fe=me,ge=n(5893);var be=e=>{var t;let{description:n,lang:r="en",meta:i=[],title:o}=e;const{site:a}=(0,c.useStaticQuery)("63159454"),s=n||a.siteMetadata.description,l=null===(t=a.siteMetadata)||void 0===t?void 0:t.title,h=[{name:"description",content:s},{name:"keywords",content:"Ninh Pham - Resume - ReeganExE"},{property:"og:title",content:a.siteMetadata.title},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:a.siteMetadata.title},{name:"twitter:description",content:s},{name:"twitter:image",content:"img/IMG_7351-4-01.jpg"}].concat(i);return(0,ge.jsxs)(fe,{htmlAttributes:{lang:r},title:l,children:[h.map((e=>"name"in e?(0,ge.jsx)("meta",{name:e.name,content:e.content},e.name):(0,ge.jsx)("meta",{property:e.property,content:e.content},e.property))),(0,ge.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,ge.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap",rel:"stylesheet"}),(0,ge.jsx)("link",{rel:"stylesheet",href:"css/style.min.css?202381",title:"red"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Lato:400,100,200,300,500,600,700,800,900"}),(0,ge.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Arizonia"})]})};const ye=[{company:"National Australia Bank",position:"SENIOR/TECH LEAD FULLSTACK DEVELOPER",from:"2019 - 2021",since:"2019",logo:"nab.jpg",techs:"Terraform, AWS, Kong, Docker, Jenkins, TypeScript, Kafka, React"},{company:"Commonwealth Bank of Australia",position:"SENIOR FULLSTACK DEVELOPER",from:"Oct 2017 - 2019",since:"2017",logo:"cba.jpg",techs:"Spring Cloud, Docker, Rancher, Microservice, Go, React, RxJS, Teamcity"},{company:"Global Cybersoft VN",position:"SENIOR DEVELOPER",from:"2015 - 2017",since:"2015",logo:"gcs.jpg",techs:"Node.js, AngularJS, Sencha ExtJS, Gitlab (CI/CD), Gulp.js, Karma Test, Mongoose, WebdriverIO (Selenium 2.0 bindings for Node.js)"},{company:"Global Cybersoft VN",position:"FULLSTACK DEVELOPER",from:"2012 - 2014",since:"2012",logo:"gcs.jpg",techs:"J2EE, Spring, Hibernate, Maven, JUnit, PowerMock, Apache Common, Linux, jQuery, Bootstrap"},{company:"University of Science - Vietnam National University HCM",position:"FULLSTACK DEVELOPER",from:"2012 - 2014",since:"2008",logo:"hcmus.jpg",techs:"C/C++, .NET, Java, Web, Mobile, Network, Game Development, Software Development"}],xe=[],je=[];ye.forEach(((e,t)=>t%2==0?je.push(e):xe.push(e)));var ve=()=>(0,ge.jsx)("section",{id:"history",className:"section",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("h2",{children:"History"}),(0,ge.jsx)("span",{className:"border"})]}),(0,ge.jsx)("ol",{className:"a b c d",children:ye.map((e=>(0,ge.jsxs)("li",{className:"e f g b",children:[(0,ge.jsx)("span",{className:"h i j k l m n o p q r s",children:(0,ge.jsx)("img",{src:"/img/"+e.logo,alt:e.company,className:"o"})}),(0,ge.jsx)("h3",{className:"i j t u v w",children:e.company}),(0,ge.jsxs)("time",{className:"x y z _ aa ba",children:["Since ",e.since]}),(0,ge.jsx)("p",{className:"e ca _ da",children:e.techs})]},e.since)))})]})});var ke=[{link:"https://ninh.js.org",icon:"img/logo.png",techs:"Gatsby, Gitlab CI/CD",name:"This website",description:(0,ge.jsxs)(ge.Fragment,{children:["A static website built by ",(0,ge.jsx)("b",{children:"Gatsby"})]})},{link:"https://chrome.google.com/webstore/detail/open-cookiestxt/gdocmgbfkjnnpapoeobnolbbkoibbcif",icon:"img/open-cookies-txt.png",name:"Open Cookies.txt",description:"Least privilege Cookies.txt Extension",techs:"React, TypeScript, Github Actions"},{link:"https://twitter.com/UnicryptLock",icon:"img/eth-lock.jpg",name:"Ethereum Liquidity Lock",description:"Notify when new liquidity pools locked",techs:"ETH, Blockchain, Telegram Bot"},{link:"https://www.npmjs.com/package/quick-res",icon:"img/npm.png",name:"Quick Response",description:(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("code",{children:"q.json()"}),", ",(0,ge.jsx)("code",{children:"q.text()"}),", ",(0,ge.jsx)("code",{children:"q.html()"})," for Workers"]}),techs:"Workers, Edge Tech"},{link:"https://chiasenhac.vercel.app/mp3/the-chainsmokers-phoebe-ryan/all-we-know-tsvqq0w0qeen9n.html",icon:"img/chiasenhac.jpg",name:"chiasenhac.vercel.app",description:"A demo music website using Next.js",techs:"Next.js, SSR, Cloudflare/Deno Workers"},{link:"https://github.com/ReeganExE/github-action-job-id",icon:"img/github.png",name:"github-action-job-id",description:"Expose job details as environment variables",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/github-action-telegram-notify",icon:"img/telegram.jpg",name:"gh-action-telegram-notify",description:"Post the current build URL to a group, channel or chat when a job started",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/simcrypt-cli",icon:"img/simcrypt-cli.jpg",name:"simcrypt-cli",description:"Encrypt/decrypt data/message using 256-bit AES-GCM encryption",techs:"Go, Github Actions"},{link:"https://github.com/ReeganExE/quickpic",icon:"img/jester-hat.svg",name:"Quick Picture Upload",description:"A Chrome Extension that just Ctrl/Cmd + V and upload",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/qrcode-extension",icon:"img/qr-code.svg",name:"Quick QR Code",description:"An OPEN Chrome Extension that displays QR code of current page",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/cproxy-cli",icon:"img/cproxy.jpg",name:"cproxy-cli",description:"A simple, single binary forward proxy",techs:"Golang, Proxy"},{link:"https://github.com/ReeganExE/tiktok-telegrambot",icon:"img/tiktok.png",name:"TikTok Telegram Bot",description:"A bot that downloads videos without watermark",techs:"Golang, Telegram Bot"},{link:"https://github.com/ReeganExE/bcrypt-cli#bcrypt",icon:"img/bcrypt.jpg",name:"bcrypt password generator",description:"A CLI that generates bcrypt password",techs:"Go"},{link:"https://github.com/ReeganExE/youtube-screenshot",icon:"img/youtube.svg",name:"YouTube Screenshot",description:"A Bookmarklet that captures YouTube screenshot",techs:"Pure JS"},{link:"https://github.com/ReeganExE/record_youtube.sh",icon:"img/record_youtube.jpg",name:"record_youtube.sh",description:"Download a part of YouTube video",techs:"Shell, ffmpeg, youtube-dl"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-playlist/eflhegkkifpfnaoacehpjigmpopijaah",icon:"img/chrome-web-store.png",name:"Chiasenhac Playlist",description:"Player for chiasenhac.vn",techs:"React, Redux, Gitlab CI/CD"},{link:"https://github.com/ReeganExE/jmeter-distributed-consul",icon:"img/jmeter.jpg",name:"JMeter Cluster",description:"Apache JMeter Distributed Testing with Docker",techs:"JMeter, Docker, Consul"},{link:"https://github.com/ReeganExE/news12",icon:"img/react-hook.jpg",name:"News12",description:"A Super Lightweight News Reader",techs:"New React Hooks API (Since 2018)"},{link:"https://github.com/ReeganExE/rancher-everyday",icon:"img/rancher-logo-square.png",techs:"React over Ember",name:"Rancher Everyday",description:"Navigate between services in Rancher (k8s like) easily"},{link:"https://ninh.js.org/cat",icon:"img/bad-cat.jpg",techs:"React, Redux",name:"Funny Cats Gif",description:"A lightweight funny cats Gif viewer"},{link:"https://github.com/ReeganExE/codespace",icon:"img/bitbucket.png",techs:"React, Webpack, Browser Extension",name:"Code Space",description:(0,ge.jsxs)(ge.Fragment,{children:["Navigate between repositories easily. Useful for ",(0,ge.jsx)("b",{children:"Microservices"})]})},{link:"https://github.com/ReeganExE/bit-chrome",icon:"img/BC_Logo_.png",techs:"React, Webpack, Chrome APIs",name:"Bit Chrome",description:"Display Cryptocurrency Prices on your Chrome"},{link:"https://github.com/ReeganExE/redis-query",icon:"img/golang.png",techs:"Go",name:"Redis Query",description:"Simple RESTful API for extracting value from Reids by a pattern"},{link:"https://github.com/ReeganExE/dr-vault",icon:"img/vault.svg",techs:"Go",name:"Dr. Vault",description:"Automatic sync local YAML files to Vault"},{link:"https://github.com/ReeganExE/native-player",icon:"img/golang.gif",techs:"Go, Native Messaging, Chrome APIs",name:"Native Player",description:"Open native player from browser"},{link:"https://github.com/ReeganExE/gojack",icon:"img/gojack.png",techs:"Go",name:"GoJack",description:"Chiasenhac.vn API for Go"},{link:"https://github.com/ReeganExE/react-hooks-boilerplate",icon:"img/rehook.png",techs:"React, Webpack, Hot Loader (Since 2018)",name:"React Hooks Boilerplate",description:"React Hooks boilerplate with Hot Reload enabled"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-downloader-2/iioflhiclipmefbnlfphcjidamknmckc",icon:"img/chrome-web-store.png",techs:"AngularJS, jQuery, Webpack",name:"Chiasenhac Downloader",description:"Preview audio spectrum & Download tracks from chiasenhac.vn"},{link:"https://github.com/ReeganExE/confd-base",icon:"img/confd-rancher.jpg",techs:"Dockerfile",name:"Confd Base",description:"Base Docker image for Dynamically Reconfigure Service"},{link:"https://github.com/ReeganExE/voz-infinite-scroll",icon:"img/script.png",techs:"Pure JS, TypeScript",name:"VOZ Infinite Scroll",description:"Tampermonkey Script: Just scroll & troll"},{link:"https://github.com/ReeganExE/voz-multiacc",icon:"img/github.png",techs:"Pure ES6, Webpack",name:"Voz Multi Accounts",description:"Add ability to log in multiple accounts"},{link:"https://github.com/OpenLabConnect/OpenLabConnect/tree/parsers",icon:"img/github.png",techs:"MEAN stack (Since 2016)",name:"Open Lab Connect",description:"The open source is to interface with analyzer machine"},{link:"https://github.com/ReeganExE/wave-animation",icon:"img/github.png",techs:"Pure JS",name:"Button Animation",description:"An implementation of Google Chrome logo effect using pure JS"},{link:"https://github.com/ReeganExE/chrome-script-execution",icon:"img/github.png",techs:"Pure JS",name:"Chrome Script Executor",description:"Evaluate multiple scripts in Chrome Extension"},{link:"https://rugourl.com",icon:"img/rugourl.com.png",techs:"Node.js 8x, Express, React, Redux",name:"RugoURL.com",description:(0,ge.jsxs)(ge.Fragment,{children:["A funny URL shortener with customizable thumbnail image ",(0,ge.jsx)("i",{children:"(temporary down)"})]})},{link:"",icon:"img/much-more.jpg",techs:"Go/TS/JS",name:"And much more ...",description:"A lot more private tools, blockchain, crawlers, ..."}];const we=e=>{let{repo:t}=e;return(0,ge.jsxs)("div",{className:"ja ka",children:[(0,ge.jsx)("div",{className:"chart","data-percent":"75",children:(0,ge.jsx)("a",{title:"Click to view",href:t.link,target:"_blank",rel:"noreferrer",children:(0,ge.jsx)("img",{src:t.icon,alt:t.name})})}),(0,ge.jsxs)("div",{className:"repo-content",children:[(0,ge.jsx)("div",{className:"small",children:t.techs}),t.link?(0,ge.jsx)("a",{className:"repo-link la",title:"Click to view",href:t.link,target:"_blank",rel:"noreferrer",children:(0,ge.jsxs)("h3",{children:[t.name,(0,ge.jsx)("i",{className:"fa fa-external-link","aria-hidden":"true"})]})}):(0,ge.jsx)("h3",{className:"ma",children:t.name}),(0,ge.jsx)("p",{children:t.description})]})]})};var Ee=()=>(0,ge.jsx)("section",{id:"repo",className:"section",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("h2",{children:"Public repo"}),(0,ge.jsx)("span",{className:"border"})]}),(0,ge.jsx)("div",{className:"ea ga ha ia",children:ke.map((e=>(0,ge.jsx)(we,{repo:e},e.link)))})]})});var Te=()=>((0,s.useEffect)((()=>{window.jQuery(document).trigger("ahihi")}),[]),(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)(be,{}),(0,ge.jsx)("section",{id:"home",className:"home-parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,ge.jsx)("div",{className:"home-overlay-v2",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsxs)("div",{className:"col-md-12",children:[(0,ge.jsx)("div",{className:"logo",children:(0,ge.jsx)("img",{src:"img/logo.png",className:"img-responsive",alt:"logo"})}),(0,ge.jsxs)("div",{className:"info",children:[(0,ge.jsx)("h2",{children:"Ninh Hoang Pham"}),(0,ge.jsx)("h3",{children:"Fullstack Developer (Tech Lead/Senior) / DevOps Engineer"})]}),(0,ge.jsxs)("ul",{className:"social",children:[(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"github",href:"https://github.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"stackoverflow",href:"https://stackoverflow.com/users/1099314/ninh-pham",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"twitter",href:"https://twitter.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"youtube",href:"https://www.youtube.com/ReeganExE",rel:"noreferrer"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{target:"_blank",className:"facebook",href:"https://www.facebook.com/ReeganExE",rel:"noreferrer"})})]})]})})})}),(0,ge.jsx)("div",{className:"main-menu-continer",id:"main-menu-continer",children:(0,ge.jsx)("nav",{id:"main-menu",className:"navbar navbar-default",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"navbar-header",children:[(0,ge.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[(0,ge.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,ge.jsx)("i",{className:"fa fa-navicon"})]}),(0,ge.jsx)("a",{href:"#",className:"header-logo",children:(0,ge.jsx)("img",{src:"img/logo-2.png",alt:"Logo"})})]}),(0,ge.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:(0,ge.jsxs)("ul",{className:"nav navbar-nav",id:"navs",children:[(0,ge.jsx)("li",{className:"active",children:(0,ge.jsx)("a",{href:"#home",className:"colapse-menu1",children:"Home"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#about",className:"colapse-menu1",children:"About"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#history",className:"colapse-menu1",children:"History"})}),(0,ge.jsx)("li",{children:(0,ge.jsx)("a",{href:"#repo",className:"colapse-menu1",children:"Repo"})})]})})]})})}),(0,ge.jsx)("section",{id:"about",className:"section about-style2",children:(0,ge.jsxs)("div",{className:"container",children:[(0,ge.jsxs)("div",{className:"section-title",children:[(0,ge.jsx)("div",{className:"row",children:(0,ge.jsx)("div",{className:"col-md-12 col-sm4",children:(0,ge.jsx)("img",{src:"img/ninh-stack.jpg?202104",className:"img-responsive",alt:"Ninh Stack"})})}),(0,ge.jsx)("h2",{children:"About me"}),(0,ge.jsx)("span",{className:"border"}),(0,ge.jsxs)("p",{children:["I'm a variety developer that dabbles in multiple fields such as Web, CLI, Browser Extension, backend development and DevOps (kind of"," ",(0,ge.jsx)("a",{target:"_blank",href:"https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249",title:"full cycle developer",rel:"noreferrer",children:(0,ge.jsx)("b",{children:"full cycle developer"})})," ","👨‍💻 ). I am particularly interested in building automation as it helps avoid repetitive tasks."]}),(0,ge.jsx)("p",{children:"I have experience in the fintech industry, having previously worked as a software engineer at two of Australia's leading banks - Commonwealth Bank and National Australia Bank. Additionally, I have worked in healthcare, retail, eCommerce, and blockchain domains."}),(0,ge.jsxs)("p",{children:["My experience includes software development processes, microservice architecture, Java Spring Cloud, Node.js, Go, and single-page application development. I am also certified in Agile methodology, specifically LeSS. I have over 6000 reputation points on"," ",(0,ge.jsx)("a",{href:"https://stackoverflow.com/users/1099314/ninh-pham",target:"_blank",rel:"noreferrer",children:"StackOverflow"}),", which has helped around 3.9 million people worldwide."]}),(0,ge.jsx)("p",{children:"I believe that I can bring numerous benefits to your team."})]}),(0,ge.jsxs)("div",{className:"row",children:[(0,ge.jsx)("div",{className:"col-md-2",children:(0,ge.jsx)("img",{id:"photo",src:"img/IMG_7351-4-01.jpg?0210",alt:"avater",className:"img-responsive"})}),(0,ge.jsx)("div",{className:"col-md-5",children:(0,ge.jsxs)("div",{className:"about-info",children:[(0,ge.jsxs)("div",{className:"info-title",children:[(0,ge.jsx)("p",{children:"Birthdate"}),(0,ge.jsx)("p",{children:"Phone"}),(0,ge.jsx)("p",{children:"Email"}),(0,ge.jsx)("p",{children:"Website"}),(0,ge.jsx)("p",{children:"Address"}),(0,ge.jsx)("p",{children:"Full CV"})]}),(0,ge.jsxs)("div",{className:"info-details",children:[(0,ge.jsx)("p",{children:": Oct-1990"}),(0,ge.jsx)("p",{children:": 0974 --- 886"}),(0,ge.jsx)("p",{children:": ninhpham.khtn@gmail.com"}),(0,ge.jsxs)("p",{children:[": ",(0,ge.jsx)("a",{href:"https://ninh.js.org",children:"https://ninh.js.org"})]}),(0,ge.jsx)("p",{children:": HCMC, Vietnam"}),(0,ge.jsxs)("p",{children:[": ",(0,ge.jsx)("i",{children:"<drop me an email>"})]})]}),(0,ge.jsx)("p",{className:"about-signature",children:"Ninh Pham"})]})}),(0,ge.jsx)("div",{className:"col-md-4",children:(0,ge.jsxs)("div",{className:"about-extra",children:[(0,ge.jsx)("h4",{children:"HOBBIES & INTERESTS"}),(0,ge.jsx)("div",{className:"about-extra-icon-style2",children:(0,ge.jsxs)("ul",{children:[(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-headphones"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Music"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-terminal"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"JS"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-apple2"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"macOS"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-video-camera"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Cinema"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-coffee"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Coffee"})]})}),(0,ge.jsx)("li",{children:(0,ge.jsxs)("p",{children:[(0,ge.jsx)("i",{className:"fa-money"}),(0,ge.jsx)("br",{}),(0,ge.jsx)("span",{children:"Money"})]})})]})})]})})]})]})}),(0,ge.jsx)(ve,{}),(0,ge.jsx)(Ee,{}),(0,ge.jsx)("div",{id:"qoutes",className:"parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,ge.jsx)("div",{className:"parallax-overlay-2",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsxs)("div",{className:"col-md-12",children:[(0,ge.jsx)("h1",{children:'"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."'}),(0,ge.jsx)("i",{children:"- Linus Torvalds"})]})})})}),(0,ge.jsx)("footer",{children:(0,ge.jsx)("div",{className:"footer-bottom",children:(0,ge.jsx)("div",{className:"container",children:(0,ge.jsx)("div",{className:"row",children:(0,ge.jsx)("div",{className:"col-md-12 col-xs-12 text-center",children:(0,ge.jsx)("p",{className:"small",children:(0,ge.jsx)("a",{href:"https://www.google.com/search?q=ReeganExE",target:"_blank",rel:"noreferrer",children:"#ReeganExE"})})})})})})}),(0,ge.jsx)("a",{className:"scroll-top",href:"#",title:"Scroll to top",children:(0,ge.jsx)("i",{className:"fa-chevron-up"})})]}))},6909:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,h;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!a.has(c.value[0]))return!1;for(h=e.entries();!(c=h.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function h(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),h()},a.componentDidUpdate=function(){h()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),h()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",s),p}}}}]);