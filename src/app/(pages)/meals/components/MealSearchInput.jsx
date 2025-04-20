"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search]);

    return (
        <div className={`my-10`}>
            <input type="search" name="search" id="search" placeholder="Enter meal name" autoComplete="off" className={`px-5 py-2.5 text-sm font-medium text-slate-600 border border-gray-200 focus:border-gray-400 rounded-md outline-none w-full`} onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
};

export default MealSearchInput;