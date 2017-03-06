import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();
startServer(store);
//Добавляю команду выполнения запуска сервера через git в package.json

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
