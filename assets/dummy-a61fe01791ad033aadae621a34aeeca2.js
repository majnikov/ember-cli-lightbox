define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,a){"use strict";var n=require("highlight.js");e["default"]=t["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,a,n=e.split("\n"),r=0;r<n.length;r++)t=/^\s*/.exec(n[r]),t&&("undefined"==typeof a||a>t[0].length)&&(a=t[0].length);return"undefined"!=typeof a&&a>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+a+"}","g"),"$1")),e},source:t["default"].computed("name",function(){return this._unindent((a["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:t["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss"}})})}),define("dummy/components/light-box",["exports","ember-cli-lightbox/components/light-box"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var i=n(d.toString());a["default"].libraries.register(i,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/snippets",["exports"],function(e){"use strict";e["default"]={"1.hbs":'{{light-box href="assets/images/1-762519d870c6425b7d0f46f485ad326f.jpg" data-lightbox="cat-1" data-title="Cat 1"}}\n\n{{light-box href="assets/images/2-c7f3ae7af3fa7e273c5dc9771303c4c2.jpg" data-lightbox="cat-2" data-title="Cat 2"}}\n',"2.hbs":'{{#light-box href="assets/images/3-4086120a5eb1c07d22a77fd006b79cb1.jpg" data-lightbox="cat-3" data-title="Cat 3" inlineImage=false}}\n    Cat 4\n{{/light-box}}\n\n{{#light-box href="assets/images/4-539ab2be834a8dcfa808ae129e6f5bf0.jpg" data-lightbox="cat-4" data-title="Cat 4" inlineImage=false}}\n    Cat5\n{{/light-box}}\n',"3.hbs":'{{light-box href="assets/images/5-1f4bc128633b74a9e5bedf273274fbc4.jpg" data-lightbox="cats-group" data-title="Cat 5"}}\n\n{{#light-box href="assets/images/6-928574e6488d9a476e427a6e266dc205.jpg" data-lightbox="cats-group" data-title="Cat 6" inlineImage=false}}\n    Cat 6\n{{/light-box}}\n\n{{light-box href="assets/images/7-a32c3fd77d63416fbd875d49c3dc9e38.jpg" data-lightbox="cats-group" data-title="Cat 7"}}\n\n{{#light-box href="assets/images/8-76a3588cc2ccf15c11837e3bbea22981.jpg" data-lightbox="cats-group" data-title="Cat 8" inlineImage=false}}\n    Cat 8\n{{/light-box}}\n',usage:"npm install ember-cli-lightbox --save\nember g ember-cli-lightbox\n"}}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            Cat 4\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            Cat5\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            Cat 6\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}(),n=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("            Cat 8\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom;n.detectNamespace(a);var r;return t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(r=this.build(n),this.hasRendered?this.cachedFragment=r:this.hasRendered=!0),this.cachedFragment&&(r=n.cloneNode(this.cachedFragment,!0))):r=this.build(n),r}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","github-fork-ribbon-wrapper right");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","github-fork-ribbon");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/ramybenaroya/ember-cli-lightbox");var d=e.createTextNode("Fork me on GitHub");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h1"),n=e.createTextNode("Ember CLI Addon for ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://lokeshdhakar.com/projects/lightbox2/");var r=e.createTextNode("Lightbox2");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h2"),r=e.createTextNode("Installation");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h2"),r=e.createTextNode("Usage Examples");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("section"),r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h2"),d=e.createTextNode("Individual Clickable Images");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("hr");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h4"),d=e.createTextNode("Code");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("section"),r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h2"),d=e.createTextNode("Individual Clickable Links");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("        ");e.appendChild(n,r);var r=e.createElement("hr");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h4"),d=e.createTextNode("Code");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("section");e.setAttribute(n,"class","special");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h2"),d=e.createTextNode("Grouped Images & Links");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("        ");e.appendChild(n,r);var r=e.createElement("hr");e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h4"),d=e.createTextNode("Code");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p");e.setAttribute(a,"class","footer");var n=e.createTextNode("\n    Project maintained by ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/ramybenaroya");var r=e.createTextNode("@ramybenaroya");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(r,d,i){var l=d.dom,c=d.hooks,o=c.inline,s=c.block,h=c.content;l.detectNamespace(i);var p;d.useFragmentCache&&l.canClone?(null===this.cachedFragment&&(p=this.build(l),this.hasRendered?this.cachedFragment=p:this.hasRendered=!0),this.cachedFragment&&(p=l.cloneNode(this.cachedFragment,!0))):p=this.build(l);var m=l.childAt(p,[6]),u=l.childAt(m,[3]),g=l.childAt(m,[5]),C=l.childAt(m,[7]),f=l.createMorphAt(l.childAt(p,[4]),3,3),b=l.createMorphAt(u,3,3),v=l.createMorphAt(u,5,5),x=l.createMorphAt(u,11,11),N=l.createMorphAt(g,3,3),T=l.createMorphAt(g,4,4),F=l.createMorphAt(g,10,10),E=l.createMorphAt(C,3,3),y=l.createMorphAt(C,5,5),A=l.createMorphAt(C,7,7),M=l.createMorphAt(C,9,9),j=l.createMorphAt(C,15,15),R=l.createMorphAt(p,10,10,i);return o(d,f,r,"code-snippet",[],{name:"usage"}),o(d,b,r,"light-box",[],{href:"assets/images/1-762519d870c6425b7d0f46f485ad326f.jpg","data-lightbox":"cat-1","data-title":"Cat 1"}),o(d,v,r,"light-box",[],{href:"assets/images/2-c7f3ae7af3fa7e273c5dc9771303c4c2.jpg","data-lightbox":"cat-2","data-title":"Cat 2"}),o(d,x,r,"code-snippet",[],{name:"1.hbs"}),s(d,N,r,"light-box",[],{href:"assets/images/3-4086120a5eb1c07d22a77fd006b79cb1.jpg","data-lightbox":"cat-3","data-title":"Cat 3",inlineImage:!1},e,null),s(d,T,r,"light-box",[],{href:"assets/images/4-539ab2be834a8dcfa808ae129e6f5bf0.jpg","data-lightbox":"cat-4","data-title":"Cat 4",inlineImage:!1},t,null),o(d,F,r,"code-snippet",[],{name:"2.hbs"}),o(d,E,r,"light-box",[],{href:"assets/images/5-1f4bc128633b74a9e5bedf273274fbc4.jpg","data-lightbox":"cats-group","data-title":"Cat 5"}),s(d,y,r,"light-box",[],{href:"assets/images/6-928574e6488d9a476e427a6e266dc205.jpg","data-lightbox":"cats-group","data-title":"Cat 6",inlineImage:!1},a,null),o(d,A,r,"light-box",[],{href:"assets/images/7-a32c3fd77d63416fbd875d49c3dc9e38.jpg","data-lightbox":"cats-group","data-title":"Cat 7"}),s(d,M,r,"light-box",[],{href:"assets/images/8-76a3588cc2ccf15c11837e3bbea22981.jpg","data-lightbox":"cats-group","data-title":"Cat 8",inlineImage:!1},n,null),o(d,j,r,"code-snippet",[],{name:"3.hbs"}),h(d,R,r,"outlet"),p}}}())}),define("dummy/templates/components/code-snippet",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,d=r.content;n.detectNamespace(a);var i;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n);var l=n.createMorphAt(i,0,0,a);return n.insertBoundary(i,0),d(t,l,e,"source"),i}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-lightbox",version:"0.0.3.ab8885ee"});