import NavBar from "../components/navbar";
import '../styles/caloriepage.css'

function CaloriePage(){
    const calories = localStorage.getItem('finalCalories');
    return (
        <>
            <NavBar />
            <div className="Calorie-CalcContainer">
                <div className="calorieDesc">To achive your dream weight you need to consume approximately:</div>
                <div className="calorieIntake">{Math.round(calories)} calories per day</div>
            </div>
            <div className='credits'>Made by <a href='https://github.com/Orion-Barjamaj' target='_blank' className='nameLink'>Orion Barjamaj</a></div>
        </>
    )
}

export default CaloriePage;