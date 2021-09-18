//  For迴圈

for(let i = 0;i< 10;i = i+1){
    console.log('i:',i)
}
let classA = [100,70,59]
console.log(classA[0])
for(let j = 0;j < 3;j++){
    console.log(classA[j])
}
//while迴圈

let condition = true
let target = 10
let i = 0

while (condition){
    if (i === target){
        condition = false
    }
    console.log(i)
    i++
}

