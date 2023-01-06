import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const ping = (state = { isPinging: false }, action: any) => {
    switch (action.type) {
        case 'PING':
            return { isPinging: true };
        case 'PONG':
            return { isPinging: false };
        default:
            return state;
    }
};

export const pingEpic = (action$: Observable<any>) => action$.pipe(
    filter(action => action.type === 'PING'),
    map(() => ({ type: 'PONG' }))
);
