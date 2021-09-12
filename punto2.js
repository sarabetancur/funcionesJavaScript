/*let codigoNave="ARQ255:Sara";
let cajones=codigoNave.split(":");
console.log(cajones[1]);*/

function obtenerNombre(codigoNave){
    return(codigoNave.split(":"));
}
console.log(`El nombre del conductor de la nave ARQ2555 es: ${obtenerNombre("ARQ2555:Sara Bel-Sun")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2556 es: ${obtenerNombre("ARQ2556:Nodin Chavdrin")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2557 es: ${obtenerNombre("ARQ2557:Finn")[1]}`);