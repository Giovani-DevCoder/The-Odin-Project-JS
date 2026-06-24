function playerR(name,  marker){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.name = name,
    this.marker = marker,
    this.sayName = function(){
        console.log(this.name)
    }
};

const player1 = new playerR("steve", "x");
const player2 = new playerR("bob", "o");


player1.sayName()
player2.sayName()

/* */

/* function dataBook(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read
    }
}

const book1 = new dataBook("The Hobbit", "J.R.R Tolkien", "295", "not read yet");

console.log(book1.info()) */

/* THE PROTOTYPE */

/* Object.getPrototypeOf(player1) === playerR.prototype;
Object.getPrototypeOf(player2) === playerR.prototype;

playerR.prototype.sayHello = function(){
    console.log("Hello, nice to meet you")
}

player1.sayHello()
player2.sayHello()*/