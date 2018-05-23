import { Component, OnInit, OnChanges} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit, OnChanges {
  images: Array<string>;
  width: number;
  height: number;

  title = 'Zarządzaj swoimi finasami osobistmi';
  subtitle = 'dostęp do aplikacji dosłownie wszędzie i o każdej porze';
  description = 'Jedyna taka całkowicie darmowa platforma do zarządzania osobistymi wydatkami. Sprawdzaj i prowadz pełną ewidencje na co wydajesz, ile pali twój samochód i wiele innych';

  constructor(config: NgbCarouselConfig, private __http: HttpClient) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;

    this.width = 1920;
    this.height = 1200;
  }
  ngOnInit() {
    this.__http.get('https://picsum.photos/list')
      .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/${this.width}/${this.height}?image=${randomId}`;
    });
  }



}
