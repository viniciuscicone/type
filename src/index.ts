

function checaTriangulo(a:number, b:number, c:number):string {
   if (a !== b && b !== c) {
     return "Escaleno";
   } else if (a === b && b === c) {
     return "Equilátero";
   } else {
     return "Isósceles";
   }
 }

 console.log(checaTriangulo(2,2,3))
 
 function imprimeTresCoresFavoritas() {
  const cor1:string = 'azul'
  const cor2:string = 'vermelho'
  const cor3:string = 'verde'
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()


function checaAnoBissexto(ano: number):boolean {
  const cond1:boolean = ano % 400 === 0
  const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}

console.log(checaAnoBissexto(2020))


function comparaDoisNumeros(num1:number, num2:number) {
  let maiorNumero:number;
  let menorNumero:number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaDoisNumeros(9,3))


function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
  let idade:number = anoAtual - anoNascimento
  let tempoCarteira:number = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }

 console.log(checaRenovacaoRG(2022, 1995, 2016))

 const minhaFuncaoExercicio = (a:number, b:number):object => {

  const soma:number = a + b 
  const sub:number = a - b 
  const mult:number = a * b
  if (a > b) {
      const maior:number = a
      return {soma, sub, mult, maior}
  } else if(b > a) {
      const maior:number = b
       return {soma, sub, mult, maior}
  }

}

console.log(minhaFuncaoExercicio(5, 10))


function reverse(s:string):string {
  return s.split('').reverse().join('');
}


console.log(reverse('vinicius'))