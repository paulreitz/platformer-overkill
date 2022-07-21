import Phaser from 'phaser';
import { SceneNames } from '../../shared/constants/scene-names';

export class LoadScene extends Phaser.Scene {
    preload(): void {
        // all of the assets will be loaded here.
    }

    create(): void {
        this.scene.start(SceneNames.GAME);
    }
}
