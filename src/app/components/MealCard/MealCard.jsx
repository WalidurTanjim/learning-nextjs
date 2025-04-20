import Link from "next/link";

const MealCard = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = meal;

    return (
        <div className={`meal group p-2 border border-gray-300 rounded-lg`}>
            <img src={strMealThumb} alt="Meal Image" className={`w-full h-[125px] rounded-md border border-gray-200`} />

            <div className={`mt-2`}>
                <h1 className={`font-semibold text-slate-700`}>{strMeal}</h1>
                <Link href={`/meals/mealDetails/${idMeal}`}><button type="button" className={`px-3 py-1 text-xs font-medium border border-gray-300 rounded-md mt-2 hover:bg-gray-200 active:bg-white`}>Show Details</button></Link>
            </div>
        </div>
    );
};

export default MealCard;