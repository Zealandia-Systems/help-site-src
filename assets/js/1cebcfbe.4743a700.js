"use strict";(self.webpackChunkhelp_site=self.webpackChunkhelp_site||[]).push([[7642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"Quick Start/Setting Zero",id:"Quick Start/Setting Zero",title:"Setting Zero",description:"After pressing \u201cHome\u201d, your machine will return to the back left corner.",source:"@site/docs/Quick Start/Setting Zero.md",sourceDirName:"Quick Start",slug:"/Quick Start/Setting Zero",permalink:"/help-site-src/Quick Start/Setting Zero",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"quickstartSidebar",previous:{title:"Moving the machine",permalink:"/help-site-src/Quick Start/Moving the Machine"},next:{title:"Running GCode",permalink:"/help-site-src/Quick Start/Running GCode"}},c={},l=[],u={toc:l},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After pressing \u201cHome\u201d, your machine will return to the back left corner."),(0,i.kt)("p",null,"From here, install the first tool into the router collet and start the process to set our Work Position (stock) Origin."),(0,i.kt)("p",null,"Hint:\nOur Work Position Origin is the point that we tell our machine where our material is, and how the material is orientated on the machine bed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6865).Z,width:"1177",height:"892"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Current Machine Position\nThis is, in reference to \u201cHome\u201d, the current machine position co-ordinates\n\n2. Y Axis Positive Jog Button\nTo move the Y Axis in a positive direction\n\n3. X Axis Negative Jog Button\nTo move the X Axis in a Negative direction\n\n4. Z Axis Positive Jog Button\nTo move the Z axis in a Positive Direction\n\n5. Jog Step Resolution\nThis is where you set the distance you want the machine to move every time you press the jog buttons\n\n6. Zero Out Work Offset Button\nWe will need to press this when setting our Work Position origin, so the machine knows where it has to start work \n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9122).Z,width:"1086",height:"520"})),(0,i.kt)("p",null,"WARNING:"),(0,i.kt)("p",null,"Pressing the X0Y0 button will return the machine to the Work Position Origin.\nMake sure your tool is clear of all objects by raising it on the Z Axis first!!"))}h.isMDXComponent=!0},6865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GladiusNavigation-b7f2c127572cd43809d50afb6e86031d.png"},9122:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GladiusSettingWCS-40e9447595f42376ab224d4c8b4b4eaa.png"}}]);