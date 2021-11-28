import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import custom pages
import {
  LandingPage,
  CatalogePage,
  NotFoundPage,
  LoginPage,
  SignupPage,
  ListItemPage,
  ProductPage,
  ViewItemPage,
} from "./pages/index";

// import custom components
import { NavBar } from "./components/index";
import {
  fetchCategories,
  fetchSubCategories,
} from "./store/actions/catalogue.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories.request());
    dispatch(fetchSubCategories.request());
  }, []);
  return (
    <div className="container-fluid app">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<CatalogePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/item/new" element={<ListItemPage />} />
        {/* TODO: change product to productId */}
        <Route path="/view/productId" element={<ProductPage />} />

        <Route path="/view/items" element={<ViewItemPage />} />

        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
};

export default App;
