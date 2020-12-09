window.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.querySelector('.status')
        // 模組化

    document.getElementById('on').addEventListener('click', function() {
        document.body.classList.add('light')
            // 因為toggle只能控制一個元件，所以要使用add.remove控制

        statusDiv.classList.remove('off')
        statusDiv.classList.add('on')

        document.querySelector('.status span').textContent = '開'
            // 選取status的span文字為開
    })
    document.getElementById('off').addEventListener('click', function() {
        document.body.classList.remove('light')

        statusDiv.classList.remove('on')
        statusDiv.classList.add('off')

        document.querySelector('.status span').textContent = '關'
    })
})