import {
  GET_DATA,
  ADD_ITEM,
  UPDATE_COMMENT,
  DELETE_ITEM,
} from './types';

export const getData = () => {
  return {
    type: GET_DATA
  }
};

export const addItem = title => {
  return {
    type: ADD_ITEM,
    title
  }
};

export const addComment = (id, comment) => {
  return {
    type: UPDATE_COMMENT,
    comment,
    id
  }
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  }
};