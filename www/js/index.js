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
        $('#rules .timer').html(compter);
        if (compter <= 0) {
          stop = 'stop';
          $('#rules .timer').html('GO !');
          startGame();
        }
      }
    }, 1000);
  });
});

function startGame(){
  $('#rules').css('display','none');
  $('#tapParty').css('display','block');

  var stop='';
  var compter = 10;
  setInterval(function(){
    if (stop=='') {
      compter = compter - 1;
      $('#tapParty .timer').html(compter);
      if (compter <= 0) {
        stop = 'stop';
        $('#tapParty .timer').css('display','none');
        endGame();
      }
    }
  }, 1000);
}

function endGame(){
  $('#tapParty').css('display','none');
  $('#endGame').css('display','block');
}
