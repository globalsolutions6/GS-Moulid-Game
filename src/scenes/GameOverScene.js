export default class GameOverScene extends Phaser.Scene {
  constructor(){ super('GameOver'); }

  init(data){
    this.finalScore = data.score || 0;
  }

  create(){
    const { width, height } = this.scale;
    this.add.text(width/2, height/2 - 40, 'Game Over', { font: '36px Arial', fill: '#ff6666' }).setOrigin(0.5);
    this.add.text(width/2, height/2, `Score: ${this.finalScore}`, { font: '24px Arial', fill: '#ffffff' }).setOrigin(0.5);

    // Save high score
    const high = this.registry.get('highscore') || 0;
    if (this.finalScore > high) {
      this.registry.set('highscore', this.finalScore);
      localStorage.setItem('gs_moulid_highscore', this.finalScore);
    }

    const retry = this.add.text(width/2, height/2 + 60, 'RESTART', { font: '20px Arial', fill: '#00ff00', backgroundColor: '#222' })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    retry.on('pointerdown', () => {
      this.scene.start('Play');
    });
  }
}
