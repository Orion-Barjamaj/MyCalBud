import { useState } from 'react';
import '../styles/box.css'

function box({title, activityLevel, setActivityLevel, step, errorMessage}) {
    return (
        <div className="box">
            <div className='steps'>{step}</div>
            <h3 className='questionTitle'>{title}</h3>
            <div className='genderForm verticalAlign'>
                <div className="activityLevelBox" onClick={() => setActivityLevel('sedentary')} style={activityLevel === 'sedentary' ? {backgroundColor: '#7FB685'} : {}}>
                    <div className='activityLevelImg sedentary'></div>
                    <div className='activityLevelText'>
                        <div className='activityLevelTitle'>Sedentary</div>
                        <div className='activityLevelDesc'>Little or no exercise, mostly sitting throughout the day (e.g., desk job).</div>
                    </div>
                </div>
                <div className="activityLevelBox" onClick={() => setActivityLevel('lightly-active')} style={activityLevel === 'lightly-active' ? {backgroundColor: '#7FB685'} : {}}>
                    <div className='activityLevelImg lightly-active'></div>
                    <div className='activityLevelText'>
                        <div className='activityLevelTitle'>Lightly Active</div>
                        <div className='activityLevelDesc'>Light exercise or sports 1-3 days a week, or a job that involves some movement.</div>
                    </div>
                </div>
                <div className="activityLevelBox" onClick={() => setActivityLevel('moderately-active')} style={activityLevel === 'moderately-active' ? {backgroundColor: '#7FB685'} : {}}>
                    <div className='activityLevelImg moderately-active'></div>
                    <div className='activityLevelText'>
                        <div className='activityLevelTitle'>Moderately Active</div>
                        <div className='activityLevelDesc'>Moderate exercise or sports 3-5 days a week, or a job that involves a lot of walking or standing.                        </div>
                    </div>
                </div>
                <div className="activityLevelBox" onClick={() => setActivityLevel('very-active')} style={activityLevel === 'very-active' ? {backgroundColor: '#7FB685'} : {}}>
                    <div className='activityLevelImg very-active'></div>
                    <div className='activityLevelText'>
                        <div className='activityLevelTitle'>Very Active</div>
                        <div className='activityLevelDesc'>Hard exercise or sports 6-7 days a week, or a physically demanding job.                        </div>
                    </div>
                </div>
                <div className="activityLevelBox" onClick={() => setActivityLevel('extra-active')} style={activityLevel === 'extra-active' ? {backgroundColor: '#7FB685'} : {}}>
                    <div className='activityLevelImg extra-active'></div>
                    <div className='activityLevelText'>
                        <div className='activityLevelTitle'>Extra Active</div>
                        <div className='activityLevelDesc'>Very hard exercise, physically demanding activities, or training for a specific sport daily, plus a physically active job.                        </div>
                    </div>
                </div>
            </div>
            {activityLevel === 'none' ? <div className='error'>* {errorMessage}</div> : <div className='error'></div>}
        </div>
    )
}

export default box;