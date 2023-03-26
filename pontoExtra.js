const notas = [10, 9, 8, 7, 6]

// .map recebe o retorno, forEarch não
// com isso, deve haver uma nova variável para receber o novo valor(nova lista/array)
                              //nota recebe /se nota for dif recebe +1
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas);