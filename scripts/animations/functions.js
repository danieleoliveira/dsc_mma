$(document).ready(function() {

  /* ********************************************************************************************************** */
  /* ***************************************************************************** ESCONDER ELEMENTOS INICIAIS. */
  $('.menuCategoryDropdown').hide();
  $('.menuFighterDropdown').hide();
  $('.menuFightDropdown').hide();
  $('#inputSaveCategory').hide();
  $('#inputSearchCategory').hide();
  $('#outputSaveCategory').hide();
  $('#outputSearchCategory').hide();
  
/* *************************************************************** Para testes. Deletar quando acabar. */
/*
  $('#category').hide();
  $('#fight').hide();
  $('#fighter').hide();
  $('.menu').hide();
  $('#content').hide();
  $('.menuCategoryDropdown').hide();
*/

  /* ********************************************************************************************************** */
  /* **************************************************************************** DIMINUIR OPACIDADE DOS MENUS. */
  $('.menu').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menu').mouseleave(function() {
    $(this).fadeTo('fast', 0.9);
  });

  $('.menuCategoryDropdown').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menuCategoryDropdown').mouseleave(function() {
    $(this).fadeTo('fast', 0.7);
  });

  $('.menuFighterDropdown').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menuFighterDropdown').mouseleave(function() {
    $(this).fadeTo('fast', 0.7);
  });

  $('.menuFightDropdown').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.menuFightDropdown').mouseleave(function() {
    $(this).fadeTo('fast', 0.7);
  });

  /* ********************************************************************************************************** */
  /* ***************************************************************************** MOSTRAR SUBMENUS 'DROPDOWN'. */
  $('#category').mouseenter(function(){
    $('#category h2').css('margin-top', '2%');
    $('.menuCategoryDropdown').slideToggle();
  });

  $('#category').mouseleave(function(){
    $('.menuCategoryDropdown').slideToggle('fast');
    $('#category h2').css('margin-top', '41%');
  });

  $('#fighter').mouseenter(function(){
    $('#fighter h2').css('margin-top', '2%');
    $('.menuFighterDropdown').slideToggle();
  });

  $('#fighter').mouseleave(function(){
    $('.menuFighterDropdown').slideToggle('fast');
    $('#fighter h2').css('margin-top', '41%');
  });

  $('#fight').mouseenter(function(){
    $('#fight h2').css('margin-top', '2%');
    $('.menuFightDropdown').slideToggle();
  });

  $('#fight').mouseleave(function(){
    $('.menuFightDropdown').slideToggle('fast');
    $('#fight h2').css('margin-top', '41%');
  });

  /* ********************************************************************************************************** */
  /* ************************************************************ ALTERNAR ENTRE ESCONDER  E MOSTRAR ELEMENTOS. */

  /* *********************************************** Melhorar as combinações. Garantir que nada fica escondido. */
  $('.menu').click(function() {
    $('#content h2').hide();
  });

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

  /* ********************************************************************************************************** */
  /* ******************************************************************************** FOCAR ELEMENTOS DE INPUT. */
  $('input').focus(function(){
    $(this).css('outline-color', '#FF0000');
  });

  /* ************************************************************** Para testes. Deletar quando acabar. */
  $(document).ready(function(){
    var $target = $('#resultCategory thead th th th tbody tr');
    $target.selectable();
  });

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