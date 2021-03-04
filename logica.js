

// detectas el fomulario por medio de una variable
 var datos = document.getElementById("data")
 
 
 // Realizas una una funcion al accionar el submit del form 
 
 datos.addEventListener('submit', function(accion)
{
     // prevengo que no se recargue la pagina 
     accion.preventDefault();
     
     // almaceno los datos del form en una variable
     
     var info = new FormData(datos)
     
     // muestro el contenido por medio de la variable.get
    
     // alert(info.get("usuario"))
     // alert(info.get("contra"))
     
     // enviar los datos por medio de fetch
     
     fetch('capturar.php',{
         
         // methodo
         method: 'POST',
         // enviar variables del form
         body: datos
         
     })
     
     
 // si es correcto entonces PROMESA THEN SI DA COMO RESULTADO TRUE ESTADO 200 YA SE CONECTO 
      
.then( res => res.json())
.then( data => {
         alert(data)
     } )     
       
        
     
})