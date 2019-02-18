import { Component, OnInit } from '@angular/core';
import { FakeTableData } from 'client/app/fakeTableData';
import { Category } from 'client/app/model/category';
import { Course } from 'client/app/model/course';
import { TableListComponent } from 'client/app/table-list/table-list.component';

@Component({
  selector: 'app-courses',
  templateUrl: '../table-list/table-list.html',
  styleUrls: ['../table-list/table-list.css']
})

export class CoursesComponent extends TableListComponent<Course> {
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.superCategories = new FakeTableData().superCategory;

    // 這個Title是table的thead，以下排列既是table column的順序
    this.tableTitle = {
      location: '地區',
      name: '課程名稱',
      startDate: '開始日期',
      endDate: '結束日期',
      comfirmDate: '開課確認日期',
      state: '開課狀態',
      click: '點閱量'
    };
    super.ngOnInit();
  }
}
