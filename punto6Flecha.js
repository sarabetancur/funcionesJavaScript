let matricularPadawan=(nombre, edad, planeta, estatura, clasificarActividad)=>{

    let padawan={
        nombre: nombre,
        edad: edad,
        planeta:planeta,
        estatura:estatura
    }

console.log(padawan);

clasificarActividad(padawan.edad)

}

matricularPadawan ("Mini Yoda", 50, "Naboo", 1.75, edad=>{
    if(edad>0 && edad<=15){
        console.log("Su actividad será el manejo de la fuerza");
    }else{
        console.log("Su actividad será manejo de sable de luz");
    }
})


