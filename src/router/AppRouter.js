import {
    BrowserRouter,
    Routes,
    Route,
    } from "react-router-dom";
import { Home } from "../views/Home";
import { SetValueScreen } from "../views/SetValueScreen";


export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="inspection" element={
                    <SetValueScreen />
                } />

                <Route path="/" element={
                    <Home />
                } /> 
                
            </Routes>
        </BrowserRouter>
    )

}
