function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] dados incorretos tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10 ){
                //criança
                img.setAttribute('src', 'imagem/mulher-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/mulher-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idosa.png')
            }

        } else if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10 ){
                //criança
                img.setAttribute('src', 'imagem/homem-crianca.png')
                
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagem/homem-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagem/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}