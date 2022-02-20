function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <=12) {
        //Dia
        img.src = 'imagem/manha.png'
        document.body.style.background = 'rgb(243, 234, 151)'
    } else if (hora >= 12 && hora <= 18){
        //Tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = 'rgb(238, 181, 58)'
    } else {
        //Noite
        img.src = 'imagem/noite.png'
        document.body.style.background = 'rgb(163, 162, 159)'
    }

}