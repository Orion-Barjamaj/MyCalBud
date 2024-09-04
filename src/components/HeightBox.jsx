import { useState } from 'react';
import '../styles/box.css'

function box({title, height, setHeight, currentHeight, setCurrentHeight, step, errorMessage}) {
    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm verticalAlign'>
                <div className='heightChoose'>
                    <div onClick={() => setHeight('cm')} className='setHeight' style={height === 'cm' ? {backgroundColor: '#7FB685', color: "white"} : {}}>Cm</div>
                    <div onClick={() => setHeight('feet')} className='setHeight' style={height === 'feet' ? {backgroundColor: '#7FB685', color: 'white'} : {}}>Feet</div>
                </div>
                <input type='number' name='height' placeholder={height === 'cm' ? 'Height (e.g. 170cm)' : 'Height (e.g. 5.57 feet)'} className='ageInput' min={1} onChange={(e) => setCurrentHeight(e.target.value)}></input>
            </div>
            {currentHeight === 0 ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;