// Initialize a constructor function for a new Hero
function Hero(name, level){
    this.name = name;
    this.level = level;
}

console.log("--------------")
function Warrior(name, level, weapon){
    Hero.call(this, name, level);
    this.weapon = weapon;
};

function Mage(name, level, spell){
    Hero.call(this, name, level);
    this.spell = spell;
};

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Mage.prototype, Hero.prototype);

Hero.prototype.Greet = function() {
    return `${this.name}, that's my name!`;
};

Warrior.prototype.Attack = function(){
    return `${this.name} attacks with a ${this.weapon}`;
};

Mage.prototype.Spell = function(){
    return `${this.name} casts a ${this.spell}`;
};

// Initialize individual character instances
const hero1 = new Warrior("Maia", 1, "Sword")
const hero2 = new Mage("Frieren", 1, "Spell")


console.log(hero1)
console.log(hero2)
console.log("--------------")

const act = hero1.Attack()
const greeting = hero1.Greet()

console.log(greeting)
console.log("--------------")
console.log(act)