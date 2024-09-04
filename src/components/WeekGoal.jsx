import { useState } from 'react';
import '../styles/box.css'

function box({title, weeks,setWeeks, step, errorMessage}) {

    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm'>
                <input type='number' name='weeks' placeholder='(e.g. 10)' className='ageInput' min={1} required onChange={(e) => setWeeks(e.target.value)}></input>
            </div>
            {weeks === 0 ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;