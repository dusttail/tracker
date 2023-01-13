import { RootState } from '@/redux/store';

export const getBookmarksList = (store: RootState) => ({ data: store.bookmarks.data });
