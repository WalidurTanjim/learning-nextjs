import { getMeals } from "../../page";

const MealDetailsPage = async ({ params }) => {
    const { idMeal } = params;
    const meals = await getMeals();
    const existMeal = await meals.find(meal => meal?.idMeal === idMeal);

    return (
        <div className={`meal-details`}>
            <img src={existMeal?.strMealThumb} alt="Meal Image" className={`w-full h-[175px] md:h-[250px] xl:h-[350px] rounded-lg border border-gray-300`}/>

            <div className={`mt-5`}>
                <div className="flex items-center justify-between">
                    <h1 className={`text-lg text-slate-700 font-semibold`}>{existMeal?.strMeal} <span className={`text-sm font-semibold text-slate-700`}>({existMeal?.strArea})</span></h1>
                    <p className={`text-xs text-gray-600 inline-block px-2.5 py-[2px] border border-green-600 bg-green-100 rounded-full`}>{existMeal?.strCategory}</p>
                </div>
                <p className={`text-gray-500 text-sm my-2`}>{existMeal?.strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetailsPage;