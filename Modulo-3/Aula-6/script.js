let tenis = {
    marca:"Jordan",
    modelo:'Air Jordan 1',
    cw:'Obsidian',
    comprado:false,
    comprar:function(){
        this.comprado = true;
        console.log('Você comprou o produto: ' + this.modelo + ' ' + this.cw)
    },
    devolver:function(){
        if (this.comprado == true){
            console.log(`Você devolveu o produto: ${this.modelo + ' ' + this.cw}`)
        }else{
            console.log('Você não pode devolver esse produto!')
        }
        
    }
};

tenis.comprar();
tenis.devolver();


let snkrs = [
    {marca:'Jordan', modelo:'Air Jordan 1', cw:'Mocha'},
    {marca:'Nike', modelo:'Air Force 1', cw:'White'},
    {marca:'Jordan', modelo:'Air Jordan 1', cw:'Royal Toe'}
];

console.log(snkrs[0].modelo);
