(self.webpackJsonp=self.webpackJsonp||[]).push([[6],{130:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r(54),o=r(25);r(93),r(91);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){var e=u(["\n      iframe {\n        display: block;\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n      paper-icon-button {\n        color: var(--text-primary-color);\n      }\n    "]);return a=function(){return e},e}function c(e,t){return k(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,t)||g()}function l(){var e=u(["\n      <hass-subpage .header="," hassio>\n        <iframe src=","></iframe>\n      </hass-subpage>\n    "]);return l=function(){return e},e}function f(){var e=u(["\n        <hass-loading-screen></hass-loading-screen>\n      "]);return f=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t,r=w(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function b(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function w(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(e){if(Array.isArray(e))return e}function E(e,t,r){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,n){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!y(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var f=0;f<l.length;f++)this.addElementPlacement(l[f],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,k(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||g()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=w(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=b(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=b(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t(function(e){i.initializeInstanceElements(e,a.elements)},r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(v(o.descriptor)||v(i.descriptor)){if(y(o)||y(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(y(o)){if(y(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}m(o,i)}else t.push(o)}return t}(s.d.map(h)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([Object(n.d)("hassio-ingress-view")],function(e,t){var r=function(r){function n(){var t,r,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return i=this,r=!(o=(t=O(n)).call.apply(t,[this].concat(c)))||"object"!==s(o)&&"function"!=typeof o?d(i):o,e(d(r)),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,t),n}();return{F:r,d:[{kind:"field",decorators:[Object(n.f)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(n.f)()],key:"route",value:void 0},{kind:"field",decorators:[Object(n.f)()],key:"_addon",value:void 0},{kind:"method",key:"render",value:function(){return this._addon?Object(n.e)(l(),this._addon.name,this._addon.ingress_url):Object(n.e)(f())}},{kind:"method",key:"updated",value:function(e){if(E(O(r.prototype),"firstUpdated",this).call(this,e),e.has("route")){var t=this.route.path.substr(1),n=e.get("route"),i=n?n.path.substr(1):void 0;t&&t!==i&&this._fetchData(t)}}},{kind:"method",key:"_fetchData",value:function(e){var t,r,n;return regeneratorRuntime.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,regeneratorRuntime.awrap(Promise.all([Object(o.b)(this.hass,e).catch(function(){throw new Error("Failed to fetch add-on info")}),Object(i.a)(this.hass).catch(function(){throw new Error("Failed to create an ingress session")})]));case 3:if(t=s.sent,r=c(t,1),(n=r[0]).ingress){s.next=8;break}throw new Error("This add-on does not support ingress");case 8:this._addon=n,s.next=16;break;case 11:s.prev=11,s.t0=s.catch(0),console.error(s.t0),alert(s.t0.message||"Unknown error starting ingress."),history.back();case 16:case"end":return s.stop()}},null,this,[[0,11]])}},{kind:"get",static:!0,key:"styles",value:function(){return Object(n.c)(a())}}]}},n.a)}}]);
//# sourceMappingURL=chunk.900c5d3fab8b6ebdcbc6.js.map