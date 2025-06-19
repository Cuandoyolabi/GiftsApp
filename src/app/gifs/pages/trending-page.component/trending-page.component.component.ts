import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListItemComponent } from "../../components/gif-list-item/gif-list-item.component";
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-trending-page.component',
  standalone: true,
  imports: [GifListItemComponent, GifListComponent],
  templateUrl: './trending-page.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponentComponent { }
