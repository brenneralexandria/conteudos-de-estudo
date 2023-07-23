/* function() constructor

   * expressão new
   * criar um novo objeto
   * this keyword
   * 
*/

function Person(name) {
   this.name = name
}

const Brenner = new Person("Brenner")
const Maria = new Person("Maria")
console.log(Brenner)
console.log(Maria)

