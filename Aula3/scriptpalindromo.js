const frase = document.getElementById("InputPalindromo");

function palindromo(frase) {
  let resultado = 'A frase "' + frase + '" \n';

  let fraseOriginal = frase.toLowerCase();

  
  let letrasEspacios = fraseOriginal.split("");
  let arregloSinEspacios = letrasEspacios.filter((n) => n !== " ");
  let letras = arregloSinEspacios.map((n) => n);
  let letrasReves = arregloSinEspacios.reverse();
  var iguales = true;

  for (i in letras) {
    if (letras[i] == letrasReves[i]) {
    } else {
      iguales = false;
      break;
    }
  }
  if (iguales) {
    resultado += " é um palindromo";
  } else {
    resultado += " não é um palindromo";
  }

  return resultado;
}

function validar() {
  alert(palindromo(frase.value));
}