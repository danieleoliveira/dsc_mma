$(document).ready(function() {

  $('.menuCategoryDropdown').hide();
  $('#inputSaveCategory').hide();
  $('#inputSearchCategory').hide();
  
/* ****************************************************************************** Para testes. Deletar quando acabar. */
/*
  $('#category').hide();
  $('#fight').hide();
  $('#fighter').hide();
  $('.menu').hide();
  $('#content').hide();
  $('.menuCategoryDropdown').hide();
*/

  $('.menu').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menu').mouseleave(function() {
    $(this).fadeTo('fast', 0.5);
  });

  $('.menuCategoryDropdown').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menuCategoryDropdown').mouseleave(function() {
    $(this).fadeTo('fast', 0.5);
  });

  /* ****************************************************************************** Descobrir porque o menu inteiro se move. */
  $('#category').mouseenter(function(){
    $('.menuCategoryDropdown').slideToggle();
  });

  $('#category').mouseleave(function(){
    $('.menuCategoryDropdown').slideToggle();
  });

  $('.menu').click(function() {
    $('#content h3').hide();
  });

  /* ****************************************************************************** Melhorar as combinações. Garantir que nada fica escondido. */
  $('#addCategoryDropdown').click(function() {
    $('#inputSearchCategory').hide();
    $('#outputSearchCategory').hide();

    $('#inputSaveCategory').show();
    $('#outputSaveCategory').show();
  });

  $('#searchCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#outputSaveCategory').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

/*
  $(document).ready(function() {
    $('.menu').accordion();
  });

  $('.menu').mouseenter(function() {
    $(this).animate({
      width: '-=10px'
    });
  });

  $('.menu').mouseleave(function() {
    $(this).animate({
      width: '+=10px'
    }); 
  });

  $('.menu').click(function() {
    $(this).toggle(1000);
  });

  //REMEMBER
  $(document).ready(function() {
    var $target = $('div ul li ol li:nth-child(4)');
    $target.fadeOut('fast');

    $(document).ready(function(){
    $('ol').selectable();
})
});
*/

});