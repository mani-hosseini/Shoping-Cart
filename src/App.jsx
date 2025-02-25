import { Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Products from "./pages/Products.jsx";
import Header from "./header.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="signup" element={<Signup />} />
                <Route exact path="Products" element={<Products />} />
            </Routes>
        </>
    );
}

export default App;