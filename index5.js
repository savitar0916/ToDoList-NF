function hello1() {
    console.log('你好')
}

function hello2() {
    console.log('你')
}

function hello3() {
    console.log('好')
}

// 執行
hello1()
hello2()
hello3()

function addMoney() {
    console.log(100 + 200)
}

//  結帳頁面

addMoney()

//  購物車頁面

addMoney()

function addMoney(price1,price2,discount){
    console.log('price1',price1);
    console.log('price2',price2);
    console.log('discount',discount);
    console.log('sum',price1+price2-discount);
}


//  結帳頁面
addMoney(2000,100,50)

//  購物車頁面
addMoney(3000,200,100)

//  有回傳值得function return

function addMoney(price1,price2,discount){
    let result = price1 + price2 - discount
    return result
}

console.log(addMoney(2000,50,30))


function chooseMember(price1,price2,discount){
    let result = price1 + price2 - discount
    let message = '普通會員'
    if(result > 50000) {
        message = '尊榮會員'
        return message
    }
    if(result > 20000) {
        message = '白金會員'
        return message
    }
    return message
}

let msg = chooseMember(500000,11000,1000)
console.log('msg:', msg)


function createCard(initName){
    this.name = initName
}
const a1 = new createCard('小明')
console.log('a1:',a1)