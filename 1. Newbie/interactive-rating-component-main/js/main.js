$(function(){

  $('.card__rating-item').on('click', function (){
    $('.card__rating-item').removeClass('card__rating-item--active');
    $(this).addClass('card__rating-item--active');
  });

  $('.card__btn').on('click', function(){
    $('.card__thank').addClass('card__thank--visible');
    $('.card__thank-raiting span').text(
      $('.card__rating-item--active p').text()
    );
  });

  $('.card__thank').on('click', function(){
    $(this).removeClass('card__thank--visible');
  });

});