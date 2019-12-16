import { CHANGE_SEARCH_ITEM } from './constants.js'
import {CHANGE_SEARCH_PERSON} from './constants';

export const setSearchItem = (text) => ({
  type: CHANGE_SEARCH_ITEM,
  payload: text
})

export const setSearchPerson = (text) => ({
  type: CHANGE_SEARCH_PERSON,
  payload: text
});
