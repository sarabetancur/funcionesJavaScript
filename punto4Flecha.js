
let sable=[-5,-10,5,-4]
let energiaNegativa=0;

let calcularEnergiaNegativa=(sable,energiaNegativa)=>{

       for (let i = 0; i < sable.length; i++) {
              if(sable[i]<0){
               energiaNegativa++
              }          
       }
       return(energiaNegativa)
       
   }
     
console.log(`La cantidad de energía negativa es: ${calcularEnergiaNegativa(sable,energiaNegativa)} Sables`);

