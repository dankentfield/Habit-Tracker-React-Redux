import {combineReducers} from 'redux'
import HabitReducer from './reducers-habit'
import ActiveHabitReducer from './reducer-active-habit'

const allReducers = combineReducers({
    habits: HabitReducer,
    activeHabit: ActiveHabitReducer
})

export default allReducers