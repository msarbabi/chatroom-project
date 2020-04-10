import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { messagesReducer } from "./messagesReducer";

export const reducers = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
});
