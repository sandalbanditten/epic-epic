function showUi(player, width, height) {
  push();
  fill(255, 144, 31);
  textSize(20);

  showStats(player, width, height);
  pop();
}

function showStats(player, width, height) {
  push();
  textAlign(CENTER, CENTER);
  text(`Player score: ${player.score}`, width / 2 + 10, 20 * 1);
  text(`Player speed: ${player.speed}`, width / 2 + 10, 20 * 2);
  let size = player.radius() * player.lives;
  text(`Player size: ${size}`, width / 2 + 10, 20 * 3);
  pop();

}
