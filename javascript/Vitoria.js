function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }

  var vitorias = parseInt(prompt("Entre com número de vitórias."));
  var empates = parseInt(prompt("Entre com o números de empates."));

  var pontos = (vitorias * 3) + empates;

  mostrar("Os Pontos do seu time é "+ pontos);

  if (pontos > 28) {
      mostrar("Seu time está melhor que o ano passado");
  } 
  if(pontos < 28) {
      mostrar("Seu time está pior que o ano passado");
  }
  if (pontos == 28){
      mostrar("Seu time está igual ao ano passado");
  }