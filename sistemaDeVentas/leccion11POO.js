class Empleado{

    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles(){
        return `empleado ${this.nombre} sueldo ${this.sueldo}`
    }
}

class Gerente extends Empleado{

    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento=departamento;
    }
    obtenerDetalles(){
        return `Gerente ${super.obtenerDetalles()} ${this.departamento}`
    }

}
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log('es de tipo geremte');
        
    }
    else if (tipo instanceof Empleado) {
        console.log('es de tipo empleado');
        
    }

}

 
let gerente1= new Gerente('carlos',5000,'sistemas');
let empleado1=new Empleado('juan',3000);

imprimir(empleado1);
imprimir(gerente1);
