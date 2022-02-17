
Swal.fire('Siga las intrucciones');

const CLAVE_LOCALSTORAGE = "lista_tareas";
document.addEventListener("DOMContentLoaded", () => {
    let tareas = []; 
    const  $btnGuardarTarea = document.querySelector("#btnAgregarTarea"),
           $inputNuevaTarea = document.querySelector("#inputNuevaTarea");

    $btnGuardarTarea.onclick = () => {
        const tarea = $inputNuevaTarea.value;
        if (!tarea) {
            return;
        }
        tareas.push({
            tarea: tarea,
            terminada: false,
        });
       
       

        console.log(tarea);
      
        
    };

   

    
});
