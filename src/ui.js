function showUi(player, enemy, width, height) {
	push();
	stroke(255, 255, 255);
	fill(255, 255, 255);
	textSize(20);

	showStats(player, width, height);
	showEnemyStats(enemy, width, height);
	pop();
}

function showStats(player, width, height) {
	// text(`HP: ${player.health}`, 8, 16);
	// text(`Score: ${player.score}`, 8, 16 * 2);
	// Temporary shit v
	// these should eventually come from the enemy and player inputtet i main
	textAlign(RIGHT, CENTER);
	let health = 3;
	let score = 2000;
	let size = 20;
	let speed = 3;
	text(`Score: ${score}`, width - 10, 20 * 1);
	text(`Speed: ${speed}`, width - 10, 20 * 2);
	text(`Size: ${size}`, width - 10, 20 * 3);
	text(`HP: ${health}`, width - 10, 20 * 4);
	// Temporary shit ^

}

function showEnemyStats(enemy, width, height) {
	// Temporary shit v
	// these should eventually come from the enemy and player inputtet i main
	let type = "liniar";
	let speed = 3;
	textAlign(LEFT, CENTER);
	text(`Enemy type: ${type}`, 10, 20 * 1);
	text(`Enemy speed: ${speed}`, 10, 20 * 2);
	// Temporary shit ^
}
