/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
// 3x3
let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
  1) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

let valoresPares = (array) => {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 == 0) {
        pares.push(array[i][j]);
      }
    }
  }
  return pares;
};

console.log(valoresPares(matriz));
/* ---------------------------------------------------------- */

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 
    1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista.
    Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro.
    Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
    
    Nuestra función deberá retornar: 
    
    ("Mona Lisa", "La ultima cena", "Maria Magdalena")
  
    */

/* ---------------------------------------------------------- */
function verificarCuadroByartista(array, artista) {
  let resoult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].creador === artista) {
      resoult.push(array[i].nombre);
    }
  }
  return resoult;
}

console.log(verificarCuadroByartista(cuadros, "Leonardo Da Vinci"));

/* 
  //EJERCICIO Nº3
  
  Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
  
  1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente
   según su creador o no. 
  2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
  3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
  */

/* ---------------------------------------------------------- */

function verificaOrderCuadros(array) {
  let ordenInicial = [];
  for (let i = 0; i < array.length; i++) {
    ordenInicial.push(array[i].creador);
  }

  console.log(ordenInicial);

  let temp = " ";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j]["creador"] > array[j + 1]["creador"]) {
        temp = array[j]["creador"];
        array[j]["creador"] = array[j + 1]["creador"];
        array[j + 1]["creador"] = temp;
      }
    }
  }

  let ordenFinal = [];

  for (let j = 0; j < array.length; j++) {
    ordenFinal.push(array[j].creador);
  }
  console.log(ordenFinal);

  for (let i = 0; i < ordenFinal.length; i++) {
    if (ordenInicial[i] !== ordenFinal[i]) {
      return array; // retorna array ordenado
    }

    return true; // Si no se encontraron diferencias, los arreglos son iguales
  }
}

console.log(verificaOrderCuadros(cuadros));

// //EJERCICIO Nº4

// Desarrollar una función para cada uno de las siguientes apartados:

// 1) Que reciba por parámetro un número entero y retorne su triple.

function retornaTrriple(entero) {
  if (typeof entero === "number") {
    return entero * 3;
  } else {
    return "Ingrese un entero";
  }
}

console.log(retornaTrriple(2));

// 2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.

function multiplicacionDosNumeros(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 * num2;
  } else {
    return "Ingrese un numero";
  }
}

console.log(multiplicacionDosNumeros(2, 4));

// 3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.

function verificaYDivide(a, b) {
  if (a != 0 && b != 0) {
    return a / b;
  } else {
    return `Los valores incorrectos`;
  }
}

console.log(verificaYDivide(8, 2));
/* ---------------------------------------------------------- */

/* 
  //EJERCICIO Nº5
  
  Crear una matriz de 5 x 7.
*/
let mtz5X7 = () => {
  let mtzResoult = [];
  let valor = 1;
  for (let i = 0; i < 5; i++) {
    mtzResoult[i] = [];
    for (let j = 1; j <= 7; j++) {
      mtzResoult[i].push(i * 10 + j);
      // mtzResoult[i][j] = i * 10 + j;
    }
  }
  return mtzResoult;
};

console.table(mtz5X7());
/*
  Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
   */

function sumatoriaFila4Mtrz(mtrz) {
  let sum = 0;
  for (let i = 0; i < mtrz.length; i++) {
    if (i == 3) {
      for (let j = 0; j < mtrz[i].length; j++) {
        sum += mtrz[i][j];
      }
    }
  }
  return sum;
}
let laMtrzGenerada = mtz5X7();
console.log(sumatoriaFila4Mtrz(laMtrzGenerada));
/* ---------------------------------------------------------- */

//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos:

let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37,
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9,
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45,
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24,
  },
];

// 1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
function mayoresDe25(persons) {
  let resoult = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].edad > 25) {
      resoult.push(personas[i]);
    }
  }
  return resoult;
}
// 2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento.
console.log(mayoresDe25(personas));
