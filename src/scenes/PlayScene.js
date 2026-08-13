export default class PlayScene extends Phaser.Scene {
  constructor(){ super('Play'); }

  preload(){
    // No external assets required for this minimal starter.
  }

  create(){
    // Player is a simple green rectangle with an Arcade physics body
    this.player = this.add.rectangle(400, 300, 40, 40, 0x00ff00);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();

    // Score
    this.score = 0;
    this.scoreText = this.add.text(10, 10, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });

    // Simple moving enemy
    this.enemy = this.add.rectangle(100, 100, 40, 40, 0xff0000);
    this.physics.add.existing(this.enemy);
    this.enemy.body.setVelocity(120, 80);
    this.enemy.body.setBounce(1, 1);
    this.enemy.body.setCollideWorldBounds(true);

    // Collision/overlap handler - go to GameOver scene and save score
    this.physics.add.overlap(this.player, this.enemy, () => {
      const last = Math.floor(this.score);
      this.registry.set('lastScore', last);
      const high = this.registry.get('highscore') || 0;
      if (last > high) {
        this.registry.set('highscore', last);
        localStorage.setItem('gs_moulid_highscore', last);
      }
      this.scene.start('GameOver', { score: last });
    }, null, this);

    // Instructions
    this.add.text(10, 570, 'Use arrow keys to move. Avoid the red square. Score increases over time.', { font: '14px Arial', fill: '#cccccc' });
  }

  update(time, delta){
    const speed = 220;
    const body = this.player.body;
    body.setVelocity(0, 0);

    if (this.cursors.left.isDown) body.setVelocityX(-speed);
    if (this.cursors.right.isDown) body.setVelocityX(speed);
    if (this.cursors.up.isDown) body.setVelocityY(-speed);
    if (this.cursors.down.isDown) body.setVelocityY(speed);

    // Increase score over time
    this.score += delta / 1000;
    this.scoreText.setText('Score: ' + Math.floor(this.score));
  }
}
