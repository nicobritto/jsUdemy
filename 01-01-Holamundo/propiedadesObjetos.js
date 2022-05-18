function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}
Persona.prototype.telefono = "4615732"; //con prototype le podemos agregar mas atributos al objeto padre

let persona1 = new Persona("nico", "este", "es@es.com");

console.log(persona1);

console.log(persona1.telefono);

let persona11 = {
        nombre: "negro",
        apellido: "perrito",
        nombreCompleto: function () {
            
            //return  titulo+" "+this.nombre +' '+ this.apellido+" "+tel;
        }
}
let persona22={
        nombre:'miPedro',
        apellido:'lorito',
        edad:'15' 
}
console.log(persona11.nombreCompleto('Ingeniero','4615533') );
console.log(persona11.nombreCompleto.call(persona22,'ingeniero','445566666'));
