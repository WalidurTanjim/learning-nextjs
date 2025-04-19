
import axios from "axios";
import MealCard from "@/app/components/MealCard/MealCard";

const MealsPage = async () => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        const data = await res.data.meals;

    return (
        <section className={`meals-page w-full`}>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 text-center`}>All Meals In Here</h1>

            <div className={`mt-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}>
                {
                    data?.map(meal => <MealCard key={meal?.idMeal} meal={meal} />)
                }
            </div>
        </section>
    );
};

export default MealsPage;