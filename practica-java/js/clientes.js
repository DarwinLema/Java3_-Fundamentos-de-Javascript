var persona ={
    "nombre":"Ana",
    "apellido":"Paz",
    "edad":32,
    "cedula":1714032789,
    "direccion":"San Juan",
    "correo":"apaz@gmail.com"
}
function saludo(){ //La funcion saludo se encarga de llamar el nombre establecido en el var
    document.write("Hola "+persona.nombre);
}
function bienvenida(nombre){ //la funcion bienvenida se encarga de llamar principalmente el nombre y el correo guardado en el var
    alert("Bienvenido"+ nombre+ "\nCorreo: "+persona.correo);
}