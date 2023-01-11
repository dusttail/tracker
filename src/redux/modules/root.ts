import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import appEpics from './app/epics';
import app from './app/reducers';
import bookmarksEpics from './bookmarks/epics';
import bookmarks from './bookmarks/reducers';

export const rootEpic = combineEpics(
    appEpics,
    bookmarksEpics
);

export const rootReducer = combineReducers({
    app,
    bookmarks
});
