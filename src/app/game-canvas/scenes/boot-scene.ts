import Phaser from 'phaser';
import { SceneNames } from '../../shared/constants/scene-names';

export class BootScene extends Phaser.Scene {
    create(): void {
        // We use 'run' here instead of 'start'. The load scene will be loading and setting up all of the assets.
        // By running load over this scene it prevents any laggy display while the assets are loading. as the initial scene is already loaded and built.
        this.scene.run(SceneNames.LOAD);
    }
}
