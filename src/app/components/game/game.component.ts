import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MainGame } from '../../game-canvas/main-game';
import { GameService } from '../../shared/services/game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit {
    canvasId: string = 'game-canvas';
    game: MainGame;
    constructor(private gameService: GameService) {}
    ngAfterViewInit(): void {
        const gameConfig: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            scale: {
                parent: this.canvasId,
                mode: Phaser.Scale.NONE,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 800,
                height: 640,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 500 },
                    debug: environment.showDebug,
                },
            },
        };
        this.game = new MainGame(gameConfig, this.gameService);
    }
}
