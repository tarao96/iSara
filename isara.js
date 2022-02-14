// アコーディオン
$(function() {
$('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');
      
    }
  });
  $('.flowbox').click(function() {
    var $flowright = $(this).find('.flowright');
    
    if($flowright.hasClass('open')) { 
      $flowright.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $flowright.slideUp();
      
    } else {
      $flowright.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $flowright.slideDown();
    }
  });
});
