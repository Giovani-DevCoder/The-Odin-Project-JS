/* Daño acumulado de Espada
function crearEspada(){
    let dañoTotal = 0;

    function ataque(puntos){
        dañoTotal += puntos
        
        return dañoTotal
        
    }
    return ataque
}

const espadaDeFuego = crearEspada()
const espadaDeHielo = crearEspada()


console.log(espadaDeFuego(20))
console.log(espadaDeFuego(10))
console.log(espadaDeFuego(5))

console.log(espadaDeHielo(7)) */
/* Ver clave de Cofre
const cofreSecreto = (function (){

    let secreto = "1234-clave"

    return{
        revelarSecreto: function() {
            return secreto
        }
    }
})();

console.log(cofreSecreto.revelarSecreto()) */
/* Cambiar Idioma de Juego
const configJuego = function (){
    let idioma = "Español"

    return{
        obtenerIdioma: function(){
            return idioma
        },

        cambiarIdioma: function(nuevoIdioma){
            idioma = nuevoIdioma
        }
    }
}();

console.log(configJuego.obtenerIdioma())

configJuego.cambiarIdioma("Ingles")

console.log(configJuego.obtenerIdioma())*/
/* const contadorDeEnemigos = function (){
    let totalEnemigos = 0;

    return{
        nuevoEnemigoCreado: function(){
            totalEnemigos++
        },
        obtenerTotal: function(){
            return totalEnemigos
        }
    }
}();

const crearEnemigo = (nombre) => {
    contadorDeEnemigos.nuevoEnemigoCreado()

    return {nombre, tipo: "Monstruo"}
}

crearEnemigo("Orco")
crearEnemigo("Orco")
crearEnemigo("Orco")

console.log(`Enemigos totales en el mapa: ${contadorDeEnemigos.obtenerTotal()}`); */
/* Gestor de Turnos
const gestorDeTurnos = function (){
    let ultimoTurno = 0;

    return{
        generarSiguienteTurno: function(){
            ultimoTurno++
            return "Turno #" + ultimoTurno
        }
    }
    
}();

const crearPaciente = (nombre) => {
    let miTurno = gestorDeTurnos.generarSiguienteTurno()
    
    return{
        
        verFicha: function(){
            return "Paciente " + nombre + " tiene el " + miTurno
        }
    }
}

const pacienteA = crearPaciente("Carlos");
const pacienteB = crearPaciente("Ana");

console.log(pacienteA.verFicha())
console.log(pacienteB.verFicha()) */
