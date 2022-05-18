function mifuncion1(){
    console.log('mi funcion1');
}

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,callback){
    let res=op1+op2;
    callback(`resultado ${res}`);
}
sumar(2,3,imprimir);

//llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludos asincrono despues  de 3 segundos');
}
setTimeout(miFuncionCallback,3000);//se ejecuta despues de 3 segundos
//set time pout con funcion flehca
setTimeout( ()=>console.log('saludo asincrono 4 segundos'),4000);