
import { Category } from 'client/app/model/category';
import { Course } from 'client/app/model/course';
import { SuperCategory } from 'client/app/model/superCategory';

export class FakeTableData {
  coursesA: Course[] = [
    {
      name: 'Test1', startDate: '2012/2/3', endDate: '2013/3/2',
      comfirmDate: '2011/12/2', state: '報名中', click: 12, location: '海外'
    },
    {
      name: 'Test3', startDate: '2012/2/3', endDate: '2013/4/2',
      comfirmDate: '2011/12/2', state: '報名中', click: 12, location: '海外'
    },
    {
      name: 'Test2', startDate: '2012/4/3', endDate: '2013/2/2',
      comfirmDate: '2011/12/2', state: '不開課', click: 12, location: '雲林'
    }
  ];

  categoryA: Category = { name: '推廣教育中心', courses: this.coursesA };

  coursesB: Course[] = [
    {
      name: 'TestB1', startDate: '2012/2/3', endDate: '2013/3/2',
      comfirmDate: '2011/12/2', state: '報名中', click: 12, location: '海外'
    },
    {
      name: 'TestB2', startDate: '2012/2/3', endDate: '2013/4/2',
      comfirmDate: '2011/12/2', state: '報名中', click: 12, location: '海外'
    },
    {
      name: 'TestB3', startDate: '2012/4/3', endDate: '2013/2/2',
      comfirmDate: '2011/12/2', state: '不開課', click: 12, location: '雲林'
    }
  ];

  categoryB: Category = { name: '資中', courses: this.coursesB };
  categoryC: Category = { name: 'C', courses: this.coursesA };
  categoryD: Category = { name: 'D', courses: this.coursesB };


  superCategory: SuperCategory[] = [
    { name: '課程單位', categories: [this.categoryA, this.categoryB] },
    { name: '課程分類', categories: [this.categoryC, this.categoryD] }
  ];

}
