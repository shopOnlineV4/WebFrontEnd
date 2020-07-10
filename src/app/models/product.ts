import { NumberSymbol } from '@angular/common'
import { Category } from './category'
import { Image } from './image'
import { TypeProduct } from './typeProduct';

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  productImage: string;
  detail: string;
  price: number;
  createBy: string;
  modifiedBy: string;
  dateCreate: Date;
  dateModified: Date;
  status: number;
  imageProductLocation: string;
  fileData: string;
  fileImage: string;
  category: Category;
}
export class ProductInfor {
  id: string;
  categoryId: string;
  name: string;
  productImage: string;
  detail: string;
  price: number;
  createBy: string;
  modifiedBy: string;
  dateCreate: Date;
  dateModified: Date;
  status: number;
  imageProductLocation: string;
  category: Category;
  images: Image[];
  typeProducts : TypeProduct[];

}


