"use strict";var e=require("react"),t=require("contrast-color");!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}("button{background-color:#000;border:1px solid #000;border-radius:5px;color:#fff;padding:5px 15px}button:hover{transform:scale(1.1)}");var o={text:"Click me!",color:"#000000",onClick:function(){}};exports.Button=function(r){var n=void 0===r?o:r,c=n.text,d=n.color,i=n.onClick,l={};if(d&&"undefined"!==d){l["background-color"]=d,l["border-color"]=d;var a=t.contrastColor({bgColor:d});l.color=a}return e.createElement("button",{style:l,onClick:i},c)};
