import { Component, OnInit } from '@angular/core';
import { Image } from '../SilderImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images: Image[];
  constructor() { }

  ngOnInit() {
    this.images = [
      { title: 'Slide 1', url: 'assets/slider/img/banner0.jpg' },
      { title: 'Slide 2', url: 'assets/slider/img/banner2.jpg' },
      { title: 'Slide 3', url: 'assets/slider/img/banner3.jpg' },
      { title: 'Slide 4', url: 'assets/slider/img/banner4.jpg' },
      { title: 'Slide 5', url: 'assets/slider/img/banner5.jpg' }
    ];
  }

}
