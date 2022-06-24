// Declaro objeto

const persona = {nombre: 'Patricio', apellido: 'Carbone', edad: 26, altura: 1.71, eresDesarrollador: true}
console.log(persona)

// Declaro variable edad

let edad = persona.edad
console.log(edad)

// Declaro array

const arrayPersonas = [persona, {nombre: 'Julian', apellido: 'Macias', edad: 27, altura: 1.91, eresDesarrollador: false}, {nombre: 'Ignacio', apellido: 'Vallejo', edad: 26, altura: 1.93, eresDesarrollador: true}]
console.log(arrayPersonas)

// Array ordenado

const arrayPersonas2 = arrayPersonas.sort((a,b) => b.edad-a.edad);
console.log(arrayPersonas2)