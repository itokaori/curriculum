let btn = document.getElementById('btn');
let box = document.getElementById('box');

btn.addEventListener('click', function() {
    box.style.backgroundColor = 'red';
}, false);

btn.addEventListener('click', function() {
    alert('ボタンが押されました');
}, false);
