/*let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros);
*/

/*let info = {
    nome: 'Thiago',
    sobrenome: 'Ribeiro',
    idade: '19'
}

let novaInfo = {
    ...info,
    cidade: 'SJC',
    estado: 'SP',
    pais: 'Brasil'
}

console.log(novaInfo);
*/

function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status:1,
        token:'58sd4f45sdfsd65',
        data_cadastro:'27-05-2002'
    };
    return novasInfo;

}

console.log(adicionarInfo({nome:'Thiago', sobrenome:'Ribeiro'}));
