import { combineEpics, ofType } from 'redux-observable';
import { delay, map, Observable } from 'rxjs';
import { ADD_BOOKMARK, ADD_BOOKMARK_SUCCESS, ARCHIVE_BOOKMARK, ARCHIVE_BOOKMARK_SUCCESS, DELETE_BOOKMARK, DELETE_BOOKMARK_SUCCESS } from './actions';

const addBookmarkEpic = (action$: Observable<any>) => action$.pipe(
    ofType(ADD_BOOKMARK),
    delay(500),
    map((action) => ({ ...action, type: ADD_BOOKMARK_SUCCESS, loading: false }))
);

const archiveBookmarkEpic = (action$: Observable<any>) => action$.pipe(
    ofType(ARCHIVE_BOOKMARK),
    delay(500),
    map((action) => ({ ...action, type: ARCHIVE_BOOKMARK_SUCCESS, loading: false }))
);

const deleteBookmarkEpic = (action$: Observable<any>) => action$.pipe(
    ofType(DELETE_BOOKMARK),
    delay(500),
    map((action) => ({ ...action, type: DELETE_BOOKMARK_SUCCESS, loading: false }))
);

export default combineEpics(addBookmarkEpic, archiveBookmarkEpic, deleteBookmarkEpic);
