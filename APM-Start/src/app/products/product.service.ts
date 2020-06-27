import { Injectable } from '@angular/core'
import { IProduct } from './product'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { tap, catchError, map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productAPIUrl = 'api/products/products.json'

  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productAPIUrl).pipe(
      tap((data) => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  getProductById(id:number):Observable<IProduct | undefined>{
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    )
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured : ${err.error.message}`
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is : ${err.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
