class Producto {
  static contadorProducto = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;
  static MAXPRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    //this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this.idOrden;
  }
  agregarProducto(producto) {
    if (this._productos.length < Orden.MAXPRODUCTOS()) {
      this._productos.push(producto);

    } else {
      console.log("maximo de productos superados");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productosOrden = "";
    for (let producto of this._productos) {
      productosOrden += '\n ' +producto.toString() + ' ' ;
    }
    console.log(
      `Orden : ${ this._idOrden} total $${this.calcularTotal()} , PRODUCTOs ${productosOrden}`
    );
  }
}

let producto1 = new Producto("pantalon", 200);
let producto2 = new Producto("camisitA", 100);
let producto3 = new Producto("cinto", 300);

 let orden1=new Orden();
 let orden2=new Orden();
 orden1.agregarProducto(producto1);
 orden1.agregarProducto(producto2);
orden2.agregarProducto(producto3);

 orden1.mostrarOrden();
 orden2.mostrarOrden();