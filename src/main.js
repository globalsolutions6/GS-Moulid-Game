import PlayScene from './scenes/PlayScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [ PlayScene ]
};

new Phaser.Game(config);
