// Initialize a constructor function for a new Hero
function Hero(name, level){
    this.name = name;
    this.level = level;
}

/* const hero1 = new Hero("Maia", 1)

console.log(hero1)
console.log("--------------")

Hero.prototype.Greet = function() {
    return `${this.name}, that's my name!`;
}

const greeting = hero1.Greet()

console.log(greeting) */
console.log("--------------")

function Warrior(name, level, weapon){
    Hero.call(this, name, level);
    this.weapon = weapon;
};

function Mage(name, level, spell){
    Hero.call(this, name, level);
    this.spell = spell;
};

Warrior.prototype.Attack = function(){
    return `${this.name} attack the enemy with a ${this.weapon}`;
}

Mage.prototype.Spell = function(){
    return `${this.name} cast a ${this.spell}`;
}

const hero1 = new Warrior("Maia", 1, "Sword")
const hero2 = new Mage("Frieren", 1, "Spell")


console.log(hero1)
console.log(hero2)