/*
* Herencia de clases:
* Estamos en un mundo de fantasía en el que existen diferentes tipos de personajes y roles.
* Guerreros, clérigos, bardos, etc...
*
*/

/* Creamos la clase Personaje */
class Personaje{
    constructor(nombre, raza, vida, stats){
        this.nombre = nombre;
        this.raza = raza;
        this.vida = vida;
        this.stats = stats;

        // La experiencia siempre se inicializa en 0
        this.experiencia = 0;
    }

    puñetazo(){
        console.log(`${this.nombre} pega un puñetazo de ${this.stats.fuerza} puntos de daño.`)
    }

}

/* Introducimos la subclase Guerrero */
// Sumamos +1 a la fuerza base.
// Restamos 1 a la inteligencia base.
// ataque especial que es ataque 'Mamporro'. Causa el valor de su fuerza *2 de daño.

class Guerrero extends Personaje {
    constructor(nombre, raza, vida, stats) {
        // invocar el constructor de la clase padre
        super(nombre, raza, vida, stats);
        this.stats.fuerza = this.stats.fuerza +1;
        this.stats.inteligencia = this.stats.inteligencia -1;
    }

    mamporro(){
        console.log(`${this.nombre} pega un mamporro con fuerza de ${this.stats.fuerza * 2}`)
    }
}

/* Caracteristicas de nuestro primer personaje */
let caracteristicas = {
    fuerza: 12,
    agilidad:15,
    resistencia: 9,
    inteligencia: 17
}

/* Instanciamos a nuestro personaje */
//let personaje = new Personaje('Arod', 'Elfo', 150, caracteristicas);
let guerrero = new Guerrero('He-man', 'Humano', 200, {
    fuerza: 18,
    agilidad:10,
    resistencia: 9,
    inteligencia: 17
});

// Tests
// console.log(personaje.nombre+" : ",personaje);
// console.log(personaje.puñetazo());

// Implementar la sublcase Clerigo.
// -1 a fuerza
// +1 a ingeligencia
// Metodo especial en el que se cura a si mismo si no hay parametro.
// Si hay parametro cura al otro.
class Clerigo extends Personaje{
    constructor(nombre, raza, vida, stats ){
        super(nombre, raza, vida, stats);
        this.stats.inteligencia = this.stats.inteligencia  + 1;
        this.stats.fuerza = this.stats.fuerza -1
    }

    // Como compruebo si un parametro tiene valor
    curar(objetivo){
        if(objetivo){
            console.log(`${this.nombre} cura a ${objetivo.nombre} ${this.stats.inteligencia} de vida`);
            objetivo.vida = objetivo.vida + this.stats.inteligencia;
            console.log(`La vida de ${objetivo.nombre} es ${objetivo.vida}`);
        }else{
            console.log(`${this.nombre} se cura ${this.stats.inteligencia} a si misma`);            
            this.vida = this.vida + this.stats.inteligencia;
            console.log(`La vida de ${this.nombre} es ${this.vida}`);
        }
    }
}

let clerigo = new Clerigo('Sona', 'Humano', 150, {
    fuerza: 9,
    agilidad: 14,
    resistencia: 9,
    inteligencia: 21,
})

console.log(guerrero.nombre, guerrero);
console.log(guerrero.mamporro());

console.log(clerigo.nombre, clerigo);
console.log(clerigo.curar());
console.log(clerigo.curar(guerrero));

