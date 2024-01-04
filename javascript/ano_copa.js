function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }
  
  var anoCopa = 1930;
  
  while (anoCopa <= 2016) {
      mostrar("Teve copa em "+ anoCopa);
      anoCopa = anoCopa + 4;
  }