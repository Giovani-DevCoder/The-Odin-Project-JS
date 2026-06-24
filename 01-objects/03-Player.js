function Person(name){
    this.name = name
};

Person.prototype.sayName = function(){
    console.log(`My name is ${this.name}`)
};

function Player(name, marker){
    this.name = name,
    this.marker = marker
};

Player.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`)
};

console.log(Object.getPrototypeOf(Player.prototype));

Object.setPrototypeOf(Player.prototype, Person.prototype);

console.log(Object.getPrototypeOf(Player.prototype));

player1 = new Player("steve", "X");
player2 = new Player("also steve", "O");

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();