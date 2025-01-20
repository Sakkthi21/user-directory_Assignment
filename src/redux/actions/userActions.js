// Action Types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
})

// Async Action Creator
export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch(fetchUsersSuccess(data)))
      .catch(error => dispatch(fetchUsersFailure(error.message)))
  }
}
