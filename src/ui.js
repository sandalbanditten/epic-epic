function showUi(player, enemy, width, height) {
  push();
  fill(255, 144, 31);
  textSize(20);

  showStats(player, width, height);
  showEnemyStats(enemy, width, height);
  pop();
}

function showStats(player, width, height) {
  push();
  textAlign(LEFT, CENTER);
  text(`Player score: ${player.score}`, width / 2 + 10, 20 * 1);
  text(`Player speed: ${player.speed}`, width / 2 + 10, 20 * 2);
  text(`Player size: ${player.diameter}`, width / 2 + 10, 20 * 3);
  pop();

}

function showEnemyStats(enemy, width, height) {
  push();
  textAlign(RIGHT, CENTER);
  text(`Enemy type: ${enemy.type}`, width / 2 - 10, 20 * 1);
  text(`Enemy speed: ${enemy.speed}`, width / 2 - 10, 20 * 2);
  text(`Enemy size: ${enemy.diameter.toFixed(0)}`, width / 2 - 10, 20 * 3);
  pop();
}
