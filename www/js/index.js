var pseudo = '';
var score = 0;
var finalScore = 0;

function start() {
	//CSS pour changer d'écran.
	$('#startScreen').css('display','none');
	//$('.app').css('background','none');
	$('#game').css('display','block');

	//Modification des données
	pseudo = $('#pseudo').val();
	$('#recupPseudo').text('T\'es chaud patate \''+pseudo+'\' ?');
	console.log('pseudo '+pseudo);

	return false;
}

function startGame(){
	$("#touchZone").off("click");
	score = 0;
	finalScore =0;
	//CSS pour changer d'écran.
	$('#rules').css('display','none');
	$('#tapParty').css('display','block');

	//On met un écouteur sur la div
	$('#touchZone').on( "click", function() {
		score = score + 1;
		console.log(score);
		$('#tapParty .tap').remove();
		$('#tapParty .tapJq').after('<h1 class="tap animated jello">TAP !</h1>');
	});

	//Boucle timer
	var stop='';
	var compter = 10;
	setInterval(function(){
		if (stop=='') {
			compter = compter - 1;
			$('#tapParty .timer').remove();
			$('#tapParty .timerJq').after('<h1 class="timer animated zoomIn"></h1>');

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
	$("#touchZone").off("click");
	finalScore = score;
	$('#tapParty').css('display','none');
	$('#endGame').css('display','block');
	$('#votreScore').text(finalScore);

	//Insert in BDD
	$.ajax({
    type: "POST",
    url: "http://maximegatouillat.fr/appli/addBdd.php",
    data: "pseudo="+pseudo+"&score="+finalScore,
    dataType: "html",
    success: function (data) {
      console.log('Score ajouté à la BDD');
    },
    error: function(data) {
    	console.log(data);
    }
	});
}

function displayScore(){
	$('#game').css('display','none');

	$('.app').addClass('resetClassement');
	$('#classement').addClass('resetClassementdeux');

	$('#classement').css('display','block');

	$.ajax({
    type: "POST",
    url: "http://maximegatouillat.fr/appli/getScoresInBdd.php",
    dataType: "json",
    success: function (data) {
			console.log('Affichage des scores');
			var position = 0;
			$('#scoreTable').html('<tr></tr>');
			for (var i = 0; i < data.length; i++) {

				if (i == 0) {
					var ancienScore = 0;

				}else {
					var Score = data[i-1];
					var ancienScore = data[i-1].score;
				}

				if (ancienScore == data[i].score ) {
					position = position;
				}else {
					position = position + 1;
				}
				$('#scoreTable tr:last').after('<tr><td>'+position+'</td><td>'+data[i].player+'</td><td>'+data[i].score+'</td></tr>');
			}
			$('#chargement').css('display','none');
			$('#classement').css('display','block');
    },
		error: function (data) {
    	console.log(data);
    }
	});
}

function replay(){
	$('#endGame').css('display','none');
	startGame();
}

function retour() {
	$('.app').removeClass('resetClassement');
	$('#classement').removeClass('resetClassementdeux');

	$('#classement').css('display','none');
	$('#game').css('display','block');
}
