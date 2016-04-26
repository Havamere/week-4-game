var characters = [
	{Name: "Han Solo", HealthPoints: "120", AttackPower: 6, CounterAttackPower: 12, source: "assets/images/han-solo.jpg", background: "assets/images/mos_eisley.jpg"},
	{Name: "Darth vader", HealthPoints: "150", AttackPower: 8, CounterAttackPower: 16, source: "assets/images/darth-vader.jpg", background: "assets/images/death-star1.jpg"},
	{Name: "Yoda", HealthPoints: "180", AttackPower: 10, CounterAttackPower: 20, source: "assets/images/yoda.jpg", background: "assets/images/dagoba.jpeg"},
	{Name: "Boba Fett", HealthPoints: "220", AttackPower: 12, CounterAttackPower: 25, source: "assets/images/boba-fett.jpg", background: "assets/images/cloud-city.png"}
];

for (var i=0; i<characters.length; i++){
	$('.character').append('<div class ="char" id="char'+[i]+'"></div>');	
	$('#char'+[i]).append('<img src='+characters[i].source+'>');
	$('#char'+[i]).prepend('<p>'+characters[i].Name+'</p>');
	$('#char'+[i]).append('<p>'+characters[i].HealthPoints+'</p>');
};

$("#char0").on('click', function () {
	$('#char0').appendTo('#you');
	$('#char0').attr('id','player');
	$('#char1, #char2, #char3').appendTo('#enemies');
	$('#char1').attr('id','enemy1');
	$('#char2').attr('id','enemy2');
	$('#char3').attr('id','enemy3');
});

$("#char1").on('click', function () {
	$('#char1').appendTo('#you');
	$('#char1').attr('id','player');
	$('#char0, #char2, #char3').appendTo('#enemies');
	$('#char0').attr('id','enemy1');
	$('#char2').attr('id','enemy2');
	$('#char3').attr('id','enemy3');
});

$("#char2").on('click', function () {
	$('#char2').appendTo('#you');
	$('#char2').attr('id','player');
	$('#char0, #char1, #char3').appendTo('#enemies');
	$('#char0').attr('id','enemy1');
	$('#char1').attr('id','enemy2');
	$('#char3').attr('id','enemy3');
});

$("#char3").on('click', function () {
	$('#char3').appendTo('#you');
	$('#char3').attr('id','player');
	$('#char0, #char1, #char2').appendTo('#enemies');
	$('#char0').attr('id','enemy1');
	$('#char1').attr('id','enemy2');
	$('#char2').attr('id','enemy3');
});

$('#enemy1').on('click', function () {
	$("#enemy1").appendTo('#defender');
});

$('#enemy2').on('click', function () {
	$("#enemy2").appendTo('#defender');
});

$('#enemy3').on('click', function () {
	$("#enemy3").appendTo('#defender');
});