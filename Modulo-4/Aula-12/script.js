/* Math
- .round() -> Arredondar o valor
- .floor() -> Arredondar para baixo
- .ceil() -> Arredondar para cima
- .abs() -> Valor absoluto (positivo)
- .min() -> Menor valor
- .max() -> Maior valor
- .random() -> Valor aleatório entre 0 e 1
- floor(Math.random() * X) -> Valor aleatório entre 0 e X
*/

let valor = [10, 20, 37, 61, 2, 89, 4];
let min = Math.min(...valor);
let max = Math.max(...valor);
console.log(min, max);
