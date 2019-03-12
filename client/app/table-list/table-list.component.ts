import { Component, OnInit } from '@angular/core';
import { Category } from 'client/app/model/category';

export class TableListComponent<T> implements OnInit {
  superCategories: Array<Category<Category<T>>>; // 只需要抓取最大的類別，就可以得到courses的所有類別及內容
  selectedCategory: Category<T>; // 目前選擇的類別

  // 這個Title是table的thead，以下排列既是table column的順序
  tableTitle = {};

  constructor() { }

  ngOnInit() {
    this.selectedCategory = this.superCategories[0].items[0];
  }

  onSelect(category: Category<T>): void {
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
