"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[82],{9907:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(2791),r=n(9434),c=n(6907),s=n(3433),o=n(9439),i="ContactForm_form__dhl+T",l="ContactForm_formLabel__TSwxK",u="ContactForm_formName__9bHzl",m="ContactForm_formNumber__UMrmC",d="ContactForm_formBtn__qZGY3",f=n(3634),h=function(e){return e.contacts.items},_=function(e){return e.contacts.isLoading},p=function(e){return e.filter.filter},b=n(184),x=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],c=t[1],_=(0,a.useState)(""),p=(0,o.Z)(_,2),x=p[0],v=p[1],j=(0,r.I0)(),C=(0,r.v9)(h);return(0,b.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),-1!==(0,s.Z)(C).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):j((0,f.uK)({name:n,number:x})),c(""),v("")},children:[(0,b.jsxs)("label",{className:l,children:["Name",(0,b.jsx)("input",{className:u,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;c(t)}})]}),(0,b.jsxs)("label",{className:l,children:["Number",(0,b.jsx)("input",{className:m,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:x,onChange:function(e){var t=e.target.value;v(t)}})]}),(0,b.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},v={contactListItemBtn:"ContactList_contactListItemBtn__TXYnT",contactList:"ContactList_contactList__UFVCg"},j=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,r.v9)(h),(0,r.v9)(p)),t=(0,r.I0)();return(0,b.jsx)("div",{className:v.wraperContactList,children:(0,b.jsx)("ul",{className:v.contactList,children:e.map((function(e,n){return(0,b.jsxs)("li",{className:v.contactListItem,children:[e.name,": ",e.number,(0,b.jsx)("button",{type:"button",className:v.contactListItemBtn,onClick:function(){return function(e){return t((0,f.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})},C="Filter_filterName__Y2kKA",N="Filter_filterLabel__+pnW-",L=n(4808),g=function(){var e=(0,r.I0)(),t=(0,r.v9)(p);return(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:N,children:"Find contacts by Name "}),(0,b.jsx)("input",{className:C,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){e((0,L.T)(t.target.value))}})]})};function F(){var e=(0,r.I0)(),t=(0,r.v9)(_);return(0,a.useEffect)((function(){e((0,f.yF)())}),[e]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(c.B6,{children:[(0,b.jsx)(c.ql,{children:(0,b.jsx)("title",{children:"Phonebook"})}),(0,b.jsx)(x,{}),(0,b.jsx)("div",{children:t&&"Request in progress..."}),(0,b.jsx)(g,{}),(0,b.jsx)(j,{})]})})}}}]);
//# sourceMappingURL=82.45fd520d.chunk.js.map