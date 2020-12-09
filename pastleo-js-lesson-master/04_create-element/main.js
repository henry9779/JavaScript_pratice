// let's start coding:
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-element').addEventListener('click', function() {
        // 找到id為create-element物件，當按下按鈕，執行匿名函式
        const div = document.createElement('div')
            // 做一個動態div

        div.className = 'time'
            // 命名div名稱為 time
        div.textContent = (new Date()).toString()
            // div內容由 new Date方法做出來的並且為字串

        document.querySelector('.right').appendChild(div)
            // 將div透過appendchild傳給右邊DIV
    })

    document.getElementById('reset-inner-html').addEventListener('click', function() {

        document.querySelector('.right').innerHTML = (
            // 透過innerHTML塞字串給右邊DIV，強大但是有使用者資料會有被hack的機會，使用textcontent
            '<div class="title">DOM practice...</div>'
        )
    })

    document.getElementById('remove').addEventListener('click', function() {
        const lastTime = document.querySelector('.time:last-child')
            // 定義常數為time的最後一個小孩

        if (lastTime) {
            // 如果有找到（if判斷可以避免沒有資料console報錯）
            lastTime.remove()
                // 就自殺
        }
    })

    document.getElementById('create-element-insert-adjacent').addEventListener('click', function() {
        const div = document.createElement('div')

        div.className = 'time'
        div.textContent = '!!!!!' + (new Date()).toString()
            //  字串相加用 +

        document.querySelector('.title').insertAdjacentElement('afterend', div)
            // 找到title div並在後面加入div
    })
})