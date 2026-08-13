export default class MenuScene extends Phaser.Scene {
  constructor(){ super('Menu'); }

  create(){
    const { width, height } = this.scale;
    this.add.text(width/2, height/2 - 60, 'GS Moulid Game', { font: '36px Arial', fill: '#ffffff' }).setOrigin(0.5);
    this.add.text(width/2, height/2 - 10, 'Use arrow keys to move', { font: '18px Arial', fill: '#cccccc' }).setOrigin(0.5);

    const startBtn = this.add.text(width/2, height/2 + 40, 'START', { font: '26px Arial', fill: '#00ff00', backgroundColor: '#222' })
      .setPadding(10)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    startBtn.on('pointerdown', () => {
      this.scene.start('Play');
    });

    const high = this.registry.get('highscore') || 0;
    this.add.text(10, 10, `High Score: ${high}`, { font: '16px Arial', fill: '#ffffff' });
  }
}
