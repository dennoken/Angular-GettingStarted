import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service'
//import * as productsData from 'src/api/products/products.json';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List'
  imageWidth = 50
  imageMargin = 2
  showImg: boolean = false

  private _listFilter: string

  public get listFilter(): string {
    return this._listFilter
  }

  public set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products
  }

  filteredProducts: IProduct[]

  products: IProduct[]

  errorMessage: string

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImg = !this.showImg
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products
        this.filteredProducts = this.products
      },
      error: (err) => (this.errorMessage = err),
    })
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    )
  }

  clearFilter(): void {
    this.listFilter = ''
  }

  updateTitle(title: string): void {
    this.pageTitle = 'Product list: ' + title
  }
}
