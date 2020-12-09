// let's start coding:
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
        // 抓取資料
        .then(response => response.json())
        // 
        // =>另一種匿名函式寫法，抓取完資料後轉成JSON
        // .then(function(response){
        // return response.json()
        // })
        .then(posts => {
            console.log(posts)
                // 印出抓到的資料
            const firstPost = posts[0]
                //  模組化
            const titleA = document.querySelector('.post-title')
                //  模組化
            const linkA = document.querySelector('.post-link')
                //  模組化
            document.querySelector('.post-title').textContent = firstPost.title
                // 將第一筆資料title塞到.post-title
            document.querySelector('.post-created-at').textContent = firstPost.created_at
                // 將第一筆資料create塞到.post-create
            document.querySelector('.post-author').textContent = (`By ${firstPost.author}`)
                // 將第一筆資料author塞到.post-author
            document.querySelector('.post-description').textContent = firstPost.description
                // 將第一筆資料description塞到.post-description
            titleA.href = firstPost.url

            linkA.href = firstPost.url

            linkA.classList.remove('hidden')

        })
})