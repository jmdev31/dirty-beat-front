import{C as d}from"./CoursDataService-d70WKct5.js";import{_ as a,o as r,c as n,a as o,w as i,v as u}from"./index-1a_k6eiD.js";const m={name:"add-cours",data(){return{cours:{title:"",description:"",logo:"",published:!1},submitted:!1}},methods:{saveCours(){const c={title:this.cours.title,description:this.cours.description,logo:this.cours.logo,published:!1};d.create(c).then(()=>{console.log("1 Cours A ETE CREE"),this.submitted=!0}).catch(s=>console.log(s))},newCours(){this.submitted=!1,this.cours={title:"",description:"",logo:"",published:!1}}}},p={class:"container"},b={key:0},_=o("h1",null,"Ajouter Cours",-1),f={class:"mb-3"},C=o("label",{for:"exampleFormControlInput1",class:"form-label"},"Titre du cours",-1),h={class:"mb-3"},v=o("label",{for:"exampleFormControlInput1",class:"form-label"},"Logo du cours (SRC)",-1),x={class:"mb-3"},g=o("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Description cours",-1),k={class:"mb-3"},w={key:1},y=o("h4",null,"Cours ajouté en BDD avec Succès",-1);function A(c,s,D,E,e,l){return r(),n("div",p,[e.submitted?(r(),n("div",w,[y,o("button",{class:"btn btn-success",onClick:s[4]||(s[4]=(...t)=>l.newCours&&l.newCours(...t))},"Add")])):(r(),n("div",b,[o("form",null,[_,o("div",f,[C,i(o("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>e.cours.title=t),type:"text",class:"form-control"},null,512),[[u,e.cours.title]])]),o("div",h,[v,i(o("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.cours.logo=t),type:"text",class:"form-control"},null,512),[[u,e.cours.logo]])]),o("div",x,[g,i(o("textarea",{"onUpdate:modelValue":s[2]||(s[2]=t=>e.cours.description=t),class:"form-control",rows:"3"},null,512),[[u,e.cours.description]])]),o("div",k,[o("button",{onClick:s[3]||(s[3]=(...t)=>l.saveCours&&l.saveCours(...t)),type:"button",class:"btn btn-outline-primary"},"Ajouter un cours")])])]))])}const V=a(m,[["render",A]]);export{V as default};
