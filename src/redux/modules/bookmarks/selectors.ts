import { RootState } from '@/redux/store';

export const getBookmarksList = (store: RootState) => store.bookmarks;
