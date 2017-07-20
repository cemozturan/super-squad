export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id // equivalent to "id: id" in ES6
  }
  return action;
}
