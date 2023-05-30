import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-carousel',
  templateUrl: './ngx-carousel.component.html',
  styleUrls: ['./ngx-carousel.component.css']
})
export class NgxCarouselComponent  {

  slides = [
    { image: 'cat1.jpg', caption: 'Slide 1' },
    { image: 'cat2.jpg', caption: 'Slide 2' },
    { image: 'cat3.jpg', caption: 'Slide 3' }
  ];
}
