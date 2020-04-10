export const showUser = () => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        await dispatch({ type: "SHOW_USERS", payload: users });
    };
};

export const removeUsers = () => {
    return async (dispatch) => {
        await dispatch({ type: "REMOVE_USERS", payload: [] });
    };
};

export const addUser = (name) => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const user = {
            id: Math.floor(Math.random() * 1000),
            name,
        };
        if (name !== "" && user.name !== " ") {
            users.push(user);
            await dispatch({ type: "ADD_USER", payload: users });
        }
    };
};

export const removeUser = (userId) => {
    return async (dispatch, getstate) => {
        const users = [...getstate().users];
        const filteredUser = users.filter((p) => p.id !== userId);
        await dispatch({ type: "REMOVE_USER", payload: filteredUser });
    };
};
