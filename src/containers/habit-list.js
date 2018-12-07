import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectHabit } from '../actions'

class HabitList extends Component {
    render(){
        return (
            <ul>
                <h1>Habits List:</h1>
                <hr></hr>
                {this.props.habitsList.map((habit) => {
                    return (
                        <div key={habit.id} onClick={() => this.props.selectHabit(habit)} className='habit-list-item'>
                            <ul>
                                <li className='habit-list-item-title'>{habit.habitName}</li>
                            </ul>
                            
                            <hr></hr>
                        </div>
                        
                    )
                })}
            </ul>
        )
    }
 }

function mapStateToProps(state) {
     return {
         habitsList: state.habits
     }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectHabit: selectHabit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)
