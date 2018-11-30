import {
  FETCH_CONTACTS,
  DELETE_CONTACT,
  EDIT_CONTACT,
  ADD_CONTACT
} from "./actions";

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
    case ADD_CONTACT:
      return {
        ...state,
        contacts
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts
      };
    default:
      return state;
  }
}
