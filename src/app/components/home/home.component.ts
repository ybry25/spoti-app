import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  paises: any;
  constructor(private http: HttpClient) {
    http.get('https://restcountries.com/v3.1/lang/spanish').subscribe(
      (data) => {
        this.paises = data;
        console.log(this.paises);
      },
      (e) => {
        console.error(e);
      }
    );
  }
}
