import addOne from './addOne.js'
import { removeGreeting } from './utilus.js'




document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-one').addEventListener('click', async() => {
        removeGreeting();

        addOne(Math.random() * 1000);
    })

    document.getElementById('add-three').addEventListener('click', () => {
        removeGreeting();

        Array(3).fill().forEach(async() => {
            addOne(Math.random() * 2000 + 1000);
        });
    })
})