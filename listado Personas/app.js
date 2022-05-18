const personas = [
    new Persona('juan','perez'),
    new Persona('Eze','lore'),
    new Persona('Maria','Borre')
];

function mostrarPersonas(){
    console.log("ejecutando mostrar personas");

    let texto="";

    for( let persona of personas){
        console.log("mostrando personas");
        texto +=`<li> ${persona._nombre}  ${persona._apellido }</li>`;
    }
    document.getElementById('personas').innerHTML=texto; 
}
function agregarPersona(){
    const forma=document.forms['formulario'];
    const nombre=forma['nombre'];
    const apellido=forma['apellido'];
    if (nombre.value!="" && apellido.value !="" ) {
     
    const persona=new Persona(nombre.value , apellido.value);
    console.log(persona);
    personas.push(persona);

    mostrarPersonas();   
    }else{console.log("no hay informacion que agregar") }
}