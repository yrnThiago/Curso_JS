let valores = []
let cont = 0
let resultado = document.getElementById('res')

function adicionar(){
    let num = document.getElementById('num') 
    let tab = document.getElementById('valortab')
    if (num.value < 1 || num.value > 100){
        window.alert('Digite um número entre 1 e 100.')
    } else {
        cont++
        let numv = Number(num.value)
        let pos = valores.indexOf(numv)
        let item = document.createElement('option')
        if (pos != -1){
            window.alert(`O valor ${valores[pos]} já foi adicionado na lista!`)
        } else {
            if (cont != 0){
                valores.push(numv)
                item.innerHTML += `O valor ${numv} foi adicionado. `
                tab.appendChild(item)  
                num.value = ''
                num.focus()             
            } else{
                   item.innerHTML = ''        
            }
            if (cont == 1){
                resultado.innerHTML = '<br>'
            }            
        }  
    }     
}

function soma(n1) {
    let soma = 0
    for(let c = 0; c < valores.length; c++){
        soma += n1[c]
    }
    return soma
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Digite no mínimo um número válido. ')
    } else{
        cont = 0  
        valores.sort(function(a, b){
            return a - b;
        });
        ordem = valores
        resultado.innerHTML = `<p> Ao todo, temos ${valores.length} número(s) cadastrados.</p>`
        resultado.innerHTML += `<p> O maior número informado foi ${ordem[valores.length - 1]}.</p> `
        resultado.innerHTML += `<p> O menor número informado foi ${ordem[0]}.</p>`
        resultado.innerHTML += `<p> Somando todos os valores temos ${soma(valores)}.</p>`
        resultado.innerHTML += `<p> A média dos valores é igual a ${soma(valores) / valores.length}.</p> `
        valores = []       
    }
}

