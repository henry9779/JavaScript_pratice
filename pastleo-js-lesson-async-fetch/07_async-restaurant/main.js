const startTask = (orderDiv, name, ms, callback) => {
    const stepP = document.createElement('p');
    stepP.textContent = name;
    orderDiv.appendChild(stepP);
    if (callback && ms) {
        setTimeout(() => {
            callback();
        }, ms);
    }
}

const startTaskPromise = (orderDiv, name, ms) => {
    // 定義函式
    const stepP = document.createElement('p');
    // 動態產生p tag
    stepP.textContent = name;
    // 將函式內容傳進p tag
    orderDiv.appendChild(stepP);
    // 新增
    if (ms) {
        // 如果秒數有值執行下列函式
        return new Promise(resolve => {
            // 結束之後回傳 promise
            setTimeout(() => {
                resolve();
                console.log(resolve);
                // 秒數到的時候回傳
            }, ms);
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ordersDiv = document.querySelector('.orders');

    // 點熱牛奶
    document.getElementById('order-hot-milk').addEventListener('click', () => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'p-4 border-dashed border-4 border-gray-600';
        ordersDiv.appendChild(orderDiv);

        //   startTask(orderDiv, '接到熱牛奶訂單', 200, () => {
        //     startTask(orderDiv, '把熱牛奶放入微波爐，開始微波', 1800, () => {
        //       startTask(orderDiv, '微波完成，拿給消費者');
        //     });
        //   });
        // });

        startTaskPromise(orderDiv, '接到熱牛奶訂單', 200)
            .then(() => startTaskPromise(orderDiv, '把熱牛奶放入微波爐，開始微波', 1800))
            .then(() => startTaskPromise(orderDiv, '微波完成，拿給消費者'))
    });

    // 點漢堡
    document.getElementById('order-hamburger').addEventListener('click', async() => {
        // 加上async function會回傳promise，就可以加await指令
        const orderDiv = document.createElement('div');
        orderDiv.className = 'p-4 border-dashed border-4 border-gray-600';

        ordersDiv.appendChild(orderDiv);

        await startTaskPromise(orderDiv, '接到漢堡訂單', 200)
        await startTaskPromise(orderDiv, '準備麵包、生菜、漢堡肉', 600)
        await startTaskPromise(orderDiv, '煎漢堡肉', 1500)
        await startTaskPromise(orderDiv, '用麵包把漢堡肉跟生菜夾起來', 400)
        await startTaskPromise(orderDiv, '上菜')

        //     startTask(orderDiv, '接到漢堡訂單', 200, () => {
        //         startTask(orderDiv, '準備麵包、生菜、漢堡肉', 600, () => {
        //             startTask(orderDiv, '煎漢堡肉', 1500, () => {
        //                 startTask(orderDiv, '用麵包把漢堡肉跟生菜夾起來', 400, () => {
        //                     startTask(orderDiv, '上菜');
        //                 });
        //             });
        //         });
        //     });
    });
});