let classA = ['小明','小白','小華','小新','小佳']
console.log('轉學前:',classA)

classA.push('小黃')
console.log('轉學後:',classA)

let igPhotos = [
    'https://xx.img.com/a1.png',
    'https://xx.img.com/a2.png',
    'https://xx.img.com/a3.png'
]

//TODO del
console.log('igPhotos',igPhotos)
console.log('第一筆',igPhotos[0])

//長度
//TODO del
console.log('classA len:',classA.length)

//物件 Object
const card = {
    name: 'Brian的名片',
    addres:'台中',
    age:10,
}

console.log('名字',card.name)

const post1 = {
    image: 'https://xx.img.com/a1.png',
    desc: '這是一張圖片',
    date:'2022/02/02',
    comment:['好漂亮哦','我也想看']
}

const post2 = {
    image: 'https://xx.img.com/a1.png',
    desc: '這是一張圖片',
    date:'2066/06/06',
    comment:['好漂亮哦','我也想看']
}
const wall = [
    post1,
    post2
]

console.log('wall',wall)

let x = ['123','789','48','3547','879']
let y = x
y[1] = 'aaa'
console.log(y)
console.log(x)