let peso = 55
let altura = 1.47

const imc = peso / (altura * altura)

const AbaixoDoPeso = imc < 18.5
const PesoIdeal = imc > 18.5 < 24.9
const SobrePeso = imc > 25 < 29.9

let resultado
if(AbaixoDoPeso){
    console.log("Seu IMC é de: " + imc.toFixed(2) + ", VocÊ está abaixo do peso");
}else if(PesoIdeal) {
    console.log("Seu IMC é de: " + imc.toFixed(2) + ", VocÊ está no peso ideal");
}else if(SobrePeso) {
    console.log("Seu IMC é de: " + imc.toFixed(2) + ", VocÊ está no sobrepeso");
}

console.log("Seu IMC é de: " + imc.toFixed(2));