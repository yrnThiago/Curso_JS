/* .join(param) -> Separa a array pelo caractere no param
   .pop() -> Remove o último item
   .shift() -> Remove o primeiro item
   .push() -> Adiciona um item
   .remove(param, param) -> Remove do index até o outro param
   .concat() -> Juntar mais de uma array
   .sort() ou .reverse() -> Ordenar a array em ordem alfabeticamente ou decrescente
   .map(function) -> Item por item dentro do array
   .filter(function) -> Filtrar item por item, retorna true ou false
   .every(function) -> Verificar todos os itens, retorna true ou false
   .some(function) -> Verificar se algum item é verdadeiro
   .find() / .findIndex() -> O nome já diz
*/


let lista = [
    {nome:'Thiago', sobrenome:'Ribeiro', id:123},
    {nome:'Thi', sobrenome:'R', id:147},
    {nome:'TTT', sobrenome:'DDD', id:159}
];

let pessoa = lista.find(function(item){
    return (item.id == 111) ? true:false;
})

let res = pessoa; 

console.log(res);
