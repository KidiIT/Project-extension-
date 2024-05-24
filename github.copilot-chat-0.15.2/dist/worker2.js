"use strict";var He=Object.create;var J=Object.defineProperty;var qe=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var Ve=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty;var ze=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Qe=(t,e)=>{for(var n in e)J(t,n,{get:e[n],enumerable:!0})},$e=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ge(e))!je.call(t,s)&&s!==n&&J(t,s,{get:()=>e[s],enumerable:!(r=qe(e,s))||r.enumerable});return t};var Je=(t,e,n)=>(n=t!=null?He(Ve(t)):{},$e(e||!t||!t.__esModule?J(n,"default",{value:t,enumerable:!0}):n,t));var Ce=ze((exports,module)=>{var Module=Module!==void 0?Module:{},TreeSitter=function(){var initPromise,document=typeof window=="object"?{currentScript:window.document.currentScript}:null;class Parser{constructor(){this.initialize()}initialize(){throw new Error("cannot construct a Parser before calling `init()`")}static init(moduleOptions){return initPromise||(Module=Object.assign({},Module,moduleOptions),initPromise=new Promise(resolveInitPromise=>{var moduleOverrides=Object.assign({},Module),arguments_=[],thisProgram="./this.program",quit_=(t,e)=>{throw e},ENVIRONMENT_IS_WEB=typeof window=="object",ENVIRONMENT_IS_WORKER=typeof importScripts=="function",ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",scriptDirectory="",read_,readAsync,readBinary,setWindowTitle;function locateFile(t){return Module.locateFile?Module.locateFile(t,scriptDirectory):scriptDirectory+t}function logExceptionOnExit(t){t instanceof ExitStatus||err("exiting due to exception: "+t)}if(ENVIRONMENT_IS_NODE){var fs=require("fs"),nodePath=require("path");scriptDirectory=ENVIRONMENT_IS_WORKER?nodePath.dirname(scriptDirectory)+"/":__dirname+"/",read_=(t,e)=>(t=isFileURI(t)?new URL(t):nodePath.normalize(t),fs.readFileSync(t,e?void 0:"utf8")),readBinary=t=>{var e=read_(t,!0);return e.buffer||(e=new Uint8Array(e)),e},readAsync=(t,e,n)=>{t=isFileURI(t)?new URL(t):nodePath.normalize(t),fs.readFile(t,function(r,s){r?n(r):e(s.buffer)})},process.argv.length>1&&(thisProgram=process.argv[1].replace(/\\/g,"/")),arguments_=process.argv.slice(2),typeof module<"u"&&(module.exports=Module),quit_=(t,e)=>{if(keepRuntimeAlive())throw process.exitCode=t,e;logExceptionOnExit(e),process.exit(t)},Module.inspect=function(){return"[Emscripten Module object]"}}else(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&(ENVIRONMENT_IS_WORKER?scriptDirectory=self.location.href:document!==void 0&&document.currentScript&&(scriptDirectory=document.currentScript.src),scriptDirectory=scriptDirectory.indexOf("blob:")!==0?scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1):"",read_=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},ENVIRONMENT_IS_WORKER&&(readBinary=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),readAsync=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{r.status==200||r.status==0&&r.response?e(r.response):n()},r.onerror=n,r.send(null)},setWindowTitle=t=>document.title=t);var out=Module.print||console.log.bind(console),err=Module.printErr||console.warn.bind(console);Object.assign(Module,moduleOverrides),moduleOverrides=null,Module.arguments&&(arguments_=Module.arguments),Module.thisProgram&&(thisProgram=Module.thisProgram),Module.quit&&(quit_=Module.quit);var STACK_ALIGN=16,dynamicLibraries=Module.dynamicLibraries||[],wasmBinary;Module.wasmBinary&&(wasmBinary=Module.wasmBinary);var noExitRuntime=Module.noExitRuntime||!0,wasmMemory;typeof WebAssembly!="object"&&abort("no native wasm support detected");var ABORT=!1,EXITSTATUS,UTF8Decoder=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function UTF8ArrayToString(t,e,n){for(var r=e+n,s=e;t[s]&&!(s>=r);)++s;if(s-e>16&&t.buffer&&UTF8Decoder)return UTF8Decoder.decode(t.subarray(e,s));for(var a="";e<s;){var i=t[e++];if(128&i){var o=63&t[e++];if((224&i)!=192){var _=63&t[e++];if((i=(240&i)==224?(15&i)<<12|o<<6|_:(7&i)<<18|o<<12|_<<6|63&t[e++])<65536)a+=String.fromCharCode(i);else{var l=i-65536;a+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else a+=String.fromCharCode((31&i)<<6|o)}else a+=String.fromCharCode(i)}return a}function UTF8ToString(t,e){return t?UTF8ArrayToString(HEAPU8,t,e):""}function stringToUTF8Array(t,e,n,r){if(!(r>0))return 0;for(var s=n,a=n+r-1,i=0;i<t.length;++i){var o=t.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++i)),o<=127){if(n>=a)break;e[n++]=o}else if(o<=2047){if(n+1>=a)break;e[n++]=192|o>>6,e[n++]=128|63&o}else if(o<=65535){if(n+2>=a)break;e[n++]=224|o>>12,e[n++]=128|o>>6&63,e[n++]=128|63&o}else{if(n+3>=a)break;e[n++]=240|o>>18,e[n++]=128|o>>12&63,e[n++]=128|o>>6&63,e[n++]=128|63&o}}return e[n]=0,n-s}function stringToUTF8(t,e,n){return stringToUTF8Array(t,HEAPU8,e,n)}function lengthBytesUTF8(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r<=127?e++:r<=2047?e+=2:r>=55296&&r<=57343?(e+=4,++n):e+=3}return e}function updateGlobalBufferAndViews(t){buffer=t,Module.HEAP8=HEAP8=new Int8Array(t),Module.HEAP16=HEAP16=new Int16Array(t),Module.HEAP32=HEAP32=new Int32Array(t),Module.HEAPU8=HEAPU8=new Uint8Array(t),Module.HEAPU16=HEAPU16=new Uint16Array(t),Module.HEAPU32=HEAPU32=new Uint32Array(t),Module.HEAPF32=HEAPF32=new Float32Array(t),Module.HEAPF64=HEAPF64=new Float64Array(t)}var INITIAL_MEMORY=Module.INITIAL_MEMORY||33554432;wasmMemory=Module.wasmMemory?Module.wasmMemory:new WebAssembly.Memory({initial:INITIAL_MEMORY/65536,maximum:32768}),wasmMemory&&(buffer=wasmMemory.buffer),INITIAL_MEMORY=buffer.byteLength,updateGlobalBufferAndViews(buffer);var wasmTable=new WebAssembly.Table({initial:20,element:"anyfunc"}),__ATPRERUN__=[],__ATINIT__=[],__ATMAIN__=[],__ATPOSTRUN__=[],__RELOC_FUNCS__=[],runtimeInitialized=!1;function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module.preRun)for(typeof Module.preRun=="function"&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=!0,callRuntimeCallbacks(__RELOC_FUNCS__),callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module.postRun)for(typeof Module.postRun=="function"&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(t){__ATPRERUN__.unshift(t)}function addOnInit(t){__ATINIT__.unshift(t)}function addOnPostRun(t){__ATPOSTRUN__.unshift(t)}var runDependencies=0,runDependencyWatcher=null,dependenciesFulfilled=null;function addRunDependency(t){runDependencies++,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies)}function removeRunDependency(t){if(runDependencies--,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies),runDependencies==0&&(runDependencyWatcher!==null&&(clearInterval(runDependencyWatcher),runDependencyWatcher=null),dependenciesFulfilled)){var e=dependenciesFulfilled;dependenciesFulfilled=null,e()}}function abort(t){throw Module.onAbort&&Module.onAbort(t),err(t="Aborted("+t+")"),ABORT=!0,EXITSTATUS=1,t+=". Build with -sASSERTIONS for more info.",new WebAssembly.RuntimeError(t)}var dataURIPrefix="data:application/octet-stream;base64,",wasmBinaryFile,tempDouble,tempI64;function isDataURI(t){return t.startsWith(dataURIPrefix)}function isFileURI(t){return t.startsWith("file://")}function getBinary(t){try{if(t==wasmBinaryFile&&wasmBinary)return new Uint8Array(wasmBinary);if(readBinary)return readBinary(t);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(wasmBinaryFile))return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(t){if(!t.ok)throw"failed to load wasm binary file at '"+wasmBinaryFile+"'";return t.arrayBuffer()}).catch(function(){return getBinary(wasmBinaryFile)});if(readAsync)return new Promise(function(t,e){readAsync(wasmBinaryFile,function(n){t(new Uint8Array(n))},e)})}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var t={env:asmLibraryArg,wasi_snapshot_preview1:asmLibraryArg,"GOT.mem":new Proxy(asmLibraryArg,GOTHandler),"GOT.func":new Proxy(asmLibraryArg,GOTHandler)};function e(s,a){var i=s.exports;i=relocateExports(i,1024);var o=getDylinkMetadata(a);o.neededDynlibs&&(dynamicLibraries=o.neededDynlibs.concat(dynamicLibraries)),mergeLibSymbols(i,"main"),Module.asm=i,addOnInit(Module.asm.__wasm_call_ctors),__RELOC_FUNCS__.push(Module.asm.__wasm_apply_data_relocs),removeRunDependency("wasm-instantiate")}function n(s){e(s.instance,s.module)}function r(s){return getBinaryPromise().then(function(a){return WebAssembly.instantiate(a,t)}).then(function(a){return a}).then(s,function(a){err("failed to asynchronously prepare wasm: "+a),abort(a)})}if(addRunDependency("wasm-instantiate"),Module.instantiateWasm)try{return Module.instantiateWasm(t,e)}catch(s){return err("Module.instantiateWasm callback failed with error: "+s),!1}return wasmBinary||typeof WebAssembly.instantiateStreaming!="function"||isDataURI(wasmBinaryFile)||isFileURI(wasmBinaryFile)||ENVIRONMENT_IS_NODE||typeof fetch!="function"?r(n):fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(s){return WebAssembly.instantiateStreaming(s,t).then(n,function(a){return err("wasm streaming compile failed: "+a),err("falling back to ArrayBuffer instantiation"),r(n)})}),{}}wasmBinaryFile="tree-sitter.wasm",isDataURI(wasmBinaryFile)||(wasmBinaryFile=locateFile(wasmBinaryFile));var ASM_CONSTS={};function ExitStatus(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}var GOT={},CurrentModuleWeakSymbols=new Set([]),GOTHandler={get:function(t,e){var n=GOT[e];return n||(n=GOT[e]=new WebAssembly.Global({value:"i32",mutable:!0})),CurrentModuleWeakSymbols.has(e)||(n.required=!0),n}};function callRuntimeCallbacks(t){for(;t.length>0;)t.shift()(Module)}function getDylinkMetadata(t){var e=0,n=0;function r(){for(var h=0,c=1;;){var b=t[e++];if(h+=(127&b)*c,c*=128,!(128&b))break}return h}function s(){var h=r();return UTF8ArrayToString(t,(e+=h)-h,h)}function a(h,c){if(h)throw new Error(c)}var i="dylink.0";if(t instanceof WebAssembly.Module){var o=WebAssembly.Module.customSections(t,i);o.length===0&&(i="dylink",o=WebAssembly.Module.customSections(t,i)),a(o.length===0,"need dylink section"),n=(t=new Uint8Array(o[0])).length}else{a(new Uint32Array(new Uint8Array(t.subarray(0,24)).buffer)[0]!=1836278016,"need to see wasm magic number"),a(t[8]!==0,"need the dylink section to be first"),e=9;var _=r();n=e+_,i=s()}var l={neededDynlibs:[],tlsExports:new Set,weakImports:new Set};if(i=="dylink"){l.memorySize=r(),l.memoryAlign=r(),l.tableSize=r(),l.tableAlign=r();for(var u=r(),d=0;d<u;++d){var w=s();l.neededDynlibs.push(w)}}else for(a(i!=="dylink.0");e<n;){var f=t[e++],M=r();if(f===1)l.memorySize=r(),l.memoryAlign=r(),l.tableSize=r(),l.tableAlign=r();else if(f===2)for(u=r(),d=0;d<u;++d)w=s(),l.neededDynlibs.push(w);else if(f===3)for(var m=r();m--;){var g=s();256&r()&&l.tlsExports.add(g)}else if(f===4)for(m=r();m--;)s(),g=s(),(3&r())==1&&l.weakImports.add(g);else e+=M}return l}function getValue(t,e="i8"){switch(e.endsWith("*")&&(e="*"),e){case"i1":case"i8":return HEAP8[t>>0];case"i16":return HEAP16[t>>1];case"i32":case"i64":return HEAP32[t>>2];case"float":return HEAPF32[t>>2];case"double":return HEAPF64[t>>3];case"*":return HEAPU32[t>>2];default:abort("invalid type for getValue: "+e)}return null}function asmjsMangle(t){return t.indexOf("dynCall_")==0||["stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0"].includes(t)?t:"_"+t}function mergeLibSymbols(t,e){for(var n in t)if(t.hasOwnProperty(n)){asmLibraryArg.hasOwnProperty(n)||(asmLibraryArg[n]=t[n]);var r=asmjsMangle(n);Module.hasOwnProperty(r)||(Module[r]=t[n]),n=="__main_argc_argv"&&(Module._main=t[n])}}var LDSO={loadedLibsByName:{},loadedLibsByHandle:{}};function dynCallLegacy(t,e,n){var r=Module["dynCall_"+t];return n&&n.length?r.apply(null,[e].concat(n)):r.call(null,e)}var wasmTableMirror=[];function getWasmTableEntry(t){var e=wasmTableMirror[t];return e||(t>=wasmTableMirror.length&&(wasmTableMirror.length=t+1),wasmTableMirror[t]=e=wasmTable.get(t)),e}function dynCall(t,e,n){return t.includes("j")?dynCallLegacy(t,e,n):getWasmTableEntry(e).apply(null,n)}function createInvokeFunction(t){return function(){var e=stackSave();try{return dynCall(t,arguments[0],Array.prototype.slice.call(arguments,1))}catch(n){if(stackRestore(e),n!==n+0)throw n;_setThrew(1,0)}}}var ___heap_base=78144;function zeroMemory(t,e){return HEAPU8.fill(0,t,t+e),t}function getMemory(t){if(runtimeInitialized)return zeroMemory(_malloc(t),t);var e=___heap_base,n=e+t+15&-16;return ___heap_base=n,GOT.__heap_base.value=n,e}function isInternalSym(t){return["__cpp_exception","__c_longjmp","__wasm_apply_data_relocs","__dso_handle","__tls_size","__tls_align","__set_stack_limits","_emscripten_tls_init","__wasm_init_tls","__wasm_call_ctors","__start_em_asm","__stop_em_asm"].includes(t)}function uleb128Encode(t,e){t<128?e.push(t):e.push(t%128|128,t>>7)}function sigToWasmTypes(t){for(var e={i:"i32",j:"i32",f:"f32",d:"f64",p:"i32"},n={parameters:[],results:t[0]=="v"?[]:[e[t[0]]]},r=1;r<t.length;++r)n.parameters.push(e[t[r]]),t[r]==="j"&&n.parameters.push("i32");return n}function generateFuncType(t,e){var n=t.slice(0,1),r=t.slice(1),s={i:127,p:127,j:126,f:125,d:124};e.push(96),uleb128Encode(r.length,e);for(var a=0;a<r.length;++a)e.push(s[r[a]]);n=="v"?e.push(0):e.push(1,s[n])}function convertJsFunctionToWasm(t,e){if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(sigToWasmTypes(e),t);var n=[1];generateFuncType(e,n);var r=[0,97,115,109,1,0,0,0,1];uleb128Encode(n.length,r),r.push.apply(r,n),r.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var s=new WebAssembly.Module(new Uint8Array(r));return new WebAssembly.Instance(s,{e:{f:t}}).exports.f}function updateTableMap(t,e){if(functionsInTableMap)for(var n=t;n<t+e;n++){var r=getWasmTableEntry(n);r&&functionsInTableMap.set(r,n)}}var functionsInTableMap=void 0,freeTableIndexes=[];function getEmptyTableSlot(){if(freeTableIndexes.length)return freeTableIndexes.pop();try{wasmTable.grow(1)}catch(t){throw t instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":t}return wasmTable.length-1}function setWasmTableEntry(t,e){wasmTable.set(t,e),wasmTableMirror[t]=wasmTable.get(t)}function addFunction(t,e){if(functionsInTableMap||(functionsInTableMap=new WeakMap,updateTableMap(0,wasmTable.length)),functionsInTableMap.has(t))return functionsInTableMap.get(t);var n=getEmptyTableSlot();try{setWasmTableEntry(n,t)}catch(r){if(!(r instanceof TypeError))throw r;setWasmTableEntry(n,convertJsFunctionToWasm(t,e))}return functionsInTableMap.set(t,n),n}function updateGOT(t,e){for(var n in t)if(!isInternalSym(n)){var r=t[n];n.startsWith("orig$")&&(n=n.split("$")[1],e=!0),GOT[n]||(GOT[n]=new WebAssembly.Global({value:"i32",mutable:!0})),(e||GOT[n].value==0)&&(typeof r=="function"?GOT[n].value=addFunction(r):typeof r=="number"?GOT[n].value=r:err("unhandled export type for `"+n+"`: "+typeof r))}}function relocateExports(t,e,n){var r={};for(var s in t){var a=t[s];typeof a=="object"&&(a=a.value),typeof a=="number"&&(a+=e),r[s]=a}return updateGOT(r,n),r}function resolveGlobalSymbol(t,e){var n;return e&&(n=asmLibraryArg["orig$"+t]),n||(n=asmLibraryArg[t])&&n.stub&&(n=void 0),n||(n=Module[asmjsMangle(t)]),!n&&t.startsWith("invoke_")&&(n=createInvokeFunction(t.split("_")[1])),n}function alignMemory(t,e){return Math.ceil(t/e)*e}function loadWebAssemblyModule(binary,flags,handle){var metadata=getDylinkMetadata(binary);function loadModule(){var firstLoad=!handle||!HEAP8[handle+12>>0];if(firstLoad){var memAlign=Math.pow(2,metadata.memoryAlign);memAlign=Math.max(memAlign,STACK_ALIGN);var memoryBase=metadata.memorySize?alignMemory(getMemory(metadata.memorySize+memAlign),memAlign):0,tableBase=metadata.tableSize?wasmTable.length:0;handle&&(HEAP8[handle+12>>0]=1,HEAPU32[handle+16>>2]=memoryBase,HEAP32[handle+20>>2]=metadata.memorySize,HEAPU32[handle+24>>2]=tableBase,HEAP32[handle+28>>2]=metadata.tableSize)}else memoryBase=HEAPU32[handle+16>>2],tableBase=HEAPU32[handle+24>>2];var tableGrowthNeeded=tableBase+metadata.tableSize-wasmTable.length,moduleExports;function resolveSymbol(t){var e=resolveGlobalSymbol(t,!1);return e||(e=moduleExports[t]),e}tableGrowthNeeded>0&&wasmTable.grow(tableGrowthNeeded);var proxyHandler={get:function(t,e){switch(e){case"__memory_base":return memoryBase;case"__table_base":return tableBase}if(e in asmLibraryArg)return asmLibraryArg[e];var n;return e in t||(t[e]=function(){return n||(n=resolveSymbol(e)),n.apply(null,arguments)}),t[e]}},proxy=new Proxy({},proxyHandler),info={"GOT.mem":new Proxy({},GOTHandler),"GOT.func":new Proxy({},GOTHandler),env:proxy,wasi_snapshot_preview1:proxy};function postInstantiation(instance){function addEmAsm(addr,body){for(var args=[],arity=0;arity<16&&body.indexOf("$"+arity)!=-1;arity++)args.push("$"+arity);args=args.join(",");var func="("+args+" ) => { "+body+"};";ASM_CONSTS[start]=eval(func)}if(updateTableMap(tableBase,metadata.tableSize),moduleExports=relocateExports(instance.exports,memoryBase),flags.allowUndefined||reportUndefinedSymbols(),"__start_em_asm"in moduleExports)for(var start=moduleExports.__start_em_asm,stop=moduleExports.__stop_em_asm;start<stop;){var jsString=UTF8ToString(start);addEmAsm(start,jsString),start=HEAPU8.indexOf(0,start)+1}var applyRelocs=moduleExports.__wasm_apply_data_relocs;applyRelocs&&(runtimeInitialized?applyRelocs():__RELOC_FUNCS__.push(applyRelocs));var init=moduleExports.__wasm_call_ctors;return init&&(runtimeInitialized?init():__ATINIT__.push(init)),moduleExports}if(flags.loadAsync){if(binary instanceof WebAssembly.Module){var instance=new WebAssembly.Instance(binary,info);return Promise.resolve(postInstantiation(instance))}return WebAssembly.instantiate(binary,info).then(function(t){return postInstantiation(t.instance)})}var module=binary instanceof WebAssembly.Module?binary:new WebAssembly.Module(binary),instance=new WebAssembly.Instance(module,info);return postInstantiation(instance)}return CurrentModuleWeakSymbols=metadata.weakImports,flags.loadAsync?metadata.neededDynlibs.reduce(function(t,e){return t.then(function(){return loadDynamicLibrary(e,flags)})},Promise.resolve()).then(function(){return loadModule()}):(metadata.neededDynlibs.forEach(function(t){loadDynamicLibrary(t,flags)}),loadModule())}function loadDynamicLibrary(t,e,n){e=e||{global:!0,nodelete:!0};var r=LDSO.loadedLibsByName[t];if(r)return e.global&&!r.global&&(r.global=!0,r.module!=="loading"&&mergeLibSymbols(r.module,t)),e.nodelete&&r.refcount!==1/0&&(r.refcount=1/0),r.refcount++,n&&(LDSO.loadedLibsByHandle[n]=r),!e.loadAsync||Promise.resolve(!0);function s(o){if(e.fs&&e.fs.findObject(o)){var _=e.fs.readFile(o,{encoding:"binary"});return _ instanceof Uint8Array||(_=new Uint8Array(_)),e.loadAsync?Promise.resolve(_):_}if(o=locateFile(o),e.loadAsync)return new Promise(function(l,u){readAsync(o,d=>l(new Uint8Array(d)),u)});if(!readBinary)throw new Error(o+": file not found, and synchronous loading of external files is not available");return readBinary(o)}function a(){if(typeof preloadedWasm<"u"&&preloadedWasm[t]){var o=preloadedWasm[t];return e.loadAsync?Promise.resolve(o):o}return e.loadAsync?s(t).then(function(_){return loadWebAssemblyModule(_,e,n)}):loadWebAssemblyModule(s(t),e,n)}function i(o){r.global&&mergeLibSymbols(o,t),r.module=o}return r={refcount:e.nodelete?1/0:1,name:t,module:"loading",global:e.global},LDSO.loadedLibsByName[t]=r,n&&(LDSO.loadedLibsByHandle[n]=r),e.loadAsync?a().then(function(o){return i(o),!0}):(i(a()),!0)}function reportUndefinedSymbols(){for(var t in GOT)if(GOT[t].value==0){var e=resolveGlobalSymbol(t,!0);if(!e&&!GOT[t].required)continue;if(typeof e=="function")GOT[t].value=addFunction(e,e.sig);else{if(typeof e!="number")throw new Error("bad export type for `"+t+"`: "+typeof e);GOT[t].value=e}}}function preloadDylibs(){dynamicLibraries.length?(addRunDependency("preloadDylibs"),dynamicLibraries.reduce(function(t,e){return t.then(function(){return loadDynamicLibrary(e,{loadAsync:!0,global:!0,nodelete:!0,allowUndefined:!0})})},Promise.resolve()).then(function(){reportUndefinedSymbols(),removeRunDependency("preloadDylibs")})):reportUndefinedSymbols()}function setValue(t,e,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":case"i8":HEAP8[t>>0]=e;break;case"i16":HEAP16[t>>1]=e;break;case"i32":HEAP32[t>>2]=e;break;case"i64":tempI64=[e>>>0,(tempDouble=e,+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[t>>2]=tempI64[0],HEAP32[t+4>>2]=tempI64[1];break;case"float":HEAPF32[t>>2]=e;break;case"double":HEAPF64[t>>3]=e;break;case"*":HEAPU32[t>>2]=e;break;default:abort("invalid type for setValue: "+n)}}var ___memory_base=new WebAssembly.Global({value:"i32",mutable:!1},1024),___stack_pointer=new WebAssembly.Global({value:"i32",mutable:!0},78144),___table_base=new WebAssembly.Global({value:"i32",mutable:!1},1),nowIsMonotonic=!0,_emscripten_get_now;function __emscripten_get_now_is_monotonic(){return nowIsMonotonic}function _abort(){abort("")}function _emscripten_date_now(){return Date.now()}function _emscripten_memcpy_big(t,e,n){HEAPU8.copyWithin(t,e,e+n)}function getHeapMax(){return 2147483648}function emscripten_realloc_buffer(t){try{return wasmMemory.grow(t-buffer.byteLength+65535>>>16),updateGlobalBufferAndViews(wasmMemory.buffer),1}catch{}}function _emscripten_resize_heap(t){var e=HEAPU8.length;t>>>=0;var n=getHeapMax();if(t>n)return!1;for(var r=1;r<=4;r*=2){var s=e*(1+.2/r);if(s=Math.min(s,t+100663296),emscripten_realloc_buffer(Math.min(n,(a=Math.max(t,s))+((i=65536)-a%i)%i)))return!0}var a,i;return!1}__emscripten_get_now_is_monotonic.sig="i",Module._abort=_abort,_abort.sig="v",_emscripten_date_now.sig="d",_emscripten_get_now=ENVIRONMENT_IS_NODE?()=>{var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:()=>performance.now(),_emscripten_get_now.sig="d",_emscripten_memcpy_big.sig="vppp",_emscripten_resize_heap.sig="ip";var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt:function(t,e,n){if(PATH.isAbs(e))return e;var r;if(t===-100?r=FS.cwd():r=SYSCALLS.getStreamFromFD(t).path,e.length==0){if(!n)throw new FS.ErrnoError(44);return r}return PATH.join2(r,e)},doStat:function(t,e,n){try{var r=t(e)}catch(o){if(o&&o.node&&PATH.normalize(e)!==PATH.normalize(FS.getPath(o.node)))return-54;throw o}HEAP32[n>>2]=r.dev,HEAP32[n+8>>2]=r.ino,HEAP32[n+12>>2]=r.mode,HEAPU32[n+16>>2]=r.nlink,HEAP32[n+20>>2]=r.uid,HEAP32[n+24>>2]=r.gid,HEAP32[n+28>>2]=r.rdev,tempI64=[r.size>>>0,(tempDouble=r.size,+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n+40>>2]=tempI64[0],HEAP32[n+44>>2]=tempI64[1],HEAP32[n+48>>2]=4096,HEAP32[n+52>>2]=r.blocks;var s=r.atime.getTime(),a=r.mtime.getTime(),i=r.ctime.getTime();return tempI64=[Math.floor(s/1e3)>>>0,(tempDouble=Math.floor(s/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n+56>>2]=tempI64[0],HEAP32[n+60>>2]=tempI64[1],HEAPU32[n+64>>2]=s%1e3*1e3,tempI64=[Math.floor(a/1e3)>>>0,(tempDouble=Math.floor(a/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n+72>>2]=tempI64[0],HEAP32[n+76>>2]=tempI64[1],HEAPU32[n+80>>2]=a%1e3*1e3,tempI64=[Math.floor(i/1e3)>>>0,(tempDouble=Math.floor(i/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n+88>>2]=tempI64[0],HEAP32[n+92>>2]=tempI64[1],HEAPU32[n+96>>2]=i%1e3*1e3,tempI64=[r.ino>>>0,(tempDouble=r.ino,+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[n+104>>2]=tempI64[0],HEAP32[n+108>>2]=tempI64[1],0},doMsync:function(t,e,n,r,s){if(!FS.isFile(e.node.mode))throw new FS.ErrnoError(43);if(2&r)return 0;var a=HEAPU8.slice(t,t+n);FS.msync(e,a,s,n,r)},varargs:void 0,get:function(){return SYSCALLS.varargs+=4,HEAP32[SYSCALLS.varargs-4>>2]},getStr:function(t){return UTF8ToString(t)},getStreamFromFD:function(t){var e=FS.getStream(t);if(!e)throw new FS.ErrnoError(8);return e}};function _proc_exit(t){EXITSTATUS=t,keepRuntimeAlive()||(Module.onExit&&Module.onExit(t),ABORT=!0),quit_(t,new ExitStatus(t))}function exitJS(t,e){EXITSTATUS=t,_proc_exit(t)}_proc_exit.sig="vi";var _exit=exitJS;function _fd_close(t){try{var e=SYSCALLS.getStreamFromFD(t);return FS.close(e),0}catch(n){if(typeof FS>"u"||!(n instanceof FS.ErrnoError))throw n;return n.errno}}function convertI32PairToI53Checked(t,e){return e+2097152>>>0<4194305-!!t?(t>>>0)+4294967296*e:NaN}function _fd_seek(t,e,n,r,s){try{var a=convertI32PairToI53Checked(e,n);if(isNaN(a))return 61;var i=SYSCALLS.getStreamFromFD(t);return FS.llseek(i,a,r),tempI64=[i.position>>>0,(tempDouble=i.position,+Math.abs(tempDouble)>=1?tempDouble>0?(0|Math.min(+Math.floor(tempDouble/4294967296),4294967295))>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[s>>2]=tempI64[0],HEAP32[s+4>>2]=tempI64[1],i.getdents&&a===0&&r===0&&(i.getdents=null),0}catch(o){if(typeof FS>"u"||!(o instanceof FS.ErrnoError))throw o;return o.errno}}function doWritev(t,e,n,r){for(var s=0,a=0;a<n;a++){var i=HEAPU32[e>>2],o=HEAPU32[e+4>>2];e+=8;var _=FS.write(t,HEAP8,i,o,r);if(_<0)return-1;s+=_,r!==void 0&&(r+=_)}return s}function _fd_write(t,e,n,r){try{var s=doWritev(SYSCALLS.getStreamFromFD(t),e,n);return HEAPU32[r>>2]=s,0}catch(a){if(typeof FS>"u"||!(a instanceof FS.ErrnoError))throw a;return a.errno}}function _tree_sitter_log_callback(t,e){if(currentLogCallback){let n=UTF8ToString(e);currentLogCallback(n,t!==0)}}function _tree_sitter_parse_callback(t,e,n,r,s){var a=currentParseCallback(e,{row:n,column:r});typeof a=="string"?(setValue(s,a.length,"i32"),stringToUTF16(a,t,10240)):setValue(s,0,"i32")}function handleException(t){if(t instanceof ExitStatus||t=="unwind")return EXITSTATUS;quit_(1,t)}function allocateUTF8OnStack(t){var e=lengthBytesUTF8(t)+1,n=stackAlloc(e);return stringToUTF8Array(t,HEAP8,n,e),n}function stringToUTF16(t,e,n){if(n===void 0&&(n=2147483647),n<2)return 0;for(var r=e,s=(n-=2)<2*t.length?n/2:t.length,a=0;a<s;++a){var i=t.charCodeAt(a);HEAP16[e>>1]=i,e+=2}return HEAP16[e>>1]=0,e-r}function AsciiToString(t){for(var e="";;){var n=HEAPU8[t++>>0];if(!n)return e;e+=String.fromCharCode(n)}}_exit.sig="vi",_fd_close.sig="ii",_fd_seek.sig="iijip",_fd_write.sig="iippp";var asmLibraryArg={__heap_base:___heap_base,__indirect_function_table:wasmTable,__memory_base:___memory_base,__stack_pointer:___stack_pointer,__table_base:___table_base,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,abort:_abort,emscripten_get_now:_emscripten_get_now,emscripten_memcpy_big:_emscripten_memcpy_big,emscripten_resize_heap:_emscripten_resize_heap,exit:_exit,fd_close:_fd_close,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,tree_sitter_log_callback:_tree_sitter_log_callback,tree_sitter_parse_callback:_tree_sitter_parse_callback},asm=createWasm(),___wasm_call_ctors=Module.___wasm_call_ctors=function(){return(___wasm_call_ctors=Module.___wasm_call_ctors=Module.asm.__wasm_call_ctors).apply(null,arguments)},___wasm_apply_data_relocs=Module.___wasm_apply_data_relocs=function(){return(___wasm_apply_data_relocs=Module.___wasm_apply_data_relocs=Module.asm.__wasm_apply_data_relocs).apply(null,arguments)},_malloc=Module._malloc=function(){return(_malloc=Module._malloc=Module.asm.malloc).apply(null,arguments)},_calloc=Module._calloc=function(){return(_calloc=Module._calloc=Module.asm.calloc).apply(null,arguments)},_realloc=Module._realloc=function(){return(_realloc=Module._realloc=Module.asm.realloc).apply(null,arguments)},_free=Module._free=function(){return(_free=Module._free=Module.asm.free).apply(null,arguments)},_ts_language_symbol_count=Module._ts_language_symbol_count=function(){return(_ts_language_symbol_count=Module._ts_language_symbol_count=Module.asm.ts_language_symbol_count).apply(null,arguments)},_ts_language_version=Module._ts_language_version=function(){return(_ts_language_version=Module._ts_language_version=Module.asm.ts_language_version).apply(null,arguments)},_ts_language_field_count=Module._ts_language_field_count=function(){return(_ts_language_field_count=Module._ts_language_field_count=Module.asm.ts_language_field_count).apply(null,arguments)},_ts_language_symbol_name=Module._ts_language_symbol_name=function(){return(_ts_language_symbol_name=Module._ts_language_symbol_name=Module.asm.ts_language_symbol_name).apply(null,arguments)},_ts_language_symbol_for_name=Module._ts_language_symbol_for_name=function(){return(_ts_language_symbol_for_name=Module._ts_language_symbol_for_name=Module.asm.ts_language_symbol_for_name).apply(null,arguments)},_ts_language_symbol_type=Module._ts_language_symbol_type=function(){return(_ts_language_symbol_type=Module._ts_language_symbol_type=Module.asm.ts_language_symbol_type).apply(null,arguments)},_ts_language_field_name_for_id=Module._ts_language_field_name_for_id=function(){return(_ts_language_field_name_for_id=Module._ts_language_field_name_for_id=Module.asm.ts_language_field_name_for_id).apply(null,arguments)},_memset=Module._memset=function(){return(_memset=Module._memset=Module.asm.memset).apply(null,arguments)},_memcpy=Module._memcpy=function(){return(_memcpy=Module._memcpy=Module.asm.memcpy).apply(null,arguments)},_ts_parser_delete=Module._ts_parser_delete=function(){return(_ts_parser_delete=Module._ts_parser_delete=Module.asm.ts_parser_delete).apply(null,arguments)},_ts_parser_reset=Module._ts_parser_reset=function(){return(_ts_parser_reset=Module._ts_parser_reset=Module.asm.ts_parser_reset).apply(null,arguments)},_ts_parser_set_language=Module._ts_parser_set_language=function(){return(_ts_parser_set_language=Module._ts_parser_set_language=Module.asm.ts_parser_set_language).apply(null,arguments)},_ts_parser_timeout_micros=Module._ts_parser_timeout_micros=function(){return(_ts_parser_timeout_micros=Module._ts_parser_timeout_micros=Module.asm.ts_parser_timeout_micros).apply(null,arguments)},_ts_parser_set_timeout_micros=Module._ts_parser_set_timeout_micros=function(){return(_ts_parser_set_timeout_micros=Module._ts_parser_set_timeout_micros=Module.asm.ts_parser_set_timeout_micros).apply(null,arguments)},_memmove=Module._memmove=function(){return(_memmove=Module._memmove=Module.asm.memmove).apply(null,arguments)},_memcmp=Module._memcmp=function(){return(_memcmp=Module._memcmp=Module.asm.memcmp).apply(null,arguments)},_ts_query_new=Module._ts_query_new=function(){return(_ts_query_new=Module._ts_query_new=Module.asm.ts_query_new).apply(null,arguments)},_ts_query_delete=Module._ts_query_delete=function(){return(_ts_query_delete=Module._ts_query_delete=Module.asm.ts_query_delete).apply(null,arguments)},_iswspace=Module._iswspace=function(){return(_iswspace=Module._iswspace=Module.asm.iswspace).apply(null,arguments)},_iswalnum=Module._iswalnum=function(){return(_iswalnum=Module._iswalnum=Module.asm.iswalnum).apply(null,arguments)},_ts_query_pattern_count=Module._ts_query_pattern_count=function(){return(_ts_query_pattern_count=Module._ts_query_pattern_count=Module.asm.ts_query_pattern_count).apply(null,arguments)},_ts_query_capture_count=Module._ts_query_capture_count=function(){return(_ts_query_capture_count=Module._ts_query_capture_count=Module.asm.ts_query_capture_count).apply(null,arguments)},_ts_query_string_count=Module._ts_query_string_count=function(){return(_ts_query_string_count=Module._ts_query_string_count=Module.asm.ts_query_string_count).apply(null,arguments)},_ts_query_capture_name_for_id=Module._ts_query_capture_name_for_id=function(){return(_ts_query_capture_name_for_id=Module._ts_query_capture_name_for_id=Module.asm.ts_query_capture_name_for_id).apply(null,arguments)},_ts_query_string_value_for_id=Module._ts_query_string_value_for_id=function(){return(_ts_query_string_value_for_id=Module._ts_query_string_value_for_id=Module.asm.ts_query_string_value_for_id).apply(null,arguments)},_ts_query_predicates_for_pattern=Module._ts_query_predicates_for_pattern=function(){return(_ts_query_predicates_for_pattern=Module._ts_query_predicates_for_pattern=Module.asm.ts_query_predicates_for_pattern).apply(null,arguments)},_ts_tree_copy=Module._ts_tree_copy=function(){return(_ts_tree_copy=Module._ts_tree_copy=Module.asm.ts_tree_copy).apply(null,arguments)},_ts_tree_delete=Module._ts_tree_delete=function(){return(_ts_tree_delete=Module._ts_tree_delete=Module.asm.ts_tree_delete).apply(null,arguments)},_ts_init=Module._ts_init=function(){return(_ts_init=Module._ts_init=Module.asm.ts_init).apply(null,arguments)},_ts_parser_new_wasm=Module._ts_parser_new_wasm=function(){return(_ts_parser_new_wasm=Module._ts_parser_new_wasm=Module.asm.ts_parser_new_wasm).apply(null,arguments)},_ts_parser_enable_logger_wasm=Module._ts_parser_enable_logger_wasm=function(){return(_ts_parser_enable_logger_wasm=Module._ts_parser_enable_logger_wasm=Module.asm.ts_parser_enable_logger_wasm).apply(null,arguments)},_ts_parser_parse_wasm=Module._ts_parser_parse_wasm=function(){return(_ts_parser_parse_wasm=Module._ts_parser_parse_wasm=Module.asm.ts_parser_parse_wasm).apply(null,arguments)},_ts_language_type_is_named_wasm=Module._ts_language_type_is_named_wasm=function(){return(_ts_language_type_is_named_wasm=Module._ts_language_type_is_named_wasm=Module.asm.ts_language_type_is_named_wasm).apply(null,arguments)},_ts_language_type_is_visible_wasm=Module._ts_language_type_is_visible_wasm=function(){return(_ts_language_type_is_visible_wasm=Module._ts_language_type_is_visible_wasm=Module.asm.ts_language_type_is_visible_wasm).apply(null,arguments)},_ts_tree_root_node_wasm=Module._ts_tree_root_node_wasm=function(){return(_ts_tree_root_node_wasm=Module._ts_tree_root_node_wasm=Module.asm.ts_tree_root_node_wasm).apply(null,arguments)},_ts_tree_edit_wasm=Module._ts_tree_edit_wasm=function(){return(_ts_tree_edit_wasm=Module._ts_tree_edit_wasm=Module.asm.ts_tree_edit_wasm).apply(null,arguments)},_ts_tree_get_changed_ranges_wasm=Module._ts_tree_get_changed_ranges_wasm=function(){return(_ts_tree_get_changed_ranges_wasm=Module._ts_tree_get_changed_ranges_wasm=Module.asm.ts_tree_get_changed_ranges_wasm).apply(null,arguments)},_ts_tree_cursor_new_wasm=Module._ts_tree_cursor_new_wasm=function(){return(_ts_tree_cursor_new_wasm=Module._ts_tree_cursor_new_wasm=Module.asm.ts_tree_cursor_new_wasm).apply(null,arguments)},_ts_tree_cursor_delete_wasm=Module._ts_tree_cursor_delete_wasm=function(){return(_ts_tree_cursor_delete_wasm=Module._ts_tree_cursor_delete_wasm=Module.asm.ts_tree_cursor_delete_wasm).apply(null,arguments)},_ts_tree_cursor_reset_wasm=Module._ts_tree_cursor_reset_wasm=function(){return(_ts_tree_cursor_reset_wasm=Module._ts_tree_cursor_reset_wasm=Module.asm.ts_tree_cursor_reset_wasm).apply(null,arguments)},_ts_tree_cursor_goto_first_child_wasm=Module._ts_tree_cursor_goto_first_child_wasm=function(){return(_ts_tree_cursor_goto_first_child_wasm=Module._ts_tree_cursor_goto_first_child_wasm=Module.asm.ts_tree_cursor_goto_first_child_wasm).apply(null,arguments)},_ts_tree_cursor_goto_next_sibling_wasm=Module._ts_tree_cursor_goto_next_sibling_wasm=function(){return(_ts_tree_cursor_goto_next_sibling_wasm=Module._ts_tree_cursor_goto_next_sibling_wasm=Module.asm.ts_tree_cursor_goto_next_sibling_wasm).apply(null,arguments)},_ts_tree_cursor_goto_parent_wasm=Module._ts_tree_cursor_goto_parent_wasm=function(){return(_ts_tree_cursor_goto_parent_wasm=Module._ts_tree_cursor_goto_parent_wasm=Module.asm.ts_tree_cursor_goto_parent_wasm).apply(null,arguments)},_ts_tree_cursor_current_node_type_id_wasm=Module._ts_tree_cursor_current_node_type_id_wasm=function(){return(_ts_tree_cursor_current_node_type_id_wasm=Module._ts_tree_cursor_current_node_type_id_wasm=Module.asm.ts_tree_cursor_current_node_type_id_wasm).apply(null,arguments)},_ts_tree_cursor_current_node_is_named_wasm=Module._ts_tree_cursor_current_node_is_named_wasm=function(){return(_ts_tree_cursor_current_node_is_named_wasm=Module._ts_tree_cursor_current_node_is_named_wasm=Module.asm.ts_tree_cursor_current_node_is_named_wasm).apply(null,arguments)},_ts_tree_cursor_current_node_is_missing_wasm=Module._ts_tree_cursor_current_node_is_missing_wasm=function(){return(_ts_tree_cursor_current_node_is_missing_wasm=Module._ts_tree_cursor_current_node_is_missing_wasm=Module.asm.ts_tree_cursor_current_node_is_missing_wasm).apply(null,arguments)},_ts_tree_cursor_current_node_id_wasm=Module._ts_tree_cursor_current_node_id_wasm=function(){return(_ts_tree_cursor_current_node_id_wasm=Module._ts_tree_cursor_current_node_id_wasm=Module.asm.ts_tree_cursor_current_node_id_wasm).apply(null,arguments)},_ts_tree_cursor_start_position_wasm=Module._ts_tree_cursor_start_position_wasm=function(){return(_ts_tree_cursor_start_position_wasm=Module._ts_tree_cursor_start_position_wasm=Module.asm.ts_tree_cursor_start_position_wasm).apply(null,arguments)},_ts_tree_cursor_end_position_wasm=Module._ts_tree_cursor_end_position_wasm=function(){return(_ts_tree_cursor_end_position_wasm=Module._ts_tree_cursor_end_position_wasm=Module.asm.ts_tree_cursor_end_position_wasm).apply(null,arguments)},_ts_tree_cursor_start_index_wasm=Module._ts_tree_cursor_start_index_wasm=function(){return(_ts_tree_cursor_start_index_wasm=Module._ts_tree_cursor_start_index_wasm=Module.asm.ts_tree_cursor_start_index_wasm).apply(null,arguments)},_ts_tree_cursor_end_index_wasm=Module._ts_tree_cursor_end_index_wasm=function(){return(_ts_tree_cursor_end_index_wasm=Module._ts_tree_cursor_end_index_wasm=Module.asm.ts_tree_cursor_end_index_wasm).apply(null,arguments)},_ts_tree_cursor_current_field_id_wasm=Module._ts_tree_cursor_current_field_id_wasm=function(){return(_ts_tree_cursor_current_field_id_wasm=Module._ts_tree_cursor_current_field_id_wasm=Module.asm.ts_tree_cursor_current_field_id_wasm).apply(null,arguments)},_ts_tree_cursor_current_node_wasm=Module._ts_tree_cursor_current_node_wasm=function(){return(_ts_tree_cursor_current_node_wasm=Module._ts_tree_cursor_current_node_wasm=Module.asm.ts_tree_cursor_current_node_wasm).apply(null,arguments)},_ts_node_symbol_wasm=Module._ts_node_symbol_wasm=function(){return(_ts_node_symbol_wasm=Module._ts_node_symbol_wasm=Module.asm.ts_node_symbol_wasm).apply(null,arguments)},_ts_node_child_count_wasm=Module._ts_node_child_count_wasm=function(){return(_ts_node_child_count_wasm=Module._ts_node_child_count_wasm=Module.asm.ts_node_child_count_wasm).apply(null,arguments)},_ts_node_named_child_count_wasm=Module._ts_node_named_child_count_wasm=function(){return(_ts_node_named_child_count_wasm=Module._ts_node_named_child_count_wasm=Module.asm.ts_node_named_child_count_wasm).apply(null,arguments)},_ts_node_child_wasm=Module._ts_node_child_wasm=function(){return(_ts_node_child_wasm=Module._ts_node_child_wasm=Module.asm.ts_node_child_wasm).apply(null,arguments)},_ts_node_named_child_wasm=Module._ts_node_named_child_wasm=function(){return(_ts_node_named_child_wasm=Module._ts_node_named_child_wasm=Module.asm.ts_node_named_child_wasm).apply(null,arguments)},_ts_node_child_by_field_id_wasm=Module._ts_node_child_by_field_id_wasm=function(){return(_ts_node_child_by_field_id_wasm=Module._ts_node_child_by_field_id_wasm=Module.asm.ts_node_child_by_field_id_wasm).apply(null,arguments)},_ts_node_next_sibling_wasm=Module._ts_node_next_sibling_wasm=function(){return(_ts_node_next_sibling_wasm=Module._ts_node_next_sibling_wasm=Module.asm.ts_node_next_sibling_wasm).apply(null,arguments)},_ts_node_prev_sibling_wasm=Module._ts_node_prev_sibling_wasm=function(){return(_ts_node_prev_sibling_wasm=Module._ts_node_prev_sibling_wasm=Module.asm.ts_node_prev_sibling_wasm).apply(null,arguments)},_ts_node_next_named_sibling_wasm=Module._ts_node_next_named_sibling_wasm=function(){return(_ts_node_next_named_sibling_wasm=Module._ts_node_next_named_sibling_wasm=Module.asm.ts_node_next_named_sibling_wasm).apply(null,arguments)},_ts_node_prev_named_sibling_wasm=Module._ts_node_prev_named_sibling_wasm=function(){return(_ts_node_prev_named_sibling_wasm=Module._ts_node_prev_named_sibling_wasm=Module.asm.ts_node_prev_named_sibling_wasm).apply(null,arguments)},_ts_node_parent_wasm=Module._ts_node_parent_wasm=function(){return(_ts_node_parent_wasm=Module._ts_node_parent_wasm=Module.asm.ts_node_parent_wasm).apply(null,arguments)},_ts_node_descendant_for_index_wasm=Module._ts_node_descendant_for_index_wasm=function(){return(_ts_node_descendant_for_index_wasm=Module._ts_node_descendant_for_index_wasm=Module.asm.ts_node_descendant_for_index_wasm).apply(null,arguments)},_ts_node_named_descendant_for_index_wasm=Module._ts_node_named_descendant_for_index_wasm=function(){return(_ts_node_named_descendant_for_index_wasm=Module._ts_node_named_descendant_for_index_wasm=Module.asm.ts_node_named_descendant_for_index_wasm).apply(null,arguments)},_ts_node_descendant_for_position_wasm=Module._ts_node_descendant_for_position_wasm=function(){return(_ts_node_descendant_for_position_wasm=Module._ts_node_descendant_for_position_wasm=Module.asm.ts_node_descendant_for_position_wasm).apply(null,arguments)},_ts_node_named_descendant_for_position_wasm=Module._ts_node_named_descendant_for_position_wasm=function(){return(_ts_node_named_descendant_for_position_wasm=Module._ts_node_named_descendant_for_position_wasm=Module.asm.ts_node_named_descendant_for_position_wasm).apply(null,arguments)},_ts_node_start_point_wasm=Module._ts_node_start_point_wasm=function(){return(_ts_node_start_point_wasm=Module._ts_node_start_point_wasm=Module.asm.ts_node_start_point_wasm).apply(null,arguments)},_ts_node_end_point_wasm=Module._ts_node_end_point_wasm=function(){return(_ts_node_end_point_wasm=Module._ts_node_end_point_wasm=Module.asm.ts_node_end_point_wasm).apply(null,arguments)},_ts_node_start_index_wasm=Module._ts_node_start_index_wasm=function(){return(_ts_node_start_index_wasm=Module._ts_node_start_index_wasm=Module.asm.ts_node_start_index_wasm).apply(null,arguments)},_ts_node_end_index_wasm=Module._ts_node_end_index_wasm=function(){return(_ts_node_end_index_wasm=Module._ts_node_end_index_wasm=Module.asm.ts_node_end_index_wasm).apply(null,arguments)},_ts_node_to_string_wasm=Module._ts_node_to_string_wasm=function(){return(_ts_node_to_string_wasm=Module._ts_node_to_string_wasm=Module.asm.ts_node_to_string_wasm).apply(null,arguments)},_ts_node_children_wasm=Module._ts_node_children_wasm=function(){return(_ts_node_children_wasm=Module._ts_node_children_wasm=Module.asm.ts_node_children_wasm).apply(null,arguments)},_ts_node_named_children_wasm=Module._ts_node_named_children_wasm=function(){return(_ts_node_named_children_wasm=Module._ts_node_named_children_wasm=Module.asm.ts_node_named_children_wasm).apply(null,arguments)},_ts_node_descendants_of_type_wasm=Module._ts_node_descendants_of_type_wasm=function(){return(_ts_node_descendants_of_type_wasm=Module._ts_node_descendants_of_type_wasm=Module.asm.ts_node_descendants_of_type_wasm).apply(null,arguments)},_ts_node_is_named_wasm=Module._ts_node_is_named_wasm=function(){return(_ts_node_is_named_wasm=Module._ts_node_is_named_wasm=Module.asm.ts_node_is_named_wasm).apply(null,arguments)},_ts_node_has_changes_wasm=Module._ts_node_has_changes_wasm=function(){return(_ts_node_has_changes_wasm=Module._ts_node_has_changes_wasm=Module.asm.ts_node_has_changes_wasm).apply(null,arguments)},_ts_node_has_error_wasm=Module._ts_node_has_error_wasm=function(){return(_ts_node_has_error_wasm=Module._ts_node_has_error_wasm=Module.asm.ts_node_has_error_wasm).apply(null,arguments)},_ts_node_is_missing_wasm=Module._ts_node_is_missing_wasm=function(){return(_ts_node_is_missing_wasm=Module._ts_node_is_missing_wasm=Module.asm.ts_node_is_missing_wasm).apply(null,arguments)},_ts_query_matches_wasm=Module._ts_query_matches_wasm=function(){return(_ts_query_matches_wasm=Module._ts_query_matches_wasm=Module.asm.ts_query_matches_wasm).apply(null,arguments)},_ts_query_captures_wasm=Module._ts_query_captures_wasm=function(){return(_ts_query_captures_wasm=Module._ts_query_captures_wasm=Module.asm.ts_query_captures_wasm).apply(null,arguments)},___cxa_atexit=Module.___cxa_atexit=function(){return(___cxa_atexit=Module.___cxa_atexit=Module.asm.__cxa_atexit).apply(null,arguments)},_iswdigit=Module._iswdigit=function(){return(_iswdigit=Module._iswdigit=Module.asm.iswdigit).apply(null,arguments)},_iswalpha=Module._iswalpha=function(){return(_iswalpha=Module._iswalpha=Module.asm.iswalpha).apply(null,arguments)},_iswlower=Module._iswlower=function(){return(_iswlower=Module._iswlower=Module.asm.iswlower).apply(null,arguments)},_memchr=Module._memchr=function(){return(_memchr=Module._memchr=Module.asm.memchr).apply(null,arguments)},_strlen=Module._strlen=function(){return(_strlen=Module._strlen=Module.asm.strlen).apply(null,arguments)},_towupper=Module._towupper=function(){return(_towupper=Module._towupper=Module.asm.towupper).apply(null,arguments)},_setThrew=Module._setThrew=function(){return(_setThrew=Module._setThrew=Module.asm.setThrew).apply(null,arguments)},stackSave=Module.stackSave=function(){return(stackSave=Module.stackSave=Module.asm.stackSave).apply(null,arguments)},stackRestore=Module.stackRestore=function(){return(stackRestore=Module.stackRestore=Module.asm.stackRestore).apply(null,arguments)},stackAlloc=Module.stackAlloc=function(){return(stackAlloc=Module.stackAlloc=Module.asm.stackAlloc).apply(null,arguments)},__Znwm=Module.__Znwm=function(){return(__Znwm=Module.__Znwm=Module.asm._Znwm).apply(null,arguments)},__ZdlPv=Module.__ZdlPv=function(){return(__ZdlPv=Module.__ZdlPv=Module.asm._ZdlPv).apply(null,arguments)},__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev=function(){return(__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev=Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev).apply(null,arguments)},__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm=function(){return(__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm=Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm).apply(null,arguments)},__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm=function(){return(__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm=Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm).apply(null,arguments)},__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm=function(){return(__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm=Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm).apply(null,arguments)},__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm=Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm=function(){return(__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm=Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm=Module.asm._ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm).apply(null,arguments)},__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc=function(){return(__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc=Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc=Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc).apply(null,arguments)},__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev=function(){return(__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev=Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev).apply(null,arguments)},__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw=function(){return(__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw=Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw).apply(null,arguments)},__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw=function(){return(__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw=Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw=Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE6resizeEmw).apply(null,arguments)},dynCall_jiji=Module.dynCall_jiji=function(){return(dynCall_jiji=Module.dynCall_jiji=Module.asm.dynCall_jiji).apply(null,arguments)},_orig$ts_parser_timeout_micros=Module._orig$ts_parser_timeout_micros=function(){return(_orig$ts_parser_timeout_micros=Module._orig$ts_parser_timeout_micros=Module.asm.orig$ts_parser_timeout_micros).apply(null,arguments)},_orig$ts_parser_set_timeout_micros=Module._orig$ts_parser_set_timeout_micros=function(){return(_orig$ts_parser_set_timeout_micros=Module._orig$ts_parser_set_timeout_micros=Module.asm.orig$ts_parser_set_timeout_micros).apply(null,arguments)},calledRun;function callMain(t){var e=Module._main;if(e){(t=t||[]).unshift(thisProgram);var n=t.length,r=stackAlloc(4*(n+1)),s=r>>2;t.forEach(i=>{HEAP32[s++]=allocateUTF8OnStack(i)}),HEAP32[s]=0;try{var a=e(n,r);return exitJS(a,!0),a}catch(i){return handleException(i)}}}Module.AsciiToString=AsciiToString,Module.stringToUTF16=stringToUTF16,dependenciesFulfilled=function t(){calledRun||run(),calledRun||(dependenciesFulfilled=t)};var dylibsLoaded=!1;function run(t){function e(){calledRun||(calledRun=!0,Module.calledRun=!0,ABORT||(initRuntime(),preMain(),Module.onRuntimeInitialized&&Module.onRuntimeInitialized(),shouldRunNow&&callMain(t),postRun()))}t=t||arguments_,runDependencies>0||!dylibsLoaded&&(preloadDylibs(),dylibsLoaded=!0,runDependencies>0)||(preRun(),runDependencies>0||(Module.setStatus?(Module.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Module.setStatus("")},1),e()},1)):e()))}if(Module.preInit)for(typeof Module.preInit=="function"&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.pop()();var shouldRunNow=!0;Module.noInitialRun&&(shouldRunNow=!1),run();let C=Module,INTERNAL={},SIZE_OF_INT=4,SIZE_OF_NODE=5*SIZE_OF_INT,SIZE_OF_POINT=2*SIZE_OF_INT,SIZE_OF_RANGE=2*SIZE_OF_INT+2*SIZE_OF_POINT,ZERO_POINT={row:0,column:0},QUERY_WORD_REGEX=/[\w-.]*/g,PREDICATE_STEP_TYPE_CAPTURE=1,PREDICATE_STEP_TYPE_STRING=2,LANGUAGE_FUNCTION_REGEX=/^_?tree_sitter_\w+/;var VERSION,MIN_COMPATIBLE_VERSION,TRANSFER_BUFFER,currentParseCallback,currentLogCallback;class ParserImpl{static init(){TRANSFER_BUFFER=C._ts_init(),VERSION=getValue(TRANSFER_BUFFER,"i32"),MIN_COMPATIBLE_VERSION=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}initialize(){C._ts_parser_new_wasm(),this[0]=getValue(TRANSFER_BUFFER,"i32"),this[1]=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}delete(){C._ts_parser_delete(this[0]),C._free(this[1]),this[0]=0,this[1]=0}setLanguage(e){let n;if(e){if(e.constructor!==Language)throw new Error("Argument must be a Language");{n=e[0];let r=C._ts_language_version(n);if(r<MIN_COMPATIBLE_VERSION||VERSION<r)throw new Error(`Incompatible language version ${r}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${VERSION}.`)}}else n=0,e=null;return this.language=e,C._ts_parser_set_language(this[0],n),this}getLanguage(){return this.language}parse(e,n,r){if(typeof e=="string")currentParseCallback=(_,l,u)=>e.slice(_,u);else{if(typeof e!="function")throw new Error("Argument must be a string or a function");currentParseCallback=e}this.logCallback?(currentLogCallback=this.logCallback,C._ts_parser_enable_logger_wasm(this[0],1)):(currentLogCallback=null,C._ts_parser_enable_logger_wasm(this[0],0));let s=0,a=0;if(r&&r.includedRanges){s=r.includedRanges.length,a=C._calloc(s,SIZE_OF_RANGE);let _=a;for(let l=0;l<s;l++)marshalRange(_,r.includedRanges[l]),_+=SIZE_OF_RANGE}let i=C._ts_parser_parse_wasm(this[0],this[1],n?n[0]:0,a,s);if(!i)throw currentParseCallback=null,currentLogCallback=null,new Error("Parsing failed");let o=new Tree(INTERNAL,i,this.language,currentParseCallback);return currentParseCallback=null,currentLogCallback=null,o}reset(){C._ts_parser_reset(this[0])}setTimeoutMicros(e){C._ts_parser_set_timeout_micros(this[0],e)}getTimeoutMicros(){return C._ts_parser_timeout_micros(this[0])}setLogger(e){if(e){if(typeof e!="function")throw new Error("Logger callback must be a function")}else e=null;return this.logCallback=e,this}getLogger(){return this.logCallback}}class Tree{constructor(e,n,r,s){assertInternal(e),this[0]=n,this.language=r,this.textCallback=s}copy(){let e=C._ts_tree_copy(this[0]);return new Tree(INTERNAL,e,this.language,this.textCallback)}delete(){C._ts_tree_delete(this[0]),this[0]=0}edit(e){marshalEdit(e),C._ts_tree_edit_wasm(this[0])}get rootNode(){return C._ts_tree_root_node_wasm(this[0]),unmarshalNode(this)}getLanguage(){return this.language}walk(){return this.rootNode.walk()}getChangedRanges(e){if(e.constructor!==Tree)throw new TypeError("Argument must be a Tree");C._ts_tree_get_changed_ranges_wasm(this[0],e[0]);let n=getValue(TRANSFER_BUFFER,"i32"),r=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),s=new Array(n);if(n>0){let a=r;for(let i=0;i<n;i++)s[i]=unmarshalRange(a),a+=SIZE_OF_RANGE;C._free(r)}return s}}class Node{constructor(e,n){assertInternal(e),this.tree=n}get typeId(){return marshalNode(this),C._ts_node_symbol_wasm(this.tree[0])}get type(){return this.tree.language.types[this.typeId]||"ERROR"}get endPosition(){return marshalNode(this),C._ts_node_end_point_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get endIndex(){return marshalNode(this),C._ts_node_end_index_wasm(this.tree[0])}get text(){return getText(this.tree,this.startIndex,this.endIndex)}isNamed(){return marshalNode(this),C._ts_node_is_named_wasm(this.tree[0])===1}hasError(){return marshalNode(this),C._ts_node_has_error_wasm(this.tree[0])===1}hasChanges(){return marshalNode(this),C._ts_node_has_changes_wasm(this.tree[0])===1}isMissing(){return marshalNode(this),C._ts_node_is_missing_wasm(this.tree[0])===1}equals(e){return this.id===e.id}child(e){return marshalNode(this),C._ts_node_child_wasm(this.tree[0],e),unmarshalNode(this.tree)}namedChild(e){return marshalNode(this),C._ts_node_named_child_wasm(this.tree[0],e),unmarshalNode(this.tree)}childForFieldId(e){return marshalNode(this),C._ts_node_child_by_field_id_wasm(this.tree[0],e),unmarshalNode(this.tree)}childForFieldName(e){let n=this.tree.language.fields.indexOf(e);if(n!==-1)return this.childForFieldId(n)}get childCount(){return marshalNode(this),C._ts_node_child_count_wasm(this.tree[0])}get namedChildCount(){return marshalNode(this),C._ts_node_named_child_count_wasm(this.tree[0])}get firstChild(){return this.child(0)}get firstNamedChild(){return this.namedChild(0)}get lastChild(){return this.child(this.childCount-1)}get lastNamedChild(){return this.namedChild(this.namedChildCount-1)}get children(){if(!this._children){marshalNode(this),C._ts_node_children_wasm(this.tree[0]);let e=getValue(TRANSFER_BUFFER,"i32"),n=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._children=new Array(e),e>0){let r=n;for(let s=0;s<e;s++)this._children[s]=unmarshalNode(this.tree,r),r+=SIZE_OF_NODE;C._free(n)}}return this._children}get namedChildren(){if(!this._namedChildren){marshalNode(this),C._ts_node_named_children_wasm(this.tree[0]);let e=getValue(TRANSFER_BUFFER,"i32"),n=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._namedChildren=new Array(e),e>0){let r=n;for(let s=0;s<e;s++)this._namedChildren[s]=unmarshalNode(this.tree,r),r+=SIZE_OF_NODE;C._free(n)}}return this._namedChildren}descendantsOfType(e,n,r){Array.isArray(e)||(e=[e]),n||(n=ZERO_POINT),r||(r=ZERO_POINT);let s=[],a=this.tree.language.types;for(let u=0,d=a.length;u<d;u++)e.includes(a[u])&&s.push(u);let i=C._malloc(SIZE_OF_INT*s.length);for(let u=0,d=s.length;u<d;u++)setValue(i+u*SIZE_OF_INT,s[u],"i32");marshalNode(this),C._ts_node_descendants_of_type_wasm(this.tree[0],i,s.length,n.row,n.column,r.row,r.column);let o=getValue(TRANSFER_BUFFER,"i32"),_=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),l=new Array(o);if(o>0){let u=_;for(let d=0;d<o;d++)l[d]=unmarshalNode(this.tree,u),u+=SIZE_OF_NODE}return C._free(_),C._free(i),l}get nextSibling(){return marshalNode(this),C._ts_node_next_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousSibling(){return marshalNode(this),C._ts_node_prev_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get nextNamedSibling(){return marshalNode(this),C._ts_node_next_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousNamedSibling(){return marshalNode(this),C._ts_node_prev_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get parent(){return marshalNode(this),C._ts_node_parent_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForIndex(e,n=e){if(typeof e!="number"||typeof n!="number")throw new Error("Arguments must be numbers");marshalNode(this);let r=TRANSFER_BUFFER+SIZE_OF_NODE;return setValue(r,e,"i32"),setValue(r+SIZE_OF_INT,n,"i32"),C._ts_node_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForIndex(e,n=e){if(typeof e!="number"||typeof n!="number")throw new Error("Arguments must be numbers");marshalNode(this);let r=TRANSFER_BUFFER+SIZE_OF_NODE;return setValue(r,e,"i32"),setValue(r+SIZE_OF_INT,n,"i32"),C._ts_node_named_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForPosition(e,n=e){if(!isPoint(e)||!isPoint(n))throw new Error("Arguments must be {row, column} objects");marshalNode(this);let r=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(r,e),marshalPoint(r+SIZE_OF_POINT,n),C._ts_node_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForPosition(e,n=e){if(!isPoint(e)||!isPoint(n))throw new Error("Arguments must be {row, column} objects");marshalNode(this);let r=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(r,e),marshalPoint(r+SIZE_OF_POINT,n),C._ts_node_named_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}walk(){return marshalNode(this),C._ts_tree_cursor_new_wasm(this.tree[0]),new TreeCursor(INTERNAL,this.tree)}toString(){marshalNode(this);let e=C._ts_node_to_string_wasm(this.tree[0]),n=AsciiToString(e);return C._free(e),n}}class TreeCursor{constructor(e,n){assertInternal(e),this.tree=n,unmarshalTreeCursor(this)}delete(){marshalTreeCursor(this),C._ts_tree_cursor_delete_wasm(this.tree[0]),this[0]=this[1]=this[2]=0}reset(e){marshalNode(e),marshalTreeCursor(this,TRANSFER_BUFFER+SIZE_OF_NODE),C._ts_tree_cursor_reset_wasm(this.tree[0]),unmarshalTreeCursor(this)}get nodeType(){return this.tree.language.types[this.nodeTypeId]||"ERROR"}get nodeTypeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_type_id_wasm(this.tree[0])}get nodeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_id_wasm(this.tree[0])}get nodeIsNamed(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_named_wasm(this.tree[0])===1}get nodeIsMissing(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0])===1}get nodeText(){marshalTreeCursor(this);let e=C._ts_tree_cursor_start_index_wasm(this.tree[0]),n=C._ts_tree_cursor_end_index_wasm(this.tree[0]);return getText(this.tree,e,n)}get startPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_start_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get endPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_end_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get startIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_start_index_wasm(this.tree[0])}get endIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_end_index_wasm(this.tree[0])}currentNode(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_wasm(this.tree[0]),unmarshalNode(this.tree)}currentFieldId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_field_id_wasm(this.tree[0])}currentFieldName(){return this.tree.language.fields[this.currentFieldId()]}gotoFirstChild(){marshalTreeCursor(this);let e=C._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoNextSibling(){marshalTreeCursor(this);let e=C._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoParent(){marshalTreeCursor(this);let e=C._ts_tree_cursor_goto_parent_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}}class Language{constructor(e,n){assertInternal(e),this[0]=n,this.types=new Array(C._ts_language_symbol_count(this[0]));for(let r=0,s=this.types.length;r<s;r++)C._ts_language_symbol_type(this[0],r)<2&&(this.types[r]=UTF8ToString(C._ts_language_symbol_name(this[0],r)));this.fields=new Array(C._ts_language_field_count(this[0])+1);for(let r=0,s=this.fields.length;r<s;r++){let a=C._ts_language_field_name_for_id(this[0],r);this.fields[r]=a!==0?UTF8ToString(a):null}}get version(){return C._ts_language_version(this[0])}get fieldCount(){return this.fields.length-1}fieldIdForName(e){let n=this.fields.indexOf(e);return n!==-1?n:null}fieldNameForId(e){return this.fields[e]||null}idForNodeType(e,n){let r=lengthBytesUTF8(e),s=C._malloc(r+1);stringToUTF8(e,s,r+1);let a=C._ts_language_symbol_for_name(this[0],s,r,n);return C._free(s),a||null}get nodeTypeCount(){return C._ts_language_symbol_count(this[0])}nodeTypeForId(e){let n=C._ts_language_symbol_name(this[0],e);return n?UTF8ToString(n):null}nodeTypeIsNamed(e){return!!C._ts_language_type_is_named_wasm(this[0],e)}nodeTypeIsVisible(e){return!!C._ts_language_type_is_visible_wasm(this[0],e)}query(e){let n=lengthBytesUTF8(e),r=C._malloc(n+1);stringToUTF8(e,r,n+1);let s=C._ts_query_new(this[0],r,n,TRANSFER_BUFFER,TRANSFER_BUFFER+SIZE_OF_INT);if(!s){let m=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),g=UTF8ToString(r,getValue(TRANSFER_BUFFER,"i32")).length,h=e.substr(g,100).split(`
`)[0],c,b=h.match(QUERY_WORD_REGEX)[0];switch(m){case 2:c=new RangeError(`Bad node name '${b}'`);break;case 3:c=new RangeError(`Bad field name '${b}'`);break;case 4:c=new RangeError(`Bad capture name @${b}`);break;case 5:c=new TypeError(`Bad pattern structure at offset ${g}: '${h}'...`),b="";break;default:c=new SyntaxError(`Bad syntax at offset ${g}: '${h}'...`),b=""}throw c.index=g,c.length=b.length,C._free(r),c}let a=C._ts_query_string_count(s),i=C._ts_query_capture_count(s),o=C._ts_query_pattern_count(s),_=new Array(i),l=new Array(a);for(let m=0;m<i;m++){let g=C._ts_query_capture_name_for_id(s,m,TRANSFER_BUFFER),h=getValue(TRANSFER_BUFFER,"i32");_[m]=UTF8ToString(g,h)}for(let m=0;m<a;m++){let g=C._ts_query_string_value_for_id(s,m,TRANSFER_BUFFER),h=getValue(TRANSFER_BUFFER,"i32");l[m]=UTF8ToString(g,h)}let u=new Array(o),d=new Array(o),w=new Array(o),f=new Array(o),M=new Array(o);for(let m=0;m<o;m++){let g=C._ts_query_predicates_for_pattern(s,m,TRANSFER_BUFFER),h=getValue(TRANSFER_BUFFER,"i32");f[m]=[],M[m]=[];let c=[],b=g;for(let de=0;de<h;de++){let me=getValue(b,"i32");b+=SIZE_OF_INT;let pe=getValue(b,"i32");if(b+=SIZE_OF_INT,me===PREDICATE_STEP_TYPE_CAPTURE)c.push({type:"capture",name:_[pe]});else if(me===PREDICATE_STEP_TYPE_STRING)c.push({type:"string",value:l[pe]});else if(c.length>0){if(c[0].type!=="string")throw new Error("Predicates must begin with a literal value");let O=c[0].value,L=!0;switch(O){case"not-eq?":L=!1;case"eq?":if(c.length!==3)throw new Error("Wrong number of arguments to `#eq?` predicate. Expected 2, got "+(c.length-1));if(c[1].type!=="capture")throw new Error(`First argument of \`#eq?\` predicate must be a capture. Got "${c[1].value}"`);if(c[2].type==="capture"){let R=c[1].name,A=c[2].name;M[m].push(function(Q){let F,$;for(let W of Q)W.name===R&&(F=W.node),W.name===A&&($=W.node);return F===void 0||$===void 0||F.text===$.text===L})}else{let R=c[1].name,A=c[2].value;M[m].push(function(Q){for(let F of Q)if(F.name===R)return F.node.text===A===L;return!0})}break;case"not-match?":L=!1;case"match?":if(c.length!==3)throw new Error(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${c.length-1}.`);if(c[1].type!=="capture")throw new Error(`First argument of \`#match?\` predicate must be a capture. Got "${c[1].value}".`);if(c[2].type!=="string")throw new Error(`Second argument of \`#match?\` predicate must be a string. Got @${c[2].value}.`);let We=c[1].name,Ze=new RegExp(c[2].value);M[m].push(function(R){for(let A of R)if(A.name===We)return Ze.test(A.node.text)===L;return!0});break;case"set!":if(c.length<2||c.length>3)throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${c.length-1}.`);if(c.some(R=>R.type!=="string"))throw new Error('Arguments to `#set!` predicate must be a strings.".');u[m]||(u[m]={}),u[m][c[1].value]=c[2]?c[2].value:null;break;case"is?":case"is-not?":if(c.length<2||c.length>3)throw new Error(`Wrong number of arguments to \`#${O}\` predicate. Expected 1 or 2. Got ${c.length-1}.`);if(c.some(R=>R.type!=="string"))throw new Error(`Arguments to \`#${O}\` predicate must be a strings.".`);let z=O==="is?"?d:w;z[m]||(z[m]={}),z[m][c[1].value]=c[2]?c[2].value:null;break;default:f[m].push({operator:O,operands:c.slice(1)})}c.length=0}}Object.freeze(u[m]),Object.freeze(d[m]),Object.freeze(w[m])}return C._free(r),new Query(INTERNAL,s,_,M,f,Object.freeze(u),Object.freeze(d),Object.freeze(w))}static load(e){let n;if(e instanceof Uint8Array)n=Promise.resolve(e);else{let s=e;if(typeof process<"u"&&process.versions&&process.versions.node){let a=require("fs");n=Promise.resolve(a.readFileSync(s))}else n=fetch(s).then(a=>a.arrayBuffer().then(i=>{if(a.ok)return new Uint8Array(i);{let o=new TextDecoder("utf-8").decode(i);throw new Error(`Language.load failed with status ${a.status}.

${o}`)}}))}let r=typeof loadSideModule=="function"?loadSideModule:loadWebAssemblyModule;return n.then(s=>r(s,{loadAsync:!0})).then(s=>{let a=Object.keys(s),i=a.find(_=>LANGUAGE_FUNCTION_REGEX.test(_)&&!_.includes("external_scanner_"));i||console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(a,null,2)}`);let o=s[i]();return new Language(INTERNAL,o)})}}class Query{constructor(e,n,r,s,a,i,o,_){assertInternal(e),this[0]=n,this.captureNames=r,this.textPredicates=s,this.predicates=a,this.setProperties=i,this.assertedProperties=o,this.refutedProperties=_,this.exceededMatchLimit=!1}delete(){C._ts_query_delete(this[0]),this[0]=0}matches(e,n,r,s){n||(n=ZERO_POINT),r||(r=ZERO_POINT),s||(s={});let a=s.matchLimit;if(a===void 0)a=0;else if(typeof a!="number")throw new Error("Arguments must be numbers");marshalNode(e),C._ts_query_matches_wasm(this[0],e.tree[0],n.row,n.column,r.row,r.column,a);let i=getValue(TRANSFER_BUFFER,"i32"),o=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),_=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),l=new Array(i);this.exceededMatchLimit=!!_;let u=0,d=o;for(let w=0;w<i;w++){let f=getValue(d,"i32");d+=SIZE_OF_INT;let M=getValue(d,"i32");d+=SIZE_OF_INT;let m=new Array(M);if(d=unmarshalCaptures(this,e.tree,d,m),this.textPredicates[f].every(g=>g(m))){l[u++]={pattern:f,captures:m};let g=this.setProperties[f];g&&(l[w].setProperties=g);let h=this.assertedProperties[f];h&&(l[w].assertedProperties=h);let c=this.refutedProperties[f];c&&(l[w].refutedProperties=c)}}return l.length=u,C._free(o),l}captures(e,n,r,s){n||(n=ZERO_POINT),r||(r=ZERO_POINT),s||(s={});let a=s.matchLimit;if(a===void 0)a=0;else if(typeof a!="number")throw new Error("Arguments must be numbers");marshalNode(e),C._ts_query_captures_wasm(this[0],e.tree[0],n.row,n.column,r.row,r.column,a);let i=getValue(TRANSFER_BUFFER,"i32"),o=getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),_=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),l=[];this.exceededMatchLimit=!!_;let u=[],d=o;for(let w=0;w<i;w++){let f=getValue(d,"i32");d+=SIZE_OF_INT;let M=getValue(d,"i32");d+=SIZE_OF_INT;let m=getValue(d,"i32");if(d+=SIZE_OF_INT,u.length=M,d=unmarshalCaptures(this,e.tree,d,u),this.textPredicates[f].every(g=>g(u))){let g=u[m],h=this.setProperties[f];h&&(g.setProperties=h);let c=this.assertedProperties[f];c&&(g.assertedProperties=c);let b=this.refutedProperties[f];b&&(g.refutedProperties=b),l.push(g)}}return C._free(o),l}predicatesForPattern(e){return this.predicates[e]}didExceedMatchLimit(){return this.exceededMatchLimit}}function getText(t,e,n){let r=n-e,s=t.textCallback(e,null,n);for(e+=s.length;e<n;){let a=t.textCallback(e,null,n);if(!(a&&a.length>0))break;e+=a.length,s+=a}return e>n&&(s=s.slice(0,r)),s}function unmarshalCaptures(t,e,n,r){for(let s=0,a=r.length;s<a;s++){let i=getValue(n,"i32"),o=unmarshalNode(e,n+=SIZE_OF_INT);n+=SIZE_OF_NODE,r[s]={name:t.captureNames[i],node:o}}return n}function assertInternal(t){if(t!==INTERNAL)throw new Error("Illegal constructor")}function isPoint(t){return t&&typeof t.row=="number"&&typeof t.column=="number"}function marshalNode(t){let e=TRANSFER_BUFFER;setValue(e,t.id,"i32"),e+=SIZE_OF_INT,setValue(e,t.startIndex,"i32"),e+=SIZE_OF_INT,setValue(e,t.startPosition.row,"i32"),e+=SIZE_OF_INT,setValue(e,t.startPosition.column,"i32"),e+=SIZE_OF_INT,setValue(e,t[0],"i32")}function unmarshalNode(t,e=TRANSFER_BUFFER){let n=getValue(e,"i32");if(n===0)return null;let r=getValue(e+=SIZE_OF_INT,"i32"),s=getValue(e+=SIZE_OF_INT,"i32"),a=getValue(e+=SIZE_OF_INT,"i32"),i=getValue(e+=SIZE_OF_INT,"i32"),o=new Node(INTERNAL,t);return o.id=n,o.startIndex=r,o.startPosition={row:s,column:a},o[0]=i,o}function marshalTreeCursor(t,e=TRANSFER_BUFFER){setValue(e+0*SIZE_OF_INT,t[0],"i32"),setValue(e+1*SIZE_OF_INT,t[1],"i32"),setValue(e+2*SIZE_OF_INT,t[2],"i32")}function unmarshalTreeCursor(t){t[0]=getValue(TRANSFER_BUFFER+0*SIZE_OF_INT,"i32"),t[1]=getValue(TRANSFER_BUFFER+1*SIZE_OF_INT,"i32"),t[2]=getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32")}function marshalPoint(t,e){setValue(t,e.row,"i32"),setValue(t+SIZE_OF_INT,e.column,"i32")}function unmarshalPoint(t){return{row:getValue(t,"i32"),column:getValue(t+SIZE_OF_INT,"i32")}}function marshalRange(t,e){marshalPoint(t,e.startPosition),marshalPoint(t+=SIZE_OF_POINT,e.endPosition),setValue(t+=SIZE_OF_POINT,e.startIndex,"i32"),setValue(t+=SIZE_OF_INT,e.endIndex,"i32"),t+=SIZE_OF_INT}function unmarshalRange(t){let e={};return e.startPosition=unmarshalPoint(t),t+=SIZE_OF_POINT,e.endPosition=unmarshalPoint(t),t+=SIZE_OF_POINT,e.startIndex=getValue(t,"i32"),t+=SIZE_OF_INT,e.endIndex=getValue(t,"i32"),e}function marshalEdit(t){let e=TRANSFER_BUFFER;marshalPoint(e,t.startPosition),e+=SIZE_OF_POINT,marshalPoint(e,t.oldEndPosition),e+=SIZE_OF_POINT,marshalPoint(e,t.newEndPosition),e+=SIZE_OF_POINT,setValue(e,t.startIndex,"i32"),e+=SIZE_OF_INT,setValue(e,t.oldEndIndex,"i32"),e+=SIZE_OF_INT,setValue(e,t.newEndIndex,"i32"),e+=SIZE_OF_INT}for(let t of Object.getOwnPropertyNames(ParserImpl.prototype))Object.defineProperty(Parser.prototype,t,{value:ParserImpl.prototype[t],enumerable:!1,writable:!1});Parser.Language=Language,Module.onRuntimeInitialized=()=>{ParserImpl.init(),resolveInitPromise()}}))}}return Parser}();typeof exports=="object"&&(module.exports=TreeSitter)});var Be=require("worker_threads");var ce={};Qe(ce,{_clean:()=>et,_extractDoc:()=>It,_getCallExpressions:()=>_t,_getClassDeclarations:()=>ut,_getClassReferences:()=>mt,_getCoarseParentScope:()=>yt,_getDocumentableNodeIfOnIdentifier:()=>bt,_getFineScopes:()=>St,_getFixSelectionOfInterest:()=>wt,_getFunctionBodies:()=>ht,_getFunctionDefinitions:()=>lt,_getFunctionPositions:()=>gt,_getNodeMatchingSelection:()=>j,_getNodeToDocument:()=>xt,_getNodeToExplain:()=>Mt,_getSemanticChunkTree:()=>ft,_getStructure:()=>Pt,_getSymbols:()=>pt,_getTestableNode:()=>Et,_getTypeDeclarations:()=>ct,_getTypeReferences:()=>dt,_parse:()=>y});var U=Je(require("path"));function fe(t,e,n){let r=0,s=t.length;for(;r<s;){let a=r+s>>>1;n(t[a],e)?r=a+1:s=a}return r}function ge(t,e){if(t.length===0)return;let n=t[0];for(let r=1;r<t.length;r++){let s=t[r];e(s,n)>0&&(n=s)}return n}var K=class{constructor(e=10){this.values=new Map;this.lruKeys=[];if(e<1)throw new Error("Cache size must be at least 1");this.size=e}removeKeyFromLRU(e){let n=this.lruKeys.indexOf(e);n!==-1&&this.lruKeys.splice(n,1)}touchKeyInLRU(e){this.removeKeyFromLRU(e),this.lruKeys.push(e)}clear(){this.values.clear(),this.lruKeys=[]}deleteKey(e){this.removeKeyFromLRU(e);let n=this.values.get(e);return n!==void 0&&this.values.delete(e),n}get(e){if(this.values.has(e)){let n=this.values.get(e);return this.touchKeyInLRU(e),n}}keys(){return this.lruKeys.slice()}getValues(){return this.values.values()}put(e,n){let r;if(!this.values.has(e)&&this.lruKeys.length===this.size){let s=this.lruKeys.shift(),a=this.deleteKey(s);r=[s,a]}return this.values.set(e,n),this.touchKeyInLRU(e),r}},Z=class{constructor(e){this.actual=new K(e)}dispose(){this.clear()}clear(){let e=this.actual.getValues();for(let n of e)n.dispose();this.actual.clear()}deleteKey(e){let n=this.actual.deleteKey(e);n&&n.dispose()}get(e){return this.actual.get(e)}keys(){return this.actual.keys()}getValues(){return this.actual.getValues()}put(e,n){let r=this.actual.put(e,n);r&&r[1].dispose()}};var Y=class{constructor(){this.listeners=[],this.unexpectedErrorHandler=function(e){setTimeout(()=>{throw e.stack?H.isErrorNoTelemetry(e)?new H(e.message+`

`+e.stack):new Error(e.message+`

`+e.stack):e},0)}}addListener(e){return this.listeners.push(e),()=>{this._removeListener(e)}}emit(e){this.listeners.forEach(n=>{n(e)})}_removeListener(e){this.listeners.splice(this.listeners.indexOf(e),1)}setUnexpectedErrorHandler(e){this.unexpectedErrorHandler=e}getUnexpectedErrorHandler(){return this.unexpectedErrorHandler}onUnexpectedError(e){this.unexpectedErrorHandler(e),this.emit(e)}onUnexpectedExternalError(e){this.unexpectedErrorHandler(e)}},Ht=new Y;var H=class t extends Error{constructor(n){super(n);this.name="CodeExpectedError"}static fromError(n){if(n instanceof t)return n;let r=new t;return r.message=n.message,r.stack=n.stack,r}static isErrorNoTelemetry(n){return n.name==="CodeExpectedError"}},q=class t extends Error{constructor(e){super(e||"An unexpected bug occurred."),Object.setPrototypeOf(this,t.prototype)}};var E={doesContain:(t,e)=>t.startIndex<=e.startIndex&&e.endIndex<=t.endIndex,ofSyntaxNode:t=>({startIndex:t.startIndex,endIndex:t.endIndex}),compare:(t,e)=>t.startIndex-e.startIndex||e.endIndex-t.endIndex,isEqual:(t,e)=>E.compare(t,e)===0,doIntersect:(t,e)=>{let n=Math.max(t.startIndex,e.startIndex),r=Math.min(t.endIndex,e.endIndex);return n<r},len:t=>t.endIndex-t.startIndex,intersectionSize:(t,e)=>{let n=Math.max(t.startIndex,e.startIndex),r=Math.min(t.endIndex,e.endIndex);return Math.max(r-n,0)},isTreeSitterOffsetRange(t){return typeof t.startIndex=="number"&&typeof t.endIndex=="number"}},T={isEqual(t,e){return t.row===e.row&&t.column===e.column},isBefore(t,e){return t.row<e.row||t.row===e.row&&t.column<e.column},isAfter(t,e){return T.isBefore(e,t)},isBeforeOrEqual(t,e){let n=T.isBefore(t,e),r=T.isEqual(t,e);return!!(n||r)},equals(t,e){return t.column===e.column&&t.row===e.row},isAfterOrEqual(t,e){return T.isBeforeOrEqual(e,t)},ofPoint:t=>({row:t.row,column:t.column})},v={doesContain:(t,e)=>T.isBeforeOrEqual(t.startPosition,e.startPosition)&&T.isAfterOrEqual(t.endPosition,e.endPosition),equals:(t,e)=>T.equals(t.startPosition,e.startPosition)&&T.equals(t.endPosition,e.endPosition),ofSyntaxNode:t=>({startPosition:t.startPosition,endPosition:t.endPosition})},G={ofSyntaxNode:t=>({type:t.type,startIndex:t.startIndex,endIndex:t.endIndex})},I={ofSyntaxNode:t=>({range:v.ofSyntaxNode(t),startIndex:t.startIndex,text:t.text,endIndex:t.endIndex})},k=class{constructor(e,n,r,s){this.startIndex=e;this.endIndex=n;this.kind=r;this.children=s;if(e>n)throw new q("startIndex must be less than endIndex")}toString(){let e=[];function n(r,s=""){e.push(`${s}${r.kind} [${r.startIndex}, ${r.endIndex}]`),r.children.forEach(a=>n(a,s+"    "))}return n(this),e.join(`
`)}};var V=class{constructor(e,n){this.syntaxTreeRoot=n;this.roots=[];this.formTree(e)}formTree(e){e.sort((a,i)=>a.mainBlock.startIndex-i.mainBlock.startIndex||a.mainBlock.endIndex-i.mainBlock.endIndex);let n=[],r=()=>n[n.length-1],s=(a,i)=>a.mainBlock.startIndex===i.mainBlock.startIndex&&a.mainBlock.endIndex===i.mainBlock.endIndex;for(let a of e){let i={info:a,children:[]},o=r();if(!o){this.roots.push(i),n.push(i);continue}if(!s(o.info,a)){for(;o&&!E.doesContain(o.info.mainBlock,a.mainBlock);)n.pop(),o=r();o?o.children.push(i):this.roots.push(i),n.push(i)}}}};var p=(()=>{function t(e,...n){return e.length===1?e[0]:e.reduce((r,s,a)=>`${r}${s}${n[a]||""}`,"")}return{typescript:t,javascript:t,python:t,go:t,ruby:t,csharp:t,cpp:t,java:t,rust:t}})();function S(t,e){return Object.fromEntries(t.map(n=>[n,e]))}var he={...S(["javascript","typescript","tsx"],[`[
			(call_expression
				function: (identifier) @identifier)
			(call_expression
				function: (member_expression
					(property_identifier) @identifier))
		] @call_expression`]),python:[`[
			(call
				function: (identifier) @identifier)
			(call
				function: (attribute
					attribute: (identifier) @identifier))
		] @call_expression`],csharp:[`[
			(invocation_expression
				function: (identifier) @identifier)
			(invocation_expression
				function: (member_access_expression
					name: (identifier) @identifier))
		] @call_expression`],go:[`[
			(call_expression
				((selector_expression
					(field_identifier) @identifier)))
			(call_expression
				(identifier) @identifier)
		] @call_expression`],java:[`[
			(method_invocation
				name: (identifier) @identifier)
		] @call_expression`],ruby:[`[
			(call (identifier) @identifier
				(#not-match? @identifier "new|send|public_send|method"))
			(call
				receiver: (identifier)
				method: (identifier) @method
				(#match? @method "^(send|public_send|method)")
				arguments: (argument_list
					(simple_symbol) @symbol))
		] @call_expression`],cpp:[`[
			(function_declarator
				(identifier) @identifier)
			(function_declarator
				(field_identifier) @identifier)
			(call_expression (identifier) @identifier)
			(call_expression
				(field_expression
					field: (field_identifier) @identifier))
			(call_expression
				(call_expression
					(primitive_type)
					(argument_list
						(pointer_expression
						(identifier) @identifier))))
		] @call_expression`],rust:[`[
			(call_expression (identifier) @identifier)
			(call_expression (field_expression (identifier) (field_identifier) @identifier))
			(call_expression (scoped_identifier (identifier) (identifier) @identifier (#not-match? @identifier "new")))
		] @call_expression`]},ye={...S(["javascript","typescript","tsx"],["(class_declaration) @class_declaration"]),java:["(class_declaration) @class_declaration"],csharp:["(class_declaration) @class_declaration"],python:["(class_definition) @class_declaration"],cpp:["(class_specifier) @class_declaration"],ruby:["(class) @class_declaration"],go:[`(type_declaration
			(type_spec
				(type_identifier) @type_identifier)) @class_declaration`],rust:["(impl_item (type_identifier) @type_identifier) @class_declaration"]},we={typescript:[`[
			(interface_declaration)
			(type_alias_declaration)
		] @type_declaration`],csharp:[`(interface_declaration
			(identifier) @type_identifier) @type_declaration`],cpp:[`[
			(struct_specifier
				(type_identifier) @type_identifier)
			(union_specifier
				(type_identifier) @type_identifier)
			(enum_specifier
				(type_identifier) @type_identifier)
		] @type_declaration`],java:[`(interface_declaration
			(identifier) @type_identifier) @type_declaration`],go:[`(type_declaration
			(type_spec
				(type_identifier) @type_identifier)) @type_declaration`],ruby:["((constant) @type_identifier) @type_declaration"],python:[`(class_definition
			(identifier) @type_identifier) @type_declaration`]},be={typescript:["(type_identifier) @type_identifier"],go:["(type_identifier) @type_identifier"],ruby:["(constant) @type_identifier"],csharp:[`[
			(base_list
				(identifier) @type_identifier)
			(variable_declaration
				(identifier) @type_identifier)
		]`],cpp:["(type_identifier) @type_identifier"],java:["(type_identifier) @type_identifier"],python:[`[
			(type (identifier) @type_identifier)
			(argument_list
				(identifier) @type_identifier)
		]`]},Ee={...S(["javascript","typescript","tsx"],[`(new_expression
			constructor: (identifier) @new_expression)`]),python:[`(call
			function: (identifier) @new_expression)`],csharp:[`(object_creation_expression
			(identifier) @new_expression)`],java:[`(object_creation_expression
			(type_identifier) @new_expression)`],cpp:[`[
			(declaration
				(type_identifier) @new_expression)
			(class_specifier
				(type_identifier) @new_expression)
		]`],go:["(composite_literal (type_identifier) @new_expression)"],ruby:[`((call
			receiver: ((constant) @new_expression)
			method: (identifier) @method)
				(#eq? @method "new"))`],rust:[`(call_expression
			(scoped_identifier
				(identifier) @new_expression
				(identifier) @identifier
				(#eq? @identifier "new")))`]},Se={python:[`[
			(function_definition
				name: (identifier) @identifier
				body: (block
						(expression_statement (string))? @docstring) @body)
			(assignment
				left: (identifier) @identifier
				right: (lambda) @body)
		] @function`,'(ERROR ("def" (identifier) (parameters))) @function'],...S(["javascript","typescript","tsx"],[`[
			(function
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(function_declaration
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(generator_function
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(generator_function_declaration
				name: (identifier)? @identifier
				body: (statement_block) @body)
			(method_definition
				name: (property_identifier)? @identifier
				body: (statement_block) @body)
			(arrow_function
				body: (statement_block) @body)
		] @function`]),go:[`[
			(function_declaration
				name: (identifier) @identifier
				body: (block) @body)
			(method_declaration
				name: (field_identifier) @identifier
				body: (block) @body)
		] @function`],ruby:[`[
			(method
				name: (_) @identifier
				parameters: (method_parameters)? @params
				[(_)+ "end"] @body)
			(singleton_method
				name: (_) @identifier
				parameters: (method_parameters)? @params
				[(_)+ "end"] @body)
		] @function`],csharp:[`[
			(constructor_declaration
				(identifier) @identifier
				(block) @body)
			(destructor_declaration
				(identifier) @identifier
				(block) @body)
			(operator_declaration
				(block) @body)
			(method_declaration
				(identifier) @identifier
				(block) @body)
			(local_function_statement
				(identifier) @identifier
				(block) @body)
		] @function`],cpp:[`[
			(function_definition
				(_
					(identifier) @identifier)
					(compound_statement) @body)
			(function_definition
				(function_declarator
					(qualified_identifier
						(identifier) @identifier))
					(compound_statement) @body)
		] @function`],java:[`[
			(constructor_declaration
				name: (identifier) @identifier
				body: (constructor_body) @body)
			(method_declaration
				name: (_) @identifier
				body: (block) @body)
			(lambda_expression
				body: (block) @body)
		] @function`],rust:[`[
			(function_item (identifier) @identifier)
			(let_declaration (identifier) @identifier)
		] @function`]},xe={javascript:[p.javascript`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`],...S(["typescript","tsx"],[p.typescript`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`]),java:[p.java`((block_comment) @block_comment
			(#match? @block_comment "^\\\\/\\\\*\\\\*")) @docComment`],cpp:[p.cpp`((comment) @comment
			(#match? @comment "^\\\\/\\\\*\\\\*")) @docComment`],csharp:[p.csharp`(
			((comment) @c
				(#match? @c "^\\\\/\\\\/\\\\/"))+
		) @docComment`],rust:[p.rust`((line_comment) @comment
			(#match? @comment "^\/\/\/|^\/\/!"))+ @docComment`],go:[p.go`((comment)+) @docComment`],ruby:[p.ruby`((comment)+) @docComment`],python:[`(expression_statement
			(string) @docComment)`]},Me={javascript:[p.javascript`[
			(function_declaration
				(identifier) @function.identifier
			) @function

			(generator_function_declaration
				name: (identifier) @generator_function.identifier
			) @generator_function

			(class_declaration
				name: (identifier) @class.identifier ;; note: (type_identifier) in typescript
				body: (class_body
							(method_definition
								name: (property_identifier) @method.identifier
							) @method
						)
			) @class
		]`],...S(["typescript","tsx"],[p.typescript`[
				(function_declaration
					(identifier) @function.identifier
				) @function

				(generator_function_declaration
					name: (identifier) @generator_function.identifier
				) @generator_function

				(class_declaration
					name: (type_identifier) @class.identifier
					body: (class_body
								(method_definition
									name: (property_identifier) @method.identifier
								) @method
							)
				) @class
			]`]),python:[p.python`[
				(function_definition
					name: (identifier) @function.identifier
				) @function
			]`],go:[p.go`[
				(function_declaration
					name: (identifier) @function.identifier
				) @function

				(method_declaration
					name: (field_identifier) @method.identifier
				) @method
			]`],ruby:[p.ruby`[
				(method
					name: (identifier) @method.identifier
				) @method

				(singleton_method
					name: (_) @singleton_method.identifier
				) @singleton_method
			]`],csharp:[p.csharp`[
				(constructor_declaration
					(identifier) @constructor.identifier
				) @constructor

				(destructor_declaration
					(identifier) @destructor.identifier
				) @destructor

				(method_declaration
					(identifier) @method.identifier
				) @method

				(local_function_statement
					(identifier) @local_function.identifier
				) @local_function
			]`],cpp:[p.cpp`[
				(function_definition
					(_
						(identifier) @identifier)
				) @function
			]`],java:[p.java`(class_declaration
			body: (_
						[
							(constructor_declaration
								(modifiers)? @constructor.modifiers
								(#not-eq? @constructor.modifiers "private")
								name: (identifier) @constructor.identifier
							) @constructor

							(method_declaration
								(modifiers)? @method.modifiers
								(#not-eq? @method.modifiers "private")
								name: (identifier) @method.identifier
							) @method
						]
					)
		) @class`],rust:[p.rust`[
				(function_item
					(identifier) @function.identifier
				) @function
			]`]},Te={javascript:[p.javascript`[
			(identifier) @symbol
			(property_identifier) @symbol
			(private_property_identifier) @symbol
		]`],...S(["typescript","tsx"],[p.typescript`[
			(identifier) @symbol
			(type_identifier) @symbol
			(property_identifier) @symbol
			(private_property_identifier) @symbol
		]`]),cpp:[p.cpp`[
			(identifier) @symbol
			(type_identifier) @symbol
		]`],csharp:[p.csharp`[
			(identifier) @symbol
		]`],go:[p.go`[
			(identifier) @symbol
		]`],java:[p.java`[
			(identifier) @symbol
		]`],python:[p.python`[
			(identifier) @symbol
		]`],ruby:[p.ruby`[
			(identifier) @symbol
		]`],rust:[p.rust`[
			(identifier) @symbol
		]`]},Ie={...S(["typescript","tsx"],[p.typescript`
			[
				(comment) @comment ;; split into multiple comment kinds?

				(declaration) @declaration

				;; class declaration related

				(public_field_definition) @public_field_definition
				(method_definition) @method_definition

				;; statements

				(import_statement) @import_statement
				(export_statement) @export_statement

				(expression_statement) @expression_statement

				(for_in_statement) @for_in_statement
				;; exclude any children found in the for loop condition
				(for_statement condition: (_) @for_statement.exclude_captures ) @for_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(do_statement) @do_statement
				(if_statement) @if_statement
				(switch_statement) @switch_statement
				(switch_case) @switch_case
				(try_statement) @try_statement
				(throw_statement) @throw_statement
				(debugger_statement) @debugger_statement
				(return_statement) @return_statement
			]
		`]),python:[p.python`
			[
				(comment) @comment

				;; simple statements
				(assert_statement) @assert_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(delete_statement) @delete_statement
				(exec_statement) @exec_statement
				(expression_statement) @expression_statement
				(future_import_statement) @future_import_statement
				(global_statement) @global_statement
				(import_from_statement) @import_from_statement
				(import_statement) @import_statement
				(nonlocal_statement) @nonlocal_statement
				(pass_statement) @pass_statement
				(print_statement) @print_statement
				(raise_statement) @raise_statement
				(return_statement) @return_statement
				(type_alias_statement) @type_alias_statement


				;; compound statements

				(class_definition) @class_definition
				(decorated_definition) @decorated_definition
				(for_statement) @for_statement
				(function_definition) @function_definition
				(if_statement) @if_statement
				(try_statement) @try_statement
				(while_statement) @while_statement
				(with_statement) @with_statement


				;; expressions

				(expression_list) @expression_list
				(expression_statement) @expression_statement
			]
		`],javascript:[p.javascript`
			[
				(comment) @comment ;; split into multiple comment kinds?

				(declaration) @declaration

				;; class declaration related

				(field_definition) @field_definition
				(method_definition) @method_definition

				;; statements

				(import_statement) @import_statement
				(export_statement) @export_statement

				(expression_statement) @expression_statement

				(for_in_statement) @for_in_statement
				;; exclude any children found in the for loop condition
				(for_statement condition: (_) @for_statement.exclude_captures ) @for_statement
				(break_statement) @break_statement
				(continue_statement) @continue_statement
				(do_statement) @do_statement
				(if_statement) @if_statement
				(switch_statement) @switch_statement
				(switch_case) @switch_case
				(try_statement) @try_statement
				(throw_statement) @throw_statement
				(debugger_statement) @debugger_statement
				(return_statement) @return_statement
			]`],go:[p.go`
		[
			(_statement) @statement
			(function_declaration) @function_declaration
			(import_declaration) @import_declaration
			(method_declaration) @method_declaration
			(package_clause) @package_clause

			(if_statement
				initializer: (_) @for_statement.exclude_captures) @for_statement

			(expression_case) @expression_case ;; e.g., case 0:
		]
		`],ruby:[p.ruby`
			[
				(comment) @comment

				(assignment) @assignment

				(if) @if

				(call) @call

				(case) @case

				(when) @when

				(while) @while

				(for) @for

				(method) @method

				(class) @class

				(module) @module

				(begin) @begin
			]
		`],csharp:[p.csharp`
			[
				(comment) @comment

				(class_declaration) @class_declaration
				(constructor_declaration) @constructor_declaration
				(method_declaration) @method_declaration
				(delegate_declaration) @delegate_declaration
				(enum_declaration) @enum_declaration
				(extern_alias_directive) @extern_alias_directive
				(file_scoped_namespace_declaration) @file_scoped_namespace_declaration
				(global_attribute_list) @global_attribute_list
				(global_statement) @global_statement
				(interface_declaration) @interface_declaration
				(namespace_declaration) @namespace_declaration
				(record_declaration) @record_declaration
				(record_struct_declaration) @record_struct_declaration
				(struct_declaration) @struct_declaration
				(using_directive) @using_directive

				(local_declaration_statement) @local_declaration_statement
				(expression_statement) @expression_statement
				(for_statement) @for_statement
				(for_each_statement) @for_each_statement
				(continue_statement) @continue_statement
				(break_statement) @break_statement
				(throw_statement) @throw_statement
				(return_statement) @return_statement
				(try_statement) @try_statement
			]
		`],cpp:[p.cpp`
			[
				(declaration) @declaration

				(expression_statement) @expression_statement

				(comment) @comment

				(preproc_include) @preproc_include

				(namespace_definition) @namespace_definition

				(enum_specifier) @enum_specifier

				(struct_specifier) @struct_specifier

				(template_declaration) @template_declaration

				(function_definition) @function_definition

				(return_statement) @return_statement

				(class_specifier) @class_specifier

				(try_statement) @try_statement

				(throw_statement) @throw_statement

				(for_statement) @for_statement
				(for_statement
					initializer:(_) @for_statement.exclude_captures) @for_statement

				(for_range_loop) @for_range_loop
			]
		`],java:[p.java`
		[
			(statement) @statement ;; @ulugbekna: this includes (declaration); but somehow it can't capture inner classes

			(line_comment) @line_comment
			(block_comment) @block_comment

			(for_statement
				init: (_) @for_statement.exclude_captures)

			(block) @block.exclude_captures

			(field_declaration) @field_declaration
		]
		`],rust:[p.rust`
		[
			(line_comment) @line_comment

			(let_declaration) @let_declaration
			(extern_crate_declaration) @extern_crate_declaration
			(use_declaration) @use_declaration

			(attribute_item) @attribute_item
			(const_item) @const_item
			(enum_item) @enum_item
			(foreign_mod_item) @foreign_mod_item
			(function_item) @function_item
			(function_signature_item) @function_signature_item
			(impl_item) @impl_item
			(inner_attribute_item) @inner_attribute_item
			(mod_item) @mod_item
			(static_item) @static_item
			(struct_item) @struct_item
			(trait_item) @trait_item
			(type_item) @type_item
			(union_item) @union_item

			(macro_definition) @macro_definition
			(macro_invocation) @macro_invocation

			(empty_statement) @empty_statement

			(compound_assignment_expr) @compound_assignment_expr
			(generic_function) @generic_function
			(metavariable) @metavariable

			(match_arm) @match_arm

			(async_block) @async_block
			(const_block) @const_block
			(unsafe_block) @unsafe_block

			(block) @block.exclude_captures
		]
		`]},Ne={...S(["typescript","tsx"],["program","interface_declaration","class_declaration","function_declaration","function","type_alias_declaration","method_definition"]),javascript:["program","class_declaration","function_declaration","function","method_definition"],java:["program","class_declaration","interface_declaration","method_declaration"],cpp:["translation_unit","class_declaration","function_definition"],csharp:["compilation_unit","class_declaration","interface_declaration","method_declaration"],python:["module","class_definition","function_definition"],go:["source_file","type_declaration","function_declaration","method_declaration"],ruby:["program","method","class","method"],rust:["source_file","function_item","impl_item","let_declaration"]},Pe={typescript:[N("typescript")],tsx:[N("tsx")],javascript:[N("javascript")],java:[N("java")],cpp:[N("cpp")],csharp:[N("csharp")],python:[N("python")],go:[N("go")],ruby:[N("ruby")],rust:[N("rust")]},Re={...S(["typescript","tsx","javascript"],["for_in_statement","for_statement","if_statement","while_statement","do_statement","try_statement","switch_statement"]),java:["for_statement","enhanced_for_statement","if_statement","while_statement","do_statement","try_statement","switch_expression"],cpp:["for_statement","for_range_loop","if_statement","while_statement","do_statement","try_statement","switch_statement"],csharp:["for_statement","for_each_statement","if_statement","while_statement","do_statement","try_statement","switch_expression"],python:["for_statement","if_statement","while_statement","try_statement"],go:["for_statement","if_statement","type_switch_statement"],ruby:["while","for","if","case"],rust:["for_statement","if_statement","while_statement","loop_statement","match_expression"]},Ye={...S(["typescript","tsx"],["lexical_declaration","expression_statement","public_field_definition"]),javascript:["call_expression","expression_statement","variable_declaration","public_field_definition"],java:["expression_statement","local_variable_declaration","field_declaration"],cpp:["field_declaration","expression_statement","declaration"],csharp:["field_declaration","expression_statement"],python:["expression_statement"],go:["short_var_declaration","call_expression"],ruby:["call","assignment"],rust:["expression_statement","let_declaration","use_declaration","assignment_expression","macro_definition","extern_crate_declaration"]},Xe={...S(["typescript","tsx"],["class_declaration","function_declaration","generator_function_declaration","interface_declaration","internal_module","method_definition"]),javascript:["class_declaration","function_declaration","generator_function_declaration","method_definition"],java:["class_declaration","constructor_declaration","enum_declaration","interface_declaration","method_declaration","module_declaration"],cpp:["class_specifier","function_definition","namespace_definition","struct_specifier"],csharp:["class_declaration","constructor_declaration","destructor_declaration","enum_declaration","interface_declaration","method_declaration","namespace_declaration","struct_declaration"],python:["function_definition","class_definition"],go:["function_declaration","method_declaration"],ruby:["class","method","module"],rust:["function_item","impl_item","mod_item","struct_item","trait_item","union_item"]},ve={typescript:[P("typescript")],tsx:[P("tsx")],javascript:[P("javascript")],java:[P("java")],cpp:[P("cpp")],csharp:[P("csharp")],python:[P("python")],go:[P("go")],rust:[P("rust")],ruby:[P("ruby")]};function N(t){return Ne[t].map(e=>`(${e}) @scope`).join(`
`)}function P(t){return`[
		${Xe[t].map(n=>`(${n})`).join(`
`)}
	] @definition`}function D(t,e){return Ne[t].includes(e.type)||Re[t].includes(e.type)}function Ae(t,e){return Re[t].includes(e.type)}function X(t,e){return Ye[t].includes(e.type)}var ee=Ce(),te=class{constructor(){this.loadedLanguagesCache=new Map}loadLanguage(e){return this.loadedLanguagesCache.has(e)||this.loadedLanguagesCache.set(e,this._doLoadLanguage(e)),this.loadedLanguagesCache.get(e)}_doLoadLanguage(e){let r=`tree-sitter-${e==="csharp"?"c-sharp":e}.wasm`,s=U.basename(__dirname)==="dist"?U.resolve(__dirname,r):U.resolve(__dirname,"../../../../dist",r);return ee.Language.load(s)}},ne=class t{static{this.CACHE_SIZE_PER_LANGUAGE=5}constructor(){this.caches=new Map,this.languageLoader=new te,this._parser=null}get parser(){return this._parser||(this._parser=new ee),this._parser}async parse(e,n){await ee.init();let r=this.getParseTreeCache(e),s=r.get(n);if(s)return s.createReference();let a=await this.languageLoader.loadLanguage(e);this.parser.setLanguage(a);let i=this.parser.parse(n),o=new se(i);return r.put(n,o),o.createReference()}delete(){this._parser&&(this.parser.delete(),this._parser=null);for(let e of this.caches.values())e.dispose()}getParseTreeCache(e){let n=this.caches.get(e);return n||(n=new Z(t.CACHE_SIZE_PER_LANGUAGE),this.caches.set(e,n)),n}},re=class{constructor(e){this._tree=e;this._refCount=1}get tree(){if(this._refCount===0)throw new Error("Cannot access disposed RefCountedParseTree");return this._tree}ref(){if(this._refCount===0)throw new Error("Cannot ref disposed RefCountedParseTree");this._refCount++}deref(){if(this._refCount===0)throw new Error("Cannot deref disposed RefCountedParseTree");this._refCount--,this._refCount===0&&this._tree.delete()}},se=class{constructor(e){this._tree=new re(e)}dispose(){this._tree.deref()}createReference(){return new ae(this._tree)}},ae=class{constructor(e){this._parseTree=e;this._parseTree.ref()}get tree(){return this._parseTree.tree}dispose(){this._parseTree.deref()}},Le=new ne;function et(){Le.delete()}function y(t,e){return Le.parse(t,e)}var ie=class{constructor(e){this.language=e;this.map=new Map}getQuery(e){return this.map.has(e)||this.map.set(e,this.language.query(e)),this.map.get(e)}},oe=class t{constructor(){this.map=new Map}static{this.INSTANCE=new t}getQuery(e,n){return this.map.has(e)||this.map.set(e,new ie(e)),this.map.get(e).getQuery(n)}};function x(t,e){let n=[];for(let r of t){let s=oe.INSTANCE.getQuery(e.tree.getLanguage(),r);n.push(...s.matches(e))}return n}function tt(t,e){let n=Pe[t];return x(n,e)}function le(t,e){let n=Se[t];return x(n,e)}function nt(t,e){let n=he[t];return n?x(n,e):[]}function rt(t,e){let n=ye[t];return n?x(n,e):[]}function st(t,e){let n=we[t];return n?x(n,e):[]}function at(t,e){let n=be[t];return n?x(n,e):[]}function it(t,e){let n=Ee[t];return n?x(n,e):[]}function ot(t,e){let n=ve[t];return x(n,e)}async function _t(t,e,n){let r=await y(t,e);try{return nt(t,r.tree.rootNode).reduce((i,o)=>{let _=o.captures.find(l=>l.name==="call_expression").node;if(E.doIntersect(n,_)){let l,u;t==="ruby"&&(u=o.captures.find(d=>d.name==="symbol")?.node,l=u?.text?.slice(1)),u??=o.captures.find(d=>d.name==="identifier")?.node,l??=u?.text,i.push({identifier:l??"",text:_.text,startIndex:(u??_).startIndex,endIndex:(u??_).endIndex})}return i},[])}finally{r.dispose()}}async function lt(t,e){let n=await y(t,e);try{return le(t,n.tree.rootNode).map(a=>{let i=a.captures.find(_=>_.name==="function").node;return{identifier:a.captures.find(_=>_.name==="identifier")?.node.text??"",text:i.text,startIndex:i.startIndex,endIndex:i.endIndex}})}finally{n.dispose()}}async function ut(t,e){let n=await y(t,e);try{return rt(t,n.tree.rootNode).map(a=>{let i=a.captures.find(_=>_.name==="class_declaration").node;return{identifier:i?.children.find(_=>_.type==="type_identifier"||_.type==="identifier"||_.type==="constant")?.text??"",text:i.text,startIndex:i.startIndex,endIndex:i.endIndex}})}finally{n.dispose()}}async function ct(t,e){let n=await y(t,e);try{return st(t,n.tree.rootNode).map(a=>{let i=a.captures.find(_=>_.name==="type_declaration").node,o=a.captures.find(_=>_.name==="type_identifier")?.node.text;return o||(o=i?.children.find(_=>_.type==="type_identifier")?.text),{identifier:o??"",text:i.text,startIndex:i.startIndex,endIndex:i.endIndex}})}finally{n.dispose()}}async function dt(t,e,n){let r=await y(t,e);try{return at(t,r.tree.rootNode).reduce((i,o)=>{let _=o.captures.find(l=>l.name==="type_identifier").node;return E.doIntersect(n,_)&&i.push({identifier:_.text,text:_.text,startIndex:_.startIndex,endIndex:_.endIndex}),i},[])}finally{r.dispose()}}async function mt(t,e,n){let r=await y(t,e);try{return it(t,r.tree.rootNode).reduce((i,o)=>{let _=o.captures.find(l=>l.name==="new_expression").node;return E.doIntersect(n,_)&&i.push({identifier:_.text,text:_.text,startIndex:_.startIndex,endIndex:_.endIndex}),i},[])}finally{r.dispose()}}async function pt(t,e,n){let r=await y(t,e);try{let s=Te[t];return x(s,r.tree.rootNode).reduce((o,_)=>{let l=_.captures.find(u=>u.name==="symbol").node;return E.doIntersect(n,l)&&o.push({identifier:l.text,text:l.text,startIndex:l.startIndex,endIndex:l.endIndex}),o},[])}finally{r.dispose()}}async function ft(t,e){let n=await y(t,e);try{let r=ot(t,n.tree.rootNode);return Rt(t,r,n.tree.rootNode)}finally{n.dispose()}}async function gt(t,e){let n=await y(t,e);try{return le(t,n.tree.rootNode).map(a=>{let i=a.captures.find(o=>o.name==="function").node;return{startIndex:i.startIndex,endIndex:i.endIndex}})}finally{n.dispose()}}async function ht(t,e){let n=await y(t,e);try{return le(t,n.tree.rootNode).map(a=>{let i=a.captures.find(o=>o.name==="body").node;return{startIndex:i.startIndex,endIndex:i.endIndex}})}finally{n.dispose()}}async function yt(t,e,n){let r=await y(t,e);try{let s=tt(t,r.tree.rootNode),a;for(let i of s){let o=i.captures[0].node,_=v.ofSyntaxNode(o);if(v.doesContain(_,n)&&(a=o),T.isBefore(n.endPosition,_.startPosition))break}if(a)return v.ofSyntaxNode(a);throw new Error("No parent node found")}finally{r.dispose()}}async function wt(t,e,n,r){let s=await y(t,e);try{let a=s.tree.rootNode.descendantForPosition(n.startPosition,n.endPosition),i={startPosition:a.startPosition,endPosition:a.endPosition},o=De(t,a,r,n,!0);return v.equals(i,o)?ke(t,a):o}finally{s.dispose()}}function ke(t,e){let n=e.parent,r={startPosition:e.startPosition,endPosition:e.endPosition};if(D(t,e)||!n)return r;let{filteredRanges:s,indexOfInterest:a}=Ue(t,n.children,r,!1);if(a-1>=0&&a+1<=s.length-1){let i=s[a-1],o=s[a+1];return{startPosition:i.startPosition,endPosition:o.endPosition}}return ke(t,n)}function De(t,e,n,r,s){let a=e.children;if(e.endPosition.row-e.startPosition.row+1<=n){let o=D(t,e)?{startPosition:e.startPosition,endPosition:e.endPosition}:Oe(t,a,n,r,s),_=e.parent;return _?De(t,_,n,o,!1):o}return Oe(t,a,n,r,s)}function Fe(t,e){return e.endPosition.row-t.startPosition.row+1}function Oe(t,e,n,r,s){if(e.length===0)return r;let{filteredRanges:a,indexOfInterest:i}=Ue(t,e,r,s),o=0,_=a.length-1,l=a[o],u=a[_];for(;Fe(l,u)>n&&o!==_;)i-o<_-i?(_--,u=a[_]):(o++,l=a[o]);return Fe(l,u)<=n?{startPosition:l.startPosition,endPosition:u.endPosition}:r}function Ue(t,e,n,r){let s,a;if(r?(s=e.filter(i=>D(t,i)||X(t,i)),a=fe(s,n,(i,o)=>T.isBefore(i.startPosition,o.startPosition)),s.splice(a,0,n)):(s=e.filter(i=>v.doesContain(i,n)||D(t,i)||X(t,i)),a=s.findIndex(i=>v.doesContain(i,n))),a===-1)throw new Error("Valid index not found");return{filteredRanges:s,indexOfInterest:a}}function j(t,e,n,r=ue){let s=[t.rootNode],a=[];for(;;){let i=s.map(o=>[o,E.intersectionSize(o,e)]).filter(([o,_])=>_>0).sort(([o,_],[l,u])=>u-_);if(i.length===0)return a.length===0?void 0:ge(a,([o,_],[l,u])=>_-u)[0];{let o=i.map(([_,l])=>{let u=E.len(_),d=Math.abs(E.len(e)-l),f=(l-d)/u;return[_,f]});a.push(...o.filter(([_,l])=>r(_,n))),s=[],s.push(...o.flatMap(([_,l])=>_.children))}}}async function bt(t,e,n){let r=await y(t,e);try{let s=r.tree.rootNode.descendantForIndex(n.startIndex,n.endIndex);if(s.type.match(/identifier/)&&(s.parent===null||ue(s.parent,t))){let a=s.parent,i=a===null?void 0:{startIndex:a.startIndex,endIndex:a.endIndex};return{identifier:s.text,nodeRange:i}}}finally{r.dispose()}}async function Et(t,e,n){let r=await y(t,e);try{let s=Me[t],o=x(s,r.tree.rootNode).flatMap(({captures:_})=>_).filter(({name:_})=>_.endsWith("identifier")).find(({node:_})=>E.doesContain(_,n));return o?{identifier:o.node.text}:void 0}catch{return}finally{r.dispose()}}async function St(t,e,n){let r=[],i=(await y(t,e)).tree.rootNode.descendantForIndex(n.startIndex,n.endIndex);for(;i!==null;)Ae(t,i)&&r.push({startIndex:i.startIndex,endIndex:i.endIndex}),i=i.parent;return r}async function xt(t,e,n){let r=await y(t,e);try{let a=n.startIndex===n.endIndex?void 0:j(r.tree,n,t);if(a)return{nodeIdentifier:_e(a,t),nodeToDocument:G.ofSyntaxNode(a),nodeSelectionBy:"matchingSelection"};let o=r.tree.rootNode.descendantForIndex(n.startIndex,n.endIndex),_=0;for(;!ue(o,t)&&o.parent!==null;)o=o.parent,++_;return{nodeIdentifier:_e(o,t),nodeToDocument:G.ofSyntaxNode(o),nodeSelectionBy:"expanding"}}finally{r.dispose()}}async function Mt(t,e,n){let r=await y(t,e);try{let s=n.startIndex===n.endIndex;if(s)return;let a=s?void 0:j(r.tree,n,t),i=s?void 0:j(r.tree,n,t,Tt);if(i&&a)return{nodeIdentifier:_e(a,t),nodeToExplain:G.ofSyntaxNode(i)}}finally{r.dispose()}}function _e(t,e){switch(e){case"python":case"csharp":return t.children.find(n=>n.type.match(/identifier/))?.text;case"go":{let n=t.children.find(s=>s.type.match(/identifier/));return n?n.text:t.children.find(s=>s.type.match(/spec/))?.children.find(s=>s.type.match(/identifier/))?.text}case"javascript":case"javascriptreact":case"typescript":case"typescriptreact":case"cpp":{let n=t.children.find(s=>s.type.match(/declarator/));return n?n.children.find(s=>s.type.match(/identifier/))?.text:t.children.find(s=>s.type.match(/identifier/))?.text}case"java":{let n=t.children.find(s=>s.type.match(/identifier/));return n?n.text:t.children.find(s=>s.type.match(/declarator/))?.children.find(s=>s.type.match(/identifier/))?.text}case"ruby":return t.children.find(n=>n.type.match(/constant|identifier/))?.text;default:return t.children.find(n=>n.type.match(/identifier/))?.text}}function Tt(t,e){return t.type.match(/definition/)}function ue(t,e){switch(e){case"typescript":case"tsx":case"javascript":return t.type.match(/definition|declaration|declarator|export_statement/);case"go":return t.type.match(/definition|declaration|declarator|var_spec/);case"cpp":return t.type.match(/definition|declaration|class_specifier/);case"ruby":return t.type.match(/module|class|method|assignment/);default:return t.type.match(/definition|declaration|declarator/)}}async function It(t,e){if(!new Set(["javascript","typescript","java","cpp","csharp","go","ruby"]).has(t))return;let r=await y(t,e);try{let s=xe[t],a=x(s,r.tree.rootNode).flatMap(o=>o.captures.filter(_=>_.name==="docComment")),i=Nt(a);if(i.length>1&&(i=i.filter(o=>o.includes(`
`)||!o.match(/(implementation code|code implementation|implementation details|\.\.\.)/i))),i.length===1)return i[0]}finally{r.dispose()}}function Nt(t){let e=[];for(let n=0;n<t.length;++n){let r=[t[n].node.text];for(;n+1<t.length&&t[n].node.endPosition.row+1===t[n+1].node.startPosition.row;)++n,r.push(t[n].node.text);e.push(r.join(`
`))}return e}async function Pt(t,e){let n=Ie[t];if(n.length===0)return;let r=await y(t,e);try{let s=x(n,r.tree.rootNode).flatMap(_=>_.captures).sort((_,l)=>E.compare(_.node,l.node)),a=[];for(let _ of s)_.name.endsWith(".exclude_captures")&&a.push(E.ofSyntaxNode(_.node));let i=new k(0,e.length,"root",[]),o=[i];for(let _=0;_<s.length;++_){let u=s[_].node;if(a.some(f=>E.isEqual(f,u)))continue;let d;do d=o.pop();while(d&&!E.doesContain(d,u));if(new Set(["export_statement","ambient_declaration"]).has(d.kind))d.kind=u.type,o.push(d);else{let f=new k(u.startIndex,u.endIndex,u.type,[]);d.children.push(f),o.push(d,f)}}return i}catch(s){console.error(s instanceof Error?s:new Error(s))}finally{r.dispose()}}function Rt(t,e,n){let r;switch(t){case"python":r=Ft(e);break;case"ruby":r=Ct(e);break;default:{r=vt(e,t);break}}return new V(r,I.ofSyntaxNode(n))}function vt(t,e){let n=new Map;return t.forEach(r=>{let a=r.captures.find(o=>o.name==="definition")?.node,i=a?.childForFieldName("body");if(a&&i){let o;switch(e){case"typescript":case"javascript":{let{definition:l,comments:u}=Ot(a);a=l,o=u;break}case"java":case"rust":o=Lt(a);break;default:{o=B(a);break}}n.get(a.id)||n.set(a.id,{mainBlock:I.ofSyntaxNode(a),detailBlocks:{comments:o.map(l=>I.ofSyntaxNode(l)),body:I.ofSyntaxNode(i)}})}}),Array.from(n.values())}function At(t){if(!(t.length<2))for(let e=1;e<t.length;e++){let n=t[e];if(!n.type.includes("parameters"))return n}}function Ct(t){let e=new Map;return t.forEach(n=>{let s=n.captures.find(a=>a.name==="definition")?.node;if(s){let a=s.namedChildren,i=At(a);if(i){let o=a[a.length-1],_=s.text.substring(i.startIndex-s.startIndex,o.endIndex-s.startIndex),l=B(s);e.get(s.id)||e.set(s.id,{mainBlock:I.ofSyntaxNode(s),detailBlocks:{comments:l.map(d=>I.ofSyntaxNode(d)),body:{range:{startPosition:{row:i.startPosition.row,column:i.startPosition.column},endPosition:{row:o.endPosition.row,column:o.endPosition.column}},startIndex:i.startIndex,text:_,endIndex:o.endIndex}}})}}}),Array.from(e.values())}function Ft(t){let e=new Map;return t.forEach(n=>{let s=n.captures.find(i=>i.name==="definition")?.node,a=s?.childForFieldName("body");if(s&&a){let i=Dt(a),o=kt(s);e.set(s.id,{mainBlock:I.ofSyntaxNode(s),detailBlocks:{docstring:i?I.ofSyntaxNode(i):void 0,decorator:o?I.ofSyntaxNode(o):void 0,body:I.ofSyntaxNode(a)}});return}}),Array.from(e.values())}function B(t,e=["comment"]){let n=[],r=t.previousNamedSibling;for(;r&&e.some(s=>s===r?.type);)n.push(r),r=r.previousNamedSibling;return n.reverse()}function Ot(t){let e=t.parent;return e?.type==="export_statement"?{definition:e,comments:B(e)}:{definition:t,comments:B(t)}}function Lt(t){return B(t,["block_comment","line_comment"])}function kt(t){let e=t.previousNamedSibling;return e?.type==="decorator"?e:void 0}function Dt(t){let e=t.firstChild;if(!e||e.type!=="expression_statement")return;let n=e.firstChild;return n?.type==="string"?n:void 0}function Ut(){let t=Be.parentPort;if(!t)throw new Error("This module should only be used in a worker thread.");t.on("message",async({id:e,fn:n,args:r})=>{try{let s=await ce[n](...r);t.postMessage({id:e,res:s})}catch(s){t.postMessage({id:e,err:s})}})}Ut();
//!!! DO NOT modify, this file was COPIED from 'microsoft/vscode'
