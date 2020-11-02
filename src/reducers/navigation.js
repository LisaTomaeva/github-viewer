import { GET_TREE } from "../actions/NavActions.js"

const initialState = {}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case GET_TREE: {
        return {
          ...state,
          tree: action.payload
        }
      }
      default:
        return state
    }
  }