import {
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
  FETCH_ALL,
} from "../constants/actionTypes";


export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
