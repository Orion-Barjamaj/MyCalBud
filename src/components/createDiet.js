import foods from './food.js';

function GenerateDiet(numOfCals, mealsPerDay, isVegetarian) {
    // Calculate how many calories should be consumed for each meal
    let mealsCal = Math.floor(numOfCals / mealsPerDay);

    // Meal types
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

    // Function to shuffle the foods array (Fisher-Yates)
    function shuffleFoods(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Empty array to store the diet
    let dietPlan = [];

    for (let meal = 0; meal < mealsPerDay; meal++) {
        let mealPlan = [];
        let remainingCal = mealsCal;

        // Determine the current meal type (breakfast, lunch, etc.)
        let currentMealType = mealTypes[meal % mealTypes.length];

        // Filter foods based on the current meal type and vegetarian preference
        let filterFood = foods.filter(food => 
            (isVegetarian ? food.vegetarian : true) && 
            food.category === currentMealType);

        // Shuffle the filtered foods
        let shuffledFoods = shuffleFoods([...filterFood]);

        // Fill the meal plan until the calorie requirement is met
        while (remainingCal > 50 && shuffledFoods.length > 0) {
            let findFood = shuffledFoods.reduce((prev, curr) =>
                Math.abs(curr.calories - remainingCal) < Math.abs(prev.calories - remainingCal)
                ? curr : prev);

            mealPlan.push(findFood);
            remainingCal -= findFood.calories;

            // Remove selected food from shuffledFoods
            shuffledFoods = shuffledFoods.filter(f => f.name !== findFood.name);

            // If we run out of food, reshuffle the list or reuse foods
            if (shuffledFoods.length === 0) {
                shuffledFoods = shuffleFoods([...filterFood]);
            }
        }

        // Add the current meal to the diet plan
        dietPlan.push({
            mealType: currentMealType,  // Use the current meal type (e.g., breakfast, lunch, etc.)
            foods: mealPlan,
            totalCalories: mealsCal - remainingCal,
        });
    }

    return dietPlan;
}

export default GenerateDiet;
