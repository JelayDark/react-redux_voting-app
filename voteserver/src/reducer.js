import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer (state = INITIAL_STATE, action) {
  //Определяет, какую функцию нужно вызвать, и делает это
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return state.update('vote',
                          voteState => vote(voteState, action.entry));
  }
  return state;

}
