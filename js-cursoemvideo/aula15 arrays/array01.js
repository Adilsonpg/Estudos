var num = [5, 8, 2, 9, 3] // Declaração do vetor ja adicionando dados
    console.log('Trabalhando com vetores: ')
    console.log(`Vetor ${num}`) // Mostra vetor no console
    console.log(`Nosso vetor tem ${num.length} posições`) // Mostra a quantidade de posições do vet
    console.log(`posição 0 do nosso vetor é ${num[0]}`) // Mostra a posição inicial do vetor
    num.sort() // coloca os valores do vetor em ordem crescente
    num.push(1) // adiciona valor no vetor em uma nova posição (no final)
    console.log('Após usar num.sort e num.push')
    console.log(`Vetor ${num}`) // Mostra vetor no console
    console.log(`Nosso vetor tem ${num.length} posições`) // Mostra a quantidade de posições do vet
    console.log(`posição 0 do nosso vetor é ${num[0]}`) // Mostra a posição inicial do vetor
     /*for para mostrar o conteúdo do vetor
        for(var cont=0;cont<num.length;cont++){
         console.log(`Conteúdo da posição ${cont} do nosso vetor é ${num[cont]}`)
    }*/
    // for mais especifico para vetores

    for (var c in num){
        console.log(`Conteúdo da posição ${c} do nosso vetor é ${num[c]}`)
    }

    let pos = num.indexOf(3) // indexOf chama o numero dentro da posição atribuida
    console.log(`O valor 3 está na posição ${pos}`)
