function esAmigo(num1, num2) {
    sumaDiv1 = 0;
    sumaDiv2 = 0;
    
    for (i = 1; i < num1; i++) {
      if (num1 % i === 0) { 
        sumaDiv1 += i;
        }
    }
    
    for (i = 1; i < num2; i++) {
      if (num2 % i === 0) {
        sumaDiv2 += i;
      }
    }
  
    if (sumaDiv1 === num2 && sumaDiv2 === num1) {
      return true;
    } else {
      return false;
    }
  }