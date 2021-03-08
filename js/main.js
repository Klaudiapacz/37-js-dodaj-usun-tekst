let btnAdd = document.getElementById("dodaj");
let btnRemove = document.getElementById("usun");
var paragraph = document.getElementById("tekst");

const addText = () => {
    paragraph.innerText = "przykładowy tekst ";
   } 

const removeText = () => {
    paragraph.innerHTML='';
}

btnAdd.onclick = addText;
btnRemove.onclick = removeText;