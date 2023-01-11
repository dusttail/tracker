export type ActionReducer<T> = {
  type: T,
  payload: { [x: string]: any; };
};
