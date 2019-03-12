import { Component, OnInit } from '@angular/core';

import { Image } from 'client/app/SilderImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images: Image[];
  constructor() { }

  ngOnInit() {
    // 這邊應該要配合api，後端會回傳某folder里的所有圖片的url，這樣就可以在後台管理slider圖片
    this.images = [
      { title: 'Slide 1', url: 'assets/slider/img/banner0.jpg' },
      { title: 'Slide 2', url: 'assets/slider/img/banner2.jpg' },
      { title: 'Slide 3', url: 'assets/slider/img/banner3.jpg' },
      { title: 'Slide 4', url: 'assets/slider/img/banner4.jpg' },
      { title: 'Slide 5', url: 'assets/slider/img/banner5.jpg' }
    ];
  }

}
