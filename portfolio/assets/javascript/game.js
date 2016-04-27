// sets available character's and stats
var characters = [
	{Name: "Han Solo", HealthPoints: "120", AttackPower: 6, CounterAttackPower: 12, source: "assets/images/han-solo.jpg", background: "assets/images/mos_eisley.jpg"},
	{Name: "Darth vader", HealthPoints: "150", AttackPower: 8, CounterAttackPower: 16, source: "assets/images/darth-vader.jpg", background: "assets/images/death-star1.jpg"},
	{Name: "Yoda", HealthPoints: "180", AttackPower: 10, CounterAttackPower: 20, source: "assets/images/yoda.jpg", background: "assets/images/dagoba.jpeg"},
	{Name: "Boba Fett", HealthPoints: "220", AttackPower: 12, CounterAttackPower: 25, source: "assets/images/boba-fett.jpg", background: "assets/images/cloud-city.png"}
];

// creates divs to represent each character
for (var i=0; i<characters.length; i++){
	$('.character').append('<div class="char" id="char'+[i]+'"></div>');	
	$('#char'+[i]).append('<img src='+characters[i].source+'>');
	$('#char'+[i]).prepend('<p>'+characters[i].Name+'</p>');
	$('#char'+[i]).append('<p id="char'+[i]+'health">'+characters[i].HealthPoints+'</p>');
};

 $("#char0").on('click', function () {
  	$('#char0').appendTo('#player');
  	$('#char0').attr('id','player');
  	var player = true;
  	$('#char1, #char2, #char3').appendTo('#enemies');
 	$('#char1').attr('id','enemy1');
 	$('#char2').attr('id','enemy2');
 	$('#char3').attr('id','enemy3');
 		if (player === true){
			$('#enemy1').on('click', function () {
		 	$("#enemy1").appendTo('#defender');
		 	defender = true;
		 		if (defender == true){
		 			counter = 1;
		 			playerAttack = characters[0].AttackPower * counter;
		 			playerHealth = characters[0].HealthPoints;
		 			defenderAttack = characters[1].CounterAttackPower;
		 			defenderHealth = characters[1].HealthPoints;
		 				$('#fight').click(function(){
		 					$('#attack-log').html('You attacked '+characters[1].Name+' for '+playerAttack+' damage.');
		 					$('#counter-attack-log').html(characters[1].Name+' attacked you back for '+defenderAttack+' damage.');
		 					$('#char0health').html(playerHealth-defenderAttack);
		 					counter++
		 				})
		 		}
			});
 		}
  });
  
  $("#char1").on('click', function () {
  	$('#char1').appendTo('#player');
  	$('#char1').attr('id','player');
  	$('#char0, #char2, #char3').appendTo('#enemies');
 	$('#char0').attr('id','enemy1');
 	$('#char2').attr('id','enemy2');
 	$('#char3').attr('id','enemy3');
  });
  
  $("#char2").on('click', function () {
  	$('#char2').appendTo('#player');
  	$('#char2').attr('id','player');
  	$('#char0, #char1, #char3').appendTo('#enemies');
 	$('#char0').attr('id','enemy1');
 	$('#char1').attr('id','enemy2');
 	$('#char3').attr('id','enemy3');
  });
  
  $("#char3").on('click', function () {
  	$('#char3').appendTo('#player');
  	$('#char3').attr('id','player');
  	$('#char0, #char1, #char2').appendTo('#enemies');
 	$('#char0').attr('id','enemy1');
 	$('#char1').attr('id','enemy2');
 	$('#char2').attr('id','enemy3');
 });
 
 
 $('#enemy2').on('click', function () {
 	$("#enemy2").appendTo('#defender');
 	console.log('yes');
 });
 
 $('#enemy3').on('click', function () {
 	$("#enemy3").appendTo('#defender');
 	console.log('yes');
 }); 