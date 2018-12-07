const initialState = {
}

export default function (state=initialState, action) {
    switch (action.type) {
    
    case "HABIT_SELECTED":
        return action.payload
    }
    return state
}
