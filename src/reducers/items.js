import React from 'react';
import { AsyncStorage } from 'react-native';
import { generateId } from '../lib'
import {
  GET_DATA,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_COMMENT
} from '../../src/actions/types';

const initialState = [];

const itemsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      if (action.items) {
        return action.items;
      }
      return state;
    }
    case ADD_ITEM: {
      const nextState = [
        ...state,
        {
          id: generateId(),
          title: action.title,
          comments: []
        }
      ];

      AsyncStorage.setItem('items', JSON.stringify(nextState));

      return nextState;
    }
    case DELETE_ITEM: {
      const nextState = JSON.parse(JSON.stringify(state));

      nextState.forEach((item, i) => {
        if (item.id === action.id) {
          nextState.splice(i, 1)
        }
      });

      AsyncStorage.setItem('items', JSON.stringify(nextState));

      return nextState;
    }
    case UPDATE_COMMENT: {
      const newState = JSON.parse(JSON.stringify(state));

      newState.forEach((item, i) => {
        if (item.id === action.id) {
          newState[i].comments.push(action.comment)
        }
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default itemsData;