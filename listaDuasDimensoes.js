              //  0
const alunos = [`João`, `Juliana`, `Caio`, `Ana`]
                      // 0
const mediasDosAlunos = [10, 7, 9, 6]


                        //  0           1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

                //pegar em 0(alunos) 0(primeiro aluno) - na nota(1) pegou a primeira(0)
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)