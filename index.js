const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector ("#inputPergunta")
const buttonAsk= document.querySelector ("#buttonAsk")
const respostas = [
  "certainly!",
  "sure",
  "no doubt",
  "no!",
  "yes!",
  "yes, definitely!",
  "probably",
  "ten to one",
  "probaly, not",
  "focus and ask again"
]


//clicar em ask
function fazerPergunta() {
  
 if(inputPergunta.value == "") {
 alert("digite sua pergunta")
 return
 }

const pergunta = "<div>" + inputPergunta.value + "</div>"
// gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]
respostaElement.style.opacity = 1;
//sumir a resposta depois de 3 segundos
setTimeout(function(){
  respostaElement.style.opacity = 0;

}, 3000)
}





