import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";
import { Gif } from '../../interfaces/gif.interface';


@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent {

  gifs = input.required<Gif[]>();

 }
