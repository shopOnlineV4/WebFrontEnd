import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  categories: Category[];
  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService) { }
  ngOnInit(): void {
    this.productService.GetAllProduct().subscribe((products: Product[]) => {
      this.products = products;
    });
    this.categoryService.GetAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });

  }

}
