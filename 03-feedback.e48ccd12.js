function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(h,t),c?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function w(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=T(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let j={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.email.value=e.email?e.email:"",y.message.value=e.message?e.message:"",j.email=e.email,j.message=e.message)}(),y.addEventListener("input",e(t)((function(e){e.target.value&&(j[e.target.name]=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){if(""===j.email||""===j.message)return void alert("Зверніть увагу на незаповнені поля ");e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j),j={email:"",message:""}}));
//# sourceMappingURL=03-feedback.e48ccd12.js.map