function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }

  var numeroPensado = Math.round(Math.random() * 10);
  var tentativas = 1;

  while (tentativas <= 3) {
    var pergutanumero = parseInt(prompt("Tentativa "+ tentativas+ "* Informe um numero"));

    if (pergutanumero == numeroPensado) {
      mostrar("Você acetou o numero!");
      break;
    } else {
      mostrar("Você não acertou o numero!");
    }

    tentativas++;
  }