const timeoutPromise = ms => new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-post-form');
    const submitBtn = form.querySelector('button[type=submit]');

    form.addEventListener('submit', async event => {
        event.preventDefault();

        const request = fetch('https://pastleo-posts-api.herokuapp.com/api/posts', {
            method: 'POST',
            // 用POST傳資料
            headers: {
                Authorization: 'pastleo-js-posts-api-secret',
                // 傳信需要帶驗證
            },
            body: new FormData(form)

        })
    })
})