import React, {Component} from 'react'
import { connect } from 'react-redux'

class HabitDetail extends Component {
    render(){
        return(
            <div>
                {console.log("Habit detail props output: ", this.props.habit)}
                {/* The below line is returning a JS object - You need to access the properties of the object - . notation isn't working */}
                <h2>{this.props.habit.why}</h2>
            
                
            </div>
            )
    }
}

function mapStateToProps(state){
    return {
        habit: state.activeHabit
    }
}

export default connect(mapStateToProps)(HabitDetail)