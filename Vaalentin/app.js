
"use strict";

const btnsi= document.getElementById("btnsi");
const btnno= document.getElementById("btnno");
const container= document.querySelector(".buttons");

function Aceptar(){
    alert(" 💖 Sabía que dirías que sí aunque fuera tarde. Te amo mi reina 💖 ")
}

function duplicarBtnSi(cantidad=1){

    for (let i=0; i<cantidad; i++){

        const nuevoBtnSi= btnsi.cloneNode(true);

        nuevoBtnSi.removeAttribute("id");

        nuevoBtnSi.addEventListener("click",Aceptar); 

        container.appendChild(nuevoBtnSi);
    }
}

btnsi.addEventListener("click",Aceptar);

let vecesNo=0;

btnno.addEventListener("click", () => {
    vecesNo++;

    if (vecesNo === 1) {
        btnno.value = "¿Estás segura? 🤨 ";
        return;
    }
    else if (vecesNo === 2){
        btnno.value = "¡Vamos, no seas tímida! 😏";
        return;
    }
    else{
        btnno.remove();
        duplicarBtnSi(1);
    }
    
});










