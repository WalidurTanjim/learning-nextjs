import DashboardRoutes from "@/app/components/DashboardRoutes/DashboardRoutes";

const UserDashboardPage = () => {
    return (
        <section className={`user-dashboard`}>
            <DashboardRoutes />

            <h1>User Dashboard page</h1>
        </section>
    );
};

export default UserDashboardPage;