// Cryptografar , Descryptografar Copiar
// variavel de seleção
// input chamando o  id do textarea

const text = document.querySelector(".textarea");
// .couter chamando a classe
const mensagem = document.querySelector(".mensagem");


// mudança de modo (entre contagem de caracteres e palavras)

function btnCryptografar() {
  const textoCriptografado = cryptografar(text.value);
  verificar();
  mensagem.value = textoCriptografado;

  text.value = "";
}
function cryptografar(mensagemCriptografada) {
  let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  mensagemCriptografada = mensagemCriptografada.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
      if (mensagemCriptografada.includes(codigo[i][0])) {
        mensagemCriptografada = mensagemCriptografada.replaceAll(codigo[i][0], codigo[i][1]);
      }
  }

  return mensagemCriptografada;
}

function btnDescryptografar() {
  const textoDriptografado = descryptografar(text.value);
  verificar();
  mensagem.value = textoDriptografado;

  text.value = "";
}

function descryptografar(mensagemDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  mensagemDesencriptada = mensagemDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
      if (mensagemDesencriptada.includes(matrizCodigo[i][1])) {
          mensagemDesencriptada = mensagemDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
  }

  return mensagemDesencriptada;
}
function btnCopiar() {
  const textoCopiado = mensagem.value;
  verificar();
  text.value = textoCopiado;
  mensagem.value = "";
}
function verificar() {
  mensagem.value = text.value;

  if (window.matchMedia("(max-width: 767px)").matches) {
      mensagem.style.backgroundImage = 'none'; 
  } else {
      if (mensagem.value.trim() !== '') {
          mensagem.style.backgroundImage = 'none';
      } else {
          mensagem.style.backgroundImage = 'url(../image/imagem.png)';
      }
  }
}

function validaBtnCryptografar() {
  if (text.value !== " ") {
    btnCryptografar();
  }
}
function validaBtnDescryptografar() {
  if (text.value !== '') {
    btnDescryptografar();
  }
}

function validaBtnCopiar() {
  if (mensagem.value !== '') {
    btnCopiar();
  }
}