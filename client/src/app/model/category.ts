/*
子類別，如：資訊中心、推廣教育中心、兒童班、證照班
*/

export class Category<T> {
  name: string;
  items: T[];
}
