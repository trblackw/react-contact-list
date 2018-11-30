import { FETCH_CONTACTS, DELETE_CONTACT } from './actions';

const initialState = {
  contacts: []
};

export default function reducer(state = initialState, action) {
  const { type, contacts } = action;
  switch (type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts
      };
    default:
      return state;
  }
}
