!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=()=>'\n        <div class="header-main">\n            <div class="header-logo">\n                <a href="/">Estadisticas del Covid-19</a>\n            </div>\n            <div class="header-nav">\n                <a href="/">\n                    Inicio\n                </a>\n                <a href="#/About/">\n                    About\n                </a>\n                <a href="#/Contact/">\n                    Contacto\n                </a>\n            </div>\n        </div>        \n    ';const r="https://covid-193.p.rapidapi.com/",s={headers:{"x-rapidapi-key":"58fd6b4dc2mshacd0d0bea5d0fa7p12173cjsn6400e572a1eb","x-rapidapi-host":"covid-193.p.rapidapi.com"}};var o=async e=>{let n=await(async()=>{try{const e=await fetch("https://covid-193.p.rapidapi.com/countries",s);return await e.json()}catch(e){console.log("fetch error")}})();e&&(n.response=n.response.filter(n=>n.toLowerCase().indexOf(e.toLowerCase())>-1));return`\n        <div class="countries">\n            <p>Consulta las estadisticas del Covid-19 segun tu pais</p>\n            <div class="countries__search">\n                <input id="input_search" placeholder="Ingresa tu pais"></input>\n                <button id="btn_search" type="button">Buscar</button>\n            </div>            \n            ${n.response.map(e=>`\n                <article class="country-item">\n                    <a href="#/${e}/">\n                        <h2>${e}</h2>\n                    </a>\n                </article>\n            `).join("")}\n        </div>\n    `};var i=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=()=>'\n        <div class="error404">\n            <h2>Error 404, Pagina No encontrada...</h2>\n        <div/>\n    ';var d=e=>{if("about"===e||"contact"===e)return null;return"/"===e?e:"/:country"};const u={"/":o,"/:country":async()=>{const e=i(),n=await(async e=>{const n=e?`${r}statistics?country=${e}`:null;try{const e=await fetch(n,s);return await e.json()}catch(e){console.log("fetch error")}})(e);return`\n        <div class="countries-inner">\n            <article class="countries-card">\n                <h2>${n.response[0].country}</h2>\n            </article>\n            <article class="countries-card">\n                <div class="countries__details">\n                    <p>Casos confirmados: </p>\n                    <h3>${n.response[0].cases.total}</h3>\n                </div>\n                <div class="countries__details">\n                    <p>Casos activos:</p>\n                    <h3>${n.response[0].cases.active}</h3>\n                </div>\n                <div class="countries__details">    \n                    <p>Recuperados:</p>\n                    <h3>${n.response[0].cases.recovered}</h3>\n                </div>\n                <div class="countries__details">    \n                    <p>Muertes:</p>\n                    <h3>${n.response[0].deaths.total}</h3>\n                </div>\n                <h3 class="fecha">${n.response[0].day}</h3>\n            </article>\n        </div>\n    `}},l=async(e,n)=>{const t=document.getElementById("header"),r=document.getElementById("content");t.innerHTML=await a();let s=i(),p=await d(s),h=u[p]?u[p]:c;n?(h=o(n),r.innerHTML=await h):r.innerHTML=await h(),document.getElementById("input_search")&&(document.getElementById("input_search").addEventListener("keyup",(function(e){13===e.keyCode&&(async e=>{l(void 0,document.getElementById("input_search").value)})()})),document.getElementById("btn_search").addEventListener("click",(function(){(async e=>{l(void 0,document.getElementById("input_search").value)})()})))};var p=l;window.addEventListener("load",p),window.addEventListener("hashchange",p)}]);