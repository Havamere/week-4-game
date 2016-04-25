var characters = [
	{Name: "Han Solo", HealthPoints: "120", AttackPower: 6, CounterAttackPower: 12, source: "assets/images/han-solo.jpg", background: "assets/images/mos_eisley.jpg"},
	{Name: "Darth Vader", HealthPoints: "150", AttackPower: 8, CounterAttackPower: 16, source: "assets/images/darth-vader.jpg", background: "assets/images/death-star1.jpg"},
	{Name: "Yoda", HealthPoints: "180", AttackPower: 10, CounterAttackPower: 20, source: "assets/images/yoda.jpg", background: "assets/images/dagoba.jpeg"},
	{Name: "Boba Fett", HealthPoints: "220", AttackPower: 12, CounterAttackPower: 25, source: "assets/images/boba-fett.jpg", background: "assets/images/cloud-city.png"}
];

for (var i=0; i<characters.length; i++){
	$("#"+i).attr({
		Name: characters[i].Name,
		HealthPoints: characters[i].HealthPoints,
		AttackPower: characters[i].AttackPower,
		CounterAttackPower: characters[i].CounterAttackPower,
		src: characters[i].source,
		background: characters[i].background,
	})
}
