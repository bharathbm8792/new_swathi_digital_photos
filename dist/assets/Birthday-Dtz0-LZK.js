import{u as P,r as x,j as s,G as d,I as m,a as u,F as C}from"./index-C8PskZjh.js";import{s as e}from"./Photo_Service.module-CQyyfQmN.js";const I="/assets/01-JXV73E4S.jpg",h="/assets/02-D-fj2lRb.jpg",N="/assets/03-DEl9im-k.jpg",v="/assets/04-DTLNzhaq.jpg",k="/assets/05-CMieN92y.jpg",f="/assets/06-CWl9VCJX.jpg",D="/assets/07-Dt7yZVKi.jpg",B="/assets/08-D_qfo_7r.jpg",E="/assets/09-y-HfqIs7.jpg",y="/assets/10-DRVk0TTQ.jpg",V="/assets/11-CxT2VRjK.jpg",_="/assets/12-CzYkklSk.jpg",b="/assets/13-BE63BtBJ.jpg",F="/assets/14-D7KpUZw8.jpg",G="/assets/15-CtW4ZVlC.jpg",S="/assets/16-CqvfWWlj.jpg",q="/assets/17-bsN5ocFv.jpg",w="/assets/18-C0UpGIh_.jpg",R="/assets/19-CgVutkkL.jpg",T="/assets/20-DiZvYS8u.jpg",Z="/assets/21-DwQKfP85.jpg",z="/assets/22-DIAoo_5y.jpg",H="/assets/23-DHo7L1RF.jpg",K="/assets/24-BSDNB-LE.jpg",L="/assets/25-CNw1QrtF.jpg",Q="/assets/26-B1QZ7NFd.jpg",W="/assets/27-FEbHYVfC.jpg",Y="/assets/28-CEeUkEzg.jpg",J="/assets/29-B70NoBGD.jpg",U="/assets/30-CEpYF2GP.jpg",A="/assets/31-C9np_1_5.jpg",X="/assets/32-CwqVAecu.jpg",M="/assets/33-Bxyx9kmw.jpg";function ss(){const j=P(),[a,o]=x.useState(null),t=[I,h,N,v,k,f,D,B,E,y,V,_,b,F,G,S,q,w,R,T,Z,z,H,K,L,Q,W,Y,J,U,A,X,M],g=n=>{o(t[n])},l=()=>{o(null)},p=()=>{const c=(t.findIndex(i=>i===a)+1)%t.length;o(t[c])},r=()=>{const c=(t.findIndex(i=>i===a)-1+t.length)%t.length;o(t[c])};return s.jsxs("div",{className:e.container,children:[s.jsx("br",{}),s.jsx("button",{onClick:()=>{j("/")},className:e.home_page,children:"Go to Homepage"}),s.jsxs("p",{className:e.service_para,children:[s.jsx("span",{className:e.first_letter,children:"B"}),"irthday Events"]}),s.jsx("div",{className:e.gallery,children:t.map((n,c)=>s.jsx("img",{src:n,alt:`Image ${c}`,onClick:()=>g(c)},c))}),a&&s.jsxs("div",{className:e.modal,children:[s.jsx("img",{src:a,alt:"Selected"}),s.jsx("button",{onClick:r,className:e.prev,children:s.jsx(d,{})}),s.jsx("button",{onClick:l,className:e.close,children:s.jsx("div",{children:s.jsx(m,{size:25})})}),s.jsx("button",{onClick:p,className:e.next,children:s.jsx(u,{})})]}),s.jsx(C,{})]})}export{ss as default};