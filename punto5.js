function calcularSalarioMensual(salarioBasico, licenciasVendidas, comision, deduccion) {

    comision=1500000*licenciasVendidas;
    nomina=salarioBasico+comision;
    deduccion=nomina*0.05;
    salarioMensusal=nomina-deduccion;
   
    return(`El salario mensual del vendedor es ${salarioMensusal}`);
}

console.log(calcularSalarioMensual(3500000,1,1500000,0.05));