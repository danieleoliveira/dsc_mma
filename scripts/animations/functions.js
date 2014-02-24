$(document).ready(function() {

  /* ********************************************************************************************************** */
  /* ***************************************************************************** ESCONDER ELEMENTOS INICIAIS. */
  $('.menuCategoryDropdown').hide();
  $('.menuFighterDropdown').hide();
  $('.menuFightDropdown').hide();

  $('#inputSaveCategory').hide();
  $('#inputSearchCategory').hide();
  $('#inputSaveFighter').hide();
  $('#inputSearchFighter').hide();
  $('#inputSaveFight').hide();
  $('#inputSearchFight').hide();

  $('#outputSaveCategory').hide();
  $('#outputSearchCategory').hide();
  $('#outputSaveFighter').hide();
  $('#outputSearchFighter').hide();
  $('#outputSaveFight').hide();
  $('#outputSearchFight').hide();
  
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

  /* ********************************************************************************************************** */
  /* *********************************************************************************************** CATEGORIA. */
  $('#addCategoryDropdown').click(function() {
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSaveCategory').show();
    $('#outputSaveCategory').show();
  }); 

  $('#searchCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

  $('#editCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

  $('#deleteCategoryDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchCategory').show();
    $('#outputSearchCategory').show();
  });

  /* ********************************************************************************************************** */
  /* ************************************************************************************************* LUTADOR. */
  $('#addFighterDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSaveFighter').show();
    $('#outputSaveFighter').show();
  }); 

  $('#searchFighterDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchFighter').show();
    $('#outputSearchFighter').show();
  });

  $('#editFighterDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchFighter').show();
    $('#outputSearchFighter').show();
  });

  $('#deleteFighterDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSaveFight').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSaveFight').hide();
    $('#outputSearchFight').hide();

    $('#inputSearchFighter').show();
    $('#outputSearchFighter').show();
  });

  /* ********************************************************************************************************** */
  /* **************************************************************************************************** LUTA. */
  $('#addFightDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSearchFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSearchFight').hide();

    $('#inputSaveFight').show();
    $('#outputSaveFight').show();
  }); 

  $('#searchFightDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();

    $('#inputSearchFight').show();
    $('#outputSearchFight').show();
  });

  $('#editFightDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();

    $('#inputSearchFight').show();
    $('#outputSearchFight').show();
  });

  $('#deleteFightDropdown').click(function() {
    $('#inputSaveCategory').hide();
    $('#inputSearchCategory').hide();
    $('#inputSaveFighter').hide();
    $('#inputSearchFighter').hide();
    $('#inputSaveFight').hide();
    $('#outputSaveCategory').hide();
    $('#outputSearchCategory').hide();
    $('#outputSaveFighter').hide();
    $('#outputSearchFighter').hide();
    $('#outputSaveFight').hide();

    $('#inputSearchFight').show();
    $('#outputSearchFight').show();
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