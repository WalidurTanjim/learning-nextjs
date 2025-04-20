const page = async({ params }) => {
    const { idMeal } = await params;
    console.log(idMeal);

    return (
        <section className={`meal-details`}>
            <h1>meal details page</h1>
        </section>
    );
};

export default page;