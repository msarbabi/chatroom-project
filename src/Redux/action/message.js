export const getMessages = () => {
    return async (dispatch, getState) => {
        const messages = [...getState().messages];
        await dispatch({ type: "SHOW_MASSEGES", payload: messages });
    };
};

export const addMessage = (name, message) => {
    return async (dispatch, getState) => {
        const messages = [...getState().messages];
        console.log(messages);
        const newMessage = {
            name,
            message,
            date: [new Date().getHours(), new Date().getMinutes()],
            id: Math.floor(Math.random() * 1000),
        };
        messages.push(newMessage);
        await dispatch({ type: "SET_MESSAGE", payload: messages });
    };
};
