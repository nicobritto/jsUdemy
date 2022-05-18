class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas;
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  toString() {
    return (
      this._nombre +
      " " +
      this._apellido +
      " " +
      this._edad +
      " " +
      this._idPersona
    );
  }
}
class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre,apellido,edad,fechaRegistro) {
      super(nombre,apellido,edad);
    this.idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  get idCliente() {
    return this.idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaResgistro) {
    this._fechaRegistro = fechaResgistro;
  }

  toString(fechaRegistro) {
    return super.toString() + " " + this._fechaRegistro + " " + this.idCliente;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this.sueldo;
  }
  set sueldo(sueldo) {
    this.sueldo = sueldo;
  }

  toString() {
    return super.toString()+" ",this._idEmpleado+" "+this._sueldo;
  }
}

//---------------------------------------------------
let persona1 = new Persona("juan", "perez", 32);
console.log(persona1);

let persona2 = new Persona("carlos", "mario", 25);

let empleado1=new Empleado('karla','gomez','25',145000 );
let empleado2=new Empleado('laura','gomez','32',149000 );

console.log(empleado1);

console.log(empleado2);