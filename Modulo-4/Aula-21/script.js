function adicionar(nomes, ...novosNomes){
    let novoConjunto = [
    ...nomes,
    ...novosNomes
    ];

    return novoConjunto;
}   

let nomes = ['Thiago', 'Enzo'];

let outros = adicionar(nomes, 'João', 'Emily', 'Gih');

console.log(outros);