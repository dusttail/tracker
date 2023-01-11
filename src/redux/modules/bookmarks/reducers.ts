import { ADD_BOOKMARK, ADD_BOOKMARK_SUCCESS, ARCHIVE_BOOKMARK, ARCHIVE_BOOKMARK_SUCCESS, DELETE_BOOKMARK, DELETE_BOOKMARK_SUCCESS, LOAD_BOOKMARKS_SUCCESS } from './actions';
import { getMockBookmarkList } from './mock/bookmarks_list.mock';

const initialState = {
  data: getMockBookmarkList()
};

export default function bookmarks(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_BOOKMARKS_SUCCESS:
      return state.data;
    case ARCHIVE_BOOKMARK_SUCCESS:
      return { ...state, data: state.data.filter(item => item.id !== action.payload.id) };
    case DELETE_BOOKMARK_SUCCESS:
      return { ...state, data: state.data.filter(item => item.id !== action.payload.id) };
    case ADD_BOOKMARK_SUCCESS:
      return { ...state, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

export const addBookmark = (id: string) => ({ type: ADD_BOOKMARK, payload: { id }, loading: true });
export const archiveBookmark = (id: string) => ({ type: ARCHIVE_BOOKMARK, payload: { id }, loading: true });
export const deleteBookmark = (id: string) => ({ type: DELETE_BOOKMARK, payload: { id }, loading: true });
