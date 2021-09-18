if (100 == 50) {
    console.log(true)
}else{
    console.log(false)
}

// + - * / 算數運算子
// && || ! 邏輯運算子
//let condition = true && true
//let condition = true && false
//let condition = false && false
//let condition = !false
//let condition = !true

/*if (condition) {
    console.log('正確')
} else {
    console.log('錯誤')
}*/

let scoreA = 100
let scoreB = '99'
let condition = scoreA == scoreB

console.log('condition',condition)

if(scoreA > scoreB){
    console.log('A 比較高')
}else if(scoreA < scoreB){
    console.log('B 比較高')
}else{
    console.log('我不知道')
}

let key = 300
switch(key){
    case 100:
        console.log('考了一百分')
        break;
    case 200:
        console.log('考了兩百分')
        break;
    case 300:
        console.log('考了三百分')
        break;
    default:
        console.log('沒去考試')
        break;
}