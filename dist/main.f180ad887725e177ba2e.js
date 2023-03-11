(()=>{"use strict";var e={};function t(){const e=document.querySelector("#project-container"),t=document.querySelector("#add-project-container");e===document.querySelector(".invisible")?(e.classList.remove("invisible"),t.classList.add("invisible")):(e.classList.add("invisible"),t.classList.remove("invisible"))}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class n{constructor(e){this.todos=[],this.name=e}newTodo(e){this.validateTodo(e.title)?this.todos.push(e):console.error("Todo cannot be the same name!")}removeTodo(e){this.todos.splice(e,1)}validateTodo(e){let t=!0;return this.todos.forEach((n=>{n.title===e&&(t=!1)})),t}updateTodo(e,t){this.todos[e]=t}switchCompleted(e,t){this.todos[e].completed=t}get allTodos(){return this.todos}}function o(e){for(;e.firstChild;)e.removeChild(e.firstChild)}const c=e.p+"images/9f9e201f201fcbd3a563.svg",s=e.p+"images/8f4e7408c9b51b024940.svg";function a(e){const t=document.querySelector("#projects"),n=document.querySelector(".selected").innerText;o(t),e.forEach((e=>{const o=document.createElement("div");o.classList.add("menu-option"),n===e.name&&o.classList.add("selected");const a=document.createElement("img");a.src=c,a.alt="Project";const r=document.createElement("p");r.textContent=e.name;const d=document.createElement("img");d.src=s,d.alt="Delete Project",d.classList.add("close-project"),o.append(a,r,d),t.appendChild(o)}))}function r(e){document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected")}function d(){const e=document.querySelector("#add-task-button"),t=document.querySelector("#add-task-container");e===document.querySelector(".invisible-task")?(e.classList.remove("invisible-task"),t.classList.add("invisible-task")):(e.classList.add("invisible-task"),t.classList.remove("invisible-task"))}const i=e.p+"images/a2bf07c1a4d569b91b7a.svg",l=e.p+"images/87a08b56445985759f5e.svg";function u(e,t){document.getElementById("task-heading").textContent=t;!function(e){const t=document.querySelector(".task-container");o(t);let n=0;e.todos.forEach((e=>{const o=document.createElement("div");o.classList.add("task-element"),o.classList.add(e.priority),o.setAttribute("index",n);const c=document.createElement("input");c.type="checkbox",c.classList.add("checkbox"),c.checked=e.completed;const s=document.createElement("p");s.classList.add("task-title"),s.textContent=e.title;const a=document.createElement("p");a.textContent=e.date;const r=document.createElement("img");r.src=i,r.alt="Edit Task";const d=document.createElement("img");d.src=l,d.alt="Delete Task";const u=document.createElement("p");u.textContent=e.desc,o.append(c,s,a,r,d,u),t.appendChild(o),n++}))}(e.find((e=>e.name===t)))}function m(e){const t=document.querySelector(".task-container");o(t);document.querySelector("#task-heading").textContent="Inbox",e.forEach((e=>{e.todos.forEach((e=>{const n=document.createElement("div");n.classList.add("task-element"),n.classList.add(e.priority);const o=document.createElement("input");o.type="checkbox",o.classList.add("checkbox"),o.checked=e.completed,o.disabled=!0;const c=document.createElement("p");c.classList.add("task-title"),c.textContent=e.title;const s=document.createElement("p");s.textContent=e.date,s.classList.add("span-3");const a=document.createElement("p");a.textContent=e.desc,n.append(o,c,s,a),t.appendChild(n)}))}))}class p{constructor(e,t,n,o,c){this.title=e,this.desc=t,this.date=n,this.priority=o,this.completed=c}}function h(){document.querySelector("#text").value="";document.querySelector("#date").value="";document.querySelector("#selected").value="low";document.querySelector("#desc").value=""}function v(){h();const e=document.querySelector("#add-task-button"),t=document.querySelector("#add-task-container");e.classList.remove("invisible-task"),t.classList.add("invisible-task")}const f=document.getElementById("addButton");function y(e){localStorage.setItem("projects",JSON.stringify(e))}let g=function(){const e=JSON.parse(localStorage.getItem("projects"));let t=[];return e.forEach((e=>{const o=new n(e.name);e.todos.forEach((e=>{const t=new p(e.title,e.desc,e.date,e.priority,e.completed);o.newTodo(t)})),t.push(o)})),t}();a(g),m(g);document.querySelector("#project-container").addEventListener("click",(()=>t()));document.getElementById("project-save").addEventListener("click",(()=>{const e=function(){const e=document.getElementById("project-text"),t=new n(e.value);return e.value="",t}();!function(e,t){let n=!0;return!["inbox","today","this week"].includes(e.name)&&(t.forEach((t=>{t.name===e.name&&(n=!1)})),n)}(e,g)?alert("Projects must have unique names!"):(g.push(e),t(),a(g),y(g))}));document.getElementById("project-cancel").addEventListener("click",(()=>{t()}));let k=document.querySelector("aside");k.addEventListener("click",(e=>{if("close-project"===e.target.className)return r(k.firstElementChild),function(e,t){const n=t.findIndex((t=>t.name===e));t.splice(n,1)}(e.target.previousElementSibling.textContent,g),m(g),a(g),void y(g);const t=e.target.closest(".menu-option");null!==t&&(r(t),v(),5===t.childNodes.length?(f.classList.add("invisible"),m(g)):(u(g,t.childNodes[1].textContent),f.classList.remove("invisible")))}));document.querySelector("#add-task-button").addEventListener("click",(()=>{const e=document.querySelector("#task-heading");u(g,e.textContent),d()}));document.querySelector("#cancel").addEventListener("click",(e=>{e.preventDefault(),d()}));document.querySelector("#save").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#add-task-container");if(t.checkValidity(),!t.reportValidity())return;let n=function(e){const t=document.querySelector("#task-heading").textContent,n=e.find((e=>e.name===t)),o=document.querySelector("#text").value;if(!n.validateTodo(o))return"Error";const c=document.querySelector("#date").value,s=document.querySelector("#selected").value,a=document.querySelector("#desc").value,r=new p(o,a,c,s,!1);n.newTodo(r),h()}(g);if("Error"===n)return void alert("Todos must not have the same name!");d();const o=document.querySelector("#task-heading");u(g,o.textContent),y(g)}));document.querySelector(".task-container").addEventListener("click",(e=>{if("Edit Task"===e.target.alt){if(null!==document.querySelector(".edit-task-container"))return void alert("Please close the current edit form before opening another!");v(),function(e,t,n){const c=document.querySelector("#task-heading"),s=e.find((e=>e.name===c.textContent)).todos[t],a=document.createElement("form");a.classList.add("edit-task-container");const r=document.createElement("input");r.classList.add("checkbox"),r.type="checkbox",r.checked=s.completed,r.disabled=!0;const d=document.createElement("input");d.type="text",d.setAttribute("id","text"),d.placeholder="title",d.value=s.title,d.required=!0;const i=document.createElement("input");i.type="date",i.setAttribute("id","date"),i.required=!0,i.value=s.date;const l=document.createElement("select");l.setAttribute("id","selected"),["High","Medium","Low"].forEach((e=>{const t=document.createElement("option");t.value=e.toLowerCase(),t.text=e,l.appendChild(t)})),console.log(s.priority),l.value=s.priority;const u=document.createElement("input");u.type="text",u.setAttribute("id","desc"),u.placeholder="description",u.value=s.desc;const m=document.createElement("button");m.classList.add("edit-save"),m.textContent="Save";const p=document.createElement("button");p.classList.add("edit-cancel"),p.textContent="Cancel",o(n),a.append(r,d,i,l,u,m,p),n.appendChild(a)}(g,e.target.parentElement.getAttribute("index"),e.target.closest(".task-element"))}else if("Delete Task"===e.target.alt){const t=document.querySelector("#task-heading").textContent;!function(e,t){const n=document.querySelector("#task-heading");e.find((e=>e.name===n.textContent)).removeTodo(t)}(g,e.target.parentElement.getAttribute("index")),u(g,t),y(g)}if("edit-cancel"===e.target.className){e.preventDefault();const t=document.querySelector("#task-heading");u(g,t.textContent)}if("edit-save"===e.target.className){e.preventDefault();const t=document.querySelector(".edit-task-container");if(t.checkValidity(),!t.reportValidity())return;const n=function(e,t){const n=document.querySelector(`[index='${e}']`).childNodes,o=n[0][0].value,c=n[0][1].value,s=n[0][2].value,a=n[0][3].value,r=n[0][4].value,d=new p(c,r,s,a,o),i=document.querySelector("#task-heading"),l=t.find((e=>e.name===i.textContent));if(!l.validateTodo(c)&&c!==l.todos[e].title)return"Error";l.updateTodo(e,d)}(e.target.closest(".task-element").getAttribute("index"),g);if("Error"===n)return void alert("Todos must not have the same name!");const o=document.querySelector("#task-heading").textContent;u(g,o),y(g)}"checkbox"===e.target.className&&(!function(e,t,n){const o=document.querySelector("#task-heading");t.find((e=>e.name===o.textContent)).switchCompleted(e,n)}(e.target.parentElement.getAttribute("index"),g,e.target.checked),y(g))}))})();