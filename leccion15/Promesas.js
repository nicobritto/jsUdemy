//let miPromesa = new Promise((resolver, rechazar) => {
  //let exprecion = false;
 // if (exprecion) resolver("resolvio correcto");
 // else rechazar("se produjo un error");
//});

//miPromesa.then(
 // (valor) => console.log(valor),
  //(error) => console.log(error)
//);

//miPromesa
  //.then((valor) => console.log(valor))
  //.catch((error) => console.log(error));



  let promesa=new Promise((resolver)=> {
     // console.log('inicio promesa')
      setTimeout( ()=> resolver('saludos con promesa y timeOut'),3000 );
      //console.log('fin de promesa')
  });

  //promesa.then(valor => console.log(valor));

  //async  indica  que una funcion nos ibliga  REGRESAR una promesa
  async function miFuncionConPromesa(){
      return 'saludos con promesa y async';
  }

//  miFuncionConPromesa().then(valor=> console.log(valor));

//async con  await
//la palabra await solo la podemosutilizar dentro de una promesa y en conjunto con async
async function funcionConPromesaYawait(){
    let miPromesa=new Promise( resolver => {
         resolver('Promesa con await !!');
    });

    console.log(await miPromesa );
}

//funcionConPromesaYawait();

//promesas ,await, async ,  y setTimeOut

async function funcionConPromesaAwaitYTimeOut(){
    let miPromesa=new Promise(resolver => {
        setTimeout( () => resolver('Promesa con await y TimeOut!!'),3000 );
    });
    console.log( await miPromesa );
}
funcionConPromesaAwaitYTimeOut();



