import { useState } from 'react';
import '../styles/box.css'

function box({title, setAge, age, step, errorMessage}) {
    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm'>
                <input type='number' name='age' placeholder='Age (e.g. 25)' className='ageInput' min={1} onChange={(e) => setAge(e.target.value)}></input>
            </div>
            {age === undefined ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;