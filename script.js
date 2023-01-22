const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // quando clicar no botão ele vai disparar essa função criada abaixo
form.addEventListener("change", save) // sempre que tiver uma alteração ele deverá salvar, vamos criar essa função

function add() {
  // function add serve para criar a função para o add e funcionar o que está embaixo
 // const today = "02/01" // apos clicar ele vai salvar a data que eu colocar aqui
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //após clicar em add ele vai criar uma data do dia de hoje para a variavel today
  const dayExists = nlwSetup.dayExists(today) // ele vai pegar o nlwSetup e vai verificar se o today existe que é a linha acima se existir o valor vai ser true e se não existir vai ser false, se for false ele não entra o codigo if abaixo, e vai direto para o addday(today) para adicionar o dia

  if (dayExists) {
    alert("ESSA DATA JÁ FOI INCLUIDA ⛔")
    return //o codigo para aqui, toda function que encontrar essa palavra return o codigo para nela
  }
  alert("ADICIONADO COM SUCESSO 🆗")
  nlwSetup.addDay(today) // serve para adicionar o dia quando clicar
}

function save() {
  console.log(nlwSetup.data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
