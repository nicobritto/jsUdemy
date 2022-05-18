"use strict"

class dispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends dispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: ${this._idRaton} ,Tipo Entrada ${this._tipoEntrada}, ${this._marca}`;
  }
}

class Teclado extends dispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return ` Teclado : ${this._idTeclado} tipo entrada: ${this._tipoEntrada} marca ${this._marca}`;
  }
}

class Monitor {
  static contadorMonitor = 0;
  constructor(marca, tamaño) {
    this._marca = marca;
    this._tamaño = tamaño;
    this._idMonitor = ++Monitor.contadorMonitor;
  }

  get idMonitor() {
    return this._idMonitor;
  }
  toString() {
    return `Marca: ${this._marca} tamaño: ${this._tamaño} id: ${this._idMonitor}`;
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
  toString() {
    return ` \n computadora: ${this._idComputadora} ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
  }
}

class Orden {
  static numeroOrden = 0;

  constructor() {
    this._idOrden = ++Orden.numeroOrden;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasOrden = "";

    for (let compu of this._computadoras) {
      computadorasOrden += "\n" + compu.toString() + "";
    }
    console.log(`Orden: ${this._idOrden} computadora: ${computadorasOrden}`);
  }
}

let raton1 = new Raton("usb", "Hp");
console.log(raton1.toString());
let raton2 = new Raton("blue", "Smart");
console.log(raton2.toString());

let teclado1 = new Teclado("usb", "hp");
let teclado2 = new Teclado("usb", "loquesea");
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor("hp", 19);
let monitor2 = new Monitor("sony", 17);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
let computadora2 = new Computadora("HP2", monitor2, raton2, teclado2);
console.log(computadora1);
console.log(`${computadora2}`);


let orden1=new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

