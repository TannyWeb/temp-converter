var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');


function roundNum(num){
  return Math.round(num*100)/100;
}
function celciusToFahrenheitAndKelvin(){
  var cTemp = parseFloat(celciusInput.value);
  var fTemp = (cTemp * 9/5) + 32;
  var kTemp = cTemp + 237.15;

  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
};

function fahrenheitToCelciusAndKelvin(){
  var fTemp = parseFloat(fahrenheitInput.value);
  var cTemp = (fTemp - 32) * (5/9);
  var kTemp = (fTemp + 459.67) * (5/9);

  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit(){
  var kTemp = parseFloat(kelvinInput.value);
  var cTemp = kTemp = 237.15;
  var fTemp = 9/5 * (kTemp - 237) + 32;

  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
