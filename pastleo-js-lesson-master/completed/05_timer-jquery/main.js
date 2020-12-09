$(window).ready(function() {
  let cnt = 0, timer;

  $('button').click(function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      $('button').text('Start');
      $('#running').slideUp();
    } else {
      $('button').text('Pause');
      $('#running').slideDown();
      timer = setInterval(function() {
        cnt = cnt + 1;
        $('#seconds').text(Math.floor(cnt / 10));
        $('.dots > div:last-child').prependTo($('.dots'));
      }, 100);
    }
  });
});
