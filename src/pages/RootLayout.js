import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


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