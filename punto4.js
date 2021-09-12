let energiaSableNegativo=0;
let sablesDeLuz=[2,4,-8,5,-6]

for (let i = 0; i < sablesDeLuz.length; i++) {

       if(sablesDeLuz[i]<0){
            
        energiaSableNegativo++
    
       }          
}

console.log(`La cantidad de energía negativa en los sables de luz es de: ${energiaSableNegativo}`); 
