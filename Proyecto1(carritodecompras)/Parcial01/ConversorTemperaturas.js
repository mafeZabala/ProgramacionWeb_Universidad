/* 1.solicitar al usuario la temperatura que desea convertir y el sistema de medición original
2. solicitar al usuario a qué sistema de medición desea convertir
3. realice la conversión apropiada según las selecciones del usuario
4. muestre al usuario la temperatura original y su equivalenge en el sistema de medición sleccionado
5. pregunte al usuario si desea realizar otra conversión o salir del programa */

function converTemperatura(){
  //obtener los datos de los usuarios
  const temperatura = parseFloat(document.getElementById('Temperatura').value);
  const from = document.getElementById('From').value;//medicion de temperatura a convertir
  const to = document.getElementById('To').value;// hacia que sistema de medicion lo va a convertir
  //Realizar la conversion de la temperatura
  let converTemperatura;
  if(from === 'celsius' && to === 'fahrenheit'){
    converTemperatura = (temperatura * 9/5)+32
  }else if(from === 'celsius' && to === 'kelvin'){
    converTemperatura = temperatura + 273.15
  }else if(from === 'fahrenheit' && to === 'celsius'){
    converTemperatura = (temperatura -32)*5/9
  }else if(from === 'fahrenheit' && to === 'kelvin'){
    converTemperatura = ((temperatura-32)*5/9)+273.15
  }else if (from === 'kelvin' && to === 'celsius'){
    converTemperatura = temperatura - 273.15
  }else if (from === 'kelvi' && to === 'fahrenheit'){
    converTemperatura = ((temperatura - 273.15)*9/5)+32
  }else{
    converTemperatura = temperatura // misma unidad no se realiza conversión
  }
  const MostarResult = document.getElementById('Result')
   MostarResult.innerHTML = `Temperatura original: ${temperatura} ${from} <br/> Resultado: ${converTemperatura.toFixed(2) } ${to}`
}