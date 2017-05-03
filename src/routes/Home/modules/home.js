import fetch from 'isomorphic-fetch'
import { requestInstance, requestAuthInstance } from '../../auth'

/**
 * Constants
 */
export const REQUEST_NEWS_POSTS = 'REQUEST_NEWS_POSTS'
export const REQUEST_NEWS_SUCCESS = 'REQUEST_NEWS_SUCCESS'
export const REQUEST_NEWS_FAILURE = 'REQUEST_NEWS_FAILURE'

/**
 * Actions
 */

export const requestNewsPosts = () => {
  return {
    type: REQUEST_NEWS_POSTS
  }
}

export const requestNewsSuccess = () => {
  return {
    type: REQUEST_NEWS_SUCCESS,
    payload: {

    }
  }
}

export const requestNewsFailure = () => {
  return {
    type: REQUEST_NEWS_FAILURE
  }
}

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(requestNewsPosts())

    return requestInstance.get('news')
      .then(res => {
        dispatch(requestNewsSuccess(res))
      })
      .catch(err => {
        dispatch(requestNewsFailure())
        console.log(err)
      })
  }
}

export const actions = {
  requestNewsPosts,
  requestNewsSuccess,
  requestNewsFailure,
  fetchNews
}

/**
 * Actions Handlers
 */
const NEWS_ACTION_HANDLERS = {
  [REQUEST_NEWS_POSTS]: (state) => {
    return ({
      ...state,
      isLoading: true
    })
  },
  [REQUEST_NEWS_SUCCESS]: (state, action) => {
    return ({
      ...state,
      isLoading: false
    })
  },
  [REQUEST_NEWS_FAILURE]: (state) => {
    return ({
      ...state,
      isLoading: false
    })
  }
}

/**
 * Reducers
 */
const initialState = {
  isLoading: false,
  news: {
    byId: {
      "defaultNews": {
        id: "defaultNews",
        author: "defaultUser",
        body: "......",
        comments: ["defaultComment"]
      },
    },
    allIds: ["defaultNews"]
  },
  comments: {
    byId: {
      "defaultComment": {
        id: "defaultComment",
        author: "defaultUser",
        comment: ".....",
      }
    },
    allIds: ["defaultComment"]
  },
  users: {
    byId: {
      "defaultUser": {
        username: "defaultUser",
        name: "Default User",
      }
    },
    allIds: ["defaultUser"]
  }
}

export default function homeReducer(state = initialState, action) {
  const handler = NEWS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
