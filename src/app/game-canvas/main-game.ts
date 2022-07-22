import Phaser from 'phaser';
import { SceneNames } from '../shared/constants/scene-names';
import { PlatformConfig } from '../shared/interfaces/platform-config';
import { GameService } from '../shared/services/game.service';
import { BootScene } from './scenes/boot-scene';
import { GameScene } from './scenes/game-scene';
import { LoadScene } from './scenes/load-scene';

export class MainGame extends Phaser.Game {
    constructor(gameConfig: Phaser.Types.Core.GameConfig, gameService: GameService) {
        super(gameConfig);

        // The following bit of hackery is letting typescript know that we're redefining the type of an inheritted property.
        // This needs to be assigned after the super() constructor has been called.
        // We can't just pass in a PlatformConfig to this class's constructor.
        (this.config as unknown as PlatformConfig).gameService = gameService;

        this.scene.add(SceneNames.BOOT, BootScene);
        this.scene.add(SceneNames.LOAD, LoadScene);
        this.scene.add(SceneNames.GAME, GameScene);
        this.scene.start(SceneNames.BOOT);
    }
}
