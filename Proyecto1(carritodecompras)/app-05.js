//clase 30/08/23
/* //Pi
resultado = Math.PI;
// Redondeo
resultado = Math.round(2.5);
// Redondeo abajo o arriba(cell o floor)
resultado = Math.ceil(2.2);
// Raiz cuadrada 
resultado = Math.sqrt(144);
// Absoluto 
resultado = Math.abs(-300);
// Potenica 
resultado = Math.puw(9,3)
// Minimo 
resultado = Math.min(3,5,1,2,9,4,2,-3)
// Maximo 
resultado = Math.max(4,1,21,4,4,15,5,11,5)
// Aleatorio
resultado = Math.random()
// Aleatorio dentro de un rango 
resultado = Math.floor(Math.random() * 20); */

// Operaciones 
let resultado;
/* orden de las operaciones */
resultado = 20+ 30 * 2;
resultado = (20 + 30) * 2;
// 20% de descuento en un carrito de compras
resultado = (20 + 10 +30 + 40 + 50) * 20;
console.log(resultado);

// se incrementara un valor en 1 en 1 o en determinada cantidad
 /* incluir incremento por 1 y por menos 1  */
  let puntaje = 5
  puntaje ++ //6
  puntaje -- //5
  ++puntaje //6
  --puntaje //4
  puntaje += 5 //8
  puntaje -= 3//5
  console.log(puntaje);

  // funciones para convertir a números
  const numero1= "20"
  const numero2= "20.2"
  const numero3= "Uno"
  const numero4= 20
  // conertir números flotantes o enteros
  console.log(Number.parseInt(numero1)) // String a número
  console.log(Number.parseFloat(numero2)) // String a número con decimal
  console.log(Number.parseInt(numero3)) // String a número
  // revisar si un  número es entero 
  console.log(Number.isInteger(numero4))// revisar si un número es entero 
  console.log(Number.isInteger(numero3))// revisar si un número es entero 
  //consertir un número a String
  console.log(numero4.toString()); 

  //Operadores logicos 
  const numero01= 20
  const numero02= "20"
  const numero03= 30
  //operaodr Mayor a 
  console.log(numero01 > numero03)
  console.log(numero03 > numero01)
  // Operador Merno a
  console.log(numero03 < numero01)
  //Operador estricto 
  console.log(numero1 === numero02)
  // Diferente a
  console.log(numero1 !=  numero03)
  console.log(numero1 !=  numero02)
  console.log(numero1 !== numero02)

  // Ejemplos de undifined
  let num1 = undefined
  console.log( typeof num1)
  // null
  let num2= null
  console.log(num2)
  console.log(typeof num2)
  // comparando null y undefined
  console.log(num1 === num2)
  //comparador estricto
  console.log(num2 === num1) // de esta formma no comparamos falsos positivos y evitamos errores

  // Boolean  solo pueden tener 2 estados 
  //Forma 1
  const Boolean1 = true
  const Boolean2 = false
  console.log(Boolean1)
  console.log(Boolean2)
  console.log( typeof Boolean2)
  // Forma 2
  const Boolean3 = new Boolean(true)
  console.log(Boolean3)
  console.log( typeof Boolean3)
  // comparación
  if (Boolean1 == true){
    console.log('si es verdadero')
  }else{
    console.log('no es verdadero')
  }
// simplificación de codigo
console.log(Boolean1 ? 'si es true' : 'No no es true')