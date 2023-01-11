import { IDLE, LOADING, SET_HEADER_TITLE } from './actions';

const initialState = {
  state: IDLE,
  headerTitle: ''
};

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case IDLE:
      return { ...state, state: IDLE };
    case LOADING:
      return { ...state, state: LOADING };
    case SET_HEADER_TITLE:
      return { ...state, headerTitle: action.payload.headerTitle };
    default:
      return state;
  }
}

export const setHeaderTitle = (value: string) => ({ type: SET_HEADER_TITLE, payload: { headerTitle: value } });
