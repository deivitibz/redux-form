import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Form } from './form.interface';
import { Bookmark } from './../store/models/bookmark.model';
import { AppState } from './../store/app-state.model';
import { AddBookmark } from './../store/actions/bookmark.actions';
import * as uuid from 'uuid'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent{

  form: FormGroup;
  form$: Observable<Bookmark>

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form =  this.fb.group({
      id: uuid(),
      name: [''],
      url: [''],
      group: ['']
    })
  }


  add(){
    this.store.dispatch(new AddBookmark(this.form.value))
  }

}

