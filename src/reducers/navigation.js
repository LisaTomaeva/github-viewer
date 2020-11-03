import { GET_TREE, GET_FOLDER, GET_FILE } from "../actions/NavActions.js"

const initialState = {
    tree: [],
    currentFolder: [],
    currentFile: ''
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case GET_TREE: {
        return {
          ...state,
          tree: action.payload
        }
      }
      case GET_FOLDER: {
        return {
          ...state,
          currentFolder: action.payload
        }
      }
      case GET_FILE: {
        return {
          ...state,
          currentFile: action.payload
        }
      }
      default:
        return state
    }
  }