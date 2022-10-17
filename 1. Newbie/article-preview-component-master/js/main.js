$(function(){
  $('.card__author-share-box').on('click', function(){
    $(this).toggleClass('card__author-share-box--active');
    $('.card__author-box').toggleClass('card__author-box--active');
    $('.card__social-box').toggleClass('card__social-box--active');
    $('.card__content').toggleClass('card__content--active');
  });
});