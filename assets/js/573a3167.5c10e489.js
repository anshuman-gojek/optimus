"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[7992],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},200:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={id:"shell-autocompletion",title:"Shell autocompletion"},s=void 0,c={unversionedId:"reference/shell-autocompletion",id:"reference/shell-autocompletion",isDocsHomePage:!1,title:"Shell autocompletion",description:"Bash auto-completion",source:"@site/docs/reference/shell-autocompletion.md",sourceDirName:"reference",slug:"/reference/shell-autocompletion",permalink:"/optimus/docs/reference/shell-autocompletion",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/reference/shell-autocompletion.md",tags:[],version:"current",lastUpdatedBy:"Saikumar Chintada",lastUpdatedAt:1663942089,formattedLastUpdatedAt:"9/23/2022",frontMatter:{id:"shell-autocompletion",title:"Shell autocompletion"},sidebar:"docsSidebar",previous:{title:"FAQ",permalink:"/optimus/docs/reference/faq"}},p=[{value:"Bash auto-completion",id:"bash-auto-completion",children:[]},{value:"Zsh Auto-completion",id:"zsh-auto-completion",children:[]}],u={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bash-auto-completion"},"Bash auto-completion"),(0,a.kt)("p",null,"The optimus completion script for Bash can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"optimus completion bash"),". Sourcing this script in your shell enables optimus completion."),(0,a.kt)("p",null,"However, the completion script depends on bash-completion, which means that you have to install this software first (you can test if you have bash-completion already installed by running\n",(0,a.kt)("inlineCode",{parentName:"p"},"type _init_completion"),")."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: There are two versions of bash-completion, v1 and v2. V1 is for Bash 3.2 (which is the default on macOS), and v2 is for Bash 4.1+. The optimus completion script doesn't work correctly with bash-completion v1 and Bash 3.2. It requires bash-completion v2 and Bash 4.1+. Thus, to be able to correctly use optimus completion on macOS, you have to install and use Bash 4.1+ (instructions). The following instructions assume that you use Bash 4.1+ (that is, any Bash version of 4.1 or newer).")),(0,a.kt)("p",null,"You now have to ensure that the optimus completion script gets sourced in all your shell sessions. There are multiple ways to achieve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Source the completion script in your ~/.bash_profile file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo 'source <(optimus completion bash)' >> ~/.bash_profile\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the completion script to the /usr/local/etc/bash_completion.d directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# To load completions for each session, execute once:\n# Linux:\n$ optimus completion bash > /etc/bash_completion.d/_optimus\n# macOS:\n$ optimus completion bash > /usr/local/etc/bash_completion.d/_optimus\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you installed optimus with Homebrew (as explained in ",(0,a.kt)("a",{parentName:"li",href:"/optimus/docs/getting-started/installation"},"getting started"),"), then the optimus completion script should already be in /usr/local/etc/bash_completion.d/_optimus. In that case, you don't need to do anything.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The Homebrew installation of bash-completion v2 sources all the files in the BASH_COMPLETION_COMPAT_DIR directory, that's why the latter two methods work.")),(0,a.kt)("p",null,"In any case, after reloading your shell, optimus completion should be working."),(0,a.kt)("h3",{id:"zsh-auto-completion"},"Zsh Auto-completion"),(0,a.kt)("p",null,"The optimus completion script for Zsh can be generated with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"optimus completion zsh"),". Sourcing the completion script in your shell enables optimus autocompletion."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If shell completion is not already enabled in your environment, you will need to enable it. You can execute the following once:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you get an error like ",(0,a.kt)("inlineCode",{parentName:"p"},"complete:13: command not found: compdef"),", then add the following to the beginning of your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  $ echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To load completions for each session, execute once:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  $ optimus completion zsh > "${fpath[1]}/_optimus"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now start a new shell for this setup to take effect and execute the below command to do sourcing in all your shell session:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  $ source ~/.zshrc \n")),(0,a.kt)("p",null,"After setup is completed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," # Run the following command in shell (bash/zsh)\n $ optimus [tab][tab]\n")),(0,a.kt)("p",null,"Output :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ optimus \nOptimus is an easy-to-use, reliable, and performant workflow orchestrator for\ndata transformation, data modeling, pipelines, and data quality management.\n\nFor passing authentication header, set one of the following environment\nvariables:\n1. OPTIMUS_AUTH_BASIC_TOKEN\n2. OPTIMUS_AUTH_BEARER_TOKEN\n\nUSAGE\n optimus <command> <subcommand> [flags]\n\nCORE COMMANDS\n backup      Backup a resource and its downstream\n deploy      Deploy current optimus project to server\n job         Interact with schedulable Job\n replay      Re-running jobs in order to update data for older dates/partitions\n resource    Interact with data resource\n\nDEV COMMANDS\n serve       Starts optimus service\n\nADDITIONAL COMMANDS\n completion  generate the autocompletion script for the specified shell\n config      Manage optimus configuration required to deploy specifications\n extension   Operate with extension\n help        Help about any command\n version     Print the client version information\n\nFLAGS\n --help       Show help for command\n --no-color   Disable colored output\n\nEXAMPLES\n $ optimus job create\n $ optimus backup create\n $ optimus backup list\n $ optimus replay create\n\nLEARN MORE\n Use 'optimus <command> <subcommand> --help' for more information about a command.\n Read the manual at https://odpf.github.io/optimus/\n\nFEEDBACK\n Open an issue here https://github.com/odpf/optimus/issues\n")))}m.isMDXComponent=!0}}]);