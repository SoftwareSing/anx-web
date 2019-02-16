import { Component, OnInit } from '@angular/core';
import { FakeTableData } from 'client/app/fakeTableData';
import { Category } from 'client/app/model/category';
import { SuperCategory } from 'client/app/model/superCategory';

@Component({
  selector: 'app-courses',
  templateUrl: '../table-list/table-list.html',
  styleUrls: ['../table-list/table-list.css']
})
export class CoursesComponent implements OnInit {

  superCategories: SuperCategory[] = new FakeTableData().superCategory; // 只需要抓取最大的類別，就可以得到courses的所有類別及內容
  selectedCategory: Category; // 目前選擇的類別

  // 這個Title是table的thead，以下排列既是table column的順序
  tableTitle = {
    location: '地區',
    name: '課程名稱',
    startDate: '開始日期',
    endDate: '結束日期',
    comfirmDate: '開課確認日期',
    state: '開課狀態',
    click: '點閱量'
  };

  constructor() { }

  ngOnInit() {
    this.selectedCategory = this.superCategories[0].categories[0];
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  /*
  這個是配合table-list.html中"let title of tableTitle | keyvalue:withoutSort"使用的，keyvalue為angular內建的函式。
  keyvalue會自動排順序，為了避免排序，才使用了以下函式來避免排序。
  */
  withoutSort(a: any, b: any): any {
    return a.key;
  }
}
