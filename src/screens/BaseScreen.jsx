import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { TopBar } from "../components/topBar/TopBar";

export function BaseScreen() {
    return (
        <main>
            <NavBar/>
            <TopBar/>
            <Outlet/>
        </main>
    )
}