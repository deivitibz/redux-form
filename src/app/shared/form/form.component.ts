import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Form } from './form.interface';
import { Bookmark } from './../store/models/bookmark.model';
import { AppState } from './../store/app-state.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  form: FormGroup;
  form$: Observable<Bookmark>

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form =  this.fb.group({
      name: [''],
      url: [''],
      group: ['']
    })
    this.form$ = this.store.select(store => store.bookmarks)
  }

  ngOnInit(): void {
  }

  add(){
    this.store.dispatch({type: 'ADD_FORM'})
    console.log(this.form$)
  }

}

