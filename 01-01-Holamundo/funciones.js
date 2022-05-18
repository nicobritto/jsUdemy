
let resultado=sumarTodo(5,6,7,8,9);
console.log(resultado);


function sumarTodo(){
    suma=0;
    for (let i = 0; i < arguments.length; i++) {
        suma +=arguments[i];
        
    }
return suma;
}








