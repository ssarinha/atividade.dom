//queryselector- seleciona os números e faz o calculo

var paciente = document.querySelector('#primeiro-paciente');

var valorPeso = paciente.querySelector('.info-peso')
var peso = parseInt(valorPeso.textContent);
console.log (peso)

var valorAltura = paciente.querySelector('.info-altura');
var altura = parseInt(valorAltura.textContent);
console.log (altura)

var valorGordura = paciente.querySelector('.info-gordura');
var gordura = parseInt(valorGordura.textContent);
console.log (gordura)

var valorIMC = parseInt((peso + altura + gordura)/3);
console.log (valorIMC)

var subIMC = paciente.querySelector ('.info-imc')
subIMC.textContent = valorIMC


//
var paciente = document.querySelector('#João');

var valorPeso = paciente.querySelector('.info-peso')
var peso = parseInt(valorPeso.textContent);
console.log (peso)

var valorAltura = paciente.querySelector('.info-altura');
var altura = parseInt (valorAltura.textContent);
console.log (altura)

var valorGordura = paciente.querySelector('.info-gordura');
var gordura = parseInt(valorGordura.textContent);
console.log (gordura)

var valorIMC = parseInt((peso + altura + gordura)/3);
console.log (valorIMC)

var subIMC = paciente.querySelector ('.info-imc')
subIMC.textContent = valorIMC

//
var paciente = document.querySelector('#Erica');

var valorPeso = paciente.querySelector('.info-peso')
var peso = parseInt(valorPeso.textContent);
console.log (peso)

var valorAltura = paciente.querySelector('.info-altura');
var altura = parseInt(valorAltura.textContent);
console.log (altura)

var valorGordura = paciente.querySelector('.info-gordura');
var gordura = parseInt(valorGordura.textContent);
console.log (gordura)

var valorIMC = parseInt((peso + altura + gordura)/3);
console.log (valorIMC)

var subIMC = paciente.querySelector ('.info-imc')
subIMC.textContent = valorIMC

//
var paciente = document.querySelector('#Douglas');

var valorPeso = paciente.querySelector('.info-peso')
var peso = parseInt(valorPeso.textContent);
console.log (peso)

var valorAltura = paciente.querySelector('.info-altura');
var altura = parseInt(valorAltura.textContent);
console.log (altura)

var valorGordura = paciente.querySelector('.info-gordura');
var gordura = parseInt(valorGordura.textContent);
console.log (gordura)

var valorIMC = parseInt((peso + altura + gordura)/3);
console.log (valorIMC)

var subIMC = paciente.querySelector ('.info-imc')
subIMC.textContent = valorIMC

//
var paciente = document.querySelector('#Tatiana');

var valorPeso = paciente.querySelector('.info-peso')
var peso = parseInt(valorPeso.textContent);
console.log (peso)

var valorAltura = paciente.querySelector('.info-altura');
var altura = parseInt(valorAltura.textContent);
console.log (altura)

var valorGordura = paciente.querySelector('.info-gordura');
var gordura = valorGordura.textContent;
console.log (gordura)

var valorIMC = parseInt((peso + altura + gordura)/3);
console.log (valorIMC)

var subIMC = paciente.querySelector ('.info-imc')
subIMC.textContent = valorIMC
