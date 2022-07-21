import Phaser from 'phaser';
import { AssetKeys } from '../../shared/constants/keys';
import { SceneNames } from '../../shared/constants/scene-names';
import { buildPlayerAnimations } from '../../shared/utils/animation-builders';

export class LoadScene extends Phaser.Scene {
    preload(): void {
        this.load.image(AssetKeys.BACKGROUND, 'assets/game/images/background.png');
        this.load.image(AssetKeys.SPIKE, 'assets/game/images/spike.png');
        this.load.image(AssetKeys.TILE, 'assets/game/tilesets/platformPack_tilesheet.png');
        this.load.atlas(
            AssetKeys.PLAYER,
            'assets/game/images/kenney_player.png',
            'assets/game/images/kenney_player_atlas.json'
        );
        this.load.tilemapTiledJSON(AssetKeys.MAP, 'assets/game/tilemaps/level1.json');
    }

    create(): void {
        // In larger projects,
        // a lot of the asset management (loading and creating)
        // should be passed off to utility functions/classes.
        buildPlayerAnimations(this);
        this.scene.start(SceneNames.GAME);
    }
}
