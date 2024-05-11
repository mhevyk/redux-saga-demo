const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const USER_ACTIONS = {
  FETCH_USERS: "FETCH_USERS",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_USERS: "SET_USERS",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case USER_ACTIONS.SET_USERS:
      return { ...state, users: action.payload };
    case USER_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const fetchUsers = () => ({ type: USER_ACTIONS.FETCH_USERS });

export const setLoading = (payload) => ({
  type: USER_ACTIONS.SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: USER_ACTIONS.SET_ERROR,
  payload,
});

export const setUsers = (payload) => ({
  type: USER_ACTIONS.SET_USERS,
  payload,
});
