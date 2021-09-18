const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')
const listContent = []

class RenderFeature{
    append() {

    }
    rendor() {
        //渲染頁面的list
        let htmlStr = ''
    
        listContent.forEach(function(item){
            htmlStr = htmlStr + `
            <div class="item">
                <div>
                    <p>內容:${item.content}</p>
                    <p>時間:${item.date} ${item.time}</p>
                </div>
            </div>
            `
        })
        list.innerHTML = htmlStr
    }
}

const r1 = new RenderFeature()

addedBtn.addEventListener('click',function(){
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)
    listContent.push({
        content: content.value,
        date: date.value,
        time: time.value
    })
    r1.rendor()
})

deletedBtn.addEventListener('click',function(){
    listContent.pop()
    r1.rendor()
})

