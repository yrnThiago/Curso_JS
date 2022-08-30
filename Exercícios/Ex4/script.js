function confirme(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    var numi = Number(inicio.value)
    var numf = Number(fim.value)
    var nump = Number(passo.value)
    if(numi == 0 || numf == 0 || nump == 0 ){    
        window.alert('ERROR! Dados não inseridos!')
        res.innerHTML = 'Impossível contar!'    
    }else{
        res.innerHTML = 'Contando: '
        }
        if(numi < numf){
            for(var c = numi; c <= numf ; c += nump){
                res.innerHTML += `${c} `
            } 
        }else{
            for(var c = numi; c >= numf ; c -= nump){
                res.innerHTML += `${c} `
            }
    }
}

