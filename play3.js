/*
Vamos a definir una clase Pokemon.
Los pokemon se pueden definir por
    -Su identificador de pokedex
    -Su nombre
    -Sus puntos de fuerza
    -De que tipo son (pueden ser de diversos tipos
        
1. Ejercicio: Definir la clase Pokemon con estas caracteristicas e instanciar dos objetos del tipo Pokemon tal que asi:
        1. Pikachu, ID: 666, tipo: electrico, tierra, 50 de fuerza.
        2. Bulbasur, ID: 2, tipo: agua y planta, y su fuera es 45.
2. Hacer un metodo llamado reforzar, que los hace mas fuertes doblando la fuerza del pokemon.
*/

class Pokemon{
    constructor(id, nombre, tipo, fuerza){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fuerza = fuerza;
    }

    reforzar(){
        this.fuerza = this.fuerza * 2;
    }
}

let pokemons = [];
pokemons.push(new Pokemon(666,"Pikachu", ["eléctrico","tierra"], 50));
pokemons.push(new Pokemon(2,"Bulbasaur", ["agua","planta"], 45));

console.log("Antes de reforzar: ", pokemons);

pokemons[1].reforzar();
console.log("-------------------------------");
console.log("Despues de reforzar: ", pokemons);