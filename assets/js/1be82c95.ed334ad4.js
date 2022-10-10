"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[6864],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"create-bigquery-table",title:"Create bigquery table"},c=void 0,l={unversionedId:"guides/create-bigquery-table",id:"guides/create-bigquery-table",isDocsHomePage:!1,title:"Create bigquery table",description:"A BigQuery table contains individual records organized in rows. Each record is",source:"@site/docs/guides/create-bigquery-table.md",sourceDirName:"guides",slug:"/guides/create-bigquery-table",permalink:"/optimus/docs/guides/create-bigquery-table",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/create-bigquery-table.md",tags:[],version:"current",lastUpdatedBy:"Anwar Hidayat",lastUpdatedAt:1665392198,formattedLastUpdatedAt:"10/10/2022",frontMatter:{id:"create-bigquery-table",title:"Create bigquery table"},sidebar:"docsSidebar",previous:{title:"Create bigquery dataset",permalink:"/optimus/docs/guides/create-bigquery-dataset"},next:{title:"Create bigquery view",permalink:"/optimus/docs/guides/create-bigquery-view"}},u=[{value:"Creating table with Optimus",id:"creating-table-with-optimus",children:[]},{value:"Creating table over REST",id:"creating-table-over-rest",children:[]},{value:"Creating table over GRPC",id:"creating-table-over-grpc",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A BigQuery table contains individual records organized in rows. Each record is\ncomposed of columns (also called fields).\nEvery table is defined by a schema that describes the column names, data types,\nand other information. You can specify the schema of a table when it is created.\nAt the moment only native table is supported."),(0,i.kt)("p",null,"There are 3 ways to create a table:"),(0,i.kt)("h3",{id:"creating-table-with-optimus"},"Creating table with Optimus"),(0,i.kt)("p",null,"Supported datastore can be selected by calling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"optimus resource create\n")),(0,i.kt)("p",null,"Optimus will request a resource name which should be unique across whole datastore.\nAll resource specification contains a name field which conforms to a fixed format.\nIn case of bigquery table, format should be\n",(0,i.kt)("inlineCode",{parentName:"p"},"projectname.datasetname.tablename"),".\nAfter the name is provided, ",(0,i.kt)("inlineCode",{parentName:"p"},"optimus")," will create a file in configured datastore\ndirectory. Open the created specification file and add additional spec details\nas follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: 1\n\n# unique name that must conform to validations of type of resource we are creating\n# in case of bigquery table, this is fully qualified name\nname: temporary-project.optimus-playground.first_table\n\n# type of resource that belong to this datastore\n# e.g.: table, dataset, view\ntype: table\n\n# labels being passed to datastore which will be injected in the bigquery table\nlabels:\n  usage: testtable\n  owner: optimus\n\n# actual specification details that matches the type we are trying to create/update\nspec:\n  description: "example description"\n  schema:\n    - name: colume1 # name of the column\n      type: INTEGER # datatype of the column\n    - name: colume2\n      type: TIMESTAMP\n      description: "example field 2" # description for the column\n      mode: required # possible options (repeated/required/nullable), default is nullable\n    - name: colume3\n      type: STRUCT\n      schema: # nested struct schema\n        - name: colume_a_1\n          type: STRING\n  cluster:\n    using: [colume1]\n  partition: # leave empty as {} to partition by ingestion time\n    field: colume2 # column name\n    type: day # day/hour, default: day\n#    expiration: 24 # in hours\n#    range:\n#      start: 30\n#      end: 60\n#      interval: 2\n#  expiration_time: 200 # in hours\n\n')),(0,i.kt)("p",null,"This will add labels, description, schema, clustering, partition over colume2 by day\non the table once the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," command is invoked."),(0,i.kt)("p",null,"Optimus generates specification on the root directory inside datastore with directory\nname same as resource name, although you can change directory name to whatever you\nfind fit to organize resources. Directory structures inside datastore doesn't\nmatter as long as ",(0,i.kt)("inlineCode",{parentName:"p"},"resource.yaml")," is in a unique directory. "),(0,i.kt)("p",null,"For example following is a valid directory structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./\n./bigquery/temporary-project/optimus-playground/resource.yaml\n./bigquery/temporary-project/optimus-playground/first_table/resource.yaml\n")),(0,i.kt)("h3",{id:"creating-table-over-rest"},"Creating table over REST"),(0,i.kt)("p",null,"Optimus exposes Create/Update rest APIS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Create: POST /api/v1beta1/project/{project_name}/namespace/{namespace}/datastore/{datastore_name}/resource\nUpdate: PUT /api/v1beta1/project/{project_name}/namespace/{namespace}/datastore/{datastore_name}/resource\nRead: GET /api/v1beta1/project/{project_name}/namespace/{namespace}/datastore/{datastore_name}/resource/{resource_name}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": {\n    "version": 1,\n    "name": "temporary-project.optimus-playground.first_table",\n    "datastore": "bigquery",\n    "type": "table",\n    "labels": {\n      "usage": "testdataset",\n      "owner": "optimus"\n    },\n    "spec": {\n      "description": "example description",\n      "schema": [\n        {\n          "name": "column1",\n          "type": "INTEGER"\n        },\n        {\n          "name": "column2",\n          "type": "TIMESTAMP",\n          "description": "example description",\n          "mode": "required"\n        },\n        {\n          "name": "column3",\n          "type": "STRUCT",\n          "schema": [\n            {\n              "name": "column_a_1",\n              "type": "STRING"\n            }\n          ]\n        }\n      ],\n      "partition": {\n        "field": "column2"\n      },\n      "cluster": {\n        "using": ["column1"]\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"creating-table-over-grpc"},"Creating table over GRPC"),(0,i.kt)("p",null,"Optimus in RuntimeService exposes an RPC "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc CreateResource(CreateResourceRequest) returns (CreateResourceResponse) {}\n\nmessage CreateResourceRequest {\n    string project_name = 1;\n    string datastore_name = 2;\n    ResourceSpecification resource = 3;\n    string namespace = 4;\n}\n")),(0,i.kt)("p",null,"Function payload should be self-explanatory other than the struct ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," part which\nis very similar to how json representation look."),(0,i.kt)("p",null,"Spec will use ",(0,i.kt)("inlineCode",{parentName:"p"},"structpb")," struct created with ",(0,i.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),"\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'map[string]interface{\n    "description": "example description",\n    "schema": []interface{\n        map[string]interface{\n            "name": "colume1",\n            "type": "integer"\n        },\n        map[string]interface{\n            "name": "colume2",\n            "type": "timestamp"\n            "description": "some description",\n            "mode": "required"\n        },\n    },\n    "partition": map[string]interface{\n        "field": "column2"\n    },\n}\n')))}d.isMDXComponent=!0}}]);