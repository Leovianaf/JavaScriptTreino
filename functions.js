/* 
    Function constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const leo = new Person("Leo")
const ivo = new Person("Ivo")
console.log(leo.walk())
console.log(ivo.walk())