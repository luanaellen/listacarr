import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;
  constructor(public navCtrl: NavController,
              private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/comments')
    .subscribe(
      (carros) => {
        this.carros = carros;
      }
    );
  }
}
