!function(e){function t(t){for(var r,a,l=t[0],u=t[1],c=t[2],s=0,f=[];s<l.length;s++)a=l[s],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;o.push([48,0]),n()}({2:function(e,t){!function(e,t){var n,r=e.document,i=r.documentElement,o=r.querySelector('meta[name="viewport"]'),a=r.querySelector('meta[name="flexible"]'),l=0,u=0,c=t.flexible||(t.flexible={});if(o)(s=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/))&&(u=parseFloat(s[1]),l=parseInt(1/u));else if(a){var p=a.getAttribute("content");if(p){var s=p.match(/initial\-dpr=([\d\.]+)/),f=p.match(/maximum\-dpr=([\d\.]+)/);s&&(l=parseFloat(s[1]),u=parseFloat((1/l).toFixed(2))),f&&(l=parseFloat(f[1]),u=parseFloat((1/l).toFixed(2)))}}if(!l&&!u){var d=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),m=e.devicePixelRatio;u=1/(l=d?m>=3&&(!l||l>=3)?3:m>=2&&(!l||l>=2)?2:1:1)}if(i.setAttribute("data-dpr",l),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(o);else{var v=r.createElement("div");v.appendChild(o),r.write(v.innerHTML)}function h(){var t=i.getBoundingClientRect().width/10;i.style.fontSize=t+"px",c.rem=e.rem=t}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(h,300)},!1),e.addEventListener("orientationchange",function(){clearTimeout(n),n=setTimeout(h,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(h,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*l+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*l+"px"},!1),h(),c.dpr=e.dpr=l,c.refreshRem=h,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},48:function(e,t,n){"use strict";n.r(t);n(5),n(52),n(2)},52:function(e,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2ZsZXhpYmxlL3JlbS5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjEiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIndpbiIsImxpYiIsInRpbWVyIiwiZG9jIiwiZG9jdW1lbnQiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwidnBNZXRhIiwicXVlcnlTZWxlY3RvciIsImZsZXhNZXRhIiwiZHByIiwic2NhbGUiLCJmbGV4aWJsZSIsImluaXRpYWwiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImZsZXhNZXRhQ29udGVudCIsIm1heGltdW0iLCJ0b0ZpeGVkIiwidSIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJfZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFwcGVuZENoaWxkIiwiZGl2Iiwid3JpdGUiLCJpbm5lckhUTUwiLCJzZXRGb250U2l6ZSIsImJhc2VTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdHlsZSIsImZvbnRTaXplIiwicmVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwicGVyc2lzdGVkIiwicmVhZHlTdGF0ZSIsImJvZHkiLCJyZWZyZXNoUmVtIiwicmVtMnB4IiwidGhpcyIsInB4MnJlbSJdLCJtYXBwaW5ncyI6ImFBQ0EsU0FBQUEsRUFBQUMsR0FRQSxJQVBBLElBTUFDLEVBQUFDLEVBTkFDLEVBQUFILEVBQUEsR0FDQUksRUFBQUosRUFBQSxHQUNBSyxFQUFBTCxFQUFBLEdBSUFNLEVBQUEsRUFBQUMsRUFBQSxHQUNRRCxFQUFBSCxFQUFBSyxPQUFvQkYsSUFDNUJKLEVBQUFDLEVBQUFHLEdBQ0FHLEVBQUFQLElBQ0FLLEVBQUFHLEtBQUFELEVBQUFQLEdBQUEsSUFFQU8sRUFBQVAsR0FBQSxFQUVBLElBQUFELEtBQUFHLEVBQ0FPLE9BQUFDLFVBQUFDLGVBQUFDLEtBQUFWLEVBQUFILEtBQ0FjLEVBQUFkLEdBQUFHLEVBQUFILElBS0EsSUFGQWUsS0FBQWhCLEdBRUFPLEVBQUFDLFFBQ0FELEVBQUFVLE9BQUFWLEdBT0EsT0FIQVcsRUFBQVIsS0FBQVMsTUFBQUQsRUFBQWIsR0FBQSxJQUdBZSxJQUVBLFNBQUFBLElBRUEsSUFEQSxJQUFBQyxFQUNBZixFQUFBLEVBQWlCQSxFQUFBWSxFQUFBVixPQUE0QkYsSUFBQSxDQUc3QyxJQUZBLElBQUFnQixFQUFBSixFQUFBWixHQUNBaUIsR0FBQSxFQUNBQyxFQUFBLEVBQWtCQSxFQUFBRixFQUFBZCxPQUEyQmdCLElBQUEsQ0FDN0MsSUFBQUMsRUFBQUgsRUFBQUUsR0FDQSxJQUFBZixFQUFBZ0IsS0FBQUYsR0FBQSxHQUVBQSxJQUNBTCxFQUFBUSxPQUFBcEIsSUFBQSxHQUNBZSxFQUFBTSxJQUFBQyxFQUFBTixFQUFBLEtBR0EsT0FBQUQsRUFJQSxJQUFBUSxFQUFBLEdBS0FwQixFQUFBLENBQ0FxQixFQUFBLEdBR0FaLEVBQUEsR0FHQSxTQUFBUyxFQUFBMUIsR0FHQSxHQUFBNEIsRUFBQTVCLEdBQ0EsT0FBQTRCLEVBQUE1QixHQUFBOEIsUUFHQSxJQUFBQyxFQUFBSCxFQUFBNUIsR0FBQSxDQUNBSyxFQUFBTCxFQUNBZ0MsR0FBQSxFQUNBRixRQUFBLElBVUEsT0FOQWhCLEVBQUFkLEdBQUFhLEtBQUFrQixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSixHQUdBSyxFQUFBQyxHQUFBLEVBR0FELEVBQUFELFFBS0FKLEVBQUFPLEVBQUFuQixFQUdBWSxFQUFBUSxFQUFBTixFQUdBRixFQUFBUyxFQUFBLFNBQUFMLEVBQUFNLEVBQUFDLEdBQ0FYLEVBQUFZLEVBQUFSLEVBQUFNLElBQ0ExQixPQUFBNkIsZUFBQVQsRUFBQU0sRUFBQSxDQUEwQ0ksWUFBQSxFQUFBQyxJQUFBSixLQUsxQ1gsRUFBQWdCLEVBQUEsU0FBQVosR0FDQSxvQkFBQWEsZUFBQUMsYUFDQWxDLE9BQUE2QixlQUFBVCxFQUFBYSxPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEbkMsT0FBQTZCLGVBQUFULEVBQUEsY0FBaURlLE9BQUEsS0FRakRuQixFQUFBb0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQW5CLEVBQUFtQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQXZDLE9BQUF3QyxPQUFBLE1BR0EsR0FGQXhCLEVBQUFnQixFQUFBTyxHQUNBdkMsT0FBQTZCLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxpQkFBQUYsRUFBQSxRQUFBTSxLQUFBTixFQUFBbkIsRUFBQVMsRUFBQWMsRUFBQUUsRUFBQSxTQUFBQSxHQUFnSCxPQUFBTixFQUFBTSxJQUFxQkMsS0FBQSxLQUFBRCxJQUNySSxPQUFBRixHQUlBdkIsRUFBQTJCLEVBQUEsU0FBQXRCLEdBQ0EsSUFBQU0sRUFBQU4sS0FBQWlCLFdBQ0EsV0FBMkIsT0FBQWpCLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUwsRUFBQVMsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWCxFQUFBWSxFQUFBLFNBQUFnQixFQUFBQyxHQUFzRCxPQUFBN0MsT0FBQUMsVUFBQUMsZUFBQUMsS0FBQXlDLEVBQUFDLElBR3REN0IsRUFBQThCLEVBQUEsR0FFQSxJQUFBQyxFQUFBQyxPQUFBLGFBQUFBLE9BQUEsaUJBQ0FDLEVBQUFGLEVBQUFoRCxLQUFBMkMsS0FBQUssR0FDQUEsRUFBQWhELEtBQUFYLEVBQ0EyRCxJQUFBRyxRQUNBLFFBQUF2RCxFQUFBLEVBQWdCQSxFQUFBb0QsRUFBQWxELE9BQXVCRixJQUFBUCxFQUFBMkQsRUFBQXBELElBQ3ZDLElBQUFVLEVBQUE0QyxFQUlBMUMsRUFBQVIsS0FBQSxRQUVBVSx1QkN0SkUsU0FBUzBDLEVBQUtDLEdBQ1osSUFBSUMsRUFDRkMsRUFBTUgsRUFBSUksU0FDVkMsRUFBVUYsRUFBSUcsZ0JBRWRDLEVBQVNKLEVBQUlLLGNBQWMseUJBQzNCQyxFQUFXTixFQUFJSyxjQUFjLHlCQUU3QkUsRUFBTSxFQUNOQyxFQUFRLEVBRVJDLEVBQVdYLEVBQUlXLFdBQWFYLEVBQUlXLFNBQVcsSUFHN0MsR0FBSUwsR0FFRU0sRUFBVU4sRUFBT08sYUFBYSxXQUFXQyxNQUFNLCtCQUdqREosRUFBUUssV0FBV0gsRUFBUSxJQUMzQkgsRUFBTU8sU0FBUyxFQUFJTixTQUtsQixHQUFJRixFQUFVLENBQ2pCLElBQUlTLEVBQWtCVCxFQUFTSyxhQUFhLFdBQzVDLEdBQUlJLEVBQWlCLENBRW5CLElBQUlMLEVBQVVLLEVBQWdCSCxNQUFNLDBCQUNsQ0ksRUFBVUQsRUFBZ0JILE1BQU0sMEJBRTlCRixJQUNGSCxFQUFNTSxXQUFXSCxFQUFRLElBQ3pCRixFQUFRSyxZQUFZLEVBQUlOLEdBQUtVLFFBQVEsS0FHbkNELElBQ0ZULEVBQU1NLFdBQVdHLEVBQVEsSUFDekJSLEVBQVFLLFlBQVksRUFBSU4sR0FBS1UsUUFBUSxNQU8zQyxJQUFLVixJQUFRQyxFQUFPLENBSWxCLElBQUlVLEdBQUtyQixFQUFJc0IsVUFBVUMsV0FBV1IsTUFBTSxhQUFjZixFQUFJc0IsVUFBVUMsV0FBV1IsTUFBTSxhQUNuRlMsRUFBT3hCLEVBQUl5QixpQkFLYmQsRUFBUSxHQUZSRCxFQUFNVyxFQUFNRyxHQUFRLEtBQU9kLEdBQU9BLEdBQU8sR0FBTSxFQUFLYyxHQUFRLEtBQU9kLEdBQU9BLEdBQU8sR0FBTSxFQUFJLEVBQUssR0FRbEcsR0FIQUwsRUFBUXFCLGFBQWEsV0FBWWhCLElBRzVCSCxFQU9ILElBTkFBLEVBQVNKLEVBQUl3QixjQUFjLFNBRXBCRCxhQUFhLE9BQVEsWUFDNUJuQixFQUFPbUIsYUFBYSxVQUNsQixpQkFBbUJmLEVBQVEsbUJBQXFCQSxFQUFRLG1CQUFxQkEsRUFBUSxzQkFFbkZOLEVBQVF1QixrQkFDVnZCLEVBQVF1QixrQkFBa0JDLFlBQVl0QixPQUNqQyxDQUNMLElBQUl1QixFQUFNM0IsRUFBSXdCLGNBQWMsT0FDNUJHLEVBQUlELFlBQVl0QixHQUNoQkosRUFBSTRCLE1BQU1ELEVBQUlFLFdBSWxCLFNBQVNDLElBQ1AsSUFPSUMsRUFQVzdCLEVBQVE4Qix3QkFBd0JDLE1BT3JCLEdBRTFCL0IsRUFBUWdDLE1BQU1DLFNBQVdKLEVBQVcsS0FDcEN0QixFQUFTMkIsSUFBTXZDLEVBQUl1QyxJQUFNTCxFQUkzQmxDLEVBQUl3QyxpQkFBaUIsU0FBVSxXQUM3QkMsYUFBYXZDLEdBQ2JBLEVBQVF3QyxXQUFXVCxFQUFhLE9BQy9CLEdBS0hqQyxFQUFJd0MsaUJBQWlCLG9CQUFxQixXQUN4Q0MsYUFBYXZDLEdBQ2JBLEVBQVF3QyxXQUFXVCxFQUFhLE9BQy9CLEdBS0hqQyxFQUFJd0MsaUJBQWlCLFdBQVksU0FBU0csR0FDcENBLEVBQUVDLFlBQ0pILGFBQWF2QyxHQUNiQSxFQUFRd0MsV0FBV1QsRUFBYSxRQUVqQyxHQUdDLGFBQWU5QixFQUFJMEMsV0FDckIxQyxFQUFJMkMsS0FBS1QsTUFBTUMsU0FBVyxHQUFLNUIsRUFBTSxLQUVyQ1AsRUFBSXFDLGlCQUFpQixtQkFBb0IsV0FDdkNyQyxFQUFJMkMsS0FBS1QsTUFBTUMsU0FBVyxHQUFLNUIsRUFBTSxPQUNwQyxHQUdMdUIsSUFFQXJCLEVBQVNGLElBQU1WLEVBQUlVLElBQU1BLEVBRXpCRSxFQUFTbUMsV0FBYWQsRUFFdEJyQixFQUFTb0MsT0FBUyxTQUFTMUUsR0FDekIsSUFBSUQsRUFBSTJDLFdBQVcxQyxHQUFLMkUsS0FBS1YsSUFJN0IsTUFISSxpQkFBbUJqRSxHQUFLQSxFQUFFeUMsTUFBTSxVQUNsQzFDLEdBQUssTUFFQUEsR0FHVHVDLEVBQVNzQyxPQUFTLFNBQVM1RSxHQUN6QixJQUFJRCxFQUFJMkMsV0FBVzFDLEdBQUsyRSxLQUFLVixJQUs3QixNQUhJLGlCQUFtQmpFLEdBQUtBLEVBQUV5QyxNQUFNLFNBQ2xDMUMsR0FBSyxPQUVBQSxHQWpKWCxDQW1KRXdCLE9BQVFBLE9BQU9JLE1BQVFKLE9BQU9JLElBQU0iLCJmaWxlIjoiaG9tZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzQ4LDBdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiISBmdW5jdGlvbih3aW4sIGxpYikge1xyXG4gICAgdmFyIHRpbWVyLFxyXG4gICAgICBkb2MgPSB3aW4uZG9jdW1lbnQsXHJcbiAgICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxyXG4gIFxyXG4gICAgICB2cE1ldGEgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKSxcclxuICAgICAgZmxleE1ldGEgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZmxleGlibGVcIl0nKSxcclxuICBcclxuICAgICAgZHByID0gMCxcclxuICAgICAgc2NhbGUgPSAwLFxyXG4gIFxyXG4gICAgICBmbGV4aWJsZSA9IGxpYi5mbGV4aWJsZSB8fCAobGliLmZsZXhpYmxlID0ge30pO1xyXG4gIFxyXG4gICAgLy8g6K6+572u5LqGIHZpZXdwb3J0IG1ldGFcclxuICAgIGlmICh2cE1ldGEpIHtcclxuICBcclxuICAgICAgdmFyIGluaXRpYWwgPSB2cE1ldGEuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKS5tYXRjaCgvaW5pdGlhbFxcLXNjYWxlPShbXFxkXFwuXSspLyk7XHJcbiAgXHJcbiAgICAgIGlmIChpbml0aWFsKSB7XHJcbiAgICAgICAgc2NhbGUgPSBwYXJzZUZsb2F0KGluaXRpYWxbMV0pOyAvLyDlt7Lorr7nva7nmoQgaW5pdGlhbFNjYWxlXHJcbiAgICAgICAgZHByID0gcGFyc2VJbnQoMSAvIHNjYWxlKTsgLy8g6K6+5aSH5YOP57Sg5q+UIGRldmljZVBpeGVsUmF0aW9cclxuICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gICAgLy8g6K6+572u5LqGIGZsZXhpYmxlIE1ldGFcclxuICAgIGVsc2UgaWYgKGZsZXhNZXRhKSB7XHJcbiAgICAgIHZhciBmbGV4TWV0YUNvbnRlbnQgPSBmbGV4TWV0YS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xyXG4gICAgICBpZiAoZmxleE1ldGFDb250ZW50KSB7XHJcbiAgXHJcbiAgICAgICAgdmFyIGluaXRpYWwgPSBmbGV4TWV0YUNvbnRlbnQubWF0Y2goL2luaXRpYWxcXC1kcHI9KFtcXGRcXC5dKykvKSxcclxuICAgICAgICAgIG1heGltdW0gPSBmbGV4TWV0YUNvbnRlbnQubWF0Y2goL21heGltdW1cXC1kcHI9KFtcXGRcXC5dKykvKTtcclxuICBcclxuICAgICAgICBpZiAoaW5pdGlhbCkge1xyXG4gICAgICAgICAgZHByID0gcGFyc2VGbG9hdChpbml0aWFsWzFdKTtcclxuICAgICAgICAgIHNjYWxlID0gcGFyc2VGbG9hdCgoMSAvIGRwcikudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmIChtYXhpbXVtKSB7XHJcbiAgICAgICAgICBkcHIgPSBwYXJzZUZsb2F0KG1heGltdW1bMV0pO1xyXG4gICAgICAgICAgc2NhbGUgPSBwYXJzZUZsb2F0KCgxIC8gZHByKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8vIHZpZXdwb3J0IOaIliBmbGV4aWJsZVxyXG4gICAgLy8gbWV0YSDlnYfmnKrorr7nva5cclxuICAgIGlmICghZHByICYmICFzY2FsZSkge1xyXG4gICAgICAvLyBRU1RcclxuICAgICAgLy8g6L+Z6YeM55qEIOesrOS4gOWPpeacieS7gOS5iOeUqCA/XHJcbiAgICAgIC8vIOWSjCBBbmRyb2lkIOacieavm+WFs+ezuyA/XHJcbiAgICAgIHZhciB1ID0gKHdpbi5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvYW5kcm9pZC9naSksIHdpbi5uYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvaXBob25lL2dpKSksXHJcbiAgICAgICAgX2RwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gIFxyXG4gICAgICAvLyDmiYDku6Xov5nph4zkvLzkuY7mmK/lsIbmiYDmnIkgQW5kcm9pZCDorr7lpIfpg73orr7nva7kuLogMSDkuoZcclxuICAgICAgZHByID0gdSA/ICgoX2RwciA+PSAzICYmICghZHByIHx8IGRwciA+PSAzKSkgPyAzIDogKF9kcHIgPj0gMiAmJiAoIWRwciB8fCBkcHIgPj0gMikpID8gMiA6IDEpIDogMTtcclxuICBcclxuICAgICAgc2NhbGUgPSAxIC8gZHByO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZG9jRWxlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRwclwiLCBkcHIpO1xyXG4gIFxyXG4gICAgLy8g5o+S5YWlIHZpZXdwb3J0IG1ldGFcclxuICAgIGlmICghdnBNZXRhKSB7XHJcbiAgICAgIHZwTWV0YSA9IGRvYy5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICBcclxuICAgICAgdnBNZXRhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ2aWV3cG9ydFwiKTtcclxuICAgICAgdnBNZXRhLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIixcclxuICAgICAgICBcImluaXRpYWwtc2NhbGU9XCIgKyBzY2FsZSArIFwiLCBtYXhpbXVtLXNjYWxlPVwiICsgc2NhbGUgKyBcIiwgbWluaW11bS1zY2FsZT1cIiArIHNjYWxlICsgXCIsIHVzZXItc2NhbGFibGU9bm9cIik7XHJcbiAgXHJcbiAgICAgIGlmIChkb2NFbGVtLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgZG9jRWxlbS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZCh2cE1ldGEpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2cE1ldGEpO1xyXG4gICAgICAgIGRvYy53cml0ZShkaXYuaW5uZXJIVE1MKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gc2V0Rm9udFNpemUoKSB7XHJcbiAgICAgIHZhciB3aW5XaWR0aCA9IGRvY0VsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgXHJcbiAgICAgIC8vIGlmICh3aW5XaWR0aCAvIGRwciA+ICg3NTAgLyAyKSkge1xyXG4gICAgICAvLyAgICh3aW5XaWR0aCA9ICg3NTAgLyAyKSAqIGRwcik7XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8g5qC56IqC54K5IGZvbnRTaXplIOagueaNruWuveW6puWGs+WumlxyXG4gICAgICB2YXIgYmFzZVNpemUgPSB3aW5XaWR0aCAvIDEwO1xyXG4gIFxyXG4gICAgICBkb2NFbGVtLnN0eWxlLmZvbnRTaXplID0gYmFzZVNpemUgKyBcInB4XCI7XHJcbiAgICAgIGZsZXhpYmxlLnJlbSA9IHdpbi5yZW0gPSBiYXNlU2l6ZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIOiwg+aVtOeql+WPo+aXtumHjee9rlxyXG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChzZXRGb250U2l6ZSwgMzAwKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICBcclxuICBcclxuICAgIC8vIOi/meS4gOauteaYr+aIkeiHquW3seWKoOeahFxyXG4gICAgLy8gb3JpZW50YXRpb25jaGFuZ2Ug5pe25Lmf6ZyA6KaB6YeN566X5LiL5ZCnXHJcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoc2V0Rm9udFNpemUsIDMwMCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgXHJcbiAgXHJcbiAgICAvLyBwYWdlc2hvd1xyXG4gICAgLy8ga2V5d29yZDog5YCS6YCAIOe8k+WtmOebuOWFs1xyXG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGlmIChlLnBlcnNpc3RlZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHNldEZvbnRTaXplLCAzMDApO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgXHJcbiAgICAvLyDorr7nva7ln7rlh4blrZfkvZNcclxuICAgIGlmIChcImNvbXBsZXRlXCIgPT09IGRvYy5yZWFkeVN0YXRlKSB7XHJcbiAgICAgIGRvYy5ib2R5LnN0eWxlLmZvbnRTaXplID0gMTIgKiBkcHIgKyBcInB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9jLmJvZHkuc3R5bGUuZm9udFNpemUgPSAxMiAqIGRwciArIFwicHhcIjtcclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0Rm9udFNpemUoKTtcclxuICBcclxuICAgIGZsZXhpYmxlLmRwciA9IHdpbi5kcHIgPSBkcHI7XHJcbiAgXHJcbiAgICBmbGV4aWJsZS5yZWZyZXNoUmVtID0gc2V0Rm9udFNpemU7XHJcbiAgXHJcbiAgICBmbGV4aWJsZS5yZW0ycHggPSBmdW5jdGlvbihkKSB7XHJcbiAgICAgIHZhciBjID0gcGFyc2VGbG9hdChkKSAqIHRoaXMucmVtO1xyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZCAmJiBkLm1hdGNoKC9yZW0kLykpIHtcclxuICAgICAgICBjICs9IFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYztcclxuICAgIH07XHJcbiAgXHJcbiAgICBmbGV4aWJsZS5weDJyZW0gPSBmdW5jdGlvbihkKSB7XHJcbiAgICAgIHZhciBjID0gcGFyc2VGbG9hdChkKSAvIHRoaXMucmVtO1xyXG4gIFxyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZCAmJiBkLm1hdGNoKC9weCQvKSkge1xyXG4gICAgICAgIGMgKz0gXCJyZW1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICB9KHdpbmRvdywgd2luZG93LmxpYiB8fCAod2luZG93LmxpYiA9IHt9KSk7XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==