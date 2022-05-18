class Persona {
  static contadorPersonas = 0;

  static get MAX_objetos() {
    return 3;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;

    if (Persona.contadorPersonas < Persona.MAX_objetos) {
      this.idPersona = ++Persona.contadorPersonas;
    }else{
        console.log("se ah superado el maximo de personas");
    }
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this_apellido;
  }

  set apellido(apellido) {
    this_apellido = apellido;
  }

  nombreCompleto() {
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }

  toString() {
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde  metodo static ");
  }

  static saludar2(persona) {
    console.log(persona.nombre);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }

  nombreCompleto() {
    return super.nombreCompleto() + " " + this.departamento;
  }
}

let persona1 = new Persona("juan", "perez");
console.log(persona1.toString());
let empleado1 = new Empleado("Maria", "peres", "sistemas");
console.log(empleado1.toString());
console.log(Persona.MAX_objetos);
let empleado2=new Persona("Maraaia", "peress", "sisssstemas");
