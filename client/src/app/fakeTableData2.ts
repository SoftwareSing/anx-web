
import { Category } from '~/app/model/category';
import { News } from '~/app/model/new';

export class FakeTableDataTwo {
  newsA: News[] = [
    {
      category: 'heihei', name: 'Test1', postDate: '2012/2/3', click: 12
    },
    {
      category: 'heihei2', name: 'Test3', postDate: '2012/2/4', click: 1112
    },
    {
      category: 'heihei3', name: 'Test2', postDate: '2012/2/5', click: 12
    }
  ];

  categoryA: Category<News> = { name: '類別1', items: this.newsA };

  newsB: News[] = [
    {
      category: 'heiheasdi3', name: 'Testbs', postDate: '2012/2/5', click: 12
    },
    {
      category: 'heihasdei3', name: 'Testbdaa2', postDate: '2012/2/5', click: 12
    },
    {
      category: 'heiheasdi3', name: 'Testb2', postDate: '2012/2/5', click: 12
    }
  ];

  categoryB: Category<News> = { name: '類別2', items: this.newsB };
  categoryC: Category<News> = { name: '類別3', items: this.newsA };
  categoryD: Category<News> = { name: '類別4', items: this.newsB };


  superCategory: Array<Category<Category<News>>> = [
    { name: '哈哈', items: [this.categoryA, this.categoryB] },
    { name: '科科', items: [this.categoryC, this.categoryD] }
  ];

}
