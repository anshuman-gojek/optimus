"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[4112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={},l="Contributing",s={unversionedId:"contribute/contributing",id:"contribute/contributing",isDocsHomePage:!1,title:"Contributing",description:"First off, thanks for taking the time to contribute! \ud83c\udf1f\ud83e\udd73",source:"@site/docs/contribute/contributing.md",sourceDirName:"contribute",slug:"/contribute/contributing",permalink:"/optimus/docs/contribute/contributing",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/contribute/contributing.md",tags:[],version:"current",lastUpdatedBy:"Yash Bhardwaj",lastUpdatedAt:1664261115,formattedLastUpdatedAt:"9/27/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Developing plugins",permalink:"/optimus/docs/development/building-plugin"},next:{title:"Roadmap",permalink:"/optimus/docs/roadmap"}},u=[{value:"Best practices",id:"best-practices",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"First off, thanks for taking the time to contribute! \ud83c\udf1f\ud83e\udd73"),(0,o.kt)("p",null,"When contributing to this repository, please first discuss the change you wish to make via issue,\nemail, or any other method with the owners of this repository before making a change."),(0,o.kt)("p",null,"Please note we have a code of conduct, please follow it in all your interactions with the project."),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write clear and meaningful git commit messages."),(0,o.kt)("li",{parentName:"ul"},"If the PR will ",(0,o.kt)("em",{parentName:"li"},"completely")," fix a specific issue, include ",(0,o.kt)("inlineCode",{parentName:"li"},"fixes #123")," in the PR body (where 123 is the specific issue number the PR will fix. This will automatically close the issue when the PR is merged."),(0,o.kt)("li",{parentName:"ul"},"Make sure you don't include ",(0,o.kt)("inlineCode",{parentName:"li"},"@mentions")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fixes")," keywords in your git commit messages. These should be included in the PR body instead."),(0,o.kt)("li",{parentName:"ul"},"When you make a PR for small change (such as fixing a typo, style change, or grammar fix), please squash your commits so that we can maintain a cleaner git history."),(0,o.kt)("li",{parentName:"ul"},"Make sure you include a clear and detailed PR description explaining the reasons for the changes, and ensuring there is sufficient information for the reviewer to understand your PR."),(0,o.kt)("li",{parentName:"ul"},"Additional Readings:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chris.beams.io/posts/git-commit/"},"chris.beams.io/posts/git-commit/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/blog/1506-closing-issues-via-pull-requests"},"github.com/blog/1506-closing-issues-via-pull-requests ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://davidwalsh.name/squash-commits-git"},"davidwalsh.name/squash-commits-git ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mtlynch.io/code-review-love/"},"https://mtlynch.io/code-review-love/"))))),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"Examples of behavior that contributes to creating a positive environment\ninclude:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using welcoming and inclusive language"),(0,o.kt)("li",{parentName:"ul"},"Being respectful of differing viewpoints and experiences"),(0,o.kt)("li",{parentName:"ul"},"Gracefully accepting constructive criticism"),(0,o.kt)("li",{parentName:"ul"},"Focusing on what is best for the project")),(0,o.kt)("p",null,"Things to keep in mind before creating a new commit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go through the project code conventions."),(0,o.kt)("li",{parentName:"ul"},"Commit ",(0,o.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cncf/foundation/blob/master/code-of-conduct.md"},"CNCF Code of Conduct"))))}m.isMDXComponent=!0}}]);