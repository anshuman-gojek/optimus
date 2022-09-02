"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[7663],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=s,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9127:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"refresh-jobs",title:"Refresh Jobs"},i=void 0,c={unversionedId:"guides/refresh-jobs",id:"guides/refresh-jobs",isDocsHomePage:!1,title:"Refresh Jobs",description:"Jobs might need to be refreshed on certain cases, for example:",source:"@site/docs/guides/refresh-jobs.md",sourceDirName:"guides",slug:"/guides/refresh-jobs",permalink:"/optimus/docs/guides/refresh-jobs",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/refresh-jobs.md",tags:[],version:"current",lastUpdatedBy:"Yash Bhardwaj",lastUpdatedAt:1662103569,formattedLastUpdatedAt:"9/2/2022",frontMatter:{id:"refresh-jobs",title:"Refresh Jobs"},sidebar:"docsSidebar",previous:{title:"Manage Secrets",permalink:"/optimus/docs/guides/secret"},next:{title:"Alerts",permalink:"/optimus/docs/guides/alerts"}},p=[{value:"Refresh jobs",id:"refresh-jobs",children:[{value:"Refresh jobs on selected namespaces",id:"refresh-jobs-on-selected-namespaces",children:[]},{value:"Refresh only selected jobs",id:"refresh-only-selected-jobs",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs might need to be refreshed on certain cases, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When job source is a ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," and the source view has been modified."),(0,o.kt)("li",{parentName:"ul"},"When there is some issues on job dependencies or priorities and need to do a clean up"),(0,o.kt)("li",{parentName:"ul"},"When jobs need to have its plugin refreshed to the latest version")),(0,o.kt)("p",null,"Optimus refresh will try to resolve the dependencies for the ",(0,o.kt)("strong",{parentName:"p"},"requested")," jobs and deploy ",(0,o.kt)("strong",{parentName:"p"},"all")," jobs in the project. "),(0,o.kt)("h2",{id:"refresh-jobs"},"Refresh jobs"),(0,o.kt)("p",null,"Refresh all jobs in the requested project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus job refresh --project sample-project --verbose\n")),(0,o.kt)("p",null,"Note: use verbose flag to show list of jobs being refreshed and deployed"),(0,o.kt)("h3",{id:"refresh-jobs-on-selected-namespaces"},"Refresh jobs on selected namespaces"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"namespaces")," flag to refresh only the selected namespace. Only all the jobs in the selected namespaces will be\nrefreshed, but all the jobs in the project will be deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus job refresh --project sample-project --namespaces namespace-a,namespace-b\n")),(0,o.kt)("h3",{id:"refresh-only-selected-jobs"},"Refresh only selected jobs"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," flag to only refresh selected jobs. Only the selected jobs will be refreshed, but all the jobs in the project\nwill be deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus job refresh --project sample-project --namespaces namespace-a --jobs job-a,job-b\n")),(0,o.kt)("p",null,"Note: All the selected jobs should be inside the same namespace."))}d.isMDXComponent=!0}}]);