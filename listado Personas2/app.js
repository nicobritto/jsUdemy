const personas = [
    new Persona('Pedro','Loro'),
    new Persona('Oso','Policia'),

];

function mostrarPersonas(){
    console.log("ejecutando mostrando personas");

    let texto="";
    for(let persona of personas){
        texto+=`<li> ${persona._nombre} ${persona._apellido} </li> `;
    }
    document.getElementById('personas').innerHTML=texto;

}

function agregarPersonas(){
    const forma=document.forms['formulario'];
    const nombre=forma['nombre'];
    const apellido=forma['apellido'];

    const nuevaPer=new Persona(nombre.value, apellido.value);
    personas.push(nuevaPer);

    mostrarPersonas();

}
