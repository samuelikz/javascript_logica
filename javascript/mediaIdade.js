function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }
  
  var totalFamiliares = parseInt(prompt("Quantidade de Familiares"));
  var numero = 1;
  var totalIdades = 0;

  while (numero <= totalFamiliares) {
      var idade = parseInt(prompt("Informe a idade do familiar:"));
      totalIdades = totalIdades + idade;
      numero ++;
  }

  var mediaDasIdades = totalIdades/totalFamiliares;
  mostrar("A média das idades dos familiares é " + mediaDasIdades);
