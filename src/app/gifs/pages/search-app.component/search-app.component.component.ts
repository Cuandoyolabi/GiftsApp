import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-search-app.component',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-app.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchAppComponentComponent {

  onSearch(query: string){
    console.log({ query });
  }

}
