var idade = 20
var alfa = 'Não'
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log(`Não vota`)
} else if (idade < 18 || idade >70 || alfa == 'Não'){
        if (alfa == 'Não'){
            console.log('voto opcional, pessoa não alfabetizada')
        } else{
            console.log('voto opcional')
        }
    }else {
        console.log('Voto obrigatório')
    }

    