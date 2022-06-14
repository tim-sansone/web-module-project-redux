import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        case ADD_FAVORITE:
            if(!state.favorites.includes(action.payload)){
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            } else {
                return state;
            }
            
        
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(each => each.id !== action.payload)
            }

        default: return state;
    }
}

export default reducer;