function fotoBici (top, left) {
    
    document.write("<img src=' ./imagenes/patinete.png'");
    document.write("style='");
    document.write("display:block;position:absolute;");
    document.write("top:"+top+"px;");
    document.write("left:"+left+"px;'>");
    
}

fotoBici (300, 300);


function areaRombo(diagonalMayor, diagonalMenor) {

    resultado = (diagonalMayor * diagonalMenor)  / 2;
    document.write("El area de un rombo con diagonal mayor de " + diagonalMayor + " y una diagonal menor de "+ diagonalMenor+ " es ");
    document.write("<span class='");
    if(resultado > 1000) {
        document.write("class='red'");
    }
    else if (resultado < 200) {
        document.write("class='blue'");
    }
    document.write(">" + resultado + "</span> m2."); 
}

areaRombo(50,5);



function numeroPerfecto(numero) {
  sumaDivisores = 0;
  for (i = 2; i < numero; i++) {
    if (numero % i == 0) {
      sumaDivisores += i;
    }
  }
  return (numero == (sumaDivisores +1))
}
