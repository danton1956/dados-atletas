class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calculaCategoria() {
      const idade = this.idade;
      switch (true) {  // Acho que assim o swith fica mais fácil de ler!
        case idade >= 9 && idade <= 11:    {return 'Infantil'};
        case idade === 12 || idade === 13: {return 'Juvenil'};
        case idade === 14 || idade === 15: {return 'Intermediário'};
        case idade >= 16 && idade <= 30:   {return 'Adulto'};
        default:                           {return 'Sem categoria'};
      }
    }
  
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    calculaMediaValida() {
      // Ordena as notas em ordem crescente
      const notasOrdenadas = this.notas.sort((a, b) => a - b); // Numeric sort, of course!
      // Remove a maior e a menor nota
      const notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length -1);
      // Calcula a média das notas válidas
      const mediaValida = notasValidas.reduce((acum, nota) => acum + nota, 0) / notasValidas.length;
      return mediaValida;
    }
  
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
    obtemAlturaAtleta() {
        return this.altura;
      }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calculaIMC();
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  
  // Exemplo de uso da classe Atleta
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
  
  // Testando os métodos da classe Atleta
  console.log("___Resultado do processamento___")
  console.log("Nome .......:", atleta.obtemNomeAtleta());
  console.log("Idade ......:", atleta.obtemIdadeAtleta());
  console.log("Peso .......:", atleta.obtemPesoAtleta());
  console.log("Altura .....:", atleta.obtemAlturaAtleta());
  console.log("Notas ......:", atleta.obtemNotasAtleta().join(", "));
  console.log("Categoria ..:", atleta.obtemCategoria());
  console.log("IMC ........:", atleta.obtemIMC());
  console.log("Média Válida:", atleta.obtemMediaValida());
  /*
     O código abaixo serve apenas para demostrar o calculo da Mádia Válida.
     Pode ser removido sem prejuízo ao programa.
  */
  console.log("\nAbaixo, explico o porquê do ERRO!\n")
  const notasOrd = atleta.obtemNotasAtleta().slice().sort((a,b) => a-b);
  const notasMiolo = notasOrd.slice(1, notasOrd.length -1);
  const somaNotas = notasMiolo.reduce((acum, nota) => acum + nota);
  qtdNotasValidas = notasMiolo.length;
  console.log("Notas Classificadas ..: ", notasOrd);
  console.log("Notas Miolo ..........: ", notasMiolo);
  console.log("Soma das notas válidas: ", somaNotas);
  console.log("Qtdade notas válidas .: ", qtdNotasValidas);
  console.log("Média (Soma / Qtd) ...: ", somaNotas / qtdNotasValidas);
  console.log("\n")
  console.log("O metodo sort() sem argumentos classifica alfabeticamente,");
  console.log("então as notas classificadas ficam assim:")
  const notasSortAlfa = atleta.obtemNotasAtleta().slice().sort();
  console.log("Notas com sort ERRADO .:", notasSortAlfa);
  console.log("As notas eliminadas foram então 10 e 9.34, quando");
  console.log("deverian ser eliminadas as notas 7.88 e 10!")
  console.log("Assim chegou-se ao valor (errado): 8.766666666666666 ")
