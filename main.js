let montoInicial;
let periodoDeInteres;
let años;
let tasaDeInteresAnual;

let resultado;
alert("Bienvenido a la calculadora de Interes Compuesto");

do{
montoInicial = Number(prompt("Ingresa el Monto Inicial"));
capPorAño = Number(prompt("Número de periodos de capitalización por año"));
años = Number(prompt("Ingresa la cantidad de años de la inversión"));
tasaDeInteresAnual = Number(prompt("Ingresa la tasa de interes anual"))/100;
}while(montoInicial < 0 || capPorAño <= 0 || años <= 0 || tasaDeInteresAnual <= 0)

for(let i = 1; i <= años; i++){

  resultado = Math.round(montoInicial * Math.pow(1 + tasaDeInteresAnual/capPorAño, capPorAño * i) - montoInicial);
  console.log("Al cabo de "+ i + " años sin contar el Monto Inicial tienes: $" + resultado);
}
