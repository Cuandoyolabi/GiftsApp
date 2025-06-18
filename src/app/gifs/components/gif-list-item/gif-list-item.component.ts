import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  standalone: true,
  imports: [],
  templateUrl: './gif-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent { }
