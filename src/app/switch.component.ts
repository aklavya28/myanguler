import { Component } from "@angular/core";

@Component({
    selector: "app-switch",
    styles: [`
    a{ cursor:pointer}
    `],
    template: `
        <div class="wrapper">
            <div class="navigation">
            <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" [class.active]="viewMode == 'grid'" (click)="send('grid')">Grid View</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " [class.active]="viewMode == 'list'" (click)="viewMode = 'list'">List View</a>
                    </li>
                </ul>
            </div>
            <div class="content_container" [ngSwitch]="viewMode">
                <div *ngSwitchCase="'grid'">This Grid view container</div>
                <div  *ngSwitchCase="'list'">This List  view container</div>
                <div  *ngSwitchDefault>This Other  view container</div>
            </div>
        </div>
    `
})

export class SwitchComponent{
    viewMode = "grid"
    send(d:string){
      this.viewMode = d
    }

}
