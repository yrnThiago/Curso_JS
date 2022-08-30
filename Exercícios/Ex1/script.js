function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var time = document.querySelector("div")
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>` 
    if (hora >= 0 && hora < 12) {
        // Bom Dia! 
        img.src = 'fotomanha.png' 
        document.body.style.background = '#fcbe9f'
    }else if (hora >= 12 && hora <18) {
        // Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#e0ad72'
    }else {
        // Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#001217'
    }
}
