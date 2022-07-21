import Phaser from 'phaser';
import { AssetKeys, MapLayerKeys } from '../../shared/constants/keys';
import { Player } from '../sprites/player';

export class GameScene extends Phaser.Scene {
    backgroundImage: Phaser.GameObjects.Image;
    map: Phaser.Tilemaps.Tilemap;
    tileset: Phaser.Tilemaps.Tileset;
    platforms: Phaser.Tilemaps.TilemapLayer;
    player: Player;
    spikes: Phaser.Physics.Arcade.Group;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    create(): void {
        this.backgroundImage = this.add.image(0, 0, AssetKeys.BACKGROUND).setOrigin(0, 0);
        this.backgroundImage.setScale(2, 0.8);
        this.map = this.make.tilemap({ key: AssetKeys.MAP });
        this.tileset = this.map.addTilesetImage(MapLayerKeys.TILE_SHEET, AssetKeys.TILE);
        this.platforms = this.map.createLayer(MapLayerKeys.PLATFORMS, this.tileset, 0, 200);
        this.platforms.setCollisionByExclusion([-1], true);

        this.player = new Player(this, 50, 300);
        this.player.setPlatforms(this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.spikes = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });

        this.map.getObjectLayer(MapLayerKeys.SPIKES).objects.forEach((spike: Phaser.Types.Tilemaps.TiledObject) => {
            const spikeSprite = this.spikes
                .create(spike.x, (spike.y || 0) + 200 - (spike.height || 0), AssetKeys.SPIKE)
                .setOrigin(0);
            spikeSprite.body.setSize(spike.width, (spike.height || 20) - 20).setOffset(0, 20);
        });
        this.player.setSpikeCollision(this.spikes);
    }

    update(): void {
        if (this.cursors.left.isDown) {
            this.player.left();
        } else if (this.cursors.right.isDown) {
            this.player.right();
        } else {
            this.player.stop();
        }

        if (this.cursors.space.isDown || this.cursors.up.isDown) {
            this.player.jump();
        }
    }
}
