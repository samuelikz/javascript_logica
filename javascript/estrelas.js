function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }

 for (var linha =1; linha <= 3; linha++){
    for(var coluna =1; coluna <= 10; coluna++){
        document.write("*");
    }
    pulaLinha();
 }