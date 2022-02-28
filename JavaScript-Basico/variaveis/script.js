// tipos primitivos

//boolean
var trueOrFalse = false
console.log(typeof(trueOrFalse)) // mostra no console tipo da variavel

//number
var num1 = 1
console.log(typeof(num1))

// string (texto)
var nome = 'nome'
console.log(typeof(nome))

/*
Tipos de variaveis 
var = ela tem escopo global vai funcionar no codigo todo
let = essa tem escopo local só vai funcionar no bloco
const = escopo local no bloco e ela não pode ser alterada
*/

var escopoGlobal = 'Global'
console.log(escopoGlobal)

function escopoLocal(){
    let escopoLocalinterno = 'local'    
}

console.log(escopoGlobal, escopoLocalinterno) // escopoLocalinterno n vai aparecer pois esta dentro de um bloco


/*
Atribuição
var atribuicao = 'diana'

comparação
var comparacao = '0' == 0

comparação identica
var comparacao = '0' === 0

adição
var adição = 1 + 1
console.log(adicao)

subtração
var subtracao = 2 - 1
console.log(subtracao)

multiplicação
var multiplicacao = 2 * 3
console.log(multiplicacao)

divisão real 
var divisaoReal = 6 / 2
console.log(divisaoReal)

divisão inteira
var divisaoInteira = 5 % 2

potencia
var pot = 1 ** 10

> maior que; < menor que, >= maior ou igual, <= menor ou igual

Operadores lógicos
&& = e
|| = ou
! = não
*/


