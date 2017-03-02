import makeStore from './src/store';
import startServer from './scr/server';

export const store = makeStore();
startServer(store);
//Добавляю команду выполнения запуска сервера через git в package.json
