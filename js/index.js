function calcularNotaFinal() {
    let parcial1 = parseInt (document.getElementById("primerNota").value)
    let parcial2 = parseInt (document.getElementById("segundaNota").value)
    let parcial3 = parseInt(document.getElementById("segundaNota").value)
    
     while (true)
 {
     if (!parcial1)
     {

        warning("Una de las notas ingresadas no tiene el formato válido");


     }
     else if (!parcial2)
     {

        warning ("Una de las notas ingresadas no tiene el formato válido");

     }
     else if (!parcial3)
     {
         warning ("Una de las notas ingresadas no tiene el formato válido");
         
     }
     else
     {
         break;
     }
     return;
    } 
    
     while (true)
 {
     if (parcial1 > 30 || parcial2 > 30)
     {
        warning ("La nota del primero o segundo parcial sobrepasa del 30%");
     }
    else if (parcial3 > 40)
     {
        warning ("La nota del tercer parcial sobrepasa del 40%");
     }
     else
     {
        break;
     }
     return;  
 }

    let notaFinal = parcial1 + parcial2 + parcial3;
    
        let mensaje = "";
            if (notaFinal >= 0 && notaFinal <= 59) {
                mensaje = "Reprobado";
            } else if (notaFinal >= 60 && notaFinal <= 79) {
                mensaje = "Bueno";
            } else if (notaFinal >= 80 && notaFinal <= 89) {
                mensaje = "Muy Bueno";
            } else if (notaFinal >= 90 && notaFinal <= 100) {
                mensaje = "Sobresaliente";
            } else {
                mensaje = "Nota fuera de rango";
    }
    document.getElementById('resultado').innerText = `Nota Final: ${notaFinal} - ${mensaje}`;
    
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje
    });
}

function limpiar() {
    document.getElementById("primerNota").value = ""
    document.getElementById("segundaNota").value = ""
    document.getElementById("tercerNota").value = ""
    document.getElementById('resultado').textContent = "";
}