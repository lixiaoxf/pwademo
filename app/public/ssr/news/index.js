!function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],f=0,p=[];f<s.length;f++)a=s[f],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={5:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([49,0]),n()}({2:function(e,t,n){"use strict";function r(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var i=n[r].trim();if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}function i(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}t.a=function(e,t){"serviceWorker"in navigator&&(navigator.serviceWorker.register(e,{scope:t}),navigator.serviceWorker.ready.then(function(e){console.log("1111111"),function(e){if("PushManager"in window)e.pushManager.getSubscription().then(function(t){const n={userVisibleOnly:!0,applicationServerKey:i("BBTV_sGMbDL47vda7QEleoJiiEV0iBGGHwXPeZFMgFLlr8OTFlF-l-7abUpy5bgQK70_SMVoITkNXPvm4q38pjM")};return e.pushManager.subscribe(n).then(function(e){let t=e.toJSON();fetch("/pwapush/save",{method:"POST",mode:"cors",credentials:"include",headers:{"x-csrf-token":r("csrfToken"),"content-type":"application/json"},body:JSON.stringify(t)}).then(e=>{console.log(e)})})})}(e)}),Notification.requestPermission().then(e=>{"denied"===Notification.permission&&console.log("Permission for Notifications was denied")}))}},3:function(e,t){!function(e,t){var n,r=e.document,i=r.documentElement,o=r.querySelector('meta[name="viewport"]'),a=r.querySelector('meta[name="flexible"]'),s=0,c=0,l=t.flexible||(t.flexible={});if(o)(f=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/))&&(c=parseFloat(f[1]),s=parseInt(1/c));else if(a){var u=a.getAttribute("content");if(u){var f=u.match(/initial\-dpr=([\d\.]+)/),p=u.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){var d=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),m=e.devicePixelRatio;c=1/(s=d?m>=3&&(!s||s>=3)?3:m>=2&&(!s||s>=2)?2:1:1)}if(i.setAttribute("data-dpr",s),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(o);else{var h=r.createElement("div");h.appendChild(o),r.write(h.innerHTML)}function v(){var t=i.getBoundingClientRect().width/10;i.style.fontSize=t+"px",l.rem=e.rem=t}e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(v,300)},!1),e.addEventListener("orientationchange",function(){clearTimeout(n),n=setTimeout(v,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(v,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*s+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*s+"px"},!1),v(),l.dpr=e.dpr=s,l.refreshRem=v,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},4:function(e,t,n){"use strict";n(76),n(78),n(80)},49:function(e,t,n){"use strict";n.r(t);var r=n(6);n.n(r)()(".header").html("jquery change one html lalala");n(84),n(3);var i=n(2);n(4);Object(i.a)("/sw-ssr.js","/ssr")},76:function(e,t){},78:function(e,t){},80:function(e,t){},84:function(e,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2xvYWRzdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vanMvZmxleGlibGUvcmVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3NyL25ld3MvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3NyL25ld3MvaW5kZXguanMiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCI1IiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJnZXRDb29raWUiLCJjbmFtZSIsImNhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInRyaW0iLCJpbmRleE9mIiwic3Vic3RyaW5nIiwidXJsQmFzZTY0VG9VaW50OEFycmF5IiwiYmFzZTY0U3RyaW5nIiwiYmFzZTY0IiwicmVwZWF0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsIl9fd2VicGFja19leHBvcnRzX18iLCJzdyIsInNjb3BlIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwicmVhZHkiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlT3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5Iiwic3Vic2NyaWJlIiwic3ViIiwidG9KU09OIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ4LWNzcmYtdG9rZW4iLCJjb250ZW50LXR5cGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsInB1c2hSZWdpc3RlciIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiZ3JhbnQiLCJwZXJtaXNzaW9uIiwid2luIiwibGliIiwidGltZXIiLCJkb2MiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwidnBNZXRhIiwicXVlcnlTZWxlY3RvciIsImZsZXhNZXRhIiwiZHByIiwic2NhbGUiLCJmbGV4aWJsZSIsImluaXRpYWwiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImZsZXhNZXRhQ29udGVudCIsIm1heGltdW0iLCJ0b0ZpeGVkIiwidSIsImFwcFZlcnNpb24iLCJfZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFwcGVuZENoaWxkIiwiZGl2Iiwid3JpdGUiLCJpbm5lckhUTUwiLCJzZXRGb250U2l6ZSIsImJhc2VTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdHlsZSIsImZvbnRTaXplIiwicmVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwicGVyc2lzdGVkIiwicmVhZHlTdGF0ZSIsInJlZnJlc2hSZW0iLCJyZW0ycHgiLCJ0aGlzIiwicHgycmVtIiwiJCIsImh0bWwiLCJsb2Fkc3ciXSwibWFwcGluZ3MiOiJhQUNBLFNBQUFBLEVBQUFDLEdBUUEsSUFQQSxJQU1BQyxFQUFBQyxFQU5BQyxFQUFBSCxFQUFBLEdBQ0FJLEVBQUFKLEVBQUEsR0FDQUssRUFBQUwsRUFBQSxHQUlBTSxFQUFBLEVBQUFDLEVBQUEsR0FDUUQsRUFBQUgsRUFBQUssT0FBb0JGLElBQzVCSixFQUFBQyxFQUFBRyxHQUNBRyxFQUFBUCxJQUNBSyxFQUFBRyxLQUFBRCxFQUFBUCxHQUFBLElBRUFPLEVBQUFQLEdBQUEsRUFFQSxJQUFBRCxLQUFBRyxFQUNBTyxPQUFBQyxVQUFBQyxlQUFBQyxLQUFBVixFQUFBSCxLQUNBYyxFQUFBZCxHQUFBRyxFQUFBSCxJQUtBLElBRkFlLEtBQUFoQixHQUVBTyxFQUFBQyxRQUNBRCxFQUFBVSxPQUFBVixHQU9BLE9BSEFXLEVBQUFSLEtBQUFTLE1BQUFELEVBQUFiLEdBQUEsSUFHQWUsSUFFQSxTQUFBQSxJQUVBLElBREEsSUFBQUMsRUFDQWYsRUFBQSxFQUFpQkEsRUFBQVksRUFBQVYsT0FBNEJGLElBQUEsQ0FHN0MsSUFGQSxJQUFBZ0IsRUFBQUosRUFBQVosR0FDQWlCLEdBQUEsRUFDQUMsRUFBQSxFQUFrQkEsRUFBQUYsRUFBQWQsT0FBMkJnQixJQUFBLENBQzdDLElBQUFDLEVBQUFILEVBQUFFLEdBQ0EsSUFBQWYsRUFBQWdCLEtBQUFGLEdBQUEsR0FFQUEsSUFDQUws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QmhDLEVBQUlzQyxpQkFBaUIsU0FBVSxXQUM3QkMsYUFBYXJDLEdBQ2JBLEVBQVFzQyxXQUFXVCxFQUFhLE9BQy9CLEdBS0gvQixFQUFJc0MsaUJBQWlCLG9CQUFxQixXQUN4Q0MsYUFBYXJDLEdBQ2JBLEVBQVFzQyxXQUFXVCxFQUFhLE9BQy9CLEdBS0gvQixFQUFJc0MsaUJBQWlCLFdBQVksU0FBU0csR0FDcENBLEVBQUVDLFlBQ0pILGFBQWFyQyxHQUNiQSxFQUFRc0MsV0FBV1QsRUFBYSxRQUVqQyxHQUdDLGFBQWU1QixFQUFJd0MsV0FDckJ4QyxFQUFJWixLQUFLNEMsTUFBTUMsU0FBVyxHQUFLM0IsRUFBTSxLQUVyQ04sRUFBSW1DLGlCQUFpQixtQkFBb0IsV0FDdkNuQyxFQUFJWixLQUFLNEMsTUFBTUMsU0FBVyxHQUFLM0IsRUFBTSxPQUNwQyxHQUdMc0IsSUFFQXBCLEVBQVNGLElBQU1ULEVBQUlTLElBQU1BLEVBRXpCRSxFQUFTaUMsV0FBYWIsRUFFdEJwQixFQUFTa0MsT0FBUyxTQUFTN0gsR0FDekIsSUFBSUQsRUFBSWdHLFdBQVcvRixHQUFLOEgsS0FBS1QsSUFJN0IsTUFISSxpQkFBbUJySCxHQUFLQSxFQUFFOEYsTUFBTSxVQUNsQy9GLEdBQUssTUFFQUEsR0FHVDRGLEVBQVNvQyxPQUFTLFNBQVMvSCxHQUN6QixJQUFJRCxFQUFJZ0csV0FBVy9GLEdBQUs4SCxLQUFLVCxJQUs3QixNQUhJLGlCQUFtQnJILEdBQUtBLEVBQUU4RixNQUFNLFNBQ2xDL0YsR0FBSyxPQUVBQSxHQWpKWCxDQW1KRXdCLE9BQVFBLE9BQU8wRCxNQUFRMUQsT0FBTzBELElBQU0scUNDbkp4QzFGLEVBQUEsSUFBQUEsRUFBQSxJQUFBQSxFQUFBLDZEQ0NBeUksR0FBRSxXQUFXQyxLQUFLLDREQ0dsQkMsWUFBTyxhQUFhIiwiZmlsZSI6InNzci9uZXdzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0NTogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNDksMF0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpe1xyXG4gIHZhciBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICBmb3IodmFyIGk9MDsgaTxjYS5sZW5ndGg7IGkrKykgXHJcbiAge1xyXG4gICAgdmFyIGMgPSBjYVtpXS50cmltKCk7XHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWUpPT0wKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsYy5sZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XHJcbiAgICB2YXIgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcclxuICAgIHZhciBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcclxuICAgICAgICAucmVwbGFjZSgvXFwtL2csICcrJylcclxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpO1xyXG5cclxuICAgIHZhciByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcclxuICAgIHZhciBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpICB7XHJcbiAgICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dEFycmF5O1xyXG59XHJcbmZ1bmN0aW9uIG5vdGlmaVJlZ2lzdGVyKCl7XHJcbiAgIHJldHVybiAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihncmFudCA9PiB7XHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGVybWlzc2lvbiBmb3IgTm90aWZpY2F0aW9ucyB3YXMgZGVuaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBwdXNoUmVnaXN0ZXIocmVnaXN0cmF0aW9uKXtcclxuICAgIGlmICgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykge1xyXG4gICAgICAgIHJldHVybiByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbihmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICAvLyBpZiAoc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogdXJsQmFzZTY0VG9VaW50OEFycmF5KFxyXG4gICAgICAgICAgICAgICAgICAnQkJUVl9zR01iREw0N3ZkYTdRRWxlb0ppaUVWMGlCR0dId1hQZVpGTWdGTGxyOE9URmxGLWwtN2FiVXB5NWJnUUs3MF9TTVZvSVRrTlhQdm00cTM4cGpNJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShzdWJzY3JpYmVPcHRpb25zKS50aGVuKGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViID0gc3Vic2NyaXB0aW9uLnRvSlNPTigpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goJy9wd2FwdXNoL3NhdmUnLHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtY3NyZi10b2tlbic6IGdldENvb2tpZSgnY3NyZlRva2VuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoc3ViKVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gOyAgXHJcbn1cclxuZnVuY3Rpb24gc3luYyhzd1JlZ2lzdHJhdGlvbil7XHJcbiAgICBzd1JlZ2lzdHJhdGlvbi5zeW5jLnJlZ2lzdGVyKCdxaWVTeW5jJyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3csc2NvcGUpe1xyXG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcihzdywge3Njb3BlfSlcclxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMTExMTExMScpXHJcbiAgICAgICAgICAgIHB1c2hSZWdpc3RlcihyZWdpc3RyYXRpb24pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBub3RpZmlSZWdpc3RlcigpXHJcbiAgICAgICAgLy8gdmFyIGEgPSBuZXcgTm90aWZpY2F0aW9uKCfkvIHpuYXkvZPogrLmg7PopoHmmL7npLrpgJrnn6UnLHtcclxuICAgICAgICAvLyAgICAgYm9keTon5LyB6bmF5L2T6IKy5pyJ5L2g5oOz6KaBJyxcclxuICAgICAgICAvLyAgICAgdGFnOidkaXYnLFxyXG4gICAgICAgIC8vICAgICBpY29uOidodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NTMwNzE4NTMxNDcmZGk9ODdmOTRhNWRjMWYyMGIyMmViN2RlZDFlN2Y3OTViNmUmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGZjIuZG4uYW5xdS5jb20lMkZkb3duJTJGWmpObFlRJTNEJTNEJTJGYWxsaW1nJTJGMTIwNzI4JTJGMS0xMjBIUDAzNDEyLmpwZycsXHJcbiAgICAgICAgLy8gICAgIGltYWdlOidodHRwOi8vc3RhdGljLnFpZWNkbi5jb20vc3RhdGljLW1vYmlsZS8wMzA4MTg1OS9jb21tb24vcmVzL2luZGV4L2xvZ28tbmV3LnBuZydcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG59XHJcbiIsIiEgZnVuY3Rpb24od2luLCBsaWIpIHtcclxuICAgIHZhciB0aW1lcixcclxuICAgICAgZG9jID0gd2luLmRvY3VtZW50LFxyXG4gICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudCxcclxuICBcclxuICAgICAgdnBNZXRhID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJyksXHJcbiAgICAgIGZsZXhNZXRhID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImZsZXhpYmxlXCJdJyksXHJcbiAgXHJcbiAgICAgIGRwciA9IDAsXHJcbiAgICAgIHNjYWxlID0gMCxcclxuICBcclxuICAgICAgZmxleGlibGUgPSBsaWIuZmxleGlibGUgfHwgKGxpYi5mbGV4aWJsZSA9IHt9KTtcclxuICBcclxuICAgIC8vIOiuvue9ruS6hiB2aWV3cG9ydCBtZXRhXHJcbiAgICBpZiAodnBNZXRhKSB7XHJcbiAgXHJcbiAgICAgIHZhciBpbml0aWFsID0gdnBNZXRhLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikubWF0Y2goL2luaXRpYWxcXC1zY2FsZT0oW1xcZFxcLl0rKS8pO1xyXG4gIFxyXG4gICAgICBpZiAoaW5pdGlhbCkge1xyXG4gICAgICAgIHNjYWxlID0gcGFyc2VGbG9hdChpbml0aWFsWzFdKTsgLy8g5bey6K6+572u55qEIGluaXRpYWxTY2FsZVxyXG4gICAgICAgIGRwciA9IHBhcnNlSW50KDEgLyBzY2FsZSk7IC8vIOiuvuWkh+WDj+e0oOavlCBkZXZpY2VQaXhlbFJhdGlvXHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgIC8vIOiuvue9ruS6hiBmbGV4aWJsZSBNZXRhXHJcbiAgICBlbHNlIGlmIChmbGV4TWV0YSkge1xyXG4gICAgICB2YXIgZmxleE1ldGFDb250ZW50ID0gZmxleE1ldGEuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcclxuICAgICAgaWYgKGZsZXhNZXRhQ29udGVudCkge1xyXG4gIFxyXG4gICAgICAgIHZhciBpbml0aWFsID0gZmxleE1ldGFDb250ZW50Lm1hdGNoKC9pbml0aWFsXFwtZHByPShbXFxkXFwuXSspLyksXHJcbiAgICAgICAgICBtYXhpbXVtID0gZmxleE1ldGFDb250ZW50Lm1hdGNoKC9tYXhpbXVtXFwtZHByPShbXFxkXFwuXSspLyk7XHJcbiAgXHJcbiAgICAgICAgaWYgKGluaXRpYWwpIHtcclxuICAgICAgICAgIGRwciA9IHBhcnNlRmxvYXQoaW5pdGlhbFsxXSk7XHJcbiAgICAgICAgICBzY2FsZSA9IHBhcnNlRmxvYXQoKDEgLyBkcHIpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZiAobWF4aW11bSkge1xyXG4gICAgICAgICAgZHByID0gcGFyc2VGbG9hdChtYXhpbXVtWzFdKTtcclxuICAgICAgICAgIHNjYWxlID0gcGFyc2VGbG9hdCgoMSAvIGRwcikudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyB2aWV3cG9ydCDmiJYgZmxleGlibGVcclxuICAgIC8vIG1ldGEg5Z2H5pyq6K6+572uXHJcbiAgICBpZiAoIWRwciAmJiAhc2NhbGUpIHtcclxuICAgICAgLy8gUVNUXHJcbiAgICAgIC8vIOi/memHjOeahCDnrKzkuIDlj6XmnInku4DkuYjnlKggP1xyXG4gICAgICAvLyDlkowgQW5kcm9pZCDmnInmr5vlhbPns7sgP1xyXG4gICAgICB2YXIgdSA9ICh3aW4ubmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL2FuZHJvaWQvZ2kpLCB3aW4ubmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL2lwaG9uZS9naSkpLFxyXG4gICAgICAgIF9kcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbztcclxuICBcclxuICAgICAgLy8g5omA5Lul6L+Z6YeM5Ly85LmO5piv5bCG5omA5pyJIEFuZHJvaWQg6K6+5aSH6YO96K6+572u5Li6IDEg5LqGXHJcbiAgICAgIGRwciA9IHUgPyAoKF9kcHIgPj0gMyAmJiAoIWRwciB8fCBkcHIgPj0gMykpID8gMyA6IChfZHByID49IDIgJiYgKCFkcHIgfHwgZHByID49IDIpKSA/IDIgOiAxKSA6IDE7XHJcbiAgXHJcbiAgICAgIHNjYWxlID0gMSAvIGRwcjtcclxuICAgIH1cclxuICBcclxuICAgIGRvY0VsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1kcHJcIiwgZHByKTtcclxuICBcclxuICAgIC8vIOaPkuWFpSB2aWV3cG9ydCBtZXRhXHJcbiAgICBpZiAoIXZwTWV0YSkge1xyXG4gICAgICB2cE1ldGEgPSBkb2MuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgXHJcbiAgICAgIHZwTWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XHJcbiAgICAgIHZwTWV0YS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsXHJcbiAgICAgICAgXCJpbml0aWFsLXNjYWxlPVwiICsgc2NhbGUgKyBcIiwgbWF4aW11bS1zY2FsZT1cIiArIHNjYWxlICsgXCIsIG1pbmltdW0tc2NhbGU9XCIgKyBzY2FsZSArIFwiLCB1c2VyLXNjYWxhYmxlPW5vXCIpO1xyXG4gIFxyXG4gICAgICBpZiAoZG9jRWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgIGRvY0VsZW0uZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQodnBNZXRhKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodnBNZXRhKTtcclxuICAgICAgICBkb2Mud3JpdGUoZGl2LmlubmVySFRNTCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHNldEZvbnRTaXplKCkge1xyXG4gICAgICB2YXIgd2luV2lkdGggPSBkb2NFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIFxyXG4gICAgICAvLyBpZiAod2luV2lkdGggLyBkcHIgPiAoNzUwIC8gMikpIHtcclxuICAgICAgLy8gICAod2luV2lkdGggPSAoNzUwIC8gMikgKiBkcHIpO1xyXG4gICAgICAvLyB9XHJcbiAgXHJcbiAgICAgIC8vIOagueiKgueCuSBmb250U2l6ZSDmoLnmja7lrr3luqblhrPlrppcclxuICAgICAgdmFyIGJhc2VTaXplID0gd2luV2lkdGggLyAxMDtcclxuICBcclxuICAgICAgZG9jRWxlbS5zdHlsZS5mb250U2l6ZSA9IGJhc2VTaXplICsgXCJweFwiO1xyXG4gICAgICBmbGV4aWJsZS5yZW0gPSB3aW4ucmVtID0gYmFzZVNpemU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyDosIPmlbTnqpflj6Pml7bph43nva5cclxuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoc2V0Rm9udFNpemUsIDMwMCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgXHJcbiAgXHJcbiAgICAvLyDov5nkuIDmrrXmmK/miJHoh6rlt7HliqDnmoRcclxuICAgIC8vIG9yaWVudGF0aW9uY2hhbmdlIOaXtuS5n+mcgOimgemHjeeul+S4i+WQp1xyXG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHNldEZvbnRTaXplLCAzMDApO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gIFxyXG4gIFxyXG4gICAgLy8gcGFnZXNob3dcclxuICAgIC8vIGtleXdvcmQ6IOWAkumAgCDnvJPlrZjnm7jlhbNcclxuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoZS5wZXJzaXN0ZWQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChzZXRGb250U2l6ZSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIFxyXG4gICAgLy8g6K6+572u5Z+65YeG5a2X5L2TXHJcbiAgICBpZiAoXCJjb21wbGV0ZVwiID09PSBkb2MucmVhZHlTdGF0ZSkge1xyXG4gICAgICBkb2MuYm9keS5zdHlsZS5mb250U2l6ZSA9IDEyICogZHByICsgXCJweFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvYy5ib2R5LnN0eWxlLmZvbnRTaXplID0gMTIgKiBkcHIgKyBcInB4XCI7XHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuICBcclxuICAgIHNldEZvbnRTaXplKCk7XHJcbiAgXHJcbiAgICBmbGV4aWJsZS5kcHIgPSB3aW4uZHByID0gZHByO1xyXG4gIFxyXG4gICAgZmxleGlibGUucmVmcmVzaFJlbSA9IHNldEZvbnRTaXplO1xyXG4gIFxyXG4gICAgZmxleGlibGUucmVtMnB4ID0gZnVuY3Rpb24oZCkge1xyXG4gICAgICB2YXIgYyA9IHBhcnNlRmxvYXQoZCkgKiB0aGlzLnJlbTtcclxuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGQgJiYgZC5tYXRjaCgvcmVtJC8pKSB7XHJcbiAgICAgICAgYyArPSBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgZmxleGlibGUucHgycmVtID0gZnVuY3Rpb24oZCkge1xyXG4gICAgICB2YXIgYyA9IHBhcnNlRmxvYXQoZCkgLyB0aGlzLnJlbTtcclxuICBcclxuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGQgJiYgZC5tYXRjaCgvcHgkLykpIHtcclxuICAgICAgICBjICs9IFwicmVtXCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcbiAgfSh3aW5kb3csIHdpbmRvdy5saWIgfHwgKHdpbmRvdy5saWIgPSB7fSkpO1xyXG4gICIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCAnQC9jb21wb25lbnQvdG9wL3N0eWxlL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJ0AvY29tcG9uZW50L2JvdHRvbS9zdHlsZS9pbmRleC5zY3NzJ1xyXG5cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG4kKCcuaGVhZGVyJykuaHRtbCgnanF1ZXJ5IGNoYW5nZSBvbmUgaHRtbCBsYWxhbGEnKSIsImltcG9ydCAnLi9qcy9pbmRleCdcclxuaW1wb3J0ICcuL3N0eWxlL2luZGV4LnNjc3MnXHJcbmltcG9ydCAncmVtJztcclxuaW1wb3J0IGxvYWRzdyBmcm9tICdAL2NvbW1vbi9qcy9sb2Fkc3cnO1xyXG5sb2Fkc3coJy9zdy1zc3IuanMnLCcvc3NyJylcclxuaW1wb3J0ICdAL2NvbXBvbmVudC9sYXlvdXQvaW5kZXgnIl0sInNvdXJjZVJvb3QiOiIifQ==