"use strict";(self.webpackChunkms5=self.webpackChunkms5||[]).push([[613],{6613:(J,g,_)=>{_.r(g),_.d(g,{default:()=>x});const A="[A-Za-z$_][0-9A-Za-z$_]*",k=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],B=["true","false","null","undefined","NaN","Infinity"],N=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],S=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],m=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],U=["arguments","this","super","console","window","document","localStorage","module","global"],h=[].concat(m,N,S);function x(e){const a=e.regex,n=A,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(t,i)=>{const l=t[0].length+t.index,d=t.input[l];if("<"===d||","===d)return void i.ignoreMatch();let L;">"===d&&(((t,{after:i})=>{const l="</"+t[0].slice(1);return-1!==t.input.indexOf(l,i)})(t,{after:l})||i.ignoreMatch()),(L=t.input.substr(l).match(/^\s+extends\s+/))&&0===L.index&&i.ignoreMatch()}},s={$pattern:A,keyword:k,literal:B,built_in:h,"variable.language":U},f="[0-9](_?[0-9])*",E=`\\.(${f})`,R="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${R})((${E})|\\.)?|(${E}))[eE][+-]?(${f})\\b`},{begin:`\\b(${R})\\b((${E})\\b|\\.)?|(${E})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},I={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,r],subLanguage:"xml"}},O={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,r],subLanguage:"css"}},C={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]},b={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,I,O,C,y];r.contains=p.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(p)});const M=[].concat(b,r.contains),u=M.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(M)}]),o={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:u},Z={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,a.concat(n,"(",a.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},v={relevance:0,match:a.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...N,...S]}},z={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[o],illegal:/%/},H={match:a.concat(/\b/,function K(t){return a.concat("(?!",t.join("|"),")")}([...m,"super"]),n,a.lookahead(/\(/)),className:"title.function",relevance:0},W={begin:a.concat(/\./,a.lookahead(a.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},X={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},o]},w="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Y={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,a.lookahead(w)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[o]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:u,CLASS_REFERENCE:v},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,I,O,C,b,y,v,{className:"attr",begin:n+a.lookahead(":"),relevance:0},Y,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{className:"function",begin:w,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:u}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[o,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},W,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[o]},H,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},Z,X,{match:/\$[(.]/}]}}}}]);