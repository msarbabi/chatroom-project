export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...action.payload];
        case "SHOW_USERS":
            return [...action.payload];
        case "REMOVE_USERS":
            return [...action.payload];
        case "REMOVE_USER":
            return [...action.payload];
        default:
            return state;
    }
};
