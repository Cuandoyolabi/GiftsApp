import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-app.component',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-app.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchAppComponentComponent {

  gifService = inject( GifService);
  gifs = signal<Gif[]>([]);


  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe( resp => {
        this.gifs.set(resp)
      })
  };
}


