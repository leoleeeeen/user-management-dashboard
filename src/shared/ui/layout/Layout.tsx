import { Outlet } from "react-router-dom";
import { Toaster } from "../toaster/ui/Toaster";
import { Header } from "../header";

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


