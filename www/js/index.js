var pseudo = '';

function start() {
	//CSS pour changer d'écran.
	$('#startScreen').css('display','none');
	$('.app').css('background','none');
	$('#game').css('display','block');

	//Modification des données
	var pseudo = $('#pseudo').val();

	//Boucle timer
	var compter = 5;
	var stop='';
	setInterval(function(){
		if (stop=='') {
			compter = compter - 1;
			$('#rules .timer').remove();
			$('#rules .forJq').after('<h1 class="timer animated zoomIn"></h1>');

			$('#rules .timer').html(compter);

			if (compter <= 0) {
				stop = 'stop';
				$('#rules .timer').html('GO !');
				startGame();
			}
		}
	}, 1000);
	return false;
}

function startGame(){
	//CSS pour changer d'écran.
	$('#rules').css('display','none');
	$('#tapParty').css('display','block');

	//Boucle timer
	var stop='';
	var compter = 10;
	setInterval(function(){
		if (stop=='') {
			compter = compter - 1;
			$('#tapParty .timer').remove();
			$('#tapParty .forJq').after('<h1 class="timer animated zoomIn"></h1>');

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
