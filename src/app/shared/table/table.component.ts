import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../store/models/bookmark.model';
import { AppState } from './../store/app-state.model';
import { Store } from '@ngrx/store';
import { RemoveBookmark } from '../store/actions/bookmark.actions';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'group', 'actions'];
  dataSource: Observable<Bookmark>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.dataSource = this.store.select(store => store.bookmarks)
  }

  delete(element: Bookmark) {
    this.store.dispatch(new RemoveBookmark(element.id))
  }

}
