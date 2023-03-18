alert("Esto es piedra, papel o tijeras!!!");
let eleccion;
let stop = true;
while (stop) {
    eleccion = prompt("Que saca?. Piedra, papel o tijeras?");
    eleccion = eleccion.toLocaleLowerCase();
    if( eleccion == 'piedra' || eleccion == 'papel' || eleccion == 'tijeras' ){
        let random = parseInt(Math.random() * (4 - 1) + 1);
        //1 representa piedra, 2 representa papel y 3 representa tijeras
        switch (eleccion){
            case 'piedra':
                if(random == 1){
                    alert("Fue un empate :D");
                }
                else if(random == 2){
                    alert("Ganaste!!");
                }
                else if(random == 3){
                    alert("Perdiste JAJAJA!!");
                }
                break;
            case 'papel':
                if(random == 1){
                    alert("Ganaste!!");
                }
                else if(random == 2){
                    alert("Fue un empate :D");
                }
                else if(random == 3){
                    alert("Perdiste JAJAJA!!");
                }
                break;
            case 'tijeras':
                if(random == 1){
                    alert("Perdiste JAJAJA!!");
                }
                else if(random == 2){
                    alert("Ganaste!!");
                }
                else if(random == 3){
                    alert("Fue un empate :D");
                }
                break;
        }
        stop = confirm("Jugamos otra vez?");
    }
    else {
        alert(eleccion+" no esta permitido >:(");
        eleccion = prompt("Que saca?. Piedra, papel o tijeras?");
    }
}