var pseudo = '';
var score = 0;

function start() {
	//CSS pour changer d'écran.
	$('#startScreen').css('display','none');
	$('.app').css('background','none');
	$('#game').css('display','block');

	//Modification des données
	pseudo = $('#pseudo').val();
	console.log('pseudo '+pseudo);

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
	console.log("pseudo 2 "+pseudo);
	console.log(score);

	//Insert in BDD
	$.ajax({
    type: "POST",
    url: "http://195.83.128.55/~mim15a03/appli/addBdd.php",
    data: "pseudo="+pseudo+"&score="+score,
    dataType: "html",
    success: function (data) {
      console.log('Score ajouté à la BDD');
			$('#votreScore').text(score);
    }
	});

	//SELECT BDD
	$.ajax({
    type: "POST",
    url: "http://195.83.128.55/~mim15a03/appli/getScoresInBdd.php",
    dataType: "json",
    success: function (data) {
      console.log('Select des scores de la BDD');
			console.log(data);

			var position = 0;
			for (var i = 0; i < data.length; i++) {

				if (i == 0) {
					var ancienScore = 0;
					console.log("1");
				}else {
					var Score = data[i-1];
					console.log(ancienScore);
					var ancienScore = data[i-1].score;
					console.log("2");

				}

				if (ancienScore == data[i].score ) {
					position = position;
					console.log("3");
				}else {
					position = position + 1;
					console.log("4");
				}
				$('#scoresTable tr:last').after('<tr><td>'+position+'</td><td>'+data[i].player+'</td><td>'+data[i].score+'</td></tr>');
			}
    }
	});
}
