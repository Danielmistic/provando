const para = document.createElement("p");
const darte = document.createTextNode("this is the new text");

para.appendChild(darte);

const element = document.getElementById("deb");
const child = document.getElementById("p1");
element.replaceChild(para, child);