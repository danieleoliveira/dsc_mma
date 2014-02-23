$(document).ready(function() {

  $('.menuCategoryDropdown').hide();
  $('#inputSaveCategory').hide();
  $('#inputSearchCategory').hide();
  $('#outputSaveCategory').hide();
  $('#outputSearchCategory').hide();
  
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

  $('#category').mouseenter(function(){
    $('#category h2').css('margin-top', '2%');
    $('.menuCategoryDropdown').slideToggle();
  });

  $('#category').mouseleave(function(){
    $('.menuCategoryDropdown').slideToggle('fast');
    $('#category h2').css('margin-top', '41%');
  });

  $('.menu').click(function() {
    $('#content h2').hide();
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

  $('#editCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#outputSaveCategory').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

  $('#deletCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#outputSaveCategory').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

  $(document).ready(function(){
    var $target = $('#resultCategory thead th th th tbody tr');
    $target.selectable();
  });

  $('input').focus(function(){
    $(this).css('outline-color', '#FF0000');
  });

/* ****************************************************************************** Para testes. Deletar quando acabar. */
/*
  $(document).ready(function() {
    $('.menu').accordion();
  });

  $('.menu').dblclick(function() {
    $(this).animate({
      width: '-=10px'
    });
  });

  $('.menu').mouseleave(function() {
    $(this).animate({
      width: '+=10px'
    }); 
  });

  //REMEMBER
  $(document).ready(function() {
    var $target = $('div ul li ol li:nth-child(4)');
    $target.fadeOut('fast');

    $(document).ready(function(){
    $('ol').selectable();
  });

  $('div').hover(function(){
    $(this).addClass('red');
  });

});
*/

});