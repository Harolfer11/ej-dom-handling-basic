const h1 = document.querySelector('h1');
const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const btnSuma = document.querySelector('.btnSumar');
const btnResta = document.querySelector('.btnRestar');
const btnDivision = document.querySelector('.btnDividir');
const btnMultiplicacion = document.querySelector('.btnMultiplicar');
const pResult = document.querySelector('.result');

btnSuma.addEventListener('click', sumar);
btnResta.addEventListener('click', restar);
btnMultiplicacion.addEventListener('click', multiplicar);
btnDivision.addEventListener('click', dividir);

function sumar(){
   sumaInputs = parseInt (input1.value) +  parseInt (input2.value);
   pResult.innerHTML = "El resultado es: " + sumaInputs;
}

function restar(){
    restaInputs = parseInt (input1.value) -  parseInt (input2.value);
    pResult.innerHTML = "El resultado es: " + restaInputs;
 }

 function multiplicar(){
    multiplicacionInputs = parseInt (input1.value) *  parseInt (input2.value);
    pResult.innerHTML = "El resultado es: " + multiplicacionInputs;
 }

 function dividir(){
    divisionInputs = parseInt (input1.value) /  parseInt (input2.value);
    pResult.innerHTML = "El resultado es: " + divisionInputs;
 } 