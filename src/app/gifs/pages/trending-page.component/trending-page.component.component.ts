import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';

import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from './../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page.component',
  standalone: true,
  //imports: [GifListItemComponent, GifListComponent],
  templateUrl: './trending-page.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponentComponent  implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event : Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if( !scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    console.log({scrollTop, clientHeight});
    const isABottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isABottom){
      this.gifService.loadTrendingGifs();
    }
  }
}

