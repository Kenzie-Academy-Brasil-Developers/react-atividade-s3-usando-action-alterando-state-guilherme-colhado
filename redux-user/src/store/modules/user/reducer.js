const initialState = {name: ''}

// eslint-disable-next-line import/no-anonymous-default-export
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return action.payload.name
        default:
            return state
    }
}
