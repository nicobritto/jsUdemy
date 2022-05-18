let nombreCompleto="programar";


let resultado= 1>10 ? "verdadero": "falso";
console.log(resultado)
var numer=9;
let resultadoo=(7%2==0)?"Numeroo par":"es inpar";
console.log(resultadoo);

let miNumero ="1s";
console.log( typeof miNumero);
let edad=Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("no es un numero")
}else{
    if (edad>=18) {
        console.log("puede votar");
    }else{console.log("no puede votar");}

}
let mes=3;
let estacion="";
if (mes>=1&& mes<=4) {
    estacion="invierno";
}else if(mes>4 &&mes <8){
    estacion="otoño";
}
console.log(estacion);

switch (mes) {
    case mes=1:
        estacion="numero1"
        break;
        case mes=2:
        estacion="numero2"
        break;
        case mes=3:
        estacion="numero3"
        break;

    default:
        break;
}console.log(estacion);
