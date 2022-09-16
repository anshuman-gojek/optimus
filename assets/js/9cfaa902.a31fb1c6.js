"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[8031],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=["components"],i={id:"backup",title:"Backup Resources"},s=void 0,l={unversionedId:"guides/backup",id:"guides/backup",isDocsHomePage:!1,title:"Backup Resources",description:"Backup is a common prerequisite step to be done before re-running or modifying a resource. Currently, Optimus supports",source:"@site/docs/guides/backup.md",sourceDirName:"guides",slug:"/guides/backup",permalink:"/optimus/docs/guides/backup",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/backup.md",tags:[],version:"current",lastUpdatedBy:"Dery Rahman Ahaddienata",lastUpdatedAt:1663319233,formattedLastUpdatedAt:"9/16/2022",frontMatter:{id:"backup",title:"Backup Resources"},sidebar:"docsSidebar",previous:{title:"Work with Extension",permalink:"/optimus/docs/guides/extension"},next:{title:"Backfill jobs using Replay",permalink:"/optimus/docs/guides/replay"}},c=[{value:"Configuring backup details",id:"configuring-backup-details",children:[]},{value:"Run a backup",id:"run-a-backup",children:[]},{value:"Get list of backups",id:"get-list-of-backups",children:[]},{value:"Run a backup dry run",id:"run-a-backup-dry-run",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Backup is a common prerequisite step to be done before re-running or modifying a resource. Currently, Optimus supports\nbackup for BigQuery tables and provides dependency resolution, so backup can be also done to all the downstream tables\nas long as it is registered in Optimus and within the same project."),(0,u.kt)("h2",{id:"configuring-backup-details"},"Configuring backup details"),(0,u.kt)("p",null,"Several configurations can be set to have the backup result in your project as your preference. Here are the\navailable configurations for BigQuery datastore."),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"),(0,u.kt)("th",{parentName:"tr",align:null},"Default"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"ttl"),(0,u.kt)("td",{parentName:"tr",align:null},"Time to live in duration"),(0,u.kt)("td",{parentName:"tr",align:null},"720h")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"prefix"),(0,u.kt)("td",{parentName:"tr",align:null},"Prefix of the result table name"),(0,u.kt)("td",{parentName:"tr",align:null},"backup")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"dataset"),(0,u.kt)("td",{parentName:"tr",align:null},"Where the table result should be located"),(0,u.kt)("td",{parentName:"tr",align:null},"optimus_backup")))),(0,u.kt)("p",null,"These values can be set in the project ",(0,u.kt)("a",{parentName:"p",href:"/optimus/docs/getting-started/configuration"},"configuration"),"."),(0,u.kt)("h2",{id:"run-a-backup"},"Run a backup"),(0,u.kt)("p",null,"To start a backup, run the following command:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ optimus backup create --resource "resource_name" --project sample-project --namespace sample-namespace\n')),(0,u.kt)("p",null,"After you run the command, prompts will be shown. You will need to answer the questions."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'$ optimus backup create --resource "resource_name" --project sample-project --namespace sample-namespace\n? Select supported datastore? bigquery\n? Why is this backup needed? backfill due to business logic change\n? Backup downstream? Yes\n')),(0,u.kt)("p",null,"You will be shown a list of resources that will be backed up, including the downstream resources (if you chose to do so).\nYou can confirm to proceed if the list is as expected, and please wait until the backup is finished."),(0,u.kt)("p",null,"Once the backup is finished, the list of backup results along with where it is located will be shown."),(0,u.kt)("h2",{id:"get-list-of-backups"},"Get list of backups"),(0,u.kt)("p",null,"List of recent backups of a project can be checked using this sub command:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus backup list --project sample-project\n")),(0,u.kt)("p",null,"Recent backup ID including the resource, when it was created, what is the description or purpose of the backup will be\nshown. Backup ID is used as a postfix in backup result name, thus you can find those results in the datastore\n(for example BigQuery) using the backup ID. However, keep in mind that these backup results have expiry time set."),(0,u.kt)("h2",{id:"run-a-backup-dry-run"},"Run a backup dry run"),(0,u.kt)("p",null,"A dry run is also available to simulate all the resources that can be backed up without actually doing it. Example of dry\nrun usage:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ optimus backup create --resource "resource_name" --project sample-project --namespace sample-namespace --dry-run\n')))}d.isMDXComponent=!0}}]);