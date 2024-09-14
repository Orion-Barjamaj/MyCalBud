import NavBar from "../components/navbar";
import '../styles/caloriepage.css'
import Diet from '../components/createDiet.js';

function CaloriePage(){
    const calories = localStorage.getItem('finalCalories');
    document.body.style.overflow = 'visible';
    const html = document.querySelector('html');
    html.style.overflow = 'visible';
    let diet = Diet(calories, 3, false);
    console.log(diet);
    return (
        <>
            <NavBar></NavBar>
                <div className="Calorie-CalcContainer">
                <div className="calorieDesc">To achive your dream weight you need to consume approximately:</div>
                <div className="calorieIntake">{Math.round(calories)} calories per day</div>
                <div className="dietContainer">
                    <div className="mealTime">
                        <div className="mealName">Breakfast</div>
                        {diet[0].foods.map((food) =>
                        <div className="foodContainer" key={food.name}>
                            <div className="foodImg" style={{backgroundImage: `url("${food.img}")`}}></div>
                            <div className="foodName">{food.name}</div>
                            <div className="foodInfoContainer">
                                <div className="grams foodInfo">{food.grams} Grams </div>
                                <div className="calories foodInfo">{food.calories} Calories </div>
                                <div className="protein foodInfo">{food.protein} Protein </div>
                                <div className="fats foodInfo">{food.fats} Fats</div>
                            </div>
                        </div>)}
                    </div>
                    <div className="mealTime">
                        <div className="mealName">Lunch</div>
                        {diet[1].foods.map((food) =>
                        <div className="foodContainer" key={food.name}>
                            <div className="foodImg" style={{backgroundImage: `url("${food.img}")`}}></div>
                            <div className="foodName">{food.name}</div>
                            <div className="foodInfoContainer">
                                <div className="grams foodInfo">{food.grams} Grams </div>
                                <div className="calories foodInfo">{food.calories} Calories </div>
                                <div className="protein foodInfo">{food.protein} Protein </div>
                                <div className="fats foodInfo">{food.fats} Fats</div>
                            </div>
                        </div>)}
                    </div>
                    <div className="mealTime">
                        <div className="mealName">Dinner</div>
                        {diet[2].foods.map((food) =>
                        <div className="foodContainer" key={food.name}>
                            <div className="foodImg" style={{backgroundImage: `url("${food.img}")`}}></div>
                            <div className="foodName">{food.name}</div>
                            <div className="foodInfoContainer">
                                <div className="grams foodInfo">{food.grams} Grams </div>
                                <div className="calories foodInfo">{food.calories} Calories </div>
                                <div className="protein foodInfo">{food.protein} Protein </div>
                                <div className="fats foodInfo">{food.fats} Fats</div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaloriePage;