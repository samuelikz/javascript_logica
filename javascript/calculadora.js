function pulaLinha() {
    document.write("<br>");
  }

  function mostrar(frase) {
    document.write(frase);
    pulaLinha();
  }
  
 var multiplicador = 1;

 for(var multiplicador= 1; multiplicador <=10; multiplicador++){

  mostrar(7 * multiplicador);

 }