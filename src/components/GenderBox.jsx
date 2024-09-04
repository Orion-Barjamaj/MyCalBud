import { useState } from 'react';
import '../styles/box.css'

function box({title, gender, setGender, step, errorMessage}) {
    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm'>
                <div className='genderBox' onClick={() => setGender('Men')} style={gender === 'Men' ? {backgroundColor: '#7FB685'} : {backgroundColor: '#7fb68540'}}>
                    <div className='genderImg man'></div>
                    <div className='genderTitle' style={gender === 'Men' ? {color: 'white'} : {color: 'black'}}>Men</div>
                </div>
                <div className='genderBox' onClick={() => setGender('Female')} style={gender === 'Female' ? {backgroundColor: '#7FB685'} : {backgroundColor: '#7fb68540'}}>
                    <div className='genderImg female'></div>
                    <div className='genderTitle'style={gender === 'Female' ? {color: 'white'} : {color: 'black'}}>Female</div>
                </div>
            </div>
            {gender === 'None' ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;