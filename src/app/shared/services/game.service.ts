import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    private currentHitCount = 0;
    private hitCountSource = new Subject<number>();

    hitCount$ = this.hitCountSource.asObservable();

    constructor() {}

    increaseCount(): void {
        this.currentHitCount++;
        this.hitCountSource.next(this.currentHitCount);
    }

    get hitCount(): number {
        return this.currentHitCount;
    }
}
