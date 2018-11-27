import React from 'react';
import { generateId } from '../lib'
import {
  GET_DATA,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_COMMENT
} from '../../src/actions/types';

const initialState = [
  {
    id: generateId(),
    title: 'First item for testing App First item for testing App First item for testing App',
    comments: [
      'My first comment!',
      'My second comment, lol:D'
    ]
  },
  {
    id: generateId(),
    title: 'Second item for testing App',
    comments: [
      'My first comment for second item!',
      'My second comment for second item, lol:d'
    ]
  },
  {
    id: generateId(),
    title: 'item for testing',
    comments: [
      'My first comment for second item!',
    ]
  },
];

const itemsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return state;
    }
    case ADD_ITEM: {
      return state;
    }
    case DELETE_ITEM: {
      return state;
    }
    case UPDATE_COMMENT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default itemsData;