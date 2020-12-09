// let's start coding:
$(window).ready(function() {
    console.log('ready')
    let cnt = 0,
        timer = null
        // null 布林值
        // 變數放在function才不會重複使用

    $('button').click(function() {
        console.log('clicked!', timer)

        if (timer) {
            // 如果是
            $('#running').slideUp()
            clearInterval(timer)
            timer = null
        } else {
            // 如果否
            $('#running').slideDown()
            timer = setInterval(function() {
                cnt += 1
                $('#seconds').text(Math.floor(cnt / 10))
                    // 秒數會有浮點數，所以去浮點數
                $('.dots div:last-child').prependTo($('.dots'))
                    // 最後一個小孩移到第一個
            }, 100)
        }
    })
})