(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n(16),u=n.n(c),s=n(1),o=n.n(s),i=n(4),b=n(5),l=n(6),p=n.n(l),d="/api/persons",m={getAll:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(d);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(d,t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(d,"/").concat(t),n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(d,"/").concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e){var t=e.searchName,n=e.setSearchName;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{htmlFor:"search",children:"filter shown with "}),Object(r.jsx)("input",{type:"text",name:"search",id:"search",value:t,onChange:function(e){return n(e.target.value)}})]})},j=function(e){var t=e.newName,n=e.setNewName,a=e.newNumber,c=e.setNewNumber,u=e.onSubmit;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:u,children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(r.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"number",children:"Number: "}),Object(r.jsx)("input",{type:"tel",name:"number",id:"number",value:a,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("button",{style:{display:"block"},type:"submit",children:"add"})]})})},h=function(e){var t=e.persons,n=e.searchName,a=e.remove;return Object(r.jsx)("ul",{children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(r.jsxs)("li",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return a(e.id)},children:"delete"})]},e.name)}))})},x=function(e){var t=e.message;return t?Object(r.jsx)("div",{style:"success"===t.type?{border:"2px solid green",borderRadius:"15px",color:"green",backgroundColor:"lightgray",padding:"1.5rem"}:{border:"2px solid red",borderRadius:"15px",color:"red",backgroundColor:"lightgray",padding:"1.5rem"},children:t.msg}):null},v=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),s=Object(b.a)(u,2),l=s[0],p=s[1],d=Object(a.useState)(""),v=Object(b.a)(d,2),O=v[0],w=v[1],g=Object(a.useState)(""),y=Object(b.a)(g,2),k=y[0],N=y[1],C=Object(a.useState)(null),S=Object(b.a)(C,2),F=S[0],A=S[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAll();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(i.a)(o.a.mark((function e(t){var r,a,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.some((function(e){return e.name.toLowerCase()===l.toLowerCase()}))&&(r=window.confirm("".concat(l," is already added to phonebook. do you want to replace it?"))),!r){e.next=11;break}return a=n.find((function(e){return e.name===l})),e.next=6,m.update(a.id,{name:l,number:O});case 6:u=e.sent,c(n.map((function(e){return a.id===e.id?u:e}))),A({msg:"Updated",type:"success"}),e.next=17;break;case 11:if(void 0!==r){e.next=17;break}return e.next=14,m.create({name:l,number:O});case 14:s=e.sent,c(n.concat(s)),A({msg:"Added",type:"success"});case 17:setTimeout((function(){return A(null)}),5e3),p(""),w("");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this person?")){e.next=15;break}return e.prev=2,e.next=5,m.remove(t);case 5:r=n.filter((function(e){return e.id!==t})),c(r),A({msg:"Deleted",type:"success"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),A({msg:"Failed to delete",type:"error"});case 14:setTimeout((function(){return A(null)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(x,{message:F}),Object(r.jsx)(f,{searchName:k,setSearchName:N}),Object(r.jsx)(j,{newName:l,setNewName:p,newNumber:O,setNewNumber:w,onSubmit:L}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(h,{persons:n,searchName:k,remove:D})]})};u.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.381673d6.chunk.js.map