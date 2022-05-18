"use strict";

try {

 let  x = 10;
 throw 'mi error';

} catch (error) {
  console.log(error);
}
finally{
    console.log('termina la revicion de errores')
}
console.log("continuamos");

let resultado='';
try{
    //  x=10;
    if(isNaN(resultado)) throw 'no es un numero';
    else if(resultado==="")throw 'es cadena vacia';
    else if(resultado >=0)throw 'valor positivo';
    else if(resultado <0)throw 'valor negativo'

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}