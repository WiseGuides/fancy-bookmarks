import { ADD_BOOKMARK, DELETE_BOOKMARK } from '../actions/types';

export default function bookmarksReducer( state=[], action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    // Return all bookmarks that aren't in the action.payload.id (which is the one we want to remove)
    case DELETE_BOOKMARK:
      return state.filter(bookmark => bookmark.id !== action.payload.id);
    default:
      return state;
  }
}