import Phaser from 'phaser';
import { AssetKeys, PlayerAnimationKeys } from '../constants/keys';

export const buildPlayerAnimations = (scene: Phaser.Scene) => {
    scene.anims.create({
        key: PlayerAnimationKeys.WALK,
        frames: scene.anims.generateFrameNames(AssetKeys.PLAYER, {
            prefix: 'robo_player_',
            start: 2,
            end: 3,
        }),
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: PlayerAnimationKeys.IDLE,
        frames: [{ key: AssetKeys.PLAYER, frame: 'robo_player_0' }],
        frameRate: 10,
    });

    scene.anims.create({
        key: PlayerAnimationKeys.JUMP,
        frames: [{ key: AssetKeys.PLAYER, frame: 'robo_player_1' }],
        frameRate: 10,
    });
};
