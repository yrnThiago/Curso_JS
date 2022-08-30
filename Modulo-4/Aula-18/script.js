let info = ['Thiago Ribeiro', 'Thiago', 'Ribeiro', '@yrnThiago'];
let [nomeCompleto, ,, instagram] = info;
console.log(nomeCompleto, instagram);


let [a=1, b=1] = [, 'TesteB'];
console.log(a, b);


function criar(){
    return [1,2,3];
}
let [q,w,e] = criar();
console.log(q,w,e);
