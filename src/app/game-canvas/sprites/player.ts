import Phaser from 'phaser';
import { AssetKeys, PlayerAnimationKeys } from '../../shared/constants/keys';

// Depending on the nature of the class, this could extend a Sprite or other game object.
// For this we just needed a simple class that manages a Sprite internally.
export class Player {
    scene: Phaser.Scene;
    player: Phaser.Physics.Arcade.Sprite;

    // Typescript has trouble typing the sprite body for arcade physics,
    // So we get a handle on the sprite body and manually cast it.
    playerBody: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
        this.player = scene.physics.add.sprite(x, y, AssetKeys.PLAYER);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.playerBody = this.player.body as Phaser.Physics.Arcade.Body;
    }

    setPlatforms(tilemap: Phaser.Tilemaps.TilemapLayer): void {
        this.scene.physics.add.collider(this.player, tilemap);
    }

    setSpikeCollision(spikes: Phaser.Physics.Arcade.Group): void {
        this.scene.physics.add.collider(this.player, spikes, this.playerHit, undefined, this);
    }

    // For the following functions, I had considered using a state machine
    // if this were a more complex project, I most likely would have.

    playerHit(): void {
        this.player.setVelocity(0, 0);
        this.player.setX(50);
        this.player.setY(300);
        this.player.play(PlayerAnimationKeys.IDLE, true);
        this.player.setAlpha(0);
        let tw = this.scene.tweens.add({
            targets: this.player,
            alpha: 1,
            duration: 100,
            ease: 'Linear',
            repeat: 5,
        });
    }

    left(): void {
        this.player.setFlipX(true);
        this.player.setVelocityX(-200);
        if (this.playerBody.onFloor()) {
            this.player.play(PlayerAnimationKeys.WALK, true);
        }
    }

    right(): void {
        this.player.setFlipX(false);
        this.player.setVelocityX(200);
        if (this.playerBody.onFloor()) {
            this.player.play(PlayerAnimationKeys.WALK, true);
        }
    }

    stop(): void {
        this.player.setVelocityX(0);
        if (this.playerBody.onFloor()) {
            this.player.play(PlayerAnimationKeys.IDLE, true);
        }
    }

    jump(): void {
        if (this.playerBody.onFloor()) {
            this.player.setVelocityY(-350);
            this.player.play(PlayerAnimationKeys.JUMP, true);
        }
    }
}
