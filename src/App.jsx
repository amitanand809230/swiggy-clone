import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";       
import SearchBar from "./Pages/SearchBar";
import SignIn from "./Pages/SignIn";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import Footer from "./components/Footer";
import Help from "./Pages/Help";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Category />
              <TopRest />
              <OnlineDelivery />
             
            </>
          }
        />
        <Route path="/signin" element={<SignIn />  } />
         <Route path="/search" element={<SearchBar />} /> 
         <Route path="/help" element={<Help/>}/>
      </Routes>
       <Footer />
    </>
  );
}

export default App;
