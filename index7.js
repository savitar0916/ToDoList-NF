//  window.alert("看一下")
//  document

//  callback 回呼
//  你完成load世界後要來call這個function
window.addEventListener('load',function(){
    t1 = document.getElementById('title')
    console.log(t1)
    

    const b1 = document.getElementById("btn01")
    b1.addEventListener('click',function(){
        t1.innerText = "看看我"
    })
    const box1 = document.getElementById('box')
    box1.innerHTML = '<p>Test</p>'

    const in1 = document.getElementById('input1')
    in1.addEventListener('keyup',function(e){
        console.log('e:',e.target.value)
    })
})

// t1 = document.getElementById('title')
// console.log(t1)
