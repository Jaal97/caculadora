//variables para obtener  el numero de Watts
let numero_w;
let num_w;
let watts;
const precio_kwh = 600;
let kwh_1;
let resultado = document.getElementById("rew");

//lanzar el boton
let enviar_a = document.getElementById("envia");
enviar_a.addEventListener("click", en_a);

//para calcular las horas al dia y al mes
let horas_dia;
let kwh_horas;
let resultado_horas = document.getElementById("total");

function en_a()
{
    //obtener los valores
    numero_w = document.getElementById("numw");
    num_w = parseInt(numero_w.value);
    watts = num_w / 1000;
    kwh_1 = watts * precio_kwh;
    resultado.innerHTML = "El consumo en kilovatios por hora es de " + " <strong> " + watts + " kWh " + " </strong>" + "<br/>" + " <br/> ";
    resultado.innerHTML += " El valor por hora de consumo es de " + "<strong> " + " $ " + kwh_1.toFixed() + " </strong> ";


}

//horas al dia
let numero_h;
let num_h;
let valor_dia;
let valor_mes;
let valor_total = 0;
//lanzar el boton de horas
let enviar_b = document.getElementById("enviah");
enviar_b.addEventListener("click", en_b);

//valor total acumulado
let resultado_valor = document.getElementById("valort")

function en_b()
{
    numero_h = document.getElementById("numh")
    num_h = parseInt(numero_h.value);
    kwh_horas = num_h * watts;
    valor_dia = kwh_horas * precio_kwh;
    valor_mes = valor_dia * 31;
    valor_total = valor_total + valor_mes;

    resultado_horas.innerHTML = " El consumo diario en " + " <strong> " + num_h + " horas " + " </strong> " + " es de " + " <strong> " +kwh_horas + " kWh " + " </strong> " + " <br/>" + " <br/>";
    resultado_horas.innerHTML += " El valor por dia es de " + " <strong> " + " $ " + valor_dia + " </srong> " + "<br/>" + "<br/> ";
    resultado_horas.innerHTML += " Finalmente el gasto total en un mes es de " + " <strong> " + " $ " + valor_mes.toFixed() + " </strong> ";

    resultado_valor.innerHTML = " El valor acumulado es de " + " <strong> " + " $ " + valor_total.toFixed() + " </strong>"
}


