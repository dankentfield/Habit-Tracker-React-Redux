import React from 'react';

export default function InputHabit(props) {
    
     return (
        <div className='input-list'>
            <form > 
                <p className='input-list-item-label'>What is your new habit?</p><input id='habit' className='input-list-item-input'    />
                <p className='input-list-item-label'>Why do you want to do this?</p><input id='why'  />
                <p className='input-list-item-label'>When will you do this by?</p><input id='when' />
                <p className='input-list-item-label'>What excuses are you likely to make to avoid doing this?</p><input id='excuses'  />
                <p className='input-list-item-label'>How will you overcome these excuses?</p><input id='excuseResolutions'  />
                <p className='input-list-item-label'>How do you know you will be successful?</p><input id='successIndicators'  />
                <p><button className='button' > ADD NEW HABIT </button></p>
            </form>
        </div>
        )
    
}