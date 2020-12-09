window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('on').addEventListener('click', function() {
    document.body.classList.add('light');

    document.querySelector('.status span').textContent = '開';

    const statusDiv = document.querySelector('.status');
    statusDiv.classList.remove('off');
    statusDiv.classList.add('on');
  });

  document.getElementById('off').addEventListener('click', function() {
    document.body.classList.remove('light');

    document.querySelector('.status span').textContent = '關';

    const statusDiv = document.querySelector('.status');
    statusDiv.classList.remove('on');
    statusDiv.classList.add('off');
  });
});
