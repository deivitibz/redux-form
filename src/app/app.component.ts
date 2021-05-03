import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  message: Observable<string>;

  constructor(private store: Store<AppState>){
    this.message = this.store.select('message');
  }

  ngOnInit(){
    this.spanishMessage()
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }
}
