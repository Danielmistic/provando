const para = document.createElement("p");
const darte = document.createTextNode("this is the new text");

para.appendChild(darte);

const element = document.getElementById("deb");
const child = document.getElementById("p1");
/* con este metodo podemos cambiar un elemento de otro elemnto pasando como parametro
el elemnto se sera sustituirá y de segundo el que se eliminara de elemento padre*/
element.replaceChild(para, child);

alert("hola replace");