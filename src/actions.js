import { formatter } from "./helpers";
export const FETCH_CONTACTS = "FETCH_CONTACTS";

export const fetchContacts = () => {
  return async dispatch => {
    try {
      const randomPeopleRes = await fetch(
        "https://randomuser.me/api/?page=5&results=21&seed=abc"
      ).then(data => data.json());
      const { results: randomPeople } = randomPeopleRes;
      //format contacts received from api to fit structure of components (implemented after components were made)
      return dispatch({
        type: FETCH_CONTACTS,
        contacts: formatter(randomPeople)
      });
    } catch (error) {
      console.error(`ERROR IN ACTIONS ${error}`);
    }
  };
};
