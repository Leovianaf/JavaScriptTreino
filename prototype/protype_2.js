// Manipulando Arrays

// Criar um Array com construtor
// let myArray = new Array("a", "b", "c")
// console.log(myArray)

// Contar elementos de um Array
// console.log(["a","b","c"].length)
// console.log([
//     "a",
//     {type: "array"}, 
//     function() {return "alo"},
// ][2]())

// Transformar uma cadeia de caracteres em elementos de um array
// let word = "manipulação"
// console.log(Array.from(word))

let techs = ["html","css","js"]

// adcionar um item no fim
techs.push("node.js")
// adcionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1)
// encontrar a posição de um elemnto no array
let index = techs.indexOf("css")
techs.splice(index,1)

console.log(techs)