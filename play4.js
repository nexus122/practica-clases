// Todos los pokemon tienen un numero determinado de puntos de vida, para simplificar diremos que 100.
class Pokemon{
    constructor(id, nombre, tipo, fuerza, vida = 100){ // La vida es un metodo nuevo en js, nos permite un valor por defecto en los parametros.
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fuerza = fuerza;
        this.vida = vida; // No tenemos que pasar todo por parametro, podemos poner cosas por defecto
    }

    reforzar(){
        this.fuerza = this.fuerza * 2;
    }

    golpear(pokemonAtacado){
        console.log(`${this.nombre} a atacado a ${pokemonAtacado.nombre} y le ha hecho ${this.fuerza} de daño`);
        pokemonAtacado.vida = pokemonAtacado.vida - this.fuerza;
    }
}

let pokemons = [];
pokemons.push(new Pokemon(666,"Pikachu", ["eléctrico","tierra"], 50));
pokemons.push(new Pokemon(2,"Bulbasaur", ["agua","planta"], 45));

pokemons[0].golpear(pokemons[1]);
pokemons[1].golpear(pokemons[0]);

console.log(pokemons);