import Link from "next/link";

const MealCard = ({ meal }) => {
    return (
        <div className={`meal p-2 border border-gray-300 rounded-lg hover:shadow-xl`}>
            <img src={meal?.strMealThumb} alt="Meal Image" className={`w-full h-[120px] rounded-md`}/>

            <div className={`mt-3`}>
                <h1 className={`text-lg text-semibold text-slate-700`}>{meal?.strMeal}</h1>
                <p className={`text-sm text-gray-500 my-1`}>{meal?.strInstructions.length > 85 ? meal?.strInstructions.slice(0, 85) : meal?.strInstructions}</p>
                <Link href={`/meals/${meal?.idMeal}`}><button className={`px-4 py-1.5 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 active:bg-slate-700 rounded-md`}>See Details</button></Link>
            </div>
        </div>
    );
};

export default MealCard;