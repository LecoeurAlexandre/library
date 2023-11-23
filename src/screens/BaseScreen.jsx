import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { TopBar } from "../components/topBar/TopBar";
import { Footer } from "../components/footer/Footer";

export function BaseScreen() {
    return (
        <main>
            <NavBar/>
            <TopBar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}