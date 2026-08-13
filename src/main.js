import MenuScene from './scenes/MenuScene.js';
import PlayScene from './scenes/PlayScene.js';
import GameOverScene from './scenes/GameOverScene.js';
import { loadHighScore } from './utils/save.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [ MenuScene, PlayScene, GameOverScene ]
};

const game = new Phaser.Game(config);

// Load highscore into registry so scenes can read it
game.registry.set('highscore', loadHighScore());
