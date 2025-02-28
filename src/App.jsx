import {Route, Routes} from "react-router-dom";
import Login from "./pages/login.jsx";
import Products from "./pages/Products.jsx";
import Header from "./header.jsx";
import Signin from "./pages/Signin.jsx";
import ShopProvider from "./components/ShopContext.jsx";
function App() {
    return (
        <ShopProvider>
            <Header/>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="signup" element={<Signin/>}/>
                <Route exact path="Products" element={<Products/>}/>
            </Routes>
        </ShopProvider>
    );
}

export default App;