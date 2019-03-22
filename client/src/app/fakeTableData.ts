
import { Category } from '~/app/model/category';
import { Course } from '~/app/model/course';

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

  categoryA: Category<Course> = { name: '推廣教育中心', items: this.coursesA };

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

  categoryB: Category<Course> = { name: '資中', items: this.coursesB };
  categoryC: Category<Course> = { name: 'C', items: this.coursesA };
  categoryD: Category<Course> = { name: 'D', items: this.coursesB };


  superCategory: Array<Category<Category<Course>>> = [
    { name: '課程單位', items: [this.categoryA, this.categoryB] },
    { name: '課程分類', items: [this.categoryC, this.categoryD] }
  ];

}
