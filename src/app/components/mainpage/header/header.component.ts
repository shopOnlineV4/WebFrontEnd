import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  categories: Category[];
  childCategory: Category[];
  parentCategory: Category[];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    console.log('header is running')
    this.categoryService.GetAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories
      this.childCategory = categories.filter(x => x.categoryParent === 0);
      this.parentCategory = categories.filter(x => x.categoryParent === 1);
    });

  }
}
