import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-gifs-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './gifs-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuComponent { }
