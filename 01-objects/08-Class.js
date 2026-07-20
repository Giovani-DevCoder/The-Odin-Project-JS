/* 
let User = class MyClass {
    siHi(){
        return MyClass
    }
}

console.log(User)
console.log(MyClass) */
/*2
function myClass(name){
    return class{
        sayHi(){
            console.log("Hello, my name is " + name)
        }
    };
};

let User = myClass("Carlos");

new User().sayHi()*/
/* getter and setter
class Persona{
    constructor(edadInicial){
        this._edad = edadInicial;
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        if (nuevaEdad < 0 ){
            console.log("¡Error! Edad no valida")
        } else{
            this._edad = nuevaEdad
        }
    }
}

const usuario = new Persona(20)

console.log(usuario.edad)

usuario.edad = 21
console.log(usuario.edad)
usuario.edad = 22
console.log(usuario.edad)
usuario.edad = -23

usuario.edad = 23
console.log(usuario.edad)*/
/* syntax
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
*/
