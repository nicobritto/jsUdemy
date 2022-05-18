function sumar(){
    const forma=document.getElementById('forma'); //recuperamos todo el formulario

    let operandoA=forma['operandoA'];//recuperamos el resultado de operandoA
    let operandoB=forma['operandoB'];



    let resultado=parseInt(operandoA.value) +parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado="no contiene numeros Reintentar"
    }
    console.log(`El resultado es : ${resultado}`);
    document.getElementById('resultado').innerHTML=`El resultado es : ${resultado}`;
}

function restar(){
    const  forma=document.getElementById('forma2');//recuperamos todo el formulario

    let restaA=forma['restaA'];
    let restaB=forma['restaB'];

    let resultado =parseInt(restaA.value)-parseInt(restaB.value);
    document.getElementById('resultado2').innerHTML=resultado;

}

function dividir(){
    const dividir=document.getElementById('forma3');

    let resultado=parseInt(dividir['divicion1'].value) / parseInt(dividir['divicion2'].value);
    document.getElementById('resultadoDivi').innerHTML=resultado;

}