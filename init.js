class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
        // console.log("hola")
    }
    getFullName() {
        console.log(`Nombre:${this.nombre}\n` + `Apellido:${this.apellido}`)
    }
    addMascota(mascota) {
        this.mascotas.unshift(mascota)
    }
    countMascotas() {
        console.log(this.mascotas.length)
    }
    addBook(nombre, autor) {
        let libro ={nombre: nombre, autor:autor}
        this.libros.unshift(libro) 
    }
    getBookNames() {
        let nombres = []
        this.libros.forEach(libro => {
          nombres.unshift(libro.nombre)
        });
        console.log(nombres)
    }

}
let Usuario1 = new Usuario("Pepe", "Olivo", [{nombre:"pepito",autor:"JF"}], ["rocky","firulais"])
console.log(Usuario1.getFullName())
console.log(Usuario1.addMascota("canela"))
console.log(Usuario1.countMascotas())
console.log(Usuario1.addBook("test1","autor1"))
console.log(Usuario1.getBookNames())