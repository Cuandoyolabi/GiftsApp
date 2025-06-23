import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

  gifService = inject(GifService)

  query = toSignal( inject(ActivatedRoute).params.pipe(map( params => params['query'])
  ));

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })

}




