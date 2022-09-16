"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[657],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4493:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],r={id:"extension",title:"Work with Extension"},s=void 0,u={unversionedId:"guides/extension",id:"guides/extension",isDocsHomePage:!1,title:"Work with Extension",description:"Extension helps the user to include third-party or arbitrary implementation",source:"@site/docs/guides/extension.md",sourceDirName:"guides",slug:"/guides/extension",permalink:"/optimus/docs/guides/extension",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/extension.md",tags:[],version:"current",lastUpdatedBy:"Sandeep Bhardwaj",lastUpdatedAt:1663311225,formattedLastUpdatedAt:"9/16/2022",frontMatter:{id:"extension",title:"Work with Extension"},sidebar:"docsSidebar",previous:{title:"Bigquery to bigquery transformation task",permalink:"/optimus/docs/guides/task-bq2bq"},next:{title:"Backup Resources",permalink:"/optimus/docs/guides/backup"}},p=[{value:"Warning",id:"warning",children:[]},{value:"Limitation",id:"limitation",children:[]},{value:"Creating",id:"creating",children:[]},{value:"Commands",id:"commands",children:[{value:"Installation",id:"installation",children:[]},{value:"Executing",id:"executing",children:[]},{value:"Operation",id:"operation",children:[]}]}],m={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extension helps the user to include third-party or arbitrary implementation\nas part of Optimus. Currently, extension is designed for when the user\nis running it as CLI."),(0,o.kt)("h2",{id:"warning"},"Warning"),(0,o.kt)("p",null,"Extension is basically an executable file outside Optimus. ",(0,o.kt)("strong",{parentName:"p"},"We do not guarantee whether an extension is safe or not"),". We suggest to check the extension itself, whether it is safe to run in your local or not, before installing and running it."),(0,o.kt)("h2",{id:"limitation"},"Limitation"),(0,o.kt)("p",null,"Extension is designed to be similar to ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/manual/gh_extension"},"Github extension"),".\nHowever, since it's still in early stage, some limitations are there."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extension is only an executable file"),(0,o.kt)("li",{parentName:"ul"},"installation only looks at the Github asset according to the running system OS and Architecture"),(0,o.kt)("li",{parentName:"ul"},"convention for extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"extension repository should follow ",(0,o.kt)("inlineCode",{parentName:"li"},"optimus-extension-[name of extension]")," (example: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gojek/optimus-extension-valor"},"optimus-extension-valor"),")"),(0,o.kt)("li",{parentName:"ul"},"asset being consdered is binary with suffix ",(0,o.kt)("inlineCode",{parentName:"li"},"...[OS]-[ARC]")," (example: when installing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gojek/optimus-extension-valor"},(0,o.kt)("inlineCode",{parentName:"a"},"valor")),", if the user's OS is Linux and the architecture is AMD64, then installation will consider ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_linux-amd64")," as binary to be executed)")))),(0,o.kt)("h2",{id:"creating"},"Creating"),(0,o.kt)("p",null,"Extension is designed to be open. Anyone could create their own extension. And as long as it is avilable, anyone could install it. In order to create it, the following is the basic steps to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Decide the name of the extension, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"valor")),(0,o.kt)("li",{parentName:"ol"},"Create a Github repository that follows the convention, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"optimus-extension-valor")),(0,o.kt)("li",{parentName:"ol"},"Put some implementation and asset with name based on the convention, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_linux-amd64"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_darwin-amd64"),", and more."),(0,o.kt)("li",{parentName:"ol"},"Ensure it is available for anyone to download")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Optimus support some commands to help operating on extension."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The user can run installation using Optimus sub-command ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"extension"),".\nIn order to install extension, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install REMOTE [flags]\n")),(0,o.kt)("p",null,"The user can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--alias")," flag to change the command name, since by default, Optimus\nwill try to figure it out by itself. Although, during this process, sometime\nan extension name conflict with the reserved commands. This flag helps to resolve that.\nBut, do note that this flag cannot be used to rename an ",(0,o.kt)("strong",{parentName:"p"},"installed")," extension.\nTo do such a thing, check ",(0,o.kt)("a",{parentName:"p",href:"#rename"},"rename"),"."),(0,o.kt)("p",null,"REMOTE is the Github remote path where to look for the extension.\nREMOTE can be in the form of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OWNER/PROJECT"),(0,o.kt)("li",{parentName:"ul"},"github.com/OWNER/PROJECT"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/OWNER/PROJECT"},"https://www.github.com/OWNER/PROJECT"))),(0,o.kt)("p",null,"One example of such extension is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gojek/optimus-extension-valor"},(0,o.kt)("inlineCode",{parentName:"a"},"Valor")),".\nSo, going back to the example above, installing it is like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install gojek/optimus-extension-valor\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install github.com/gojek/optimus-extension-valor\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install https://github.com/gojek/optimus-extension-valor\n")),(0,o.kt)("p",null,"Installation process is then in progress. If installation is a success, the user can show it by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus --help\n")),(0,o.kt)("p",null,"A new command named after the extension will be available.\nFor example, if the extension name is ",(0,o.kt)("inlineCode",{parentName:"p"},"optimus-extension-valor"),", then by default the command named ",(0,o.kt)("inlineCode",{parentName:"p"},"valor")," will be available.\nIf the user wish to change it, they can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--alias")," during installation, or\n",(0,o.kt)("inlineCode",{parentName:"p"},"rename")," it (explained later)."),(0,o.kt)("p",null,"The following is example when running ",(0,o.kt)("inlineCode",{parentName:"p"},"optimus")," (without any command):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"...\nAvailable Commands:\n  ...\n  extension   Operate with extension\n  ...\n  valor       Execute gojek/optimus-extension-valor [v0.0.2] extension\n  version     Print the client version information\n...\n")),(0,o.kt)("h3",{id:"executing"},"Executing"),(0,o.kt)("p",null,"In order to execute an extension, make sure to follow the installation process described ",(0,o.kt)("a",{parentName:"p",href:"#installation"},"above"),".\nAfter installation is finished, simply run the extension with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus [extension name or alias]\n")),(0,o.kt)("p",null,"Example of ",(0,o.kt)("inlineCode",{parentName:"p"},"valor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus valor\n")),(0,o.kt)("h3",{id:"operation"},"Operation"),(0,o.kt)("p",null,"The user can do some operations to an extension. This section explain more about the available commands. Do note that these commands are available on the installed extensions.\nFor more detail, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension [extension name or alias]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor\n")),(0,o.kt)("p",null,"The above command shows all available commands for ",(0,o.kt)("inlineCode",{parentName:"p"},"valor")," extension."),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"Sub-command to operate over extension [gojek/optimus-extension-valor@v0.0.4]\n\nUSAGE\n  optimus extension valor [flags]\n\nCORE COMMANDS\n  activate    activate is a sub command to allow user to activate an installed tag\n  describe    describe is a sub command to allow user to describe extension\n  rename      rename is a sub command to allow user to rename an extension command\n  uninstall   uninstall is a sub command to allow user to uninstall a specified tag of an extension\n  upgrade     upgrade is a sub command to allow user to upgrade an extension command\n\nINHERITED FLAGS\n      --help       Show help for command\n      --no-color   Disable colored output\n  -v, --verbose    if true, then more message will be provided if error encountered\n")),(0,o.kt)("h4",{id:"activate"},"Activate"),(0,o.kt)("p",null,"Activate a specific tag when running extension. For example, if the user has two version of ",(0,o.kt)("inlineCode",{parentName:"p"},"valor"),", which is ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.0.1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.0.2"),", then by specifying the correct tag, the user can just switch between tag."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor activate v0.0.1\n")),(0,o.kt)("h4",{id:"describe"},"Describe"),(0,o.kt)("p",null,"Describes general information about an extension, such information includes all\navailable releases of an extension in the local, which release is active,\nand more."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor describe\n")),(0,o.kt)("h4",{id:"rename"},"Rename"),(0,o.kt)("p",null,"Rename a specific extension to another command that are not reserved.\nBy default, Optimus tries to figure out the appropriate command name from its project name.\nHowever, sometime the extension name is not convenient like it being too long or the user\njust want to change it."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor rename vl\n")),(0,o.kt)("h4",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"Uninstalls extension as a whole or only a specific tag. This allows the user to do\nsome clean up to preserve some storage or to resolve some issues.\nBy default, Optimus will uninstall the extension as a whole. To target a specific tag,\nuse flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor uninstall\n")),(0,o.kt)("h4",{id:"upgrade"},"Upgrade"),(0,o.kt)("p",null,"Upgrade allows the user to upgrade a certain extension to its latest tag.\nAlthough the user can use the install command, but using this command is shorter\nand easier as the user only needs to specify the installed extension."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension valor upgrade\n")))}c.isMDXComponent=!0}}]);