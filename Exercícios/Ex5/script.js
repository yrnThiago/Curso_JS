function gerar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let numv = Number(num.value)
        tab.innerHTML = ''
        for(let a = 0; a <= 10; a++){
            let item = document.createElement('option')
            item.innerText += `${numv} x ${a} = ${numv*a}`
            item.value = `tab${a}`
            tab.appendChild(item)
        }    
    
    }
}
