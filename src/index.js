import Phaser from './phaser.min';
import config from './config';
import boot from './scenes/boot-scene';
import preload from './scenes/preload-scene';
import game from './scenes/game-scene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', boot);
    this.scene.add('Preloader', preload);
    // this.scene.add('Title', TitleScene);
    this.scene.add('Game', game);
    this.scene.start('Boot');
  }
}

window.game = new Game();