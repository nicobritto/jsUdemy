

//let miFuncionFlecha= () =>{
  //  console.log("saludos desde mi funcion flecha");
//}
const miFuncionFlecha=()=>console.log("saludos desde mi funcion flecha");
miFuncionFlecha();

const saludar =() =>{
    return 'saludos desde funcion flecha';
}

console.log(saludar());


//const funcionConParametros=(mensaje)=>console.log(mensaje);
const funcionConParametros= mensaje =>console.log(mensaje);//con un solo parametro no hace falta parentesis


funcionConParametros("saludos con parametros");

