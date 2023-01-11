import { IDLE, LOADING } from './actions';

const initialState = {
  state: IDLE
};

export default function app(state = initialState, action: any) {
  switch (action.type) {
    case IDLE:
      return { ...state, state: IDLE };
    case LOADING:
      return { ...state, state: LOADING };
    default:
      return state;
  }
}
