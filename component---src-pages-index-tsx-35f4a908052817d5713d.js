(self.webpackChunkninh_js=self.webpackChunkninh_js||[]).push([[691],{3302:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,c,l,h;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(c=a;0!=c--;)if(!o(e[c],s[c]))return!1;return!0}if(n&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!s.has(c.value[0]))return!1;for(h=e.entries();!(c=h.next()).done;)if(!o(c.value[1],s.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(h=e.entries();!(c=h.next()).done;)if(!s.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(c=a;0!=c--;)if(e[c]!==s[c])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if((a=(l=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(s,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],s[l[c]]))return!1;return!0}return e!=e&&s!=s}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function h(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var s=i.prototype;return s.UNSAFE_componentWillMount=function(){l.push(this),h()},s.componentDidUpdate=function(){h()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),h()},s.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return s(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),s(d,"canUseDOM",a),d}}},3775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r,i,o,s,a=n(7294),c=n(5444),l=n(5697),h=n.n(l),d=n(4839),u=n.n(d),p=n(3302),m=n.n(p),f=n(6494),g=n.n(f),b="bodyAttributes",x="htmlAttributes",j="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),E="cssText",k="href",w="http-equiv",N="innerHTML",T="itemprop",C="name",A="property",S="rel",R="src",O="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",G=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[y.NOSCRIPT,y.SCRIPT,y.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=X(e,y.TITLE),n=X(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,L);return t||r||void 0},K=function(e){return X(e,D)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),s=0;s<o.length;s++){var a=o[s],c=a.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(a)||a!==N&&a!==E&&a!==T||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),s=0;s<o.length;s++){var a=o[s],c=g()({},r[a],i[a]);r[a]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,se=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,s=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,h=e.styleTags,d=e.title,u=e.titleAttributes;le(y.BODY,r),le(y.HTML,i),ce(d,u);var p={baseTag:he(y.BASE,n),linkTags:he(y.LINK,o),metaTags:he(y.META,s),noscriptTags:he(y.NOSCRIPT,a),scriptTags:he(y.SCRIPT,l),styleTags:he(y.STYLE,h)},m={},f={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(f[e]=p[e].oldTags)})),t&&t(),c(e,m,f)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(y.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),i=r?r.split(","):[],o=[].concat(i),s=Object.keys(t),a=0;a<s.length;a++){var c=s[a],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var h=o.indexOf(c);-1!==h&&o.splice(h,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(H):n.getAttribute(H)!==s.join(",")&&n.setAttribute(H,s.join(","))}},he=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],s=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===N)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(H,"true"),i.some((function(e,t){return s=t,n.isEqualNode(e)}))?i.splice(s,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,i=ue(n,r),[a.createElement(y.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=de(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case x:return{toComponent:function(){return ue(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===N||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===N||e===E)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",s=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(s?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,s=e.metaTags,a=e.noscriptTags,c=e.scriptTags,l=e.styleTags,h=e.title,d=void 0===h?"":h,u=e.titleAttributes;return{base:pe(y.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(x,i,r),link:pe(y.LINK,o,r),meta:pe(y.META,s,r),noscript:pe(y.NOSCRIPT,a,r),script:pe(y.SCRIPT,c,r),style:pe(y.STYLE,l,r),title:pe(y.TITLE,{title:d,titleAttributes:u},r)}},fe=u()((function(e){return{baseTag:$([k,O],e),bodyAttributes:Q(b,e),defer:X(e,I),encode:X(e,M),htmlAttributes:Q(x,e),linkTags:Z(y.LINK,[S,k],e),metaTags:Z(y.META,[C,v,w,A,T],e),noscriptTags:Z(y.NOSCRIPT,[N],e),onChangeClientState:K(e),scriptTags:Z(y.SCRIPT,[R,N],e),styleTags:Z(y.STYLE,[E],e),title:z(e),titleAttributes:Q(j,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){se(e,(function(){oe=null}))})):(se(e),oe=null)}),me)((function(){return null})),ge=(i=fe,s=o=function(e){function t(){return J(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(r.type){case y.TITLE:return F({},i,((t={})[r.type]=s,t.titleAttributes=F({},o),t));case y.BODY:return F({},i,{bodyAttributes:F({},o)});case y.HTML:return F({},i,{htmlAttributes:F({},o)})}return F({},i,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(V(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(i,r)},U(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(a.Component),o.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},s);ge.renderStatic=ge.rewind;var be=ge,xe=n(5893),je=function(e){var t,n=e.description,r=e.lang,i=void 0===r?"en":r,o=e.meta,s=void 0===o?[]:o,a=(e.title,(0,c.useStaticQuery)("63159454").site),l=n||a.siteMetadata.description,h=null===(t=a.siteMetadata)||void 0===t?void 0:t.title,d=[{name:"description",content:l},{name:"keywords",content:"Ninh Pham - Resume - ReeganExE"},{property:"og:title",content:a.siteMetadata.title},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:a.siteMetadata.title},{name:"twitter:description",content:l},{name:"twitter:image",content:"img/IMG_7351-4-01.jpg"}].concat(s);return(0,xe.jsxs)(be,{htmlAttributes:{lang:i},title:h,children:[d&&d.map((function(e){return"name"in e?(0,xe.jsx)("meta",{name:e.name,content:e.content},e.name):(0,xe.jsx)("meta",{property:e.property,content:e.content},e.property)})),(0,xe.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,xe.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300&display=swap",rel:"stylesheet"}),(0,xe.jsx)("link",{rel:"stylesheet",href:"css/style.min.css?202081",title:"red"}),(0,xe.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"}),(0,xe.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Lato:400,100,200,300,500,600,700,800,900"}),(0,xe.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Arizonia"})]})},ye=[],ve=[];[{company:"National Australia Bank",position:"SENIOR/TECH LEAD FULLSTACK DEVELOPER",from:"2019 - 2021",techs:"Terraform, AWS, Kong, Docker, Jenkins, TypeScript, Kafka, React"},{company:"Commonwealth Bank of Australia Solutions",position:"SENIOR FULLSTACK DEVELOPER",from:"Oct 2017 - 2019",techs:"Spring Cloud, Docker, Rancher, Microservice, Go, React, RxJS, Teamcity"},{company:"Global Cybersoft VN",position:"SENIOR DEVELOPER",from:"2015 - 2017",techs:"Node.js, AngularJS, Sencha ExtJS, Gitlab (CI/CD), Gulp.js, Karma Test, Mongoose, WebdriverIO (Selenium 2.0 bindings for Node.js)"},{company:"Global Cybersoft VN",position:"FULLSTACK DEVELOPER",from:"2012 - 2014",techs:"J2EE, Spring, Hibernate, Maven, JUnit, PowerMock, Apache Common, Linux, jQuery, Bootstrap"}].forEach((function(e,t){return t%2==0?ve.push(e):ye.push(e)}));var Ee=function(e){var t=e.info;return(0,xe.jsx)("div",{className:"timeline-post",children:(0,xe.jsxs)("div",{className:"timeline-post-content-holder",children:[(0,xe.jsx)("div",{className:"timeline-post-icon"}),(0,xe.jsx)("div",{className:"timeline-post-title",children:(0,xe.jsx)("h4",{children:t.position})}),(0,xe.jsx)("div",{className:"timeline-post-subtitle",children:(0,xe.jsxs)("p",{children:[(0,xe.jsxs)("span",{children:[t.company," "]}),(0,xe.jsx)("span",{className:"timeline-duration",children:t.from})]})}),(0,xe.jsx)("div",{className:"timeline-post-content",children:(0,xe.jsx)("p",{children:t.techs})})]})})},ke=function(){return(0,xe.jsx)("section",{id:"history",className:"section",children:(0,xe.jsxs)("div",{className:"container",children:[(0,xe.jsxs)("div",{className:"section-title",children:[(0,xe.jsx)("h2",{children:"History"}),(0,xe.jsx)("span",{className:"border"})]}),(0,xe.jsx)("div",{className:"row",children:(0,xe.jsx)("div",{className:"col-md-12",children:(0,xe.jsxs)("div",{className:"timeline",children:[(0,xe.jsxs)("div",{className:"timeline-category exp-category",children:[(0,xe.jsx)("a",{className:"large bt-timeline",children:"Experiences"}),(0,xe.jsx)("div",{className:"timeline-category-icon",children:(0,xe.jsx)("div",{className:"iconspace",children:(0,xe.jsx)("i",{className:"fa-folder-open"})})})]}),(0,xe.jsx)("div",{className:"col-md-6 timeline-post-left",children:ye.map((function(e){return(0,xe.jsx)(Ee,{info:e},e.from)}))}),(0,xe.jsx)("div",{className:"col-md-6 timeline-post-right",children:ve.map((function(e){return(0,xe.jsx)(Ee,{info:e},e.from)}))}),(0,xe.jsxs)("div",{className:"timeline-category edu-cagegory",children:[(0,xe.jsx)("a",{className:"large bt-timeline",children:"Education"}),(0,xe.jsx)("div",{className:"timeline-category-icon",children:(0,xe.jsx)("div",{className:"iconspace",children:(0,xe.jsx)("i",{className:"fa-book"})})})]}),(0,xe.jsx)("div",{className:"col-md-6 timeline-post-left",children:(0,xe.jsx)("div",{className:"timeline-post first-post",children:(0,xe.jsxs)("div",{className:"timeline-post-content-holder",children:[(0,xe.jsx)("div",{className:"timeline-post-icon"}),(0,xe.jsx)("div",{className:"timeline-post-title",children:(0,xe.jsx)("h4",{children:"University"})}),(0,xe.jsx)("div",{className:"timeline-post-subtitle",children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("span",{children:"University of Science, HCMC "}),(0,xe.jsx)("span",{className:"timeline-duration",children:"2008 - 2012"})]})}),(0,xe.jsx)("div",{className:"timeline-post-content",children:(0,xe.jsx)("p",{children:"C/C++, .NET, Java, Web, Mobile, Network, Game Development, Software Development"})})]})})}),(0,xe.jsx)("div",{className:"col-md-6 timeline-post-right"}),(0,xe.jsx)("div",{className:"timeline-end-icon",children:(0,xe.jsxs)("span",{children:[" ",(0,xe.jsx)("i",{className:"fa-bookmark"})]})})]})})})]})})},we=[{link:"https://ninh.js.org",icon:"img/logo.png",techs:"Gatsby, Gitlab CI/CD",name:"This website",description:(0,xe.jsxs)(xe.Fragment,{children:["A static website built by ",(0,xe.jsx)("b",{children:"Gatsby"})]})},{link:"https://chrome.google.com/webstore/detail/open-cookiestxt/gdocmgbfkjnnpapoeobnolbbkoibbcif",icon:"img/open-cookies-txt.png",name:"Open Cookies.txt",description:"Least privilege Cookies.txt Extension",techs:"React, TypeScript, Github Actions"},{link:"https://t.me/Uni_Lock",icon:"img/eth-lock.jpg",name:"Ethereum Liquidity Lock",description:"Notify when new liquidity pools locked",techs:"ETH, Blockchain, Telegram Bot"},{link:"https://github.com/ReeganExE/github-action-job-id",icon:"img/github.png",name:"github-action-job-id",description:"Expose job details as environment variables",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/github-action-telegram-notify",icon:"img/telegram.jpg",name:"gh-action-telegram-notify",description:"Post the current build URL to a group, channel or chat when a job started",techs:"Github script, Github Actions"},{link:"https://github.com/ReeganExE/simcrypt-cli",icon:"img/simcrypt-cli.jpg",name:"simcrypt-cli",description:"Encrypt/decrypt data/message using 256-bit AES-GCM encryption",techs:"Go, Github Actions"},{link:"https://github.com/ReeganExE/quickpic",icon:"img/jester-hat.svg",name:"Quick Picture Upload",description:"A Chrome Extension that just Ctrl/Cmd + V and upload",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/qrcode-extension",icon:"img/qr-code.svg",name:"Quick QR Code",description:"An OPEN Chrome Extension that displays QR code of current page",techs:"React, Chrome APIs, Github Actions"},{link:"https://github.com/ReeganExE/cproxy-cli",icon:"img/cproxy.jpg",name:"cproxy-cli",description:"A simple, single binary forward proxy",techs:"Golang, Proxy"},{link:"https://github.com/ReeganExE/tiktok-telegrambot",icon:"img/tiktok.png",name:"TikTok Telegram Bot",description:"A bot that downloads videos without watermark",techs:"Golang, Telegram Bot"},{link:"https://github.com/ReeganExE/bcrypt-cli#bcrypt",icon:"img/bcrypt.jpg",name:"bcrypt password generator",description:"A CLI that generates bcrypt password",techs:"Go"},{link:"https://github.com/ReeganExE/youtube-screenshot",icon:"img/youtube.svg",name:"YouTube Screenshot",description:"A Bookmarklet that captures YouTube screenshot",techs:"Pure JS"},{link:"https://github.com/ReeganExE/record_youtube.sh",icon:"img/record_youtube.jpg",name:"record_youtube.sh",description:"Download a part of YouTube video",techs:"Shell, ffmpeg, youtube-dl"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-playlist/eflhegkkifpfnaoacehpjigmpopijaah",icon:"img/chrome-web-store.png",name:"Chiasenhac Playlist",description:"Player for chiasenhac.vn",techs:"React, Redux, Gitlab CI/CD"},{link:"https://github.com/ReeganExE/jmeter-distributed-consul",icon:"img/jmeter.jpg",name:"JMeter Cluster",description:"Apache JMeter Distributed Testing with Docker",techs:"JMeter, Docker, Consul"},{link:"https://github.com/ReeganExE/news12",icon:"img/react-hook.jpg",name:"News12",description:"A Super Lightweight News Reader",techs:"New React Hooks API (Since 2018)"},{link:"https://github.com/ReeganExE/rancher-everyday",icon:"img/rancher-logo-square.png",techs:"React over Ember",name:"Rancher Everyday",description:"Navigate between services in Rancher (k8s like) easily"},{link:"https://ninh.js.org/cat",icon:"img/bad-cat.jpg",techs:"React, Redux",name:"Funny Cats Gif",description:"A lightweight funny cats Gif viewer"},{link:"https://github.com/ReeganExE/codespace",icon:"img/bitbucket.png",techs:"React, Webpack, Browser Extension",name:"Code Space",description:(0,xe.jsxs)(xe.Fragment,{children:["Navigate between repositories easily. Useful for ",(0,xe.jsx)("b",{children:"Microservices"})]})},{link:"https://github.com/ReeganExE/bit-chrome",icon:"img/BC_Logo_.png",techs:"React, Webpack, Chrome APIs",name:"Bit Chrome",description:"Display Cryptocurrency Prices on your Chrome"},{link:"https://github.com/ReeganExE/redis-query",icon:"img/golang.png",techs:"Go",name:"Redis Query",description:"Simple RESTful API for extracting value from Reids by a pattern"},{link:"https://github.com/ReeganExE/dr-vault",icon:"img/vault.svg",techs:"Go",name:"Dr. Vault",description:"Automatic sync local YAML files to Vault"},{link:"https://github.com/ReeganExE/native-player",icon:"img/golang.gif",techs:"Go, Native Messaging, Chrome APIs",name:"Native Player",description:"Open native player from browser"},{link:"https://github.com/ReeganExE/gojack",icon:"img/gojack.png",techs:"Go",name:"GoJack",description:"Chiasenhac.vn API for Go"},{link:"https://github.com/ReeganExE/react-hooks-boilerplate",icon:"img/rehook.png",techs:"React, Webpack, Hot Loader (Since 2018)",name:"React Hooks Boilerplate",description:"React Hooks boilerplate with Hot Reload enabled"},{link:"https://chrome.google.com/webstore/detail/chiasenhac-downloader-2/iioflhiclipmefbnlfphcjidamknmckc",icon:"img/chrome-web-store.png",techs:"AngularJS, jQuery, Webpack",name:"Chiasenhac Downloader",description:"Preview audio spectrum & Download tracks from chiasenhac.vn"},{link:"https://github.com/ReeganExE/confd-base",icon:"img/confd-rancher.jpg",techs:"Dockerfile",name:"Confd Base",description:"Base Docker image for Dynamically Reconfigure Service"},{link:"https://github.com/ReeganExE/voz-infinite-scroll",icon:"img/script.png",techs:"Pure JS, TypeScript",name:"VOZ Infinite Scroll",description:"Tampermonkey Script: Just scroll & troll"},{link:"https://github.com/ReeganExE/voz-multiacc",icon:"img/github.png",techs:"Pure ES6, Webpack",name:"Voz Multi Accounts",description:"Add ability to log in multiple accounts"},{link:"https://github.com/OpenLabConnect/OpenLabConnect/tree/parsers",icon:"img/github.png",techs:"MEAN stack (Since 2016)",name:"Open Lab Connect",description:"The open source is to interface with analyzer machine"},{link:"https://github.com/ReeganExE/wave-animation",icon:"img/github.png",techs:"Pure JS",name:"Button Animation",description:"An implementation of Google Chrome logo effect using pure JS"},{link:"https://github.com/ReeganExE/chrome-script-execution",icon:"img/github.png",techs:"Pure JS",name:"Chrome Script Executor",description:"Evaluate multiple scripts in Chrome Extension"},{link:"https://rugourl.com",icon:"img/rugourl.com.png",techs:"Node.js 8x, Express, React, Redux",name:"RugoURL.com",description:(0,xe.jsxs)(xe.Fragment,{children:["A funny URL shortener with customizable thumbnail image ",(0,xe.jsx)("i",{children:"(temporary down)"})]})},{link:"https://ninh.js.org",icon:"img/much-more.jpg",techs:"Go/TS/JS",name:"And much more ...",description:"A lot more private tools, blockchain, crawlers, ..."}],Ne=function(e){var t=e.repo;return(0,xe.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-3 chart-padding",children:[(0,xe.jsx)("div",{className:"chart","data-percent":"75",children:(0,xe.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,xe.jsx)("img",{src:t.icon,alt:t.name})})}),(0,xe.jsxs)("div",{className:"skills-content",children:[(0,xe.jsx)("div",{className:"small",children:t.techs}),(0,xe.jsx)("h3",{children:t.name}),(0,xe.jsx)("p",{children:t.description})]})]})},Te=function(){return(0,xe.jsx)("section",{id:"repo",className:"section",children:(0,xe.jsxs)("div",{className:"container",children:[(0,xe.jsxs)("div",{className:"section-title",children:[(0,xe.jsx)("h2",{children:"Public repo"}),(0,xe.jsx)("span",{className:"border"})]}),(0,xe.jsx)("div",{className:"row",children:we.map((function(e){return(0,xe.jsx)(Ne,{repo:e},e.link)}))})]})})},Ce=function(){return(0,a.useEffect)((function(){window.jQuery(document).trigger("ahihi")}),[]),(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(je,{}),(0,xe.jsx)("section",{id:"home",className:"home-parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,xe.jsx)("div",{className:"home-overlay-v2",children:(0,xe.jsx)("div",{className:"container",children:(0,xe.jsxs)("div",{className:"col-md-12",children:[(0,xe.jsx)("div",{className:"logo",children:(0,xe.jsx)("img",{src:"img/logo.png",className:"img-responsive",alt:"logo"})}),(0,xe.jsxs)("div",{className:"info",children:[(0,xe.jsx)("h2",{children:"Ninh Hoang Pham"}),(0,xe.jsx)("h3",{children:"Fullstack Developer (Tech Lead/Senior) / DevOps Engineer"})]}),(0,xe.jsxs)("ul",{className:"social",children:[(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"github",href:"https://github.com/ReeganExE",rel:"noreferrer"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"stackoverflow",href:"https://stackoverflow.com/users/1099314/ninh-pham",rel:"noreferrer"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"twitter",href:"https://twitter.com/ReeganExE",rel:"noreferrer"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"youtube",href:"https://www.youtube.com/ReeganExE",rel:"noreferrer"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"google",href:"https://www.google.com/+ReeganExE",rel:"noreferrer"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{target:"_blank",className:"facebook",href:"https://www.facebook.com/ReeganExE",rel:"noreferrer"})})]})]})})})}),(0,xe.jsx)("div",{className:"main-menu-continer",id:"main-menu-continer",children:(0,xe.jsx)("nav",{id:"main-menu",className:"navbar navbar-default",children:(0,xe.jsxs)("div",{className:"container",children:[(0,xe.jsxs)("div",{className:"navbar-header",children:[(0,xe.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[(0,xe.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,xe.jsx)("i",{className:"fa fa-navicon"})]}),(0,xe.jsx)("a",{href:"#",className:"header-logo",children:(0,xe.jsx)("img",{src:"img/logo-2.png",alt:"Logo"})})]}),(0,xe.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:(0,xe.jsxs)("ul",{className:"nav navbar-nav",id:"navs",children:[(0,xe.jsx)("li",{className:"active",children:(0,xe.jsx)("a",{href:"#home",className:"colapse-menu1",children:"Home"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{href:"#about",className:"colapse-menu1",children:"About"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{href:"#history",className:"colapse-menu1",children:"History"})}),(0,xe.jsx)("li",{children:(0,xe.jsx)("a",{href:"#repo",className:"colapse-menu1",children:"Repo"})})]})})]})})}),(0,xe.jsx)("section",{id:"about",className:"section about-style2",children:(0,xe.jsxs)("div",{className:"container",children:[(0,xe.jsxs)("div",{className:"section-title",children:[(0,xe.jsx)("div",{className:"row",children:(0,xe.jsx)("div",{className:"col-md-12 col-sm4",children:(0,xe.jsx)("img",{src:"img/ninh-stack.jpg?202104",className:"img-responsive",alt:"Ninh Stack"})})}),(0,xe.jsx)("h2",{children:"About me"}),(0,xe.jsx)("span",{className:"border"}),(0,xe.jsxs)("p",{children:["I'm a variety developer that dabbles in multiple fields such as Web, CLI, Browser Extension, backend development and DevOps (kind of"," ",(0,xe.jsx)("a",{target:"_blank",href:"https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249",title:"full cycle developer",rel:"noreferrer",children:(0,xe.jsx)("b",{children:"full cycle developer"})})," ","👨‍💻 ). I'm interested in building automation as I'm not a fan of doing things repeatedly."]}),(0,xe.jsx)("p",{children:"Experienced in fintech domain (former software engineer at 2 big banks of Australia: Commonwealth Bank and National Australia Bank), Healthcare, Retails, eCommerce and a bit on blockchain."}),(0,xe.jsxs)("p",{children:["And with experience in Software Development Process, ",(0,xe.jsx)("b",{children:"Microservice"})," Architecture, Java Spring Cloud, Node.js, Go, Single-page application development, Agile methodology (",(0,xe.jsx)("a",{target:"_blank",href:"https://less.works/certificates/ninh-pham-46426844668.pdf",title:"View Ninh Pham's Certified",rel:"noreferrer",children:(0,xe.jsx)("b",{children:"LeSS Certified"})}),") and over"," ",(0,xe.jsxs)("b",{children:["5000 reputations on"," ",(0,xe.jsx)("a",{href:"https://stackoverflow.com/users/1099314/ninh-pham",target:"_blank",rel:"noreferrer",children:"StackOverflow"})]})," ","(impacted ~3.4m people around the world)."]}),(0,xe.jsx)("p",{children:"I believe that I will bring a lot of benefits to your teams."})]}),(0,xe.jsxs)("div",{className:"row",children:[(0,xe.jsx)("div",{className:"col-md-2",children:(0,xe.jsx)("img",{id:"photo",src:"img/IMG_7351-4-01.jpg?0210",alt:"avater",className:"img-responsive"})}),(0,xe.jsx)("div",{className:"col-md-5",children:(0,xe.jsxs)("div",{className:"about-info",children:[(0,xe.jsxs)("div",{className:"info-title",children:[(0,xe.jsx)("p",{children:"Birthdate"}),(0,xe.jsx)("p",{children:"Phone"}),(0,xe.jsx)("p",{children:"Email"}),(0,xe.jsx)("p",{children:"Website"}),(0,xe.jsx)("p",{children:"Address"}),(0,xe.jsx)("p",{children:"Full CV"})]}),(0,xe.jsxs)("div",{className:"info-details",children:[(0,xe.jsx)("p",{children:": Oct-1990"}),(0,xe.jsx)("p",{children:": 0974 --- 886"}),(0,xe.jsx)("p",{children:": ninhpham.khtn@gmail.com"}),(0,xe.jsxs)("p",{children:[": ",(0,xe.jsx)("a",{href:"https://ninh.js.org",children:"https://ninh.js.org"})]}),(0,xe.jsx)("p",{children:": HCMC, Vietnam"}),(0,xe.jsxs)("p",{children:[": ",(0,xe.jsx)("i",{children:"<drop me an email>"})]})]}),(0,xe.jsx)("p",{className:"about-signature",children:"Ninh Pham"})]})}),(0,xe.jsx)("div",{className:"col-md-4",children:(0,xe.jsxs)("div",{className:"about-extra",children:[(0,xe.jsx)("h4",{children:"HOBBIES & INTERESTS"}),(0,xe.jsx)("div",{className:"about-extra-icon-style2",children:(0,xe.jsxs)("ul",{children:[(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-headphones"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"Music"})]})}),(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-terminal"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"JS"})]})}),(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-apple2"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"macOS"})]})}),(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-video-camera"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"Cinema"})]})}),(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-coffee"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"Coffee"})]})}),(0,xe.jsx)("li",{children:(0,xe.jsxs)("p",{children:[(0,xe.jsx)("i",{className:"fa-money"}),(0,xe.jsx)("br",{}),(0,xe.jsx)("span",{children:"Money"})]})})]})})]})})]})]})}),(0,xe.jsx)(ke,{}),(0,xe.jsx)(Te,{}),(0,xe.jsx)("div",{id:"qoutes",className:"parallax","data-stellar-background-ratio":"0.6","data-stellar-vertical-offset":"20",children:(0,xe.jsx)("div",{className:"parallax-overlay-2",children:(0,xe.jsx)("div",{className:"container",children:(0,xe.jsxs)("div",{className:"col-md-12",children:[(0,xe.jsx)("h1",{children:'"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."'}),(0,xe.jsx)("i",{children:"- Linus Torvalds"})]})})})}),(0,xe.jsx)("footer",{children:(0,xe.jsx)("div",{className:"footer-bottom",children:(0,xe.jsx)("div",{className:"container",children:(0,xe.jsx)("div",{className:"row",children:(0,xe.jsx)("div",{className:"col-md-12 col-xs-12 text-center",children:(0,xe.jsx)("p",{className:"small",children:(0,xe.jsx)("a",{href:"https://www.google.com/search?q=ReeganExE",target:"_blank",rel:"noreferrer",children:"#ReeganExE"})})})})})})}),(0,xe.jsx)("a",{className:"scroll-top",href:"#",title:"Scroll to top",children:(0,xe.jsx)("i",{className:"fa-chevron-up"})})]})}}}]);