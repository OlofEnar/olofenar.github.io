import {Routes, Route, Navigate} from "react-router-dom";
import AboutPage from "@/pages/About/AboutPage.tsx";
import Layout from "./components/layout/Layout";
import DesignPage from "@/pages/DesignPage.tsx";
import CodingPage from "@/pages/CodingPage.tsx";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Navigate to="/design" replace/>}/>
                <Route path="/design" element={<DesignPage/>}/>
                <Route path="/coding" element={<CodingPage/>}/>
            </Route>

            <Route element={<Layout variant="narrow"/>}>
                <Route path="/about" element={<AboutPage/>}/>
            </Route>
        </Routes>
    );
}
