function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log('Pegando temperatura...')

        setTimeout(function(){
            resolve('40 na sombra')
        }, 2000);
    });
}

// USANDO A PROMISE

console.log('Código antes!')
let temp = pegarTemperatura();
console.log('Código durante!')
temp.then(function(resultado){
    console.log(resultado);
});
temp.catch(function(error){
    console.log('Eita, deu erro!')
});
console.log('Código depois!')