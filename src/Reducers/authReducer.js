import { AUTH } from '../Constants';

const initialState = {
  email: '',
  password: '',
  name: '',
  phone: '',
  isSignedIn: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.AUTH_FORM_INPUT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case AUTH.AUTH_SUCCESS:
      return { ...initialState, isSignedIn: true };
    case AUTH.AUTH_ERROR:
      return { ...state, error: action.payload };
    case AUTH.LOGOUT:
      return { ...state, isSignedIn: false };
    case AUTH.CLEAR_ERROR_MESSAGE:
      return { ...state, error: '' };
    case AUTH.CLEAR_AUTH_FORM:
      return { ...state, email: '', password: '', name: '', phone: '' };
    default:
      return state;
  }
};
