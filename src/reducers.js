import {CHANGE_SEARCH_ITEM } from './constants.js';

const initialState = {
  // searchPerson: '',
  searchItem: ''
}

export const searchStuff = (state=initialState, action ={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_ITEM:
      return Object.assign({}, state, {searchItem: action.payload});
    // case CHANGE_SEARCH_PERSON:
    //   return Object.assign({}, state, {searchPerson:action.payload});
    default:
      return state;
  }
}
