import{f as a}from"./index-1a_k6eiD.js";const s=a.database(),r=s.ref("/cours");class o{getAll(){return r}create(e){return r.push(e)}update(e,t){return r.child(e).update(t)}delete(e){return r.child(e).remove()}deleteAll(){return r.remove()}}const l=new o;export{l as C};
