function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById('txtn1')
    var resultado = document.querySelector('div#texto')
    if (ano.value.length == 0 || Number(ano.value > anoatual)) {
        window.alert('ERRO! Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
        } else if (fsex[1].checked) {
            gen = 'Mulher'
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gen} de ${idade} anos.`
    }     
}