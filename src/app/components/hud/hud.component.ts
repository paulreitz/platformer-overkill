import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameService } from '../../shared/services/game.service';

@Component({
    selector: 'app-hud',
    templateUrl: './hud.component.html',
    styleUrls: ['./hud.component.scss'],
})
export class HudComponent implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject<void>();

    count: number = 0;

    constructor(private gameService: GameService) {
        this.count = this.gameService.hitCount;
    }

    ngOnInit(): void {
        this.gameService.hitCount$.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((count: number) => {
            this.count = count;
        });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
