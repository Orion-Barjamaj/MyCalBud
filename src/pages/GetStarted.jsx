import { act, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import GenderBox from '../components/GenderBox.jsx'
import AgeBox from '../components/AgeBox.jsx'
import HeightBox from '../components/HeightBox.jsx'
import WeightBox from '../components/WeightBox.jsx'
import GoalBox from '../components/GoalBox.jsx'
import WeekBox from '../components/WeekGoal.jsx'
import ActivityLevelBox from '../components/ActivityLevelBox.jsx'
import NavBar from '../components/navbar.jsx';
import '../styles/getstarted.css';

function GetStarted(){
    const [haveErrors, setHaveErrors] = useState(true);
    const [weight, setWeight] = useState('kg'); //Sets mesurement type for weight
    const [gender, setGender] = useState('None'); //Sets gender
    const [age, setAge] = useState(); //Sets age
    const [height, setHeight] = useState('cm'); //Sets mesurement type for weight
    const [activityLevel, setActivityLevel] = useState('none'); //Sets activity level
    const [currentWeight, setCurrentWeight] = useState(0); //Sets weight
    const [currentHeight, setCurrentHeight] = useState(0); //Sets height
    const [goalWeight, setGoalWeight] = useState(0); //Sets goal weight
    const [weeks, setWeeks] = useState(0); //Sets in how many weeks do you want to achive goal weight
    const name = localStorage.getItem('name')
    document.body.style.overflow = 'visible';
    const html = document.querySelector('html');
    html.style.overflow = 'visible';

    useEffect(() => {
        const errors = document.querySelectorAll('.error');
        console.log(haveErrors);
        if ([...errors].every(el => el.textContent !== '')) {
            setHaveErrors(true);
        } else if([...errors].every(el => el.textContent === '')){
            setHaveErrors(false);
            calculateCalories();
        }
    }, [weeks, goalWeight, currentHeight, currentWeight, age])

    const calculateBMR = () => {
        let BMR = 0;
    
        const weightInKg = weight === 'lbs' ? Math.round(currentWeight / 2.205) : currentWeight;
        const heightInCm = height === 'feet' ? Math.round(currentHeight * 30.48) : currentHeight;
    
        if (gender === 'Men') {
            BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5;
        } else if (gender === 'Female') {
            BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
        }
    
        return BMR;
    }
    
    const calculateTDEE = () => {
        const BMR = calculateBMR();
        let TDEE = 0;
    
        switch (activityLevel) {
            case 'sedentary':
                TDEE = BMR * 1.2;
                break;
            case 'lightly-active':
                TDEE = BMR * 1.375;
                break;
            case 'moderately-active':
                TDEE = BMR * 1.55;
                break;
            case 'very-active':
                TDEE = BMR * 1.725;
                break;
            case 'extra-active':
                TDEE = BMR * 1.9;
                break;
            default:
                TDEE = BMR;
        }
    
        return TDEE;
    }
    
    const calculateCalories = () => {
        const difference = currentWeight - goalWeight;
        const TDEE = calculateTDEE();
        const weightDifference = Math.abs(currentWeight - goalWeight); // Absolute value in kg
        const totalCaloriesNeeded = weightDifference * 7700; // Total calorie change needed
        const dailyCaloricAdjustment = (totalCaloriesNeeded / (weeks * 7)); // Spread over the number of days
        let finalCalories = 0;

        if (difference > 0) {
            finalCalories = TDEE - dailyCaloricAdjustment; 
        } else if (difference < 0) {
            finalCalories = TDEE + dailyCaloricAdjustment;
        }
        if (finalCalories < 1200) {
            finalCalories = 1200; 
        }

        localStorage.setItem('finalCalories', finalCalories);

        return Math.round(finalCalories);
    }
    
    return (
        <>
            <NavBar></NavBar>
            <h1>Hello {name}!</h1>
            <h2 className='getStartedDesc'>Let’s walk through the steps to find your daily calorie intake!</h2>
            <form className='formContainer'>
                <GenderBox title={'Select your Gender:'} gender={gender} setGender={setGender} step={'1'} errorMessage={'Please Choose Your Gender!'}></GenderBox>
                <AgeBox title={'Enter your Age:'} age={age} setAge={setAge} step={'2'} errorMessage={'Please Enter Your Age!'}></AgeBox>
                <HeightBox title={'Enter your Height:'} height={height} currentHeight={currentHeight} setHeight={setHeight} setCurrentHeight={setCurrentHeight} step={'3'} errorMessage={'Please Enter Your Height!'}></HeightBox>
                <WeightBox title={'Enter your Weight:'} weight={weight} setWeight={setWeight} currentWeight={currentWeight} setCurrentWeight={setCurrentWeight} step={'4'} errorMessage={'Please Enter Your Weight!'}></WeightBox>
                <ActivityLevelBox title={'Choose your Activity Level:'} activityLevel={activityLevel} setActivityLevel={setActivityLevel} step={'5'} errorMessage={'Please Select Your Activity Level!'}></ActivityLevelBox>
                <GoalBox title={'Enter your Weight Goal:'} weight={weight} setWeight={setWeight} goalWeight={goalWeight} setGoalWeight={setGoalWeight} step={'6'} errorMessage={'Please Enter Your Goal Weight!'}></GoalBox>
                <WeekBox title={'How many weeks do you want to achieve your goal?'} setWeeks={setWeeks} weeks={weeks} step={'7'} errorMessage={'Please Enter a Number of Week!'}></WeekBox>
                <Link to = {haveErrors === false ? '/Daily-Calorie-Intake' : ''}><button className='submitBtn' step={'8'}>Calculate Calories</button></Link>
            </form>
        </>
    )
}

export default GetStarted;