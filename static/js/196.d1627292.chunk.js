"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[196],{196:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(579);const n=e=>{let{changeFilter:t,priceFilter:a,dateFilter:n,resetFilter:c}=e;return(0,s.jsxs)("form",{children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Sort by price"}),(0,s.jsx)("input",{type:"radio",onChange:t,name:"price",checked:a})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Sort by date added"}),(0,s.jsx)("input",{type:"radio",onChange:t,name:"date",checked:n})]}),(0,s.jsx)("button",{type:"button",onClick:c,children:"Reset filter"})]})},c=e=>{let{medicine:t,addToCart:a}=e;const{image:n,name:c,price:r}=t;return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:n,alt:"medicine"}),(0,s.jsx)("p",{children:c}),(0,s.jsx)("p",{children:r}),(0,s.jsx)("button",{type:"button",onClick:()=>a(t),children:"Add to cart"})]})},r=e=>{let{medicines:t,addToCart:a}=e;return(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)(c,{medicine:e,addToCart:a},e._id)))})};var i=a(43),d=a(154);d.A.defaults.baseURL="https://medicine-delivery-app.cyclic.app/";const o=e=>{let{onSelect:t}=e;const[a,n]=(0,i.useState)([]);(0,i.useEffect)((()=>{(async()=>{const e=(e=>{const t=e.map((e=>e.shop)),a={},s=[];for(const n of t)a[n]=!0;for(const n in a)s.push(n);return s})(await(async()=>{try{const{data:e}=await d.A.get("/api/medicines");return e.data}catch(e){console.log(e.message)}})());n(e)})()}),[]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Shops:"}),(0,s.jsx)("select",{name:"shop",size:"5",onChange:e=>{t(e.target.value)},children:a.map((e=>(0,s.jsx)("option",{value:e,children:e},e)))})]})};var l=a(475),p=a(497);const h=()=>{const[e,t]=(0,l.ok)(),[a,c]=(0,i.useState)([]),h=e.get("shop"),[u,m]=(0,i.useState)(!1),[j,x]=(0,i.useState)(!1),[g,y]=(0,i.useState)((()=>{var e;return null!==(e=JSON.parse(window.localStorage.getItem(p.A)))&&void 0!==e?e:[]}));(0,i.useEffect)((()=>{if(!h)return;(async()=>{const e=await(async(e,t,a)=>{let s="shop=".concat(e);t&&(s+="&sortByPrice=asc"),a&&(s+="&sortByDate=asc");try{const{data:e}=await d.A.get("/api/medicines/search?".concat(s));return e.data}catch(n){console.log(n.message)}})(h,u,j);c([...e])})()}),[h,u,j]);(0,i.useEffect)((()=>{window.localStorage.setItem(p.A,JSON.stringify(g))}),[g]);return(0,s.jsxs)("main",{children:[(0,s.jsx)(o,{onSelect:e=>{t({shop:e})}}),(0,s.jsx)(n,{changeFilter:e=>{switch(e.target.name){case"price":m(!0),x(!1);break;case"date":x(!0),m(!1);break;default:return}},priceFilter:u,dateFilter:j,resetFilter:()=>{x(!1),m(!1)}}),(0,s.jsx)(r,{medicines:a,addToCart:e=>{g.some((t=>t._id===e._id))||y((t=>[...t,{...e,amount:1}]))}})]})}},497:(e,t,a)=>{a.d(t,{A:()=>s});const s="medicines"}}]);
//# sourceMappingURL=196.d1627292.chunk.js.map