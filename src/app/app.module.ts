import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HudComponent } from './components/hud/hud.component';

@NgModule({
    declarations: [
        // prettier-ignore
        AppComponent,
        GameComponent,
        HudComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
