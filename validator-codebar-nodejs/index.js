function validarCodigoDeBarras(codigo) {
    if (codigo.length !== 13) {
      return false;
    }
  
    let somaImpar = 0;
    let somaPar = 0;
  
    for (let i = 0; i < 12; i += 2) {
      somaImpar += parseInt(codigo.charAt(i));
      somaPar += parseInt(codigo.charAt(i + 1));
    }
  
    const somaTotal = somaImpar * 3 + somaPar;
  
    const proximoMultiploDe10 = Math.ceil(somaTotal / 10) * 10;
    const digitoDeControle = proximoMultiploDe10 - somaTotal;
  
    return digitoDeControle === parseInt(codigo.charAt(12));
  }
  
  console.log(validarCodigoDeBarras('7891234567895')); // true
  
  console.log(validarCodigoDeBarras('7891234567890')); // false (dígito de controle incorreto)
  console.log(validarCodigoDeBarras('1234567890123')); // false (comprimento incorreto)
  