"use client"

import MealCard from "@/app/components/MealCard/MealCard";
import axios from "axios";
import { useEffect, useState } from "react";

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async() => {
        try{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.data?.meals || [];
            setMeals(data);
            return data;
        }catch(err){
            console.error(err);
            return [];
        }
    }

    useEffect(() => {
        fetchMeals();
    }, [search]);

    return (
        <section className={`meals w-full`}>
            <div className={`container mx-auto px-6 lg:px-48 py-10`}>
                <h1 className={`text-2xl lg:text-3xl text-slate-700 font-medium`}>All Meals In Here</h1>

                <div className={`my-10`}>
                    <input type="search" name="search" id="search" placeholder="Enter meal name" autoComplete="off" className={`px-5 py-2.5 text-sm font-medium text-slate-600 border border-gray-200 focus:border-gray-400 rounded-md outline-none w-full`} onChange={(e) => setSearch(e.target.value)} />
                </div>

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