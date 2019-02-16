import { Course } from 'client/app/model/course';

/*
子類別，如：資訊中心、推廣教育中心、兒童班、證照班
*/

export class Category {
    name: string;
    courses: Course[];
}
