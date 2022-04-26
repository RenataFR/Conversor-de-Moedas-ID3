function Converter() {
  // getElementById - busca a Id "valor" no arquivo HTML
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  // parseFloat - converte valor escrito (string) em valor de número decimal
  // parseInt - converte valor escrito (string) em valor de número inteiro
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
