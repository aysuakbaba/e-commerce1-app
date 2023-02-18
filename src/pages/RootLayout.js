import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";


function RootLayout() {
    return(
        <>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}



export default RootLayout