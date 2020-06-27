import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from './products/product.module'

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, HttpClientModule, ProductModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
