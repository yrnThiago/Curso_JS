let pessoa = {
    nome: 'Thiago',
    sobrenome: 'Ribeiro',
    idade: 19,
    social:{
        facebook: 'sdf584s',
        instagram: {
            url: '@yrnThiago',
            seguidores:1000
        }
    },
};

function pegarNomeCompleto({nome:pessoaNome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}){
    return `${pessoaNome} ${sobrenome}, Siga ${instagram} no instagram`
}
 
console.log(pegarNomeCompleto(pessoa));

