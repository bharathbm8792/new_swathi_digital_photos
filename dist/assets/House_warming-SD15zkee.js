import{u as P,r as d,j as s,G as m,I as x,a as u,F as h,c as I}from"./index-C8PskZjh.js";import{s as e}from"./Photo_Service.module-CQyyfQmN.js";const C="/assets/01-9KkBMk6c.jpg",v="/assets/02-DhZ_N06L.jpg",N="/assets/03-dliUAN0_.jpg",b="/assets/04-Db9beBAd.jpg",M="/assets/06-DtLgsZXI.jpg",f="/assets/07-CJM6dOop.jpg",k="/assets/08-Cchb7Xv6.jpg",B="/assets/09-DsGub_M1.jpg",_="/assets/10-L59Cm3dP.jpg",D="/assets/11-CCYWG2FQ.jpg",y="/assets/12-BVb_aIgy.jpg",L="/assets/13-Bscqln3s.jpg",E="/assets/14-BAaEJyIM.jpg",F="/assets/15-hujT5PXU.jpg",G="/assets/16-UedP9k8f.jpg",J="/assets/17-7ngTerrd.jpg",X="/assets/18-42dwFgE8.jpg",O="/assets/19-ChLM27mZ.jpg",U="/assets/20-Bs7sfaeI.jpg",q="/assets/21-CXdiPyyj.jpg",w="/assets/22-CKSb98Xu.jpg",A="/assets/23-DQ5qYr54.jpg",H="/assets/24-D4uMJ1gB.jpg",Q="/assets/25-h145EdrM.jpg",S="/assets/26-5Myi9Qth.jpg",W="/assets/27-CbJ085eM.jpg",Y="/assets/28-ClLHYXqP.jpg",Z="/assets/29-B6_xWwOt.jpg",K="/assets/30-CU7v4cCh.jpg",T="/assets/31-lEDamurR.jpg",R="/assets/32-DML8Fnt9.jpg",V="/assets/33-BqK3QF0J.jpg",z="/assets/34-ZYwOtWUi.jpg",$="/assets/35-CVuPJhLA.jpg",ss="/assets/36-7CMxkOhj.jpg";function cs(){const g=P(),[a,o]=d.useState(null),t=[C,v,N,b,I,M,f,k,B,_,D,y,L,E,F,G,J,X,O,U,q,w,A,H,Q,S,W,Y,Z,K,T,R,V,z,$,ss],j=n=>{o(t[n])},r=()=>{o(null)},l=()=>{const c=(t.findIndex(i=>i===a)+1)%t.length;o(t[c])},p=()=>{const c=(t.findIndex(i=>i===a)-1+t.length)%t.length;o(t[c])};return s.jsxs("div",{className:e.container,children:[s.jsx("br",{}),s.jsx("button",{onClick:()=>{g("/")},className:e.home_page,children:"Go to Homepage"}),s.jsxs("p",{className:e.service_para,children:[s.jsx("span",{className:e.first_letter,children:"H"}),"ouse Warming"]}),s.jsx("div",{className:e.gallery,children:t.map((n,c)=>s.jsx("img",{src:n,alt:`Image ${c}`,onClick:()=>j(c)},c))}),a&&s.jsxs("div",{className:e.modal,children:[s.jsx("img",{src:a,alt:"Selected"}),s.jsx("button",{onClick:p,className:e.prev,children:s.jsx(m,{})}),s.jsx("button",{onClick:r,className:e.close,children:s.jsx("div",{children:s.jsx(x,{size:25})})}),s.jsx("button",{onClick:l,className:e.next,children:s.jsx(u,{})})]}),s.jsx(h,{})]})}export{cs as default};