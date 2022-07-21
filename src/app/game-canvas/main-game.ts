import Phaser from 'phaser';
import { SceneNames } from '../shared/constants/scene-names';
import { BootScene } from './scenes/boot-scene';
import { GameScene } from './scenes/game-scene';
import { LoadScene } from './scenes/load-scene';

export class MainGame extends Phaser.Game {
    constructor(gameConfig: Phaser.Types.Core.GameConfig) {
        super(gameConfig);

        this.scene.add(SceneNames.BOOT, BootScene);
        this.scene.add(SceneNames.LOAD, LoadScene);
        this.scene.add(SceneNames.GAME, GameScene);
        this.scene.start(SceneNames.BOOT);
    }
}
