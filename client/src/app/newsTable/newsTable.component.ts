import { Component } from '@angular/core';
import { FakeTableDataTwo } from 'client/app/fakeTableData2';
import { News } from 'client/app/model/new';
import { TableListComponent } from 'client/app/table-list/table-list.component';

@Component({
  selector: 'app-news',
  templateUrl: '../table-list/table-list.html',
  styleUrls: ['../table-list/table-list.css']
})

export class NewsComponent extends TableListComponent<News> {

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.superCategories = new FakeTableDataTwo().superCategory;

    // 這個Title是table的thead，以下排列既是table column的順序
    this.tableTitle = {
      category: '類別',
      name: '課程名稱',
      postDate: '公告日期',
      click: '點閱量'
    };
    super.ngOnInit();
  }
}
