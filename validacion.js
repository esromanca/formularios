function Valida(formulario) {
	/* Validación de campos NO VACÍOS */
	if ((formulario.nombre.value.length == 0) || (formulario.apellido1.value.length ==0) || (formulario.apellido2.value.length ==0) || (formulario.dni.value.length ==0) || 		(formulario.email.value.length ==0)) 
		{
            alert('Falta información');
            document.getElementById("mensajes").innerHTML="<h2>Rellenar todos los campos</h2>"
            return false;
        	}
	/* validación del DNI O NIE */
         var erdni=/(^([0-9]{8,8}[A-Z]))|(^[A-Z][0-9]{8,8})/;
         if (!(erdni.test(formulario.dni.value))) 
		{
	         alert('Contenido del dni no es un DNI válido.');
             document.getElementById("mensajes").innerHTML="dni erroneo";
             document.getElementById("mensajes").style.color="red";
        	 return false;  
		}
	/* validación del e-mail */
          var ercorreo=/\w+([\.-]{0,1}\w+)*@educa.madrid.org/;       
          if (!(ercorreo.test(formulario.email.value))) 
	  	{
              	alert('Contenido del email no es un correo electrónico válido.');
              	return false; 
	   	}
          /* si no hemos detectado fallo devolvemos TRUE */
return true;
}
