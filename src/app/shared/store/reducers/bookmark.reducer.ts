

import * as uuid from 'uuid'
import { Actions } from '../actions/bookmark.actions';
import { BookmarkActions } from '../enum/bookmark.enum';
import { Bookmark } from './../models/bookmark.model';

const initialState: Bookmark[] = [
  {
    id: uuid(),
    name: 'Google',
    url: 'www.google.es',
    group: 'leisure'
  },
  {
    id: uuid(),
    name: 'Facebook',
    url: 'www.facebook.es',
    group: 'leisure'
  },
]

export function reducer(state: Bookmark[] = initialState, action: Actions){
  switch (action.type) {
    case BookmarkActions.ADD_BOOKMARK:
      return [...state, action.payload]
    case BookmarkActions.REMOVE_BOOKMARK:
      return state.filter(element => element.id !== action.payload)
    default:
      return state;
  }
}
