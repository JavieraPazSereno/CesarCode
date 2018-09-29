
cifrar = () => {
  let offset = parseInt(document.getElementById("desplazamiento").value)
  let textArea1 = document.getElementById("textArea1").value
  var resultado = cipher.encode(textArea1,offset);
  document.getElementById("textArea2").value = resultado;
  return resultado;
}

descifrar = () => {
  let offset = parseInt(document.getElementById("desplazamiento").value)
  let textArea2 = document.getElementById("textArea2").value
  var resultado = cipher.decode(textArea2,offset);
  document.getElementById("textArea1").value = resultado;
  return resultado;
}

limpiar1 = () => {
  document.getElementById("textArea1").value = '';
}

limpiar2 = () => {
  document.getElementById("textArea2").value = '';
}

document.getElementById("botonCifrar").addEventListener("click",cifrar);
document.getElementById("botonDescifrar").addEventListener("click",descifrar);