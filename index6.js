// function createCard(initName){
//     this.name = initName
// }

// class Card {
//     constructor(initName) {
//         this.name = initName
//         //this
//         this.hellooooo = this.hello.bind(this)
//     }
//     hello = () =>{
//         console.log("Hello",this.name)
//     }
// }
// function Card(){
// }
// Card.prototype.hello = function (){
// }


// const c1 = new Card("Brian")
// console.log(c1.name)
// c1.hello()
// c1.hellooooo()

// const a = { name:'AA'}
// a.hellooooo = c1.hello

// a.hellooooo()

// 繼承
class Car {
    constructor(initName){
        this.name = initName
    }
    start() {
        console.log('車子啟動')
    }
}

class Porsche extends Car {
    constructor(namePorshe){
        super(namePorshe)
    }
    start2(){
        super.start()
        console.log('車子排氣')
    }
    start(){
        super.start()
        console.log('porsche車子啟動')
    }
}

const p1 = new Porsche("Brian 的車車")
p1.start()

console.log('name',p1.name)