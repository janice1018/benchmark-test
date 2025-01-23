import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CommonModule,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        
    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }