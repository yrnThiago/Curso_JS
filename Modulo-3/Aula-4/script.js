let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari',
    function(){
        console.log('Testando 1,2,3...');
    }
];

let snkrs = [
    [{'Jordan 1': ['Obsidian', 'Mocha', 'Royal Toe']}],
    [{'Air Force 1': ['White', 'Peaceminusone 2.0']}],
    [{'Nike x Sacai': [{'LDWaffle': ['Black']}]}],
];


carros[4]();
console.log(snkrs[2][0]['Nike x Sacai'][0]['LDWaffle'][0]);
