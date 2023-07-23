// Callback é uma função que está passando como paramêtro para outra função

function sayMyName(name) {
   console.log('antes de executar a função callback')

   name()

   console.log('Depois de executar a callback')
}

sayMyName(
   () => {
      console.log('estou em uma callback')
   }
)