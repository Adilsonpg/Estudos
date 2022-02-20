function contar(){
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo= document.getElementById('txtpass')
    var res = document.getElementById('res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[Erro] Números inválidos')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo Inválido! Considerando Passo como 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c<=f; c+=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}