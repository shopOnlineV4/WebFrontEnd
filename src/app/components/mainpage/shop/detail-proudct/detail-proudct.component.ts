import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/operators';
import { ProductInfor, Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Image } from 'src/app/models/image';
import { TypeProduct } from 'src/app/models/typeProduct';
import { Colors } from 'src/app/models/color';
import { Size } from 'src/app/models/size';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detail-proudct',
  templateUrl: './detail-proudct.component.html',
  styleUrls: ['./detail-proudct.component.less']
})
export class DetailProudctComponent implements OnInit {
  product: ProductInfor;
  products: Product[];
  category: Category;
  images: Image[];
  colors: Colors[];
  sizes: Size[];

  formTypeProduct: FormGroup;


  constructor(private activeRouter: ActivatedRoute,
    private productService: ProductsService,
    private formBuilder: FormBuilder) {
    this.product = new ProductInfor;
    this.category = new Category;
    this.colors = [];
    this.sizes = [];

  }

  ngOnInit(): void {
    this.formTypeProduct = this.formBuilder.group(
      {
        colorId: new FormControl('1', [Validators.required]),
        sizeId: new FormControl('1', [Validators.required]),
        productId: new FormControl('', [Validators.required])
      }
    );

    this.formTypeProduct.get('sizeId').valueChanges.subscribe(x => console.log(this.formTypeProduct.get('sizeId').value))
    this.activeRouter.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.productService.ProductServiceById(id)
      )).subscribe((product: ProductInfor) => {
        this.product = product;
        this.category = product.category;
        this.images = product.images;

        this.formTypeProduct.patchValue({ productId: this.product.id });

        product.typeProducts.forEach((item: TypeProduct) => {
          this.colors.push(item.colorCode);
        });
        this.colors.filter((thing, i, arr) => {
          return arr.findIndex(t => t.id === thing.id) === i;
        });
        product.typeProducts.forEach((item: TypeProduct) => {
          this.sizes.push(item.size);
        });
        this.sizes.filter((thing, i, arr) => {
          return arr.findIndex(t => t.id === thing.id) === i;
        });
        this.formTypeProduct.patchValue({ sizeId: this.sizes.find(x => x).id })
      });
    this.productService.getRandom5Product().subscribe((x: Product[]) => {
      this.products = x;
    });
  }

  GetColor(colorId: number): void {
    this.formTypeProduct.patchValue({ colorId: colorId });
  }

  submitToCart(): void {
    var valueForm = this.formTypeProduct;
    var typeProduct = new TypeProduct;
    typeProduct.colorId = valueForm.get('colorId').value;
    typeProduct.sizeId = valueForm.get('sizeId').value;
    typeProduct.productId = valueForm.get('productId').value;
    console.log(typeProduct);
  }
}
