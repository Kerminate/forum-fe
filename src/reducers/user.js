import * as types from '../types'

const initState = {
  list: [],
  user: {}
}

export function user (state = initState, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return { ...state, ...action.payload }
    case types.GET_USER_LIST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
