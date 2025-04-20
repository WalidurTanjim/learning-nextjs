import MealCard from "@/app/components/MealCard/MealCard";
import MealSearchInput from "./components/MealSearchInput";
import axios from "axios";


const MealsPage = async({ searchParams }) => {
    const query = await searchParams;
    
    const fetchMeals = async () => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`);
            const data = await res.data?.meals || [];
            return data;
        } catch (err) {
            console.error(err);
            return [];
        }
    }
    const meals = await fetchMeals();

    return (
        <section className={`meals w-full`}>
            <div className={`container mx-auto px-6 lg:px-48 py-10`}>
                <h1 className={`text-2xl lg:text-3xl text-slate-700 font-medium`}>All Meals In Here</h1>

                <MealSearchInput />

                <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}>
                    {
                        meals?.map(meal => <MealCard key={meal?.idMeal} meal={meal} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MealsPage;