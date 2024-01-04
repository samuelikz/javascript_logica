function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }

  function calculaImc(alturaCliente, pesoCliente) {
    var imcCliente = pesoCliente / (alturaCliente * alturaCliente);
    return imcCliente;
  }

  var alturaInformada = prompt("Informe sua Altura");
  var pesoInformado = prompt("Informe o seu Peso");
  var imc = calculaImc(alturaInformada, pesoInformado);

  document.write("O IMC Calculado é "+ imc);

  if(imc < 18.5){
    mostar("Você está abaixo do recomendado");
  }
  if(imc > 35){
    mostrar("Você está acima do recomendade");
  }
  if (imc >= 18.5 && imc <= 35) {
      mostrar("Seu IMC está excelente");
  }