$(function(){
  $('.faq-card__item').on('click', function(){
    $(this).toggleClass('faq-card__item--active');
    $('.faq-card__item-title', this).toggleClass('faq-card__item-title--active');
    $('.faq-card__item-text', this).toggleClass('faq-card__item-text--active');
  });
});