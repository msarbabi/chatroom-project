export const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case "SHOW_MESSAGES":
            return [...action.payload];
        case "SET_MESSAGE":
            return [...action.payload];
        default:
            return state;
    }
};
