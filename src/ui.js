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
	push();
	textAlign(RIGHT, CENTER);
	text(`Score: ${player.score}`, width - 10, 20 * 1);
	text(`Speed: ${player.speed}`, width - 10, 20 * 2);
	text(`Size: ${player.size}`, width - 10, 20 * 3);
	text(`HP: ${player.lives}`, width - 10, 20 * 4);
	pop();

}

function showEnemyStats(enemy, width, height) {
	push();
	// Temporary shit v
	// these should eventually come from the enemy and player inputtet i main
	let type = "liniar";
	let speed = 3;
	textAlign(LEFT, CENTER);
	text(`Enemy type: ${type}`, 10, 20 * 1);
	text(`Enemy speed: ${speed}`, 10, 20 * 2);
	// Temporary shit ^
	pop();
}
