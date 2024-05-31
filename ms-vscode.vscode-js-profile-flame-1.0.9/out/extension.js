(()=>{"use strict";var e={d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{activate:()=>fe,deactivate:()=>ge});const s=require("vscode");function i(e=32){let t="";for(let s=0;s<e;s++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62*Math.random())];return t}const n=e=>`<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e}';">`,r=async(e,t)=>{const s=i();return`<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      ${n(s)}\n      <title>Profile Custom Editor</title>\n    </head>\n    <body>\n      <script type="text/javascript" nonce="${s}">\n        ${Object.entries(t).map((([e,t])=>`globalThis.${e} = ${JSON.stringify(t)}`)).join(";")}\n      <\/script>\n      <script nonce="${s}" src="${e}"><\/script>\n    </body>\n    </html>\n  `},o=require("os"),a=require("path");class c{static{this.scheme="js-viz-download"}async provideTextDocumentContent(e){return s.window.withProgress({location:s.ProgressLocation.Notification,title:`Retrieving ${e.query}...`},(async()=>{try{const t=await fetch(e.query,{}),s=await t.text();return t.ok?s:`Unexpected ${t.status} from ${e.query}: ${s}`}catch(e){return e.message}}))}}function l(e,t){return a.posix?.isAbsolute(e)?a.posix.relative(e,t):a.win32?.isAbsolute(e)?a.win32.relative(e,t):a.relative(e,t)}let m="undefined"!=typeof process&&"win32"!==process.platform;function u(e){return m?e:e.toLowerCase()}function d(e){return e.startsWith("file:///")?(e=e.replace("file:///",""),"/"===(e=decodeURIComponent(e))[0]||e.match(/^[A-Za-z]:/)||(e="/"+e),h(e)&&(e=e[0].toLowerCase()+e.substr(1)),e):e}const h=e=>/^[A-Za-z]:/.test(e),p=async e=>{try{const t=b(e);return 0===t.type||await s.workspace.fs.stat(t.uri),!0}catch{return!1}},w=async({rootPath:e,location:t,viewColumn:i,callFrame:n})=>{t&&await g(e,t,i)||n&&await v(n,i)||s.window.showErrorMessage("Could not find the file in your workspace")},f=async(e,t,i,n)=>{const r=new s.Position(Math.max(0,t-1),Math.max(0,i-1));await s.window.showTextDocument(e,{viewColumn:n,selection:new s.Range(r,r)})},g=async(e,t,i)=>{const n=y(e,t.source),r=(await Promise.all(n.map(p))).findIndex((e=>e));if(-1===r)return!1;const o=b(n[r]);if(0===o.type)return await(a=o,s.commands.executeCommand(a.command,...a.args)),!0;var a;const c=await s.workspace.openTextDocument(o.uri);return await f(c,t.lineNumber,t.columnNumber,i),!0},v=async({url:e,lineNumber:t,columnNumber:i},n)=>{let r;try{r=new URL(e)}catch{return!1}if("http:"!==r.protocol&&"https:"!==r.protocol)return!1;const l=(0,a.resolve)(s.workspace.workspaceFolders?.[0].uri.fsPath??(0,o.tmpdir)(),r.pathname.slice(1)||"index.js"),m=await s.workspace.openTextDocument(s.Uri.file(l).with({scheme:c.scheme,query:e}));return await f(m,t+1,i+1,n),!0},b=e=>{const t=e?.match(/^command:([\w\.]+)(?:\?(.*))?/);if(t){const[e,s]=t.slice(1),i=s?JSON.parse(decodeURIComponent(s)):[];return{type:0,command:e,args:Array.isArray(i)?i:[i]}}return e?.match(/\w\w+:/)?{type:1,uri:s.Uri.parse(e||""),isFile:!1}:{type:1,uri:s.Uri.file(e||""),isFile:!0}},y=(e,t)=>{if(!t.path)return[];const i=b(t.path),n=[t.path];if(!e||0===i.type||!i.isFile)return n;for(const i of s.workspace.workspaceFolders??[])n.push((0,a.resolve)(i.uri.fsPath,l(e,t.path)));return n};class S{constructor(e,t){this.uri=e,this.userData=t}dispose(){}}function x(e,t){if(!x||s.extensions.all.some((t=>t.id===e)))return t();s.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds",[x])}function C(e,t,i,n){return x(i,(()=>s.commands.executeCommand("vscode.openWith",e,t,n?s.ViewColumn.Beside:s.ViewColumn.Active)))}const D=Symbol("unset"),M=/[^/\\]+$/,T=e=>M.exec(e)?.[0]??e;class F{constructor(){this.basenamesToExpand=new Map}add(e,t){const i=(e=>{let t=D;return()=>(t===D&&(t=e()),t)})((()=>{const i=new Set,n=new s.Position(Math.max(0,t.callFrame.lineNumber),Math.max(0,t.callFrame.columnNumber));i.add(`${t.callFrame.url}/${n.line}`),this.set(t.callFrame.url,n,t);const r=t.src;if(r&&0===r.source.sourceReference&&r.source.path&&r.source.path!==t.callFrame.url)for(const n of y(e,r.source)){const e=new s.Position(Math.max(0,r.lineNumber-1),Math.max(0,r.columnNumber-1)),o=`${n}/${e.line}`;i.has(o)||(i.add(o),this.set(n,e,t))}}));this.addExpansionFn(T(t.callFrame.url),i),t.src?.source.path&&this.addExpansionFn(T(t.src.source.path),i)}addExpansionFn(e,t){let s=this.basenamesToExpand.get(e);s||(s=[],this.basenamesToExpand.set(e,s)),s.push(t)}expandForFile(e){const t=T(e),s=this.basenamesToExpand.get(t);if(s){for(const e of s)e();this.basenamesToExpand.delete(t)}}}const P=new Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2});class k extends F{constructor(){super(...arguments),this.data=new Map}set(e,t,i){let n=this.data.get(u(e));n||(n=[],this.data.set(u(e),n));let r=0;for(;r<n.length&&n[r].position.line<t.line;)r++;if(n[r]?.position.line===t.line){const e=n[r];t.character<e.position.character&&(e.position=new s.Position(t.line,t.character)),e.data.aggregateTime+=i.aggregateTime,e.data.selfTime+=i.selfTime,e.data.ticks+=i.ticks}else n.splice(r,0,{position:new s.Position(t.line,t.character),data:{aggregateTime:i.aggregateTime,selfTime:i.selfTime,ticks:i.ticks}})}getLensesForFile(e){return this.expandForFile(e),this.data.get(u(e))?.map((({position:e,data:t})=>{if(0===t.aggregateTime&&0===t.selfTime)return[];const i=new s.Range(e,e);return[new s.CodeLens(i,{title:`${P.format(t.selfTime/1e3)}ms Self Time, ${P.format(t.aggregateTime/1e3)}ms Total`,command:""}),new s.CodeLens(i,{title:"Clear",command:"extension.jsProfileVisualizer.table.clearCodeLenses"})]})).reduce(((e,t)=>[...e,...t]),[])??[]}}const N=(e,t)=>(e.functionName=e.functionName||"(anonymous)",e.lineNumber<0?0:e.url.includes("node_modules")||!t?2:1),z=(e,t)=>t.source.path&&0===t.source.sourceReference?{...t,relativePath:l(e,t.source.path)}:t,E=(e,t=[])=>{if(!e.$vscode?.rootPath)return t[0];for(const s of t){const t=z(e.$vscode.rootPath,s);if(t.relativePath)return t}return t[0]},$=(e,t)=>{const s=t[e];if(s.aggregateTime)return s.aggregateTime;let i=s.selfTime;for(const e of s.children)i+=$(e,t);return s.aggregateTime=i};class U{constructor(e,t,i={}){this.lens=e,this.bundle=t,this.extraConsts=i,this.onDidChangeCustomDocument=(new s.EventEmitter).event}async openCustomDocument(e){const t=await s.workspace.fs.readFile(e),i=JSON.parse((new TextDecoder).decode(t)),n=new S(e,(e=>{if(!e.timeDeltas||!e.samples)return{nodes:[],locations:[],samples:e.samples||[],timeDeltas:e.timeDeltas||[],rootPath:e.$vscode?.rootPath,duration:e.endTime-e.startTime};const{samples:t,timeDeltas:s}=e,i=(e=>{if(e.$vscode)return e.$vscode.locations;let t=0;const s=new Map,i=e=>{const i=[e.functionName,e.url,e.scriptId,e.lineNumber,e.columnNumber].join(":"),n=s.get(i);if(n)return n.id;const r=t++;return s.set(i,{id:r,callFrame:e,location:{lineNumber:e.lineNumber+1,columnNumber:e.columnNumber+1,source:{name:d(e.url),path:d(e.url),sourceReference:0}}}),r};for(const t of e.nodes)t.locationId=i(t.callFrame),t.positionTicks=t.positionTicks?.map((e=>({...e,startLocationId:i({...t.callFrame,lineNumber:e.line-1,columnNumber:0}),endLocationId:i({...t.callFrame,lineNumber:e.line,columnNumber:0})})));return[...s.values()].sort(((e,t)=>e.id-t.id)).map((e=>({locations:[e.location],callFrame:e.callFrame})))})(e).map(((t,s)=>{const i=E(e,t.locations);return{id:s,selfTime:0,aggregateTime:0,ticks:0,category:N(t.callFrame,i),callFrame:t.callFrame,src:i}})),n=new Map,r=e=>{let t=n.get(e);return void 0===t&&(t=n.size,n.set(e,t)),t},o=new Array(e.nodes.length);for(let t=0;t<e.nodes.length;t++){const s=e.nodes[t],n=r(s.id);o[n]={id:n,selfTime:0,aggregateTime:0,locationId:s.locationId,children:s.children?.map(r)||[]};for(const e of s.positionTicks||[])e.startLocationId&&(i[e.startLocationId].ticks+=e.ticks)}for(const e of o)for(const t of e.children)o[t].parent=e.id;const a=e.endTime-e.startTime;let c=a-s[0];for(let e=0;e<s.length-1;e++){const i=s[e+1];o[r(t[e])].selfTime+=i,c-=i}o.length&&(o[r(t[s.length-1])].selfTime+=c,s.push(c));for(let e=0;e<o.length;e++){const t=o[e],s=i[t.locationId];s.aggregateTime+=$(e,o),s.selfTime+=t.selfTime}return{nodes:o,locations:i,samples:t.map(r),timeDeltas:s,rootPath:e.$vscode?.rootPath,duration:a}})(i)),r=new k,o=n.userData.rootPath;for(const e of n.userData.locations)r.add(o,e);return this.lens.registerLenses(r),n}async resolveCustomEditor(e,t){t.webview.onDidReceiveMessage((t=>{switch(t.type){case"openDocument":return void w({rootPath:e.userData?.rootPath,viewColumn:t.toSide?s.ViewColumn.Beside:s.ViewColumn.Active,callFrame:t.callFrame,location:t.location});case"reopenWith":return void C(e.uri,t.viewType,t.requireExtension);default:console.warn(`Unknown request from webview: ${JSON.stringify(t)}`)}})),t.webview.options={enableScripts:!0},t.webview.html=await r(t.webview.asWebviewUri(this.bundle),{MODEL:e.userData,...this.extraConsts})}async saveCustomDocument(){}async revertCustomDocument(){}async backupCustomDocument(){return{id:"",delete:()=>{}}}saveCustomDocumentAs(e,t){return s.workspace.fs.copy(e.uri,t,{overwrite:!0})}}function I(e,t){if(!I||s.extensions.all.some((t=>t.id===e)))return t();s.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds",[I])}const j=require("worker_threads"),R=globalThis.__jsHeapSnapshotWorkers??=new class{constructor(){this.workers=new Map}async create(e){let t=this.workers.get(e.with({query:""}).toString());if(!t){const i=await(async e=>{const t=new j.Worker(`${__dirname}/heapsnapshotWorker.js`,{workerData:"file"===e.scheme?e.fsPath:await s.workspace.fs.readFile(e)});return{postMessage:e=>t.postMessage(e),onMessage:e=>(t.on("message",e),{dispose:()=>t.off("message",e)}),terminate:async()=>{await t.terminate()}}})(e);t={worker:i,rc:0},this.workers.set(e.toString(),t)}return t.rc++,t.closer&&(clearTimeout(t.closer),t.closer=void 0),{worker:t.worker,dispose:()=>{--t.rc||(t.closer=setTimeout((()=>{t.worker.terminate(),this.workers.delete(e.toString())}),5e3))}}}},L=e=>R.create(e),O=async({worker:e},t,i,n,r)=>{n.onDidReceiveMessage((t=>{switch(t.type){case"reopenWith":return void function(e,t,i,n){I(i,(()=>s.commands.executeCommand("vscode.openWith",e,t,n?s.ViewColumn.Beside:s.ViewColumn.Active)))}(i.with({query:t.withQuery}),t.viewType,t.requireExtension,t.toSide);case"command":return void I(t.requireExtension,(()=>s.commands.executeCommand(t.command,...t.args)));case"callGraph":return void e.postMessage(t.inner);default:console.warn(`Unknown request from webview: ${JSON.stringify(t)}`)}}));const o=e.onMessage((e=>{n.postMessage({method:"graphRet",message:e})}));return n.options={enableScripts:!0},n.html=await(async(e,t)=>{const s=function(e=32){let t="";for(let s=0;s<e;s++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62*Math.random())];return t}();return`<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      ${(e=>`<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e}';">`)(s)}\n      <title>Profile Custom Editor</title>\n    </head>\n    <body>\n      <script type="text/javascript" nonce="${s}">\n        ${Object.entries(t).map((([e,t])=>`globalThis.${e} = ${JSON.stringify(t)}`)).join(";")}\n      <\/script>\n      <script nonce="${s}" src="${e}"><\/script>\n    </body>\n    </html>\n  `})(n.asWebviewUri(t),{SNAPSHOT_URI:n.asWebviewUri(i).toString(),DOCUMENT_URI:i.toString(),...r}),o},W=new Intl.NumberFormat(void 0,{maximumFractionDigits:0,minimumFractionDigits:0});class q extends F{constructor(){super(...arguments),this.data=new Map}set(e,t,i){let n=this.data.get(u(e));n||(n=[],this.data.set(u(e),n));let r=0;for(;r<n.length&&n[r].position.line<t.line;)r++;if(n[r]?.position.line===t.line){const e=n[r];t.character<e.position.character&&(e.position=new s.Position(t.line,t.character)),e.data.totalSize+=i.totalSize,e.data.selfSize+=i.selfSize}else n.splice(r,0,{position:new s.Position(t.line,t.character),data:{totalSize:i.totalSize,selfSize:i.selfSize}})}getLensesForFile(e){return this.expandForFile(e),this.data.get(u(e))?.map((({position:e,data:t})=>{if(0===t.totalSize&&0===t.selfSize)return[];const i=new s.Range(e,e);return[new s.CodeLens(i,{title:`${W.format(t.selfSize/1e3)}kB Self Size, ${W.format(t.totalSize/1e3)}kB Total Size`,command:""}),new s.CodeLens(i,{title:"Clear",command:"extension.jsProfileVisualizer.table.clearCodeLenses"})]})).reduce(((e,t)=>[...e,...t]),[])??[]}}class A{static root(){return new A({id:-1,selfSize:0,children:[],callFrame:{functionName:"(root)",lineNumber:-1,columnNumber:-1,scriptId:"0",url:""}})}get id(){return this.node.id}get callFrame(){return this.node.callFrame}get src(){return this.node.src}constructor(e,t){this.node=e,this.parent=t,this.children={},this.totalSize=0,this.selfSize=0,this.childrenSize=0,this.category=N(e.callFrame,void 0)}toJSON(){return{category:this.category,children:this.children,childrenSize:this.childrenSize,selfSize:this.selfSize,totalSize:this.totalSize,id:this.id,callFrame:this.callFrame,src:this.src}}}const V=(e,t)=>{const s=new A(e,t);e.children.forEach((e=>{const t=V(e,s);s.children[t.id]=t,s.childrenSize++})),s.selfSize=e.selfSize,s.totalSize=e.selfSize;for(const e in s.children)s.totalSize+=s.children[e].totalSize;return s};class B{constructor(e,t,i={}){this.lens=e,this.bundle=t,this.extraConsts=i,this.onDidChangeCustomDocument=(new s.EventEmitter).event}async openCustomDocument(e){const t=await s.workspace.fs.readFile(e),i=JSON.parse((new TextDecoder).decode(t)),n=new S(e,(e=>{let t=[e.head];const s=(e=>{if(e.$vscode)return e.$vscode.locations;let t=0;const s=new Map,i=e=>{const i=[e.functionName,e.url,e.scriptId,e.lineNumber,e.columnNumber].join(":"),n=s.get(i);if(n)return n.id;const r=t++;return s.set(i,{id:r,callFrame:e,location:{lineNumber:e.lineNumber+1,columnNumber:e.columnNumber+1,source:{name:d(e.url),path:d(e.url),sourceReference:0}}}),r};let n=[e.head];for(;n.length;){const e=n.pop();if(e){const{callFrame:t}=e;e.locationId=i(t),n=n.concat(e.children)}}return[...s.values()].sort(((e,t)=>e.id-t.id)).map((e=>({locations:[e.location],callFrame:e.callFrame})))})(e);for(;t.length;){const i=t.pop();i&&(i.locationId&&(i.src=E(e,s[i.locationId].locations)),t=t.concat(i.children))}return{head:e.head,samples:e.samples,rootPath:e.$vscode?.rootPath}})(i)),r=(e=>{const t=A.root();for(const s of e.head.children){const e=V(s,t);t.children[e.id]=e,t.childrenSize++}for(const e in t.children)t.totalSize+=t.children[e].totalSize;return t})(n.userData),o=[r];let a=[r];for(;a.length;){const e=a.pop();e&&(o.push(e),a=a.concat(Object.values(e.children)))}const c=new q,l=n.userData.rootPath;for(const e of o)c.add(l,e);return this.lens.registerLenses(c),n}async resolveCustomEditor(e,t){t.webview.onDidReceiveMessage((t=>{switch(t.type){case"openDocument":return void w({rootPath:void 0,viewColumn:t.toSide?s.ViewColumn.Beside:s.ViewColumn.Active,callFrame:t.callFrame,location:t.location});case"reopenWith":return void C(e.uri,t.viewType,t.requireExtension);default:console.warn(`Unknown request from webview: ${JSON.stringify(t)}`)}})),t.webview.options={enableScripts:!0},t.webview.html=await r(t.webview.asWebviewUri(this.bundle),{MODEL:e.userData,...this.extraConsts})}async saveCustomDocument(){}async revertCustomDocument(){}async backupCustomDocument(){return{id:"",delete:()=>{}}}saveCustomDocumentAs(e,t){return s.workspace.fs.copy(e.uri,t,{overwrite:!0})}}class H{constructor(){this.changeEmitter=new s.EventEmitter,this.onDidChangeCodeLenses=this.changeEmitter.event}registerLenses(e){return s.commands.executeCommand("setContext","jsProfileVisualizer.hasCodeLenses",!0),this.lenses=e,{dispose:()=>{this.lenses===e&&this.clear()}}}clear(){this.lenses&&(this.lenses=void 0,s.commands.executeCommand("setContext","jsProfileVisualizer.hasCodeLenses",!1),this.changeEmitter.fire())}provideCodeLenses(e){const t=this.lenses?.getLensesForFile(u(e.uri.fsPath));if(t)return t;return(e.uri.scheme===c.scheme?this.lenses?.getLensesForFile(e.uri.query):void 0)||[]}}class _{constructor(){this.innerMetrics=[],this.width=1,this.maxMetric=1,this.lastIncrements=500,this.index=0}get maxY(){let e=10**Math.ceil(Math.log10(this.maxMetric));return e>2*this.maxMetric&&(e/=2),e>2*this.maxMetric&&(e/=2),e}valueAt(e){return this.innerMetrics[this.innerMetrics.length-(this.index-e)-1]}get metrics(){return this.innerMetrics}get current(){return this.innerMetrics[this.innerMetrics.length-1]??0}reset(e,t){const s=Math.ceil(e/t)+3;this.width=s,t!==this.lastIncrements?(this.maxMetric=1,this.index=0,this.innerMetrics=[],this.lastIncrements=t):this.width>this.innerMetrics.length&&(this.innerMetrics=this.innerMetrics.slice(-this.width))}hasData(){return!!this.innerMetrics.length}setData(e){this.innerMetrics=e,this.index=e.length,this.maxMetric=this.recalcMax()}push(e,t){this.innerMetrics.length===this.width&&this.innerMetrics.shift()===this.maxMetric&&t<this.maxMetric&&(this.maxMetric=this.recalcMax()),this.maxMetric=Math.max(this.maxMetric,t),this.innerMetrics.push(t),this.index++}recalcMax(){let e=1;for(const t of this.innerMetrics)e=Math.max(e,t);return e}}class J extends _{constructor(){super(...arguments),this.lastTimeStamp=-1,this.lastMetric=-1}setData(e){super.setData(e),this.lastTimeStamp=-1}push(e,t){const s=this.lastTimeStamp,i=this.lastMetric;this.lastTimeStamp=e,this.lastMetric=t,-1!==this.lastTimeStamp&&super.push(e,(t-i)/(e-s)*1e3)}}const G=["B","KB","MB","GB","TB"],Y=new Intl.NumberFormat(void 0,{maximumSignificantDigits:3}),K=new Intl.NumberFormat(void 0,{notation:"compact"}),Q=e=>{let t=0;for(;e>1024&&t<G.length;)e/=1024,t++;return`${Y.format(e)} ${G[t]}`},Z=new Intl.NumberFormat(void 0,{style:"percent",minimumSignificantDigits:2,maximumSignificantDigits:2}),X=new Intl.NumberFormat(void 0,{style:"percent",maximumFractionDigits:2});new Intl.NumberFormat(void 0,{maximumFractionDigits:1});class ee extends J{update(e,t){t.cpu?this.push(e,t.cpu.user/1e3/1e3):void 0!==t.TaskDuration&&this.push(e,t.TaskDuration/1e3)}format(e){return(e=Math.max(0,Math.min(1,e)))>=.01?Z.format(e):X.format(e)}name(){return"CPU Usage"}short(){return"CPU"}recalcMax(){return 1}}class te extends _{update(e,t){t.memory?this.push(e,t.memory.heapUsed):void 0!==t.JSHeapUsedSize&&this.push(e,t.JSHeapUsedSize)}format(e){return Q(e)}short(){return"Heap"}name(){return"Heap Used"}}class se extends _{update(e,t){t.memory&&this.push(e,t.memory.heapTotal)}format(e){return Q(e)}short(){return"Heap Total"}name(){return"Heap Total"}}class ie extends _{update(e,t){t.memory&&this.push(e,t.memory.rss)}format(e){return Q(e)}short(){return"RSS"}name(){return"Resident Set Size"}}class ne extends _{update(e,t){t.memory&&this.push(e,t.memory.external)}format(e){return Q(e)}short(){return"External"}name(){return"External Memory"}}class re extends _{update(e,t){t.memory&&this.push(e,t.memory.arrayBuffers)}format(e){return Q(e)}short(){return"ArrayBuffer"}name(){return"ArrayBuffer Memory"}}class oe extends _{update(e,t){t.Nodes&&this.push(e,t.Nodes)}format(e){return K.format(e)}short(){return"DOM Nodes"}name(){return"DOM Nodes"}}class ae extends J{update(e,t){void 0!==t.LayoutCount&&this.push(e,t.LayoutCount/1e3)}format(e){return K.format(e)}short(){return"Relayouts"}name(){return"DOM Relayouts / s"}}class ce extends J{update(e,t){void 0!==t.RecalcStyleCount&&this.push(e,t.RecalcStyleCount/1e3)}format(e){return K.format(e)}short(){return"Restyles"}name(){return"Style Recalcs / s"}}const le=()=>[new ee,new te,new se,new ie,new ne,new re,new oe,new ae,new ce],me=e=>{const t=s.workspace.getConfiguration();return{easing:t.get("debug.flameGraph.realtimeEasing")??s.window.activeColorTheme.kind!==s.ColorThemeKind.HighContrast,enabledMetrics:e.workspaceState.get(ue)??[0,1],splitCharts:e.workspaceState.get(de)??!1,pollInterval:1e3*t.get("debug.flameGraph.realtimePollInterval",1),viewDuration:1e3*t.get("debug.flameGraph.realtimeViewDuration",30),zoomLevel:t.get("window.zoomLevel",0)}},ue="enabledMetrics",de="splitCharts";class he{get visibleWebviews(){return[...this.webviews].filter((e=>e.visible))}get currentData(){return this.displayedSession&&this.sessionData.get(this.displayedSession)?.metrics}constructor(e){this.context=e,this.settings=me(this.context),this.webviews=new Set,this.sessionData=new Map,this.allSessions=new Map,s.commands.executeCommand("setContext","vscodeJsProfileFlameSplitCharts",me(e).splitCharts)}setEnabledMetrics(e){this.context.workspaceState.update(ue,e),this.updateSettings()}setSplitCharts(e){s.commands.executeCommand("setContext","vscodeJsProfileFlameSplitCharts",e),this.context.workspaceState.update(de,e),this.updateSettings()}trackWebview(e){this.webviews.add(e),e.onDidChangeVisibility((()=>{e.visible&&this.hydrate(e.webview)})),e.onDidDispose((()=>{this.webviews.delete(e)})),this.hydrate(e.webview)}onDidChangeActiveSession(e){for(;e?.configuration.__usePerformanceFromParent;)e=this.allSessions.get(e.configuration.__parentId);if(!this.visibleWebviews.length||!e||!("__pendingTargetId"in e.configuration))return;let t=this.sessionData.get(e);if(!t){t={session:e,metrics:le(),cts:new s.CancellationTokenSource};for(const e of t.metrics)e.reset(this.settings.viewDuration,this.settings.pollInterval);this.collectFromSession(t),this.sessionData.set(e,t)}this.displayedSession=e,this.broadcast({type:4,data:t.metrics.map((e=>e.metrics))})}onSessionDidStart(e){this.allSessions.set(e.id,e)}onSessionDidEnd(e){this.allSessions.delete(e.id);const t=this.sessionData.get(e);t&&(t.cts.cancel(),this.sessionData.delete(e),this.displayedSession===e&&(this.displayedSession=void 0,this.broadcast({type:5})))}updateSettings(){this.settings=me(this.context);for(const{metrics:e}of this.sessionData.values())for(const t of e)t.reset(this.settings.viewDuration,this.settings.pollInterval);this.broadcast({type:0,settings:this.settings})}collectFromSession(e){const t=()=>{e.session.customRequest("getPerformance").then((s=>{if(e.cts.token.isCancellationRequested)return;s.metrics&&(s.metrics.timestamp=s.metrics.timestamp||s.metrics.Timestamp||Date.now(),this.onMetrics(e,s.metrics));const i=setTimeout((()=>{n.dispose(),t()}),this.settings.pollInterval),n=e.cts.token.onCancellationRequested((()=>{clearTimeout(i)}))}))};t()}onMetrics({session:e,metrics:t},s){for(const e of t)e.update(s.timestamp,s);e===this.displayedSession&&this.broadcast({type:1,data:s})}broadcast(e){for(const t of this.visibleWebviews)t.webview.postMessage(e)}hydrate(e){e.postMessage(this.getSettingsUpdate());const t=this.displayedSession&&this.sessionData.get(this.displayedSession);if(t){const s={type:4,data:t.metrics.map((e=>e.metrics))};e.postMessage(s)}else this.onDidChangeActiveSession(s.debug.activeDebugSession)}getSettingsUpdate(){return{type:0,settings:me(this.context)}}}class pe{static{this.viewType="vscode-js-profile-flame.realtime"}constructor(e,t){this.extensionUri=e,this.tracker=t}resolveWebviewView(e){e.webview.options={enableScripts:!0,localResourceRoots:[this.extensionUri]},e.webview.html=this.getHtmlForWebview(e.webview),this.tracker.trackWebview(e),e.webview.onDidReceiveMessage((e=>{3===e.type&&this.tracker.setEnabledMetrics(e.keys)}))}getHtmlForWebview(e){const t=e.asWebviewUri(s.Uri.joinPath(this.extensionUri,"out","realtime.bundle.js")),r=i();return`<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n        ${n(r)}\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<title>Realtime Performance</title>\n\t\t\t</head>\n      <body>\n\t\t\t\t<script nonce="${r}" src="${t}"><\/script>\n\t\t\t</body>\n      </html>\n    `}}const we=["debug.flameGraph.realtimePollInterval","debug.flameGraph.realtimeViewDuration","debug.flameGraph.realtimeEasing"];function fe(e){const t=new he(e),i=new pe(e.extensionUri,t);e.subscriptions.push(s.window.registerCustomEditorProvider("jsProfileVisualizer.cpuprofile.flame",new U(new H,s.Uri.joinPath(e.extensionUri,"out","cpu-client.bundle.js")),{webviewOptions:{retainContextWhenHidden:!0}}),s.window.registerCustomEditorProvider("jsProfileVisualizer.heapprofile.flame",new B(new H,s.Uri.joinPath(e.extensionUri,"out","heap-client.bundle.js")),{webviewOptions:{retainContextWhenHidden:!0}}),s.commands.registerCommand("jsProfileVisualizer.heapsnapshot.flame.show",(async({uri:t,index:i,name:n})=>{const r=s.window.createWebviewPanel("jsProfileVisualizer.heapsnapshot.flame",s.l10n.t("Memory Graph: {0}",n),s.ViewColumn.Beside,{enableScripts:!0,localResourceRoots:[s.Uri.joinPath(e.extensionUri,"out")]}),o=s.Uri.parse(t),a=await L(o),c=await O(a,s.Uri.joinPath(e.extensionUri,"out","heapsnapshot-client.bundle.js"),o,r.webview,{SNAPSHOT_INDEX:i});r.onDidDispose((()=>{a.dispose(),c.dispose()}))})),s.window.registerWebviewPanelSerializer("jsProfileVisualizer.heapsnapshot.flame.show",{deserializeWebviewPanel:()=>Promise.resolve()}),s.window.registerWebviewViewProvider(pe.viewType,i),s.workspace.onDidChangeConfiguration((e=>{we.some((t=>e.affectsConfiguration(t)))&&t.updateSettings()})),s.debug.onDidChangeActiveDebugSession((e=>t.onDidChangeActiveSession(e))),s.debug.onDidStartDebugSession((e=>t.onSessionDidStart(e))),s.debug.onDidTerminateDebugSession((e=>t.onSessionDidEnd(e))),s.commands.registerCommand("vscode-js-profile-flame.setRealtimeCharts",(async()=>{const i=le(),n=me(e),r=s.window.createQuickPick();r.title="Toggle visible performance charts",r.canSelectMany=!0,r.items=(t.currentData?.filter((e=>e.hasData()))??i).map(((e,t)=>({label:e.name(),index:t}))),r.selectedItems=n.enabledMetrics.length?n.enabledMetrics.map((e=>r.items[e])):r.items.slice(),r.show();const o=await new Promise((e=>{r.onDidAccept((()=>e(r.selectedItems.map((e=>e.index))))),r.onDidHide((()=>e(void 0)))}));r.dispose(),o&&t.setEnabledMetrics(o)})),s.commands.registerCommand("vscode-js-profile-flame.splitCharts",(()=>{t.setSplitCharts(!0)})),s.commands.registerCommand("vscode-js-profile-flame.collapseCharts",(()=>{t.setSplitCharts(!1)})))}function ge(){}module.exports=t})();