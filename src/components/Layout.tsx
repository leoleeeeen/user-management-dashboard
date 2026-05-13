import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Toaster } from "./UI/Toaster/Toaster";

export function Layout() {
    return (
        <>
            <Toaster />
            <Header />
            <main className="content">
                <Outlet />
            </main>
        </>
    )
}


