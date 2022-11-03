"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[7088],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6092:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"secret",title:"Manage Secrets"},c=void 0,l={unversionedId:"guides/secret",id:"guides/secret",isDocsHomePage:!1,title:"Manage Secrets",description:"During job execution, specific credentials are needed to access required resources, for example, BigQuery credential",source:"@site/docs/guides/manage-secrets.md",sourceDirName:"guides",slug:"/guides/secret",permalink:"/optimus/docs/guides/secret",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/manage-secrets.md",tags:[],version:"current",lastUpdatedBy:"Yash Bhardwaj",lastUpdatedAt:1667456032,formattedLastUpdatedAt:"11/3/2022",frontMatter:{id:"secret",title:"Manage Secrets"},sidebar:"docsSidebar",previous:{title:"Backfill jobs using Replay",permalink:"/optimus/docs/guides/replay"},next:{title:"Refresh Jobs",permalink:"/optimus/docs/guides/refresh-jobs"}},u=[{value:"Registering secret with Optimus",id:"registering-secret-with-optimus",children:[]},{value:"Updating a secret",id:"updating-a-secret",children:[]},{value:"Listing a secret",id:"listing-a-secret",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During job execution, specific credentials are needed to access required resources, for example, BigQuery credential\nfor BQ to BQ tasks. Users are able to register secrets on their own, manage it, and use it in tasks and hooks.\nPlease go through ",(0,a.kt)("a",{parentName:"p",href:"/optimus/docs/concepts/overview"},"concepts")," to know more about it."),(0,a.kt)("h2",{id:"registering-secret-with-optimus"},"Registering secret with Optimus"),(0,a.kt)("p",null,"Register a secret by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret someSecretValue\n")),(0,a.kt)("p",null,"By default, Optimus will encode the secret value. However, to register secret that has been encoded, run the following\ncommand instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret encodedSecretValue --base64\n")),(0,a.kt)("p",null,"There is also a flexibility to register using an existing secret file, instead of providing the secret value in the\ncommand."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret --file=/path/to/secret\n")),(0,a.kt)("p",null,"Please note that registering a secret which already exists will result in error. Modifying an existing secret can be\ndone using the Update command."),(0,a.kt)("h2",{id:"updating-a-secret"},"Updating a secret"),(0,a.kt)("p",null,"The update-only flag is generally used when you explicitly only want to update a secret which already exists\nand don't want to create it by mistake."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret someSecretValue --update-only\n")),(0,a.kt)("p",null,"It will return an error if the secret to update does not exist already."),(0,a.kt)("h2",{id:"listing-a-secret"},"Listing a secret"),(0,a.kt)("p",null,"The list command can be used to show the user defined secrets which are registered with optimus. It will list\nthe namespace associated for a secret."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret list\nSecrets for project: optimus-local\n     NAME    |                    DIGEST                    | NAMESPACE |         DATE\n-------------+----------------------------------------------+-----------+-----------------------\n   secret1   | SIBzsgUuHnExBY4qSzqcrlrb+3zCAHGu/4Fv1O8eMI8= |     *     | 2022-04-12T04:30:45Z\n")),(0,a.kt)("p",null,"It shows a digest for the encrypted secret, so as not to send the cleartext password on the network."))}d.isMDXComponent=!0}}]);