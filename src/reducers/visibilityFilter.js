import {VisibilityFilters} from '../actions';

const visibilityFilters = (state=VisibilityFilters.SHOW_ALL,action) => {
    console.log(state);
    switch(action.type){
        case 'SET_VISIBILITY_STRING':
            return action.filter
        default :
            return state
    }
}

export default visibilityFilters;