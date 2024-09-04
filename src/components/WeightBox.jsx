import { useState } from 'react';
import '../styles/box.css'

function box({title, weight, setWeight, currentWeight, setCurrentWeight, step, errorMessage}) {
    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm verticalAlign'>
                <div className='heightChoose'>
                    <div onClick={() => setWeight('kg')} className='setHeight' style={weight === 'kg' ? {backgroundColor: '#7FB685', color: "white"} : {}}>kg</div>
                    <div onClick={() => setWeight('lbs')} className='setHeight' style={weight === 'lbs' ? {backgroundColor: '#7FB685', color: 'white'} : {}}>lbs</div>
                </div>
                <input type='number' name='weight' placeholder={weight === 'kg' ? 'Weight (e.g. 70kg)' : 'Weight (e.g. 154 lbs)'} className='ageInput' min={1} onChange={(e) => setCurrentWeight(e.target.value)}></input>
            </div>
            {currentWeight === 0 ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;