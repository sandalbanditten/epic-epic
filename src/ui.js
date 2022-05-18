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
	text(`Size: ${player.diameter}`, width - 10, 20 * 3);
	text(`HP: ${player.lives}`, width - 10, 20 * 4);
	pop();

}

function showEnemyStats(enemy, width, height) {
	push();
	textAlign(LEFT, CENTER);
	text(`Enemy type: ${enemy.type}`, 10, 20 * 1);
	text(`Enemy speed: ${enemy.speed}`, 10, 20 * 2);
	pop();
}
