// Vamos a crear una clase tipo Gato que nos sirva de plantilla para crear objetos de tipo gato.
class Gato {
    
    // Método especial que se encarga de construir el nuevo gato.
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    maullar(){
        console.log(this.nombre+": Miau");
    }
}

// Vamos a crear un gato llamado "Berto" tiene 10 años
// Instanciar un objeto de la clase gato.
let gato1 = new Gato("Berto", 10);
let gato2 = new Gato("Pera", 7);
console.log("gato1: ", gato1);
console.log("gato2: ", gato2);

gato1.maullar();
gato2.maullar();