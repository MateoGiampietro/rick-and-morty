const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== Number(action.payload)),
                myFavorites: state.allCharacters.filter((char) => char.id !== Number(action.payload))
            }
        case "FILTER":
            if (action.payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filterFavs = state.allCharacters.filter(
                char => char.gender === action.payload
            )
            return {
                ...state,
                myFavorites: filterFavs
            }
        case "ORDER":
            const orderCopy = [...state.myFavorites];
            if(state.payload === "A")
                orderCopy.sort((a, b) => a.id - b.id);
            if(state.payload === "D")
                orderCopy.sort((a, b) => b.id - a.id);
            return {
                ...state,
                myFavorites: orderCopy
            }
    }
};

export default rootReducer;