import React, {Component} from 'react';

class InputHabit extends Component {
    constructor(props){
        super(props);

        this.state = {
                habit: '',
                why: '',
                when: '',
                excuses: '',
                excuseResolutions: '',
                successIndicators: '',
                allHabits: {},
                
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            [e.target.id]: e.target.value
        });

    }

    handleSubmit(e) {
       e.preventDefault();
       const habitState = this.state.habit;
       const whyState = this.state.why;
       const excusesState = this.state.excuses;
       const excuseResolutionsState = this.state.excuseResolutions;
       const successIndicatorsState = this.state.successIndicators;
               
       this.setState({
           allHabits: {
            habit0: {
                habit: habitState,
                why: whyState,
                excuses: excusesState,
                excuseResolutions: excuseResolutionsState,
                successIndicators: successIndicatorsState
            }
           }
       })
      }

  

    render () {
     return (
        <div className='input-list'>
            <form onSubmit={this.handleSubmit}> 
                <p className='input-list-item-label'>What is your new habit?</p><input id='habit' className='input-list-item-input' value={this.state.habit} onChange={this.handleChange}/>
                <p className='input-list-item-label'>Why do you want to do this?</p><input id='why' onChange={this.handleChange}/>
                <p className='input-list-item-label'>When will you do this by?</p><input id='when' onChange={this.handleChange}/>
                <p className='input-list-item-label'>What excuses are you likely to make to avoid doing this?</p><input id='excuses' onChange={this.handleChange}/>
                <p className='input-list-item-label'>How will you overcome these excuses?</p><input id='excuseResolutions' onChange={this.handleChange}/>
                <p className='input-list-item-label'>How do you know you will be successful?</p><input id='successIndicators' onChange={this.handleChange}/>
                <p><button onSubmit={this.handleSubmit} className='button' > ADD NEW HABIT </button></p>
            </form>
        </div>
        )
    }
}

export default InputHabit;