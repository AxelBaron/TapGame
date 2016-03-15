$(document).ready(function(){
  console.log("go!!");
  $("#btn_go").click(function(){

    //CSS pour changer d'écran.
    $('#startScreen').css('display','none');
    $('.app').css('background','none');

    //Scokage des données.
    var pseudo = $('#pseudo').val();

    //CSS nouvel écran
    $('#game').css('display','block');

    var compter = 5;
    var stop='';
    setInterval(function(){
      if (stop=='') {
        compter = compter - 1;
        $('#timer').html(compter);
        if (compter <= 0) {
          startGame();
          stop = 'stop';
        }
      }
    }, 1000);
  });
});

function startGame(){
  $('#timer').text('GO !');
}
